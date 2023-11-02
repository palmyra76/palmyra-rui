import { jsx as i } from "react/jsx-runtime";
import { createColumnHelper as l } from "@tanstack/react-table";
import { getFormatFn as d } from "./CellFormatter.js";
import { getValueByKey as s } from "../../form/FormUtil.js";
import { hasDot as p } from "../../utils/StringUtil.js";
const n = l();
function f(e) {
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
  let o = d(e);
  return n.accessor(m(e), {
    id: a(e),
    enableSorting: e.sortable,
    ...t,
    ...o
  });
}
function m(e) {
  var r = e.attribute ? e.attribute : e.name;
  return p(r) ? (t) => s(r, t) : r;
}
function a(e) {
  return e.name ? e.name : e.attribute;
}
function c(e) {
  let r = e.title;
  return {
    header: () => /* @__PURE__ */ i("span", { children: r }),
    footer: (t) => t.column.id
  };
}
export {
  f as generateColumns
};
