import { jsx as e, jsxs as o, Fragment as ae } from "react/jsx-runtime";
import { useState as i, useEffect as re } from "react";
import { TextField as le, InputAdornment as se, ClickAwayListener as ce, Tooltip as p, Button as m, TablePagination as de } from "@mui/material";
import { generateColumns as pe } from "./base/ColumnConverter.js";
import { A as me } from "../../index.esm-3271ad1f.js";
import he from "./base/EmptyChildTable.js";
import ge from "./base/TableX.js";
import { Menu as z, DensitySmall as P, DensityLarge as F, FilterAlt as ue, FileDownloadOutlined as fe, Add as ye } from "@mui/icons-material";
import { NoopCustomizer as Ce } from "./Types.js";
import Ne from "./plugins/filter/Filter.js";
function Re(r) {
  const { columns: f, children: O, EmptyChild: R, store: y, onRowClick: C, quickSearch: N } = r, [A, h] = i(null), [c, d] = i({}), [b, E] = i({}), T = R || he, q = r.customizer || Ce, [v, w] = i(!1), [s, I] = i("standard"), [j, k] = i(!1), a = r.pageSize ? r.pageSize : 15;
  var G = a instanceof Array ? a : [a], H = a instanceof Array ? a[0] : a;
  const [l, S] = i({
    pageNo: 0,
    pageSize: H
  }), L = (t, n) => {
    S({ ...l, pageNo: n }), B({ ...l, pageSize: n });
  }, [X, B] = i({}), [M, g] = i(null);
  re(() => {
    U();
  }, [X, c, b]);
  const Q = pe(f, q), U = () => {
    const t = { page: l, filter: c, sortOrder: b, total: !0 };
    if (y)
      try {
        y.query(t).then((n) => {
          g(n.result), h(n.total);
        }).catch((n) => {
          var D = n.response ? n.response : n;
          console.error("error while fetching", D), $();
        });
      } catch (n) {
        console.error(n), x();
      }
    else
      console.error("Store is not provided for the Grid"), x();
  }, x = () => {
    g([]), h(0);
  }, $ = () => {
    g(void 0), h(0);
  }, u = (t) => {
    I(t);
  }, J = () => {
    w(!v);
  }, K = () => s === "compact" ? { padding: "3px" } : s === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, V = () => s === "compact" ? { padding: "3px" } : s === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, W = () => {
    var t;
    switch (s) {
      case "compact":
        t = /* @__PURE__ */ e(P, { className: "density-icon" });
        break;
      case "comfortable":
        t = /* @__PURE__ */ e(F, { className: "density-icon" });
        break;
      default:
        t = /* @__PURE__ */ e(z, { className: "grid-button-icon" });
        break;
    }
    return t;
  }, Y = (t) => {
    const n = t.target.value;
    d(n ? { [N]: n } : {});
  }, Z = (t) => {
    t && Object.keys(t).length > 0 ? d(t) : d({});
  }, _ = (t) => {
    C && C(t);
  }, ee = (t) => {
    const n = parseInt(t.target.value, 10);
    S({ ...l, pageSize: n });
  }, te = (t) => {
    E(t);
  }, ne = () => {
    console.info("Export Clicked");
  }, ie = 200, oe = !!a;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ o("div", { children: [
    O,
    /* @__PURE__ */ o("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-filter", children: !!N && /* @__PURE__ */ e(
        le,
        {
          sx: { width: ie },
          type: "text",
          value: c.quickSearch,
          onChange: Y,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ e(se, { position: "end", children: /* @__PURE__ */ e(me, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ e(ce, { onClickAway: () => {
        w(!1);
      }, children: /* @__PURE__ */ o("div", { className: "grid-header-button", onClick: J, children: [
        /* @__PURE__ */ e(p, { title: "Density", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, children: W() }) }),
        v && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ o("ul", { children: [
          /* @__PURE__ */ o("li", { onClick: () => u("standard"), children: [
            /* @__PURE__ */ e(z, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ o("li", { onClick: () => u("compact"), children: [
            /* @__PURE__ */ e(P, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ o("li", { onClick: () => u("comfortable"), children: [
            /* @__PURE__ */ e(F, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ o("div", { className: "grid-header-button", children: [
        /* @__PURE__ */ e(p, { title: "Filter", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, onClick: () => k(!0), children: /* @__PURE__ */ e(ue, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ e(
          Ne,
          {
            columns: f,
            setFilter: Z,
            defaultFilter: c,
            isOpen: j,
            onClose: () => k(!1)
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: ne, children: /* @__PURE__ */ e(p, { title: "Export", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(fe, { className: "grid-button-icon" }) }) }) }),
      r.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: () => {
        r.onNewClick();
      }, children: /* @__PURE__ */ e(p, { title: "New", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(ye, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ e(ae, {})
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      ge,
      {
        columnDefs: Q,
        EmptyChild: T,
        rowData: M,
        onRowClick: _,
        onRowStyle: K,
        onHeaderStyle: V,
        onSortColumn: te
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-header", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: oe && /* @__PURE__ */ e(
      de,
      {
        component: "div",
        count: A || 0,
        page: l.pageNo,
        onPageChange: L,
        rowsPerPage: l.pageSize,
        rowsPerPageOptions: G || [],
        onRowsPerPageChange: ee
      }
    ) }) })
  ] }) });
}
export {
  Re as default
};
