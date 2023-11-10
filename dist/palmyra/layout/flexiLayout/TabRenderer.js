import { jsx as e } from "react/jsx-runtime";
import { Box as l } from "@mui/material";
import m from "./SectionRenderer.js";
function f(r, n) {
  var o = r || 1, i = n;
  return {
    w: o,
    h: i
  };
}
const w = (r) => {
  const { layout: n, context: o } = r, i = n.sections;
  function c(t, a, s) {
    const { w: d, h } = f(t.width, t.height);
    return /* @__PURE__ */ e(l, { sx: { width: d, height: h }, children: /* @__PURE__ */ e("div", { className: "section-container", children: /* @__PURE__ */ e(
      m,
      {
        layout: t,
        context: a
      }
    ) }) }, (t.name || "tab") + s);
  }
  return /* @__PURE__ */ e("div", { style: { display: "flex", flexWrap: "wrap" }, children: i.map((t, a) => c(t, o, a)) });
};
export {
  w as default
};
