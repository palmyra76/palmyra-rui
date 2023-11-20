import { jsx as e, jsxs as n, Fragment as Z } from "react/jsx-runtime";
import { forwardRef as _, useState as r, useRef as ee, useImperativeHandle as te } from "react";
import { TextField as ne, InputAdornment as ie, ClickAwayListener as oe, Tooltip as a, Button as s, TablePagination as le } from "@mui/material";
import { generateColumns as re } from "./base/ColumnConverter.js";
import { A as ae } from "../../index.esm-3271ad1f.js";
import se from "./base/EmptyChildTable.js";
import ce from "./base/TableX.js";
import { Menu as C, DensitySmall as N, DensityLarge as b, FilterAlt as de, FileDownloadOutlined as me, Add as pe } from "@mui/icons-material";
import { NoopCustomizer as he } from "./Types.js";
import ue from "./plugins/filter/Filter.js";
import ge from "../form/ServerQueryManager.js";
const Fe = _(function(o, d) {
  const { columns: m, children: y, EmptyChild: w, onRowClick: p, quickSearch: v } = o, x = w || se, k = o.customizer || he, [h, u] = r(!1), [l, S] = r("standard"), [P, g] = r(!1), [D, R] = r(""), {
    setQueryFilter: f,
    setQuickSearch: F,
    setSortColumns: z,
    gotoPage: O,
    setPageSize: A,
    getPageNo: E,
    data: T,
    totalRecords: I,
    pageSizeOptions: Q,
    filter: q,
    queryLimit: H
  } = ge(o), L = d || ee(null);
  te(L, () => ({
    setFilter: (t) => {
    }
  }), []);
  const X = (t, i) => {
    O(i);
  }, j = re(m, k), c = (t) => {
    S(t);
  }, G = () => {
    u(!h);
  }, B = () => l === "compact" ? { padding: "3px" } : l === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, M = () => l === "compact" ? { padding: "3px" } : l === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, $ = () => {
    var t;
    switch (l) {
      case "compact":
        t = /* @__PURE__ */ e(N, { className: "density-icon" });
        break;
      case "comfortable":
        t = /* @__PURE__ */ e(b, { className: "density-icon" });
        break;
      default:
        t = /* @__PURE__ */ e(C, { className: "grid-button-icon" });
        break;
    }
    return t;
  }, J = (t) => {
    const i = t.target.value;
    R(i), i ? F(i) : f({});
  }, K = (t) => {
    p && p(t);
  }, U = (t) => {
    const i = parseInt(t.target.value, 10);
    A(i);
  }, V = () => {
    console.info("Export Clicked");
  }, W = 200, Y = !!o.pageSize;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ n("div", { children: [
    y,
    /* @__PURE__ */ n("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-filter", children: !!v && /* @__PURE__ */ e(
        ne,
        {
          sx: { width: W },
          type: "text",
          value: D,
          onChange: J,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ e(ie, { position: "end", children: /* @__PURE__ */ e(ae, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ e(oe, { onClickAway: () => {
        u(!1);
      }, children: /* @__PURE__ */ n("div", { className: "grid-header-button", onClick: G, children: [
        /* @__PURE__ */ e(a, { title: "Density", placement: "top", children: /* @__PURE__ */ e(s, { className: "grid-btn", disableRipple: !0, children: $() }) }),
        h && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ n("ul", { children: [
          /* @__PURE__ */ n("li", { onClick: () => c("standard"), children: [
            /* @__PURE__ */ e(C, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ n("li", { onClick: () => c("compact"), children: [
            /* @__PURE__ */ e(N, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ n("li", { onClick: () => c("comfortable"), children: [
            /* @__PURE__ */ e(b, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ n("div", { className: "grid-header-button", children: [
        /* @__PURE__ */ e(a, { title: "Filter", placement: "top", children: /* @__PURE__ */ e(s, { className: "grid-btn", disableRipple: !0, onClick: () => g(!0), children: /* @__PURE__ */ e(de, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ e(
          ue,
          {
            columns: m,
            setFilter: f,
            defaultFilter: q,
            isOpen: P,
            onClose: () => g(!1)
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: V, children: /* @__PURE__ */ e(a, { title: "Export", placement: "top", children: /* @__PURE__ */ e(s, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(me, { className: "grid-button-icon" }) }) }) }),
      o.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: () => {
        o.onNewClick();
      }, children: /* @__PURE__ */ e(a, { title: "New", placement: "top", children: /* @__PURE__ */ e(s, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(pe, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ e(Z, {})
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      ce,
      {
        columnDefs: j,
        EmptyChild: x,
        rowData: T,
        onRowClick: K,
        onRowStyle: B,
        onHeaderStyle: M,
        onSortColumn: z
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-header", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: Y && /* @__PURE__ */ e(
      le,
      {
        component: "div",
        count: I || 0,
        page: E(),
        onPageChange: X,
        rowsPerPage: H.limit,
        rowsPerPageOptions: Q || [],
        onRowsPerPageChange: U
      }
    ) }) })
  ] }) });
});
export {
  Fe as default
};
