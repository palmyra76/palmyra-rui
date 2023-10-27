import { getValueByKey as b } from "./FormUtil.js";
import w from "../validator/DataValidator.js";
import { getEventListeners as y } from "./PalmyraFieldManager.js";
import { mergeDeep as i } from "../utils/index.js";
import { useRef as n } from "react";
function K(s, d, l) {
  var F = {}, f = {};
  const m = n(!1);
  var g = n(i({}, s)), o = g.current;
  const u = d;
  var D = n({}), e = D.current, f = {}, V = {};
  (() => l && l == "new")() && i(o, V);
  const p = (r, a) => {
    e = Object.assign({}, e, a), i(o, r);
    const t = c(e);
    t != m.current && (m.current = t, u && u(t));
  }, c = (r) => {
    for (var a in r)
      if (r[a] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: (r, a) => {
    r.attribute;
    var t = { ...r, type: a };
    const v = w(t);
    F[t.attribute] = t, f[t.attribute] = v;
    var R = y(
      t,
      b(t.attribute, s),
      p,
      v,
      void 0
    );
    return R;
  }, getFormData: () => i({}, o), initForm: () => {
    console.log("Form Initialization");
  }, isFormValid: () => c(e) };
}
export {
  K as createFormData
};
