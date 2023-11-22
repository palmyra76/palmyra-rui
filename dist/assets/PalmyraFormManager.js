import { getValueByKey as z, setValueByKey as G } from "../palmyra/form/FormUtil.js";
import J from "../palmyra/validator/DataValidator.js";
import { useState as E, useEffect as I, useRef as K, useMemo as Q } from "react";
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
  getOnChangeListeners: function(t) {
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
  const N = L || Y, O = S || Z, F = W(t), [m, h] = E(r), [p, l] = E(B(r)), [V, R] = E({ status: !1, message: "" });
  var v, g;
  if (t.mutant) {
    const [e, s] = E({
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    });
    v = e, g = s;
  } else
    v = {
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    }, g = (e) => {
      console.warn("Operation ignored, set mutant={true} in '" + t.attribute + "' field definition");
    };
  I(() => {
    h(r), l(B(r));
  }, [r]);
  function B(e) {
    return F.parse($(t, e));
  }
  const M = (e, s) => {
    l(e || ""), s && T(() => {
      u(e);
      const b = t.attribute, x = t.name || b, A = C(e);
      if (c) {
        const P = F.format(e);
        c(b, P, { [b]: A.status });
      }
      N.onChange(x, e, A.status), O.onValue(x, e, A.status);
    });
  }, C = (e) => {
    if (i && i instanceof Function) {
      const s = i(e);
      if (!s.status)
        return s;
    }
    return { status: !0, message: "" };
  }, q = (e) => {
    d({
      status: !e.status,
      message: e.message
    });
  }, u = (e) => {
    const s = C(e);
    s.status && o != null && o.asyncValid ? (f(), o.asyncValid(e, a, d)) : q(s);
  }, a = (e) => {
  }, y = () => {
    V.message != "" && R({
      status: V.status,
      message: ""
    });
  }, f = () => {
    d({
      status: !1,
      message: ""
    });
  }, d = (e) => {
    e.status ? R(e) : R({
      status: !1,
      message: ""
    });
  }, _ = { onBlur: () => {
    u(p);
  }, onFocus: () => {
    y();
  }, onValueChange: (e) => {
    M(e, !0);
  } };
  return I(() => {
    var e = t.attribute;
    const s = C(p);
    c(void 0, void 0, { [e]: s.status });
  }, []), { data: p, setData: M, error: V, eventListeners: _, mutateOptions: v, setMutateOptions: g };
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
  return { addFieldRef: (i, o) => {
    t[i] = o;
  }, getFieldRef: (i) => {
    const o = t[i];
    if (o)
      return o.current;
  } };
}
function ct(t, r, c, i, o) {
  const L = o || { changeListeners: {}, valueListeners: {} }, S = i || X;
  var N = {}, O = {};
  const F = K(!1);
  var m = K(k({}, t));
  const h = r;
  var p = K({}), l = p.current;
  console.log(l);
  var V = {};
  (() => c && c == "new")() && k(m.current, V);
  const v = (u, a, y) => {
    u && G(u, m.current, a), l = Object.assign({}, l, y);
    const f = g(l);
    f != F.current && (F.current = f, h && h(f));
  }, g = (u) => {
    for (var a in u)
      if (u[a] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: Q(() => (m.current = k({}, t), (a, y, f) => {
    var d = a.name || a.attribute, n = { ...a, type: y };
    f && S.addFieldRef(d, f);
    const w = J(n);
    N[n.attribute] = n, O[n.attribute] = w;
    const j = a.changeListener || L.changeListeners[d], _ = L.valueListeners[d];
    var e = D(
      n,
      z(n.attribute, m.current),
      v,
      w,
      void 0,
      j,
      _
    );
    try {
      tt(n) && (e.store = U(n));
    } catch (b) {
      console.error("Error while getting LookupStore for attribute" + n.attribute, b);
    }
    if (n.type == "serverlookup") {
      var s = n.displayAttribute || n.attribute;
      e.displayValue = z(s, t);
    }
    return e;
  }), [t]), getFormData: () => k({}, m.current), initForm: () => {
  }, isFormValid: () => g(l) };
}
function tt(t) {
  var r;
  return !!((r = t.storeOptions) != null && r.endPoint);
}
export {
  Y as N,
  X as a,
  it as b,
  Z as c,
  ct as d,
  H as e,
  ut as f,
  D as g
};
