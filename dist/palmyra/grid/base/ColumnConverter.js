import { jsx as p } from "react/jsx-runtime";
import { createColumnHelper as l } from "@tanstack/react-table";
import { formatColumn as u } from "./CellFormatter.js";
import { getValueByKey as g } from "../../form/FormUtil.js";
import { hasDot as m } from "../../utils/StringUtil.js";
const s = l();
function j(t, r) {
  return t.map((e) => C(e, r));
}
function C(t, r) {
  const e = t.sortable, a = t.searchable;
  var n = t.cellRenderer;
  const i = r.formatHeader(t, h(t)), o = r.formatFooter(t, v());
  if (n)
    return s.display({
      id: b(t),
      meta: {
        attribute: t.attribute,
        columnDef: t
      },
      enableSorting: e,
      enableColumnFilter: a,
      header: i,
      footer: o,
      cell: n
    });
  let d = r.formatCell(t, u(t));
  return s.accessor(c(t), {
    id: b(t),
    meta: {
      attribute: t.attribute,
      columnDef: t
    },
    enableSorting: e,
    enableColumnFilter: a,
    header: i,
    footer: o,
    cell: d
  });
}
function c(t) {
  var r = t.attribute ? t.attribute : t.name;
  return m(r) ? (e) => g(r, e) : (e) => e[r];
}
function b(t) {
  return t.name ? t.name : t.attribute;
}
function h(t) {
  return () => /* @__PURE__ */ p("span", { children: t.title });
}
function v(t) {
  return (r, e) => {
  };
}
export {
  j as generateColumns
};
