import { useMemo as j, useRef as R, useState as q, useEffect as D } from "react";
import G from "../palmyra/validator/DataValidator.js";
import { getFormatConverter as J } from "../palmyra/utils/converter/FormatterFactory.js";
import { mergeDeep as w } from "../palmyra/utils/index.js";
import { getLookupStore as Q } from "../palmyra/form/PalmyraStoreManager.js";
import { setValueByKey as T } from "../palmyra/form/FormUtil.js";
function x() {
  const e = j(() => ({}), []);
  return { addFieldRef: (f, u) => {
    e[f] = u;
  }, getFieldRef: (f) => {
    const u = e[f];
    if (u)
      return u.current;
  } };
}
function at(e, a, g, f, u) {
  const h = u || { eventListeners: {}, valueListeners: {} }, L = j(() => ({}), [e]), v = f || x();
  var F = {}, S = {};
  const V = R(!1);
  var d = R(w({}, e));
  const b = a;
  var C = R({}), m = C.current, B = {};
  (() => g && g == "new")() && w(d.current, B);
  const y = (s, i, c) => {
    s && T(s, d.current, i), m = Object.assign({}, m, c);
    const n = M(m);
    n != V.current && (V.current = n, b && b(n));
  }, M = (s) => {
    for (var i in s)
      if (s[i] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: (s, i, c) => {
    d.current = w({}, e);
    var n = s.name || s.attribute, o = { ...s, type: i };
    c && (v.addFieldRef(n, c), L[n] = c);
    const p = G(o);
    F[o.attribute] = o, S[o.attribute] = p;
    const l = s.eventListener || h.eventListeners[n], I = h.valueListeners[n];
    var k = Y(
      o,
      d,
      // getter.getFormData(formDataRef.current),
      y,
      p,
      void 0,
      l,
      I
    );
    try {
      U(o) && (k.store = Q(o));
    } catch (K) {
      console.error("Error while getting LookupStore for attribute" + o.attribute, K);
    }
    return k;
  }, getFormData: (s) => {
    var o;
    const i = s || "id", c = (o = d.current) == null ? void 0 : o[i];
    var n = c ? { [i]: c } : {};
    for (const p in L) {
      const l = L[p].current;
      l != null && l.getValue && T(p, n, l.getValue());
    }
    return n;
  }, isFormValid: () => M(m) };
}
function U(e) {
  var a;
  return !!((a = e.storeOptions) != null && a.endPoint);
}
const ut = {
  getFieldRef: function(e) {
  },
  addFieldRef: function(e, a) {
  }
}, it = {
  getFormHelper: function() {
    return x();
  },
  getEventListeners: function(e) {
    return {};
  },
  getValueListeners: function(e) {
    return {};
  }
}, W = {}, X = {
  onValue: function(e, a, g) {
  }
};
function Y(e, a, g, f, u, h, L) {
  const v = J(e, a), [F, S] = q(M(v.getFieldData(a.current, e))), [V, d] = q({ status: !1, message: "" }), b = R({}), C = R(null);
  D(() => {
    var t = e.attribute;
    const r = s(F);
    g(void 0, void 0, { [t]: r.status });
  }, []);
  const m = h || W, B = L || X;
  var E, y;
  if (e.mutant) {
    const [t, r] = q({
      required: e.required == !0,
      readonly: e.readonly == !0,
      visible: e.visible != !1
    });
    E = t, y = r;
  } else
    E = {
      required: e.required == !0,
      readonly: e.readonly == !0,
      visible: e.visible != !1
    }, y = (t) => {
      console.warn("Operation ignored, set mutant={true} in '" + e.attribute + "' field definition");
    };
  function M(t) {
    var r = t;
    return t == null && (r = v.getDefaultValue(e.defaultValue)), v.parse(r);
  }
  const _ = (t) => {
    const r = c(t), O = e.attribute, P = e.name || O;
    if (g) {
      const z = v.format(t);
      g(O, z, { [O]: r.status });
    }
    m.onChange && m.onChange(P, t, r.status), B.onValue(P, t, r.status);
  }, N = (t, r) => {
    S(t), r && (clearTimeout(C.current), C.current = setTimeout(function() {
      _(t);
    }, 300));
  }, A = () => v.format(F), s = (t) => {
    if (f && f instanceof Function) {
      const r = f(t);
      if (!r.status)
        return r;
    }
    return { status: !0, message: "" };
  }, i = (t) => {
    l({
      status: !t.status,
      message: t.message
    });
  }, c = (t) => {
    const r = s(t);
    return r.status && u != null && u.asyncValid ? (p(), u.asyncValid(t, n, l)) : i(r), r;
  }, n = (t) => {
  }, o = () => {
    V.message != "" && d({
      status: V.status,
      message: ""
    });
  }, p = () => {
    l({
      status: !1,
      message: ""
    });
  }, l = (t) => {
    t.status ? d(t) : d({
      status: !1,
      message: ""
    });
  };
  return {
    data: F,
    setData: N,
    getData: A,
    error: V,
    eventListeners: { onBlur: () => {
      const t = c(F);
      m.onBlur && m.onBlur(e.attribute, F, t.status);
    }, onFocus: () => {
      o();
    }, onValueChange: (t) => {
      N(t, !0);
    } },
    mutateOptions: E,
    setMutateOptions: y,
    getMeta: (t) => b.current[t],
    setMeta: (t, r) => {
      b.current[t] = r;
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
  W as N,
  ut as a,
  it as b,
  X as c,
  x as d,
  Y as e,
  ct as f,
  at as u
};
