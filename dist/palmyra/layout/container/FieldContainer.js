import "../../../assets/MuiFieldContainer.css";
import { jsx as s, jsxs as o } from "react/jsx-runtime";
const t = (l, r) => {
  var a = "palmyra-form-field-container";
  if (l && l.columns)
    switch (l.columns) {
      case 2:
      case "2":
        return r.columnWrap && r.columnWrap > 1 ? a : a + " palmyra-form-field-container-2column";
      case 3:
      case "3":
        return a + " palmyra-form-field-container-3column";
      case 4:
      case "4":
        return a + " palmyra-form-field-container-4column";
    }
  return a;
};
var i = (l, r) => {
  var a = "palmyra-form-field-label", e = "palmyra-form-field-data";
  return r.topLabel || l && l.topLabel ? {
    labelClass: "palmyra-form-field-label palmyra-form-field-label-topLabel",
    fieldClass: "palmyra-form-field-data palmyra-form-field-data-topLabel"
  } : { labelClass: a, fieldClass: e };
};
const u = ({ label: l, children: r, options: a, field: e }) => {
  const n = t(a, e), { labelClass: c, fieldClass: m } = i(a, e);
  return /* @__PURE__ */ s("form", { noValidate: !0, children: /* @__PURE__ */ o("div", { className: n, children: [
    /* @__PURE__ */ s("div", { className: c, children: l }),
    /* @__PURE__ */ s("div", { className: m, children: r })
  ] }) });
};
export {
  u as default
};
