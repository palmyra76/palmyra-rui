import { jsx as n, jsxs as y } from "react/jsx-runtime";
import { useState as v } from "react";
import { TableCell as f } from "@mui/material";
import { G as g } from "../../../chunks/iconBase.js";
function D(t) {
  return g({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m3 16 4 4 4-4" }, child: [] }, { tag: "path", attr: { d: "M7 20V4" }, child: [] }, { tag: "path", attr: { d: "m21 8-4-4-4 4" }, child: [] }, { tag: "path", attr: { d: "M17 4v16" }, child: [] }] })(t);
}
function S(t) {
  return g({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m21 16-4 4-4-4" }, child: [] }, { tag: "path", attr: { d: "M17 20V4" }, child: [] }, { tag: "path", attr: { d: "m3 8 4-4 4 4" }, child: [] }, { tag: "path", attr: { d: "M7 4v16" }, child: [] }] })(t);
}
const M = ({ header: t, children: c, onSortChange: i, onHeaderStyle: h }) => {
  var u, d, m, p;
  const [r, b] = v(""), x = ((u = t.column.columnDef.meta) == null ? void 0 : u.attribute) || t.id, a = !t.column.columnDef.enableSorting, s = ((m = (d = t.column.columnDef.meta) == null ? void 0 : d.columnDef) == null ? void 0 : m.width) || "auto", k = () => {
    if (!(i === void 0 || a)) {
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
      b(o), i(x, o);
    }
  };
  var e = h(t.original);
  a || (e.cursor = "pointer");
  const l = t.column.columnDef.meta;
  return t.column.columnDef.columns ? /* @__PURE__ */ n(f, { colSpan: t.colSpan, style: { ...e }, children: /* @__PURE__ */ n("div", { style: {
    display: "flex",
    fontWeight: "bold",
    alignItems: "center",
    gap: "10px",
    width: s,
    justifyContent: "center"
  }, children: c }) }, t.id) : /* @__PURE__ */ n(f, { colSpan: t.colSpan, style: { ...e }, children: /* @__PURE__ */ y("div", { style: {
    display: "flex",
    fontWeight: "bold",
    alignItems: "center",
    gap: "10px",
    width: s,
    justifyContent: ((p = l == null ? void 0 : l.columnDef) == null ? void 0 : p.type) === "number" ? "flex-end" : "flex-start"
  }, onClick: () => k(), children: [
    c,
    r === "asc" ? /* @__PURE__ */ n(S, { style: { fontSize: "18px", color: "rgb(0,0,0,0.5)" } }) : r === "desc" ? /* @__PURE__ */ n(D, { style: { fontSize: "18px", color: "rgb(0,0,0,0.5)" } }) : null
  ] }) }, t.id);
};
export {
  M as default
};
