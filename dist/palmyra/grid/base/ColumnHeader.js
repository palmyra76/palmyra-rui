import { jsx as r, jsxs as p } from "react/jsx-runtime";
import { useState as b } from "react";
import { ArrowUpward as x, ArrowDownward as y } from "@mui/icons-material";
import { TableCell as S } from "@mui/material";
const v = ({ header: t, children: a, onSortChange: l, onHeaderStyle: i }) => {
  var c;
  const [e, m] = b(""), u = ((c = t.column.columnDef.meta) == null ? void 0 : c.attribute) || t.id, n = !t.column.columnDef.enableSorting, f = () => {
    if (!(l === void 0 || n)) {
      var o = e;
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
      m(o), l(u, o);
    }
  };
  var s = i(t.original);
  n || (s.cursor = "pointer");
  const d = t.column.columnDef.meta;
  return /* @__PURE__ */ r(S, { colSpan: t.colSpan, style: s, children: /* @__PURE__ */ p("div", { style: {
    display: "flex",
    gap: "2px",
    justifyContent: d.columnDef.type === "select" ? "flex-end" : "flex-start"
  }, onClick: () => f(), children: [
    a,
    e === "asc" ? /* @__PURE__ */ r(x, { style: { fontSize: "22px", color: "rgb(0,0,0,0.5)" } }) : e === "desc" ? /* @__PURE__ */ r(y, { style: { fontSize: "22px", color: "rgb(0,0,0,0.5)" } }) : null
  ] }) }, t.id);
};
export {
  v as default
};
