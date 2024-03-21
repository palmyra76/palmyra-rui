import "../../../assets/TableX.css";
import { jsx as e, jsxs as f, Fragment as s } from "react/jsx-runtime";
import { useRef as N, useState as F, useEffect as H } from "react";
import { Box as M, TableContainer as j, Paper as A, Table as B, TableHead as E, TableRow as h, TableBody as O, TableCell as k } from "@mui/material";
import G from "./ColumnHeader.js";
import { getCoreRowModel as L, useReactTable as V, flexRender as g } from "@tanstack/react-table";
import W from "./LoadingChild.js";
function Z({
  columnDefs: p,
  rowData: o,
  onRowClick: m,
  onRowStyle: C,
  onHeaderStyle: x,
  onSortColumn: b,
  EmptyChild: u,
  customizer: l
}) {
  const T = (l == null ? void 0 : l.preProcessData) || ((n) => n), R = l != null && l.getTableRef ? l == null ? void 0 : l.getTableRef() : N(), v = l != null && l.getTableOptions ? l.getTableOptions() : {};
  l.preProcessColumns && l.preProcessColumns(p);
  const P = {
    data: T(o),
    manualSorting: !0,
    manualFiltering: !0,
    manualPagination: !0,
    columns: p,
    getCoreRowModel: L(),
    ...v
  }, d = V(P);
  R.current = d;
  const [r, S] = F({});
  H(() => {
    b(r);
  }, [r]);
  const y = b ? (n, t) => {
    var a = { ...r };
    t == "" ? delete a[n] : a[n] = t, S(a);
  } : void 0;
  return /* @__PURE__ */ e(M, { sx: { width: "100%" }, children: /* @__PURE__ */ f(j, { component: A, sx: { border: "1px solid var(--border-color)", borderRadius: "5px" }, children: [
    /* @__PURE__ */ f(B, { sx: { minWidth: 650 }, "aria-label": "simple table", className: "table", children: [
      /* @__PURE__ */ e(E, { className: "table-head", children: d.getHeaderGroups().map((n) => /* @__PURE__ */ e(h, { children: n.headers.map((t) => t.isPlaceholder ? null : /* @__PURE__ */ e(
        G,
        {
          header: t,
          onSortChange: y,
          onHeaderStyle: x,
          children: g(
            t.column.columnDef.header,
            t.getContext()
          )
        },
        t.id
      )) }, n.id)) }),
      o == null || o == null || o.length == 0 ? /* @__PURE__ */ e(s, {}) : /* @__PURE__ */ e(O, { children: d.getRowModel().rows.map((n) => {
        const t = C(n.original);
        return /* @__PURE__ */ e(h, { className: "table-row", children: n.getVisibleCells().map((a) => {
          var c;
          const i = a.column.columnDef.meta;
          return /* @__PURE__ */ e(
            k,
            {
              style: {
                ...((c = i == null ? void 0 : i.columnDef) == null ? void 0 : c.type) === "number" ? { textAlign: "end" } : {},
                ...t
              },
              onClick: () => m(n.original),
              children: g(
                a.column.columnDef.cell,
                a.getContext()
              )
            },
            a.id
          );
        }) }, n.id);
      }) }),
      o == null || o == null || o.length == 0 ? /* @__PURE__ */ e(s, {}) : /* @__PURE__ */ e("tfoot", { className: "table-footer", children: d.getFooterGroups().map((n) => /* @__PURE__ */ e("tr", { style: { textAlign: "end" }, children: n.headers.map((t) => /* @__PURE__ */ e("th", { children: t.isPlaceholder ? null : g(
        t.column.columnDef.footer,
        t.getContext()
      ) }, t.id)) }, n.id)) })
    ] }),
    o == null ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(W, {}) }) : o == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : o.length == 0 ? /* @__PURE__ */ e(u, {}) : /* @__PURE__ */ e(s, {})
  ] }) });
}
export {
  Z as default
};
