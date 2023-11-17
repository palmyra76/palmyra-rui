import { getValueByKey as x } from "./palmyra/form/FormUtil.js";
import K from "./palmyra/validator/DataValidator.js";
import { useState as _, useEffect as z, useRef as j, useMemo as P } from "react";
import { delay as G, mergeDeep as L } from "./palmyra/utils/index.js";
import { getLookupStore as J } from "./palmyra/form/PalmyraStoreManager.js";
import { getFormatConverter as Q } from "./palmyra/utils/converter/FormatterFactory.js";
const T = {
  getFieldRef: function(t, r) {
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
  onValue: function(t, r, c) {
  }
}, X = (t, r) => r ?? (t.defaultValue || "");
function Y(t, r, c, n, a, i, B) {
  i && console.log(t.attribute, i);
  const M = i || U, O = B || W, V = Q(t), [F, R] = _(r), [v, f] = _(C(r)), [b, k] = _({ status: !1, message: "" });
  z(() => {
    R(r), f(C(r));
  }, [r]);
  function C(e) {
    return V.parse(X(t, e));
  }
  const y = (e, o) => {
    f(e || ""), o && G(() => {
      A(e);
      const g = t.attribute, N = t.name || g, p = E(e);
      if (c) {
        const D = V.format(e);
        c(g, D, { [g]: p.status });
      }
      M.onChange(N, e, p.status), O.onValue(N, e, p.status);
    });
  }, E = (e) => {
    if (n && n instanceof Function) {
      const o = n(e);
      if (!o.status)
        return o;
    }
    return { status: !0, message: "" };
  }, w = (e) => {
    m({
      status: !e.status,
      message: e.message
    });
  }, A = (e) => {
    const o = E(e);
    o.status && a != null && a.asyncValid ? (u(), a.asyncValid(e, q, m)) : w(o);
  }, q = (e) => {
  }, d = () => {
    b.message != "" && k({
      status: b.status,
      message: ""
    });
  }, u = () => {
    m({
      status: !1,
      message: ""
    });
  }, m = (e) => {
    e.status ? k(e) : k({
      status: !1,
      message: ""
    });
  }, S = { onBlur: () => {
    A(v);
  }, onFocus: () => {
    d();
  }, onValueChange: (e) => {
    y(e, !0);
  } };
  return z(() => {
    var e = t.attribute;
    const o = E(v);
    c(void 0, void 0, { [e]: o.status });
  }, []), { data: v, setData: y, error: b, eventListeners: S };
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
  return { addFieldRef: (n, a) => {
    t[n] = a;
  }, getFieldRef: (n, a) => {
    const i = t[n];
    if (i)
      return i.current;
  } };
}
function it(t, r, c, n, a) {
  const i = a || { changeListeners: {}, valueListeners: {} }, B = n || T;
  var M = {}, O = {};
  const V = j(!1);
  var F = j(L({}, t));
  const R = r;
  var v = j({}), f = v.current, b = {};
  (() => c && c == "new")() && L(F.current, b);
  const C = (d, u, m) => {
    const h = d ? { attribute: u } : {};
    f = Object.assign({}, f, m), L(F.current, h);
    const l = y(f);
    l != V.current && (V.current = l, R && R(l));
  }, y = (d) => {
    for (var u in d)
      if (d[u] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: P(() => (F.current = L({}, t), (u, m, h) => {
    var p, D;
    var l = u.name || u.attribute, s = { ...u, type: m };
    h && B.addFieldRef(l, h);
    const S = K(s);
    M[s.attribute] = s, O[s.attribute] = S;
    const e = i.changeListeners[l], o = i.valueListeners[l];
    var g = Y(
      s,
      x(s.attribute, F.current),
      C,
      S,
      void 0,
      e,
      o
    );
    try {
      $(s) && (g.store = J(s));
    } catch (I) {
      console.error("Error while getting LookupStore for attribute" + s.attribute, I);
    }
    if (s.type == "serverlookup") {
      var N = ((p = s.lookupOptions) == null ? void 0 : p.titleAttribute) || ((D = s.lookupOptions) == null ? void 0 : D.idAttribute);
      g.displayValue = x(N, t);
    }
    return g;
  }), [t]), getFormData: () => L({}, F.current), initForm: () => {
  }, isFormValid: () => y(f) };
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
