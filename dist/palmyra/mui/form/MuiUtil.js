import { jsx as t, Fragment as n, jsxs as a } from "react/jsx-runtime";
const s = (e, r, i) => {
  const d = e.fieldProps || {};
  var l = {
    disabled: e.disabled,
    required: e.required,
    placeholder: e.placeHolder,
    value: r,
    variant: e.variant,
    ...d
  };
  return i && (l.label = i), l;
}, u = (e) => e.required && e.title ? /* @__PURE__ */ t(n, { children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: "3px" }, children: [
  e.title,
  /* @__PURE__ */ t("span", { style: { color: "red" }, children: "*" })
] }) }) : e.title;
export {
  s as copyMuiOptions,
  u as getFieldLabel
};
