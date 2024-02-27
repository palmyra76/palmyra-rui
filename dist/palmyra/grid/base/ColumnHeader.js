import { jsx as e, jsxs as g } from "react/jsx-runtime";
import { useState as b } from "react";
import { TableCell as k } from "@mui/material";
import { G as i } from "../../../chunks/iconBase.js";
function h(t) {
  return i({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m3 16 4 4 4-4" } }, { tag: "path", attr: { d: "M7 20V4" } }, { tag: "path", attr: { d: "m21 8-4-4-4 4" } }, { tag: "path", attr: { d: "M17 4v16" } }] })(t);
}
function x(t) {
  return i({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m21 16-4 4-4-4" } }, { tag: "path", attr: { d: "M17 20V4" } }, { tag: "path", attr: { d: "m3 8 4-4 4 4" } }, { tag: "path", attr: { d: "M7 4v16" } }] })(t);
}
const D = ({ header: t, children: c, onSortChange: n, onHeaderStyle: u }) => {
  var s;
  const [o, d] = b(""), m = ((s = t.column.columnDef.meta) == null ? void 0 : s.attribute) || t.id, a = !t.column.columnDef.enableSorting, p = () => {
    if (!(n === void 0 || a)) {
      var r = o;
      switch (r) {
        case "asc":
          r = "desc";
          break;
        case "desc":
          r = "";
          break;
        default:
          r = "asc";
          break;
      }
      d(r), n(m, r);
    }
  };
  var l = u(t.original);
  a || (l.cursor = "pointer");
  const f = t.column.columnDef.meta;
  return /* @__PURE__ */ e(k, { colSpan: t.colSpan, style: l, children: /* @__PURE__ */ g("div", { style: {
    display: "flex",
    fontWeight: "bold",
    alignItems: "center",
    gap: "10px",
    justifyContent: f.columnDef.type === "number" ? "flex-end" : "flex-start"
  }, onClick: () => p(), children: [
    c,
    o === "asc" ? /* @__PURE__ */ e(x, { style: { fontSize: "18px", color: "rgb(0,0,0,0.5)" } }) : o === "desc" ? /* @__PURE__ */ e(h, { style: { fontSize: "18px", color: "rgb(0,0,0,0.5)" } }) : null
  ] }) }, t.id);
};
export {
  D as default
};
