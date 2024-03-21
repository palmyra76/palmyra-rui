import "../../../assets/TableX.css";
import { jsx as e, jsxs as b, Fragment as s } from "react/jsx-runtime";
import { useRef as N, useState as F, useEffect as H } from "react";
import { Box as M, TableContainer as j, Paper as A, Table as B, TableHead as E, TableRow as h, TableBody as O, TableCell as k } from "@mui/material";
import G from "./ColumnHeader.js";
import { getCoreRowModel as L, useReactTable as V, flexRender as c } from "@tanstack/react-table";
import W from "./LoadingChild.js";
function Z({
  columnDefs: g,
  rowData: o,
  onRowClick: f,
  onRowStyle: u,
  onHeaderStyle: C,
  onSortColumn: p,
  EmptyChild: x,
  customizer: t
}) {
  const T = (t == null ? void 0 : t.preProcessData) || ((l) => l), R = (t == null ? void 0 : t.getTableRef()) || N(), v = t != null && t.getTableOptions ? t.getTableOptions() : {};
  t.preProcessColumns && t.preProcessColumns(g);
  const P = {
    data: T(o),
    manualSorting: !0,
    manualFiltering: !0,
    manualPagination: !0,
    columns: g,
    getCoreRowModel: L(),
    ...v
  }, a = V(P);
  R.current = a;
  const [i, S] = F({});
  H(() => {
    p(i);
  }, [i]);
  const y = p ? (l, n) => {
    var r = { ...i };
    n == "" ? delete r[l] : r[l] = n, S(r);
  } : void 0;
  return /* @__PURE__ */ e(M, { sx: { width: "100%" }, children: /* @__PURE__ */ b(j, { component: A, sx: { border: "1px solid var(--border-color)", borderRadius: "5px" }, children: [
    /* @__PURE__ */ b(B, { sx: { minWidth: 650 }, "aria-label": "simple table", className: "table", children: [
      /* @__PURE__ */ e(E, { className: "table-head", children: a.getHeaderGroups().map((l) => /* @__PURE__ */ e(h, { children: l.headers.map((n) => n.isPlaceholder ? null : /* @__PURE__ */ e(
        G,
        {
          header: n,
          onSortChange: y,
          onHeaderStyle: C,
          children: c(
            n.column.columnDef.header,
            n.getContext()
          )
        },
        n.id
      )) }, l.id)) }),
      o == null || o == null || o.length == 0 ? /* @__PURE__ */ e(s, {}) : /* @__PURE__ */ e(O, { children: a.getRowModel().rows.map((l) => {
        const n = u(l.original);
        return /* @__PURE__ */ e(h, { className: "table-row", children: l.getVisibleCells().map((r) => {
          var m;
          const d = r.column.columnDef.meta;
          return /* @__PURE__ */ e(
            k,
            {
              style: {
                ...((m = d == null ? void 0 : d.columnDef) == null ? void 0 : m.type) === "number" ? { textAlign: "end" } : {},
                ...n
              },
              onClick: () => f(l.original),
              children: c(
                r.column.columnDef.cell,
                r.getContext()
              )
            },
            r.id
          );
        }) }, l.id);
      }) }),
      o == null || o == null || o.length == 0 ? /* @__PURE__ */ e(s, {}) : /* @__PURE__ */ e("tfoot", { className: "table-footer", children: a.getFooterGroups().map((l) => /* @__PURE__ */ e("tr", { style: { textAlign: "end" }, children: l.headers.map((n) => /* @__PURE__ */ e("th", { children: n.isPlaceholder ? null : c(
        n.column.columnDef.footer,
        n.getContext()
      ) }, n.id)) }, l.id)) })
    ] }),
    o == null ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(W, {}) }) : o == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : o.length == 0 ? /* @__PURE__ */ e(x, {}) : /* @__PURE__ */ e(s, {})
  ] }) });
}
export {
  Z as default
};
