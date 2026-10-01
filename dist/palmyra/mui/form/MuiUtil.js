import { jsx as t, Fragment as s, jsxs as u } from "react/jsx-runtime";
const o = (e, d, i, a) => {
  const n = e.fieldProps || {}, l = a || {
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
    disabled: l.disabled,
    required: l.required
  };
  return l.readonly && (r.slotProps = { htmlInput: { readOnly: !0 } }), i && (r.label = i), r;
}, f = (e) => e.required && e.title ? /* @__PURE__ */ t(s, { children: /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: "3px" }, children: [
  e.title,
  /* @__PURE__ */ t("span", { style: { color: "red" }, children: "*" })
] }) }) : e.title;
export {
  o as copyMuiOptions,
  f as getFieldLabel
};
