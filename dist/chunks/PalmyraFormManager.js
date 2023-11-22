import { getValueByKey as x, setValueByKey as J } from "../palmyra/form/FormUtil.js";
import Q from "../palmyra/validator/DataValidator.js";
import { useState as C, useEffect as z, useMemo as I, useRef as P } from "react";
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
function D(t, r, c, i, o, L, S) {
  const M = L || Y, N = S || Z, F = W(t), [d, R] = C(r), [p, f] = C(B(r)), [v, h] = C({ status: !1, message: "" });
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
    R(r), f(B(r));
  }, [r]);
  function B(e) {
    return F.parse($(t, e));
  }
  const O = (e, s) => {
    f(e || ""), s && T(() => {
      u(e);
      const b = t.attribute, j = t.name || b, A = E(e);
      if (c) {
        const G = F.format(e);
        c(b, G, { [b]: A.status });
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
    s.status && o != null && o.asyncValid ? (l(), o.asyncValid(e, a, m)) : q(s);
  }, a = (e) => {
  }, y = () => {
    v.message != "" && h({
      status: v.status,
      message: ""
    });
  }, l = () => {
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
  const t = I(() => ({}), []);
  return { addFieldRef: (i, o) => {
    t[i] = o;
  }, getFieldRef: (i) => {
    const o = t[i];
    if (o)
      return o.current;
  } };
}
function ct(t, r, c, i, o) {
  const L = o || { eventListeners: {}, valueListeners: {} }, S = i || X;
  var M = {}, N = {};
  const F = P(!1);
  var d = P(k({}, t));
  const R = r;
  var p = P({}), f = p.current, v = {};
  (() => c && c == "new")() && k(d.current, v);
  const V = (u, a, y) => {
    u && J(u, d.current, a), f = Object.assign({}, f, y);
    const l = g(f);
    l != F.current && (F.current = l, R && R(l));
  }, g = (u) => {
    for (var a in u)
      if (u[a] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: I(() => (d.current = k({}, t), (a, y, l) => {
    var m = a.name || a.attribute, n = { ...a, type: y };
    l && S.addFieldRef(m, l);
    const w = Q(n);
    M[n.attribute] = n, N[n.attribute] = w;
    const K = a.eventListener || L.eventListeners[m], _ = L.valueListeners[m];
    var e = D(
      n,
      x(n.attribute, d.current),
      V,
      w,
      void 0,
      K,
      _
    );
    try {
      tt(n) && (e.store = U(n));
    } catch (b) {
      console.error("Error while getting LookupStore for attribute" + n.attribute, b);
    }
    if (n.type == "serverlookup") {
      var s = n.displayAttribute || n.attribute;
      e.displayValue = x(s, t);
    }
    return e;
  }), [t]), getFormData: () => k({}, d.current), initForm: () => {
  }, isFormValid: () => g(f) };
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
