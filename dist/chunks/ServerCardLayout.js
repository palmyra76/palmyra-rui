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
import { jsx as s, jsxs as Q, Fragment as Me } from "react/jsx-runtime";
import pe, { useState as ee, useRef as se, useEffect as ye, forwardRef as ce, useContext as De, useImperativeHandle as ve, useMemo as wt } from "react";
import { FormControlLabel as et, Checkbox as tt, FormControl as Tt, FormHelperText as Ot, Autocomplete as ur, TextField as Ge, CircularProgress as dr, Dialog as fr, ClickAwayListener as xt, Button as Se, Paper as pr, InputAdornment as Dt, Tooltip as Te, TablePagination as Et, Box as mr } from "@mui/material";
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
import Tr from "../palmyra/grid/base/TableX.js";
import { Close as Or, Menu as rt, DensitySmall as nt, DensityLarge as ot, FilterAlt as xr, FileDownloadOutlined as Dr, Add as Er } from "@mui/icons-material";
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
import Ir from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as Lr } from "./PalmyraFieldManager.js";
import { useKeyValue as $r } from "../palmyra/utils/pubsub/PubSubHelper.js";
const Ne = (e) => {
  const { store: t, quickSearch: r } = e, n = e.fetchAll != !1, [o, a] = ee(e.endPointOptions), [u, l] = ee(null), [f, p] = e.filterTopic ? $r(e.filterTopic, {}) : ee({}), [h, y] = ee({}), P = se(e.initialFetch == !1), w = e.pageSize ? e.pageSize : 15;
  var Y = w instanceof Array ? w : [w], M = w instanceof Array ? w[0] : w;
  const [R, j] = ee({ limit: M, offset: 0 }), [C, g] = ee(null), b = () => Math.round(R.offset / R.limit), i = () => R.limit, N = (F) => {
    j({ ...R, offset: F * M });
  }, D = (F) => {
    const I = F > 10 || F == -1 ? F : 15;
    j({ ...R, limit: I });
  }, B = () => f ? Object.keys(f).length == 0 : !1, k = (F) => {
    g((I) => (setTimeout(() => {
      e.onDataChange && e.onDataChange(C, I);
    }, 300), F));
  };
  ye(() => {
    if (P.current) {
      P.current = !1;
      return;
    }
    (n || !B()) && X();
  }, [R, f, h]);
  const X = () => {
    const F = { filter: f, sortOrder: h, total: !0, endPointVars: o, ...R };
    if (t)
      try {
        t.query(F).then((I) => {
          k(I.result), l(I.total);
        }).catch((I) => {
          var G = I.response ? I.response : I;
          console.error("error while fetching", G), T();
        });
      } catch (I) {
        console.error(I), K();
      }
    else
      console.error("Store is not provided for the Grid"), K();
  }, K = () => {
    k([]), l(0);
  }, T = () => {
    k(void 0), l(null);
  };
  return {
    setQueryFilter: (F) => {
      typeof F == "function" || F && Object.keys(F).length > 0 ? p(F) : p({});
    },
    setQuickSearch: (F) => {
      const I = r;
      p(F ? (G) => (G[I] = F, { ...G }) : (G) => (delete G[I], { ...G }));
    },
    setSortColumns: (F) => {
      y(F);
    },
    setEndPointOptions: a,
    refreshData: X,
    gotoPage: N,
    setPageSize: D,
    getPageNo: b,
    getLimit: i,
    filter: f,
    queryLimit: R,
    data: C,
    totalRecords: u,
    pageSizeOptions: Y
  };
};
function it(e) {
  return e ? Array.isArray(e) ? e : typeof e == "string" ? e.split(",") : (console.log(e), [e]) : [];
}
const aa = ce(function(t, r) {
  const n = De(_e), o = r || se(null), a = n(t, "checkbox", o), { mutateOptions: u, setMutateOptions: l } = a, [f, p] = ee(!1), h = it(a.data), y = a.error, P = a.eventListeners, Y = { store: a.store, pageSize: -1 }, { data: M } = Ne(Y), R = M, j = se(null), C = t.lookupOptions || {}, g = C.idAttribute || "id", b = C.titleAttribute || "name", i = Ee(g) ? (T) => Re(g, T) : (T) => T[g], N = Ee(b) ? (T) => Re(b, T) : (T) => T[b];
  ve(o, () => ({
    focus() {
      j.current.focus();
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
    setValue(T, V = !1) {
      a.setData(T, V);
    },
    setVisible(T) {
      l((V) => ({ ...V, visible: T }));
    },
    setRequired(T) {
      l((V) => ({ ...V, required: T }));
    },
    setReadOnly(T) {
      l((V) => ({ ...V, readonly: T }));
    },
    setAttribute(T) {
      l((V) => ({ ...V, ...T }));
    },
    setOptions(T) {
    },
    getOptions() {
    }
  }), [a]);
  var D = Rt(t, a.data, t.label);
  t.readonly && (D.inputProps = { readOnly: !0 });
  function B(T, V) {
    const U = it(a.data);
    var J = U.indexOf(T);
    V ? J < 0 && U.push(T) : J >= 0 && U.splice(J, 1), P.onValueChange(U.toString());
  }
  var k = {
    onBlur: P.onBlur,
    onFocus: P.onFocus,
    onChange: (T) => {
      B(T.target.value, T.target.checked);
    }
  };
  const X = (T) => {
    const V = T.toString();
    return h.includes(V);
  }, K = (T) => {
    const V = T.target.checked;
    p(V);
    var U = [];
    V && R.map((J) => {
      U.push(i(J));
    }), P.onValueChange(U.toString());
  };
  return /* @__PURE__ */ s("div", { className: t.className, children: u.visible && /* @__PURE__ */ Q(
    Ct,
    {
      label: _t(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ s("div", { children: t.hideSelectAll ? /* @__PURE__ */ s(Me, {}) : /* @__PURE__ */ s(
          et,
          {
            control: /* @__PURE__ */ s(tt, { onChange: K }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ Q(
          Tt,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: y.status,
            ...D,
            children: [
              R ? R.map((T) => /* @__PURE__ */ s(
                et,
                {
                  value: i(T),
                  control: /* @__PURE__ */ s(
                    tt,
                    {
                      ...k,
                      checked: X(i(T)),
                      disabled: t.readonly
                    }
                  ),
                  label: N(T)
                },
                i(T)
              )) : /* @__PURE__ */ s("div", { children: "No options provided" }),
              /* @__PURE__ */ s(Ot, { className: "form-error-text", children: y.message })
            ]
          }
        )
      ]
    }
  ) });
}), Yr = ce(function(t, r) {
  const n = De(_e), o = r || se(null), a = se(null), u = se(0), [l, f] = ee([]), [p, h] = ee(""), [y, P] = ee(!1), w = n(t, "serverlookup", o), Y = t.store || w.store, M = t.lookupOptions || {}, R = M.idAttribute || "id", j = M.titleAttribute || "name", C = M.searchAttribute || j, g = {
    store: Y,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: C,
    initialFetch: !1
  }, b = Ne(g), i = w.eventListeners, N = w.error, { mutateOptions: D, setMutateOptions: B } = w, k = w.data, X = y && l.length < (k ? 2 : 1), { setQueryFilter: K, setEndPointOptions: T, setQuickSearch: V, totalRecords: U, refreshData: J } = b, F = b.data, I = Ee(R) ? (c) => Re(R, c) : (c) => c == null ? void 0 : c[R], G = Ee(j) ? (c) => Re(j, c) : (c) => c == null ? void 0 : c[j];
  ye(() => {
    var c = k != "" ? k : void 0;
    c && f([c]);
  }, [w.data]), ye(() => {
    const c = F ? [...F] : [], S = k != "" ? k : void 0, x = I(S), q = G(S);
    c && x && q && !E(c, x) && c.unshift(S), f(c), u.current < U && (u.current = U);
  }, [F, U]), ye(() => {
    yr(ue);
  }, [p, y]);
  function ue() {
    y && (p.length > 0 && p != G(k) ? V("*" + p + "*") : F ? V(null) : J());
  }
  var d = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: (c, S) => {
      v(S);
    },
    onInputChange: (c, S) => (h(S), !0)
  };
  const v = (c) => {
    i.onValueChange(c);
  }, _ = (c) => typeof c == "object" ? G(c) + "" : (console.log(c), "");
  function E(c, S) {
    return c.find((x) => {
      if (I(x) == S)
        return x;
    });
  }
  ve(o, () => ({
    focus() {
      a.current.focus();
    },
    isValid() {
      return !N.status;
    },
    clear() {
      t.multiple ? w.setData([], !0) : w.setData(void 0, !0);
    },
    getValue() {
      return w.getData();
    },
    setValue(c, S = !1) {
      w.setData(c, S);
    },
    setVisible(c) {
      B((S) => ({ ...S, visible: c }));
    },
    setRequired(c) {
      B((S) => ({ ...S, required: c }));
    },
    setReadOnly(c) {
      B((S) => ({ ...S, readonly: c }));
    },
    setAttribute(c) {
      B((S) => ({ ...S, ...c }));
    },
    setFilter(c) {
      K(c);
    },
    resetFilter() {
      K({});
    },
    setEndPointOptions(c) {
      T(c);
    },
    refresh: () => {
      J();
    },
    addFilter(c, S) {
      K((x) => (x[c] = S, { ...x }));
    },
    setDefaultFilter(c) {
    }
  }), [w]);
  var O = Rt(t, k, t.label);
  D.readonly && (O.inputProps = { readOnly: !0 });
  const A = (c, S) => c instanceof Array ? c.some((x) => I(x) == I(S)) : I(c) == I(S);
  return /* @__PURE__ */ s(
    Ct,
    {
      label: _t(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ Q(Tt, { fullWidth: !0, error: N.status, children: [
        /* @__PURE__ */ s(
          ur,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: t.multiple,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            isOptionEqualToValue: A,
            filterOptions: (c) => c,
            renderInput: (c) => /* @__PURE__ */ s(
              Ge,
              {
                ...c,
                inputRef: (S) => {
                  a.current = S;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                InputProps: {
                  ...c.InputProps,
                  endAdornment: /* @__PURE__ */ Q(Me, { children: [
                    X ? /* @__PURE__ */ s(dr, { color: "inherit", size: 18 }) : null,
                    c.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: _,
            ...O,
            options: l,
            open: y,
            onClose: () => {
              P(!1);
            },
            onOpen: (c) => {
              P(!0);
            },
            ...d
          }
        ),
        /* @__PURE__ */ s(Ot, { className: "form-error-text", children: N.message })
      ] })
    }
  );
}), qr = (e) => {
  const { fieldDef: t } = e;
  return /* @__PURE__ */ Q("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, oe = (e, t) => {
  const r = e.fieldDef;
  return /* @__PURE__ */ s(
    t,
    {
      ...r,
      label: e.title
    },
    r.title + r.attribute
  );
}, jr = () => /* @__PURE__ */ s("div", { children: "To be Implemented" }), At = (e, t, r) => {
  const { type: n } = e, o = { fieldDef: e, title: r };
  switch (n) {
    case "string":
      return oe(o, ar);
    case "radio":
      return oe(o, rr);
    case "select":
      return oe(o, nr);
    case "date":
      return oe(o, er);
    case "datetime":
      return oe(o, tr);
    case "checkbox":
      return oe(o, ir);
    case "serverlookup":
      return oe(o, Yr);
    case "textarea":
      return oe(o, or);
    case "switch":
      return oe(o, sr);
    case "password":
      return oe(o, lr);
    case "float":
    case "number":
    case "numbersOnly":
      return oe(o, cr);
    case "integer":
      return oe(o, Sr);
    case "multiSelect":
      return jr();
    case "dateRange":
      return oe(o, br);
    default:
      return qr(o);
  }
}, Wr = ce(function(t, r) {
  var h;
  const { formLayout: n, context: o } = t, { formData: a } = o, u = n.Container;
  se({});
  const l = wt(() => (y) => At(y), [a.data]);
  var f = ((h = n.options) == null ? void 0 : h.columns) || 1, p = { columns: f };
  return u ? /* @__PURE__ */ s("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((y, P) => /* @__PURE__ */ s(
    u,
    {
      index: P,
      field: y,
      label: y.title,
      options: p,
      children: l(y)
    },
    y.attribute + y.name + y.type
  )) }) : /* @__PURE__ */ s("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((y, P) => l(y)) });
}), kt = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Renderer || Wr, o = t.Container || Mt;
  const a = (u) => /* @__PURE__ */ s(
    n,
    {
      context: r,
      formLayout: u
    }
  );
  return /* @__PURE__ */ s(
    o,
    {
      hideTitle: t.hideTitle,
      title: t.title,
      name: t.name,
      children: /* @__PURE__ */ s(Cr, { columns: t.columns, children: a(t.formLayout) })
    }
  );
};
var It = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, st = pe.createContext && pe.createContext(It), ge = globalThis && globalThis.__assign || function() {
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
function Lt(e) {
  return e && e.map(function(t, r) {
    return pe.createElement(t.tag, ge({
      key: r
    }, t.attr), Lt(t.child));
  });
}
function Vr(e) {
  return function(t) {
    return pe.createElement(Xr, ge({
      attr: ge({}, e.attr)
    }, t), Lt(e.child));
  };
}
function Xr(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, a = e.title, u = zr(e, ["attr", "size", "title"]), l = o || r.size || "1em", f;
    return r.className && (f = r.className), e.className && (f = (f ? f + " " : "") + e.className), pe.createElement("svg", ge({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, u, {
      className: f,
      style: ge(ge({
        color: e.color || r.color
      }, r.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && pe.createElement("title", null, a), e.children);
  };
  return st !== void 0 ? pe.createElement(st.Consumer, null, function(r) {
    return t(r);
  }) : t(It);
}
function $t(e) {
  return Vr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
}
var Fe = { exports: {} }, Yt = {}, Be = { exports: {} }, Oe = { exports: {} }, W = {};
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
    return W;
  lt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, P = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, Y = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function g(i) {
    if (typeof i == "object" && i !== null) {
      var N = i.$$typeof;
      switch (N) {
        case t:
          switch (i = i.type, i) {
            case f:
            case p:
            case n:
            case a:
            case o:
            case y:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case l:
                case h:
                case Y:
                case w:
                case u:
                  return i;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function b(i) {
    return g(i) === p;
  }
  return W.AsyncMode = f, W.ConcurrentMode = p, W.ContextConsumer = l, W.ContextProvider = u, W.Element = t, W.ForwardRef = h, W.Fragment = n, W.Lazy = Y, W.Memo = w, W.Portal = r, W.Profiler = a, W.StrictMode = o, W.Suspense = y, W.isAsyncMode = function(i) {
    return b(i) || g(i) === f;
  }, W.isConcurrentMode = b, W.isContextConsumer = function(i) {
    return g(i) === l;
  }, W.isContextProvider = function(i) {
    return g(i) === u;
  }, W.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === t;
  }, W.isForwardRef = function(i) {
    return g(i) === h;
  }, W.isFragment = function(i) {
    return g(i) === n;
  }, W.isLazy = function(i) {
    return g(i) === Y;
  }, W.isMemo = function(i) {
    return g(i) === w;
  }, W.isPortal = function(i) {
    return g(i) === r;
  }, W.isProfiler = function(i) {
    return g(i) === a;
  }, W.isStrictMode = function(i) {
    return g(i) === o;
  }, W.isSuspense = function(i) {
    return g(i) === y;
  }, W.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === n || i === p || i === a || i === o || i === y || i === P || typeof i == "object" && i !== null && (i.$$typeof === Y || i.$$typeof === w || i.$$typeof === u || i.$$typeof === l || i.$$typeof === h || i.$$typeof === R || i.$$typeof === j || i.$$typeof === C || i.$$typeof === M);
  }, W.typeOf = g, W;
}
var z = {};
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
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, P = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, Y = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function g(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === n || m === p || m === a || m === o || m === y || m === P || typeof m == "object" && m !== null && (m.$$typeof === Y || m.$$typeof === w || m.$$typeof === u || m.$$typeof === l || m.$$typeof === h || m.$$typeof === R || m.$$typeof === j || m.$$typeof === C || m.$$typeof === M);
    }
    function b(m) {
      if (typeof m == "object" && m !== null) {
        var ne = m.$$typeof;
        switch (ne) {
          case t:
            var we = m.type;
            switch (we) {
              case f:
              case p:
              case n:
              case a:
              case o:
              case y:
                return we;
              default:
                var Ze = we && we.$$typeof;
                switch (Ze) {
                  case l:
                  case h:
                  case Y:
                  case w:
                  case u:
                    return Ze;
                  default:
                    return ne;
                }
            }
          case r:
            return ne;
        }
      }
    }
    var i = f, N = p, D = l, B = u, k = t, X = h, K = n, T = Y, V = w, U = r, J = a, F = o, I = y, G = !1;
    function ue(m) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(m) || b(m) === f;
    }
    function d(m) {
      return b(m) === p;
    }
    function v(m) {
      return b(m) === l;
    }
    function _(m) {
      return b(m) === u;
    }
    function E(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function O(m) {
      return b(m) === h;
    }
    function A(m) {
      return b(m) === n;
    }
    function c(m) {
      return b(m) === Y;
    }
    function S(m) {
      return b(m) === w;
    }
    function x(m) {
      return b(m) === r;
    }
    function q(m) {
      return b(m) === a;
    }
    function L(m) {
      return b(m) === o;
    }
    function $(m) {
      return b(m) === y;
    }
    z.AsyncMode = i, z.ConcurrentMode = N, z.ContextConsumer = D, z.ContextProvider = B, z.Element = k, z.ForwardRef = X, z.Fragment = K, z.Lazy = T, z.Memo = V, z.Portal = U, z.Profiler = J, z.StrictMode = F, z.Suspense = I, z.isAsyncMode = ue, z.isConcurrentMode = d, z.isContextConsumer = v, z.isContextProvider = _, z.isElement = E, z.isForwardRef = O, z.isFragment = A, z.isLazy = c, z.isMemo = S, z.isPortal = x, z.isProfiler = q, z.isStrictMode = L, z.isSuspense = $, z.isValidElementType = g, z.typeOf = b;
  }()), z;
}
var ut;
function qt() {
  return ut || (ut = 1, process.env.NODE_ENV === "production" ? Oe.exports = Br() : Oe.exports = Ur()), Oe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Le, dt;
function Gr() {
  if (dt)
    return Le;
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
      for (var u = {}, l = 0; l < 10; l++)
        u["_" + String.fromCharCode(l)] = l;
      var f = Object.getOwnPropertyNames(u).map(function(h) {
        return u[h];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        p[h] = h;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Le = o() ? Object.assign : function(a, u) {
    for (var l, f = n(a), p, h = 1; h < arguments.length; h++) {
      l = Object(arguments[h]);
      for (var y in l)
        t.call(l, y) && (f[y] = l[y]);
      if (e) {
        p = e(l);
        for (var P = 0; P < p.length; P++)
          r.call(l, p[P]) && (f[p[P]] = l[p[P]]);
      }
    }
    return f;
  }, Le;
}
var $e, ft;
function He() {
  if (ft)
    return $e;
  ft = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return $e = e, $e;
}
var Ye, pt;
function jt() {
  return pt || (pt = 1, Ye = Function.call.bind(Object.prototype.hasOwnProperty)), Ye;
}
var qe, mt;
function Hr() {
  if (mt)
    return qe;
  mt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = He(), r = {}, n = jt();
    e = function(a) {
      var u = "Warning: " + a;
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
  }
  function o(a, u, l, f, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in a)
        if (n(a, h)) {
          var y;
          try {
            if (typeof a[h] != "function") {
              var P = Error(
                (f || "React class") + ": " + l + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw P.name = "Invariant Violation", P;
            }
            y = a[h](u, h, f, l, null, t);
          } catch (Y) {
            y = Y;
          }
          if (y && !(y instanceof Error) && e(
            (f || "React class") + ": type specification of " + l + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in r)) {
            r[y.message] = !0;
            var w = p ? p() : "";
            e(
              "Failed " + l + " type: " + y.message + (w ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, qe = o, qe;
}
var je, ht;
function Kr() {
  if (ht)
    return je;
  ht = 1;
  var e = qt(), t = Gr(), r = He(), n = jt(), o = Hr(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var f = "Warning: " + l;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function u() {
    return null;
  }
  return je = function(l, f) {
    var p = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function y(d) {
      var v = d && (p && d[p] || d[h]);
      if (typeof v == "function")
        return v;
    }
    var P = "<<anonymous>>", w = {
      array: j("array"),
      bigint: j("bigint"),
      bool: j("boolean"),
      func: j("function"),
      number: j("number"),
      object: j("object"),
      string: j("string"),
      symbol: j("symbol"),
      any: C(),
      arrayOf: g,
      element: b(),
      elementType: i(),
      instanceOf: N,
      node: X(),
      objectOf: B,
      oneOf: D,
      oneOfType: k,
      shape: T,
      exact: V
    };
    function Y(d, v) {
      return d === v ? d !== 0 || 1 / d === 1 / v : d !== d && v !== v;
    }
    function M(d, v) {
      this.message = d, this.data = v && typeof v == "object" ? v : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function R(d) {
      if (process.env.NODE_ENV !== "production")
        var v = {}, _ = 0;
      function E(A, c, S, x, q, L, $) {
        if (x = x || P, L = L || S, $ !== r) {
          if (f) {
            var m = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw m.name = "Invariant Violation", m;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ne = x + ":" + S;
            !v[ne] && // Avoid spamming the console because they are often not actionable except for lib authors
            _ < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + L + "` prop on `" + x + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), v[ne] = !0, _++);
          }
        }
        return c[S] == null ? A ? c[S] === null ? new M("The " + q + " `" + L + "` is marked as required " + ("in `" + x + "`, but its value is `null`.")) : new M("The " + q + " `" + L + "` is marked as required in " + ("`" + x + "`, but its value is `undefined`.")) : null : d(c, S, x, q, L);
      }
      var O = E.bind(null, !1);
      return O.isRequired = E.bind(null, !0), O;
    }
    function j(d) {
      function v(_, E, O, A, c, S) {
        var x = _[E], q = F(x);
        if (q !== d) {
          var L = I(x);
          return new M(
            "Invalid " + A + " `" + c + "` of type " + ("`" + L + "` supplied to `" + O + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return R(v);
    }
    function C() {
      return R(u);
    }
    function g(d) {
      function v(_, E, O, A, c) {
        if (typeof d != "function")
          return new M("Property `" + c + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var S = _[E];
        if (!Array.isArray(S)) {
          var x = F(S);
          return new M("Invalid " + A + " `" + c + "` of type " + ("`" + x + "` supplied to `" + O + "`, expected an array."));
        }
        for (var q = 0; q < S.length; q++) {
          var L = d(S, q, O, A, c + "[" + q + "]", r);
          if (L instanceof Error)
            return L;
        }
        return null;
      }
      return R(v);
    }
    function b() {
      function d(v, _, E, O, A) {
        var c = v[_];
        if (!l(c)) {
          var S = F(c);
          return new M("Invalid " + O + " `" + A + "` of type " + ("`" + S + "` supplied to `" + E + "`, expected a single ReactElement."));
        }
        return null;
      }
      return R(d);
    }
    function i() {
      function d(v, _, E, O, A) {
        var c = v[_];
        if (!e.isValidElementType(c)) {
          var S = F(c);
          return new M("Invalid " + O + " `" + A + "` of type " + ("`" + S + "` supplied to `" + E + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return R(d);
    }
    function N(d) {
      function v(_, E, O, A, c) {
        if (!(_[E] instanceof d)) {
          var S = d.name || P, x = ue(_[E]);
          return new M("Invalid " + A + " `" + c + "` of type " + ("`" + x + "` supplied to `" + O + "`, expected ") + ("instance of `" + S + "`."));
        }
        return null;
      }
      return R(v);
    }
    function D(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), u;
      function v(_, E, O, A, c) {
        for (var S = _[E], x = 0; x < d.length; x++)
          if (Y(S, d[x]))
            return null;
        var q = JSON.stringify(d, function($, m) {
          var ne = I(m);
          return ne === "symbol" ? String(m) : m;
        });
        return new M("Invalid " + A + " `" + c + "` of value `" + String(S) + "` " + ("supplied to `" + O + "`, expected one of " + q + "."));
      }
      return R(v);
    }
    function B(d) {
      function v(_, E, O, A, c) {
        if (typeof d != "function")
          return new M("Property `" + c + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var S = _[E], x = F(S);
        if (x !== "object")
          return new M("Invalid " + A + " `" + c + "` of type " + ("`" + x + "` supplied to `" + O + "`, expected an object."));
        for (var q in S)
          if (n(S, q)) {
            var L = d(S, q, O, A, c + "." + q, r);
            if (L instanceof Error)
              return L;
          }
        return null;
      }
      return R(v);
    }
    function k(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var v = 0; v < d.length; v++) {
        var _ = d[v];
        if (typeof _ != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + G(_) + " at index " + v + "."
          ), u;
      }
      function E(O, A, c, S, x) {
        for (var q = [], L = 0; L < d.length; L++) {
          var $ = d[L], m = $(O, A, c, S, x, r);
          if (m == null)
            return null;
          m.data && n(m.data, "expectedType") && q.push(m.data.expectedType);
        }
        var ne = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new M("Invalid " + S + " `" + x + "` supplied to " + ("`" + c + "`" + ne + "."));
      }
      return R(E);
    }
    function X() {
      function d(v, _, E, O, A) {
        return U(v[_]) ? null : new M("Invalid " + O + " `" + A + "` supplied to " + ("`" + E + "`, expected a ReactNode."));
      }
      return R(d);
    }
    function K(d, v, _, E, O) {
      return new M(
        (d || "React class") + ": " + v + " type `" + _ + "." + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function T(d) {
      function v(_, E, O, A, c) {
        var S = _[E], x = F(S);
        if (x !== "object")
          return new M("Invalid " + A + " `" + c + "` of type `" + x + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var q in d) {
          var L = d[q];
          if (typeof L != "function")
            return K(O, A, c, q, I(L));
          var $ = L(S, q, O, A, c + "." + q, r);
          if ($)
            return $;
        }
        return null;
      }
      return R(v);
    }
    function V(d) {
      function v(_, E, O, A, c) {
        var S = _[E], x = F(S);
        if (x !== "object")
          return new M("Invalid " + A + " `" + c + "` of type `" + x + "` " + ("supplied to `" + O + "`, expected `object`."));
        var q = t({}, _[E], d);
        for (var L in q) {
          var $ = d[L];
          if (n(d, L) && typeof $ != "function")
            return K(O, A, c, L, I($));
          if (!$)
            return new M(
              "Invalid " + A + " `" + c + "` key `" + L + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(_[E], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var m = $(S, L, O, A, c + "." + L, r);
          if (m)
            return m;
        }
        return null;
      }
      return R(v);
    }
    function U(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(U);
          if (d === null || l(d))
            return !0;
          var v = y(d);
          if (v) {
            var _ = v.call(d), E;
            if (v !== d.entries) {
              for (; !(E = _.next()).done; )
                if (!U(E.value))
                  return !1;
            } else
              for (; !(E = _.next()).done; ) {
                var O = E.value;
                if (O && !U(O[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function J(d, v) {
      return d === "symbol" ? !0 : v ? v["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && v instanceof Symbol : !1;
    }
    function F(d) {
      var v = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : J(v, d) ? "symbol" : v;
    }
    function I(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var v = F(d);
      if (v === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return v;
    }
    function G(d) {
      var v = I(d);
      switch (v) {
        case "array":
        case "object":
          return "an " + v;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + v;
        default:
          return v;
      }
    }
    function ue(d) {
      return !d.constructor || !d.constructor.name ? P : d.constructor.name;
    }
    return w.checkPropTypes = o, w.resetWarningCache = o.resetWarningCache, w.PropTypes = w, w;
  }, je;
}
var We, gt;
function Qr() {
  if (gt)
    return We;
  gt = 1;
  var e = He();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, We = function() {
    function n(u, l, f, p, h, y) {
      if (y !== e) {
        var P = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw P.name = "Invariant Violation", P;
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
  var Jr = qt(), Zr = !0;
  Be.exports = Kr()(Jr.isElement, Zr);
} else
  Be.exports = Qr()();
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
var H = {}, de = {};
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
Object.defineProperty(H, "__esModule", {
  value: !0
});
H.addClassName = Gt;
H.addEvent = fn;
H.addUserSelectStyles = wn;
H.createCSSTransform = bn;
H.createSVGTransform = Sn;
H.getTouch = Cn;
H.getTouchIdentifier = Pn;
H.getTranslation = Ke;
H.innerHeight = gn;
H.innerWidth = yn;
H.matchesSelector = Ut;
H.matchesSelectorAndParentsTo = dn;
H.offsetXYFromParent = vn;
H.outerHeight = mn;
H.outerWidth = hn;
H.removeClassName = Ht;
H.removeEvent = pn;
H.removeUserSelectStyles = Tn;
var ie = de, vt = un(be);
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
      var u = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      u && (u.get || u.set) ? Object.defineProperty(n, a, u) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
let xe = "";
function Ut(e, t) {
  return xe || (xe = (0, ie.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, ie.isFunction)(e[r]);
  })), (0, ie.isFunction)(e[xe]) ? e[xe](t) : !1;
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
function pn(e, t, r, n) {
  if (!e)
    return;
  const o = {
    capture: !0,
    ...n
  };
  e.removeEventListener ? e.removeEventListener(t, r, o) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
}
function mn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ie.int)(r.borderTopWidth), t += (0, ie.int)(r.borderBottomWidth), t;
}
function hn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ie.int)(r.borderLeftWidth), t += (0, ie.int)(r.borderRightWidth), t;
}
function gn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ie.int)(r.paddingTop), t -= (0, ie.int)(r.paddingBottom), t;
}
function yn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ie.int)(r.paddingLeft), t -= (0, ie.int)(r.paddingRight), t;
}
function vn(e, t, r) {
  const o = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), a = (e.clientX + t.scrollLeft - o.left) / r, u = (e.clientY + t.scrollTop - o.top) / r;
  return {
    x: a,
    y: u
  };
}
function bn(e, t) {
  const r = Ke(e, t, "px");
  return {
    [(0, vt.browserPrefixToKey)("transform", vt.default)]: r
  };
}
function Sn(e, t) {
  return Ke(e, t, "");
}
function Ke(e, t, r) {
  let {
    x: n,
    y: o
  } = e, a = "translate(".concat(n).concat(r, ",").concat(o).concat(r, ")");
  if (t) {
    const u = "".concat(typeof t.x == "string" ? t.x : t.x + r), l = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    a = "translate(".concat(u, ", ").concat(l, ")") + a;
  }
  return a;
}
function Cn(e, t) {
  return e.targetTouches && (0, ie.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, ie.findInArray)(e.changedTouches, (r) => t === r.identifier);
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
function Tn(e) {
  if (e)
    try {
      if (e.body && Ht(e.body, "react-draggable-transparent-selection"), e.selection)
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
function Ht(e, t) {
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
fe.getBoundPosition = On;
fe.getControlPosition = Rn;
fe.snapToGrid = xn;
var ae = de, Ce = H;
function On(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : Nn(n);
  const o = Qe(e);
  if (typeof n == "string") {
    const {
      ownerDocument: a
    } = o, u = a.defaultView;
    let l;
    if (n === "parent" ? l = o.parentNode : l = a.querySelector(n), !(l instanceof u.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const f = l, p = u.getComputedStyle(o), h = u.getComputedStyle(f);
    n = {
      left: -o.offsetLeft + (0, ae.int)(h.paddingLeft) + (0, ae.int)(p.marginLeft),
      top: -o.offsetTop + (0, ae.int)(h.paddingTop) + (0, ae.int)(p.marginTop),
      right: (0, Ce.innerWidth)(f) - (0, Ce.outerWidth)(o) - o.offsetLeft + (0, ae.int)(h.paddingRight) - (0, ae.int)(p.marginRight),
      bottom: (0, Ce.innerHeight)(f) - (0, Ce.outerHeight)(o) - o.offsetTop + (0, ae.int)(h.paddingBottom) - (0, ae.int)(p.marginBottom)
    };
  }
  return (0, ae.isNum)(n.right) && (t = Math.min(t, n.right)), (0, ae.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, ae.isNum)(n.left) && (t = Math.max(t, n.left)), (0, ae.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
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
  const o = Qe(r), a = r.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, Ce.offsetXYFromParent)(n || e, a, r.props.scale);
}
function _n(e, t, r) {
  const n = !(0, ae.isNum)(e.lastX), o = Qe(e);
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
function Qe(e) {
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
var Ve = kn(pe), re = Je(Wt), An = Je(Nt), Z = H, me = fe, Xe = de, Pe = Je(ke);
function Je(e) {
  return e && e.__esModule ? e : { default: e };
}
function Kt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Kt = function(n) {
    return n ? r : t;
  })(e);
}
function kn(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Kt(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var u = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      u && (u.get || u.set) ? Object.defineProperty(n, a, u) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
function te(e, t, r) {
  return t = In(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function In(e) {
  var t = Ln(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Ln(e, t) {
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
let he = le.mouse, Ie = class extends Ve.Component {
  constructor() {
    super(...arguments), te(this, "dragging", !1), te(this, "lastX", NaN), te(this, "lastY", NaN), te(this, "touchIdentifier", null), te(this, "mounted", !1), te(this, "handleDragStart", (t) => {
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
      const a = (0, me.getControlPosition)(t, o, this);
      if (a == null)
        return;
      const {
        x: u,
        y: l
      } = a, f = (0, me.createCoreData)(this, u, l);
      (0, Pe.default)("DraggableCore: handleDragStart: %j", f), (0, Pe.default)("calling", this.props.onStart), !(this.props.onStart(t, f) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, Z.addUserSelectStyles)(n), this.dragging = !0, this.lastX = u, this.lastY = l, (0, Z.addEvent)(n, he.move, this.handleDrag), (0, Z.addEvent)(n, he.stop, this.handleDragStop));
    }), te(this, "handleDrag", (t) => {
      const r = (0, me.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let l = n - this.lastX, f = o - this.lastY;
        if ([l, f] = (0, me.snapToGrid)(this.props.grid, l, f), !l && !f)
          return;
        n = this.lastX + l, o = this.lastY + f;
      }
      const a = (0, me.createCoreData)(this, n, o);
      if ((0, Pe.default)("DraggableCore: handleDrag: %j", a), this.props.onDrag(t, a) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const f = document.createEvent("MouseEvents");
          f.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(f);
        }
        return;
      }
      this.lastX = n, this.lastY = o;
    }), te(this, "handleDragStop", (t) => {
      if (!this.dragging)
        return;
      const r = (0, me.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let f = n - this.lastX || 0, p = o - this.lastY || 0;
        [f, p] = (0, me.snapToGrid)(this.props.grid, f, p), n = this.lastX + f, o = this.lastY + p;
      }
      const a = (0, me.createCoreData)(this, n, o);
      if (this.props.onStop(t, a) === !1 || this.mounted === !1)
        return !1;
      const l = this.findDOMNode();
      l && this.props.enableUserSelectHack && (0, Z.removeUserSelectStyles)(l.ownerDocument), (0, Pe.default)("DraggableCore: handleDragStop: %j", a), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, l && ((0, Pe.default)("DraggableCore: Removing handlers"), (0, Z.removeEvent)(l.ownerDocument, he.move, this.handleDrag), (0, Z.removeEvent)(l.ownerDocument, he.stop, this.handleDragStop));
    }), te(this, "onMouseDown", (t) => (he = le.mouse, this.handleDragStart(t))), te(this, "onMouseUp", (t) => (he = le.mouse, this.handleDragStop(t))), te(this, "onTouchStart", (t) => (he = le.touch, this.handleDragStart(t))), te(this, "onTouchEnd", (t) => (he = le.touch, this.handleDragStop(t)));
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
Ae.default = Ie;
te(Ie, "displayName", "DraggableCore");
te(Ie, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: re.default.bool,
  children: re.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: re.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: re.default.bool,
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
  grid: re.default.arrayOf(re.default.number),
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
  handle: re.default.string,
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
  cancel: re.default.string,
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
  nodeRef: re.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: re.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: re.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: re.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: re.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: re.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: Xe.dontSetMe,
  style: Xe.dontSetMe,
  transform: Xe.dontSetMe
});
te(Ie, "defaultProps", {
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
      return f.default;
    }
  }), e.default = void 0;
  var t = P(pe), r = h(Wt), n = h(Nt), o = h(tn), a = H, u = fe, l = de, f = h(Ae), p = h(ke);
  function h(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function y(C) {
    if (typeof WeakMap != "function")
      return null;
    var g = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap();
    return (y = function(i) {
      return i ? b : g;
    })(C);
  }
  function P(C, g) {
    if (!g && C && C.__esModule)
      return C;
    if (C === null || typeof C != "object" && typeof C != "function")
      return { default: C };
    var b = y(g);
    if (b && b.has(C))
      return b.get(C);
    var i = {}, N = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var D in C)
      if (D !== "default" && Object.prototype.hasOwnProperty.call(C, D)) {
        var B = N ? Object.getOwnPropertyDescriptor(C, D) : null;
        B && (B.get || B.set) ? Object.defineProperty(i, D, B) : i[D] = C[D];
      }
    return i.default = C, b && b.set(C, i), i;
  }
  function w() {
    return w = Object.assign ? Object.assign.bind() : function(C) {
      for (var g = 1; g < arguments.length; g++) {
        var b = arguments[g];
        for (var i in b)
          Object.prototype.hasOwnProperty.call(b, i) && (C[i] = b[i]);
      }
      return C;
    }, w.apply(this, arguments);
  }
  function Y(C, g, b) {
    return g = M(g), g in C ? Object.defineProperty(C, g, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : C[g] = b, C;
  }
  function M(C) {
    var g = R(C, "string");
    return typeof g == "symbol" ? g : String(g);
  }
  function R(C, g) {
    if (typeof C != "object" || C === null)
      return C;
    var b = C[Symbol.toPrimitive];
    if (b !== void 0) {
      var i = b.call(C, g || "default");
      if (typeof i != "object")
        return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (g === "string" ? String : Number)(C);
  }
  class j extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(g, b) {
      let {
        position: i
      } = g, {
        prevPropsPosition: N
      } = b;
      return i && (!N || i.x !== N.x || i.y !== N.y) ? ((0, p.default)("Draggable: getDerivedStateFromProps %j", {
        position: i,
        prevPropsPosition: N
      }), {
        x: i.x,
        y: i.y,
        prevPropsPosition: {
          ...i
        }
      }) : null;
    }
    constructor(g) {
      super(g), Y(this, "onDragStart", (b, i) => {
        if ((0, p.default)("Draggable: onDragStart: %j", i), this.props.onStart(b, (0, u.createDraggableData)(this, i)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), Y(this, "onDrag", (b, i) => {
        if (!this.state.dragging)
          return !1;
        (0, p.default)("Draggable: onDrag: %j", i);
        const N = (0, u.createDraggableData)(this, i), D = {
          x: N.x,
          y: N.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: k,
            y: X
          } = D;
          D.x += this.state.slackX, D.y += this.state.slackY;
          const [K, T] = (0, u.getBoundPosition)(this, D.x, D.y);
          D.x = K, D.y = T, D.slackX = this.state.slackX + (k - D.x), D.slackY = this.state.slackY + (X - D.y), N.x = D.x, N.y = D.y, N.deltaX = D.x - this.state.x, N.deltaY = D.y - this.state.y;
        }
        if (this.props.onDrag(b, N) === !1)
          return !1;
        this.setState(D);
      }), Y(this, "onDragStop", (b, i) => {
        if (!this.state.dragging || this.props.onStop(b, (0, u.createDraggableData)(this, i)) === !1)
          return !1;
        (0, p.default)("Draggable: onDragStop: %j", i);
        const D = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: k,
            y: X
          } = this.props.position;
          D.x = k, D.y = X;
        }
        this.setState(D);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: g.position ? g.position.x : g.defaultPosition.x,
        y: g.position ? g.position.y : g.defaultPosition.y,
        prevPropsPosition: {
          ...g.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, g.position && !(g.onDrag || g.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
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
      var g, b;
      return (g = (b = this.props) === null || b === void 0 || (b = b.nodeRef) === null || b === void 0 ? void 0 : b.current) !== null && g !== void 0 ? g : n.default.findDOMNode(this);
    }
    render() {
      const {
        axis: g,
        bounds: b,
        children: i,
        defaultPosition: N,
        defaultClassName: D,
        defaultClassNameDragging: B,
        defaultClassNameDragged: k,
        position: X,
        positionOffset: K,
        scale: T,
        ...V
      } = this.props;
      let U = {}, J = null;
      const I = !!!X || this.state.dragging, G = X || N, ue = {
        // Set left if horizontal drag is enabled
        x: (0, u.canDragX)(this) && I ? this.state.x : G.x,
        // Set top if vertical drag is enabled
        y: (0, u.canDragY)(this) && I ? this.state.y : G.y
      };
      this.state.isElementSVG ? J = (0, a.createSVGTransform)(ue, K) : U = (0, a.createCSSTransform)(ue, K);
      const d = (0, o.default)(i.props.className || "", D, {
        [B]: this.state.dragging,
        [k]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(f.default, w({}, V, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(i), {
        className: d,
        style: {
          ...i.props.style,
          ...U
        },
        transform: J
      }));
    }
  }
  e.default = j, Y(j, "displayName", "Draggable"), Y(j, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ...f.default.propTypes,
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
    className: l.dontSetMe,
    style: l.dontSetMe,
    transform: l.dontSetMe
  }), Y(j, "defaultProps", {
    ...f.default.defaultProps,
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
  default: Qt,
  DraggableCore: $n
} = Yt;
Fe.exports = Qt;
Fe.exports.default = Qt;
Fe.exports.DraggableCore = $n;
var Yn = Fe.exports;
const qn = /* @__PURE__ */ Nr(Yn);
const jn = (e) => {
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
}, Wn = ce(function(t, r) {
  const { formLayout: n, context: o } = t, { formData: a } = o, u = se({}), l = jn(t), f = "palmyra-form-field-data", p = wt(() => (h) => At(h, u, h.label), [a.data]);
  return /* @__PURE__ */ s("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: n.fields.map((h, y) => /* @__PURE__ */ s("div", { className: l, children: /* @__PURE__ */ s("div", { className: f, children: p(h) }) }, h.attribute)) });
});
function zn(e) {
  return /* @__PURE__ */ s(
    qn,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ s(pr, { ...e })
    }
  );
}
const Vn = ({ columns: e, isOpen: t, onClose: r, setFilter: n, defaultFilter: o = {} }) => {
  var { getFieldManager: a, getFilterData: u } = Fr(o);
  const l = () => {
    n({});
  }, f = () => {
    var P = u();
    n && n(P);
  }, p = () => {
    r();
  }, h = (P) => {
    P.keyCode === 27 && p();
  }, y = _r(e);
  return /* @__PURE__ */ s("div", { className: "grid-filter-container", children: /* @__PURE__ */ s(
    fr,
    {
      open: t,
      onClose: p,
      PaperComponent: zn,
      onKeyDown: h,
      PaperProps: { sx: { minWidth: "500px" } },
      children: /* @__PURE__ */ s(xt, { onClickAway: r, children: /* @__PURE__ */ Q("div", { children: [
        /* @__PURE__ */ Q("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ s("div", { className: "grid-header-text-container", children: /* @__PURE__ */ s("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ s("div", { className: "grid-header-icon-container", onClick: p, children: /* @__PURE__ */ s(Or, { className: "filter-cancel-icon" }) })
        ] }),
        /* @__PURE__ */ s("span", { className: "filter-header-border" }),
        /* @__PURE__ */ s("div", { className: "grid-filter-content", children: /* @__PURE__ */ s(_e.Provider, { value: a, children: /* @__PURE__ */ s(
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
        /* @__PURE__ */ Q("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ s(Se, { className: "filter-reset-btn", disableRipple: !0, onClick: l, children: "Reset" }),
          /* @__PURE__ */ s(Se, { className: "filter-button", disableRipple: !0, onClick: f, children: "Filter" })
        ] })
      ] }) })
    }
  ) });
}, Xn = ce(function(t, r) {
  var L;
  const { columns: n, children: o, EmptyChild: a, onRowClick: u, quickSearch: l } = t, f = a || wr, p = t.customizer || Rr, [h, y] = ee(!1), [P, w] = ee("standard"), [Y, M] = ee(!1), [R, j] = ee(""), {
    setQueryFilter: C,
    setQuickSearch: g,
    setSortColumns: b,
    setEndPointOptions: i,
    gotoPage: N,
    setPageSize: D,
    getPageNo: B,
    refreshData: k,
    data: X,
    totalRecords: K,
    pageSizeOptions: T,
    filter: V,
    queryLimit: U
  } = Ne(t), J = r || se(null);
  ve(J, () => ({
    setFilter: ($) => {
      C($);
    },
    refresh: () => {
      k();
    },
    resetFilter() {
      C({});
    },
    setEndPointOptions: ($) => {
      i($);
    },
    addFilter: ($, m) => {
      C((ne) => (ne[$] = m, { ...ne }));
    }
  }), []);
  const F = ($, m) => {
    N(m);
  }, I = Pr(n, p), G = ($) => {
    w($);
  }, ue = () => {
    y(!h);
  }, d = () => P === "compact" ? { padding: "3px" } : P === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, v = () => P === "compact" ? { padding: "3px" } : P === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, _ = () => {
    var $;
    switch (P) {
      case "compact":
        $ = /* @__PURE__ */ s(nt, { className: "density-icon" });
        break;
      case "comfortable":
        $ = /* @__PURE__ */ s(ot, { className: "density-icon" });
        break;
      default:
        $ = /* @__PURE__ */ s(rt, { className: "grid-button-icon" });
        break;
    }
    return $;
  }, E = ($) => {
    const m = $.target.value;
    j(m), m ? g(m) : C({});
  }, O = ($) => {
    u && u($);
  }, A = ($) => {
    const m = parseInt($.target.value, 10);
    D(m);
  }, c = () => {
    console.info("Export Clicked");
  }, S = 200, x = !!t.pageSize;
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ Q("div", { children: [
    o,
    /* @__PURE__ */ Q("div", { className: "grid-header", children: [
      /* @__PURE__ */ s("div", { className: "grid-header-filter", children: !!l && /* @__PURE__ */ s(
        Ge,
        {
          sx: { width: S },
          type: "text",
          value: R,
          onChange: E,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ s(Dt, { position: "end", children: /* @__PURE__ */ s($t, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ s(xt, { onClickAway: () => {
        y(!1);
      }, children: /* @__PURE__ */ Q("div", { className: "grid-header-button grid-density-btn", onClick: ue, children: [
        /* @__PURE__ */ s(Te, { title: "Density", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, children: _() }) }),
        h && /* @__PURE__ */ s("div", { className: "density-dropdown-content", children: /* @__PURE__ */ Q("ul", { children: [
          /* @__PURE__ */ Q("li", { onClick: () => G("standard"), children: [
            /* @__PURE__ */ s(rt, { className: "density-icon" }),
            /* @__PURE__ */ s("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ Q("li", { onClick: () => G("compact"), children: [
            /* @__PURE__ */ s(nt, { className: "density-icon" }),
            /* @__PURE__ */ s("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ Q("li", { onClick: () => G("comfortable"), children: [
            /* @__PURE__ */ s(ot, { className: "density-icon" }),
            /* @__PURE__ */ s("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      (L = n[0]) != null && L.searchable ? /* @__PURE__ */ Q("div", { className: "grid-header-button grid-filter-btn", children: [
        /* @__PURE__ */ s(Te, { title: "Filter", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, onClick: () => M(!0), children: /* @__PURE__ */ s(xr, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ s(
          Vn,
          {
            columns: n,
            setFilter: C,
            defaultFilter: V,
            isOpen: Y,
            onClose: () => M(!1)
          }
        )
      ] }) : "",
      /* @__PURE__ */ s("div", { className: "grid-header-button grid-export-btn", onClick: c, children: /* @__PURE__ */ s(Te, { title: "Export", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ s(Dr, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ s("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ s(Te, { title: "New", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ s(Er, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ s(Me, {})
    ] }),
    /* @__PURE__ */ s("div", { className: "grid-table", children: /* @__PURE__ */ s(
      Tr,
      {
        columnDefs: I,
        EmptyChild: f,
        rowData: X,
        onRowClick: O,
        onRowStyle: d,
        onHeaderStyle: v,
        onSortColumn: b
      }
    ) }),
    /* @__PURE__ */ s("div", { className: "grid-header", children: /* @__PURE__ */ s("div", { className: "grid-filter", children: x && /* @__PURE__ */ s(
      Et,
      {
        component: "div",
        count: K || 0,
        page: B(),
        onPageChange: F,
        rowsPerPage: U.limit,
        rowsPerPageOptions: T || [],
        onRowsPerPageChange: A
      }
    ) }) })
  ] }) });
}), sa = ce(function(t, r) {
  const { columns: n, endPoint: o, storeFactory: a, layoutParams: u, pagination: l } = t, f = t.quickSearch || "", p = se(null), h = (P, w) => {
    console.log(w);
  };
  ye(() => {
    var P = at.subscribe(t.topic, h);
    return () => {
      at.unsubscribe(P);
    };
  }, [t.topic]), r && ve(r, () => ({
    setFilter: (P) => {
      p.current.setFilter(P);
    },
    refresh: () => {
      p.current.refresh();
    },
    resetFilter() {
      p.current.resetFilter();
    },
    setEndPointOptions: (P) => {
      p.current.setEndPointOptions(P);
    },
    addFilter: (P, w) => {
      p.current.addFilter(P, w);
    }
  }), [n, o]);
  const y = {
    fields: n,
    pagination: l,
    quickSearch: f,
    storeOptions: {
      endPoint: o
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ s(Me, { children: /* @__PURE__ */ s(Ue.Provider, { value: a, children: /* @__PURE__ */ s(Jt, { layout: y, context: u, customizer: t.customizer, ref: p }) }) });
}), Bn = ce(function(t, r) {
  const n = t.layout, [o, a] = ee(n.fields), u = n.pagination ? n.pagination : [15], l = De(Ue), f = De(Pt);
  var p = n.storeOptions || {}, h = {};
  vr(h, p, f);
  const y = l.getGridStore(h, n.storeOptions.endPoint);
  ye(() => {
    p.hasLayout && y.queryLayout({}).then((Y) => {
      a(Y.columns);
    });
  }, []);
  const { onClick: P, onNewClick: w } = Ar(n.actionOptions, f);
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    Xn,
    {
      columns: o,
      store: y,
      pageSize: u,
      onRowClick: P,
      onNewClick: w,
      customizer: t.customizer,
      quickSearch: n.quickSearch,
      ref: r
    }
  ) });
}), Jt = Bn, Un = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Container || Mt;
  return /* @__PURE__ */ s(Ft, { fallback: /* @__PURE__ */ s("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ s(n, { ...t, children: ((a) => /* @__PURE__ */ s(
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
      return /* @__PURE__ */ s(kt, { ...e });
    case "view":
      return /* @__PURE__ */ s(Ir, { ...e });
    case "grid":
      return /* @__PURE__ */ s(Un, { ...e });
    case "chart":
      return /* @__PURE__ */ s(gr, { ...e });
    default:
      return /* @__PURE__ */ s(kr, { ...e });
  }
};
function Hn(e, t) {
  var r = e || 1, n = t;
  return {
    w: r,
    h: n
  };
}
const Zt = (e) => {
  const { layout: t, context: r } = e, n = t.sections;
  function o(a, u, l) {
    const { w: f, h: p } = Hn(a.width, a.height);
    return /* @__PURE__ */ s(mr, { sx: { width: f, height: p }, children: /* @__PURE__ */ s(
      Gn,
      {
        layout: a,
        context: u
      }
    ) }, (a.name || "tab") + l);
  }
  return /* @__PURE__ */ s("div", { style: { display: "flex", flexWrap: "wrap" }, children: n.map((a, u) => o(a, r, u)) });
}, bt = ce(function(t, r) {
  const { layout: n } = t;
  ve(r, () => ({
    resetFilter() {
    }
  }), []);
  const o = {}, a = n.tabs;
  return /* @__PURE__ */ s("div", { children: a.map((u, l) => /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    Zt,
    {
      layout: u,
      context: o
    }
  ) }, u.name + l)) });
}), Kn = (e) => {
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
}, St = ce(function(t, r) {
  var h;
  const n = t.data || {}, { layout: o } = t;
  var { getFieldManager: a, getFormData: u, isFormValid: l } = Lr(n, (h = t.callbacks) == null ? void 0 : h.onFormValidChange, Kn(t.mode));
  ve(r, () => ({
    getData() {
      return u();
    },
    isValid() {
      return l();
    }
  }), []);
  const f = { formData: n }, p = o.tabs;
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(_e.Provider, { value: a, children: p.map((y, P) => /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    Zt,
    {
      layout: y,
      context: f
    }
  ) }, y.name + P)) }) });
}), Qn = (e) => {
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
}, la = ce(function(t, r) {
  const [n, o] = ee(t.layout), a = t.mode ? t.mode : n.type ? n.type : "grid", u = t.layoutParams || {}, l = Qn(a), f = se(0);
  return ye(() => {
    o(t.layout), f.current < 999999 ? f.current++ : f.current = 0;
  }, [t.layout]), /* @__PURE__ */ s(Ft, { fallback: /* @__PURE__ */ s("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ s(Ue.Provider, { value: t.storeFactory, children: /* @__PURE__ */ s(Pt.Provider, { value: u, children: /* @__PURE__ */ s(l, { ...t, ref: (p) => {
    r && (r.current = p);
  } }, f.current) }) }) });
}), ca = ce(function(t, r) {
  const { children: n, Child: o, childProps: a, pageSize: u } = t, l = r || se(null), {
    setQueryFilter: f,
    refreshData: p,
    setQuickSearch: h,
    gotoPage: y,
    setPageSize: P,
    getPageNo: w,
    data: Y,
    totalRecords: M,
    pageSizeOptions: R,
    queryLimit: j
  } = Ne(t), C = t.listKeyProvider || ((k, X) => X);
  ve(l, () => ({
    setFilter(k) {
      f(k);
    },
    refresh: () => {
      p();
    },
    gotoPage(k) {
      y(k);
    },
    nextPage() {
    },
    prevPage() {
    }
  }), []);
  const g = (k, X) => {
    y(X);
  }, b = (k) => {
    const X = k.target.value;
    h(X);
  }, i = (k) => {
    const X = parseInt(k.target.value, 10);
    P(X);
  }, N = 200, D = !!u, B = !!t.quickSearch;
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ Q("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ Q("div", { children: [
      /* @__PURE__ */ Q("div", { className: "card-header", children: [
        /* @__PURE__ */ s("div", { className: "card-filter", children: B && /* @__PURE__ */ s(
          Ge,
          {
            sx: { width: N },
            type: "text",
            onChange: b,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ s(Dt, { position: "end", children: /* @__PURE__ */ s($t, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ s("div", { className: "card-pagination", children: D && /* @__PURE__ */ s(
          Et,
          {
            component: "div",
            count: M || 0,
            page: w(),
            onPageChange: g,
            rowsPerPage: j.limit,
            rowsPerPageOptions: R || [],
            onRowsPerPageChange: i
          }
        ) })
      ] }),
      /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
        hr,
        {
          Child: o,
          childKeyProvider: C,
          dataList: Y,
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
