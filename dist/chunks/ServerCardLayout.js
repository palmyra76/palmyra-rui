import "../assets/ServerCardLayout.css";
import en from "../palmyra/mui/form/MuiDatePicker.js";
import tn from "../palmyra/mui/form/MuiDateTimePicker.js";
import nn from "../palmyra/mui/form/MuiRadioGroup.js";
import ot from "../palmyra/mui/form/MuiSelect.js";
import rn from "../palmyra/mui/form/MuiTextArea.js";
import on from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import an from "../palmyra/mui/form/MuiCheckBox.js";
import sn from "../palmyra/mui/form/MuiSwitch.js";
import ln from "../palmyra/mui/form/MuiIOSSwitch.js";
import cn from "../palmyra/mui/form/MuiPassword.js";
import dn from "../palmyra/mui/form/MuiNumberField.js";
import He from "../palmyra/mui/form/FieldDecorator.js";
import { FieldManagerContext as Pe, StoreFactoryContext as Ue, LayoutParamsContext as pt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as r, jsxs as C, Fragment as ye } from "react/jsx-runtime";
import yt, { useState as I, useRef as j, useEffect as ae, forwardRef as oe, useContext as Se, useImperativeHandle as he, useMemo as vt } from "react";
import { a as $e } from "./index.esm2.js";
import { FormControlLabel as at, Checkbox as it, FormControl as xe, FormHelperText as Ke, Autocomplete as bt, TextField as Ne, CircularProgress as Ct, Dialog as un, ClickAwayListener as Me, Button as le, Paper as fn, InputAdornment as Ze, Select as St, MenuItem as Dt, Pagination as wt, Tooltip as Fe, TablePagination as hn, Box as mn, Stack as gn } from "@mui/material";
import pn from "../palmyra/layout/card/CardLayout.js";
import yn from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as je, getFieldLabel as Je } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as De } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as we } from "../palmyra/form/FormUtil.js";
import { T as st, a as lt, b as vn, c as Pt, d as bn } from "./index.esm.js";
import { delay as xt, delayGenerator as Cn, mergeDeep as Sn } from "../palmyra/utils/index.js";
import Dn from "../palmyra/mui/form/MuiDateRangePicker.js";
import wn from "../palmyra/mui/form/MuiIntegerField.js";
import Nt from "../palmyra/layout/container/SectionContainer.js";
import Pn from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as Ot } from "../palmyra/grid/base/ColumnConverter.js";
import Ft from "../palmyra/grid/base/EmptyChildTable.js";
import Rt from "../palmyra/grid/base/TableX.js";
import { Close as xn, KeyboardArrowDown as ct, Menu as ke, DensitySmall as Te, DensityLarge as Ee, Add as Mt, FilterAlt as Nn, FileDownloadOutlined as On } from "@mui/icons-material";
import { NoopCustomizer as kt } from "../palmyra/grid/Types.js";
import { convertToField as Fn } from "../palmyra/grid/base/GridFieldConverter.js";
import { a as Rn, g as Mn } from "./_commonjsHelpers.js";
import { p as Tt } from "./index.js";
import Et from "react-dom";
import { createFilterData as kn } from "../palmyra/form/PalmyraFilterManager.js";
import { G as At } from "./iconBase.js";
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
import { getActionPublishers as Tn } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as Lt } from "../palmyra/layout/ErrorBoundary.js";
import En from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import An from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as Ln } from "./PalmyraFieldManager.js";
import { useKeyValue as _n } from "../palmyra/utils/pubsub/PubSubHelper.js";
const ve = (t) => {
  var K, Y;
  const { store: e, quickSearch: n } = t, o = t.fetchAll != !1, [a, i] = I(t.endPointOptions), [s, l] = I(null), h = ((K = t.defaultParams) == null ? void 0 : K.filter) || {}, m = ((Y = t.defaultParams) == null ? void 0 : Y.sort) || {}, [b, v] = t.filterTopic ? _n(t.filterTopic, h) : I(h), [x, P] = I({}), R = j(t.initialFetch == !1), z = t.pageSize ? t.pageSize : 15;
  var A = z instanceof Array ? z : [z], V = z instanceof Array ? z[0] : z;
  const [u, f] = I({ limit: V, offset: 0, total: !0 }), [g, p] = I(null), w = () => Math.round(u.offset / u.limit), S = () => u, O = (L) => {
    f((X) => ({ limit: X.limit, total: X.total, offset: L * X.limit }));
  }, _ = (L) => {
    const X = L > 10 || L == -1 ? L : 15;
    f((c) => {
      const F = Math.floor(c.offset / X) * X;
      return { limit: X, total: c.total, offset: F };
    });
  }, q = () => b ? Object.keys(b).length == 0 : !1, B = (L) => {
    p((X) => (setTimeout(() => {
      t.onDataChange && t.onDataChange(g, X);
    }, 300), L));
  };
  ae(() => {
    if (R.current) {
      R.current = !1;
      return;
    }
    (o || !q()) && H();
  }, [u, x, a]);
  const H = () => {
    const X = {
      sortOrder: x && Object.keys(x).length > 0 ? x : m,
      total: !0,
      endPointVars: a,
      ...u,
      filter: { ...b, ...h }
    };
    if (e)
      try {
        e.query(X).then((c) => {
          B(c.result), l(c.total);
        }).catch((c) => {
          var F = c.response ? c.response : c;
          console.error("error while fetching", F), N();
        });
      } catch (c) {
        console.error(c), y();
      }
    else
      console.error("Store is not provided for the Grid"), y();
  }, y = () => {
    B([]), l(0);
  }, N = () => {
    B(void 0), l(null);
  };
  return {
    setQueryFilter: (L) => {
      typeof L == "function" || L && Object.keys(L).length > 0 ? v(L) : v({}), O(0);
    },
    setQuickSearch: (L) => {
      const X = n;
      v(L ? (c) => (c[X] = L, { ...c }) : (c) => (delete c[X], { ...c })), O(0);
    },
    setSortColumns: (L) => {
      P(L);
    },
    setEndPointOptions: i,
    refreshData: H,
    gotoPage: O,
    setPageSize: _,
    getPageNo: w,
    getQueryLimit: S,
    setQueryLimit: f,
    filter: b,
    queryLimit: u,
    data: g,
    totalRecords: s,
    pageSizeOptions: A
  };
};
function ut(t) {
  return t ? Array.isArray(t) ? t : typeof t == "string" ? t.split(",") : [t] : [];
}
const jo = oe(function(e, n) {
  const o = Se(Pe), a = n || j(null), i = o(e, "checkbox", a), { mutateOptions: s, setMutateOptions: l } = i, [h, m] = I(!1), b = ut(i.data), v = i.error, x = i.eventListeners, R = { store: i.store, pageSize: -1 }, { data: z } = ve(R), A = z, V = j(null), u = e.lookupOptions || {}, f = u.idAttribute || "id", g = u.displayAttribute || "name", p = e.showSelectedOnly && e.readonly, w = De(f) ? (y) => we(f, y) : (y) => y[f], S = De(g) ? (y) => we(g, y) : (y) => y[g];
  he(a, () => ({
    focus() {
      V.current.focus();
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
    setValue(y, N = !1) {
      i.setData(y, N);
    },
    setVisible(y) {
      l((N) => ({ ...N, visible: y }));
    },
    setRequired(y) {
      l((N) => ({ ...N, required: y }));
    },
    setReadOnly(y) {
      l((N) => ({ ...N, readonly: y }));
    },
    setAttribute(y) {
      l((N) => ({ ...N, ...y }));
    },
    setOptions(y) {
    },
    getOptions() {
    }
  }), [i]);
  var O = je(e, i.data, e.label);
  e.readonly && (O.inputprops = { readOnly: !0 });
  function _(y, N) {
    const D = ut(i.data);
    var M = D.indexOf(y);
    N ? M < 0 && D.push(y) : M >= 0 && D.splice(M, 1), x.onValueChange(D.toString());
  }
  var q = {
    onBlur: x.onBlur,
    onFocus: x.onFocus,
    onChange: (y) => {
      _(y.target.value, y.target.checked);
    }
  };
  const B = (y) => {
    const N = y.toString();
    return b.includes(N);
  }, H = (y) => {
    const N = y.target.checked;
    m(N);
    var D = [];
    N && A.map((M) => {
      D.push(w(M));
    }), x.onValueChange(D.toString());
  };
  return /* @__PURE__ */ r("div", { className: e.className, children: s.visible && /* @__PURE__ */ C(
    He,
    {
      label: Je(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: [
        /* @__PURE__ */ r("div", { children: e.hideSelectAll ? /* @__PURE__ */ r(ye, {}) : /* @__PURE__ */ r(
          at,
          {
            control: /* @__PURE__ */ r(
              it,
              {
                icon: /* @__PURE__ */ r(st, { style: { fontSize: "20px" } }),
                checkedIcon: /* @__PURE__ */ r(lt, { style: { fontSize: "20px" } }),
                onChange: H
              }
            ),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ C(
          xe,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: v.status,
            ...O,
            children: [
              A ? A.filter((y) => p ? B(w(y)) : !0).map((y) => /* @__PURE__ */ r(
                at,
                {
                  value: w(y),
                  control: /* @__PURE__ */ r(
                    it,
                    {
                      icon: /* @__PURE__ */ r(st, { style: { fontSize: "20px" } }),
                      checkedIcon: /* @__PURE__ */ r(lt, { style: { fontSize: "20px" } }),
                      ...q,
                      checked: B(w(y)),
                      disabled: e.readonly
                    }
                  ),
                  label: S(y)
                },
                w(y)
              )) : /* @__PURE__ */ r("div", { children: "No options provided" }),
              /* @__PURE__ */ r(Ke, { className: "form-error-text", children: v.message })
            ]
          }
        )
      ]
    }
  ) });
}), Vn = Cn(100), In = oe(function(e, n) {
  const o = Se(Pe), a = n || j(null), i = j(null), s = j(0), [l, h] = I([]), [m, b] = I(""), [v, x] = I(!1), P = o(e, "serverlookup", a), R = e.store || P.store, z = e.lookupOptions || {}, A = z.idAttribute || "id", V = z.displayAttribute || "name", u = V, f = {
    store: R,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: u,
    initialFetch: !1
  }, g = ve(f), p = P.eventListeners, w = P.error, { mutateOptions: S, setMutateOptions: O } = P, _ = P.data, q = v && l.length < (_ ? 2 : 1), { setQueryFilter: B, setEndPointOptions: H, setQuickSearch: y, totalRecords: N, refreshData: D } = g, M = g.data, Q = De(A) ? (d) => we(A, d) : (d) => d == null ? void 0 : d[A], K = De(V) ? (d) => we(V, d) : (d) => d == null ? void 0 : d[V];
  ae(() => {
    var d = _ != "" ? _ : void 0;
    d && h([d]);
  }, [P.data]), ae(() => {
    const d = M ? [...M] : [], T = _ != "" ? _ : void 0, J = Q(T), be = K(T);
    d && J && be && !F(d, J) && d.unshift(T), h(d), s.current < N && (s.current = N);
  }, [M, N]), ae(() => {
    xt(Y);
  }, [m]), ae(() => {
    Vn(Y);
  }, [v]);
  function Y() {
    v && (m.length > 0 && m != K(_) ? y("*" + m + "*") : M ? y(null) : D());
  }
  var L = {
    onBlur: p.onBlur,
    onFocus: p.onFocus,
    onChange: (d, T) => {
      X(T);
    },
    onInputChange: (d, T) => (b(T), !0)
  };
  const X = (d) => {
    p.onValueChange(d);
  }, c = (d) => typeof d == "object" ? K(d) + "" : (console.log(d), "");
  function F(d, T) {
    return d.find((J) => {
      if (Q(J) == T)
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
    setValue(d, T = !1) {
      P.setData(d, T);
    },
    setVisible(d) {
      O((T) => ({ ...T, visible: d }));
    },
    setRequired(d) {
      O((T) => ({ ...T, required: d }));
    },
    setReadOnly(d) {
      O((T) => ({ ...T, readonly: d }));
    },
    setAttribute(d) {
      O((T) => ({ ...T, ...d }));
    },
    setFilter(d) {
      B(d);
    },
    resetFilter() {
      B({});
    },
    setEndPointOptions(d) {
      H(d);
    },
    getCurrentData: () => _,
    refresh: () => {
      D();
    },
    addFilter(d, T) {
      B((J) => (J[d] = T, { ...J }));
    },
    setDefaultFilter(d) {
    },
    setSortOptions(d) {
    }
  }), [P, B]);
  var G = je(e, _, e.label);
  S.readonly && (G.inputProps = { readOnly: !0 });
  const me = (d, T) => d instanceof Array ? d.some((J) => Q(J) == Q(T)) : Q(d) == Q(T);
  return /* @__PURE__ */ r(
    He,
    {
      label: Je(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ C(xe, { fullWidth: !0, error: w.status, children: [
        /* @__PURE__ */ r(
          bt,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: e.multiple,
            readOnly: e.readonly,
            renderOption: e.renderOption,
            isOptionEqualToValue: me,
            filterOptions: (d) => d,
            renderInput: (d) => /* @__PURE__ */ r(
              Ne,
              {
                ...d,
                inputRef: (T) => {
                  i.current = T;
                },
                variant: e.variant || "standard",
                label: e.label,
                autoFocus: e.autoFocus,
                required: e.required,
                InputProps: {
                  ...d.InputProps,
                  endAdornment: /* @__PURE__ */ C(ye, { children: [
                    q ? /* @__PURE__ */ r(Ct, { color: "inherit", size: 18 }) : null,
                    d.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: c,
            ...G,
            options: l,
            open: v,
            onClose: () => {
              x(!1);
            },
            onOpen: (d) => {
              x(!0);
            },
            ...L
          }
        ),
        /* @__PURE__ */ r(Ke, { className: "form-error-text", children: w.message })
      ] })
    }
  );
}), Bn = oe(function(e, n) {
  const o = Se(Pe), a = n || j(null), i = j(null), s = j(0), [l, h] = I([]), [m, b] = I(""), [v, x] = I(!1), P = o(e, "autoComplete", a), R = e.store || P.store, A = (e.lookupOptions || {}).attribute || "name", V = A, u = {
    store: R,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: V,
    initialFetch: !1
  }, f = ve(u), g = P.eventListeners, p = P.error, { mutateOptions: w, setMutateOptions: S } = P, O = P.data, _ = v && l.length < (O ? 2 : 1), { setQueryFilter: q, setEndPointOptions: B, setQuickSearch: H, totalRecords: y, refreshData: N } = f, D = f.data, M = De(A) ? (c) => we(A, c) : (c) => c == null ? void 0 : c[A];
  ae(() => {
    var c = O != "" ? O : void 0;
    c && h([c]);
  }, [P.data]), ae(() => {
    const F = (D ? [...D] : []).map((me) => M(me)), G = O != "" ? O : void 0;
    F && G && !L(F, G) && F.unshift(G), h(F), s.current < y && (s.current = y);
  }, [D, y]), ae(() => {
    xt(Q);
  }, [m, v]);
  function Q() {
    v && (m.length > 0 && m != O ? H("*" + m + "*") : D ? H(null) : N());
  }
  var K = {
    onBlur: (c) => {
      Y(m), g.onBlur(m);
    },
    onFocus: g.onFocus,
    onChange: (c, F) => {
      Y(F);
    },
    onInputChange: (c, F) => (b(F), !0)
  };
  const Y = (c) => {
    g.onValueChange(c);
  };
  function L(c, F) {
    return c.find((G) => {
      if (G == F)
        return G;
    });
  }
  he(a, () => ({
    focus() {
      i.current.focus();
    },
    isValid() {
      return !p.status;
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
      q(c);
    },
    resetFilter() {
      q({});
    },
    setEndPointOptions(c) {
      B(c);
    },
    getCurrentData: () => O,
    refresh: () => {
      N();
    },
    addFilter(c, F) {
      q((G) => (G[c] = F, { ...G }));
    },
    setDefaultFilter(c) {
    },
    setSortOptions(c) {
    }
  }), [P, q]);
  var X = je(e, O, e.label);
  return w.readonly && (X.inputProps = { readOnly: !0 }), /* @__PURE__ */ r(
    He,
    {
      label: Je(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ C(xe, { fullWidth: !0, error: p.status, children: [
        /* @__PURE__ */ r(
          bt,
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
                ...X,
                InputProps: {
                  ...c.InputProps,
                  endAdornment: /* @__PURE__ */ C(ye, { children: [
                    _ ? /* @__PURE__ */ r(Ct, { color: "inherit", size: 18 }) : null,
                    c.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...X,
            options: l,
            open: v,
            onClose: () => {
              x(!1);
            },
            onOpen: (c) => {
              x(!0);
            },
            ...K
          }
        ),
        /* @__PURE__ */ r(Ke, { className: "form-error-text", children: p.message })
      ] })
    }
  );
}), Xn = (t) => {
  const { fieldDef: e } = t;
  return /* @__PURE__ */ C("div", { children: [
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
}, _t = (t, e, n) => {
  const { type: o } = t, a = { fieldDef: t, title: n };
  switch (o) {
    case "string":
      return U(a, on);
    case "radio":
      return U(a, nn);
    case "select":
      return U(a, ot);
    case "date":
      return U(a, en);
    case "datetime":
      return U(a, tn);
    case "checkbox":
      return U(a, an);
    case "serverlookup":
      return U(a, In);
    case "textarea":
      return U(a, rn);
    case "switch":
      return U(a, sn);
    case "iosswitch":
      return U(a, ln);
    case "password":
      return U(a, cn);
    case "float":
    case "number":
    case "numbersOnly":
      return U(a, dn);
    case "integer":
      return U(a, wn);
    case "multiSelect":
      return U(a, ot);
    case "dateRange":
      return U(a, Dn);
    case "autoComplete":
      return U(a, Bn);
    default:
      return Xn(a);
  }
}, zn = oe(function(e, n) {
  var b;
  const { formLayout: o, context: a } = e, { formData: i } = a, s = o.Container;
  j({});
  const l = vt(() => (v) => _t(v), [i.data]);
  var h = ((b = o.options) == null ? void 0 : b.columns) || 1, m = { columns: h };
  return s ? /* @__PURE__ */ r("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: o.fields.map((v, x) => /* @__PURE__ */ r(
    s,
    {
      index: x,
      field: v,
      label: v.title,
      options: m,
      children: l(v)
    },
    v.attribute + v.name + v.type
  )) }) : /* @__PURE__ */ r("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: o.fields.map((v, x) => l(v)) });
}), Vt = (t) => {
  const { layout: e, context: n } = t;
  var o = e.Renderer || zn, a = e.Container || Nt;
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
      children: /* @__PURE__ */ r(Pn, { columns: e.columns, children: i(e.formLayout) })
    }
  );
};
var Ae = { exports: {} }, It = {};
function Bt(t) {
  var e, n, o = "";
  if (typeof t == "string" || typeof t == "number")
    o += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = Bt(t[e])) && (o && (o += " "), o += n);
    else
      for (e in t)
        t[e] && (o && (o += " "), o += e);
  return o;
}
function ft() {
  for (var t, e, n = 0, o = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = Bt(t)) && (o && (o += " "), o += e);
  return o;
}
const qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: ft,
  default: ft
}, Symbol.toStringTag, { value: "Module" })), Wn = /* @__PURE__ */ Rn(qn);
var W = {}, ce = {};
Object.defineProperty(ce, "__esModule", {
  value: !0
});
ce.dontSetMe = Un;
ce.findInArray = Qn;
ce.int = Hn;
ce.isFunction = Yn;
ce.isNum = Gn;
function Qn(t, e) {
  for (let n = 0, o = t.length; n < o; n++)
    if (e.apply(e, [t[n], n, t]))
      return t[n];
}
function Yn(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Function]";
}
function Gn(t) {
  return typeof t == "number" && !isNaN(t);
}
function Hn(t) {
  return parseInt(t, 10);
}
function Un(t, e, n) {
  if (t[e])
    return new Error("Invalid prop ".concat(e, " passed to ").concat(n, " - do not set this, set it on the child."));
}
var ge = {};
Object.defineProperty(ge, "__esModule", {
  value: !0
});
ge.browserPrefixToKey = zt;
ge.browserPrefixToStyle = $n;
ge.default = void 0;
ge.getPrefix = Xt;
const Qe = ["Moz", "Webkit", "O", "ms"];
function Xt() {
  var t;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const n = (t = window.document) === null || t === void 0 || (t = t.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!n || e in n)
    return "";
  for (let o = 0; o < Qe.length; o++)
    if (zt(e, Qe[o]) in n)
      return Qe[o];
  return "";
}
function zt(t, e) {
  return e ? "".concat(e).concat(Kn(t)) : t;
}
function $n(t, e) {
  return e ? "-".concat(e.toLowerCase(), "-").concat(t) : t;
}
function Kn(t) {
  let e = "", n = !0;
  for (let o = 0; o < t.length; o++)
    n ? (e += t[o].toUpperCase(), n = !1) : t[o] === "-" ? n = !0 : e += t[o];
  return e;
}
ge.default = Xt();
Object.defineProperty(W, "__esModule", {
  value: !0
});
W.addClassName = Qt;
W.addEvent = Jn;
W.addUserSelectStyles = dr;
W.createCSSTransform = ir;
W.createSVGTransform = sr;
W.getTouch = lr;
W.getTouchIdentifier = cr;
W.getTranslation = et;
W.innerHeight = rr;
W.innerWidth = or;
W.matchesSelector = Wt;
W.matchesSelectorAndParentsTo = jn;
W.offsetXYFromParent = ar;
W.outerHeight = tr;
W.outerWidth = nr;
W.removeClassName = Yt;
W.removeEvent = er;
W.removeUserSelectStyles = ur;
var re = ce, ht = Zn(ge);
function qt(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (qt = function(o) {
    return o ? n : e;
  })(t);
}
function Zn(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var n = qt(e);
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
let Re = "";
function Wt(t, e) {
  return Re || (Re = (0, re.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, re.isFunction)(t[n]);
  })), (0, re.isFunction)(t[Re]) ? t[Re](e) : !1;
}
function jn(t, e, n) {
  let o = t;
  do {
    if (Wt(o, e))
      return !0;
    if (o === n)
      return !1;
    o = o.parentNode;
  } while (o);
  return !1;
}
function Jn(t, e, n, o) {
  if (!t)
    return;
  const a = {
    capture: !0,
    ...o
  };
  t.addEventListener ? t.addEventListener(e, n, a) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n;
}
function er(t, e, n, o) {
  if (!t)
    return;
  const a = {
    capture: !0,
    ...o
  };
  t.removeEventListener ? t.removeEventListener(e, n, a) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null;
}
function tr(t) {
  let e = t.clientHeight;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e += (0, re.int)(n.borderTopWidth), e += (0, re.int)(n.borderBottomWidth), e;
}
function nr(t) {
  let e = t.clientWidth;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e += (0, re.int)(n.borderLeftWidth), e += (0, re.int)(n.borderRightWidth), e;
}
function rr(t) {
  let e = t.clientHeight;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e -= (0, re.int)(n.paddingTop), e -= (0, re.int)(n.paddingBottom), e;
}
function or(t) {
  let e = t.clientWidth;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e -= (0, re.int)(n.paddingLeft), e -= (0, re.int)(n.paddingRight), e;
}
function ar(t, e, n) {
  const a = e === e.ownerDocument.body ? {
    left: 0,
    top: 0
  } : e.getBoundingClientRect(), i = (t.clientX + e.scrollLeft - a.left) / n, s = (t.clientY + e.scrollTop - a.top) / n;
  return {
    x: i,
    y: s
  };
}
function ir(t, e) {
  const n = et(t, e, "px");
  return {
    [(0, ht.browserPrefixToKey)("transform", ht.default)]: n
  };
}
function sr(t, e) {
  return et(t, e, "");
}
function et(t, e, n) {
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
function lr(t, e) {
  return t.targetTouches && (0, re.findInArray)(t.targetTouches, (n) => e === n.identifier) || t.changedTouches && (0, re.findInArray)(t.changedTouches, (n) => e === n.identifier);
}
function cr(t) {
  if (t.targetTouches && t.targetTouches[0])
    return t.targetTouches[0].identifier;
  if (t.changedTouches && t.changedTouches[0])
    return t.changedTouches[0].identifier;
}
function dr(t) {
  if (!t)
    return;
  let e = t.getElementById("react-draggable-style-el");
  e || (e = t.createElement("style"), e.type = "text/css", e.id = "react-draggable-style-el", e.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, e.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, t.getElementsByTagName("head")[0].appendChild(e)), t.body && Qt(t.body, "react-draggable-transparent-selection");
}
function ur(t) {
  if (t)
    try {
      if (t.body && Yt(t.body, "react-draggable-transparent-selection"), t.selection)
        t.selection.empty();
      else {
        const e = (t.defaultView || window).getSelection();
        e && e.type !== "Caret" && e.removeAllRanges();
      }
    } catch {
    }
}
function Qt(t, e) {
  t.classList ? t.classList.add(e) : t.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) || (t.className += " ".concat(e));
}
function Yt(t, e) {
  t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"), "");
}
var de = {};
Object.defineProperty(de, "__esModule", {
  value: !0
});
de.canDragX = mr;
de.canDragY = gr;
de.createCoreData = yr;
de.createDraggableData = vr;
de.getBoundPosition = fr;
de.getControlPosition = pr;
de.snapToGrid = hr;
var ne = ce, pe = W;
function fr(t, e, n) {
  if (!t.props.bounds)
    return [e, n];
  let {
    bounds: o
  } = t.props;
  o = typeof o == "string" ? o : br(o);
  const a = tt(t);
  if (typeof o == "string") {
    const {
      ownerDocument: i
    } = a, s = i.defaultView;
    let l;
    if (o === "parent" ? l = a.parentNode : l = i.querySelector(o), !(l instanceof s.HTMLElement))
      throw new Error('Bounds selector "' + o + '" could not find an element.');
    const h = l, m = s.getComputedStyle(a), b = s.getComputedStyle(h);
    o = {
      left: -a.offsetLeft + (0, ne.int)(b.paddingLeft) + (0, ne.int)(m.marginLeft),
      top: -a.offsetTop + (0, ne.int)(b.paddingTop) + (0, ne.int)(m.marginTop),
      right: (0, pe.innerWidth)(h) - (0, pe.outerWidth)(a) - a.offsetLeft + (0, ne.int)(b.paddingRight) - (0, ne.int)(m.marginRight),
      bottom: (0, pe.innerHeight)(h) - (0, pe.outerHeight)(a) - a.offsetTop + (0, ne.int)(b.paddingBottom) - (0, ne.int)(m.marginBottom)
    };
  }
  return (0, ne.isNum)(o.right) && (e = Math.min(e, o.right)), (0, ne.isNum)(o.bottom) && (n = Math.min(n, o.bottom)), (0, ne.isNum)(o.left) && (e = Math.max(e, o.left)), (0, ne.isNum)(o.top) && (n = Math.max(n, o.top)), [e, n];
}
function hr(t, e, n) {
  const o = Math.round(e / t[0]) * t[0], a = Math.round(n / t[1]) * t[1];
  return [o, a];
}
function mr(t) {
  return t.props.axis === "both" || t.props.axis === "x";
}
function gr(t) {
  return t.props.axis === "both" || t.props.axis === "y";
}
function pr(t, e, n) {
  const o = typeof e == "number" ? (0, pe.getTouch)(t, e) : null;
  if (typeof e == "number" && !o)
    return null;
  const a = tt(n), i = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, pe.offsetXYFromParent)(o || t, i, n.props.scale);
}
function yr(t, e, n) {
  const o = !(0, ne.isNum)(t.lastX), a = tt(t);
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
function vr(t, e) {
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
function br(t) {
  return {
    left: t.left,
    top: t.top,
    right: t.right,
    bottom: t.bottom
  };
}
function tt(t) {
  const e = t.findDOMNode();
  if (!e)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return e;
}
var Le = {}, _e = {};
Object.defineProperty(_e, "__esModule", {
  value: !0
});
_e.default = Cr;
function Cr() {
}
Object.defineProperty(Le, "__esModule", {
  value: !0
});
Le.default = void 0;
var Ye = Dr(yt), ee = nt(Tt), Sr = nt(Et), $ = W, ue = de, Ge = ce, Ce = nt(_e);
function nt(t) {
  return t && t.__esModule ? t : { default: t };
}
function Gt(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Gt = function(o) {
    return o ? n : e;
  })(t);
}
function Dr(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var n = Gt(e);
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
function Z(t, e, n) {
  return e = wr(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function wr(t) {
  var e = Pr(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function Pr(t, e) {
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
let fe = se.mouse, Ve = class extends Ye.Component {
  constructor() {
    super(...arguments), Z(this, "dragging", !1), Z(this, "lastX", NaN), Z(this, "lastY", NaN), Z(this, "touchIdentifier", null), Z(this, "mounted", !1), Z(this, "handleDragStart", (e) => {
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
      } = i, h = (0, ue.createCoreData)(this, s, l);
      (0, Ce.default)("DraggableCore: handleDragStart: %j", h), (0, Ce.default)("calling", this.props.onStart), !(this.props.onStart(e, h) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, $.addUserSelectStyles)(o), this.dragging = !0, this.lastX = s, this.lastY = l, (0, $.addEvent)(o, fe.move, this.handleDrag), (0, $.addEvent)(o, fe.stop, this.handleDragStop));
    }), Z(this, "handleDrag", (e) => {
      const n = (0, ue.getControlPosition)(e, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: o,
        y: a
      } = n;
      if (Array.isArray(this.props.grid)) {
        let l = o - this.lastX, h = a - this.lastY;
        if ([l, h] = (0, ue.snapToGrid)(this.props.grid, l, h), !l && !h)
          return;
        o = this.lastX + l, a = this.lastY + h;
      }
      const i = (0, ue.createCoreData)(this, o, a);
      if ((0, Ce.default)("DraggableCore: handleDrag: %j", i), this.props.onDrag(e, i) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const h = document.createEvent("MouseEvents");
          h.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(h);
        }
        return;
      }
      this.lastX = o, this.lastY = a;
    }), Z(this, "handleDragStop", (e) => {
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
        let h = o - this.lastX || 0, m = a - this.lastY || 0;
        [h, m] = (0, ue.snapToGrid)(this.props.grid, h, m), o = this.lastX + h, a = this.lastY + m;
      }
      const i = (0, ue.createCoreData)(this, o, a);
      if (this.props.onStop(e, i) === !1 || this.mounted === !1)
        return !1;
      const l = this.findDOMNode();
      l && this.props.enableUserSelectHack && (0, $.removeUserSelectStyles)(l.ownerDocument), (0, Ce.default)("DraggableCore: handleDragStop: %j", i), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, l && ((0, Ce.default)("DraggableCore: Removing handlers"), (0, $.removeEvent)(l.ownerDocument, fe.move, this.handleDrag), (0, $.removeEvent)(l.ownerDocument, fe.stop, this.handleDragStop));
    }), Z(this, "onMouseDown", (e) => (fe = se.mouse, this.handleDragStart(e))), Z(this, "onMouseUp", (e) => (fe = se.mouse, this.handleDragStop(e))), Z(this, "onTouchStart", (e) => (fe = se.touch, this.handleDragStart(e))), Z(this, "onTouchEnd", (e) => (fe = se.touch, this.handleDragStop(e)));
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
    return (e = this.props) !== null && e !== void 0 && e.nodeRef ? (n = this.props) === null || n === void 0 || (n = n.nodeRef) === null || n === void 0 ? void 0 : n.current : Sr.default.findDOMNode(this);
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
Le.default = Ve;
Z(Ve, "displayName", "DraggableCore");
Z(Ve, "propTypes", {
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
Z(Ve, "defaultProps", {
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
      return h.default;
    }
  }), t.default = void 0;
  var e = x(yt), n = b(Tt), o = b(Et), a = b(Wn), i = W, s = de, l = ce, h = b(Le), m = b(_e);
  function b(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function v(u) {
    if (typeof WeakMap != "function")
      return null;
    var f = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap();
    return (v = function(p) {
      return p ? g : f;
    })(u);
  }
  function x(u, f) {
    if (!f && u && u.__esModule)
      return u;
    if (u === null || typeof u != "object" && typeof u != "function")
      return { default: u };
    var g = v(f);
    if (g && g.has(u))
      return g.get(u);
    var p = {}, w = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var S in u)
      if (S !== "default" && Object.prototype.hasOwnProperty.call(u, S)) {
        var O = w ? Object.getOwnPropertyDescriptor(u, S) : null;
        O && (O.get || O.set) ? Object.defineProperty(p, S, O) : p[S] = u[S];
      }
    return p.default = u, g && g.set(u, p), p;
  }
  function P() {
    return P = Object.assign ? Object.assign.bind() : function(u) {
      for (var f = 1; f < arguments.length; f++) {
        var g = arguments[f];
        for (var p in g)
          Object.prototype.hasOwnProperty.call(g, p) && (u[p] = g[p]);
      }
      return u;
    }, P.apply(this, arguments);
  }
  function R(u, f, g) {
    return f = z(f), f in u ? Object.defineProperty(u, f, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : u[f] = g, u;
  }
  function z(u) {
    var f = A(u, "string");
    return typeof f == "symbol" ? f : String(f);
  }
  function A(u, f) {
    if (typeof u != "object" || u === null)
      return u;
    var g = u[Symbol.toPrimitive];
    if (g !== void 0) {
      var p = g.call(u, f || "default");
      if (typeof p != "object")
        return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (f === "string" ? String : Number)(u);
  }
  class V extends e.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(f, g) {
      let {
        position: p
      } = f, {
        prevPropsPosition: w
      } = g;
      return p && (!w || p.x !== w.x || p.y !== w.y) ? ((0, m.default)("Draggable: getDerivedStateFromProps %j", {
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
      super(f), R(this, "onDragStart", (g, p) => {
        if ((0, m.default)("Draggable: onDragStart: %j", p), this.props.onStart(g, (0, s.createDraggableData)(this, p)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), R(this, "onDrag", (g, p) => {
        if (!this.state.dragging)
          return !1;
        (0, m.default)("Draggable: onDrag: %j", p);
        const w = (0, s.createDraggableData)(this, p), S = {
          x: w.x,
          y: w.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: _,
            y: q
          } = S;
          S.x += this.state.slackX, S.y += this.state.slackY;
          const [B, H] = (0, s.getBoundPosition)(this, S.x, S.y);
          S.x = B, S.y = H, S.slackX = this.state.slackX + (_ - S.x), S.slackY = this.state.slackY + (q - S.y), w.x = S.x, w.y = S.y, w.deltaX = S.x - this.state.x, w.deltaY = S.y - this.state.y;
        }
        if (this.props.onDrag(g, w) === !1)
          return !1;
        this.setState(S);
      }), R(this, "onDragStop", (g, p) => {
        if (!this.state.dragging || this.props.onStop(g, (0, s.createDraggableData)(this, p)) === !1)
          return !1;
        (0, m.default)("Draggable: onDragStop: %j", p);
        const S = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: _,
            y: q
          } = this.props.position;
          S.x = _, S.y = q;
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
      var f, g;
      return (f = (g = this.props) === null || g === void 0 || (g = g.nodeRef) === null || g === void 0 ? void 0 : g.current) !== null && f !== void 0 ? f : o.default.findDOMNode(this);
    }
    render() {
      const {
        axis: f,
        bounds: g,
        children: p,
        defaultPosition: w,
        defaultClassName: S,
        defaultClassNameDragging: O,
        defaultClassNameDragged: _,
        position: q,
        positionOffset: B,
        scale: H,
        ...y
      } = this.props;
      let N = {}, D = null;
      const Q = !!!q || this.state.dragging, K = q || w, Y = {
        // Set left if horizontal drag is enabled
        x: (0, s.canDragX)(this) && Q ? this.state.x : K.x,
        // Set top if vertical drag is enabled
        y: (0, s.canDragY)(this) && Q ? this.state.y : K.y
      };
      this.state.isElementSVG ? D = (0, i.createSVGTransform)(Y, B) : N = (0, i.createCSSTransform)(Y, B);
      const L = (0, a.default)(p.props.className || "", S, {
        [O]: this.state.dragging,
        [_]: this.state.dragged
      });
      return /* @__PURE__ */ e.createElement(h.default, P({}, y, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ e.cloneElement(e.Children.only(p), {
        className: L,
        style: {
          ...p.props.style,
          ...N
        },
        transform: D
      }));
    }
  }
  t.default = V, R(V, "displayName", "Draggable"), R(V, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ...h.default.propTypes,
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
  }), R(V, "defaultProps", {
    ...h.default.defaultProps,
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
})(It);
const {
  default: Ht,
  DraggableCore: xr
} = It;
Ae.exports = Ht;
Ae.exports.default = Ht;
Ae.exports.DraggableCore = xr;
var Nr = Ae.exports;
const Or = /* @__PURE__ */ Mn(Nr);
const Fr = (t) => {
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
}, Rr = oe(function(e, n) {
  const { formLayout: o, context: a } = e, { formData: i } = a, s = j({}), l = Fr(e), h = "palmyra-form-field-data", m = vt(() => (b) => _t(b, s, b.label), [i.data]);
  return /* @__PURE__ */ r("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: o.fields.map((b, v) => /* @__PURE__ */ r("div", { className: l, children: /* @__PURE__ */ r("div", { className: h, children: m(b) }) }, b.attribute)) });
});
function Mr(t) {
  return /* @__PURE__ */ r(
    Or,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ r(fn, { ...t })
    }
  );
}
const Ut = ({ columns: t, isOpen: e, onClose: n, setFilter: o, defaultFilter: a = {} }) => {
  var { getFieldManager: i, getFilterData: s } = kn(a);
  const l = () => {
    o({});
  }, h = () => {
    var x = s();
    o && o(x);
  }, m = () => {
    n();
  }, b = (x) => {
    x.keyCode === 27 && m();
  }, v = Fn(t);
  return /* @__PURE__ */ r("div", { className: "grid-filter-container", children: /* @__PURE__ */ r(
    un,
    {
      open: e,
      onClose: m,
      PaperComponent: Mr,
      onKeyDown: b,
      PaperProps: { sx: { minWidth: "500px", borderRadius: "10px" } },
      children: /* @__PURE__ */ r(Me, { onClickAway: n, children: /* @__PURE__ */ C("div", { children: [
        /* @__PURE__ */ C("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ r("div", { className: "grid-header-text-container", children: /* @__PURE__ */ r("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ r("div", { className: "grid-header-icon-container", onClick: m, children: /* @__PURE__ */ r("span", { className: "grid-header-icon", children: /* @__PURE__ */ r(xn, { className: "filter-cancel-icon" }) }) })
        ] }),
        /* @__PURE__ */ r("span", { className: "filter-header-border" }),
        /* @__PURE__ */ r("div", { className: "grid-filter-content", children: /* @__PURE__ */ r(Pe.Provider, { value: i, children: /* @__PURE__ */ r(
          Vt,
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
              Renderer: Rr
            }
          }
        ) }) }),
        /* @__PURE__ */ C("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ C(le, { className: "secondary-filled-button", disableRipple: !0, onClick: l, children: [
            /* @__PURE__ */ r(vn, { className: "button-icon" }),
            "Reset"
          ] }),
          /* @__PURE__ */ C(le, { className: "filled-button", disableRipple: !0, onClick: h, children: [
            /* @__PURE__ */ r(Pt, { className: "button-icon" }),
            "Filter"
          ] })
        ] })
      ] }) })
    }
  ) });
};
function kr(t) {
  return At({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" } }] })(t);
}
function Tr(t) {
  return At({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M156,208a8,8,0,0,1-8,8H120a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v48h20A8,8,0,0,1,156,208ZM92.65,145.49a8,8,0,0,0-11.16,1.86L68,166.24,54.51,147.35a8,8,0,1,0-13,9.3L58.17,180,41.49,203.35a8,8,0,0,0,13,9.3L68,193.76l13.49,18.89a8,8,0,0,0,13-9.3L77.83,180l16.68-23.35A8,8,0,0,0,92.65,145.49Zm98.94,25.82c-4-1.16-8.14-2.35-10.45-3.84-1.25-.82-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.72,19.82-.56a8,8,0,0,0,4.07-15.48c-2.11-.55-21-5.22-32.83,2.76a20.58,20.58,0,0,0-8.95,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.33-2.15,3.93-4.6,3.06-15.16,1.55-19.54.35A8,8,0,0,0,173.93,214a60.63,60.63,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.81,20.81,0,0,0,9.18-15.23C218,179,201.48,174.17,191.59,171.31ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,1,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.68L160,51.31Z" } }] })(t);
}
const Er = oe(function(e, n) {
  const { columns: o, children: a, EmptyChild: i, onRowClick: s, quickSearch: l } = e, h = i || Ft, m = e.customizer || kt, b = e.customButton, v = e.gridTitle, [x, P] = I(!1), [R, z] = I(!1), [A, V] = I("standard"), [u, f] = I(!1), [g, p] = I(""), {
    setQueryFilter: w,
    setQuickSearch: S,
    setSortColumns: O,
    setEndPointOptions: _,
    gotoPage: q,
    setPageSize: B,
    getPageNo: H,
    refreshData: y,
    setQueryLimit: N,
    getQueryLimit: D,
    data: M,
    totalRecords: Q,
    queryLimit: K,
    pageSizeOptions: Y,
    filter: L
  } = ve(e), X = n || j(null);
  he(X, () => ({
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
      _(k);
    },
    addFilter: (k, ie) => {
      w((rt) => (rt[k] = ie, { ...rt }));
    },
    setQueryLimit: (k) => {
      N(k);
    },
    getQueryLimit: () => D(),
    setSortOptions(k) {
      O(k);
    },
    getCurrentData: () => M
  }), [D]);
  const c = (k, ie) => {
    q(ie - 1);
  }, F = Ot(o, m), G = (k) => {
    V(k);
  }, me = () => {
    P(!x);
  }, d = () => A === "compact" ? { padding: "3px" } : A === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, T = () => A === "compact" ? { padding: "3px" } : A === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, J = () => {
    var k;
    switch (A) {
      case "compact":
        k = /* @__PURE__ */ r(Te, { className: "density-icon" });
        break;
      case "comfortable":
        k = /* @__PURE__ */ r(Ee, { className: "density-icon" });
        break;
      default:
        k = /* @__PURE__ */ r(ke, { className: "grid-button-icon" });
        break;
    }
    return k;
  }, be = (k) => {
    const ie = k.target.value;
    p(ie), ie ? S(ie) : w({});
  }, Ie = (k) => {
    s && s(k);
  }, Be = (k) => {
    const ie = parseInt(k.target.value, 10);
    B(ie);
  }, Xe = () => {
    z(!R);
  }, ze = () => {
  }, qe = () => {
  }, We = () => {
    e.onNewClick();
  }, E = 200, te = !!e.pageSize, Oe = !!l, Zt = {
    transform: x ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, jt = {
    transform: R ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Jt = Math.ceil(Q / K.limit);
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ C("div", { children: [
    a,
    /* @__PURE__ */ C("div", { className: "grid-header", children: [
      /* @__PURE__ */ r("div", { className: "grid-header-right-content", children: /* @__PURE__ */ r("span", { className: "grid-header-right-content-text", children: v }) }),
      /* @__PURE__ */ C("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ r("div", { className: "grid-header-filter", children: Oe && /* @__PURE__ */ r(
          Ne,
          {
            sx: { width: E },
            type: "text",
            value: g,
            onChange: be,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ r(Ze, { position: "end", children: /* @__PURE__ */ r($e, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ r(Me, { onClickAway: () => {
          P(!1);
        }, children: /* @__PURE__ */ C("div", { className: "grid-header-button grid-density-btn", onClick: me, children: [
          /* @__PURE__ */ C(le, { className: "grid-btn", disableRipple: !0, children: [
            J(),
            /* @__PURE__ */ r("span", { children: "Density" }),
            /* @__PURE__ */ r(ct, { style: Zt, className: "avathar-arrw-icon" })
          ] }),
          x && /* @__PURE__ */ r("div", { className: "density-dropdown-content", children: /* @__PURE__ */ C("ul", { children: [
            /* @__PURE__ */ C("li", { onClick: () => G("standard"), children: [
              /* @__PURE__ */ r(ke, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ C("li", { onClick: () => G("compact"), children: [
              /* @__PURE__ */ r(Te, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ C("li", { onClick: () => G("comfortable"), children: [
              /* @__PURE__ */ r(Ee, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        o.some((k) => k.searchable) && /* @__PURE__ */ C("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ C(le, { className: "grid-btn", disableRipple: !0, onClick: () => f(!0), children: [
            /* @__PURE__ */ r(Pt, { className: "grid-button-icon" }),
            /* @__PURE__ */ r("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ r(
            Ut,
            {
              columns: o,
              setFilter: w,
              defaultFilter: L,
              isOpen: u,
              onClose: () => f(!1)
            }
          )
        ] }),
        /* @__PURE__ */ r(Me, { onClickAway: () => {
          z(!1);
        }, children: /* @__PURE__ */ C("div", { className: "grid-header-button grid-export-btn", onClick: Xe, children: [
          /* @__PURE__ */ C(le, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ r(bn, { className: "grid-button-icon" }),
            /* @__PURE__ */ r("span", { children: "Export" }),
            /* @__PURE__ */ r(ct, { style: jt, className: "avathar-arrw-icon" })
          ] }),
          R && /* @__PURE__ */ r("div", { className: "density-dropdown-content", children: /* @__PURE__ */ C("ul", { children: [
            /* @__PURE__ */ C("li", { onClick: ze, children: [
              /* @__PURE__ */ r(kr, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ C("li", { onClick: qe, children: [
              /* @__PURE__ */ r(Tr, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        e.onNewClick ? /* @__PURE__ */ r("div", { className: "grid-header-button grid-add-btn", children: e.customAddButton ? /* @__PURE__ */ r("div", { onClick: We, children: e.customAddButton }) : /* @__PURE__ */ r("div", { onClick: We, children: /* @__PURE__ */ C(le, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ r(Mt, { className: "grid-button-icon" }),
          /* @__PURE__ */ r("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ r(ye, {}),
        b && b.map((k, ie) => /* @__PURE__ */ r("div", { className: "grid-custom-button", children: k }, ie))
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "grid-table", children: /* @__PURE__ */ r(
      Rt,
      {
        columnDefs: F,
        EmptyChild: h,
        customizer: m,
        rowData: M,
        onRowClick: Ie,
        onRowStyle: d,
        onHeaderStyle: T,
        onSortColumn: O
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "grid-footer", children: /* @__PURE__ */ r("div", { className: "grid-filter", children: te && Q !== null && /* @__PURE__ */ r("div", { children: /* @__PURE__ */ C("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ r("div", { style: { width: "50%" }, children: Y && Y.length > 1 ? /* @__PURE__ */ r(xe, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ C("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("span", { children: "Showing" }) }),
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
          St,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: Y[0],
            onChange: Be,
            label: "Rows per page",
            children: Y.map((k) => /* @__PURE__ */ r(Dt, { value: k, children: k }, k))
          }
        ) }),
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ C("span", { children: [
          "of ",
          Q,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ r("div", { style: {}, children: /* @__PURE__ */ r(
        wt,
        {
          count: Jt,
          shape: "rounded",
          componentName: "div",
          onChange: c,
          page: H() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), ea = oe(function(e, n) {
  const { children: o, EmptyChild: a, onRowClick: i, quickSearch: s } = e, l = e.columns, h = a || Ft, m = e.customizer || kt, b = e.customButton, v = e.gridTitle, [x, P] = I(!1), [R, z] = I("standard"), [A, V] = I(!1), [u, f] = I(""), {
    setQueryFilter: g,
    setQuickSearch: p,
    setSortColumns: w,
    setEndPointOptions: S,
    gotoPage: O,
    setPageSize: _,
    getPageNo: q,
    refreshData: B,
    setQueryLimit: H,
    getQueryLimit: y,
    data: N,
    totalRecords: D,
    queryLimit: M,
    pageSizeOptions: Q,
    filter: K
  } = ve(e), [Y, L] = I(l(N)), X = n || j(null);
  he(X, () => ({
    setFilter: (E) => {
      g(E);
    },
    refresh: () => {
      B();
    },
    resetFilter() {
      g({});
    },
    setEndPointOptions: (E) => {
      S(E);
    },
    addFilter: (E, te) => {
      g((Oe) => (Oe[E] = te, { ...Oe }));
    },
    setQueryLimit: (E) => {
      H(E);
    },
    getQueryLimit: () => y(),
    setSortOptions(E) {
      w(E);
    },
    getCurrentData: () => N
  }), [y, Y]), ae(() => {
    L(l(N));
  }, [N]);
  const c = (E, te) => {
    O(te);
  }, F = Ot(Y, m), G = (E) => {
    z(E);
  }, me = () => {
    P(!x);
  }, d = () => R === "compact" ? { padding: "3px" } : R === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, T = () => R === "compact" ? { padding: "3px" } : R === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, J = () => {
    var E;
    switch (R) {
      case "compact":
        E = /* @__PURE__ */ r(Te, { className: "density-icon" });
        break;
      case "comfortable":
        E = /* @__PURE__ */ r(Ee, { className: "density-icon" });
        break;
      default:
        E = /* @__PURE__ */ r(ke, { className: "grid-button-icon" });
        break;
    }
    return E;
  }, be = (E) => {
    const te = E.target.value;
    f(te), te ? p(te) : g({});
  }, Ie = (E) => {
    i && i(E);
  }, Be = (E) => {
    const te = parseInt(E.target.value, 10);
    _(te);
  }, Xe = () => {
    console.info("Export Clicked");
  }, ze = 200, qe = !!e.pageSize;
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ C("div", { children: [
    o,
    /* @__PURE__ */ C("div", { className: "grid-header", children: [
      /* @__PURE__ */ r("div", { className: "grid-header-right-content", children: /* @__PURE__ */ r("span", { className: "grid-header-right-content-text", children: v }) }),
      /* @__PURE__ */ C("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ r("div", { className: "grid-header-filter", children: !!s && /* @__PURE__ */ r(
          Ne,
          {
            sx: { width: ze },
            type: "text",
            value: u,
            onChange: be,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ r(Ze, { position: "end", children: /* @__PURE__ */ r($e, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ r(Me, { onClickAway: () => {
          P(!1);
        }, children: /* @__PURE__ */ C("div", { className: "grid-header-button grid-density-btn", onClick: me, children: [
          /* @__PURE__ */ r(Fe, { title: "Density", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, children: J() }) }),
          x && /* @__PURE__ */ r("div", { className: "density-dropdown-content", children: /* @__PURE__ */ C("ul", { children: [
            /* @__PURE__ */ C("li", { onClick: () => G("standard"), children: [
              /* @__PURE__ */ r(ke, { className: "density-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ C("li", { onClick: () => G("compact"), children: [
              /* @__PURE__ */ r(Te, { className: "density-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ C("li", { onClick: () => G("comfortable"), children: [
              /* @__PURE__ */ r(Ee, { className: "density-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        Y.some((E) => E.searchable) && /* @__PURE__ */ C("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ r(Fe, { title: "Filter", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, onClick: () => V(!0), children: /* @__PURE__ */ r(Nn, { className: "grid-button-icon" }) }) }),
          /* @__PURE__ */ r(
            Ut,
            {
              columns: Y,
              setFilter: g,
              defaultFilter: K,
              isOpen: A,
              onClose: () => V(!1)
            }
          )
        ] }),
        /* @__PURE__ */ r("div", { className: "grid-header-button grid-export-btn", onClick: Xe, children: /* @__PURE__ */ r(Fe, { title: "Export", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ r(On, { className: "grid-button-icon" }) }) }) }),
        e.onNewClick ? /* @__PURE__ */ r("div", { className: "grid-header-button", onClick: () => {
          e.onNewClick();
        }, children: /* @__PURE__ */ r(Fe, { title: "New", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ r(Mt, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ r(ye, {}),
        b && b.map((E, te) => /* @__PURE__ */ r("div", { className: "grid-custom-button grid-export-btn", children: E }, te))
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "grid-table", children: /* @__PURE__ */ r(
      Rt,
      {
        columnDefs: F,
        EmptyChild: h,
        customizer: m,
        rowData: N,
        onRowClick: Ie,
        onRowStyle: d,
        onHeaderStyle: T,
        onSortColumn: w
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "grid-footer", children: /* @__PURE__ */ r("div", { className: "grid-filter", children: qe && /* @__PURE__ */ r(
      hn,
      {
        component: "div",
        count: D || 0,
        page: q(),
        onPageChange: c,
        rowsPerPage: M.limit,
        rowsPerPageOptions: Q || [],
        onRowsPerPageChange: Be
      }
    ) }) })
  ] }) });
}), ta = oe(function(e, n) {
  const { columns: o, endPoint: a, storeFactory: i, layoutParams: s, pagination: l } = e, h = e.quickSearch || "", m = e.customButton, b = e.customAddButton, v = e.gridTitle, x = e.fetchAll, P = e.filterTopic, R = e.initialFetch, z = (V, u) => {
  };
  ae(() => {
    var V = dt.subscribe(e.topic, z);
    return () => {
      dt.unsubscribe(V);
    };
  }, [e.topic]);
  const A = {
    fields: o,
    pagination: l,
    quickSearch: h,
    storeOptions: {
      endPoint: a
    },
    actionOptions: e.actions
  };
  return /* @__PURE__ */ r(ye, { children: /* @__PURE__ */ r(Ue.Provider, { value: i, children: /* @__PURE__ */ r(
    $t,
    {
      layout: A,
      context: s,
      customAddButton: b,
      onDataChange: e.onDataChange,
      gridTitle: v,
      defaultParams: e.defaultParams,
      customButton: m,
      customizer: e.customizer,
      ref: n,
      fetchAll: x,
      filterTopic: P,
      initialFetch: R
    }
  ) }) });
}), Ar = oe(function(e, n) {
  const o = e.layout, [a, i] = I(o.fields), s = o.pagination ? o.pagination : [15], l = Se(Ue), h = Se(pt);
  var m = o.storeOptions || {}, b = {};
  Sn(b, m, h);
  const v = l.getGridStore(b, o.storeOptions.endPoint);
  ae(() => {
    m.hasLayout && v.queryLayout({}).then((R) => {
      i(R.columns);
    });
  }, []);
  const { onClick: x, onNewClick: P } = Tn(o.actionOptions, h);
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    Er,
    {
      columns: a,
      store: v,
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
      defaultParams: e.defaultParams,
      fetchAll: e.fetchAll,
      filterTopic: e.filterTopic,
      initialFetch: e.initialFetch
    }
  ) });
}), $t = Ar, Lr = (t) => {
  const { layout: e, context: n } = t;
  var o = e.Container || Nt;
  return /* @__PURE__ */ r(Lt, { fallback: /* @__PURE__ */ r("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ r(o, { ...e, children: ((i) => /* @__PURE__ */ r(
    $t,
    {
      context: n,
      layout: i
    }
  ))(e.tableLayout) }) });
}, _r = (t) => {
  const { layout: e } = t;
  switch (e.type) {
    case "form":
      return /* @__PURE__ */ r(Vt, { ...t });
    case "view":
      return /* @__PURE__ */ r(An, { ...t });
    case "grid":
      return /* @__PURE__ */ r(Lr, { ...t });
    case "chart":
      return /* @__PURE__ */ r(yn, { ...t });
    default:
      return /* @__PURE__ */ r(En, { ...t });
  }
};
function Vr(t, e) {
  var n = t || 1, o = e;
  return {
    w: n,
    h: o
  };
}
const Kt = (t) => {
  const { layout: e, context: n } = t, o = e.sections;
  function a(i, s, l) {
    const { w: h, h: m } = Vr(i.width, i.height);
    return /* @__PURE__ */ r(mn, { sx: { width: h, height: m }, children: /* @__PURE__ */ r(
      _r,
      {
        layout: i,
        context: s
      }
    ) }, (i.name || "tab") + l);
  }
  return /* @__PURE__ */ r("div", { style: { display: "flex", flexWrap: "wrap" }, children: o.map((i, s) => a(i, n, s)) });
}, mt = oe(function(e, n) {
  const { layout: o } = e;
  he(n, () => ({
    resetFilter() {
    }
  }), []);
  const a = {}, i = o.tabs;
  return /* @__PURE__ */ r("div", { children: i.map((s, l) => /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    Kt,
    {
      layout: s,
      context: a
    }
  ) }, s.name + l)) });
}), Ir = (t) => {
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
  var { getFieldManager: i, getFormData: s, isFormValid: l } = Ln(o, (b = e.callbacks) == null ? void 0 : b.onFormValidChange, Ir(e.mode));
  he(n, () => ({
    getData() {
      return s();
    },
    isValid() {
      return l();
    }
  }), []);
  const h = { formData: o }, m = a.tabs;
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(Pe.Provider, { value: i, children: m.map((v, x) => /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    Kt,
    {
      layout: v,
      context: h
    }
  ) }, v.name + x)) }) });
}), Br = (t) => {
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
}, na = oe(function(e, n) {
  const [o, a] = I(e.layout), i = e.mode ? e.mode : o.type ? o.type : "grid", s = e.layoutParams || {}, l = Br(i), h = j(0);
  return ae(() => {
    a(e.layout), h.current < 999999 ? h.current++ : h.current = 0;
  }, [e.layout]), /* @__PURE__ */ r(Lt, { fallback: /* @__PURE__ */ r("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ r(Ue.Provider, { value: e.storeFactory, children: /* @__PURE__ */ r(pt.Provider, { value: s, children: /* @__PURE__ */ r(l, { ...e, ref: (m) => {
    n && (n.current = m);
  } }, h.current) }) }) });
}), ra = oe(function(e, n) {
  const { title: o, Child: a, childProps: i, pageSize: s, customButton: l } = e, h = n || j(null), {
    setQueryFilter: m,
    refreshData: b,
    setSortColumns: v,
    setEndPointOptions: x,
    setQuickSearch: P,
    gotoPage: R,
    setPageSize: z,
    getPageNo: A,
    setQueryLimit: V,
    getQueryLimit: u,
    data: f,
    totalRecords: g,
    pageSizeOptions: p,
    queryLimit: w
  } = ve(e), S = e.listKeyProvider || ((D, M) => M);
  he(h, () => ({
    setFilter: (D) => {
      m(D);
    },
    refresh: () => {
      b();
    },
    resetFilter() {
      m({});
    },
    setEndPointOptions: (D) => {
      x(D);
    },
    addFilter: (D, M) => {
      m((Q) => (Q[D] = M, { ...Q }));
    },
    setQueryLimit: (D) => {
      V(D);
    },
    getQueryLimit: () => u(),
    getCurrentData: () => f,
    setSortOptions(D) {
      v(D);
    }
  }), [m]);
  const O = (D, M) => {
    R(M - 1);
  }, _ = (D) => {
    const M = D.target.value;
    P(M);
  }, q = (D) => {
    const M = parseInt(D.target.value, 10);
    z(M);
  }, B = 200, H = !!s, y = !!e.quickSearch, N = Math.ceil(g / w.limit);
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("div", { className: "card-page-container", children: /* @__PURE__ */ C("div", { children: [
    /* @__PURE__ */ C("div", { className: "card-header", children: [
      /* @__PURE__ */ r("div", { className: "card-left-content", children: o }),
      /* @__PURE__ */ C("div", { className: "card-right-content", children: [
        y && /* @__PURE__ */ r(
          Ne,
          {
            sx: { width: B },
            type: "text",
            onChange: _,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ r(Ze, { position: "end", children: /* @__PURE__ */ r($e, { className: "card-filter-icon" }) })
            }
          }
        ),
        l && l.map((D, M) => /* @__PURE__ */ r("div", { className: "card-custom-button", children: D }, M))
      ] })
    ] }),
    /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
      pn,
      {
        Child: a,
        childKeyProvider: S,
        preProcess: e.preProcess,
        dataList: f,
        childProps: i,
        EmptyChild: e.EmptyChild
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "card-pagination", children: H && g !== null && // <TablePagination
    //     component="div"
    //     count={totalRecords || 0}
    //     page={getPageNo()}
    //     onPageChange={nextPage}
    //     rowsPerPage={queryLimit.limit}
    //     rowsPerPageOptions={pageSizeOptions || []}
    //     onRowsPerPageChange={handleRowsPerPageChange}
    // />
    /* @__PURE__ */ C("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ r("div", { children: p && p.length > 1 ? /* @__PURE__ */ r(xe, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ C("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("span", { children: "Showing" }) }),
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
          St,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: p[0],
            onChange: q,
            label: "Rows per page",
            children: p.map((D) => /* @__PURE__ */ r(Dt, { value: D, children: D }, D))
          }
        ) }),
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ C("span", { children: [
          "of ",
          g,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ r("div", { style: {}, children: /* @__PURE__ */ r(gn, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ r(
        wt,
        {
          count: N,
          shape: "rounded",
          componentName: "div",
          onChange: O,
          page: A() + 1
        }
      ) }) })
    ] }) })
  ] }) }) });
});
export {
  ea as D,
  na as F,
  $t as G,
  In as M,
  ta as P,
  ra as S,
  Kt as T,
  Er as a,
  jo as b,
  Bn as c,
  zn as d,
  Vt as e,
  Rr as f,
  _t as g,
  Ut as h,
  Lr as i,
  _r as j,
  mt as k,
  gt as l,
  ve as u
};
