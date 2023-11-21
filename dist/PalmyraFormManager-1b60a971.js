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
}, at = {
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
function $(t, r, l, i, o, h, S) {
  const N = h || X, O = S || Y, F = U(t), [d, R] = k(r), [p, f] = k(M(r)), [v, C] = k({ status: !1, message: "" });
  var V, m;
  if (t.mutant) {
    const [e, s] = k({
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    });
    V = e, m = s;
  } else
    V = {
      required: t.required == !0,
      readonly: t.readonly == !0,
      visible: t.visible != !1
    }, m = (e) => {
      console.warn("Operation ignored, set mutant={true} in '" + t.attribute + "' field definition");
    };
  K(() => {
    R(r), f(M(r));
  }, [r]);
  function M(e) {
    return F.parse(Z(t, e));
  }
  const q = (e, s) => {
    f(e || ""), s && Q(() => {
      u(e);
      const y = t.attribute, z = t.name || y, A = E(e);
      if (l) {
        const P = F.format(e);
        l(y, P, { [y]: A.status });
      }
      N.onChange(z, e, A.status), O.onValue(z, e, A.status);
    });
  }, E = (e) => {
    if (i && i instanceof Function) {
      const s = i(e);
      if (!s.status)
        return s;
    }
    return { status: !0, message: "" };
  }, w = (e) => {
    a({
      status: !e.status,
      message: e.message
    });
  }, u = (e) => {
    const s = E(e);
    s.status && o != null && o.asyncValid ? (g(), o.asyncValid(e, c, a)) : w(s);
  }, c = (e) => {
  }, b = () => {
    v.message != "" && C({
      status: v.status,
      message: ""
    });
  }, g = () => {
    a({
      status: !1,
      message: ""
    });
  }, a = (e) => {
    e.status ? C(e) : C({
      status: !1,
      message: ""
    });
  }, _ = { onBlur: () => {
    u(p);
  }, onFocus: () => {
    b();
  }, onValueChange: (e) => {
    q(e, !0);
  } };
  return K(() => {
    var e = t.attribute;
    const s = E(p);
    l(void 0, void 0, { [e]: s.status });
  }, []), { data: p, setData: q, error: v, eventListeners: _, mutateOptions: V, setMutateOptions: m };
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
  return { addFieldRef: (i, o) => {
    t[i] = o;
  }, getFieldRef: (i) => {
    const o = t[i];
    if (o)
      return o.current;
  } };
}
function ut(t, r, l, i, o) {
  const h = o || { changeListeners: {}, valueListeners: {} }, S = i || W;
  var N = {}, O = {};
  const F = j(!1);
  var d = j(L({}, t));
  const R = r;
  var p = j({}), f = p.current, v = {};
  (() => l && l == "new")() && L(d.current, v);
  const V = (u, c, b) => {
    const g = u ? { [u]: c } : {};
    f = Object.assign({}, f, b), L(d.current, g);
    const a = m(f);
    a != F.current && (F.current = a, R && R(a));
  }, m = (u) => {
    for (var c in u)
      if (u[c] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: J(() => (d.current = L({}, t), (c, b, g) => {
    var a = c.name || c.attribute, n = { ...c, type: b };
    g && S.addFieldRef(a, g);
    const B = G(n);
    N[n.attribute] = n, O[n.attribute] = B;
    const x = h.changeListeners[a], _ = h.valueListeners[a];
    var e = $(
      n,
      I(n.attribute, d.current),
      V,
      B,
      void 0,
      x,
      _
    );
    try {
      H(n) && (e.store = T(n));
    } catch (y) {
      console.error("Error while getting LookupStore for attribute" + n.attribute, y);
    }
    if (n.type == "serverlookup") {
      var s = n.displayAttribute || n.attribute;
      e.displayValue = I(s, t);
    }
    return e;
  }), [t]), getFormData: () => L({}, d.current), initForm: () => {
  }, isFormValid: () => m(f) };
}
function H(t) {
  var r;
  return !!((r = t.storeOptions) != null && r.endPoint);
}
export {
  X as N,
  W as a,
  at as b,
  Y as c,
  ut as d,
  D as e,
  it as f,
  $ as g
};
