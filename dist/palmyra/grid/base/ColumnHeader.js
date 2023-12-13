import { jsx as l, jsxs as p } from "react/jsx-runtime";
import { useState as f } from "react";
import { ArrowUpward as b, ArrowDownward as S } from "@mui/icons-material";
import { TableCell as x } from "@mui/material";
const v = ({ header: o, children: i, onSortChange: e, onHeaderStyle: a }) => {
  var n;
  console.log(o);
  const [t, m] = f(""), u = ((n = o.column.columnDef.meta) == null ? void 0 : n.attribute) || o.id, s = !o.column.columnDef.enableSorting, d = () => {
    if (!(e === void 0 || s)) {
      var r = t;
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
      m(r), e(u, r);
    }
  };
  var c = a(o.original);
  return s || (c.cursor = "pointer"), /* @__PURE__ */ l(x, { colSpan: o.colSpan, style: c, children: /* @__PURE__ */ p("div", { style: { display: "flex", gap: "5px" }, onClick: () => d(), children: [
    i,
    t === "asc" ? /* @__PURE__ */ l(b, { style: { fontSize: "22px", color: "rgb(0,0,0,0.65)" } }) : t === "desc" ? /* @__PURE__ */ l(S, { style: { fontSize: "22px", color: "rgb(0,0,0,0.65)" } }) : null
  ] }) }, o.id);
};
export {
  v as default
};
