import { useMemo as _, useRef as C, useEffect as A, useState as q } from "react";
import Q from "../palmyra/validator/DataValidator.js";
import { getFormatConverter as U } from "../palmyra/utils/converter/FormatterFactory.js";
import { mergeDeep as N } from "../palmyra/utils/index.js";
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
  const E = u || { eventListeners: {}, valueListeners: {} }, p = _(() => ({}), [t]), m = d || G();
  var V = {}, M = {};
  const b = C(!1);
  var l = C(N({}, t));
  const L = n;
  var S = C({}), g = S.current, w = {};
  (() => F && F == "new")() && N(l.current, w), A(() => {
    l.current = N({}, t);
  }, [t]);
  const y = (i, s, f) => {
    i && z(i, l.current, s), g = Object.assign({}, g, f);
    const a = R(g);
    a != b.current && (b.current = a, L && L(a));
  }, R = (i) => {
    for (var s in i)
      if (p[s] && p[s].current && i[s] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: _(() => (s, f, a) => {
    l.current = N({}, t);
    var v = s.name || s.attribute, o = { ...s, type: f };
    a && (m.addFieldRef(v, a), p[v] = a);
    const c = Q(o);
    V[o.attribute] = o, M[o.attribute] = c;
    const P = s.eventListener || E.eventListeners[v], T = s.valueListener || E.valueListeners[v];
    var k = $(
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
      X(o) && (k.store = W(o));
    } catch (j) {
      console.error("Error while getting LookupStore for attribute" + o.attribute, j);
    }
    return k;
  }, [t]), getFormData: (i) => {
    var v;
    const s = i || "id", f = (v = l.current) == null ? void 0 : v[s];
    var a = f ? { [s]: f } : {};
    for (const o in p) {
      const c = p[o].current;
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
function $(t, n, F, d, u, E, p) {
  const m = U(t, n), [V, M] = q(R(m.getFieldData(n.current, t))), [b, l] = q({ status: !1, message: "" }), L = C({}), S = C(null), g = E || Y, w = p || Z;
  A(() => {
    var e = t.attribute;
    const r = i(V);
    F(void 0, void 0, { [e]: r.status });
  }, []), A(() => {
    const e = R(m.getFieldData(n.current, t));
    M(e);
    const r = t.attribute, h = t.name || r;
    p.onValue(h, e);
  }, [m.getRawdata(n.current, t)]);
  var B, y;
  if (t.mutant) {
    const [e, r] = q({
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    });
    B = e, y = r;
  } else
    B = {
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
    const r = f(e), h = t.attribute, x = t.name || h;
    if (F) {
      const J = m.format(e);
      F(h, J, { [h]: r.status });
    }
    g.onChange && g.onChange(x, e, r.status), w.onValue(x, e, r.status);
  }, O = (e, r) => {
    M(e), r && (clearTimeout(S.current), S.current = setTimeout(function() {
      I(e);
    }, 300));
  }, K = () => m.format(V), i = (e) => {
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
    b.message != "" && l({
      status: b.status,
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
    data: V,
    setData: O,
    getData: K,
    error: b,
    eventListeners: { onBlur: () => {
      const e = f(V);
      g.onBlur && g.onBlur(t.attribute, V, e.status);
    }, onFocus: () => {
      v();
    }, onValueChange: (e) => {
      O(e, !0);
    } },
    mutateOptions: B,
    setMutateOptions: y,
    getMeta: (e) => L.current[e],
    setMeta: (e, r) => {
      L.current[e] = r;
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
