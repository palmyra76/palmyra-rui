import "../assets/ServerCardLayout.css";
import tr from "../palmyra/mui/form/MuiDatePicker.js";
import rr from "../palmyra/mui/form/MuiDateTimePicker.js";
import nr from "../palmyra/mui/form/MuiRadioGroup.js";
import or from "../palmyra/mui/form/MuiSelect.js";
import ar from "../palmyra/mui/form/MuiTextArea.js";
import ir from "../palmyra/mui/form/MuiTextField.js";
import sr from "../palmyra/mui/form/MuiCheckBox.js";
import cr from "../palmyra/mui/form/MuiSwitch.js";
import lr from "../palmyra/mui/form/MuiPassword.js";
import ur from "../palmyra/mui/form/MuiNumberField.js";
import { FieldManagerContext as Ne, StoreFactoryContext as Ue, LayoutParamsContext as Pt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as i, jsxs as K, Fragment as we } from "react/jsx-runtime";
import pe, { useState as ee, useRef as se, useEffect as ye, forwardRef as le, useContext as Ee, useImperativeHandle as ve, useMemo as wt } from "react";
import { FormControlLabel as et, Checkbox as tt, FormControl as Tt, FormHelperText as xt, Autocomplete as dr, TextField as Ge, CircularProgress as fr, Dialog as pr, ClickAwayListener as Dt, Button as Se, Paper as mr, InputAdornment as Ot, Tooltip as xe, TablePagination as Et, Box as hr } from "@mui/material";
import gr from "../palmyra/layout/card/CardLayout.js";
import yr from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Rt, getFieldLabel as _t } from "../palmyra/mui/form/MuiUtil.js";
import Nt from "../palmyra/mui/form/FieldDecorator.js";
import { hasDot as Re } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as _e, setValueByKey as rt } from "../palmyra/form/FormUtil.js";
import { delay as vr, mergeDeep as br } from "../palmyra/utils/index.js";
import Sr from "../palmyra/mui/form/MuiDateRangePicker.js";
import Mt from "../palmyra/layout/container/SectionContainer.js";
import Cr from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as Pr } from "../palmyra/grid/base/ColumnConverter.js";
import wr from "../palmyra/grid/base/EmptyChildTable.js";
import Tr from "../palmyra/grid/base/TableX.js";
import { Close as xr, Menu as nt, DensitySmall as ot, DensityLarge as at, FilterAlt as Dr, FileDownloadOutlined as Or, Add as Er } from "@mui/icons-material";
import { NoopCustomizer as Rr } from "../palmyra/grid/Types.js";
import { convertToField as _r } from "../palmyra/grid/base/GridFieldConverter.js";
import { a as Nr, g as Mr } from "./_commonjsHelpers.js";
import Ft from "react-dom";
import { createFilterData as Fr } from "../palmyra/form/PalmyraFilterManager.js";
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
import { getActionPublishers as Ar } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as At } from "../palmyra/layout/ErrorBoundary.js";
import kr from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import Lr from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { d as Ir } from "./PalmyraFieldManager.js";
import { useKeyValue as $r } from "../palmyra/utils/pubsub/PubSubHelper.js";
const Me = (e) => {
  const { store: t, quickSearch: r, endPointVars: n } = e, o = e.fetchAll != !1, [a, c] = ee(null), [l, d] = e.filterTopic ? $r(e.filterTopic, {}) : ee({}), [f, p] = ee({}), g = se(e.initialFetch == !1), m = e.pageSize ? e.pageSize : 15;
  var A = m instanceof Array ? m : [m], R = m instanceof Array ? m[0] : m;
  const [x, $] = ee({ limit: R, offset: 0 }), [V, C] = ee(null), h = () => Math.round(x.offset / x.limit), b = () => x.limit, s = (M) => {
    $({ ...x, offset: M * R });
  }, k = (M) => {
    const Y = M > 10 || M == -1 ? M : 15;
    $({ ...x, limit: Y });
  }, w = () => l ? Object.keys(l).length == 0 : !1;
  ye(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    (o || !w()) && X();
  }, [x, l, f]);
  const X = () => {
    const M = { filter: l, sortOrder: f, total: !0, endPointVars: n, ...x };
    if (t)
      try {
        t.query(M).then((Y) => {
          C(Y.result), c(Y.total);
        }).catch((Y) => {
          var U = Y.response ? Y.response : Y;
          console.error("error while fetching", U), W();
        });
      } catch (Y) {
        console.error(Y), z();
      }
    else
      console.error("Store is not provided for the Grid"), z();
  }, z = () => {
    C([]), c(0);
  }, W = () => {
    C(void 0), c(null);
  };
  return {
    setQueryFilter: (M) => {
      typeof M == "function" || M && Object.keys(M).length > 0 ? d(M) : d({});
    },
    setQuickSearch: (M) => {
      const Y = r;
      d(M ? (U) => (U[Y] = M, { ...U }) : (U) => (delete U[Y], { ...U }));
    },
    setSortColumns: (M) => {
      p(M);
    },
    refreshData: X,
    gotoPage: s,
    setPageSize: k,
    getPageNo: h,
    getLimit: b,
    filter: l,
    queryLimit: x,
    data: V,
    totalRecords: a,
    pageSizeOptions: A
  };
};
function st(e) {
  return e ? Array.isArray(e) ? e : typeof e == "string" ? e.split(",") : (console.log(e), [e]) : [];
}
const oa = le(function(t, r) {
  const n = Ee(Ne), o = r || se(null), a = n(t, "checkbox", o), { mutateOptions: c, setMutateOptions: l } = a, [d, f] = ee(!1), p = st(a.data), g = a.error, m = a.eventListeners, R = { store: a.store, pageSize: -1 }, { data: x } = Me(R), $ = x, V = se(null), C = t.lookupOptions || {}, h = C.idAttribute || "id", b = C.titleAttribute || "name", s = Re(h) ? (D) => _e(h, D) : (D) => D[h], k = Re(b) ? (D) => _e(b, D) : (D) => D[b];
  ve(o, () => ({
    focus() {
      V.current.focus();
    },
    isValid() {
      return !g.status;
    },
    assignAttribute(D) {
      V.current.assignAttribute(D);
    },
    getValue() {
      return a.getData();
    },
    clear() {
      a.setData("");
    },
    setValue(D) {
      a.setData(D);
    },
    setVisible(D) {
      l({ visible: D });
    }
  }), [a]);
  var w = Rt(t, a.data, t.label);
  t.readonly && (w.inputProps = { readOnly: !0 });
  function X(D, Q) {
    const M = st(a.data);
    var Y = M.indexOf(D);
    Q ? Y < 0 && M.push(D) : Y >= 0 && M.splice(Y, 1), m.onValueChange(M.toString());
  }
  var z = {
    onBlur: m.onBlur,
    onFocus: m.onFocus,
    onChange: (D) => {
      X(D.target.value, D.target.checked);
    }
  };
  const W = (D) => {
    const Q = D.toString();
    return p.includes(Q);
  }, B = (D) => {
    const Q = D.target.checked;
    f(Q);
    var M = [];
    Q && $.map((Y) => {
      M.push(s(Y));
    }), m.onValueChange(M.toString());
  };
  return /* @__PURE__ */ i("div", { className: t.className, children: c.visible && /* @__PURE__ */ K(
    Nt,
    {
      label: _t(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ i("div", { children: t.hideSelectAll ? /* @__PURE__ */ i(we, {}) : /* @__PURE__ */ i(
          et,
          {
            control: /* @__PURE__ */ i(tt, { onChange: B }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ K(
          Tt,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: g.status,
            ...w,
            children: [
              $ ? $.map((D) => /* @__PURE__ */ i(
                et,
                {
                  value: s(D),
                  control: /* @__PURE__ */ i(
                    tt,
                    {
                      ...z,
                      checked: W(s(D)),
                      disabled: t.readonly
                    }
                  ),
                  label: k(D)
                },
                s(D)
              )) : /* @__PURE__ */ i("div", { children: "No options provided" }),
              /* @__PURE__ */ i(xt, { className: "form-error-text", children: g.message })
            ]
          }
        )
      ]
    }
  ) });
}), Yr = (e, t, r) => {
  const n = e.store || r.store, o = e.lookupOptions || {}, a = o.idAttribute || "id", c = o.titleAttribute || "name", l = o.searchAttribute || c, d = r.data, f = se(0), [p, g] = ee(null), [m, A] = ee([]), [R, x] = ee(""), [$, V] = ee(!1), C = $ && m.length < (p ? 2 : 1), h = {
    store: n,
    endPointVars: e.storeOptions.endPointVars,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: l,
    initialFetch: !1
  }, b = Me(h), { setQueryFilter: s, setQuickSearch: k, filter: w, totalRecords: X, refreshData: z } = b, W = b.data, B = Re(a) ? (O) => _e(a, O) : (O) => O == null ? void 0 : O[a], D = Re(c) ? (O) => _e(c, O) : (O) => O == null ? void 0 : O[c];
  function Q() {
    if (d) {
      var O = {};
      rt(a, O, d);
      const H = r.displayValue || d;
      return rt(c, O, H), O;
    } else
      return null;
  }
  ye(() => {
    if (B(p) != r.data) {
      var O = Q();
      O && (A([O]), g(O));
    }
  }, [r.data]), ye(() => {
    const O = W ? [...W] : [], H = p;
    O && H && !M(O, B(H)) && O.unshift(H), A(O), f.current < X && (f.current = X);
  }, [W, X]);
  function M(O, H) {
    return O.find((J) => {
      if (B(J) == H)
        return J;
    });
  }
  ye(() => {
    vr(Y);
  }, [R, $]);
  function Y() {
    $ && (R.length > 0 && R != D(p) ? k("*" + R + "*") : W ? k(null) : z());
  }
  return {
    getSelectedOption: Q,
    filter: w,
    labelAccessor: D,
    idAccessor: B,
    getServerLookup: (O) => {
      var H = Rt(e, p, e.label);
      const J = r.eventListeners, u = r.error, v = e.variant || "standard", F = e.autoFocus || !1, _ = e.label, T = e.readonly || !1, L = e.required || !1;
      t.readonly && (H.inputProps = { readOnly: !0 });
      var E = {
        onBlur: J.onBlur,
        onFocus: J.onFocus,
        onChange: (S, P) => {
          N(P), g(P);
        },
        onInputChange: (S, P) => (x(P), !0)
      };
      const N = (S) => {
        if (S) {
          const P = B(S);
          J.onValueChange(P), r.setDisplayValue(D(S));
        } else
          J.onValueChange(void 0), r.setDisplayValue(void 0);
      }, I = (S) => typeof S == "object" ? D(S) + "" : S;
      return /* @__PURE__ */ i(
        Nt,
        {
          label: _t(e),
          customContainerClass: e.customContainerClass,
          colspan: e.colspan,
          customFieldClass: e.customFieldClass,
          customLabelClass: e.customLabelClass,
          children: /* @__PURE__ */ K(Tt, { fullWidth: !0, error: u.status, children: [
            /* @__PURE__ */ i(
              dr,
              {
                includeInputInList: !0,
                autoHighlight: !0,
                readOnly: T,
                isOptionEqualToValue: (S, P) => B(S) == B(P),
                filterOptions: (S) => S,
                renderInput: (S) => /* @__PURE__ */ i(
                  Ge,
                  {
                    ...S,
                    inputRef: (P) => {
                      O.current = P;
                    },
                    variant: v,
                    label: _,
                    autoFocus: F,
                    required: L,
                    InputProps: {
                      ...S.InputProps,
                      endAdornment: /* @__PURE__ */ K(we, { children: [
                        C ? /* @__PURE__ */ i(fr, { color: "inherit", size: 18 }) : null,
                        S.InputProps.endAdornment
                      ] })
                    }
                  }
                ),
                getOptionLabel: I,
                ...H,
                options: m,
                open: $,
                onClose: () => {
                  V(!1);
                },
                onOpen: (S) => {
                  V(!0);
                },
                ...E
              }
            ),
            /* @__PURE__ */ i(xt, { className: "form-error-text", children: u.message })
          ] })
        }
      );
    },
    setQueryFilter: s,
    searchText: R,
    setSearchText: x,
    refreshOptions: Y
  };
}, jr = le(function(t, r) {
  const n = Ee(Ne), o = r || se(null), a = n(t, "serverlookup", o), c = a.error, { mutateOptions: l, setMutateOptions: d } = a, f = se(null), { getServerLookup: p, setQueryFilter: g } = Yr(t, l, a);
  return ve(o, () => ({
    focus() {
      f.current.focus();
    },
    isValid() {
      return !c.status;
    },
    clear() {
      a.setData("");
    },
    getValue() {
      return a.getData();
    },
    setValue(m) {
      a.setData(m);
    },
    setRequired(m) {
    },
    setReadOnly(m) {
    },
    setVisible(m) {
      d({ visible: m });
    },
    setAttribute(m) {
    },
    setFilter(m) {
      g(m);
    },
    resetFilter() {
    },
    addFilter(m, A) {
      g((R) => (R[m] = A, { ...R }));
    },
    setDefaultFilter(m) {
    }
  }), [a]), p(f);
}), qr = (e) => {
  const { fieldDef: t } = e;
  return /* @__PURE__ */ K("div", { children: [
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
    }
  );
}, Vr = () => /* @__PURE__ */ i("div", { children: "To be Implemented" }), kt = (e, t, r) => {
  const { type: n } = e, o = { fieldDef: e, title: r };
  switch (n) {
    case "string":
      return ie(o, ir);
    case "radio":
      return ie(o, nr);
    case "select":
      return ie(o, or);
    case "date":
      return ie(o, tr);
    case "datetime":
      return ie(o, rr);
    case "checkbox":
      return ie(o, sr);
    case "serverlookup":
      return ie(o, jr);
    case "textarea":
      return ie(o, ar);
    case "switch":
      return ie(o, cr);
    case "password":
      return ie(o, lr);
    case "float":
    case "number":
    case "numbersOnly":
      return ie(o, ur);
    case "multiSelect":
      return Vr();
    case "dateRange":
      return ie(o, Sr);
    default:
      return qr(o);
  }
}, Wr = le(function(t, r) {
  var p;
  const { formLayout: n, context: o } = t, { formData: a } = o, c = n.Container;
  se({});
  const l = wt(() => (g) => kt(g), [a.data]);
  var d = ((p = n.options) == null ? void 0 : p.columns) || 1, f = { columns: d };
  return c ? /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((g, m) => /* @__PURE__ */ i(
    c,
    {
      index: m,
      field: g,
      label: g.title,
      options: f,
      children: l(g)
    },
    g.attribute
  )) }) : /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((g, m) => /* @__PURE__ */ i(we, { children: l(g) })) });
}), Lt = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Renderer || Wr, o = t.Container || Mt;
  const a = (c) => /* @__PURE__ */ i(
    n,
    {
      context: r,
      formLayout: c
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
}, zr = globalThis && globalThis.__rest || function(e, t) {
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
function Xr(e) {
  return function(t) {
    return pe.createElement(Br, ge({
      attr: ge({}, e.attr)
    }, t), $t(e.child));
  };
}
function Br(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, a = e.title, c = zr(e, ["attr", "size", "title"]), l = o || r.size || "1em", d;
    return r.className && (d = r.className), e.className && (d = (d ? d + " " : "") + e.className), pe.createElement("svg", ge({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, c, {
      className: d,
      style: ge(ge({
        color: e.color || r.color
      }, r.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && pe.createElement("title", null, a), e.children);
  };
  return ct !== void 0 ? pe.createElement(ct.Consumer, null, function(r) {
    return t(r);
  }) : t(It);
}
function Yt(e) {
  return Xr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
}
var Fe = { exports: {} }, jt = {}, Be = { exports: {} }, De = { exports: {} }, j = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function Ur() {
  if (lt)
    return j;
  lt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, A = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, V = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function h(s) {
    if (typeof s == "object" && s !== null) {
      var k = s.$$typeof;
      switch (k) {
        case t:
          switch (s = s.type, s) {
            case d:
            case f:
            case n:
            case a:
            case o:
            case g:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case l:
                case p:
                case R:
                case A:
                case c:
                  return s;
                default:
                  return k;
              }
          }
        case r:
          return k;
      }
    }
  }
  function b(s) {
    return h(s) === f;
  }
  return j.AsyncMode = d, j.ConcurrentMode = f, j.ContextConsumer = l, j.ContextProvider = c, j.Element = t, j.ForwardRef = p, j.Fragment = n, j.Lazy = R, j.Memo = A, j.Portal = r, j.Profiler = a, j.StrictMode = o, j.Suspense = g, j.isAsyncMode = function(s) {
    return b(s) || h(s) === d;
  }, j.isConcurrentMode = b, j.isContextConsumer = function(s) {
    return h(s) === l;
  }, j.isContextProvider = function(s) {
    return h(s) === c;
  }, j.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === t;
  }, j.isForwardRef = function(s) {
    return h(s) === p;
  }, j.isFragment = function(s) {
    return h(s) === n;
  }, j.isLazy = function(s) {
    return h(s) === R;
  }, j.isMemo = function(s) {
    return h(s) === A;
  }, j.isPortal = function(s) {
    return h(s) === r;
  }, j.isProfiler = function(s) {
    return h(s) === a;
  }, j.isStrictMode = function(s) {
    return h(s) === o;
  }, j.isSuspense = function(s) {
    return h(s) === g;
  }, j.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === f || s === a || s === o || s === g || s === m || typeof s == "object" && s !== null && (s.$$typeof === R || s.$$typeof === A || s.$$typeof === c || s.$$typeof === l || s.$$typeof === p || s.$$typeof === $ || s.$$typeof === V || s.$$typeof === C || s.$$typeof === x);
  }, j.typeOf = h, j;
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
var ut;
function Gr() {
  return ut || (ut = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, A = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, V = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function h(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === n || y === f || y === a || y === o || y === g || y === m || typeof y == "object" && y !== null && (y.$$typeof === R || y.$$typeof === A || y.$$typeof === c || y.$$typeof === l || y.$$typeof === p || y.$$typeof === $ || y.$$typeof === V || y.$$typeof === C || y.$$typeof === x);
    }
    function b(y) {
      if (typeof y == "object" && y !== null) {
        var ue = y.$$typeof;
        switch (ue) {
          case t:
            var Te = y.type;
            switch (Te) {
              case d:
              case f:
              case n:
              case a:
              case o:
              case g:
                return Te;
              default:
                var Ze = Te && Te.$$typeof;
                switch (Ze) {
                  case l:
                  case p:
                  case R:
                  case A:
                  case c:
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
    var s = d, k = f, w = l, X = c, z = t, W = p, B = n, D = R, Q = A, M = r, Y = a, U = o, O = g, H = !1;
    function J(y) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), u(y) || b(y) === d;
    }
    function u(y) {
      return b(y) === f;
    }
    function v(y) {
      return b(y) === l;
    }
    function F(y) {
      return b(y) === c;
    }
    function _(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }
    function T(y) {
      return b(y) === p;
    }
    function L(y) {
      return b(y) === n;
    }
    function E(y) {
      return b(y) === R;
    }
    function N(y) {
      return b(y) === A;
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
      return b(y) === g;
    }
    q.AsyncMode = s, q.ConcurrentMode = k, q.ContextConsumer = w, q.ContextProvider = X, q.Element = z, q.ForwardRef = W, q.Fragment = B, q.Lazy = D, q.Memo = Q, q.Portal = M, q.Profiler = Y, q.StrictMode = U, q.Suspense = O, q.isAsyncMode = J, q.isConcurrentMode = u, q.isContextConsumer = v, q.isContextProvider = F, q.isElement = _, q.isForwardRef = T, q.isFragment = L, q.isLazy = E, q.isMemo = N, q.isPortal = I, q.isProfiler = S, q.isStrictMode = P, q.isSuspense = re, q.isValidElementType = h, q.typeOf = b;
  }()), q;
}
var dt;
function qt() {
  return dt || (dt = 1, process.env.NODE_ENV === "production" ? De.exports = Ur() : De.exports = Gr()), De.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ie, ft;
function Hr() {
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
      for (var c = {}, l = 0; l < 10; l++)
        c["_" + String.fromCharCode(l)] = l;
      var d = Object.getOwnPropertyNames(c).map(function(p) {
        return c[p];
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
  return Ie = o() ? Object.assign : function(a, c) {
    for (var l, d = n(a), f, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var g in l)
        t.call(l, g) && (d[g] = l[g]);
      if (e) {
        f = e(l);
        for (var m = 0; m < f.length; m++)
          r.call(l, f[m]) && (d[f[m]] = l[f[m]]);
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
var je, ht;
function Kr() {
  if (ht)
    return je;
  ht = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = He(), r = {}, n = Vt();
    e = function(a) {
      var c = "Warning: " + a;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function o(a, c, l, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (n(a, p)) {
          var g;
          try {
            if (typeof a[p] != "function") {
              var m = Error(
                (d || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            g = a[p](c, p, d, l, null, t);
          } catch (R) {
            g = R;
          }
          if (g && !(g instanceof Error) && e(
            (d || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in r)) {
            r[g.message] = !0;
            var A = f ? f() : "";
            e(
              "Failed " + l + " type: " + g.message + (A ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, je = o, je;
}
var qe, gt;
function Qr() {
  if (gt)
    return qe;
  gt = 1;
  var e = qt(), t = Hr(), r = He(), n = Vt(), o = Kr(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var d = "Warning: " + l;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return qe = function(l, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function g(u) {
      var v = u && (f && u[f] || u[p]);
      if (typeof v == "function")
        return v;
    }
    var m = "<<anonymous>>", A = {
      array: V("array"),
      bigint: V("bigint"),
      bool: V("boolean"),
      func: V("function"),
      number: V("number"),
      object: V("object"),
      string: V("string"),
      symbol: V("symbol"),
      any: C(),
      arrayOf: h,
      element: b(),
      elementType: s(),
      instanceOf: k,
      node: W(),
      objectOf: X,
      oneOf: w,
      oneOfType: z,
      shape: D,
      exact: Q
    };
    function R(u, v) {
      return u === v ? u !== 0 || 1 / u === 1 / v : u !== u && v !== v;
    }
    function x(u, v) {
      this.message = u, this.data = v && typeof v == "object" ? v : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function $(u) {
      if (process.env.NODE_ENV !== "production")
        var v = {}, F = 0;
      function _(L, E, N, I, S, P, re) {
        if (I = I || m, P = P || N, re !== r) {
          if (d) {
            var y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw y.name = "Invariant Violation", y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = I + ":" + N;
            !v[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + P + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), v[ue] = !0, F++);
          }
        }
        return E[N] == null ? L ? E[N] === null ? new x("The " + S + " `" + P + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new x("The " + S + " `" + P + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : u(E, N, I, S, P);
      }
      var T = _.bind(null, !1);
      return T.isRequired = _.bind(null, !0), T;
    }
    function V(u) {
      function v(F, _, T, L, E, N) {
        var I = F[_], S = U(I);
        if (S !== u) {
          var P = O(I);
          return new x(
            "Invalid " + L + " `" + E + "` of type " + ("`" + P + "` supplied to `" + T + "`, expected ") + ("`" + u + "`."),
            { expectedType: u }
          );
        }
        return null;
      }
      return $(v);
    }
    function C() {
      return $(c);
    }
    function h(u) {
      function v(F, _, T, L, E) {
        if (typeof u != "function")
          return new x("Property `" + E + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var N = F[_];
        if (!Array.isArray(N)) {
          var I = U(N);
          return new x("Invalid " + L + " `" + E + "` of type " + ("`" + I + "` supplied to `" + T + "`, expected an array."));
        }
        for (var S = 0; S < N.length; S++) {
          var P = u(N, S, T, L, E + "[" + S + "]", r);
          if (P instanceof Error)
            return P;
        }
        return null;
      }
      return $(v);
    }
    function b() {
      function u(v, F, _, T, L) {
        var E = v[F];
        if (!l(E)) {
          var N = U(E);
          return new x("Invalid " + T + " `" + L + "` of type " + ("`" + N + "` supplied to `" + _ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return $(u);
    }
    function s() {
      function u(v, F, _, T, L) {
        var E = v[F];
        if (!e.isValidElementType(E)) {
          var N = U(E);
          return new x("Invalid " + T + " `" + L + "` of type " + ("`" + N + "` supplied to `" + _ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return $(u);
    }
    function k(u) {
      function v(F, _, T, L, E) {
        if (!(F[_] instanceof u)) {
          var N = u.name || m, I = J(F[_]);
          return new x("Invalid " + L + " `" + E + "` of type " + ("`" + I + "` supplied to `" + T + "`, expected ") + ("instance of `" + N + "`."));
        }
        return null;
      }
      return $(v);
    }
    function w(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), c;
      function v(F, _, T, L, E) {
        for (var N = F[_], I = 0; I < u.length; I++)
          if (R(N, u[I]))
            return null;
        var S = JSON.stringify(u, function(re, y) {
          var ue = O(y);
          return ue === "symbol" ? String(y) : y;
        });
        return new x("Invalid " + L + " `" + E + "` of value `" + String(N) + "` " + ("supplied to `" + T + "`, expected one of " + S + "."));
      }
      return $(v);
    }
    function X(u) {
      function v(F, _, T, L, E) {
        if (typeof u != "function")
          return new x("Property `" + E + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var N = F[_], I = U(N);
        if (I !== "object")
          return new x("Invalid " + L + " `" + E + "` of type " + ("`" + I + "` supplied to `" + T + "`, expected an object."));
        for (var S in N)
          if (n(N, S)) {
            var P = u(N, S, T, L, E + "." + S, r);
            if (P instanceof Error)
              return P;
          }
        return null;
      }
      return $(v);
    }
    function z(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var v = 0; v < u.length; v++) {
        var F = u[v];
        if (typeof F != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + H(F) + " at index " + v + "."
          ), c;
      }
      function _(T, L, E, N, I) {
        for (var S = [], P = 0; P < u.length; P++) {
          var re = u[P], y = re(T, L, E, N, I, r);
          if (y == null)
            return null;
          y.data && n(y.data, "expectedType") && S.push(y.data.expectedType);
        }
        var ue = S.length > 0 ? ", expected one of type [" + S.join(", ") + "]" : "";
        return new x("Invalid " + N + " `" + I + "` supplied to " + ("`" + E + "`" + ue + "."));
      }
      return $(_);
    }
    function W() {
      function u(v, F, _, T, L) {
        return M(v[F]) ? null : new x("Invalid " + T + " `" + L + "` supplied to " + ("`" + _ + "`, expected a ReactNode."));
      }
      return $(u);
    }
    function B(u, v, F, _, T) {
      return new x(
        (u || "React class") + ": " + v + " type `" + F + "." + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function D(u) {
      function v(F, _, T, L, E) {
        var N = F[_], I = U(N);
        if (I !== "object")
          return new x("Invalid " + L + " `" + E + "` of type `" + I + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var S in u) {
          var P = u[S];
          if (typeof P != "function")
            return B(T, L, E, S, O(P));
          var re = P(N, S, T, L, E + "." + S, r);
          if (re)
            return re;
        }
        return null;
      }
      return $(v);
    }
    function Q(u) {
      function v(F, _, T, L, E) {
        var N = F[_], I = U(N);
        if (I !== "object")
          return new x("Invalid " + L + " `" + E + "` of type `" + I + "` " + ("supplied to `" + T + "`, expected `object`."));
        var S = t({}, F[_], u);
        for (var P in S) {
          var re = u[P];
          if (n(u, P) && typeof re != "function")
            return B(T, L, E, P, O(re));
          if (!re)
            return new x(
              "Invalid " + L + " `" + E + "` key `" + P + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(F[_], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(u), null, "  ")
            );
          var y = re(N, P, T, L, E + "." + P, r);
          if (y)
            return y;
        }
        return null;
      }
      return $(v);
    }
    function M(u) {
      switch (typeof u) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !u;
        case "object":
          if (Array.isArray(u))
            return u.every(M);
          if (u === null || l(u))
            return !0;
          var v = g(u);
          if (v) {
            var F = v.call(u), _;
            if (v !== u.entries) {
              for (; !(_ = F.next()).done; )
                if (!M(_.value))
                  return !1;
            } else
              for (; !(_ = F.next()).done; ) {
                var T = _.value;
                if (T && !M(T[1]))
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
    function U(u) {
      var v = typeof u;
      return Array.isArray(u) ? "array" : u instanceof RegExp ? "object" : Y(v, u) ? "symbol" : v;
    }
    function O(u) {
      if (typeof u > "u" || u === null)
        return "" + u;
      var v = U(u);
      if (v === "object") {
        if (u instanceof Date)
          return "date";
        if (u instanceof RegExp)
          return "regexp";
      }
      return v;
    }
    function H(u) {
      var v = O(u);
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
    return A.checkPropTypes = o, A.resetWarningCache = o.resetWarningCache, A.PropTypes = A, A;
  }, qe;
}
var Ve, yt;
function Jr() {
  if (yt)
    return Ve;
  yt = 1;
  var e = He();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ve = function() {
    function n(c, l, d, f, p, g) {
      if (g !== e) {
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
  var Zr = qt(), en = !0;
  Be.exports = Qr()(Zr.isElement, en);
} else
  Be.exports = Jr()();
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
const tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: vt,
  default: vt
}, Symbol.toStringTag, { value: "Module" })), rn = /* @__PURE__ */ Nr(tn);
var G = {}, de = {};
Object.defineProperty(de, "__esModule", {
  value: !0
});
de.dontSetMe = cn;
de.findInArray = nn;
de.int = sn;
de.isFunction = on;
de.isNum = an;
function nn(e, t) {
  for (let r = 0, n = e.length; r < n; r++)
    if (t.apply(t, [e[r], r, e]))
      return e[r];
}
function on(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function an(e) {
  return typeof e == "number" && !isNaN(e);
}
function sn(e) {
  return parseInt(e, 10);
}
function cn(e, t, r) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var be = {};
Object.defineProperty(be, "__esModule", {
  value: !0
});
be.browserPrefixToKey = Bt;
be.browserPrefixToStyle = ln;
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
  return t ? "".concat(t).concat(un(e)) : e;
}
function ln(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function un(e) {
  let t = "", r = !0;
  for (let n = 0; n < e.length; n++)
    r ? (t += e[n].toUpperCase(), r = !1) : e[n] === "-" ? r = !0 : t += e[n];
  return t;
}
be.default = Xt();
Object.defineProperty(G, "__esModule", {
  value: !0
});
G.addClassName = Ht;
G.addEvent = pn;
G.addUserSelectStyles = Tn;
G.createCSSTransform = Sn;
G.createSVGTransform = Cn;
G.getTouch = Pn;
G.getTouchIdentifier = wn;
G.getTranslation = Ke;
G.innerHeight = yn;
G.innerWidth = vn;
G.matchesSelector = Gt;
G.matchesSelectorAndParentsTo = fn;
G.offsetXYFromParent = bn;
G.outerHeight = hn;
G.outerWidth = gn;
G.removeClassName = Kt;
G.removeEvent = mn;
G.removeUserSelectStyles = xn;
var ae = de, bt = dn(be);
function Ut(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Ut = function(n) {
    return n ? r : t;
  })(e);
}
function dn(e, t) {
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
      var c = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
let Oe = "";
function Gt(e, t) {
  return Oe || (Oe = (0, ae.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, ae.isFunction)(e[r]);
  })), (0, ae.isFunction)(e[Oe]) ? e[Oe](t) : !1;
}
function fn(e, t, r) {
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
function pn(e, t, r, n) {
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
function hn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ae.int)(r.borderTopWidth), t += (0, ae.int)(r.borderBottomWidth), t;
}
function gn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ae.int)(r.borderLeftWidth), t += (0, ae.int)(r.borderRightWidth), t;
}
function yn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ae.int)(r.paddingTop), t -= (0, ae.int)(r.paddingBottom), t;
}
function vn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ae.int)(r.paddingLeft), t -= (0, ae.int)(r.paddingRight), t;
}
function bn(e, t, r) {
  const o = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), a = (e.clientX + t.scrollLeft - o.left) / r, c = (e.clientY + t.scrollTop - o.top) / r;
  return {
    x: a,
    y: c
  };
}
function Sn(e, t) {
  const r = Ke(e, t, "px");
  return {
    [(0, bt.browserPrefixToKey)("transform", bt.default)]: r
  };
}
function Cn(e, t) {
  return Ke(e, t, "");
}
function Ke(e, t, r) {
  let {
    x: n,
    y: o
  } = e, a = "translate(".concat(n).concat(r, ",").concat(o).concat(r, ")");
  if (t) {
    const c = "".concat(typeof t.x == "string" ? t.x : t.x + r), l = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    a = "translate(".concat(c, ", ").concat(l, ")") + a;
  }
  return a;
}
function Pn(e, t) {
  return e.targetTouches && (0, ae.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, ae.findInArray)(e.changedTouches, (r) => t === r.identifier);
}
function wn(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Tn(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && Ht(e.body, "react-draggable-transparent-selection");
}
function xn(e) {
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
fe.canDragX = En;
fe.canDragY = Rn;
fe.createCoreData = Nn;
fe.createDraggableData = Mn;
fe.getBoundPosition = Dn;
fe.getControlPosition = _n;
fe.snapToGrid = On;
var oe = de, Ce = G;
function Dn(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : Fn(n);
  const o = Qe(e);
  if (typeof n == "string") {
    const {
      ownerDocument: a
    } = o, c = a.defaultView;
    let l;
    if (n === "parent" ? l = o.parentNode : l = a.querySelector(n), !(l instanceof c.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const d = l, f = c.getComputedStyle(o), p = c.getComputedStyle(d);
    n = {
      left: -o.offsetLeft + (0, oe.int)(p.paddingLeft) + (0, oe.int)(f.marginLeft),
      top: -o.offsetTop + (0, oe.int)(p.paddingTop) + (0, oe.int)(f.marginTop),
      right: (0, Ce.innerWidth)(d) - (0, Ce.outerWidth)(o) - o.offsetLeft + (0, oe.int)(p.paddingRight) - (0, oe.int)(f.marginRight),
      bottom: (0, Ce.innerHeight)(d) - (0, Ce.outerHeight)(o) - o.offsetTop + (0, oe.int)(p.paddingBottom) - (0, oe.int)(f.marginBottom)
    };
  }
  return (0, oe.isNum)(n.right) && (t = Math.min(t, n.right)), (0, oe.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, oe.isNum)(n.left) && (t = Math.max(t, n.left)), (0, oe.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function On(e, t, r) {
  const n = Math.round(t / e[0]) * e[0], o = Math.round(r / e[1]) * e[1];
  return [n, o];
}
function En(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function Rn(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function _n(e, t, r) {
  const n = typeof t == "number" ? (0, Ce.getTouch)(e, t) : null;
  if (typeof t == "number" && !n)
    return null;
  const o = Qe(r), a = r.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, Ce.offsetXYFromParent)(n || e, a, r.props.scale);
}
function Nn(e, t, r) {
  const n = !(0, oe.isNum)(e.lastX), o = Qe(e);
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
function Fn(e) {
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
ke.default = An;
function An() {
}
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = void 0;
var ze = Ln(pe), ne = Je(Wt), kn = Je(Ft), Z = G, me = fe, Xe = de, Pe = Je(ke);
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
function Ln(e, t) {
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
      var c = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
function te(e, t, r) {
  return t = In(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function In(e) {
  var t = $n(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function $n(e, t) {
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
        x: c,
        y: l
      } = a, d = (0, me.createCoreData)(this, c, l);
      (0, Pe.default)("DraggableCore: handleDragStart: %j", d), (0, Pe.default)("calling", this.props.onStart), !(this.props.onStart(t, d) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, Z.addUserSelectStyles)(n), this.dragging = !0, this.lastX = c, this.lastY = l, (0, Z.addEvent)(n, he.move, this.handleDrag), (0, Z.addEvent)(n, he.stop, this.handleDragStop));
    }), te(this, "handleDrag", (t) => {
      const r = (0, me.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let l = n - this.lastX, d = o - this.lastY;
        if ([l, d] = (0, me.snapToGrid)(this.props.grid, l, d), !l && !d)
          return;
        n = this.lastX + l, o = this.lastY + d;
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
      const l = this.findDOMNode();
      l && this.props.enableUserSelectHack && (0, Z.removeUserSelectStyles)(l.ownerDocument), (0, Pe.default)("DraggableCore: handleDragStop: %j", a), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, l && ((0, Pe.default)("DraggableCore: Removing handlers"), (0, Z.removeEvent)(l.ownerDocument, he.move, this.handleDrag), (0, Z.removeEvent)(l.ownerDocument, he.stop, this.handleDragStop));
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
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (r = this.props) === null || r === void 0 || (r = r.nodeRef) === null || r === void 0 ? void 0 : r.current : kn.default.findDOMNode(this);
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
  var t = m(pe), r = p(Wt), n = p(Ft), o = p(rn), a = G, c = fe, l = de, d = p(Ae), f = p(ke);
  function p(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function g(C) {
    if (typeof WeakMap != "function")
      return null;
    var h = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap();
    return (g = function(s) {
      return s ? b : h;
    })(C);
  }
  function m(C, h) {
    if (!h && C && C.__esModule)
      return C;
    if (C === null || typeof C != "object" && typeof C != "function")
      return { default: C };
    var b = g(h);
    if (b && b.has(C))
      return b.get(C);
    var s = {}, k = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var w in C)
      if (w !== "default" && Object.prototype.hasOwnProperty.call(C, w)) {
        var X = k ? Object.getOwnPropertyDescriptor(C, w) : null;
        X && (X.get || X.set) ? Object.defineProperty(s, w, X) : s[w] = C[w];
      }
    return s.default = C, b && b.set(C, s), s;
  }
  function A() {
    return A = Object.assign ? Object.assign.bind() : function(C) {
      for (var h = 1; h < arguments.length; h++) {
        var b = arguments[h];
        for (var s in b)
          Object.prototype.hasOwnProperty.call(b, s) && (C[s] = b[s]);
      }
      return C;
    }, A.apply(this, arguments);
  }
  function R(C, h, b) {
    return h = x(h), h in C ? Object.defineProperty(C, h, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : C[h] = b, C;
  }
  function x(C) {
    var h = $(C, "string");
    return typeof h == "symbol" ? h : String(h);
  }
  function $(C, h) {
    if (typeof C != "object" || C === null)
      return C;
    var b = C[Symbol.toPrimitive];
    if (b !== void 0) {
      var s = b.call(C, h || "default");
      if (typeof s != "object")
        return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(C);
  }
  class V extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(h, b) {
      let {
        position: s
      } = h, {
        prevPropsPosition: k
      } = b;
      return s && (!k || s.x !== k.x || s.y !== k.y) ? ((0, f.default)("Draggable: getDerivedStateFromProps %j", {
        position: s,
        prevPropsPosition: k
      }), {
        x: s.x,
        y: s.y,
        prevPropsPosition: {
          ...s
        }
      }) : null;
    }
    constructor(h) {
      super(h), R(this, "onDragStart", (b, s) => {
        if ((0, f.default)("Draggable: onDragStart: %j", s), this.props.onStart(b, (0, c.createDraggableData)(this, s)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), R(this, "onDrag", (b, s) => {
        if (!this.state.dragging)
          return !1;
        (0, f.default)("Draggable: onDrag: %j", s);
        const k = (0, c.createDraggableData)(this, s), w = {
          x: k.x,
          y: k.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: z,
            y: W
          } = w;
          w.x += this.state.slackX, w.y += this.state.slackY;
          const [B, D] = (0, c.getBoundPosition)(this, w.x, w.y);
          w.x = B, w.y = D, w.slackX = this.state.slackX + (z - w.x), w.slackY = this.state.slackY + (W - w.y), k.x = w.x, k.y = w.y, k.deltaX = w.x - this.state.x, k.deltaY = w.y - this.state.y;
        }
        if (this.props.onDrag(b, k) === !1)
          return !1;
        this.setState(w);
      }), R(this, "onDragStop", (b, s) => {
        if (!this.state.dragging || this.props.onStop(b, (0, c.createDraggableData)(this, s)) === !1)
          return !1;
        (0, f.default)("Draggable: onDragStop: %j", s);
        const w = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: z,
            y: W
          } = this.props.position;
          w.x = z, w.y = W;
        }
        this.setState(w);
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
      var h, b;
      return (h = (b = this.props) === null || b === void 0 || (b = b.nodeRef) === null || b === void 0 ? void 0 : b.current) !== null && h !== void 0 ? h : n.default.findDOMNode(this);
    }
    render() {
      const {
        axis: h,
        bounds: b,
        children: s,
        defaultPosition: k,
        defaultClassName: w,
        defaultClassNameDragging: X,
        defaultClassNameDragged: z,
        position: W,
        positionOffset: B,
        scale: D,
        ...Q
      } = this.props;
      let M = {}, Y = null;
      const O = !!!W || this.state.dragging, H = W || k, J = {
        // Set left if horizontal drag is enabled
        x: (0, c.canDragX)(this) && O ? this.state.x : H.x,
        // Set top if vertical drag is enabled
        y: (0, c.canDragY)(this) && O ? this.state.y : H.y
      };
      this.state.isElementSVG ? Y = (0, a.createSVGTransform)(J, B) : M = (0, a.createCSSTransform)(J, B);
      const u = (0, o.default)(s.props.className || "", w, {
        [X]: this.state.dragging,
        [z]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(d.default, A({}, Q, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(s), {
        className: u,
        style: {
          ...s.props.style,
          ...M
        },
        transform: Y
      }));
    }
  }
  e.default = V, R(V, "displayName", "Draggable"), R(V, "propTypes", {
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
    className: l.dontSetMe,
    style: l.dontSetMe,
    transform: l.dontSetMe
  }), R(V, "defaultProps", {
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
})(jt);
const {
  default: Jt,
  DraggableCore: Yn
} = jt;
Fe.exports = Jt;
Fe.exports.default = Jt;
Fe.exports.DraggableCore = Yn;
var jn = Fe.exports;
const qn = /* @__PURE__ */ Mr(jn);
const Vn = (e) => {
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
  const { formLayout: n, context: o } = t, { formData: a } = o, c = se({}), l = Vn(t), d = "palmyra-form-field-data", f = wt(() => (p) => kt(p, c, p.label), [a.data]);
  return /* @__PURE__ */ i("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: n.fields.map((p, g) => /* @__PURE__ */ i("div", { className: l, children: /* @__PURE__ */ i("div", { className: d, children: f(p) }) }, p.attribute)) });
});
function zn(e) {
  return /* @__PURE__ */ i(
    qn,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ i(mr, { ...e })
    }
  );
}
const Xn = ({ columns: e, isOpen: t, onClose: r, setFilter: n, defaultFilter: o = {} }) => {
  var { getFieldManager: a, getFilterData: c } = Fr(o);
  const l = () => {
    n({});
  }, d = () => {
    var m = c();
    n && n(m);
  }, f = () => {
    r();
  }, p = (m) => {
    m.keyCode === 27 && f();
  }, g = _r(e);
  return /* @__PURE__ */ i("div", { className: "grid-filter-container", children: /* @__PURE__ */ i(
    pr,
    {
      open: t,
      onClose: f,
      PaperComponent: zn,
      onKeyDown: p,
      children: /* @__PURE__ */ i(Dt, { onClickAway: r, children: /* @__PURE__ */ K("div", { children: [
        /* @__PURE__ */ K("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ i("div", { className: "grid-header-text-container", children: /* @__PURE__ */ i("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ i("div", { className: "grid-header-icon-container", onClick: f, children: /* @__PURE__ */ i(xr, { className: "filter-cancel-icon" }) })
        ] }),
        /* @__PURE__ */ i("span", { className: "filter-header-border" }),
        /* @__PURE__ */ i("div", { className: "grid-filter-content", children: /* @__PURE__ */ i(Ne.Provider, { value: a, children: /* @__PURE__ */ i(
          Lt,
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
        /* @__PURE__ */ K("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ i(Se, { className: "filter-reset-btn", disableRipple: !0, onClick: l, children: "Reset" }),
          /* @__PURE__ */ i(Se, { className: "filter-button", disableRipple: !0, onClick: d, children: "Filter" })
        ] })
      ] }) })
    }
  ) });
}, Bn = le(function(t, r) {
  const { columns: n, children: o, EmptyChild: a, onRowClick: c, quickSearch: l } = t, d = a || wr, f = t.customizer || Rr, [p, g] = ee(!1), [m, A] = ee("standard"), [R, x] = ee(!1), [$, V] = ee(""), {
    setQueryFilter: C,
    setQuickSearch: h,
    setSortColumns: b,
    gotoPage: s,
    setPageSize: k,
    getPageNo: w,
    refreshData: X,
    data: z,
    totalRecords: W,
    pageSizeOptions: B,
    filter: D,
    queryLimit: Q
  } = Me(t), M = r || se(null);
  ve(M, () => ({
    setFilter: (S) => {
      C(S);
    },
    refresh: () => {
      X();
    }
  }), []);
  const Y = (S, P) => {
    s(P);
  }, U = Pr(n, f), O = (S) => {
    A(S);
  }, H = () => {
    g(!p);
  }, J = () => m === "compact" ? { padding: "3px" } : m === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, u = () => m === "compact" ? { padding: "3px" } : m === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, v = () => {
    var S;
    switch (m) {
      case "compact":
        S = /* @__PURE__ */ i(ot, { className: "density-icon" });
        break;
      case "comfortable":
        S = /* @__PURE__ */ i(at, { className: "density-icon" });
        break;
      default:
        S = /* @__PURE__ */ i(nt, { className: "grid-button-icon" });
        break;
    }
    return S;
  }, F = (S) => {
    const P = S.target.value;
    V(P), P ? h(P) : C({});
  }, _ = (S) => {
    c && c(S);
  }, T = (S) => {
    const P = parseInt(S.target.value, 10);
    k(P);
  }, L = () => {
    console.info("Export Clicked");
  }, E = 200, N = !!t.pageSize;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ K("div", { children: [
    o,
    /* @__PURE__ */ K("div", { className: "grid-header", children: [
      /* @__PURE__ */ i("div", { className: "grid-header-filter", children: !!l && /* @__PURE__ */ i(
        Ge,
        {
          sx: { width: E },
          type: "text",
          value: $,
          onChange: F,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ i(Ot, { position: "end", children: /* @__PURE__ */ i(Yt, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ i(Dt, { onClickAway: () => {
        g(!1);
      }, children: /* @__PURE__ */ K("div", { className: "grid-header-button grid-density-btn", onClick: H, children: [
        /* @__PURE__ */ i(xe, { title: "Density", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: v() }) }),
        p && /* @__PURE__ */ i("div", { className: "density-dropdown-content", children: /* @__PURE__ */ K("ul", { children: [
          /* @__PURE__ */ K("li", { onClick: () => O("standard"), children: [
            /* @__PURE__ */ i(nt, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ K("li", { onClick: () => O("compact"), children: [
            /* @__PURE__ */ i(ot, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ K("li", { onClick: () => O("comfortable"), children: [
            /* @__PURE__ */ i(at, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ K("div", { className: "grid-header-button grid-filter-btn", children: [
        /* @__PURE__ */ i(xe, { title: "Filter", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, onClick: () => x(!0), children: /* @__PURE__ */ i(Dr, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ i(
          Xn,
          {
            columns: n,
            setFilter: C,
            defaultFilter: D,
            isOpen: R,
            onClose: () => x(!1)
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "grid-header-button grid-export-btn", onClick: L, children: /* @__PURE__ */ i(xe, { title: "Export", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Or, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ i(xe, { title: "New", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Er, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ i(we, {})
    ] }),
    /* @__PURE__ */ i("div", { className: "grid-table", children: /* @__PURE__ */ i(
      Tr,
      {
        columnDefs: U,
        EmptyChild: d,
        rowData: z,
        onRowClick: _,
        onRowStyle: J,
        onHeaderStyle: u,
        onSortColumn: b
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "grid-header", children: /* @__PURE__ */ i("div", { className: "grid-filter", children: N && /* @__PURE__ */ i(
      Et,
      {
        component: "div",
        count: W || 0,
        page: w(),
        onPageChange: Y,
        rowsPerPage: Q.limit,
        rowsPerPageOptions: B || [],
        onRowsPerPageChange: T
      }
    ) }) })
  ] }) });
}), ia = le(function(t, r) {
  const { columns: n, endPoint: o, storeFactory: a, layoutParams: c, pagination: l } = t, d = t.quickSearch || "", f = se(null), p = (m, A) => {
    console.log(A);
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
  const g = {
    fields: n,
    pagination: l,
    quickSearch: d,
    storeOptions: {
      endPoint: o
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ i(we, { children: /* @__PURE__ */ i(Ue.Provider, { value: a, children: /* @__PURE__ */ i(Zt, { layout: g, context: c, customizer: t.customizer, ref: f }) }) });
}), Un = le(function(t, r) {
  const n = t.layout, [o, a] = ee(n.fields), c = n.pagination ? n.pagination : [15], l = Ee(Ue), d = Ee(Pt);
  var f = n.storeOptions || {}, p = {};
  br(p, f, d);
  const g = l.getGridStore(p, n.storeOptions.endPoint);
  ye(() => {
    f.hasLayout && g.queryLayout({}).then((R) => {
      a(R.columns);
    });
  }, []);
  const { onClick: m, onNewClick: A } = Ar(n.actionOptions, d);
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    Bn,
    {
      columns: o,
      store: g,
      pageSize: c,
      onRowClick: m,
      onNewClick: A,
      customizer: t.customizer,
      quickSearch: n.quickSearch,
      ref: r
    }
  ) });
}), Zt = Un, Gn = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Container || Mt;
  return /* @__PURE__ */ i(At, { fallback: /* @__PURE__ */ i("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ i(n, { ...t, children: ((a) => /* @__PURE__ */ i(
    Zt,
    {
      context: r,
      layout: a
    }
  ))(t.tableLayout) }) });
}, Hn = (e) => {
  const { layout: t } = e;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ i(Lt, { ...e });
    case "view":
      return /* @__PURE__ */ i(Lr, { ...e });
    case "grid":
      return /* @__PURE__ */ i(Gn, { ...e });
    case "chart":
      return /* @__PURE__ */ i(yr, { ...e });
    default:
      return /* @__PURE__ */ i(kr, { ...e });
  }
};
function Kn(e, t) {
  var r = e || 1, n = t;
  return {
    w: r,
    h: n
  };
}
const er = (e) => {
  const { layout: t, context: r } = e, n = t.sections;
  function o(a, c, l) {
    const { w: d, h: f } = Kn(a.width, a.height);
    return /* @__PURE__ */ i(hr, { sx: { width: d, height: f }, children: /* @__PURE__ */ i(
      Hn,
      {
        layout: a,
        context: c
      }
    ) }, (a.name || "tab") + l);
  }
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap" }, children: n.map((a, c) => o(a, r, c)) });
}, St = le(function(t, r) {
  const { layout: n } = t;
  ve(r, () => ({
    resetFilter() {
    }
  }), []);
  const o = {}, a = n.tabs;
  return /* @__PURE__ */ i("div", { children: a.map((c, l) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    er,
    {
      layout: c,
      context: o
    }
  ) }, c.name + l)) });
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
}, Ct = le(function(t, r) {
  var p;
  const n = t.data || {}, { layout: o } = t;
  var { getFieldManager: a, getFormData: c, isFormValid: l } = Ir(n, (p = t.callbacks) == null ? void 0 : p.onFormValidChange, Qn(t.mode));
  ve(r, () => ({
    getData() {
      return c();
    },
    isValid() {
      return l();
    }
  }), []);
  const d = { formData: n }, f = o.tabs;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(Ne.Provider, { value: a, children: f.map((g, m) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    er,
    {
      layout: g,
      context: d
    }
  ) }, g.name + m)) }) });
}), Jn = (e) => {
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
}, sa = le(function(t, r) {
  const [n, o] = ee(t.layout), a = t.mode ? t.mode : n.type ? n.type : "grid", c = t.layoutParams || {}, l = Jn(a), d = se(0);
  return ye(() => {
    o(t.layout), d.current < 999999 ? d.current++ : d.current = 0;
  }, [t.layout]), /* @__PURE__ */ i(At, { fallback: /* @__PURE__ */ i("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ i(Ue.Provider, { value: t.storeFactory, children: /* @__PURE__ */ i(Pt.Provider, { value: c, children: /* @__PURE__ */ i(l, { ...t, ref: (f) => {
    r && (r.current = f);
  } }, d.current) }) }) });
}), ca = le(function(t, r) {
  const { children: n, Child: o, childProps: a, pageSize: c } = t, l = r || se(null), {
    setQueryFilter: d,
    refreshData: f,
    setQuickSearch: p,
    gotoPage: g,
    setPageSize: m,
    getPageNo: A,
    data: R,
    totalRecords: x,
    pageSizeOptions: $,
    queryLimit: V
  } = Me(t), C = t.listKeyProvider || ((z, W) => W);
  ve(l, () => ({
    setFilter(z) {
      d(z);
    },
    refresh: () => {
      f();
    },
    gotoPage(z) {
      g(z);
    },
    nextPage() {
    },
    prevPage() {
    }
  }), []);
  const h = (z, W) => {
    g(W);
  }, b = (z) => {
    const W = z.target.value;
    p(W);
  }, s = (z) => {
    const W = parseInt(z.target.value, 10);
    m(W);
  }, k = 200, w = !!c, X = !!t.quickSearch;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ K("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ K("div", { children: [
      /* @__PURE__ */ K("div", { className: "card-header", children: [
        /* @__PURE__ */ i("div", { className: "card-filter", children: X && /* @__PURE__ */ i(
          Ge,
          {
            sx: { width: k },
            type: "text",
            onChange: b,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ i(Ot, { position: "end", children: /* @__PURE__ */ i(Yt, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ i("div", { className: "card-pagination", children: w && /* @__PURE__ */ i(
          Et,
          {
            component: "div",
            count: x || 0,
            page: A(),
            onPageChange: h,
            rowsPerPage: V.limit,
            rowsPerPageOptions: $ || [],
            onRowsPerPageChange: s
          }
        ) })
      ] }),
      /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
        gr,
        {
          Child: o,
          childKeyProvider: C,
          dataList: R,
          childProps: a,
          EmptyChild: t.EmptyChild
        }
      ) })
    ] })
  ] }) });
});
export {
  sa as F,
  Zt as G,
  oa as M,
  ia as P,
  ca as S,
  er as T,
  Bn as a,
  jr as b,
  Me as c,
  Wr as d,
  Lt as e,
  Wn as f,
  kt as g,
  Xn as h,
  Gn as i,
  Hn as j,
  St as k,
  Ct as l,
  Yr as u
};
