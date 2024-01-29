import { jsx as e, jsxs as p } from "react/jsx-runtime";
import { useState as b } from "react";
import { ArrowUpward as x, ArrowDownward as y } from "@mui/icons-material";
import { TableCell as S } from "@mui/material";
const v = ({ header: o, children: i, onSortChange: l, onHeaderStyle: a }) => {
  var c;
  const [r, m] = b(""), u = ((c = o.column.columnDef.meta) == null ? void 0 : c.attribute) || o.id, n = !o.column.columnDef.enableSorting, f = () => {
    if (!(l === void 0 || n)) {
      var t = r;
      switch (t) {
        case "asc":
          t = "desc";
          break;
        case "desc":
          t = "";
          break;
        default:
          t = "asc";
          break;
      }
      m(t), l(u, t);
    }
  };
  var s = a(o.original);
  n || (s.cursor = "pointer");
  const d = o.column.columnDef.meta;
  return /* @__PURE__ */ e(S, { colSpan: o.colSpan, style: s, children: /* @__PURE__ */ p("div", { style: {
    display: "flex",
    fontWeight: "bold",
    gap: "2px",
    justifyContent: d.columnDef.type === "number" ? "flex-end" : "flex-start"
  }, onClick: () => f(), children: [
    i,
    r === "asc" ? /* @__PURE__ */ e(x, { style: { fontSize: "22px", color: "rgb(0,0,0,0.5)" } }) : r === "desc" ? /* @__PURE__ */ e(y, { style: { fontSize: "22px", color: "rgb(0,0,0,0.5)" } }) : null
  ] }) }, o.id);
};
export {
  v as default
};
