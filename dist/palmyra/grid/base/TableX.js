import { jsx as l, jsxs as f } from "react/jsx-runtime";
import { useState as h, useEffect as C } from "react";
import { Box as x, TableContainer as T, Paper as S, Table as R, TableHead as w, TableRow as i, TableBody as y, TableCell as H } from "@mui/material";
/* empty css                      */import M from "./ColumnHeader.js";
import { useReactTable as N, getCoreRowModel as P, flexRender as s } from "@tanstack/react-table";
function V({ columnDefs: m, rowData: c, onRowClick: d, onRowStyle: u, onHeaderStyle: b, onSortColumn: a }) {
  const r = N({
    data: c,
    manualSorting: !0,
    manualFiltering: !0,
    manualPagination: !0,
    columns: m,
    getCoreRowModel: P()
  }), [n, g] = h({});
  C(() => {
    a(n);
  }, [n]);
  const p = a ? (e, t) => {
    var o = { ...n };
    t == "" ? delete o[e] : o[e] = t, g(o);
  } : void 0;
  return /* @__PURE__ */ l(x, { sx: { width: "100%" }, children: /* @__PURE__ */ l(T, { component: S, children: /* @__PURE__ */ f(R, { sx: { minWidth: 650 }, "aria-label": "simple table", className: "table", children: [
    /* @__PURE__ */ l(w, { className: "table-head", children: r.getHeaderGroups().map((e) => /* @__PURE__ */ l(i, { children: e.headers.map((t) => t.isPlaceholder ? null : /* @__PURE__ */ l(
      M,
      {
        header: t,
        onSortChange: p,
        onHeaderStyle: b,
        children: s(
          t.column.columnDef.header,
          t.getContext()
        )
      },
      t.id
    )) }, e.id)) }),
    /* @__PURE__ */ l(y, { children: r.getRowModel().rows.map((e) => {
      const t = u(e.original);
      return /* @__PURE__ */ l(i, { className: "table-row", children: e.getVisibleCells().map((o) => /* @__PURE__ */ l(H, { style: t, onClick: () => d(e.original), children: s(
        o.column.columnDef.cell,
        o.getContext()
      ) }, o.id)) }, e.id);
    }) })
  ] }) }) });
}
export {
  V as default
};
