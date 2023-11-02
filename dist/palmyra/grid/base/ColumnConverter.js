import { jsx as i } from "react/jsx-runtime";
import { createColumnHelper as d } from "@tanstack/react-table";
import { getFormatFn as l } from "./CellFormatter.js";
import { getValueByKey as u } from "../../form/FormUtil.js";
import { hasDot as m } from "../../utils/StringUtil.js";
const n = d();
function b(e) {
  return e.map((r) => p(r));
}
function p(e) {
  var r = e.cellRenderer;
  let t = c(e);
  if (r)
    return n.display({
      id: o(e),
      ...t,
      cell: r
    });
  let a = l(e);
  return n.accessor(s(e), {
    id: o(e),
    ...t,
    ...a
  });
}
function s(e) {
  var r = e.attribute ? e.attribute : e.name;
  return m(r) ? (t) => u(r, t) : r;
}
function o(e) {
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
  b as generateColumns
};
