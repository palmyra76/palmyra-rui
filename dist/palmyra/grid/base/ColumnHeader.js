import { jsx as t, jsxs as m } from "react/jsx-runtime";
import { useState as u } from "react";
import { ArrowUpward as f, ArrowDownward as b } from "@mui/icons-material";
import { TableCell as S } from "@mui/material";
const k = ({ header: o, children: s, onSortChange: l, onHeaderStyle: c }) => {
  const [e, n] = u(""), a = o.id, i = !o.column.columnDef.enableSorting, d = () => {
    if (!(l === void 0 || i)) {
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
      n(r), l(a, r);
    }
  }, p = c(o.original);
  return /* @__PURE__ */ t(S, { colSpan: o.colSpan, style: p, children: /* @__PURE__ */ m("div", { style: { display: "flex", gap: "5px", cursor: "pointer" }, onClick: () => d(), children: [
    s,
    e === "asc" ? /* @__PURE__ */ t(f, { style: { fontSize: "22px", color: "rgb(0,0,0,0.65)" } }) : e === "desc" ? /* @__PURE__ */ t(b, { style: { fontSize: "22px", color: "rgb(0,0,0,0.65)" } }) : null
  ] }) }, o.id);
};
export {
  k as default
};
