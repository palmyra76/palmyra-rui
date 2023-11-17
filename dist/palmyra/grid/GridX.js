import { jsx as e, jsxs as i, Fragment as ie } from "react/jsx-runtime";
import { useState as a, useEffect as oe } from "react";
import { TextField as re, InputAdornment as le, ClickAwayListener as se, Tooltip as p, Button as m, TablePagination as ce } from "@mui/material";
import { generateColumns as de } from "./base/ColumnConverter.js";
import { A as pe } from "../../index.esm-3271ad1f.js";
import me from "./base/EmptyChildTable.js";
import he from "./base/TableX.js";
import { Menu as P, DensitySmall as F, DensityLarge as z, FilterAlt as ge, FileDownloadOutlined as ue, Add as fe } from "@mui/icons-material";
import ye from "./plugins/filter/Filter.js";
function Fe(l) {
  const { columns: f, children: O, EmptyChild: R, store: y, onRowClick: C, quickSearch: N } = l, [A, h] = a(null), [c, d] = a({}), [b, E] = a({}), T = R || me, [v, w] = a(!1), [s, q] = a("standard"), [I, k] = a(!1), o = l.pageSize ? l.pageSize : 15;
  var j = o instanceof Array ? o : [o], G = o instanceof Array ? o[0] : o;
  const [r, S] = a({
    pageNo: 0,
    pageSize: G
  }), H = (t, n) => {
    S({ ...r, pageNo: n }), X({ ...r, pageSize: n });
  }, [L, X] = a({}), [B, g] = a(null);
  oe(() => {
    Q();
  }, [L, c, b]);
  const M = de(f), Q = () => {
    const t = { page: r, filter: c, sortOrder: b, total: !0 };
    if (y)
      try {
        y.query(t).then((n) => {
          g(n.result), h(n.total);
        }).catch((n) => {
          var D = n.response ? n.response : n;
          console.error("error while fetching", D), U();
        });
      } catch (n) {
        console.error(n), x();
      }
    else
      console.error("Store is not provided for the Grid"), x();
  }, x = () => {
    g([]), h(0);
  }, U = () => {
    g(void 0), h(0);
  }, u = (t) => {
    q(t);
  }, $ = () => {
    w(!v);
  }, J = () => s === "compact" ? { padding: "3px" } : s === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, K = () => s === "compact" ? { padding: "3px" } : s === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, V = () => {
    var t;
    switch (s) {
      case "compact":
        t = /* @__PURE__ */ e(F, { className: "density-icon" });
        break;
      case "comfortable":
        t = /* @__PURE__ */ e(z, { className: "density-icon" });
        break;
      default:
        t = /* @__PURE__ */ e(P, { className: "grid-button-icon" });
        break;
    }
    return t;
  }, W = (t) => {
    const n = t.target.value;
    d(n ? { [N]: n } : {});
  }, Y = (t) => {
    t && Object.keys(t).length > 0 ? d(t) : d({});
  }, Z = (t) => {
    C && C(t);
  }, _ = (t) => {
    const n = parseInt(t.target.value, 10);
    S({ ...r, pageSize: n });
  }, ee = (t) => {
    E(t);
  }, te = () => {
    console.info("Export Clicked");
  }, ne = 200, ae = !!o;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ i("div", { children: [
    O,
    /* @__PURE__ */ i("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-filter", children: !!N && /* @__PURE__ */ e(
        re,
        {
          sx: { width: ne },
          type: "text",
          value: c.quickSearch,
          onChange: W,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ e(le, { position: "end", children: /* @__PURE__ */ e(pe, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ e(se, { onClickAway: () => {
        w(!1);
      }, children: /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: $, children: [
        /* @__PURE__ */ e(p, { title: "Density", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, children: V() }) }),
        v && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ i("ul", { children: [
          /* @__PURE__ */ i("li", { onClick: () => u("standard"), children: [
            /* @__PURE__ */ e(P, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ i("li", { onClick: () => u("compact"), children: [
            /* @__PURE__ */ e(F, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ i("li", { onClick: () => u("comfortable"), children: [
            /* @__PURE__ */ e(z, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ i("div", { className: "grid-header-button", children: [
        /* @__PURE__ */ e(p, { title: "Filter", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, onClick: () => k(!0), children: /* @__PURE__ */ e(ge, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ e(
          ye,
          {
            columns: f,
            setFilter: Y,
            defaultFilter: c,
            isOpen: I,
            onClose: () => k(!1)
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: te, children: /* @__PURE__ */ e(p, { title: "Export", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(ue, { className: "grid-button-icon" }) }) }) }),
      l.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: () => {
        l.onNewClick();
      }, children: /* @__PURE__ */ e(p, { title: "New", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(fe, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ e(ie, {})
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      he,
      {
        columnDefs: M,
        EmptyChild: T,
        rowData: B,
        onRowClick: Z,
        onRowStyle: J,
        onHeaderStyle: K,
        onSortColumn: ee
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-header", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: ae && /* @__PURE__ */ e(
      ce,
      {
        component: "div",
        count: A || 0,
        page: r.pageNo,
        onPageChange: H,
        rowsPerPage: r.pageSize,
        rowsPerPageOptions: j || [],
        onRowsPerPageChange: _
      }
    ) }) })
  ] }) });
}
export {
  Fe as default
};
