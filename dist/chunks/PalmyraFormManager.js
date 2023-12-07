import { getValueByKey as x, setValueByKey as z } from "../palmyra/form/FormUtil.js";
import J from "../palmyra/validator/DataValidator.js";
import { useState as C, useEffect as I, useMemo as D, useRef as P } from "react";
import { delay as Q, mergeDeep as k } from "../palmyra/utils/index.js";
import { getLookupStore as T } from "../palmyra/form/PalmyraStoreManager.js";
import { getFormatConverter as U } from "../palmyra/utils/converter/FormatterFactory.js";
const W = {
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
}, X = {
  onChange: function(t, r) {
  }
}, Y = {
  onValue: function(t, r, c) {
  }
}, Z = (t, r) => r ?? (t.defaultValue || "");
function $(t, r, c, i, o, L, S) {
  const M = L || X, N = S || Y, F = U(t), [f, R] = C(r), [v, d] = C(B(r)), [V, h] = C({ status: !1, message: "" });
  var y, p;
  if (t.mutant) {
    const [e, n] = C({
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    });
    y = e, p = n;
  } else
    y = {
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    }, p = (e) => {
      console.warn("Operation ignored, set mutant={true} in '" + t.attribute + "' field definition");
    };
  I(() => {
    R(r), d(B(r));
  }, [r]);
  function B(e) {
    return F.parse(Z(t, e));
  }
  const O = (e, n) => {
    d(e || ""), n && Q(() => {
      u(e);
      const g = t.attribute, j = t.name || g, _ = E(e);
      if (c) {
        const G = F.format(e);
        c(g, G, { [g]: _.status });
      }
      M.onChange(j, e, _.status), N.onValue(j, e, _.status);
    });
  }, E = (e) => {
    if (i && i instanceof Function) {
      const n = i(e);
      if (!n.status)
        return n;
    }
    return { status: !0, message: "" };
  }, q = (e) => {
    m({
      status: !e.status,
      message: e.message
    });
  }, u = (e) => {
    const n = E(e);
    n.status && o != null && o.asyncValid ? (l(), o.asyncValid(e, a, m)) : q(n);
  }, a = (e) => {
  }, b = () => {
    V.message != "" && h({
      status: V.status,
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
  }, A = { onBlur: () => {
    u(v);
  }, onFocus: () => {
    b();
  }, onValueChange: (e) => {
    O(e, !0);
  } };
  return I(() => {
    var e = t.attribute;
    const n = E(v);
    c(void 0, void 0, { [e]: n.status });
  }, []), { data: v, setData: O, error: V, eventListeners: A, mutateOptions: y, setMutateOptions: p };
}
function ut(t) {
  return {
    onBlur: t.onBlur,
    onFocus: t.onFocus,
    onChange: (r) => t.onValueChange(r.target.value)
  };
}
function H() {
  const t = D(() => ({}), []);
  return { addFieldRef: (i, o) => {
    t[i] = o;
  }, getFieldRef: (i) => {
    const o = t[i];
    if (o)
      return o.current;
  } };
}
function ct(t, r, c, i, o) {
  const L = o || { eventListeners: {}, valueListeners: {} }, S = i || W;
  var M = {}, N = {};
  const F = P(!1);
  var f = P(k({}, t));
  const R = r;
  var v = P({}), d = v.current, V = {};
  (() => c && c == "new")() && k(f.current, V);
  const y = (u, a, b) => {
    u && z(u, f.current, a), d = Object.assign({}, d, b);
    const l = p(d);
    l != F.current && (F.current = l, R && R(l));
  }, p = (u) => {
    for (var a in u)
      if (u[a] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: D(() => (f.current = k({}, t), (a, b, l) => {
    var m = a.name || a.attribute, s = { ...a, type: b };
    l && S.addFieldRef(m, l);
    const w = J(s);
    M[s.attribute] = s, N[s.attribute] = w;
    const K = a.eventListener || L.eventListeners[m], A = L.valueListeners[m];
    var e = $(
      s,
      x(s.attribute, f.current),
      y,
      w,
      void 0,
      K,
      A
    );
    try {
      tt(s) && (e.store = T(s));
    } catch (g) {
      console.error("Error while getting LookupStore for attribute" + s.attribute, g);
    }
    if (s.type == "serverlookup") {
      var n = s.displayAttribute || s.attribute;
      e.displayValue = x(n, t), e.setDisplayValue = (g) => {
        s.displayAttribute != s.attribute && z(s.displayAttribute, f.current, g);
      };
    }
    return e;
  }), [t]), getFormData: () => k({}, f.current), initForm: () => {
  }, isFormValid: () => p(d) };
}
const lt = () => {
  console.log("test");
};
function tt(t) {
  var r;
  return !!((r = t.storeOptions) != null && r.endPoint);
}
export {
  X as N,
  lt as P,
  W as a,
  it as b,
  Y as c,
  ct as d,
  H as e,
  ut as f,
  $ as g
};
