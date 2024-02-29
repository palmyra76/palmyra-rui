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
import { jsx as r, jsxs as D, Fragment as ye } from "react/jsx-runtime";
import yt, { useState as V, useRef as j, useEffect as ae, forwardRef as oe, useContext as Se, useImperativeHandle as he, useMemo as vt } from "react";
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
  var K, Q;
  const { store: e, quickSearch: n } = t, o = t.fetchAll != !1, [a, i] = V(t.endPointOptions), [s, l] = V(null), d = ((K = t.defaultParams) == null ? void 0 : K.filter) || {}, g = ((Q = t.defaultParams) == null ? void 0 : Q.sort) || {}, [C, b] = t.filterTopic ? _n(t.filterTopic, d) : V(d), [x, P] = V({}), R = j(t.initialFetch == !1), X = t.pageSize ? t.pageSize : 15;
  var E = X instanceof Array ? X : [X], _ = X instanceof Array ? X[0] : X;
  const [u, f] = V({ limit: _, offset: 0, total: !0 }), [m, v] = V(null), w = () => Math.round(u.offset / u.limit), S = () => u, N = (A) => {
    f((B) => ({ limit: B.limit, total: B.total, offset: A * B.limit }));
  }, L = (A) => {
    const B = A > 10 || A == -1 ? A : 15;
    f((c) => {
      const F = Math.floor(c.offset / B) * B;
      return { limit: B, total: c.total, offset: F };
    });
  }, z = () => C ? Object.keys(C).length == 0 : !1, I = (A) => {
    v((B) => (setTimeout(() => {
      t.onDataChange && t.onDataChange(m, B);
    }, 300), A));
  };
  ae(() => {
    if (R.current) {
      R.current = !1;
      return;
    }
    (o || !z()) && G();
  }, [u, x, a]);
  const G = () => {
    const B = {
      sortOrder: x && Object.keys(x).length > 0 ? x : g,
      total: !0,
      endPointVars: a,
      ...u,
      filter: { ...C, ...d }
    };
    if (e)
      try {
        e.query(B).then((c) => {
          I(c.result), l(c.total);
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
    I([]), l(0);
  }, p = () => {
    I(void 0), l(null);
  };
  return {
    setQueryFilter: (A) => {
      typeof A == "function" || A && Object.keys(A).length > 0 ? b(A) : b({}), N(0);
    },
    setQuickSearch: (A) => {
      const B = n;
      b(A ? (c) => (c[B] = A, { ...c }) : (c) => (delete c[B], { ...c })), N(0);
    },
    setSortColumns: (A) => {
      P(A);
    },
    setEndPointOptions: i,
    refreshData: G,
    gotoPage: N,
    setPageSize: L,
    getPageNo: w,
    getQueryLimit: S,
    setQueryLimit: f,
    filter: C,
    queryLimit: u,
    data: m,
    totalRecords: s,
    pageSizeOptions: E
  };
};
function ut(t) {
  return t ? Array.isArray(t) ? t : typeof t == "string" ? t.split(",") : [t] : [];
}
const jo = oe(function(e, n) {
  const o = Se(Pe), a = n || j(null), i = o(e, "checkbox", a), { mutateOptions: s, setMutateOptions: l } = i, [d, g] = V(!1), C = ut(i.data), b = i.error, x = i.eventListeners, R = { store: i.store, pageSize: -1 }, { data: X } = ve(R), E = X, _ = j(null), u = e.lookupOptions || {}, f = u.idAttribute || "id", m = u.displayAttribute || "name", v = e.showSelectedOnly && e.readonly, w = De(f) ? (y) => we(f, y) : (y) => y[f], S = De(m) ? (y) => we(m, y) : (y) => y[m];
  he(a, () => ({
    focus() {
      _.current.focus();
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
  var N = je(e, i.data, e.label);
  e.readonly && (N.inputprops = { readOnly: !0 });
  function L(y, p) {
    const O = ut(i.data);
    var q = O.indexOf(y);
    p ? q < 0 && O.push(y) : q >= 0 && O.splice(q, 1), x.onValueChange(O.toString());
  }
  var z = {
    onBlur: x.onBlur,
    onFocus: x.onFocus,
    onChange: (y) => {
      L(y.target.value, y.target.checked);
    }
  };
  const I = (y) => {
    const p = y.toString();
    return C.includes(p);
  }, G = (y) => {
    const p = y.target.checked;
    g(p);
    var O = [];
    p && E.map((q) => {
      O.push(w(q));
    }), x.onValueChange(O.toString());
  };
  return /* @__PURE__ */ r("div", { className: e.className, children: s.visible && /* @__PURE__ */ D(
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
                onChange: G
              }
            ),
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
              E ? E.filter((y) => v ? I(w(y)) : !0).map((y) => /* @__PURE__ */ r(
                at,
                {
                  value: w(y),
                  control: /* @__PURE__ */ r(
                    it,
                    {
                      icon: /* @__PURE__ */ r(st, { style: { fontSize: "20px" } }),
                      checkedIcon: /* @__PURE__ */ r(lt, { style: { fontSize: "20px" } }),
                      ...z,
                      checked: I(w(y)),
                      disabled: e.readonly
                    }
                  ),
                  label: S(y)
                },
                w(y)
              )) : /* @__PURE__ */ r("div", { children: "No options provided" }),
              /* @__PURE__ */ r(Ke, { className: "form-error-text", children: b.message })
            ]
          }
        )
      ]
    }
  ) });
}), Vn = Cn(100), In = oe(function(e, n) {
  const o = Se(Pe), a = n || j(null), i = j(null), s = j(0), [l, d] = V([]), [g, C] = V(""), [b, x] = V(!1), P = o(e, "serverlookup", a), R = e.store || P.store, X = e.lookupOptions || {}, E = X.idAttribute || "id", _ = X.displayAttribute || "name", u = _, f = {
    store: R,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: u,
    initialFetch: !1
  }, m = ve(f), v = P.eventListeners, w = P.error, { mutateOptions: S, setMutateOptions: N } = P, L = P.data, z = b && l.length < (L ? 2 : 1), { setQueryFilter: I, setEndPointOptions: G, setQuickSearch: y, totalRecords: p, refreshData: O } = m, q = m.data, H = De(E) ? (h) => we(E, h) : (h) => h == null ? void 0 : h[E], K = De(_) ? (h) => we(_, h) : (h) => h == null ? void 0 : h[_];
  ae(() => {
    var h = L != "" ? L : void 0;
    h && d([h]);
  }, [P.data]), ae(() => {
    const h = q ? [...q] : [], k = L != "" ? L : void 0, J = H(k), be = K(k);
    h && J && be && !F(h, J) && h.unshift(k), d(h), s.current < p && (s.current = p);
  }, [q, p]), ae(() => {
    xt(Q);
  }, [g]), ae(() => {
    Vn(Q);
  }, [b]);
  function Q() {
    b && (g.length > 0 && g != K(L) ? y("*" + g + "*") : q ? y(null) : O());
  }
  var A = {
    onBlur: v.onBlur,
    onFocus: v.onFocus,
    onChange: (h, k) => {
      B(k);
    },
    onInputChange: (h, k) => (C(k), !0)
  };
  const B = (h) => {
    v.onValueChange(h);
  }, c = (h) => typeof h == "object" ? K(h) + "" : (console.log(h), "");
  function F(h, k) {
    return h.find((J) => {
      if (H(J) == k)
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
    setValue(h, k = !1) {
      P.setData(h, k);
    },
    setVisible(h) {
      N((k) => ({ ...k, visible: h }));
    },
    setRequired(h) {
      N((k) => ({ ...k, required: h }));
    },
    setReadOnly(h) {
      N((k) => ({ ...k, readonly: h }));
    },
    setAttribute(h) {
      N((k) => ({ ...k, ...h }));
    },
    setFilter(h) {
      I(h);
    },
    resetFilter() {
      I({});
    },
    setEndPointOptions(h) {
      G(h);
    },
    getCurrentData: () => L,
    refresh: () => {
      O();
    },
    addFilter(h, k) {
      I((J) => (J[h] = k, { ...J }));
    },
    setDefaultFilter(h) {
    },
    setSortOptions(h) {
    }
  }), [P, I]);
  var Y = je(e, L, e.label);
  S.readonly && (Y.inputProps = { readOnly: !0 });
  const me = (h, k) => h instanceof Array ? h.some((J) => H(J) == H(k)) : H(h) == H(k);
  return /* @__PURE__ */ r(
    He,
    {
      label: Je(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ D(xe, { fullWidth: !0, error: w.status, children: [
        /* @__PURE__ */ r(
          bt,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: e.multiple,
            readOnly: e.readonly,
            renderOption: e.renderOption,
            isOptionEqualToValue: me,
            filterOptions: (h) => h,
            renderInput: (h) => /* @__PURE__ */ r(
              Ne,
              {
                ...h,
                inputRef: (k) => {
                  i.current = k;
                },
                variant: e.variant || "standard",
                label: e.label,
                autoFocus: e.autoFocus,
                required: e.required,
                InputProps: {
                  ...h.InputProps,
                  endAdornment: /* @__PURE__ */ D(ye, { children: [
                    z ? /* @__PURE__ */ r(Ct, { color: "inherit", size: 18 }) : null,
                    h.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: c,
            ...Y,
            options: l,
            open: b,
            onClose: () => {
              x(!1);
            },
            onOpen: (h) => {
              x(!0);
            },
            ...A
          }
        ),
        /* @__PURE__ */ r(Ke, { className: "form-error-text", children: w.message })
      ] })
    }
  );
}), Bn = oe(function(e, n) {
  const o = Se(Pe), a = n || j(null), i = j(null), s = j(0), [l, d] = V([]), [g, C] = V(""), [b, x] = V(!1), P = o(e, "autoComplete", a), R = e.store || P.store, E = (e.lookupOptions || {}).attribute || "name", _ = E, u = {
    store: R,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: _,
    initialFetch: !1
  }, f = ve(u), m = P.eventListeners, v = P.error, { mutateOptions: w, setMutateOptions: S } = P, N = P.data, L = b && l.length < (N ? 2 : 1), { setQueryFilter: z, setEndPointOptions: I, setQuickSearch: G, totalRecords: y, refreshData: p } = f, O = f.data, q = De(E) ? (c) => we(E, c) : (c) => c == null ? void 0 : c[E];
  ae(() => {
    var c = N != "" ? N : void 0;
    c && d([c]);
  }, [P.data]), ae(() => {
    const F = (O ? [...O] : []).map((me) => q(me)), Y = N != "" ? N : void 0;
    F && Y && !A(F, Y) && F.unshift(Y), d(F), s.current < y && (s.current = y);
  }, [O, y]), ae(() => {
    xt(H);
  }, [g, b]);
  function H() {
    b && (g.length > 0 && g != N ? G("*" + g + "*") : O ? G(null) : p());
  }
  var K = {
    onBlur: (c) => {
      Q(g), m.onBlur(g);
    },
    onFocus: m.onFocus,
    onChange: (c, F) => {
      Q(F);
    },
    onInputChange: (c, F) => (C(F), !0)
  };
  const Q = (c) => {
    m.onValueChange(c);
  };
  function A(c, F) {
    return c.find((Y) => {
      if (Y == F)
        return Y;
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
      z(c);
    },
    resetFilter() {
      z({});
    },
    setEndPointOptions(c) {
      I(c);
    },
    getCurrentData: () => N,
    refresh: () => {
      p();
    },
    addFilter(c, F) {
      z((Y) => (Y[c] = F, { ...Y }));
    },
    setDefaultFilter(c) {
    },
    setSortOptions(c) {
    }
  }), [P, z]);
  var B = je(e, N, e.label);
  return w.readonly && (B.inputProps = { readOnly: !0 }), /* @__PURE__ */ r(
    He,
    {
      label: Je(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ D(xe, { fullWidth: !0, error: v.status, children: [
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
                ...B,
                InputProps: {
                  ...c.InputProps,
                  endAdornment: /* @__PURE__ */ D(ye, { children: [
                    L ? /* @__PURE__ */ r(Ct, { color: "inherit", size: 18 }) : null,
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
        /* @__PURE__ */ r(Ke, { className: "form-error-text", children: v.message })
      ] })
    }
  );
}), Xn = (t) => {
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
  var C;
  const { formLayout: o, context: a } = e, { formData: i } = a, s = o.Container;
  j({});
  const l = vt(() => (b) => _t(b), [i.data]);
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
      } = i, d = (0, ue.createCoreData)(this, s, l);
      (0, Ce.default)("DraggableCore: handleDragStart: %j", d), (0, Ce.default)("calling", this.props.onStart), !(this.props.onStart(e, d) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, $.addUserSelectStyles)(o), this.dragging = !0, this.lastX = s, this.lastY = l, (0, $.addEvent)(o, fe.move, this.handleDrag), (0, $.addEvent)(o, fe.stop, this.handleDragStop));
    }), Z(this, "handleDrag", (e) => {
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
        let d = o - this.lastX || 0, g = a - this.lastY || 0;
        [d, g] = (0, ue.snapToGrid)(this.props.grid, d, g), o = this.lastX + d, a = this.lastY + g;
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
      return d.default;
    }
  }), t.default = void 0;
  var e = x(yt), n = C(Tt), o = C(Et), a = C(Wn), i = W, s = de, l = ce, d = C(Le), g = C(_e);
  function C(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function b(u) {
    if (typeof WeakMap != "function")
      return null;
    var f = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap();
    return (b = function(v) {
      return v ? m : f;
    })(u);
  }
  function x(u, f) {
    if (!f && u && u.__esModule)
      return u;
    if (u === null || typeof u != "object" && typeof u != "function")
      return { default: u };
    var m = b(f);
    if (m && m.has(u))
      return m.get(u);
    var v = {}, w = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var S in u)
      if (S !== "default" && Object.prototype.hasOwnProperty.call(u, S)) {
        var N = w ? Object.getOwnPropertyDescriptor(u, S) : null;
        N && (N.get || N.set) ? Object.defineProperty(v, S, N) : v[S] = u[S];
      }
    return v.default = u, m && m.set(u, v), v;
  }
  function P() {
    return P = Object.assign ? Object.assign.bind() : function(u) {
      for (var f = 1; f < arguments.length; f++) {
        var m = arguments[f];
        for (var v in m)
          Object.prototype.hasOwnProperty.call(m, v) && (u[v] = m[v]);
      }
      return u;
    }, P.apply(this, arguments);
  }
  function R(u, f, m) {
    return f = X(f), f in u ? Object.defineProperty(u, f, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : u[f] = m, u;
  }
  function X(u) {
    var f = E(u, "string");
    return typeof f == "symbol" ? f : String(f);
  }
  function E(u, f) {
    if (typeof u != "object" || u === null)
      return u;
    var m = u[Symbol.toPrimitive];
    if (m !== void 0) {
      var v = m.call(u, f || "default");
      if (typeof v != "object")
        return v;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (f === "string" ? String : Number)(u);
  }
  class _ extends e.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(f, m) {
      let {
        position: v
      } = f, {
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
    constructor(f) {
      super(f), R(this, "onDragStart", (m, v) => {
        if ((0, g.default)("Draggable: onDragStart: %j", v), this.props.onStart(m, (0, s.createDraggableData)(this, v)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), R(this, "onDrag", (m, v) => {
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
            x: L,
            y: z
          } = S;
          S.x += this.state.slackX, S.y += this.state.slackY;
          const [I, G] = (0, s.getBoundPosition)(this, S.x, S.y);
          S.x = I, S.y = G, S.slackX = this.state.slackX + (L - S.x), S.slackY = this.state.slackY + (z - S.y), w.x = S.x, w.y = S.y, w.deltaX = S.x - this.state.x, w.deltaY = S.y - this.state.y;
        }
        if (this.props.onDrag(m, w) === !1)
          return !1;
        this.setState(S);
      }), R(this, "onDragStop", (m, v) => {
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
            x: L,
            y: z
          } = this.props.position;
          S.x = L, S.y = z;
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
      var f, m;
      return (f = (m = this.props) === null || m === void 0 || (m = m.nodeRef) === null || m === void 0 ? void 0 : m.current) !== null && f !== void 0 ? f : o.default.findDOMNode(this);
    }
    render() {
      const {
        axis: f,
        bounds: m,
        children: v,
        defaultPosition: w,
        defaultClassName: S,
        defaultClassNameDragging: N,
        defaultClassNameDragged: L,
        position: z,
        positionOffset: I,
        scale: G,
        ...y
      } = this.props;
      let p = {}, O = null;
      const H = !!!z || this.state.dragging, K = z || w, Q = {
        // Set left if horizontal drag is enabled
        x: (0, s.canDragX)(this) && H ? this.state.x : K.x,
        // Set top if vertical drag is enabled
        y: (0, s.canDragY)(this) && H ? this.state.y : K.y
      };
      this.state.isElementSVG ? O = (0, i.createSVGTransform)(Q, I) : p = (0, i.createCSSTransform)(Q, I);
      const A = (0, a.default)(v.props.className || "", S, {
        [N]: this.state.dragging,
        [L]: this.state.dragged
      });
      return /* @__PURE__ */ e.createElement(d.default, P({}, y, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ e.cloneElement(e.Children.only(v), {
        className: A,
        style: {
          ...v.props.style,
          ...p
        },
        transform: O
      }));
    }
  }
  t.default = _, R(_, "displayName", "Draggable"), R(_, "propTypes", {
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
  }), R(_, "defaultProps", {
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
  const { formLayout: o, context: a } = e, { formData: i } = a, s = j({}), l = Fr(e), d = "palmyra-form-field-data", g = vt(() => (C) => _t(C, s, C.label), [i.data]);
  return /* @__PURE__ */ r("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: o.fields.map((C, b) => /* @__PURE__ */ r("div", { className: l, children: /* @__PURE__ */ r("div", { className: d, children: g(C) }) }, C.attribute)) });
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
  }, d = () => {
    var x = s();
    o && o(x);
  }, g = () => {
    n();
  }, C = (x) => {
    x.keyCode === 27 && g();
  }, b = Fn(t);
  return /* @__PURE__ */ r("div", { className: "grid-filter-container", children: /* @__PURE__ */ r(
    un,
    {
      open: e,
      onClose: g,
      PaperComponent: Mr,
      onKeyDown: C,
      PaperProps: { sx: { minWidth: "500px", borderRadius: "10px" } },
      children: /* @__PURE__ */ r(Me, { onClickAway: n, children: /* @__PURE__ */ D("div", { children: [
        /* @__PURE__ */ D("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ r("div", { className: "grid-header-text-container", children: /* @__PURE__ */ r("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ r("div", { className: "grid-header-icon-container", onClick: g, children: /* @__PURE__ */ r("span", { className: "grid-header-icon", children: /* @__PURE__ */ r(xn, { className: "filter-cancel-icon" }) }) })
        ] }),
        /* @__PURE__ */ r("span", { className: "filter-header-border" }),
        /* @__PURE__ */ r("div", { className: "grid-filter-content", children: /* @__PURE__ */ r(Pe.Provider, { value: i, children: /* @__PURE__ */ r(
          Vt,
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
              Renderer: Rr
            }
          }
        ) }) }),
        /* @__PURE__ */ D("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ D(le, { className: "secondary-filled-button", disableRipple: !0, onClick: l, children: [
            /* @__PURE__ */ r(vn, { className: "button-icon" }),
            "Reset"
          ] }),
          /* @__PURE__ */ D(le, { className: "filled-button", disableRipple: !0, onClick: d, children: [
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
  const { columns: o, children: a, EmptyChild: i, onRowClick: s, quickSearch: l } = e, d = i || Ft, g = e.customizer || kt, C = e.customButton, b = e.gridTitle, [x, P] = V(!1), [R, X] = V(!1), [E, _] = V("standard"), [u, f] = V(!1), [m, v] = V(""), {
    setQueryFilter: w,
    setQuickSearch: S,
    setSortColumns: N,
    setEndPointOptions: L,
    gotoPage: z,
    setPageSize: I,
    getPageNo: G,
    refreshData: y,
    setQueryLimit: p,
    getQueryLimit: O,
    data: q,
    totalRecords: H,
    queryLimit: K,
    pageSizeOptions: Q,
    filter: A
  } = ve(e), B = n || j(null);
  he(B, () => ({
    setFilter: (M) => {
      w(M);
    },
    refresh: () => {
      y();
    },
    resetFilter() {
      w({});
    },
    setEndPointOptions: (M) => {
      L(M);
    },
    addFilter: (M, ie) => {
      w((rt) => (rt[M] = ie, { ...rt }));
    },
    setQueryLimit: (M) => {
      p(M);
    },
    getQueryLimit: () => O(),
    setSortOptions(M) {
      N(M);
    },
    getCurrentData: () => q
  }), [O]);
  const c = (M, ie) => {
    z(ie - 1);
  }, F = Ot(o, g), Y = (M) => {
    _(M);
  }, me = () => {
    P(!x);
  }, h = () => E === "compact" ? { padding: "3px" } : E === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, k = () => E === "compact" ? { padding: "3px" } : E === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, J = () => {
    var M;
    switch (E) {
      case "compact":
        M = /* @__PURE__ */ r(Te, { className: "density-icon" });
        break;
      case "comfortable":
        M = /* @__PURE__ */ r(Ee, { className: "density-icon" });
        break;
      default:
        M = /* @__PURE__ */ r(ke, { className: "grid-button-icon" });
        break;
    }
    return M;
  }, be = (M) => {
    const ie = M.target.value;
    v(ie), ie ? S(ie) : w({});
  }, Ie = (M) => {
    s && s(M);
  }, Be = (M) => {
    const ie = parseInt(M.target.value, 10);
    I(ie);
  }, Xe = () => {
    X(!R);
  }, ze = () => {
  }, qe = () => {
  }, We = () => {
    e.onNewClick();
  }, T = 200, te = !!e.pageSize, Oe = !!l, Zt = {
    transform: x ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, jt = {
    transform: R ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Jt = Math.ceil(H / K.limit);
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ D("div", { children: [
    a,
    /* @__PURE__ */ D("div", { className: "grid-header", children: [
      /* @__PURE__ */ r("div", { className: "grid-header-right-content", children: /* @__PURE__ */ r("span", { className: "grid-header-right-content-text", children: b }) }),
      /* @__PURE__ */ D("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ r("div", { className: "grid-header-filter", children: Oe && /* @__PURE__ */ r(
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
              endAdornment: /* @__PURE__ */ r(Ze, { position: "end", children: /* @__PURE__ */ r($e, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ r(Me, { onClickAway: () => {
          P(!1);
        }, children: /* @__PURE__ */ D("div", { className: "grid-header-button grid-density-btn", onClick: me, children: [
          /* @__PURE__ */ D(le, { className: "grid-btn", disableRipple: !0, children: [
            J(),
            /* @__PURE__ */ r("span", { children: "Density" }),
            /* @__PURE__ */ r(ct, { style: Zt, className: "avathar-arrw-icon" })
          ] }),
          x && /* @__PURE__ */ r("div", { className: "density-dropdown-content", children: /* @__PURE__ */ D("ul", { children: [
            /* @__PURE__ */ D("li", { onClick: () => Y("standard"), children: [
              /* @__PURE__ */ r(ke, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ D("li", { onClick: () => Y("compact"), children: [
              /* @__PURE__ */ r(Te, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ D("li", { onClick: () => Y("comfortable"), children: [
              /* @__PURE__ */ r(Ee, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        o.some((M) => M.searchable) && /* @__PURE__ */ D("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ D(le, { className: "grid-btn", disableRipple: !0, onClick: () => f(!0), children: [
            /* @__PURE__ */ r(Pt, { className: "grid-button-icon" }),
            /* @__PURE__ */ r("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ r(
            Ut,
            {
              columns: o,
              setFilter: w,
              defaultFilter: A,
              isOpen: u,
              onClose: () => f(!1)
            }
          )
        ] }),
        /* @__PURE__ */ r(Me, { onClickAway: () => {
          X(!1);
        }, children: /* @__PURE__ */ D("div", { className: "grid-header-button grid-export-btn", onClick: Xe, children: [
          /* @__PURE__ */ D(le, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ r(bn, { className: "grid-button-icon" }),
            /* @__PURE__ */ r("span", { children: "Export" }),
            /* @__PURE__ */ r(ct, { style: jt, className: "avathar-arrw-icon" })
          ] }),
          R && /* @__PURE__ */ r("div", { className: "density-dropdown-content", children: /* @__PURE__ */ D("ul", { children: [
            /* @__PURE__ */ D("li", { onClick: ze, children: [
              /* @__PURE__ */ r(kr, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ D("li", { onClick: qe, children: [
              /* @__PURE__ */ r(Tr, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        e.onNewClick ? /* @__PURE__ */ r("div", { className: "grid-header-button grid-add-btn", children: e.customAddButton ? /* @__PURE__ */ r("div", { onClick: We, children: e.customAddButton }) : /* @__PURE__ */ r("div", { onClick: We, children: /* @__PURE__ */ D(le, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ r(Mt, { className: "grid-button-icon" }),
          /* @__PURE__ */ r("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ r(ye, {}),
        C && C.map((M, ie) => /* @__PURE__ */ r("div", { className: "grid-custom-button", children: M }, ie))
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "grid-table", children: /* @__PURE__ */ r(
      Rt,
      {
        columnDefs: F,
        EmptyChild: d,
        customizer: g,
        rowData: q,
        onRowClick: Ie,
        onRowStyle: h,
        onHeaderStyle: k,
        onSortColumn: N
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "grid-footer", children: /* @__PURE__ */ r("div", { className: "grid-filter", children: te && H !== null && /* @__PURE__ */ r("div", { children: /* @__PURE__ */ D("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ r("div", { style: { width: "50%" }, children: Q && Q.length > 1 ? /* @__PURE__ */ r(xe, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ D("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("span", { children: "Showing" }) }),
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
          St,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: Q[0],
            onChange: Be,
            label: "Rows per page",
            children: Q.map((M) => /* @__PURE__ */ r(Dt, { value: M, children: M }, M))
          }
        ) }),
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ D("span", { children: [
          "of ",
          H,
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
          page: G() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), ea = oe(function(e, n) {
  const { children: o, EmptyChild: a, onRowClick: i, quickSearch: s } = e, l = e.columns, d = a || Ft, g = e.customizer || kt, C = e.customButton, b = e.gridTitle, [x, P] = V(!1), [R, X] = V("standard"), [E, _] = V(!1), [u, f] = V(""), {
    setQueryFilter: m,
    setQuickSearch: v,
    setSortColumns: w,
    setEndPointOptions: S,
    gotoPage: N,
    setPageSize: L,
    getPageNo: z,
    refreshData: I,
    setQueryLimit: G,
    getQueryLimit: y,
    data: p,
    totalRecords: O,
    queryLimit: q,
    pageSizeOptions: H,
    filter: K
  } = ve(e), [Q, A] = V(l(p)), B = n || j(null);
  he(B, () => ({
    setFilter: (T) => {
      m(T);
    },
    refresh: () => {
      I();
    },
    resetFilter() {
      m({});
    },
    setEndPointOptions: (T) => {
      S(T);
    },
    addFilter: (T, te) => {
      m((Oe) => (Oe[T] = te, { ...Oe }));
    },
    setQueryLimit: (T) => {
      G(T);
    },
    getQueryLimit: () => y(),
    setSortOptions(T) {
      w(T);
    },
    getCurrentData: () => p
  }), [y, Q]), ae(() => {
    A(l(p));
  }, [p]);
  const c = (T, te) => {
    N(te);
  }, F = Ot(Q, g), Y = (T) => {
    X(T);
  }, me = () => {
    P(!x);
  }, h = () => R === "compact" ? { padding: "3px" } : R === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, k = () => R === "compact" ? { padding: "3px" } : R === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, J = () => {
    var T;
    switch (R) {
      case "compact":
        T = /* @__PURE__ */ r(Te, { className: "density-icon" });
        break;
      case "comfortable":
        T = /* @__PURE__ */ r(Ee, { className: "density-icon" });
        break;
      default:
        T = /* @__PURE__ */ r(ke, { className: "grid-button-icon" });
        break;
    }
    return T;
  }, be = (T) => {
    const te = T.target.value;
    f(te), te ? v(te) : m({});
  }, Ie = (T) => {
    i && i(T);
  }, Be = (T) => {
    const te = parseInt(T.target.value, 10);
    L(te);
  }, Xe = () => {
    console.info("Export Clicked");
  }, ze = 200, qe = !!e.pageSize;
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
        }, children: /* @__PURE__ */ D("div", { className: "grid-header-button grid-density-btn", onClick: me, children: [
          /* @__PURE__ */ r(Fe, { title: "Density", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, children: J() }) }),
          x && /* @__PURE__ */ r("div", { className: "density-dropdown-content", children: /* @__PURE__ */ D("ul", { children: [
            /* @__PURE__ */ D("li", { onClick: () => Y("standard"), children: [
              /* @__PURE__ */ r(ke, { className: "density-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ D("li", { onClick: () => Y("compact"), children: [
              /* @__PURE__ */ r(Te, { className: "density-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ D("li", { onClick: () => Y("comfortable"), children: [
              /* @__PURE__ */ r(Ee, { className: "density-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        Q.some((T) => T.searchable) && /* @__PURE__ */ D("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ r(Fe, { title: "Filter", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, onClick: () => _(!0), children: /* @__PURE__ */ r(Nn, { className: "grid-button-icon" }) }) }),
          /* @__PURE__ */ r(
            Ut,
            {
              columns: Q,
              setFilter: m,
              defaultFilter: K,
              isOpen: E,
              onClose: () => _(!1)
            }
          )
        ] }),
        /* @__PURE__ */ r("div", { className: "grid-header-button grid-export-btn", onClick: Xe, children: /* @__PURE__ */ r(Fe, { title: "Export", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ r(On, { className: "grid-button-icon" }) }) }) }),
        e.onNewClick ? /* @__PURE__ */ r("div", { className: "grid-header-button", onClick: () => {
          e.onNewClick();
        }, children: /* @__PURE__ */ r(Fe, { title: "New", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ r(Mt, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ r(ye, {}),
        C && C.map((T, te) => /* @__PURE__ */ r("div", { className: "grid-custom-button grid-export-btn", children: T }, te))
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "grid-table", children: /* @__PURE__ */ r(
      Rt,
      {
        columnDefs: F,
        EmptyChild: d,
        customizer: g,
        rowData: p,
        onRowClick: Ie,
        onRowStyle: h,
        onHeaderStyle: k,
        onSortColumn: w
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "grid-footer", children: /* @__PURE__ */ r("div", { className: "grid-filter", children: qe && /* @__PURE__ */ r(
      hn,
      {
        component: "div",
        count: O || 0,
        page: z(),
        onPageChange: c,
        rowsPerPage: q.limit,
        rowsPerPageOptions: H || [],
        onRowsPerPageChange: Be
      }
    ) }) })
  ] }) });
}), ta = oe(function(e, n) {
  const { columns: o, endPoint: a, storeFactory: i, layoutParams: s, pagination: l } = e, d = e.quickSearch || "", g = e.customButton, C = e.customAddButton, b = e.gridTitle, x = e.fetchAll, P = e.filterTopic, R = e.initialFetch, X = (_, u) => {
  };
  ae(() => {
    var _ = dt.subscribe(e.topic, X);
    return () => {
      dt.unsubscribe(_);
    };
  }, [e.topic]);
  const E = {
    fields: o,
    pagination: l,
    quickSearch: d,
    storeOptions: {
      endPoint: a
    },
    actionOptions: e.actions
  };
  return /* @__PURE__ */ r(ye, { children: /* @__PURE__ */ r(Ue.Provider, { value: i, children: /* @__PURE__ */ r(
    $t,
    {
      layout: E,
      context: s,
      customAddButton: C,
      onDataChange: e.onDataChange,
      gridTitle: b,
      defaultParams: e.defaultParams,
      customButton: g,
      customizer: e.customizer,
      ref: n,
      fetchAll: x,
      filterTopic: P,
      initialFetch: R
    }
  ) }) });
}), Ar = oe(function(e, n) {
  const o = e.layout, [a, i] = V(o.fields), s = o.pagination ? o.pagination : [15], l = Se(Ue), d = Se(pt);
  var g = o.storeOptions || {}, C = {};
  Sn(C, g, d);
  const b = l.getGridStore(C, o.storeOptions.endPoint);
  ae(() => {
    g.hasLayout && b.queryLayout({}).then((R) => {
      i(R.columns);
    });
  }, []);
  const { onClick: x, onNewClick: P } = Tn(o.actionOptions, d);
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    Er,
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
    const { w: d, h: g } = Vr(i.width, i.height);
    return /* @__PURE__ */ r(mn, { sx: { width: d, height: g }, children: /* @__PURE__ */ r(
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
  var C;
  const o = e.data || {}, { layout: a } = e;
  var { getFieldManager: i, getFormData: s, isFormValid: l } = Ln(o, (C = e.callbacks) == null ? void 0 : C.onFormValidChange, Ir(e.mode));
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
    Kt,
    {
      layout: b,
      context: d
    }
  ) }, b.name + x)) }) });
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
  const [o, a] = V(e.layout), i = e.mode ? e.mode : o.type ? o.type : "grid", s = e.layoutParams || {}, l = Br(i), d = j(0);
  return ae(() => {
    a(e.layout), d.current < 999999 ? d.current++ : d.current = 0;
  }, [e.layout]), /* @__PURE__ */ r(Lt, { fallback: /* @__PURE__ */ r("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ r(Ue.Provider, { value: e.storeFactory, children: /* @__PURE__ */ r(pt.Provider, { value: s, children: /* @__PURE__ */ r(l, { ...e, ref: (g) => {
    n && (n.current = g);
  } }, d.current) }) }) });
}), ra = oe(function(e, n) {
  const { children: o, Child: a, childProps: i, pageSize: s } = e, l = n || j(null), {
    setQueryFilter: d,
    refreshData: g,
    setSortColumns: C,
    setEndPointOptions: b,
    setQuickSearch: x,
    gotoPage: P,
    setPageSize: R,
    getPageNo: X,
    setQueryLimit: E,
    getQueryLimit: _,
    data: u,
    totalRecords: f,
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
      d((q) => (q[p] = O, { ...q }));
    },
    setQueryLimit: (p) => {
      E(p);
    },
    getQueryLimit: () => _(),
    getCurrentData: () => u,
    setSortOptions(p) {
      C(p);
    }
  }), [d]);
  const S = (p, O) => {
    P(O - 1);
  }, N = (p) => {
    const O = p.target.value;
    x(O);
  }, L = (p) => {
    const O = parseInt(p.target.value, 10);
    R(O);
  }, z = 200, I = !!s, G = !!e.quickSearch, y = Math.ceil(f / v.limit);
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("div", { className: "card-page-container", children: /* @__PURE__ */ D("div", { children: [
    /* @__PURE__ */ D("div", { className: "card-header", children: [
      o,
      /* @__PURE__ */ r("div", { className: "card-filter", children: G && /* @__PURE__ */ r(
        Ne,
        {
          sx: { width: z },
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
      pn,
      {
        Child: a,
        childKeyProvider: w,
        preProcess: e.preProcess,
        dataList: u,
        childProps: i,
        EmptyChild: e.EmptyChild
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "card-pagination", children: I && f !== null && // <TablePagination
    //     component="div"
    //     count={totalRecords || 0}
    //     page={getPageNo()}
    //     onPageChange={nextPage}
    //     rowsPerPage={queryLimit.limit}
    //     rowsPerPageOptions={pageSizeOptions || []}
    //     onRowsPerPageChange={handleRowsPerPageChange}
    // />
    /* @__PURE__ */ D("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ r("div", { children: m && m.length > 1 ? /* @__PURE__ */ r(xe, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ D("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("span", { children: "Showing" }) }),
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
          St,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: m[0],
            onChange: L,
            label: "Rows per page",
            children: m.map((p) => /* @__PURE__ */ r(Dt, { value: p, children: p }, p))
          }
        ) }),
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ D("span", { children: [
          "of ",
          f,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ r("div", { style: {}, children: /* @__PURE__ */ r(gn, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ r(
        wt,
        {
          count: y,
          shape: "rounded",
          componentName: "div",
          onChange: S,
          page: X() + 1
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
