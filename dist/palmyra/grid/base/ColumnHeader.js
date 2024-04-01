import { jsx as n, jsxs as k } from "react/jsx-runtime";
import { useState as y } from "react";
import { TableCell as m } from "@mui/material";
import { G as p } from "../../../chunks/iconBase.js";
function v(t) {
  return p({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m3 16 4 4 4-4" } }, { tag: "path", attr: { d: "M7 20V4" } }, { tag: "path", attr: { d: "m21 8-4-4-4 4" } }, { tag: "path", attr: { d: "M17 4v16" } }] })(t);
}
function h(t) {
  return p({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m21 16-4 4-4-4" } }, { tag: "path", attr: { d: "M17 20V4" } }, { tag: "path", attr: { d: "m3 8 4-4 4 4" } }, { tag: "path", attr: { d: "M7 4v16" } }] })(t);
}
const j = ({ header: t, children: a, onSortChange: c, onHeaderStyle: f }) => {
  var u, d;
  const [r, g] = y(""), b = ((u = t.column.columnDef.meta) == null ? void 0 : u.attribute) || t.id, i = !t.column.columnDef.enableSorting, s = t.column.columnDef.meta.columnDef.width, x = () => {
    if (!(c === void 0 || i)) {
      var o = r;
      switch (o) {
        case "asc":
          o = "desc";
          break;
        case "desc":
          o = "";
          break;
        default:
          o = "asc";
          break;
      }
      g(o), c(b, o);
    }
  };
  var e = f(t.original);
  i || (e.cursor = "pointer");
  const l = t.column.columnDef.meta;
  return t.column.columnDef.columns ? /* @__PURE__ */ n(m, { colSpan: t.colSpan, style: { ...e, width: s }, children: /* @__PURE__ */ n("div", { style: {
    display: "flex",
    fontWeight: "bold",
    alignItems: "center",
    gap: "10px",
    justifyContent: "center"
  }, children: a }) }, t.id) : /* @__PURE__ */ n(m, { colSpan: t.colSpan, style: { ...e, width: s }, children: /* @__PURE__ */ k("div", { style: {
    display: "flex",
    fontWeight: "bold",
    alignItems: "center",
    gap: "10px",
    justifyContent: ((d = l == null ? void 0 : l.columnDef) == null ? void 0 : d.type) === "number" ? "flex-end" : "flex-start"
  }, onClick: () => x(), children: [
    a,
    r === "asc" ? /* @__PURE__ */ n(h, { style: { fontSize: "18px", color: "rgb(0,0,0,0.5)" } }) : r === "desc" ? /* @__PURE__ */ n(v, { style: { fontSize: "18px", color: "rgb(0,0,0,0.5)" } }) : null
  ] }) }, t.id);
};
export {
  j as default
};
