import { getValueByKey as q } from "./palmyra/form/FormUtil.js";
import I from "./palmyra/validator/DataValidator.js";
import { useState as A, useEffect as x, useRef as O, useMemo as K } from "react";
import { delay as P, mergeDeep as L } from "./palmyra/utils/index.js";
import { getLookupStore as G } from "./palmyra/form/PalmyraStoreManager.js";
import { getFormatConverter as J } from "./palmyra/utils/converter/FormatterFactory.js";
const Q = {
  getFieldRef: function(t) {
  },
  addFieldRef: function(t, r) {
  }
}, ot = {
  getFormHelper: function() {
    return Y();
  },
  getOnChangeListeners: function(t) {
    return {};
  },
  getValueListeners: function(t) {
    return {};
  }
}, T = {
  onChange: function(t, r) {
  }
}, U = {
  onValue: function(t, r, u) {
  }
}, W = (t, r) => r ?? (t.defaultValue || "");
function X(t, r, u, a, n, g, D) {
  g && console.log(t.attribute, g);
  const B = g || T, M = D || U, p = J(t), [F, R] = A(r), [V, l] = A(E(r)), [v, C] = A({ status: !1, message: "" });
  x(() => {
    R(r), l(E(r));
  }, [r]);
  function E(e) {
    return p.parse(W(t, e));
  }
  const b = (e, o) => {
    l(e || ""), o && P(() => {
      _(e);
      const m = t.attribute, N = t.name || m, h = k(e);
      if (u) {
        const z = p.format(e);
        u(m, z, { [m]: h.status });
      }
      B.onChange(N, e, h.status), M.onValue(N, e, h.status);
    });
  }, k = (e) => {
    if (a && a instanceof Function) {
      const o = a(e);
      if (!o.status)
        return o;
    }
    return { status: !0, message: "" };
  }, w = (e) => {
    d({
      status: !e.status,
      message: e.message
    });
  }, _ = (e) => {
    const o = k(e);
    o.status && n != null && n.asyncValid ? (i(), n.asyncValid(e, j, d)) : w(o);
  }, j = (e) => {
  }, c = () => {
    v.message != "" && C({
      status: v.status,
      message: ""
    });
  }, i = () => {
    d({
      status: !1,
      message: ""
    });
  }, d = (e) => {
    e.status ? C(e) : C({
      status: !1,
      message: ""
    });
  }, S = { onBlur: () => {
    _(V);
  }, onFocus: () => {
    c();
  }, onValueChange: (e) => {
    b(e, !0);
  } };
  return x(() => {
    var e = t.attribute;
    const o = k(V);
    u(void 0, void 0, { [e]: o.status });
  }, []), { data: V, setData: b, error: v, eventListeners: S };
}
function nt(t) {
  return {
    onBlur: t.onBlur,
    onFocus: t.onFocus,
    onChange: (r) => t.onValueChange(r.target.value)
  };
}
function Y() {
  const t = {};
  return { addFieldRef: (a, n) => {
    t[a] = n;
  }, getFieldRef: (a) => {
    const n = t[a];
    if (n)
      return n.current;
  } };
}
function at(t, r, u, a, n) {
  const g = n || { changeListeners: {}, valueListeners: {} }, D = a || Q;
  var B = {}, M = {};
  const p = O(!1);
  var F = O(L({}, t));
  const R = r;
  var V = O({}), l = V.current, v = {};
  (() => u && u == "new")() && L(F.current, v);
  const E = (c, i, d) => {
    const y = c ? { [c]: i } : {};
    l = Object.assign({}, l, d), L(F.current, y);
    const f = b(l);
    f != p.current && (p.current = f, R && R(f));
  }, b = (c) => {
    for (var i in c)
      if (c[i] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: K(() => (F.current = L({}, t), (i, d, y) => {
    var f = i.name || i.attribute, s = { ...i, type: d };
    y && D.addFieldRef(f, y);
    const S = I(s);
    B[s.attribute] = s, M[s.attribute] = S;
    const e = g.changeListeners[f], o = g.valueListeners[f];
    var m = X(
      s,
      q(s.attribute, F.current),
      E,
      S,
      void 0,
      e,
      o
    );
    try {
      Z(s) && (m.store = G(s));
    } catch (h) {
      console.error("Error while getting LookupStore for attribute" + s.attribute, h);
    }
    if (s.type == "serverlookup") {
      var N = s.displayAttribute || s.attribute;
      m.displayValue = q(N, t);
    }
    return m;
  }), [t]), getFormData: () => L({}, F.current), initForm: () => {
  }, isFormValid: () => b(l) };
}
function Z(t) {
  var r;
  return !!((r = t.storeOptions) != null && r.endPoint);
}
export {
  T as N,
  Q as a,
  ot as b,
  U as c,
  at as d,
  Y as e,
  nt as f,
  X as g
};
