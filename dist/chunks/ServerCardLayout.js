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
import { FieldManagerContext as Me, StoreFactoryContext as Ge, LayoutParamsContext as Pt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as i, jsxs as Q, Fragment as Ne } from "react/jsx-runtime";
import pe, { useState as Z, useRef as ue, useEffect as ve, forwardRef as de, useContext as Ee, useImperativeHandle as Pe, useMemo as wt } from "react";
import { FormControlLabel as et, Checkbox as tt, FormControl as Tt, FormHelperText as Ot, Autocomplete as ur, TextField as He, CircularProgress as dr, Dialog as fr, ClickAwayListener as xt, Button as Se, Paper as mr, InputAdornment as Dt, Tooltip as Oe, TablePagination as Et, Box as pr } from "@mui/material";
import hr from "../palmyra/layout/card/CardLayout.js";
import gr from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Rt, getFieldLabel as _t } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as Re } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as _e } from "../palmyra/form/FormUtil.js";
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
import Lr from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as Ir } from "./PalmyraFieldManager.js";
import { useKeyValue as $r } from "../palmyra/utils/pubsub/PubSubHelper.js";
const Fe = (e) => {
  var K, ae;
  const { store: t, quickSearch: r } = e, n = e.fetchAll != !1, [o, a] = Z(e.endPointOptions), [d, c] = Z(null), f = ((K = e.defaultParams) == null ? void 0 : K.filter) || {}, h = ((ae = e.defaultParams) == null ? void 0 : ae.sort) || {}, [p, g] = e.filterTopic ? $r(e.filterTopic, f) : Z(f), [w, D] = Z({}), k = ue(e.initialFetch == !1), R = e.pageSize ? e.pageSize : 15;
  var $ = R instanceof Array ? R : [R], j = R instanceof Array ? R[0] : R;
  const [b, y] = Z({ limit: j, offset: 0, total: !0 }), [S, s] = Z(null), _ = () => Math.round(b.offset / b.limit), E = () => b, z = (l) => {
    y((m) => ({ limit: m.limit, total: m.total, offset: l * j }));
  }, L = (l) => {
    const m = l > 10 || l == -1 ? l : 15;
    y((P) => ({ limit: m, total: P.total, offset: P.offset }));
  }, V = () => p ? Object.keys(p).length == 0 : !1, B = (l) => {
    s((m) => (setTimeout(() => {
      e.onDataChange && e.onDataChange(S, m);
    }, 300), l));
  };
  ve(() => {
    if (k.current) {
      k.current = !1;
      return;
    }
    (n || !V()) && ee();
  }, [b, p, w]);
  const ee = () => {
    const m = {
      sortOrder: w && Object.keys(w).length > 0 ? w : h,
      total: !0,
      endPointVars: o,
      ...b,
      filter: { ...p, ...f }
    };
    if (t)
      try {
        t.query(m).then((P) => {
          B(P.result), c(P.total);
        }).catch((P) => {
          var M = P.response ? P.response : P;
          console.error("error while fetching", M), F();
        });
      } catch (P) {
        console.error(P), T();
      }
    else
      console.error("Store is not provided for the Grid"), T();
  }, T = () => {
    B([]), c(0);
  }, F = () => {
    B(void 0), c(null);
  };
  return {
    setQueryFilter: (l) => {
      typeof l == "function" || l && Object.keys(l).length > 0 ? g(l) : g({});
    },
    setQuickSearch: (l) => {
      const m = r;
      g(l ? (P) => (P[m] = l, { ...P }) : (P) => (delete P[m], { ...P }));
    },
    setSortColumns: (l) => {
      D(l);
    },
    setEndPointOptions: a,
    refreshData: ee,
    gotoPage: z,
    setPageSize: L,
    getPageNo: _,
    getQueryLimit: E,
    setQueryLimit: y,
    filter: p,
    queryLimit: b,
    data: S,
    totalRecords: d,
    pageSizeOptions: $
  };
};
function it(e) {
  return e ? Array.isArray(e) ? e : typeof e == "string" ? e.split(",") : (console.log(e), [e]) : [];
}
const aa = de(function(t, r) {
  const n = Ee(Me), o = r || ue(null), a = n(t, "checkbox", o), { mutateOptions: d, setMutateOptions: c } = a, [f, h] = Z(!1), p = it(a.data), g = a.error, w = a.eventListeners, k = { store: a.store, pageSize: -1 }, { data: R } = Fe(k), $ = R, j = ue(null), b = t.lookupOptions || {}, y = b.idAttribute || "id", S = b.titleAttribute || "name", s = t.showSelectedOnly && t.readonly, _ = Re(y) ? (T) => _e(y, T) : (T) => T[y], E = Re(S) ? (T) => _e(S, T) : (T) => T[S];
  Pe(o, () => ({
    focus() {
      j.current.focus();
    },
    isValid() {
      return !g.status;
    },
    clear() {
      a.setData("", !0);
    },
    getValue() {
      return a.getData();
    },
    setValue(T, F = !1) {
      a.setData(T, F);
    },
    setVisible(T) {
      c((F) => ({ ...F, visible: T }));
    },
    setRequired(T) {
      c((F) => ({ ...F, required: T }));
    },
    setReadOnly(T) {
      c((F) => ({ ...F, readonly: T }));
    },
    setAttribute(T) {
      c((F) => ({ ...F, ...T }));
    },
    setOptions(T) {
    },
    getOptions() {
    }
  }), [a]);
  var z = Rt(t, a.data, t.label);
  t.readonly && (z.inputProps = { readOnly: !0 });
  function L(T, F) {
    const G = it(a.data);
    var X = G.indexOf(T);
    F ? X < 0 && G.push(T) : X >= 0 && G.splice(X, 1), w.onValueChange(G.toString());
  }
  var V = {
    onBlur: w.onBlur,
    onFocus: w.onFocus,
    onChange: (T) => {
      L(T.target.value, T.target.checked);
    }
  };
  const B = (T) => {
    const F = T.toString();
    return p.includes(F);
  }, ee = (T) => {
    const F = T.target.checked;
    h(F);
    var G = [];
    F && $.map((X) => {
      G.push(_(X));
    }), w.onValueChange(G.toString());
  };
  return /* @__PURE__ */ i("div", { className: t.className, children: d.visible && /* @__PURE__ */ Q(
    Ct,
    {
      label: _t(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ i("div", { children: t.hideSelectAll ? /* @__PURE__ */ i(Ne, {}) : /* @__PURE__ */ i(
          et,
          {
            control: /* @__PURE__ */ i(tt, { onChange: ee }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ Q(
          Tt,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: g.status,
            ...z,
            children: [
              $ ? $.filter((T) => s ? B(_(T)) : !0).map((T) => /* @__PURE__ */ i(
                et,
                {
                  value: _(T),
                  control: /* @__PURE__ */ i(
                    tt,
                    {
                      ...V,
                      checked: B(_(T)),
                      disabled: t.readonly
                    }
                  ),
                  label: E(T)
                },
                _(T)
              )) : /* @__PURE__ */ i("div", { children: "No options provided" }),
              /* @__PURE__ */ i(Ot, { className: "form-error-text", children: g.message })
            ]
          }
        )
      ]
    }
  ) });
}), Yr = de(function(t, r) {
  const n = Ee(Me), o = r || ue(null), a = ue(null), d = ue(0), [c, f] = Z([]), [h, p] = Z(""), [g, w] = Z(!1), D = n(t, "serverlookup", o), k = t.store || D.store, R = t.lookupOptions || {}, $ = R.idAttribute || "id", j = R.titleAttribute || "name", b = R.searchAttribute || j, y = {
    store: k,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: b,
    initialFetch: !1
  }, S = Fe(y), s = D.eventListeners, _ = D.error, { mutateOptions: E, setMutateOptions: z } = D, L = D.data, V = g && c.length < (L ? 2 : 1), { setQueryFilter: B, setEndPointOptions: ee, setQuickSearch: T, totalRecords: F, refreshData: G } = S, X = S.data, H = Re($) ? (u) => _e($, u) : (u) => u == null ? void 0 : u[$], K = Re(j) ? (u) => _e(j, u) : (u) => u == null ? void 0 : u[j];
  ve(() => {
    var u = L != "" ? L : void 0;
    u && f([u]);
  }, [D.data]), ve(() => {
    const u = X ? [...X] : [], C = L != "" ? L : void 0, x = H(C), I = K(C);
    u && x && I && !M(u, x) && u.unshift(C), f(u), d.current < F && (d.current = F);
  }, [X, F]), ve(() => {
    yr(ae);
  }, [h, g]);
  function ae() {
    g && (h.length > 0 && h != K(L) ? T("*" + h + "*") : X ? T(null) : G());
  }
  var l = {
    onBlur: s.onBlur,
    onFocus: s.onFocus,
    onChange: (u, C) => {
      m(C);
    },
    onInputChange: (u, C) => (p(C), !0)
  };
  const m = (u) => {
    s.onValueChange(u);
  }, P = (u) => typeof u == "object" ? K(u) + "" : (console.log(u), "");
  function M(u, C) {
    return u.find((x) => {
      if (H(x) == C)
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
      t.multiple ? D.setData([], !0) : D.setData(void 0, !0);
    },
    getValue() {
      return D.getData();
    },
    setValue(u, C = !1) {
      D.setData(u, C);
    },
    setVisible(u) {
      z((C) => ({ ...C, visible: u }));
    },
    setRequired(u) {
      z((C) => ({ ...C, required: u }));
    },
    setReadOnly(u) {
      z((C) => ({ ...C, readonly: u }));
    },
    setAttribute(u) {
      z((C) => ({ ...C, ...u }));
    },
    setFilter(u) {
      B(u);
    },
    resetFilter() {
      B({});
    },
    setEndPointOptions(u) {
      ee(u);
    },
    refresh: () => {
      G();
    },
    addFilter(u, C) {
      B((x) => (x[u] = C, { ...x }));
    },
    setDefaultFilter(u) {
    }
  }), [D]);
  var O = Rt(t, L, t.label);
  E.readonly && (O.inputProps = { readOnly: !0 });
  const N = (u, C) => u instanceof Array ? u.some((x) => H(x) == H(C)) : H(u) == H(C);
  return /* @__PURE__ */ i(
    Ct,
    {
      label: _t(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ Q(Tt, { fullWidth: !0, error: _.status, children: [
        /* @__PURE__ */ i(
          ur,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: t.multiple,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            isOptionEqualToValue: N,
            filterOptions: (u) => u,
            renderInput: (u) => /* @__PURE__ */ i(
              He,
              {
                ...u,
                inputRef: (C) => {
                  a.current = C;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                InputProps: {
                  ...u.InputProps,
                  endAdornment: /* @__PURE__ */ Q(Ne, { children: [
                    V ? /* @__PURE__ */ i(dr, { color: "inherit", size: 18 }) : null,
                    u.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: P,
            ...O,
            options: c,
            open: g,
            onClose: () => {
              w(!1);
            },
            onOpen: (u) => {
              w(!0);
            },
            ...l
          }
        ),
        /* @__PURE__ */ i(Ot, { className: "form-error-text", children: _.message })
      ] })
    }
  );
}), jr = (e) => {
  const { fieldDef: t } = e;
  return /* @__PURE__ */ Q("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, ie = (e, t) => {
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
      return ie(o, ar);
    case "radio":
      return ie(o, rr);
    case "select":
      return ie(o, nr);
    case "date":
      return ie(o, er);
    case "datetime":
      return ie(o, tr);
    case "checkbox":
      return ie(o, ir);
    case "serverlookup":
      return ie(o, Yr);
    case "textarea":
      return ie(o, or);
    case "switch":
      return ie(o, sr);
    case "password":
      return ie(o, lr);
    case "float":
    case "number":
    case "numbersOnly":
      return ie(o, cr);
    case "integer":
      return ie(o, Sr);
    case "multiSelect":
      return qr();
    case "dateRange":
      return ie(o, br);
    default:
      return jr(o);
  }
}, Wr = de(function(t, r) {
  var p;
  const { formLayout: n, context: o } = t, { formData: a } = o, d = n.Container;
  ue({});
  const c = wt(() => (g) => At(g), [a.data]);
  var f = ((p = n.options) == null ? void 0 : p.columns) || 1, h = { columns: f };
  return d ? /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((g, w) => /* @__PURE__ */ i(
    d,
    {
      index: w,
      field: g,
      label: g.title,
      options: h,
      children: c(g)
    },
    g.attribute + g.name + g.type
  )) }) : /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((g, w) => c(g)) });
}), kt = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Renderer || Wr, o = t.Container || Mt;
  const a = (d) => /* @__PURE__ */ i(
    n,
    {
      context: r,
      formLayout: d
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
}, st = pe.createContext && pe.createContext(Lt), ye = globalThis && globalThis.__assign || function() {
  return ye = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ye.apply(this, arguments);
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
    return pe.createElement(t.tag, ye({
      key: r
    }, t.attr), It(t.child));
  });
}
function Vr(e) {
  return function(t) {
    return pe.createElement(Xr, ye({
      attr: ye({}, e.attr)
    }, t), It(e.child));
  };
}
function Xr(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, a = e.title, d = zr(e, ["attr", "size", "title"]), c = o || r.size || "1em", f;
    return r.className && (f = r.className), e.className && (f = (f ? f + " " : "") + e.className), pe.createElement("svg", ye({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, d, {
      className: f,
      style: ye(ye({
        color: e.color || r.color
      }, r.style), e.style),
      height: c,
      width: c,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && pe.createElement("title", null, a), e.children);
  };
  return st !== void 0 ? pe.createElement(st.Consumer, null, function(r) {
    return t(r);
  }) : t(Lt);
}
function $t(e) {
  return Vr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
}
var Ae = { exports: {} }, Yt = {}, Ue = { exports: {} }, xe = { exports: {} }, q = {};
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
    return q;
  lt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, w = e ? Symbol.for("react.suspense_list") : 60120, D = e ? Symbol.for("react.memo") : 60115, k = e ? Symbol.for("react.lazy") : 60116, R = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function y(s) {
    if (typeof s == "object" && s !== null) {
      var _ = s.$$typeof;
      switch (_) {
        case t:
          switch (s = s.type, s) {
            case f:
            case h:
            case n:
            case a:
            case o:
            case g:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case c:
                case p:
                case k:
                case D:
                case d:
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
    return y(s) === h;
  }
  return q.AsyncMode = f, q.ConcurrentMode = h, q.ContextConsumer = c, q.ContextProvider = d, q.Element = t, q.ForwardRef = p, q.Fragment = n, q.Lazy = k, q.Memo = D, q.Portal = r, q.Profiler = a, q.StrictMode = o, q.Suspense = g, q.isAsyncMode = function(s) {
    return S(s) || y(s) === f;
  }, q.isConcurrentMode = S, q.isContextConsumer = function(s) {
    return y(s) === c;
  }, q.isContextProvider = function(s) {
    return y(s) === d;
  }, q.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === t;
  }, q.isForwardRef = function(s) {
    return y(s) === p;
  }, q.isFragment = function(s) {
    return y(s) === n;
  }, q.isLazy = function(s) {
    return y(s) === k;
  }, q.isMemo = function(s) {
    return y(s) === D;
  }, q.isPortal = function(s) {
    return y(s) === r;
  }, q.isProfiler = function(s) {
    return y(s) === a;
  }, q.isStrictMode = function(s) {
    return y(s) === o;
  }, q.isSuspense = function(s) {
    return y(s) === g;
  }, q.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === h || s === a || s === o || s === g || s === w || typeof s == "object" && s !== null && (s.$$typeof === k || s.$$typeof === D || s.$$typeof === d || s.$$typeof === c || s.$$typeof === p || s.$$typeof === $ || s.$$typeof === j || s.$$typeof === b || s.$$typeof === R);
  }, q.typeOf = y, q;
}
var W = {};
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
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, w = e ? Symbol.for("react.suspense_list") : 60120, D = e ? Symbol.for("react.memo") : 60115, k = e ? Symbol.for("react.lazy") : 60116, R = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function y(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === n || v === h || v === a || v === o || v === g || v === w || typeof v == "object" && v !== null && (v.$$typeof === k || v.$$typeof === D || v.$$typeof === d || v.$$typeof === c || v.$$typeof === p || v.$$typeof === $ || v.$$typeof === j || v.$$typeof === b || v.$$typeof === R);
    }
    function S(v) {
      if (typeof v == "object" && v !== null) {
        var Y = v.$$typeof;
        switch (Y) {
          case t:
            var ne = v.type;
            switch (ne) {
              case f:
              case h:
              case n:
              case a:
              case o:
              case g:
                return ne;
              default:
                var we = ne && ne.$$typeof;
                switch (we) {
                  case c:
                  case p:
                  case k:
                  case D:
                  case d:
                    return we;
                  default:
                    return Y;
                }
            }
          case r:
            return Y;
        }
      }
    }
    var s = f, _ = h, E = c, z = d, L = t, V = p, B = n, ee = k, T = D, F = r, G = a, X = o, H = g, K = !1;
    function ae(v) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), l(v) || S(v) === f;
    }
    function l(v) {
      return S(v) === h;
    }
    function m(v) {
      return S(v) === c;
    }
    function P(v) {
      return S(v) === d;
    }
    function M(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function O(v) {
      return S(v) === p;
    }
    function N(v) {
      return S(v) === n;
    }
    function u(v) {
      return S(v) === k;
    }
    function C(v) {
      return S(v) === D;
    }
    function x(v) {
      return S(v) === r;
    }
    function I(v) {
      return S(v) === a;
    }
    function A(v) {
      return S(v) === o;
    }
    function te(v) {
      return S(v) === g;
    }
    W.AsyncMode = s, W.ConcurrentMode = _, W.ContextConsumer = E, W.ContextProvider = z, W.Element = L, W.ForwardRef = V, W.Fragment = B, W.Lazy = ee, W.Memo = T, W.Portal = F, W.Profiler = G, W.StrictMode = X, W.Suspense = H, W.isAsyncMode = ae, W.isConcurrentMode = l, W.isContextConsumer = m, W.isContextProvider = P, W.isElement = M, W.isForwardRef = O, W.isFragment = N, W.isLazy = u, W.isMemo = C, W.isPortal = x, W.isProfiler = I, W.isStrictMode = A, W.isSuspense = te, W.isValidElementType = y, W.typeOf = S;
  }()), W;
}
var ut;
function jt() {
  return ut || (ut = 1, process.env.NODE_ENV === "production" ? xe.exports = Br() : xe.exports = Ur()), xe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var $e, dt;
function Gr() {
  if (dt)
    return $e;
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
      for (var d = {}, c = 0; c < 10; c++)
        d["_" + String.fromCharCode(c)] = c;
      var f = Object.getOwnPropertyNames(d).map(function(p) {
        return d[p];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        h[p] = p;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return $e = o() ? Object.assign : function(a, d) {
    for (var c, f = n(a), h, p = 1; p < arguments.length; p++) {
      c = Object(arguments[p]);
      for (var g in c)
        t.call(c, g) && (f[g] = c[g]);
      if (e) {
        h = e(c);
        for (var w = 0; w < h.length; w++)
          r.call(c, h[w]) && (f[h[w]] = c[h[w]]);
      }
    }
    return f;
  }, $e;
}
var Ye, ft;
function Qe() {
  if (ft)
    return Ye;
  ft = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ye = e, Ye;
}
var je, mt;
function qt() {
  return mt || (mt = 1, je = Function.call.bind(Object.prototype.hasOwnProperty)), je;
}
var qe, pt;
function Hr() {
  if (pt)
    return qe;
  pt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Qe(), r = {}, n = qt();
    e = function(a) {
      var d = "Warning: " + a;
      typeof console < "u" && console.error(d);
      try {
        throw new Error(d);
      } catch {
      }
    };
  }
  function o(a, d, c, f, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (n(a, p)) {
          var g;
          try {
            if (typeof a[p] != "function") {
              var w = Error(
                (f || "React class") + ": " + c + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            g = a[p](d, p, f, c, null, t);
          } catch (k) {
            g = k;
          }
          if (g && !(g instanceof Error) && e(
            (f || "React class") + ": type specification of " + c + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in r)) {
            r[g.message] = !0;
            var D = h ? h() : "";
            e(
              "Failed " + c + " type: " + g.message + (D ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, qe = o, qe;
}
var We, ht;
function Qr() {
  if (ht)
    return We;
  ht = 1;
  var e = jt(), t = Gr(), r = Qe(), n = qt(), o = Hr(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var f = "Warning: " + c;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function d() {
    return null;
  }
  return We = function(c, f) {
    var h = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function g(l) {
      var m = l && (h && l[h] || l[p]);
      if (typeof m == "function")
        return m;
    }
    var w = "<<anonymous>>", D = {
      array: j("array"),
      bigint: j("bigint"),
      bool: j("boolean"),
      func: j("function"),
      number: j("number"),
      object: j("object"),
      string: j("string"),
      symbol: j("symbol"),
      any: b(),
      arrayOf: y,
      element: S(),
      elementType: s(),
      instanceOf: _,
      node: V(),
      objectOf: z,
      oneOf: E,
      oneOfType: L,
      shape: ee,
      exact: T
    };
    function k(l, m) {
      return l === m ? l !== 0 || 1 / l === 1 / m : l !== l && m !== m;
    }
    function R(l, m) {
      this.message = l, this.data = m && typeof m == "object" ? m : {}, this.stack = "";
    }
    R.prototype = Error.prototype;
    function $(l) {
      if (process.env.NODE_ENV !== "production")
        var m = {}, P = 0;
      function M(N, u, C, x, I, A, te) {
        if (x = x || w, A = A || C, te !== r) {
          if (f) {
            var v = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw v.name = "Invariant Violation", v;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Y = x + ":" + C;
            !m[Y] && // Avoid spamming the console because they are often not actionable except for lib authors
            P < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + A + "` prop on `" + x + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), m[Y] = !0, P++);
          }
        }
        return u[C] == null ? N ? u[C] === null ? new R("The " + I + " `" + A + "` is marked as required " + ("in `" + x + "`, but its value is `null`.")) : new R("The " + I + " `" + A + "` is marked as required in " + ("`" + x + "`, but its value is `undefined`.")) : null : l(u, C, x, I, A);
      }
      var O = M.bind(null, !1);
      return O.isRequired = M.bind(null, !0), O;
    }
    function j(l) {
      function m(P, M, O, N, u, C) {
        var x = P[M], I = X(x);
        if (I !== l) {
          var A = H(x);
          return new R(
            "Invalid " + N + " `" + u + "` of type " + ("`" + A + "` supplied to `" + O + "`, expected ") + ("`" + l + "`."),
            { expectedType: l }
          );
        }
        return null;
      }
      return $(m);
    }
    function b() {
      return $(d);
    }
    function y(l) {
      function m(P, M, O, N, u) {
        if (typeof l != "function")
          return new R("Property `" + u + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var C = P[M];
        if (!Array.isArray(C)) {
          var x = X(C);
          return new R("Invalid " + N + " `" + u + "` of type " + ("`" + x + "` supplied to `" + O + "`, expected an array."));
        }
        for (var I = 0; I < C.length; I++) {
          var A = l(C, I, O, N, u + "[" + I + "]", r);
          if (A instanceof Error)
            return A;
        }
        return null;
      }
      return $(m);
    }
    function S() {
      function l(m, P, M, O, N) {
        var u = m[P];
        if (!c(u)) {
          var C = X(u);
          return new R("Invalid " + O + " `" + N + "` of type " + ("`" + C + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return $(l);
    }
    function s() {
      function l(m, P, M, O, N) {
        var u = m[P];
        if (!e.isValidElementType(u)) {
          var C = X(u);
          return new R("Invalid " + O + " `" + N + "` of type " + ("`" + C + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return $(l);
    }
    function _(l) {
      function m(P, M, O, N, u) {
        if (!(P[M] instanceof l)) {
          var C = l.name || w, x = ae(P[M]);
          return new R("Invalid " + N + " `" + u + "` of type " + ("`" + x + "` supplied to `" + O + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return $(m);
    }
    function E(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), d;
      function m(P, M, O, N, u) {
        for (var C = P[M], x = 0; x < l.length; x++)
          if (k(C, l[x]))
            return null;
        var I = JSON.stringify(l, function(te, v) {
          var Y = H(v);
          return Y === "symbol" ? String(v) : v;
        });
        return new R("Invalid " + N + " `" + u + "` of value `" + String(C) + "` " + ("supplied to `" + O + "`, expected one of " + I + "."));
      }
      return $(m);
    }
    function z(l) {
      function m(P, M, O, N, u) {
        if (typeof l != "function")
          return new R("Property `" + u + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var C = P[M], x = X(C);
        if (x !== "object")
          return new R("Invalid " + N + " `" + u + "` of type " + ("`" + x + "` supplied to `" + O + "`, expected an object."));
        for (var I in C)
          if (n(C, I)) {
            var A = l(C, I, O, N, u + "." + I, r);
            if (A instanceof Error)
              return A;
          }
        return null;
      }
      return $(m);
    }
    function L(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), d;
      for (var m = 0; m < l.length; m++) {
        var P = l[m];
        if (typeof P != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + K(P) + " at index " + m + "."
          ), d;
      }
      function M(O, N, u, C, x) {
        for (var I = [], A = 0; A < l.length; A++) {
          var te = l[A], v = te(O, N, u, C, x, r);
          if (v == null)
            return null;
          v.data && n(v.data, "expectedType") && I.push(v.data.expectedType);
        }
        var Y = I.length > 0 ? ", expected one of type [" + I.join(", ") + "]" : "";
        return new R("Invalid " + C + " `" + x + "` supplied to " + ("`" + u + "`" + Y + "."));
      }
      return $(M);
    }
    function V() {
      function l(m, P, M, O, N) {
        return F(m[P]) ? null : new R("Invalid " + O + " `" + N + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return $(l);
    }
    function B(l, m, P, M, O) {
      return new R(
        (l || "React class") + ": " + m + " type `" + P + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function ee(l) {
      function m(P, M, O, N, u) {
        var C = P[M], x = X(C);
        if (x !== "object")
          return new R("Invalid " + N + " `" + u + "` of type `" + x + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var I in l) {
          var A = l[I];
          if (typeof A != "function")
            return B(O, N, u, I, H(A));
          var te = A(C, I, O, N, u + "." + I, r);
          if (te)
            return te;
        }
        return null;
      }
      return $(m);
    }
    function T(l) {
      function m(P, M, O, N, u) {
        var C = P[M], x = X(C);
        if (x !== "object")
          return new R("Invalid " + N + " `" + u + "` of type `" + x + "` " + ("supplied to `" + O + "`, expected `object`."));
        var I = t({}, P[M], l);
        for (var A in I) {
          var te = l[A];
          if (n(l, A) && typeof te != "function")
            return B(O, N, u, A, H(te));
          if (!te)
            return new R(
              "Invalid " + N + " `" + u + "` key `" + A + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(P[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(l), null, "  ")
            );
          var v = te(C, A, O, N, u + "." + A, r);
          if (v)
            return v;
        }
        return null;
      }
      return $(m);
    }
    function F(l) {
      switch (typeof l) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !l;
        case "object":
          if (Array.isArray(l))
            return l.every(F);
          if (l === null || c(l))
            return !0;
          var m = g(l);
          if (m) {
            var P = m.call(l), M;
            if (m !== l.entries) {
              for (; !(M = P.next()).done; )
                if (!F(M.value))
                  return !1;
            } else
              for (; !(M = P.next()).done; ) {
                var O = M.value;
                if (O && !F(O[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function G(l, m) {
      return l === "symbol" ? !0 : m ? m["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && m instanceof Symbol : !1;
    }
    function X(l) {
      var m = typeof l;
      return Array.isArray(l) ? "array" : l instanceof RegExp ? "object" : G(m, l) ? "symbol" : m;
    }
    function H(l) {
      if (typeof l > "u" || l === null)
        return "" + l;
      var m = X(l);
      if (m === "object") {
        if (l instanceof Date)
          return "date";
        if (l instanceof RegExp)
          return "regexp";
      }
      return m;
    }
    function K(l) {
      var m = H(l);
      switch (m) {
        case "array":
        case "object":
          return "an " + m;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + m;
        default:
          return m;
      }
    }
    function ae(l) {
      return !l.constructor || !l.constructor.name ? w : l.constructor.name;
    }
    return D.checkPropTypes = o, D.resetWarningCache = o.resetWarningCache, D.PropTypes = D, D;
  }, We;
}
var ze, gt;
function Kr() {
  if (gt)
    return ze;
  gt = 1;
  var e = Qe();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ze = function() {
    function n(d, c, f, h, p, g) {
      if (g !== e) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
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
  }, ze;
}
if (process.env.NODE_ENV !== "production") {
  var Jr = jt(), Zr = !0;
  Ue.exports = Qr()(Jr.isElement, Zr);
} else
  Ue.exports = Kr()();
var Wt = Ue.exports;
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
var U = {}, fe = {};
Object.defineProperty(fe, "__esModule", {
  value: !0
});
fe.dontSetMe = sn;
fe.findInArray = rn;
fe.int = an;
fe.isFunction = nn;
fe.isNum = on;
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
const Ve = ["Moz", "Webkit", "O", "ms"];
function Vt() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const r = (e = window.document) === null || e === void 0 || (e = e.documentElement) === null || e === void 0 ? void 0 : e.style;
  if (!r || t in r)
    return "";
  for (let n = 0; n < Ve.length; n++)
    if (Xt(t, Ve[n]) in r)
      return Ve[n];
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
Object.defineProperty(U, "__esModule", {
  value: !0
});
U.addClassName = Gt;
U.addEvent = fn;
U.addUserSelectStyles = wn;
U.createCSSTransform = bn;
U.createSVGTransform = Sn;
U.getTouch = Cn;
U.getTouchIdentifier = Pn;
U.getTranslation = Ke;
U.innerHeight = gn;
U.innerWidth = yn;
U.matchesSelector = Ut;
U.matchesSelectorAndParentsTo = dn;
U.offsetXYFromParent = vn;
U.outerHeight = pn;
U.outerWidth = hn;
U.removeClassName = Ht;
U.removeEvent = mn;
U.removeUserSelectStyles = Tn;
var le = fe, vt = un(be);
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
      var d = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      d && (d.get || d.set) ? Object.defineProperty(n, a, d) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
let De = "";
function Ut(e, t) {
  return De || (De = (0, le.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, le.isFunction)(e[r]);
  })), (0, le.isFunction)(e[De]) ? e[De](t) : !1;
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
  return t += (0, le.int)(r.borderTopWidth), t += (0, le.int)(r.borderBottomWidth), t;
}
function hn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, le.int)(r.borderLeftWidth), t += (0, le.int)(r.borderRightWidth), t;
}
function gn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, le.int)(r.paddingTop), t -= (0, le.int)(r.paddingBottom), t;
}
function yn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, le.int)(r.paddingLeft), t -= (0, le.int)(r.paddingRight), t;
}
function vn(e, t, r) {
  const o = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), a = (e.clientX + t.scrollLeft - o.left) / r, d = (e.clientY + t.scrollTop - o.top) / r;
  return {
    x: a,
    y: d
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
    const d = "".concat(typeof t.x == "string" ? t.x : t.x + r), c = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    a = "translate(".concat(d, ", ").concat(c, ")") + a;
  }
  return a;
}
function Cn(e, t) {
  return e.targetTouches && (0, le.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, le.findInArray)(e.changedTouches, (r) => t === r.identifier);
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
var me = {};
Object.defineProperty(me, "__esModule", {
  value: !0
});
me.canDragX = Dn;
me.canDragY = En;
me.createCoreData = _n;
me.createDraggableData = Mn;
me.getBoundPosition = On;
me.getControlPosition = Rn;
me.snapToGrid = xn;
var se = fe, Ce = U;
function On(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : Nn(n);
  const o = Je(e);
  if (typeof n == "string") {
    const {
      ownerDocument: a
    } = o, d = a.defaultView;
    let c;
    if (n === "parent" ? c = o.parentNode : c = a.querySelector(n), !(c instanceof d.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const f = c, h = d.getComputedStyle(o), p = d.getComputedStyle(f);
    n = {
      left: -o.offsetLeft + (0, se.int)(p.paddingLeft) + (0, se.int)(h.marginLeft),
      top: -o.offsetTop + (0, se.int)(p.paddingTop) + (0, se.int)(h.marginTop),
      right: (0, Ce.innerWidth)(f) - (0, Ce.outerWidth)(o) - o.offsetLeft + (0, se.int)(p.paddingRight) - (0, se.int)(h.marginRight),
      bottom: (0, Ce.innerHeight)(f) - (0, Ce.outerHeight)(o) - o.offsetTop + (0, se.int)(p.paddingBottom) - (0, se.int)(h.marginBottom)
    };
  }
  return (0, se.isNum)(n.right) && (t = Math.min(t, n.right)), (0, se.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, se.isNum)(n.left) && (t = Math.max(t, n.left)), (0, se.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
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
  const o = Je(r), a = r.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, Ce.offsetXYFromParent)(n || e, a, r.props.scale);
}
function _n(e, t, r) {
  const n = !(0, se.isNum)(e.lastX), o = Je(e);
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
function Je(e) {
  const t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var ke = {}, Le = {};
Object.defineProperty(Le, "__esModule", {
  value: !0
});
Le.default = Fn;
function Fn() {
}
Object.defineProperty(ke, "__esModule", {
  value: !0
});
ke.default = void 0;
var Xe = kn(pe), oe = Ze(Wt), An = Ze(Nt), J = U, he = me, Be = fe, Te = Ze(Le);
function Ze(e) {
  return e && e.__esModule ? e : { default: e };
}
function Qt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Qt = function(n) {
    return n ? r : t;
  })(e);
}
function kn(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Qt(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var d = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      d && (d.get || d.set) ? Object.defineProperty(n, a, d) : n[a] = e[a];
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
const ce = {
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
let ge = ce.mouse, Ie = class extends Xe.Component {
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
      if (this.props.disabled || !(t.target instanceof n.defaultView.Node) || this.props.handle && !(0, J.matchesSelectorAndParentsTo)(t.target, this.props.handle, r) || this.props.cancel && (0, J.matchesSelectorAndParentsTo)(t.target, this.props.cancel, r))
        return;
      t.type === "touchstart" && t.preventDefault();
      const o = (0, J.getTouchIdentifier)(t);
      this.touchIdentifier = o;
      const a = (0, he.getControlPosition)(t, o, this);
      if (a == null)
        return;
      const {
        x: d,
        y: c
      } = a, f = (0, he.createCoreData)(this, d, c);
      (0, Te.default)("DraggableCore: handleDragStart: %j", f), (0, Te.default)("calling", this.props.onStart), !(this.props.onStart(t, f) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, J.addUserSelectStyles)(n), this.dragging = !0, this.lastX = d, this.lastY = c, (0, J.addEvent)(n, ge.move, this.handleDrag), (0, J.addEvent)(n, ge.stop, this.handleDragStop));
    }), re(this, "handleDrag", (t) => {
      const r = (0, he.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let c = n - this.lastX, f = o - this.lastY;
        if ([c, f] = (0, he.snapToGrid)(this.props.grid, c, f), !c && !f)
          return;
        n = this.lastX + c, o = this.lastY + f;
      }
      const a = (0, he.createCoreData)(this, n, o);
      if ((0, Te.default)("DraggableCore: handleDrag: %j", a), this.props.onDrag(t, a) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const f = document.createEvent("MouseEvents");
          f.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(f);
        }
        return;
      }
      this.lastX = n, this.lastY = o;
    }), re(this, "handleDragStop", (t) => {
      if (!this.dragging)
        return;
      const r = (0, he.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let f = n - this.lastX || 0, h = o - this.lastY || 0;
        [f, h] = (0, he.snapToGrid)(this.props.grid, f, h), n = this.lastX + f, o = this.lastY + h;
      }
      const a = (0, he.createCoreData)(this, n, o);
      if (this.props.onStop(t, a) === !1 || this.mounted === !1)
        return !1;
      const c = this.findDOMNode();
      c && this.props.enableUserSelectHack && (0, J.removeUserSelectStyles)(c.ownerDocument), (0, Te.default)("DraggableCore: handleDragStop: %j", a), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, c && ((0, Te.default)("DraggableCore: Removing handlers"), (0, J.removeEvent)(c.ownerDocument, ge.move, this.handleDrag), (0, J.removeEvent)(c.ownerDocument, ge.stop, this.handleDragStop));
    }), re(this, "onMouseDown", (t) => (ge = ce.mouse, this.handleDragStart(t))), re(this, "onMouseUp", (t) => (ge = ce.mouse, this.handleDragStop(t))), re(this, "onTouchStart", (t) => (ge = ce.touch, this.handleDragStart(t))), re(this, "onTouchEnd", (t) => (ge = ce.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = !0;
    const t = this.findDOMNode();
    t && (0, J.addEvent)(t, ce.touch.start, this.onTouchStart, {
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
      (0, J.removeEvent)(r, ce.mouse.move, this.handleDrag), (0, J.removeEvent)(r, ce.touch.move, this.handleDrag), (0, J.removeEvent)(r, ce.mouse.stop, this.handleDragStop), (0, J.removeEvent)(r, ce.touch.stop, this.handleDragStop), (0, J.removeEvent)(t, ce.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, J.removeUserSelectStyles)(r);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var t, r;
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (r = this.props) === null || r === void 0 || (r = r.nodeRef) === null || r === void 0 ? void 0 : r.current : An.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ Xe.cloneElement(Xe.Children.only(this.props.children), {
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
ke.default = Ie;
re(Ie, "displayName", "DraggableCore");
re(Ie, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: oe.default.bool,
  children: oe.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: oe.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: oe.default.bool,
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
  grid: oe.default.arrayOf(oe.default.number),
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
  handle: oe.default.string,
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
  cancel: oe.default.string,
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
  nodeRef: oe.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: oe.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: oe.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: oe.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: oe.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: oe.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: Be.dontSetMe,
  style: Be.dontSetMe,
  transform: Be.dontSetMe
});
re(Ie, "defaultProps", {
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
  var t = w(pe), r = p(Wt), n = p(Nt), o = p(tn), a = U, d = me, c = fe, f = p(ke), h = p(Le);
  function p(b) {
    return b && b.__esModule ? b : { default: b };
  }
  function g(b) {
    if (typeof WeakMap != "function")
      return null;
    var y = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap();
    return (g = function(s) {
      return s ? S : y;
    })(b);
  }
  function w(b, y) {
    if (!y && b && b.__esModule)
      return b;
    if (b === null || typeof b != "object" && typeof b != "function")
      return { default: b };
    var S = g(y);
    if (S && S.has(b))
      return S.get(b);
    var s = {}, _ = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var E in b)
      if (E !== "default" && Object.prototype.hasOwnProperty.call(b, E)) {
        var z = _ ? Object.getOwnPropertyDescriptor(b, E) : null;
        z && (z.get || z.set) ? Object.defineProperty(s, E, z) : s[E] = b[E];
      }
    return s.default = b, S && S.set(b, s), s;
  }
  function D() {
    return D = Object.assign ? Object.assign.bind() : function(b) {
      for (var y = 1; y < arguments.length; y++) {
        var S = arguments[y];
        for (var s in S)
          Object.prototype.hasOwnProperty.call(S, s) && (b[s] = S[s]);
      }
      return b;
    }, D.apply(this, arguments);
  }
  function k(b, y, S) {
    return y = R(y), y in b ? Object.defineProperty(b, y, { value: S, enumerable: !0, configurable: !0, writable: !0 }) : b[y] = S, b;
  }
  function R(b) {
    var y = $(b, "string");
    return typeof y == "symbol" ? y : String(y);
  }
  function $(b, y) {
    if (typeof b != "object" || b === null)
      return b;
    var S = b[Symbol.toPrimitive];
    if (S !== void 0) {
      var s = S.call(b, y || "default");
      if (typeof s != "object")
        return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (y === "string" ? String : Number)(b);
  }
  class j extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(y, S) {
      let {
        position: s
      } = y, {
        prevPropsPosition: _
      } = S;
      return s && (!_ || s.x !== _.x || s.y !== _.y) ? ((0, h.default)("Draggable: getDerivedStateFromProps %j", {
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
    constructor(y) {
      super(y), k(this, "onDragStart", (S, s) => {
        if ((0, h.default)("Draggable: onDragStart: %j", s), this.props.onStart(S, (0, d.createDraggableData)(this, s)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), k(this, "onDrag", (S, s) => {
        if (!this.state.dragging)
          return !1;
        (0, h.default)("Draggable: onDrag: %j", s);
        const _ = (0, d.createDraggableData)(this, s), E = {
          x: _.x,
          y: _.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: L,
            y: V
          } = E;
          E.x += this.state.slackX, E.y += this.state.slackY;
          const [B, ee] = (0, d.getBoundPosition)(this, E.x, E.y);
          E.x = B, E.y = ee, E.slackX = this.state.slackX + (L - E.x), E.slackY = this.state.slackY + (V - E.y), _.x = E.x, _.y = E.y, _.deltaX = E.x - this.state.x, _.deltaY = E.y - this.state.y;
        }
        if (this.props.onDrag(S, _) === !1)
          return !1;
        this.setState(E);
      }), k(this, "onDragStop", (S, s) => {
        if (!this.state.dragging || this.props.onStop(S, (0, d.createDraggableData)(this, s)) === !1)
          return !1;
        (0, h.default)("Draggable: onDragStop: %j", s);
        const E = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: L,
            y: V
          } = this.props.position;
          E.x = L, E.y = V;
        }
        this.setState(E);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: y.position ? y.position.x : y.defaultPosition.x,
        y: y.position ? y.position.y : y.defaultPosition.y,
        prevPropsPosition: {
          ...y.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, y.position && !(y.onDrag || y.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
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
      var y, S;
      return (y = (S = this.props) === null || S === void 0 || (S = S.nodeRef) === null || S === void 0 ? void 0 : S.current) !== null && y !== void 0 ? y : n.default.findDOMNode(this);
    }
    render() {
      const {
        axis: y,
        bounds: S,
        children: s,
        defaultPosition: _,
        defaultClassName: E,
        defaultClassNameDragging: z,
        defaultClassNameDragged: L,
        position: V,
        positionOffset: B,
        scale: ee,
        ...T
      } = this.props;
      let F = {}, G = null;
      const H = !!!V || this.state.dragging, K = V || _, ae = {
        // Set left if horizontal drag is enabled
        x: (0, d.canDragX)(this) && H ? this.state.x : K.x,
        // Set top if vertical drag is enabled
        y: (0, d.canDragY)(this) && H ? this.state.y : K.y
      };
      this.state.isElementSVG ? G = (0, a.createSVGTransform)(ae, B) : F = (0, a.createCSSTransform)(ae, B);
      const l = (0, o.default)(s.props.className || "", E, {
        [z]: this.state.dragging,
        [L]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(f.default, D({}, T, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(s), {
        className: l,
        style: {
          ...s.props.style,
          ...F
        },
        transform: G
      }));
    }
  }
  e.default = j, k(j, "displayName", "Draggable"), k(j, "propTypes", {
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
    className: c.dontSetMe,
    style: c.dontSetMe,
    transform: c.dontSetMe
  }), k(j, "defaultProps", {
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
  default: Kt,
  DraggableCore: $n
} = Yt;
Ae.exports = Kt;
Ae.exports.default = Kt;
Ae.exports.DraggableCore = $n;
var Yn = Ae.exports;
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
}, Wn = de(function(t, r) {
  const { formLayout: n, context: o } = t, { formData: a } = o, d = ue({}), c = qn(t), f = "palmyra-form-field-data", h = wt(() => (p) => At(p, d, p.label), [a.data]);
  return /* @__PURE__ */ i("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: n.fields.map((p, g) => /* @__PURE__ */ i("div", { className: c, children: /* @__PURE__ */ i("div", { className: f, children: h(p) }) }, p.attribute)) });
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
  var { getFieldManager: a, getFilterData: d } = Fr(o);
  const c = () => {
    n({});
  }, f = () => {
    var w = d();
    n && n(w);
  }, h = () => {
    r();
  }, p = (w) => {
    w.keyCode === 27 && h();
  }, g = _r(e);
  return /* @__PURE__ */ i("div", { className: "grid-filter-container", children: /* @__PURE__ */ i(
    fr,
    {
      open: t,
      onClose: h,
      PaperComponent: zn,
      onKeyDown: p,
      PaperProps: { sx: { minWidth: "500px" } },
      children: /* @__PURE__ */ i(xt, { onClickAway: r, children: /* @__PURE__ */ Q("div", { children: [
        /* @__PURE__ */ Q("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ i("div", { className: "grid-header-text-container", children: /* @__PURE__ */ i("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ i("div", { className: "grid-header-icon-container", onClick: h, children: /* @__PURE__ */ i(Or, { className: "filter-cancel-icon" }) })
        ] }),
        /* @__PURE__ */ i("span", { className: "filter-header-border" }),
        /* @__PURE__ */ i("div", { className: "grid-filter-content", children: /* @__PURE__ */ i(Me.Provider, { value: a, children: /* @__PURE__ */ i(
          kt,
          {
            context: { formData: {} },
            layout: {
              type: "form",
              formLayout: {
                fields: g,
                options: {
                  columns: 2
                }
              },
              Renderer: Wn
            }
          }
        ) }) }),
        /* @__PURE__ */ Q("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ i(Se, { className: "filter-reset-btn", disableRipple: !0, onClick: c, children: "Reset" }),
          /* @__PURE__ */ i(Se, { className: "filter-button", disableRipple: !0, onClick: f, children: "Filter" })
        ] })
      ] }) })
    }
  ) });
}, Xn = de(function(t, r) {
  var v;
  const { columns: n, children: o, EmptyChild: a, onRowClick: d, quickSearch: c } = t, f = a || wr, h = t.customizer || Rr, [p, g] = Z(!1), [w, D] = Z("standard"), [k, R] = Z(!1), [$, j] = Z(""), {
    setQueryFilter: b,
    setQuickSearch: y,
    setSortColumns: S,
    setEndPointOptions: s,
    gotoPage: _,
    setPageSize: E,
    getPageNo: z,
    refreshData: L,
    setQueryLimit: V,
    getQueryLimit: B,
    data: ee,
    totalRecords: T,
    queryLimit: F,
    pageSizeOptions: G,
    filter: X
  } = Fe(t), H = r || ue(null);
  Pe(H, () => ({
    setFilter: (Y) => {
      b(Y);
    },
    refresh: () => {
      L();
    },
    resetFilter() {
      b({});
    },
    setEndPointOptions: (Y) => {
      s(Y);
    },
    addFilter: (Y, ne) => {
      b((we) => (we[Y] = ne, { ...we }));
    },
    setQueryLimit: (Y) => {
      V(Y);
    },
    getQueryLimit: () => (console.log("GET querlsdf", B()), B())
  }), [B]);
  const K = (Y, ne) => {
    _(ne);
  }, ae = Pr(n, h), l = (Y) => {
    D(Y);
  }, m = () => {
    g(!p);
  }, P = () => w === "compact" ? { padding: "3px" } : w === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, M = () => w === "compact" ? { padding: "3px" } : w === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, O = () => {
    var Y;
    switch (w) {
      case "compact":
        Y = /* @__PURE__ */ i(nt, { className: "density-icon" });
        break;
      case "comfortable":
        Y = /* @__PURE__ */ i(ot, { className: "density-icon" });
        break;
      default:
        Y = /* @__PURE__ */ i(rt, { className: "grid-button-icon" });
        break;
    }
    return Y;
  }, N = (Y) => {
    const ne = Y.target.value;
    j(ne), ne ? y(ne) : b({});
  }, u = (Y) => {
    d && d(Y);
  }, C = (Y) => {
    const ne = parseInt(Y.target.value, 10);
    E(ne);
  }, x = () => {
    console.info("Export Clicked");
  }, I = 200, A = !!t.pageSize;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ Q("div", { children: [
    o,
    /* @__PURE__ */ Q("div", { className: "grid-header", children: [
      /* @__PURE__ */ i("div", { className: "grid-header-filter", children: !!c && /* @__PURE__ */ i(
        He,
        {
          sx: { width: I },
          type: "text",
          value: $,
          onChange: N,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ i(Dt, { position: "end", children: /* @__PURE__ */ i($t, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ i(xt, { onClickAway: () => {
        g(!1);
      }, children: /* @__PURE__ */ Q("div", { className: "grid-header-button grid-density-btn", onClick: m, children: [
        /* @__PURE__ */ i(Oe, { title: "Density", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: O() }) }),
        p && /* @__PURE__ */ i("div", { className: "density-dropdown-content", children: /* @__PURE__ */ Q("ul", { children: [
          /* @__PURE__ */ Q("li", { onClick: () => l("standard"), children: [
            /* @__PURE__ */ i(rt, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ Q("li", { onClick: () => l("compact"), children: [
            /* @__PURE__ */ i(nt, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ Q("li", { onClick: () => l("comfortable"), children: [
            /* @__PURE__ */ i(ot, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      (v = n[0]) != null && v.searchable ? /* @__PURE__ */ Q("div", { className: "grid-header-button grid-filter-btn", children: [
        /* @__PURE__ */ i(Oe, { title: "Filter", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, onClick: () => R(!0), children: /* @__PURE__ */ i(xr, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ i(
          Vn,
          {
            columns: n,
            setFilter: b,
            defaultFilter: X,
            isOpen: k,
            onClose: () => R(!1)
          }
        )
      ] }) : "",
      /* @__PURE__ */ i("div", { className: "grid-header-button grid-export-btn", onClick: x, children: /* @__PURE__ */ i(Oe, { title: "Export", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Dr, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ i(Oe, { title: "New", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Er, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ i(Ne, {})
    ] }),
    /* @__PURE__ */ i("div", { className: "grid-table", children: /* @__PURE__ */ i(
      Tr,
      {
        columnDefs: ae,
        EmptyChild: f,
        rowData: ee,
        onRowClick: u,
        onRowStyle: P,
        onHeaderStyle: M,
        onSortColumn: S
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "grid-header", children: /* @__PURE__ */ i("div", { className: "grid-filter", children: A && /* @__PURE__ */ i(
      Et,
      {
        component: "div",
        count: T || 0,
        page: z(),
        onPageChange: K,
        rowsPerPage: F.limit,
        rowsPerPageOptions: G || [],
        onRowsPerPageChange: C
      }
    ) }) })
  ] }) });
}), sa = de(function(t, r) {
  const { columns: n, endPoint: o, storeFactory: a, layoutParams: d, pagination: c } = t, f = t.quickSearch || "", h = (g, w) => {
  };
  ve(() => {
    var g = at.subscribe(t.topic, h);
    return () => {
      at.unsubscribe(g);
    };
  }, [t.topic]);
  const p = {
    fields: n,
    pagination: c,
    quickSearch: f,
    storeOptions: {
      endPoint: o
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ i(Ne, { children: /* @__PURE__ */ i(Ge.Provider, { value: a, children: /* @__PURE__ */ i(
    Jt,
    {
      layout: p,
      context: d,
      defaultParams: t.defaultParams,
      customizer: t.customizer,
      ref: r
    }
  ) }) });
}), Bn = de(function(t, r) {
  const n = t.layout, [o, a] = Z(n.fields), d = n.pagination ? n.pagination : [15], c = Ee(Ge), f = Ee(Pt);
  var h = n.storeOptions || {}, p = {};
  vr(p, h, f);
  const g = c.getGridStore(p, n.storeOptions.endPoint);
  ve(() => {
    h.hasLayout && g.queryLayout({}).then((k) => {
      a(k.columns);
    });
  }, []);
  const { onClick: w, onNewClick: D } = Ar(n.actionOptions, f);
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    Xn,
    {
      columns: o,
      store: g,
      pageSize: d,
      onRowClick: w,
      onNewClick: D,
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
function Hn(e, t) {
  var r = e || 1, n = t;
  return {
    w: r,
    h: n
  };
}
const Zt = (e) => {
  const { layout: t, context: r } = e, n = t.sections;
  function o(a, d, c) {
    const { w: f, h } = Hn(a.width, a.height);
    return /* @__PURE__ */ i(pr, { sx: { width: f, height: h }, children: /* @__PURE__ */ i(
      Gn,
      {
        layout: a,
        context: d
      }
    ) }, (a.name || "tab") + c);
  }
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap" }, children: n.map((a, d) => o(a, r, d)) });
}, bt = de(function(t, r) {
  const { layout: n } = t;
  Pe(r, () => ({
    resetFilter() {
    }
  }), []);
  const o = {}, a = n.tabs;
  return /* @__PURE__ */ i("div", { children: a.map((d, c) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    Zt,
    {
      layout: d,
      context: o
    }
  ) }, d.name + c)) });
}), Qn = (e) => {
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
}, St = de(function(t, r) {
  var p;
  const n = t.data || {}, { layout: o } = t;
  var { getFieldManager: a, getFormData: d, isFormValid: c } = Ir(n, (p = t.callbacks) == null ? void 0 : p.onFormValidChange, Qn(t.mode));
  Pe(r, () => ({
    getData() {
      return d();
    },
    isValid() {
      return c();
    }
  }), []);
  const f = { formData: n }, h = o.tabs;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(Me.Provider, { value: a, children: h.map((g, w) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    Zt,
    {
      layout: g,
      context: f
    }
  ) }, g.name + w)) }) });
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
}, la = de(function(t, r) {
  const [n, o] = Z(t.layout), a = t.mode ? t.mode : n.type ? n.type : "grid", d = t.layoutParams || {}, c = Kn(a), f = ue(0);
  return ve(() => {
    o(t.layout), f.current < 999999 ? f.current++ : f.current = 0;
  }, [t.layout]), /* @__PURE__ */ i(Ft, { fallback: /* @__PURE__ */ i("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ i(Ge.Provider, { value: t.storeFactory, children: /* @__PURE__ */ i(Pt.Provider, { value: d, children: /* @__PURE__ */ i(c, { ...t, ref: (h) => {
    r && (r.current = h);
  } }, f.current) }) }) });
}), ca = de(function(t, r) {
  const { children: n, Child: o, childProps: a, pageSize: d } = t, c = r || ue(null), {
    setQueryFilter: f,
    refreshData: h,
    setQuickSearch: p,
    gotoPage: g,
    setPageSize: w,
    getPageNo: D,
    data: k,
    totalRecords: R,
    pageSizeOptions: $,
    queryLimit: j
  } = Fe(t), b = t.listKeyProvider || ((L, V) => V);
  Pe(c, () => ({
    setFilter(L) {
      f(L);
    },
    refresh: () => {
      h();
    },
    gotoPage(L) {
      g(L);
    },
    nextPage() {
    },
    prevPage() {
    }
  }), []);
  const y = (L, V) => {
    g(V);
  }, S = (L) => {
    const V = L.target.value;
    p(V);
  }, s = (L) => {
    const V = parseInt(L.target.value, 10);
    w(V);
  }, _ = 200, E = !!d, z = !!t.quickSearch;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ Q("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ Q("div", { children: [
      /* @__PURE__ */ Q("div", { className: "card-header", children: [
        /* @__PURE__ */ i("div", { className: "card-filter", children: z && /* @__PURE__ */ i(
          He,
          {
            sx: { width: _ },
            type: "text",
            onChange: S,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ i(Dt, { position: "end", children: /* @__PURE__ */ i($t, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ i("div", { className: "card-pagination", children: E && /* @__PURE__ */ i(
          Et,
          {
            component: "div",
            count: R || 0,
            page: D(),
            onPageChange: y,
            rowsPerPage: j.limit,
            rowsPerPageOptions: $ || [],
            onRowsPerPageChange: s
          }
        ) })
      ] }),
      /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
        hr,
        {
          Child: o,
          childKeyProvider: b,
          dataList: k,
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
  Fe as u
};
