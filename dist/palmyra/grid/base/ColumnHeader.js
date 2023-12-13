import { jsx as e, jsxs as p } from "react/jsx-runtime";
import { useState as f } from "react";
import { ArrowUpward as b, ArrowDownward as S } from "@mui/icons-material";
import { TableCell as x } from "@mui/material";
const v = ({ header: r, children: i, onSortChange: l, onHeaderStyle: a }) => {
  var n;
  const [t, d] = f(""), m = ((n = r.column.columnDef.meta) == null ? void 0 : n.attribute) || r.id, s = !r.column.columnDef.enableSorting, u = () => {
    if (!(l === void 0 || s)) {
      var o = t;
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
      d(o), l(m, o);
    }
  };
  var c = a(r.original);
  return s || (c.cursor = "pointer"), /* @__PURE__ */ e(x, { colSpan: r.colSpan, style: c, children: /* @__PURE__ */ p("div", { style: { display: "flex", gap: "5px" }, onClick: () => u(), children: [
    i,
    t === "asc" ? /* @__PURE__ */ e(b, { style: { fontSize: "22px", color: "rgb(0,0,0,0.65)" } }) : t === "desc" ? /* @__PURE__ */ e(S, { style: { fontSize: "22px", color: "rgb(0,0,0,0.65)" } }) : null
  ] }) }, r.id);
};
export {
  v as default
};
