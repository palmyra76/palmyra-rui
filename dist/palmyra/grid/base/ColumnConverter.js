import { jsx as c } from "react/jsx-runtime";
import { createColumnHelper as m } from "@tanstack/react-table";
import { formatColumn as p } from "./CellFormatter.js";
import { getValueByKey as d } from "../../form/FormUtil.js";
import { hasDot as b } from "../../utils/StringUtil.js";
const l = m();
function j(r, e) {
  return r.map((t) => g(t, e));
}
function g(r, e) {
  const t = r.sortable, n = r.searchable;
  var o = r.cellRenderer;
  const a = f(r), i = h();
  if (o)
    return l.display({
      id: s(r),
      enableSorting: t,
      enableColumnFilter: n,
      header: a,
      footer: i,
      cell: o
    });
  let u = e.formatCell(r, p(r));
  return l.accessor(C(r), {
    id: s(r),
    enableSorting: t,
    enableColumnFilter: n,
    header: a,
    footer: i,
    cell: u
  });
}
function C(r) {
  var e = r.attribute ? r.attribute : r.name;
  return b(e) ? (t) => d(e, t) : (t) => t[e];
}
function s(r) {
  return r.name ? r.name : r.attribute;
}
function f(r) {
  return () => /* @__PURE__ */ c("span", { children: r.title });
}
function h(r) {
  return (e) => e.column.id;
}
export {
  j as generateColumns
};
