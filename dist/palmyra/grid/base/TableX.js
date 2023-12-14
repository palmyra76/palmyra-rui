import "../../../assets/TableX.css";
import { jsx as e, jsxs as c, Fragment as d } from "react/jsx-runtime";
import { useState as T, useEffect as v } from "react";
import { Box as S, TableContainer as R, Paper as y, Table as P, TableHead as F, TableRow as s, TableBody as H, TableCell as M } from "@mui/material";
import N from "./ColumnHeader.js";
import { useReactTable as j, getCoreRowModel as A, flexRender as m } from "@tanstack/react-table";
import B from "./LoadingChild.js";
function z({ columnDefs: u, rowData: t, onRowClick: g, onRowStyle: h, onHeaderStyle: f, onSortColumn: a, EmptyChild: p }) {
  const i = j({
    data: t,
    manualSorting: !0,
    manualFiltering: !0,
    manualPagination: !0,
    columns: u,
    getCoreRowModel: A()
  }), [r, b] = T({});
  v(() => {
    a(r);
  }, [r]);
  const C = a ? (n, l) => {
    var o = { ...r };
    l == "" ? delete o[n] : o[n] = l, b(o);
  } : void 0;
  return /* @__PURE__ */ e(S, { sx: { width: "100%" }, children: /* @__PURE__ */ c(R, { component: y, children: [
    /* @__PURE__ */ c(P, { sx: { minWidth: 650 }, "aria-label": "simple table", className: "table", children: [
      /* @__PURE__ */ e(F, { className: "table-head", children: i.getHeaderGroups().map((n) => /* @__PURE__ */ e(s, { children: n.headers.map((l) => l.isPlaceholder ? null : /* @__PURE__ */ e(
        N,
        {
          header: l,
          onSortChange: C,
          onHeaderStyle: f,
          children: m(
            l.column.columnDef.header,
            l.getContext()
          )
        },
        l.id
      )) }, n.id)) }),
      t == null || t == null || t.length == 0 ? /* @__PURE__ */ e(d, {}) : /* @__PURE__ */ e(H, { children: i.getRowModel().rows.map((n) => {
        const l = h(n.original);
        return /* @__PURE__ */ e(s, { className: "table-row", children: n.getVisibleCells().map((o) => {
          const x = o.column.columnDef.meta;
          return /* @__PURE__ */ e(
            M,
            {
              style: {
                ...x.columnDef.type === "number" ? { textAlign: "end" } : {},
                ...l
              },
              onClick: () => g(n.original),
              children: m(
                o.column.columnDef.cell,
                o.getContext()
              )
            },
            o.id
          );
        }) }, n.id);
      }) }),
      t == null || t == null || t.length == 0 ? /* @__PURE__ */ e(d, {}) : /* @__PURE__ */ e("tfoot", { children: i.getFooterGroups().map((n) => /* @__PURE__ */ e("tr", { style: { textAlign: "end" }, children: n.headers.map((l) => /* @__PURE__ */ e("th", { children: l.isPlaceholder ? null : m(
        l.column.columnDef.footer,
        l.getContext()
      ) }, l.id)) }, n.id)) })
    ] }),
    t == null ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(B, {}) }) : t == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : t.length == 0 ? /* @__PURE__ */ e(p, {}) : /* @__PURE__ */ e(d, {})
  ] }) });
}
export {
  z as default
};
