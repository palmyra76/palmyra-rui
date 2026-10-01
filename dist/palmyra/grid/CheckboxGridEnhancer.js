import { jsx as o } from "react/jsx-runtime";
import { useState as h, useRef as r, useEffect as S } from "react";
import { getFilteredRowModel as f } from "@tanstack/react-table";
const T = () => {
  const [n, l] = h({}), t = r({}), c = r(void 0);
  return { getTableOptions: () => ({
    state: {
      rowSelection: n
    },
    enableRowSelection: !0,
    onRowSelectionChange: l,
    getFilteredRowModel: f(),
    debug: !0
  }), preProcessColumns: (g) => {
    const u = {
      id: "select",
      header: ({ table: e }) => /* @__PURE__ */ o(
        i,
        {
          checked: (() => {
            try {
              return e.getIsAllRowsSelected();
            } catch {
              return !1;
            }
          })(),
          indeterminate: e.getIsSomeRowsSelected(),
          onChange: e.getToggleAllRowsSelectedHandler()
        }
      ),
      cell: ({ row: e }) => {
        const s = (d) => {
          const a = e.original.id;
          e.getIsSelected() ? delete t.current[a] : t.current[a] = !0, e.getToggleSelectedHandler()(d);
        };
        return /* @__PURE__ */ o("div", { className: "px-1", children: /* @__PURE__ */ o(
          i,
          {
            checked: e.getIsSelected(),
            disabled: !e.getCanSelect(),
            indeterminate: e.getIsSomeSelected(),
            onChange: s
          }
        ) });
      }
    };
    g.push(u);
  }, getTableRef: () => c, getSelectedIds: () => t.current };
};
function i({
  indeterminate: n,
  className: l = "",
  ...t
}) {
  const c = r(null);
  return S(() => {
    typeof n == "boolean" && (c.current.indeterminate = !t.checked && n);
  }, [c, n]), /* @__PURE__ */ o(
    "input",
    {
      type: "checkbox",
      ref: c,
      className: l + " cursor-pointer",
      ...t
    }
  );
}
export {
  T as CheckboxGridEnhancer
};
