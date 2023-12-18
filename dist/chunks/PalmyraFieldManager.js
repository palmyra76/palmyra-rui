import { useMemo as _, useRef as h, useState as A, useEffect as Q } from "react";
import { getValueByKey as z, setValueByKey as D } from "../palmyra/form/FormUtil.js";
import U from "../palmyra/validator/DataValidator.js";
import { getFormatConverter as W } from "../palmyra/utils/converter/FormatterFactory.js";
import { mergeDeep as K } from "../palmyra/utils/index.js";
import { getLookupStore as X } from "../palmyra/form/PalmyraStoreManager.js";
function G() {
  const t = _(() => ({}), []);
  return { addFieldRef: (l, u) => {
    t[l] = u;
  }, getFieldRef: (l) => {
    const u = t[l];
    if (u)
      return u.current;
  } };
}
function it(t, n, m, l, u) {
  const M = u || { eventListeners: {}, valueListeners: {} }, y = _(() => ({}), []), F = l || G();
  var N = {}, b = {};
  const g = h(!1);
  var v = h(K({}, t));
  const V = n;
  var L = h({}), p = L.current, C = {};
  (() => m && m == "new")() && K(v.current, C);
  const R = (i, o, f) => {
    i && D(i, v.current, o), p = Object.assign({}, p, f);
    const a = S(p);
    a != g.current && (g.current = a, V && V(a));
  }, S = (i) => {
    for (var o in i)
      if (i[o] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: _(() => (v.current = K({}, t), (o, f, a) => {
    var d = o.name || o.attribute, s = { ...o, type: f };
    a && (F.addFieldRef(d, a), y[d] = a);
    const c = U(s);
    N[s.attribute] = s, b[s.attribute] = c;
    const T = o.eventListener || M.eventListeners[d], j = M.valueListeners[d];
    var B = tt(
      s,
      z(s.attribute, v.current),
      R,
      c,
      void 0,
      T,
      j
    );
    try {
      Y(s) && (B.store = X(s));
    } catch (k) {
      console.error("Error while getting LookupStore for attribute" + s.attribute, k);
    }
    if (s.type == "serverlookup") {
      var q = s.displayAttribute || s.attribute;
      const k = z(q, t);
      B.setMeta("displayValue", k);
    }
    return B;
  }), [t]), getFormData: (i) => {
    var d;
    const o = i || "id", f = (d = v.current) == null ? void 0 : d[o];
    var a = f ? { [o]: f } : {};
    for (const s in y) {
      const c = y[s].current;
      c != null && c.getValue && D(s, a, c.getValue());
    }
    return a;
  }, isFormValid: () => S(p) };
}
function Y(t) {
  var n;
  return !!((n = t.storeOptions) != null && n.endPoint);
}
const ct = {
  getFieldRef: function(t) {
  },
  addFieldRef: function(t, n) {
  }
}, lt = {
  getFormHelper: function() {
    return G();
  },
  getEventListeners: function(t) {
    return {};
  },
  getValueListeners: function(t) {
    return {};
  }
}, Z = {}, $ = {
  onValue: function(t, n, m) {
  }
}, H = (t, n) => n ?? (t.defaultValue || "");
function tt(t, n, m, l, u, M, y) {
  const F = M || Z, N = y || $, b = W(t), [g, v] = A(S(n)), [V, L] = A({ status: !1, message: "" }), p = h({}), C = h(null);
  var E, R;
  if (t.mutant) {
    const [e, r] = A({
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    });
    E = e, R = r;
  } else
    E = {
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    }, R = (e) => {
      console.warn("Operation ignored, set mutant={true} in '" + t.attribute + "' field definition");
    };
  function S(e) {
    return b.parse(H(t, e));
  }
  const I = (e) => {
    const r = f(e), w = t.attribute, x = t.name || w;
    if (m) {
      const J = b.format(e);
      m(w, J, { [w]: r.status });
    }
    F.onChange && F.onChange(x, e, r.status), N.onValue(x, e, r.status);
  }, O = (e, r) => {
    v(e || ""), r && (clearTimeout(C.current), C.current = setTimeout(function() {
      I(e);
    }, 300));
  }, P = () => b.format(g), i = (e) => {
    if (l && l instanceof Function) {
      const r = l(e);
      if (!r.status)
        return r;
    }
    return { status: !0, message: "" };
  }, o = (e) => {
    c({
      status: !e.status,
      message: e.message
    });
  }, f = (e) => {
    const r = i(e);
    return r.status && u != null && u.asyncValid ? (s(), u.asyncValid(e, a, c)) : o(r), r;
  }, a = (e) => {
  }, d = () => {
    V.message != "" && L({
      status: V.status,
      message: ""
    });
  }, s = () => {
    c({
      status: !1,
      message: ""
    });
  }, c = (e) => {
    e.status ? L(e) : L({
      status: !1,
      message: ""
    });
  }, q = { onBlur: () => {
    const e = f(g);
    F.onBlur && F.onBlur(t.attribute, g, e.status);
  }, onFocus: () => {
    d();
  }, onValueChange: (e) => {
    O(e, !0);
  } };
  return Q(() => {
    var e = t.attribute;
    const r = i(g);
    m(void 0, void 0, { [e]: r.status });
  }, []), { data: g, setData: O, getData: P, error: V, eventListeners: q, mutateOptions: E, setMutateOptions: R, getMeta: (e) => p.current[e], setMeta: (e, r) => {
    p.current[e] = r;
  } };
}
function ft(t) {
  return {
    onBlur: t.onBlur,
    onFocus: t.onFocus,
    onChange: (n) => t.onValueChange(n.target.value)
  };
}
export {
  Z as N,
  ct as a,
  lt as b,
  $ as c,
  it as d,
  G as e,
  ft as f,
  tt as g
};
