import "../../../assets/TableX.css";
import { jsx as e, jsxs as r, Fragment as d } from "react/jsx-runtime";
import { useState as x, useEffect as T } from "react";
import { Box as S, TableContainer as v, Paper as R, Table as P, TableHead as y, TableRow as c, TableBody as H, TableCell as M, CircularProgress as N } from "@mui/material";
import j from "./ColumnHeader.js";
import { useReactTable as k, getCoreRowModel as B, flexRender as m } from "@tanstack/react-table";
function X({ columnDefs: u, rowData: t, onRowClick: g, onRowStyle: h, onHeaderStyle: b, onSortColumn: a, EmptyChild: p }) {
  const s = k({
    data: t,
    manualSorting: !0,
    manualFiltering: !0,
    manualPagination: !0,
    columns: u,
    getCoreRowModel: B()
  }), [i, C] = x({});
  T(() => {
    a(i);
  }, [i]);
  const f = a ? (l, n) => {
    var o = { ...i };
    n == "" ? delete o[l] : o[l] = n, C(o);
  } : void 0;
  return /* @__PURE__ */ e(S, { sx: { width: "100%" }, children: /* @__PURE__ */ r(v, { component: R, children: [
    /* @__PURE__ */ r(P, { sx: { minWidth: 650 }, "aria-label": "simple table", className: "table", children: [
      /* @__PURE__ */ e(y, { className: "table-head", children: s.getHeaderGroups().map((l) => /* @__PURE__ */ e(c, { children: l.headers.map((n) => n.isPlaceholder ? null : /* @__PURE__ */ e(
        j,
        {
          header: n,
          onSortChange: f,
          onHeaderStyle: b,
          children: m(
            n.column.columnDef.header,
            n.getContext()
          )
        },
        n.id
      )) }, l.id)) }),
      t == null || t == null || t.length == 0 ? /* @__PURE__ */ e(d, {}) : /* @__PURE__ */ e(H, { children: s.getRowModel().rows.map((l) => {
        const n = h(l.original);
        return /* @__PURE__ */ e(c, { className: "table-row", children: l.getVisibleCells().map((o) => /* @__PURE__ */ e(M, { style: n, onClick: () => g(l.original), children: m(
          o.column.columnDef.cell,
          o.getContext()
        ) }, o.id)) }, l.id);
      }) })
    ] }),
    t == null ? /* @__PURE__ */ r("div", { children: [
      "Loading Data",
      /* @__PURE__ */ e(N, { size: 25, thickness: 4 })
    ] }) : t == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : t.length == 0 ? /* @__PURE__ */ e(p, {}) : /* @__PURE__ */ e(d, {})
  ] }) });
}
export {
  X as default
};
