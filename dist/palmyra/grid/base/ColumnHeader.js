import { jsx as l, jsxs as m } from "react/jsx-runtime";
import { useState as f } from "react";
import { ArrowUpward as u, ArrowDownward as b } from "@mui/icons-material";
import { TableCell as S } from "@mui/material";
const k = ({ header: o, children: n, onSortChange: t, onHeaderStyle: a }) => {
  const [e, i] = f(""), d = o.id, s = !o.column.columnDef.enableSorting, p = () => {
    if (!(t === void 0 || s)) {
      var r = e;
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
      i(r), t(d, r);
    }
  };
  var c = a(o.original);
  return s || (c.cursor = "pointer"), /* @__PURE__ */ l(S, { colSpan: o.colSpan, style: c, children: /* @__PURE__ */ m("div", { style: { display: "flex", gap: "5px" }, onClick: () => p(), children: [
    n,
    e === "asc" ? /* @__PURE__ */ l(u, { style: { fontSize: "22px", color: "rgb(0,0,0,0.65)" } }) : e === "desc" ? /* @__PURE__ */ l(b, { style: { fontSize: "22px", color: "rgb(0,0,0,0.65)" } }) : null
  ] }) }, o.id);
};
export {
  k as default
};
