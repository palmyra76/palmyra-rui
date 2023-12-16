import "../assets/ServerCardLayout.css";
import tr from "../palmyra/mui/form/MuiDatePicker.js";
import rr from "../palmyra/mui/form/MuiDateTimePicker.js";
import nr from "../palmyra/mui/form/MuiRadioGroup.js";
import or from "../palmyra/mui/form/MuiSelect.js";
import ar from "../palmyra/mui/form/MuiTextArea.js";
import ir from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import sr from "../palmyra/mui/form/MuiCheckBox.js";
import cr from "../palmyra/mui/form/MuiSwitch.js";
import lr from "../palmyra/mui/form/MuiPassword.js";
import ur from "../palmyra/mui/form/MuiNumberField.js";
import { FieldManagerContext as _e, StoreFactoryContext as Ue, LayoutParamsContext as Pt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as s, jsxs as Q, Fragment as Ne } from "react/jsx-runtime";
import pe, { useState as ee, useRef as se, useEffect as ye, forwardRef as le, useContext as Oe, useImperativeHandle as ve, useMemo as wt } from "react";
import { FormControlLabel as et, Checkbox as tt, FormControl as Tt, FormHelperText as xt, Autocomplete as dr, TextField as Ge, CircularProgress as fr, Dialog as pr, ClickAwayListener as Dt, Button as Se, Paper as mr, InputAdornment as Ot, Tooltip as Te, TablePagination as Et, Box as hr } from "@mui/material";
import gr from "../palmyra/layout/card/CardLayout.js";
import yr from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Rt, getFieldLabel as _t } from "../palmyra/mui/form/MuiUtil.js";
import Nt from "../palmyra/mui/form/FieldDecorator.js";
import { hasDot as Ee } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as Re, setValueByKey as rt } from "../palmyra/form/FormUtil.js";
import { delay as vr, mergeDeep as br } from "../palmyra/utils/index.js";
import Sr from "../palmyra/mui/form/MuiDateRangePicker.js";
import Cr from "../palmyra/mui/form/MuiIntegerField.js";
import Mt from "../palmyra/layout/container/SectionContainer.js";
import Pr from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as wr } from "../palmyra/grid/base/ColumnConverter.js";
import Tr from "../palmyra/grid/base/EmptyChildTable.js";
import xr from "../palmyra/grid/base/TableX.js";
import { Close as Dr, Menu as nt, DensitySmall as ot, DensityLarge as at, FilterAlt as Or, FileDownloadOutlined as Er, Add as Rr } from "@mui/icons-material";
import { NoopCustomizer as _r } from "../palmyra/grid/Types.js";
import { convertToField as Nr } from "../palmyra/grid/base/GridFieldConverter.js";
import { a as Mr, g as Fr } from "./_commonjsHelpers.js";
import Ft from "react-dom";
import { createFilterData as Ar } from "../palmyra/form/PalmyraFilterManager.js";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import { topic as it } from "../palmyra/utils/pubsub/topic.js";
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
import { getActionPublishers as kr } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as At } from "../palmyra/layout/ErrorBoundary.js";
import Lr from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import Ir from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { d as $r } from "./PalmyraFieldManager.js";
import { useKeyValue as Yr } from "../palmyra/utils/pubsub/PubSubHelper.js";
const Me = (e) => {
  const { store: t, quickSearch: r, endPointVars: n } = e, o = e.fetchAll != !1, [a, l] = ee(null), [c, d] = e.filterTopic ? Yr(e.filterTopic, {}) : ee({}), [f, p] = ee({}), h = se(e.initialFetch == !1), m = e.pageSize ? e.pageSize : 15;
  var w = m instanceof Array ? m : [m], _ = m instanceof Array ? m[0] : m;
  const [O, $] = ee({ limit: _, offset: 0 }), [W, C] = ee(null), g = () => Math.round(O.offset / O.limit), b = () => O.limit, i = (F) => {
    $({ ...O, offset: F * _ });
  }, k = (F) => {
    const Y = F > 10 || F == -1 ? F : 15;
    $({ ...O, limit: Y });
  }, x = () => c ? Object.keys(c).length == 0 : !1;
  ye(() => {
    if (h.current) {
      h.current = !1;
      return;
    }
    (o || !x()) && B();
  }, [O, c, f]);
  const B = () => {
    const F = { filter: c, sortOrder: f, total: !0, endPointVars: n, ...O };
    if (t)
      try {
        t.query(F).then((Y) => {
          C(Y.result), l(Y.total);
        }).catch((Y) => {
          var G = Y.response ? Y.response : Y;
          console.error("error while fetching", G), V();
        });
      } catch (Y) {
        console.error(Y), z();
      }
    else
      console.error("Store is not provided for the Grid"), z();
  }, z = () => {
    C([]), l(0);
  }, V = () => {
    C(void 0), l(null);
  };
  return {
    setQueryFilter: (F) => {
      typeof F == "function" || F && Object.keys(F).length > 0 ? d(F) : d({});
    },
    setQuickSearch: (F) => {
      const Y = r;
      d(F ? (G) => (G[Y] = F, { ...G }) : (G) => (delete G[Y], { ...G }));
    },
    setSortColumns: (F) => {
      p(F);
    },
    refreshData: B,
    gotoPage: i,
    setPageSize: k,
    getPageNo: g,
    getLimit: b,
    filter: c,
    queryLimit: O,
    data: W,
    totalRecords: a,
    pageSizeOptions: w
  };
};
function st(e) {
  return e ? Array.isArray(e) ? e : typeof e == "string" ? e.split(",") : (console.log(e), [e]) : [];
}
const sa = le(function(t, r) {
  const n = Oe(_e), o = r || se(null), a = n(t, "checkbox", o), { mutateOptions: l, setMutateOptions: c } = a, [d, f] = ee(!1), p = st(a.data), h = a.error, m = a.eventListeners, _ = { store: a.store, pageSize: -1 }, { data: O } = Me(_), $ = O, W = se(null), C = t.lookupOptions || {}, g = C.idAttribute || "id", b = C.titleAttribute || "name", i = Ee(g) ? (T) => Re(g, T) : (T) => T[g], k = Ee(b) ? (T) => Re(b, T) : (T) => T[b];
  ve(o, () => ({
    focus() {
      W.current.focus();
    },
    isValid() {
      return !h.status;
    },
    clear() {
      a.setData("", !0);
    },
    getValue() {
      return a.getData();
    },
    setValue(T, X = !1) {
      a.setData(T, X);
    },
    setVisible(T) {
      c((X) => ({ ...X, visible: T }));
    },
    setRequired(T) {
      c((X) => ({ ...X, required: T }));
    },
    setReadOnly(T) {
      c((X) => ({ ...X, readonly: T }));
    },
    setAttribute(T) {
      c((X) => ({ ...X, ...T }));
    },
    setOptions(T) {
    },
    getOptions() {
    }
  }), [a]);
  var x = Rt(t, a.data, t.label);
  t.readonly && (x.inputProps = { readOnly: !0 });
  function B(T, X) {
    const F = st(a.data);
    var Y = F.indexOf(T);
    X ? Y < 0 && F.push(T) : Y >= 0 && F.splice(Y, 1), m.onValueChange(F.toString());
  }
  var z = {
    onBlur: m.onBlur,
    onFocus: m.onFocus,
    onChange: (T) => {
      B(T.target.value, T.target.checked);
    }
  };
  const V = (T) => {
    const X = T.toString();
    return p.includes(X);
  }, U = (T) => {
    const X = T.target.checked;
    f(X);
    var F = [];
    X && $.map((Y) => {
      F.push(i(Y));
    }), m.onValueChange(F.toString());
  };
  return /* @__PURE__ */ s("div", { className: t.className, children: l.visible && /* @__PURE__ */ Q(
    Nt,
    {
      label: _t(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ s("div", { children: t.hideSelectAll ? /* @__PURE__ */ s(Ne, {}) : /* @__PURE__ */ s(
          et,
          {
            control: /* @__PURE__ */ s(tt, { onChange: U }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ Q(
          Tt,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: h.status,
            ...x,
            children: [
              $ ? $.map((T) => /* @__PURE__ */ s(
                et,
                {
                  value: i(T),
                  control: /* @__PURE__ */ s(
                    tt,
                    {
                      ...z,
                      checked: V(i(T)),
                      disabled: t.readonly
                    }
                  ),
                  label: k(T)
                },
                i(T)
              )) : /* @__PURE__ */ s("div", { children: "No options provided" }),
              /* @__PURE__ */ s(xt, { className: "form-error-text", children: h.message })
            ]
          }
        )
      ]
    }
  ) });
}), qr = (e, t, r) => {
  const n = e.store || r.store, o = e.lookupOptions || {}, a = o.idAttribute || "id", l = o.titleAttribute || "name", c = o.searchAttribute || l, d = r.data, f = se(0), [p, h] = ee(null), [m, w] = ee([]), [_, O] = ee(""), [$, W] = ee(!1), C = $ && m.length < (p ? 2 : 1), g = {
    store: n,
    endPointVars: e.storeOptions.endPointVars,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: c,
    initialFetch: !1
  }, b = Me(g), { setQueryFilter: i, setQuickSearch: k, filter: x, totalRecords: B, refreshData: z } = b, V = b.data, U = Ee(a) ? (E) => Re(a, E) : (E) => E == null ? void 0 : E[a], T = Ee(l) ? (E) => Re(l, E) : (E) => E == null ? void 0 : E[l];
  function X() {
    if (d) {
      var E = {};
      rt(a, E, d);
      const K = r.displayValue || d;
      return rt(l, E, K), E;
    } else
      return null;
  }
  ye(() => {
    if (U(p) != r.data) {
      var E = X();
      E && (w([E]), h(E));
    }
  }, [r.data]), ye(() => {
    const E = V ? [...V] : [], K = p;
    E && K && !F(E, U(K)) && E.unshift(K), w(E), f.current < B && (f.current = B);
  }, [V, B]);
  function F(E, K) {
    return E.find((J) => {
      if (U(J) == K)
        return J;
    });
  }
  ye(() => {
    vr(Y);
  }, [_, $]);
  function Y() {
    $ && (_.length > 0 && _ != T(p) ? k("*" + _ + "*") : V ? k(null) : z());
  }
  return {
    getSelectedOption: X,
    filter: x,
    labelAccessor: T,
    idAccessor: U,
    getServerLookup: (E) => {
      var K = Rt(e, p, e.label);
      const J = r.eventListeners, u = r.error, v = e.variant || "standard", A = e.autoFocus || !1, N = e.label, D = e.readonly || !1, L = e.required || !1;
      t.readonly && (K.inputProps = { readOnly: !0 });
      var R = {
        onBlur: J.onBlur,
        onFocus: J.onFocus,
        onChange: (S, P) => {
          M(P), h(P);
        },
        onInputChange: (S, P) => (O(P), !0)
      };
      const M = (S) => {
        if (S) {
          const P = U(S);
          J.onValueChange(P), r.setDisplayValue(T(S));
        } else
          J.onValueChange(void 0), r.setDisplayValue(void 0);
      }, I = (S) => typeof S == "object" ? T(S) + "" : S;
      return /* @__PURE__ */ s(
        Nt,
        {
          label: _t(e),
          customContainerClass: e.customContainerClass,
          colspan: e.colspan,
          customFieldClass: e.customFieldClass,
          customLabelClass: e.customLabelClass,
          children: /* @__PURE__ */ Q(Tt, { fullWidth: !0, error: u.status, children: [
            /* @__PURE__ */ s(
              dr,
              {
                includeInputInList: !0,
                autoHighlight: !0,
                readOnly: D,
                isOptionEqualToValue: (S, P) => U(S) == U(P),
                filterOptions: (S) => S,
                renderInput: (S) => /* @__PURE__ */ s(
                  Ge,
                  {
                    ...S,
                    inputRef: (P) => {
                      E.current = P;
                    },
                    variant: v,
                    label: N,
                    autoFocus: A,
                    required: L,
                    InputProps: {
                      ...S.InputProps,
                      endAdornment: /* @__PURE__ */ Q(Ne, { children: [
                        C ? /* @__PURE__ */ s(fr, { color: "inherit", size: 18 }) : null,
                        S.InputProps.endAdornment
                      ] })
                    }
                  }
                ),
                getOptionLabel: I,
                ...K,
                options: m,
                open: $,
                onClose: () => {
                  W(!1);
                },
                onOpen: (S) => {
                  W(!0);
                },
                ...R
              }
            ),
            /* @__PURE__ */ s(xt, { className: "form-error-text", children: u.message })
          ] })
        }
      );
    },
    setQueryFilter: i,
    searchText: _,
    setSearchText: O,
    refreshOptions: Y
  };
}, jr = le(function(t, r) {
  const n = Oe(_e), o = r || se(null), a = n(t, "serverlookup", o), l = a.error, { mutateOptions: c, setMutateOptions: d } = a, f = se(null), { getServerLookup: p, setQueryFilter: h } = qr(t, c, a);
  return ve(o, () => ({
    focus() {
      f.current.focus();
    },
    isValid() {
      return !l.status;
    },
    clear() {
      a.setData("", !0);
    },
    getValue() {
      return a.getData();
    },
    setValue(m, w = !1) {
      a.setData(m, w);
    },
    setVisible(m) {
      d((w) => ({ ...w, visible: m }));
    },
    setRequired(m) {
      d((w) => ({ ...w, required: m }));
    },
    setReadOnly(m) {
      d((w) => ({ ...w, readonly: m }));
    },
    setAttribute(m) {
      d((w) => ({ ...w, ...m }));
    },
    setFilter(m) {
      h(m);
    },
    resetFilter() {
    },
    addFilter(m, w) {
      h((_) => (_[m] = w, { ..._ }));
    },
    setDefaultFilter(m) {
    }
  }), [a]), p(f);
}), Vr = (e) => {
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
}, Wr = () => /* @__PURE__ */ s("div", { children: "To be Implemented" }), kt = (e, t, r) => {
  const { type: n } = e, o = { fieldDef: e, title: r };
  switch (n) {
    case "string":
      return oe(o, ir);
    case "radio":
      return oe(o, nr);
    case "select":
      return oe(o, or);
    case "date":
      return oe(o, tr);
    case "datetime":
      return oe(o, rr);
    case "checkbox":
      return oe(o, sr);
    case "serverlookup":
      return oe(o, jr);
    case "textarea":
      return oe(o, ar);
    case "switch":
      return oe(o, cr);
    case "password":
      return oe(o, lr);
    case "float":
    case "number":
    case "numbersOnly":
      return oe(o, ur);
    case "integer":
      return oe(o, Cr);
    case "multiSelect":
      return Wr();
    case "dateRange":
      return oe(o, Sr);
    default:
      return Vr(o);
  }
}, zr = le(function(t, r) {
  var p;
  const { formLayout: n, context: o } = t, { formData: a } = o, l = n.Container;
  se({});
  const c = wt(() => (h) => kt(h), [a.data]);
  var d = ((p = n.options) == null ? void 0 : p.columns) || 1, f = { columns: d };
  return l ? /* @__PURE__ */ s("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((h, m) => /* @__PURE__ */ s(
    l,
    {
      index: m,
      field: h,
      label: h.title,
      options: f,
      children: c(h)
    },
    h.attribute + h.name + h.type
  )) }) : /* @__PURE__ */ s("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((h, m) => c(h)) });
}), Lt = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Renderer || zr, o = t.Container || Mt;
  const a = (l) => /* @__PURE__ */ s(
    n,
    {
      context: r,
      formLayout: l
    }
  );
  return /* @__PURE__ */ s(
    o,
    {
      hideTitle: t.hideTitle,
      title: t.title,
      name: t.name,
      children: /* @__PURE__ */ s(Pr, { columns: t.columns, children: a(t.formLayout) })
    }
  );
};
var It = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ct = pe.createContext && pe.createContext(It), ge = globalThis && globalThis.__assign || function() {
  return ge = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ge.apply(this, arguments);
}, Xr = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function $t(e) {
  return e && e.map(function(t, r) {
    return pe.createElement(t.tag, ge({
      key: r
    }, t.attr), $t(t.child));
  });
}
function Br(e) {
  return function(t) {
    return pe.createElement(Ur, ge({
      attr: ge({}, e.attr)
    }, t), $t(e.child));
  };
}
function Ur(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, a = e.title, l = Xr(e, ["attr", "size", "title"]), c = o || r.size || "1em", d;
    return r.className && (d = r.className), e.className && (d = (d ? d + " " : "") + e.className), pe.createElement("svg", ge({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, l, {
      className: d,
      style: ge(ge({
        color: e.color || r.color
      }, r.style), e.style),
      height: c,
      width: c,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && pe.createElement("title", null, a), e.children);
  };
  return ct !== void 0 ? pe.createElement(ct.Consumer, null, function(r) {
    return t(r);
  }) : t(It);
}
function Yt(e) {
  return Br({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
}
var Fe = { exports: {} }, qt = {}, Be = { exports: {} }, xe = { exports: {} }, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function Gr() {
  if (lt)
    return q;
  lt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, O = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, W = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function g(i) {
    if (typeof i == "object" && i !== null) {
      var k = i.$$typeof;
      switch (k) {
        case t:
          switch (i = i.type, i) {
            case d:
            case f:
            case n:
            case a:
            case o:
            case h:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case c:
                case p:
                case _:
                case w:
                case l:
                  return i;
                default:
                  return k;
              }
          }
        case r:
          return k;
      }
    }
  }
  function b(i) {
    return g(i) === f;
  }
  return q.AsyncMode = d, q.ConcurrentMode = f, q.ContextConsumer = c, q.ContextProvider = l, q.Element = t, q.ForwardRef = p, q.Fragment = n, q.Lazy = _, q.Memo = w, q.Portal = r, q.Profiler = a, q.StrictMode = o, q.Suspense = h, q.isAsyncMode = function(i) {
    return b(i) || g(i) === d;
  }, q.isConcurrentMode = b, q.isContextConsumer = function(i) {
    return g(i) === c;
  }, q.isContextProvider = function(i) {
    return g(i) === l;
  }, q.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === t;
  }, q.isForwardRef = function(i) {
    return g(i) === p;
  }, q.isFragment = function(i) {
    return g(i) === n;
  }, q.isLazy = function(i) {
    return g(i) === _;
  }, q.isMemo = function(i) {
    return g(i) === w;
  }, q.isPortal = function(i) {
    return g(i) === r;
  }, q.isProfiler = function(i) {
    return g(i) === a;
  }, q.isStrictMode = function(i) {
    return g(i) === o;
  }, q.isSuspense = function(i) {
    return g(i) === h;
  }, q.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === n || i === f || i === a || i === o || i === h || i === m || typeof i == "object" && i !== null && (i.$$typeof === _ || i.$$typeof === w || i.$$typeof === l || i.$$typeof === c || i.$$typeof === p || i.$$typeof === $ || i.$$typeof === W || i.$$typeof === C || i.$$typeof === O);
  }, q.typeOf = g, q;
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
var ut;
function Hr() {
  return ut || (ut = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, O = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, W = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function g(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === n || y === f || y === a || y === o || y === h || y === m || typeof y == "object" && y !== null && (y.$$typeof === _ || y.$$typeof === w || y.$$typeof === l || y.$$typeof === c || y.$$typeof === p || y.$$typeof === $ || y.$$typeof === W || y.$$typeof === C || y.$$typeof === O);
    }
    function b(y) {
      if (typeof y == "object" && y !== null) {
        var ue = y.$$typeof;
        switch (ue) {
          case t:
            var we = y.type;
            switch (we) {
              case d:
              case f:
              case n:
              case a:
              case o:
              case h:
                return we;
              default:
                var Ze = we && we.$$typeof;
                switch (Ze) {
                  case c:
                  case p:
                  case _:
                  case w:
                  case l:
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
    var i = d, k = f, x = c, B = l, z = t, V = p, U = n, T = _, X = w, F = r, Y = a, G = o, E = h, K = !1;
    function J(y) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), u(y) || b(y) === d;
    }
    function u(y) {
      return b(y) === f;
    }
    function v(y) {
      return b(y) === c;
    }
    function A(y) {
      return b(y) === l;
    }
    function N(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }
    function D(y) {
      return b(y) === p;
    }
    function L(y) {
      return b(y) === n;
    }
    function R(y) {
      return b(y) === _;
    }
    function M(y) {
      return b(y) === w;
    }
    function I(y) {
      return b(y) === r;
    }
    function S(y) {
      return b(y) === a;
    }
    function P(y) {
      return b(y) === o;
    }
    function re(y) {
      return b(y) === h;
    }
    j.AsyncMode = i, j.ConcurrentMode = k, j.ContextConsumer = x, j.ContextProvider = B, j.Element = z, j.ForwardRef = V, j.Fragment = U, j.Lazy = T, j.Memo = X, j.Portal = F, j.Profiler = Y, j.StrictMode = G, j.Suspense = E, j.isAsyncMode = J, j.isConcurrentMode = u, j.isContextConsumer = v, j.isContextProvider = A, j.isElement = N, j.isForwardRef = D, j.isFragment = L, j.isLazy = R, j.isMemo = M, j.isPortal = I, j.isProfiler = S, j.isStrictMode = P, j.isSuspense = re, j.isValidElementType = g, j.typeOf = b;
  }()), j;
}
var dt;
function jt() {
  return dt || (dt = 1, process.env.NODE_ENV === "production" ? xe.exports = Gr() : xe.exports = Hr()), xe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ie, ft;
function Kr() {
  if (ft)
    return Ie;
  ft = 1;
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
      for (var l = {}, c = 0; c < 10; c++)
        l["_" + String.fromCharCode(c)] = c;
      var d = Object.getOwnPropertyNames(l).map(function(p) {
        return l[p];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        f[p] = p;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ie = o() ? Object.assign : function(a, l) {
    for (var c, d = n(a), f, p = 1; p < arguments.length; p++) {
      c = Object(arguments[p]);
      for (var h in c)
        t.call(c, h) && (d[h] = c[h]);
      if (e) {
        f = e(c);
        for (var m = 0; m < f.length; m++)
          r.call(c, f[m]) && (d[f[m]] = c[f[m]]);
      }
    }
    return d;
  }, Ie;
}
var $e, pt;
function He() {
  if (pt)
    return $e;
  pt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return $e = e, $e;
}
var Ye, mt;
function Vt() {
  return mt || (mt = 1, Ye = Function.call.bind(Object.prototype.hasOwnProperty)), Ye;
}
var qe, ht;
function Qr() {
  if (ht)
    return qe;
  ht = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = He(), r = {}, n = Vt();
    e = function(a) {
      var l = "Warning: " + a;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function o(a, l, c, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (n(a, p)) {
          var h;
          try {
            if (typeof a[p] != "function") {
              var m = Error(
                (d || "React class") + ": " + c + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            h = a[p](l, p, d, c, null, t);
          } catch (_) {
            h = _;
          }
          if (h && !(h instanceof Error) && e(
            (d || "React class") + ": type specification of " + c + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var w = f ? f() : "";
            e(
              "Failed " + c + " type: " + h.message + (w ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, qe = o, qe;
}
var je, gt;
function Jr() {
  if (gt)
    return je;
  gt = 1;
  var e = jt(), t = Kr(), r = He(), n = Vt(), o = Qr(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var d = "Warning: " + c;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return je = function(c, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function h(u) {
      var v = u && (f && u[f] || u[p]);
      if (typeof v == "function")
        return v;
    }
    var m = "<<anonymous>>", w = {
      array: W("array"),
      bigint: W("bigint"),
      bool: W("boolean"),
      func: W("function"),
      number: W("number"),
      object: W("object"),
      string: W("string"),
      symbol: W("symbol"),
      any: C(),
      arrayOf: g,
      element: b(),
      elementType: i(),
      instanceOf: k,
      node: V(),
      objectOf: B,
      oneOf: x,
      oneOfType: z,
      shape: T,
      exact: X
    };
    function _(u, v) {
      return u === v ? u !== 0 || 1 / u === 1 / v : u !== u && v !== v;
    }
    function O(u, v) {
      this.message = u, this.data = v && typeof v == "object" ? v : {}, this.stack = "";
    }
    O.prototype = Error.prototype;
    function $(u) {
      if (process.env.NODE_ENV !== "production")
        var v = {}, A = 0;
      function N(L, R, M, I, S, P, re) {
        if (I = I || m, P = P || M, re !== r) {
          if (d) {
            var y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw y.name = "Invariant Violation", y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = I + ":" + M;
            !v[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + P + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), v[ue] = !0, A++);
          }
        }
        return R[M] == null ? L ? R[M] === null ? new O("The " + S + " `" + P + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new O("The " + S + " `" + P + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : u(R, M, I, S, P);
      }
      var D = N.bind(null, !1);
      return D.isRequired = N.bind(null, !0), D;
    }
    function W(u) {
      function v(A, N, D, L, R, M) {
        var I = A[N], S = G(I);
        if (S !== u) {
          var P = E(I);
          return new O(
            "Invalid " + L + " `" + R + "` of type " + ("`" + P + "` supplied to `" + D + "`, expected ") + ("`" + u + "`."),
            { expectedType: u }
          );
        }
        return null;
      }
      return $(v);
    }
    function C() {
      return $(l);
    }
    function g(u) {
      function v(A, N, D, L, R) {
        if (typeof u != "function")
          return new O("Property `" + R + "` of component `" + D + "` has invalid PropType notation inside arrayOf.");
        var M = A[N];
        if (!Array.isArray(M)) {
          var I = G(M);
          return new O("Invalid " + L + " `" + R + "` of type " + ("`" + I + "` supplied to `" + D + "`, expected an array."));
        }
        for (var S = 0; S < M.length; S++) {
          var P = u(M, S, D, L, R + "[" + S + "]", r);
          if (P instanceof Error)
            return P;
        }
        return null;
      }
      return $(v);
    }
    function b() {
      function u(v, A, N, D, L) {
        var R = v[A];
        if (!c(R)) {
          var M = G(R);
          return new O("Invalid " + D + " `" + L + "` of type " + ("`" + M + "` supplied to `" + N + "`, expected a single ReactElement."));
        }
        return null;
      }
      return $(u);
    }
    function i() {
      function u(v, A, N, D, L) {
        var R = v[A];
        if (!e.isValidElementType(R)) {
          var M = G(R);
          return new O("Invalid " + D + " `" + L + "` of type " + ("`" + M + "` supplied to `" + N + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return $(u);
    }
    function k(u) {
      function v(A, N, D, L, R) {
        if (!(A[N] instanceof u)) {
          var M = u.name || m, I = J(A[N]);
          return new O("Invalid " + L + " `" + R + "` of type " + ("`" + I + "` supplied to `" + D + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return $(v);
    }
    function x(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), l;
      function v(A, N, D, L, R) {
        for (var M = A[N], I = 0; I < u.length; I++)
          if (_(M, u[I]))
            return null;
        var S = JSON.stringify(u, function(re, y) {
          var ue = E(y);
          return ue === "symbol" ? String(y) : y;
        });
        return new O("Invalid " + L + " `" + R + "` of value `" + String(M) + "` " + ("supplied to `" + D + "`, expected one of " + S + "."));
      }
      return $(v);
    }
    function B(u) {
      function v(A, N, D, L, R) {
        if (typeof u != "function")
          return new O("Property `" + R + "` of component `" + D + "` has invalid PropType notation inside objectOf.");
        var M = A[N], I = G(M);
        if (I !== "object")
          return new O("Invalid " + L + " `" + R + "` of type " + ("`" + I + "` supplied to `" + D + "`, expected an object."));
        for (var S in M)
          if (n(M, S)) {
            var P = u(M, S, D, L, R + "." + S, r);
            if (P instanceof Error)
              return P;
          }
        return null;
      }
      return $(v);
    }
    function z(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var v = 0; v < u.length; v++) {
        var A = u[v];
        if (typeof A != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + K(A) + " at index " + v + "."
          ), l;
      }
      function N(D, L, R, M, I) {
        for (var S = [], P = 0; P < u.length; P++) {
          var re = u[P], y = re(D, L, R, M, I, r);
          if (y == null)
            return null;
          y.data && n(y.data, "expectedType") && S.push(y.data.expectedType);
        }
        var ue = S.length > 0 ? ", expected one of type [" + S.join(", ") + "]" : "";
        return new O("Invalid " + M + " `" + I + "` supplied to " + ("`" + R + "`" + ue + "."));
      }
      return $(N);
    }
    function V() {
      function u(v, A, N, D, L) {
        return F(v[A]) ? null : new O("Invalid " + D + " `" + L + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
      }
      return $(u);
    }
    function U(u, v, A, N, D) {
      return new O(
        (u || "React class") + ": " + v + " type `" + A + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + D + "`."
      );
    }
    function T(u) {
      function v(A, N, D, L, R) {
        var M = A[N], I = G(M);
        if (I !== "object")
          return new O("Invalid " + L + " `" + R + "` of type `" + I + "` " + ("supplied to `" + D + "`, expected `object`."));
        for (var S in u) {
          var P = u[S];
          if (typeof P != "function")
            return U(D, L, R, S, E(P));
          var re = P(M, S, D, L, R + "." + S, r);
          if (re)
            return re;
        }
        return null;
      }
      return $(v);
    }
    function X(u) {
      function v(A, N, D, L, R) {
        var M = A[N], I = G(M);
        if (I !== "object")
          return new O("Invalid " + L + " `" + R + "` of type `" + I + "` " + ("supplied to `" + D + "`, expected `object`."));
        var S = t({}, A[N], u);
        for (var P in S) {
          var re = u[P];
          if (n(u, P) && typeof re != "function")
            return U(D, L, R, P, E(re));
          if (!re)
            return new O(
              "Invalid " + L + " `" + R + "` key `" + P + "` supplied to `" + D + "`.\nBad object: " + JSON.stringify(A[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(u), null, "  ")
            );
          var y = re(M, P, D, L, R + "." + P, r);
          if (y)
            return y;
        }
        return null;
      }
      return $(v);
    }
    function F(u) {
      switch (typeof u) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !u;
        case "object":
          if (Array.isArray(u))
            return u.every(F);
          if (u === null || c(u))
            return !0;
          var v = h(u);
          if (v) {
            var A = v.call(u), N;
            if (v !== u.entries) {
              for (; !(N = A.next()).done; )
                if (!F(N.value))
                  return !1;
            } else
              for (; !(N = A.next()).done; ) {
                var D = N.value;
                if (D && !F(D[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Y(u, v) {
      return u === "symbol" ? !0 : v ? v["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && v instanceof Symbol : !1;
    }
    function G(u) {
      var v = typeof u;
      return Array.isArray(u) ? "array" : u instanceof RegExp ? "object" : Y(v, u) ? "symbol" : v;
    }
    function E(u) {
      if (typeof u > "u" || u === null)
        return "" + u;
      var v = G(u);
      if (v === "object") {
        if (u instanceof Date)
          return "date";
        if (u instanceof RegExp)
          return "regexp";
      }
      return v;
    }
    function K(u) {
      var v = E(u);
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
    function J(u) {
      return !u.constructor || !u.constructor.name ? m : u.constructor.name;
    }
    return w.checkPropTypes = o, w.resetWarningCache = o.resetWarningCache, w.PropTypes = w, w;
  }, je;
}
var Ve, yt;
function Zr() {
  if (yt)
    return Ve;
  yt = 1;
  var e = He();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ve = function() {
    function n(l, c, d, f, p, h) {
      if (h !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
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
  }, Ve;
}
if (process.env.NODE_ENV !== "production") {
  var en = jt(), tn = !0;
  Be.exports = Jr()(en.isElement, tn);
} else
  Be.exports = Zr()();
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
function vt() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = zt(e)) && (n && (n += " "), n += t);
  return n;
}
const rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: vt,
  default: vt
}, Symbol.toStringTag, { value: "Module" })), nn = /* @__PURE__ */ Mr(rn);
var H = {}, de = {};
Object.defineProperty(de, "__esModule", {
  value: !0
});
de.dontSetMe = ln;
de.findInArray = on;
de.int = cn;
de.isFunction = an;
de.isNum = sn;
function on(e, t) {
  for (let r = 0, n = e.length; r < n; r++)
    if (t.apply(t, [e[r], r, e]))
      return e[r];
}
function an(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function sn(e) {
  return typeof e == "number" && !isNaN(e);
}
function cn(e) {
  return parseInt(e, 10);
}
function ln(e, t, r) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var be = {};
Object.defineProperty(be, "__esModule", {
  value: !0
});
be.browserPrefixToKey = Bt;
be.browserPrefixToStyle = un;
be.default = void 0;
be.getPrefix = Xt;
const We = ["Moz", "Webkit", "O", "ms"];
function Xt() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const r = (e = window.document) === null || e === void 0 || (e = e.documentElement) === null || e === void 0 ? void 0 : e.style;
  if (!r || t in r)
    return "";
  for (let n = 0; n < We.length; n++)
    if (Bt(t, We[n]) in r)
      return We[n];
  return "";
}
function Bt(e, t) {
  return t ? "".concat(t).concat(dn(e)) : e;
}
function un(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function dn(e) {
  let t = "", r = !0;
  for (let n = 0; n < e.length; n++)
    r ? (t += e[n].toUpperCase(), r = !1) : e[n] === "-" ? r = !0 : t += e[n];
  return t;
}
be.default = Xt();
Object.defineProperty(H, "__esModule", {
  value: !0
});
H.addClassName = Ht;
H.addEvent = mn;
H.addUserSelectStyles = xn;
H.createCSSTransform = Cn;
H.createSVGTransform = Pn;
H.getTouch = wn;
H.getTouchIdentifier = Tn;
H.getTranslation = Ke;
H.innerHeight = vn;
H.innerWidth = bn;
H.matchesSelector = Gt;
H.matchesSelectorAndParentsTo = pn;
H.offsetXYFromParent = Sn;
H.outerHeight = gn;
H.outerWidth = yn;
H.removeClassName = Kt;
H.removeEvent = hn;
H.removeUserSelectStyles = Dn;
var ie = de, bt = fn(be);
function Ut(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Ut = function(n) {
    return n ? r : t;
  })(e);
}
function fn(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Ut(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
let De = "";
function Gt(e, t) {
  return De || (De = (0, ie.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, ie.isFunction)(e[r]);
  })), (0, ie.isFunction)(e[De]) ? e[De](t) : !1;
}
function pn(e, t, r) {
  let n = e;
  do {
    if (Gt(n, t))
      return !0;
    if (n === r)
      return !1;
    n = n.parentNode;
  } while (n);
  return !1;
}
function mn(e, t, r, n) {
  if (!e)
    return;
  const o = {
    capture: !0,
    ...n
  };
  e.addEventListener ? e.addEventListener(t, r, o) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r;
}
function hn(e, t, r, n) {
  if (!e)
    return;
  const o = {
    capture: !0,
    ...n
  };
  e.removeEventListener ? e.removeEventListener(t, r, o) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
}
function gn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ie.int)(r.borderTopWidth), t += (0, ie.int)(r.borderBottomWidth), t;
}
function yn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ie.int)(r.borderLeftWidth), t += (0, ie.int)(r.borderRightWidth), t;
}
function vn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ie.int)(r.paddingTop), t -= (0, ie.int)(r.paddingBottom), t;
}
function bn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ie.int)(r.paddingLeft), t -= (0, ie.int)(r.paddingRight), t;
}
function Sn(e, t, r) {
  const o = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), a = (e.clientX + t.scrollLeft - o.left) / r, l = (e.clientY + t.scrollTop - o.top) / r;
  return {
    x: a,
    y: l
  };
}
function Cn(e, t) {
  const r = Ke(e, t, "px");
  return {
    [(0, bt.browserPrefixToKey)("transform", bt.default)]: r
  };
}
function Pn(e, t) {
  return Ke(e, t, "");
}
function Ke(e, t, r) {
  let {
    x: n,
    y: o
  } = e, a = "translate(".concat(n).concat(r, ",").concat(o).concat(r, ")");
  if (t) {
    const l = "".concat(typeof t.x == "string" ? t.x : t.x + r), c = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    a = "translate(".concat(l, ", ").concat(c, ")") + a;
  }
  return a;
}
function wn(e, t) {
  return e.targetTouches && (0, ie.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, ie.findInArray)(e.changedTouches, (r) => t === r.identifier);
}
function Tn(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function xn(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && Ht(e.body, "react-draggable-transparent-selection");
}
function Dn(e) {
  if (e)
    try {
      if (e.body && Kt(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        const t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function Ht(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function Kt(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var fe = {};
Object.defineProperty(fe, "__esModule", {
  value: !0
});
fe.canDragX = Rn;
fe.canDragY = _n;
fe.createCoreData = Mn;
fe.createDraggableData = Fn;
fe.getBoundPosition = On;
fe.getControlPosition = Nn;
fe.snapToGrid = En;
var ae = de, Ce = H;
function On(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : An(n);
  const o = Qe(e);
  if (typeof n == "string") {
    const {
      ownerDocument: a
    } = o, l = a.defaultView;
    let c;
    if (n === "parent" ? c = o.parentNode : c = a.querySelector(n), !(c instanceof l.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const d = c, f = l.getComputedStyle(o), p = l.getComputedStyle(d);
    n = {
      left: -o.offsetLeft + (0, ae.int)(p.paddingLeft) + (0, ae.int)(f.marginLeft),
      top: -o.offsetTop + (0, ae.int)(p.paddingTop) + (0, ae.int)(f.marginTop),
      right: (0, Ce.innerWidth)(d) - (0, Ce.outerWidth)(o) - o.offsetLeft + (0, ae.int)(p.paddingRight) - (0, ae.int)(f.marginRight),
      bottom: (0, Ce.innerHeight)(d) - (0, Ce.outerHeight)(o) - o.offsetTop + (0, ae.int)(p.paddingBottom) - (0, ae.int)(f.marginBottom)
    };
  }
  return (0, ae.isNum)(n.right) && (t = Math.min(t, n.right)), (0, ae.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, ae.isNum)(n.left) && (t = Math.max(t, n.left)), (0, ae.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function En(e, t, r) {
  const n = Math.round(t / e[0]) * e[0], o = Math.round(r / e[1]) * e[1];
  return [n, o];
}
function Rn(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function _n(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function Nn(e, t, r) {
  const n = typeof t == "number" ? (0, Ce.getTouch)(e, t) : null;
  if (typeof t == "number" && !n)
    return null;
  const o = Qe(r), a = r.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, Ce.offsetXYFromParent)(n || e, a, r.props.scale);
}
function Mn(e, t, r) {
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
function Fn(e, t) {
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
function An(e) {
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
ke.default = kn;
function kn() {
}
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = void 0;
var ze = In(pe), ne = Je(Wt), Ln = Je(Ft), Z = H, me = fe, Xe = de, Pe = Je(ke);
function Je(e) {
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
function In(e, t) {
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
      var l = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
function te(e, t, r) {
  return t = $n(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $n(e) {
  var t = Yn(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Yn(e, t) {
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
let he = ce.mouse, Le = class extends ze.Component {
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
        x: l,
        y: c
      } = a, d = (0, me.createCoreData)(this, l, c);
      (0, Pe.default)("DraggableCore: handleDragStart: %j", d), (0, Pe.default)("calling", this.props.onStart), !(this.props.onStart(t, d) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, Z.addUserSelectStyles)(n), this.dragging = !0, this.lastX = l, this.lastY = c, (0, Z.addEvent)(n, he.move, this.handleDrag), (0, Z.addEvent)(n, he.stop, this.handleDragStop));
    }), te(this, "handleDrag", (t) => {
      const r = (0, me.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let c = n - this.lastX, d = o - this.lastY;
        if ([c, d] = (0, me.snapToGrid)(this.props.grid, c, d), !c && !d)
          return;
        n = this.lastX + c, o = this.lastY + d;
      }
      const a = (0, me.createCoreData)(this, n, o);
      if ((0, Pe.default)("DraggableCore: handleDrag: %j", a), this.props.onDrag(t, a) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const d = document.createEvent("MouseEvents");
          d.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(d);
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
        let d = n - this.lastX || 0, f = o - this.lastY || 0;
        [d, f] = (0, me.snapToGrid)(this.props.grid, d, f), n = this.lastX + d, o = this.lastY + f;
      }
      const a = (0, me.createCoreData)(this, n, o);
      if (this.props.onStop(t, a) === !1 || this.mounted === !1)
        return !1;
      const c = this.findDOMNode();
      c && this.props.enableUserSelectHack && (0, Z.removeUserSelectStyles)(c.ownerDocument), (0, Pe.default)("DraggableCore: handleDragStop: %j", a), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, c && ((0, Pe.default)("DraggableCore: Removing handlers"), (0, Z.removeEvent)(c.ownerDocument, he.move, this.handleDrag), (0, Z.removeEvent)(c.ownerDocument, he.stop, this.handleDragStop));
    }), te(this, "onMouseDown", (t) => (he = ce.mouse, this.handleDragStart(t))), te(this, "onMouseUp", (t) => (he = ce.mouse, this.handleDragStop(t))), te(this, "onTouchStart", (t) => (he = ce.touch, this.handleDragStart(t))), te(this, "onTouchEnd", (t) => (he = ce.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = !0;
    const t = this.findDOMNode();
    t && (0, Z.addEvent)(t, ce.touch.start, this.onTouchStart, {
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
      (0, Z.removeEvent)(r, ce.mouse.move, this.handleDrag), (0, Z.removeEvent)(r, ce.touch.move, this.handleDrag), (0, Z.removeEvent)(r, ce.mouse.stop, this.handleDragStop), (0, Z.removeEvent)(r, ce.touch.stop, this.handleDragStop), (0, Z.removeEvent)(t, ce.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, Z.removeUserSelectStyles)(r);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var t, r;
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (r = this.props) === null || r === void 0 || (r = r.nodeRef) === null || r === void 0 ? void 0 : r.current : Ln.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ ze.cloneElement(ze.Children.only(this.props.children), {
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
te(Le, "displayName", "DraggableCore");
te(Le, "propTypes", {
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
te(Le, "defaultProps", {
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
      return d.default;
    }
  }), e.default = void 0;
  var t = m(pe), r = p(Wt), n = p(Ft), o = p(nn), a = H, l = fe, c = de, d = p(Ae), f = p(ke);
  function p(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function h(C) {
    if (typeof WeakMap != "function")
      return null;
    var g = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap();
    return (h = function(i) {
      return i ? b : g;
    })(C);
  }
  function m(C, g) {
    if (!g && C && C.__esModule)
      return C;
    if (C === null || typeof C != "object" && typeof C != "function")
      return { default: C };
    var b = h(g);
    if (b && b.has(C))
      return b.get(C);
    var i = {}, k = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var x in C)
      if (x !== "default" && Object.prototype.hasOwnProperty.call(C, x)) {
        var B = k ? Object.getOwnPropertyDescriptor(C, x) : null;
        B && (B.get || B.set) ? Object.defineProperty(i, x, B) : i[x] = C[x];
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
  function _(C, g, b) {
    return g = O(g), g in C ? Object.defineProperty(C, g, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : C[g] = b, C;
  }
  function O(C) {
    var g = $(C, "string");
    return typeof g == "symbol" ? g : String(g);
  }
  function $(C, g) {
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
  class W extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(g, b) {
      let {
        position: i
      } = g, {
        prevPropsPosition: k
      } = b;
      return i && (!k || i.x !== k.x || i.y !== k.y) ? ((0, f.default)("Draggable: getDerivedStateFromProps %j", {
        position: i,
        prevPropsPosition: k
      }), {
        x: i.x,
        y: i.y,
        prevPropsPosition: {
          ...i
        }
      }) : null;
    }
    constructor(g) {
      super(g), _(this, "onDragStart", (b, i) => {
        if ((0, f.default)("Draggable: onDragStart: %j", i), this.props.onStart(b, (0, l.createDraggableData)(this, i)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), _(this, "onDrag", (b, i) => {
        if (!this.state.dragging)
          return !1;
        (0, f.default)("Draggable: onDrag: %j", i);
        const k = (0, l.createDraggableData)(this, i), x = {
          x: k.x,
          y: k.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: z,
            y: V
          } = x;
          x.x += this.state.slackX, x.y += this.state.slackY;
          const [U, T] = (0, l.getBoundPosition)(this, x.x, x.y);
          x.x = U, x.y = T, x.slackX = this.state.slackX + (z - x.x), x.slackY = this.state.slackY + (V - x.y), k.x = x.x, k.y = x.y, k.deltaX = x.x - this.state.x, k.deltaY = x.y - this.state.y;
        }
        if (this.props.onDrag(b, k) === !1)
          return !1;
        this.setState(x);
      }), _(this, "onDragStop", (b, i) => {
        if (!this.state.dragging || this.props.onStop(b, (0, l.createDraggableData)(this, i)) === !1)
          return !1;
        (0, f.default)("Draggable: onDragStop: %j", i);
        const x = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: z,
            y: V
          } = this.props.position;
          x.x = z, x.y = V;
        }
        this.setState(x);
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
        defaultPosition: k,
        defaultClassName: x,
        defaultClassNameDragging: B,
        defaultClassNameDragged: z,
        position: V,
        positionOffset: U,
        scale: T,
        ...X
      } = this.props;
      let F = {}, Y = null;
      const E = !!!V || this.state.dragging, K = V || k, J = {
        // Set left if horizontal drag is enabled
        x: (0, l.canDragX)(this) && E ? this.state.x : K.x,
        // Set top if vertical drag is enabled
        y: (0, l.canDragY)(this) && E ? this.state.y : K.y
      };
      this.state.isElementSVG ? Y = (0, a.createSVGTransform)(J, U) : F = (0, a.createCSSTransform)(J, U);
      const u = (0, o.default)(i.props.className || "", x, {
        [B]: this.state.dragging,
        [z]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(d.default, w({}, X, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(i), {
        className: u,
        style: {
          ...i.props.style,
          ...F
        },
        transform: Y
      }));
    }
  }
  e.default = W, _(W, "displayName", "Draggable"), _(W, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ...d.default.propTypes,
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
  }), _(W, "defaultProps", {
    ...d.default.defaultProps,
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
})(qt);
const {
  default: Jt,
  DraggableCore: qn
} = qt;
Fe.exports = Jt;
Fe.exports.default = Jt;
Fe.exports.DraggableCore = qn;
var jn = Fe.exports;
const Vn = /* @__PURE__ */ Fr(jn);
const Wn = (e) => {
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
}, zn = le(function(t, r) {
  const { formLayout: n, context: o } = t, { formData: a } = o, l = se({}), c = Wn(t), d = "palmyra-form-field-data", f = wt(() => (p) => kt(p, l, p.label), [a.data]);
  return /* @__PURE__ */ s("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: n.fields.map((p, h) => /* @__PURE__ */ s("div", { className: c, children: /* @__PURE__ */ s("div", { className: d, children: f(p) }) }, p.attribute)) });
});
function Xn(e) {
  return /* @__PURE__ */ s(
    Vn,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ s(mr, { ...e })
    }
  );
}
const Bn = ({ columns: e, isOpen: t, onClose: r, setFilter: n, defaultFilter: o = {} }) => {
  var { getFieldManager: a, getFilterData: l } = Ar(o);
  const c = () => {
    n({});
  }, d = () => {
    var m = l();
    n && n(m);
  }, f = () => {
    r();
  }, p = (m) => {
    m.keyCode === 27 && f();
  }, h = Nr(e);
  return /* @__PURE__ */ s("div", { className: "grid-filter-container", children: /* @__PURE__ */ s(
    pr,
    {
      open: t,
      onClose: f,
      PaperComponent: Xn,
      onKeyDown: p,
      children: /* @__PURE__ */ s(Dt, { onClickAway: r, children: /* @__PURE__ */ Q("div", { children: [
        /* @__PURE__ */ Q("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ s("div", { className: "grid-header-text-container", children: /* @__PURE__ */ s("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ s("div", { className: "grid-header-icon-container", onClick: f, children: /* @__PURE__ */ s(Dr, { className: "filter-cancel-icon" }) })
        ] }),
        /* @__PURE__ */ s("span", { className: "filter-header-border" }),
        /* @__PURE__ */ s("div", { className: "grid-filter-content", children: /* @__PURE__ */ s(_e.Provider, { value: a, children: /* @__PURE__ */ s(
          Lt,
          {
            context: { formData: {} },
            layout: {
              type: "form",
              formLayout: {
                fields: h,
                options: {
                  columns: 2
                }
              },
              Renderer: zn
            }
          }
        ) }) }),
        /* @__PURE__ */ Q("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ s(Se, { className: "filter-reset-btn", disableRipple: !0, onClick: c, children: "Reset" }),
          /* @__PURE__ */ s(Se, { className: "filter-button", disableRipple: !0, onClick: d, children: "Filter" })
        ] })
      ] }) })
    }
  ) });
}, Un = le(function(t, r) {
  const { columns: n, children: o, EmptyChild: a, onRowClick: l, quickSearch: c } = t, d = a || Tr, f = t.customizer || _r, [p, h] = ee(!1), [m, w] = ee("standard"), [_, O] = ee(!1), [$, W] = ee(""), {
    setQueryFilter: C,
    setQuickSearch: g,
    setSortColumns: b,
    gotoPage: i,
    setPageSize: k,
    getPageNo: x,
    refreshData: B,
    data: z,
    totalRecords: V,
    pageSizeOptions: U,
    filter: T,
    queryLimit: X
  } = Me(t), F = r || se(null);
  ve(F, () => ({
    setFilter: (S) => {
      C(S);
    },
    refresh: () => {
      B();
    }
  }), []);
  const Y = (S, P) => {
    i(P);
  }, G = wr(n, f), E = (S) => {
    w(S);
  }, K = () => {
    h(!p);
  }, J = () => m === "compact" ? { padding: "3px" } : m === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, u = () => m === "compact" ? { padding: "3px" } : m === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, v = () => {
    var S;
    switch (m) {
      case "compact":
        S = /* @__PURE__ */ s(ot, { className: "density-icon" });
        break;
      case "comfortable":
        S = /* @__PURE__ */ s(at, { className: "density-icon" });
        break;
      default:
        S = /* @__PURE__ */ s(nt, { className: "grid-button-icon" });
        break;
    }
    return S;
  }, A = (S) => {
    const P = S.target.value;
    W(P), P ? g(P) : C({});
  }, N = (S) => {
    l && l(S);
  }, D = (S) => {
    const P = parseInt(S.target.value, 10);
    k(P);
  }, L = () => {
    console.info("Export Clicked");
  }, R = 200, M = !!t.pageSize;
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ Q("div", { children: [
    o,
    /* @__PURE__ */ Q("div", { className: "grid-header", children: [
      /* @__PURE__ */ s("div", { className: "grid-header-filter", children: !!c && /* @__PURE__ */ s(
        Ge,
        {
          sx: { width: R },
          type: "text",
          value: $,
          onChange: A,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ s(Ot, { position: "end", children: /* @__PURE__ */ s(Yt, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ s(Dt, { onClickAway: () => {
        h(!1);
      }, children: /* @__PURE__ */ Q("div", { className: "grid-header-button grid-density-btn", onClick: K, children: [
        /* @__PURE__ */ s(Te, { title: "Density", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, children: v() }) }),
        p && /* @__PURE__ */ s("div", { className: "density-dropdown-content", children: /* @__PURE__ */ Q("ul", { children: [
          /* @__PURE__ */ Q("li", { onClick: () => E("standard"), children: [
            /* @__PURE__ */ s(nt, { className: "density-icon" }),
            /* @__PURE__ */ s("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ Q("li", { onClick: () => E("compact"), children: [
            /* @__PURE__ */ s(ot, { className: "density-icon" }),
            /* @__PURE__ */ s("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ Q("li", { onClick: () => E("comfortable"), children: [
            /* @__PURE__ */ s(at, { className: "density-icon" }),
            /* @__PURE__ */ s("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ Q("div", { className: "grid-header-button grid-filter-btn", children: [
        /* @__PURE__ */ s(Te, { title: "Filter", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, onClick: () => O(!0), children: /* @__PURE__ */ s(Or, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ s(
          Bn,
          {
            columns: n,
            setFilter: C,
            defaultFilter: T,
            isOpen: _,
            onClose: () => O(!1)
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { className: "grid-header-button grid-export-btn", onClick: L, children: /* @__PURE__ */ s(Te, { title: "Export", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ s(Er, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ s("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ s(Te, { title: "New", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ s(Rr, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ s(Ne, {})
    ] }),
    /* @__PURE__ */ s("div", { className: "grid-table", children: /* @__PURE__ */ s(
      xr,
      {
        columnDefs: G,
        EmptyChild: d,
        rowData: z,
        onRowClick: N,
        onRowStyle: J,
        onHeaderStyle: u,
        onSortColumn: b
      }
    ) }),
    /* @__PURE__ */ s("div", { className: "grid-header", children: /* @__PURE__ */ s("div", { className: "grid-filter", children: M && /* @__PURE__ */ s(
      Et,
      {
        component: "div",
        count: V || 0,
        page: x(),
        onPageChange: Y,
        rowsPerPage: X.limit,
        rowsPerPageOptions: U || [],
        onRowsPerPageChange: D
      }
    ) }) })
  ] }) });
}), la = le(function(t, r) {
  const { columns: n, endPoint: o, storeFactory: a, layoutParams: l, pagination: c } = t, d = t.quickSearch || "", f = se(null), p = (m, w) => {
    console.log(w);
  };
  ye(() => {
    var m = it.subscribe(t.topic, p);
    return () => {
      it.unsubscribe(m);
    };
  }, [t.topic]), r && ve(r, () => ({
    setFilter: (m) => {
      f.current.setFilter(m);
    },
    refresh: () => {
      f.current.refresh();
    }
  }), [n, o]);
  const h = {
    fields: n,
    pagination: c,
    quickSearch: d,
    storeOptions: {
      endPoint: o
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ s(Ne, { children: /* @__PURE__ */ s(Ue.Provider, { value: a, children: /* @__PURE__ */ s(Zt, { layout: h, context: l, customizer: t.customizer, ref: f }) }) });
}), Gn = le(function(t, r) {
  const n = t.layout, [o, a] = ee(n.fields), l = n.pagination ? n.pagination : [15], c = Oe(Ue), d = Oe(Pt);
  var f = n.storeOptions || {}, p = {};
  br(p, f, d);
  const h = c.getGridStore(p, n.storeOptions.endPoint);
  ye(() => {
    f.hasLayout && h.queryLayout({}).then((_) => {
      a(_.columns);
    });
  }, []);
  const { onClick: m, onNewClick: w } = kr(n.actionOptions, d);
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    Un,
    {
      columns: o,
      store: h,
      pageSize: l,
      onRowClick: m,
      onNewClick: w,
      customizer: t.customizer,
      quickSearch: n.quickSearch,
      ref: r
    }
  ) });
}), Zt = Gn, Hn = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Container || Mt;
  return /* @__PURE__ */ s(At, { fallback: /* @__PURE__ */ s("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ s(n, { ...t, children: ((a) => /* @__PURE__ */ s(
    Zt,
    {
      context: r,
      layout: a
    }
  ))(t.tableLayout) }) });
}, Kn = (e) => {
  const { layout: t } = e;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ s(Lt, { ...e });
    case "view":
      return /* @__PURE__ */ s(Ir, { ...e });
    case "grid":
      return /* @__PURE__ */ s(Hn, { ...e });
    case "chart":
      return /* @__PURE__ */ s(yr, { ...e });
    default:
      return /* @__PURE__ */ s(Lr, { ...e });
  }
};
function Qn(e, t) {
  var r = e || 1, n = t;
  return {
    w: r,
    h: n
  };
}
const er = (e) => {
  const { layout: t, context: r } = e, n = t.sections;
  function o(a, l, c) {
    const { w: d, h: f } = Qn(a.width, a.height);
    return /* @__PURE__ */ s(hr, { sx: { width: d, height: f }, children: /* @__PURE__ */ s(
      Kn,
      {
        layout: a,
        context: l
      }
    ) }, (a.name || "tab") + c);
  }
  return /* @__PURE__ */ s("div", { style: { display: "flex", flexWrap: "wrap" }, children: n.map((a, l) => o(a, r, l)) });
}, St = le(function(t, r) {
  const { layout: n } = t;
  ve(r, () => ({
    resetFilter() {
    }
  }), []);
  const o = {}, a = n.tabs;
  return /* @__PURE__ */ s("div", { children: a.map((l, c) => /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    er,
    {
      layout: l,
      context: o
    }
  ) }, l.name + c)) });
}), Jn = (e) => {
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
}, Ct = le(function(t, r) {
  var p;
  const n = t.data || {}, { layout: o } = t;
  var { getFieldManager: a, getFormData: l, isFormValid: c } = $r(n, (p = t.callbacks) == null ? void 0 : p.onFormValidChange, Jn(t.mode));
  ve(r, () => ({
    getData() {
      return l();
    },
    isValid() {
      return c();
    }
  }), []);
  const d = { formData: n }, f = o.tabs;
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(_e.Provider, { value: a, children: f.map((h, m) => /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    er,
    {
      layout: h,
      context: d
    }
  ) }, h.name + m)) }) });
}), Zn = (e) => {
  switch (e) {
    case "grid":
      return St;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), Ct;
    case "formEdit":
    case "formNew":
    case "formView":
      return Ct;
    default:
      return St;
  }
}, ua = le(function(t, r) {
  const [n, o] = ee(t.layout), a = t.mode ? t.mode : n.type ? n.type : "grid", l = t.layoutParams || {}, c = Zn(a), d = se(0);
  return ye(() => {
    o(t.layout), d.current < 999999 ? d.current++ : d.current = 0;
  }, [t.layout]), /* @__PURE__ */ s(At, { fallback: /* @__PURE__ */ s("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ s(Ue.Provider, { value: t.storeFactory, children: /* @__PURE__ */ s(Pt.Provider, { value: l, children: /* @__PURE__ */ s(c, { ...t, ref: (f) => {
    r && (r.current = f);
  } }, d.current) }) }) });
}), da = le(function(t, r) {
  const { children: n, Child: o, childProps: a, pageSize: l } = t, c = r || se(null), {
    setQueryFilter: d,
    refreshData: f,
    setQuickSearch: p,
    gotoPage: h,
    setPageSize: m,
    getPageNo: w,
    data: _,
    totalRecords: O,
    pageSizeOptions: $,
    queryLimit: W
  } = Me(t), C = t.listKeyProvider || ((z, V) => V);
  ve(c, () => ({
    setFilter(z) {
      d(z);
    },
    refresh: () => {
      f();
    },
    gotoPage(z) {
      h(z);
    },
    nextPage() {
    },
    prevPage() {
    }
  }), []);
  const g = (z, V) => {
    h(V);
  }, b = (z) => {
    const V = z.target.value;
    p(V);
  }, i = (z) => {
    const V = parseInt(z.target.value, 10);
    m(V);
  }, k = 200, x = !!l, B = !!t.quickSearch;
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ Q("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ Q("div", { children: [
      /* @__PURE__ */ Q("div", { className: "card-header", children: [
        /* @__PURE__ */ s("div", { className: "card-filter", children: B && /* @__PURE__ */ s(
          Ge,
          {
            sx: { width: k },
            type: "text",
            onChange: b,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ s(Ot, { position: "end", children: /* @__PURE__ */ s(Yt, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ s("div", { className: "card-pagination", children: x && /* @__PURE__ */ s(
          Et,
          {
            component: "div",
            count: O || 0,
            page: w(),
            onPageChange: g,
            rowsPerPage: W.limit,
            rowsPerPageOptions: $ || [],
            onRowsPerPageChange: i
          }
        ) })
      ] }),
      /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
        gr,
        {
          Child: o,
          childKeyProvider: C,
          dataList: _,
          childProps: a,
          EmptyChild: t.EmptyChild
        }
      ) })
    ] })
  ] }) });
});
export {
  ua as F,
  Zt as G,
  jr as M,
  la as P,
  da as S,
  er as T,
  Un as a,
  sa as b,
  Me as c,
  zr as d,
  Lt as e,
  zn as f,
  kt as g,
  Bn as h,
  Hn as i,
  Kn as j,
  St as k,
  Ct as l,
  qr as u
};
