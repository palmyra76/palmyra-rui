import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { forwardRef as R, useRef as b, useImperativeHandle as z } from "react";
import { A } from "../../../index.esm-3271ad1f.js";
import { TextField as I, InputAdornment as L, TablePagination as K } from "@mui/material";
import O from "./CardLayout.js";
import Q from "../../form/ServerQueryManager.js";
/* empty css                               */import "react-router-dom";
import "@mui/icons-material";
/* empty css                          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css                              */const X = R(function(a, n) {
  const { children: c, Child: d, childProps: l, pageSize: m } = a, p = n || b(null), {
    setQueryFilter: g,
    setQuickSearch: h,
    gotoPage: o,
    setPageSize: u,
    getPageNo: P,
    data: s,
    pageSizeOptions: v,
    queryLimit: f
  } = Q(a), y = a.listKeyProvider || ((e, t) => t);
  z(p, () => ({
    setFilter(e) {
      g(e);
    },
    gotoPage(e) {
      o(e);
    },
    nextPage() {
    },
    prevPage() {
    }
  }), []);
  const x = (e, t) => {
    o(t);
  }, N = (e) => {
    const t = e.target.value;
    h(t);
  }, S = (e) => {
    const t = parseInt(e.target.value, 10);
    u(t);
  }, w = 200, C = !!m, F = !!a.quickSearch;
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ i("div", { className: "card-page-container", children: [
    c,
    /* @__PURE__ */ i("div", { className: "card-container", children: [
      /* @__PURE__ */ i("div", { className: "card-header", children: [
        /* @__PURE__ */ r("div", { className: "card-filter", children: F && /* @__PURE__ */ r(
          I,
          {
            sx: { width: w },
            type: "text",
            onChange: N,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ r(L, { position: "end", children: /* @__PURE__ */ r(A, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ r("div", { className: "card-pagination", children: C && /* @__PURE__ */ r(
          K,
          {
            component: "div",
            count: s,
            page: P(),
            onPageChange: x,
            rowsPerPage: f.limit,
            rowsPerPageOptions: v || [],
            onRowsPerPageChange: S
          }
        ) })
      ] }),
      /* @__PURE__ */ r("div", { className: "card-wrapper", children: /* @__PURE__ */ r(
        O,
        {
          Child: d,
          childKeyProvider: y,
          dataList: s,
          childProps: l
        }
      ) })
    ] })
  ] }) });
});
export {
  X as default
};
