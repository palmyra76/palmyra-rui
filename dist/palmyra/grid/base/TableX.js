import "../../../assets/TableX.css";
import { jsxs as f, jsx as e, Fragment as s } from "react/jsx-runtime";
import { useRef as N, useState as F, useEffect as H } from "react";
import { TableContainer as M, Paper as j, Table as A, TableHead as E, TableRow as h, TableBody as O, TableCell as k } from "@mui/material";
import B from "./ColumnHeader.js";
import { getCoreRowModel as G, useReactTable as L, flexRender as g } from "@tanstack/react-table";
import V from "./LoadingChild.js";
function Y({
  columnDefs: p,
  rowData: t,
  onRowClick: m,
  onRowStyle: C,
  onHeaderStyle: u,
  onSortColumn: b,
  EmptyChild: x,
  customizer: l
}) {
  const T = (l == null ? void 0 : l.preProcessData) || ((n) => n), R = l != null && l.getTableRef ? l == null ? void 0 : l.getTableRef() : N(void 0), v = l != null && l.getTableOptions ? l.getTableOptions() : {};
  l.preProcessColumns && l.preProcessColumns(p);
  const P = {
    data: T(t),
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
  const y = b ? (n, o) => {
    var a = { ...d };
    o == "" ? delete a[n] : a[n] = o, S(a);
  } : void 0;
  return /* @__PURE__ */ f(M, { component: j, sx: { border: "1px solid var(--border-color)", borderRadius: "5px" }, children: [
    /* @__PURE__ */ f(A, { "aria-label": "simple table", className: "table", children: [
      /* @__PURE__ */ e(E, { className: "table-head", children: r.getHeaderGroups().map((n) => /* @__PURE__ */ e(h, { children: n.headers.map((o) => o.isPlaceholder ? null : /* @__PURE__ */ e(
        B,
        {
          header: o,
          onSortChange: y,
          onHeaderStyle: u,
          children: g(
            o.column.columnDef.header,
            o.getContext()
          )
        },
        o.id
      )) }, n.id)) }),
      t == null || t == null || t.length == 0 ? /* @__PURE__ */ e(s, {}) : /* @__PURE__ */ e(O, { children: r.getRowModel().rows.map((n) => {
        const o = C(n.original);
        return /* @__PURE__ */ e(h, { className: "table-row", children: n.getVisibleCells().map((a) => {
          var c;
          const i = a.column.columnDef.meta;
          return /* @__PURE__ */ e(
            k,
            {
              style: {
                ...((c = i == null ? void 0 : i.columnDef) == null ? void 0 : c.type) === "number" ? { textAlign: "end" } : {},
                ...o
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
      t == null || t == null || t.length == 0 ? /* @__PURE__ */ e(s, {}) : /* @__PURE__ */ e("tfoot", { className: "table-footer", children: r.getFooterGroups().map((n) => /* @__PURE__ */ e("tr", { style: { textAlign: "end" }, children: n.headers.map((o) => /* @__PURE__ */ e("th", { children: o.isPlaceholder ? null : g(
        o.column.columnDef.footer,
        o.getContext()
      ) }, o.id)) }, n.id)) })
    ] }),
    t == null ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(V, {}) }) : t == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : t.length == 0 ? /* @__PURE__ */ e(x, {}) : /* @__PURE__ */ e(s, {})
  ] });
}
export {
  Y as default
};
