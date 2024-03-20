import { jsx as r, jsxs as x } from "react/jsx-runtime";
import { useState as k } from "react";
import { TableCell as d } from "@mui/material";
import { G as p } from "../../../chunks/iconBase.js";
function y(t) {
  return p({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m3 16 4 4 4-4" } }, { tag: "path", attr: { d: "M7 20V4" } }, { tag: "path", attr: { d: "m21 8-4-4-4 4" } }, { tag: "path", attr: { d: "M17 4v16" } }] })(t);
}
function v(t) {
  return p({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m21 16-4 4-4-4" } }, { tag: "path", attr: { d: "M17 20V4" } }, { tag: "path", attr: { d: "m3 8 4-4 4 4" } }, { tag: "path", attr: { d: "M7 4v16" } }] })(t);
}
const C = ({ header: t, children: a, onSortChange: s, onHeaderStyle: m }) => {
  var c, u;
  const [n, f] = k(""), g = ((c = t.column.columnDef.meta) == null ? void 0 : c.attribute) || t.id, i = !t.column.columnDef.enableSorting, b = () => {
    if (!(s === void 0 || i)) {
      var o = n;
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
      f(o), s(g, o);
    }
  };
  var e = m(t.original);
  i || (e.cursor = "pointer");
  const l = t.column.columnDef.meta;
  return t.column.columnDef.columns ? /* @__PURE__ */ r(d, { colSpan: t.colSpan, style: e, children: /* @__PURE__ */ r("div", { style: {
    display: "flex",
    fontWeight: "bold",
    alignItems: "center",
    gap: "10px",
    justifyContent: "center"
  }, children: a }) }, t.id) : /* @__PURE__ */ r(d, { colSpan: t.colSpan, style: e, children: /* @__PURE__ */ x("div", { style: {
    display: "flex",
    fontWeight: "bold",
    alignItems: "center",
    gap: "10px",
    justifyContent: ((u = l == null ? void 0 : l.columnDef) == null ? void 0 : u.type) === "number" ? "flex-end" : "flex-start"
  }, onClick: () => b(), children: [
    a,
    n === "asc" ? /* @__PURE__ */ r(v, { style: { fontSize: "18px", color: "rgb(0,0,0,0.5)" } }) : n === "desc" ? /* @__PURE__ */ r(y, { style: { fontSize: "18px", color: "rgb(0,0,0,0.5)" } }) : null
  ] }) }, t.id);
};
export {
  C as default
};
