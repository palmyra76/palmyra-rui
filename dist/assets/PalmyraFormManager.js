import { getValueByKey as x, setValueByKey as G } from "../palmyra/form/FormUtil.js";
import J from "../palmyra/validator/DataValidator.js";
import { useState as C, useEffect as z, useRef as P, useMemo as Q } from "react";
import { delay as T, mergeDeep as k } from "../palmyra/utils/index.js";
import { getLookupStore as U } from "../palmyra/form/PalmyraStoreManager.js";
import { getFormatConverter as W } from "../palmyra/utils/converter/FormatterFactory.js";
const X = {
  getFieldRef: function(t) {
  },
  addFieldRef: function(t, r) {
  }
}, it = {
  getFormHelper: function() {
    return H();
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
  onValue: function(t, r, c) {
  }
}, $ = (t, r) => r ?? (t.defaultValue || "");
function D(t, r, c, i, n, L, S) {
  const M = L || Y, N = S || Z, F = W(t), [d, R] = C(r), [p, l] = C(B(r)), [v, h] = C({ status: !1, message: "" });
  var V, g;
  if (t.mutant) {
    const [e, s] = C({
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    });
    V = e, g = s;
  } else
    V = {
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    }, g = (e) => {
      console.warn("Operation ignored, set mutant={true} in '" + t.attribute + "' field definition");
    };
  z(() => {
    R(r), l(B(r));
  }, [r]);
  function B(e) {
    return F.parse($(t, e));
  }
  const O = (e, s) => {
    l(e || ""), s && T(() => {
      u(e);
      const b = t.attribute, j = t.name || b, A = E(e);
      if (c) {
        const I = F.format(e);
        c(b, I, { [b]: A.status });
      }
      M.onChange(j, e, A.status), N.onValue(j, e, A.status);
    });
  }, E = (e) => {
    if (i && i instanceof Function) {
      const s = i(e);
      if (!s.status)
        return s;
    }
    return { status: !0, message: "" };
  }, q = (e) => {
    m({
      status: !e.status,
      message: e.message
    });
  }, u = (e) => {
    const s = E(e);
    s.status && n != null && n.asyncValid ? (f(), n.asyncValid(e, a, m)) : q(s);
  }, a = (e) => {
  }, y = () => {
    v.message != "" && h({
      status: v.status,
      message: ""
    });
  }, f = () => {
    m({
      status: !1,
      message: ""
    });
  }, m = (e) => {
    e.status ? h(e) : h({
      status: !1,
      message: ""
    });
  }, _ = { onBlur: () => {
    u(p);
  }, onFocus: () => {
    y();
  }, onValueChange: (e) => {
    O(e, !0);
  } };
  return z(() => {
    var e = t.attribute;
    const s = E(p);
    c(void 0, void 0, { [e]: s.status });
  }, []), { data: p, setData: O, error: v, eventListeners: _, mutateOptions: V, setMutateOptions: g };
}
function ut(t) {
  return {
    onBlur: t.onBlur,
    onFocus: t.onFocus,
    onChange: (r) => t.onValueChange(r.target.value)
  };
}
function H() {
  const t = {};
  return { addFieldRef: (i, n) => {
    t[i] = n;
  }, getFieldRef: (i) => {
    const n = t[i];
    if (n)
      return n.current;
  } };
}
function ct(t, r, c, i, n) {
  const L = n || { eventListeners: {}, valueListeners: {} }, S = i || X;
  var M = {}, N = {};
  const F = P(!1);
  var d = P(k({}, t));
  const R = r;
  var p = P({}), l = p.current;
  console.log(l);
  var v = {};
  (() => c && c == "new")() && k(d.current, v);
  const V = (u, a, y) => {
    u && G(u, d.current, a), l = Object.assign({}, l, y);
    const f = g(l);
    f != F.current && (F.current = f, R && R(f));
  }, g = (u) => {
    for (var a in u)
      if (u[a] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: Q(() => (d.current = k({}, t), (a, y, f) => {
    var m = a.name || a.attribute, o = { ...a, type: y };
    f && S.addFieldRef(m, f);
    const w = J(o);
    M[o.attribute] = o, N[o.attribute] = w;
    const K = a.eventListener || L.eventListeners[m], _ = L.valueListeners[m];
    var e = D(
      o,
      x(o.attribute, d.current),
      V,
      w,
      void 0,
      K,
      _
    );
    try {
      tt(o) && (e.store = U(o));
    } catch (b) {
      console.error("Error while getting LookupStore for attribute" + o.attribute, b);
    }
    if (o.type == "serverlookup") {
      var s = o.displayAttribute || o.attribute;
      e.displayValue = x(s, t);
    }
    return e;
  }), [t]), getFormData: () => k({}, d.current), initForm: () => {
  }, isFormValid: () => g(l) };
}
const lt = () => {
  console.log("test");
};
function tt(t) {
  var r;
  return !!((r = t.storeOptions) != null && r.endPoint);
}
export {
  Y as N,
  lt as P,
  X as a,
  it as b,
  Z as c,
  ct as d,
  H as e,
  ut as f,
  D as g
};
