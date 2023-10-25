import { jsx as t, jsxs as p } from "react/jsx-runtime";
import { useState as m } from "react";
import { ArrowUpward as f, ArrowDownward as u } from "@mui/icons-material";
import { TableCell as x } from "@mui/material";
const k = ({ header: o, children: l, onSortChange: s, onHeaderStyle: c }) => {
  const [e, a] = m(""), n = o.id, i = () => {
    if (s !== void 0) {
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
      a(r), s(n, r);
    }
  }, d = c(o.original);
  return /* @__PURE__ */ t(x, { colSpan: o.colSpan, style: d, children: /* @__PURE__ */ p("div", { style: { display: "flex", gap: "5px", cursor: "pointer" }, onClick: () => i(), children: [
    l,
    e === "asc" ? /* @__PURE__ */ t(f, { style: { fontSize: "22px", color: "rgb(0,0,0,0.65)" } }) : e === "desc" ? /* @__PURE__ */ t(u, { style: { fontSize: "22px", color: "rgb(0,0,0,0.65)" } }) : null
  ] }) }, o.id);
};
export {
  k as default
};
