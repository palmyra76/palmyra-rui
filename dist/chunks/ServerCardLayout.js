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
import { FieldManagerContext as _e, StoreFactoryContext as Ue, LayoutParamsContext as Ct } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as s, jsxs as Q, Fragment as Me } from "react/jsx-runtime";
import pe, { useState as ee, useRef as ie, useEffect as ye, forwardRef as le, useContext as De, useImperativeHandle as ve, useMemo as Pt } from "react";
import { FormControlLabel as et, Checkbox as tt, FormControl as wt, FormHelperText as Tt, Autocomplete as ur, TextField as Ge, CircularProgress as dr, Dialog as fr, ClickAwayListener as Ot, Button as Se, Paper as pr, InputAdornment as xt, Tooltip as Te, TablePagination as Dt, Box as mr } from "@mui/material";
import hr from "../palmyra/layout/card/CardLayout.js";
import gr from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Et, getFieldLabel as Rt } from "../palmyra/mui/form/MuiUtil.js";
import _t from "../palmyra/mui/form/FieldDecorator.js";
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
import { d as Lr } from "./PalmyraFieldManager.js";
import { useKeyValue as $r } from "../palmyra/utils/pubsub/PubSubHelper.js";
const Ne = (e) => {
  const { store: t, quickSearch: r } = e, n = e.fetchAll != !1, [a, o] = ee(e.endPointOptions), [u, l] = ee(null), [f, p] = e.filterTopic ? $r(e.filterTopic, {}) : ee({}), [m, v] = ee({}), P = ie(e.initialFetch == !1), E = e.pageSize ? e.pageSize : 15;
  var I = E instanceof Array ? E : [E], A = E instanceof Array ? E[0] : E;
  const [R, j] = ee({ limit: A, offset: 0 }), [C, h] = ee(null), y = () => Math.round(R.offset / R.limit), i = () => R.limit, M = (F) => {
    j({ ...R, offset: F * A });
  }, O = (F) => {
    const L = F > 10 || F == -1 ? F : 15;
    j({ ...R, limit: L });
  }, G = () => f ? Object.keys(f).length == 0 : !1, W = (F) => {
    h((L) => (setTimeout(() => {
      e.onDataChange && e.onDataChange(C, L);
    }, 300), F));
  };
  ye(() => {
    if (P.current) {
      P.current = !1;
      return;
    }
    (n || !G()) && z();
  }, [R, f, m]);
  const z = () => {
    const F = { filter: f, sortOrder: m, total: !0, endPointVars: a, ...R };
    if (t)
      try {
        t.query(F).then((L) => {
          W(L.result), l(L.total);
        }).catch((L) => {
          var U = L.response ? L.response : L;
          console.error("error while fetching", U), T();
        });
      } catch (L) {
        console.error(L), K();
      }
    else
      console.error("Store is not provided for the Grid"), K();
  }, K = () => {
    W([]), l(0);
  }, T = () => {
    W(void 0), l(null);
  };
  return {
    setQueryFilter: (F) => {
      typeof F == "function" || F && Object.keys(F).length > 0 ? p(F) : p({});
    },
    setQuickSearch: (F) => {
      const L = r;
      p(F ? (U) => (U[L] = F, { ...U }) : (U) => (delete U[L], { ...U }));
    },
    setSortColumns: (F) => {
      v(F);
    },
    setEndPointOptions: o,
    refreshData: z,
    gotoPage: M,
    setPageSize: O,
    getPageNo: y,
    getLimit: i,
    filter: f,
    queryLimit: R,
    data: C,
    totalRecords: u,
    pageSizeOptions: I
  };
};
function it(e) {
  return e ? Array.isArray(e) ? e : typeof e == "string" ? e.split(",") : (console.log(e), [e]) : [];
}
const aa = le(function(t, r) {
  const n = De(_e), a = r || ie(null), o = n(t, "checkbox", a), { mutateOptions: u, setMutateOptions: l } = o, [f, p] = ee(!1), m = it(o.data), v = o.error, P = o.eventListeners, I = { store: o.store, pageSize: -1 }, { data: A } = Ne(I), R = A, j = ie(null), C = t.lookupOptions || {}, h = C.idAttribute || "id", y = C.titleAttribute || "name", i = Ee(h) ? (T) => Re(h, T) : (T) => T[h], M = Ee(y) ? (T) => Re(y, T) : (T) => T[y];
  ve(a, () => ({
    focus() {
      j.current.focus();
    },
    isValid() {
      return !v.status;
    },
    clear() {
      o.setData("", !0);
    },
    getValue() {
      return o.getData();
    },
    setValue(T, V = !1) {
      o.setData(T, V);
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
  }), [o]);
  var O = Et(t, o.data, t.label);
  t.readonly && (O.inputProps = { readOnly: !0 });
  function G(T, V) {
    const X = it(o.data);
    var J = X.indexOf(T);
    V ? J < 0 && X.push(T) : J >= 0 && X.splice(J, 1), P.onValueChange(X.toString());
  }
  var W = {
    onBlur: P.onBlur,
    onFocus: P.onFocus,
    onChange: (T) => {
      G(T.target.value, T.target.checked);
    }
  };
  const z = (T) => {
    const V = T.toString();
    return m.includes(V);
  }, K = (T) => {
    const V = T.target.checked;
    p(V);
    var X = [];
    V && R.map((J) => {
      X.push(i(J));
    }), P.onValueChange(X.toString());
  };
  return /* @__PURE__ */ s("div", { className: t.className, children: u.visible && /* @__PURE__ */ Q(
    _t,
    {
      label: Rt(t),
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
          wt,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: v.status,
            ...O,
            children: [
              R ? R.map((T) => /* @__PURE__ */ s(
                et,
                {
                  value: i(T),
                  control: /* @__PURE__ */ s(
                    tt,
                    {
                      ...W,
                      checked: z(i(T)),
                      disabled: t.readonly
                    }
                  ),
                  label: M(T)
                },
                i(T)
              )) : /* @__PURE__ */ s("div", { children: "No options provided" }),
              /* @__PURE__ */ s(Tt, { className: "form-error-text", children: v.message })
            ]
          }
        )
      ]
    }
  ) });
}), Yr = le(function(t, r) {
  const n = De(_e), a = r || ie(null), o = n(t, "serverlookup", a), u = o.eventListeners, l = o.error, { mutateOptions: f, setMutateOptions: p } = o, m = ie(null), v = t.store || o.store, P = t.lookupOptions || {}, E = P.idAttribute || "id", I = P.titleAttribute || "name", A = P.searchAttribute || I, R = o.data, j = ie(0), [C, h] = ee([]), [y, i] = ee(""), [M, O] = ee(!1), G = M && C.length < (R ? 2 : 1), W = {
    store: v,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: A,
    initialFetch: !1
  }, z = Ne(W), { setQueryFilter: K, setEndPointOptions: T, setQuickSearch: V, totalRecords: X, refreshData: J } = z, F = z.data, L = Ee(E) ? (c) => Re(E, c) : (c) => c == null ? void 0 : c[E], U = Ee(I) ? (c) => Re(I, c) : (c) => c == null ? void 0 : c[I];
  ye(() => {
    var c = R != "" ? R : void 0;
    c && h([c]);
  }, [o.data]), ye(() => {
    const c = F ? [...F] : [], S = R != "" ? R : void 0, D = L(S), $ = U(S);
    c && D && $ && !_(c, D) && c.unshift(S), h(c), j.current < X && (j.current = X);
  }, [F, X]), ye(() => {
    yr(ce);
  }, [y, M]);
  function ce() {
    M && (y.length > 0 && y != U(R) ? V("*" + y + "*") : F ? V(null) : J());
  }
  var d = {
    onBlur: u.onBlur,
    onFocus: u.onFocus,
    onChange: (c, S) => {
      b(S);
    },
    onInputChange: (c, S) => (i(S), !0)
  };
  const b = (c) => {
    u.onValueChange(c);
  }, N = (c) => typeof c == "object" ? U(c) + "" : (console.log(c), "");
  function _(c, S) {
    return c.find((D) => {
      if (L(D) == S)
        return D;
    });
  }
  ve(a, () => ({
    focus() {
      m.current.focus();
    },
    isValid() {
      return !l.status;
    },
    clear() {
      t.multiple ? o.setData([], !0) : o.setData(void 0, !0);
    },
    getValue() {
      return o.getData();
    },
    setValue(c, S = !1) {
      o.setData(c, S);
    },
    setVisible(c) {
      p((S) => ({ ...S, visible: c }));
    },
    setRequired(c) {
      p((S) => ({ ...S, required: c }));
    },
    setReadOnly(c) {
      p((S) => ({ ...S, readonly: c }));
    },
    setAttribute(c) {
      p((S) => ({ ...S, ...c }));
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
      K((D) => (D[c] = S, { ...D }));
    },
    setDefaultFilter(c) {
    }
  }), [o]);
  var x = Et(t, R, t.label);
  f.readonly && (x.inputProps = { readOnly: !0 });
  const k = (c, S) => c instanceof Array ? c.some((D) => L(D) == L(S)) : L(c) == L(S);
  return /* @__PURE__ */ s(
    _t,
    {
      label: Rt(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ Q(wt, { fullWidth: !0, error: l.status, children: [
        /* @__PURE__ */ s(
          ur,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: t.multiple,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            isOptionEqualToValue: k,
            filterOptions: (c) => c,
            renderInput: (c) => /* @__PURE__ */ s(
              Ge,
              {
                ...c,
                inputRef: (S) => {
                  m.current = S;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                InputProps: {
                  ...c.InputProps,
                  endAdornment: /* @__PURE__ */ Q(Me, { children: [
                    G ? /* @__PURE__ */ s(dr, { color: "inherit", size: 18 }) : null,
                    c.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: N,
            ...x,
            options: C,
            open: M,
            onClose: () => {
              O(!1);
            },
            onOpen: (c) => {
              O(!0);
            },
            ...d
          }
        ),
        /* @__PURE__ */ s(Tt, { className: "form-error-text", children: l.message })
      ] })
    }
  );
}), qr = (e) => {
  const { fieldDef: t } = e;
  return /* @__PURE__ */ Q("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, ne = (e, t) => {
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
  const { type: n } = e, a = { fieldDef: e, title: r };
  switch (n) {
    case "string":
      return ne(a, ar);
    case "radio":
      return ne(a, rr);
    case "select":
      return ne(a, nr);
    case "date":
      return ne(a, er);
    case "datetime":
      return ne(a, tr);
    case "checkbox":
      return ne(a, ir);
    case "serverlookup":
      return ne(a, Yr);
    case "textarea":
      return ne(a, or);
    case "switch":
      return ne(a, sr);
    case "password":
      return ne(a, lr);
    case "float":
    case "number":
    case "numbersOnly":
      return ne(a, cr);
    case "integer":
      return ne(a, Sr);
    case "multiSelect":
      return jr();
    case "dateRange":
      return ne(a, br);
    default:
      return qr(a);
  }
}, Wr = le(function(t, r) {
  var m;
  const { formLayout: n, context: a } = t, { formData: o } = a, u = n.Container;
  ie({});
  const l = Pt(() => (v) => At(v), [o.data]);
  var f = ((m = n.options) == null ? void 0 : m.columns) || 1, p = { columns: f };
  return u ? /* @__PURE__ */ s("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((v, P) => /* @__PURE__ */ s(
    u,
    {
      index: P,
      field: v,
      label: v.title,
      options: p,
      children: l(v)
    },
    v.attribute + v.name + v.type
  )) }) : /* @__PURE__ */ s("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((v, P) => l(v)) });
}), kt = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Renderer || Wr, a = t.Container || Mt;
  const o = (u) => /* @__PURE__ */ s(
    n,
    {
      context: r,
      formLayout: u
    }
  );
  return /* @__PURE__ */ s(
    a,
    {
      hideTitle: t.hideTitle,
      title: t.title,
      name: t.name,
      children: /* @__PURE__ */ s(Cr, { columns: t.columns, children: o(t.formLayout) })
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
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, ge.apply(this, arguments);
}, zr = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
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
    var n = e.attr, a = e.size, o = e.title, u = zr(e, ["attr", "size", "title"]), l = a || r.size || "1em", f;
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
    }), o && pe.createElement("title", null, o), e.children);
  };
  return st !== void 0 ? pe.createElement(st.Consumer, null, function(r) {
    return t(r);
  }) : t(It);
}
function $t(e) {
  return Vr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
}
var Fe = { exports: {} }, Yt = {}, Be = { exports: {} }, Oe = { exports: {} }, Y = {};
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
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, P = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, A = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function h(i) {
    if (typeof i == "object" && i !== null) {
      var M = i.$$typeof;
      switch (M) {
        case t:
          switch (i = i.type, i) {
            case f:
            case p:
            case n:
            case o:
            case a:
            case v:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case l:
                case m:
                case I:
                case E:
                case u:
                  return i;
                default:
                  return M;
              }
          }
        case r:
          return M;
      }
    }
  }
  function y(i) {
    return h(i) === p;
  }
  return Y.AsyncMode = f, Y.ConcurrentMode = p, Y.ContextConsumer = l, Y.ContextProvider = u, Y.Element = t, Y.ForwardRef = m, Y.Fragment = n, Y.Lazy = I, Y.Memo = E, Y.Portal = r, Y.Profiler = o, Y.StrictMode = a, Y.Suspense = v, Y.isAsyncMode = function(i) {
    return y(i) || h(i) === f;
  }, Y.isConcurrentMode = y, Y.isContextConsumer = function(i) {
    return h(i) === l;
  }, Y.isContextProvider = function(i) {
    return h(i) === u;
  }, Y.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === t;
  }, Y.isForwardRef = function(i) {
    return h(i) === m;
  }, Y.isFragment = function(i) {
    return h(i) === n;
  }, Y.isLazy = function(i) {
    return h(i) === I;
  }, Y.isMemo = function(i) {
    return h(i) === E;
  }, Y.isPortal = function(i) {
    return h(i) === r;
  }, Y.isProfiler = function(i) {
    return h(i) === o;
  }, Y.isStrictMode = function(i) {
    return h(i) === a;
  }, Y.isSuspense = function(i) {
    return h(i) === v;
  }, Y.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === n || i === p || i === o || i === a || i === v || i === P || typeof i == "object" && i !== null && (i.$$typeof === I || i.$$typeof === E || i.$$typeof === u || i.$$typeof === l || i.$$typeof === m || i.$$typeof === R || i.$$typeof === j || i.$$typeof === C || i.$$typeof === A);
  }, Y.typeOf = h, Y;
}
var q = {};
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
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, P = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, A = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function h(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === p || g === o || g === a || g === v || g === P || typeof g == "object" && g !== null && (g.$$typeof === I || g.$$typeof === E || g.$$typeof === u || g.$$typeof === l || g.$$typeof === m || g.$$typeof === R || g.$$typeof === j || g.$$typeof === C || g.$$typeof === A);
    }
    function y(g) {
      if (typeof g == "object" && g !== null) {
        var ue = g.$$typeof;
        switch (ue) {
          case t:
            var we = g.type;
            switch (we) {
              case f:
              case p:
              case n:
              case o:
              case a:
              case v:
                return we;
              default:
                var Ze = we && we.$$typeof;
                switch (Ze) {
                  case l:
                  case m:
                  case I:
                  case E:
                  case u:
                    return Ze;
                  default:
                    return ue;
                }
            }
          case r:
            return ue;
        }
      }
    }
    var i = f, M = p, O = l, G = u, W = t, z = m, K = n, T = I, V = E, X = r, J = o, F = a, L = v, U = !1;
    function ce(g) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(g) || y(g) === f;
    }
    function d(g) {
      return y(g) === p;
    }
    function b(g) {
      return y(g) === l;
    }
    function N(g) {
      return y(g) === u;
    }
    function _(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function x(g) {
      return y(g) === m;
    }
    function k(g) {
      return y(g) === n;
    }
    function c(g) {
      return y(g) === I;
    }
    function S(g) {
      return y(g) === E;
    }
    function D(g) {
      return y(g) === r;
    }
    function $(g) {
      return y(g) === o;
    }
    function w(g) {
      return y(g) === a;
    }
    function B(g) {
      return y(g) === v;
    }
    q.AsyncMode = i, q.ConcurrentMode = M, q.ContextConsumer = O, q.ContextProvider = G, q.Element = W, q.ForwardRef = z, q.Fragment = K, q.Lazy = T, q.Memo = V, q.Portal = X, q.Profiler = J, q.StrictMode = F, q.Suspense = L, q.isAsyncMode = ce, q.isConcurrentMode = d, q.isContextConsumer = b, q.isContextProvider = N, q.isElement = _, q.isForwardRef = x, q.isFragment = k, q.isLazy = c, q.isMemo = S, q.isPortal = D, q.isProfiler = $, q.isStrictMode = w, q.isSuspense = B, q.isValidElementType = h, q.typeOf = y;
  }()), q;
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
  function n(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var u = {}, l = 0; l < 10; l++)
        u["_" + String.fromCharCode(l)] = l;
      var f = Object.getOwnPropertyNames(u).map(function(m) {
        return u[m];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        p[m] = m;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Le = a() ? Object.assign : function(o, u) {
    for (var l, f = n(o), p, m = 1; m < arguments.length; m++) {
      l = Object(arguments[m]);
      for (var v in l)
        t.call(l, v) && (f[v] = l[v]);
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
    e = function(o) {
      var u = "Warning: " + o;
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
  }
  function a(o, u, l, f, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in o)
        if (n(o, m)) {
          var v;
          try {
            if (typeof o[m] != "function") {
              var P = Error(
                (f || "React class") + ": " + l + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw P.name = "Invariant Violation", P;
            }
            v = o[m](u, m, f, l, null, t);
          } catch (I) {
            v = I;
          }
          if (v && !(v instanceof Error) && e(
            (f || "React class") + ": type specification of " + l + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in r)) {
            r[v.message] = !0;
            var E = p ? p() : "";
            e(
              "Failed " + l + " type: " + v.message + (E ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, qe = a, qe;
}
var je, ht;
function Kr() {
  if (ht)
    return je;
  ht = 1;
  var e = qt(), t = Gr(), r = He(), n = jt(), a = Hr(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(l) {
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
    var p = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function v(d) {
      var b = d && (p && d[p] || d[m]);
      if (typeof b == "function")
        return b;
    }
    var P = "<<anonymous>>", E = {
      array: j("array"),
      bigint: j("bigint"),
      bool: j("boolean"),
      func: j("function"),
      number: j("number"),
      object: j("object"),
      string: j("string"),
      symbol: j("symbol"),
      any: C(),
      arrayOf: h,
      element: y(),
      elementType: i(),
      instanceOf: M,
      node: z(),
      objectOf: G,
      oneOf: O,
      oneOfType: W,
      shape: T,
      exact: V
    };
    function I(d, b) {
      return d === b ? d !== 0 || 1 / d === 1 / b : d !== d && b !== b;
    }
    function A(d, b) {
      this.message = d, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    A.prototype = Error.prototype;
    function R(d) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, N = 0;
      function _(k, c, S, D, $, w, B) {
        if (D = D || P, w = w || S, B !== r) {
          if (f) {
            var g = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw g.name = "Invariant Violation", g;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = D + ":" + S;
            !b[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            N < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + w + "` prop on `" + D + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[ue] = !0, N++);
          }
        }
        return c[S] == null ? k ? c[S] === null ? new A("The " + $ + " `" + w + "` is marked as required " + ("in `" + D + "`, but its value is `null`.")) : new A("The " + $ + " `" + w + "` is marked as required in " + ("`" + D + "`, but its value is `undefined`.")) : null : d(c, S, D, $, w);
      }
      var x = _.bind(null, !1);
      return x.isRequired = _.bind(null, !0), x;
    }
    function j(d) {
      function b(N, _, x, k, c, S) {
        var D = N[_], $ = F(D);
        if ($ !== d) {
          var w = L(D);
          return new A(
            "Invalid " + k + " `" + c + "` of type " + ("`" + w + "` supplied to `" + x + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return R(b);
    }
    function C() {
      return R(u);
    }
    function h(d) {
      function b(N, _, x, k, c) {
        if (typeof d != "function")
          return new A("Property `" + c + "` of component `" + x + "` has invalid PropType notation inside arrayOf.");
        var S = N[_];
        if (!Array.isArray(S)) {
          var D = F(S);
          return new A("Invalid " + k + " `" + c + "` of type " + ("`" + D + "` supplied to `" + x + "`, expected an array."));
        }
        for (var $ = 0; $ < S.length; $++) {
          var w = d(S, $, x, k, c + "[" + $ + "]", r);
          if (w instanceof Error)
            return w;
        }
        return null;
      }
      return R(b);
    }
    function y() {
      function d(b, N, _, x, k) {
        var c = b[N];
        if (!l(c)) {
          var S = F(c);
          return new A("Invalid " + x + " `" + k + "` of type " + ("`" + S + "` supplied to `" + _ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return R(d);
    }
    function i() {
      function d(b, N, _, x, k) {
        var c = b[N];
        if (!e.isValidElementType(c)) {
          var S = F(c);
          return new A("Invalid " + x + " `" + k + "` of type " + ("`" + S + "` supplied to `" + _ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return R(d);
    }
    function M(d) {
      function b(N, _, x, k, c) {
        if (!(N[_] instanceof d)) {
          var S = d.name || P, D = ce(N[_]);
          return new A("Invalid " + k + " `" + c + "` of type " + ("`" + D + "` supplied to `" + x + "`, expected ") + ("instance of `" + S + "`."));
        }
        return null;
      }
      return R(b);
    }
    function O(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), u;
      function b(N, _, x, k, c) {
        for (var S = N[_], D = 0; D < d.length; D++)
          if (I(S, d[D]))
            return null;
        var $ = JSON.stringify(d, function(B, g) {
          var ue = L(g);
          return ue === "symbol" ? String(g) : g;
        });
        return new A("Invalid " + k + " `" + c + "` of value `" + String(S) + "` " + ("supplied to `" + x + "`, expected one of " + $ + "."));
      }
      return R(b);
    }
    function G(d) {
      function b(N, _, x, k, c) {
        if (typeof d != "function")
          return new A("Property `" + c + "` of component `" + x + "` has invalid PropType notation inside objectOf.");
        var S = N[_], D = F(S);
        if (D !== "object")
          return new A("Invalid " + k + " `" + c + "` of type " + ("`" + D + "` supplied to `" + x + "`, expected an object."));
        for (var $ in S)
          if (n(S, $)) {
            var w = d(S, $, x, k, c + "." + $, r);
            if (w instanceof Error)
              return w;
          }
        return null;
      }
      return R(b);
    }
    function W(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var b = 0; b < d.length; b++) {
        var N = d[b];
        if (typeof N != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + U(N) + " at index " + b + "."
          ), u;
      }
      function _(x, k, c, S, D) {
        for (var $ = [], w = 0; w < d.length; w++) {
          var B = d[w], g = B(x, k, c, S, D, r);
          if (g == null)
            return null;
          g.data && n(g.data, "expectedType") && $.push(g.data.expectedType);
        }
        var ue = $.length > 0 ? ", expected one of type [" + $.join(", ") + "]" : "";
        return new A("Invalid " + S + " `" + D + "` supplied to " + ("`" + c + "`" + ue + "."));
      }
      return R(_);
    }
    function z() {
      function d(b, N, _, x, k) {
        return X(b[N]) ? null : new A("Invalid " + x + " `" + k + "` supplied to " + ("`" + _ + "`, expected a ReactNode."));
      }
      return R(d);
    }
    function K(d, b, N, _, x) {
      return new A(
        (d || "React class") + ": " + b + " type `" + N + "." + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + x + "`."
      );
    }
    function T(d) {
      function b(N, _, x, k, c) {
        var S = N[_], D = F(S);
        if (D !== "object")
          return new A("Invalid " + k + " `" + c + "` of type `" + D + "` " + ("supplied to `" + x + "`, expected `object`."));
        for (var $ in d) {
          var w = d[$];
          if (typeof w != "function")
            return K(x, k, c, $, L(w));
          var B = w(S, $, x, k, c + "." + $, r);
          if (B)
            return B;
        }
        return null;
      }
      return R(b);
    }
    function V(d) {
      function b(N, _, x, k, c) {
        var S = N[_], D = F(S);
        if (D !== "object")
          return new A("Invalid " + k + " `" + c + "` of type `" + D + "` " + ("supplied to `" + x + "`, expected `object`."));
        var $ = t({}, N[_], d);
        for (var w in $) {
          var B = d[w];
          if (n(d, w) && typeof B != "function")
            return K(x, k, c, w, L(B));
          if (!B)
            return new A(
              "Invalid " + k + " `" + c + "` key `" + w + "` supplied to `" + x + "`.\nBad object: " + JSON.stringify(N[_], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var g = B(S, w, x, k, c + "." + w, r);
          if (g)
            return g;
        }
        return null;
      }
      return R(b);
    }
    function X(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(X);
          if (d === null || l(d))
            return !0;
          var b = v(d);
          if (b) {
            var N = b.call(d), _;
            if (b !== d.entries) {
              for (; !(_ = N.next()).done; )
                if (!X(_.value))
                  return !1;
            } else
              for (; !(_ = N.next()).done; ) {
                var x = _.value;
                if (x && !X(x[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function J(d, b) {
      return d === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function F(d) {
      var b = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : J(b, d) ? "symbol" : b;
    }
    function L(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var b = F(d);
      if (b === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function U(d) {
      var b = L(d);
      switch (b) {
        case "array":
        case "object":
          return "an " + b;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + b;
        default:
          return b;
      }
    }
    function ce(d) {
      return !d.constructor || !d.constructor.name ? P : d.constructor.name;
    }
    return E.checkPropTypes = a, E.resetWarningCache = a.resetWarningCache, E.PropTypes = E, E;
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
    function n(u, l, f, p, m, v) {
      if (v !== e) {
        var P = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw P.name = "Invariant Violation", P;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var o = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
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
var ae = de, vt = un(be);
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
  var n = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var u = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      u && (u.get || u.set) ? Object.defineProperty(n, o, u) : n[o] = e[o];
    }
  return n.default = e, r && r.set(e, n), n;
}
let xe = "";
function Ut(e, t) {
  return xe || (xe = (0, ae.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, ae.isFunction)(e[r]);
  })), (0, ae.isFunction)(e[xe]) ? e[xe](t) : !1;
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
  const a = {
    capture: !0,
    ...n
  };
  e.addEventListener ? e.addEventListener(t, r, a) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r;
}
function pn(e, t, r, n) {
  if (!e)
    return;
  const a = {
    capture: !0,
    ...n
  };
  e.removeEventListener ? e.removeEventListener(t, r, a) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
}
function mn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ae.int)(r.borderTopWidth), t += (0, ae.int)(r.borderBottomWidth), t;
}
function hn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ae.int)(r.borderLeftWidth), t += (0, ae.int)(r.borderRightWidth), t;
}
function gn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ae.int)(r.paddingTop), t -= (0, ae.int)(r.paddingBottom), t;
}
function yn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ae.int)(r.paddingLeft), t -= (0, ae.int)(r.paddingRight), t;
}
function vn(e, t, r) {
  const a = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), o = (e.clientX + t.scrollLeft - a.left) / r, u = (e.clientY + t.scrollTop - a.top) / r;
  return {
    x: o,
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
    y: a
  } = e, o = "translate(".concat(n).concat(r, ",").concat(a).concat(r, ")");
  if (t) {
    const u = "".concat(typeof t.x == "string" ? t.x : t.x + r), l = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    o = "translate(".concat(u, ", ").concat(l, ")") + o;
  }
  return o;
}
function Cn(e, t) {
  return e.targetTouches && (0, ae.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, ae.findInArray)(e.changedTouches, (r) => t === r.identifier);
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
var oe = de, Ce = H;
function On(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : Nn(n);
  const a = Qe(e);
  if (typeof n == "string") {
    const {
      ownerDocument: o
    } = a, u = o.defaultView;
    let l;
    if (n === "parent" ? l = a.parentNode : l = o.querySelector(n), !(l instanceof u.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const f = l, p = u.getComputedStyle(a), m = u.getComputedStyle(f);
    n = {
      left: -a.offsetLeft + (0, oe.int)(m.paddingLeft) + (0, oe.int)(p.marginLeft),
      top: -a.offsetTop + (0, oe.int)(m.paddingTop) + (0, oe.int)(p.marginTop),
      right: (0, Ce.innerWidth)(f) - (0, Ce.outerWidth)(a) - a.offsetLeft + (0, oe.int)(m.paddingRight) - (0, oe.int)(p.marginRight),
      bottom: (0, Ce.innerHeight)(f) - (0, Ce.outerHeight)(a) - a.offsetTop + (0, oe.int)(m.paddingBottom) - (0, oe.int)(p.marginBottom)
    };
  }
  return (0, oe.isNum)(n.right) && (t = Math.min(t, n.right)), (0, oe.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, oe.isNum)(n.left) && (t = Math.max(t, n.left)), (0, oe.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function xn(e, t, r) {
  const n = Math.round(t / e[0]) * e[0], a = Math.round(r / e[1]) * e[1];
  return [n, a];
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
  const a = Qe(r), o = r.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, Ce.offsetXYFromParent)(n || e, o, r.props.scale);
}
function _n(e, t, r) {
  const n = !(0, oe.isNum)(e.lastX), a = Qe(e);
  return n ? {
    node: a,
    deltaX: 0,
    deltaY: 0,
    lastX: t,
    lastY: r,
    x: t,
    y: r
  } : {
    node: a,
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
  var n = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var u = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      u && (u.get || u.set) ? Object.defineProperty(n, o, u) : n[o] = e[o];
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
const se = {
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
let he = se.mouse, Ie = class extends Ve.Component {
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
      const a = (0, Z.getTouchIdentifier)(t);
      this.touchIdentifier = a;
      const o = (0, me.getControlPosition)(t, a, this);
      if (o == null)
        return;
      const {
        x: u,
        y: l
      } = o, f = (0, me.createCoreData)(this, u, l);
      (0, Pe.default)("DraggableCore: handleDragStart: %j", f), (0, Pe.default)("calling", this.props.onStart), !(this.props.onStart(t, f) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, Z.addUserSelectStyles)(n), this.dragging = !0, this.lastX = u, this.lastY = l, (0, Z.addEvent)(n, he.move, this.handleDrag), (0, Z.addEvent)(n, he.stop, this.handleDragStop));
    }), te(this, "handleDrag", (t) => {
      const r = (0, me.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: a
      } = r;
      if (Array.isArray(this.props.grid)) {
        let l = n - this.lastX, f = a - this.lastY;
        if ([l, f] = (0, me.snapToGrid)(this.props.grid, l, f), !l && !f)
          return;
        n = this.lastX + l, a = this.lastY + f;
      }
      const o = (0, me.createCoreData)(this, n, a);
      if ((0, Pe.default)("DraggableCore: handleDrag: %j", o), this.props.onDrag(t, o) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const f = document.createEvent("MouseEvents");
          f.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(f);
        }
        return;
      }
      this.lastX = n, this.lastY = a;
    }), te(this, "handleDragStop", (t) => {
      if (!this.dragging)
        return;
      const r = (0, me.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: a
      } = r;
      if (Array.isArray(this.props.grid)) {
        let f = n - this.lastX || 0, p = a - this.lastY || 0;
        [f, p] = (0, me.snapToGrid)(this.props.grid, f, p), n = this.lastX + f, a = this.lastY + p;
      }
      const o = (0, me.createCoreData)(this, n, a);
      if (this.props.onStop(t, o) === !1 || this.mounted === !1)
        return !1;
      const l = this.findDOMNode();
      l && this.props.enableUserSelectHack && (0, Z.removeUserSelectStyles)(l.ownerDocument), (0, Pe.default)("DraggableCore: handleDragStop: %j", o), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, l && ((0, Pe.default)("DraggableCore: Removing handlers"), (0, Z.removeEvent)(l.ownerDocument, he.move, this.handleDrag), (0, Z.removeEvent)(l.ownerDocument, he.stop, this.handleDragStop));
    }), te(this, "onMouseDown", (t) => (he = se.mouse, this.handleDragStart(t))), te(this, "onMouseUp", (t) => (he = se.mouse, this.handleDragStop(t))), te(this, "onTouchStart", (t) => (he = se.touch, this.handleDragStart(t))), te(this, "onTouchEnd", (t) => (he = se.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = !0;
    const t = this.findDOMNode();
    t && (0, Z.addEvent)(t, se.touch.start, this.onTouchStart, {
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
      (0, Z.removeEvent)(r, se.mouse.move, this.handleDrag), (0, Z.removeEvent)(r, se.touch.move, this.handleDrag), (0, Z.removeEvent)(r, se.mouse.stop, this.handleDragStop), (0, Z.removeEvent)(r, se.touch.stop, this.handleDragStop), (0, Z.removeEvent)(t, se.touch.start, this.onTouchStart, {
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
  var t = P(pe), r = m(Wt), n = m(Nt), a = m(tn), o = H, u = fe, l = de, f = m(Ae), p = m(ke);
  function m(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function v(C) {
    if (typeof WeakMap != "function")
      return null;
    var h = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap();
    return (v = function(i) {
      return i ? y : h;
    })(C);
  }
  function P(C, h) {
    if (!h && C && C.__esModule)
      return C;
    if (C === null || typeof C != "object" && typeof C != "function")
      return { default: C };
    var y = v(h);
    if (y && y.has(C))
      return y.get(C);
    var i = {}, M = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var O in C)
      if (O !== "default" && Object.prototype.hasOwnProperty.call(C, O)) {
        var G = M ? Object.getOwnPropertyDescriptor(C, O) : null;
        G && (G.get || G.set) ? Object.defineProperty(i, O, G) : i[O] = C[O];
      }
    return i.default = C, y && y.set(C, i), i;
  }
  function E() {
    return E = Object.assign ? Object.assign.bind() : function(C) {
      for (var h = 1; h < arguments.length; h++) {
        var y = arguments[h];
        for (var i in y)
          Object.prototype.hasOwnProperty.call(y, i) && (C[i] = y[i]);
      }
      return C;
    }, E.apply(this, arguments);
  }
  function I(C, h, y) {
    return h = A(h), h in C ? Object.defineProperty(C, h, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : C[h] = y, C;
  }
  function A(C) {
    var h = R(C, "string");
    return typeof h == "symbol" ? h : String(h);
  }
  function R(C, h) {
    if (typeof C != "object" || C === null)
      return C;
    var y = C[Symbol.toPrimitive];
    if (y !== void 0) {
      var i = y.call(C, h || "default");
      if (typeof i != "object")
        return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(C);
  }
  class j extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(h, y) {
      let {
        position: i
      } = h, {
        prevPropsPosition: M
      } = y;
      return i && (!M || i.x !== M.x || i.y !== M.y) ? ((0, p.default)("Draggable: getDerivedStateFromProps %j", {
        position: i,
        prevPropsPosition: M
      }), {
        x: i.x,
        y: i.y,
        prevPropsPosition: {
          ...i
        }
      }) : null;
    }
    constructor(h) {
      super(h), I(this, "onDragStart", (y, i) => {
        if ((0, p.default)("Draggable: onDragStart: %j", i), this.props.onStart(y, (0, u.createDraggableData)(this, i)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), I(this, "onDrag", (y, i) => {
        if (!this.state.dragging)
          return !1;
        (0, p.default)("Draggable: onDrag: %j", i);
        const M = (0, u.createDraggableData)(this, i), O = {
          x: M.x,
          y: M.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: W,
            y: z
          } = O;
          O.x += this.state.slackX, O.y += this.state.slackY;
          const [K, T] = (0, u.getBoundPosition)(this, O.x, O.y);
          O.x = K, O.y = T, O.slackX = this.state.slackX + (W - O.x), O.slackY = this.state.slackY + (z - O.y), M.x = O.x, M.y = O.y, M.deltaX = O.x - this.state.x, M.deltaY = O.y - this.state.y;
        }
        if (this.props.onDrag(y, M) === !1)
          return !1;
        this.setState(O);
      }), I(this, "onDragStop", (y, i) => {
        if (!this.state.dragging || this.props.onStop(y, (0, u.createDraggableData)(this, i)) === !1)
          return !1;
        (0, p.default)("Draggable: onDragStop: %j", i);
        const O = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: W,
            y: z
          } = this.props.position;
          O.x = W, O.y = z;
        }
        this.setState(O);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: h.position ? h.position.x : h.defaultPosition.x,
        y: h.position ? h.position.y : h.defaultPosition.y,
        prevPropsPosition: {
          ...h.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, h.position && !(h.onDrag || h.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
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
      var h, y;
      return (h = (y = this.props) === null || y === void 0 || (y = y.nodeRef) === null || y === void 0 ? void 0 : y.current) !== null && h !== void 0 ? h : n.default.findDOMNode(this);
    }
    render() {
      const {
        axis: h,
        bounds: y,
        children: i,
        defaultPosition: M,
        defaultClassName: O,
        defaultClassNameDragging: G,
        defaultClassNameDragged: W,
        position: z,
        positionOffset: K,
        scale: T,
        ...V
      } = this.props;
      let X = {}, J = null;
      const L = !!!z || this.state.dragging, U = z || M, ce = {
        // Set left if horizontal drag is enabled
        x: (0, u.canDragX)(this) && L ? this.state.x : U.x,
        // Set top if vertical drag is enabled
        y: (0, u.canDragY)(this) && L ? this.state.y : U.y
      };
      this.state.isElementSVG ? J = (0, o.createSVGTransform)(ce, K) : X = (0, o.createCSSTransform)(ce, K);
      const d = (0, a.default)(i.props.className || "", O, {
        [G]: this.state.dragging,
        [W]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(f.default, E({}, V, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(i), {
        className: d,
        style: {
          ...i.props.style,
          ...X
        },
        transform: J
      }));
    }
  }
  e.default = j, I(j, "displayName", "Draggable"), I(j, "propTypes", {
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
  }), I(j, "defaultProps", {
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
}, Wn = le(function(t, r) {
  const { formLayout: n, context: a } = t, { formData: o } = a, u = ie({}), l = jn(t), f = "palmyra-form-field-data", p = Pt(() => (m) => At(m, u, m.label), [o.data]);
  return /* @__PURE__ */ s("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: n.fields.map((m, v) => /* @__PURE__ */ s("div", { className: l, children: /* @__PURE__ */ s("div", { className: f, children: p(m) }) }, m.attribute)) });
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
const Vn = ({ columns: e, isOpen: t, onClose: r, setFilter: n, defaultFilter: a = {} }) => {
  var { getFieldManager: o, getFilterData: u } = Fr(a);
  const l = () => {
    n({});
  }, f = () => {
    var P = u();
    n && n(P);
  }, p = () => {
    r();
  }, m = (P) => {
    P.keyCode === 27 && p();
  }, v = _r(e);
  return /* @__PURE__ */ s("div", { className: "grid-filter-container", children: /* @__PURE__ */ s(
    fr,
    {
      open: t,
      onClose: p,
      PaperComponent: zn,
      onKeyDown: m,
      children: /* @__PURE__ */ s(Ot, { onClickAway: r, children: /* @__PURE__ */ Q("div", { children: [
        /* @__PURE__ */ Q("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ s("div", { className: "grid-header-text-container", children: /* @__PURE__ */ s("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ s("div", { className: "grid-header-icon-container", onClick: p, children: /* @__PURE__ */ s(Or, { className: "filter-cancel-icon" }) })
        ] }),
        /* @__PURE__ */ s("span", { className: "filter-header-border" }),
        /* @__PURE__ */ s("div", { className: "grid-filter-content", children: /* @__PURE__ */ s(_e.Provider, { value: o, children: /* @__PURE__ */ s(
          kt,
          {
            context: { formData: {} },
            layout: {
              type: "form",
              formLayout: {
                fields: v,
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
}, Xn = le(function(t, r) {
  const { columns: n, children: a, EmptyChild: o, onRowClick: u, quickSearch: l } = t, f = o || wr, p = t.customizer || Rr, [m, v] = ee(!1), [P, E] = ee("standard"), [I, A] = ee(!1), [R, j] = ee(""), {
    setQueryFilter: C,
    setQuickSearch: h,
    setSortColumns: y,
    setEndPointOptions: i,
    gotoPage: M,
    setPageSize: O,
    getPageNo: G,
    refreshData: W,
    data: z,
    totalRecords: K,
    pageSizeOptions: T,
    filter: V,
    queryLimit: X
  } = Ne(t), J = r || ie(null);
  ve(J, () => ({
    setFilter: (w) => {
      C(w);
    },
    refresh: () => {
      W();
    },
    resetFilter() {
      C({});
    },
    setEndPointOptions: (w) => {
      i(w);
    },
    addFilter: (w, B) => {
      C((g) => (g[w] = B, { ...g }));
    }
  }), []);
  const F = (w, B) => {
    M(B);
  }, L = Pr(n, p), U = (w) => {
    E(w);
  }, ce = () => {
    v(!m);
  }, d = () => P === "compact" ? { padding: "3px" } : P === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, b = () => P === "compact" ? { padding: "3px" } : P === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, N = () => {
    var w;
    switch (P) {
      case "compact":
        w = /* @__PURE__ */ s(nt, { className: "density-icon" });
        break;
      case "comfortable":
        w = /* @__PURE__ */ s(ot, { className: "density-icon" });
        break;
      default:
        w = /* @__PURE__ */ s(rt, { className: "grid-button-icon" });
        break;
    }
    return w;
  }, _ = (w) => {
    const B = w.target.value;
    j(B), B ? h(B) : C({});
  }, x = (w) => {
    u && u(w);
  }, k = (w) => {
    const B = parseInt(w.target.value, 10);
    O(B);
  }, c = () => {
    console.info("Export Clicked");
  }, S = 200, D = !!t.pageSize;
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ Q("div", { children: [
    a,
    /* @__PURE__ */ Q("div", { className: "grid-header", children: [
      /* @__PURE__ */ s("div", { className: "grid-header-filter", children: !!l && /* @__PURE__ */ s(
        Ge,
        {
          sx: { width: S },
          type: "text",
          value: R,
          onChange: _,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ s(xt, { position: "end", children: /* @__PURE__ */ s($t, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ s(Ot, { onClickAway: () => {
        v(!1);
      }, children: /* @__PURE__ */ Q("div", { className: "grid-header-button grid-density-btn", onClick: ce, children: [
        /* @__PURE__ */ s(Te, { title: "Density", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, children: N() }) }),
        m && /* @__PURE__ */ s("div", { className: "density-dropdown-content", children: /* @__PURE__ */ Q("ul", { children: [
          /* @__PURE__ */ Q("li", { onClick: () => U("standard"), children: [
            /* @__PURE__ */ s(rt, { className: "density-icon" }),
            /* @__PURE__ */ s("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ Q("li", { onClick: () => U("compact"), children: [
            /* @__PURE__ */ s(nt, { className: "density-icon" }),
            /* @__PURE__ */ s("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ Q("li", { onClick: () => U("comfortable"), children: [
            /* @__PURE__ */ s(ot, { className: "density-icon" }),
            /* @__PURE__ */ s("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ Q("div", { className: "grid-header-button grid-filter-btn", children: [
        /* @__PURE__ */ s(Te, { title: "Filter", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, onClick: () => A(!0), children: /* @__PURE__ */ s(xr, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ s(
          Vn,
          {
            columns: n,
            setFilter: C,
            defaultFilter: V,
            isOpen: I,
            onClose: () => A(!1)
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { className: "grid-header-button grid-export-btn", onClick: c, children: /* @__PURE__ */ s(Te, { title: "Export", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ s(Dr, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ s("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ s(Te, { title: "New", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ s(Er, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ s(Me, {})
    ] }),
    /* @__PURE__ */ s("div", { className: "grid-table", children: /* @__PURE__ */ s(
      Tr,
      {
        columnDefs: L,
        EmptyChild: f,
        rowData: z,
        onRowClick: x,
        onRowStyle: d,
        onHeaderStyle: b,
        onSortColumn: y
      }
    ) }),
    /* @__PURE__ */ s("div", { className: "grid-header", children: /* @__PURE__ */ s("div", { className: "grid-filter", children: D && /* @__PURE__ */ s(
      Dt,
      {
        component: "div",
        count: K || 0,
        page: G(),
        onPageChange: F,
        rowsPerPage: X.limit,
        rowsPerPageOptions: T || [],
        onRowsPerPageChange: k
      }
    ) }) })
  ] }) });
}), sa = le(function(t, r) {
  const { columns: n, endPoint: a, storeFactory: o, layoutParams: u, pagination: l } = t, f = t.quickSearch || "", p = ie(null), m = (P, E) => {
    console.log(E);
  };
  ye(() => {
    var P = at.subscribe(t.topic, m);
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
    addFilter: (P, E) => {
      p.current.addFilter(P, E);
    }
  }), [n, a]);
  const v = {
    fields: n,
    pagination: l,
    quickSearch: f,
    storeOptions: {
      endPoint: a
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ s(Me, { children: /* @__PURE__ */ s(Ue.Provider, { value: o, children: /* @__PURE__ */ s(Jt, { layout: v, context: u, customizer: t.customizer, ref: p }) }) });
}), Bn = le(function(t, r) {
  const n = t.layout, [a, o] = ee(n.fields), u = n.pagination ? n.pagination : [15], l = De(Ue), f = De(Ct);
  var p = n.storeOptions || {}, m = {};
  vr(m, p, f);
  const v = l.getGridStore(m, n.storeOptions.endPoint);
  ye(() => {
    p.hasLayout && v.queryLayout({}).then((I) => {
      o(I.columns);
    });
  }, []);
  const { onClick: P, onNewClick: E } = Ar(n.actionOptions, f);
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    Xn,
    {
      columns: a,
      store: v,
      pageSize: u,
      onRowClick: P,
      onNewClick: E,
      customizer: t.customizer,
      quickSearch: n.quickSearch,
      ref: r
    }
  ) });
}), Jt = Bn, Un = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Container || Mt;
  return /* @__PURE__ */ s(Ft, { fallback: /* @__PURE__ */ s("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ s(n, { ...t, children: ((o) => /* @__PURE__ */ s(
    Jt,
    {
      context: r,
      layout: o
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
  function a(o, u, l) {
    const { w: f, h: p } = Hn(o.width, o.height);
    return /* @__PURE__ */ s(mr, { sx: { width: f, height: p }, children: /* @__PURE__ */ s(
      Gn,
      {
        layout: o,
        context: u
      }
    ) }, (o.name || "tab") + l);
  }
  return /* @__PURE__ */ s("div", { style: { display: "flex", flexWrap: "wrap" }, children: n.map((o, u) => a(o, r, u)) });
}, bt = le(function(t, r) {
  const { layout: n } = t;
  ve(r, () => ({
    resetFilter() {
    }
  }), []);
  const a = {}, o = n.tabs;
  return /* @__PURE__ */ s("div", { children: o.map((u, l) => /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    Zt,
    {
      layout: u,
      context: a
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
}, St = le(function(t, r) {
  var m;
  const n = t.data || {}, { layout: a } = t;
  var { getFieldManager: o, getFormData: u, isFormValid: l } = Lr(n, (m = t.callbacks) == null ? void 0 : m.onFormValidChange, Kn(t.mode));
  ve(r, () => ({
    getData() {
      return u();
    },
    isValid() {
      return l();
    }
  }), []);
  const f = { formData: n }, p = a.tabs;
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(_e.Provider, { value: o, children: p.map((v, P) => /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    Zt,
    {
      layout: v,
      context: f
    }
  ) }, v.name + P)) }) });
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
}, la = le(function(t, r) {
  const [n, a] = ee(t.layout), o = t.mode ? t.mode : n.type ? n.type : "grid", u = t.layoutParams || {}, l = Qn(o), f = ie(0);
  return ye(() => {
    a(t.layout), f.current < 999999 ? f.current++ : f.current = 0;
  }, [t.layout]), /* @__PURE__ */ s(Ft, { fallback: /* @__PURE__ */ s("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ s(Ue.Provider, { value: t.storeFactory, children: /* @__PURE__ */ s(Ct.Provider, { value: u, children: /* @__PURE__ */ s(l, { ...t, ref: (p) => {
    r && (r.current = p);
  } }, f.current) }) }) });
}), ca = le(function(t, r) {
  const { children: n, Child: a, childProps: o, pageSize: u } = t, l = r || ie(null), {
    setQueryFilter: f,
    refreshData: p,
    setQuickSearch: m,
    gotoPage: v,
    setPageSize: P,
    getPageNo: E,
    data: I,
    totalRecords: A,
    pageSizeOptions: R,
    queryLimit: j
  } = Ne(t), C = t.listKeyProvider || ((W, z) => z);
  ve(l, () => ({
    setFilter(W) {
      f(W);
    },
    refresh: () => {
      p();
    },
    gotoPage(W) {
      v(W);
    },
    nextPage() {
    },
    prevPage() {
    }
  }), []);
  const h = (W, z) => {
    v(z);
  }, y = (W) => {
    const z = W.target.value;
    m(z);
  }, i = (W) => {
    const z = parseInt(W.target.value, 10);
    P(z);
  }, M = 200, O = !!u, G = !!t.quickSearch;
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ Q("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ Q("div", { children: [
      /* @__PURE__ */ Q("div", { className: "card-header", children: [
        /* @__PURE__ */ s("div", { className: "card-filter", children: G && /* @__PURE__ */ s(
          Ge,
          {
            sx: { width: M },
            type: "text",
            onChange: y,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ s(xt, { position: "end", children: /* @__PURE__ */ s($t, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ s("div", { className: "card-pagination", children: O && /* @__PURE__ */ s(
          Dt,
          {
            component: "div",
            count: A || 0,
            page: E(),
            onPageChange: h,
            rowsPerPage: j.limit,
            rowsPerPageOptions: R || [],
            onRowsPerPageChange: i
          }
        ) })
      ] }),
      /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
        hr,
        {
          Child: a,
          childKeyProvider: C,
          dataList: I,
          childProps: o,
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
