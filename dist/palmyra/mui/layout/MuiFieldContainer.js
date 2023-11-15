import { jsxs as o, jsx as r } from "react/jsx-runtime";
/* empty css                            */const t = (l) => {
  var a = "palmyra-form-field-container palmyra-form-field-container-2column";
  if (l)
    switch (l) {
      case 2:
      case "2":
        return a + " palmyra-form-field-container-2column";
      case 3:
      case "3":
        return a + " palmyra-form-field-container-3column";
      case 4:
      case "4":
        return a + " palmyra-form-field-container-4column";
      default:
        return a + " palmyra-form-field-container-2column";
    }
  return a;
};
var f = (l) => {
  var a = "palmyra-form-field-label", e = "palmyra-form-field-data";
  return l && l.topLabel ? {
    labelClass: "palmyra-form-field-label palmyra-form-field-label-topLabel",
    fieldClass: "palmyra-form-field-data palmyra-form-field-data-topLabel"
  } : { labelClass: a, fieldClass: e };
};
const d = ({ title: l, children: a, column: e }) => {
  const s = t(e), { labelClass: i, fieldClass: n } = f(e);
  return /* @__PURE__ */ o("div", { className: s, children: [
    /* @__PURE__ */ r("div", { className: i, children: l }),
    /* @__PURE__ */ r("div", { className: n, children: a })
  ] });
};
export {
  d as default
};
