import { getValueByKey as k, setValueByKey as F } from "./FormUtil.js";
import K from "../validator/DataValidator.js";
import { g as M } from "../../chunks/PalmyraFieldManager.js";
import { mergeDeep as b } from "../utils/index.js";
import { useMemo as g, useRef as S } from "react";
import { getLookupStore as B } from "./PalmyraStoreManager.js";
function E() {
  const t = g(() => ({}), []);
  return { addFieldRef: (a, i) => {
    t[a] = i;
  }, getFieldRef: (a) => {
    const i = t[a];
    if (i)
      return i.current;
  } };
}
function z(t, u, m) {
  const a = m || { eventListeners: {}, valueListeners: {} }, i = g(() => ({}), []), L = u || E();
  var R = {}, D = {}, l = S(b({}, t));
  const V = (c, r, f) => {
    c && F(c, l.current, r);
  };
  return { getFieldManager: g(() => (l.current = b({}, t), (r, f, s) => {
    var y;
    var n = r.name || r.attribute, e = { ...r, type: f };
    s && (L.addFieldRef(n, s), i[n] = s);
    const o = K(e);
    R[e.attribute] = e, D[e.attribute] = o;
    const d = r.eventListener || a.eventListeners[n], A = a.valueListeners[n];
    var v = M(
      e,
      (y = l.current) == null ? void 0 : y[e.attribute],
      V,
      o,
      void 0,
      d,
      A
    );
    try {
      H(e) && (v.store = B(e));
    } catch (p) {
      console.error("Error while getting LookupStore for attribute" + e.attribute, p);
    }
    if (e.type == "serverlookup") {
      var h = e.displayAttribute || e.attribute;
      v.displayValue = k(h, t), v.setDisplayValue = (p) => {
        e.displayAttribute != e.attribute && F(e.displayAttribute, l.current, p);
      };
    }
    return v;
  }), [t]), getFilterData: (c) => {
    var n;
    const r = c || "id", f = (n = l.current) == null ? void 0 : n[r];
    var s = f ? { [r]: f } : {};
    for (const e in i) {
      const o = i[e].current;
      if (o != null && o.getValue) {
        const d = o.getValue();
        d && d != "" && (s[e] = d);
      }
    }
    return s;
  } };
}
function H(t) {
  var u;
  return !!((u = t.storeOptions) != null && u.endPoint);
}
export {
  z as createFilterData,
  E as createFilterFormHelper
};
