import { jsxs as t, Fragment as r, jsx as i } from "react/jsx-runtime";
const o = (n) => {
  const e = JSON.stringify(n.layout);
  return /* @__PURE__ */ t(r, { children: [
    /* @__PURE__ */ i("div", { children: "Invalid section definition, provide section 'type' in the definition" }),
    /* @__PURE__ */ i("div", { children: e })
  ] });
};
export {
  o as default
};
