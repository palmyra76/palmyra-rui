import { getValueByKey as I, setValueByKey as w } from "../palmyra/form/FormUtil.js";
import T from "../palmyra/validator/DataValidator.js";
import { useState as k, useEffect as G, useMemo as _, useRef as A } from "react";
import { delay as U, mergeDeep as P } from "../palmyra/utils/index.js";
import { getLookupStore as W } from "../palmyra/form/PalmyraStoreManager.js";
import { getFormatConverter as X } from "../palmyra/utils/converter/FormatterFactory.js";
const it = {
  getFieldRef: function(t) {
  },
  addFieldRef: function(t, n) {
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
  onChange: function(t, n) {
  }
}, Z = {
  onValue: function(t, n, f) {
  }
}, $ = (t, n) => n ?? (t.defaultValue || "");
function H(t, n, f, c, i, h, V) {
  const S = h || Y, M = V || Z, y = X(t), [N, d] = k(n), [p, C] = k(R(n)), [m, b] = k({ status: !1, message: "" });
  var E, L;
  if (t.mutant) {
    const [e, s] = k({
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    });
    E = e, L = s;
  } else
    E = {
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    }, L = (e) => {
      console.warn("Operation ignored, set mutant={true} in '" + t.attribute + "' field definition");
    };
  G(() => {
    d(n), C(R(n));
  }, [n]);
  function R(e) {
    return y.parse($(t, e));
  }
  const D = (e) => {
    console.log("validating ", e);
    const s = o(e), q = t.attribute, z = t.name || q;
    if (f) {
      const Q = y.format(e);
      f(q, Q, { [q]: s.status });
    }
    S.onChange(z, e, s.status), M.onValue(z, e, s.status);
  }, B = (e, s) => {
    C(e || ""), s && U(() => D(e));
  }, K = () => y.format(p), O = (e) => {
    if (c && c instanceof Function) {
      const s = c(e);
      if (!s.status)
        return s;
    }
    return { status: !0, message: "" };
  }, u = (e) => {
    r({
      status: !e.status,
      message: e.message
    });
  }, o = (e) => {
    const s = O(e);
    return s.status && i != null && i.asyncValid ? (l(), i.asyncValid(e, g, r)) : u(s), s;
  }, g = (e) => {
  }, a = () => {
    m.message != "" && b({
      status: m.status,
      message: ""
    });
  }, l = () => {
    r({
      status: !1,
      message: ""
    });
  }, r = (e) => {
    e.status ? b(e) : b({
      status: !1,
      message: ""
    });
  }, v = { onBlur: () => {
    o(p);
  }, onFocus: () => {
    a();
  }, onValueChange: (e) => {
    B(e, !0);
  } };
  return G(() => {
    var e = t.attribute;
    const s = O(p);
    f(void 0, void 0, { [e]: s.status });
  }, []), { data: p, setData: B, getData: K, error: m, eventListeners: v, mutateOptions: E, setMutateOptions: L };
}
function ct(t) {
  return {
    onBlur: t.onBlur,
    onFocus: t.onFocus,
    onChange: (n) => t.onValueChange(n.target.value)
  };
}
function J() {
  const t = _(() => ({}), []);
  return { addFieldRef: (c, i) => {
    t[c] = i;
  }, getFieldRef: (c) => {
    const i = t[c];
    if (i)
      return i.current;
  } };
}
function lt(t, n, f, c, i) {
  const h = i || { eventListeners: {}, valueListeners: {} }, V = _(() => ({}), []), S = c || J();
  var M = {}, y = {};
  const N = A(!1);
  var d = A(P({}, t));
  const p = n;
  var C = A({}), m = C.current, b = {};
  (() => f && f == "new")() && P(d.current, b);
  const L = (u, o, g) => {
    u && w(u, d.current, o), m = Object.assign({}, m, g);
    const a = R(m);
    a != N.current && (N.current = a, p && p(a));
  }, R = (u) => {
    for (var o in u)
      if (u[o] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: _(() => (d.current = P({}, t), (o, g, a) => {
    var l = o.name || o.attribute, r = { ...o, type: g };
    a && (S.addFieldRef(l, a), V[l] = a);
    const F = T(r);
    M[r.attribute] = r, y[r.attribute] = F;
    const j = o.eventListener || h.eventListeners[l], x = h.valueListeners[l];
    var v = H(
      r,
      I(r.attribute, d.current),
      L,
      F,
      void 0,
      j,
      x
    );
    try {
      tt(r) && (v.store = W(r));
    } catch (s) {
      console.error("Error while getting LookupStore for attribute" + r.attribute, s);
    }
    if (r.type == "serverlookup") {
      var e = r.displayAttribute || r.attribute;
      v.displayValue = I(e, t), v.setDisplayValue = (s) => {
        r.displayAttribute != r.attribute && w(r.displayAttribute, d.current, s);
      };
    }
    return v;
  }), [t]), getFormData: (u) => {
    var l;
    const o = u || "id", g = (l = d.current) == null ? void 0 : l[o];
    var a = g ? { [o]: g } : {};
    for (const r in V) {
      const F = V[r].current;
      F.getValue && w(r, a, F.getValue());
    }
    return a;
  }, initForm: () => {
  }, isFormValid: () => R(m) };
}
const ft = () => {
  console.log("test");
};
function tt(t) {
  var n;
  return !!((n = t.storeOptions) != null && n.endPoint);
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
