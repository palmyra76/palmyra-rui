import "../../../assets/TableX.css";
import { jsx as e, jsxs as d, Fragment as s } from "react/jsx-runtime";
import { useState as x, useEffect as T } from "react";
import { Box as S, TableContainer as v, Paper as R, Table as y, TableHead as H, TableRow as m, TableBody as M, TableCell as N } from "@mui/material";
import P from "./ColumnHeader.js";
import { useReactTable as j, getCoreRowModel as B, flexRender as c } from "@tanstack/react-table";
function X({ columnDefs: u, rowData: t, onRowClick: g, onRowStyle: h, onHeaderStyle: b, onSortColumn: r, EmptyChild: p }) {
  const a = j({
    data: t,
    manualSorting: !0,
    manualFiltering: !0,
    manualPagination: !0,
    columns: u,
    getCoreRowModel: B()
  }), [i, f] = x({});
  T(() => {
    r(i);
  }, [i]);
  const C = r ? (l, n) => {
    var o = { ...i };
    n == "" ? delete o[l] : o[l] = n, f(o);
  } : void 0;
  return /* @__PURE__ */ e(S, { sx: { width: "100%" }, children: /* @__PURE__ */ d(v, { component: R, children: [
    /* @__PURE__ */ d(y, { sx: { minWidth: 650 }, "aria-label": "simple table", className: "table", children: [
      /* @__PURE__ */ e(H, { className: "table-head", children: a.getHeaderGroups().map((l) => /* @__PURE__ */ e(m, { children: l.headers.map((n) => n.isPlaceholder ? null : /* @__PURE__ */ e(
        P,
        {
          header: n,
          onSortChange: C,
          onHeaderStyle: b,
          children: c(
            n.column.columnDef.header,
            n.getContext()
          )
        },
        n.id
      )) }, l.id)) }),
      t == null || t == null || t.length == 0 ? /* @__PURE__ */ e(s, {}) : /* @__PURE__ */ e(M, { children: a.getRowModel().rows.map((l) => {
        const n = h(l.original);
        return /* @__PURE__ */ e(m, { className: "table-row", children: l.getVisibleCells().map((o) => /* @__PURE__ */ e(N, { style: n, onClick: () => g(l.original), children: c(
          o.column.columnDef.cell,
          o.getContext()
        ) }, o.id)) }, l.id);
      }) })
    ] }),
    t == null ? /* @__PURE__ */ e("div", { children: "Loading Data" }) : t == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : t.length == 0 ? /* @__PURE__ */ e(p, {}) : /* @__PURE__ */ e(s, {})
  ] }) });
}
export {
  X as default
};
