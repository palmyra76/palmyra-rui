import { jsx as t, jsxs as a } from "react/jsx-runtime";
import { forwardRef as R, useRef as b, useImperativeHandle as z } from "react";
import { A } from "../../../index.esm-3271ad1f.js";
import { TextField as I, InputAdornment as L, TablePagination as K } from "@mui/material";
import O from "./CardLayout.js";
import Q from "../../form/ServerQueryManager.js";
/* empty css                               */import "react-router-dom";
import "@mui/icons-material";
/* empty css                          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css                              */const X = R(function(i, n) {
  const { children: c, Child: d, childProps: l, pageSize: m } = i, p = n || b(null), {
    setQueryFilter: g,
    setQuickSearch: h,
    gotoPage: o,
    setPageSize: u,
    getPageNo: P,
    data: s,
    pageSizeOptions: v,
    queryLimit: f
  } = Q(i), y = i.listKeyProvider || ((e, r) => r);
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
  const x = (e, r) => {
    o(r);
  }, C = (e) => {
    const r = e.target.value;
    h(r);
  }, N = (e) => {
    const r = parseInt(e.target.value, 10);
    u(r);
  }, S = 200, w = !!m, F = !!i.quickSearch;
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ a("div", { className: "card-page-container", children: [
    c,
    /* @__PURE__ */ a("div", { className: "card-container", children: [
      /* @__PURE__ */ a("div", { className: "card-header", children: [
        /* @__PURE__ */ t("div", { className: "card-filter", children: F && /* @__PURE__ */ t(
          I,
          {
            sx: { width: S },
            type: "text",
            onChange: C,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ t(L, { position: "end", children: /* @__PURE__ */ t(A, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ t("div", { className: "card-pagination", children: w && /* @__PURE__ */ t(
          K,
          {
            component: "div",
            count: s,
            page: P(),
            onPageChange: x,
            rowsPerPage: f.limit,
            rowsPerPageOptions: v || [],
            onRowsPerPageChange: N
          }
        ) })
      ] }),
      /* @__PURE__ */ t("div", { className: "card-wrapper", children: /* @__PURE__ */ t(
        O,
        {
          Child: d,
          childKeyProvider: y,
          dataList: s,
          childProps: l,
          EmptyChild: i.EmptyChild
        }
      ) })
    ] })
  ] }) });
});
export {
  X as default
};
