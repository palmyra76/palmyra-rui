import { getValueByKey as I, setValueByKey as P } from "../palmyra/form/FormUtil.js";
import U from "../palmyra/validator/DataValidator.js";
import { useState as E, useRef as k, useEffect as G, useMemo as D } from "react";
import { mergeDeep as _ } from "../palmyra/utils/index.js";
import { getLookupStore as W } from "../palmyra/form/PalmyraStoreManager.js";
import { getFormatConverter as X } from "../palmyra/utils/converter/FormatterFactory.js";
const it = {
  getFieldRef: function(t) {
  },
  addFieldRef: function(t, s) {
  }
}, ut = {
  getFormHelper: function() {
    return J();
  },
  getEventListeners: function(t) {
    return {};
  },
  getValueListeners: function(t) {
    return {};
  }
}, Y = {
  onChange: function(t, s) {
  }
}, Z = {
  onValue: function(t, s, m) {
  }
}, $ = (t, s) => s ?? (t.defaultValue || "");
function H(t, s, m, c, i, h, V) {
  const S = h || Y, M = V || Z, y = X(t), [N, g] = E(s), [F, C] = E(O(s)), [p, b] = E({ status: !1, message: "" }), B = k(null);
  var L, v;
  if (t.mutant) {
    const [e, n] = E({
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    });
    L = e, v = n;
  } else
    L = {
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    }, v = (e) => {
      console.warn("Operation ignored, set mutant={true} in '" + t.attribute + "' field definition");
    };
  G(() => {
    g(s), C(O(s));
  }, [s]);
  function O(e) {
    return y.parse($(t, e));
  }
  const K = (e) => {
    console.log("validating ", e);
    const n = l(e), A = t.attribute, z = t.name || A;
    if (m) {
      const Q = y.format(e);
      m(A, Q, { [A]: n.status });
    }
    S.onChange(z, e, n.status), M.onValue(z, e, n.status);
  }, q = (e, n) => {
    C(e || ""), n && (clearTimeout(B.current), B.current = setTimeout(function() {
      K(e);
    }, 300));
  }, T = () => y.format(F), u = (e) => {
    if (c && c instanceof Function) {
      const n = c(e);
      if (!n.status)
        return n;
    }
    return { status: !0, message: "" };
  }, o = (e) => {
    d({
      status: !e.status,
      message: e.message
    });
  }, l = (e) => {
    const n = u(e);
    return n.status && i != null && i.asyncValid ? (r(), i.asyncValid(e, a, d)) : o(n), n;
  }, a = (e) => {
  }, f = () => {
    p.message != "" && b({
      status: p.status,
      message: ""
    });
  }, r = () => {
    d({
      status: !1,
      message: ""
    });
  }, d = (e) => {
    e.status ? b(e) : b({
      status: !1,
      message: ""
    });
  }, w = { onBlur: () => {
    l(F);
  }, onFocus: () => {
    f();
  }, onValueChange: (e) => {
    q(e, !0);
  } };
  return G(() => {
    var e = t.attribute;
    const n = u(F);
    m(void 0, void 0, { [e]: n.status });
  }, []), { data: F, setData: q, getData: T, error: p, eventListeners: w, mutateOptions: L, setMutateOptions: v };
}
function ct(t) {
  return {
    onBlur: t.onBlur,
    onFocus: t.onFocus,
    onChange: (s) => t.onValueChange(s.target.value)
  };
}
function J() {
  const t = D(() => ({}), []);
  return { addFieldRef: (c, i) => {
    t[c] = i;
  }, getFieldRef: (c) => {
    const i = t[c];
    if (i)
      return i.current;
  } };
}
function lt(t, s, m, c, i) {
  const h = i || { eventListeners: {}, valueListeners: {} }, V = D(() => ({}), []), S = c || J();
  var M = {}, y = {};
  const N = k(!1);
  var g = k(_({}, t));
  const F = s;
  var C = k({}), p = C.current, b = {};
  (() => m && m == "new")() && _(g.current, b);
  const L = (u, o, l) => {
    u && P(u, g.current, o), p = Object.assign({}, p, l);
    const a = v(p);
    a != N.current && (N.current = a, F && F(a));
  }, v = (u) => {
    for (var o in u)
      if (u[o] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: D(() => (g.current = _({}, t), (o, l, a) => {
    var f = o.name || o.attribute, r = { ...o, type: l };
    a && (S.addFieldRef(f, a), V[f] = a);
    const d = U(r);
    M[r.attribute] = r, y[r.attribute] = d;
    const j = o.eventListener || h.eventListeners[f], x = h.valueListeners[f];
    var R = H(
      r,
      I(r.attribute, g.current),
      L,
      d,
      void 0,
      j,
      x
    );
    try {
      tt(r) && (R.store = W(r));
    } catch (e) {
      console.error("Error while getting LookupStore for attribute" + r.attribute, e);
    }
    if (r.type == "serverlookup") {
      var w = r.displayAttribute || r.attribute;
      R.displayValue = I(w, t), R.setDisplayValue = (e) => {
        r.displayAttribute != r.attribute && P(r.displayAttribute, g.current, e);
      };
    }
    return R;
  }), [t]), getFormData: (u) => {
    var f;
    const o = u || "id", l = (f = g.current) == null ? void 0 : f[o];
    var a = l ? { [o]: l } : {};
    for (const r in V) {
      const d = V[r].current;
      d.getValue && P(r, a, d.getValue());
    }
    return a;
  }, initForm: () => {
  }, isFormValid: () => v(p) };
}
const ft = () => {
  console.log("test");
};
function tt(t) {
  var s;
  return !!((s = t.storeOptions) != null && s.endPoint);
}
export {
  Y as N,
  ft as P,
  it as a,
  ut as b,
  Z as c,
  lt as d,
  J as e,
  ct as f,
  H as g
};
