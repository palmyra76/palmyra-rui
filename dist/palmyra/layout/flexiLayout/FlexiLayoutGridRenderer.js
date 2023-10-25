import { jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useImperativeHandle as l } from "react";
import m from "./TabRenderer.js";
const x = s(function(t, o) {
  const { layout: n } = t;
  l(o, () => ({
    resetFilter() {
    }
  }), []);
  const a = {}, i = n.tabs;
  return /* @__PURE__ */ e("div", { children: i.map((r, d) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    m,
    {
      layout: r,
      context: a
    }
  ) }, r.name + d)) });
});
export {
  x as default
};
