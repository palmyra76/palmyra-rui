import { useMemo as _, useRef as h, useEffect as A, useState as q } from "react";
import Q from "../palmyra/validator/DataValidator.js";
import { getFormatConverter as U } from "../palmyra/utils/converter/FormatterFactory.js";
import { mergeDeep as B } from "../palmyra/utils/index.js";
import { getLookupStore as W } from "../palmyra/form/PalmyraStoreManager.js";
import { setValueByKey as z } from "../palmyra/form/FormUtil.js";
function G() {
  const t = _(() => ({}), []);
  return { addFieldRef: (f, u) => {
    t[f] = u;
  }, getFieldRef: (f) => {
    const u = t[f];
    if (u)
      return u.current;
  } };
}
function at(t, s, F, f, u) {
  const C = u || { eventListeners: {}, valueListeners: {} }, L = _(() => ({}), [t]), d = f || G();
  var p = {}, E = {};
  const V = h(!1);
  var l = h(B({}, t));
  const b = s;
  var M = h({}), m = M.current, N = {};
  (() => F && F == "new")() && B(l.current, N), A(() => {
    l.current = B({}, t), console.log("setting form data to", t);
  }, [t]);
  const y = (i, n, g) => {
    i && z(i, l.current, n), m = Object.assign({}, m, g);
    const a = R(m);
    a != V.current && (V.current = a, b && b(a));
  }, R = (i) => {
    for (var n in i)
      if (i[n] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: _(() => (n, g, a) => {
    l.current = B({}, t);
    var v = n.name || n.attribute, o = { ...n, type: g };
    a && (d.addFieldRef(v, a), L[v] = a);
    const c = Q(o);
    p[o.attribute] = o, E[o.attribute] = c;
    const P = n.eventListener || C.eventListeners[v], T = C.valueListeners[v];
    var w = $(
      o,
      l,
      // getter.getFormData(formDataRef.current),
      y,
      c,
      void 0,
      P,
      T
    );
    try {
      X(o) && (w.store = W(o));
    } catch (j) {
      console.error("Error while getting LookupStore for attribute" + o.attribute, j);
    }
    return w;
  }, [t]), getFormData: (i) => {
    var v;
    const n = i || "id", g = (v = l.current) == null ? void 0 : v[n];
    var a = g ? { [n]: g } : {};
    for (const o in L) {
      const c = L[o].current;
      c != null && c.getValue && z(o, a, c.getValue());
    }
    return a;
  }, isFormValid: () => R(m) };
}
function X(t) {
  var s;
  return !!((s = t.storeOptions) != null && s.endPoint);
}
const ut = {
  getFieldRef: function(t) {
  },
  addFieldRef: function(t, s) {
  }
}, it = {
  getFormHelper: function() {
    return G();
  },
  getEventListeners: function(t) {
    return {};
  },
  getValueListeners: function(t) {
    return {};
  }
}, Y = {}, Z = {
  onValue: function(t, s, F) {
  }
};
function $(t, s, F, f, u, C, L) {
  const d = U(t, s), [p, E] = q(R(d.getFieldData(s.current, t))), [V, l] = q({ status: !1, message: "" }), b = h({}), M = h(null);
  A(() => {
    var e = t.attribute;
    const r = i(p);
    F(void 0, void 0, { [e]: r.status });
  }, []), A(() => {
    E(R(d.getFieldData(s.current, t)));
  }, [d.getRawdata(s.current, t)]);
  const m = C || Y, N = L || Z;
  var S, y;
  if (t.mutant) {
    const [e, r] = q({
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    });
    S = e, y = r;
  } else
    S = {
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    }, y = (e) => {
      console.warn("Operation ignored, set mutant={true} in '" + t.attribute + "' field definition");
    };
  function R(e) {
    var r = e;
    return e == null && (r = d.getDefaultValue(t.defaultValue)), d.parse(r);
  }
  const I = (e) => {
    const r = g(e), O = t.attribute, x = t.name || O;
    if (F) {
      const J = d.format(e);
      F(O, J, { [O]: r.status });
    }
    m.onChange && m.onChange(x, e, r.status), N.onValue(x, e, r.status);
  }, k = (e, r) => {
    E(e), r && (clearTimeout(M.current), M.current = setTimeout(function() {
      I(e);
    }, 300));
  }, K = () => d.format(p), i = (e) => {
    if (f && f instanceof Function) {
      const r = f(e);
      if (!r.status)
        return r;
    }
    return { status: !0, message: "" };
  }, n = (e) => {
    c({
      status: !e.status,
      message: e.message
    });
  }, g = (e) => {
    const r = i(e);
    return r.status && u != null && u.asyncValid ? (o(), u.asyncValid(e, a, c)) : n(r), r;
  }, a = (e) => {
  }, v = () => {
    V.message != "" && l({
      status: V.status,
      message: ""
    });
  }, o = () => {
    c({
      status: !1,
      message: ""
    });
  }, c = (e) => {
    e.status ? l(e) : l({
      status: !1,
      message: ""
    });
  };
  return {
    data: p,
    setData: k,
    getData: K,
    error: V,
    eventListeners: { onBlur: () => {
      const e = g(p);
      m.onBlur && m.onBlur(t.attribute, p, e.status);
    }, onFocus: () => {
      v();
    }, onValueChange: (e) => {
      k(e, !0);
    } },
    mutateOptions: S,
    setMutateOptions: y,
    getMeta: (e) => b.current[e],
    setMeta: (e, r) => {
      b.current[e] = r;
    }
  };
}
function ct(t) {
  return {
    onBlur: t.onBlur,
    onFocus: t.onFocus,
    onChange: (s) => t.onValueChange(s.target.value)
  };
}
export {
  Y as N,
  ut as a,
  it as b,
  Z as c,
  G as d,
  $ as e,
  ct as f,
  at as u
};
