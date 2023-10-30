import "../../../assets/MuiFieldContainer.css";
import { jsxs as i, jsx as r } from "react/jsx-runtime";
const o = () => {
  var a = "palmyra-form-field-container";
  return a;
};
var t = () => {
  var a = "palmyra-form-field-label", l = "palmyra-form-field-data";
  return { labelClass: a, fieldClass: l };
};
const d = ({ title: a, children: l }) => {
  const s = o() + "  palmyra-form-field-container-3column", { labelClass: e, fieldClass: n } = t();
  return /* @__PURE__ */ i("div", { className: s, children: [
    /* @__PURE__ */ r("div", { className: e, children: a }),
    /* @__PURE__ */ r("div", { className: n, children: l })
  ] });
};
export {
  d as default
};
