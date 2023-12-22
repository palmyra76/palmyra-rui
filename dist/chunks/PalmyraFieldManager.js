import { useMemo as _, useRef as h, useEffect as A, useState as q } from "react";
import Q from "../palmyra/validator/DataValidator.js";
import { getFormatConverter as U } from "../palmyra/utils/converter/FormatterFactory.js";
import { mergeDeep as B } from "../palmyra/utils/index.js";
import { getLookupStore as W } from "../palmyra/form/PalmyraStoreManager.js";
import { setValueByKey as z } from "../palmyra/form/FormUtil.js";
function G() {
  const t = _(() => ({}), []);
  return { addFieldRef: (d, u) => {
    t[d] = u;
  }, getFieldRef: (d) => {
    const u = t[d];
    if (u)
      return u.current;
  } };
}
function at(t, n, F, d, u) {
  const C = u || { eventListeners: {}, valueListeners: {} }, V = _(() => ({}), [t]), m = d || G();
  var p = {}, E = {};
  const L = h(!1);
  var l = h(B({}, t));
  const b = n;
  var M = h({}), g = M.current, N = {};
  (() => F && F == "new")() && B(l.current, N), A(() => {
    l.current = B({}, t);
  }, [t]);
  const y = (i, s, f) => {
    i && z(i, l.current, s), g = Object.assign({}, g, f);
    const a = R(g);
    a != L.current && (L.current = a, b && b(a));
  }, R = (i) => {
    for (var s in i)
      if (V[s].current && i[s] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: _(() => (s, f, a) => {
    l.current = B({}, t);
    var v = s.name || s.attribute, o = { ...s, type: f };
    a && (m.addFieldRef(v, a), V[v] = a);
    const c = Q(o);
    p[o.attribute] = o, E[o.attribute] = c;
    const P = s.eventListener || C.eventListeners[v], T = C.valueListeners[v];
    var O = $(
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
      X(o) && (O.store = W(o));
    } catch (j) {
      console.error("Error while getting LookupStore for attribute" + o.attribute, j);
    }
    return O;
  }, [t]), getFormData: (i) => {
    var v;
    const s = i || "id", f = (v = l.current) == null ? void 0 : v[s];
    var a = f ? { [s]: f } : {};
    for (const o in V) {
      const c = V[o].current;
      c != null && c.getValue && z(o, a, c.getValue());
    }
    return a;
  }, isFormValid: () => R(g) };
}
function X(t) {
  var n;
  return !!((n = t.storeOptions) != null && n.endPoint);
}
const ut = {
  getFieldRef: function(t) {
  },
  addFieldRef: function(t, n) {
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
  onValue: function(t, n, F) {
  }
};
function $(t, n, F, d, u, C, V) {
  const m = U(t, n), [p, E] = q(R(m.getFieldData(n.current, t))), [L, l] = q({ status: !1, message: "" }), b = h({}), M = h(null);
  A(() => {
    var e = t.attribute;
    const r = i(p);
    F(void 0, void 0, { [e]: r.status });
  }, []), A(() => {
    E(R(m.getFieldData(n.current, t)));
  }, [m.getRawdata(n.current, t)]);
  const g = C || Y, N = V || Z;
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
    return e == null && (r = m.getDefaultValue(t.defaultValue)), m.parse(r);
  }
  const I = (e) => {
    const r = f(e), k = t.attribute, x = t.name || k;
    if (F) {
      const J = m.format(e);
      F(k, J, { [k]: r.status });
    }
    g.onChange && g.onChange(x, e, r.status), N.onValue(x, e, r.status);
  }, w = (e, r) => {
    E(e), r && (clearTimeout(M.current), M.current = setTimeout(function() {
      I(e);
    }, 300));
  }, K = () => m.format(p), i = (e) => {
    if (d && d instanceof Function) {
      const r = d(e);
      if (!r.status)
        return r;
    }
    return { status: !0, message: "" };
  }, s = (e) => {
    c({
      status: !e.status,
      message: e.message
    });
  }, f = (e) => {
    const r = i(e);
    return r.status && u != null && u.asyncValid ? (o(), u.asyncValid(e, a, c)) : s(r), r;
  }, a = (e) => {
  }, v = () => {
    L.message != "" && l({
      status: L.status,
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
    setData: w,
    getData: K,
    error: L,
    eventListeners: { onBlur: () => {
      const e = f(p);
      g.onBlur && g.onBlur(t.attribute, p, e.status);
    }, onFocus: () => {
      v();
    }, onValueChange: (e) => {
      w(e, !0);
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
    onChange: (n) => t.onValueChange(n.target.value)
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
