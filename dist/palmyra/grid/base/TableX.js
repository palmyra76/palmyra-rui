import { jsx as e, jsxs as c, Fragment as d } from "react/jsx-runtime";
import { useState as R, useEffect as S } from "react";
import { Box as P, TableContainer as y, Paper as N, Table as F, TableHead as H, TableRow as u, TableBody as M, TableCell as j } from "@mui/material";
/* empty css                    */import A from "./ColumnHeader.js";
import { useReactTable as B, getCoreRowModel as E, flexRender as s } from "@tanstack/react-table";
import k from "./LoadingChild.js";
function K({ columnDefs: g, rowData: t, onRowClick: h, onRowStyle: p, onHeaderStyle: b, onSortColumn: m, EmptyChild: f, customizer: i }) {
  const x = (i == null ? void 0 : i.preProcessData) || ((l) => l), r = B({
    data: x(t),
    manualSorting: !0,
    manualFiltering: !0,
    manualPagination: !0,
    columns: g,
    getCoreRowModel: E()
  }), [a, C] = R({});
  S(() => {
    m(a);
  }, [a]);
  const v = m ? (l, n) => {
    var o = { ...a };
    n == "" ? delete o[l] : o[l] = n, C(o);
  } : void 0;
  return /* @__PURE__ */ e(P, { sx: { width: "100%" }, children: /* @__PURE__ */ c(y, { component: N, sx: { border: "1px solid var(--border-color)", borderRadius: "5px" }, children: [
    /* @__PURE__ */ c(F, { sx: { minWidth: 650 }, "aria-label": "simple table", className: "table", children: [
      /* @__PURE__ */ e(H, { className: "table-head", children: r.getHeaderGroups().map((l) => /* @__PURE__ */ e(u, { children: l.headers.map((n) => n.isPlaceholder ? null : /* @__PURE__ */ e(
        A,
        {
          header: n,
          onSortChange: v,
          onHeaderStyle: b,
          children: s(
            n.column.columnDef.header,
            n.getContext()
          )
        },
        n.id
      )) }, l.id)) }),
      t == null || t == null || t.length == 0 ? /* @__PURE__ */ e(d, {}) : /* @__PURE__ */ e(M, { children: r.getRowModel().rows.map((l) => {
        const n = p(l.original);
        return /* @__PURE__ */ e(u, { className: "table-row", children: l.getVisibleCells().map((o) => {
          const T = o.column.columnDef.meta;
          return /* @__PURE__ */ e(
            j,
            {
              style: {
                ...T.columnDef.type === "number" ? { textAlign: "end" } : {},
                ...n
              },
              onClick: () => h(l.original),
              children: s(
                o.column.columnDef.cell,
                o.getContext()
              )
            },
            o.id
          );
        }) }, l.id);
      }) }),
      t == null || t == null || t.length == 0 ? /* @__PURE__ */ e(d, {}) : /* @__PURE__ */ e("tfoot", { className: "table-footer", children: r.getFooterGroups().map((l) => /* @__PURE__ */ e("tr", { style: { textAlign: "end" }, children: l.headers.map((n) => /* @__PURE__ */ e("th", { children: n.isPlaceholder ? null : s(
        n.column.columnDef.footer,
        n.getContext()
      ) }, n.id)) }, l.id)) })
    ] }),
    t == null ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(k, {}) }) : t == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : t.length == 0 ? /* @__PURE__ */ e(f, {}) : /* @__PURE__ */ e(d, {})
  ] }) });
}
export {
  K as default
};
