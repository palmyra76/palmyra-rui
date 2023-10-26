import { jsx as a, jsxs as s } from "react/jsx-runtime";
import { useState as i, useEffect as I } from "react";
import K from "./EmptyChildCard.js";
import { A as L } from "../../../index.esm-3271ad1f.js";
import { TextField as O, InputAdornment as j, TablePagination as q } from "@mui/material";
/* empty css                            */const M = (l) => {
  const { children: p, Child: g, EmptyChild: h, childProps: m, store: v, pageSize: n, quickSearchKey: c } = l, P = l.listKeyProvider || ((e, t) => t), u = h || K, [o, f] = i(null), [y, C] = i(null), [N, S] = i({});
  var x = n instanceof Array ? n : [n], w = n instanceof Array ? n[0] : n;
  const [r, d] = i({
    pageNo: 0,
    pageSize: w
  }), z = (e, t) => {
    d({ ...r, pageNo: t });
  };
  I(() => {
    v.query({}).then((e) => {
      f(e.result), C(e.total);
    });
  }, [r, N]);
  const A = (e) => {
    const t = e.target.value;
    S({ [c]: t });
  }, b = (e) => {
    const t = parseInt(e.target.value, 10);
    d({ ...r, pageSize: t });
  }, E = 200, F = !!n, k = !!c;
  return /* @__PURE__ */ a("div", { children: o != null ? o.length == 0 ? /* @__PURE__ */ a(u, {}) : /* @__PURE__ */ s("div", { className: "card-page-container", children: [
    p,
    /* @__PURE__ */ s("div", { className: "card-container", children: [
      /* @__PURE__ */ s("div", { className: "card-header", children: [
        /* @__PURE__ */ a("div", { className: "card-filter", children: k && /* @__PURE__ */ a(
          O,
          {
            sx: { width: E },
            type: "text",
            onChange: A,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ a(j, { position: "end", children: /* @__PURE__ */ a(L, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ a("div", { className: "card-pagination", children: F && /* @__PURE__ */ a(
          q,
          {
            component: "div",
            count: y,
            page: r.pageNo,
            onPageChange: z,
            rowsPerPage: r.pageSize,
            rowsPerPageOptions: x || [],
            onRowsPerPageChange: b
          }
        ) })
      ] }),
      /* @__PURE__ */ a("div", { className: "card-wrapper", children: o.map((e, t) => /* @__PURE__ */ a(g, { ...m, data: e }, P(e, t))) })
    ] })
  ] }) : /* @__PURE__ */ a("div", {}) });
};
export {
  M as default
};
