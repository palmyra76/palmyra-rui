import "../../../assets/TableX.css";
import { jsx as l, jsxs as h } from "react/jsx-runtime";
import { useState as C, useEffect as g } from "react";
import { Box as x, TableContainer as T, Paper as R, Table as S, TableHead as w, TableRow as i, TableBody as y, TableCell as H } from "@mui/material";
import M from "./ColumnHeader.js";
import { useReactTable as N, getCoreRowModel as j, flexRender as s } from "@tanstack/react-table";
function V({ columnDefs: c, rowData: m, onRowClick: d, onRowStyle: u, onHeaderStyle: b, onSortColumn: a }) {
  const r = N({
    data: m,
    columns: c,
    getCoreRowModel: j()
  }), [n, p] = C({});
  g(() => {
    a(n);
  }, [n]);
  const f = a ? (e, o) => {
    var t = { ...n };
    o == "" ? delete t[e] : t[e] = o, p(t);
  } : void 0;
  return /* @__PURE__ */ l(x, { sx: { width: "100%" }, children: /* @__PURE__ */ l(T, { component: R, children: /* @__PURE__ */ h(S, { sx: { minWidth: 650 }, "aria-label": "simple table", className: "table", children: [
    /* @__PURE__ */ l(w, { className: "table-head", children: r.getHeaderGroups().map((e) => /* @__PURE__ */ l(i, { children: e.headers.map((o) => o.isPlaceholder ? null : /* @__PURE__ */ l(
      M,
      {
        header: o,
        onSortChange: f,
        onHeaderStyle: b,
        children: s(
          o.column.columnDef.header,
          o.getContext()
        )
      },
      o.id
    )) }, e.id)) }),
    /* @__PURE__ */ l(y, { children: r.getRowModel().rows.map((e) => {
      const o = u(e.original);
      return /* @__PURE__ */ l(i, { className: "table-row", children: e.getVisibleCells().map((t) => /* @__PURE__ */ l(H, { style: o, onClick: () => d(e.original), children: s(
        t.column.columnDef.cell,
        t.getContext()
      ) }, t.id)) }, e.id);
    }) })
  ] }) }) });
}
export {
  V as default
};
