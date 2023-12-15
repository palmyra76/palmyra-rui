import { jsx as e, jsxs as p } from "react/jsx-runtime";
import { useState as b } from "react";
import { ArrowUpward as x, ArrowDownward as S } from "@mui/icons-material";
import { TableCell as y } from "@mui/material";
const v = ({ header: o, children: i, onSortChange: l, onHeaderStyle: a }) => {
  var s;
  const [t, m] = b(""), u = ((s = o.column.columnDef.meta) == null ? void 0 : s.attribute) || o.id, n = !o.column.columnDef.enableSorting, d = () => {
    if (!(l === void 0 || n)) {
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
      m(r), l(u, r);
    }
  };
  var c = a(o.original);
  n || (c.cursor = "pointer");
  const f = o.column.columnDef.meta;
  return /* @__PURE__ */ e(y, { colSpan: o.colSpan, style: c, children: /* @__PURE__ */ p("div", { style: {
    ...f.columnDef.type === "number" ? { textAlign: "end" } : {},
    display: "flex",
    gap: "2px"
  }, onClick: () => d(), children: [
    i,
    t === "asc" ? /* @__PURE__ */ e(x, { style: { fontSize: "22px", color: "rgb(0,0,0,0.5)" } }) : t === "desc" ? /* @__PURE__ */ e(S, { style: { fontSize: "22px", color: "rgb(0,0,0,0.5)" } }) : null
  ] }) }, o.id);
};
export {
  v as default
};
