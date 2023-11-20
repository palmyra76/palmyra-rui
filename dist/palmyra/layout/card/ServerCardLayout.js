import { jsx as e, jsxs as t } from "react/jsx-runtime";
import { A as C } from "../../../index.esm-3271ad1f.js";
import { TextField as w, InputAdornment as b, TablePagination as z } from "@mui/material";
/* empty css                            */import A from "../../form/ServerQueryManager.js";
/* empty css                               */import "react-router-dom";
import "react";
import "@mui/icons-material";
/* empty css                          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css                              */import L from "./CardLayout.js";
const H = (a) => {
  const { children: n, Child: s, childProps: c, pageSize: d } = a, {
    setQuickSearch: l,
    gotoPage: m,
    setPageSize: p,
    getPageNo: g,
    data: o,
    pageSizeOptions: h,
    queryLimit: P
  } = A(a), v = a.listKeyProvider || ((r, i) => i), u = (r, i) => {
    m(i);
  }, y = (r) => {
    const i = r.target.value;
    l(i);
  }, N = (r) => {
    const i = parseInt(r.target.value, 10);
    p(i);
  }, f = 200, x = !!d, S = !!a.quickSearch;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ t("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ t("div", { className: "card-container", children: [
      /* @__PURE__ */ t("div", { className: "card-header", children: [
        /* @__PURE__ */ e("div", { className: "card-filter", children: S && /* @__PURE__ */ e(
          w,
          {
            sx: { width: f },
            type: "text",
            onChange: y,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(b, { position: "end", children: /* @__PURE__ */ e(C, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e("div", { className: "card-pagination", children: x && /* @__PURE__ */ e(
          z,
          {
            component: "div",
            count: o,
            page: g(),
            onPageChange: u,
            rowsPerPage: P.limit,
            rowsPerPageOptions: h || [],
            onRowsPerPageChange: N
          }
        ) })
      ] }),
      /* @__PURE__ */ e("div", { className: "card-wrapper", children: /* @__PURE__ */ e(
        L,
        {
          Child: s,
          childKeyProvider: v,
          dataList: o,
          childProps: c
        }
      ) })
    ] })
  ] }) });
};
export {
  H as default
};
