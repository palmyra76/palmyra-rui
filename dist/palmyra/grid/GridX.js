import { jsx as e, jsxs as i } from "react/jsx-runtime";
import { useState as o, useEffect as oe } from "react";
import { TextField as A, InputAdornment as ie, ClickAwayListener as F, Tooltip as m, Button as g, TablePagination as ae } from "@mui/material";
import { generateColumns as le } from "./base/ColumnConverter.js";
import { A as re } from "../../index.esm-3271ad1f.js";
import se from "./base/EmptyChildTable.js";
import ce from "./base/TableX.js";
import { Menu as O, DensitySmall as de, DensityLarge as pe, FilterAlt as he, FileDownloadOutlined as me } from "@mui/icons-material";
function be(s) {
  const { columns: u, children: R, EmptyChild: E, store: f, onRowClick: y, quickSearch: C } = s, [T, w] = o(null), [c, v] = o({}), [N, q] = o({}), I = E || se, [S, b] = o(!1), [x, k] = o(!1), [r, j] = o("standard"), a = s.pageSize ? s.pageSize : 15;
  var G = a instanceof Array ? a : [a], H = a instanceof Array ? a[0] : a;
  const [l, D] = o({
    pageNo: 0,
    pageSize: H
  }), L = (n, t) => {
    D({ ...l, pageNo: t }), B({ ...l, pageSize: t });
  }, [X, B] = o({}), [d, P] = o(null);
  oe(() => {
    Q();
  }, [X, c, N]);
  const M = le(u), Q = () => {
    const n = { page: l, filter: c, sortOrder: N };
    if (f)
      try {
        f.query(n).then((t) => {
          P(t.result), w(t.total);
        }).catch((t) => {
          console.log("error while fetching");
          var z = t.response ? t.response : t;
          console.log(z), p();
        });
      } catch (t) {
        console.log(t), p();
      }
    else
      console.error("Store is not provided for the Grid"), p();
  }, p = () => {
    P([]), w(0);
  }, h = (n) => {
    j(n);
  }, $ = () => {
    b(!S);
  }, J = () => {
    k(!x);
  }, K = (n) => {
    n.stopPropagation();
  }, U = () => r === "compact" ? { padding: "7px" } : r === "comfortable" ? { padding: "30px", fontSize: "18px" } : { padding: "15px" }, V = () => r === "compact" ? { padding: "7px" } : r === "comfortable" ? { padding: "30px", fontSize: "18px" } : { padding: "15px" }, W = (n) => {
    const t = n.target.value;
    v(t ? { [C]: t } : {});
  }, Y = (n) => {
    y && y(n);
  }, Z = (n) => {
    const t = parseInt(n.target.value, 10);
    D({ ...l, pageSize: t });
  }, _ = (n) => {
    q(n);
  }, ee = () => {
    console.log("Export Clicked");
  }, te = 200, ne = !!a;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ i("div", { children: [
    R,
    /* @__PURE__ */ i("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-filter", children: !!C && /* @__PURE__ */ e(
        A,
        {
          sx: { width: te },
          type: "text",
          value: c.quickSearch,
          onChange: W,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ e(ie, { position: "end", children: /* @__PURE__ */ e(re, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ e(F, { onClickAway: () => {
        b(!1);
      }, children: /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: $, children: [
        /* @__PURE__ */ e(m, { title: "Density", placement: "top", children: /* @__PURE__ */ e(g, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(O, { className: "grid-button-icon" }) }) }),
        S && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ i("ul", { children: [
          /* @__PURE__ */ i("li", { onClick: () => h("standard"), children: [
            /* @__PURE__ */ e(O, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ i("li", { onClick: () => h("compact"), children: [
            /* @__PURE__ */ e(de, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ i("li", { onClick: () => h("comfortable"), children: [
            /* @__PURE__ */ e(pe, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ e(F, { onClickAway: () => {
        k(!1);
      }, children: /* @__PURE__ */ e("div", { onClick: K, children: /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: J, children: [
        /* @__PURE__ */ e(m, { title: "Filter", placement: "top", children: /* @__PURE__ */ e(g, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(he, { className: "grid-button-icon" }) }) }),
        x && /* @__PURE__ */ e("div", { className: "filter-dropdown-content", children: u.map((n, t) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(A, { placeholder: n.title }) }, t)) })
      ] }) }) }),
      /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: ee, children: /* @__PURE__ */ e(m, { title: "Export", placement: "top", children: /* @__PURE__ */ e(g, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(me, { className: "grid-button-icon" }) }) }) }),
      /* @__PURE__ */ e("div", { className: "grid-filter", children: ne && /* @__PURE__ */ e(
        ae,
        {
          component: "div",
          count: T,
          page: l.pageNo,
          onPageChange: L,
          rowsPerPage: l.pageSize,
          rowsPerPageOptions: G || [],
          onRowsPerPageChange: Z
        }
      ) })
    ] }),
    d != null ? d.length == 0 ? /* @__PURE__ */ e(I, {}) : /* @__PURE__ */ e(
      ce,
      {
        columnDefs: M,
        rowData: d,
        onRowClick: Y,
        onRowStyle: U,
        onHeaderStyle: V,
        onSortColumn: _
      }
    ) : /* @__PURE__ */ e("div", {})
  ] }) });
}
export {
  be as default
};
