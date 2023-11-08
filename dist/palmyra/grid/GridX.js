import { jsx as e, jsxs as o, Fragment as ee } from "react/jsx-runtime";
import { useState as i, useEffect as te } from "react";
import { TextField as ne, InputAdornment as ie, ClickAwayListener as oe, Tooltip as p, Button as m, TablePagination as ae } from "@mui/material";
import { generateColumns as le } from "./base/ColumnConverter.js";
import { A as re } from "../../index.esm-3271ad1f.js";
import se from "./base/EmptyChildTable.js";
import ce from "./base/TableX.js";
import { Menu as P, DensitySmall as de, DensityLarge as pe, FilterAlt as me, FileDownloadOutlined as he, Add as ge } from "@mui/icons-material";
import ue from "./plugins/filter/Filter.js";
function De(r) {
  const { columns: u, children: F, EmptyChild: z, store: f, onRowClick: C, quickSearch: y } = r, [O, N] = i(null), [s, c] = i({}), [b, R] = i({}), A = z || se, [w, v] = i(!1), [d, E] = i("standard"), [T, S] = i(!1), a = r.pageSize ? r.pageSize : 15;
  var q = a instanceof Array ? a : [a], j = a instanceof Array ? a[0] : a;
  const [l, x] = i({
    pageNo: 0,
    pageSize: j
  }), I = (t, n) => {
    x({ ...l, pageNo: n }), H({ ...l, pageSize: n });
  }, [G, H] = i({}), [L, k] = i(null);
  te(() => {
    B();
  }, [G, s, b]);
  const X = le(u), B = () => {
    const t = { page: l, filter: s, sortOrder: b };
    if (f)
      try {
        f.query(t).then((n) => {
          k(n.result), N(n.total);
        }).catch((n) => {
          console.log("error while fetching");
          var D = n.response ? n.response : n;
          console.log(D), h();
        });
      } catch (n) {
        console.log(n), h();
      }
    else
      console.error("Store is not provided for the Grid"), h();
  }, h = () => {
    k([]), N(0);
  }, g = (t) => {
    E(t);
  }, M = () => {
    v(!w);
  }, Q = () => d === "compact" ? { padding: "7px" } : d === "comfortable" ? { padding: "30px", fontSize: "18px" } : { padding: "15px" }, U = () => d === "compact" ? { padding: "7px" } : d === "comfortable" ? { padding: "30px", fontSize: "18px" } : { padding: "15px" }, $ = (t) => {
    const n = t.target.value;
    c(n ? { [y]: n } : {});
  }, J = (t) => {
    t && Object.keys(t).length > 0 ? c(t) : c({});
  }, K = (t) => {
    C && C(t);
  }, V = (t) => {
    const n = parseInt(t.target.value, 10);
    x({ ...l, pageSize: n });
  }, W = (t) => {
    R(t);
  }, Y = () => {
    console.log("Export Clicked");
  }, Z = 200, _ = !!a;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ o("div", { children: [
    F,
    /* @__PURE__ */ o("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-filter", children: !!y && /* @__PURE__ */ e(
        ne,
        {
          sx: { width: Z },
          type: "text",
          value: s.quickSearch,
          onChange: $,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ e(ie, { position: "end", children: /* @__PURE__ */ e(re, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ e(oe, { onClickAway: () => {
        v(!1);
      }, children: /* @__PURE__ */ o("div", { className: "grid-header-button", onClick: M, children: [
        /* @__PURE__ */ e(p, { title: "Density", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(P, { className: "grid-button-icon" }) }) }),
        w && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ o("ul", { children: [
          /* @__PURE__ */ o("li", { onClick: () => g("standard"), children: [
            /* @__PURE__ */ e(P, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ o("li", { onClick: () => g("compact"), children: [
            /* @__PURE__ */ e(de, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ o("li", { onClick: () => g("comfortable"), children: [
            /* @__PURE__ */ e(pe, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ o("div", { className: "grid-header-button", children: [
        /* @__PURE__ */ e(p, { title: "Filter", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, onClick: () => S(!0), children: /* @__PURE__ */ e(me, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ e(
          ue,
          {
            columns: u,
            setFilter: J,
            defaultFilter: s,
            isOpen: T,
            onClose: () => S(!1)
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: Y, children: /* @__PURE__ */ e(p, { title: "Export", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(he, { className: "grid-button-icon" }) }) }) }),
      r.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: () => r.onNewClick, children: /* @__PURE__ */ e(p, { title: "New", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(ge, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ e(ee, {})
    ] }),
    /* @__PURE__ */ e(
      ce,
      {
        columnDefs: X,
        EmptyChild: A,
        rowData: L,
        onRowClick: K,
        onRowStyle: Q,
        onHeaderStyle: U,
        onSortColumn: W
      }
    ),
    /* @__PURE__ */ e("div", { className: "grid-header", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: _ && /* @__PURE__ */ e(
      ae,
      {
        component: "div",
        count: O || 0,
        page: l.pageNo,
        onPageChange: I,
        rowsPerPage: l.pageSize,
        rowsPerPageOptions: q || [],
        onRowsPerPageChange: V
      }
    ) }) })
  ] }) });
}
export {
  De as default
};
