import { getValueByKey as z, setValueByKey as G } from "./palmyra/form/FormUtil.js";
import J from "./palmyra/validator/DataValidator.js";
import { useState as E, useEffect as I, useRef as K, useMemo as Q } from "react";
import { delay as T, mergeDeep as k } from "./palmyra/utils/index.js";
import { getLookupStore as U } from "./palmyra/form/PalmyraStoreManager.js";
import { getFormatConverter as W } from "./palmyra/utils/converter/FormatterFactory.js";
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
function D(t, r, c, a, n, L, S) {
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
      i(e);
      const b = t.attribute, x = t.name || b, A = C(e);
      if (c) {
        const P = F.format(e);
        c(b, P, { [b]: A.status });
      }
      N.onChange(x, e, A.status), O.onValue(x, e, A.status);
    });
  }, C = (e) => {
    if (a && a instanceof Function) {
      const s = a(e);
      if (!s.status)
        return s;
    }
    return { status: !0, message: "" };
  }, q = (e) => {
    d({
      status: !e.status,
      message: e.message
    });
  }, i = (e) => {
    const s = C(e);
    s.status && n != null && n.asyncValid ? (f(), n.asyncValid(e, u, d)) : q(s);
  }, u = (e) => {
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
    i(p);
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
  return { addFieldRef: (a, n) => {
    t[a] = n;
  }, getFieldRef: (a) => {
    const n = t[a];
    if (n)
      return n.current;
  } };
}
function ct(t, r, c, a, n) {
  const L = n || { changeListeners: {}, valueListeners: {} }, S = a || X;
  var N = {}, O = {};
  const F = K(!1);
  var m = K(k({}, t));
  const h = r;
  var p = K({}), l = p.current;
  console.log(l);
  var V = {};
  (() => c && c == "new")() && k(m.current, V);
  const v = (i, u, y) => {
    i && G(i, m.current, u), l = Object.assign({}, l, y);
    const f = g(l);
    f != F.current && (F.current = f, h && h(f));
  }, g = (i) => {
    for (var u in i)
      if (i[u] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: Q(() => (m.current = k({}, t), (u, y, f) => {
    var d = u.name || u.attribute, o = { ...u, type: y };
    f && S.addFieldRef(d, f);
    const w = J(o);
    N[o.attribute] = o, O[o.attribute] = w;
    const j = L.changeListeners[d], _ = L.valueListeners[d];
    var e = D(
      o,
      z(o.attribute, m.current),
      v,
      w,
      void 0,
      j,
      _
    );
    try {
      tt(o) && (e.store = U(o));
    } catch (b) {
      console.error("Error while getting LookupStore for attribute" + o.attribute, b);
    }
    if (o.type == "serverlookup") {
      var s = o.displayAttribute || o.attribute;
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
