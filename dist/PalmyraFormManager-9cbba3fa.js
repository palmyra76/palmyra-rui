import { getValueByKey as I } from "./palmyra/form/FormUtil.js";
import G from "./palmyra/validator/DataValidator.js";
import { useState as k, useEffect as K, useRef as j, useMemo as J } from "react";
import { delay as Q, mergeDeep as L } from "./palmyra/utils/index.js";
import { getLookupStore as T } from "./palmyra/form/PalmyraStoreManager.js";
import { getFormatConverter as U } from "./palmyra/utils/converter/FormatterFactory.js";
const W = {
  getFieldRef: function(t) {
  },
  addFieldRef: function(t, r) {
  }
}, nt = {
  getFormHelper: function() {
    return D();
  },
  getOnChangeListeners: function(t) {
    return {};
  },
  getValueListeners: function(t) {
    return {};
  }
}, X = {
  onChange: function(t, r) {
  }
}, Y = {
  onValue: function(t, r, l) {
  }
}, Z = (t, r) => r ?? (t.defaultValue || "");
function $(t, r, l, i, a, d, S) {
  d && console.log(t.attribute, d);
  const N = d || X, M = S || Y, p = U(t), [m, R] = k(r), [V, f] = k(O(r)), [v, C] = k({ status: !1, message: "" });
  var b, g;
  if (t.mutant) {
    const [e, s] = k({
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    });
    b = e, g = s;
  } else
    b = {
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    }, g = (e) => {
    };
  K(() => {
    R(r), f(O(r));
  }, [r]);
  function O(e) {
    return p.parse(Z(t, e));
  }
  const q = (e, s) => {
    f(e || ""), s && Q(() => {
      u(e);
      const h = t.attribute, z = t.name || h, A = E(e);
      if (l) {
        const P = p.format(e);
        l(h, P, { [h]: A.status });
      }
      N.onChange(z, e, A.status), M.onValue(z, e, A.status);
    });
  }, E = (e) => {
    if (i && i instanceof Function) {
      const s = i(e);
      if (!s.status)
        return s;
    }
    return { status: !0, message: "" };
  }, B = (e) => {
    n({
      status: !e.status,
      message: e.message
    });
  }, u = (e) => {
    const s = E(e);
    s.status && a != null && a.asyncValid ? (F(), a.asyncValid(e, c, n)) : B(s);
  }, c = (e) => {
  }, y = () => {
    v.message != "" && C({
      status: v.status,
      message: ""
    });
  }, F = () => {
    n({
      status: !1,
      message: ""
    });
  }, n = (e) => {
    e.status ? C(e) : C({
      status: !1,
      message: ""
    });
  }, _ = { onBlur: () => {
    u(V);
  }, onFocus: () => {
    y();
  }, onValueChange: (e) => {
    q(e, !0);
  } };
  return K(() => {
    var e = t.attribute;
    const s = E(V);
    l(void 0, void 0, { [e]: s.status });
  }, []), { data: V, setData: q, error: v, eventListeners: _, mutateOptions: b, setMutateOptions: g };
}
function it(t) {
  return {
    onBlur: t.onBlur,
    onFocus: t.onFocus,
    onChange: (r) => t.onValueChange(r.target.value)
  };
}
function D() {
  const t = {};
  return { addFieldRef: (i, a) => {
    t[i] = a;
  }, getFieldRef: (i) => {
    const a = t[i];
    if (a)
      return a.current;
  } };
}
function ut(t, r, l, i, a) {
  const d = a || { changeListeners: {}, valueListeners: {} }, S = i || W;
  var N = {}, M = {};
  const p = j(!1);
  var m = j(L({}, t));
  const R = r;
  var V = j({}), f = V.current, v = {};
  (() => l && l == "new")() && L(m.current, v);
  const b = (u, c, y) => {
    const F = u ? { [u]: c } : {};
    f = Object.assign({}, f, y), L(m.current, F);
    const n = g(f);
    n != p.current && (p.current = n, R && R(n));
  }, g = (u) => {
    for (var c in u)
      if (u[c] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: J(() => (m.current = L({}, t), (c, y, F) => {
    var n = c.name || c.attribute, o = { ...c, type: y };
    F && S.addFieldRef(n, F);
    const w = G(o);
    N[o.attribute] = o, M[o.attribute] = w;
    const x = d.changeListeners[n], _ = d.valueListeners[n];
    var e = $(
      o,
      I(o.attribute, m.current),
      b,
      w,
      void 0,
      x,
      _
    );
    try {
      H(o) && (e.store = T(o));
    } catch (h) {
      console.error("Error while getting LookupStore for attribute" + o.attribute, h);
    }
    if (o.type == "serverlookup") {
      var s = o.displayAttribute || o.attribute;
      e.displayValue = I(s, t);
    }
    return e;
  }), [t]), getFormData: () => L({}, m.current), initForm: () => {
  }, isFormValid: () => g(f) };
}
function H(t) {
  var r;
  return !!((r = t.storeOptions) != null && r.endPoint);
}
export {
  X as N,
  W as a,
  nt as b,
  Y as c,
  ut as d,
  D as e,
  it as f,
  $ as g
};
