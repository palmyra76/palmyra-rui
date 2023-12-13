import { useMemo as P, useRef as N, useState as S, useEffect as I } from "react";
import { getValueByKey as G, setValueByKey as D } from "../palmyra/form/FormUtil.js";
import U from "../palmyra/validator/DataValidator.js";
import { getFormatConverter as W } from "../palmyra/utils/converter/FormatterFactory.js";
import { mergeDeep as K } from "../palmyra/utils/index.js";
import { getLookupStore as X } from "../palmyra/form/PalmyraStoreManager.js";
function J() {
  const t = P(() => ({}), []);
  return { addFieldRef: (c, i) => {
    t[c] = i;
  }, getFieldRef: (c) => {
    const i = t[c];
    if (i)
      return i.current;
  } };
}
function it(t, s, m, c, i) {
  const E = i || { eventListeners: {}, valueListeners: {} }, V = P(() => ({}), []), B = c || J();
  var M = {}, y = {};
  const O = N(!1);
  var g = N(K({}, t));
  const v = s;
  var k = N({}), p = k.current, b = {};
  (() => m && m == "new")() && K(g.current, b);
  const L = (u, o, l) => {
    u && D(u, g.current, o), p = Object.assign({}, p, l);
    const a = F(p);
    a != O.current && (O.current = a, v && v(a));
  }, F = (u) => {
    for (var o in u)
      if (u[o] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: P(() => (g.current = K({}, t), (o, l, a) => {
    var f = o.name || o.attribute, r = { ...o, type: l };
    a && (B.addFieldRef(f, a), V[f] = a);
    const d = U(r);
    M[r.attribute] = r, y[r.attribute] = d;
    const R = o.eventListener || E.eventListeners[f], j = E.valueListeners[f];
    var h = tt(
      r,
      G(r.attribute, g.current),
      L,
      d,
      void 0,
      R,
      j
    );
    try {
      Y(r) && (h.store = X(r));
    } catch (C) {
      console.error("Error while getting LookupStore for attribute" + r.attribute, C);
    }
    if (r.type == "serverlookup") {
      var x = r.displayAttribute || r.attribute;
      h.displayValue = G(x, t), h.setDisplayValue = (C) => {
        r.displayAttribute != r.attribute && D(r.displayAttribute, g.current, C);
      };
    }
    return h;
  }), [t]), getFormData: (u) => {
    var f;
    const o = u || "id", l = (f = g.current) == null ? void 0 : f[o];
    var a = l ? { [o]: l } : {};
    for (const r in V) {
      const d = V[r].current;
      d != null && d.getValue && D(r, a, d.getValue());
    }
    return a;
  }, isFormValid: () => F(p) };
}
function Y(t) {
  var s;
  return !!((s = t.storeOptions) != null && s.endPoint);
}
const ut = {
  getFieldRef: function(t) {
  },
  addFieldRef: function(t, s) {
  }
}, ct = {
  getFormHelper: function() {
    return J();
  },
  getEventListeners: function(t) {
    return {};
  },
  getValueListeners: function(t) {
    return {};
  }
}, Z = {
  onChange: function(t, s) {
  }
}, $ = {
  onValue: function(t, s, m) {
  }
}, H = (t, s) => s ?? (t.defaultValue || "");
function tt(t, s, m, c, i, E, V) {
  const B = E || Z, M = V || $, y = W(t), [O, g] = S(s), [v, k] = S(w(s)), [p, b] = S({ status: !1, message: "" }), q = N(null);
  var L, F;
  if (t.mutant) {
    const [e, n] = S({
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    });
    L = e, F = n;
  } else
    L = {
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    }, F = (e) => {
      console.warn("Operation ignored, set mutant={true} in '" + t.attribute + "' field definition");
    };
  I(() => {
    g(s), k(w(s));
  }, [s]);
  function w(e) {
    return y.parse(H(t, e));
  }
  const T = (e) => {
    console.log("validating ", e);
    const n = a(e), _ = t.attribute, z = t.name || _;
    if (m) {
      const Q = y.format(e);
      m(_, Q, { [_]: n.status });
    }
    B.onChange(z, e, n.status), M.onValue(z, e, n.status);
  }, A = (e, n) => {
    k(e || ""), n && (clearTimeout(q.current), q.current = setTimeout(function() {
      T(e);
    }, 300));
  }, u = () => y.format(v), o = (e) => {
    if (c && c instanceof Function) {
      const n = c(e);
      if (!n.status)
        return n;
    }
    return { status: !0, message: "" };
  }, l = (e) => {
    R({
      status: !e.status,
      message: e.message
    });
  }, a = (e) => {
    const n = o(e);
    return n.status && i != null && i.asyncValid ? (d(), i.asyncValid(e, f, R)) : l(n), n;
  }, f = (e) => {
  }, r = () => {
    p.message != "" && b({
      status: p.status,
      message: ""
    });
  }, d = () => {
    R({
      status: !1,
      message: ""
    });
  }, R = (e) => {
    e.status ? b(e) : b({
      status: !1,
      message: ""
    });
  }, C = { onBlur: () => {
    a(v);
  }, onFocus: () => {
    r();
  }, onValueChange: (e) => {
    A(e, !0);
  } };
  return I(() => {
    var e = t.attribute;
    const n = o(v);
    m(void 0, void 0, { [e]: n.status });
  }, []), { data: v, setData: A, getData: u, error: p, eventListeners: C, mutateOptions: L, setMutateOptions: F };
}
function lt(t) {
  return {
    onBlur: t.onBlur,
    onFocus: t.onFocus,
    onChange: (s) => t.onValueChange(s.target.value)
  };
}
export {
  Z as N,
  ut as a,
  ct as b,
  $ as c,
  it as d,
  J as e,
  lt as f,
  tt as g
};
