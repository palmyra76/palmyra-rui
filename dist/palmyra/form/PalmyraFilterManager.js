import { getValueByKey as y, setValueByKey as F } from "./FormUtil.js";
import k from "../validator/DataValidator.js";
import { g as K } from "../../chunks/PalmyraFieldManager.js";
import { mergeDeep as b } from "../utils/index.js";
import { useMemo as g, useRef as M } from "react";
import { getLookupStore as S } from "./PalmyraStoreManager.js";
function B() {
  const t = g(() => ({}), []);
  return { addFieldRef: (a, i) => {
    t[a] = i;
  }, getFieldRef: (a) => {
    const i = t[a];
    if (i)
      return i.current;
  } };
}
function j(t, u, m) {
  const a = m || { eventListeners: {}, valueListeners: {} }, i = g(() => ({}), []), L = u || B();
  var R = {}, D = {}, l = M(b({}, t));
  const V = (c, r, f) => {
    c && F(c, l.current, r);
  };
  return { getFieldManager: g(() => (l.current = b({}, t), (r, f, s) => {
    var n = r.name || r.attribute, e = { ...r, type: f };
    s && (L.addFieldRef(n, s), i[n] = s);
    const o = k(e);
    R[e.attribute] = e, D[e.attribute] = o;
    const d = r.eventListener || a.eventListeners[n], A = a.valueListeners[n];
    var v = K(
      e,
      y(e.attribute, l.current),
      V,
      o,
      void 0,
      d,
      A
    );
    try {
      E(e) && (v.store = S(e));
    } catch (p) {
      console.error("Error while getting LookupStore for attribute" + e.attribute, p);
    }
    if (e.type == "serverlookup") {
      var h = e.displayAttribute || e.attribute;
      v.displayValue = y(h, t), v.setDisplayValue = (p) => {
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
function E(t) {
  var u;
  return !!((u = t.storeOptions) != null && u.endPoint);
}
export {
  j as createFilterData,
  B as createFilterFormHelper
};
