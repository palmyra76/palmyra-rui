import "../../../assets/TableX.css";
import { jsx as t, jsxs as f } from "react/jsx-runtime";
import { useState as C, useEffect as x } from "react";
import { Box as T, TableContainer as S, Paper as R, Table as w, TableHead as y, TableRow as s, TableBody as H, TableCell as M } from "@mui/material";
import N from "./ColumnHeader.js";
import { useReactTable as P, getCoreRowModel as j, flexRender as m } from "@tanstack/react-table";
function W({ columnDefs: c, rowData: o, onRowClick: d, onRowStyle: u, onHeaderStyle: g, onSortColumn: r, EmptyChild: b }) {
  const i = P({
    data: o,
    manualSorting: !0,
    manualFiltering: !0,
    manualPagination: !0,
    columns: c,
    getCoreRowModel: j()
  }), [a, h] = C({});
  x(() => {
    r(a);
  }, [a]);
  const p = r ? (e, l) => {
    var n = { ...a };
    l == "" ? delete n[e] : n[e] = l, h(n);
  } : void 0;
  return /* @__PURE__ */ t(T, { sx: { width: "100%" }, children: /* @__PURE__ */ t(S, { component: R, children: /* @__PURE__ */ f(w, { sx: { minWidth: 650 }, "aria-label": "simple table", className: "table", children: [
    /* @__PURE__ */ t(y, { className: "table-head", children: i.getHeaderGroups().map((e) => /* @__PURE__ */ t(s, { children: e.headers.map((l) => l.isPlaceholder ? null : /* @__PURE__ */ t(
      N,
      {
        header: l,
        onSortChange: p,
        onHeaderStyle: g,
        children: m(
          l.column.columnDef.header,
          l.getContext()
        )
      },
      l.id
    )) }, e.id)) }),
    o == null || o.length == 0 ? /* @__PURE__ */ t(b, {}) : /* @__PURE__ */ t(H, { children: i.getRowModel().rows.map((e) => {
      const l = u(e.original);
      return /* @__PURE__ */ t(s, { className: "table-row", children: e.getVisibleCells().map((n) => /* @__PURE__ */ t(M, { style: l, onClick: () => d(e.original), children: m(
        n.column.columnDef.cell,
        n.getContext()
      ) }, n.id)) }, e.id);
    }) })
  ] }) }) });
}
export {
  W as default
};
