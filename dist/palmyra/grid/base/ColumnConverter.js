import { jsx as b } from "react/jsx-runtime";
import { createColumnHelper as d } from "@tanstack/react-table";
import { formatColumn as p } from "./CellFormatter.js";
import { getValueByKey as m } from "../../form/FormUtil.js";
import { hasDot as g } from "../../utils/StringUtil.js";
const s = d();
function j(t, r) {
  return t.map((e) => c(e, r));
}
function c(t, r) {
  const e = t.sortable, a = t.searchable;
  var n = t.cellRenderer;
  const o = r.formatHeader(t, f(t)), i = r.formatFooter(t, h());
  if (n)
    return s.display({
      id: l(t),
      meta: {
        attribute: t.attribute
      },
      enableSorting: e,
      enableColumnFilter: a,
      header: o,
      footer: i,
      cell: n
    });
  let u = r.formatCell(t, p(t));
  return s.accessor(C(t), {
    id: l(t),
    meta: {
      attribute: t.attribute
    },
    enableSorting: e,
    enableColumnFilter: a,
    header: o,
    footer: i,
    cell: u
  });
}
function C(t) {
  var r = t.attribute ? t.attribute : t.name;
  return g(r) ? (e) => m(r, e) : (e) => e[r];
}
function l(t) {
  return t.name ? t.name : t.attribute;
}
function f(t) {
  return () => /* @__PURE__ */ b("span", { children: t.title });
}
function h(t) {
  return (r, e) => {
  };
}
export {
  j as generateColumns
};
