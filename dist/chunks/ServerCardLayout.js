import "../assets/ServerCardLayout.css";
import Zt from "../palmyra/mui/form/MuiDatePicker.js";
import Jt from "../palmyra/mui/form/MuiDateTimePicker.js";
import en from "../palmyra/mui/form/MuiRadioGroup.js";
import at from "../palmyra/mui/form/MuiSelect.js";
import tn from "../palmyra/mui/form/MuiTextArea.js";
import nn from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import rn from "../palmyra/mui/form/MuiCheckBox.js";
import on from "../palmyra/mui/form/MuiSwitch.js";
import an from "../palmyra/mui/form/MuiIOSSwitch.js";
import sn from "../palmyra/mui/form/MuiPassword.js";
import ln from "../palmyra/mui/form/MuiNumberField.js";
import Ue from "../palmyra/mui/form/FieldDecorator.js";
import { FieldManagerContext as Pe, StoreFactoryContext as $e, LayoutParamsContext as gt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as r, jsxs as D, Fragment as ye } from "react/jsx-runtime";
import pt, { useState as _, useRef as Z, useEffect as ae, forwardRef as oe, useContext as Se, useImperativeHandle as he, useMemo as yt } from "react";
import { a as Ke } from "./index.esm.js";
import { FormControlLabel as it, Checkbox as st, FormControl as xe, FormHelperText as je, Autocomplete as vt, TextField as Ne, CircularProgress as bt, Dialog as cn, ClickAwayListener as Re, Button as le, Paper as dn, InputAdornment as Ze, Select as Ct, MenuItem as St, Pagination as Dt, Tooltip as Me, TablePagination as un, Box as fn, Stack as hn } from "@mui/material";
import mn from "../palmyra/layout/card/CardLayout.js";
import gn from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Je, getFieldLabel as et } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as De } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as we } from "../palmyra/form/FormUtil.js";
import { delay as wt, delayGenerator as pn, mergeDeep as yn } from "../palmyra/utils/index.js";
import vn from "../palmyra/mui/form/MuiDateRangePicker.js";
import bn from "../palmyra/mui/form/MuiIntegerField.js";
import Pt from "../palmyra/layout/container/SectionContainer.js";
import Cn from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as xt } from "../palmyra/grid/base/ColumnConverter.js";
import Nt from "../palmyra/grid/base/EmptyChildTable.js";
import Ot from "../palmyra/grid/base/TableX.js";
import { Close as Sn, KeyboardArrowDown as lt, Menu as Te, DensitySmall as Ee, DensityLarge as Le, Add as Ft, FilterAlt as Dn, FileDownloadOutlined as wn } from "@mui/icons-material";
import { NoopCustomizer as Mt } from "../palmyra/grid/Types.js";
import { convertToField as Pn } from "../palmyra/grid/base/GridFieldConverter.js";
import { a as xn, g as Nn } from "./_commonjsHelpers.js";
import { p as kt } from "./index.js";
import Rt from "react-dom";
import { createFilterData as On } from "../palmyra/form/PalmyraFilterManager.js";
import { G as Oe } from "./iconBase.js";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import { topic as ct } from "../palmyra/utils/pubsub/topic.js";
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
import { getActionPublishers as Fn } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as Tt } from "../palmyra/layout/ErrorBoundary.js";
import Mn from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import kn from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as Rn } from "./PalmyraFieldManager.js";
import { useKeyValue as Tn } from "../palmyra/utils/pubsub/PubSubHelper.js";
const ve = (t) => {
  var K, H;
  const { store: e, quickSearch: n } = t, o = t.fetchAll != !1, [a, i] = _(t.endPointOptions), [s, l] = _(null), d = ((K = t.defaultParams) == null ? void 0 : K.filter) || {}, g = ((H = t.defaultParams) == null ? void 0 : H.sort) || {}, [C, b] = t.filterTopic ? Tn(t.filterTopic, d) : _(d), [x, P] = _({}), M = Z(t.initialFetch == !1), I = t.pageSize ? t.pageSize : 15;
  var L = I instanceof Array ? I : [I], W = I instanceof Array ? I[0] : I;
  const [f, h] = _({ limit: W, offset: 0, total: !0 }), [m, v] = _(null), w = () => Math.round(f.offset / f.limit), S = () => f, N = (E) => {
    h((B) => ({ limit: B.limit, total: B.total, offset: E * B.limit }));
  }, A = (E) => {
    const B = E > 10 || E == -1 ? E : 15;
    h((c) => {
      const F = Math.floor(c.offset / B) * B;
      return { limit: B, total: c.total, offset: F };
    });
  }, X = () => C ? Object.keys(C).length == 0 : !1, V = (E) => {
    v((B) => (setTimeout(() => {
      t.onDataChange && t.onDataChange(m, B);
    }, 300), E));
  };
  ae(() => {
    if (M.current) {
      M.current = !1;
      return;
    }
    (o || !X()) && Y();
  }, [f, x, a]);
  const Y = () => {
    const B = {
      sortOrder: x && Object.keys(x).length > 0 ? x : g,
      total: !0,
      endPointVars: a,
      ...f,
      filter: { ...C, ...d }
    };
    if (e)
      try {
        e.query(B).then((c) => {
          V(c.result), l(c.total);
        }).catch((c) => {
          var F = c.response ? c.response : c;
          console.error("error while fetching", F), p();
        });
      } catch (c) {
        console.error(c), y();
      }
    else
      console.error("Store is not provided for the Grid"), y();
  }, y = () => {
    V([]), l(0);
  }, p = () => {
    V(void 0), l(null);
  };
  return {
    setQueryFilter: (E) => {
      typeof E == "function" || E && Object.keys(E).length > 0 ? b(E) : b({}), N(0);
    },
    setQuickSearch: (E) => {
      const B = n;
      b(E ? (c) => (c[B] = E, { ...c }) : (c) => (delete c[B], { ...c })), N(0);
    },
    setSortColumns: (E) => {
      P(E);
    },
    setEndPointOptions: i,
    refreshData: Y,
    gotoPage: N,
    setPageSize: A,
    getPageNo: w,
    getQueryLimit: S,
    setQueryLimit: h,
    filter: C,
    queryLimit: f,
    data: m,
    totalRecords: s,
    pageSizeOptions: L
  };
};
function dt(t) {
  return t ? Array.isArray(t) ? t : typeof t == "string" ? t.split(",") : (console.log(t), [t]) : [];
}
const $o = oe(function(e, n) {
  const o = Se(Pe), a = n || Z(null), i = o(e, "checkbox", a), { mutateOptions: s, setMutateOptions: l } = i, [d, g] = _(!1), C = dt(i.data), b = i.error, x = i.eventListeners, M = { store: i.store, pageSize: -1 }, { data: I } = ve(M), L = I, W = Z(null), f = e.lookupOptions || {}, h = f.idAttribute || "id", m = f.displayAttribute || "name", v = e.showSelectedOnly && e.readonly, w = De(h) ? (y) => we(h, y) : (y) => y[h], S = De(m) ? (y) => we(m, y) : (y) => y[m];
  he(a, () => ({
    focus() {
      W.current.focus();
    },
    isValid() {
      return !b.status;
    },
    clear() {
      i.setData("", !0);
    },
    getValue() {
      return i.getData();
    },
    setValue(y, p = !1) {
      i.setData(y, p);
    },
    setVisible(y) {
      l((p) => ({ ...p, visible: y }));
    },
    setRequired(y) {
      l((p) => ({ ...p, required: y }));
    },
    setReadOnly(y) {
      l((p) => ({ ...p, readonly: y }));
    },
    setAttribute(y) {
      l((p) => ({ ...p, ...y }));
    },
    setOptions(y) {
    },
    getOptions() {
    }
  }), [i]);
  var N = Je(e, i.data, e.label);
  e.readonly && (N.inputprops = { readOnly: !0 });
  function A(y, p) {
    const O = dt(i.data);
    var z = O.indexOf(y);
    p ? z < 0 && O.push(y) : z >= 0 && O.splice(z, 1), x.onValueChange(O.toString());
  }
  var X = {
    onBlur: x.onBlur,
    onFocus: x.onFocus,
    onChange: (y) => {
      A(y.target.value, y.target.checked);
    }
  };
  const V = (y) => {
    const p = y.toString();
    return C.includes(p);
  }, Y = (y) => {
    const p = y.target.checked;
    g(p);
    var O = [];
    p && L.map((z) => {
      O.push(w(z));
    }), x.onValueChange(O.toString());
  };
  return /* @__PURE__ */ r("div", { className: e.className, children: s.visible && /* @__PURE__ */ D(
    Ue,
    {
      label: et(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: [
        /* @__PURE__ */ r("div", { children: e.hideSelectAll ? /* @__PURE__ */ r(ye, {}) : /* @__PURE__ */ r(
          it,
          {
            control: /* @__PURE__ */ r(st, { onChange: Y }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ D(
          xe,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: b.status,
            ...N,
            children: [
              L ? L.filter((y) => v ? V(w(y)) : !0).map((y) => /* @__PURE__ */ r(
                it,
                {
                  value: w(y),
                  control: /* @__PURE__ */ r(
                    st,
                    {
                      ...X,
                      checked: V(w(y)),
                      disabled: e.readonly
                    }
                  ),
                  label: S(y)
                },
                w(y)
              )) : /* @__PURE__ */ r("div", { children: "No options provided" }),
              /* @__PURE__ */ r(je, { className: "form-error-text", children: b.message })
            ]
          }
        )
      ]
    }
  ) });
}), En = pn(100), Ln = oe(function(e, n) {
  const o = Se(Pe), a = n || Z(null), i = Z(null), s = Z(0), [l, d] = _([]), [g, C] = _(""), [b, x] = _(!1), P = o(e, "serverlookup", a), M = e.store || P.store, I = e.lookupOptions || {}, L = I.idAttribute || "id", W = I.displayAttribute || "name", f = W, h = {
    store: M,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: f,
    initialFetch: !1
  }, m = ve(h), v = P.eventListeners, w = P.error, { mutateOptions: S, setMutateOptions: N } = P, A = P.data, X = b && l.length < (A ? 2 : 1), { setQueryFilter: V, setEndPointOptions: Y, setQuickSearch: y, totalRecords: p, refreshData: O } = m, z = m.data, G = De(L) ? (u) => we(L, u) : (u) => u == null ? void 0 : u[L], K = De(W) ? (u) => we(W, u) : (u) => u == null ? void 0 : u[W];
  ae(() => {
    var u = A != "" ? A : void 0;
    u && d([u]);
  }, [P.data]), ae(() => {
    const u = z ? [...z] : [], R = A != "" ? A : void 0, J = G(R), be = K(R);
    u && J && be && !F(u, J) && u.unshift(R), d(u), s.current < p && (s.current = p);
  }, [z, p]), ae(() => {
    wt(H);
  }, [g]), ae(() => {
    En(H);
  }, [b]);
  function H() {
    b && (g.length > 0 && g != K(A) ? y("*" + g + "*") : z ? y(null) : O());
  }
  var E = {
    onBlur: v.onBlur,
    onFocus: v.onFocus,
    onChange: (u, R) => {
      B(R);
    },
    onInputChange: (u, R) => (C(R), !0)
  };
  const B = (u) => {
    v.onValueChange(u);
  }, c = (u) => typeof u == "object" ? K(u) + "" : (console.log(u), "");
  function F(u, R) {
    return u.find((J) => {
      if (G(J) == R)
        return J;
    });
  }
  he(a, () => ({
    focus() {
      i.current.focus();
    },
    isValid() {
      return !w.status;
    },
    clear() {
      e.multiple ? P.setData([], !0) : P.setData(void 0, !0);
    },
    getValue() {
      return P.getData();
    },
    setValue(u, R = !1) {
      P.setData(u, R);
    },
    setVisible(u) {
      N((R) => ({ ...R, visible: u }));
    },
    setRequired(u) {
      N((R) => ({ ...R, required: u }));
    },
    setReadOnly(u) {
      N((R) => ({ ...R, readonly: u }));
    },
    setAttribute(u) {
      N((R) => ({ ...R, ...u }));
    },
    setFilter(u) {
      V(u);
    },
    resetFilter() {
      V({});
    },
    setEndPointOptions(u) {
      Y(u);
    },
    getCurrentData: () => A,
    refresh: () => {
      O();
    },
    addFilter(u, R) {
      V((J) => (J[u] = R, { ...J }));
    },
    setDefaultFilter(u) {
    },
    setSortOptions(u) {
    }
  }), [P, V]);
  var Q = Je(e, A, e.label);
  S.readonly && (Q.inputProps = { readOnly: !0 });
  const me = (u, R) => u instanceof Array ? u.some((J) => G(J) == G(R)) : G(u) == G(R);
  return /* @__PURE__ */ r(
    Ue,
    {
      label: et(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ D(xe, { fullWidth: !0, error: w.status, children: [
        /* @__PURE__ */ r(
          vt,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: e.multiple,
            readOnly: e.readonly,
            renderOption: e.renderOption,
            isOptionEqualToValue: me,
            filterOptions: (u) => u,
            renderInput: (u) => /* @__PURE__ */ r(
              Ne,
              {
                ...u,
                inputRef: (R) => {
                  i.current = R;
                },
                variant: e.variant || "standard",
                label: e.label,
                autoFocus: e.autoFocus,
                required: e.required,
                InputProps: {
                  ...u.InputProps,
                  endAdornment: /* @__PURE__ */ D(ye, { children: [
                    X ? /* @__PURE__ */ r(bt, { color: "inherit", size: 18 }) : null,
                    u.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: c,
            ...Q,
            options: l,
            open: b,
            onClose: () => {
              x(!1);
            },
            onOpen: (u) => {
              x(!0);
            },
            ...E
          }
        ),
        /* @__PURE__ */ r(je, { className: "form-error-text", children: w.message })
      ] })
    }
  );
}), An = oe(function(e, n) {
  const o = Se(Pe), a = n || Z(null), i = Z(null), s = Z(0), [l, d] = _([]), [g, C] = _(""), [b, x] = _(!1), P = o(e, "autoComplete", a), M = e.store || P.store, L = (e.lookupOptions || {}).attribute || "name", W = L, f = {
    store: M,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: W,
    initialFetch: !1
  }, h = ve(f), m = P.eventListeners, v = P.error, { mutateOptions: w, setMutateOptions: S } = P, N = P.data, A = b && l.length < (N ? 2 : 1), { setQueryFilter: X, setEndPointOptions: V, setQuickSearch: Y, totalRecords: y, refreshData: p } = h, O = h.data, z = De(L) ? (c) => we(L, c) : (c) => c == null ? void 0 : c[L];
  ae(() => {
    var c = N != "" ? N : void 0;
    c && d([c]);
  }, [P.data]), ae(() => {
    const F = (O ? [...O] : []).map((me) => z(me)), Q = N != "" ? N : void 0;
    F && Q && !E(F, Q) && F.unshift(Q), d(F), s.current < y && (s.current = y);
  }, [O, y]), ae(() => {
    wt(G);
  }, [g, b]);
  function G() {
    b && (g.length > 0 && g != N ? Y("*" + g + "*") : O ? Y(null) : p());
  }
  var K = {
    onBlur: (c) => {
      H(g), m.onBlur(g);
    },
    onFocus: m.onFocus,
    onChange: (c, F) => {
      H(F);
    },
    onInputChange: (c, F) => (C(F), !0)
  };
  const H = (c) => {
    m.onValueChange(c);
  };
  function E(c, F) {
    return c.find((Q) => {
      if (Q == F)
        return Q;
    });
  }
  he(a, () => ({
    focus() {
      i.current.focus();
    },
    isValid() {
      return !v.status;
    },
    clear() {
      P.setData(void 0, !0);
    },
    getValue() {
      return P.getData();
    },
    setValue(c, F = !1) {
      P.setData(c, F);
    },
    setVisible(c) {
      S((F) => ({ ...F, visible: c }));
    },
    setRequired(c) {
      S((F) => ({ ...F, required: c }));
    },
    setReadOnly(c) {
      S((F) => ({ ...F, readonly: c }));
    },
    setAttribute(c) {
      S((F) => ({ ...F, ...c }));
    },
    setFilter(c) {
      X(c);
    },
    resetFilter() {
      X({});
    },
    setEndPointOptions(c) {
      V(c);
    },
    getCurrentData: () => N,
    refresh: () => {
      p();
    },
    addFilter(c, F) {
      X((Q) => (Q[c] = F, { ...Q }));
    },
    setDefaultFilter(c) {
    },
    setSortOptions(c) {
    }
  }), [P, X]);
  var B = Je(e, N, e.label);
  return w.readonly && (B.inputProps = { readOnly: !0 }), /* @__PURE__ */ r(
    Ue,
    {
      label: et(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ D(xe, { fullWidth: !0, error: v.status, children: [
        /* @__PURE__ */ r(
          vt,
          {
            freeSolo: !0,
            autoSelect: !0,
            readOnly: e.readonly,
            renderOption: e.renderOption,
            filterOptions: (c) => c,
            renderInput: (c) => /* @__PURE__ */ r(
              Ne,
              {
                ...c,
                inputRef: (F) => {
                  i.current = F;
                },
                variant: e.variant || "standard",
                label: e.label,
                autoFocus: e.autoFocus,
                required: e.required,
                ...B,
                InputProps: {
                  ...c.InputProps,
                  endAdornment: /* @__PURE__ */ D(ye, { children: [
                    A ? /* @__PURE__ */ r(bt, { color: "inherit", size: 18 }) : null,
                    c.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...B,
            options: l,
            open: b,
            onClose: () => {
              x(!1);
            },
            onOpen: (c) => {
              x(!0);
            },
            ...K
          }
        ),
        /* @__PURE__ */ r(je, { className: "form-error-text", children: v.message })
      ] })
    }
  );
}), _n = (t) => {
  const { fieldDef: e } = t;
  return /* @__PURE__ */ D("div", { children: [
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
}, Et = (t, e, n) => {
  const { type: o } = t, a = { fieldDef: t, title: n };
  switch (o) {
    case "string":
      return U(a, nn);
    case "radio":
      return U(a, en);
    case "select":
      return U(a, at);
    case "date":
      return U(a, Zt);
    case "datetime":
      return U(a, Jt);
    case "checkbox":
      return U(a, rn);
    case "serverlookup":
      return U(a, Ln);
    case "textarea":
      return U(a, tn);
    case "switch":
      return U(a, on);
    case "iosswitch":
      return U(a, an);
    case "password":
      return U(a, sn);
    case "float":
    case "number":
    case "numbersOnly":
      return U(a, ln);
    case "integer":
      return U(a, bn);
    case "multiSelect":
      return U(a, at);
    case "dateRange":
      return U(a, vn);
    case "autoComplete":
      return U(a, An);
    default:
      return _n(a);
  }
}, Vn = oe(function(e, n) {
  var C;
  const { formLayout: o, context: a } = e, { formData: i } = a, s = o.Container;
  Z({});
  const l = yt(() => (b) => Et(b), [i.data]);
  var d = ((C = o.options) == null ? void 0 : C.columns) || 1, g = { columns: d };
  return s ? /* @__PURE__ */ r("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: o.fields.map((b, x) => /* @__PURE__ */ r(
    s,
    {
      index: x,
      field: b,
      label: b.title,
      options: g,
      children: l(b)
    },
    b.attribute + b.name + b.type
  )) }) : /* @__PURE__ */ r("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: o.fields.map((b, x) => l(b)) });
}), Lt = (t) => {
  const { layout: e, context: n } = t;
  var o = e.Renderer || Vn, a = e.Container || Pt;
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
      children: /* @__PURE__ */ r(Cn, { columns: e.columns, children: i(e.formLayout) })
    }
  );
};
var Ae = { exports: {} }, At = {};
function _t(t) {
  var e, n, o = "";
  if (typeof t == "string" || typeof t == "number")
    o += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = _t(t[e])) && (o && (o += " "), o += n);
    else
      for (e in t)
        t[e] && (o && (o += " "), o += e);
  return o;
}
function ut() {
  for (var t, e, n = 0, o = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = _t(t)) && (o && (o += " "), o += e);
  return o;
}
const Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: ut,
  default: ut
}, Symbol.toStringTag, { value: "Module" })), In = /* @__PURE__ */ xn(Bn);
var q = {}, ce = {};
Object.defineProperty(ce, "__esModule", {
  value: !0
});
ce.dontSetMe = qn;
ce.findInArray = Xn;
ce.int = Hn;
ce.isFunction = Wn;
ce.isNum = zn;
function Xn(t, e) {
  for (let n = 0, o = t.length; n < o; n++)
    if (e.apply(e, [t[n], n, t]))
      return t[n];
}
function Wn(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Function]";
}
function zn(t) {
  return typeof t == "number" && !isNaN(t);
}
function Hn(t) {
  return parseInt(t, 10);
}
function qn(t, e, n) {
  if (t[e])
    return new Error("Invalid prop ".concat(e, " passed to ").concat(n, " - do not set this, set it on the child."));
}
var ge = {};
Object.defineProperty(ge, "__esModule", {
  value: !0
});
ge.browserPrefixToKey = Bt;
ge.browserPrefixToStyle = Qn;
ge.default = void 0;
ge.getPrefix = Vt;
const Qe = ["Moz", "Webkit", "O", "ms"];
function Vt() {
  var t;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const n = (t = window.document) === null || t === void 0 || (t = t.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!n || e in n)
    return "";
  for (let o = 0; o < Qe.length; o++)
    if (Bt(e, Qe[o]) in n)
      return Qe[o];
  return "";
}
function Bt(t, e) {
  return e ? "".concat(e).concat(Yn(t)) : t;
}
function Qn(t, e) {
  return e ? "-".concat(e.toLowerCase(), "-").concat(t) : t;
}
function Yn(t) {
  let e = "", n = !0;
  for (let o = 0; o < t.length; o++)
    n ? (e += t[o].toUpperCase(), n = !1) : t[o] === "-" ? n = !0 : e += t[o];
  return e;
}
ge.default = Vt();
Object.defineProperty(q, "__esModule", {
  value: !0
});
q.addClassName = Wt;
q.addEvent = $n;
q.addUserSelectStyles = ir;
q.createCSSTransform = nr;
q.createSVGTransform = rr;
q.getTouch = or;
q.getTouchIdentifier = ar;
q.getTranslation = tt;
q.innerHeight = Jn;
q.innerWidth = er;
q.matchesSelector = Xt;
q.matchesSelectorAndParentsTo = Un;
q.offsetXYFromParent = tr;
q.outerHeight = jn;
q.outerWidth = Zn;
q.removeClassName = zt;
q.removeEvent = Kn;
q.removeUserSelectStyles = sr;
var re = ce, ft = Gn(ge);
function It(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (It = function(o) {
    return o ? n : e;
  })(t);
}
function Gn(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var n = It(e);
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
let ke = "";
function Xt(t, e) {
  return ke || (ke = (0, re.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, re.isFunction)(t[n]);
  })), (0, re.isFunction)(t[ke]) ? t[ke](e) : !1;
}
function Un(t, e, n) {
  let o = t;
  do {
    if (Xt(o, e))
      return !0;
    if (o === n)
      return !1;
    o = o.parentNode;
  } while (o);
  return !1;
}
function $n(t, e, n, o) {
  if (!t)
    return;
  const a = {
    capture: !0,
    ...o
  };
  t.addEventListener ? t.addEventListener(e, n, a) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n;
}
function Kn(t, e, n, o) {
  if (!t)
    return;
  const a = {
    capture: !0,
    ...o
  };
  t.removeEventListener ? t.removeEventListener(e, n, a) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null;
}
function jn(t) {
  let e = t.clientHeight;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e += (0, re.int)(n.borderTopWidth), e += (0, re.int)(n.borderBottomWidth), e;
}
function Zn(t) {
  let e = t.clientWidth;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e += (0, re.int)(n.borderLeftWidth), e += (0, re.int)(n.borderRightWidth), e;
}
function Jn(t) {
  let e = t.clientHeight;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e -= (0, re.int)(n.paddingTop), e -= (0, re.int)(n.paddingBottom), e;
}
function er(t) {
  let e = t.clientWidth;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e -= (0, re.int)(n.paddingLeft), e -= (0, re.int)(n.paddingRight), e;
}
function tr(t, e, n) {
  const a = e === e.ownerDocument.body ? {
    left: 0,
    top: 0
  } : e.getBoundingClientRect(), i = (t.clientX + e.scrollLeft - a.left) / n, s = (t.clientY + e.scrollTop - a.top) / n;
  return {
    x: i,
    y: s
  };
}
function nr(t, e) {
  const n = tt(t, e, "px");
  return {
    [(0, ft.browserPrefixToKey)("transform", ft.default)]: n
  };
}
function rr(t, e) {
  return tt(t, e, "");
}
function tt(t, e, n) {
  let {
    x: o,
    y: a
  } = t, i = "translate(".concat(o).concat(n, ",").concat(a).concat(n, ")");
  if (e) {
    const s = "".concat(typeof e.x == "string" ? e.x : e.x + n), l = "".concat(typeof e.y == "string" ? e.y : e.y + n);
    i = "translate(".concat(s, ", ").concat(l, ")") + i;
  }
  return i;
}
function or(t, e) {
  return t.targetTouches && (0, re.findInArray)(t.targetTouches, (n) => e === n.identifier) || t.changedTouches && (0, re.findInArray)(t.changedTouches, (n) => e === n.identifier);
}
function ar(t) {
  if (t.targetTouches && t.targetTouches[0])
    return t.targetTouches[0].identifier;
  if (t.changedTouches && t.changedTouches[0])
    return t.changedTouches[0].identifier;
}
function ir(t) {
  if (!t)
    return;
  let e = t.getElementById("react-draggable-style-el");
  e || (e = t.createElement("style"), e.type = "text/css", e.id = "react-draggable-style-el", e.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, e.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, t.getElementsByTagName("head")[0].appendChild(e)), t.body && Wt(t.body, "react-draggable-transparent-selection");
}
function sr(t) {
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
function Wt(t, e) {
  t.classList ? t.classList.add(e) : t.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) || (t.className += " ".concat(e));
}
function zt(t, e) {
  t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"), "");
}
var de = {};
Object.defineProperty(de, "__esModule", {
  value: !0
});
de.canDragX = dr;
de.canDragY = ur;
de.createCoreData = hr;
de.createDraggableData = mr;
de.getBoundPosition = lr;
de.getControlPosition = fr;
de.snapToGrid = cr;
var ne = ce, pe = q;
function lr(t, e, n) {
  if (!t.props.bounds)
    return [e, n];
  let {
    bounds: o
  } = t.props;
  o = typeof o == "string" ? o : gr(o);
  const a = nt(t);
  if (typeof o == "string") {
    const {
      ownerDocument: i
    } = a, s = i.defaultView;
    let l;
    if (o === "parent" ? l = a.parentNode : l = i.querySelector(o), !(l instanceof s.HTMLElement))
      throw new Error('Bounds selector "' + o + '" could not find an element.');
    const d = l, g = s.getComputedStyle(a), C = s.getComputedStyle(d);
    o = {
      left: -a.offsetLeft + (0, ne.int)(C.paddingLeft) + (0, ne.int)(g.marginLeft),
      top: -a.offsetTop + (0, ne.int)(C.paddingTop) + (0, ne.int)(g.marginTop),
      right: (0, pe.innerWidth)(d) - (0, pe.outerWidth)(a) - a.offsetLeft + (0, ne.int)(C.paddingRight) - (0, ne.int)(g.marginRight),
      bottom: (0, pe.innerHeight)(d) - (0, pe.outerHeight)(a) - a.offsetTop + (0, ne.int)(C.paddingBottom) - (0, ne.int)(g.marginBottom)
    };
  }
  return (0, ne.isNum)(o.right) && (e = Math.min(e, o.right)), (0, ne.isNum)(o.bottom) && (n = Math.min(n, o.bottom)), (0, ne.isNum)(o.left) && (e = Math.max(e, o.left)), (0, ne.isNum)(o.top) && (n = Math.max(n, o.top)), [e, n];
}
function cr(t, e, n) {
  const o = Math.round(e / t[0]) * t[0], a = Math.round(n / t[1]) * t[1];
  return [o, a];
}
function dr(t) {
  return t.props.axis === "both" || t.props.axis === "x";
}
function ur(t) {
  return t.props.axis === "both" || t.props.axis === "y";
}
function fr(t, e, n) {
  const o = typeof e == "number" ? (0, pe.getTouch)(t, e) : null;
  if (typeof e == "number" && !o)
    return null;
  const a = nt(n), i = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, pe.offsetXYFromParent)(o || t, i, n.props.scale);
}
function hr(t, e, n) {
  const o = !(0, ne.isNum)(t.lastX), a = nt(t);
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
function mr(t, e) {
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
function gr(t) {
  return {
    left: t.left,
    top: t.top,
    right: t.right,
    bottom: t.bottom
  };
}
function nt(t) {
  const e = t.findDOMNode();
  if (!e)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return e;
}
var _e = {}, Ve = {};
Object.defineProperty(Ve, "__esModule", {
  value: !0
});
Ve.default = pr;
function pr() {
}
Object.defineProperty(_e, "__esModule", {
  value: !0
});
_e.default = void 0;
var Ye = vr(pt), ee = rt(kt), yr = rt(Rt), $ = q, ue = de, Ge = ce, Ce = rt(Ve);
function rt(t) {
  return t && t.__esModule ? t : { default: t };
}
function Ht(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Ht = function(o) {
    return o ? n : e;
  })(t);
}
function vr(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var n = Ht(e);
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
  return e = br(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function br(t) {
  var e = Cr(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function Cr(t, e) {
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
let fe = se.mouse, Be = class extends Ye.Component {
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
        y: l
      } = i, d = (0, ue.createCoreData)(this, s, l);
      (0, Ce.default)("DraggableCore: handleDragStart: %j", d), (0, Ce.default)("calling", this.props.onStart), !(this.props.onStart(e, d) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, $.addUserSelectStyles)(o), this.dragging = !0, this.lastX = s, this.lastY = l, (0, $.addEvent)(o, fe.move, this.handleDrag), (0, $.addEvent)(o, fe.stop, this.handleDragStop));
    }), j(this, "handleDrag", (e) => {
      const n = (0, ue.getControlPosition)(e, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: o,
        y: a
      } = n;
      if (Array.isArray(this.props.grid)) {
        let l = o - this.lastX, d = a - this.lastY;
        if ([l, d] = (0, ue.snapToGrid)(this.props.grid, l, d), !l && !d)
          return;
        o = this.lastX + l, a = this.lastY + d;
      }
      const i = (0, ue.createCoreData)(this, o, a);
      if ((0, Ce.default)("DraggableCore: handleDrag: %j", i), this.props.onDrag(e, i) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const d = document.createEvent("MouseEvents");
          d.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(d);
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
        let d = o - this.lastX || 0, g = a - this.lastY || 0;
        [d, g] = (0, ue.snapToGrid)(this.props.grid, d, g), o = this.lastX + d, a = this.lastY + g;
      }
      const i = (0, ue.createCoreData)(this, o, a);
      if (this.props.onStop(e, i) === !1 || this.mounted === !1)
        return !1;
      const l = this.findDOMNode();
      l && this.props.enableUserSelectHack && (0, $.removeUserSelectStyles)(l.ownerDocument), (0, Ce.default)("DraggableCore: handleDragStop: %j", i), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, l && ((0, Ce.default)("DraggableCore: Removing handlers"), (0, $.removeEvent)(l.ownerDocument, fe.move, this.handleDrag), (0, $.removeEvent)(l.ownerDocument, fe.stop, this.handleDragStop));
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
    return (e = this.props) !== null && e !== void 0 && e.nodeRef ? (n = this.props) === null || n === void 0 || (n = n.nodeRef) === null || n === void 0 ? void 0 : n.current : yr.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ Ye.cloneElement(Ye.Children.only(this.props.children), {
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
_e.default = Be;
j(Be, "displayName", "DraggableCore");
j(Be, "propTypes", {
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
  className: Ge.dontSetMe,
  style: Ge.dontSetMe,
  transform: Ge.dontSetMe
});
j(Be, "defaultProps", {
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
  var e = x(pt), n = C(kt), o = C(Rt), a = C(In), i = q, s = de, l = ce, d = C(_e), g = C(Ve);
  function C(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function b(f) {
    if (typeof WeakMap != "function")
      return null;
    var h = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap();
    return (b = function(v) {
      return v ? m : h;
    })(f);
  }
  function x(f, h) {
    if (!h && f && f.__esModule)
      return f;
    if (f === null || typeof f != "object" && typeof f != "function")
      return { default: f };
    var m = b(h);
    if (m && m.has(f))
      return m.get(f);
    var v = {}, w = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var S in f)
      if (S !== "default" && Object.prototype.hasOwnProperty.call(f, S)) {
        var N = w ? Object.getOwnPropertyDescriptor(f, S) : null;
        N && (N.get || N.set) ? Object.defineProperty(v, S, N) : v[S] = f[S];
      }
    return v.default = f, m && m.set(f, v), v;
  }
  function P() {
    return P = Object.assign ? Object.assign.bind() : function(f) {
      for (var h = 1; h < arguments.length; h++) {
        var m = arguments[h];
        for (var v in m)
          Object.prototype.hasOwnProperty.call(m, v) && (f[v] = m[v]);
      }
      return f;
    }, P.apply(this, arguments);
  }
  function M(f, h, m) {
    return h = I(h), h in f ? Object.defineProperty(f, h, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : f[h] = m, f;
  }
  function I(f) {
    var h = L(f, "string");
    return typeof h == "symbol" ? h : String(h);
  }
  function L(f, h) {
    if (typeof f != "object" || f === null)
      return f;
    var m = f[Symbol.toPrimitive];
    if (m !== void 0) {
      var v = m.call(f, h || "default");
      if (typeof v != "object")
        return v;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(f);
  }
  class W extends e.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(h, m) {
      let {
        position: v
      } = h, {
        prevPropsPosition: w
      } = m;
      return v && (!w || v.x !== w.x || v.y !== w.y) ? ((0, g.default)("Draggable: getDerivedStateFromProps %j", {
        position: v,
        prevPropsPosition: w
      }), {
        x: v.x,
        y: v.y,
        prevPropsPosition: {
          ...v
        }
      }) : null;
    }
    constructor(h) {
      super(h), M(this, "onDragStart", (m, v) => {
        if ((0, g.default)("Draggable: onDragStart: %j", v), this.props.onStart(m, (0, s.createDraggableData)(this, v)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), M(this, "onDrag", (m, v) => {
        if (!this.state.dragging)
          return !1;
        (0, g.default)("Draggable: onDrag: %j", v);
        const w = (0, s.createDraggableData)(this, v), S = {
          x: w.x,
          y: w.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: A,
            y: X
          } = S;
          S.x += this.state.slackX, S.y += this.state.slackY;
          const [V, Y] = (0, s.getBoundPosition)(this, S.x, S.y);
          S.x = V, S.y = Y, S.slackX = this.state.slackX + (A - S.x), S.slackY = this.state.slackY + (X - S.y), w.x = S.x, w.y = S.y, w.deltaX = S.x - this.state.x, w.deltaY = S.y - this.state.y;
        }
        if (this.props.onDrag(m, w) === !1)
          return !1;
        this.setState(S);
      }), M(this, "onDragStop", (m, v) => {
        if (!this.state.dragging || this.props.onStop(m, (0, s.createDraggableData)(this, v)) === !1)
          return !1;
        (0, g.default)("Draggable: onDragStop: %j", v);
        const S = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: A,
            y: X
          } = this.props.position;
          S.x = A, S.y = X;
        }
        this.setState(S);
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
      var h, m;
      return (h = (m = this.props) === null || m === void 0 || (m = m.nodeRef) === null || m === void 0 ? void 0 : m.current) !== null && h !== void 0 ? h : o.default.findDOMNode(this);
    }
    render() {
      const {
        axis: h,
        bounds: m,
        children: v,
        defaultPosition: w,
        defaultClassName: S,
        defaultClassNameDragging: N,
        defaultClassNameDragged: A,
        position: X,
        positionOffset: V,
        scale: Y,
        ...y
      } = this.props;
      let p = {}, O = null;
      const G = !!!X || this.state.dragging, K = X || w, H = {
        // Set left if horizontal drag is enabled
        x: (0, s.canDragX)(this) && G ? this.state.x : K.x,
        // Set top if vertical drag is enabled
        y: (0, s.canDragY)(this) && G ? this.state.y : K.y
      };
      this.state.isElementSVG ? O = (0, i.createSVGTransform)(H, V) : p = (0, i.createCSSTransform)(H, V);
      const E = (0, a.default)(v.props.className || "", S, {
        [N]: this.state.dragging,
        [A]: this.state.dragged
      });
      return /* @__PURE__ */ e.createElement(d.default, P({}, y, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ e.cloneElement(e.Children.only(v), {
        className: E,
        style: {
          ...v.props.style,
          ...p
        },
        transform: O
      }));
    }
  }
  t.default = W, M(W, "displayName", "Draggable"), M(W, "propTypes", {
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
    className: l.dontSetMe,
    style: l.dontSetMe,
    transform: l.dontSetMe
  }), M(W, "defaultProps", {
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
})(At);
const {
  default: qt,
  DraggableCore: Sr
} = At;
Ae.exports = qt;
Ae.exports.default = qt;
Ae.exports.DraggableCore = Sr;
var Dr = Ae.exports;
const wr = /* @__PURE__ */ Nn(Dr);
const Pr = (t) => {
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
}, xr = oe(function(e, n) {
  const { formLayout: o, context: a } = e, { formData: i } = a, s = Z({}), l = Pr(e), d = "palmyra-form-field-data", g = yt(() => (C) => Et(C, s, C.label), [i.data]);
  return /* @__PURE__ */ r("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: o.fields.map((C, b) => /* @__PURE__ */ r("div", { className: l, children: /* @__PURE__ */ r("div", { className: d, children: g(C) }) }, C.attribute)) });
});
function Qt(t) {
  return Oe({ tag: "svg", attr: { viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" } }, { tag: "path", attr: { d: "M12.713 19.762l-3.713 1.238v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v1" } }, { tag: "path", attr: { d: "M16 22l5 -5" } }, { tag: "path", attr: { d: "M21 21.5v-4.5h-4.5" } }] })(t);
}
function Nr(t) {
  return Oe({ tag: "svg", attr: { viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" } }, { tag: "path", attr: { d: "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" } }, { tag: "path", attr: { d: "M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" } }] })(t);
}
function Or(t) {
  return Oe({ tag: "svg", attr: { viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" } }, { tag: "path", attr: { d: "M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" } }, { tag: "path", attr: { d: "M3 10h18" } }, { tag: "path", attr: { d: "M10 3v18" } }, { tag: "path", attr: { d: "M16 19h6" } }, { tag: "path", attr: { d: "M19 16l3 3l-3 3" } }] })(t);
}
function Fr(t) {
  return /* @__PURE__ */ r(
    wr,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ r(dn, { ...t })
    }
  );
}
const Yt = ({ columns: t, isOpen: e, onClose: n, setFilter: o, defaultFilter: a = {} }) => {
  var { getFieldManager: i, getFilterData: s } = On(a);
  const l = () => {
    o({});
  }, d = () => {
    var x = s();
    o && o(x);
  }, g = () => {
    n();
  }, C = (x) => {
    x.keyCode === 27 && g();
  }, b = Pn(t);
  return /* @__PURE__ */ r("div", { className: "grid-filter-container", children: /* @__PURE__ */ r(
    cn,
    {
      open: e,
      onClose: g,
      PaperComponent: Fr,
      onKeyDown: C,
      PaperProps: { sx: { minWidth: "500px", borderRadius: "10px" } },
      children: /* @__PURE__ */ r(Re, { onClickAway: n, children: /* @__PURE__ */ D("div", { children: [
        /* @__PURE__ */ D("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ r("div", { className: "grid-header-text-container", children: /* @__PURE__ */ r("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ r("div", { className: "grid-header-icon-container", onClick: g, children: /* @__PURE__ */ r("span", { className: "grid-header-icon", children: /* @__PURE__ */ r(Sn, { className: "filter-cancel-icon" }) }) })
        ] }),
        /* @__PURE__ */ r("span", { className: "filter-header-border" }),
        /* @__PURE__ */ r("div", { className: "grid-filter-content", children: /* @__PURE__ */ r(Pe.Provider, { value: i, children: /* @__PURE__ */ r(
          Lt,
          {
            context: { formData: {} },
            layout: {
              type: "form",
              formLayout: {
                fields: b,
                options: {
                  columns: 2
                }
              },
              Renderer: xr
            }
          }
        ) }) }),
        /* @__PURE__ */ D("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ D(le, { className: "secondary-filled-button", disableRipple: !0, onClick: l, children: [
            /* @__PURE__ */ r(Nr, { className: "button-icon" }),
            "Reset"
          ] }),
          /* @__PURE__ */ D(le, { className: "filled-button", disableRipple: !0, onClick: d, children: [
            /* @__PURE__ */ r(Qt, { className: "button-icon" }),
            "Filter"
          ] })
        ] })
      ] }) })
    }
  ) });
};
function Mr(t) {
  return Oe({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" } }] })(t);
}
function kr(t) {
  return Oe({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M156,208a8,8,0,0,1-8,8H120a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v48h20A8,8,0,0,1,156,208ZM92.65,145.49a8,8,0,0,0-11.16,1.86L68,166.24,54.51,147.35a8,8,0,1,0-13,9.3L58.17,180,41.49,203.35a8,8,0,0,0,13,9.3L68,193.76l13.49,18.89a8,8,0,0,0,13-9.3L77.83,180l16.68-23.35A8,8,0,0,0,92.65,145.49Zm98.94,25.82c-4-1.16-8.14-2.35-10.45-3.84-1.25-.82-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.72,19.82-.56a8,8,0,0,0,4.07-15.48c-2.11-.55-21-5.22-32.83,2.76a20.58,20.58,0,0,0-8.95,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.33-2.15,3.93-4.6,3.06-15.16,1.55-19.54.35A8,8,0,0,0,173.93,214a60.63,60.63,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.81,20.81,0,0,0,9.18-15.23C218,179,201.48,174.17,191.59,171.31ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,1,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.68L160,51.31Z" } }] })(t);
}
const Rr = oe(function(e, n) {
  const { columns: o, children: a, EmptyChild: i, onRowClick: s, quickSearch: l } = e, d = i || Nt, g = e.customizer || Mt, C = e.customButton, b = e.gridTitle, [x, P] = _(!1), [M, I] = _(!1), [L, W] = _("standard"), [f, h] = _(!1), [m, v] = _(""), {
    setQueryFilter: w,
    setQuickSearch: S,
    setSortColumns: N,
    setEndPointOptions: A,
    gotoPage: X,
    setPageSize: V,
    getPageNo: Y,
    refreshData: y,
    setQueryLimit: p,
    getQueryLimit: O,
    data: z,
    totalRecords: G,
    queryLimit: K,
    pageSizeOptions: H,
    filter: E
  } = ve(e);
  console.log(H, "p");
  const B = n || Z(null);
  he(B, () => ({
    setFilter: (k) => {
      w(k);
    },
    refresh: () => {
      y();
    },
    resetFilter() {
      w({});
    },
    setEndPointOptions: (k) => {
      A(k);
    },
    addFilter: (k, ie) => {
      w((ot) => (ot[k] = ie, { ...ot }));
    },
    setQueryLimit: (k) => {
      p(k);
    },
    getQueryLimit: () => O(),
    setSortOptions(k) {
      N(k);
    },
    getCurrentData: () => z
  }), [O]);
  const c = (k, ie) => {
    X(ie - 1);
  }, F = xt(o, g), Q = (k) => {
    W(k);
  }, me = () => {
    P(!x);
  }, u = () => L === "compact" ? { padding: "3px" } : L === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, R = () => L === "compact" ? { padding: "3px" } : L === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, J = () => {
    var k;
    switch (L) {
      case "compact":
        k = /* @__PURE__ */ r(Ee, { className: "density-icon" });
        break;
      case "comfortable":
        k = /* @__PURE__ */ r(Le, { className: "density-icon" });
        break;
      default:
        k = /* @__PURE__ */ r(Te, { className: "grid-button-icon" });
        break;
    }
    return k;
  }, be = (k) => {
    const ie = k.target.value;
    v(ie), ie ? S(ie) : w({});
  }, Ie = (k) => {
    s && s(k);
  }, Xe = (k) => {
    const ie = parseInt(k.target.value, 10);
    V(ie);
  }, We = () => {
    I(!M);
  }, ze = () => {
  }, He = () => {
  }, qe = () => {
    e.onNewClick();
  }, T = 200, te = !!e.pageSize, Fe = !!l, $t = {
    transform: x ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Kt = {
    transform: M ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, jt = Math.ceil(G / K.limit);
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ D("div", { children: [
    a,
    /* @__PURE__ */ D("div", { className: "grid-header", children: [
      /* @__PURE__ */ r("div", { className: "grid-header-right-content", children: /* @__PURE__ */ r("span", { className: "grid-header-right-content-text", children: b }) }),
      /* @__PURE__ */ D("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ r("div", { className: "grid-header-filter", children: Fe && /* @__PURE__ */ r(
          Ne,
          {
            sx: { width: T },
            type: "text",
            value: m,
            onChange: be,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ r(Ze, { position: "end", children: /* @__PURE__ */ r(Ke, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ r(Re, { onClickAway: () => {
          P(!1);
        }, children: /* @__PURE__ */ D("div", { className: "grid-header-button grid-density-btn", onClick: me, children: [
          /* @__PURE__ */ D(le, { className: "grid-btn", disableRipple: !0, children: [
            J(),
            /* @__PURE__ */ r("span", { children: "Density" }),
            /* @__PURE__ */ r(lt, { style: $t, className: "avathar-arrw-icon" })
          ] }),
          x && /* @__PURE__ */ r("div", { className: "density-dropdown-content", children: /* @__PURE__ */ D("ul", { children: [
            /* @__PURE__ */ D("li", { onClick: () => Q("standard"), children: [
              /* @__PURE__ */ r(Te, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ D("li", { onClick: () => Q("compact"), children: [
              /* @__PURE__ */ r(Ee, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ D("li", { onClick: () => Q("comfortable"), children: [
              /* @__PURE__ */ r(Le, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        o.some((k) => k.searchable) && /* @__PURE__ */ D("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ D(le, { className: "grid-btn", disableRipple: !0, onClick: () => h(!0), children: [
            /* @__PURE__ */ r(Qt, { className: "grid-button-icon" }),
            /* @__PURE__ */ r("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ r(
            Yt,
            {
              columns: o,
              setFilter: w,
              defaultFilter: E,
              isOpen: f,
              onClose: () => h(!1)
            }
          )
        ] }),
        /* @__PURE__ */ r(Re, { onClickAway: () => {
          I(!1);
        }, children: /* @__PURE__ */ D("div", { className: "grid-header-button grid-export-btn", onClick: We, children: [
          /* @__PURE__ */ D(le, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ r(Or, { className: "grid-button-icon" }),
            /* @__PURE__ */ r("span", { children: "Export" }),
            /* @__PURE__ */ r(lt, { style: Kt, className: "avathar-arrw-icon" })
          ] }),
          M && /* @__PURE__ */ r("div", { className: "density-dropdown-content", children: /* @__PURE__ */ D("ul", { children: [
            /* @__PURE__ */ D("li", { onClick: ze, children: [
              /* @__PURE__ */ r(Mr, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ D("li", { onClick: He, children: [
              /* @__PURE__ */ r(kr, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        e.onNewClick ? /* @__PURE__ */ r("div", { className: "grid-header-button grid-add-btn", children: e.customAddButton ? /* @__PURE__ */ r("div", { onClick: qe, children: e.customAddButton }) : /* @__PURE__ */ r("div", { onClick: qe, children: /* @__PURE__ */ D(le, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ r(Ft, { className: "grid-button-icon" }),
          /* @__PURE__ */ r("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ r(ye, {}),
        C && C.map((k, ie) => /* @__PURE__ */ r("div", { className: "grid-custom-button", children: k }, ie))
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "grid-table", children: /* @__PURE__ */ r(
      Ot,
      {
        columnDefs: F,
        EmptyChild: d,
        customizer: g,
        rowData: z,
        onRowClick: Ie,
        onRowStyle: u,
        onHeaderStyle: R,
        onSortColumn: N
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "grid-footer", children: /* @__PURE__ */ r("div", { className: "grid-filter", children: te && /* @__PURE__ */ r("div", { children: /* @__PURE__ */ D("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ r("div", { style: { width: "50%" }, children: H && H[0] !== 15 ? /* @__PURE__ */ r(xe, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ D("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("span", { children: "Showing" }) }),
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
          Ct,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: H[0],
            onChange: Xe,
            label: "Rows per page",
            children: H.map((k) => /* @__PURE__ */ r(St, { value: k, children: k }, k))
          }
        ) }),
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ D("span", { children: [
          "of ",
          G,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ r("div", { style: {}, children: /* @__PURE__ */ r(
        Dt,
        {
          count: jt,
          shape: "rounded",
          componentName: "div",
          onChange: c,
          page: Y() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), jo = oe(function(e, n) {
  const { children: o, EmptyChild: a, onRowClick: i, quickSearch: s } = e, l = e.columns, d = a || Nt, g = e.customizer || Mt, C = e.customButton, b = e.gridTitle, [x, P] = _(!1), [M, I] = _("standard"), [L, W] = _(!1), [f, h] = _(""), {
    setQueryFilter: m,
    setQuickSearch: v,
    setSortColumns: w,
    setEndPointOptions: S,
    gotoPage: N,
    setPageSize: A,
    getPageNo: X,
    refreshData: V,
    setQueryLimit: Y,
    getQueryLimit: y,
    data: p,
    totalRecords: O,
    queryLimit: z,
    pageSizeOptions: G,
    filter: K
  } = ve(e), [H, E] = _(l(p)), B = n || Z(null);
  he(B, () => ({
    setFilter: (T) => {
      m(T);
    },
    refresh: () => {
      V();
    },
    resetFilter() {
      m({});
    },
    setEndPointOptions: (T) => {
      S(T);
    },
    addFilter: (T, te) => {
      m((Fe) => (Fe[T] = te, { ...Fe }));
    },
    setQueryLimit: (T) => {
      Y(T);
    },
    getQueryLimit: () => y(),
    setSortOptions(T) {
      w(T);
    },
    getCurrentData: () => p
  }), [y, H]), ae(() => {
    E(l(p));
  }, [p]);
  const c = (T, te) => {
    N(te);
  }, F = xt(H, g), Q = (T) => {
    I(T);
  }, me = () => {
    P(!x);
  }, u = () => M === "compact" ? { padding: "3px" } : M === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, R = () => M === "compact" ? { padding: "3px" } : M === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, J = () => {
    var T;
    switch (M) {
      case "compact":
        T = /* @__PURE__ */ r(Ee, { className: "density-icon" });
        break;
      case "comfortable":
        T = /* @__PURE__ */ r(Le, { className: "density-icon" });
        break;
      default:
        T = /* @__PURE__ */ r(Te, { className: "grid-button-icon" });
        break;
    }
    return T;
  }, be = (T) => {
    const te = T.target.value;
    h(te), te ? v(te) : m({});
  }, Ie = (T) => {
    i && i(T);
  }, Xe = (T) => {
    const te = parseInt(T.target.value, 10);
    A(te);
  }, We = () => {
    console.info("Export Clicked");
  }, ze = 200, He = !!e.pageSize;
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ D("div", { children: [
    o,
    /* @__PURE__ */ D("div", { className: "grid-header", children: [
      /* @__PURE__ */ r("div", { className: "grid-header-right-content", children: /* @__PURE__ */ r("span", { className: "grid-header-right-content-text", children: b }) }),
      /* @__PURE__ */ D("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ r("div", { className: "grid-header-filter", children: !!s && /* @__PURE__ */ r(
          Ne,
          {
            sx: { width: ze },
            type: "text",
            value: f,
            onChange: be,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ r(Ze, { position: "end", children: /* @__PURE__ */ r(Ke, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ r(Re, { onClickAway: () => {
          P(!1);
        }, children: /* @__PURE__ */ D("div", { className: "grid-header-button grid-density-btn", onClick: me, children: [
          /* @__PURE__ */ r(Me, { title: "Density", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, children: J() }) }),
          x && /* @__PURE__ */ r("div", { className: "density-dropdown-content", children: /* @__PURE__ */ D("ul", { children: [
            /* @__PURE__ */ D("li", { onClick: () => Q("standard"), children: [
              /* @__PURE__ */ r(Te, { className: "density-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ D("li", { onClick: () => Q("compact"), children: [
              /* @__PURE__ */ r(Ee, { className: "density-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ D("li", { onClick: () => Q("comfortable"), children: [
              /* @__PURE__ */ r(Le, { className: "density-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        H.some((T) => T.searchable) && /* @__PURE__ */ D("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ r(Me, { title: "Filter", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, onClick: () => W(!0), children: /* @__PURE__ */ r(Dn, { className: "grid-button-icon" }) }) }),
          /* @__PURE__ */ r(
            Yt,
            {
              columns: H,
              setFilter: m,
              defaultFilter: K,
              isOpen: L,
              onClose: () => W(!1)
            }
          )
        ] }),
        /* @__PURE__ */ r("div", { className: "grid-header-button grid-export-btn", onClick: We, children: /* @__PURE__ */ r(Me, { title: "Export", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ r(wn, { className: "grid-button-icon" }) }) }) }),
        e.onNewClick ? /* @__PURE__ */ r("div", { className: "grid-header-button", onClick: () => {
          e.onNewClick();
        }, children: /* @__PURE__ */ r(Me, { title: "New", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ r(Ft, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ r(ye, {}),
        C && C.map((T, te) => /* @__PURE__ */ r("div", { className: "grid-custom-button grid-export-btn", children: T }, te))
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "grid-table", children: /* @__PURE__ */ r(
      Ot,
      {
        columnDefs: F,
        EmptyChild: d,
        customizer: g,
        rowData: p,
        onRowClick: Ie,
        onRowStyle: u,
        onHeaderStyle: R,
        onSortColumn: w
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "grid-footer", children: /* @__PURE__ */ r("div", { className: "grid-filter", children: He && /* @__PURE__ */ r(
      un,
      {
        component: "div",
        count: O || 0,
        page: X(),
        onPageChange: c,
        rowsPerPage: z.limit,
        rowsPerPageOptions: G || [],
        onRowsPerPageChange: Xe
      }
    ) }) })
  ] }) });
}), Zo = oe(function(e, n) {
  const { columns: o, endPoint: a, storeFactory: i, layoutParams: s, pagination: l } = e, d = e.quickSearch || "", g = e.customButton, C = e.customAddButton, b = e.gridTitle, x = (M, I) => {
  };
  ae(() => {
    var M = ct.subscribe(e.topic, x);
    return () => {
      ct.unsubscribe(M);
    };
  }, [e.topic]);
  const P = {
    fields: o,
    pagination: l,
    quickSearch: d,
    storeOptions: {
      endPoint: a
    },
    actionOptions: e.actions
  };
  return /* @__PURE__ */ r(ye, { children: /* @__PURE__ */ r($e.Provider, { value: i, children: /* @__PURE__ */ r(
    Gt,
    {
      layout: P,
      context: s,
      customAddButton: C,
      onDataChange: e.onDataChange,
      gridTitle: b,
      defaultParams: e.defaultParams,
      customButton: g,
      customizer: e.customizer,
      ref: n
    }
  ) }) });
}), Tr = oe(function(e, n) {
  const o = e.layout, [a, i] = _(o.fields), s = o.pagination ? o.pagination : [15], l = Se($e), d = Se(gt);
  var g = o.storeOptions || {}, C = {};
  yn(C, g, d);
  const b = l.getGridStore(C, o.storeOptions.endPoint);
  ae(() => {
    g.hasLayout && b.queryLayout({}).then((M) => {
      i(M.columns);
    });
  }, []);
  const { onClick: x, onNewClick: P } = Fn(o.actionOptions, d);
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    Rr,
    {
      columns: a,
      store: b,
      pageSize: s,
      onRowClick: x,
      onDataChange: e.onDataChange,
      gridTitle: e.gridTitle,
      customAddButton: e.customAddButton,
      onNewClick: P,
      customizer: e.customizer,
      customButton: e.customButton,
      quickSearch: o.quickSearch,
      ref: n,
      defaultParams: e.defaultParams
    }
  ) });
}), Gt = Tr, Er = (t) => {
  const { layout: e, context: n } = t;
  var o = e.Container || Pt;
  return /* @__PURE__ */ r(Tt, { fallback: /* @__PURE__ */ r("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ r(o, { ...e, children: ((i) => /* @__PURE__ */ r(
    Gt,
    {
      context: n,
      layout: i
    }
  ))(e.tableLayout) }) });
}, Lr = (t) => {
  const { layout: e } = t;
  switch (e.type) {
    case "form":
      return /* @__PURE__ */ r(Lt, { ...t });
    case "view":
      return /* @__PURE__ */ r(kn, { ...t });
    case "grid":
      return /* @__PURE__ */ r(Er, { ...t });
    case "chart":
      return /* @__PURE__ */ r(gn, { ...t });
    default:
      return /* @__PURE__ */ r(Mn, { ...t });
  }
};
function Ar(t, e) {
  var n = t || 1, o = e;
  return {
    w: n,
    h: o
  };
}
const Ut = (t) => {
  const { layout: e, context: n } = t, o = e.sections;
  function a(i, s, l) {
    const { w: d, h: g } = Ar(i.width, i.height);
    return /* @__PURE__ */ r(fn, { sx: { width: d, height: g }, children: /* @__PURE__ */ r(
      Lr,
      {
        layout: i,
        context: s
      }
    ) }, (i.name || "tab") + l);
  }
  return /* @__PURE__ */ r("div", { style: { display: "flex", flexWrap: "wrap" }, children: o.map((i, s) => a(i, n, s)) });
}, ht = oe(function(e, n) {
  const { layout: o } = e;
  he(n, () => ({
    resetFilter() {
    }
  }), []);
  const a = {}, i = o.tabs;
  return /* @__PURE__ */ r("div", { children: i.map((s, l) => /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    Ut,
    {
      layout: s,
      context: a
    }
  ) }, s.name + l)) });
}), _r = (t) => {
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
}, mt = oe(function(e, n) {
  var C;
  const o = e.data || {}, { layout: a } = e;
  var { getFieldManager: i, getFormData: s, isFormValid: l } = Rn(o, (C = e.callbacks) == null ? void 0 : C.onFormValidChange, _r(e.mode));
  he(n, () => ({
    getData() {
      return s();
    },
    isValid() {
      return l();
    }
  }), []);
  const d = { formData: o }, g = a.tabs;
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(Pe.Provider, { value: i, children: g.map((b, x) => /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    Ut,
    {
      layout: b,
      context: d
    }
  ) }, b.name + x)) }) });
}), Vr = (t) => {
  switch (t) {
    case "grid":
      return ht;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), mt;
    case "formEdit":
    case "formNew":
    case "formView":
      return mt;
    default:
      return ht;
  }
}, Jo = oe(function(e, n) {
  const [o, a] = _(e.layout), i = e.mode ? e.mode : o.type ? o.type : "grid", s = e.layoutParams || {}, l = Vr(i), d = Z(0);
  return ae(() => {
    a(e.layout), d.current < 999999 ? d.current++ : d.current = 0;
  }, [e.layout]), /* @__PURE__ */ r(Tt, { fallback: /* @__PURE__ */ r("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ r($e.Provider, { value: e.storeFactory, children: /* @__PURE__ */ r(gt.Provider, { value: s, children: /* @__PURE__ */ r(l, { ...e, ref: (g) => {
    n && (n.current = g);
  } }, d.current) }) }) });
}), ea = oe(function(e, n) {
  const { children: o, Child: a, childProps: i, pageSize: s } = e, l = n || Z(null), {
    setQueryFilter: d,
    refreshData: g,
    setSortColumns: C,
    setEndPointOptions: b,
    setQuickSearch: x,
    gotoPage: P,
    setPageSize: M,
    getPageNo: I,
    setQueryLimit: L,
    getQueryLimit: W,
    data: f,
    totalRecords: h,
    pageSizeOptions: m,
    queryLimit: v
  } = ve(e), w = e.listKeyProvider || ((p, O) => O);
  he(l, () => ({
    setFilter: (p) => {
      d(p);
    },
    refresh: () => {
      g();
    },
    resetFilter() {
      d({});
    },
    setEndPointOptions: (p) => {
      b(p);
    },
    addFilter: (p, O) => {
      d((z) => (z[p] = O, { ...z }));
    },
    setQueryLimit: (p) => {
      L(p);
    },
    getQueryLimit: () => W(),
    getCurrentData: () => f,
    setSortOptions(p) {
      C(p);
    }
  }), [d]);
  const S = (p, O) => {
    P(O - 1);
  }, N = (p) => {
    const O = p.target.value;
    x(O);
  }, A = (p) => {
    const O = parseInt(p.target.value, 10);
    M(O);
  }, X = 200, V = !!s, Y = !!e.quickSearch, y = Math.ceil(h / v.limit);
  return console.log(I(), "p", y), /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("div", { className: "card-page-container", children: /* @__PURE__ */ D("div", { children: [
    /* @__PURE__ */ D("div", { className: "card-header", children: [
      o,
      /* @__PURE__ */ r("div", { className: "card-filter", children: Y && /* @__PURE__ */ r(
        Ne,
        {
          sx: { width: X },
          type: "text",
          onChange: N,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ r(Ze, { position: "end", children: /* @__PURE__ */ r(Ke, { className: "card-filter-icon" }) })
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
      mn,
      {
        Child: a,
        childKeyProvider: w,
        preProcess: e.preProcess,
        dataList: f,
        childProps: i,
        EmptyChild: e.EmptyChild
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "card-pagination", children: V && // <TablePagination
    //     component="div"
    //     count={totalRecords || 0}
    //     page={getPageNo()}
    //     onPageChange={nextPage}
    //     rowsPerPage={queryLimit.limit}
    //     rowsPerPageOptions={pageSizeOptions || []}
    //     onRowsPerPageChange={handleRowsPerPageChange}
    // />
    /* @__PURE__ */ D("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ r("div", { style: { width: "50%" }, children: m || m[0] !== 15 ? /* @__PURE__ */ r(xe, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ D("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("span", { children: "Showing" }) }),
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
          Ct,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: m[0],
            onChange: A,
            label: "Rows per page",
            children: m.map((p) => /* @__PURE__ */ r(St, { value: p, children: p }, p))
          }
        ) }),
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ D("span", { children: [
          "of ",
          h,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ r("div", { style: {}, children: /* @__PURE__ */ r(hn, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ r(
        Dt,
        {
          count: y,
          shape: "rounded",
          componentName: "div",
          onChange: S,
          page: I() + 1
        }
      ) }) })
    ] }) })
  ] }) }) });
});
export {
  jo as D,
  Jo as F,
  Gt as G,
  Ln as M,
  Zo as P,
  ea as S,
  Ut as T,
  Rr as a,
  $o as b,
  An as c,
  Vn as d,
  Lt as e,
  xr as f,
  Et as g,
  Yt as h,
  Er as i,
  Lr as j,
  ht as k,
  mt as l,
  ve as u
};
