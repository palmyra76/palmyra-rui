import { jsx as t, jsxs as m } from "react/jsx-runtime";
import g, { useState as c, useEffect as re } from "react";
import { TextField as ae, InputAdornment as oe, ClickAwayListener as le, Tooltip as D, Button as E, TablePagination as ie } from "@mui/material";
import { generateColumns as se } from "./base/ColumnConverter.js";
import ce from "./base/EmptyChildTable.js";
import de from "./base/TableX.js";
import { Menu as R, DensitySmall as ue, DensityLarge as me, FileDownloadOutlined as ge } from "@mui/icons-material";
var j = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, T = g.createContext && g.createContext(j), d = globalThis && globalThis.__assign || function() {
  return d = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, d.apply(this, arguments);
}, pe = globalThis && globalThis.__rest || function(e, r) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, a = Object.getOwnPropertySymbols(e); o < a.length; o++)
      r.indexOf(a[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[o]) && (n[a[o]] = e[a[o]]);
  return n;
};
function _(e) {
  return e && e.map(function(r, n) {
    return g.createElement(r.tag, d({
      key: n
    }, r.attr), _(r.child));
  });
}
function he(e) {
  return function(r) {
    return g.createElement(fe, d({
      attr: d({}, e.attr)
    }, r), _(e.child));
  };
}
function fe(e) {
  var r = function(n) {
    var a = e.attr, o = e.size, h = e.title, f = pe(e, ["attr", "size", "title"]), y = o || n.size || "1em", s;
    return n.className && (s = n.className), e.className && (s = (s ? s + " " : "") + e.className), g.createElement("svg", d({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, a, f, {
      className: s,
      style: d(d({
        color: e.color || n.color
      }, n.style), e.style),
      height: y,
      width: y,
      xmlns: "http://www.w3.org/2000/svg"
    }), h && g.createElement("title", null, h), e.children);
  };
  return T !== void 0 ? g.createElement(T.Consumer, null, function(n) {
    return r(n);
  }) : r(j);
}
function ye(e) {
  return he({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
}
function ze(e) {
  const { columns: r, children: n, EmptyChild: a, store: o, onRowClick: h, quickSearch: f } = e, [y, s] = c(null), [v, A] = c({}), [N, I] = c({}), F = a || ce, [S, z] = c(!1), [C, q] = c("standard"), u = e.pageSize ? e.pageSize : 15;
  var B = u instanceof Array ? u : [u], G = u instanceof Array ? u[0] : u;
  const [p, O] = c({
    pageNo: 0,
    pageSize: G
  }), L = (i, l) => {
    O({ ...p, pageNo: l }), H({ ...p, pageSize: l });
  }, [M, H] = c({}), [w, P] = c(null);
  re(() => {
    Q();
  }, [M, v, N]);
  const X = se(r), Q = () => {
    const i = { page: p, filter: v, sortOrder: N };
    if (o)
      try {
        o.query(i).then((l) => {
          P(l.result), s(l.total);
        }).catch((l) => {
          console.log("error while fetching");
          var k = l.response ? l.response : l;
          console.log(k), b();
        });
      } catch (l) {
        console.log(l), b();
      }
    else
      console.error("Store is not provided for the Grid"), b();
  }, b = () => {
    P([]), s(0);
  }, x = (i) => {
    q(i);
  }, W = () => {
    z(!S);
  }, $ = () => C === "compact" ? { padding: "7px" } : C === "comfortable" ? { padding: "30px", fontSize: "18px" } : { padding: "15px" }, J = () => C === "compact" ? { padding: "7px" } : C === "comfortable" ? { padding: "30px", fontSize: "18px" } : { padding: "15px" }, K = (i) => {
    const l = i.target.value;
    A({ [f]: l });
  }, U = (i) => {
    h && h(i);
  }, V = (i) => {
    const l = parseInt(i.target.value, 10);
    O({ ...p, pageSize: l });
  }, Y = (i) => {
    I(i);
  }, Z = () => {
    console.log("Export Clicked");
  }, ee = 200, te = !!u, ne = !!f;
  return /* @__PURE__ */ t("div", { children: w != null ? w.length == 0 ? /* @__PURE__ */ t(F, {}) : /* @__PURE__ */ m("div", { children: [
    n,
    /* @__PURE__ */ m("div", { className: "grid-header", children: [
      /* @__PURE__ */ t("div", { className: "grid-header-filter", children: ne && /* @__PURE__ */ t(
        ae,
        {
          sx: { width: ee },
          type: "text",
          value: v.quickSearch,
          onChange: K,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ t(oe, { position: "end", children: /* @__PURE__ */ t(ye, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ t(le, { onClickAway: () => {
        z(!1);
      }, children: /* @__PURE__ */ m("div", { className: "grid-header-button", onClick: W, children: [
        /* @__PURE__ */ t(D, { title: "Density", placement: "top", children: /* @__PURE__ */ t(E, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ t(R, { className: "grid-button-icon" }) }) }),
        S && /* @__PURE__ */ t("div", { className: "density-dropdown-content", children: /* @__PURE__ */ m("ul", { children: [
          /* @__PURE__ */ m("li", { onClick: () => x("standard"), children: [
            /* @__PURE__ */ t(R, { className: "density-icon" }),
            /* @__PURE__ */ t("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ m("li", { onClick: () => x("compact"), children: [
            /* @__PURE__ */ t(ue, { className: "density-icon" }),
            /* @__PURE__ */ t("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ m("li", { onClick: () => x("comfortable"), children: [
            /* @__PURE__ */ t(me, { className: "density-icon" }),
            /* @__PURE__ */ t("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "grid-header-button", onClick: Z, children: /* @__PURE__ */ t(D, { title: "Export", placement: "top", children: /* @__PURE__ */ t(E, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ t(ge, { className: "grid-button-icon" }) }) }) }),
      /* @__PURE__ */ t("div", { className: "grid-filter", children: te && /* @__PURE__ */ t(
        ie,
        {
          component: "div",
          count: y,
          page: p.pageNo,
          onPageChange: L,
          rowsPerPage: p.pageSize,
          rowsPerPageOptions: B || [],
          onRowsPerPageChange: V
        }
      ) })
    ] }),
    /* @__PURE__ */ t(
      de,
      {
        columnDefs: X,
        rowData: w,
        onRowClick: U,
        onRowStyle: $,
        onHeaderStyle: J,
        onSortColumn: Y
      }
    )
  ] }) : /* @__PURE__ */ t("div", {}) });
}
export {
  ze as default
};
