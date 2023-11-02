import { jsx as i } from "react/jsx-runtime";
import { createColumnHelper as l } from "@tanstack/react-table";
import { getFormatFn as d } from "./CellFormatter.js";
const o = l();
function g(e) {
  return e.map((r) => p(r));
}
function p(e) {
  var r = e.cellRenderer;
  let t = s(e);
  if (r)
    return o.display({
      id: n(e),
      ...t,
      cell: r
    });
  let a = d(e);
  return o.accessor(n(e), {
    id: n(e),
    enableSorting: e.sortable,
    ...t,
    ...a
  });
}
function n(e) {
  return e.name ? e.name : e.attribute;
}
function s(e) {
  let r = e.title;
  return {
    header: () => /* @__PURE__ */ i("span", { children: r }),
    footer: (t) => t.column.id
  };
}
export {
  g as generateColumns
};
