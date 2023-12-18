import { useMemo as j, useRef as h, useState as q, useEffect as G } from "react";
import J from "../palmyra/validator/DataValidator.js";
import { getFormatConverter as Q } from "../palmyra/utils/converter/FormatterFactory.js";
import { mergeDeep as w } from "../palmyra/utils/index.js";
import { getLookupStore as U } from "../palmyra/form/PalmyraStoreManager.js";
import { setValueByKey as T } from "../palmyra/form/FormUtil.js";
function x() {
  const e = j(() => ({}), []);
  return { addFieldRef: (f, i) => {
    e[f] = i;
  }, getFieldRef: (f) => {
    const i = e[f];
    if (i)
      return i.current;
  } };
}
function at(e, a, d, f, i) {
  const C = i || { eventListeners: {}, valueListeners: {} }, L = j(() => ({}), [e]), V = f || x();
  var B = {}, g = {};
  const m = h(!1);
  var v = h(w({}, e));
  const b = a;
  var y = h({}), F = y.current, E = {};
  (() => d && d == "new")() && w(v.current, E);
  const R = (s, u, c) => {
    s && T(s, v.current, u), F = Object.assign({}, F, c);
    const n = S(F);
    n != m.current && (m.current = n, b && b(n));
  }, S = (s) => {
    for (var u in s)
      if (s[u] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: (s, u, c) => {
    v.current = w({}, e);
    var n = s.name || s.attribute, o = { ...s, type: u };
    c && (V.addFieldRef(n, c), L[n] = c);
    const p = J(o);
    B[o.attribute] = o, g[o.attribute] = p;
    const l = s.eventListener || C.eventListeners[n], I = C.valueListeners[n];
    var k = Z(
      o,
      v,
      // getter.getFormData(formDataRef.current),
      R,
      p,
      void 0,
      l,
      I
    );
    try {
      W(o) && (k.store = U(o));
    } catch (K) {
      console.error("Error while getting LookupStore for attribute" + o.attribute, K);
    }
    return k;
  }, getFormData: (s) => {
    var o;
    const u = s || "id", c = (o = v.current) == null ? void 0 : o[u];
    var n = c ? { [u]: c } : {};
    for (const p in L) {
      const l = L[p].current;
      l != null && l.getValue && T(p, n, l.getValue());
    }
    return n;
  }, isFormValid: () => S(F) };
}
function W(e) {
  var a;
  return !!((a = e.storeOptions) != null && a.endPoint);
}
const it = {
  getFieldRef: function(e) {
  },
  addFieldRef: function(e, a) {
  }
}, ut = {
  getFormHelper: function() {
    return x();
  },
  getEventListeners: function(e) {
    return {};
  },
  getValueListeners: function(e) {
    return {};
  }
}, X = {}, Y = {
  onValue: function(e, a, d) {
  }
};
function Z(e, a, d, f, i, C, L) {
  const V = C || X, B = L || Y, g = Q(e, a), [m, v] = q(S(g.getFieldData(a.current, e))), [b, y] = q({ status: !1, message: "" }), F = h({}), E = h(null);
  var M, R;
  if (e.mutant) {
    const [t, r] = q({
      required: e.required == !0,
      readonly: e.readonly == !0,
      visible: e.visible != !1
    });
    M = t, R = r;
  } else
    M = {
      required: e.required == !0,
      readonly: e.readonly == !0,
      visible: e.visible != !1
    }, R = (t) => {
      console.warn("Operation ignored, set mutant={true} in '" + e.attribute + "' field definition");
    };
  function S(t) {
    var r = t;
    return t == null && (r = g.getDefaultValue(e.defaultValue)), g.parse(r);
  }
  const _ = (t) => {
    const r = c(t), O = e.attribute, P = e.name || O;
    if (d) {
      const D = g.format(t);
      d(O, D, { [O]: r.status });
    }
    V.onChange && V.onChange(P, t, r.status), B.onValue(P, t, r.status);
  }, N = (t, r) => {
    v(t), r && (clearTimeout(E.current), E.current = setTimeout(function() {
      _(t);
    }, 300));
  }, A = () => g.format(m), s = (t) => {
    if (f && f instanceof Function) {
      const r = f(t);
      if (!r.status)
        return r;
    }
    return { status: !0, message: "" };
  }, u = (t) => {
    l({
      status: !t.status,
      message: t.message
    });
  }, c = (t) => {
    const r = s(t);
    return r.status && i != null && i.asyncValid ? (p(), i.asyncValid(t, n, l)) : u(r), r;
  }, n = (t) => {
  }, o = () => {
    b.message != "" && y({
      status: b.status,
      message: ""
    });
  }, p = () => {
    l({
      status: !1,
      message: ""
    });
  }, l = (t) => {
    t.status ? y(t) : y({
      status: !1,
      message: ""
    });
  }, z = { onBlur: () => {
    const t = c(m);
    V.onBlur && V.onBlur(e.attribute, m, t.status);
  }, onFocus: () => {
    o();
  }, onValueChange: (t) => {
    N(t, !0);
  } };
  return G(() => {
    var t = e.attribute;
    const r = s(m);
    d(void 0, void 0, { [t]: r.status });
  }, []), {
    data: m,
    setData: N,
    getData: A,
    error: b,
    eventListeners: z,
    mutateOptions: M,
    setMutateOptions: R,
    getMeta: (t) => F.current[t],
    setMeta: (t, r) => {
      F.current[t] = r;
    }
  };
}
function ct(e) {
  return {
    onBlur: e.onBlur,
    onFocus: e.onFocus,
    onChange: (a) => e.onValueChange(a.target.value)
  };
}
export {
  X as N,
  it as a,
  ut as b,
  Y as c,
  at as d,
  x as e,
  ct as f,
  Z as g
};
