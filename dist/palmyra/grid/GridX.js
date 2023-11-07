import { jsx as e, jsxs as i } from "react/jsx-runtime";
import { useState as o, useEffect as ee } from "react";
import { TextField as te, InputAdornment as ne, ClickAwayListener as oe, Tooltip as g, Button as h, TablePagination as ie } from "@mui/material";
import { generateColumns as ae } from "./base/ColumnConverter.js";
import { A as re } from "../../index.esm-3271ad1f.js";
import le from "./base/EmptyChildTable.js";
import se from "./base/TableX.js";
import { Menu as P, DensitySmall as ce, DensityLarge as de, FilterAlt as pe, FileDownloadOutlined as me } from "@mui/icons-material";
import ge from "./plugins/filter/Filter.js";
function xe(d) {
  const { columns: u, children: z, EmptyChild: F, store: f, onRowClick: y, quickSearch: C } = d, [O, N] = o(null), [l, s] = o({}), [S, E] = o({}), R = F || le, [b, v] = o(!1), [c, A] = o("standard"), [T, w] = o(!1), a = d.pageSize ? d.pageSize : 15;
  var q = a instanceof Array ? a : [a], j = a instanceof Array ? a[0] : a;
  const [r, x] = o({
    pageNo: 0,
    pageSize: j
  }), I = (t, n) => {
    x({ ...r, pageNo: n }), H({ ...r, pageSize: n });
  }, [G, H] = o({}), [L, D] = o(null);
  ee(() => {
    B();
  }, [G, l, S]);
  const X = ae(u), B = () => {
    const t = { page: r, filter: l, sortOrder: S };
    if (f)
      try {
        f.query(t).then((n) => {
          D(n.result), N(n.total);
        }).catch((n) => {
          console.log("error while fetching");
          var k = n.response ? n.response : n;
          console.log(k), p();
        });
      } catch (n) {
        console.log(n), p();
      }
    else
      console.error("Store is not provided for the Grid"), p();
  }, p = () => {
    D([]), N(0);
  }, m = (t) => {
    A(t);
  }, M = () => {
    v(!b);
  }, Q = () => c === "compact" ? { padding: "7px" } : c === "comfortable" ? { padding: "30px", fontSize: "18px" } : { padding: "15px" }, U = () => c === "compact" ? { padding: "7px" } : c === "comfortable" ? { padding: "30px", fontSize: "18px" } : { padding: "15px" }, $ = (t) => {
    const n = t.target.value;
    s(n ? { [C]: n } : {});
  }, J = (t) => {
    t && Object.keys(t).length > 0 ? s(t) : s({});
  }, K = (t) => {
    y && y(t);
  }, V = (t) => {
    const n = parseInt(t.target.value, 10);
    x({ ...r, pageSize: n });
  }, W = (t) => {
    E(t);
  }, Y = () => {
    console.log("Export Clicked");
  }, Z = 200, _ = !!a;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ i("div", { children: [
    z,
    /* @__PURE__ */ i("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-filter", children: !!C && /* @__PURE__ */ e(
        te,
        {
          sx: { width: Z },
          type: "text",
          value: l.quickSearch,
          onChange: $,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ e(ne, { position: "end", children: /* @__PURE__ */ e(re, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ e(oe, { onClickAway: () => {
        v(!1);
      }, children: /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: M, children: [
        /* @__PURE__ */ e(g, { title: "Density", placement: "top", children: /* @__PURE__ */ e(h, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(P, { className: "grid-button-icon" }) }) }),
        b && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ i("ul", { children: [
          /* @__PURE__ */ i("li", { onClick: () => m("standard"), children: [
            /* @__PURE__ */ e(P, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ i("li", { onClick: () => m("compact"), children: [
            /* @__PURE__ */ e(ce, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ i("li", { onClick: () => m("comfortable"), children: [
            /* @__PURE__ */ e(de, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "grid-header-button", children: /* @__PURE__ */ e(g, { title: "Filter", placement: "top", children: /* @__PURE__ */ i(h, { className: "grid-btn", disableRipple: !0, onClick: () => w(!0), children: [
        /* @__PURE__ */ e(pe, { className: "grid-button-icon" }),
        /* @__PURE__ */ e(
          ge,
          {
            columns: u,
            setFilter: J,
            defaultFilter: l,
            isOpen: T,
            onClose: () => w(!1)
          }
        )
      ] }) }) }),
      /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: Y, children: /* @__PURE__ */ e(g, { title: "Export", placement: "top", children: /* @__PURE__ */ e(h, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(me, { className: "grid-button-icon" }) }) }) }),
      /* @__PURE__ */ e("div", { className: "grid-filter", children: _ && /* @__PURE__ */ e(
        ie,
        {
          component: "div",
          count: O || 0,
          page: r.pageNo,
          onPageChange: I,
          rowsPerPage: r.pageSize,
          rowsPerPageOptions: q || [],
          onRowsPerPageChange: V
        }
      ) })
    ] }),
    /* @__PURE__ */ e(
      se,
      {
        columnDefs: X,
        EmptyChild: R,
        rowData: L,
        onRowClick: K,
        onRowStyle: Q,
        onHeaderStyle: U,
        onSortColumn: W
      }
    )
  ] }) });
}
export {
  xe as default
};
