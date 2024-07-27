import { jsx as m } from "react/jsx-runtime";
import { createColumnHelper as c } from "@tanstack/react-table";
import { formatColumn as d } from "./CellFormatter.js";
import { getValueByKey as b } from "../../form/FormUtil.js";
import { hasDot as v } from "../../utils/StringUtil.js";
import { getFormatConverter as g } from "../../utils/converter/FormatterFactory.js";
const u = c();
function k(r, o) {
  return r.every((t) => t.columnGroup == null) ? r.map((t) => p(t, o)) : h(r, o);
}
function h(r, o) {
  const t = new Array();
  var e = void 0;
  return r.map((n) => {
    const a = p(n, o);
    n.columnGroup ? ((!e || e.header != n.columnGroup) && (e = {}, e.header = n.columnGroup, e.columns = [], t.push(e)), e.columns.push(a)) : t.push(a);
  }), t;
}
function p(r, o) {
  const t = r.sortable, e = r.searchable;
  var n = r.cellRenderer;
  const a = o.formatHeader(r, y(r)), i = o.formatFooter(r, G());
  if (n)
    return u.display({
      id: s(r),
      meta: {
        attribute: r.attribute,
        columnDef: r
      },
      enableSorting: t,
      enableColumnFilter: e,
      header: a,
      footer: i,
      cell: n
    });
  let l = o.formatCell(r, d(r));
  return u.accessor(C(r), {
    id: s(r),
    meta: {
      attribute: r.attribute,
      columnDef: r
    },
    enableSorting: t,
    enableColumnFilter: e,
    header: a,
    footer: i,
    cell: l
  });
}
function C(r) {
  var o = r.attribute ? r.attribute : r.name;
  const t = g(r);
  return v(o) ? (e) => t.convert(b(o, e)) : (e) => t.convert(e[o]);
}
function s(r) {
  return r.name ? r.name : r.attribute;
}
function y(r) {
  return () => /* @__PURE__ */ m("span", { children: r.label });
}
function G(r) {
  return (o, t) => {
  };
}
export {
  k as generateColumns
};
