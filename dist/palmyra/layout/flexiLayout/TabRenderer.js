import { jsx as a } from "react/jsx-runtime";
import { Box as l } from "@mui/material";
import m from "./SectionRenderer.js";
function f(e, r) {
  var n = e || 1, o = r;
  return {
    w: n,
    h: o
  };
}
const w = (e) => {
  const { layout: r, context: n } = e, o = r.sections;
  function h(t, i, s) {
    const { w: c, h: d } = f(t.width, t.height);
    return /* @__PURE__ */ a(l, { sx: { width: c, height: d }, children: /* @__PURE__ */ a(
      m,
      {
        layout: t,
        context: i
      }
    ) }, t.name + s);
  }
  return /* @__PURE__ */ a("div", { style: { display: "flex", flexWrap: "wrap" }, children: o.map((t, i) => h(t, n, i)) });
};
export {
  w as default
};
