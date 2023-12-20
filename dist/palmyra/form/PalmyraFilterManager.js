import { setValueByKey as h } from "./FormUtil.js";
import M from "../validator/DataValidator.js";
import { e as S } from "../../chunks/PalmyraFieldManager.js";
import { mergeDeep as p } from "../utils/index.js";
import { useMemo as v, useRef as V } from "react";
import { getLookupStore as k } from "./PalmyraStoreManager.js";
function E() {
  const r = v(() => ({}), []);
  return { addFieldRef: (a, n) => {
    r[a] = n;
  }, getFieldRef: (a) => {
    const n = r[a];
    if (n)
      return n.current;
  } };
}
function P(r, u, m) {
  const a = m || { eventListeners: {}, valueListeners: {} }, n = v(() => ({}), []), F = u || E();
  var L = {}, R = {}, d = V(p({}, r));
  const D = (l, t, c) => {
    l && h(l, d.current, t);
  };
  return { getFieldManager: v(() => (d.current = p({}, r), (t, c, s) => {
    var o = t.name || t.attribute, e = { ...t, type: c };
    s && (F.addFieldRef(o, s), n[o] = s);
    const i = M(e);
    L[e.attribute] = e, R[e.attribute] = i;
    const f = t.eventListener || a.eventListeners[o], b = a.valueListeners[o];
    var g = S(
      e,
      d,
      D,
      i,
      void 0,
      f,
      b
    );
    try {
      H(e) && (g.store = k(e));
    } catch (y) {
      console.error("Error while getting LookupStore for attribute" + e.attribute, y);
    }
    return g;
  }), [r]), getFilterData: (l) => {
    var o;
    const t = l || "id", c = (o = d.current) == null ? void 0 : o[t];
    var s = c ? { [t]: c } : {};
    for (const e in n) {
      const i = n[e].current;
      if (i != null && i.getValue) {
        const f = i.getValue();
        f && f != "" && (s[e] = f);
      }
    }
    return s;
  } };
}
function H(r) {
  var u;
  return !!((u = r.storeOptions) != null && u.endPoint);
}
export {
  P as createFilterData,
  E as createFilterFormHelper
};
