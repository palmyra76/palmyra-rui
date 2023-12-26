import "../assets/ServerCardLayout.css";
import er from "../palmyra/mui/form/MuiDatePicker.js";
import tr from "../palmyra/mui/form/MuiDateTimePicker.js";
import rr from "../palmyra/mui/form/MuiRadioGroup.js";
import nr from "../palmyra/mui/form/MuiSelect.js";
import or from "../palmyra/mui/form/MuiTextArea.js";
import ar from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import ir from "../palmyra/mui/form/MuiCheckBox.js";
import sr from "../palmyra/mui/form/MuiSwitch.js";
import lr from "../palmyra/mui/form/MuiPassword.js";
import cr from "../palmyra/mui/form/MuiNumberField.js";
import Ct from "../palmyra/mui/form/FieldDecorator.js";
import { FieldManagerContext as _e, StoreFactoryContext as Ue, LayoutParamsContext as Pt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as i, jsxs as H, Fragment as Me } from "react/jsx-runtime";
import me, { useState as ee, useRef as ce, useEffect as ve, forwardRef as ue, useContext as De, useImperativeHandle as Pe, useMemo as wt } from "react";
import { FormControlLabel as et, Checkbox as tt, FormControl as Ot, FormHelperText as Tt, Autocomplete as ur, TextField as Ge, CircularProgress as dr, Dialog as fr, ClickAwayListener as xt, Button as Se, Paper as mr, InputAdornment as Dt, Tooltip as Oe, TablePagination as Et, Box as pr } from "@mui/material";
import hr from "../palmyra/layout/card/CardLayout.js";
import gr from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Rt, getFieldLabel as _t } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as Ee } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as Re } from "../palmyra/form/FormUtil.js";
import { delay as yr, mergeDeep as vr } from "../palmyra/utils/index.js";
import br from "../palmyra/mui/form/MuiDateRangePicker.js";
import Sr from "../palmyra/mui/form/MuiIntegerField.js";
import Mt from "../palmyra/layout/container/SectionContainer.js";
import Cr from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as Pr } from "../palmyra/grid/base/ColumnConverter.js";
import wr from "../palmyra/grid/base/EmptyChildTable.js";
import Or from "../palmyra/grid/base/TableX.js";
import { Close as Tr, Menu as rt, DensitySmall as nt, DensityLarge as ot, FilterAlt as xr, FileDownloadOutlined as Dr, Add as Er } from "@mui/icons-material";
import { NoopCustomizer as Rr } from "../palmyra/grid/Types.js";
import { convertToField as _r } from "../palmyra/grid/base/GridFieldConverter.js";
import { a as Mr, g as Nr } from "./_commonjsHelpers.js";
import Nt from "react-dom";
import { createFilterData as Fr } from "../palmyra/form/PalmyraFilterManager.js";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import { topic as at } from "../palmyra/utils/pubsub/topic.js";
import "react-chartjs-2";
import "../palmyra/chart/chartjs/LineChart.js";
import "../palmyra/chart/chartjs/BarChart.js";
import "../palmyra/chart/chartjs/PieChart.js";
import "../palmyra/chart/chartjs/DoughnutChart.js";
import "../palmyra/chart/chartjs/PolarAreaChart.js";
import "../palmyra/chart/chartjs/RadarChart.js";
import "../palmyra/chart/chartjs/ScatterChart.js";
import "../palmyra/chart/chartjs/BubbleChart.js";
import "dayjs";
import "../palmyra/form/PalmyraForm.js";
import { getActionPublishers as Ar } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as Ft } from "../palmyra/layout/ErrorBoundary.js";
import kr from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import Lr from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as Ir } from "./PalmyraFieldManager.js";
import { useKeyValue as $r } from "../palmyra/utils/pubsub/PubSubHelper.js";
const Ne = (e) => {
  var J, oe;
  const { store: t, quickSearch: r } = e, n = e.fetchAll != !1, [o, a] = ee(e.endPointOptions), [f, c] = ee(null), m = ((J = e.defaultParams) == null ? void 0 : J.filter) || {}, g = ((oe = e.defaultParams) == null ? void 0 : oe.sort) || {}, [h, y] = e.filterTopic ? $r(e.filterTopic, m) : ee(m), [O, E] = ee({}), k = ce(e.initialFetch == !1), N = e.pageSize ? e.pageSize : 15;
  var I = N instanceof Array ? N : [N], $ = N instanceof Array ? N[0] : N;
  const [b, v] = ee({ limit: $, offset: 0, total: !0 }), [S, s] = ee(null), _ = () => Math.round(b.offset / b.limit), R = () => b, q = (l) => {
    v((p) => ({ limit: p.limit, total: p.total, offset: l * $ }));
  }, W = (l) => {
    const p = l > 10 || l == -1 ? l : 15;
    v((w) => ({ limit: p, total: w.total, offset: w.offset }));
  }, U = () => h ? Object.keys(h).length == 0 : !1, z = (l) => {
    s((p) => (setTimeout(() => {
      e.onDataChange && e.onDataChange(S, p);
    }, 300), l));
  };
  ve(() => {
    if (k.current) {
      k.current = !1;
      return;
    }
    (n || !U()) && K();
  }, [b, h, O]);
  const K = () => {
    const p = {
      sortOrder: O && Object.keys(O).length > 0 ? O : g,
      total: !0,
      endPointVars: o,
      ...b,
      filter: { ...h, ...m }
    };
    if (t)
      try {
        t.query(p).then((w) => {
          z(w.result), c(w.total);
        }).catch((w) => {
          var M = w.response ? w.response : w;
          console.error("error while fetching", M), D();
        });
      } catch (w) {
        console.error(w), C();
      }
    else
      console.error("Store is not provided for the Grid"), C();
  }, C = () => {
    z([]), c(0);
  }, D = () => {
    z(void 0), c(null);
  };
  return {
    setQueryFilter: (l) => {
      typeof l == "function" || l && Object.keys(l).length > 0 ? y(l) : y({});
    },
    setQuickSearch: (l) => {
      const p = r;
      y(l ? (w) => (w[p] = l, { ...w }) : (w) => (delete w[p], { ...w }));
    },
    setSortColumns: (l) => {
      E(l);
    },
    setEndPointOptions: a,
    refreshData: K,
    gotoPage: q,
    setPageSize: W,
    getPageNo: _,
    getQueryLimit: R,
    setQueryLimit: v,
    filter: h,
    queryLimit: b,
    data: S,
    totalRecords: f,
    pageSizeOptions: I
  };
};
function it(e) {
  return e ? Array.isArray(e) ? e : typeof e == "string" ? e.split(",") : (console.log(e), [e]) : [];
}
const aa = ue(function(t, r) {
  const n = De(_e), o = r || ce(null), a = n(t, "checkbox", o), { mutateOptions: f, setMutateOptions: c } = a, [m, g] = ee(!1), h = it(a.data), y = a.error, O = a.eventListeners, k = { store: a.store, pageSize: -1 }, { data: N } = Ne(k), I = N, $ = ce(null), b = t.lookupOptions || {}, v = b.idAttribute || "id", S = b.titleAttribute || "name", s = t.showSelectedOnly && t.readonly, _ = Ee(v) ? (C) => Re(v, C) : (C) => C[v], R = Ee(S) ? (C) => Re(S, C) : (C) => C[S];
  Pe(o, () => ({
    focus() {
      $.current.focus();
    },
    isValid() {
      return !y.status;
    },
    clear() {
      a.setData("", !0);
    },
    getValue() {
      return a.getData();
    },
    setValue(C, D = !1) {
      a.setData(C, D);
    },
    setVisible(C) {
      c((D) => ({ ...D, visible: C }));
    },
    setRequired(C) {
      c((D) => ({ ...D, required: C }));
    },
    setReadOnly(C) {
      c((D) => ({ ...D, readonly: C }));
    },
    setAttribute(C) {
      c((D) => ({ ...D, ...C }));
    },
    setOptions(C) {
    },
    getOptions() {
    }
  }), [a]);
  var q = Rt(t, a.data, t.label);
  t.readonly && (q.inputProps = { readOnly: !0 });
  function W(C, D) {
    const X = it(a.data);
    var V = X.indexOf(C);
    D ? V < 0 && X.push(C) : V >= 0 && X.splice(V, 1), O.onValueChange(X.toString());
  }
  var U = {
    onBlur: O.onBlur,
    onFocus: O.onFocus,
    onChange: (C) => {
      W(C.target.value, C.target.checked);
    }
  };
  const z = (C) => {
    const D = C.toString();
    return h.includes(D);
  }, K = (C) => {
    const D = C.target.checked;
    g(D);
    var X = [];
    D && I.map((V) => {
      X.push(_(V));
    }), O.onValueChange(X.toString());
  };
  return /* @__PURE__ */ i("div", { className: t.className, children: f.visible && /* @__PURE__ */ H(
    Ct,
    {
      label: _t(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ i("div", { children: t.hideSelectAll ? /* @__PURE__ */ i(Me, {}) : /* @__PURE__ */ i(
          et,
          {
            control: /* @__PURE__ */ i(tt, { onChange: K }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ H(
          Ot,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: y.status,
            ...q,
            children: [
              I ? I.filter((C) => s ? z(_(C)) : !0).map((C) => /* @__PURE__ */ i(
                et,
                {
                  value: _(C),
                  control: /* @__PURE__ */ i(
                    tt,
                    {
                      ...U,
                      checked: z(_(C)),
                      disabled: t.readonly
                    }
                  ),
                  label: R(C)
                },
                _(C)
              )) : /* @__PURE__ */ i("div", { children: "No options provided" }),
              /* @__PURE__ */ i(Tt, { className: "form-error-text", children: y.message })
            ]
          }
        )
      ]
    }
  ) });
}), Yr = ue(function(t, r) {
  const n = De(_e), o = r || ce(null), a = ce(null), f = ce(0), [c, m] = ee([]), [g, h] = ee(""), [y, O] = ee(!1), E = n(t, "serverlookup", o), k = t.store || E.store, N = t.lookupOptions || {}, I = N.idAttribute || "id", $ = N.titleAttribute || "name", b = $, v = {
    store: k,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: b,
    initialFetch: !1
  }, S = Ne(v), s = E.eventListeners, _ = E.error, { mutateOptions: R, setMutateOptions: q } = E, W = E.data, U = y && c.length < (W ? 2 : 1), { setQueryFilter: z, setEndPointOptions: K, setQuickSearch: C, totalRecords: D, refreshData: X } = S, V = S.data, G = Ee(I) ? (u) => Re(I, u) : (u) => u == null ? void 0 : u[I], J = Ee($) ? (u) => Re($, u) : (u) => u == null ? void 0 : u[$];
  ve(() => {
    var u = W != "" ? W : void 0;
    u && m([u]);
  }, [E.data]), ve(() => {
    const u = V ? [...V] : [], P = W != "" ? W : void 0, x = G(P), L = J(P);
    u && x && L && !M(u, x) && u.unshift(P), m(u), f.current < D && (f.current = D);
  }, [V, D]), ve(() => {
    yr(oe);
  }, [g, y]);
  function oe() {
    y && (g.length > 0 && g != J(W) ? C("*" + g + "*") : V ? C(null) : X());
  }
  var l = {
    onBlur: s.onBlur,
    onFocus: s.onFocus,
    onChange: (u, P) => {
      p(P);
    },
    onInputChange: (u, P) => (h(P), !0)
  };
  const p = (u) => {
    s.onValueChange(u);
  }, w = (u) => typeof u == "object" ? J(u) + "" : (console.log(u), "");
  function M(u, P) {
    return u.find((x) => {
      if (G(x) == P)
        return x;
    });
  }
  Pe(o, () => ({
    focus() {
      a.current.focus();
    },
    isValid() {
      return !_.status;
    },
    clear() {
      t.multiple ? E.setData([], !0) : E.setData(void 0, !0);
    },
    getValue() {
      return E.getData();
    },
    setValue(u, P = !1) {
      E.setData(u, P);
    },
    setVisible(u) {
      q((P) => ({ ...P, visible: u }));
    },
    setRequired(u) {
      q((P) => ({ ...P, required: u }));
    },
    setReadOnly(u) {
      q((P) => ({ ...P, readonly: u }));
    },
    setAttribute(u) {
      q((P) => ({ ...P, ...u }));
    },
    setFilter(u) {
      z(u);
    },
    resetFilter() {
      z({});
    },
    setEndPointOptions(u) {
      K(u);
    },
    getCurrentData: () => W,
    refresh: () => {
      X();
    },
    addFilter(u, P) {
      z((x) => (x[u] = P, { ...x }));
    },
    setDefaultFilter(u) {
    },
    setSortOptions(u) {
    }
  }), [E]);
  var T = Rt(t, W, t.label);
  R.readonly && (T.inputProps = { readOnly: !0 });
  const F = (u, P) => u instanceof Array ? u.some((x) => G(x) == G(P)) : G(u) == G(P);
  return /* @__PURE__ */ i(
    Ct,
    {
      label: _t(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ H(Ot, { fullWidth: !0, error: _.status, children: [
        /* @__PURE__ */ i(
          ur,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: t.multiple,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            isOptionEqualToValue: F,
            filterOptions: (u) => u,
            renderInput: (u) => /* @__PURE__ */ i(
              Ge,
              {
                ...u,
                inputRef: (P) => {
                  a.current = P;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                InputProps: {
                  ...u.InputProps,
                  endAdornment: /* @__PURE__ */ H(Me, { children: [
                    U ? /* @__PURE__ */ i(dr, { color: "inherit", size: 18 }) : null,
                    u.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: w,
            ...T,
            options: c,
            open: y,
            onClose: () => {
              O(!1);
            },
            onOpen: (u) => {
              O(!0);
            },
            ...l
          }
        ),
        /* @__PURE__ */ i(Tt, { className: "form-error-text", children: _.message })
      ] })
    }
  );
}), jr = (e) => {
  const { fieldDef: t } = e;
  return /* @__PURE__ */ H("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, ae = (e, t) => {
  const r = e.fieldDef;
  return /* @__PURE__ */ i(
    t,
    {
      ...r,
      label: e.title
    },
    r.title + r.attribute
  );
}, qr = () => /* @__PURE__ */ i("div", { children: "To be Implemented" }), At = (e, t, r) => {
  const { type: n } = e, o = { fieldDef: e, title: r };
  switch (n) {
    case "string":
      return ae(o, ar);
    case "radio":
      return ae(o, rr);
    case "select":
      return ae(o, nr);
    case "date":
      return ae(o, er);
    case "datetime":
      return ae(o, tr);
    case "checkbox":
      return ae(o, ir);
    case "serverlookup":
      return ae(o, Yr);
    case "textarea":
      return ae(o, or);
    case "switch":
      return ae(o, sr);
    case "password":
      return ae(o, lr);
    case "float":
    case "number":
    case "numbersOnly":
      return ae(o, cr);
    case "integer":
      return ae(o, Sr);
    case "multiSelect":
      return qr();
    case "dateRange":
      return ae(o, br);
    default:
      return jr(o);
  }
}, Wr = ue(function(t, r) {
  var h;
  const { formLayout: n, context: o } = t, { formData: a } = o, f = n.Container;
  ce({});
  const c = wt(() => (y) => At(y), [a.data]);
  var m = ((h = n.options) == null ? void 0 : h.columns) || 1, g = { columns: m };
  return f ? /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((y, O) => /* @__PURE__ */ i(
    f,
    {
      index: O,
      field: y,
      label: y.title,
      options: g,
      children: c(y)
    },
    y.attribute + y.name + y.type
  )) }) : /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((y, O) => c(y)) });
}), kt = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Renderer || Wr, o = t.Container || Mt;
  const a = (f) => /* @__PURE__ */ i(
    n,
    {
      context: r,
      formLayout: f
    }
  );
  return /* @__PURE__ */ i(
    o,
    {
      hideTitle: t.hideTitle,
      title: t.title,
      name: t.name,
      children: /* @__PURE__ */ i(Cr, { columns: t.columns, children: a(t.formLayout) })
    }
  );
};
var Lt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, st = me.createContext && me.createContext(Lt), ge = globalThis && globalThis.__assign || function() {
  return ge = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ge.apply(this, arguments);
}, zr = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function It(e) {
  return e && e.map(function(t, r) {
    return me.createElement(t.tag, ge({
      key: r
    }, t.attr), It(t.child));
  });
}
function Vr(e) {
  return function(t) {
    return me.createElement(Xr, ge({
      attr: ge({}, e.attr)
    }, t), It(e.child));
  };
}
function Xr(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, a = e.title, f = zr(e, ["attr", "size", "title"]), c = o || r.size || "1em", m;
    return r.className && (m = r.className), e.className && (m = (m ? m + " " : "") + e.className), me.createElement("svg", ge({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, f, {
      className: m,
      style: ge(ge({
        color: e.color || r.color
      }, r.style), e.style),
      height: c,
      width: c,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && me.createElement("title", null, a), e.children);
  };
  return st !== void 0 ? me.createElement(st.Consumer, null, function(r) {
    return t(r);
  }) : t(Lt);
}
function $t(e) {
  return Vr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
}
var Fe = { exports: {} }, Yt = {}, Be = { exports: {} }, Te = { exports: {} }, Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function Br() {
  if (lt)
    return Y;
  lt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, f = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, k = e ? Symbol.for("react.lazy") : 60116, N = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function v(s) {
    if (typeof s == "object" && s !== null) {
      var _ = s.$$typeof;
      switch (_) {
        case t:
          switch (s = s.type, s) {
            case m:
            case g:
            case n:
            case a:
            case o:
            case y:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case c:
                case h:
                case k:
                case E:
                case f:
                  return s;
                default:
                  return _;
              }
          }
        case r:
          return _;
      }
    }
  }
  function S(s) {
    return v(s) === g;
  }
  return Y.AsyncMode = m, Y.ConcurrentMode = g, Y.ContextConsumer = c, Y.ContextProvider = f, Y.Element = t, Y.ForwardRef = h, Y.Fragment = n, Y.Lazy = k, Y.Memo = E, Y.Portal = r, Y.Profiler = a, Y.StrictMode = o, Y.Suspense = y, Y.isAsyncMode = function(s) {
    return S(s) || v(s) === m;
  }, Y.isConcurrentMode = S, Y.isContextConsumer = function(s) {
    return v(s) === c;
  }, Y.isContextProvider = function(s) {
    return v(s) === f;
  }, Y.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === t;
  }, Y.isForwardRef = function(s) {
    return v(s) === h;
  }, Y.isFragment = function(s) {
    return v(s) === n;
  }, Y.isLazy = function(s) {
    return v(s) === k;
  }, Y.isMemo = function(s) {
    return v(s) === E;
  }, Y.isPortal = function(s) {
    return v(s) === r;
  }, Y.isProfiler = function(s) {
    return v(s) === a;
  }, Y.isStrictMode = function(s) {
    return v(s) === o;
  }, Y.isSuspense = function(s) {
    return v(s) === y;
  }, Y.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === g || s === a || s === o || s === y || s === O || typeof s == "object" && s !== null && (s.$$typeof === k || s.$$typeof === E || s.$$typeof === f || s.$$typeof === c || s.$$typeof === h || s.$$typeof === I || s.$$typeof === $ || s.$$typeof === b || s.$$typeof === N);
  }, Y.typeOf = v, Y;
}
var j = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ct;
function Ur() {
  return ct || (ct = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, f = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, k = e ? Symbol.for("react.lazy") : 60116, N = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function v(d) {
      return typeof d == "string" || typeof d == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      d === n || d === g || d === a || d === o || d === y || d === O || typeof d == "object" && d !== null && (d.$$typeof === k || d.$$typeof === E || d.$$typeof === f || d.$$typeof === c || d.$$typeof === h || d.$$typeof === I || d.$$typeof === $ || d.$$typeof === b || d.$$typeof === N);
    }
    function S(d) {
      if (typeof d == "object" && d !== null) {
        var Q = d.$$typeof;
        switch (Q) {
          case t:
            var ye = d.type;
            switch (ye) {
              case m:
              case g:
              case n:
              case a:
              case o:
              case y:
                return ye;
              default:
                var Ze = ye && ye.$$typeof;
                switch (Ze) {
                  case c:
                  case h:
                  case k:
                  case E:
                  case f:
                    return Ze;
                  default:
                    return Q;
                }
            }
          case r:
            return Q;
        }
      }
    }
    var s = m, _ = g, R = c, q = f, W = t, U = h, z = n, K = k, C = E, D = r, X = a, V = o, G = y, J = !1;
    function oe(d) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), l(d) || S(d) === m;
    }
    function l(d) {
      return S(d) === g;
    }
    function p(d) {
      return S(d) === c;
    }
    function w(d) {
      return S(d) === f;
    }
    function M(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function T(d) {
      return S(d) === h;
    }
    function F(d) {
      return S(d) === n;
    }
    function u(d) {
      return S(d) === k;
    }
    function P(d) {
      return S(d) === E;
    }
    function x(d) {
      return S(d) === r;
    }
    function L(d) {
      return S(d) === a;
    }
    function A(d) {
      return S(d) === o;
    }
    function te(d) {
      return S(d) === y;
    }
    j.AsyncMode = s, j.ConcurrentMode = _, j.ContextConsumer = R, j.ContextProvider = q, j.Element = W, j.ForwardRef = U, j.Fragment = z, j.Lazy = K, j.Memo = C, j.Portal = D, j.Profiler = X, j.StrictMode = V, j.Suspense = G, j.isAsyncMode = oe, j.isConcurrentMode = l, j.isContextConsumer = p, j.isContextProvider = w, j.isElement = M, j.isForwardRef = T, j.isFragment = F, j.isLazy = u, j.isMemo = P, j.isPortal = x, j.isProfiler = L, j.isStrictMode = A, j.isSuspense = te, j.isValidElementType = v, j.typeOf = S;
  }()), j;
}
var ut;
function jt() {
  return ut || (ut = 1, process.env.NODE_ENV === "production" ? Te.exports = Br() : Te.exports = Ur()), Te.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ie, dt;
function Gr() {
  if (dt)
    return Ie;
  dt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var f = {}, c = 0; c < 10; c++)
        f["_" + String.fromCharCode(c)] = c;
      var m = Object.getOwnPropertyNames(f).map(function(h) {
        return f[h];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        g[h] = h;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ie = o() ? Object.assign : function(a, f) {
    for (var c, m = n(a), g, h = 1; h < arguments.length; h++) {
      c = Object(arguments[h]);
      for (var y in c)
        t.call(c, y) && (m[y] = c[y]);
      if (e) {
        g = e(c);
        for (var O = 0; O < g.length; O++)
          r.call(c, g[O]) && (m[g[O]] = c[g[O]]);
      }
    }
    return m;
  }, Ie;
}
var $e, ft;
function Qe() {
  if (ft)
    return $e;
  ft = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return $e = e, $e;
}
var Ye, mt;
function qt() {
  return mt || (mt = 1, Ye = Function.call.bind(Object.prototype.hasOwnProperty)), Ye;
}
var je, pt;
function Qr() {
  if (pt)
    return je;
  pt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Qe(), r = {}, n = qt();
    e = function(a) {
      var f = "Warning: " + a;
      typeof console < "u" && console.error(f);
      try {
        throw new Error(f);
      } catch {
      }
    };
  }
  function o(a, f, c, m, g) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in a)
        if (n(a, h)) {
          var y;
          try {
            if (typeof a[h] != "function") {
              var O = Error(
                (m || "React class") + ": " + c + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw O.name = "Invariant Violation", O;
            }
            y = a[h](f, h, m, c, null, t);
          } catch (k) {
            y = k;
          }
          if (y && !(y instanceof Error) && e(
            (m || "React class") + ": type specification of " + c + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in r)) {
            r[y.message] = !0;
            var E = g ? g() : "";
            e(
              "Failed " + c + " type: " + y.message + (E ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, je = o, je;
}
var qe, ht;
function Hr() {
  if (ht)
    return qe;
  ht = 1;
  var e = jt(), t = Gr(), r = Qe(), n = qt(), o = Qr(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var m = "Warning: " + c;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function f() {
    return null;
  }
  return qe = function(c, m) {
    var g = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function y(l) {
      var p = l && (g && l[g] || l[h]);
      if (typeof p == "function")
        return p;
    }
    var O = "<<anonymous>>", E = {
      array: $("array"),
      bigint: $("bigint"),
      bool: $("boolean"),
      func: $("function"),
      number: $("number"),
      object: $("object"),
      string: $("string"),
      symbol: $("symbol"),
      any: b(),
      arrayOf: v,
      element: S(),
      elementType: s(),
      instanceOf: _,
      node: U(),
      objectOf: q,
      oneOf: R,
      oneOfType: W,
      shape: K,
      exact: C
    };
    function k(l, p) {
      return l === p ? l !== 0 || 1 / l === 1 / p : l !== l && p !== p;
    }
    function N(l, p) {
      this.message = l, this.data = p && typeof p == "object" ? p : {}, this.stack = "";
    }
    N.prototype = Error.prototype;
    function I(l) {
      if (process.env.NODE_ENV !== "production")
        var p = {}, w = 0;
      function M(F, u, P, x, L, A, te) {
        if (x = x || O, A = A || P, te !== r) {
          if (m) {
            var d = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw d.name = "Invariant Violation", d;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = x + ":" + P;
            !p[Q] && // Avoid spamming the console because they are often not actionable except for lib authors
            w < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + A + "` prop on `" + x + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), p[Q] = !0, w++);
          }
        }
        return u[P] == null ? F ? u[P] === null ? new N("The " + L + " `" + A + "` is marked as required " + ("in `" + x + "`, but its value is `null`.")) : new N("The " + L + " `" + A + "` is marked as required in " + ("`" + x + "`, but its value is `undefined`.")) : null : l(u, P, x, L, A);
      }
      var T = M.bind(null, !1);
      return T.isRequired = M.bind(null, !0), T;
    }
    function $(l) {
      function p(w, M, T, F, u, P) {
        var x = w[M], L = V(x);
        if (L !== l) {
          var A = G(x);
          return new N(
            "Invalid " + F + " `" + u + "` of type " + ("`" + A + "` supplied to `" + T + "`, expected ") + ("`" + l + "`."),
            { expectedType: l }
          );
        }
        return null;
      }
      return I(p);
    }
    function b() {
      return I(f);
    }
    function v(l) {
      function p(w, M, T, F, u) {
        if (typeof l != "function")
          return new N("Property `" + u + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var P = w[M];
        if (!Array.isArray(P)) {
          var x = V(P);
          return new N("Invalid " + F + " `" + u + "` of type " + ("`" + x + "` supplied to `" + T + "`, expected an array."));
        }
        for (var L = 0; L < P.length; L++) {
          var A = l(P, L, T, F, u + "[" + L + "]", r);
          if (A instanceof Error)
            return A;
        }
        return null;
      }
      return I(p);
    }
    function S() {
      function l(p, w, M, T, F) {
        var u = p[w];
        if (!c(u)) {
          var P = V(u);
          return new N("Invalid " + T + " `" + F + "` of type " + ("`" + P + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(l);
    }
    function s() {
      function l(p, w, M, T, F) {
        var u = p[w];
        if (!e.isValidElementType(u)) {
          var P = V(u);
          return new N("Invalid " + T + " `" + F + "` of type " + ("`" + P + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(l);
    }
    function _(l) {
      function p(w, M, T, F, u) {
        if (!(w[M] instanceof l)) {
          var P = l.name || O, x = oe(w[M]);
          return new N("Invalid " + F + " `" + u + "` of type " + ("`" + x + "` supplied to `" + T + "`, expected ") + ("instance of `" + P + "`."));
        }
        return null;
      }
      return I(p);
    }
    function R(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), f;
      function p(w, M, T, F, u) {
        for (var P = w[M], x = 0; x < l.length; x++)
          if (k(P, l[x]))
            return null;
        var L = JSON.stringify(l, function(te, d) {
          var Q = G(d);
          return Q === "symbol" ? String(d) : d;
        });
        return new N("Invalid " + F + " `" + u + "` of value `" + String(P) + "` " + ("supplied to `" + T + "`, expected one of " + L + "."));
      }
      return I(p);
    }
    function q(l) {
      function p(w, M, T, F, u) {
        if (typeof l != "function")
          return new N("Property `" + u + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var P = w[M], x = V(P);
        if (x !== "object")
          return new N("Invalid " + F + " `" + u + "` of type " + ("`" + x + "` supplied to `" + T + "`, expected an object."));
        for (var L in P)
          if (n(P, L)) {
            var A = l(P, L, T, F, u + "." + L, r);
            if (A instanceof Error)
              return A;
          }
        return null;
      }
      return I(p);
    }
    function W(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), f;
      for (var p = 0; p < l.length; p++) {
        var w = l[p];
        if (typeof w != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + J(w) + " at index " + p + "."
          ), f;
      }
      function M(T, F, u, P, x) {
        for (var L = [], A = 0; A < l.length; A++) {
          var te = l[A], d = te(T, F, u, P, x, r);
          if (d == null)
            return null;
          d.data && n(d.data, "expectedType") && L.push(d.data.expectedType);
        }
        var Q = L.length > 0 ? ", expected one of type [" + L.join(", ") + "]" : "";
        return new N("Invalid " + P + " `" + x + "` supplied to " + ("`" + u + "`" + Q + "."));
      }
      return I(M);
    }
    function U() {
      function l(p, w, M, T, F) {
        return D(p[w]) ? null : new N("Invalid " + T + " `" + F + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return I(l);
    }
    function z(l, p, w, M, T) {
      return new N(
        (l || "React class") + ": " + p + " type `" + w + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function K(l) {
      function p(w, M, T, F, u) {
        var P = w[M], x = V(P);
        if (x !== "object")
          return new N("Invalid " + F + " `" + u + "` of type `" + x + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var L in l) {
          var A = l[L];
          if (typeof A != "function")
            return z(T, F, u, L, G(A));
          var te = A(P, L, T, F, u + "." + L, r);
          if (te)
            return te;
        }
        return null;
      }
      return I(p);
    }
    function C(l) {
      function p(w, M, T, F, u) {
        var P = w[M], x = V(P);
        if (x !== "object")
          return new N("Invalid " + F + " `" + u + "` of type `" + x + "` " + ("supplied to `" + T + "`, expected `object`."));
        var L = t({}, w[M], l);
        for (var A in L) {
          var te = l[A];
          if (n(l, A) && typeof te != "function")
            return z(T, F, u, A, G(te));
          if (!te)
            return new N(
              "Invalid " + F + " `" + u + "` key `" + A + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(w[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(l), null, "  ")
            );
          var d = te(P, A, T, F, u + "." + A, r);
          if (d)
            return d;
        }
        return null;
      }
      return I(p);
    }
    function D(l) {
      switch (typeof l) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !l;
        case "object":
          if (Array.isArray(l))
            return l.every(D);
          if (l === null || c(l))
            return !0;
          var p = y(l);
          if (p) {
            var w = p.call(l), M;
            if (p !== l.entries) {
              for (; !(M = w.next()).done; )
                if (!D(M.value))
                  return !1;
            } else
              for (; !(M = w.next()).done; ) {
                var T = M.value;
                if (T && !D(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function X(l, p) {
      return l === "symbol" ? !0 : p ? p["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && p instanceof Symbol : !1;
    }
    function V(l) {
      var p = typeof l;
      return Array.isArray(l) ? "array" : l instanceof RegExp ? "object" : X(p, l) ? "symbol" : p;
    }
    function G(l) {
      if (typeof l > "u" || l === null)
        return "" + l;
      var p = V(l);
      if (p === "object") {
        if (l instanceof Date)
          return "date";
        if (l instanceof RegExp)
          return "regexp";
      }
      return p;
    }
    function J(l) {
      var p = G(l);
      switch (p) {
        case "array":
        case "object":
          return "an " + p;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + p;
        default:
          return p;
      }
    }
    function oe(l) {
      return !l.constructor || !l.constructor.name ? O : l.constructor.name;
    }
    return E.checkPropTypes = o, E.resetWarningCache = o.resetWarningCache, E.PropTypes = E, E;
  }, qe;
}
var We, gt;
function Kr() {
  if (gt)
    return We;
  gt = 1;
  var e = Qe();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, We = function() {
    function n(f, c, m, g, h, y) {
      if (y !== e) {
        var O = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw O.name = "Invariant Violation", O;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, We;
}
if (process.env.NODE_ENV !== "production") {
  var Jr = jt(), Zr = !0;
  Be.exports = Hr()(Jr.isElement, Zr);
} else
  Be.exports = Kr()();
var Wt = Be.exports;
function zt(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = zt(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function yt() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = zt(e)) && (n && (n += " "), n += t);
  return n;
}
const en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: yt,
  default: yt
}, Symbol.toStringTag, { value: "Module" })), tn = /* @__PURE__ */ Mr(en);
var B = {}, de = {};
Object.defineProperty(de, "__esModule", {
  value: !0
});
de.dontSetMe = sn;
de.findInArray = rn;
de.int = an;
de.isFunction = nn;
de.isNum = on;
function rn(e, t) {
  for (let r = 0, n = e.length; r < n; r++)
    if (t.apply(t, [e[r], r, e]))
      return e[r];
}
function nn(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function on(e) {
  return typeof e == "number" && !isNaN(e);
}
function an(e) {
  return parseInt(e, 10);
}
function sn(e, t, r) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var be = {};
Object.defineProperty(be, "__esModule", {
  value: !0
});
be.browserPrefixToKey = Xt;
be.browserPrefixToStyle = ln;
be.default = void 0;
be.getPrefix = Vt;
const ze = ["Moz", "Webkit", "O", "ms"];
function Vt() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const r = (e = window.document) === null || e === void 0 || (e = e.documentElement) === null || e === void 0 ? void 0 : e.style;
  if (!r || t in r)
    return "";
  for (let n = 0; n < ze.length; n++)
    if (Xt(t, ze[n]) in r)
      return ze[n];
  return "";
}
function Xt(e, t) {
  return t ? "".concat(t).concat(cn(e)) : e;
}
function ln(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function cn(e) {
  let t = "", r = !0;
  for (let n = 0; n < e.length; n++)
    r ? (t += e[n].toUpperCase(), r = !1) : e[n] === "-" ? r = !0 : t += e[n];
  return t;
}
be.default = Vt();
Object.defineProperty(B, "__esModule", {
  value: !0
});
B.addClassName = Gt;
B.addEvent = fn;
B.addUserSelectStyles = wn;
B.createCSSTransform = bn;
B.createSVGTransform = Sn;
B.getTouch = Cn;
B.getTouchIdentifier = Pn;
B.getTranslation = He;
B.innerHeight = gn;
B.innerWidth = yn;
B.matchesSelector = Ut;
B.matchesSelectorAndParentsTo = dn;
B.offsetXYFromParent = vn;
B.outerHeight = pn;
B.outerWidth = hn;
B.removeClassName = Qt;
B.removeEvent = mn;
B.removeUserSelectStyles = On;
var se = de, vt = un(be);
function Bt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Bt = function(n) {
    return n ? r : t;
  })(e);
}
function un(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Bt(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var f = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      f && (f.get || f.set) ? Object.defineProperty(n, a, f) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
let xe = "";
function Ut(e, t) {
  return xe || (xe = (0, se.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, se.isFunction)(e[r]);
  })), (0, se.isFunction)(e[xe]) ? e[xe](t) : !1;
}
function dn(e, t, r) {
  let n = e;
  do {
    if (Ut(n, t))
      return !0;
    if (n === r)
      return !1;
    n = n.parentNode;
  } while (n);
  return !1;
}
function fn(e, t, r, n) {
  if (!e)
    return;
  const o = {
    capture: !0,
    ...n
  };
  e.addEventListener ? e.addEventListener(t, r, o) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r;
}
function mn(e, t, r, n) {
  if (!e)
    return;
  const o = {
    capture: !0,
    ...n
  };
  e.removeEventListener ? e.removeEventListener(t, r, o) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
}
function pn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, se.int)(r.borderTopWidth), t += (0, se.int)(r.borderBottomWidth), t;
}
function hn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, se.int)(r.borderLeftWidth), t += (0, se.int)(r.borderRightWidth), t;
}
function gn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, se.int)(r.paddingTop), t -= (0, se.int)(r.paddingBottom), t;
}
function yn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, se.int)(r.paddingLeft), t -= (0, se.int)(r.paddingRight), t;
}
function vn(e, t, r) {
  const o = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), a = (e.clientX + t.scrollLeft - o.left) / r, f = (e.clientY + t.scrollTop - o.top) / r;
  return {
    x: a,
    y: f
  };
}
function bn(e, t) {
  const r = He(e, t, "px");
  return {
    [(0, vt.browserPrefixToKey)("transform", vt.default)]: r
  };
}
function Sn(e, t) {
  return He(e, t, "");
}
function He(e, t, r) {
  let {
    x: n,
    y: o
  } = e, a = "translate(".concat(n).concat(r, ",").concat(o).concat(r, ")");
  if (t) {
    const f = "".concat(typeof t.x == "string" ? t.x : t.x + r), c = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    a = "translate(".concat(f, ", ").concat(c, ")") + a;
  }
  return a;
}
function Cn(e, t) {
  return e.targetTouches && (0, se.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, se.findInArray)(e.changedTouches, (r) => t === r.identifier);
}
function Pn(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function wn(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && Gt(e.body, "react-draggable-transparent-selection");
}
function On(e) {
  if (e)
    try {
      if (e.body && Qt(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        const t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function Gt(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function Qt(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var fe = {};
Object.defineProperty(fe, "__esModule", {
  value: !0
});
fe.canDragX = Dn;
fe.canDragY = En;
fe.createCoreData = _n;
fe.createDraggableData = Mn;
fe.getBoundPosition = Tn;
fe.getControlPosition = Rn;
fe.snapToGrid = xn;
var ie = de, Ce = B;
function Tn(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : Nn(n);
  const o = Ke(e);
  if (typeof n == "string") {
    const {
      ownerDocument: a
    } = o, f = a.defaultView;
    let c;
    if (n === "parent" ? c = o.parentNode : c = a.querySelector(n), !(c instanceof f.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const m = c, g = f.getComputedStyle(o), h = f.getComputedStyle(m);
    n = {
      left: -o.offsetLeft + (0, ie.int)(h.paddingLeft) + (0, ie.int)(g.marginLeft),
      top: -o.offsetTop + (0, ie.int)(h.paddingTop) + (0, ie.int)(g.marginTop),
      right: (0, Ce.innerWidth)(m) - (0, Ce.outerWidth)(o) - o.offsetLeft + (0, ie.int)(h.paddingRight) - (0, ie.int)(g.marginRight),
      bottom: (0, Ce.innerHeight)(m) - (0, Ce.outerHeight)(o) - o.offsetTop + (0, ie.int)(h.paddingBottom) - (0, ie.int)(g.marginBottom)
    };
  }
  return (0, ie.isNum)(n.right) && (t = Math.min(t, n.right)), (0, ie.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, ie.isNum)(n.left) && (t = Math.max(t, n.left)), (0, ie.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function xn(e, t, r) {
  const n = Math.round(t / e[0]) * e[0], o = Math.round(r / e[1]) * e[1];
  return [n, o];
}
function Dn(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function En(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function Rn(e, t, r) {
  const n = typeof t == "number" ? (0, Ce.getTouch)(e, t) : null;
  if (typeof t == "number" && !n)
    return null;
  const o = Ke(r), a = r.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, Ce.offsetXYFromParent)(n || e, a, r.props.scale);
}
function _n(e, t, r) {
  const n = !(0, ie.isNum)(e.lastX), o = Ke(e);
  return n ? {
    node: o,
    deltaX: 0,
    deltaY: 0,
    lastX: t,
    lastY: r,
    x: t,
    y: r
  } : {
    node: o,
    deltaX: t - e.lastX,
    deltaY: r - e.lastY,
    lastX: e.lastX,
    lastY: e.lastY,
    x: t,
    y: r
  };
}
function Mn(e, t) {
  const r = e.props.scale;
  return {
    node: t.node,
    x: e.state.x + t.deltaX / r,
    y: e.state.y + t.deltaY / r,
    deltaX: t.deltaX / r,
    deltaY: t.deltaY / r,
    lastX: e.state.x,
    lastY: e.state.y
  };
}
function Nn(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function Ke(e) {
  const t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var Ae = {}, ke = {};
Object.defineProperty(ke, "__esModule", {
  value: !0
});
ke.default = Fn;
function Fn() {
}
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = void 0;
var Ve = kn(me), ne = Je(Wt), An = Je(Nt), Z = B, pe = fe, Xe = de, we = Je(ke);
function Je(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ht(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Ht = function(n) {
    return n ? r : t;
  })(e);
}
function kn(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Ht(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var f = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      f && (f.get || f.set) ? Object.defineProperty(n, a, f) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
function re(e, t, r) {
  return t = Ln(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ln(e) {
  var t = In(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function In(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
const le = {
  touch: {
    start: "touchstart",
    move: "touchmove",
    stop: "touchend"
  },
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  }
};
let he = le.mouse, Le = class extends Ve.Component {
  constructor() {
    super(...arguments), re(this, "dragging", !1), re(this, "lastX", NaN), re(this, "lastY", NaN), re(this, "touchIdentifier", null), re(this, "mounted", !1), re(this, "handleDragStart", (t) => {
      if (this.props.onMouseDown(t), !this.props.allowAnyClick && typeof t.button == "number" && t.button !== 0)
        return !1;
      const r = this.findDOMNode();
      if (!r || !r.ownerDocument || !r.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      const {
        ownerDocument: n
      } = r;
      if (this.props.disabled || !(t.target instanceof n.defaultView.Node) || this.props.handle && !(0, Z.matchesSelectorAndParentsTo)(t.target, this.props.handle, r) || this.props.cancel && (0, Z.matchesSelectorAndParentsTo)(t.target, this.props.cancel, r))
        return;
      t.type === "touchstart" && t.preventDefault();
      const o = (0, Z.getTouchIdentifier)(t);
      this.touchIdentifier = o;
      const a = (0, pe.getControlPosition)(t, o, this);
      if (a == null)
        return;
      const {
        x: f,
        y: c
      } = a, m = (0, pe.createCoreData)(this, f, c);
      (0, we.default)("DraggableCore: handleDragStart: %j", m), (0, we.default)("calling", this.props.onStart), !(this.props.onStart(t, m) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, Z.addUserSelectStyles)(n), this.dragging = !0, this.lastX = f, this.lastY = c, (0, Z.addEvent)(n, he.move, this.handleDrag), (0, Z.addEvent)(n, he.stop, this.handleDragStop));
    }), re(this, "handleDrag", (t) => {
      const r = (0, pe.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let c = n - this.lastX, m = o - this.lastY;
        if ([c, m] = (0, pe.snapToGrid)(this.props.grid, c, m), !c && !m)
          return;
        n = this.lastX + c, o = this.lastY + m;
      }
      const a = (0, pe.createCoreData)(this, n, o);
      if ((0, we.default)("DraggableCore: handleDrag: %j", a), this.props.onDrag(t, a) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const m = document.createEvent("MouseEvents");
          m.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(m);
        }
        return;
      }
      this.lastX = n, this.lastY = o;
    }), re(this, "handleDragStop", (t) => {
      if (!this.dragging)
        return;
      const r = (0, pe.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let m = n - this.lastX || 0, g = o - this.lastY || 0;
        [m, g] = (0, pe.snapToGrid)(this.props.grid, m, g), n = this.lastX + m, o = this.lastY + g;
      }
      const a = (0, pe.createCoreData)(this, n, o);
      if (this.props.onStop(t, a) === !1 || this.mounted === !1)
        return !1;
      const c = this.findDOMNode();
      c && this.props.enableUserSelectHack && (0, Z.removeUserSelectStyles)(c.ownerDocument), (0, we.default)("DraggableCore: handleDragStop: %j", a), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, c && ((0, we.default)("DraggableCore: Removing handlers"), (0, Z.removeEvent)(c.ownerDocument, he.move, this.handleDrag), (0, Z.removeEvent)(c.ownerDocument, he.stop, this.handleDragStop));
    }), re(this, "onMouseDown", (t) => (he = le.mouse, this.handleDragStart(t))), re(this, "onMouseUp", (t) => (he = le.mouse, this.handleDragStop(t))), re(this, "onTouchStart", (t) => (he = le.touch, this.handleDragStart(t))), re(this, "onTouchEnd", (t) => (he = le.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = !0;
    const t = this.findDOMNode();
    t && (0, Z.addEvent)(t, le.touch.start, this.onTouchStart, {
      passive: !1
    });
  }
  componentWillUnmount() {
    this.mounted = !1;
    const t = this.findDOMNode();
    if (t) {
      const {
        ownerDocument: r
      } = t;
      (0, Z.removeEvent)(r, le.mouse.move, this.handleDrag), (0, Z.removeEvent)(r, le.touch.move, this.handleDrag), (0, Z.removeEvent)(r, le.mouse.stop, this.handleDragStop), (0, Z.removeEvent)(r, le.touch.stop, this.handleDragStop), (0, Z.removeEvent)(t, le.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, Z.removeUserSelectStyles)(r);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var t, r;
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (r = this.props) === null || r === void 0 || (r = r.nodeRef) === null || r === void 0 ? void 0 : r.current : An.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ Ve.cloneElement(Ve.Children.only(this.props.children), {
      // Note: mouseMove handler is attached to document so it will still function
      // when the user drags quickly and leaves the bounds of the element.
      onMouseDown: this.onMouseDown,
      onMouseUp: this.onMouseUp,
      // onTouchStart is added on `componentDidMount` so they can be added with
      // {passive: false}, which allows it to cancel. See
      // https://developers.google.com/web/updates/2017/01/scrolling-intervention
      onTouchEnd: this.onTouchEnd
    });
  }
};
Ae.default = Le;
re(Le, "displayName", "DraggableCore");
re(Le, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: ne.default.bool,
  children: ne.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: ne.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: ne.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(e, t) {
    if (e[t] && e[t].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: ne.default.arrayOf(ne.default.number),
  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: ne.default.string,
  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: ne.default.string,
  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: ne.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: ne.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: ne.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: ne.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: ne.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: ne.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: Xe.dontSetMe,
  style: Xe.dontSetMe,
  transform: Xe.dontSetMe
});
re(Le, "defaultProps", {
  allowAnyClick: !1,
  // by default only accept left click
  disabled: !1,
  enableUserSelectHack: !0,
  onStart: function() {
  },
  onDrag: function() {
  },
  onStop: function() {
  },
  onMouseDown: function() {
  },
  scale: 1
});
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return m.default;
    }
  }), e.default = void 0;
  var t = O(me), r = h(Wt), n = h(Nt), o = h(tn), a = B, f = fe, c = de, m = h(Ae), g = h(ke);
  function h(b) {
    return b && b.__esModule ? b : { default: b };
  }
  function y(b) {
    if (typeof WeakMap != "function")
      return null;
    var v = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap();
    return (y = function(s) {
      return s ? S : v;
    })(b);
  }
  function O(b, v) {
    if (!v && b && b.__esModule)
      return b;
    if (b === null || typeof b != "object" && typeof b != "function")
      return { default: b };
    var S = y(v);
    if (S && S.has(b))
      return S.get(b);
    var s = {}, _ = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var R in b)
      if (R !== "default" && Object.prototype.hasOwnProperty.call(b, R)) {
        var q = _ ? Object.getOwnPropertyDescriptor(b, R) : null;
        q && (q.get || q.set) ? Object.defineProperty(s, R, q) : s[R] = b[R];
      }
    return s.default = b, S && S.set(b, s), s;
  }
  function E() {
    return E = Object.assign ? Object.assign.bind() : function(b) {
      for (var v = 1; v < arguments.length; v++) {
        var S = arguments[v];
        for (var s in S)
          Object.prototype.hasOwnProperty.call(S, s) && (b[s] = S[s]);
      }
      return b;
    }, E.apply(this, arguments);
  }
  function k(b, v, S) {
    return v = N(v), v in b ? Object.defineProperty(b, v, { value: S, enumerable: !0, configurable: !0, writable: !0 }) : b[v] = S, b;
  }
  function N(b) {
    var v = I(b, "string");
    return typeof v == "symbol" ? v : String(v);
  }
  function I(b, v) {
    if (typeof b != "object" || b === null)
      return b;
    var S = b[Symbol.toPrimitive];
    if (S !== void 0) {
      var s = S.call(b, v || "default");
      if (typeof s != "object")
        return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (v === "string" ? String : Number)(b);
  }
  class $ extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(v, S) {
      let {
        position: s
      } = v, {
        prevPropsPosition: _
      } = S;
      return s && (!_ || s.x !== _.x || s.y !== _.y) ? ((0, g.default)("Draggable: getDerivedStateFromProps %j", {
        position: s,
        prevPropsPosition: _
      }), {
        x: s.x,
        y: s.y,
        prevPropsPosition: {
          ...s
        }
      }) : null;
    }
    constructor(v) {
      super(v), k(this, "onDragStart", (S, s) => {
        if ((0, g.default)("Draggable: onDragStart: %j", s), this.props.onStart(S, (0, f.createDraggableData)(this, s)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), k(this, "onDrag", (S, s) => {
        if (!this.state.dragging)
          return !1;
        (0, g.default)("Draggable: onDrag: %j", s);
        const _ = (0, f.createDraggableData)(this, s), R = {
          x: _.x,
          y: _.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: W,
            y: U
          } = R;
          R.x += this.state.slackX, R.y += this.state.slackY;
          const [z, K] = (0, f.getBoundPosition)(this, R.x, R.y);
          R.x = z, R.y = K, R.slackX = this.state.slackX + (W - R.x), R.slackY = this.state.slackY + (U - R.y), _.x = R.x, _.y = R.y, _.deltaX = R.x - this.state.x, _.deltaY = R.y - this.state.y;
        }
        if (this.props.onDrag(S, _) === !1)
          return !1;
        this.setState(R);
      }), k(this, "onDragStop", (S, s) => {
        if (!this.state.dragging || this.props.onStop(S, (0, f.createDraggableData)(this, s)) === !1)
          return !1;
        (0, g.default)("Draggable: onDragStop: %j", s);
        const R = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: W,
            y: U
          } = this.props.position;
          R.x = W, R.y = U;
        }
        this.setState(R);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: v.position ? v.position.x : v.defaultPosition.x,
        y: v.position ? v.position.y : v.defaultPosition.y,
        prevPropsPosition: {
          ...v.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, v.position && !(v.onDrag || v.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    componentDidMount() {
      typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
        isElementSVG: !0
      });
    }
    componentWillUnmount() {
      this.setState({
        dragging: !1
      });
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
    findDOMNode() {
      var v, S;
      return (v = (S = this.props) === null || S === void 0 || (S = S.nodeRef) === null || S === void 0 ? void 0 : S.current) !== null && v !== void 0 ? v : n.default.findDOMNode(this);
    }
    render() {
      const {
        axis: v,
        bounds: S,
        children: s,
        defaultPosition: _,
        defaultClassName: R,
        defaultClassNameDragging: q,
        defaultClassNameDragged: W,
        position: U,
        positionOffset: z,
        scale: K,
        ...C
      } = this.props;
      let D = {}, X = null;
      const G = !!!U || this.state.dragging, J = U || _, oe = {
        // Set left if horizontal drag is enabled
        x: (0, f.canDragX)(this) && G ? this.state.x : J.x,
        // Set top if vertical drag is enabled
        y: (0, f.canDragY)(this) && G ? this.state.y : J.y
      };
      this.state.isElementSVG ? X = (0, a.createSVGTransform)(oe, z) : D = (0, a.createCSSTransform)(oe, z);
      const l = (0, o.default)(s.props.className || "", R, {
        [q]: this.state.dragging,
        [W]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(m.default, E({}, C, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(s), {
        className: l,
        style: {
          ...s.props.style,
          ...D
        },
        transform: X
      }));
    }
  }
  e.default = $, k($, "displayName", "Draggable"), k($, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ...m.default.propTypes,
    /**
     * `axis` determines which axis the draggable can move.
     *
     *  Note that all callbacks will still return data as normal. This only
     *  controls flushing to the DOM.
     *
     * 'both' allows movement horizontally and vertically.
     * 'x' limits movement to horizontal axis.
     * 'y' limits movement to vertical axis.
     * 'none' limits all movement.
     *
     * Defaults to 'both'.
     */
    axis: r.default.oneOf(["both", "x", "y", "none"]),
    /**
     * `bounds` determines the range of movement available to the element.
     * Available values are:
     *
     * 'parent' restricts movement within the Draggable's parent node.
     *
     * Alternatively, pass an object with the following properties, all of which are optional:
     *
     * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
     *
     * All values are in px.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable bounds={{right: 300, bottom: 300}}>
     *              <div>Content</div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    bounds: r.default.oneOfType([r.default.shape({
      left: r.default.number,
      right: r.default.number,
      top: r.default.number,
      bottom: r.default.number
    }), r.default.string, r.default.oneOf([!1])]),
    defaultClassName: r.default.string,
    defaultClassNameDragging: r.default.string,
    defaultClassNameDragged: r.default.string,
    /**
     * `defaultPosition` specifies the x and y that the dragged item should start at
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable defaultPosition={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    defaultPosition: r.default.shape({
      x: r.default.number,
      y: r.default.number
    }),
    positionOffset: r.default.shape({
      x: r.default.oneOfType([r.default.number, r.default.string]),
      y: r.default.oneOfType([r.default.number, r.default.string])
    }),
    /**
     * `position`, if present, defines the current position of the element.
     *
     *  This is similar to how form elements in React work - if no `position` is supplied, the component
     *  is uncontrolled.
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable position={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    position: r.default.shape({
      x: r.default.number,
      y: r.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: c.dontSetMe,
    style: c.dontSetMe,
    transform: c.dontSetMe
  }), k($, "defaultProps", {
    ...m.default.defaultProps,
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: {
      x: 0,
      y: 0
    },
    scale: 1
  });
})(Yt);
const {
  default: Kt,
  DraggableCore: $n
} = Yt;
Fe.exports = Kt;
Fe.exports.default = Kt;
Fe.exports.DraggableCore = $n;
var Yn = Fe.exports;
const jn = /* @__PURE__ */ Nr(Yn);
const qn = (e) => {
  const { formLayout: t } = e;
  var r = "palmyra-form-field-container";
  const n = t.options;
  if (n && n.columns)
    switch (n.columns) {
      case 2:
        return r + " palmyra-form-field-container-2column";
      case 3:
        return r + " palmyra-form-field-container-3column";
      case 4:
        return r + " palmyra-form-field-container-4column";
    }
  return r;
}, Wn = ue(function(t, r) {
  const { formLayout: n, context: o } = t, { formData: a } = o, f = ce({}), c = qn(t), m = "palmyra-form-field-data", g = wt(() => (h) => At(h, f, h.label), [a.data]);
  return /* @__PURE__ */ i("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: n.fields.map((h, y) => /* @__PURE__ */ i("div", { className: c, children: /* @__PURE__ */ i("div", { className: m, children: g(h) }) }, h.attribute)) });
});
function zn(e) {
  return /* @__PURE__ */ i(
    jn,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ i(mr, { ...e })
    }
  );
}
const Vn = ({ columns: e, isOpen: t, onClose: r, setFilter: n, defaultFilter: o = {} }) => {
  var { getFieldManager: a, getFilterData: f } = Fr(o);
  const c = () => {
    n({});
  }, m = () => {
    var O = f();
    n && n(O);
  }, g = () => {
    r();
  }, h = (O) => {
    O.keyCode === 27 && g();
  }, y = _r(e);
  return /* @__PURE__ */ i("div", { className: "grid-filter-container", children: /* @__PURE__ */ i(
    fr,
    {
      open: t,
      onClose: g,
      PaperComponent: zn,
      onKeyDown: h,
      PaperProps: { sx: { minWidth: "500px" } },
      children: /* @__PURE__ */ i(xt, { onClickAway: r, children: /* @__PURE__ */ H("div", { children: [
        /* @__PURE__ */ H("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ i("div", { className: "grid-header-text-container", children: /* @__PURE__ */ i("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ i("div", { className: "grid-header-icon-container", onClick: g, children: /* @__PURE__ */ i(Tr, { className: "filter-cancel-icon" }) })
        ] }),
        /* @__PURE__ */ i("span", { className: "filter-header-border" }),
        /* @__PURE__ */ i("div", { className: "grid-filter-content", children: /* @__PURE__ */ i(_e.Provider, { value: a, children: /* @__PURE__ */ i(
          kt,
          {
            context: { formData: {} },
            layout: {
              type: "form",
              formLayout: {
                fields: y,
                options: {
                  columns: 2
                }
              },
              Renderer: Wn
            }
          }
        ) }) }),
        /* @__PURE__ */ H("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ i(Se, { className: "filter-reset-btn", disableRipple: !0, onClick: c, children: "Reset" }),
          /* @__PURE__ */ i(Se, { className: "filter-button", disableRipple: !0, onClick: m, children: "Filter" })
        ] })
      ] }) })
    }
  ) });
}, Xn = ue(function(t, r) {
  const { columns: n, children: o, EmptyChild: a, onRowClick: f, quickSearch: c } = t, m = a || wr, g = t.customizer || Rr, [h, y] = ee(!1), [O, E] = ee("standard"), [k, N] = ee(!1), [I, $] = ee(""), {
    setQueryFilter: b,
    setQuickSearch: v,
    setSortColumns: S,
    setEndPointOptions: s,
    gotoPage: _,
    setPageSize: R,
    getPageNo: q,
    refreshData: W,
    setQueryLimit: U,
    getQueryLimit: z,
    data: K,
    totalRecords: C,
    queryLimit: D,
    pageSizeOptions: X,
    filter: V
  } = Ne(t), G = r || ce(null);
  Pe(G, () => ({
    setFilter: (d) => {
      b(d);
    },
    refresh: () => {
      W();
    },
    resetFilter() {
      b({});
    },
    setEndPointOptions: (d) => {
      s(d);
    },
    addFilter: (d, Q) => {
      b((ye) => (ye[d] = Q, { ...ye }));
    },
    setQueryLimit: (d) => {
      U(d);
    },
    getQueryLimit: () => z(),
    setSortOptions(d) {
      S(d);
    },
    getCurrentData: () => K
  }), [z]);
  const J = (d, Q) => {
    _(Q);
  }, oe = Pr(n, g), l = (d) => {
    E(d);
  }, p = () => {
    y(!h);
  }, w = () => O === "compact" ? { padding: "3px" } : O === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, M = () => O === "compact" ? { padding: "3px" } : O === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, T = () => {
    var d;
    switch (O) {
      case "compact":
        d = /* @__PURE__ */ i(nt, { className: "density-icon" });
        break;
      case "comfortable":
        d = /* @__PURE__ */ i(ot, { className: "density-icon" });
        break;
      default:
        d = /* @__PURE__ */ i(rt, { className: "grid-button-icon" });
        break;
    }
    return d;
  }, F = (d) => {
    const Q = d.target.value;
    $(Q), Q ? v(Q) : b({});
  }, u = (d) => {
    f && f(d);
  }, P = (d) => {
    const Q = parseInt(d.target.value, 10);
    R(Q);
  }, x = () => {
    console.info("Export Clicked");
  }, L = 200, A = !!t.pageSize;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ H("div", { children: [
    o,
    /* @__PURE__ */ H("div", { className: "grid-header", children: [
      /* @__PURE__ */ i("div", { className: "grid-header-filter", children: !!c && /* @__PURE__ */ i(
        Ge,
        {
          sx: { width: L },
          type: "text",
          value: I,
          onChange: F,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ i(Dt, { position: "end", children: /* @__PURE__ */ i($t, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ i(xt, { onClickAway: () => {
        y(!1);
      }, children: /* @__PURE__ */ H("div", { className: "grid-header-button grid-density-btn", onClick: p, children: [
        /* @__PURE__ */ i(Oe, { title: "Density", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: T() }) }),
        h && /* @__PURE__ */ i("div", { className: "density-dropdown-content", children: /* @__PURE__ */ H("ul", { children: [
          /* @__PURE__ */ H("li", { onClick: () => l("standard"), children: [
            /* @__PURE__ */ i(rt, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ H("li", { onClick: () => l("compact"), children: [
            /* @__PURE__ */ i(nt, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ H("li", { onClick: () => l("comfortable"), children: [
            /* @__PURE__ */ i(ot, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      n.some((d) => d.searchable) && /* @__PURE__ */ H("div", { className: "grid-header-button grid-filter-btn", children: [
        /* @__PURE__ */ i(Oe, { title: "Filter", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, onClick: () => N(!0), children: /* @__PURE__ */ i(xr, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ i(
          Vn,
          {
            columns: n,
            setFilter: b,
            defaultFilter: V,
            isOpen: k,
            onClose: () => N(!1)
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "grid-header-button grid-export-btn", onClick: x, children: /* @__PURE__ */ i(Oe, { title: "Export", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Dr, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ i(Oe, { title: "New", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Er, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ i(Me, {})
    ] }),
    /* @__PURE__ */ i("div", { className: "grid-table", children: /* @__PURE__ */ i(
      Or,
      {
        columnDefs: oe,
        EmptyChild: m,
        rowData: K,
        onRowClick: u,
        onRowStyle: w,
        onHeaderStyle: M,
        onSortColumn: S
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "grid-header", children: /* @__PURE__ */ i("div", { className: "grid-filter", children: A && /* @__PURE__ */ i(
      Et,
      {
        component: "div",
        count: C || 0,
        page: q(),
        onPageChange: J,
        rowsPerPage: D.limit,
        rowsPerPageOptions: X || [],
        onRowsPerPageChange: P
      }
    ) }) })
  ] }) });
}), sa = ue(function(t, r) {
  const { columns: n, endPoint: o, storeFactory: a, layoutParams: f, pagination: c } = t, m = t.quickSearch || "", g = (y, O) => {
  };
  ve(() => {
    var y = at.subscribe(t.topic, g);
    return () => {
      at.unsubscribe(y);
    };
  }, [t.topic]);
  const h = {
    fields: n,
    pagination: c,
    quickSearch: m,
    storeOptions: {
      endPoint: o
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ i(Me, { children: /* @__PURE__ */ i(Ue.Provider, { value: a, children: /* @__PURE__ */ i(
    Jt,
    {
      layout: h,
      context: f,
      defaultParams: t.defaultParams,
      customizer: t.customizer,
      ref: r
    }
  ) }) });
}), Bn = ue(function(t, r) {
  const n = t.layout, [o, a] = ee(n.fields), f = n.pagination ? n.pagination : [15], c = De(Ue), m = De(Pt);
  var g = n.storeOptions || {}, h = {};
  vr(h, g, m);
  const y = c.getGridStore(h, n.storeOptions.endPoint);
  ve(() => {
    g.hasLayout && y.queryLayout({}).then((k) => {
      a(k.columns);
    });
  }, []);
  const { onClick: O, onNewClick: E } = Ar(n.actionOptions, m);
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    Xn,
    {
      columns: o,
      store: y,
      pageSize: f,
      onRowClick: O,
      onNewClick: E,
      customizer: t.customizer,
      quickSearch: n.quickSearch,
      ref: r,
      defaultParams: t.defaultParams
    }
  ) });
}), Jt = Bn, Un = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Container || Mt;
  return /* @__PURE__ */ i(Ft, { fallback: /* @__PURE__ */ i("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ i(n, { ...t, children: ((a) => /* @__PURE__ */ i(
    Jt,
    {
      context: r,
      layout: a
    }
  ))(t.tableLayout) }) });
}, Gn = (e) => {
  const { layout: t } = e;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ i(kt, { ...e });
    case "view":
      return /* @__PURE__ */ i(Lr, { ...e });
    case "grid":
      return /* @__PURE__ */ i(Un, { ...e });
    case "chart":
      return /* @__PURE__ */ i(gr, { ...e });
    default:
      return /* @__PURE__ */ i(kr, { ...e });
  }
};
function Qn(e, t) {
  var r = e || 1, n = t;
  return {
    w: r,
    h: n
  };
}
const Zt = (e) => {
  const { layout: t, context: r } = e, n = t.sections;
  function o(a, f, c) {
    const { w: m, h: g } = Qn(a.width, a.height);
    return /* @__PURE__ */ i(pr, { sx: { width: m, height: g }, children: /* @__PURE__ */ i(
      Gn,
      {
        layout: a,
        context: f
      }
    ) }, (a.name || "tab") + c);
  }
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap" }, children: n.map((a, f) => o(a, r, f)) });
}, bt = ue(function(t, r) {
  const { layout: n } = t;
  Pe(r, () => ({
    resetFilter() {
    }
  }), []);
  const o = {}, a = n.tabs;
  return /* @__PURE__ */ i("div", { children: a.map((f, c) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    Zt,
    {
      layout: f,
      context: o
    }
  ) }, f.name + c)) });
}), Hn = (e) => {
  switch (e) {
    case "formEdit":
      return "edit";
    case "formNew":
      return "new";
    case "formView":
      return "view";
    default:
      return "edit";
  }
}, St = ue(function(t, r) {
  var h;
  const n = t.data || {}, { layout: o } = t;
  var { getFieldManager: a, getFormData: f, isFormValid: c } = Ir(n, (h = t.callbacks) == null ? void 0 : h.onFormValidChange, Hn(t.mode));
  Pe(r, () => ({
    getData() {
      return f();
    },
    isValid() {
      return c();
    }
  }), []);
  const m = { formData: n }, g = o.tabs;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(_e.Provider, { value: a, children: g.map((y, O) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    Zt,
    {
      layout: y,
      context: m
    }
  ) }, y.name + O)) }) });
}), Kn = (e) => {
  switch (e) {
    case "grid":
      return bt;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), St;
    case "formEdit":
    case "formNew":
    case "formView":
      return St;
    default:
      return bt;
  }
}, la = ue(function(t, r) {
  const [n, o] = ee(t.layout), a = t.mode ? t.mode : n.type ? n.type : "grid", f = t.layoutParams || {}, c = Kn(a), m = ce(0);
  return ve(() => {
    o(t.layout), m.current < 999999 ? m.current++ : m.current = 0;
  }, [t.layout]), /* @__PURE__ */ i(Ft, { fallback: /* @__PURE__ */ i("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ i(Ue.Provider, { value: t.storeFactory, children: /* @__PURE__ */ i(Pt.Provider, { value: f, children: /* @__PURE__ */ i(c, { ...t, ref: (g) => {
    r && (r.current = g);
  } }, m.current) }) }) });
}), ca = ue(function(t, r) {
  const { children: n, Child: o, childProps: a, pageSize: f } = t, c = r || ce(null), {
    setQueryFilter: m,
    refreshData: g,
    setSortColumns: h,
    setEndPointOptions: y,
    setQuickSearch: O,
    gotoPage: E,
    setPageSize: k,
    getPageNo: N,
    setQueryLimit: I,
    getQueryLimit: $,
    data: b,
    totalRecords: v,
    pageSizeOptions: S,
    queryLimit: s
  } = Ne(t), _ = t.listKeyProvider || ((C, D) => D);
  Pe(c, () => ({
    setFilter: (C) => {
      m(C);
    },
    refresh: () => {
      g();
    },
    resetFilter() {
      m({});
    },
    setEndPointOptions: (C) => {
      y(C);
    },
    addFilter: (C, D) => {
      m((X) => (X[C] = D, { ...X }));
    },
    setQueryLimit: (C) => {
      I(C);
    },
    getQueryLimit: () => $(),
    getCurrentData: () => b,
    setSortOptions(C) {
      h(C);
    }
  }), []);
  const R = (C, D) => {
    E(D);
  }, q = (C) => {
    const D = C.target.value;
    O(D);
  }, W = (C) => {
    const D = parseInt(C.target.value, 10);
    k(D);
  }, U = 200, z = !!f, K = !!t.quickSearch;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ H("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ H("div", { children: [
      /* @__PURE__ */ H("div", { className: "card-header", children: [
        /* @__PURE__ */ i("div", { className: "card-filter", children: K && /* @__PURE__ */ i(
          Ge,
          {
            sx: { width: U },
            type: "text",
            onChange: q,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ i(Dt, { position: "end", children: /* @__PURE__ */ i($t, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ i("div", { className: "card-pagination", children: z && /* @__PURE__ */ i(
          Et,
          {
            component: "div",
            count: v || 0,
            page: N(),
            onPageChange: R,
            rowsPerPage: s.limit,
            rowsPerPageOptions: S || [],
            onRowsPerPageChange: W
          }
        ) })
      ] }),
      /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
        hr,
        {
          Child: o,
          childKeyProvider: _,
          preProcess: t.preProcess,
          dataList: b,
          childProps: a,
          EmptyChild: t.EmptyChild
        }
      ) })
    ] })
  ] }) });
});
export {
  la as F,
  Jt as G,
  Yr as M,
  sa as P,
  ca as S,
  Zt as T,
  Xn as a,
  aa as b,
  Wr as c,
  kt as d,
  Wn as e,
  Vn as f,
  At as g,
  Un as h,
  Gn as i,
  bt as j,
  St as k,
  Ne as u
};
