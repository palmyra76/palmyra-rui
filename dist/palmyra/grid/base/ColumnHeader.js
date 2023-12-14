import { jsx as r, jsxs as p } from "react/jsx-runtime";
import { useState as b } from "react";
import { ArrowUpward as S, ArrowDownward as y } from "@mui/icons-material";
import { TableCell as D } from "@mui/material";
const v = ({ header: o, children: a, onSortChange: l, onHeaderStyle: m }) => {
  var i;
  const [e, u] = b(""), d = ((i = o.column.columnDef.meta) == null ? void 0 : i.attribute) || o.id, n = !o.column.columnDef.enableSorting, f = () => {
    if (!(l === void 0 || n)) {
      var t = e;
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
      u(t), l(d, t);
    }
  };
  var c = m(o.original);
  n || (c.cursor = "pointer");
  const s = o.column.columnDef.meta;
  return console.log("head", s.columnDef.type), /* @__PURE__ */ r(D, { colSpan: o.colSpan, style: c, children: /* @__PURE__ */ p("div", { style: {
    ...s.columnDef.type === "number" ? { textAlign: "end" } : {}
  }, onClick: () => f(), children: [
    a,
    e === "asc" ? /* @__PURE__ */ r(S, { style: { fontSize: "22px", color: "rgb(0,0,0,0.65)" } }) : e === "desc" ? /* @__PURE__ */ r(y, { style: { fontSize: "22px", color: "rgb(0,0,0,0.65)" } }) : null
  ] }) }, o.id);
};
export {
  v as default
};
