import { getValueByKey as I, setValueByKey as _ } from "../palmyra/form/FormUtil.js";
import T from "../palmyra/validator/DataValidator.js";
import { useState as S, useEffect as G, useMemo as D, useRef as K } from "react";
import { delay as U, mergeDeep as P } from "../palmyra/utils/index.js";
import { getLookupStore as W } from "../palmyra/form/PalmyraStoreManager.js";
import { getFormatConverter as X } from "../palmyra/utils/converter/FormatterFactory.js";
const it = {
  getFieldRef: function(t) {
  },
  addFieldRef: function(t, r) {
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
  onChange: function(t, r) {
  }
}, Z = {
  onValue: function(t, r, f) {
  }
}, $ = (t, r) => r ?? (t.defaultValue || "");
function H(t, r, f, l, i, h, V) {
  const M = h || Y, N = V || Z, y = X(t), [B, d] = S(r), [p, E] = S(R(r)), [m, b] = S({ status: !1, message: "" });
  var C, L;
  if (t.mutant) {
    const [e, n] = S({
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    });
    C = e, L = n;
  } else
    C = {
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    }, L = (e) => {
      console.warn("Operation ignored, set mutant={true} in '" + t.attribute + "' field definition");
    };
  G(() => {
    d(r), E(R(r));
  }, [r]);
  function R(e) {
    return y.parse($(t, e));
  }
  const O = (e, n) => {
    E(e || ""), n && U(() => {
      u(e);
      const F = t.attribute, z = t.name || F, A = k(e);
      if (f) {
        const Q = y.format(e);
        f(F, Q, { [F]: A.status });
      }
      M.onChange(z, e, A.status), N.onValue(z, e, A.status);
    });
  }, j = () => y.format(p), k = (e) => {
    if (l && l instanceof Function) {
      const n = l(e);
      if (!n.status)
        return n;
    }
    return { status: !0, message: "" };
  }, q = (e) => {
    c({
      status: !e.status,
      message: e.message
    });
  }, u = (e) => {
    const n = k(e);
    n.status && i != null && i.asyncValid ? (a(), i.asyncValid(e, o, c)) : q(n);
  }, o = (e) => {
  }, g = () => {
    m.message != "" && b({
      status: m.status,
      message: ""
    });
  }, a = () => {
    c({
      status: !1,
      message: ""
    });
  }, c = (e) => {
    e.status ? b(e) : b({
      status: !1,
      message: ""
    });
  }, w = { onBlur: () => {
    u(p);
  }, onFocus: () => {
    g();
  }, onValueChange: (e) => {
    O(e, !0);
  } };
  return G(() => {
    var e = t.attribute;
    const n = k(p);
    f(void 0, void 0, { [e]: n.status });
  }, []), { data: p, setData: O, getData: j, error: m, eventListeners: w, mutateOptions: C, setMutateOptions: L };
}
function ct(t) {
  return {
    onBlur: t.onBlur,
    onFocus: t.onFocus,
    onChange: (r) => t.onValueChange(r.target.value)
  };
}
function J() {
  const t = D(() => ({}), []);
  return { addFieldRef: (l, i) => {
    t[l] = i;
  }, getFieldRef: (l) => {
    const i = t[l];
    if (i)
      return i.current;
  } };
}
function lt(t, r, f, l, i) {
  const h = i || { eventListeners: {}, valueListeners: {} }, V = D(() => ({}), []), M = l || J();
  var N = {}, y = {};
  const B = K(!1);
  var d = K(P({}, t));
  const p = r;
  var E = K({}), m = E.current, b = {};
  (() => f && f == "new")() && P(d.current, b);
  const L = (u, o, g) => {
    u && _(u, d.current, o), m = Object.assign({}, m, g);
    const a = R(m);
    a != B.current && (B.current = a, p && p(a));
  }, R = (u) => {
    for (var o in u)
      if (u[o] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: D(() => (d.current = P({}, t), (o, g, a) => {
    var c = o.name || o.attribute, s = { ...o, type: g };
    a && (M.addFieldRef(c, a), V[c] = a);
    const v = T(s);
    N[s.attribute] = s, y[s.attribute] = v;
    const x = o.eventListener || h.eventListeners[c], w = h.valueListeners[c];
    var e = H(
      s,
      I(s.attribute, d.current),
      L,
      v,
      void 0,
      x,
      w
    );
    try {
      tt(s) && (e.store = W(s));
    } catch (F) {
      console.error("Error while getting LookupStore for attribute" + s.attribute, F);
    }
    if (s.type == "serverlookup") {
      var n = s.displayAttribute || s.attribute;
      e.displayValue = I(n, t), e.setDisplayValue = (F) => {
        s.displayAttribute != s.attribute && _(s.displayAttribute, d.current, F);
      };
    }
    return e;
  }), [t]), getFormData: (u) => {
    var c;
    const o = u || "id", g = (c = d.current) == null ? void 0 : c[o];
    var a = g ? { [o]: g } : {};
    for (const s in V) {
      const v = V[s].current;
      v.getValue && _(s, a, v.getValue());
    }
    return a;
  }, initForm: () => {
  }, isFormValid: () => R(m) };
}
const ft = () => {
  console.log("test");
};
function tt(t) {
  var r;
  return !!((r = t.storeOptions) != null && r.endPoint);
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
