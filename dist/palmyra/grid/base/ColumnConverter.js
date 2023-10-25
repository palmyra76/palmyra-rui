import { jsx as i } from "react/jsx-runtime";
import { createColumnHelper as d } from "@tanstack/react-table";
import { getFormatFn as l } from "./CellFormatter.js";
const o = d();
function g(e) {
  return e.map((r) => p(r));
}
function p(e) {
  var r = e.cellRenderer;
  let t = c(e);
  if (r)
    return o.display({
      id: n(e),
      ...t,
      cell: r
    });
  let a = l(e);
  return o.accessor(n(e), {
    id: n(e),
    ...t,
    ...a
  });
}
function n(e) {
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
  g as generateColumns
};
