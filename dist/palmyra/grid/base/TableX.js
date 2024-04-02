import "../../../assets/TableX.css";
import { jsxs as f, jsx as e, Fragment as s } from "react/jsx-runtime";
import { useRef as N, useState as F, useEffect as H } from "react";
import { TableContainer as M, Paper as j, Table as A, TableHead as E, TableRow as h, TableBody as O, TableCell as k } from "@mui/material";
import B from "./ColumnHeader.js";
import { getCoreRowModel as G, useReactTable as L, flexRender as g } from "@tanstack/react-table";
import V from "./LoadingChild.js";
function Y({
  columnDefs: p,
  rowData: o,
  onRowClick: m,
  onRowStyle: C,
  onHeaderStyle: u,
  onSortColumn: b,
  EmptyChild: x,
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
    getCoreRowModel: G(),
    ...v
  }, r = L(P);
  R.current = r;
  const [d, S] = F({});
  H(() => {
    b(d);
  }, [d]);
  const y = b ? (n, t) => {
    var a = { ...d };
    t == "" ? delete a[n] : a[n] = t, S(a);
  } : void 0;
  return /* @__PURE__ */ f(M, { component: j, sx: { border: "1px solid var(--border-color)", borderRadius: "5px" }, children: [
    /* @__PURE__ */ f(A, { "aria-label": "simple table", className: "table", children: [
      /* @__PURE__ */ e(E, { className: "table-head", children: r.getHeaderGroups().map((n) => /* @__PURE__ */ e(h, { children: n.headers.map((t) => t.isPlaceholder ? null : /* @__PURE__ */ e(
        B,
        {
          header: t,
          onSortChange: y,
          onHeaderStyle: u,
          children: g(
            t.column.columnDef.header,
            t.getContext()
          )
        },
        t.id
      )) }, n.id)) }),
      o == null || o == null || o.length == 0 ? /* @__PURE__ */ e(s, {}) : /* @__PURE__ */ e(O, { children: r.getRowModel().rows.map((n) => {
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
      o == null || o == null || o.length == 0 ? /* @__PURE__ */ e(s, {}) : /* @__PURE__ */ e("tfoot", { className: "table-footer", children: r.getFooterGroups().map((n) => /* @__PURE__ */ e("tr", { style: { textAlign: "end" }, children: n.headers.map((t) => /* @__PURE__ */ e("th", { children: t.isPlaceholder ? null : g(
        t.column.columnDef.footer,
        t.getContext()
      ) }, t.id)) }, n.id)) })
    ] }),
    o == null ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(V, {}) }) : o == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : o.length == 0 ? /* @__PURE__ */ e(x, {}) : /* @__PURE__ */ e(s, {})
  ] });
}
export {
  Y as default
};
