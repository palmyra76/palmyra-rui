import { jsxs as o, jsx as s } from "react/jsx-runtime";
import '../../../assets/FieldContainer.css';const i = (l, e) => {
  var a = "palmyra-form-field-container";
  if (l && l.columns)
    switch (l.columns) {
      case 2:
      case "2":
        return e.columnWrap && e.columnWrap > 1 ? a : a + " palmyra-form-field-container-2column";
      case 3:
      case "3":
        return a + " palmyra-form-field-container-3column";
      case 4:
      case "4":
        return a + " palmyra-form-field-container-4column";
    }
  return a;
};
var t = (l, e) => {
  var a = "palmyra-form-field-label", r = "palmyra-form-field-data";
  return e.topLabel || l && l.topLabel ? {
    labelClass: "palmyra-form-field-label palmyra-form-field-label-topLabel",
    fieldClass: "palmyra-form-field-data palmyra-form-field-data-topLabel"
  } : { labelClass: a, fieldClass: r };
};
const d = ({ label: l, children: e, options: a, field: r }) => {
  const c = i(a, r), { labelClass: n, fieldClass: m } = t(a, r);
  return /* @__PURE__ */ o("div", { className: c, children: [
    /* @__PURE__ */ s("div", { className: n, children: l }),
    /* @__PURE__ */ s("div", { className: m, children: e })
  ] });
};
export {
  d as default
};
