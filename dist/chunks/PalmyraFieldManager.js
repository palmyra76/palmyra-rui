import { useMemo as P, useRef as N, useState as k, useEffect as I } from "react";
import { getValueByKey as G, setValueByKey as K } from "../palmyra/form/FormUtil.js";
import U from "../palmyra/validator/DataValidator.js";
import { getFormatConverter as W } from "../palmyra/utils/converter/FormatterFactory.js";
import { mergeDeep as D } from "../palmyra/utils/index.js";
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
  const S = i || { eventListeners: {}, valueListeners: {} }, b = P(() => ({}), []), F = c || J();
  var M = {}, y = {};
  const O = N(!1);
  var g = N(D({}, t));
  const p = s;
  var B = N({}), v = B.current, L = {};
  (() => m && m == "new")() && D(g.current, L);
  const R = (u, o, l) => {
    u && K(u, g.current, o), v = Object.assign({}, v, l);
    const a = V(v);
    a != O.current && (O.current = a, p && p(a));
  }, V = (u) => {
    for (var o in u)
      if (u[o] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: P(() => (g.current = D({}, t), (o, l, a) => {
    var f = o.name || o.attribute, r = { ...o, type: l };
    a && (F.addFieldRef(f, a), b[f] = a);
    const d = U(r);
    M[r.attribute] = r, y[r.attribute] = d;
    const h = o.eventListener || S.eventListeners[f], j = S.valueListeners[f];
    var C = tt(
      r,
      G(r.attribute, g.current),
      R,
      d,
      void 0,
      h,
      j
    );
    try {
      Y(r) && (C.store = X(r));
    } catch (E) {
      console.error("Error while getting LookupStore for attribute" + r.attribute, E);
    }
    if (r.type == "serverlookup") {
      var x = r.displayAttribute || r.attribute;
      C.displayValue = G(x, t), C.setDisplayValue = (E) => {
        r.displayAttribute != r.attribute && K(r.displayAttribute, g.current, E);
      };
    }
    return C;
  }), [t]), getFormData: (u) => {
    var f;
    const o = u || "id", l = (f = g.current) == null ? void 0 : f[o];
    var a = l ? { [o]: l } : {};
    for (const r in b) {
      const d = b[r].current;
      d != null && d.getValue && K(r, a, d.getValue());
    }
    return a;
  }, isFormValid: () => V(v) };
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
}, Z = {}, $ = {
  onValue: function(t, s, m) {
  }
}, H = (t, s) => s ?? (t.defaultValue || "");
function tt(t, s, m, c, i, S, b) {
  const F = S || Z, M = b || $, y = W(t), [O, g] = k(s), [p, B] = k(w(s)), [v, L] = k({ status: !1, message: "" }), q = N(null);
  var R, V;
  if (t.mutant) {
    const [e, n] = k({
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    });
    R = e, V = n;
  } else
    R = {
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    }, V = (e) => {
      console.warn("Operation ignored, set mutant={true} in '" + t.attribute + "' field definition");
    };
  I(() => {
    g(s), B(w(s));
  }, [s]);
  function w(e) {
    return y.parse(H(t, e));
  }
  const T = (e) => {
    const n = a(e), _ = t.attribute, z = t.name || _;
    if (m) {
      const Q = y.format(e);
      m(_, Q, { [_]: n.status });
    }
    F.onChange && F.onChange(z, e, n.status), M.onValue(z, e, n.status);
  }, A = (e, n) => {
    B(e || ""), n && (clearTimeout(q.current), q.current = setTimeout(function() {
      T(e);
    }, 300));
  }, u = () => y.format(p), o = (e) => {
    if (c && c instanceof Function) {
      const n = c(e);
      if (!n.status)
        return n;
    }
    return { status: !0, message: "" };
  }, l = (e) => {
    h({
      status: !e.status,
      message: e.message
    });
  }, a = (e) => {
    const n = o(e);
    return n.status && i != null && i.asyncValid ? (d(), i.asyncValid(e, f, h)) : l(n), n;
  }, f = (e) => {
  }, r = () => {
    v.message != "" && L({
      status: v.status,
      message: ""
    });
  }, d = () => {
    h({
      status: !1,
      message: ""
    });
  }, h = (e) => {
    e.status ? L(e) : L({
      status: !1,
      message: ""
    });
  }, E = { onBlur: () => {
    const e = a(p);
    F.onBlur && F.onBlur(t.attribute, p, e.status);
  }, onFocus: () => {
    r();
  }, onValueChange: (e) => {
    A(e, !0);
  } };
  return I(() => {
    var e = t.attribute;
    const n = o(p);
    m(void 0, void 0, { [e]: n.status });
  }, []), { data: p, setData: A, getData: u, error: v, eventListeners: E, mutateOptions: R, setMutateOptions: V };
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
