import { jsx as e, jsxs as i } from "react/jsx-runtime";
import { useState as o, useEffect as ee } from "react";
import { TextField as te, InputAdornment as ne, ClickAwayListener as oe, Tooltip as h, Button as u, TablePagination as ie } from "@mui/material";
import { generateColumns as ae } from "./base/ColumnConverter.js";
import { A as le } from "../../index.esm-3271ad1f.js";
import re from "./base/EmptyChildTable.js";
import se from "./base/TableX.js";
import { Menu as z, DensitySmall as ce, DensityLarge as de, FilterAlt as pe, FileDownloadOutlined as me } from "@mui/icons-material";
import ge from "./plugins/filter/Filter.js";
function xe(d) {
  const { columns: f, children: F, EmptyChild: O, store: y, onRowClick: C, quickSearch: N } = d, [R, S] = o(null), [r, s] = o({}), [b, A] = o({}), E = O || re, [v, w] = o(!1), [c, T] = o("standard"), [q, x] = o(!1), a = d.pageSize ? d.pageSize : 15;
  var j = a instanceof Array ? a : [a], I = a instanceof Array ? a[0] : a;
  const [l, D] = o({
    pageNo: 0,
    pageSize: I
  }), G = (t, n) => {
    D({ ...l, pageNo: n }), L({ ...l, pageSize: n });
  }, [H, L] = o({}), [p, k] = o(null);
  ee(() => {
    B();
  }, [H, r, b]);
  const X = ae(f), B = () => {
    const t = { page: l, filter: r, sortOrder: b };
    if (y)
      try {
        y.query(t).then((n) => {
          k(n.result), S(n.total);
        }).catch((n) => {
          console.log("error while fetching");
          var P = n.response ? n.response : n;
          console.log(P), m();
        });
      } catch (n) {
        console.log(n), m();
      }
    else
      console.error("Store is not provided for the Grid"), m();
  }, m = () => {
    k([]), S(0);
  }, g = (t) => {
    T(t);
  }, M = () => {
    w(!v);
  }, Q = () => c === "compact" ? { padding: "7px" } : c === "comfortable" ? { padding: "30px", fontSize: "18px" } : { padding: "15px" }, U = () => c === "compact" ? { padding: "7px" } : c === "comfortable" ? { padding: "30px", fontSize: "18px" } : { padding: "15px" }, $ = (t) => {
    const n = t.target.value;
    s(n ? { [N]: n } : {});
  }, J = (t) => {
    t && Object.keys(t).length > 0 ? s(t) : s({});
  }, K = (t) => {
    C && C(t);
  }, V = (t) => {
    const n = parseInt(t.target.value, 10);
    D({ ...l, pageSize: n });
  }, W = (t) => {
    A(t);
  }, Y = () => {
    console.log("Export Clicked");
  }, Z = 200, _ = !!a;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ i("div", { children: [
    F,
    /* @__PURE__ */ i("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-filter", children: !!N && /* @__PURE__ */ e(
        te,
        {
          sx: { width: Z },
          type: "text",
          value: r.quickSearch,
          onChange: $,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ e(ne, { position: "end", children: /* @__PURE__ */ e(le, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ e(oe, { onClickAway: () => {
        w(!1);
      }, children: /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: M, children: [
        /* @__PURE__ */ e(h, { title: "Density", placement: "top", children: /* @__PURE__ */ e(u, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(z, { className: "grid-button-icon" }) }) }),
        v && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ i("ul", { children: [
          /* @__PURE__ */ i("li", { onClick: () => g("standard"), children: [
            /* @__PURE__ */ e(z, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ i("li", { onClick: () => g("compact"), children: [
            /* @__PURE__ */ e(ce, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ i("li", { onClick: () => g("comfortable"), children: [
            /* @__PURE__ */ e(de, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "grid-header-button", children: /* @__PURE__ */ e(h, { title: "Filter", placement: "top", children: /* @__PURE__ */ i(u, { className: "grid-btn", disableRipple: !0, onClick: () => x(!0), children: [
        /* @__PURE__ */ e(pe, { className: "grid-button-icon" }),
        /* @__PURE__ */ e(
          ge,
          {
            columns: f,
            setFilter: J,
            defaultFilter: r,
            isOpen: q,
            onClose: () => x(!1)
          }
        )
      ] }) }) }),
      /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: Y, children: /* @__PURE__ */ e(h, { title: "Export", placement: "top", children: /* @__PURE__ */ e(u, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(me, { className: "grid-button-icon" }) }) }) }),
      /* @__PURE__ */ e("div", { className: "grid-filter", children: _ && /* @__PURE__ */ e(
        ie,
        {
          component: "div",
          count: R || 0,
          page: l.pageNo,
          onPageChange: G,
          rowsPerPage: l.pageSize,
          rowsPerPageOptions: j || [],
          onRowsPerPageChange: V
        }
      ) })
    ] }),
    p != null ? p.length == 0 ? /* @__PURE__ */ e(E, {}) : /* @__PURE__ */ e(
      se,
      {
        columnDefs: X,
        rowData: p,
        onRowClick: K,
        onRowStyle: Q,
        onHeaderStyle: U,
        onSortColumn: W
      }
    ) : /* @__PURE__ */ e("div", {})
  ] }) });
}
export {
  xe as default
};
