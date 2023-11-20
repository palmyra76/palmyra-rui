import { StoreFactoryContext as _, LayoutParamsContext as te, FieldManagerContext as xe } from "./palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as e, jsxs as b, Fragment as re } from "react/jsx-runtime";
import k, { useState as w, useEffect as I, forwardRef as R, useRef as Q, useImperativeHandle as q, useContext as X } from "react";
import { TextField as ne, InputAdornment as oe, ClickAwayListener as Se, Tooltip as G, Button as A, TablePagination as ie, Box as Ne } from "@mui/material";
import Fe from "./palmyra/layout/card/CardLayout.js";
import ke from "./palmyra/layout/flexiLayout/SectionRendererChart.js";
import Re from "./palmyra/layout/flexiLayout/SectionRendererEditForm.js";
import { generateColumns as Oe } from "./palmyra/grid/base/ColumnConverter.js";
import ze from "./palmyra/grid/base/EmptyChildTable.js";
import Le from "./palmyra/grid/base/TableX.js";
import { Menu as W, DensitySmall as $, DensityLarge as J, FilterAlt as De, FileDownloadOutlined as Ee, Add as Te } from "@mui/icons-material";
import { NoopCustomizer as qe } from "./palmyra/grid/Types.js";
import Ge from "./palmyra/grid/plugins/filter/Filter.js";
import "axios";
import Ae from "./palmyra/layout/container/SectionContainer.js";
import "react-router-dom";
/* empty css                   */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css                       */import { topic as U } from "./palmyra/utils/pubsub/topic.js";
import "dayjs";
import "./palmyra/mui/form/MuiDatePicker.js";
import "./palmyra/mui/form/MuiDateTimePicker.js";
import "./palmyra/mui/form/MuiRadioGroup.js";
import "./palmyra/mui/form/MuiSelect.js";
import "./palmyra/mui/form/MuiTextArea.js";
import "./palmyra/mui/form/MuiTextField.js";
import "./palmyra/mui/form/MuiCheckBox.js";
import "./palmyra/mui/form/MuiSwitch.js";
import "./palmyra/mui/form/MuiPassword.js";
import "./palmyra/mui/form/MuiServerLookup.js";
import "./palmyra/form/PalmyraForm.js";
import { mergeDeep as Ie } from "./palmyra/utils/index.js";
import { getActionPublishers as Qe } from "./palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as ae } from "./palmyra/layout/ErrorBoundary.js";
import je from "./palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import Me from "./palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { d as Ve } from "./PalmyraFormManager-9cbba3fa.js";
import { useKeyValue as _e } from "./palmyra/utils/pubsub/PubSubHelper.js";
var ce = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Y = k.createContext && k.createContext(ce), x = globalThis && globalThis.__assign || function() {
  return x = Object.assign || function(r) {
    for (var t, o = 1, n = arguments.length; o < n; o++) {
      t = arguments[o];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, x.apply(this, arguments);
}, Be = globalThis && globalThis.__rest || function(r, t) {
  var o = {};
  for (var n in r)
    Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (o[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (o[n[i]] = r[n[i]]);
  return o;
};
function le(r) {
  return r && r.map(function(t, o) {
    return k.createElement(t.tag, x({
      key: o
    }, t.attr), le(t.child));
  });
}
function Ke(r) {
  return function(t) {
    return k.createElement(He, x({
      attr: x({}, r.attr)
    }, t), le(r.child));
  };
}
function He(r) {
  var t = function(o) {
    var n = r.attr, i = r.size, c = r.title, l = Be(r, ["attr", "size", "title"]), s = i || o.size || "1em", a;
    return o.className && (a = o.className), r.className && (a = (a ? a + " " : "") + r.className), k.createElement("svg", x({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, o.attr, n, l, {
      className: a,
      style: x(x({
        color: r.color || o.color
      }, o.style), r.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), c && k.createElement("title", null, c), r.children);
  };
  return Y !== void 0 ? k.createElement(Y.Consumer, null, function(o) {
    return t(o);
  }) : t(ce);
}
function se(r) {
  return Ke({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(r);
}
const de = (r) => {
  const { store: t, quickSearch: o, endPointVars: n } = r, i = r.fetchAll != !1, [c, l] = w(null), [s, a] = r.filterTopic ? _e(r.filterTopic, {}) : w({}), [u, h] = w({}), d = r.pageSize ? r.pageSize : 15;
  var g = d instanceof Array ? d : [d], P = d instanceof Array ? d[0] : d;
  const [f, S] = w({ limit: P, offset: 0 }), [z, N] = w(null), O = () => Math.round(f.offset / f.limit), L = () => f.limit, D = (m) => {
    S({ ...f, offset: m * P });
  }, E = (m) => {
    const v = m > 10 ? m : 15;
    S({ ...f, limit: v });
  }, T = () => s ? Object.keys(s).length == 0 : !1;
  I(() => {
    (i || !T()) && y();
  }, [f, s, u]);
  const y = () => {
    const m = { filter: s, sortOrder: u, total: !0, endPointVars: n, ...f };
    if (t)
      try {
        t.query(m).then((v) => {
          N(v.result), l(v.total);
        }).catch((v) => {
          var M = v.response ? v.response : v;
          console.error("error while fetching", M), j();
        });
      } catch (v) {
        console.error(v), C();
      }
    else
      console.error("Store is not provided for the Grid"), C();
  }, C = () => {
    N([]), l(0);
  }, j = () => {
    N(void 0), l(null);
  };
  return {
    setQueryFilter: (m) => {
      m && Object.keys(m).length > 0 ? a(m) : a({});
    },
    setQuickSearch: (m) => {
      a(m ? { [o]: m } : {});
    },
    setSortColumns: (m) => {
      h(m);
    },
    refreshData: y,
    gotoPage: D,
    setPageSize: E,
    getPageNo: O,
    getLimit: L,
    filter: s,
    queryLimit: f,
    data: z,
    totalRecords: c,
    pageSizeOptions: g
  };
}, Xe = R(function(t, o) {
  const { columns: n, children: i, EmptyChild: c, onRowClick: l, quickSearch: s } = t, a = c || ze, u = t.customizer || qe, [h, d] = w(!1), [g, P] = w("standard"), [f, S] = w(!1), [z, N] = w(""), {
    setQueryFilter: O,
    setQuickSearch: L,
    setSortColumns: D,
    gotoPage: E,
    setPageSize: T,
    getPageNo: y,
    data: C,
    totalRecords: j,
    pageSizeOptions: B,
    filter: K,
    queryLimit: H
  } = de(t), m = o || Q(null);
  q(m, () => ({
    setFilter: (p) => {
    }
  }), []);
  const v = (p, F) => {
    E(F);
  }, M = Oe(n, u), V = (p) => {
    P(p);
  }, he = () => {
    d(!h);
  }, ge = () => g === "compact" ? { padding: "3px" } : g === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, fe = () => g === "compact" ? { padding: "3px" } : g === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, ye = () => {
    var p;
    switch (g) {
      case "compact":
        p = /* @__PURE__ */ e($, { className: "density-icon" });
        break;
      case "comfortable":
        p = /* @__PURE__ */ e(J, { className: "density-icon" });
        break;
      default:
        p = /* @__PURE__ */ e(W, { className: "grid-button-icon" });
        break;
    }
    return p;
  }, pe = (p) => {
    const F = p.target.value;
    N(F), F ? L(F) : O({});
  }, ve = (p) => {
    l && l(p);
  }, Ce = (p) => {
    const F = parseInt(p.target.value, 10);
    T(F);
  }, be = () => {
    console.info("Export Clicked");
  }, we = 200, Pe = !!t.pageSize;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ b("div", { children: [
    i,
    /* @__PURE__ */ b("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-filter", children: !!s && /* @__PURE__ */ e(
        ne,
        {
          sx: { width: we },
          type: "text",
          value: z,
          onChange: pe,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ e(oe, { position: "end", children: /* @__PURE__ */ e(se, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ e(Se, { onClickAway: () => {
        d(!1);
      }, children: /* @__PURE__ */ b("div", { className: "grid-header-button", onClick: he, children: [
        /* @__PURE__ */ e(G, { title: "Density", placement: "top", children: /* @__PURE__ */ e(A, { className: "grid-btn", disableRipple: !0, children: ye() }) }),
        h && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ b("ul", { children: [
          /* @__PURE__ */ b("li", { onClick: () => V("standard"), children: [
            /* @__PURE__ */ e(W, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ b("li", { onClick: () => V("compact"), children: [
            /* @__PURE__ */ e($, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ b("li", { onClick: () => V("comfortable"), children: [
            /* @__PURE__ */ e(J, { className: "density-icon" }),
            /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ b("div", { className: "grid-header-button", children: [
        /* @__PURE__ */ e(G, { title: "Filter", placement: "top", children: /* @__PURE__ */ e(A, { className: "grid-btn", disableRipple: !0, onClick: () => S(!0), children: /* @__PURE__ */ e(De, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ e(
          Ge,
          {
            columns: n,
            setFilter: O,
            defaultFilter: K,
            isOpen: f,
            onClose: () => S(!1)
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: be, children: /* @__PURE__ */ e(G, { title: "Export", placement: "top", children: /* @__PURE__ */ e(A, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(Ee, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ e(G, { title: "New", placement: "top", children: /* @__PURE__ */ e(A, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ e(Te, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ e(re, {})
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      Le,
      {
        columnDefs: M,
        EmptyChild: a,
        rowData: C,
        onRowClick: ve,
        onRowStyle: ge,
        onHeaderStyle: fe,
        onSortColumn: D
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-header", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: Pe && /* @__PURE__ */ e(
      ie,
      {
        component: "div",
        count: j || 0,
        page: y(),
        onPageChange: v,
        rowsPerPage: H.limit,
        rowsPerPageOptions: B || [],
        onRowsPerPageChange: Ce
      }
    ) }) })
  ] }) });
}), Mt = R(function(t, o) {
  const { columns: n, endPoint: i, storeFactory: c, layoutParams: l } = t, s = t.quickSearch || "", a = Q(null), u = (d, g) => {
    console.log(g);
  };
  I(() => {
    var d = U.subscribe(t.topic, u);
    return () => {
      U.unsubscribe(d);
    };
  }, [t.topic]), o && q(o, () => ({
    setFilter: (d) => {
      a.current.setFilter(d);
    }
  }), [n, i]);
  const h = {
    fields: n,
    quickSearch: s,
    storeOptions: {
      endPoint: i
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ e(re, { children: /* @__PURE__ */ e(_.Provider, { value: c, children: /* @__PURE__ */ e(ue, { layout: h, context: l, customizer: t.customizer, ref: a }) }) });
}), We = R(function(t, o) {
  const n = t.layout, [i, c] = w(n.fields), l = n.pagination ? n.pagination : [15], s = X(_), a = X(te);
  var u = n.storeOptions || {}, h = {};
  Ie(h, u, a);
  const d = s.getGridStore(h, n.storeOptions.endPoint);
  I(() => {
    u.hasLayout && d.queryLayout({}).then((f) => {
      c(f.columns);
    });
  }, []);
  const { onClick: g, onNewClick: P } = Qe(n.actionOptions, a);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    Xe,
    {
      columns: i,
      store: d,
      pageSize: l,
      onRowClick: g,
      onNewClick: P,
      customizer: t.customizer,
      quickSearch: n.quickSearch,
      ref: o
    }
  ) });
}), ue = We, $e = (r) => {
  const { layout: t, context: o } = r;
  var n = t.Container || Ae;
  return /* @__PURE__ */ e(ae, { fallback: /* @__PURE__ */ e("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ e(n, { ...t, children: ((c) => /* @__PURE__ */ e(
    ue,
    {
      context: o,
      layout: c
    }
  ))(t.tableLayout) }) });
}, Je = (r) => {
  const { layout: t } = r;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ e(Re, { ...r });
    case "view":
      return /* @__PURE__ */ e(Me, { ...r });
    case "grid":
      return /* @__PURE__ */ e($e, { ...r });
    case "chart":
      return /* @__PURE__ */ e(ke, { ...r });
    default:
      return /* @__PURE__ */ e(je, { ...r });
  }
};
function Ue(r, t) {
  var o = r || 1, n = t;
  return {
    w: o,
    h: n
  };
}
const me = (r) => {
  const { layout: t, context: o } = r, n = t.sections;
  function i(c, l, s) {
    const { w: a, h: u } = Ue(c.width, c.height);
    return /* @__PURE__ */ e(Ne, { sx: { width: a, height: u }, children: /* @__PURE__ */ e(
      Je,
      {
        layout: c,
        context: l
      }
    ) }, (c.name || "tab") + s);
  }
  return /* @__PURE__ */ e("div", { style: { display: "flex", flexWrap: "wrap" }, children: n.map((c, l) => i(c, o, l)) });
}, Z = R(function(t, o) {
  const { layout: n } = t;
  q(o, () => ({
    resetFilter() {
    }
  }), []);
  const i = {}, c = n.tabs;
  return /* @__PURE__ */ e("div", { children: c.map((l, s) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    me,
    {
      layout: l,
      context: i
    }
  ) }, l.name + s)) });
}), Ye = (r) => {
  switch (r) {
    case "formEdit":
      return "edit";
    case "formNew":
      return "new";
    case "formView":
      return "view";
    default:
      return "edit";
  }
}, ee = R(function(t, o) {
  var h;
  const n = t.data || {}, { layout: i } = t;
  var { getFieldManager: c, getFormData: l, isFormValid: s } = Ve(n, (h = t.callbacks) == null ? void 0 : h.onFormValidChange, Ye(t.mode));
  q(o, () => ({
    getData() {
      return l();
    },
    isValid() {
      return s();
    }
  }), []);
  const a = { formData: n }, u = i.tabs;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(xe.Provider, { value: c, children: u.map((d, g) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    me,
    {
      layout: d,
      context: a
    }
  ) }, d.name + g)) }) });
}), Ze = (r) => {
  switch (r) {
    case "grid":
      return Z;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), ee;
    case "formEdit":
    case "formNew":
    case "formView":
      return ee;
    default:
      return Z;
  }
}, Vt = R(function(t, o) {
  const [n, i] = w(t.layout), c = t.mode ? t.mode : n.type ? n.type : "grid", l = t.layoutParams || {}, s = Ze(c), a = Q(0);
  return I(() => {
    i(t.layout), a.current < 999999 ? a.current++ : a.current = 0;
  }, [t.layout]), /* @__PURE__ */ e(ae, { fallback: /* @__PURE__ */ e("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ e(_.Provider, { value: t.storeFactory, children: /* @__PURE__ */ e(te.Provider, { value: l, children: /* @__PURE__ */ e(s, { ...t, ref: (u) => {
    o && (o.current = u);
  } }, a.current) }) }) });
}), _t = R(function(t, o) {
  const { children: n, Child: i, childProps: c, pageSize: l } = t, s = o || Q(null), {
    setQueryFilter: a,
    setQuickSearch: u,
    gotoPage: h,
    setPageSize: d,
    getPageNo: g,
    data: P,
    pageSizeOptions: f,
    queryLimit: S
  } = de(t), z = t.listKeyProvider || ((y, C) => C);
  q(s, () => ({
    setFilter(y) {
      a(y);
    },
    gotoPage(y) {
      h(y);
    },
    nextPage() {
    },
    prevPage() {
    }
  }), []);
  const N = (y, C) => {
    h(C);
  }, O = (y) => {
    const C = y.target.value;
    u(C);
  }, L = (y) => {
    const C = parseInt(y.target.value, 10);
    d(C);
  }, D = 200, E = !!l, T = !!t.quickSearch;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ b("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ b("div", { className: "card-container", children: [
      /* @__PURE__ */ b("div", { className: "card-header", children: [
        /* @__PURE__ */ e("div", { className: "card-filter", children: T && /* @__PURE__ */ e(
          ne,
          {
            sx: { width: D },
            type: "text",
            onChange: O,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(oe, { position: "end", children: /* @__PURE__ */ e(se, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e("div", { className: "card-pagination", children: E && /* @__PURE__ */ e(
          ie,
          {
            component: "div",
            count: P,
            page: g(),
            onPageChange: N,
            rowsPerPage: S.limit,
            rowsPerPageOptions: f || [],
            onRowsPerPageChange: L
          }
        ) })
      ] }),
      /* @__PURE__ */ e("div", { className: "card-wrapper", children: /* @__PURE__ */ e(
        Fe,
        {
          Child: i,
          childKeyProvider: z,
          dataList: P,
          childProps: c,
          EmptyChild: t.EmptyChild
        }
      ) })
    ] })
  ] }) });
});
export {
  Vt as F,
  ue as G,
  Mt as P,
  _t as S,
  me as T,
  Xe as a,
  $e as b,
  Je as c,
  Z as d,
  ee as e,
  de as u
};
