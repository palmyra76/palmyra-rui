import { jsx as e, jsxs as i, Fragment as oe } from "react/jsx-runtime";
import { useState as o, useEffect as ie } from "react";
import { TextField as ae, InputAdornment as le, ClickAwayListener as re, Tooltip as p, Button as m, TablePagination as se } from "@mui/material";
import { generateColumns as ce } from "./base/ColumnConverter.js";
import { A as de } from "../../index.esm-3271ad1f.js";
import pe from "./base/EmptyChildTable.js";
import me from "./base/TableX.js";
import { Menu as P, DensitySmall as F, DensityLarge as z, FilterAlt as he, FileDownloadOutlined as ge, Add as ue } from "@mui/icons-material";
import fe from "./plugins/filter/Filter.js";
function Pe(r) {
  const { columns: u, children: O, EmptyChild: R, store: f, onRowClick: y, quickSearch: C } = r, [A, N] = o(null), [c, d] = o({}), [b, E] = o({}), T = R || pe, [w, v] = o(!1), [s, q] = o("standard"), [I, k] = o(!1), a = r.pageSize ? r.pageSize : 15;
  var j = a instanceof Array ? a : [a], G = a instanceof Array ? a[0] : a;
  const [l, S] = o({
    pageNo: 0,
    pageSize: G
  }), H = (t, n) => {
    S({ ...l, pageNo: n }), X({ ...l, pageSize: n });
  }, [L, X] = o({}), [B, x] = o(null);
  ie(() => {
    Q();
  }, [L, c, b]);
  const M = ce(u), Q = () => {
    const t = { page: l, filter: c, sortOrder: b };
    if (f)
      try {
        f.query(t).then((n) => {
          x(n.result), N(n.total);
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
    x([]), N(0);
  }, g = (t) => {
    q(t);
  }, U = () => {
    v(!w);
  }, $ = () => s === "compact" ? { padding: "3px" } : s === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, J = () => s === "compact" ? { padding: "3px" } : s === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, K = () => {
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
  }, V = (t) => {
    const n = t.target.value;
    d(n ? { [C]: n } : {});
  }, W = (t) => {
    t && Object.keys(t).length > 0 ? d(t) : d({});
  }, Y = (t) => {
    y && y(t);
  }, Z = (t) => {
    const n = parseInt(t.target.value, 10);
    S({ ...l, pageSize: n });
  }, _ = (t) => {
    E(t);
  }, ee = () => {
    console.log("Export Clicked");
  }, te = 200, ne = !!a;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ i("div", { children: [
    O,
    /* @__PURE__ */ i("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-filter", children: !!C && /* @__PURE__ */ e(
        ae,
        {
          sx: { width: te },
          type: "text",
          value: c.quickSearch,
          onChange: V,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ e(le, { position: "end", children: /* @__PURE__ */ e(de, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ e(re, { onClickAway: () => {
        v(!1);
      }, children: /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: U, children: [
        /* @__PURE__ */ e(p, { title: "Density", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, children: K() }) }),
        w && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ i("ul", { children: [
          /* @__PURE__ */ i("li", { onClick: () => g("standard"), children: [
            /* @__PURE__ */ e(P, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ i("li", { onClick: () => g("compact"), children: [
            /* @__PURE__ */ e(F, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ i("li", { onClick: () => g("comfortable"), children: [
            /* @__PURE__ */ e(z, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ i("div", { className: "grid-header-button", children: [
        /* @__PURE__ */ e(p, { title: "Filter", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, onClick: () => k(!0), children: /* @__PURE__ */ e(he, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ e(
          fe,
          {
            columns: u,
            setFilter: W,
            defaultFilter: c,
            isOpen: I,
            onClose: () => k(!1)
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: ee, children: /* @__PURE__ */ e(p, { title: "Export", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(ge, { className: "grid-button-icon" }) }) }) }),
      r.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: () => r.onNewClick, children: /* @__PURE__ */ e(p, { title: "New", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(ue, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ e(oe, {})
    ] }),
    /* @__PURE__ */ e(
      me,
      {
        columnDefs: M,
        EmptyChild: T,
        rowData: B,
        onRowClick: Y,
        onRowStyle: $,
        onHeaderStyle: J,
        onSortColumn: _
      }
    ),
    /* @__PURE__ */ e("div", { className: "grid-header", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: ne && /* @__PURE__ */ e(
      se,
      {
        component: "div",
        count: A || 0,
        page: l.pageNo,
        onPageChange: H,
        rowsPerPage: l.pageSize,
        rowsPerPageOptions: j || [],
        onRowsPerPageChange: Z
      }
    ) }) })
  ] }) });
}
export {
  Pe as default
};
