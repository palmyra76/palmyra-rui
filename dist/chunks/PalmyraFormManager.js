import { getValueByKey as I, setValueByKey as _ } from "../palmyra/form/FormUtil.js";
import T from "../palmyra/validator/DataValidator.js";
import { useState as k, useEffect as G, useMemo as D, useRef as K } from "react";
import { delay as U, mergeDeep as P } from "../palmyra/utils/index.js";
import { getLookupStore as W } from "../palmyra/form/PalmyraStoreManager.js";
import { getFormatConverter as X } from "../palmyra/utils/converter/FormatterFactory.js";
const it = {
  getFieldRef: function(t) {
  },
  addFieldRef: function(t, r) {
  }
}, ut = {
  getFormHelper: function() {
    return J();
  },
  getEventListeners: function(t) {
    return {};
  },
  getValueListeners: function(t) {
    return {};
  }
}, Y = {
  onChange: function(t, r) {
  }
}, Z = {
  onValue: function(t, r, f) {
  }
}, $ = (t, r) => r ?? (t.defaultValue || "");
function H(t, r, f, u, i, R, v) {
  const S = R || Y, M = v || Z, V = X(t), [N, g] = k(r), [p, h] = k(L(r)), [d, y] = k({ status: !1, message: "" });
  var E, b;
  if (t.mutant) {
    const [e, o] = k({
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    });
    E = e, b = o;
  } else
    E = {
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    }, b = (e) => {
      console.warn("Operation ignored, set mutant={true} in '" + t.attribute + "' field definition");
    };
  G(() => {
    g(r), h(L(r));
  }, [r]);
  function L(e) {
    return V.parse($(t, e));
  }
  const B = (e, o) => {
    h(e || ""), o && U(() => {
      a(e);
      const F = t.attribute, z = t.name || F, A = C(e);
      if (f) {
        const Q = V.format(e);
        f(F, Q, { [F]: A.status });
      }
      S.onChange(z, e, A.status), M.onValue(z, e, A.status);
    });
  }, j = () => V.format(p), C = (e) => {
    if (u && u instanceof Function) {
      const o = u(e);
      if (!o.status)
        return o;
    }
    return { status: !0, message: "" };
  }, O = (e) => {
    m({
      status: !e.status,
      message: e.message
    });
  }, a = (e) => {
    const o = C(e);
    o.status && i != null && i.asyncValid ? (l(), i.asyncValid(e, n, m)) : O(o);
  }, n = (e) => {
  }, c = () => {
    d.message != "" && y({
      status: d.status,
      message: ""
    });
  }, l = () => {
    m({
      status: !1,
      message: ""
    });
  }, m = (e) => {
    e.status ? y(e) : y({
      status: !1,
      message: ""
    });
  }, w = { onBlur: () => {
    a(p);
  }, onFocus: () => {
    c();
  }, onValueChange: (e) => {
    B(e, !0);
  } };
  return G(() => {
    var e = t.attribute;
    const o = C(p);
    f(void 0, void 0, { [e]: o.status });
  }, []), { data: p, setData: B, getData: j, error: d, eventListeners: w, mutateOptions: E, setMutateOptions: b };
}
function ct(t) {
  return {
    onBlur: t.onBlur,
    onFocus: t.onFocus,
    onChange: (r) => t.onValueChange(r.target.value)
  };
}
function J() {
  const t = D(() => ({}), []);
  return { addFieldRef: (u, i) => {
    t[u] = i;
  }, getFieldRef: (u) => {
    const i = t[u];
    if (i)
      return i.current;
  } };
}
function lt(t, r, f, u, i) {
  const R = i || { eventListeners: {}, valueListeners: {} }, v = D(() => ({}), []), S = u || J();
  var M = {}, V = {};
  const N = K(!1);
  var g = K(P({}, t));
  const p = r;
  var h = K({}), d = h.current, y = {};
  (() => f && f == "new")() && P(g.current, y);
  const b = (a, n, c) => {
    a && _(a, g.current, n), d = Object.assign({}, d, c);
    const l = L(d);
    l != N.current && (N.current = l, p && p(l));
  }, L = (a) => {
    for (var n in a)
      if (a[n] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: D(() => (g.current = P({}, t), (n, c, l) => {
    var m = n.name || n.attribute, s = { ...n, type: c };
    l && (S.addFieldRef(m, l), v[m] = l);
    const q = T(s);
    M[s.attribute] = s, V[s.attribute] = q;
    const x = n.eventListener || R.eventListeners[m], w = R.valueListeners[m];
    var e = H(
      s,
      I(s.attribute, g.current),
      b,
      q,
      void 0,
      x,
      w
    );
    try {
      tt(s) && (e.store = W(s));
    } catch (F) {
      console.error("Error while getting LookupStore for attribute" + s.attribute, F);
    }
    if (s.type == "serverlookup") {
      var o = s.displayAttribute || s.attribute;
      e.displayValue = I(o, t), e.setDisplayValue = (F) => {
        s.displayAttribute != s.attribute && _(s.displayAttribute, g.current, F);
      };
    }
    return e;
  }), [t]), getFormData: () => {
    var a = {};
    for (const n in v) {
      const c = v[n].current;
      c.getValue && (console.log(n, c.getValue()), _(n, a, c.getValue()));
    }
    return a;
  }, initForm: () => {
  }, isFormValid: () => L(d) };
}
const ft = () => {
  console.log("test");
};
function tt(t) {
  var r;
  return !!((r = t.storeOptions) != null && r.endPoint);
}
export {
  Y as N,
  ft as P,
  it as a,
  ut as b,
  Z as c,
  lt as d,
  J as e,
  ct as f,
  H as g
};
