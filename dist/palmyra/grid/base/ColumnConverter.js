import { jsx as o } from "react/jsx-runtime";
import { createColumnHelper as l } from "@tanstack/react-table";
import { getFormatFn as s } from "./CellFormatter.js";
import { getValueByKey as d } from "../../form/FormUtil.js";
import { hasDot as p } from "../../utils/StringUtil.js";
const n = l();
function C(e) {
  return e.map((r) => u(r));
}
function u(e) {
  var r = e.cellRenderer;
  let t = c(e);
  if (r)
    return n.display({
      id: a(e),
      ...t,
      cell: r
    });
  let i = s(e);
  return n.accessor(m(e), {
    id: a(e),
    enableSorting: e.sortable,
    enableColumnFilter: e.searchable,
    ...t,
    ...i
  });
}
function m(e) {
  var r = e.attribute ? e.attribute : e.name;
  return p(r) ? (t) => d(r, t) : r;
}
function a(e) {
  return e.name ? e.name : e.attribute;
}
function c(e) {
  let r = e.title;
  return {
    header: () => /* @__PURE__ */ o("span", { children: r }),
    footer: (t) => t.column.id
  };
}
export {
  C as generateColumns
};
