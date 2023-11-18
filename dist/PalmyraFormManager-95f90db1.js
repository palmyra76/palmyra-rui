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
function X(t, r, u, n, a, g, D) {
  g && console.log(t.attribute, g);
  const B = g || T, M = D || U, p = J(t), [F, R] = A(r), [V, f] = A(E(r)), [v, C] = A({ status: !1, message: "" });
  x(() => {
    R(r), f(E(r));
  }, [r]);
  function E(e) {
    return p.parse(W(t, e));
  }
  const b = (e, o) => {
    f(e || ""), o && P(() => {
      _(e);
      const m = t.attribute, N = t.name || m, h = k(e);
      if (u) {
        const z = p.format(e);
        u(m, z, { [m]: h.status });
      }
      B.onChange(N, e, h.status), M.onValue(N, e, h.status);
    });
  }, k = (e) => {
    if (n && n instanceof Function) {
      const o = n(e);
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
    o.status && a != null && a.asyncValid ? (i(), a.asyncValid(e, j, d)) : w(o);
  }, j = (e) => {
  }, l = () => {
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
    l();
  }, onValueChange: (e) => {
    b(e, !0);
  } };
  return x(() => {
    var e = t.attribute;
    const o = k(V);
    u(void 0, void 0, { [e]: o.status });
  }, []), { data: V, setData: b, error: v, eventListeners: S };
}
function at(t) {
  return {
    onBlur: t.onBlur,
    onFocus: t.onFocus,
    onChange: (r) => t.onValueChange(r.target.value)
  };
}
function Y() {
  const t = {};
  return { addFieldRef: (n, a) => {
    t[n] = a;
  }, getFieldRef: (n) => {
    const a = t[n];
    if (a)
      return a.current;
  } };
}
function nt(t, r, u, n, a) {
  const g = a || { changeListeners: {}, valueListeners: {} }, D = n || Q;
  var B = {}, M = {};
  const p = O(!1);
  var F = O(L({}, t));
  const R = r;
  var V = O({}), f = V.current, v = {};
  (() => u && u == "new")() && L(F.current, v);
  const E = (l, i, d) => {
    const y = l ? { attribute: i } : {};
    f = Object.assign({}, f, d), L(F.current, y);
    const c = b(f);
    c != p.current && (p.current = c, R && R(c));
  }, b = (l) => {
    for (var i in l)
      if (l[i] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: K(() => (F.current = L({}, t), (i, d, y) => {
    var c = i.name || i.attribute, s = { ...i, type: d };
    y && D.addFieldRef(c, y);
    const S = I(s);
    B[s.attribute] = s, M[s.attribute] = S;
    const e = g.changeListeners[c], o = g.valueListeners[c];
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
  }, isFormValid: () => b(f) };
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
  nt as d,
  Y as e,
  at as f,
  X as g
};
