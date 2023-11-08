import { jsxs as n, jsx as r } from "react/jsx-runtime";
/* empty css                            */const o = () => {
  var a = "palmyra-form-field-container";
  return a;
};
var c = () => {
  var a = "palmyra-form-field-label", l = "palmyra-form-field-data";
  return { labelClass: a, fieldClass: l };
};
const m = ({ title: a, children: l }) => {
  const s = o() + "  palmyra-form-field-container-3column", { labelClass: e, fieldClass: i } = c();
  return /* @__PURE__ */ n("div", { className: s, children: [
    /* @__PURE__ */ r("div", { className: e, children: a }),
    /* @__PURE__ */ r("div", { className: i, children: l })
  ] });
};
export {
  m as default
};
