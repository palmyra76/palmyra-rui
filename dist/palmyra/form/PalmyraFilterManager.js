import { getValueByKey as m, setValueByKey as y } from "./FormUtil.js";
import k from "../validator/DataValidator.js";
import { g as K } from "../../chunks/PalmyraFieldManager.js";
import { mergeDeep as F } from "../utils/index.js";
import { useMemo as p, useRef as M } from "react";
import { getLookupStore as S } from "./PalmyraStoreManager.js";
function B() {
  const t = p(() => ({}), []);
  return { addFieldRef: (a, i) => {
    t[a] = i;
  }, getFieldRef: (a) => {
    const i = t[a];
    if (i)
      return i.current;
  } };
}
function j(t, u, g) {
  const a = g || { eventListeners: {}, valueListeners: {} }, i = p(() => ({}), []), b = u || B();
  var L = {}, R = {}, l = M(F({}, t));
  const D = (c, r, f) => {
    c && y(c, l.current, r);
  };
  return { getFieldManager: p(() => (l.current = F({}, t), (r, f, s) => {
    var n = r.name || r.attribute, e = { ...r, type: f };
    s && (b.addFieldRef(n, s), i[n] = s);
    const o = k(e);
    L[e.attribute] = e, R[e.attribute] = o;
    const V = r.eventListener || a.eventListeners[n], A = a.valueListeners[n];
    var d = K(
      e,
      m(e.attribute, l.current),
      D,
      o,
      void 0,
      V,
      A
    );
    try {
      E(e) && (d.store = S(e));
    } catch (v) {
      console.error("Error while getting LookupStore for attribute" + e.attribute, v);
    }
    if (e.type == "serverlookup") {
      var h = e.displayAttribute || e.attribute;
      d.displayValue = m(h, t), d.setDisplayValue = (v) => {
        e.displayAttribute != e.attribute && y(e.displayAttribute, l.current, v);
      };
    }
    return d;
  }), [t]), getFilterData: (c) => {
    var n;
    const r = c || "id", f = (n = l.current) == null ? void 0 : n[r];
    var s = f ? { [r]: f } : {};
    for (const e in i) {
      const o = i[e].current;
      o != null && o.getValue && (s[e] = o.getValue());
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
