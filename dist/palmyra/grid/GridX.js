import { jsx as e, jsxs as o, Fragment as le } from "react/jsx-runtime";
import { forwardRef as se, useState as i, useRef as ce, useImperativeHandle as de, useEffect as pe } from "react";
import { TextField as me, InputAdornment as he, ClickAwayListener as ge, Tooltip as p, Button as m, TablePagination as ue } from "@mui/material";
import { generateColumns as fe } from "./base/ColumnConverter.js";
import { A as ye } from "../../index.esm-3271ad1f.js";
import Ce from "./base/EmptyChildTable.js";
import Ne from "./base/TableX.js";
import { Menu as P, DensitySmall as F, DensityLarge as R, FilterAlt as be, FileDownloadOutlined as ve, Add as we } from "@mui/icons-material";
import { NoopCustomizer as ke } from "./Types.js";
import Se from "./plugins/filter/Filter.js";
const je = se(function(r, f) {
  const { columns: y, children: O, EmptyChild: A, store: C, onRowClick: N, quickSearch: b } = r, [E, h] = i(null), [c, d] = i({}), [v, I] = i({}), T = A || Ce, q = r.customizer || ke, [w, k] = i(!1), [s, j] = i("standard"), [G, S] = i(!1), a = r.pageSize ? r.pageSize : 15;
  var H = a instanceof Array ? a : [a], X = a instanceof Array ? a[0] : a;
  const [l, x] = i({
    pageNo: 0,
    pageSize: X
  }), L = f || ce(null);
  de(L, () => ({
    setFilter: (t) => {
    }
  }), []);
  const B = (t, n) => {
    x({ ...l, pageNo: n }), Q({ ...l, pageSize: n });
  }, [M, Q] = i({}), [U, g] = i(null);
  pe(() => {
    J();
  }, [M, c, v]);
  const $ = fe(y, q), J = () => {
    const t = { page: l, filter: c, sortOrder: v, total: !0 };
    if (C)
      try {
        C.query(t).then((n) => {
          g(n.result), h(n.total);
        }).catch((n) => {
          var z = n.response ? n.response : n;
          console.error("error while fetching", z), K();
        });
      } catch (n) {
        console.error(n), D();
      }
    else
      console.error("Store is not provided for the Grid"), D();
  }, D = () => {
    g([]), h(0);
  }, K = () => {
    g(void 0), h(0);
  }, u = (t) => {
    j(t);
  }, V = () => {
    k(!w);
  }, W = () => s === "compact" ? { padding: "3px" } : s === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, Y = () => s === "compact" ? { padding: "3px" } : s === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, Z = () => {
    var t;
    switch (s) {
      case "compact":
        t = /* @__PURE__ */ e(F, { className: "density-icon" });
        break;
      case "comfortable":
        t = /* @__PURE__ */ e(R, { className: "density-icon" });
        break;
      default:
        t = /* @__PURE__ */ e(P, { className: "grid-button-icon" });
        break;
    }
    return t;
  }, _ = (t) => {
    const n = t.target.value;
    d(n ? { [b]: n } : {});
  }, ee = (t) => {
    t && Object.keys(t).length > 0 ? d(t) : d({});
  }, te = (t) => {
    N && N(t);
  }, ne = (t) => {
    const n = parseInt(t.target.value, 10);
    x({ ...l, pageSize: n });
  }, ie = (t) => {
    I(t);
  }, oe = () => {
    console.info("Export Clicked");
  }, ae = 200, re = !!a;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ o("div", { children: [
    O,
    /* @__PURE__ */ o("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-filter", children: !!b && /* @__PURE__ */ e(
        me,
        {
          sx: { width: ae },
          type: "text",
          value: c.quickSearch,
          onChange: _,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ e(he, { position: "end", children: /* @__PURE__ */ e(ye, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ e(ge, { onClickAway: () => {
        k(!1);
      }, children: /* @__PURE__ */ o("div", { className: "grid-header-button", onClick: V, children: [
        /* @__PURE__ */ e(p, { title: "Density", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, children: Z() }) }),
        w && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ o("ul", { children: [
          /* @__PURE__ */ o("li", { onClick: () => u("standard"), children: [
            /* @__PURE__ */ e(P, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ o("li", { onClick: () => u("compact"), children: [
            /* @__PURE__ */ e(F, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ o("li", { onClick: () => u("comfortable"), children: [
            /* @__PURE__ */ e(R, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ o("div", { className: "grid-header-button", children: [
        /* @__PURE__ */ e(p, { title: "Filter", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, onClick: () => S(!0), children: /* @__PURE__ */ e(be, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ e(
          Se,
          {
            columns: y,
            setFilter: ee,
            defaultFilter: c,
            isOpen: G,
            onClose: () => S(!1)
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: oe, children: /* @__PURE__ */ e(p, { title: "Export", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(ve, { className: "grid-button-icon" }) }) }) }),
      r.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: () => {
        r.onNewClick();
      }, children: /* @__PURE__ */ e(p, { title: "New", placement: "top", children: /* @__PURE__ */ e(m, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(we, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ e(le, {})
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      Ne,
      {
        columnDefs: $,
        EmptyChild: T,
        rowData: U,
        onRowClick: te,
        onRowStyle: W,
        onHeaderStyle: Y,
        onSortColumn: ie
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-header", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: re && /* @__PURE__ */ e(
      ue,
      {
        component: "div",
        count: E || 0,
        page: l.pageNo,
        onPageChange: B,
        rowsPerPage: l.pageSize,
        rowsPerPageOptions: H || [],
        onRowsPerPageChange: ne
      }
    ) }) })
  ] }) });
});
export {
  je as default
};
