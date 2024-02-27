import "../assets/ServerCardLayout.css";
import $t from "../palmyra/mui/form/MuiDatePicker.js";
import Kt from "../palmyra/mui/form/MuiDateTimePicker.js";
import jt from "../palmyra/mui/form/MuiRadioGroup.js";
import it from "../palmyra/mui/form/MuiSelect.js";
import Zt from "../palmyra/mui/form/MuiTextArea.js";
import Jt from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import en from "../palmyra/mui/form/MuiCheckBox.js";
import tn from "../palmyra/mui/form/MuiSwitch.js";
import nn from "../palmyra/mui/form/MuiPassword.js";
import rn from "../palmyra/mui/form/MuiNumberField.js";
import Ge from "../palmyra/mui/form/FieldDecorator.js";
import { FieldManagerContext as Pe, StoreFactoryContext as Ue, LayoutParamsContext as pt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as r, jsxs as P, Fragment as ye } from "react/jsx-runtime";
import yt, { useState as _, useRef as Z, useEffect as ae, forwardRef as oe, useContext as Se, useImperativeHandle as he, useMemo as vt } from "react";
import { a as $e } from "./index.esm.js";
import { FormControlLabel as st, Checkbox as lt, FormControl as Ke, FormHelperText as je, Autocomplete as bt, TextField as xe, CircularProgress as Ct, Dialog as on, ClickAwayListener as ke, Button as le, Paper as an, InputAdornment as Ze, TablePagination as Je, Tooltip as Fe, Box as sn } from "@mui/material";
import ln from "../palmyra/layout/card/CardLayout.js";
import cn from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as et, getFieldLabel as tt } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as De } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as we } from "../palmyra/form/FormUtil.js";
import { delay as St, delayGenerator as dn, mergeDeep as un } from "../palmyra/utils/index.js";
import fn from "../palmyra/mui/form/MuiIOSSwitch.js";
import hn from "../palmyra/mui/form/MuiDateRangePicker.js";
import mn from "../palmyra/mui/form/MuiIntegerField.js";
import Dt from "../palmyra/layout/container/SectionContainer.js";
import gn from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as wt } from "../palmyra/grid/base/ColumnConverter.js";
import Pt from "../palmyra/grid/base/EmptyChildTable.js";
import xt from "../palmyra/grid/base/TableX.js";
import { Close as pn, KeyboardArrowDown as ct, Menu as Re, DensitySmall as Te, DensityLarge as Ee, Add as Nt, FilterAlt as yn, FileDownloadOutlined as vn } from "@mui/icons-material";
import { NoopCustomizer as Ot } from "../palmyra/grid/Types.js";
import { convertToField as bn } from "../palmyra/grid/base/GridFieldConverter.js";
import { a as Cn, g as Sn } from "./_commonjsHelpers.js";
import { p as Ft } from "./index.js";
import Mt from "react-dom";
import { createFilterData as Dn } from "../palmyra/form/PalmyraFilterManager.js";
import { G as Ne } from "./iconBase.js";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import { topic as dt } from "../palmyra/utils/pubsub/topic.js";
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
import { getActionPublishers as wn } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as kt } from "../palmyra/layout/ErrorBoundary.js";
import Pn from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import xn from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as Nn } from "./PalmyraFieldManager.js";
import { useKeyValue as On } from "../palmyra/utils/pubsub/PubSubHelper.js";
const ve = (t) => {
  var K, Y;
  const { store: e, quickSearch: n } = t, o = t.fetchAll != !1, [a, i] = _(t.endPointOptions), [s, c] = _(null), u = ((K = t.defaultParams) == null ? void 0 : K.filter) || {}, g = ((Y = t.defaultParams) == null ? void 0 : Y.sort) || {}, [b, v] = t.filterTopic ? On(t.filterTopic, u) : _(u), [x, w] = _({}), F = Z(t.initialFetch == !1), z = t.pageSize ? t.pageSize : 15;
  var L = z instanceof Array ? z : [z], X = z instanceof Array ? z[0] : z;
  const [h, m] = _({ limit: X, offset: 0, total: !0 }), [p, y] = _(null), D = () => Math.round(h.offset / h.limit), C = () => h, N = (R) => {
    m((B) => ({ limit: B.limit, total: B.total, offset: R * B.limit }));
  }, A = (R) => {
    const B = R > 10 || R == -1 ? R : 15;
    m((d) => {
      const O = Math.floor(d.offset / B) * B;
      return { limit: B, total: d.total, offset: O };
    });
  }, I = () => b ? Object.keys(b).length == 0 : !1, V = (R) => {
    y((B) => (setTimeout(() => {
      t.onDataChange && t.onDataChange(p, B);
    }, 300), R));
  };
  ae(() => {
    if (F.current) {
      F.current = !1;
      return;
    }
    (o || !I()) && Q();
  }, [h, x, a]);
  const Q = () => {
    const B = {
      sortOrder: x && Object.keys(x).length > 0 ? x : g,
      total: !0,
      endPointVars: a,
      ...h,
      filter: { ...b, ...u }
    };
    if (e)
      try {
        e.query(B).then((d) => {
          V(d.result), c(d.total);
        }).catch((d) => {
          var O = d.response ? d.response : d;
          console.error("error while fetching", O), S();
        });
      } catch (d) {
        console.error(d), l();
      }
    else
      console.error("Store is not provided for the Grid"), l();
  }, l = () => {
    V([]), c(0);
  }, S = () => {
    V(void 0), c(null);
  };
  return {
    setQueryFilter: (R) => {
      typeof R == "function" || R && Object.keys(R).length > 0 ? v(R) : v({}), N(0);
    },
    setQuickSearch: (R) => {
      const B = n;
      v(R ? (d) => (d[B] = R, { ...d }) : (d) => (delete d[B], { ...d })), N(0);
    },
    setSortColumns: (R) => {
      w(R);
    },
    setEndPointOptions: i,
    refreshData: Q,
    gotoPage: N,
    setPageSize: A,
    getPageNo: D,
    getQueryLimit: C,
    setQueryLimit: m,
    filter: b,
    queryLimit: h,
    data: p,
    totalRecords: s,
    pageSizeOptions: L
  };
};
function ut(t) {
  return t ? Array.isArray(t) ? t : typeof t == "string" ? t.split(",") : (console.log(t), [t]) : [];
}
const qo = oe(function(e, n) {
  const o = Se(Pe), a = n || Z(null), i = o(e, "checkbox", a), { mutateOptions: s, setMutateOptions: c } = i, [u, g] = _(!1), b = ut(i.data), v = i.error, x = i.eventListeners, F = { store: i.store, pageSize: -1 }, { data: z } = ve(F), L = z, X = Z(null), h = e.lookupOptions || {}, m = h.idAttribute || "id", p = h.displayAttribute || "name", y = e.showSelectedOnly && e.readonly, D = De(m) ? (l) => we(m, l) : (l) => l[m], C = De(p) ? (l) => we(p, l) : (l) => l[p];
  he(a, () => ({
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
    setValue(l, S = !1) {
      i.setData(l, S);
    },
    setVisible(l) {
      c((S) => ({ ...S, visible: l }));
    },
    setRequired(l) {
      c((S) => ({ ...S, required: l }));
    },
    setReadOnly(l) {
      c((S) => ({ ...S, readonly: l }));
    },
    setAttribute(l) {
      c((S) => ({ ...S, ...l }));
    },
    setOptions(l) {
    },
    getOptions() {
    }
  }), [i]);
  var N = et(e, i.data, e.label);
  e.readonly && (N.inputprops = { readOnly: !0 });
  function A(l, S) {
    const T = ut(i.data);
    var q = T.indexOf(l);
    S ? q < 0 && T.push(l) : q >= 0 && T.splice(q, 1), x.onValueChange(T.toString());
  }
  var I = {
    onBlur: x.onBlur,
    onFocus: x.onFocus,
    onChange: (l) => {
      A(l.target.value, l.target.checked);
    }
  };
  const V = (l) => {
    const S = l.toString();
    return b.includes(S);
  }, Q = (l) => {
    const S = l.target.checked;
    g(S);
    var T = [];
    S && L.map((q) => {
      T.push(D(q));
    }), x.onValueChange(T.toString());
  };
  return /* @__PURE__ */ r("div", { className: e.className, children: s.visible && /* @__PURE__ */ P(
    Ge,
    {
      label: tt(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: [
        /* @__PURE__ */ r("div", { children: e.hideSelectAll ? /* @__PURE__ */ r(ye, {}) : /* @__PURE__ */ r(
          st,
          {
            control: /* @__PURE__ */ r(lt, { onChange: Q }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ P(
          Ke,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: v.status,
            ...N,
            children: [
              L ? L.filter((l) => y ? V(D(l)) : !0).map((l) => /* @__PURE__ */ r(
                st,
                {
                  value: D(l),
                  control: /* @__PURE__ */ r(
                    lt,
                    {
                      ...I,
                      checked: V(D(l)),
                      disabled: e.readonly
                    }
                  ),
                  label: C(l)
                },
                D(l)
              )) : /* @__PURE__ */ r("div", { children: "No options provided" }),
              /* @__PURE__ */ r(je, { className: "form-error-text", children: v.message })
            ]
          }
        )
      ]
    }
  ) });
}), Fn = dn(100), Mn = oe(function(e, n) {
  const o = Se(Pe), a = n || Z(null), i = Z(null), s = Z(0), [c, u] = _([]), [g, b] = _(""), [v, x] = _(!1), w = o(e, "serverlookup", a), F = e.store || w.store, z = e.lookupOptions || {}, L = z.idAttribute || "id", X = z.displayAttribute || "name", h = X, m = {
    store: F,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: h,
    initialFetch: !1
  }, p = ve(m), y = w.eventListeners, D = w.error, { mutateOptions: C, setMutateOptions: N } = w, A = w.data, I = v && c.length < (A ? 2 : 1), { setQueryFilter: V, setEndPointOptions: Q, setQuickSearch: l, totalRecords: S, refreshData: T } = p, q = p.data, G = De(L) ? (f) => we(L, f) : (f) => f == null ? void 0 : f[L], K = De(X) ? (f) => we(X, f) : (f) => f == null ? void 0 : f[X];
  ae(() => {
    var f = A != "" ? A : void 0;
    f && u([f]);
  }, [w.data]), ae(() => {
    const f = q ? [...q] : [], M = A != "" ? A : void 0, J = G(M), be = K(M);
    f && J && be && !O(f, J) && f.unshift(M), u(f), s.current < S && (s.current = S);
  }, [q, S]), ae(() => {
    St(Y);
  }, [g]), ae(() => {
    Fn(Y);
  }, [v]);
  function Y() {
    v && (g.length > 0 && g != K(A) ? l("*" + g + "*") : q ? l(null) : T());
  }
  var R = {
    onBlur: y.onBlur,
    onFocus: y.onFocus,
    onChange: (f, M) => {
      B(M);
    },
    onInputChange: (f, M) => (b(M), !0)
  };
  const B = (f) => {
    y.onValueChange(f);
  }, d = (f) => typeof f == "object" ? K(f) + "" : (console.log(f), "");
  function O(f, M) {
    return f.find((J) => {
      if (G(J) == M)
        return J;
    });
  }
  he(a, () => ({
    focus() {
      i.current.focus();
    },
    isValid() {
      return !D.status;
    },
    clear() {
      e.multiple ? w.setData([], !0) : w.setData(void 0, !0);
    },
    getValue() {
      return w.getData();
    },
    setValue(f, M = !1) {
      w.setData(f, M);
    },
    setVisible(f) {
      N((M) => ({ ...M, visible: f }));
    },
    setRequired(f) {
      N((M) => ({ ...M, required: f }));
    },
    setReadOnly(f) {
      N((M) => ({ ...M, readonly: f }));
    },
    setAttribute(f) {
      N((M) => ({ ...M, ...f }));
    },
    setFilter(f) {
      V(f);
    },
    resetFilter() {
      V({});
    },
    setEndPointOptions(f) {
      Q(f);
    },
    getCurrentData: () => A,
    refresh: () => {
      T();
    },
    addFilter(f, M) {
      V((J) => (J[f] = M, { ...J }));
    },
    setDefaultFilter(f) {
    },
    setSortOptions(f) {
    }
  }), [w, V]);
  var H = et(e, A, e.label);
  C.readonly && (H.inputProps = { readOnly: !0 });
  const me = (f, M) => f instanceof Array ? f.some((J) => G(J) == G(M)) : G(f) == G(M);
  return /* @__PURE__ */ r(
    Ge,
    {
      label: tt(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ P(Ke, { fullWidth: !0, error: D.status, children: [
        /* @__PURE__ */ r(
          bt,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: e.multiple,
            readOnly: e.readonly,
            renderOption: e.renderOption,
            isOptionEqualToValue: me,
            filterOptions: (f) => f,
            renderInput: (f) => /* @__PURE__ */ r(
              xe,
              {
                ...f,
                inputRef: (M) => {
                  i.current = M;
                },
                variant: e.variant || "standard",
                label: e.label,
                autoFocus: e.autoFocus,
                required: e.required,
                InputProps: {
                  ...f.InputProps,
                  endAdornment: /* @__PURE__ */ P(ye, { children: [
                    I ? /* @__PURE__ */ r(Ct, { color: "inherit", size: 18 }) : null,
                    f.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: d,
            ...H,
            options: c,
            open: v,
            onClose: () => {
              x(!1);
            },
            onOpen: (f) => {
              x(!0);
            },
            ...R
          }
        ),
        /* @__PURE__ */ r(je, { className: "form-error-text", children: D.message })
      ] })
    }
  );
}), kn = oe(function(e, n) {
  const o = Se(Pe), a = n || Z(null), i = Z(null), s = Z(0), [c, u] = _([]), [g, b] = _(""), [v, x] = _(!1), w = o(e, "autoComplete", a), F = e.store || w.store, L = (e.lookupOptions || {}).attribute || "name", X = L, h = {
    store: F,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: X,
    initialFetch: !1
  }, m = ve(h), p = w.eventListeners, y = w.error, { mutateOptions: D, setMutateOptions: C } = w, N = w.data, A = v && c.length < (N ? 2 : 1), { setQueryFilter: I, setEndPointOptions: V, setQuickSearch: Q, totalRecords: l, refreshData: S } = m, T = m.data, q = De(L) ? (d) => we(L, d) : (d) => d == null ? void 0 : d[L];
  ae(() => {
    var d = N != "" ? N : void 0;
    d && u([d]);
  }, [w.data]), ae(() => {
    const O = (T ? [...T] : []).map((me) => q(me)), H = N != "" ? N : void 0;
    O && H && !R(O, H) && O.unshift(H), u(O), s.current < l && (s.current = l);
  }, [T, l]), ae(() => {
    St(G);
  }, [g, v]);
  function G() {
    v && (g.length > 0 && g != N ? Q("*" + g + "*") : T ? Q(null) : S());
  }
  var K = {
    onBlur: (d) => {
      Y(g), p.onBlur(g);
    },
    onFocus: p.onFocus,
    onChange: (d, O) => {
      Y(O);
    },
    onInputChange: (d, O) => (b(O), !0)
  };
  const Y = (d) => {
    p.onValueChange(d);
  };
  function R(d, O) {
    return d.find((H) => {
      if (H == O)
        return H;
    });
  }
  he(a, () => ({
    focus() {
      i.current.focus();
    },
    isValid() {
      return !y.status;
    },
    clear() {
      w.setData(void 0, !0);
    },
    getValue() {
      return w.getData();
    },
    setValue(d, O = !1) {
      w.setData(d, O);
    },
    setVisible(d) {
      C((O) => ({ ...O, visible: d }));
    },
    setRequired(d) {
      C((O) => ({ ...O, required: d }));
    },
    setReadOnly(d) {
      C((O) => ({ ...O, readonly: d }));
    },
    setAttribute(d) {
      C((O) => ({ ...O, ...d }));
    },
    setFilter(d) {
      I(d);
    },
    resetFilter() {
      I({});
    },
    setEndPointOptions(d) {
      V(d);
    },
    getCurrentData: () => N,
    refresh: () => {
      S();
    },
    addFilter(d, O) {
      I((H) => (H[d] = O, { ...H }));
    },
    setDefaultFilter(d) {
    },
    setSortOptions(d) {
    }
  }), [w, I]);
  var B = et(e, N, e.label);
  return D.readonly && (B.inputProps = { readOnly: !0 }), /* @__PURE__ */ r(
    Ge,
    {
      label: tt(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ P(Ke, { fullWidth: !0, error: y.status, children: [
        /* @__PURE__ */ r(
          bt,
          {
            freeSolo: !0,
            autoSelect: !0,
            readOnly: e.readonly,
            renderOption: e.renderOption,
            filterOptions: (d) => d,
            renderInput: (d) => /* @__PURE__ */ r(
              xe,
              {
                ...d,
                inputRef: (O) => {
                  i.current = O;
                },
                variant: e.variant || "standard",
                label: e.label,
                autoFocus: e.autoFocus,
                required: e.required,
                ...B,
                InputProps: {
                  ...d.InputProps,
                  endAdornment: /* @__PURE__ */ P(ye, { children: [
                    A ? /* @__PURE__ */ r(Ct, { color: "inherit", size: 18 }) : null,
                    d.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...B,
            options: c,
            open: v,
            onClose: () => {
              x(!1);
            },
            onOpen: (d) => {
              x(!0);
            },
            ...K
          }
        ),
        /* @__PURE__ */ r(je, { className: "form-error-text", children: y.message })
      ] })
    }
  );
}), Rn = (t) => {
  const { fieldDef: e } = t;
  return /* @__PURE__ */ P("div", { children: [
    "invalid type " + e.type,
    " "
  ] });
}, U = (t, e) => {
  const n = t.fieldDef;
  return /* @__PURE__ */ r(
    e,
    {
      ...n,
      label: t.title
    },
    n.title + n.attribute
  );
}, Rt = (t, e, n) => {
  const { type: o } = t, a = { fieldDef: t, title: n };
  switch (o) {
    case "string":
      return U(a, Jt);
    case "radio":
      return U(a, jt);
    case "select":
      return U(a, it);
    case "date":
      return U(a, $t);
    case "datetime":
      return U(a, Kt);
    case "checkbox":
      return U(a, en);
    case "serverlookup":
      return U(a, Mn);
    case "textarea":
      return U(a, Zt);
    case "switch":
      return U(a, tn);
    case "iosswitch":
      return U(a, fn);
    case "password":
      return U(a, nn);
    case "float":
    case "number":
    case "numbersOnly":
      return U(a, rn);
    case "integer":
      return U(a, mn);
    case "multiSelect":
      return U(a, it);
    case "dateRange":
      return U(a, hn);
    case "autoComplete":
      return U(a, kn);
    default:
      return Rn(a);
  }
}, Tn = oe(function(e, n) {
  var b;
  const { formLayout: o, context: a } = e, { formData: i } = a, s = o.Container;
  Z({});
  const c = vt(() => (v) => Rt(v), [i.data]);
  var u = ((b = o.options) == null ? void 0 : b.columns) || 1, g = { columns: u };
  return s ? /* @__PURE__ */ r("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: o.fields.map((v, x) => /* @__PURE__ */ r(
    s,
    {
      index: x,
      field: v,
      label: v.title,
      options: g,
      children: c(v)
    },
    v.attribute + v.name + v.type
  )) }) : /* @__PURE__ */ r("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: o.fields.map((v, x) => c(v)) });
}), Tt = (t) => {
  const { layout: e, context: n } = t;
  var o = e.Renderer || Tn, a = e.Container || Dt;
  const i = (s) => /* @__PURE__ */ r(
    o,
    {
      context: n,
      formLayout: s
    }
  );
  return /* @__PURE__ */ r(
    a,
    {
      hideTitle: e.hideTitle,
      title: e.title,
      name: e.name,
      children: /* @__PURE__ */ r(gn, { columns: e.columns, children: i(e.formLayout) })
    }
  );
};
var Le = { exports: {} }, Et = {};
function Lt(t) {
  var e, n, o = "";
  if (typeof t == "string" || typeof t == "number")
    o += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = Lt(t[e])) && (o && (o += " "), o += n);
    else
      for (e in t)
        t[e] && (o && (o += " "), o += e);
  return o;
}
function ft() {
  for (var t, e, n = 0, o = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = Lt(t)) && (o && (o += " "), o += e);
  return o;
}
const En = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: ft,
  default: ft
}, Symbol.toStringTag, { value: "Module" })), Ln = /* @__PURE__ */ Cn(En);
var W = {}, ce = {};
Object.defineProperty(ce, "__esModule", {
  value: !0
});
ce.dontSetMe = In;
ce.findInArray = An;
ce.int = Bn;
ce.isFunction = _n;
ce.isNum = Vn;
function An(t, e) {
  for (let n = 0, o = t.length; n < o; n++)
    if (e.apply(e, [t[n], n, t]))
      return t[n];
}
function _n(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Function]";
}
function Vn(t) {
  return typeof t == "number" && !isNaN(t);
}
function Bn(t) {
  return parseInt(t, 10);
}
function In(t, e, n) {
  if (t[e])
    return new Error("Invalid prop ".concat(e, " passed to ").concat(n, " - do not set this, set it on the child."));
}
var ge = {};
Object.defineProperty(ge, "__esModule", {
  value: !0
});
ge.browserPrefixToKey = _t;
ge.browserPrefixToStyle = zn;
ge.default = void 0;
ge.getPrefix = At;
const qe = ["Moz", "Webkit", "O", "ms"];
function At() {
  var t;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const n = (t = window.document) === null || t === void 0 || (t = t.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!n || e in n)
    return "";
  for (let o = 0; o < qe.length; o++)
    if (_t(e, qe[o]) in n)
      return qe[o];
  return "";
}
function _t(t, e) {
  return e ? "".concat(e).concat(Xn(t)) : t;
}
function zn(t, e) {
  return e ? "-".concat(e.toLowerCase(), "-").concat(t) : t;
}
function Xn(t) {
  let e = "", n = !0;
  for (let o = 0; o < t.length; o++)
    n ? (e += t[o].toUpperCase(), n = !1) : t[o] === "-" ? n = !0 : e += t[o];
  return e;
}
ge.default = At();
Object.defineProperty(W, "__esModule", {
  value: !0
});
W.addClassName = It;
W.addEvent = qn;
W.addUserSelectStyles = tr;
W.createCSSTransform = jn;
W.createSVGTransform = Zn;
W.getTouch = Jn;
W.getTouchIdentifier = er;
W.getTranslation = nt;
W.innerHeight = Un;
W.innerWidth = $n;
W.matchesSelector = Bt;
W.matchesSelectorAndParentsTo = Hn;
W.offsetXYFromParent = Kn;
W.outerHeight = Yn;
W.outerWidth = Gn;
W.removeClassName = zt;
W.removeEvent = Qn;
W.removeUserSelectStyles = nr;
var re = ce, ht = Wn(ge);
function Vt(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Vt = function(o) {
    return o ? n : e;
  })(t);
}
function Wn(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var n = Vt(e);
  if (n && n.has(t))
    return n.get(t);
  var o = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(t, i)) {
      var s = a ? Object.getOwnPropertyDescriptor(t, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = t[i];
    }
  return o.default = t, n && n.set(t, o), o;
}
let Me = "";
function Bt(t, e) {
  return Me || (Me = (0, re.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, re.isFunction)(t[n]);
  })), (0, re.isFunction)(t[Me]) ? t[Me](e) : !1;
}
function Hn(t, e, n) {
  let o = t;
  do {
    if (Bt(o, e))
      return !0;
    if (o === n)
      return !1;
    o = o.parentNode;
  } while (o);
  return !1;
}
function qn(t, e, n, o) {
  if (!t)
    return;
  const a = {
    capture: !0,
    ...o
  };
  t.addEventListener ? t.addEventListener(e, n, a) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n;
}
function Qn(t, e, n, o) {
  if (!t)
    return;
  const a = {
    capture: !0,
    ...o
  };
  t.removeEventListener ? t.removeEventListener(e, n, a) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null;
}
function Yn(t) {
  let e = t.clientHeight;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e += (0, re.int)(n.borderTopWidth), e += (0, re.int)(n.borderBottomWidth), e;
}
function Gn(t) {
  let e = t.clientWidth;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e += (0, re.int)(n.borderLeftWidth), e += (0, re.int)(n.borderRightWidth), e;
}
function Un(t) {
  let e = t.clientHeight;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e -= (0, re.int)(n.paddingTop), e -= (0, re.int)(n.paddingBottom), e;
}
function $n(t) {
  let e = t.clientWidth;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e -= (0, re.int)(n.paddingLeft), e -= (0, re.int)(n.paddingRight), e;
}
function Kn(t, e, n) {
  const a = e === e.ownerDocument.body ? {
    left: 0,
    top: 0
  } : e.getBoundingClientRect(), i = (t.clientX + e.scrollLeft - a.left) / n, s = (t.clientY + e.scrollTop - a.top) / n;
  return {
    x: i,
    y: s
  };
}
function jn(t, e) {
  const n = nt(t, e, "px");
  return {
    [(0, ht.browserPrefixToKey)("transform", ht.default)]: n
  };
}
function Zn(t, e) {
  return nt(t, e, "");
}
function nt(t, e, n) {
  let {
    x: o,
    y: a
  } = t, i = "translate(".concat(o).concat(n, ",").concat(a).concat(n, ")");
  if (e) {
    const s = "".concat(typeof e.x == "string" ? e.x : e.x + n), c = "".concat(typeof e.y == "string" ? e.y : e.y + n);
    i = "translate(".concat(s, ", ").concat(c, ")") + i;
  }
  return i;
}
function Jn(t, e) {
  return t.targetTouches && (0, re.findInArray)(t.targetTouches, (n) => e === n.identifier) || t.changedTouches && (0, re.findInArray)(t.changedTouches, (n) => e === n.identifier);
}
function er(t) {
  if (t.targetTouches && t.targetTouches[0])
    return t.targetTouches[0].identifier;
  if (t.changedTouches && t.changedTouches[0])
    return t.changedTouches[0].identifier;
}
function tr(t) {
  if (!t)
    return;
  let e = t.getElementById("react-draggable-style-el");
  e || (e = t.createElement("style"), e.type = "text/css", e.id = "react-draggable-style-el", e.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, e.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, t.getElementsByTagName("head")[0].appendChild(e)), t.body && It(t.body, "react-draggable-transparent-selection");
}
function nr(t) {
  if (t)
    try {
      if (t.body && zt(t.body, "react-draggable-transparent-selection"), t.selection)
        t.selection.empty();
      else {
        const e = (t.defaultView || window).getSelection();
        e && e.type !== "Caret" && e.removeAllRanges();
      }
    } catch {
    }
}
function It(t, e) {
  t.classList ? t.classList.add(e) : t.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) || (t.className += " ".concat(e));
}
function zt(t, e) {
  t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"), "");
}
var de = {};
Object.defineProperty(de, "__esModule", {
  value: !0
});
de.canDragX = ar;
de.canDragY = ir;
de.createCoreData = lr;
de.createDraggableData = cr;
de.getBoundPosition = rr;
de.getControlPosition = sr;
de.snapToGrid = or;
var ne = ce, pe = W;
function rr(t, e, n) {
  if (!t.props.bounds)
    return [e, n];
  let {
    bounds: o
  } = t.props;
  o = typeof o == "string" ? o : dr(o);
  const a = rt(t);
  if (typeof o == "string") {
    const {
      ownerDocument: i
    } = a, s = i.defaultView;
    let c;
    if (o === "parent" ? c = a.parentNode : c = i.querySelector(o), !(c instanceof s.HTMLElement))
      throw new Error('Bounds selector "' + o + '" could not find an element.');
    const u = c, g = s.getComputedStyle(a), b = s.getComputedStyle(u);
    o = {
      left: -a.offsetLeft + (0, ne.int)(b.paddingLeft) + (0, ne.int)(g.marginLeft),
      top: -a.offsetTop + (0, ne.int)(b.paddingTop) + (0, ne.int)(g.marginTop),
      right: (0, pe.innerWidth)(u) - (0, pe.outerWidth)(a) - a.offsetLeft + (0, ne.int)(b.paddingRight) - (0, ne.int)(g.marginRight),
      bottom: (0, pe.innerHeight)(u) - (0, pe.outerHeight)(a) - a.offsetTop + (0, ne.int)(b.paddingBottom) - (0, ne.int)(g.marginBottom)
    };
  }
  return (0, ne.isNum)(o.right) && (e = Math.min(e, o.right)), (0, ne.isNum)(o.bottom) && (n = Math.min(n, o.bottom)), (0, ne.isNum)(o.left) && (e = Math.max(e, o.left)), (0, ne.isNum)(o.top) && (n = Math.max(n, o.top)), [e, n];
}
function or(t, e, n) {
  const o = Math.round(e / t[0]) * t[0], a = Math.round(n / t[1]) * t[1];
  return [o, a];
}
function ar(t) {
  return t.props.axis === "both" || t.props.axis === "x";
}
function ir(t) {
  return t.props.axis === "both" || t.props.axis === "y";
}
function sr(t, e, n) {
  const o = typeof e == "number" ? (0, pe.getTouch)(t, e) : null;
  if (typeof e == "number" && !o)
    return null;
  const a = rt(n), i = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, pe.offsetXYFromParent)(o || t, i, n.props.scale);
}
function lr(t, e, n) {
  const o = !(0, ne.isNum)(t.lastX), a = rt(t);
  return o ? {
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
function cr(t, e) {
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
function dr(t) {
  return {
    left: t.left,
    top: t.top,
    right: t.right,
    bottom: t.bottom
  };
}
function rt(t) {
  const e = t.findDOMNode();
  if (!e)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return e;
}
var Ae = {}, _e = {};
Object.defineProperty(_e, "__esModule", {
  value: !0
});
_e.default = ur;
function ur() {
}
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = void 0;
var Qe = hr(yt), ee = ot(Ft), fr = ot(Mt), $ = W, ue = de, Ye = ce, Ce = ot(_e);
function ot(t) {
  return t && t.__esModule ? t : { default: t };
}
function Xt(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Xt = function(o) {
    return o ? n : e;
  })(t);
}
function hr(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var n = Xt(e);
  if (n && n.has(t))
    return n.get(t);
  var o = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(t, i)) {
      var s = a ? Object.getOwnPropertyDescriptor(t, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = t[i];
    }
  return o.default = t, n && n.set(t, o), o;
}
function j(t, e, n) {
  return e = mr(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function mr(t) {
  var e = gr(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function gr(t, e) {
  if (typeof t != "object" || t === null)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e || "default");
    if (typeof o != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
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
let fe = se.mouse, Ve = class extends Qe.Component {
  constructor() {
    super(...arguments), j(this, "dragging", !1), j(this, "lastX", NaN), j(this, "lastY", NaN), j(this, "touchIdentifier", null), j(this, "mounted", !1), j(this, "handleDragStart", (e) => {
      if (this.props.onMouseDown(e), !this.props.allowAnyClick && typeof e.button == "number" && e.button !== 0)
        return !1;
      const n = this.findDOMNode();
      if (!n || !n.ownerDocument || !n.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      const {
        ownerDocument: o
      } = n;
      if (this.props.disabled || !(e.target instanceof o.defaultView.Node) || this.props.handle && !(0, $.matchesSelectorAndParentsTo)(e.target, this.props.handle, n) || this.props.cancel && (0, $.matchesSelectorAndParentsTo)(e.target, this.props.cancel, n))
        return;
      e.type === "touchstart" && e.preventDefault();
      const a = (0, $.getTouchIdentifier)(e);
      this.touchIdentifier = a;
      const i = (0, ue.getControlPosition)(e, a, this);
      if (i == null)
        return;
      const {
        x: s,
        y: c
      } = i, u = (0, ue.createCoreData)(this, s, c);
      (0, Ce.default)("DraggableCore: handleDragStart: %j", u), (0, Ce.default)("calling", this.props.onStart), !(this.props.onStart(e, u) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, $.addUserSelectStyles)(o), this.dragging = !0, this.lastX = s, this.lastY = c, (0, $.addEvent)(o, fe.move, this.handleDrag), (0, $.addEvent)(o, fe.stop, this.handleDragStop));
    }), j(this, "handleDrag", (e) => {
      const n = (0, ue.getControlPosition)(e, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: o,
        y: a
      } = n;
      if (Array.isArray(this.props.grid)) {
        let c = o - this.lastX, u = a - this.lastY;
        if ([c, u] = (0, ue.snapToGrid)(this.props.grid, c, u), !c && !u)
          return;
        o = this.lastX + c, a = this.lastY + u;
      }
      const i = (0, ue.createCoreData)(this, o, a);
      if ((0, Ce.default)("DraggableCore: handleDrag: %j", i), this.props.onDrag(e, i) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const u = document.createEvent("MouseEvents");
          u.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(u);
        }
        return;
      }
      this.lastX = o, this.lastY = a;
    }), j(this, "handleDragStop", (e) => {
      if (!this.dragging)
        return;
      const n = (0, ue.getControlPosition)(e, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: o,
        y: a
      } = n;
      if (Array.isArray(this.props.grid)) {
        let u = o - this.lastX || 0, g = a - this.lastY || 0;
        [u, g] = (0, ue.snapToGrid)(this.props.grid, u, g), o = this.lastX + u, a = this.lastY + g;
      }
      const i = (0, ue.createCoreData)(this, o, a);
      if (this.props.onStop(e, i) === !1 || this.mounted === !1)
        return !1;
      const c = this.findDOMNode();
      c && this.props.enableUserSelectHack && (0, $.removeUserSelectStyles)(c.ownerDocument), (0, Ce.default)("DraggableCore: handleDragStop: %j", i), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, c && ((0, Ce.default)("DraggableCore: Removing handlers"), (0, $.removeEvent)(c.ownerDocument, fe.move, this.handleDrag), (0, $.removeEvent)(c.ownerDocument, fe.stop, this.handleDragStop));
    }), j(this, "onMouseDown", (e) => (fe = se.mouse, this.handleDragStart(e))), j(this, "onMouseUp", (e) => (fe = se.mouse, this.handleDragStop(e))), j(this, "onTouchStart", (e) => (fe = se.touch, this.handleDragStart(e))), j(this, "onTouchEnd", (e) => (fe = se.touch, this.handleDragStop(e)));
  }
  componentDidMount() {
    this.mounted = !0;
    const e = this.findDOMNode();
    e && (0, $.addEvent)(e, se.touch.start, this.onTouchStart, {
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
      (0, $.removeEvent)(n, se.mouse.move, this.handleDrag), (0, $.removeEvent)(n, se.touch.move, this.handleDrag), (0, $.removeEvent)(n, se.mouse.stop, this.handleDragStop), (0, $.removeEvent)(n, se.touch.stop, this.handleDragStop), (0, $.removeEvent)(e, se.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, $.removeUserSelectStyles)(n);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var e, n;
    return (e = this.props) !== null && e !== void 0 && e.nodeRef ? (n = this.props) === null || n === void 0 || (n = n.nodeRef) === null || n === void 0 ? void 0 : n.current : fr.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ Qe.cloneElement(Qe.Children.only(this.props.children), {
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
Ae.default = Ve;
j(Ve, "displayName", "DraggableCore");
j(Ve, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: ee.default.bool,
  children: ee.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: ee.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: ee.default.bool,
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
  grid: ee.default.arrayOf(ee.default.number),
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
  handle: ee.default.string,
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
  cancel: ee.default.string,
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
  nodeRef: ee.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: ee.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: ee.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: ee.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: ee.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: ee.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: Ye.dontSetMe,
  style: Ye.dontSetMe,
  transform: Ye.dontSetMe
});
j(Ve, "defaultProps", {
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
      return u.default;
    }
  }), t.default = void 0;
  var e = x(yt), n = b(Ft), o = b(Mt), a = b(Ln), i = W, s = de, c = ce, u = b(Ae), g = b(_e);
  function b(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function v(h) {
    if (typeof WeakMap != "function")
      return null;
    var m = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap();
    return (v = function(y) {
      return y ? p : m;
    })(h);
  }
  function x(h, m) {
    if (!m && h && h.__esModule)
      return h;
    if (h === null || typeof h != "object" && typeof h != "function")
      return { default: h };
    var p = v(m);
    if (p && p.has(h))
      return p.get(h);
    var y = {}, D = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var C in h)
      if (C !== "default" && Object.prototype.hasOwnProperty.call(h, C)) {
        var N = D ? Object.getOwnPropertyDescriptor(h, C) : null;
        N && (N.get || N.set) ? Object.defineProperty(y, C, N) : y[C] = h[C];
      }
    return y.default = h, p && p.set(h, y), y;
  }
  function w() {
    return w = Object.assign ? Object.assign.bind() : function(h) {
      for (var m = 1; m < arguments.length; m++) {
        var p = arguments[m];
        for (var y in p)
          Object.prototype.hasOwnProperty.call(p, y) && (h[y] = p[y]);
      }
      return h;
    }, w.apply(this, arguments);
  }
  function F(h, m, p) {
    return m = z(m), m in h ? Object.defineProperty(h, m, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : h[m] = p, h;
  }
  function z(h) {
    var m = L(h, "string");
    return typeof m == "symbol" ? m : String(m);
  }
  function L(h, m) {
    if (typeof h != "object" || h === null)
      return h;
    var p = h[Symbol.toPrimitive];
    if (p !== void 0) {
      var y = p.call(h, m || "default");
      if (typeof y != "object")
        return y;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (m === "string" ? String : Number)(h);
  }
  class X extends e.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(m, p) {
      let {
        position: y
      } = m, {
        prevPropsPosition: D
      } = p;
      return y && (!D || y.x !== D.x || y.y !== D.y) ? ((0, g.default)("Draggable: getDerivedStateFromProps %j", {
        position: y,
        prevPropsPosition: D
      }), {
        x: y.x,
        y: y.y,
        prevPropsPosition: {
          ...y
        }
      }) : null;
    }
    constructor(m) {
      super(m), F(this, "onDragStart", (p, y) => {
        if ((0, g.default)("Draggable: onDragStart: %j", y), this.props.onStart(p, (0, s.createDraggableData)(this, y)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), F(this, "onDrag", (p, y) => {
        if (!this.state.dragging)
          return !1;
        (0, g.default)("Draggable: onDrag: %j", y);
        const D = (0, s.createDraggableData)(this, y), C = {
          x: D.x,
          y: D.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: A,
            y: I
          } = C;
          C.x += this.state.slackX, C.y += this.state.slackY;
          const [V, Q] = (0, s.getBoundPosition)(this, C.x, C.y);
          C.x = V, C.y = Q, C.slackX = this.state.slackX + (A - C.x), C.slackY = this.state.slackY + (I - C.y), D.x = C.x, D.y = C.y, D.deltaX = C.x - this.state.x, D.deltaY = C.y - this.state.y;
        }
        if (this.props.onDrag(p, D) === !1)
          return !1;
        this.setState(C);
      }), F(this, "onDragStop", (p, y) => {
        if (!this.state.dragging || this.props.onStop(p, (0, s.createDraggableData)(this, y)) === !1)
          return !1;
        (0, g.default)("Draggable: onDragStop: %j", y);
        const C = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: A,
            y: I
          } = this.props.position;
          C.x = A, C.y = I;
        }
        this.setState(C);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: m.position ? m.position.x : m.defaultPosition.x,
        y: m.position ? m.position.y : m.defaultPosition.y,
        prevPropsPosition: {
          ...m.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, m.position && !(m.onDrag || m.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
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
      var m, p;
      return (m = (p = this.props) === null || p === void 0 || (p = p.nodeRef) === null || p === void 0 ? void 0 : p.current) !== null && m !== void 0 ? m : o.default.findDOMNode(this);
    }
    render() {
      const {
        axis: m,
        bounds: p,
        children: y,
        defaultPosition: D,
        defaultClassName: C,
        defaultClassNameDragging: N,
        defaultClassNameDragged: A,
        position: I,
        positionOffset: V,
        scale: Q,
        ...l
      } = this.props;
      let S = {}, T = null;
      const G = !!!I || this.state.dragging, K = I || D, Y = {
        // Set left if horizontal drag is enabled
        x: (0, s.canDragX)(this) && G ? this.state.x : K.x,
        // Set top if vertical drag is enabled
        y: (0, s.canDragY)(this) && G ? this.state.y : K.y
      };
      this.state.isElementSVG ? T = (0, i.createSVGTransform)(Y, V) : S = (0, i.createCSSTransform)(Y, V);
      const R = (0, a.default)(y.props.className || "", C, {
        [N]: this.state.dragging,
        [A]: this.state.dragged
      });
      return /* @__PURE__ */ e.createElement(u.default, w({}, l, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ e.cloneElement(e.Children.only(y), {
        className: R,
        style: {
          ...y.props.style,
          ...S
        },
        transform: T
      }));
    }
  }
  t.default = X, F(X, "displayName", "Draggable"), F(X, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ...u.default.propTypes,
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
  }), F(X, "defaultProps", {
    ...u.default.defaultProps,
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
})(Et);
const {
  default: Wt,
  DraggableCore: pr
} = Et;
Le.exports = Wt;
Le.exports.default = Wt;
Le.exports.DraggableCore = pr;
var yr = Le.exports;
const vr = /* @__PURE__ */ Sn(yr);
const br = (t) => {
  const { formLayout: e } = t;
  var n = "palmyra-form-field-container";
  const o = e.options;
  if (o && o.columns)
    switch (o.columns) {
      case 2:
        return n + " palmyra-form-field-container-2column";
      case 3:
        return n + " palmyra-form-field-container-3column";
      case 4:
        return n + " palmyra-form-field-container-4column";
    }
  return n;
}, Cr = oe(function(e, n) {
  const { formLayout: o, context: a } = e, { formData: i } = a, s = Z({}), c = br(e), u = "palmyra-form-field-data", g = vt(() => (b) => Rt(b, s, b.label), [i.data]);
  return /* @__PURE__ */ r("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: o.fields.map((b, v) => /* @__PURE__ */ r("div", { className: c, children: /* @__PURE__ */ r("div", { className: u, children: g(b) }) }, b.attribute)) });
});
function Ht(t) {
  return Ne({ tag: "svg", attr: { viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" } }, { tag: "path", attr: { d: "M12.713 19.762l-3.713 1.238v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v1" } }, { tag: "path", attr: { d: "M16 22l5 -5" } }, { tag: "path", attr: { d: "M21 21.5v-4.5h-4.5" } }] })(t);
}
function Sr(t) {
  return Ne({ tag: "svg", attr: { viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" } }, { tag: "path", attr: { d: "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" } }, { tag: "path", attr: { d: "M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" } }] })(t);
}
function Dr(t) {
  return Ne({ tag: "svg", attr: { viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" } }, { tag: "path", attr: { d: "M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" } }, { tag: "path", attr: { d: "M3 10h18" } }, { tag: "path", attr: { d: "M10 3v18" } }, { tag: "path", attr: { d: "M16 19h6" } }, { tag: "path", attr: { d: "M19 16l3 3l-3 3" } }] })(t);
}
function wr(t) {
  return /* @__PURE__ */ r(
    vr,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ r(an, { ...t })
    }
  );
}
const qt = ({ columns: t, isOpen: e, onClose: n, setFilter: o, defaultFilter: a = {} }) => {
  var { getFieldManager: i, getFilterData: s } = Dn(a);
  const c = () => {
    o({});
  }, u = () => {
    var x = s();
    o && o(x);
  }, g = () => {
    n();
  }, b = (x) => {
    x.keyCode === 27 && g();
  }, v = bn(t);
  return /* @__PURE__ */ r("div", { className: "grid-filter-container", children: /* @__PURE__ */ r(
    on,
    {
      open: e,
      onClose: g,
      PaperComponent: wr,
      onKeyDown: b,
      PaperProps: { sx: { minWidth: "500px", borderRadius: "10px" } },
      children: /* @__PURE__ */ r(ke, { onClickAway: n, children: /* @__PURE__ */ P("div", { children: [
        /* @__PURE__ */ P("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ r("div", { className: "grid-header-text-container", children: /* @__PURE__ */ r("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ r("div", { className: "grid-header-icon-container", onClick: g, children: /* @__PURE__ */ r("span", { className: "grid-header-icon", children: /* @__PURE__ */ r(pn, { className: "filter-cancel-icon" }) }) })
        ] }),
        /* @__PURE__ */ r("span", { className: "filter-header-border" }),
        /* @__PURE__ */ r("div", { className: "grid-filter-content", children: /* @__PURE__ */ r(Pe.Provider, { value: i, children: /* @__PURE__ */ r(
          Tt,
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
              Renderer: Cr
            }
          }
        ) }) }),
        /* @__PURE__ */ P("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ P(le, { className: "secondary-filled-button", disableRipple: !0, onClick: c, children: [
            /* @__PURE__ */ r(Sr, { className: "button-icon" }),
            "Reset"
          ] }),
          /* @__PURE__ */ P(le, { className: "filled-button", disableRipple: !0, onClick: u, children: [
            /* @__PURE__ */ r(Ht, { className: "button-icon" }),
            "Filter"
          ] })
        ] })
      ] }) })
    }
  ) });
};
function Pr(t) {
  return Ne({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" } }] })(t);
}
function xr(t) {
  return Ne({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M156,208a8,8,0,0,1-8,8H120a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v48h20A8,8,0,0,1,156,208ZM92.65,145.49a8,8,0,0,0-11.16,1.86L68,166.24,54.51,147.35a8,8,0,1,0-13,9.3L58.17,180,41.49,203.35a8,8,0,0,0,13,9.3L68,193.76l13.49,18.89a8,8,0,0,0,13-9.3L77.83,180l16.68-23.35A8,8,0,0,0,92.65,145.49Zm98.94,25.82c-4-1.16-8.14-2.35-10.45-3.84-1.25-.82-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.72,19.82-.56a8,8,0,0,0,4.07-15.48c-2.11-.55-21-5.22-32.83,2.76a20.58,20.58,0,0,0-8.95,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.33-2.15,3.93-4.6,3.06-15.16,1.55-19.54.35A8,8,0,0,0,173.93,214a60.63,60.63,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.81,20.81,0,0,0,9.18-15.23C218,179,201.48,174.17,191.59,171.31ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,1,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.68L160,51.31Z" } }] })(t);
}
const Nr = oe(function(e, n) {
  const { columns: o, children: a, EmptyChild: i, onRowClick: s, quickSearch: c } = e, u = i || Pt, g = e.customizer || Ot, b = e.customButton, v = e.gridTitle, [x, w] = _(!1), [F, z] = _(!1), [L, X] = _("standard"), [h, m] = _(!1), [p, y] = _(""), {
    setQueryFilter: D,
    setQuickSearch: C,
    setSortColumns: N,
    setEndPointOptions: A,
    gotoPage: I,
    setPageSize: V,
    getPageNo: Q,
    refreshData: l,
    setQueryLimit: S,
    getQueryLimit: T,
    data: q,
    totalRecords: G,
    queryLimit: K,
    pageSizeOptions: Y,
    filter: R
  } = ve(e), B = n || Z(null);
  he(B, () => ({
    setFilter: (E) => {
      D(E);
    },
    refresh: () => {
      l();
    },
    resetFilter() {
      D({});
    },
    setEndPointOptions: (E) => {
      A(E);
    },
    addFilter: (E, ie) => {
      D((at) => (at[E] = ie, { ...at }));
    },
    setQueryLimit: (E) => {
      S(E);
    },
    getQueryLimit: () => T(),
    setSortOptions(E) {
      N(E);
    },
    getCurrentData: () => q
  }), [T]);
  const d = (E, ie) => {
    I(ie);
  }, O = wt(o, g), H = (E) => {
    X(E);
  }, me = () => {
    w(!x);
  }, f = () => L === "compact" ? { padding: "3px" } : L === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, M = () => L === "compact" ? { padding: "3px" } : L === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, J = () => {
    var E;
    switch (L) {
      case "compact":
        E = /* @__PURE__ */ r(Te, { className: "density-icon" });
        break;
      case "comfortable":
        E = /* @__PURE__ */ r(Ee, { className: "density-icon" });
        break;
      default:
        E = /* @__PURE__ */ r(Re, { className: "grid-button-icon" });
        break;
    }
    return E;
  }, be = (E) => {
    const ie = E.target.value;
    y(ie), ie ? C(ie) : D({});
  }, Be = (E) => {
    s && s(E);
  }, Ie = (E) => {
    const ie = parseInt(E.target.value, 10);
    V(ie);
  }, ze = () => {
    z(!F);
  }, Xe = () => {
  }, We = () => {
  }, He = () => {
    e.onNewClick();
  }, k = 200, te = !!e.pageSize, Oe = !!c, Gt = {
    transform: x ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Ut = {
    transform: F ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  };
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ P("div", { children: [
    a,
    /* @__PURE__ */ P("div", { className: "grid-header", children: [
      /* @__PURE__ */ r("div", { className: "grid-header-right-content", children: /* @__PURE__ */ r("span", { className: "grid-header-right-content-text", children: v }) }),
      /* @__PURE__ */ P("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ r("div", { className: "grid-header-filter", children: Oe && /* @__PURE__ */ r(
          xe,
          {
            sx: { width: k },
            type: "text",
            value: p,
            onChange: be,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ r(Ze, { position: "end", children: /* @__PURE__ */ r($e, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ r(ke, { onClickAway: () => {
          w(!1);
        }, children: /* @__PURE__ */ P("div", { className: "grid-header-button grid-density-btn", onClick: me, children: [
          /* @__PURE__ */ P(le, { className: "grid-btn", disableRipple: !0, children: [
            J(),
            /* @__PURE__ */ r("span", { children: "Density" }),
            /* @__PURE__ */ r(ct, { style: Gt, className: "avathar-arrw-icon" })
          ] }),
          x && /* @__PURE__ */ r("div", { className: "density-dropdown-content", children: /* @__PURE__ */ P("ul", { children: [
            /* @__PURE__ */ P("li", { onClick: () => H("standard"), children: [
              /* @__PURE__ */ r(Re, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ P("li", { onClick: () => H("compact"), children: [
              /* @__PURE__ */ r(Te, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ P("li", { onClick: () => H("comfortable"), children: [
              /* @__PURE__ */ r(Ee, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        o.some((E) => E.searchable) && /* @__PURE__ */ P("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ P(le, { className: "grid-btn", disableRipple: !0, onClick: () => m(!0), children: [
            /* @__PURE__ */ r(Ht, { className: "grid-button-icon" }),
            /* @__PURE__ */ r("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ r(
            qt,
            {
              columns: o,
              setFilter: D,
              defaultFilter: R,
              isOpen: h,
              onClose: () => m(!1)
            }
          )
        ] }),
        /* @__PURE__ */ r(ke, { onClickAway: () => {
          z(!1);
        }, children: /* @__PURE__ */ P("div", { className: "grid-header-button grid-export-btn", onClick: ze, children: [
          /* @__PURE__ */ P(le, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ r(Dr, { className: "grid-button-icon" }),
            /* @__PURE__ */ r("span", { children: "Export" }),
            /* @__PURE__ */ r(ct, { style: Ut, className: "avathar-arrw-icon" })
          ] }),
          F && /* @__PURE__ */ r("div", { className: "density-dropdown-content", children: /* @__PURE__ */ P("ul", { children: [
            /* @__PURE__ */ P("li", { onClick: Xe, children: [
              /* @__PURE__ */ r(Pr, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ P("li", { onClick: We, children: [
              /* @__PURE__ */ r(xr, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        e.onNewClick ? /* @__PURE__ */ r("div", { className: "grid-header-button grid-add-btn", children: e.customAddButton ? /* @__PURE__ */ r("div", { onClick: He, children: e.customAddButton }) : /* @__PURE__ */ r("div", { onClick: He, children: /* @__PURE__ */ P(le, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ r(Nt, { className: "grid-button-icon" }),
          /* @__PURE__ */ r("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ r(ye, {}),
        b && b.map((E, ie) => /* @__PURE__ */ r("div", { className: "grid-custom-button", children: E }, ie))
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "grid-table", children: /* @__PURE__ */ r(
      xt,
      {
        columnDefs: O,
        EmptyChild: u,
        customizer: g,
        rowData: q,
        onRowClick: Be,
        onRowStyle: f,
        onHeaderStyle: M,
        onSortColumn: N
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "grid-footer", children: /* @__PURE__ */ r("div", { className: "grid-filter", children: te && /* @__PURE__ */ r(
      Je,
      {
        component: "div",
        count: G || 0,
        page: Q(),
        onPageChange: d,
        rowsPerPage: K.limit,
        rowsPerPageOptions: Y || [],
        onRowsPerPageChange: Ie
      }
    ) }) })
  ] }) });
}), Yo = oe(function(e, n) {
  const { children: o, EmptyChild: a, onRowClick: i, quickSearch: s } = e, c = e.columns, u = a || Pt, g = e.customizer || Ot, b = e.customButton, v = e.gridTitle, [x, w] = _(!1), [F, z] = _("standard"), [L, X] = _(!1), [h, m] = _(""), {
    setQueryFilter: p,
    setQuickSearch: y,
    setSortColumns: D,
    setEndPointOptions: C,
    gotoPage: N,
    setPageSize: A,
    getPageNo: I,
    refreshData: V,
    setQueryLimit: Q,
    getQueryLimit: l,
    data: S,
    totalRecords: T,
    queryLimit: q,
    pageSizeOptions: G,
    filter: K
  } = ve(e), [Y, R] = _(c(S)), B = n || Z(null);
  he(B, () => ({
    setFilter: (k) => {
      p(k);
    },
    refresh: () => {
      V();
    },
    resetFilter() {
      p({});
    },
    setEndPointOptions: (k) => {
      C(k);
    },
    addFilter: (k, te) => {
      p((Oe) => (Oe[k] = te, { ...Oe }));
    },
    setQueryLimit: (k) => {
      Q(k);
    },
    getQueryLimit: () => l(),
    setSortOptions(k) {
      D(k);
    },
    getCurrentData: () => S
  }), [l, Y]), ae(() => {
    R(c(S));
  }, [S]);
  const d = (k, te) => {
    N(te);
  }, O = wt(Y, g), H = (k) => {
    z(k);
  }, me = () => {
    w(!x);
  }, f = () => F === "compact" ? { padding: "3px" } : F === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, M = () => F === "compact" ? { padding: "3px" } : F === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, J = () => {
    var k;
    switch (F) {
      case "compact":
        k = /* @__PURE__ */ r(Te, { className: "density-icon" });
        break;
      case "comfortable":
        k = /* @__PURE__ */ r(Ee, { className: "density-icon" });
        break;
      default:
        k = /* @__PURE__ */ r(Re, { className: "grid-button-icon" });
        break;
    }
    return k;
  }, be = (k) => {
    const te = k.target.value;
    m(te), te ? y(te) : p({});
  }, Be = (k) => {
    i && i(k);
  }, Ie = (k) => {
    const te = parseInt(k.target.value, 10);
    A(te);
  }, ze = () => {
    console.info("Export Clicked");
  }, Xe = 200, We = !!e.pageSize;
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ P("div", { children: [
    o,
    /* @__PURE__ */ P("div", { className: "grid-header", children: [
      /* @__PURE__ */ r("div", { className: "grid-header-right-content", children: /* @__PURE__ */ r("span", { className: "grid-header-right-content-text", children: v }) }),
      /* @__PURE__ */ P("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ r("div", { className: "grid-header-filter", children: !!s && /* @__PURE__ */ r(
          xe,
          {
            sx: { width: Xe },
            type: "text",
            value: h,
            onChange: be,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ r(Ze, { position: "end", children: /* @__PURE__ */ r($e, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ r(ke, { onClickAway: () => {
          w(!1);
        }, children: /* @__PURE__ */ P("div", { className: "grid-header-button grid-density-btn", onClick: me, children: [
          /* @__PURE__ */ r(Fe, { title: "Density", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, children: J() }) }),
          x && /* @__PURE__ */ r("div", { className: "density-dropdown-content", children: /* @__PURE__ */ P("ul", { children: [
            /* @__PURE__ */ P("li", { onClick: () => H("standard"), children: [
              /* @__PURE__ */ r(Re, { className: "density-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ P("li", { onClick: () => H("compact"), children: [
              /* @__PURE__ */ r(Te, { className: "density-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ P("li", { onClick: () => H("comfortable"), children: [
              /* @__PURE__ */ r(Ee, { className: "density-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        Y.some((k) => k.searchable) && /* @__PURE__ */ P("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ r(Fe, { title: "Filter", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, onClick: () => X(!0), children: /* @__PURE__ */ r(yn, { className: "grid-button-icon" }) }) }),
          /* @__PURE__ */ r(
            qt,
            {
              columns: Y,
              setFilter: p,
              defaultFilter: K,
              isOpen: L,
              onClose: () => X(!1)
            }
          )
        ] }),
        /* @__PURE__ */ r("div", { className: "grid-header-button grid-export-btn", onClick: ze, children: /* @__PURE__ */ r(Fe, { title: "Export", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ r(vn, { className: "grid-button-icon" }) }) }) }),
        e.onNewClick ? /* @__PURE__ */ r("div", { className: "grid-header-button", onClick: () => {
          e.onNewClick();
        }, children: /* @__PURE__ */ r(Fe, { title: "New", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ r(Nt, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ r(ye, {}),
        b && b.map((k, te) => /* @__PURE__ */ r("div", { className: "grid-custom-button grid-export-btn", children: k }, te))
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "grid-table", children: /* @__PURE__ */ r(
      xt,
      {
        columnDefs: O,
        EmptyChild: u,
        customizer: g,
        rowData: S,
        onRowClick: Be,
        onRowStyle: f,
        onHeaderStyle: M,
        onSortColumn: D
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "grid-footer", children: /* @__PURE__ */ r("div", { className: "grid-filter", children: We && /* @__PURE__ */ r(
      Je,
      {
        component: "div",
        count: T || 0,
        page: I(),
        onPageChange: d,
        rowsPerPage: q.limit,
        rowsPerPageOptions: G || [],
        onRowsPerPageChange: Ie
      }
    ) }) })
  ] }) });
}), Go = oe(function(e, n) {
  const { columns: o, endPoint: a, storeFactory: i, layoutParams: s, pagination: c } = e, u = e.quickSearch || "", g = e.customButton, b = e.customAddButton, v = e.gridTitle, x = (F, z) => {
  };
  ae(() => {
    var F = dt.subscribe(e.topic, x);
    return () => {
      dt.unsubscribe(F);
    };
  }, [e.topic]);
  const w = {
    fields: o,
    pagination: c,
    quickSearch: u,
    storeOptions: {
      endPoint: a
    },
    actionOptions: e.actions
  };
  return /* @__PURE__ */ r(ye, { children: /* @__PURE__ */ r(Ue.Provider, { value: i, children: /* @__PURE__ */ r(
    Qt,
    {
      layout: w,
      context: s,
      customAddButton: b,
      onDataChange: e.onDataChange,
      gridTitle: v,
      defaultParams: e.defaultParams,
      customButton: g,
      customizer: e.customizer,
      ref: n
    }
  ) }) });
}), Or = oe(function(e, n) {
  const o = e.layout, [a, i] = _(o.fields), s = o.pagination ? o.pagination : [15], c = Se(Ue), u = Se(pt);
  var g = o.storeOptions || {}, b = {};
  un(b, g, u);
  const v = c.getGridStore(b, o.storeOptions.endPoint);
  ae(() => {
    g.hasLayout && v.queryLayout({}).then((F) => {
      i(F.columns);
    });
  }, []);
  const { onClick: x, onNewClick: w } = wn(o.actionOptions, u);
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    Nr,
    {
      columns: a,
      store: v,
      pageSize: s,
      onRowClick: x,
      onDataChange: e.onDataChange,
      gridTitle: e.gridTitle,
      customAddButton: e.customAddButton,
      onNewClick: w,
      customizer: e.customizer,
      customButton: e.customButton,
      quickSearch: o.quickSearch,
      ref: n,
      defaultParams: e.defaultParams
    }
  ) });
}), Qt = Or, Fr = (t) => {
  const { layout: e, context: n } = t;
  var o = e.Container || Dt;
  return /* @__PURE__ */ r(kt, { fallback: /* @__PURE__ */ r("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ r(o, { ...e, children: ((i) => /* @__PURE__ */ r(
    Qt,
    {
      context: n,
      layout: i
    }
  ))(e.tableLayout) }) });
}, Mr = (t) => {
  const { layout: e } = t;
  switch (e.type) {
    case "form":
      return /* @__PURE__ */ r(Tt, { ...t });
    case "view":
      return /* @__PURE__ */ r(xn, { ...t });
    case "grid":
      return /* @__PURE__ */ r(Fr, { ...t });
    case "chart":
      return /* @__PURE__ */ r(cn, { ...t });
    default:
      return /* @__PURE__ */ r(Pn, { ...t });
  }
};
function kr(t, e) {
  var n = t || 1, o = e;
  return {
    w: n,
    h: o
  };
}
const Yt = (t) => {
  const { layout: e, context: n } = t, o = e.sections;
  function a(i, s, c) {
    const { w: u, h: g } = kr(i.width, i.height);
    return /* @__PURE__ */ r(sn, { sx: { width: u, height: g }, children: /* @__PURE__ */ r(
      Mr,
      {
        layout: i,
        context: s
      }
    ) }, (i.name || "tab") + c);
  }
  return /* @__PURE__ */ r("div", { style: { display: "flex", flexWrap: "wrap" }, children: o.map((i, s) => a(i, n, s)) });
}, mt = oe(function(e, n) {
  const { layout: o } = e;
  he(n, () => ({
    resetFilter() {
    }
  }), []);
  const a = {}, i = o.tabs;
  return /* @__PURE__ */ r("div", { children: i.map((s, c) => /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    Yt,
    {
      layout: s,
      context: a
    }
  ) }, s.name + c)) });
}), Rr = (t) => {
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
}, gt = oe(function(e, n) {
  var b;
  const o = e.data || {}, { layout: a } = e;
  var { getFieldManager: i, getFormData: s, isFormValid: c } = Nn(o, (b = e.callbacks) == null ? void 0 : b.onFormValidChange, Rr(e.mode));
  he(n, () => ({
    getData() {
      return s();
    },
    isValid() {
      return c();
    }
  }), []);
  const u = { formData: o }, g = a.tabs;
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(Pe.Provider, { value: i, children: g.map((v, x) => /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    Yt,
    {
      layout: v,
      context: u
    }
  ) }, v.name + x)) }) });
}), Tr = (t) => {
  switch (t) {
    case "grid":
      return mt;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), gt;
    case "formEdit":
    case "formNew":
    case "formView":
      return gt;
    default:
      return mt;
  }
}, Uo = oe(function(e, n) {
  const [o, a] = _(e.layout), i = e.mode ? e.mode : o.type ? o.type : "grid", s = e.layoutParams || {}, c = Tr(i), u = Z(0);
  return ae(() => {
    a(e.layout), u.current < 999999 ? u.current++ : u.current = 0;
  }, [e.layout]), /* @__PURE__ */ r(kt, { fallback: /* @__PURE__ */ r("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ r(Ue.Provider, { value: e.storeFactory, children: /* @__PURE__ */ r(pt.Provider, { value: s, children: /* @__PURE__ */ r(c, { ...e, ref: (g) => {
    n && (n.current = g);
  } }, u.current) }) }) });
}), $o = oe(function(e, n) {
  const { children: o, Child: a, childProps: i, pageSize: s } = e, c = n || Z(null), {
    setQueryFilter: u,
    refreshData: g,
    setSortColumns: b,
    setEndPointOptions: v,
    setQuickSearch: x,
    gotoPage: w,
    setPageSize: F,
    getPageNo: z,
    setQueryLimit: L,
    getQueryLimit: X,
    data: h,
    totalRecords: m,
    pageSizeOptions: p,
    queryLimit: y
  } = ve(e), D = e.listKeyProvider || ((l, S) => S);
  he(c, () => ({
    setFilter: (l) => {
      u(l);
    },
    refresh: () => {
      g();
    },
    resetFilter() {
      u({});
    },
    setEndPointOptions: (l) => {
      v(l);
    },
    addFilter: (l, S) => {
      u((T) => (T[l] = S, { ...T }));
    },
    setQueryLimit: (l) => {
      L(l);
    },
    getQueryLimit: () => X(),
    getCurrentData: () => h,
    setSortOptions(l) {
      b(l);
    }
  }), [u]);
  const C = (l, S) => {
    w(S);
  }, N = (l) => {
    const S = l.target.value;
    x(S);
  }, A = (l) => {
    const S = parseInt(l.target.value, 10);
    F(S);
  }, I = 200, V = !!s, Q = !!e.quickSearch;
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("div", { className: "card-page-container", children: /* @__PURE__ */ P("div", { children: [
    /* @__PURE__ */ P("div", { className: "card-header", children: [
      o,
      /* @__PURE__ */ r("div", { className: "card-filter", children: Q && /* @__PURE__ */ r(
        xe,
        {
          sx: { width: I },
          type: "text",
          onChange: N,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ r(Ze, { position: "end", children: /* @__PURE__ */ r($e, { className: "card-filter-icon" }) })
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
      ln,
      {
        Child: a,
        childKeyProvider: D,
        preProcess: e.preProcess,
        dataList: h,
        childProps: i,
        EmptyChild: e.EmptyChild
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "card-pagination", children: V && /* @__PURE__ */ r(
      Je,
      {
        component: "div",
        count: m || 0,
        page: z(),
        onPageChange: C,
        rowsPerPage: y.limit,
        rowsPerPageOptions: p || [],
        onRowsPerPageChange: A
      }
    ) })
  ] }) }) });
});
export {
  Yo as D,
  Uo as F,
  Qt as G,
  Mn as M,
  Go as P,
  $o as S,
  Yt as T,
  Nr as a,
  qo as b,
  kn as c,
  Tn as d,
  Tt as e,
  Cr as f,
  Rt as g,
  qt as h,
  Fr as i,
  Mr as j,
  mt as k,
  gt as l,
  ve as u
};
