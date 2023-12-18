import { setValueByKey as M } from "./FormUtil.js";
import S from "../validator/DataValidator.js";
import { g as V } from "../../chunks/PalmyraFieldManager.js";
import { mergeDeep as F } from "../utils/index.js";
import { useMemo as v, useRef as k } from "react";
import { getLookupStore as E } from "./PalmyraStoreManager.js";
function H() {
  const r = v(() => ({}), []);
  return { addFieldRef: (a, n) => {
    r[a] = n;
  }, getFieldRef: (a) => {
    const n = r[a];
    if (n)
      return n.current;
  } };
}
function _(r, u, m) {
  const a = m || { eventListeners: {}, valueListeners: {} }, n = v(() => ({}), []), L = u || H();
  var R = {}, D = {}, d = k(F({}, r));
  const b = (c, t, l) => {
    c && M(c, d.current, t);
  };
  return { getFieldManager: v(() => (d.current = F({}, r), (t, l, s) => {
    var p;
    var o = t.name || t.attribute, e = { ...t, type: l };
    s && (L.addFieldRef(o, s), n[o] = s);
    const i = S(e);
    R[e.attribute] = e, D[e.attribute] = i;
    const f = t.eventListener || a.eventListeners[o], y = a.valueListeners[o];
    var g = V(
      e,
      (p = d.current) == null ? void 0 : p[e.attribute],
      b,
      i,
      void 0,
      f,
      y
    );
    try {
      K(e) && (g.store = E(e));
    } catch (h) {
      console.error("Error while getting LookupStore for attribute" + e.attribute, h);
    }
    return g;
  }), [r]), getFilterData: (c) => {
    var o;
    const t = c || "id", l = (o = d.current) == null ? void 0 : o[t];
    var s = l ? { [t]: l } : {};
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
function K(r) {
  var u;
  return !!((u = r.storeOptions) != null && u.endPoint);
}
export {
  _ as createFilterData,
  H as createFilterFormHelper
};
