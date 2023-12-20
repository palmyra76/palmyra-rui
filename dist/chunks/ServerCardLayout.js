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
import { jsx as i, jsxs as K, Fragment as Me } from "react/jsx-runtime";
import me, { useState as Z, useRef as le, useEffect as ye, forwardRef as ue, useContext as De, useImperativeHandle as ve, useMemo as wt } from "react";
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
import Ir from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as Lr } from "./PalmyraFieldManager.js";
import { useKeyValue as $r } from "../palmyra/utils/pubsub/PubSubHelper.js";
const Ne = (e) => {
  var Q, ne;
  const { store: t, quickSearch: r } = e, n = e.fetchAll != !1, [o, a] = Z(e.endPointOptions), [d, c] = Z(null), f = ((Q = e.defaultParams) == null ? void 0 : Q.filter) || {}, m = ((ne = e.defaultParams) == null ? void 0 : ne.sort) || {}, [h, y] = e.filterTopic ? $r(e.filterTopic, f) : Z(f), [P, T] = Z({}), I = le(e.initialFetch == !1), R = e.pageSize ? e.pageSize : 15;
  var $ = R instanceof Array ? R : [R], j = R instanceof Array ? R[0] : R;
  const [b, v] = Z({ limit: j, offset: 0 }), [S, s] = Z(null), _ = () => Math.round(b.offset / b.limit), E = () => b.limit, z = (l) => {
    v({ ...b, offset: l * j });
  }, L = (l) => {
    const g = l > 10 || l == -1 ? l : 15;
    v({ ...b, limit: g });
  }, V = () => h ? Object.keys(h).length == 0 : !1, B = (l) => {
    s((g) => (setTimeout(() => {
      e.onDataChange && e.onDataChange(S, g);
    }, 300), l));
  };
  ye(() => {
    if (I.current) {
      I.current = !1;
      return;
    }
    (n || !V()) && ee();
  }, [b, h, P]);
  const ee = () => {
    const g = {
      sortOrder: P && Object.keys(P).length > 0 ? P : m,
      total: !0,
      endPointVars: o,
      ...b,
      filter: { ...h, ...f }
    };
    if (t)
      try {
        t.query(g).then((w) => {
          B(w.result), c(w.total);
        }).catch((w) => {
          var M = w.response ? w.response : w;
          console.error("error while fetching", M), A();
        });
      } catch (w) {
        console.error(w), O();
      }
    else
      console.error("Store is not provided for the Grid"), O();
  }, O = () => {
    B([]), c(0);
  }, A = () => {
    B(void 0), c(null);
  };
  return {
    setQueryFilter: (l) => {
      typeof l == "function" || l && Object.keys(l).length > 0 ? y(l) : y({});
    },
    setQuickSearch: (l) => {
      const g = r;
      y(l ? (w) => (w[g] = l, { ...w }) : (w) => (delete w[g], { ...w }));
    },
    setSortColumns: (l) => {
      T(l);
    },
    setEndPointOptions: a,
    refreshData: ee,
    gotoPage: z,
    setPageSize: L,
    getPageNo: _,
    getLimit: E,
    filter: h,
    queryLimit: b,
    data: S,
    totalRecords: d,
    pageSizeOptions: $
  };
};
function it(e) {
  return e ? Array.isArray(e) ? e : typeof e == "string" ? e.split(",") : (console.log(e), [e]) : [];
}
const aa = ue(function(t, r) {
  const n = De(_e), o = r || le(null), a = n(t, "checkbox", o), { mutateOptions: d, setMutateOptions: c } = a, [f, m] = Z(!1), h = it(a.data), y = a.error, P = a.eventListeners, I = { store: a.store, pageSize: -1 }, { data: R } = Ne(I), $ = R, j = le(null), b = t.lookupOptions || {}, v = b.idAttribute || "id", S = b.titleAttribute || "name", s = t.showSelectedOnly && t.readonly, _ = Ee(v) ? (O) => Re(v, O) : (O) => O[v], E = Ee(S) ? (O) => Re(S, O) : (O) => O[S];
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
    setValue(O, A = !1) {
      a.setData(O, A);
    },
    setVisible(O) {
      c((A) => ({ ...A, visible: O }));
    },
    setRequired(O) {
      c((A) => ({ ...A, required: O }));
    },
    setReadOnly(O) {
      c((A) => ({ ...A, readonly: O }));
    },
    setAttribute(O) {
      c((A) => ({ ...A, ...O }));
    },
    setOptions(O) {
    },
    getOptions() {
    }
  }), [a]);
  var z = Rt(t, a.data, t.label);
  t.readonly && (z.inputProps = { readOnly: !0 });
  function L(O, A) {
    const G = it(a.data);
    var X = G.indexOf(O);
    A ? X < 0 && G.push(O) : X >= 0 && G.splice(X, 1), P.onValueChange(G.toString());
  }
  var V = {
    onBlur: P.onBlur,
    onFocus: P.onFocus,
    onChange: (O) => {
      L(O.target.value, O.target.checked);
    }
  };
  const B = (O) => {
    const A = O.toString();
    return h.includes(A);
  }, ee = (O) => {
    const A = O.target.checked;
    m(A);
    var G = [];
    A && $.map((X) => {
      G.push(_(X));
    }), P.onValueChange(G.toString());
  };
  return /* @__PURE__ */ i("div", { className: t.className, children: d.visible && /* @__PURE__ */ K(
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
            control: /* @__PURE__ */ i(tt, { onChange: ee }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ K(
          Ot,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: y.status,
            ...z,
            children: [
              $ ? $.filter((O) => s ? B(_(O)) : !0).map((O) => /* @__PURE__ */ i(
                et,
                {
                  value: _(O),
                  control: /* @__PURE__ */ i(
                    tt,
                    {
                      ...V,
                      checked: B(_(O)),
                      disabled: t.readonly
                    }
                  ),
                  label: E(O)
                },
                _(O)
              )) : /* @__PURE__ */ i("div", { children: "No options provided" }),
              /* @__PURE__ */ i(Tt, { className: "form-error-text", children: y.message })
            ]
          }
        )
      ]
    }
  ) });
}), Yr = ue(function(t, r) {
  const n = De(_e), o = r || le(null), a = le(null), d = le(0), [c, f] = Z([]), [m, h] = Z(""), [y, P] = Z(!1), T = n(t, "serverlookup", o), I = t.store || T.store, R = t.lookupOptions || {}, $ = R.idAttribute || "id", j = R.titleAttribute || "name", b = R.searchAttribute || j, v = {
    store: I,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: b,
    initialFetch: !1
  }, S = Ne(v), s = T.eventListeners, _ = T.error, { mutateOptions: E, setMutateOptions: z } = T, L = T.data, V = y && c.length < (L ? 2 : 1), { setQueryFilter: B, setEndPointOptions: ee, setQuickSearch: O, totalRecords: A, refreshData: G } = S, X = S.data, H = Ee($) ? (u) => Re($, u) : (u) => u == null ? void 0 : u[$], Q = Ee(j) ? (u) => Re(j, u) : (u) => u == null ? void 0 : u[j];
  ye(() => {
    var u = L != "" ? L : void 0;
    u && f([u]);
  }, [T.data]), ye(() => {
    const u = X ? [...X] : [], C = L != "" ? L : void 0, D = H(C), Y = Q(C);
    u && D && Y && !M(u, D) && u.unshift(C), f(u), d.current < A && (d.current = A);
  }, [X, A]), ye(() => {
    yr(ne);
  }, [m, y]);
  function ne() {
    y && (m.length > 0 && m != Q(L) ? O("*" + m + "*") : X ? O(null) : G());
  }
  var l = {
    onBlur: s.onBlur,
    onFocus: s.onFocus,
    onChange: (u, C) => {
      g(C);
    },
    onInputChange: (u, C) => (h(C), !0)
  };
  const g = (u) => {
    s.onValueChange(u);
  }, w = (u) => typeof u == "object" ? Q(u) + "" : (console.log(u), "");
  function M(u, C) {
    return u.find((D) => {
      if (H(D) == C)
        return D;
    });
  }
  ve(o, () => ({
    focus() {
      a.current.focus();
    },
    isValid() {
      return !_.status;
    },
    clear() {
      t.multiple ? T.setData([], !0) : T.setData(void 0, !0);
    },
    getValue() {
      return T.getData();
    },
    setValue(u, C = !1) {
      T.setData(u, C);
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
      B((D) => (D[u] = C, { ...D }));
    },
    setDefaultFilter(u) {
    }
  }), [T]);
  var x = Rt(t, L, t.label);
  E.readonly && (x.inputProps = { readOnly: !0 });
  const N = (u, C) => u instanceof Array ? u.some((D) => H(D) == H(C)) : H(u) == H(C);
  return /* @__PURE__ */ i(
    Ct,
    {
      label: _t(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ K(Ot, { fullWidth: !0, error: _.status, children: [
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
              Ge,
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
                  endAdornment: /* @__PURE__ */ K(Me, { children: [
                    V ? /* @__PURE__ */ i(dr, { color: "inherit", size: 18 }) : null,
                    u.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: w,
            ...x,
            options: c,
            open: y,
            onClose: () => {
              P(!1);
            },
            onOpen: (u) => {
              P(!0);
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
  return /* @__PURE__ */ K("div", { children: [
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
  const { formLayout: n, context: o } = t, { formData: a } = o, d = n.Container;
  le({});
  const c = wt(() => (y) => At(y), [a.data]);
  var f = ((h = n.options) == null ? void 0 : h.columns) || 1, m = { columns: f };
  return d ? /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((y, P) => /* @__PURE__ */ i(
    d,
    {
      index: P,
      field: y,
      label: y.title,
      options: m,
      children: c(y)
    },
    y.attribute + y.name + y.type
  )) }) : /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((y, P) => c(y)) });
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
var It = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, st = me.createContext && me.createContext(It), ge = globalThis && globalThis.__assign || function() {
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
    return me.createElement(t.tag, ge({
      key: r
    }, t.attr), Lt(t.child));
  });
}
function Vr(e) {
  return function(t) {
    return me.createElement(Xr, ge({
      attr: ge({}, e.attr)
    }, t), Lt(e.child));
  };
}
function Xr(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, a = e.title, d = zr(e, ["attr", "size", "title"]), c = o || r.size || "1em", f;
    return r.className && (f = r.className), e.className && (f = (f ? f + " " : "") + e.className), me.createElement("svg", ge({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, d, {
      className: f,
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
  }) : t(It);
}
function $t(e) {
  return Vr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
}
var Fe = { exports: {} }, Yt = {}, Be = { exports: {} }, Te = { exports: {} }, q = {};
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
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, P = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, R = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function v(s) {
    if (typeof s == "object" && s !== null) {
      var _ = s.$$typeof;
      switch (_) {
        case t:
          switch (s = s.type, s) {
            case f:
            case m:
            case n:
            case a:
            case o:
            case y:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case c:
                case h:
                case I:
                case T:
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
    return v(s) === m;
  }
  return q.AsyncMode = f, q.ConcurrentMode = m, q.ContextConsumer = c, q.ContextProvider = d, q.Element = t, q.ForwardRef = h, q.Fragment = n, q.Lazy = I, q.Memo = T, q.Portal = r, q.Profiler = a, q.StrictMode = o, q.Suspense = y, q.isAsyncMode = function(s) {
    return S(s) || v(s) === f;
  }, q.isConcurrentMode = S, q.isContextConsumer = function(s) {
    return v(s) === c;
  }, q.isContextProvider = function(s) {
    return v(s) === d;
  }, q.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === t;
  }, q.isForwardRef = function(s) {
    return v(s) === h;
  }, q.isFragment = function(s) {
    return v(s) === n;
  }, q.isLazy = function(s) {
    return v(s) === I;
  }, q.isMemo = function(s) {
    return v(s) === T;
  }, q.isPortal = function(s) {
    return v(s) === r;
  }, q.isProfiler = function(s) {
    return v(s) === a;
  }, q.isStrictMode = function(s) {
    return v(s) === o;
  }, q.isSuspense = function(s) {
    return v(s) === y;
  }, q.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === m || s === a || s === o || s === y || s === P || typeof s == "object" && s !== null && (s.$$typeof === I || s.$$typeof === T || s.$$typeof === d || s.$$typeof === c || s.$$typeof === h || s.$$typeof === $ || s.$$typeof === j || s.$$typeof === b || s.$$typeof === R);
  }, q.typeOf = v, q;
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
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, P = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, R = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function v(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === n || p === m || p === a || p === o || p === y || p === P || typeof p == "object" && p !== null && (p.$$typeof === I || p.$$typeof === T || p.$$typeof === d || p.$$typeof === c || p.$$typeof === h || p.$$typeof === $ || p.$$typeof === j || p.$$typeof === b || p.$$typeof === R);
    }
    function S(p) {
      if (typeof p == "object" && p !== null) {
        var oe = p.$$typeof;
        switch (oe) {
          case t:
            var we = p.type;
            switch (we) {
              case f:
              case m:
              case n:
              case a:
              case o:
              case y:
                return we;
              default:
                var Ze = we && we.$$typeof;
                switch (Ze) {
                  case c:
                  case h:
                  case I:
                  case T:
                  case d:
                    return Ze;
                  default:
                    return oe;
                }
            }
          case r:
            return oe;
        }
      }
    }
    var s = f, _ = m, E = c, z = d, L = t, V = h, B = n, ee = I, O = T, A = r, G = a, X = o, H = y, Q = !1;
    function ne(p) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), l(p) || S(p) === f;
    }
    function l(p) {
      return S(p) === m;
    }
    function g(p) {
      return S(p) === c;
    }
    function w(p) {
      return S(p) === d;
    }
    function M(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function x(p) {
      return S(p) === h;
    }
    function N(p) {
      return S(p) === n;
    }
    function u(p) {
      return S(p) === I;
    }
    function C(p) {
      return S(p) === T;
    }
    function D(p) {
      return S(p) === r;
    }
    function Y(p) {
      return S(p) === a;
    }
    function F(p) {
      return S(p) === o;
    }
    function k(p) {
      return S(p) === y;
    }
    W.AsyncMode = s, W.ConcurrentMode = _, W.ContextConsumer = E, W.ContextProvider = z, W.Element = L, W.ForwardRef = V, W.Fragment = B, W.Lazy = ee, W.Memo = O, W.Portal = A, W.Profiler = G, W.StrictMode = X, W.Suspense = H, W.isAsyncMode = ne, W.isConcurrentMode = l, W.isContextConsumer = g, W.isContextProvider = w, W.isElement = M, W.isForwardRef = x, W.isFragment = N, W.isLazy = u, W.isMemo = C, W.isPortal = D, W.isProfiler = Y, W.isStrictMode = F, W.isSuspense = k, W.isValidElementType = v, W.typeOf = S;
  }()), W;
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
      for (var d = {}, c = 0; c < 10; c++)
        d["_" + String.fromCharCode(c)] = c;
      var f = Object.getOwnPropertyNames(d).map(function(h) {
        return d[h];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        m[h] = h;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Le = o() ? Object.assign : function(a, d) {
    for (var c, f = n(a), m, h = 1; h < arguments.length; h++) {
      c = Object(arguments[h]);
      for (var y in c)
        t.call(c, y) && (f[y] = c[y]);
      if (e) {
        m = e(c);
        for (var P = 0; P < m.length; P++)
          r.call(c, m[P]) && (f[m[P]] = c[m[P]]);
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
var Ye, mt;
function qt() {
  return mt || (mt = 1, Ye = Function.call.bind(Object.prototype.hasOwnProperty)), Ye;
}
var je, pt;
function Hr() {
  if (pt)
    return je;
  pt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = He(), r = {}, n = qt();
    e = function(a) {
      var d = "Warning: " + a;
      typeof console < "u" && console.error(d);
      try {
        throw new Error(d);
      } catch {
      }
    };
  }
  function o(a, d, c, f, m) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in a)
        if (n(a, h)) {
          var y;
          try {
            if (typeof a[h] != "function") {
              var P = Error(
                (f || "React class") + ": " + c + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw P.name = "Invariant Violation", P;
            }
            y = a[h](d, h, f, c, null, t);
          } catch (I) {
            y = I;
          }
          if (y && !(y instanceof Error) && e(
            (f || "React class") + ": type specification of " + c + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in r)) {
            r[y.message] = !0;
            var T = m ? m() : "";
            e(
              "Failed " + c + " type: " + y.message + (T ?? "")
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
function Kr() {
  if (ht)
    return qe;
  ht = 1;
  var e = jt(), t = Gr(), r = He(), n = qt(), o = Hr(), a = function() {
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
  return qe = function(c, f) {
    var m = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function y(l) {
      var g = l && (m && l[m] || l[h]);
      if (typeof g == "function")
        return g;
    }
    var P = "<<anonymous>>", T = {
      array: j("array"),
      bigint: j("bigint"),
      bool: j("boolean"),
      func: j("function"),
      number: j("number"),
      object: j("object"),
      string: j("string"),
      symbol: j("symbol"),
      any: b(),
      arrayOf: v,
      element: S(),
      elementType: s(),
      instanceOf: _,
      node: V(),
      objectOf: z,
      oneOf: E,
      oneOfType: L,
      shape: ee,
      exact: O
    };
    function I(l, g) {
      return l === g ? l !== 0 || 1 / l === 1 / g : l !== l && g !== g;
    }
    function R(l, g) {
      this.message = l, this.data = g && typeof g == "object" ? g : {}, this.stack = "";
    }
    R.prototype = Error.prototype;
    function $(l) {
      if (process.env.NODE_ENV !== "production")
        var g = {}, w = 0;
      function M(N, u, C, D, Y, F, k) {
        if (D = D || P, F = F || C, k !== r) {
          if (f) {
            var p = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw p.name = "Invariant Violation", p;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var oe = D + ":" + C;
            !g[oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            w < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + D + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), g[oe] = !0, w++);
          }
        }
        return u[C] == null ? N ? u[C] === null ? new R("The " + Y + " `" + F + "` is marked as required " + ("in `" + D + "`, but its value is `null`.")) : new R("The " + Y + " `" + F + "` is marked as required in " + ("`" + D + "`, but its value is `undefined`.")) : null : l(u, C, D, Y, F);
      }
      var x = M.bind(null, !1);
      return x.isRequired = M.bind(null, !0), x;
    }
    function j(l) {
      function g(w, M, x, N, u, C) {
        var D = w[M], Y = X(D);
        if (Y !== l) {
          var F = H(D);
          return new R(
            "Invalid " + N + " `" + u + "` of type " + ("`" + F + "` supplied to `" + x + "`, expected ") + ("`" + l + "`."),
            { expectedType: l }
          );
        }
        return null;
      }
      return $(g);
    }
    function b() {
      return $(d);
    }
    function v(l) {
      function g(w, M, x, N, u) {
        if (typeof l != "function")
          return new R("Property `" + u + "` of component `" + x + "` has invalid PropType notation inside arrayOf.");
        var C = w[M];
        if (!Array.isArray(C)) {
          var D = X(C);
          return new R("Invalid " + N + " `" + u + "` of type " + ("`" + D + "` supplied to `" + x + "`, expected an array."));
        }
        for (var Y = 0; Y < C.length; Y++) {
          var F = l(C, Y, x, N, u + "[" + Y + "]", r);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return $(g);
    }
    function S() {
      function l(g, w, M, x, N) {
        var u = g[w];
        if (!c(u)) {
          var C = X(u);
          return new R("Invalid " + x + " `" + N + "` of type " + ("`" + C + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return $(l);
    }
    function s() {
      function l(g, w, M, x, N) {
        var u = g[w];
        if (!e.isValidElementType(u)) {
          var C = X(u);
          return new R("Invalid " + x + " `" + N + "` of type " + ("`" + C + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return $(l);
    }
    function _(l) {
      function g(w, M, x, N, u) {
        if (!(w[M] instanceof l)) {
          var C = l.name || P, D = ne(w[M]);
          return new R("Invalid " + N + " `" + u + "` of type " + ("`" + D + "` supplied to `" + x + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return $(g);
    }
    function E(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), d;
      function g(w, M, x, N, u) {
        for (var C = w[M], D = 0; D < l.length; D++)
          if (I(C, l[D]))
            return null;
        var Y = JSON.stringify(l, function(k, p) {
          var oe = H(p);
          return oe === "symbol" ? String(p) : p;
        });
        return new R("Invalid " + N + " `" + u + "` of value `" + String(C) + "` " + ("supplied to `" + x + "`, expected one of " + Y + "."));
      }
      return $(g);
    }
    function z(l) {
      function g(w, M, x, N, u) {
        if (typeof l != "function")
          return new R("Property `" + u + "` of component `" + x + "` has invalid PropType notation inside objectOf.");
        var C = w[M], D = X(C);
        if (D !== "object")
          return new R("Invalid " + N + " `" + u + "` of type " + ("`" + D + "` supplied to `" + x + "`, expected an object."));
        for (var Y in C)
          if (n(C, Y)) {
            var F = l(C, Y, x, N, u + "." + Y, r);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return $(g);
    }
    function L(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), d;
      for (var g = 0; g < l.length; g++) {
        var w = l[g];
        if (typeof w != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Q(w) + " at index " + g + "."
          ), d;
      }
      function M(x, N, u, C, D) {
        for (var Y = [], F = 0; F < l.length; F++) {
          var k = l[F], p = k(x, N, u, C, D, r);
          if (p == null)
            return null;
          p.data && n(p.data, "expectedType") && Y.push(p.data.expectedType);
        }
        var oe = Y.length > 0 ? ", expected one of type [" + Y.join(", ") + "]" : "";
        return new R("Invalid " + C + " `" + D + "` supplied to " + ("`" + u + "`" + oe + "."));
      }
      return $(M);
    }
    function V() {
      function l(g, w, M, x, N) {
        return A(g[w]) ? null : new R("Invalid " + x + " `" + N + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return $(l);
    }
    function B(l, g, w, M, x) {
      return new R(
        (l || "React class") + ": " + g + " type `" + w + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + x + "`."
      );
    }
    function ee(l) {
      function g(w, M, x, N, u) {
        var C = w[M], D = X(C);
        if (D !== "object")
          return new R("Invalid " + N + " `" + u + "` of type `" + D + "` " + ("supplied to `" + x + "`, expected `object`."));
        for (var Y in l) {
          var F = l[Y];
          if (typeof F != "function")
            return B(x, N, u, Y, H(F));
          var k = F(C, Y, x, N, u + "." + Y, r);
          if (k)
            return k;
        }
        return null;
      }
      return $(g);
    }
    function O(l) {
      function g(w, M, x, N, u) {
        var C = w[M], D = X(C);
        if (D !== "object")
          return new R("Invalid " + N + " `" + u + "` of type `" + D + "` " + ("supplied to `" + x + "`, expected `object`."));
        var Y = t({}, w[M], l);
        for (var F in Y) {
          var k = l[F];
          if (n(l, F) && typeof k != "function")
            return B(x, N, u, F, H(k));
          if (!k)
            return new R(
              "Invalid " + N + " `" + u + "` key `" + F + "` supplied to `" + x + "`.\nBad object: " + JSON.stringify(w[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(l), null, "  ")
            );
          var p = k(C, F, x, N, u + "." + F, r);
          if (p)
            return p;
        }
        return null;
      }
      return $(g);
    }
    function A(l) {
      switch (typeof l) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !l;
        case "object":
          if (Array.isArray(l))
            return l.every(A);
          if (l === null || c(l))
            return !0;
          var g = y(l);
          if (g) {
            var w = g.call(l), M;
            if (g !== l.entries) {
              for (; !(M = w.next()).done; )
                if (!A(M.value))
                  return !1;
            } else
              for (; !(M = w.next()).done; ) {
                var x = M.value;
                if (x && !A(x[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function G(l, g) {
      return l === "symbol" ? !0 : g ? g["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && g instanceof Symbol : !1;
    }
    function X(l) {
      var g = typeof l;
      return Array.isArray(l) ? "array" : l instanceof RegExp ? "object" : G(g, l) ? "symbol" : g;
    }
    function H(l) {
      if (typeof l > "u" || l === null)
        return "" + l;
      var g = X(l);
      if (g === "object") {
        if (l instanceof Date)
          return "date";
        if (l instanceof RegExp)
          return "regexp";
      }
      return g;
    }
    function Q(l) {
      var g = H(l);
      switch (g) {
        case "array":
        case "object":
          return "an " + g;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + g;
        default:
          return g;
      }
    }
    function ne(l) {
      return !l.constructor || !l.constructor.name ? P : l.constructor.name;
    }
    return T.checkPropTypes = o, T.resetWarningCache = o.resetWarningCache, T.PropTypes = T, T;
  }, qe;
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
    function n(d, c, f, m, h, y) {
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
  var Jr = jt(), Zr = !0;
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
var U = {}, de = {};
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
U.removeUserSelectStyles = On;
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
      var d = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      d && (d.get || d.set) ? Object.defineProperty(n, a, d) : n[a] = e[a];
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
fe.getBoundPosition = Tn;
fe.getControlPosition = Rn;
fe.snapToGrid = xn;
var ie = de, Ce = U;
function Tn(e, t, r) {
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
    } = o, d = a.defaultView;
    let c;
    if (n === "parent" ? c = o.parentNode : c = a.querySelector(n), !(c instanceof d.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const f = c, m = d.getComputedStyle(o), h = d.getComputedStyle(f);
    n = {
      left: -o.offsetLeft + (0, ie.int)(h.paddingLeft) + (0, ie.int)(m.marginLeft),
      top: -o.offsetTop + (0, ie.int)(h.paddingTop) + (0, ie.int)(m.marginTop),
      right: (0, Ce.innerWidth)(f) - (0, Ce.outerWidth)(o) - o.offsetLeft + (0, ie.int)(h.paddingRight) - (0, ie.int)(m.marginRight),
      bottom: (0, Ce.innerHeight)(f) - (0, Ce.outerHeight)(o) - o.offsetTop + (0, ie.int)(h.paddingBottom) - (0, ie.int)(m.marginBottom)
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
  const o = Qe(r), a = r.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, Ce.offsetXYFromParent)(n || e, a, r.props.scale);
}
function _n(e, t, r) {
  const n = !(0, ie.isNum)(e.lastX), o = Qe(e);
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
var Ve = kn(me), re = Je(Wt), An = Je(Nt), J = U, pe = fe, Xe = de, Pe = Je(ke);
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
      var d = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      d && (d.get || d.set) ? Object.defineProperty(n, a, d) : n[a] = e[a];
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
let he = ce.mouse, Ie = class extends Ve.Component {
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
      if (this.props.disabled || !(t.target instanceof n.defaultView.Node) || this.props.handle && !(0, J.matchesSelectorAndParentsTo)(t.target, this.props.handle, r) || this.props.cancel && (0, J.matchesSelectorAndParentsTo)(t.target, this.props.cancel, r))
        return;
      t.type === "touchstart" && t.preventDefault();
      const o = (0, J.getTouchIdentifier)(t);
      this.touchIdentifier = o;
      const a = (0, pe.getControlPosition)(t, o, this);
      if (a == null)
        return;
      const {
        x: d,
        y: c
      } = a, f = (0, pe.createCoreData)(this, d, c);
      (0, Pe.default)("DraggableCore: handleDragStart: %j", f), (0, Pe.default)("calling", this.props.onStart), !(this.props.onStart(t, f) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, J.addUserSelectStyles)(n), this.dragging = !0, this.lastX = d, this.lastY = c, (0, J.addEvent)(n, he.move, this.handleDrag), (0, J.addEvent)(n, he.stop, this.handleDragStop));
    }), te(this, "handleDrag", (t) => {
      const r = (0, pe.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let c = n - this.lastX, f = o - this.lastY;
        if ([c, f] = (0, pe.snapToGrid)(this.props.grid, c, f), !c && !f)
          return;
        n = this.lastX + c, o = this.lastY + f;
      }
      const a = (0, pe.createCoreData)(this, n, o);
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
      const r = (0, pe.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let f = n - this.lastX || 0, m = o - this.lastY || 0;
        [f, m] = (0, pe.snapToGrid)(this.props.grid, f, m), n = this.lastX + f, o = this.lastY + m;
      }
      const a = (0, pe.createCoreData)(this, n, o);
      if (this.props.onStop(t, a) === !1 || this.mounted === !1)
        return !1;
      const c = this.findDOMNode();
      c && this.props.enableUserSelectHack && (0, J.removeUserSelectStyles)(c.ownerDocument), (0, Pe.default)("DraggableCore: handleDragStop: %j", a), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, c && ((0, Pe.default)("DraggableCore: Removing handlers"), (0, J.removeEvent)(c.ownerDocument, he.move, this.handleDrag), (0, J.removeEvent)(c.ownerDocument, he.stop, this.handleDragStop));
    }), te(this, "onMouseDown", (t) => (he = ce.mouse, this.handleDragStart(t))), te(this, "onMouseUp", (t) => (he = ce.mouse, this.handleDragStop(t))), te(this, "onTouchStart", (t) => (he = ce.touch, this.handleDragStart(t))), te(this, "onTouchEnd", (t) => (he = ce.touch, this.handleDragStop(t)));
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
  var t = P(me), r = h(Wt), n = h(Nt), o = h(tn), a = U, d = fe, c = de, f = h(Ae), m = h(ke);
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
  function P(b, v) {
    if (!v && b && b.__esModule)
      return b;
    if (b === null || typeof b != "object" && typeof b != "function")
      return { default: b };
    var S = y(v);
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
  function T() {
    return T = Object.assign ? Object.assign.bind() : function(b) {
      for (var v = 1; v < arguments.length; v++) {
        var S = arguments[v];
        for (var s in S)
          Object.prototype.hasOwnProperty.call(S, s) && (b[s] = S[s]);
      }
      return b;
    }, T.apply(this, arguments);
  }
  function I(b, v, S) {
    return v = R(v), v in b ? Object.defineProperty(b, v, { value: S, enumerable: !0, configurable: !0, writable: !0 }) : b[v] = S, b;
  }
  function R(b) {
    var v = $(b, "string");
    return typeof v == "symbol" ? v : String(v);
  }
  function $(b, v) {
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
  class j extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(v, S) {
      let {
        position: s
      } = v, {
        prevPropsPosition: _
      } = S;
      return s && (!_ || s.x !== _.x || s.y !== _.y) ? ((0, m.default)("Draggable: getDerivedStateFromProps %j", {
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
      super(v), I(this, "onDragStart", (S, s) => {
        if ((0, m.default)("Draggable: onDragStart: %j", s), this.props.onStart(S, (0, d.createDraggableData)(this, s)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), I(this, "onDrag", (S, s) => {
        if (!this.state.dragging)
          return !1;
        (0, m.default)("Draggable: onDrag: %j", s);
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
      }), I(this, "onDragStop", (S, s) => {
        if (!this.state.dragging || this.props.onStop(S, (0, d.createDraggableData)(this, s)) === !1)
          return !1;
        (0, m.default)("Draggable: onDragStop: %j", s);
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
        defaultClassName: E,
        defaultClassNameDragging: z,
        defaultClassNameDragged: L,
        position: V,
        positionOffset: B,
        scale: ee,
        ...O
      } = this.props;
      let A = {}, G = null;
      const H = !!!V || this.state.dragging, Q = V || _, ne = {
        // Set left if horizontal drag is enabled
        x: (0, d.canDragX)(this) && H ? this.state.x : Q.x,
        // Set top if vertical drag is enabled
        y: (0, d.canDragY)(this) && H ? this.state.y : Q.y
      };
      this.state.isElementSVG ? G = (0, a.createSVGTransform)(ne, B) : A = (0, a.createCSSTransform)(ne, B);
      const l = (0, o.default)(s.props.className || "", E, {
        [z]: this.state.dragging,
        [L]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(f.default, T({}, O, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(s), {
        className: l,
        style: {
          ...s.props.style,
          ...A
        },
        transform: G
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
    className: c.dontSetMe,
    style: c.dontSetMe,
    transform: c.dontSetMe
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
  const { formLayout: n, context: o } = t, { formData: a } = o, d = le({}), c = qn(t), f = "palmyra-form-field-data", m = wt(() => (h) => At(h, d, h.label), [a.data]);
  return /* @__PURE__ */ i("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: n.fields.map((h, y) => /* @__PURE__ */ i("div", { className: c, children: /* @__PURE__ */ i("div", { className: f, children: m(h) }) }, h.attribute)) });
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
    var P = d();
    n && n(P);
  }, m = () => {
    r();
  }, h = (P) => {
    P.keyCode === 27 && m();
  }, y = _r(e);
  return /* @__PURE__ */ i("div", { className: "grid-filter-container", children: /* @__PURE__ */ i(
    fr,
    {
      open: t,
      onClose: m,
      PaperComponent: zn,
      onKeyDown: h,
      PaperProps: { sx: { minWidth: "500px" } },
      children: /* @__PURE__ */ i(xt, { onClickAway: r, children: /* @__PURE__ */ K("div", { children: [
        /* @__PURE__ */ K("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ i("div", { className: "grid-header-text-container", children: /* @__PURE__ */ i("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ i("div", { className: "grid-header-icon-container", onClick: m, children: /* @__PURE__ */ i(Tr, { className: "filter-cancel-icon" }) })
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
        /* @__PURE__ */ K("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ i(Se, { className: "filter-reset-btn", disableRipple: !0, onClick: c, children: "Reset" }),
          /* @__PURE__ */ i(Se, { className: "filter-button", disableRipple: !0, onClick: f, children: "Filter" })
        ] })
      ] }) })
    }
  ) });
}, Xn = ue(function(t, r) {
  var F;
  const { columns: n, children: o, EmptyChild: a, onRowClick: d, quickSearch: c } = t, f = a || wr, m = t.customizer || Rr, [h, y] = Z(!1), [P, T] = Z("standard"), [I, R] = Z(!1), [$, j] = Z(""), {
    setQueryFilter: b,
    setQuickSearch: v,
    setSortColumns: S,
    setEndPointOptions: s,
    gotoPage: _,
    setPageSize: E,
    getPageNo: z,
    refreshData: L,
    data: V,
    totalRecords: B,
    pageSizeOptions: ee,
    filter: O,
    queryLimit: A
  } = Ne(t), G = r || le(null);
  ve(G, () => ({
    setFilter: (k) => {
      b(k);
    },
    refresh: () => {
      L();
    },
    resetFilter() {
      b({});
    },
    setEndPointOptions: (k) => {
      s(k);
    },
    addFilter: (k, p) => {
      b((oe) => (oe[k] = p, { ...oe }));
    }
  }), []);
  const X = (k, p) => {
    _(p);
  }, H = Pr(n, m), Q = (k) => {
    T(k);
  }, ne = () => {
    y(!h);
  }, l = () => P === "compact" ? { padding: "3px" } : P === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, g = () => P === "compact" ? { padding: "3px" } : P === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, w = () => {
    var k;
    switch (P) {
      case "compact":
        k = /* @__PURE__ */ i(nt, { className: "density-icon" });
        break;
      case "comfortable":
        k = /* @__PURE__ */ i(ot, { className: "density-icon" });
        break;
      default:
        k = /* @__PURE__ */ i(rt, { className: "grid-button-icon" });
        break;
    }
    return k;
  }, M = (k) => {
    const p = k.target.value;
    j(p), p ? v(p) : b({});
  }, x = (k) => {
    d && d(k);
  }, N = (k) => {
    const p = parseInt(k.target.value, 10);
    E(p);
  }, u = () => {
    console.info("Export Clicked");
  }, C = 200, D = !!t.pageSize;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ K("div", { children: [
    o,
    /* @__PURE__ */ K("div", { className: "grid-header", children: [
      /* @__PURE__ */ i("div", { className: "grid-header-filter", children: !!c && /* @__PURE__ */ i(
        Ge,
        {
          sx: { width: C },
          type: "text",
          value: $,
          onChange: M,
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
      }, children: /* @__PURE__ */ K("div", { className: "grid-header-button grid-density-btn", onClick: ne, children: [
        /* @__PURE__ */ i(Oe, { title: "Density", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: w() }) }),
        h && /* @__PURE__ */ i("div", { className: "density-dropdown-content", children: /* @__PURE__ */ K("ul", { children: [
          /* @__PURE__ */ K("li", { onClick: () => Q("standard"), children: [
            /* @__PURE__ */ i(rt, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ K("li", { onClick: () => Q("compact"), children: [
            /* @__PURE__ */ i(nt, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ K("li", { onClick: () => Q("comfortable"), children: [
            /* @__PURE__ */ i(ot, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      (F = n[0]) != null && F.searchable ? /* @__PURE__ */ K("div", { className: "grid-header-button grid-filter-btn", children: [
        /* @__PURE__ */ i(Oe, { title: "Filter", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, onClick: () => R(!0), children: /* @__PURE__ */ i(xr, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ i(
          Vn,
          {
            columns: n,
            setFilter: b,
            defaultFilter: O,
            isOpen: I,
            onClose: () => R(!1)
          }
        )
      ] }) : "",
      /* @__PURE__ */ i("div", { className: "grid-header-button grid-export-btn", onClick: u, children: /* @__PURE__ */ i(Oe, { title: "Export", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Dr, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ i(Oe, { title: "New", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Er, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ i(Me, {})
    ] }),
    /* @__PURE__ */ i("div", { className: "grid-table", children: /* @__PURE__ */ i(
      Or,
      {
        columnDefs: H,
        EmptyChild: f,
        rowData: V,
        onRowClick: x,
        onRowStyle: l,
        onHeaderStyle: g,
        onSortColumn: S
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "grid-header", children: /* @__PURE__ */ i("div", { className: "grid-filter", children: D && /* @__PURE__ */ i(
      Et,
      {
        component: "div",
        count: B || 0,
        page: z(),
        onPageChange: X,
        rowsPerPage: A.limit,
        rowsPerPageOptions: ee || [],
        onRowsPerPageChange: N
      }
    ) }) })
  ] }) });
}), sa = ue(function(t, r) {
  const { columns: n, endPoint: o, storeFactory: a, layoutParams: d, pagination: c } = t, f = t.quickSearch || "", m = le(null), h = (P, T) => {
    console.log(T);
  };
  ye(() => {
    var P = at.subscribe(t.topic, h);
    return () => {
      at.unsubscribe(P);
    };
  }, [t.topic]), r && ve(r, () => ({
    setFilter: (P) => {
      m.current.setFilter(P);
    },
    refresh: () => {
      m.current.refresh();
    },
    resetFilter() {
      m.current.resetFilter();
    },
    setEndPointOptions: (P) => {
      m.current.setEndPointOptions(P);
    },
    addFilter: (P, T) => {
      m.current.addFilter(P, T);
    }
  }), [n, o]);
  const y = {
    fields: n,
    pagination: c,
    quickSearch: f,
    storeOptions: {
      endPoint: o
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ i(Me, { children: /* @__PURE__ */ i(Ue.Provider, { value: a, children: /* @__PURE__ */ i(
    Jt,
    {
      layout: y,
      context: d,
      defaultParams: t.defaultParams,
      customizer: t.customizer,
      ref: m
    }
  ) }) });
}), Bn = ue(function(t, r) {
  const n = t.layout, [o, a] = Z(n.fields), d = n.pagination ? n.pagination : [15], c = De(Ue), f = De(Pt);
  var m = n.storeOptions || {}, h = {};
  vr(h, m, f);
  const y = c.getGridStore(h, n.storeOptions.endPoint);
  ye(() => {
    m.hasLayout && y.queryLayout({}).then((I) => {
      a(I.columns);
    });
  }, []);
  const { onClick: P, onNewClick: T } = Ar(n.actionOptions, f);
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    Xn,
    {
      columns: o,
      store: y,
      pageSize: d,
      onRowClick: P,
      onNewClick: T,
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
      return /* @__PURE__ */ i(Ir, { ...e });
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
    const { w: f, h: m } = Hn(a.width, a.height);
    return /* @__PURE__ */ i(pr, { sx: { width: f, height: m }, children: /* @__PURE__ */ i(
      Gn,
      {
        layout: a,
        context: d
      }
    ) }, (a.name || "tab") + c);
  }
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap" }, children: n.map((a, d) => o(a, r, d)) });
}, bt = ue(function(t, r) {
  const { layout: n } = t;
  ve(r, () => ({
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
}, St = ue(function(t, r) {
  var h;
  const n = t.data || {}, { layout: o } = t;
  var { getFieldManager: a, getFormData: d, isFormValid: c } = Lr(n, (h = t.callbacks) == null ? void 0 : h.onFormValidChange, Kn(t.mode));
  ve(r, () => ({
    getData() {
      return d();
    },
    isValid() {
      return c();
    }
  }), []);
  const f = { formData: n }, m = o.tabs;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(_e.Provider, { value: a, children: m.map((y, P) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
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
}, la = ue(function(t, r) {
  const [n, o] = Z(t.layout), a = t.mode ? t.mode : n.type ? n.type : "grid", d = t.layoutParams || {}, c = Qn(a), f = le(0);
  return ye(() => {
    o(t.layout), f.current < 999999 ? f.current++ : f.current = 0;
  }, [t.layout]), /* @__PURE__ */ i(Ft, { fallback: /* @__PURE__ */ i("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ i(Ue.Provider, { value: t.storeFactory, children: /* @__PURE__ */ i(Pt.Provider, { value: d, children: /* @__PURE__ */ i(c, { ...t, ref: (m) => {
    r && (r.current = m);
  } }, f.current) }) }) });
}), ca = ue(function(t, r) {
  const { children: n, Child: o, childProps: a, pageSize: d } = t, c = r || le(null), {
    setQueryFilter: f,
    refreshData: m,
    setQuickSearch: h,
    gotoPage: y,
    setPageSize: P,
    getPageNo: T,
    data: I,
    totalRecords: R,
    pageSizeOptions: $,
    queryLimit: j
  } = Ne(t), b = t.listKeyProvider || ((L, V) => V);
  ve(c, () => ({
    setFilter(L) {
      f(L);
    },
    refresh: () => {
      m();
    },
    gotoPage(L) {
      y(L);
    },
    nextPage() {
    },
    prevPage() {
    }
  }), []);
  const v = (L, V) => {
    y(V);
  }, S = (L) => {
    const V = L.target.value;
    h(V);
  }, s = (L) => {
    const V = parseInt(L.target.value, 10);
    P(V);
  }, _ = 200, E = !!d, z = !!t.quickSearch;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ K("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ K("div", { children: [
      /* @__PURE__ */ K("div", { className: "card-header", children: [
        /* @__PURE__ */ i("div", { className: "card-filter", children: z && /* @__PURE__ */ i(
          Ge,
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
            page: T(),
            onPageChange: v,
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
          dataList: I,
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
