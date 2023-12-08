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
function H(t, r, f, l, u, R, v) {
  const S = R || Y, M = v || Z, V = X(t), [N, d] = k(r), [p, h] = k(L(r)), [m, y] = k({ status: !1, message: "" });
  var E, b;
  if (t.mutant) {
    const [e, n] = k({
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    });
    E = e, b = n;
  } else
    E = {
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    }, b = (e) => {
      console.warn("Operation ignored, set mutant={true} in '" + t.attribute + "' field definition");
    };
  G(() => {
    d(r), h(L(r));
  }, [r]);
  function L(e) {
    return V.parse($(t, e));
  }
  const B = (e, n) => {
    h(e || ""), n && U(() => {
      a(e);
      const F = t.attribute, z = t.name || F, A = C(e);
      if (f) {
        const Q = V.format(e);
        f(F, Q, { [F]: A.status });
      }
      S.onChange(z, e, A.status), M.onValue(z, e, A.status);
    });
  }, j = () => V.format(p), C = (e) => {
    if (l && l instanceof Function) {
      const n = l(e);
      if (!n.status)
        return n;
    }
    return { status: !0, message: "" };
  }, O = (e) => {
    c({
      status: !e.status,
      message: e.message
    });
  }, a = (e) => {
    const n = C(e);
    n.status && u != null && u.asyncValid ? (i(), u.asyncValid(e, o, c)) : O(n);
  }, o = (e) => {
  }, g = () => {
    m.message != "" && y({
      status: m.status,
      message: ""
    });
  }, i = () => {
    c({
      status: !1,
      message: ""
    });
  }, c = (e) => {
    e.status ? y(e) : y({
      status: !1,
      message: ""
    });
  }, w = { onBlur: () => {
    a(p);
  }, onFocus: () => {
    g();
  }, onValueChange: (e) => {
    B(e, !0);
  } };
  return G(() => {
    var e = t.attribute;
    const n = C(p);
    f(void 0, void 0, { [e]: n.status });
  }, []), { data: p, setData: B, getData: j, error: m, eventListeners: w, mutateOptions: E, setMutateOptions: b };
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
  return { addFieldRef: (l, u) => {
    t[l] = u;
  }, getFieldRef: (l) => {
    const u = t[l];
    if (u)
      return u.current;
  } };
}
function lt(t, r, f, l, u) {
  const R = u || { eventListeners: {}, valueListeners: {} }, v = D(() => ({}), []), S = l || J();
  var M = {}, V = {};
  const N = K(!1);
  var d = K(P({}, t));
  const p = r;
  var h = K({}), m = h.current, y = {};
  (() => f && f == "new")() && P(d.current, y);
  const b = (a, o, g) => {
    a && _(a, d.current, o), m = Object.assign({}, m, g);
    const i = L(m);
    i != N.current && (N.current = i, p && p(i));
  }, L = (a) => {
    for (var o in a)
      if (a[o] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: D(() => (d.current = P({}, t), (o, g, i) => {
    var c = o.name || o.attribute, s = { ...o, type: g };
    i && (S.addFieldRef(c, i), v[c] = i);
    const q = T(s);
    M[s.attribute] = s, V[s.attribute] = q;
    const x = o.eventListener || R.eventListeners[c], w = R.valueListeners[c];
    var e = H(
      s,
      I(s.attribute, d.current),
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
      var n = s.displayAttribute || s.attribute;
      e.displayValue = I(n, t), e.setDisplayValue = (F) => {
        s.displayAttribute != s.attribute && _(s.displayAttribute, d.current, F);
      };
    }
    return e;
  }), [t]), getFormData: () => {
    var g;
    const a = (g = d.current) == null ? void 0 : g.id;
    var o = a ? { id: a } : {};
    for (const i in v) {
      const c = v[i].current;
      c.getValue && _(i, o, c.getValue());
    }
    return o;
  }, initForm: () => {
  }, isFormValid: () => L(m) };
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
