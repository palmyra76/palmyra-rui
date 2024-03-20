import "../../../assets/TableX.css";
import { jsx as e, jsxs as g, Fragment as s } from "react/jsx-runtime";
import { useState as S, useEffect as P } from "react";
import { Box as y, TableContainer as N, Paper as F, Table as H, TableHead as M, TableRow as h, TableBody as j, TableCell as A } from "@mui/material";
import B from "./ColumnHeader.js";
import { useReactTable as E, getCoreRowModel as k, flexRender as c } from "@tanstack/react-table";
import G from "./LoadingChild.js";
function Q({ columnDefs: p, rowData: o, onRowClick: b, onRowStyle: f, onHeaderStyle: x, onSortColumn: m, EmptyChild: C, customizer: i }) {
  const v = (i == null ? void 0 : i.preProcessData) || ((l) => l), r = E({
    data: v(o),
    manualSorting: !0,
    manualFiltering: !0,
    manualPagination: !0,
    columns: p,
    getCoreRowModel: k()
  }), [d, T] = S({});
  P(() => {
    m(d);
  }, [d]);
  const R = m ? (l, n) => {
    var t = { ...d };
    n == "" ? delete t[l] : t[l] = n, T(t);
  } : void 0;
  return /* @__PURE__ */ e(y, { sx: { width: "100%" }, children: /* @__PURE__ */ g(N, { component: F, sx: { border: "1px solid var(--border-color)", borderRadius: "5px" }, children: [
    /* @__PURE__ */ g(H, { sx: { minWidth: 650 }, "aria-label": "simple table", className: "table", children: [
      /* @__PURE__ */ e(M, { className: "table-head", children: r.getHeaderGroups().map((l) => /* @__PURE__ */ e(h, { children: l.headers.map((n) => n.isPlaceholder ? null : /* @__PURE__ */ e(
        B,
        {
          header: n,
          onSortChange: R,
          onHeaderStyle: x,
          children: c(
            n.column.columnDef.header,
            n.getContext()
          )
        },
        n.id
      )) }, l.id)) }),
      o == null || o == null || o.length == 0 ? /* @__PURE__ */ e(s, {}) : /* @__PURE__ */ e(j, { children: r.getRowModel().rows.map((l) => {
        const n = f(l.original);
        return /* @__PURE__ */ e(h, { className: "table-row", children: l.getVisibleCells().map((t) => {
          var u;
          const a = t.column.columnDef.meta;
          return /* @__PURE__ */ e(
            A,
            {
              style: {
                ...((u = a == null ? void 0 : a.columnDef) == null ? void 0 : u.type) === "number" ? { textAlign: "end" } : {},
                ...n
              },
              onClick: () => b(l.original),
              children: c(
                t.column.columnDef.cell,
                t.getContext()
              )
            },
            t.id
          );
        }) }, l.id);
      }) }),
      o == null || o == null || o.length == 0 ? /* @__PURE__ */ e(s, {}) : /* @__PURE__ */ e("tfoot", { className: "table-footer", children: r.getFooterGroups().map((l) => /* @__PURE__ */ e("tr", { style: { textAlign: "end" }, children: l.headers.map((n) => /* @__PURE__ */ e("th", { children: n.isPlaceholder ? null : c(
        n.column.columnDef.footer,
        n.getContext()
      ) }, n.id)) }, l.id)) })
    ] }),
    o == null ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(G, {}) }) : o == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : o.length == 0 ? /* @__PURE__ */ e(C, {}) : /* @__PURE__ */ e(s, {})
  ] }) });
}
export {
  Q as default
};
