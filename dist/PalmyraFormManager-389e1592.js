import { getValueByKey as x } from "./palmyra/form/FormUtil.js";
import K from "./palmyra/validator/DataValidator.js";
import { useState as _, useEffect as z, useRef as j, useMemo as P } from "react";
import { delay as G, mergeDeep as L } from "./palmyra/utils/index.js";
import { getLookupStore as J } from "./palmyra/form/PalmyraStoreManager.js";
import { getFormatConverter as Q } from "./palmyra/utils/converter/FormatterFactory.js";
const T = {
  getFieldRef: function(t) {
  },
  addFieldRef: function(t, r) {
  }
}, nt = {
  getFormHelper: function() {
    return Z();
  },
  getOnChangeListeners: function(t) {
    return {};
  },
  getValueListeners: function(t) {
    return {};
  }
}, U = {
  onChange: function(t, r) {
  }
}, W = {
  onValue: function(t, r, u) {
  }
}, X = (t, r) => r ?? (t.defaultValue || "");
function Y(t, r, u, a, n, g, B) {
  g && console.log(t.attribute, g);
  const M = g || U, O = B || W, V = Q(t), [F, R] = _(r), [v, l] = _(C(r)), [b, k] = _({ status: !1, message: "" });
  z(() => {
    R(r), l(C(r));
  }, [r]);
  function C(e) {
    return V.parse(X(t, e));
  }
  const h = (e, o) => {
    l(e || ""), o && G(() => {
      A(e);
      const m = t.attribute, N = t.name || m, p = E(e);
      if (u) {
        const D = V.format(e);
        u(m, D, { [m]: p.status });
      }
      M.onChange(N, e, p.status), O.onValue(N, e, p.status);
    });
  }, E = (e) => {
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
  }, A = (e) => {
    const o = E(e);
    o.status && n != null && n.asyncValid ? (i(), n.asyncValid(e, q, d)) : w(o);
  }, q = (e) => {
  }, f = () => {
    b.message != "" && k({
      status: b.status,
      message: ""
    });
  }, i = () => {
    d({
      status: !1,
      message: ""
    });
  }, d = (e) => {
    e.status ? k(e) : k({
      status: !1,
      message: ""
    });
  }, S = { onBlur: () => {
    A(v);
  }, onFocus: () => {
    f();
  }, onValueChange: (e) => {
    h(e, !0);
  } };
  return z(() => {
    var e = t.attribute;
    const o = E(v);
    u(void 0, void 0, { [e]: o.status });
  }, []), { data: v, setData: h, error: b, eventListeners: S };
}
function at(t) {
  return {
    onBlur: t.onBlur,
    onFocus: t.onFocus,
    onChange: (r) => t.onValueChange(r.target.value)
  };
}
function Z() {
  const t = {};
  return { addFieldRef: (a, n) => {
    t[a] = n;
  }, getFieldRef: (a) => {
    const n = t[a];
    if (n)
      return n.current;
  } };
}
function it(t, r, u, a, n) {
  const g = n || { changeListeners: {}, valueListeners: {} }, B = a || T;
  var M = {}, O = {};
  const V = j(!1);
  var F = j(L({}, t));
  const R = r;
  var v = j({}), l = v.current, b = {};
  (() => u && u == "new")() && L(F.current, b);
  const C = (f, i, d) => {
    const y = f ? { attribute: i } : {};
    l = Object.assign({}, l, d), L(F.current, y);
    const c = h(l);
    c != V.current && (V.current = c, R && R(c));
  }, h = (f) => {
    for (var i in f)
      if (f[i] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: P(() => (F.current = L({}, t), (i, d, y) => {
    var p, D;
    var c = i.name || i.attribute, s = { ...i, type: d };
    y && B.addFieldRef(c, y);
    const S = K(s);
    M[s.attribute] = s, O[s.attribute] = S;
    const e = g.changeListeners[c], o = g.valueListeners[c];
    var m = Y(
      s,
      x(s.attribute, F.current),
      C,
      S,
      void 0,
      e,
      o
    );
    try {
      $(s) && (m.store = J(s));
    } catch (I) {
      console.error("Error while getting LookupStore for attribute" + s.attribute, I);
    }
    if (s.type == "serverlookup") {
      var N = ((p = s.lookupOptions) == null ? void 0 : p.titleAttribute) || ((D = s.lookupOptions) == null ? void 0 : D.idAttribute);
      m.displayValue = x(N, t);
    }
    return m;
  }), [t]), getFormData: () => L({}, F.current), initForm: () => {
  }, isFormValid: () => h(l) };
}
function $(t) {
  var r;
  return !!((r = t.storeOptions) != null && r.endPoint);
}
export {
  U as N,
  T as a,
  nt as b,
  W as c,
  it as d,
  Z as e,
  at as f,
  Y as g
};
