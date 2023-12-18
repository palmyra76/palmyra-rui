import { jsx as d } from "react/jsx-runtime";
import { createColumnHelper as m } from "@tanstack/react-table";
import { formatColumn as g } from "./CellFormatter.js";
import { getValueByKey as l } from "../../form/FormUtil.js";
import { hasDot as u } from "../../utils/StringUtil.js";
import { getFormatConverter as v } from "../../utils/converter/FormatterFactory.js";
const s = m();
function A(t, r) {
  return t.map((e) => C(e, r));
}
function C(t, r) {
  const e = t.sortable, a = t.searchable;
  var o = t.cellRenderer;
  const n = r.formatHeader(t, h(t)), i = r.formatFooter(t, y());
  if (o)
    return s.display({
      id: p(t),
      meta: {
        attribute: t.attribute,
        columnDef: t
      },
      enableSorting: e,
      enableColumnFilter: a,
      header: n,
      footer: i,
      cell: o
    });
  let b = r.formatCell(t, g(t));
  return s.accessor(c(t), {
    id: p(t),
    meta: {
      attribute: t.attribute,
      columnDef: t
    },
    enableSorting: e,
    enableColumnFilter: a,
    header: n,
    footer: i,
    cell: b
  });
}
function c(t) {
  var r = t.attribute ? t.attribute : t.name;
  const e = v(t);
  return u(r) ? (a) => e.convert(l(r, a)) : (a) => e.convert(a[r]);
}
function p(t) {
  return t.name ? t.name : t.attribute;
}
function h(t) {
  return () => /* @__PURE__ */ d("span", { children: t.title });
}
function y(t) {
  return (r, e) => {
  };
}
export {
  A as generateColumns
};
