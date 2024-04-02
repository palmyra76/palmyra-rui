import { jsx as n, jsxs as v } from "react/jsx-runtime";
import { useState as h } from "react";
import { TableCell as f } from "@mui/material";
import { G as g } from "../../../chunks/iconBase.js";
function D(t) {
  return g({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m3 16 4 4 4-4" } }, { tag: "path", attr: { d: "M7 20V4" } }, { tag: "path", attr: { d: "m21 8-4-4-4 4" } }, { tag: "path", attr: { d: "M17 4v16" } }] })(t);
}
function S(t) {
  return g({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m21 16-4 4-4-4" } }, { tag: "path", attr: { d: "M17 20V4" } }, { tag: "path", attr: { d: "m3 8 4-4 4 4" } }, { tag: "path", attr: { d: "M7 4v16" } }] })(t);
}
const M = ({ header: t, children: a, onSortChange: c, onHeaderStyle: b }) => {
  var u, d, m, p;
  const [r, x] = h(""), k = ((u = t.column.columnDef.meta) == null ? void 0 : u.attribute) || t.id, i = !t.column.columnDef.enableSorting, s = ((m = (d = t.column.columnDef.meta) == null ? void 0 : d.columnDef) == null ? void 0 : m.width) || "auto", y = () => {
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
      x(o), c(k, o);
    }
  };
  var e = b(t.original);
  i || (e.cursor = "pointer");
  const l = t.column.columnDef.meta;
  return t.column.columnDef.columns ? /* @__PURE__ */ n(f, { colSpan: t.colSpan, style: { ...e }, children: /* @__PURE__ */ n("div", { style: {
    display: "flex",
    fontWeight: "bold",
    alignItems: "center",
    gap: "10px",
    width: s,
    justifyContent: "center"
  }, children: a }) }, t.id) : /* @__PURE__ */ n(f, { colSpan: t.colSpan, style: { ...e }, children: /* @__PURE__ */ v("div", { style: {
    display: "flex",
    fontWeight: "bold",
    alignItems: "center",
    gap: "10px",
    width: s,
    justifyContent: ((p = l == null ? void 0 : l.columnDef) == null ? void 0 : p.type) === "number" ? "flex-end" : "flex-start"
  }, onClick: () => y(), children: [
    a,
    r === "asc" ? /* @__PURE__ */ n(S, { style: { fontSize: "18px", color: "rgb(0,0,0,0.5)" } }) : r === "desc" ? /* @__PURE__ */ n(D, { style: { fontSize: "18px", color: "rgb(0,0,0,0.5)" } }) : null
  ] }) }, t.id);
};
export {
  M as default
};
