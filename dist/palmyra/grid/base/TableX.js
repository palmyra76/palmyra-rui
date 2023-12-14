import "../../../assets/TableX.css";
import { jsx as e, jsxs as s, Fragment as d } from "react/jsx-runtime";
import { useState as x, useEffect as T } from "react";
import { Box as v, TableContainer as S, Paper as R, Table as P, TableHead as y, TableRow as c, TableBody as F, TableCell as H } from "@mui/material";
import M from "./ColumnHeader.js";
import { useReactTable as N, getCoreRowModel as j, flexRender as a } from "@tanstack/react-table";
import B from "./LoadingChild.js";
function z({ columnDefs: u, rowData: t, onRowClick: g, onRowStyle: h, onHeaderStyle: p, onSortColumn: m, EmptyChild: f }) {
  const i = N({
    data: t,
    manualSorting: !0,
    manualFiltering: !0,
    manualPagination: !0,
    columns: u,
    getCoreRowModel: j()
  }), [r, b] = x({});
  T(() => {
    m(r);
  }, [r]);
  const C = m ? (n, l) => {
    var o = { ...r };
    l == "" ? delete o[n] : o[n] = l, b(o);
  } : void 0;
  return /* @__PURE__ */ e(v, { sx: { width: "100%" }, children: /* @__PURE__ */ s(S, { component: R, children: [
    /* @__PURE__ */ s(P, { sx: { minWidth: 650 }, "aria-label": "simple table", className: "table", children: [
      /* @__PURE__ */ e(y, { className: "table-head", children: i.getHeaderGroups().map((n) => /* @__PURE__ */ e(c, { children: n.headers.map((l) => l.isPlaceholder ? null : /* @__PURE__ */ e(
        M,
        {
          header: l,
          onSortChange: C,
          onHeaderStyle: p,
          children: a(
            l.column.columnDef.header,
            l.getContext()
          )
        },
        l.id
      )) }, n.id)) }),
      t == null || t == null || t.length == 0 ? /* @__PURE__ */ e(d, {}) : /* @__PURE__ */ e(F, { children: i.getRowModel().rows.map((n) => {
        const l = h(n.original);
        return /* @__PURE__ */ e(c, { className: "table-row", children: n.getVisibleCells().map((o) => /* @__PURE__ */ e(H, { style: l, onClick: () => g(n.original), children: a(
          o.column.columnDef.cell,
          o.getContext()
        ) }, o.id)) }, n.id);
      }) }),
      t == null || t == null || t.length == 0 ? /* @__PURE__ */ e(d, {}) : /* @__PURE__ */ e("tfoot", { children: i.getFooterGroups().map((n) => /* @__PURE__ */ e("tr", { children: n.headers.map((l) => /* @__PURE__ */ e("th", { children: l.isPlaceholder ? null : a(
        l.column.columnDef.footer,
        l.getContext()
      ) }, l.id)) }, n.id)) })
    ] }),
    t == null ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(B, {}) }) : t == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : t.length == 0 ? /* @__PURE__ */ e(f, {}) : /* @__PURE__ */ e(d, {})
  ] }) });
}
export {
  z as default
};
