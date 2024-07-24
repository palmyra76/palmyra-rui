import { jsx as t, Fragment as s, jsxs as u } from "react/jsx-runtime";
const o = (e, d, l, a) => {
  const n = e.fieldProps || {}, i = a || {
    required: e.required == !0,
    readonly: e.readonly == !0,
    visible: e.visible != !1,
    disabled: e.disabled == !0
  };
  var r = {
    placeholder: e.placeHolder,
    value: d,
    variant: e.variant,
    ...n,
    disabled: i.disabled,
    required: i.required
  };
  return i.readonly && (r.inputProps = { readOnly: !0 }), l && (r.label = l), r;
}, f = (e) => e.required && e.title ? /* @__PURE__ */ t(s, { children: /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: "3px" }, children: [
  e.title,
  /* @__PURE__ */ t("span", { style: { color: "red" }, children: "*" })
] }) }) : e.title;
export {
  o as copyMuiOptions,
  f as getFieldLabel
};
