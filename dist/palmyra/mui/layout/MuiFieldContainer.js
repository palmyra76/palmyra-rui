import { jsxs as n, jsx as r } from "react/jsx-runtime";
/* empty css                            */const o = (l) => {
  var a = "palmyra-form-field-container";
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
  const s = o(e), { labelClass: i, fieldClass: t } = f(e);
  return /* @__PURE__ */ n("div", { className: s, children: [
    /* @__PURE__ */ r("div", { className: i, children: l }),
    /* @__PURE__ */ r("div", { className: t, children: a })
  ] });
};
export {
  d as default
};
