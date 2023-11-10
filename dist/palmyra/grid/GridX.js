import { jsx as e, jsxs as a, Fragment as ae } from "react/jsx-runtime";
import { useState as o, useEffect as ie } from "react";
import { TextField as le, InputAdornment as re, ClickAwayListener as se, Tooltip as p, Button as m, TablePagination as ce } from "@mui/material";
import { generateColumns as de } from "./base/ColumnConverter.js";
import { A as pe } from "../../index.esm-3271ad1f.js";
import me from "./base/EmptyChildTable.js";
import he from "./base/TableX.js";
import { Menu as P, DensitySmall as F, DensityLarge as z, FilterAlt as ge, FileDownloadOutlined as ue, Add as fe } from "@mui/icons-material";
import ye from "./plugins/filter/Filter.js";
function Fe(r) {
  const { columns: f, children: O, EmptyChild: R, store: y, onRowClick: C, quickSearch: N } = r, [A, h] = o(null), [c, d] = o({}), [b, E] = o({}), T = R || me, [v, w] = o(!1), [s, q] = o("standard"), [I, k] = o(!1), i = r.pageSize ? r.pageSize : 15;
  var j = i instanceof Array ? i : [i], G = i instanceof Array ? i[0] : i;
  const [l, S] = o({
    pageNo: 0,
    pageSize: G
  }), H = (t, n) => {
    S({ ...l, pageNo: n }), X({ ...l, pageSize: n });
  }, [L, X] = o({}), [B, g] = o(null);
  ie(() => {
    Q();
  }, [L, c, b]);
  const M = de(f), Q = () => {
    const t = { page: l, filter: c, sortOrder: b, total: !0 };
    if (y)
      try {
        y.query(t).then((n) => {
          g(n.result), h(n.total);
        }).catch((n) => {
          console.log("error while fetching");
          var D = n.response ? n.response : n;
          console.log(D), U();
        });
      } catch (n) {
        console.log(n), x();
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
    S({ ...l, pageSize: n });
  }, ee = (t) => {
    E(t);
  }, te = () => {
    console.log("Export Clicked");
  }, ne = 200, oe = !!i;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("div", { children: [
    O,
    /* @__PURE__ */ a("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-filter", children: !!N && /* @__PURE__ */ e(
        le,
        {
          sx: { width: ne },
          type: "text",
          value: c.quickSearch,
          onChange: W,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ e(re, { position: "end", children: /* @__PURE__ */ e(pe, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ e(se, { onClickAway: () => {
        w(!1);
      }, children: /* @__PURE__ */ a("div", { className: "grid-header-button", onClick: $, children: [
        /* @__PURE__ */ e(p, { title: "Density", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, children: V() }) }),
        v && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ a("ul", { children: [
          /* @__PURE__ */ a("li", { onClick: () => u("standard"), children: [
            /* @__PURE__ */ e(P, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ a("li", { onClick: () => u("compact"), children: [
            /* @__PURE__ */ e(F, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ a("li", { onClick: () => u("comfortable"), children: [
            /* @__PURE__ */ e(z, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ a("div", { className: "grid-header-button", children: [
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
      r.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: () => {
        r.onNewClick();
      }, children: /* @__PURE__ */ e(p, { title: "New", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(fe, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ e(ae, {})
    ] }),
    /* @__PURE__ */ e(
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
    ),
    /* @__PURE__ */ e("div", { className: "grid-header", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: oe && /* @__PURE__ */ e(
      ce,
      {
        component: "div",
        count: A || 0,
        page: l.pageNo,
        onPageChange: H,
        rowsPerPage: l.pageSize,
        rowsPerPageOptions: j || [],
        onRowsPerPageChange: _
      }
    ) }) })
  ] }) });
}
export {
  Fe as default
};
