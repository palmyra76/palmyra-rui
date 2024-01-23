import "../assets/ServerCardLayout.css";
import Tt from "../palmyra/mui/form/MuiDatePicker.js";
import kt from "../palmyra/mui/form/MuiDateTimePicker.js";
import Et from "../palmyra/mui/form/MuiRadioGroup.js";
import qe from "../palmyra/mui/form/MuiSelect.js";
import Lt from "../palmyra/mui/form/MuiTextArea.js";
import _t from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import At from "../palmyra/mui/form/MuiCheckBox.js";
import Vt from "../palmyra/mui/form/MuiSwitch.js";
import Xt from "../palmyra/mui/form/MuiPassword.js";
import Bt from "../palmyra/mui/form/MuiNumberField.js";
import Ee from "../palmyra/mui/form/FieldDecorator.js";
import { FieldManagerContext as be, StoreFactoryContext as Le, LayoutParamsContext as tt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as o, jsxs as B, Fragment as Se } from "react/jsx-runtime";
import nt, { useState as I, useRef as K, useEffect as ae, forwardRef as ne, useContext as pe, useImperativeHandle as ue, useMemo as rt } from "react";
import { p as ot, a as at } from "./index.js";
import { FormControlLabel as ze, Checkbox as Qe, FormControl as _e, FormHelperText as Ae, Autocomplete as it, TextField as we, CircularProgress as st, Dialog as It, ClickAwayListener as lt, Button as fe, Paper as Wt, InputAdornment as ct, Tooltip as De, TablePagination as ut, Box as Yt } from "@mui/material";
import qt from "../palmyra/layout/card/CardLayout.js";
import zt from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Ve, getFieldLabel as Xe } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as ye } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as ve } from "../palmyra/form/FormUtil.js";
import { delay as dt, delayGenerator as Qt, mergeDeep as Gt } from "../palmyra/utils/index.js";
import Ut from "../palmyra/mui/form/MuiDateRangePicker.js";
import $t from "../palmyra/mui/form/MuiIntegerField.js";
import ft from "../palmyra/layout/container/SectionContainer.js";
import Ht from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as Kt } from "../palmyra/grid/base/ColumnConverter.js";
import jt from "../palmyra/grid/base/EmptyChildTable.js";
import Jt from "../palmyra/grid/base/TableX.js";
import { Close as Zt, Menu as Ge, DensitySmall as Ue, DensityLarge as $e, FilterAlt as en, FileDownloadOutlined as tn, Add as nn } from "@mui/icons-material";
import { NoopCustomizer as rn } from "../palmyra/grid/Types.js";
import { convertToField as on } from "../palmyra/grid/base/GridFieldConverter.js";
import { a as an, g as sn } from "./_commonjsHelpers.js";
import mt from "react-dom";
import { createFilterData as ln } from "../palmyra/form/PalmyraFilterManager.js";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import { topic as He } from "../palmyra/utils/pubsub/topic.js";
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
import { getActionPublishers as cn } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as ht } from "../palmyra/layout/ErrorBoundary.js";
import un from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import dn from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as fn } from "./PalmyraFieldManager.js";
import { useKeyValue as mn } from "../palmyra/utils/pubsub/PubSubHelper.js";
const Ce = (t) => {
  var j, J;
  const { store: e, quickSearch: n } = t, r = t.fetchAll != !1, [a, i] = I(t.endPointOptions), [s, c] = I(null), d = ((j = t.defaultParams) == null ? void 0 : j.filter) || {}, g = ((J = t.defaultParams) == null ? void 0 : J.sort) || {}, [b, v] = t.filterTopic ? mn(t.filterTopic, d) : I(d), [P, C] = I({}), L = K(t.initialFetch == !1), W = t.pageSize ? t.pageSize : 15;
  var _ = W instanceof Array ? W : [W], X = W instanceof Array ? W[0] : W;
  const [h, f] = I({ limit: X, offset: 0, total: !0 }), [y, p] = I(null), w = () => Math.round(h.offset / h.limit), S = () => h, O = (M) => {
    f((V) => ({ limit: V.limit, total: V.total, offset: M * X }));
  }, R = (M) => {
    const V = M > 10 || M == -1 ? M : 15;
    f((u) => ({ limit: V, total: u.total, offset: u.offset }));
  }, A = () => b ? Object.keys(b).length == 0 : !1, k = (M) => {
    p((V) => (setTimeout(() => {
      t.onDataChange && t.onDataChange(y, V);
    }, 300), M));
  };
  ae(() => {
    if (L.current) {
      L.current = !1;
      return;
    }
    (r || !A()) && Y();
  }, [h, b, P, a]);
  const Y = () => {
    const V = {
      sortOrder: P && Object.keys(P).length > 0 ? P : g,
      total: !0,
      endPointVars: a,
      ...h,
      filter: { ...b, ...d }
    };
    if (e)
      try {
        e.query(V).then((u) => {
          k(u.result), c(u.total);
        }).catch((u) => {
          var x = u.response ? u.response : u;
          console.error("error while fetching", x), D();
        });
      } catch (u) {
        console.error(u), l();
      }
    else
      console.error("Store is not provided for the Grid"), l();
  }, l = () => {
    k([]), c(0);
  }, D = () => {
    k(void 0), c(null);
  };
  return {
    setQueryFilter: (M) => {
      typeof M == "function" || M && Object.keys(M).length > 0 ? v(M) : v({});
    },
    setQuickSearch: (M) => {
      const V = n;
      v(M ? (u) => (u[V] = M, { ...u }) : (u) => (delete u[V], { ...u }));
    },
    setSortColumns: (M) => {
      C(M);
    },
    setEndPointOptions: i,
    refreshData: Y,
    gotoPage: O,
    setPageSize: R,
    getPageNo: w,
    getQueryLimit: S,
    setQueryLimit: f,
    filter: b,
    queryLimit: h,
    data: y,
    totalRecords: s,
    pageSizeOptions: _
  };
};
function Ke(t) {
  return t ? Array.isArray(t) ? t : typeof t == "string" ? t.split(",") : (console.log(t), [t]) : [];
}
const Oo = ne(function(e, n) {
  const r = pe(be), a = n || K(null), i = r(e, "checkbox", a), { mutateOptions: s, setMutateOptions: c } = i, [d, g] = I(!1), b = Ke(i.data), v = i.error, P = i.eventListeners, L = { store: i.store, pageSize: -1 }, { data: W } = Ce(L), _ = W, X = K(null), h = e.lookupOptions || {}, f = h.idAttribute || "id", y = h.displayAttribute || "name", p = e.showSelectedOnly && e.readonly, w = ye(f) ? (l) => ve(f, l) : (l) => l[f], S = ye(y) ? (l) => ve(y, l) : (l) => l[y];
  ue(a, () => ({
    focus() {
      X.current.focus();
    },
    isValid() {
      return !v.status;
    },
    clear() {
      i.setData("", !0);
    },
    getValue() {
      return i.getData();
    },
    setValue(l, D = !1) {
      i.setData(l, D);
    },
    setVisible(l) {
      c((D) => ({ ...D, visible: l }));
    },
    setRequired(l) {
      c((D) => ({ ...D, required: l }));
    },
    setReadOnly(l) {
      c((D) => ({ ...D, readonly: l }));
    },
    setAttribute(l) {
      c((D) => ({ ...D, ...l }));
    },
    setOptions(l) {
    },
    getOptions() {
    }
  }), [i]);
  var O = Ve(e, i.data, e.label);
  e.readonly && (O.inputprops = { readOnly: !0 });
  function R(l, D) {
    const T = Ke(i.data);
    var q = T.indexOf(l);
    D ? q < 0 && T.push(l) : q >= 0 && T.splice(q, 1), P.onValueChange(T.toString());
  }
  var A = {
    onBlur: P.onBlur,
    onFocus: P.onFocus,
    onChange: (l) => {
      R(l.target.value, l.target.checked);
    }
  };
  const k = (l) => {
    const D = l.toString();
    return b.includes(D);
  }, Y = (l) => {
    const D = l.target.checked;
    g(D);
    var T = [];
    D && _.map((q) => {
      T.push(w(q));
    }), P.onValueChange(T.toString());
  };
  return /* @__PURE__ */ o("div", { className: e.className, children: s.visible && /* @__PURE__ */ B(
    Ee,
    {
      label: Xe(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: [
        /* @__PURE__ */ o("div", { children: e.hideSelectAll ? /* @__PURE__ */ o(Se, {}) : /* @__PURE__ */ o(
          ze,
          {
            control: /* @__PURE__ */ o(Qe, { onChange: Y }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ B(
          _e,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: v.status,
            ...O,
            children: [
              _ ? _.filter((l) => p ? k(w(l)) : !0).map((l) => /* @__PURE__ */ o(
                ze,
                {
                  value: w(l),
                  control: /* @__PURE__ */ o(
                    Qe,
                    {
                      ...A,
                      checked: k(w(l)),
                      disabled: e.readonly
                    }
                  ),
                  label: S(l)
                },
                w(l)
              )) : /* @__PURE__ */ o("div", { children: "No options provided" }),
              /* @__PURE__ */ o(Ae, { className: "form-error-text", children: v.message })
            ]
          }
        )
      ]
    }
  ) });
}), hn = Qt(100), gn = ne(function(e, n) {
  const r = pe(be), a = n || K(null), i = K(null), s = K(0), [c, d] = I([]), [g, b] = I(""), [v, P] = I(!1), C = r(e, "serverlookup", a), L = e.store || C.store, W = e.lookupOptions || {}, _ = W.idAttribute || "id", X = W.displayAttribute || "name", h = X, f = {
    store: L,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: h,
    initialFetch: !1
  }, y = Ce(f), p = C.eventListeners, w = C.error, { mutateOptions: S, setMutateOptions: O } = C, R = C.data, A = v && c.length < (R ? 2 : 1), { setQueryFilter: k, setEndPointOptions: Y, setQuickSearch: l, totalRecords: D, refreshData: T } = y, q = y.data, U = ye(_) ? (m) => ve(_, m) : (m) => m == null ? void 0 : m[_], j = ye(X) ? (m) => ve(X, m) : (m) => m == null ? void 0 : m[X];
  ae(() => {
    var m = R != "" ? R : void 0;
    m && d([m]);
  }, [C.data]), ae(() => {
    const m = q ? [...q] : [], F = R != "" ? R : void 0, te = U(F), Me = j(F);
    m && te && Me && !x(m, te) && m.unshift(F), d(m), s.current < D && (s.current = D);
  }, [q, D]), ae(() => {
    dt(J);
  }, [g]), ae(() => {
    hn(J);
  }, [v]);
  function J() {
    v && (g.length > 0 && g != j(R) ? l("*" + g + "*") : q ? l(null) : T());
  }
  var M = {
    onBlur: p.onBlur,
    onFocus: p.onFocus,
    onChange: (m, F) => {
      V(F);
    },
    onInputChange: (m, F) => (b(F), !0)
  };
  const V = (m) => {
    p.onValueChange(m);
  }, u = (m) => typeof m == "object" ? j(m) + "" : (console.log(m), "");
  function x(m, F) {
    return m.find((te) => {
      if (U(te) == F)
        return te;
    });
  }
  ue(a, () => ({
    focus() {
      i.current.focus();
    },
    isValid() {
      return !w.status;
    },
    clear() {
      e.multiple ? C.setData([], !0) : C.setData(void 0, !0);
    },
    getValue() {
      return C.getData();
    },
    setValue(m, F = !1) {
      C.setData(m, F);
    },
    setVisible(m) {
      O((F) => ({ ...F, visible: m }));
    },
    setRequired(m) {
      O((F) => ({ ...F, required: m }));
    },
    setReadOnly(m) {
      O((F) => ({ ...F, readonly: m }));
    },
    setAttribute(m) {
      O((F) => ({ ...F, ...m }));
    },
    setFilter(m) {
      k(m);
    },
    resetFilter() {
      k({});
    },
    setEndPointOptions(m) {
      Y(m);
    },
    getCurrentData: () => R,
    refresh: () => {
      T();
    },
    addFilter(m, F) {
      k((te) => (te[m] = F, { ...te }));
    },
    setDefaultFilter(m) {
    },
    setSortOptions(m) {
    }
  }), [C, k]);
  var $ = Ve(e, R, e.label);
  S.readonly && ($.inputProps = { readOnly: !0 });
  const he = (m, F) => m instanceof Array ? m.some((te) => U(te) == U(F)) : U(m) == U(F);
  return /* @__PURE__ */ o(
    Ee,
    {
      label: Xe(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ B(_e, { fullWidth: !0, error: w.status, children: [
        /* @__PURE__ */ o(
          it,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: e.multiple,
            readOnly: e.readonly,
            renderOption: e.renderOption,
            isOptionEqualToValue: he,
            filterOptions: (m) => m,
            renderInput: (m) => /* @__PURE__ */ o(
              we,
              {
                ...m,
                inputRef: (F) => {
                  i.current = F;
                },
                variant: e.variant || "standard",
                label: e.label,
                autoFocus: e.autoFocus,
                required: e.required,
                InputProps: {
                  ...m.InputProps,
                  endAdornment: /* @__PURE__ */ B(Se, { children: [
                    A ? /* @__PURE__ */ o(st, { color: "inherit", size: 18 }) : null,
                    m.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: u,
            ...$,
            options: c,
            open: v,
            onClose: () => {
              P(!1);
            },
            onOpen: (m) => {
              P(!0);
            },
            ...M
          }
        ),
        /* @__PURE__ */ o(Ae, { className: "form-error-text", children: w.message })
      ] })
    }
  );
}), pn = ne(function(e, n) {
  const r = pe(be), a = n || K(null), i = K(null), s = K(0), [c, d] = I([]), [g, b] = I(""), [v, P] = I(!1), C = r(e, "autoComplete", a), L = e.store || C.store, _ = (e.lookupOptions || {}).attribute || "name", X = _, h = {
    store: L,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: X,
    initialFetch: !1
  }, f = Ce(h), y = C.eventListeners, p = C.error, { mutateOptions: w, setMutateOptions: S } = C, O = C.data, R = v && c.length < (O ? 2 : 1), { setQueryFilter: A, setEndPointOptions: k, setQuickSearch: Y, totalRecords: l, refreshData: D } = f, T = f.data, q = ye(_) ? (u) => ve(_, u) : (u) => u == null ? void 0 : u[_];
  ae(() => {
    var u = O != "" ? O : void 0;
    u && d([u]);
  }, [C.data]), ae(() => {
    const x = (T ? [...T] : []).map((he) => q(he)), $ = O != "" ? O : void 0;
    x && $ && !M(x, $) && x.unshift($), d(x), s.current < l && (s.current = l);
  }, [T, l]), ae(() => {
    dt(U);
  }, [g, v]);
  function U() {
    v && (g.length > 0 && g != O ? Y("*" + g + "*") : T ? Y(null) : D());
  }
  var j = {
    onBlur: (u) => {
      J(g), y.onBlur(g);
    },
    onFocus: y.onFocus,
    onChange: (u, x) => {
      J(x);
    },
    onInputChange: (u, x) => (b(x), !0)
  };
  const J = (u) => {
    y.onValueChange(u);
  };
  function M(u, x) {
    return u.find(($) => {
      if ($ == x)
        return $;
    });
  }
  ue(a, () => ({
    focus() {
      i.current.focus();
    },
    isValid() {
      return !p.status;
    },
    clear() {
      C.setData(void 0, !0);
    },
    getValue() {
      return C.getData();
    },
    setValue(u, x = !1) {
      C.setData(u, x);
    },
    setVisible(u) {
      S((x) => ({ ...x, visible: u }));
    },
    setRequired(u) {
      S((x) => ({ ...x, required: u }));
    },
    setReadOnly(u) {
      S((x) => ({ ...x, readonly: u }));
    },
    setAttribute(u) {
      S((x) => ({ ...x, ...u }));
    },
    setFilter(u) {
      A(u);
    },
    resetFilter() {
      A({});
    },
    setEndPointOptions(u) {
      k(u);
    },
    getCurrentData: () => O,
    refresh: () => {
      D();
    },
    addFilter(u, x) {
      A(($) => ($[u] = x, { ...$ }));
    },
    setDefaultFilter(u) {
    },
    setSortOptions(u) {
    }
  }), [C, A]);
  var V = Ve(e, O, e.label);
  return w.readonly && (V.inputProps = { readOnly: !0 }), /* @__PURE__ */ o(
    Ee,
    {
      label: Xe(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ B(_e, { fullWidth: !0, error: p.status, children: [
        /* @__PURE__ */ o(
          it,
          {
            freeSolo: !0,
            autoSelect: !0,
            readOnly: e.readonly,
            renderOption: e.renderOption,
            filterOptions: (u) => u,
            renderInput: (u) => /* @__PURE__ */ o(
              we,
              {
                ...u,
                inputRef: (x) => {
                  i.current = x;
                },
                variant: e.variant || "standard",
                label: e.label,
                autoFocus: e.autoFocus,
                required: e.required,
                ...V,
                InputProps: {
                  ...u.InputProps,
                  endAdornment: /* @__PURE__ */ B(Se, { children: [
                    R ? /* @__PURE__ */ o(st, { color: "inherit", size: 18 }) : null,
                    u.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...V,
            options: c,
            open: v,
            onClose: () => {
              P(!1);
            },
            onOpen: (u) => {
              P(!0);
            },
            ...j
          }
        ),
        /* @__PURE__ */ o(Ae, { className: "form-error-text", children: p.message })
      ] })
    }
  );
}), yn = (t) => {
  const { fieldDef: e } = t;
  return /* @__PURE__ */ B("div", { children: [
    "invalid type " + e.type,
    " "
  ] });
}, Q = (t, e) => {
  const n = t.fieldDef;
  return /* @__PURE__ */ o(
    e,
    {
      ...n,
      label: t.title
    },
    n.title + n.attribute
  );
}, gt = (t, e, n) => {
  const { type: r } = t, a = { fieldDef: t, title: n };
  switch (r) {
    case "string":
      return Q(a, _t);
    case "radio":
      return Q(a, Et);
    case "select":
      return Q(a, qe);
    case "date":
      return Q(a, Tt);
    case "datetime":
      return Q(a, kt);
    case "checkbox":
      return Q(a, At);
    case "serverlookup":
      return Q(a, gn);
    case "textarea":
      return Q(a, Lt);
    case "switch":
      return Q(a, Vt);
    case "password":
      return Q(a, Xt);
    case "float":
    case "number":
    case "numbersOnly":
      return Q(a, Bt);
    case "integer":
      return Q(a, $t);
    case "multiSelect":
      return Q(a, qe);
    case "dateRange":
      return Q(a, Ut);
    case "autoComplete":
      return Q(a, pn);
    default:
      return yn(a);
  }
}, vn = ne(function(e, n) {
  var b;
  const { formLayout: r, context: a } = e, { formData: i } = a, s = r.Container;
  K({});
  const c = rt(() => (v) => gt(v), [i.data]);
  var d = ((b = r.options) == null ? void 0 : b.columns) || 1, g = { columns: d };
  return s ? /* @__PURE__ */ o("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: r.fields.map((v, P) => /* @__PURE__ */ o(
    s,
    {
      index: P,
      field: v,
      label: v.title,
      options: g,
      children: c(v)
    },
    v.attribute + v.name + v.type
  )) }) : /* @__PURE__ */ o("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: r.fields.map((v, P) => c(v)) });
}), pt = (t) => {
  const { layout: e, context: n } = t;
  var r = e.Renderer || vn, a = e.Container || ft;
  const i = (s) => /* @__PURE__ */ o(
    r,
    {
      context: n,
      formLayout: s
    }
  );
  return /* @__PURE__ */ o(
    a,
    {
      hideTitle: e.hideTitle,
      title: e.title,
      name: e.name,
      children: /* @__PURE__ */ o(Ht, { columns: e.columns, children: i(e.formLayout) })
    }
  );
};
var Oe = { exports: {} }, yt = {};
function vt(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number")
    r += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = vt(t[e])) && (r && (r += " "), r += n);
    else
      for (e in t)
        t[e] && (r && (r += " "), r += e);
  return r;
}
function je() {
  for (var t, e, n = 0, r = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = vt(t)) && (r && (r += " "), r += e);
  return r;
}
const bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: je,
  default: je
}, Symbol.toStringTag, { value: "Module" })), Sn = /* @__PURE__ */ an(bn);
var E = {}, ie = {};
Object.defineProperty(ie, "__esModule", {
  value: !0
});
ie.dontSetMe = On;
ie.findInArray = Cn;
ie.int = wn;
ie.isFunction = Dn;
ie.isNum = Pn;
function Cn(t, e) {
  for (let n = 0, r = t.length; n < r; n++)
    if (e.apply(e, [t[n], n, t]))
      return t[n];
}
function Dn(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Function]";
}
function Pn(t) {
  return typeof t == "number" && !isNaN(t);
}
function wn(t) {
  return parseInt(t, 10);
}
function On(t, e, n) {
  if (t[e])
    return new Error("Invalid prop ".concat(e, " passed to ").concat(n, " - do not set this, set it on the child."));
}
var de = {};
Object.defineProperty(de, "__esModule", {
  value: !0
});
de.browserPrefixToKey = St;
de.browserPrefixToStyle = xn;
de.default = void 0;
de.getPrefix = bt;
const Re = ["Moz", "Webkit", "O", "ms"];
function bt() {
  var t;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const n = (t = window.document) === null || t === void 0 || (t = t.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!n || e in n)
    return "";
  for (let r = 0; r < Re.length; r++)
    if (St(e, Re[r]) in n)
      return Re[r];
  return "";
}
function St(t, e) {
  return e ? "".concat(e).concat(Fn(t)) : t;
}
function xn(t, e) {
  return e ? "-".concat(e.toLowerCase(), "-").concat(t) : t;
}
function Fn(t) {
  let e = "", n = !0;
  for (let r = 0; r < t.length; r++)
    n ? (e += t[r].toUpperCase(), n = !1) : t[r] === "-" ? n = !0 : e += t[r];
  return e;
}
de.default = bt();
Object.defineProperty(E, "__esModule", {
  value: !0
});
E.addClassName = Pt;
E.addEvent = Rn;
E.addUserSelectStyles = Wn;
E.createCSSTransform = Vn;
E.createSVGTransform = Xn;
E.getTouch = Bn;
E.getTouchIdentifier = In;
E.getTranslation = Be;
E.innerHeight = Ln;
E.innerWidth = _n;
E.matchesSelector = Dt;
E.matchesSelectorAndParentsTo = Mn;
E.offsetXYFromParent = An;
E.outerHeight = kn;
E.outerWidth = En;
E.removeClassName = wt;
E.removeEvent = Tn;
E.removeUserSelectStyles = Yn;
var ee = ie, Je = Nn(de);
function Ct(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Ct = function(r) {
    return r ? n : e;
  })(t);
}
function Nn(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var n = Ct(e);
  if (n && n.has(t))
    return n.get(t);
  var r = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(t, i)) {
      var s = a ? Object.getOwnPropertyDescriptor(t, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : r[i] = t[i];
    }
  return r.default = t, n && n.set(t, r), r;
}
let Pe = "";
function Dt(t, e) {
  return Pe || (Pe = (0, ee.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, ee.isFunction)(t[n]);
  })), (0, ee.isFunction)(t[Pe]) ? t[Pe](e) : !1;
}
function Mn(t, e, n) {
  let r = t;
  do {
    if (Dt(r, e))
      return !0;
    if (r === n)
      return !1;
    r = r.parentNode;
  } while (r);
  return !1;
}
function Rn(t, e, n, r) {
  if (!t)
    return;
  const a = {
    capture: !0,
    ...r
  };
  t.addEventListener ? t.addEventListener(e, n, a) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n;
}
function Tn(t, e, n, r) {
  if (!t)
    return;
  const a = {
    capture: !0,
    ...r
  };
  t.removeEventListener ? t.removeEventListener(e, n, a) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null;
}
function kn(t) {
  let e = t.clientHeight;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e += (0, ee.int)(n.borderTopWidth), e += (0, ee.int)(n.borderBottomWidth), e;
}
function En(t) {
  let e = t.clientWidth;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e += (0, ee.int)(n.borderLeftWidth), e += (0, ee.int)(n.borderRightWidth), e;
}
function Ln(t) {
  let e = t.clientHeight;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e -= (0, ee.int)(n.paddingTop), e -= (0, ee.int)(n.paddingBottom), e;
}
function _n(t) {
  let e = t.clientWidth;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e -= (0, ee.int)(n.paddingLeft), e -= (0, ee.int)(n.paddingRight), e;
}
function An(t, e, n) {
  const a = e === e.ownerDocument.body ? {
    left: 0,
    top: 0
  } : e.getBoundingClientRect(), i = (t.clientX + e.scrollLeft - a.left) / n, s = (t.clientY + e.scrollTop - a.top) / n;
  return {
    x: i,
    y: s
  };
}
function Vn(t, e) {
  const n = Be(t, e, "px");
  return {
    [(0, Je.browserPrefixToKey)("transform", Je.default)]: n
  };
}
function Xn(t, e) {
  return Be(t, e, "");
}
function Be(t, e, n) {
  let {
    x: r,
    y: a
  } = t, i = "translate(".concat(r).concat(n, ",").concat(a).concat(n, ")");
  if (e) {
    const s = "".concat(typeof e.x == "string" ? e.x : e.x + n), c = "".concat(typeof e.y == "string" ? e.y : e.y + n);
    i = "translate(".concat(s, ", ").concat(c, ")") + i;
  }
  return i;
}
function Bn(t, e) {
  return t.targetTouches && (0, ee.findInArray)(t.targetTouches, (n) => e === n.identifier) || t.changedTouches && (0, ee.findInArray)(t.changedTouches, (n) => e === n.identifier);
}
function In(t) {
  if (t.targetTouches && t.targetTouches[0])
    return t.targetTouches[0].identifier;
  if (t.changedTouches && t.changedTouches[0])
    return t.changedTouches[0].identifier;
}
function Wn(t) {
  if (!t)
    return;
  let e = t.getElementById("react-draggable-style-el");
  e || (e = t.createElement("style"), e.type = "text/css", e.id = "react-draggable-style-el", e.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, e.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, t.getElementsByTagName("head")[0].appendChild(e)), t.body && Pt(t.body, "react-draggable-transparent-selection");
}
function Yn(t) {
  if (t)
    try {
      if (t.body && wt(t.body, "react-draggable-transparent-selection"), t.selection)
        t.selection.empty();
      else {
        const e = (t.defaultView || window).getSelection();
        e && e.type !== "Caret" && e.removeAllRanges();
      }
    } catch {
    }
}
function Pt(t, e) {
  t.classList ? t.classList.add(e) : t.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) || (t.className += " ".concat(e));
}
function wt(t, e) {
  t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"), "");
}
var se = {};
Object.defineProperty(se, "__esModule", {
  value: !0
});
se.canDragX = Qn;
se.canDragY = Gn;
se.createCoreData = $n;
se.createDraggableData = Hn;
se.getBoundPosition = qn;
se.getControlPosition = Un;
se.snapToGrid = zn;
var Z = ie, me = E;
function qn(t, e, n) {
  if (!t.props.bounds)
    return [e, n];
  let {
    bounds: r
  } = t.props;
  r = typeof r == "string" ? r : Kn(r);
  const a = Ie(t);
  if (typeof r == "string") {
    const {
      ownerDocument: i
    } = a, s = i.defaultView;
    let c;
    if (r === "parent" ? c = a.parentNode : c = i.querySelector(r), !(c instanceof s.HTMLElement))
      throw new Error('Bounds selector "' + r + '" could not find an element.');
    const d = c, g = s.getComputedStyle(a), b = s.getComputedStyle(d);
    r = {
      left: -a.offsetLeft + (0, Z.int)(b.paddingLeft) + (0, Z.int)(g.marginLeft),
      top: -a.offsetTop + (0, Z.int)(b.paddingTop) + (0, Z.int)(g.marginTop),
      right: (0, me.innerWidth)(d) - (0, me.outerWidth)(a) - a.offsetLeft + (0, Z.int)(b.paddingRight) - (0, Z.int)(g.marginRight),
      bottom: (0, me.innerHeight)(d) - (0, me.outerHeight)(a) - a.offsetTop + (0, Z.int)(b.paddingBottom) - (0, Z.int)(g.marginBottom)
    };
  }
  return (0, Z.isNum)(r.right) && (e = Math.min(e, r.right)), (0, Z.isNum)(r.bottom) && (n = Math.min(n, r.bottom)), (0, Z.isNum)(r.left) && (e = Math.max(e, r.left)), (0, Z.isNum)(r.top) && (n = Math.max(n, r.top)), [e, n];
}
function zn(t, e, n) {
  const r = Math.round(e / t[0]) * t[0], a = Math.round(n / t[1]) * t[1];
  return [r, a];
}
function Qn(t) {
  return t.props.axis === "both" || t.props.axis === "x";
}
function Gn(t) {
  return t.props.axis === "both" || t.props.axis === "y";
}
function Un(t, e, n) {
  const r = typeof e == "number" ? (0, me.getTouch)(t, e) : null;
  if (typeof e == "number" && !r)
    return null;
  const a = Ie(n), i = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, me.offsetXYFromParent)(r || t, i, n.props.scale);
}
function $n(t, e, n) {
  const r = !(0, Z.isNum)(t.lastX), a = Ie(t);
  return r ? {
    node: a,
    deltaX: 0,
    deltaY: 0,
    lastX: e,
    lastY: n,
    x: e,
    y: n
  } : {
    node: a,
    deltaX: e - t.lastX,
    deltaY: n - t.lastY,
    lastX: t.lastX,
    lastY: t.lastY,
    x: e,
    y: n
  };
}
function Hn(t, e) {
  const n = t.props.scale;
  return {
    node: e.node,
    x: t.state.x + e.deltaX / n,
    y: t.state.y + e.deltaY / n,
    deltaX: e.deltaX / n,
    deltaY: e.deltaY / n,
    lastX: t.state.x,
    lastY: t.state.y
  };
}
function Kn(t) {
  return {
    left: t.left,
    top: t.top,
    right: t.right,
    bottom: t.bottom
  };
}
function Ie(t) {
  const e = t.findDOMNode();
  if (!e)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return e;
}
var xe = {}, Fe = {};
Object.defineProperty(Fe, "__esModule", {
  value: !0
});
Fe.default = jn;
function jn() {
}
Object.defineProperty(xe, "__esModule", {
  value: !0
});
xe.default = void 0;
var Te = Zn(nt), H = We(ot), Jn = We(mt), z = E, le = se, ke = ie, ge = We(Fe);
function We(t) {
  return t && t.__esModule ? t : { default: t };
}
function Ot(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Ot = function(r) {
    return r ? n : e;
  })(t);
}
function Zn(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var n = Ot(e);
  if (n && n.has(t))
    return n.get(t);
  var r = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(t, i)) {
      var s = a ? Object.getOwnPropertyDescriptor(t, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : r[i] = t[i];
    }
  return r.default = t, n && n.set(t, r), r;
}
function G(t, e, n) {
  return e = er(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function er(t) {
  var e = tr(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function tr(t, e) {
  if (typeof t != "object" || t === null)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
const oe = {
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
let ce = oe.mouse, Ne = class extends Te.Component {
  constructor() {
    super(...arguments), G(this, "dragging", !1), G(this, "lastX", NaN), G(this, "lastY", NaN), G(this, "touchIdentifier", null), G(this, "mounted", !1), G(this, "handleDragStart", (e) => {
      if (this.props.onMouseDown(e), !this.props.allowAnyClick && typeof e.button == "number" && e.button !== 0)
        return !1;
      const n = this.findDOMNode();
      if (!n || !n.ownerDocument || !n.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      const {
        ownerDocument: r
      } = n;
      if (this.props.disabled || !(e.target instanceof r.defaultView.Node) || this.props.handle && !(0, z.matchesSelectorAndParentsTo)(e.target, this.props.handle, n) || this.props.cancel && (0, z.matchesSelectorAndParentsTo)(e.target, this.props.cancel, n))
        return;
      e.type === "touchstart" && e.preventDefault();
      const a = (0, z.getTouchIdentifier)(e);
      this.touchIdentifier = a;
      const i = (0, le.getControlPosition)(e, a, this);
      if (i == null)
        return;
      const {
        x: s,
        y: c
      } = i, d = (0, le.createCoreData)(this, s, c);
      (0, ge.default)("DraggableCore: handleDragStart: %j", d), (0, ge.default)("calling", this.props.onStart), !(this.props.onStart(e, d) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, z.addUserSelectStyles)(r), this.dragging = !0, this.lastX = s, this.lastY = c, (0, z.addEvent)(r, ce.move, this.handleDrag), (0, z.addEvent)(r, ce.stop, this.handleDragStop));
    }), G(this, "handleDrag", (e) => {
      const n = (0, le.getControlPosition)(e, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: r,
        y: a
      } = n;
      if (Array.isArray(this.props.grid)) {
        let c = r - this.lastX, d = a - this.lastY;
        if ([c, d] = (0, le.snapToGrid)(this.props.grid, c, d), !c && !d)
          return;
        r = this.lastX + c, a = this.lastY + d;
      }
      const i = (0, le.createCoreData)(this, r, a);
      if ((0, ge.default)("DraggableCore: handleDrag: %j", i), this.props.onDrag(e, i) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const d = document.createEvent("MouseEvents");
          d.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(d);
        }
        return;
      }
      this.lastX = r, this.lastY = a;
    }), G(this, "handleDragStop", (e) => {
      if (!this.dragging)
        return;
      const n = (0, le.getControlPosition)(e, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: r,
        y: a
      } = n;
      if (Array.isArray(this.props.grid)) {
        let d = r - this.lastX || 0, g = a - this.lastY || 0;
        [d, g] = (0, le.snapToGrid)(this.props.grid, d, g), r = this.lastX + d, a = this.lastY + g;
      }
      const i = (0, le.createCoreData)(this, r, a);
      if (this.props.onStop(e, i) === !1 || this.mounted === !1)
        return !1;
      const c = this.findDOMNode();
      c && this.props.enableUserSelectHack && (0, z.removeUserSelectStyles)(c.ownerDocument), (0, ge.default)("DraggableCore: handleDragStop: %j", i), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, c && ((0, ge.default)("DraggableCore: Removing handlers"), (0, z.removeEvent)(c.ownerDocument, ce.move, this.handleDrag), (0, z.removeEvent)(c.ownerDocument, ce.stop, this.handleDragStop));
    }), G(this, "onMouseDown", (e) => (ce = oe.mouse, this.handleDragStart(e))), G(this, "onMouseUp", (e) => (ce = oe.mouse, this.handleDragStop(e))), G(this, "onTouchStart", (e) => (ce = oe.touch, this.handleDragStart(e))), G(this, "onTouchEnd", (e) => (ce = oe.touch, this.handleDragStop(e)));
  }
  componentDidMount() {
    this.mounted = !0;
    const e = this.findDOMNode();
    e && (0, z.addEvent)(e, oe.touch.start, this.onTouchStart, {
      passive: !1
    });
  }
  componentWillUnmount() {
    this.mounted = !1;
    const e = this.findDOMNode();
    if (e) {
      const {
        ownerDocument: n
      } = e;
      (0, z.removeEvent)(n, oe.mouse.move, this.handleDrag), (0, z.removeEvent)(n, oe.touch.move, this.handleDrag), (0, z.removeEvent)(n, oe.mouse.stop, this.handleDragStop), (0, z.removeEvent)(n, oe.touch.stop, this.handleDragStop), (0, z.removeEvent)(e, oe.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, z.removeUserSelectStyles)(n);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var e, n;
    return (e = this.props) !== null && e !== void 0 && e.nodeRef ? (n = this.props) === null || n === void 0 || (n = n.nodeRef) === null || n === void 0 ? void 0 : n.current : Jn.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ Te.cloneElement(Te.Children.only(this.props.children), {
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
xe.default = Ne;
G(Ne, "displayName", "DraggableCore");
G(Ne, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: H.default.bool,
  children: H.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: H.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: H.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(t, e) {
    if (t[e] && t[e].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: H.default.arrayOf(H.default.number),
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
  handle: H.default.string,
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
  cancel: H.default.string,
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
  nodeRef: H.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: H.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: H.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: H.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: H.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: H.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: ke.dontSetMe,
  style: ke.dontSetMe,
  transform: ke.dontSetMe
});
G(Ne, "defaultProps", {
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
(function(t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return d.default;
    }
  }), t.default = void 0;
  var e = P(nt), n = b(ot), r = b(mt), a = b(Sn), i = E, s = se, c = ie, d = b(xe), g = b(Fe);
  function b(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function v(h) {
    if (typeof WeakMap != "function")
      return null;
    var f = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap();
    return (v = function(p) {
      return p ? y : f;
    })(h);
  }
  function P(h, f) {
    if (!f && h && h.__esModule)
      return h;
    if (h === null || typeof h != "object" && typeof h != "function")
      return { default: h };
    var y = v(f);
    if (y && y.has(h))
      return y.get(h);
    var p = {}, w = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var S in h)
      if (S !== "default" && Object.prototype.hasOwnProperty.call(h, S)) {
        var O = w ? Object.getOwnPropertyDescriptor(h, S) : null;
        O && (O.get || O.set) ? Object.defineProperty(p, S, O) : p[S] = h[S];
      }
    return p.default = h, y && y.set(h, p), p;
  }
  function C() {
    return C = Object.assign ? Object.assign.bind() : function(h) {
      for (var f = 1; f < arguments.length; f++) {
        var y = arguments[f];
        for (var p in y)
          Object.prototype.hasOwnProperty.call(y, p) && (h[p] = y[p]);
      }
      return h;
    }, C.apply(this, arguments);
  }
  function L(h, f, y) {
    return f = W(f), f in h ? Object.defineProperty(h, f, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : h[f] = y, h;
  }
  function W(h) {
    var f = _(h, "string");
    return typeof f == "symbol" ? f : String(f);
  }
  function _(h, f) {
    if (typeof h != "object" || h === null)
      return h;
    var y = h[Symbol.toPrimitive];
    if (y !== void 0) {
      var p = y.call(h, f || "default");
      if (typeof p != "object")
        return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (f === "string" ? String : Number)(h);
  }
  class X extends e.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(f, y) {
      let {
        position: p
      } = f, {
        prevPropsPosition: w
      } = y;
      return p && (!w || p.x !== w.x || p.y !== w.y) ? ((0, g.default)("Draggable: getDerivedStateFromProps %j", {
        position: p,
        prevPropsPosition: w
      }), {
        x: p.x,
        y: p.y,
        prevPropsPosition: {
          ...p
        }
      }) : null;
    }
    constructor(f) {
      super(f), L(this, "onDragStart", (y, p) => {
        if ((0, g.default)("Draggable: onDragStart: %j", p), this.props.onStart(y, (0, s.createDraggableData)(this, p)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), L(this, "onDrag", (y, p) => {
        if (!this.state.dragging)
          return !1;
        (0, g.default)("Draggable: onDrag: %j", p);
        const w = (0, s.createDraggableData)(this, p), S = {
          x: w.x,
          y: w.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: R,
            y: A
          } = S;
          S.x += this.state.slackX, S.y += this.state.slackY;
          const [k, Y] = (0, s.getBoundPosition)(this, S.x, S.y);
          S.x = k, S.y = Y, S.slackX = this.state.slackX + (R - S.x), S.slackY = this.state.slackY + (A - S.y), w.x = S.x, w.y = S.y, w.deltaX = S.x - this.state.x, w.deltaY = S.y - this.state.y;
        }
        if (this.props.onDrag(y, w) === !1)
          return !1;
        this.setState(S);
      }), L(this, "onDragStop", (y, p) => {
        if (!this.state.dragging || this.props.onStop(y, (0, s.createDraggableData)(this, p)) === !1)
          return !1;
        (0, g.default)("Draggable: onDragStop: %j", p);
        const S = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: R,
            y: A
          } = this.props.position;
          S.x = R, S.y = A;
        }
        this.setState(S);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: f.position ? f.position.x : f.defaultPosition.x,
        y: f.position ? f.position.y : f.defaultPosition.y,
        prevPropsPosition: {
          ...f.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, f.position && !(f.onDrag || f.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
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
      var f, y;
      return (f = (y = this.props) === null || y === void 0 || (y = y.nodeRef) === null || y === void 0 ? void 0 : y.current) !== null && f !== void 0 ? f : r.default.findDOMNode(this);
    }
    render() {
      const {
        axis: f,
        bounds: y,
        children: p,
        defaultPosition: w,
        defaultClassName: S,
        defaultClassNameDragging: O,
        defaultClassNameDragged: R,
        position: A,
        positionOffset: k,
        scale: Y,
        ...l
      } = this.props;
      let D = {}, T = null;
      const U = !!!A || this.state.dragging, j = A || w, J = {
        // Set left if horizontal drag is enabled
        x: (0, s.canDragX)(this) && U ? this.state.x : j.x,
        // Set top if vertical drag is enabled
        y: (0, s.canDragY)(this) && U ? this.state.y : j.y
      };
      this.state.isElementSVG ? T = (0, i.createSVGTransform)(J, k) : D = (0, i.createCSSTransform)(J, k);
      const M = (0, a.default)(p.props.className || "", S, {
        [O]: this.state.dragging,
        [R]: this.state.dragged
      });
      return /* @__PURE__ */ e.createElement(d.default, C({}, l, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ e.cloneElement(e.Children.only(p), {
        className: M,
        style: {
          ...p.props.style,
          ...D
        },
        transform: T
      }));
    }
  }
  t.default = X, L(X, "displayName", "Draggable"), L(X, "propTypes", {
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
    axis: n.default.oneOf(["both", "x", "y", "none"]),
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
    bounds: n.default.oneOfType([n.default.shape({
      left: n.default.number,
      right: n.default.number,
      top: n.default.number,
      bottom: n.default.number
    }), n.default.string, n.default.oneOf([!1])]),
    defaultClassName: n.default.string,
    defaultClassNameDragging: n.default.string,
    defaultClassNameDragged: n.default.string,
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
    defaultPosition: n.default.shape({
      x: n.default.number,
      y: n.default.number
    }),
    positionOffset: n.default.shape({
      x: n.default.oneOfType([n.default.number, n.default.string]),
      y: n.default.oneOfType([n.default.number, n.default.string])
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
    position: n.default.shape({
      x: n.default.number,
      y: n.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: c.dontSetMe,
    style: c.dontSetMe,
    transform: c.dontSetMe
  }), L(X, "defaultProps", {
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
})(yt);
const {
  default: xt,
  DraggableCore: nr
} = yt;
Oe.exports = xt;
Oe.exports.default = xt;
Oe.exports.DraggableCore = nr;
var rr = Oe.exports;
const or = /* @__PURE__ */ sn(rr);
const ar = (t) => {
  const { formLayout: e } = t;
  var n = "palmyra-form-field-container";
  const r = e.options;
  if (r && r.columns)
    switch (r.columns) {
      case 2:
        return n + " palmyra-form-field-container-2column";
      case 3:
        return n + " palmyra-form-field-container-3column";
      case 4:
        return n + " palmyra-form-field-container-4column";
    }
  return n;
}, ir = ne(function(e, n) {
  const { formLayout: r, context: a } = e, { formData: i } = a, s = K({}), c = ar(e), d = "palmyra-form-field-data", g = rt(() => (b) => gt(b, s, b.label), [i.data]);
  return /* @__PURE__ */ o("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: r.fields.map((b, v) => /* @__PURE__ */ o("div", { className: c, children: /* @__PURE__ */ o("div", { className: d, children: g(b) }) }, b.attribute)) });
});
function sr(t) {
  return /* @__PURE__ */ o(
    or,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ o(Wt, { ...t })
    }
  );
}
const lr = ({ columns: t, isOpen: e, onClose: n, setFilter: r, defaultFilter: a = {} }) => {
  var { getFieldManager: i, getFilterData: s } = ln(a);
  const c = () => {
    r({});
  }, d = () => {
    var P = s();
    r && r(P);
  }, g = () => {
    n();
  }, b = (P) => {
    P.keyCode === 27 && g();
  }, v = on(t);
  return /* @__PURE__ */ o("div", { className: "grid-filter-container", children: /* @__PURE__ */ o(
    It,
    {
      open: e,
      onClose: g,
      PaperComponent: sr,
      onKeyDown: b,
      PaperProps: { sx: { minWidth: "500px" } },
      children: /* @__PURE__ */ o(lt, { onClickAway: n, children: /* @__PURE__ */ B("div", { children: [
        /* @__PURE__ */ B("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ o("div", { className: "grid-header-text-container", children: /* @__PURE__ */ o("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ o("div", { className: "grid-header-icon-container", onClick: g, children: /* @__PURE__ */ o(Zt, { className: "filter-cancel-icon" }) })
        ] }),
        /* @__PURE__ */ o("span", { className: "filter-header-border" }),
        /* @__PURE__ */ o("div", { className: "grid-filter-content", children: /* @__PURE__ */ o(be.Provider, { value: i, children: /* @__PURE__ */ o(
          pt,
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
              Renderer: ir
            }
          }
        ) }) }),
        /* @__PURE__ */ B("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ o(fe, { className: "filter-reset-btn", disableRipple: !0, onClick: c, children: "Reset" }),
          /* @__PURE__ */ o(fe, { className: "filter-button", disableRipple: !0, onClick: d, children: "Filter" })
        ] })
      ] }) })
    }
  ) });
}, cr = ne(function(e, n) {
  const { columns: r, children: a, EmptyChild: i, onRowClick: s, quickSearch: c } = e, d = i || jt, g = e.customizer || rn, b = e.customButton, [v, P] = I(!1), [C, L] = I("standard"), [W, _] = I(!1), [X, h] = I(""), {
    setQueryFilter: f,
    setQuickSearch: y,
    setSortColumns: p,
    setEndPointOptions: w,
    gotoPage: S,
    setPageSize: O,
    getPageNo: R,
    refreshData: A,
    setQueryLimit: k,
    getQueryLimit: Y,
    data: l,
    totalRecords: D,
    queryLimit: T,
    pageSizeOptions: q,
    filter: U
  } = Ce(e), j = n || K(null);
  ue(j, () => ({
    setFilter: (N) => {
      f(N);
    },
    refresh: () => {
      A();
    },
    resetFilter() {
      f({});
    },
    setEndPointOptions: (N) => {
      w(N);
    },
    addFilter: (N, re) => {
      f((Ye) => (Ye[N] = re, { ...Ye }));
    },
    setQueryLimit: (N) => {
      k(N);
    },
    getQueryLimit: () => Y(),
    setSortOptions(N) {
      p(N);
    },
    getCurrentData: () => l
  }), [Y]);
  const J = (N, re) => {
    S(re);
  }, M = Kt(r, g), V = (N) => {
    L(N);
  }, u = () => {
    P(!v);
  }, x = () => C === "compact" ? { padding: "3px" } : C === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, $ = () => C === "compact" ? { padding: "3px" } : C === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, he = () => {
    var N;
    switch (C) {
      case "compact":
        N = /* @__PURE__ */ o(Ue, { className: "density-icon" });
        break;
      case "comfortable":
        N = /* @__PURE__ */ o($e, { className: "density-icon" });
        break;
      default:
        N = /* @__PURE__ */ o(Ge, { className: "grid-button-icon" });
        break;
    }
    return N;
  }, m = (N) => {
    const re = N.target.value;
    h(re), re ? y(re) : f({});
  }, F = (N) => {
    s && s(N);
  }, te = (N) => {
    const re = parseInt(N.target.value, 10);
    O(re);
  }, Me = () => {
    console.info("Export Clicked");
  }, Mt = 200, Rt = !!e.pageSize;
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ B("div", { children: [
    a,
    /* @__PURE__ */ B("div", { className: "grid-header", children: [
      /* @__PURE__ */ o("div", { className: "grid-header-filter", children: !!c && /* @__PURE__ */ o(
        we,
        {
          sx: { width: Mt },
          type: "text",
          value: X,
          onChange: m,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ o(ct, { position: "end", children: /* @__PURE__ */ o(at, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ o(lt, { onClickAway: () => {
        P(!1);
      }, children: /* @__PURE__ */ B("div", { className: "grid-header-button grid-density-btn", onClick: u, children: [
        /* @__PURE__ */ o(De, { title: "Density", placement: "top", children: /* @__PURE__ */ o(fe, { className: "grid-btn", disableRipple: !0, children: he() }) }),
        v && /* @__PURE__ */ o("div", { className: "density-dropdown-content", children: /* @__PURE__ */ B("ul", { children: [
          /* @__PURE__ */ B("li", { onClick: () => V("standard"), children: [
            /* @__PURE__ */ o(Ge, { className: "density-icon" }),
            /* @__PURE__ */ o("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ B("li", { onClick: () => V("compact"), children: [
            /* @__PURE__ */ o(Ue, { className: "density-icon" }),
            /* @__PURE__ */ o("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ B("li", { onClick: () => V("comfortable"), children: [
            /* @__PURE__ */ o($e, { className: "density-icon" }),
            /* @__PURE__ */ o("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      r.some((N) => N.searchable) && /* @__PURE__ */ B("div", { className: "grid-header-button grid-filter-btn", children: [
        /* @__PURE__ */ o(De, { title: "Filter", placement: "top", children: /* @__PURE__ */ o(fe, { className: "grid-btn", disableRipple: !0, onClick: () => _(!0), children: /* @__PURE__ */ o(en, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ o(
          lr,
          {
            columns: r,
            setFilter: f,
            defaultFilter: U,
            isOpen: W,
            onClose: () => _(!1)
          }
        )
      ] }),
      /* @__PURE__ */ o("div", { className: "grid-header-button grid-export-btn", onClick: Me, children: /* @__PURE__ */ o(De, { title: "Export", placement: "top", children: /* @__PURE__ */ o(fe, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ o(tn, { className: "grid-button-icon" }) }) }) }),
      e.onNewClick ? /* @__PURE__ */ o("div", { className: "grid-header-button", onClick: () => {
        e.onNewClick();
      }, children: /* @__PURE__ */ o(De, { title: "New", placement: "top", children: /* @__PURE__ */ o(fe, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ o(nn, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ o(Se, {}),
      b && b.map((N, re) => /* @__PURE__ */ o("div", { className: "grid-custom-button grid-export-btn", children: N }, re))
    ] }),
    /* @__PURE__ */ o("div", { className: "grid-table", children: /* @__PURE__ */ o(
      Jt,
      {
        columnDefs: M,
        EmptyChild: d,
        rowData: l,
        onRowClick: F,
        onRowStyle: x,
        onHeaderStyle: $,
        onSortColumn: p
      }
    ) }),
    /* @__PURE__ */ o("div", { className: "grid-footer", children: /* @__PURE__ */ o("div", { className: "grid-filter", children: Rt && /* @__PURE__ */ o(
      ut,
      {
        component: "div",
        count: D || 0,
        page: R(),
        onPageChange: J,
        rowsPerPage: T.limit,
        rowsPerPageOptions: q || [],
        onRowsPerPageChange: te
      }
    ) }) })
  ] }) });
}), Fo = ne(function(e, n) {
  const { columns: r, endPoint: a, storeFactory: i, layoutParams: s, pagination: c } = e, d = e.quickSearch || "", g = e.customButton, b = (P, C) => {
  };
  ae(() => {
    var P = He.subscribe(e.topic, b);
    return () => {
      He.unsubscribe(P);
    };
  }, [e.topic]);
  const v = {
    fields: r,
    pagination: c,
    quickSearch: d,
    storeOptions: {
      endPoint: a
    },
    actionOptions: e.actions
  };
  return /* @__PURE__ */ o(Se, { children: /* @__PURE__ */ o(Le.Provider, { value: i, children: /* @__PURE__ */ o(
    Ft,
    {
      layout: v,
      context: s,
      onDataChange: e.onDataChange,
      defaultParams: e.defaultParams,
      customButton: g,
      customizer: e.customizer,
      ref: n
    }
  ) }) });
}), ur = ne(function(e, n) {
  const r = e.layout, [a, i] = I(r.fields), s = r.pagination ? r.pagination : [15], c = pe(Le), d = pe(tt);
  var g = r.storeOptions || {}, b = {};
  Gt(b, g, d);
  const v = c.getGridStore(b, r.storeOptions.endPoint);
  ae(() => {
    g.hasLayout && v.queryLayout({}).then((L) => {
      i(L.columns);
    });
  }, []);
  const { onClick: P, onNewClick: C } = cn(r.actionOptions, d);
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
    cr,
    {
      columns: a,
      store: v,
      pageSize: s,
      onRowClick: P,
      onDataChange: e.onDataChange,
      onNewClick: C,
      customizer: e.customizer,
      customButton: e.customButton,
      quickSearch: r.quickSearch,
      ref: n,
      defaultParams: e.defaultParams
    }
  ) });
}), Ft = ur, dr = (t) => {
  const { layout: e, context: n } = t;
  var r = e.Container || ft;
  return /* @__PURE__ */ o(ht, { fallback: /* @__PURE__ */ o("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ o(r, { ...e, children: ((i) => /* @__PURE__ */ o(
    Ft,
    {
      context: n,
      layout: i
    }
  ))(e.tableLayout) }) });
}, fr = (t) => {
  const { layout: e } = t;
  switch (e.type) {
    case "form":
      return /* @__PURE__ */ o(pt, { ...t });
    case "view":
      return /* @__PURE__ */ o(dn, { ...t });
    case "grid":
      return /* @__PURE__ */ o(dr, { ...t });
    case "chart":
      return /* @__PURE__ */ o(zt, { ...t });
    default:
      return /* @__PURE__ */ o(un, { ...t });
  }
};
function mr(t, e) {
  var n = t || 1, r = e;
  return {
    w: n,
    h: r
  };
}
const Nt = (t) => {
  const { layout: e, context: n } = t, r = e.sections;
  function a(i, s, c) {
    const { w: d, h: g } = mr(i.width, i.height);
    return /* @__PURE__ */ o(Yt, { sx: { width: d, height: g }, children: /* @__PURE__ */ o(
      fr,
      {
        layout: i,
        context: s
      }
    ) }, (i.name || "tab") + c);
  }
  return /* @__PURE__ */ o("div", { style: { display: "flex", flexWrap: "wrap" }, children: r.map((i, s) => a(i, n, s)) });
}, Ze = ne(function(e, n) {
  const { layout: r } = e;
  ue(n, () => ({
    resetFilter() {
    }
  }), []);
  const a = {}, i = r.tabs;
  return /* @__PURE__ */ o("div", { children: i.map((s, c) => /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
    Nt,
    {
      layout: s,
      context: a
    }
  ) }, s.name + c)) });
}), hr = (t) => {
  switch (t) {
    case "formEdit":
      return "edit";
    case "formNew":
      return "new";
    case "formView":
      return "view";
    default:
      return "edit";
  }
}, et = ne(function(e, n) {
  var b;
  const r = e.data || {}, { layout: a } = e;
  var { getFieldManager: i, getFormData: s, isFormValid: c } = fn(r, (b = e.callbacks) == null ? void 0 : b.onFormValidChange, hr(e.mode));
  ue(n, () => ({
    getData() {
      return s();
    },
    isValid() {
      return c();
    }
  }), []);
  const d = { formData: r }, g = a.tabs;
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(be.Provider, { value: i, children: g.map((v, P) => /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
    Nt,
    {
      layout: v,
      context: d
    }
  ) }, v.name + P)) }) });
}), gr = (t) => {
  switch (t) {
    case "grid":
      return Ze;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), et;
    case "formEdit":
    case "formNew":
    case "formView":
      return et;
    default:
      return Ze;
  }
}, No = ne(function(e, n) {
  const [r, a] = I(e.layout), i = e.mode ? e.mode : r.type ? r.type : "grid", s = e.layoutParams || {}, c = gr(i), d = K(0);
  return ae(() => {
    a(e.layout), d.current < 999999 ? d.current++ : d.current = 0;
  }, [e.layout]), /* @__PURE__ */ o(ht, { fallback: /* @__PURE__ */ o("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ o(Le.Provider, { value: e.storeFactory, children: /* @__PURE__ */ o(tt.Provider, { value: s, children: /* @__PURE__ */ o(c, { ...e, ref: (g) => {
    n && (n.current = g);
  } }, d.current) }) }) });
}), Mo = ne(function(e, n) {
  const { children: r, Child: a, childProps: i, pageSize: s } = e, c = n || K(null), {
    setQueryFilter: d,
    refreshData: g,
    setSortColumns: b,
    setEndPointOptions: v,
    setQuickSearch: P,
    gotoPage: C,
    setPageSize: L,
    getPageNo: W,
    setQueryLimit: _,
    getQueryLimit: X,
    data: h,
    totalRecords: f,
    pageSizeOptions: y,
    queryLimit: p
  } = Ce(e), w = e.listKeyProvider || ((l, D) => D);
  ue(c, () => ({
    setFilter: (l) => {
      d(l);
    },
    refresh: () => {
      g();
    },
    resetFilter() {
      d({});
    },
    setEndPointOptions: (l) => {
      v(l);
    },
    addFilter: (l, D) => {
      d((T) => (T[l] = D, { ...T }));
    },
    setQueryLimit: (l) => {
      _(l);
    },
    getQueryLimit: () => X(),
    getCurrentData: () => h,
    setSortOptions(l) {
      b(l);
    }
  }), [d]);
  const S = (l, D) => {
    C(D);
  }, O = (l) => {
    const D = l.target.value;
    P(D);
  }, R = (l) => {
    const D = parseInt(l.target.value, 10);
    L(D);
  }, A = 200, k = !!s, Y = !!e.quickSearch;
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o("div", { className: "card-page-container", children: /* @__PURE__ */ B("div", { children: [
    /* @__PURE__ */ B("div", { className: "card-header", children: [
      r,
      /* @__PURE__ */ o("div", { className: "card-filter", children: Y && /* @__PURE__ */ o(
        we,
        {
          sx: { width: A },
          type: "text",
          onChange: O,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ o(ct, { position: "end", children: /* @__PURE__ */ o(at, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ o("div", { className: "card-pagination", children: k && /* @__PURE__ */ o(
        ut,
        {
          component: "div",
          count: f || 0,
          page: W(),
          onPageChange: S,
          rowsPerPage: p.limit,
          rowsPerPageOptions: y || [],
          onRowsPerPageChange: R
        }
      ) })
    ] }),
    /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
      qt,
      {
        Child: a,
        childKeyProvider: w,
        preProcess: e.preProcess,
        dataList: h,
        childProps: i,
        EmptyChild: e.EmptyChild
      }
    ) })
  ] }) }) });
});
export {
  No as F,
  Ft as G,
  gn as M,
  Fo as P,
  Mo as S,
  Nt as T,
  cr as a,
  Oo as b,
  pn as c,
  vn as d,
  pt as e,
  ir as f,
  gt as g,
  lr as h,
  dr as i,
  fr as j,
  Ze as k,
  et as l,
  Ce as u
};
