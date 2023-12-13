import { jsx as m } from "react/jsx-runtime";
import { createColumnHelper as b } from "@tanstack/react-table";
import { formatColumn as c } from "./CellFormatter.js";
import { getValueByKey as p } from "../../form/FormUtil.js";
import { hasDot as d } from "../../utils/StringUtil.js";
const s = b();
function j(t, r) {
  return t.map((e) => g(e, r));
}
function g(t, r) {
  const e = t.sortable, a = t.searchable;
  var n = t.cellRenderer;
  const i = h(t), o = y();
  if (n)
    return s.display({
      id: u(t),
      meta: {
        attribute: t.attribute
      },
      enableSorting: e,
      enableColumnFilter: a,
      header: i,
      footer: o,
      cell: n
    });
  let l = r.formatCell(t, c(t));
  return s.accessor(C(t), {
    id: u(t),
    meta: {
      attribute: t.attribute
    },
    enableSorting: e,
    enableColumnFilter: a,
    header: i,
    footer: o,
    cell: l
  });
}
function C(t) {
  var r = t.attribute ? t.attribute : t.name;
  return d(r) ? (e) => p(r, e) : (e) => e[r];
}
function u(t) {
  return t.name ? t.name : t.attribute;
}
function h(t) {
  return () => /* @__PURE__ */ m("span", { children: t.title });
}
function y(t) {
  return (r) => r.column.id;
}
export {
  j as generateColumns
};
