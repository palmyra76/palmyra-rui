import { jsx as i, Fragment as d, jsxs as n } from "react/jsx-runtime";
const s = (e, l, r) => {
  var t = {
    disabled: e.disabled,
    required: e.required,
    placeholder: e.placeHolder,
    value: l
  };
  return r && (t.label = r), t;
}, c = (e) => {
  const l = e.labelMode == "title" ? e.label : "";
  return e.required && l ? /* @__PURE__ */ i(d, { children: /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: "3px" }, children: [
    l,
    /* @__PURE__ */ i("span", { style: { color: "red" }, children: "*" })
  ] }) }) : l;
};
export {
  s as copyMuiOptions,
  c as getFieldLabel
};
