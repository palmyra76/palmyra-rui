import "../assets/ServerCardLayout.css";
import qt from "../palmyra/mui/form/MuiDatePicker.js";
import Qt from "../palmyra/mui/form/MuiDateTimePicker.js";
import Wt from "../palmyra/mui/form/MuiRadioGroup.js";
import tt from "../palmyra/mui/form/MuiSelect.js";
import Yt from "../palmyra/mui/form/MuiTextArea.js";
import Gt from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import Ut from "../palmyra/mui/form/MuiCheckBox.js";
import $t from "../palmyra/mui/form/MuiSwitch.js";
import Ht from "../palmyra/mui/form/MuiPassword.js";
import Kt from "../palmyra/mui/form/MuiNumberField.js";
import Be from "../palmyra/mui/form/FieldDecorator.js";
import { FieldManagerContext as xe, StoreFactoryContext as ze, LayoutParamsContext as ut } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as o, jsxs as k, Fragment as ve } from "react/jsx-runtime";
import dt, { useState as V, useRef as J, useEffect as ae, forwardRef as re, useContext as De, useImperativeHandle as he, useMemo as ft } from "react";
import { p as mt, a as qe } from "./index.js";
import { FormControlLabel as nt, Checkbox as rt, FormControl as Qe, FormHelperText as We, Autocomplete as ht, TextField as Ne, CircularProgress as gt, Dialog as jt, ClickAwayListener as Ye, Button as le, Paper as Jt, InputAdornment as Ge, Tooltip as me, TablePagination as Ue, Box as Zt } from "@mui/material";
import en from "../palmyra/layout/card/CardLayout.js";
import tn from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as $e, getFieldLabel as He } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as Pe } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as we } from "../palmyra/form/FormUtil.js";
import { delay as pt, delayGenerator as nn, mergeDeep as rn } from "../palmyra/utils/index.js";
import on from "../palmyra/mui/form/MuiDateRangePicker.js";
import an from "../palmyra/mui/form/MuiIntegerField.js";
import yt from "../palmyra/layout/container/SectionContainer.js";
import sn from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as vt } from "../palmyra/grid/base/ColumnConverter.js";
import bt from "../palmyra/grid/base/EmptyChildTable.js";
import Ct from "../palmyra/grid/base/TableX.js";
import { Close as ln, Menu as Fe, DensitySmall as Re, DensityLarge as Me, FilterAlt as St, FileDownloadOutlined as Dt, Add as Pt } from "@mui/icons-material";
import { NoopCustomizer as wt } from "../palmyra/grid/Types.js";
import { convertToField as cn } from "../palmyra/grid/base/GridFieldConverter.js";
import { a as un, g as dn } from "./_commonjsHelpers.js";
import xt from "react-dom";
import { createFilterData as fn } from "../palmyra/form/PalmyraFilterManager.js";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import { topic as ot } from "../palmyra/utils/pubsub/topic.js";
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
import { getActionPublishers as mn } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as Nt } from "../palmyra/layout/ErrorBoundary.js";
import hn from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import gn from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as pn } from "./PalmyraFieldManager.js";
import { useKeyValue as yn } from "../palmyra/utils/pubsub/PubSubHelper.js";
const be = (t) => {
  var Y, H;
  const { store: e, quickSearch: n } = t, r = t.fetchAll != !1, [a, i] = V(t.endPointOptions), [l, u] = V(null), f = ((Y = t.defaultParams) == null ? void 0 : Y.filter) || {}, g = ((H = t.defaultParams) == null ? void 0 : H.sort) || {}, [b, v] = t.filterTopic ? yn(t.filterTopic, f) : V(f), [P, C] = V({}), I = J(t.initialFetch == !1), q = t.pageSize ? t.pageSize : 15;
  var _ = q instanceof Array ? q : [q], z = q instanceof Array ? q[0] : q;
  const [h, c] = V({ limit: z, offset: 0, total: !0 }), [y, p] = V(null), w = () => Math.round(h.offset / h.limit), S = () => h, N = (M) => {
    c((L) => ({ limit: L.limit, total: L.total, offset: M * L.limit }));
  }, T = (M) => {
    const L = M > 10 || M == -1 ? M : 15;
    c((d) => {
      const x = Math.floor(d.offset / L) * L;
      return { limit: L, total: d.total, offset: x };
    });
  }, X = () => b ? Object.keys(b).length == 0 : !1, A = (M) => {
    p((L) => (setTimeout(() => {
      t.onDataChange && t.onDataChange(y, L);
    }, 300), M));
  };
  ae(() => {
    if (I.current) {
      I.current = !1;
      return;
    }
    (r || !X()) && Q();
  }, [h, P, a]);
  const Q = () => {
    const L = {
      sortOrder: P && Object.keys(P).length > 0 ? P : g,
      total: !0,
      endPointVars: a,
      ...h,
      filter: { ...b, ...f }
    };
    if (e)
      try {
        e.query(L).then((d) => {
          A(d.result), u(d.total);
        }).catch((d) => {
          var x = d.response ? d.response : d;
          console.error("error while fetching", x), D();
        });
      } catch (d) {
        console.error(d), s();
      }
    else
      console.error("Store is not provided for the Grid"), s();
  }, s = () => {
    A([]), u(0);
  }, D = () => {
    A(void 0), u(null);
  };
  return {
    setQueryFilter: (M) => {
      typeof M == "function" || M && Object.keys(M).length > 0 ? v(M) : v({}), N(0);
    },
    setQuickSearch: (M) => {
      const L = n;
      v(M ? (d) => (d[L] = M, { ...d }) : (d) => (delete d[L], { ...d })), N(0);
    },
    setSortColumns: (M) => {
      C(M);
    },
    setEndPointOptions: i,
    refreshData: Q,
    gotoPage: N,
    setPageSize: T,
    getPageNo: w,
    getQueryLimit: S,
    setQueryLimit: c,
    filter: b,
    queryLimit: h,
    data: y,
    totalRecords: l,
    pageSizeOptions: _
  };
};
function at(t) {
  return t ? Array.isArray(t) ? t : typeof t == "string" ? t.split(",") : (console.log(t), [t]) : [];
}
const Oo = re(function(e, n) {
  const r = De(xe), a = n || J(null), i = r(e, "checkbox", a), { mutateOptions: l, setMutateOptions: u } = i, [f, g] = V(!1), b = at(i.data), v = i.error, P = i.eventListeners, I = { store: i.store, pageSize: -1 }, { data: q } = be(I), _ = q, z = J(null), h = e.lookupOptions || {}, c = h.idAttribute || "id", y = h.displayAttribute || "name", p = e.showSelectedOnly && e.readonly, w = Pe(c) ? (s) => we(c, s) : (s) => s[c], S = Pe(y) ? (s) => we(y, s) : (s) => s[y];
  he(a, () => ({
    focus() {
      z.current.focus();
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
    setValue(s, D = !1) {
      i.setData(s, D);
    },
    setVisible(s) {
      u((D) => ({ ...D, visible: s }));
    },
    setRequired(s) {
      u((D) => ({ ...D, required: s }));
    },
    setReadOnly(s) {
      u((D) => ({ ...D, readonly: s }));
    },
    setAttribute(s) {
      u((D) => ({ ...D, ...s }));
    },
    setOptions(s) {
    },
    getOptions() {
    }
  }), [i]);
  var N = $e(e, i.data, e.label);
  e.readonly && (N.inputprops = { readOnly: !0 });
  function T(s, D) {
    const E = at(i.data);
    var W = E.indexOf(s);
    D ? W < 0 && E.push(s) : W >= 0 && E.splice(W, 1), P.onValueChange(E.toString());
  }
  var X = {
    onBlur: P.onBlur,
    onFocus: P.onFocus,
    onChange: (s) => {
      T(s.target.value, s.target.checked);
    }
  };
  const A = (s) => {
    const D = s.toString();
    return b.includes(D);
  }, Q = (s) => {
    const D = s.target.checked;
    g(D);
    var E = [];
    D && _.map((W) => {
      E.push(w(W));
    }), P.onValueChange(E.toString());
  };
  return /* @__PURE__ */ o("div", { className: e.className, children: l.visible && /* @__PURE__ */ k(
    Be,
    {
      label: He(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: [
        /* @__PURE__ */ o("div", { children: e.hideSelectAll ? /* @__PURE__ */ o(ve, {}) : /* @__PURE__ */ o(
          nt,
          {
            control: /* @__PURE__ */ o(rt, { onChange: Q }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ k(
          Qe,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: v.status,
            ...N,
            children: [
              _ ? _.filter((s) => p ? A(w(s)) : !0).map((s) => /* @__PURE__ */ o(
                nt,
                {
                  value: w(s),
                  control: /* @__PURE__ */ o(
                    rt,
                    {
                      ...X,
                      checked: A(w(s)),
                      disabled: e.readonly
                    }
                  ),
                  label: S(s)
                },
                w(s)
              )) : /* @__PURE__ */ o("div", { children: "No options provided" }),
              /* @__PURE__ */ o(We, { className: "form-error-text", children: v.message })
            ]
          }
        )
      ]
    }
  ) });
}), vn = nn(100), bn = re(function(e, n) {
  const r = De(xe), a = n || J(null), i = J(null), l = J(0), [u, f] = V([]), [g, b] = V(""), [v, P] = V(!1), C = r(e, "serverlookup", a), I = e.store || C.store, q = e.lookupOptions || {}, _ = q.idAttribute || "id", z = q.displayAttribute || "name", h = z, c = {
    store: I,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: h,
    initialFetch: !1
  }, y = be(c), p = C.eventListeners, w = C.error, { mutateOptions: S, setMutateOptions: N } = C, T = C.data, X = v && u.length < (T ? 2 : 1), { setQueryFilter: A, setEndPointOptions: Q, setQuickSearch: s, totalRecords: D, refreshData: E } = y, W = y.data, G = Pe(_) ? (m) => we(_, m) : (m) => m == null ? void 0 : m[_], Y = Pe(z) ? (m) => we(z, m) : (m) => m == null ? void 0 : m[z];
  ae(() => {
    var m = T != "" ? T : void 0;
    m && f([m]);
  }, [C.data]), ae(() => {
    const m = W ? [...W] : [], O = T != "" ? T : void 0, Z = G(O), Ce = Y(O);
    m && Z && Ce && !x(m, Z) && m.unshift(O), f(m), l.current < D && (l.current = D);
  }, [W, D]), ae(() => {
    pt(H);
  }, [g]), ae(() => {
    vn(H);
  }, [v]);
  function H() {
    v && (g.length > 0 && g != Y(T) ? s("*" + g + "*") : W ? s(null) : E());
  }
  var M = {
    onBlur: p.onBlur,
    onFocus: p.onFocus,
    onChange: (m, O) => {
      L(O);
    },
    onInputChange: (m, O) => (b(O), !0)
  };
  const L = (m) => {
    p.onValueChange(m);
  }, d = (m) => typeof m == "object" ? Y(m) + "" : (console.log(m), "");
  function x(m, O) {
    return m.find((Z) => {
      if (G(Z) == O)
        return Z;
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
      e.multiple ? C.setData([], !0) : C.setData(void 0, !0);
    },
    getValue() {
      return C.getData();
    },
    setValue(m, O = !1) {
      C.setData(m, O);
    },
    setVisible(m) {
      N((O) => ({ ...O, visible: m }));
    },
    setRequired(m) {
      N((O) => ({ ...O, required: m }));
    },
    setReadOnly(m) {
      N((O) => ({ ...O, readonly: m }));
    },
    setAttribute(m) {
      N((O) => ({ ...O, ...m }));
    },
    setFilter(m) {
      A(m);
    },
    resetFilter() {
      A({});
    },
    setEndPointOptions(m) {
      Q(m);
    },
    getCurrentData: () => T,
    refresh: () => {
      E();
    },
    addFilter(m, O) {
      A((Z) => (Z[m] = O, { ...Z }));
    },
    setDefaultFilter(m) {
    },
    setSortOptions(m) {
    }
  }), [C, A]);
  var U = $e(e, T, e.label);
  S.readonly && (U.inputProps = { readOnly: !0 });
  const ge = (m, O) => m instanceof Array ? m.some((Z) => G(Z) == G(O)) : G(m) == G(O);
  return /* @__PURE__ */ o(
    Be,
    {
      label: He(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ k(Qe, { fullWidth: !0, error: w.status, children: [
        /* @__PURE__ */ o(
          ht,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: e.multiple,
            readOnly: e.readonly,
            renderOption: e.renderOption,
            isOptionEqualToValue: ge,
            filterOptions: (m) => m,
            renderInput: (m) => /* @__PURE__ */ o(
              Ne,
              {
                ...m,
                inputRef: (O) => {
                  i.current = O;
                },
                variant: e.variant || "standard",
                label: e.label,
                autoFocus: e.autoFocus,
                required: e.required,
                InputProps: {
                  ...m.InputProps,
                  endAdornment: /* @__PURE__ */ k(ve, { children: [
                    X ? /* @__PURE__ */ o(gt, { color: "inherit", size: 18 }) : null,
                    m.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: d,
            ...U,
            options: u,
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
        /* @__PURE__ */ o(We, { className: "form-error-text", children: w.message })
      ] })
    }
  );
}), Cn = re(function(e, n) {
  const r = De(xe), a = n || J(null), i = J(null), l = J(0), [u, f] = V([]), [g, b] = V(""), [v, P] = V(!1), C = r(e, "autoComplete", a), I = e.store || C.store, _ = (e.lookupOptions || {}).attribute || "name", z = _, h = {
    store: I,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: z,
    initialFetch: !1
  }, c = be(h), y = C.eventListeners, p = C.error, { mutateOptions: w, setMutateOptions: S } = C, N = C.data, T = v && u.length < (N ? 2 : 1), { setQueryFilter: X, setEndPointOptions: A, setQuickSearch: Q, totalRecords: s, refreshData: D } = c, E = c.data, W = Pe(_) ? (d) => we(_, d) : (d) => d == null ? void 0 : d[_];
  ae(() => {
    var d = N != "" ? N : void 0;
    d && f([d]);
  }, [C.data]), ae(() => {
    const x = (E ? [...E] : []).map((ge) => W(ge)), U = N != "" ? N : void 0;
    x && U && !M(x, U) && x.unshift(U), f(x), l.current < s && (l.current = s);
  }, [E, s]), ae(() => {
    pt(G);
  }, [g, v]);
  function G() {
    v && (g.length > 0 && g != N ? Q("*" + g + "*") : E ? Q(null) : D());
  }
  var Y = {
    onBlur: (d) => {
      H(g), y.onBlur(g);
    },
    onFocus: y.onFocus,
    onChange: (d, x) => {
      H(x);
    },
    onInputChange: (d, x) => (b(x), !0)
  };
  const H = (d) => {
    y.onValueChange(d);
  };
  function M(d, x) {
    return d.find((U) => {
      if (U == x)
        return U;
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
      C.setData(void 0, !0);
    },
    getValue() {
      return C.getData();
    },
    setValue(d, x = !1) {
      C.setData(d, x);
    },
    setVisible(d) {
      S((x) => ({ ...x, visible: d }));
    },
    setRequired(d) {
      S((x) => ({ ...x, required: d }));
    },
    setReadOnly(d) {
      S((x) => ({ ...x, readonly: d }));
    },
    setAttribute(d) {
      S((x) => ({ ...x, ...d }));
    },
    setFilter(d) {
      X(d);
    },
    resetFilter() {
      X({});
    },
    setEndPointOptions(d) {
      A(d);
    },
    getCurrentData: () => N,
    refresh: () => {
      D();
    },
    addFilter(d, x) {
      X((U) => (U[d] = x, { ...U }));
    },
    setDefaultFilter(d) {
    },
    setSortOptions(d) {
    }
  }), [C, X]);
  var L = $e(e, N, e.label);
  return w.readonly && (L.inputProps = { readOnly: !0 }), /* @__PURE__ */ o(
    Be,
    {
      label: He(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ k(Qe, { fullWidth: !0, error: p.status, children: [
        /* @__PURE__ */ o(
          ht,
          {
            freeSolo: !0,
            autoSelect: !0,
            readOnly: e.readonly,
            renderOption: e.renderOption,
            filterOptions: (d) => d,
            renderInput: (d) => /* @__PURE__ */ o(
              Ne,
              {
                ...d,
                inputRef: (x) => {
                  i.current = x;
                },
                variant: e.variant || "standard",
                label: e.label,
                autoFocus: e.autoFocus,
                required: e.required,
                ...L,
                InputProps: {
                  ...d.InputProps,
                  endAdornment: /* @__PURE__ */ k(ve, { children: [
                    T ? /* @__PURE__ */ o(gt, { color: "inherit", size: 18 }) : null,
                    d.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...L,
            options: u,
            open: v,
            onClose: () => {
              P(!1);
            },
            onOpen: (d) => {
              P(!0);
            },
            ...Y
          }
        ),
        /* @__PURE__ */ o(We, { className: "form-error-text", children: p.message })
      ] })
    }
  );
}), Sn = (t) => {
  const { fieldDef: e } = t;
  return /* @__PURE__ */ k("div", { children: [
    "invalid type " + e.type,
    " "
  ] });
}, K = (t, e) => {
  const n = t.fieldDef;
  return /* @__PURE__ */ o(
    e,
    {
      ...n,
      label: t.title
    },
    n.title + n.attribute
  );
}, Ot = (t, e, n) => {
  const { type: r } = t, a = { fieldDef: t, title: n };
  switch (r) {
    case "string":
      return K(a, Gt);
    case "radio":
      return K(a, Wt);
    case "select":
      return K(a, tt);
    case "date":
      return K(a, qt);
    case "datetime":
      return K(a, Qt);
    case "checkbox":
      return K(a, Ut);
    case "serverlookup":
      return K(a, bn);
    case "textarea":
      return K(a, Yt);
    case "switch":
      return K(a, $t);
    case "password":
      return K(a, Ht);
    case "float":
    case "number":
    case "numbersOnly":
      return K(a, Kt);
    case "integer":
      return K(a, an);
    case "multiSelect":
      return K(a, tt);
    case "dateRange":
      return K(a, on);
    case "autoComplete":
      return K(a, Cn);
    default:
      return Sn(a);
  }
}, Dn = re(function(e, n) {
  var b;
  const { formLayout: r, context: a } = e, { formData: i } = a, l = r.Container;
  J({});
  const u = ft(() => (v) => Ot(v), [i.data]);
  var f = ((b = r.options) == null ? void 0 : b.columns) || 1, g = { columns: f };
  return l ? /* @__PURE__ */ o("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: r.fields.map((v, P) => /* @__PURE__ */ o(
    l,
    {
      index: P,
      field: v,
      label: v.title,
      options: g,
      children: u(v)
    },
    v.attribute + v.name + v.type
  )) }) : /* @__PURE__ */ o("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: r.fields.map((v, P) => u(v)) });
}), Ft = (t) => {
  const { layout: e, context: n } = t;
  var r = e.Renderer || Dn, a = e.Container || yt;
  const i = (l) => /* @__PURE__ */ o(
    r,
    {
      context: n,
      formLayout: l
    }
  );
  return /* @__PURE__ */ o(
    a,
    {
      hideTitle: e.hideTitle,
      title: e.title,
      name: e.name,
      children: /* @__PURE__ */ o(sn, { columns: e.columns, children: i(e.formLayout) })
    }
  );
};
var ke = { exports: {} }, Rt = {};
function Mt(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number")
    r += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = Mt(t[e])) && (r && (r += " "), r += n);
    else
      for (e in t)
        t[e] && (r && (r += " "), r += e);
  return r;
}
function it() {
  for (var t, e, n = 0, r = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = Mt(t)) && (r && (r += " "), r += e);
  return r;
}
const Pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: it,
  default: it
}, Symbol.toStringTag, { value: "Module" })), wn = /* @__PURE__ */ un(Pn);
var B = {}, ce = {};
Object.defineProperty(ce, "__esModule", {
  value: !0
});
ce.dontSetMe = Rn;
ce.findInArray = xn;
ce.int = Fn;
ce.isFunction = Nn;
ce.isNum = On;
function xn(t, e) {
  for (let n = 0, r = t.length; n < r; n++)
    if (e.apply(e, [t[n], n, t]))
      return t[n];
}
function Nn(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Function]";
}
function On(t) {
  return typeof t == "number" && !isNaN(t);
}
function Fn(t) {
  return parseInt(t, 10);
}
function Rn(t, e, n) {
  if (t[e])
    return new Error("Invalid prop ".concat(e, " passed to ").concat(n, " - do not set this, set it on the child."));
}
var pe = {};
Object.defineProperty(pe, "__esModule", {
  value: !0
});
pe.browserPrefixToKey = Tt;
pe.browserPrefixToStyle = Mn;
pe.default = void 0;
pe.getPrefix = kt;
const Ve = ["Moz", "Webkit", "O", "ms"];
function kt() {
  var t;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const n = (t = window.document) === null || t === void 0 || (t = t.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!n || e in n)
    return "";
  for (let r = 0; r < Ve.length; r++)
    if (Tt(e, Ve[r]) in n)
      return Ve[r];
  return "";
}
function Tt(t, e) {
  return e ? "".concat(e).concat(kn(t)) : t;
}
function Mn(t, e) {
  return e ? "-".concat(e.toLowerCase(), "-").concat(t) : t;
}
function kn(t) {
  let e = "", n = !0;
  for (let r = 0; r < t.length; r++)
    n ? (e += t[r].toUpperCase(), n = !1) : t[r] === "-" ? n = !0 : e += t[r];
  return e;
}
pe.default = kt();
Object.defineProperty(B, "__esModule", {
  value: !0
});
B.addClassName = _t;
B.addEvent = Ln;
B.addUserSelectStyles = Yn;
B.createCSSTransform = zn;
B.createSVGTransform = qn;
B.getTouch = Qn;
B.getTouchIdentifier = Wn;
B.getTranslation = Ke;
B.innerHeight = In;
B.innerWidth = Xn;
B.matchesSelector = Lt;
B.matchesSelectorAndParentsTo = En;
B.offsetXYFromParent = Bn;
B.outerHeight = An;
B.outerWidth = Vn;
B.removeClassName = At;
B.removeEvent = _n;
B.removeUserSelectStyles = Gn;
var ne = ce, st = Tn(pe);
function Et(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Et = function(r) {
    return r ? n : e;
  })(t);
}
function Tn(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var n = Et(e);
  if (n && n.has(t))
    return n.get(t);
  var r = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(t, i)) {
      var l = a ? Object.getOwnPropertyDescriptor(t, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : r[i] = t[i];
    }
  return r.default = t, n && n.set(t, r), r;
}
let Oe = "";
function Lt(t, e) {
  return Oe || (Oe = (0, ne.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, ne.isFunction)(t[n]);
  })), (0, ne.isFunction)(t[Oe]) ? t[Oe](e) : !1;
}
function En(t, e, n) {
  let r = t;
  do {
    if (Lt(r, e))
      return !0;
    if (r === n)
      return !1;
    r = r.parentNode;
  } while (r);
  return !1;
}
function Ln(t, e, n, r) {
  if (!t)
    return;
  const a = {
    capture: !0,
    ...r
  };
  t.addEventListener ? t.addEventListener(e, n, a) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n;
}
function _n(t, e, n, r) {
  if (!t)
    return;
  const a = {
    capture: !0,
    ...r
  };
  t.removeEventListener ? t.removeEventListener(e, n, a) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null;
}
function An(t) {
  let e = t.clientHeight;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e += (0, ne.int)(n.borderTopWidth), e += (0, ne.int)(n.borderBottomWidth), e;
}
function Vn(t) {
  let e = t.clientWidth;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e += (0, ne.int)(n.borderLeftWidth), e += (0, ne.int)(n.borderRightWidth), e;
}
function In(t) {
  let e = t.clientHeight;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e -= (0, ne.int)(n.paddingTop), e -= (0, ne.int)(n.paddingBottom), e;
}
function Xn(t) {
  let e = t.clientWidth;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e -= (0, ne.int)(n.paddingLeft), e -= (0, ne.int)(n.paddingRight), e;
}
function Bn(t, e, n) {
  const a = e === e.ownerDocument.body ? {
    left: 0,
    top: 0
  } : e.getBoundingClientRect(), i = (t.clientX + e.scrollLeft - a.left) / n, l = (t.clientY + e.scrollTop - a.top) / n;
  return {
    x: i,
    y: l
  };
}
function zn(t, e) {
  const n = Ke(t, e, "px");
  return {
    [(0, st.browserPrefixToKey)("transform", st.default)]: n
  };
}
function qn(t, e) {
  return Ke(t, e, "");
}
function Ke(t, e, n) {
  let {
    x: r,
    y: a
  } = t, i = "translate(".concat(r).concat(n, ",").concat(a).concat(n, ")");
  if (e) {
    const l = "".concat(typeof e.x == "string" ? e.x : e.x + n), u = "".concat(typeof e.y == "string" ? e.y : e.y + n);
    i = "translate(".concat(l, ", ").concat(u, ")") + i;
  }
  return i;
}
function Qn(t, e) {
  return t.targetTouches && (0, ne.findInArray)(t.targetTouches, (n) => e === n.identifier) || t.changedTouches && (0, ne.findInArray)(t.changedTouches, (n) => e === n.identifier);
}
function Wn(t) {
  if (t.targetTouches && t.targetTouches[0])
    return t.targetTouches[0].identifier;
  if (t.changedTouches && t.changedTouches[0])
    return t.changedTouches[0].identifier;
}
function Yn(t) {
  if (!t)
    return;
  let e = t.getElementById("react-draggable-style-el");
  e || (e = t.createElement("style"), e.type = "text/css", e.id = "react-draggable-style-el", e.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, e.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, t.getElementsByTagName("head")[0].appendChild(e)), t.body && _t(t.body, "react-draggable-transparent-selection");
}
function Gn(t) {
  if (t)
    try {
      if (t.body && At(t.body, "react-draggable-transparent-selection"), t.selection)
        t.selection.empty();
      else {
        const e = (t.defaultView || window).getSelection();
        e && e.type !== "Caret" && e.removeAllRanges();
      }
    } catch {
    }
}
function _t(t, e) {
  t.classList ? t.classList.add(e) : t.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) || (t.className += " ".concat(e));
}
function At(t, e) {
  t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"), "");
}
var ue = {};
Object.defineProperty(ue, "__esModule", {
  value: !0
});
ue.canDragX = Hn;
ue.canDragY = Kn;
ue.createCoreData = Jn;
ue.createDraggableData = Zn;
ue.getBoundPosition = Un;
ue.getControlPosition = jn;
ue.snapToGrid = $n;
var te = ce, ye = B;
function Un(t, e, n) {
  if (!t.props.bounds)
    return [e, n];
  let {
    bounds: r
  } = t.props;
  r = typeof r == "string" ? r : er(r);
  const a = je(t);
  if (typeof r == "string") {
    const {
      ownerDocument: i
    } = a, l = i.defaultView;
    let u;
    if (r === "parent" ? u = a.parentNode : u = i.querySelector(r), !(u instanceof l.HTMLElement))
      throw new Error('Bounds selector "' + r + '" could not find an element.');
    const f = u, g = l.getComputedStyle(a), b = l.getComputedStyle(f);
    r = {
      left: -a.offsetLeft + (0, te.int)(b.paddingLeft) + (0, te.int)(g.marginLeft),
      top: -a.offsetTop + (0, te.int)(b.paddingTop) + (0, te.int)(g.marginTop),
      right: (0, ye.innerWidth)(f) - (0, ye.outerWidth)(a) - a.offsetLeft + (0, te.int)(b.paddingRight) - (0, te.int)(g.marginRight),
      bottom: (0, ye.innerHeight)(f) - (0, ye.outerHeight)(a) - a.offsetTop + (0, te.int)(b.paddingBottom) - (0, te.int)(g.marginBottom)
    };
  }
  return (0, te.isNum)(r.right) && (e = Math.min(e, r.right)), (0, te.isNum)(r.bottom) && (n = Math.min(n, r.bottom)), (0, te.isNum)(r.left) && (e = Math.max(e, r.left)), (0, te.isNum)(r.top) && (n = Math.max(n, r.top)), [e, n];
}
function $n(t, e, n) {
  const r = Math.round(e / t[0]) * t[0], a = Math.round(n / t[1]) * t[1];
  return [r, a];
}
function Hn(t) {
  return t.props.axis === "both" || t.props.axis === "x";
}
function Kn(t) {
  return t.props.axis === "both" || t.props.axis === "y";
}
function jn(t, e, n) {
  const r = typeof e == "number" ? (0, ye.getTouch)(t, e) : null;
  if (typeof e == "number" && !r)
    return null;
  const a = je(n), i = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, ye.offsetXYFromParent)(r || t, i, n.props.scale);
}
function Jn(t, e, n) {
  const r = !(0, te.isNum)(t.lastX), a = je(t);
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
function Zn(t, e) {
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
function er(t) {
  return {
    left: t.left,
    top: t.top,
    right: t.right,
    bottom: t.bottom
  };
}
function je(t) {
  const e = t.findDOMNode();
  if (!e)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return e;
}
var Te = {}, Ee = {};
Object.defineProperty(Ee, "__esModule", {
  value: !0
});
Ee.default = tr;
function tr() {
}
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.default = void 0;
var Ie = rr(dt), ee = Je(mt), nr = Je(xt), $ = B, de = ue, Xe = ce, Se = Je(Ee);
function Je(t) {
  return t && t.__esModule ? t : { default: t };
}
function Vt(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Vt = function(r) {
    return r ? n : e;
  })(t);
}
function rr(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var n = Vt(e);
  if (n && n.has(t))
    return n.get(t);
  var r = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(t, i)) {
      var l = a ? Object.getOwnPropertyDescriptor(t, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : r[i] = t[i];
    }
  return r.default = t, n && n.set(t, r), r;
}
function j(t, e, n) {
  return e = or(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function or(t) {
  var e = ar(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function ar(t, e) {
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
let fe = se.mouse, Le = class extends Ie.Component {
  constructor() {
    super(...arguments), j(this, "dragging", !1), j(this, "lastX", NaN), j(this, "lastY", NaN), j(this, "touchIdentifier", null), j(this, "mounted", !1), j(this, "handleDragStart", (e) => {
      if (this.props.onMouseDown(e), !this.props.allowAnyClick && typeof e.button == "number" && e.button !== 0)
        return !1;
      const n = this.findDOMNode();
      if (!n || !n.ownerDocument || !n.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      const {
        ownerDocument: r
      } = n;
      if (this.props.disabled || !(e.target instanceof r.defaultView.Node) || this.props.handle && !(0, $.matchesSelectorAndParentsTo)(e.target, this.props.handle, n) || this.props.cancel && (0, $.matchesSelectorAndParentsTo)(e.target, this.props.cancel, n))
        return;
      e.type === "touchstart" && e.preventDefault();
      const a = (0, $.getTouchIdentifier)(e);
      this.touchIdentifier = a;
      const i = (0, de.getControlPosition)(e, a, this);
      if (i == null)
        return;
      const {
        x: l,
        y: u
      } = i, f = (0, de.createCoreData)(this, l, u);
      (0, Se.default)("DraggableCore: handleDragStart: %j", f), (0, Se.default)("calling", this.props.onStart), !(this.props.onStart(e, f) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, $.addUserSelectStyles)(r), this.dragging = !0, this.lastX = l, this.lastY = u, (0, $.addEvent)(r, fe.move, this.handleDrag), (0, $.addEvent)(r, fe.stop, this.handleDragStop));
    }), j(this, "handleDrag", (e) => {
      const n = (0, de.getControlPosition)(e, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: r,
        y: a
      } = n;
      if (Array.isArray(this.props.grid)) {
        let u = r - this.lastX, f = a - this.lastY;
        if ([u, f] = (0, de.snapToGrid)(this.props.grid, u, f), !u && !f)
          return;
        r = this.lastX + u, a = this.lastY + f;
      }
      const i = (0, de.createCoreData)(this, r, a);
      if ((0, Se.default)("DraggableCore: handleDrag: %j", i), this.props.onDrag(e, i) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const f = document.createEvent("MouseEvents");
          f.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(f);
        }
        return;
      }
      this.lastX = r, this.lastY = a;
    }), j(this, "handleDragStop", (e) => {
      if (!this.dragging)
        return;
      const n = (0, de.getControlPosition)(e, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: r,
        y: a
      } = n;
      if (Array.isArray(this.props.grid)) {
        let f = r - this.lastX || 0, g = a - this.lastY || 0;
        [f, g] = (0, de.snapToGrid)(this.props.grid, f, g), r = this.lastX + f, a = this.lastY + g;
      }
      const i = (0, de.createCoreData)(this, r, a);
      if (this.props.onStop(e, i) === !1 || this.mounted === !1)
        return !1;
      const u = this.findDOMNode();
      u && this.props.enableUserSelectHack && (0, $.removeUserSelectStyles)(u.ownerDocument), (0, Se.default)("DraggableCore: handleDragStop: %j", i), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, u && ((0, Se.default)("DraggableCore: Removing handlers"), (0, $.removeEvent)(u.ownerDocument, fe.move, this.handleDrag), (0, $.removeEvent)(u.ownerDocument, fe.stop, this.handleDragStop));
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
    return (e = this.props) !== null && e !== void 0 && e.nodeRef ? (n = this.props) === null || n === void 0 || (n = n.nodeRef) === null || n === void 0 ? void 0 : n.current : nr.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ Ie.cloneElement(Ie.Children.only(this.props.children), {
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
Te.default = Le;
j(Le, "displayName", "DraggableCore");
j(Le, "propTypes", {
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
  className: Xe.dontSetMe,
  style: Xe.dontSetMe,
  transform: Xe.dontSetMe
});
j(Le, "defaultProps", {
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
      return f.default;
    }
  }), t.default = void 0;
  var e = P(dt), n = b(mt), r = b(xt), a = b(wn), i = B, l = ue, u = ce, f = b(Te), g = b(Ee);
  function b(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function v(h) {
    if (typeof WeakMap != "function")
      return null;
    var c = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap();
    return (v = function(p) {
      return p ? y : c;
    })(h);
  }
  function P(h, c) {
    if (!c && h && h.__esModule)
      return h;
    if (h === null || typeof h != "object" && typeof h != "function")
      return { default: h };
    var y = v(c);
    if (y && y.has(h))
      return y.get(h);
    var p = {}, w = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var S in h)
      if (S !== "default" && Object.prototype.hasOwnProperty.call(h, S)) {
        var N = w ? Object.getOwnPropertyDescriptor(h, S) : null;
        N && (N.get || N.set) ? Object.defineProperty(p, S, N) : p[S] = h[S];
      }
    return p.default = h, y && y.set(h, p), p;
  }
  function C() {
    return C = Object.assign ? Object.assign.bind() : function(h) {
      for (var c = 1; c < arguments.length; c++) {
        var y = arguments[c];
        for (var p in y)
          Object.prototype.hasOwnProperty.call(y, p) && (h[p] = y[p]);
      }
      return h;
    }, C.apply(this, arguments);
  }
  function I(h, c, y) {
    return c = q(c), c in h ? Object.defineProperty(h, c, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : h[c] = y, h;
  }
  function q(h) {
    var c = _(h, "string");
    return typeof c == "symbol" ? c : String(c);
  }
  function _(h, c) {
    if (typeof h != "object" || h === null)
      return h;
    var y = h[Symbol.toPrimitive];
    if (y !== void 0) {
      var p = y.call(h, c || "default");
      if (typeof p != "object")
        return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (c === "string" ? String : Number)(h);
  }
  class z extends e.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(c, y) {
      let {
        position: p
      } = c, {
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
    constructor(c) {
      super(c), I(this, "onDragStart", (y, p) => {
        if ((0, g.default)("Draggable: onDragStart: %j", p), this.props.onStart(y, (0, l.createDraggableData)(this, p)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), I(this, "onDrag", (y, p) => {
        if (!this.state.dragging)
          return !1;
        (0, g.default)("Draggable: onDrag: %j", p);
        const w = (0, l.createDraggableData)(this, p), S = {
          x: w.x,
          y: w.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: T,
            y: X
          } = S;
          S.x += this.state.slackX, S.y += this.state.slackY;
          const [A, Q] = (0, l.getBoundPosition)(this, S.x, S.y);
          S.x = A, S.y = Q, S.slackX = this.state.slackX + (T - S.x), S.slackY = this.state.slackY + (X - S.y), w.x = S.x, w.y = S.y, w.deltaX = S.x - this.state.x, w.deltaY = S.y - this.state.y;
        }
        if (this.props.onDrag(y, w) === !1)
          return !1;
        this.setState(S);
      }), I(this, "onDragStop", (y, p) => {
        if (!this.state.dragging || this.props.onStop(y, (0, l.createDraggableData)(this, p)) === !1)
          return !1;
        (0, g.default)("Draggable: onDragStop: %j", p);
        const S = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: T,
            y: X
          } = this.props.position;
          S.x = T, S.y = X;
        }
        this.setState(S);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: c.position ? c.position.x : c.defaultPosition.x,
        y: c.position ? c.position.y : c.defaultPosition.y,
        prevPropsPosition: {
          ...c.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, c.position && !(c.onDrag || c.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
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
      var c, y;
      return (c = (y = this.props) === null || y === void 0 || (y = y.nodeRef) === null || y === void 0 ? void 0 : y.current) !== null && c !== void 0 ? c : r.default.findDOMNode(this);
    }
    render() {
      const {
        axis: c,
        bounds: y,
        children: p,
        defaultPosition: w,
        defaultClassName: S,
        defaultClassNameDragging: N,
        defaultClassNameDragged: T,
        position: X,
        positionOffset: A,
        scale: Q,
        ...s
      } = this.props;
      let D = {}, E = null;
      const G = !!!X || this.state.dragging, Y = X || w, H = {
        // Set left if horizontal drag is enabled
        x: (0, l.canDragX)(this) && G ? this.state.x : Y.x,
        // Set top if vertical drag is enabled
        y: (0, l.canDragY)(this) && G ? this.state.y : Y.y
      };
      this.state.isElementSVG ? E = (0, i.createSVGTransform)(H, A) : D = (0, i.createCSSTransform)(H, A);
      const M = (0, a.default)(p.props.className || "", S, {
        [N]: this.state.dragging,
        [T]: this.state.dragged
      });
      return /* @__PURE__ */ e.createElement(f.default, C({}, s, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ e.cloneElement(e.Children.only(p), {
        className: M,
        style: {
          ...p.props.style,
          ...D
        },
        transform: E
      }));
    }
  }
  t.default = z, I(z, "displayName", "Draggable"), I(z, "propTypes", {
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
    className: u.dontSetMe,
    style: u.dontSetMe,
    transform: u.dontSetMe
  }), I(z, "defaultProps", {
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
})(Rt);
const {
  default: It,
  DraggableCore: ir
} = Rt;
ke.exports = It;
ke.exports.default = It;
ke.exports.DraggableCore = ir;
var sr = ke.exports;
const lr = /* @__PURE__ */ dn(sr);
const cr = (t) => {
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
}, ur = re(function(e, n) {
  const { formLayout: r, context: a } = e, { formData: i } = a, l = J({}), u = cr(e), f = "palmyra-form-field-data", g = ft(() => (b) => Ot(b, l, b.label), [i.data]);
  return /* @__PURE__ */ o("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: r.fields.map((b, v) => /* @__PURE__ */ o("div", { className: u, children: /* @__PURE__ */ o("div", { className: f, children: g(b) }) }, b.attribute)) });
});
function dr(t) {
  return /* @__PURE__ */ o(
    lr,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ o(Jt, { ...t })
    }
  );
}
const Xt = ({ columns: t, isOpen: e, onClose: n, setFilter: r, defaultFilter: a = {} }) => {
  var { getFieldManager: i, getFilterData: l } = fn(a);
  const u = () => {
    r({});
  }, f = () => {
    var P = l();
    r && r(P);
  }, g = () => {
    n();
  }, b = (P) => {
    P.keyCode === 27 && g();
  }, v = cn(t);
  return /* @__PURE__ */ o("div", { className: "grid-filter-container", children: /* @__PURE__ */ o(
    jt,
    {
      open: e,
      onClose: g,
      PaperComponent: dr,
      onKeyDown: b,
      PaperProps: { sx: { minWidth: "500px" } },
      children: /* @__PURE__ */ o(Ye, { onClickAway: n, children: /* @__PURE__ */ k("div", { children: [
        /* @__PURE__ */ k("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ o("div", { className: "grid-header-text-container", children: /* @__PURE__ */ o("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ o("div", { className: "grid-header-icon-container", onClick: g, children: /* @__PURE__ */ o(ln, { className: "filter-cancel-icon" }) })
        ] }),
        /* @__PURE__ */ o("span", { className: "filter-header-border" }),
        /* @__PURE__ */ o("div", { className: "grid-filter-content", children: /* @__PURE__ */ o(xe.Provider, { value: i, children: /* @__PURE__ */ o(
          Ft,
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
              Renderer: ur
            }
          }
        ) }) }),
        /* @__PURE__ */ k("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ o(le, { className: "filter-reset-btn dialog-btn", disableRipple: !0, onClick: u, children: "Reset" }),
          /* @__PURE__ */ o(le, { className: "filter-button dialog-btn", disableRipple: !0, onClick: f, children: "Filter" })
        ] })
      ] }) })
    }
  ) });
}, fr = re(function(e, n) {
  const { columns: r, children: a, EmptyChild: i, onRowClick: l, quickSearch: u } = e, f = i || bt, g = e.customizer || wt, b = e.customButton, [v, P] = V(!1), [C, I] = V("standard"), [q, _] = V(!1), [z, h] = V(""), {
    setQueryFilter: c,
    setQuickSearch: y,
    setSortColumns: p,
    setEndPointOptions: w,
    gotoPage: S,
    setPageSize: N,
    getPageNo: T,
    refreshData: X,
    setQueryLimit: A,
    getQueryLimit: Q,
    data: s,
    totalRecords: D,
    queryLimit: E,
    pageSizeOptions: W,
    filter: G
  } = be(e), Y = n || J(null);
  he(Y, () => ({
    setFilter: (R) => {
      c(R);
    },
    refresh: () => {
      X();
    },
    resetFilter() {
      c({});
    },
    setEndPointOptions: (R) => {
      w(R);
    },
    addFilter: (R, oe) => {
      c((F) => (F[R] = oe, { ...F }));
    },
    setQueryLimit: (R) => {
      A(R);
    },
    getQueryLimit: () => Q(),
    setSortOptions(R) {
      p(R);
    },
    getCurrentData: () => s
  }), [Q]);
  const H = (R, oe) => {
    S(oe);
  }, M = vt(r, g), L = (R) => {
    I(R);
  }, d = () => {
    P(!v);
  }, x = () => C === "compact" ? { padding: "3px" } : C === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, U = () => C === "compact" ? { padding: "3px" } : C === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, ge = () => {
    var R;
    switch (C) {
      case "compact":
        R = /* @__PURE__ */ o(Re, { className: "density-icon" });
        break;
      case "comfortable":
        R = /* @__PURE__ */ o(Me, { className: "density-icon" });
        break;
      default:
        R = /* @__PURE__ */ o(Fe, { className: "grid-button-icon" });
        break;
    }
    return R;
  }, m = (R) => {
    const oe = R.target.value;
    h(oe), oe ? y(oe) : c({});
  }, O = (R) => {
    l && l(R);
  }, Z = (R) => {
    const oe = parseInt(R.target.value, 10);
    N(oe);
  }, Ce = () => {
    console.info("Export Clicked");
  }, _e = 200, Ae = !!e.pageSize;
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ k("div", { children: [
    a,
    /* @__PURE__ */ k("div", { className: "grid-header", children: [
      /* @__PURE__ */ o("div", { className: "grid-header-filter", children: !!u && /* @__PURE__ */ o(
        Ne,
        {
          sx: { width: _e },
          type: "text",
          value: z,
          onChange: m,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ o(Ge, { position: "end", children: /* @__PURE__ */ o(qe, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ o(Ye, { onClickAway: () => {
        P(!1);
      }, children: /* @__PURE__ */ k("div", { className: "grid-header-button grid-density-btn", onClick: d, children: [
        /* @__PURE__ */ o(me, { title: "Density", placement: "top", children: /* @__PURE__ */ o(le, { className: "grid-btn", disableRipple: !0, children: ge() }) }),
        v && /* @__PURE__ */ o("div", { className: "density-dropdown-content", children: /* @__PURE__ */ k("ul", { children: [
          /* @__PURE__ */ k("li", { onClick: () => L("standard"), children: [
            /* @__PURE__ */ o(Fe, { className: "density-icon" }),
            /* @__PURE__ */ o("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ k("li", { onClick: () => L("compact"), children: [
            /* @__PURE__ */ o(Re, { className: "density-icon" }),
            /* @__PURE__ */ o("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ k("li", { onClick: () => L("comfortable"), children: [
            /* @__PURE__ */ o(Me, { className: "density-icon" }),
            /* @__PURE__ */ o("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      r.some((R) => R.searchable) && /* @__PURE__ */ k("div", { className: "grid-header-button grid-filter-btn", children: [
        /* @__PURE__ */ o(me, { title: "Filter", placement: "top", children: /* @__PURE__ */ o(le, { className: "grid-btn", disableRipple: !0, onClick: () => _(!0), children: /* @__PURE__ */ o(St, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ o(
          Xt,
          {
            columns: r,
            setFilter: c,
            defaultFilter: G,
            isOpen: q,
            onClose: () => _(!1)
          }
        )
      ] }),
      /* @__PURE__ */ o("div", { className: "grid-header-button grid-export-btn", onClick: Ce, children: /* @__PURE__ */ o(me, { title: "Export", placement: "top", children: /* @__PURE__ */ o(le, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ o(Dt, { className: "grid-button-icon" }) }) }) }),
      e.onNewClick ? /* @__PURE__ */ o("div", { className: "grid-header-button", onClick: () => {
        e.onNewClick();
      }, children: /* @__PURE__ */ o(me, { title: "New", placement: "top", children: /* @__PURE__ */ o(le, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ o(Pt, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ o(ve, {}),
      b && b.map((R, oe) => /* @__PURE__ */ o("div", { className: "grid-custom-button grid-export-btn", children: R }, oe))
    ] }),
    /* @__PURE__ */ o("div", { className: "grid-table", children: /* @__PURE__ */ o(
      Ct,
      {
        columnDefs: M,
        EmptyChild: f,
        customizer: g,
        rowData: s,
        onRowClick: O,
        onRowStyle: x,
        onHeaderStyle: U,
        onSortColumn: p
      }
    ) }),
    /* @__PURE__ */ o("div", { className: "grid-footer", children: /* @__PURE__ */ o("div", { className: "grid-filter", children: Ae && /* @__PURE__ */ o(
      Ue,
      {
        component: "div",
        count: D || 0,
        page: T(),
        onPageChange: H,
        rowsPerPage: E.limit,
        rowsPerPageOptions: W || [],
        onRowsPerPageChange: Z
      }
    ) }) })
  ] }) });
}), Ro = re(function(e, n) {
  const { children: r, EmptyChild: a, onRowClick: i, quickSearch: l } = e, u = e.columns, f = a || bt, g = e.customizer || wt, b = e.customButton, [v, P] = V(!1), [C, I] = V("standard"), [q, _] = V(!1), [z, h] = V(""), {
    setQueryFilter: c,
    setQuickSearch: y,
    setSortColumns: p,
    setEndPointOptions: w,
    gotoPage: S,
    setPageSize: N,
    getPageNo: T,
    refreshData: X,
    setQueryLimit: A,
    getQueryLimit: Q,
    data: s,
    totalRecords: D,
    queryLimit: E,
    pageSizeOptions: W,
    filter: G
  } = be(e), [Y, H] = V(u(s)), M = n || J(null);
  he(M, () => ({
    setFilter: (F) => {
      c(F);
    },
    refresh: () => {
      X();
    },
    resetFilter() {
      c({});
    },
    setEndPointOptions: (F) => {
      w(F);
    },
    addFilter: (F, ie) => {
      c((et) => (et[F] = ie, { ...et }));
    },
    setQueryLimit: (F) => {
      A(F);
    },
    getQueryLimit: () => Q(),
    setSortOptions(F) {
      p(F);
    },
    getCurrentData: () => s
  }), [Q, Y]), ae(() => {
    H(u(s));
  }, [s]);
  const L = (F, ie) => {
    S(ie);
  }, d = vt(Y, g), x = (F) => {
    I(F);
  }, U = () => {
    P(!v);
  }, ge = () => C === "compact" ? { padding: "3px" } : C === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, m = () => C === "compact" ? { padding: "3px" } : C === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, O = () => {
    var F;
    switch (C) {
      case "compact":
        F = /* @__PURE__ */ o(Re, { className: "density-icon" });
        break;
      case "comfortable":
        F = /* @__PURE__ */ o(Me, { className: "density-icon" });
        break;
      default:
        F = /* @__PURE__ */ o(Fe, { className: "grid-button-icon" });
        break;
    }
    return F;
  }, Z = (F) => {
    const ie = F.target.value;
    h(ie), ie ? y(ie) : c({});
  }, Ce = (F) => {
    i && i(F);
  }, _e = (F) => {
    const ie = parseInt(F.target.value, 10);
    N(ie);
  }, Ae = () => {
    console.info("Export Clicked");
  }, Ze = 200, R = !!e.pageSize;
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ k("div", { children: [
    r,
    /* @__PURE__ */ k("div", { className: "grid-header", children: [
      /* @__PURE__ */ o("div", { className: "grid-header-filter", children: !!l && /* @__PURE__ */ o(
        Ne,
        {
          sx: { width: Ze },
          type: "text",
          value: z,
          onChange: Z,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ o(Ge, { position: "end", children: /* @__PURE__ */ o(qe, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ o(Ye, { onClickAway: () => {
        P(!1);
      }, children: /* @__PURE__ */ k("div", { className: "grid-header-button grid-density-btn", onClick: U, children: [
        /* @__PURE__ */ o(me, { title: "Density", placement: "top", children: /* @__PURE__ */ o(le, { className: "grid-btn", disableRipple: !0, children: O() }) }),
        v && /* @__PURE__ */ o("div", { className: "density-dropdown-content", children: /* @__PURE__ */ k("ul", { children: [
          /* @__PURE__ */ k("li", { onClick: () => x("standard"), children: [
            /* @__PURE__ */ o(Fe, { className: "density-icon" }),
            /* @__PURE__ */ o("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ k("li", { onClick: () => x("compact"), children: [
            /* @__PURE__ */ o(Re, { className: "density-icon" }),
            /* @__PURE__ */ o("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ k("li", { onClick: () => x("comfortable"), children: [
            /* @__PURE__ */ o(Me, { className: "density-icon" }),
            /* @__PURE__ */ o("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      Y.some((F) => F.searchable) && /* @__PURE__ */ k("div", { className: "grid-header-button grid-filter-btn", children: [
        /* @__PURE__ */ o(me, { title: "Filter", placement: "top", children: /* @__PURE__ */ o(le, { className: "grid-btn", disableRipple: !0, onClick: () => _(!0), children: /* @__PURE__ */ o(St, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ o(
          Xt,
          {
            columns: Y,
            setFilter: c,
            defaultFilter: G,
            isOpen: q,
            onClose: () => _(!1)
          }
        )
      ] }),
      /* @__PURE__ */ o("div", { className: "grid-header-button grid-export-btn", onClick: Ae, children: /* @__PURE__ */ o(me, { title: "Export", placement: "top", children: /* @__PURE__ */ o(le, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ o(Dt, { className: "grid-button-icon" }) }) }) }),
      e.onNewClick ? /* @__PURE__ */ o("div", { className: "grid-header-button", onClick: () => {
        e.onNewClick();
      }, children: /* @__PURE__ */ o(me, { title: "New", placement: "top", children: /* @__PURE__ */ o(le, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ o(Pt, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ o(ve, {}),
      b && b.map((F, ie) => /* @__PURE__ */ o("div", { className: "grid-custom-button grid-export-btn", children: F }, ie))
    ] }),
    /* @__PURE__ */ o("div", { className: "grid-table", children: /* @__PURE__ */ o(
      Ct,
      {
        columnDefs: d,
        EmptyChild: f,
        customizer: g,
        rowData: s,
        onRowClick: Ce,
        onRowStyle: ge,
        onHeaderStyle: m,
        onSortColumn: p
      }
    ) }),
    /* @__PURE__ */ o("div", { className: "grid-footer", children: /* @__PURE__ */ o("div", { className: "grid-filter", children: R && /* @__PURE__ */ o(
      Ue,
      {
        component: "div",
        count: D || 0,
        page: T(),
        onPageChange: L,
        rowsPerPage: E.limit,
        rowsPerPageOptions: W || [],
        onRowsPerPageChange: _e
      }
    ) }) })
  ] }) });
}), Mo = re(function(e, n) {
  const { columns: r, endPoint: a, storeFactory: i, layoutParams: l, pagination: u } = e, f = e.quickSearch || "", g = e.customButton, b = (P, C) => {
  };
  ae(() => {
    var P = ot.subscribe(e.topic, b);
    return () => {
      ot.unsubscribe(P);
    };
  }, [e.topic]);
  const v = {
    fields: r,
    pagination: u,
    quickSearch: f,
    storeOptions: {
      endPoint: a
    },
    actionOptions: e.actions
  };
  return /* @__PURE__ */ o(ve, { children: /* @__PURE__ */ o(ze.Provider, { value: i, children: /* @__PURE__ */ o(
    Bt,
    {
      layout: v,
      context: l,
      onDataChange: e.onDataChange,
      defaultParams: e.defaultParams,
      customButton: g,
      customizer: e.customizer,
      ref: n
    }
  ) }) });
}), mr = re(function(e, n) {
  const r = e.layout, [a, i] = V(r.fields), l = r.pagination ? r.pagination : [15], u = De(ze), f = De(ut);
  var g = r.storeOptions || {}, b = {};
  rn(b, g, f);
  const v = u.getGridStore(b, r.storeOptions.endPoint);
  ae(() => {
    g.hasLayout && v.queryLayout({}).then((I) => {
      i(I.columns);
    });
  }, []);
  const { onClick: P, onNewClick: C } = mn(r.actionOptions, f);
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
    fr,
    {
      columns: a,
      store: v,
      pageSize: l,
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
}), Bt = mr, hr = (t) => {
  const { layout: e, context: n } = t;
  var r = e.Container || yt;
  return /* @__PURE__ */ o(Nt, { fallback: /* @__PURE__ */ o("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ o(r, { ...e, children: ((i) => /* @__PURE__ */ o(
    Bt,
    {
      context: n,
      layout: i
    }
  ))(e.tableLayout) }) });
}, gr = (t) => {
  const { layout: e } = t;
  switch (e.type) {
    case "form":
      return /* @__PURE__ */ o(Ft, { ...t });
    case "view":
      return /* @__PURE__ */ o(gn, { ...t });
    case "grid":
      return /* @__PURE__ */ o(hr, { ...t });
    case "chart":
      return /* @__PURE__ */ o(tn, { ...t });
    default:
      return /* @__PURE__ */ o(hn, { ...t });
  }
};
function pr(t, e) {
  var n = t || 1, r = e;
  return {
    w: n,
    h: r
  };
}
const zt = (t) => {
  const { layout: e, context: n } = t, r = e.sections;
  function a(i, l, u) {
    const { w: f, h: g } = pr(i.width, i.height);
    return /* @__PURE__ */ o(Zt, { sx: { width: f, height: g }, children: /* @__PURE__ */ o(
      gr,
      {
        layout: i,
        context: l
      }
    ) }, (i.name || "tab") + u);
  }
  return /* @__PURE__ */ o("div", { style: { display: "flex", flexWrap: "wrap" }, children: r.map((i, l) => a(i, n, l)) });
}, lt = re(function(e, n) {
  const { layout: r } = e;
  he(n, () => ({
    resetFilter() {
    }
  }), []);
  const a = {}, i = r.tabs;
  return /* @__PURE__ */ o("div", { children: i.map((l, u) => /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
    zt,
    {
      layout: l,
      context: a
    }
  ) }, l.name + u)) });
}), yr = (t) => {
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
}, ct = re(function(e, n) {
  var b;
  const r = e.data || {}, { layout: a } = e;
  var { getFieldManager: i, getFormData: l, isFormValid: u } = pn(r, (b = e.callbacks) == null ? void 0 : b.onFormValidChange, yr(e.mode));
  he(n, () => ({
    getData() {
      return l();
    },
    isValid() {
      return u();
    }
  }), []);
  const f = { formData: r }, g = a.tabs;
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(xe.Provider, { value: i, children: g.map((v, P) => /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
    zt,
    {
      layout: v,
      context: f
    }
  ) }, v.name + P)) }) });
}), vr = (t) => {
  switch (t) {
    case "grid":
      return lt;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), ct;
    case "formEdit":
    case "formNew":
    case "formView":
      return ct;
    default:
      return lt;
  }
}, ko = re(function(e, n) {
  const [r, a] = V(e.layout), i = e.mode ? e.mode : r.type ? r.type : "grid", l = e.layoutParams || {}, u = vr(i), f = J(0);
  return ae(() => {
    a(e.layout), f.current < 999999 ? f.current++ : f.current = 0;
  }, [e.layout]), /* @__PURE__ */ o(Nt, { fallback: /* @__PURE__ */ o("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ o(ze.Provider, { value: e.storeFactory, children: /* @__PURE__ */ o(ut.Provider, { value: l, children: /* @__PURE__ */ o(u, { ...e, ref: (g) => {
    n && (n.current = g);
  } }, f.current) }) }) });
}), To = re(function(e, n) {
  const { children: r, Child: a, childProps: i, pageSize: l } = e, u = n || J(null), {
    setQueryFilter: f,
    refreshData: g,
    setSortColumns: b,
    setEndPointOptions: v,
    setQuickSearch: P,
    gotoPage: C,
    setPageSize: I,
    getPageNo: q,
    setQueryLimit: _,
    getQueryLimit: z,
    data: h,
    totalRecords: c,
    pageSizeOptions: y,
    queryLimit: p
  } = be(e), w = e.listKeyProvider || ((s, D) => D);
  he(u, () => ({
    setFilter: (s) => {
      f(s);
    },
    refresh: () => {
      g();
    },
    resetFilter() {
      f({});
    },
    setEndPointOptions: (s) => {
      v(s);
    },
    addFilter: (s, D) => {
      f((E) => (E[s] = D, { ...E }));
    },
    setQueryLimit: (s) => {
      _(s);
    },
    getQueryLimit: () => z(),
    getCurrentData: () => h,
    setSortOptions(s) {
      b(s);
    }
  }), [f]);
  const S = (s, D) => {
    C(D);
  }, N = (s) => {
    const D = s.target.value;
    P(D);
  }, T = (s) => {
    const D = parseInt(s.target.value, 10);
    I(D);
  }, X = 200, A = !!l, Q = !!e.quickSearch;
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o("div", { className: "card-page-container", children: /* @__PURE__ */ k("div", { children: [
    /* @__PURE__ */ k("div", { className: "card-header", children: [
      r,
      /* @__PURE__ */ o("div", { className: "card-filter", children: Q && /* @__PURE__ */ o(
        Ne,
        {
          sx: { width: X },
          type: "text",
          onChange: N,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ o(Ge, { position: "end", children: /* @__PURE__ */ o(qe, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ o("div", { className: "card-pagination", children: A && /* @__PURE__ */ o(
        Ue,
        {
          component: "div",
          count: c || 0,
          page: q(),
          onPageChange: S,
          rowsPerPage: p.limit,
          rowsPerPageOptions: y || [],
          onRowsPerPageChange: T
        }
      ) })
    ] }),
    /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
      en,
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
  Ro as D,
  ko as F,
  Bt as G,
  bn as M,
  Mo as P,
  To as S,
  zt as T,
  fr as a,
  Oo as b,
  Cn as c,
  Dn as d,
  Ft as e,
  ur as f,
  Ot as g,
  Xt as h,
  hr as i,
  gr as j,
  lt as k,
  ct as l,
  be as u
};
