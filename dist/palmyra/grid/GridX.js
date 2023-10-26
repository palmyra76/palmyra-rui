import { jsx as e, jsxs as i } from "react/jsx-runtime";
import { useState as o, useEffect as Z } from "react";
import { TextField as _, InputAdornment as ee, ClickAwayListener as te, Tooltip as N, Button as D, TablePagination as ne } from "@mui/material";
import { generateColumns as oe } from "./base/ColumnConverter.js";
import { A as ae } from "../../index.esm-3271ad1f.js";
import ie from "./base/EmptyChildTable.js";
import re from "./base/TableX.js";
import { Menu as b, DensitySmall as le, DensityLarge as se, FileDownloadOutlined as ce } from "@mui/icons-material";
function Ce(s) {
  const { columns: k, children: P, EmptyChild: z, store: g, onRowClick: h, quickSearch: u } = s, [E, f] = o(null), [c, R] = o({}), [y, A] = o({}), O = z || ie, [C, S] = o(!1), [l, F] = o("standard"), a = s.pageSize ? s.pageSize : 15;
  var T = a instanceof Array ? a : [a], q = a instanceof Array ? a[0] : a;
  const [r, w] = o({
    pageNo: 0,
    pageSize: q
  }), I = (n, t) => {
    w({ ...r, pageNo: t }), G({ ...r, pageSize: t });
  }, [j, G] = o({}), [d, x] = o(null);
  Z(() => {
    L();
  }, [j, c, y]);
  const H = oe(k), L = () => {
    const n = { page: r, filter: c, sortOrder: y };
    if (g)
      try {
        g.query(n).then((t) => {
          x(t.result), f(t.total);
        }).catch((t) => {
          console.log("error while fetching");
          var v = t.response ? t.response : t;
          console.log(v), p();
        });
      } catch (t) {
        console.log(t), p();
      }
    else
      console.error("Store is not provided for the Grid"), p();
  }, p = () => {
    x([]), f(0);
  }, m = (n) => {
    F(n);
  }, X = () => {
    S(!C);
  }, B = () => l === "compact" ? { padding: "7px" } : l === "comfortable" ? { padding: "30px", fontSize: "18px" } : { padding: "15px" }, M = () => l === "compact" ? { padding: "7px" } : l === "comfortable" ? { padding: "30px", fontSize: "18px" } : { padding: "15px" }, Q = (n) => {
    const t = n.target.value;
    R({ [u]: t });
  }, $ = (n) => {
    h && h(n);
  }, J = (n) => {
    const t = parseInt(n.target.value, 10);
    w({ ...r, pageSize: t });
  }, K = (n) => {
    A(n);
  }, U = () => {
    console.log("Export Clicked");
  }, V = 200, W = !!a, Y = !!u;
  return /* @__PURE__ */ e("div", { children: d != null ? d.length == 0 ? /* @__PURE__ */ e(O, {}) : /* @__PURE__ */ i("div", { children: [
    P,
    /* @__PURE__ */ i("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-filter", children: Y && /* @__PURE__ */ e(
        _,
        {
          sx: { width: V },
          type: "text",
          value: c.quickSearch,
          onChange: Q,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ e(ee, { position: "end", children: /* @__PURE__ */ e(ae, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ e(te, { onClickAway: () => {
        S(!1);
      }, children: /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: X, children: [
        /* @__PURE__ */ e(N, { title: "Density", placement: "top", children: /* @__PURE__ */ e(D, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(b, { className: "grid-button-icon" }) }) }),
        C && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ i("ul", { children: [
          /* @__PURE__ */ i("li", { onClick: () => m("standard"), children: [
            /* @__PURE__ */ e(b, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ i("li", { onClick: () => m("compact"), children: [
            /* @__PURE__ */ e(le, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ i("li", { onClick: () => m("comfortable"), children: [
            /* @__PURE__ */ e(se, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: U, children: /* @__PURE__ */ e(N, { title: "Export", placement: "top", children: /* @__PURE__ */ e(D, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(ce, { className: "grid-button-icon" }) }) }) }),
      /* @__PURE__ */ e("div", { className: "grid-filter", children: W && /* @__PURE__ */ e(
        ne,
        {
          component: "div",
          count: E,
          page: r.pageNo,
          onPageChange: I,
          rowsPerPage: r.pageSize,
          rowsPerPageOptions: T || [],
          onRowsPerPageChange: J
        }
      ) })
    ] }),
    /* @__PURE__ */ e(
      re,
      {
        columnDefs: H,
        rowData: d,
        onRowClick: $,
        onRowStyle: B,
        onHeaderStyle: M,
        onSortColumn: K
      }
    )
  ] }) : /* @__PURE__ */ e("div", {}) });
}
export {
  Ce as default
};
