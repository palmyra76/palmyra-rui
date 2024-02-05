import "../../../assets/TableX.css";
import { jsx as e, jsxs as c, Fragment as d } from "react/jsx-runtime";
import { useState as S, useEffect as P } from "react";
import { Box as R, TableContainer as y, Paper as F, Table as H, TableHead as M, TableRow as u, TableBody as N, TableCell as j } from "@mui/material";
import A from "./ColumnHeader.js";
import { useReactTable as B, getCoreRowModel as E, flexRender as m } from "@tanstack/react-table";
import k from "./LoadingChild.js";
function K({ columnDefs: g, rowData: t, onRowClick: h, onRowStyle: p, onHeaderStyle: f, onSortColumn: s, EmptyChild: b, customizer: i }) {
  const C = (i == null ? void 0 : i.preProcessData) || ((l) => l), r = B({
    data: C(t),
    manualSorting: !0,
    manualFiltering: !0,
    manualPagination: !0,
    columns: g,
    getCoreRowModel: E()
  }), [a, x] = S({});
  P(() => {
    s(a);
  }, [a]);
  const T = s ? (l, n) => {
    var o = { ...a };
    n == "" ? delete o[l] : o[l] = n, x(o);
  } : void 0;
  return /* @__PURE__ */ e(R, { sx: { width: "100%" }, children: /* @__PURE__ */ c(y, { component: F, children: [
    /* @__PURE__ */ c(H, { sx: { minWidth: 650 }, "aria-label": "simple table", className: "table", children: [
      /* @__PURE__ */ e(M, { className: "table-head", children: r.getHeaderGroups().map((l) => /* @__PURE__ */ e(u, { children: l.headers.map((n) => n.isPlaceholder ? null : /* @__PURE__ */ e(
        A,
        {
          header: n,
          onSortChange: T,
          onHeaderStyle: f,
          children: m(
            n.column.columnDef.header,
            n.getContext()
          )
        },
        n.id
      )) }, l.id)) }),
      t == null || t == null || t.length == 0 ? /* @__PURE__ */ e(d, {}) : /* @__PURE__ */ e(N, { children: r.getRowModel().rows.map((l) => {
        const n = p(l.original);
        return /* @__PURE__ */ e(u, { className: "table-row", children: l.getVisibleCells().map((o) => {
          const v = o.column.columnDef.meta;
          return /* @__PURE__ */ e(
            j,
            {
              style: {
                ...v.columnDef.type === "number" ? { textAlign: "end" } : {},
                ...n
              },
              onClick: () => h(l.original),
              children: m(
                o.column.columnDef.cell,
                o.getContext()
              )
            },
            o.id
          );
        }) }, l.id);
      }) }),
      t == null || t == null || t.length == 0 ? /* @__PURE__ */ e(d, {}) : /* @__PURE__ */ e("tfoot", { children: r.getFooterGroups().map((l) => /* @__PURE__ */ e("tr", { style: { textAlign: "end" }, children: l.headers.map((n) => /* @__PURE__ */ e("th", { children: n.isPlaceholder ? null : m(
        n.column.columnDef.footer,
        n.getContext()
      ) }, n.id)) }, l.id)) })
    ] }),
    t == null ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(k, {}) }) : t == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : t.length == 0 ? /* @__PURE__ */ e(b, {}) : /* @__PURE__ */ e(d, {})
  ] }) });
}
export {
  K as default
};
