import "../assets/ServerCardLayout.css";
import Qt from "../palmyra/mui/form/MuiDatePicker.js";
import Wt from "../palmyra/mui/form/MuiDateTimePicker.js";
import Yt from "../palmyra/mui/form/MuiRadioGroup.js";
import nt from "../palmyra/mui/form/MuiSelect.js";
import Gt from "../palmyra/mui/form/MuiTextArea.js";
import Ut from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import $t from "../palmyra/mui/form/MuiCheckBox.js";
import Ht from "../palmyra/mui/form/MuiSwitch.js";
import Kt from "../palmyra/mui/form/MuiPassword.js";
import jt from "../palmyra/mui/form/MuiNumberField.js";
import ze from "../palmyra/mui/form/FieldDecorator.js";
import { FieldManagerContext as Ne, StoreFactoryContext as qe, LayoutParamsContext as dt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as r, jsxs as M, Fragment as ve } from "react/jsx-runtime";
import ft, { useState as V, useRef as J, useEffect as ae, forwardRef as re, useContext as De, useImperativeHandle as he, useMemo as mt } from "react";
import { p as ht, a as Qe } from "./index.js";
import { FormControlLabel as rt, Checkbox as ot, FormControl as We, FormHelperText as Ye, Autocomplete as gt, TextField as xe, CircularProgress as pt, Dialog as Jt, ClickAwayListener as Ge, Button as le, Paper as Zt, InputAdornment as Ue, Tooltip as me, TablePagination as $e, Box as en } from "@mui/material";
import tn from "../palmyra/layout/card/CardLayout.js";
import nn from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as He, getFieldLabel as Ke } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as Pe } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as we } from "../palmyra/form/FormUtil.js";
import { delay as yt, delayGenerator as rn, mergeDeep as on } from "../palmyra/utils/index.js";
import an from "../palmyra/mui/form/MuiDateRangePicker.js";
import sn from "../palmyra/mui/form/MuiIntegerField.js";
import vt from "../palmyra/layout/container/SectionContainer.js";
import ln from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as bt } from "../palmyra/grid/base/ColumnConverter.js";
import Ct from "../palmyra/grid/base/EmptyChildTable.js";
import St from "../palmyra/grid/base/TableX.js";
import { Close as cn, Menu as Fe, DensitySmall as Re, DensityLarge as Me, FilterAlt as Dt, FileDownloadOutlined as Pt, Add as wt } from "@mui/icons-material";
import { NoopCustomizer as Nt } from "../palmyra/grid/Types.js";
import { convertToField as un } from "../palmyra/grid/base/GridFieldConverter.js";
import { a as dn, g as fn } from "./_commonjsHelpers.js";
import xt from "react-dom";
import { createFilterData as mn } from "../palmyra/form/PalmyraFilterManager.js";
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
import { getActionPublishers as hn } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as Ot } from "../palmyra/layout/ErrorBoundary.js";
import gn from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import pn from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as yn } from "./PalmyraFieldManager.js";
import { useKeyValue as vn } from "../palmyra/utils/pubsub/PubSubHelper.js";
const be = (t) => {
  var H, Y;
  const { store: e, quickSearch: n } = t, o = t.fetchAll != !1, [a, i] = V(t.endPointOptions), [s, u] = V(null), d = ((H = t.defaultParams) == null ? void 0 : H.filter) || {}, p = ((Y = t.defaultParams) == null ? void 0 : Y.sort) || {}, [b, v] = t.filterTopic ? vn(t.filterTopic, d) : V(d), [w, D] = V({}), O = J(t.initialFetch == !1), q = t.pageSize ? t.pageSize : 15;
  var B = q instanceof Array ? q : [q], I = q instanceof Array ? q[0] : q;
  const [m, g] = V({ limit: I, offset: 0, total: !0 }), [h, y] = V(null), P = () => Math.round(m.offset / m.limit), S = () => m, N = (T) => {
    g((A) => ({ limit: A.limit, total: A.total, offset: T * A.limit }));
  }, E = (T) => {
    const A = T > 10 || T == -1 ? T : 15;
    g((c) => {
      const x = Math.floor(c.offset / A) * A;
      return { limit: A, total: c.total, offset: x };
    });
  }, X = () => b ? Object.keys(b).length == 0 : !1, _ = (T) => {
    y((A) => (setTimeout(() => {
      t.onDataChange && t.onDataChange(h, A);
    }, 300), T));
  };
  ae(() => {
    if (O.current) {
      O.current = !1;
      return;
    }
    (o || !X()) && Q();
  }, [m, w, a]);
  const Q = () => {
    const A = {
      sortOrder: w && Object.keys(w).length > 0 ? w : p,
      total: !0,
      endPointVars: a,
      ...m,
      filter: { ...b, ...d }
    };
    if (e)
      try {
        e.query(A).then((c) => {
          _(c.result), u(c.total);
        }).catch((c) => {
          var x = c.response ? c.response : c;
          console.error("error while fetching", x), C();
        });
      } catch (c) {
        console.error(c), l();
      }
    else
      console.error("Store is not provided for the Grid"), l();
  }, l = () => {
    _([]), u(0);
  }, C = () => {
    _(void 0), u(null);
  };
  return {
    setQueryFilter: (T) => {
      typeof T == "function" || T && Object.keys(T).length > 0 ? v(T) : v({}), N(0);
    },
    setQuickSearch: (T) => {
      const A = n;
      v(T ? (c) => (c[A] = T, { ...c }) : (c) => (delete c[A], { ...c })), N(0);
    },
    setSortColumns: (T) => {
      D(T);
    },
    setEndPointOptions: i,
    refreshData: Q,
    gotoPage: N,
    setPageSize: E,
    getPageNo: P,
    getQueryLimit: S,
    setQueryLimit: g,
    filter: b,
    queryLimit: m,
    data: h,
    totalRecords: s,
    pageSizeOptions: B
  };
};
function it(t) {
  return t ? Array.isArray(t) ? t : typeof t == "string" ? t.split(",") : (console.log(t), [t]) : [];
}
const Fo = re(function(e, n) {
  const o = De(Ne), a = n || J(null), i = o(e, "checkbox", a), { mutateOptions: s, setMutateOptions: u } = i, [d, p] = V(!1), b = it(i.data), v = i.error, w = i.eventListeners, O = { store: i.store, pageSize: -1 }, { data: q } = be(O), B = q, I = J(null), m = e.lookupOptions || {}, g = m.idAttribute || "id", h = m.displayAttribute || "name", y = e.showSelectedOnly && e.readonly, P = Pe(g) ? (l) => we(g, l) : (l) => l[g], S = Pe(h) ? (l) => we(h, l) : (l) => l[h];
  he(a, () => ({
    focus() {
      I.current.focus();
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
    setValue(l, C = !1) {
      i.setData(l, C);
    },
    setVisible(l) {
      u((C) => ({ ...C, visible: l }));
    },
    setRequired(l) {
      u((C) => ({ ...C, required: l }));
    },
    setReadOnly(l) {
      u((C) => ({ ...C, readonly: l }));
    },
    setAttribute(l) {
      u((C) => ({ ...C, ...l }));
    },
    setOptions(l) {
    },
    getOptions() {
    }
  }), [i]);
  var N = He(e, i.data, e.label);
  e.readonly && (N.inputprops = { readOnly: !0 });
  function E(l, C) {
    const L = it(i.data);
    var W = L.indexOf(l);
    C ? W < 0 && L.push(l) : W >= 0 && L.splice(W, 1), w.onValueChange(L.toString());
  }
  var X = {
    onBlur: w.onBlur,
    onFocus: w.onFocus,
    onChange: (l) => {
      E(l.target.value, l.target.checked);
    }
  };
  const _ = (l) => {
    const C = l.toString();
    return b.includes(C);
  }, Q = (l) => {
    const C = l.target.checked;
    p(C);
    var L = [];
    C && B.map((W) => {
      L.push(P(W));
    }), w.onValueChange(L.toString());
  };
  return /* @__PURE__ */ r("div", { className: e.className, children: s.visible && /* @__PURE__ */ M(
    ze,
    {
      label: Ke(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: [
        /* @__PURE__ */ r("div", { children: e.hideSelectAll ? /* @__PURE__ */ r(ve, {}) : /* @__PURE__ */ r(
          rt,
          {
            control: /* @__PURE__ */ r(ot, { onChange: Q }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ M(
          We,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: v.status,
            ...N,
            children: [
              B ? B.filter((l) => y ? _(P(l)) : !0).map((l) => /* @__PURE__ */ r(
                rt,
                {
                  value: P(l),
                  control: /* @__PURE__ */ r(
                    ot,
                    {
                      ...X,
                      checked: _(P(l)),
                      disabled: e.readonly
                    }
                  ),
                  label: S(l)
                },
                P(l)
              )) : /* @__PURE__ */ r("div", { children: "No options provided" }),
              /* @__PURE__ */ r(Ye, { className: "form-error-text", children: v.message })
            ]
          }
        )
      ]
    }
  ) });
}), bn = rn(100), Cn = re(function(e, n) {
  const o = De(Ne), a = n || J(null), i = J(null), s = J(0), [u, d] = V([]), [p, b] = V(""), [v, w] = V(!1), D = o(e, "serverlookup", a), O = e.store || D.store, q = e.lookupOptions || {}, B = q.idAttribute || "id", I = q.displayAttribute || "name", m = I, g = {
    store: O,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: m,
    initialFetch: !1
  }, h = be(g), y = D.eventListeners, P = D.error, { mutateOptions: S, setMutateOptions: N } = D, E = D.data, X = v && u.length < (E ? 2 : 1), { setQueryFilter: _, setEndPointOptions: Q, setQuickSearch: l, totalRecords: C, refreshData: L } = h, W = h.data, U = Pe(B) ? (f) => we(B, f) : (f) => f == null ? void 0 : f[B], H = Pe(I) ? (f) => we(I, f) : (f) => f == null ? void 0 : f[I];
  ae(() => {
    var f = E != "" ? E : void 0;
    f && d([f]);
  }, [D.data]), ae(() => {
    const f = W ? [...W] : [], F = E != "" ? E : void 0, Z = U(F), Ce = H(F);
    f && Z && Ce && !x(f, Z) && f.unshift(F), d(f), s.current < C && (s.current = C);
  }, [W, C]), ae(() => {
    yt(Y);
  }, [p]), ae(() => {
    bn(Y);
  }, [v]);
  function Y() {
    v && (p.length > 0 && p != H(E) ? l("*" + p + "*") : W ? l(null) : L());
  }
  var T = {
    onBlur: y.onBlur,
    onFocus: y.onFocus,
    onChange: (f, F) => {
      A(F);
    },
    onInputChange: (f, F) => (b(F), !0)
  };
  const A = (f) => {
    y.onValueChange(f);
  }, c = (f) => typeof f == "object" ? H(f) + "" : (console.log(f), "");
  function x(f, F) {
    return f.find((Z) => {
      if (U(Z) == F)
        return Z;
    });
  }
  he(a, () => ({
    focus() {
      i.current.focus();
    },
    isValid() {
      return !P.status;
    },
    clear() {
      e.multiple ? D.setData([], !0) : D.setData(void 0, !0);
    },
    getValue() {
      return D.getData();
    },
    setValue(f, F = !1) {
      D.setData(f, F);
    },
    setVisible(f) {
      N((F) => ({ ...F, visible: f }));
    },
    setRequired(f) {
      N((F) => ({ ...F, required: f }));
    },
    setReadOnly(f) {
      N((F) => ({ ...F, readonly: f }));
    },
    setAttribute(f) {
      N((F) => ({ ...F, ...f }));
    },
    setFilter(f) {
      _(f);
    },
    resetFilter() {
      _({});
    },
    setEndPointOptions(f) {
      Q(f);
    },
    getCurrentData: () => E,
    refresh: () => {
      L();
    },
    addFilter(f, F) {
      _((Z) => (Z[f] = F, { ...Z }));
    },
    setDefaultFilter(f) {
    },
    setSortOptions(f) {
    }
  }), [D, _]);
  var G = He(e, E, e.label);
  S.readonly && (G.inputProps = { readOnly: !0 });
  const ge = (f, F) => f instanceof Array ? f.some((Z) => U(Z) == U(F)) : U(f) == U(F);
  return /* @__PURE__ */ r(
    ze,
    {
      label: Ke(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ M(We, { fullWidth: !0, error: P.status, children: [
        /* @__PURE__ */ r(
          gt,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: e.multiple,
            readOnly: e.readonly,
            renderOption: e.renderOption,
            isOptionEqualToValue: ge,
            filterOptions: (f) => f,
            renderInput: (f) => /* @__PURE__ */ r(
              xe,
              {
                ...f,
                inputRef: (F) => {
                  i.current = F;
                },
                variant: e.variant || "standard",
                label: e.label,
                autoFocus: e.autoFocus,
                required: e.required,
                InputProps: {
                  ...f.InputProps,
                  endAdornment: /* @__PURE__ */ M(ve, { children: [
                    X ? /* @__PURE__ */ r(pt, { color: "inherit", size: 18 }) : null,
                    f.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: c,
            ...G,
            options: u,
            open: v,
            onClose: () => {
              w(!1);
            },
            onOpen: (f) => {
              w(!0);
            },
            ...T
          }
        ),
        /* @__PURE__ */ r(Ye, { className: "form-error-text", children: P.message })
      ] })
    }
  );
}), Sn = re(function(e, n) {
  const o = De(Ne), a = n || J(null), i = J(null), s = J(0), [u, d] = V([]), [p, b] = V(""), [v, w] = V(!1), D = o(e, "autoComplete", a), O = e.store || D.store, B = (e.lookupOptions || {}).attribute || "name", I = B, m = {
    store: O,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: I,
    initialFetch: !1
  }, g = be(m), h = D.eventListeners, y = D.error, { mutateOptions: P, setMutateOptions: S } = D, N = D.data, E = v && u.length < (N ? 2 : 1), { setQueryFilter: X, setEndPointOptions: _, setQuickSearch: Q, totalRecords: l, refreshData: C } = g, L = g.data, W = Pe(B) ? (c) => we(B, c) : (c) => c == null ? void 0 : c[B];
  ae(() => {
    var c = N != "" ? N : void 0;
    c && d([c]);
  }, [D.data]), ae(() => {
    const x = (L ? [...L] : []).map((ge) => W(ge)), G = N != "" ? N : void 0;
    x && G && !T(x, G) && x.unshift(G), d(x), s.current < l && (s.current = l);
  }, [L, l]), ae(() => {
    yt(U);
  }, [p, v]);
  function U() {
    v && (p.length > 0 && p != N ? Q("*" + p + "*") : L ? Q(null) : C());
  }
  var H = {
    onBlur: (c) => {
      Y(p), h.onBlur(p);
    },
    onFocus: h.onFocus,
    onChange: (c, x) => {
      Y(x);
    },
    onInputChange: (c, x) => (b(x), !0)
  };
  const Y = (c) => {
    h.onValueChange(c);
  };
  function T(c, x) {
    return c.find((G) => {
      if (G == x)
        return G;
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
      D.setData(void 0, !0);
    },
    getValue() {
      return D.getData();
    },
    setValue(c, x = !1) {
      D.setData(c, x);
    },
    setVisible(c) {
      S((x) => ({ ...x, visible: c }));
    },
    setRequired(c) {
      S((x) => ({ ...x, required: c }));
    },
    setReadOnly(c) {
      S((x) => ({ ...x, readonly: c }));
    },
    setAttribute(c) {
      S((x) => ({ ...x, ...c }));
    },
    setFilter(c) {
      X(c);
    },
    resetFilter() {
      X({});
    },
    setEndPointOptions(c) {
      _(c);
    },
    getCurrentData: () => N,
    refresh: () => {
      C();
    },
    addFilter(c, x) {
      X((G) => (G[c] = x, { ...G }));
    },
    setDefaultFilter(c) {
    },
    setSortOptions(c) {
    }
  }), [D, X]);
  var A = He(e, N, e.label);
  return P.readonly && (A.inputProps = { readOnly: !0 }), /* @__PURE__ */ r(
    ze,
    {
      label: Ke(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ M(We, { fullWidth: !0, error: y.status, children: [
        /* @__PURE__ */ r(
          gt,
          {
            freeSolo: !0,
            autoSelect: !0,
            readOnly: e.readonly,
            renderOption: e.renderOption,
            filterOptions: (c) => c,
            renderInput: (c) => /* @__PURE__ */ r(
              xe,
              {
                ...c,
                inputRef: (x) => {
                  i.current = x;
                },
                variant: e.variant || "standard",
                label: e.label,
                autoFocus: e.autoFocus,
                required: e.required,
                ...A,
                InputProps: {
                  ...c.InputProps,
                  endAdornment: /* @__PURE__ */ M(ve, { children: [
                    E ? /* @__PURE__ */ r(pt, { color: "inherit", size: 18 }) : null,
                    c.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...A,
            options: u,
            open: v,
            onClose: () => {
              w(!1);
            },
            onOpen: (c) => {
              w(!0);
            },
            ...H
          }
        ),
        /* @__PURE__ */ r(Ye, { className: "form-error-text", children: y.message })
      ] })
    }
  );
}), Dn = (t) => {
  const { fieldDef: e } = t;
  return /* @__PURE__ */ M("div", { children: [
    "invalid type " + e.type,
    " "
  ] });
}, K = (t, e) => {
  const n = t.fieldDef;
  return /* @__PURE__ */ r(
    e,
    {
      ...n,
      label: t.title
    },
    n.title + n.attribute
  );
}, Ft = (t, e, n) => {
  const { type: o } = t, a = { fieldDef: t, title: n };
  switch (o) {
    case "string":
      return K(a, Ut);
    case "radio":
      return K(a, Yt);
    case "select":
      return K(a, nt);
    case "date":
      return K(a, Qt);
    case "datetime":
      return K(a, Wt);
    case "checkbox":
      return K(a, $t);
    case "serverlookup":
      return K(a, Cn);
    case "textarea":
      return K(a, Gt);
    case "switch":
      return K(a, Ht);
    case "password":
      return K(a, Kt);
    case "float":
    case "number":
    case "numbersOnly":
      return K(a, jt);
    case "integer":
      return K(a, sn);
    case "multiSelect":
      return K(a, nt);
    case "dateRange":
      return K(a, an);
    case "autoComplete":
      return K(a, Sn);
    default:
      return Dn(a);
  }
}, Pn = re(function(e, n) {
  var b;
  const { formLayout: o, context: a } = e, { formData: i } = a, s = o.Container;
  J({});
  const u = mt(() => (v) => Ft(v), [i.data]);
  var d = ((b = o.options) == null ? void 0 : b.columns) || 1, p = { columns: d };
  return s ? /* @__PURE__ */ r("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: o.fields.map((v, w) => /* @__PURE__ */ r(
    s,
    {
      index: w,
      field: v,
      label: v.title,
      options: p,
      children: u(v)
    },
    v.attribute + v.name + v.type
  )) }) : /* @__PURE__ */ r("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: o.fields.map((v, w) => u(v)) });
}), Rt = (t) => {
  const { layout: e, context: n } = t;
  var o = e.Renderer || Pn, a = e.Container || vt;
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
      children: /* @__PURE__ */ r(ln, { columns: e.columns, children: i(e.formLayout) })
    }
  );
};
var ke = { exports: {} }, Mt = {};
function kt(t) {
  var e, n, o = "";
  if (typeof t == "string" || typeof t == "number")
    o += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = kt(t[e])) && (o && (o += " "), o += n);
    else
      for (e in t)
        t[e] && (o && (o += " "), o += e);
  return o;
}
function st() {
  for (var t, e, n = 0, o = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = kt(t)) && (o && (o += " "), o += e);
  return o;
}
const wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: st,
  default: st
}, Symbol.toStringTag, { value: "Module" })), Nn = /* @__PURE__ */ dn(wn);
var z = {}, ce = {};
Object.defineProperty(ce, "__esModule", {
  value: !0
});
ce.dontSetMe = Mn;
ce.findInArray = xn;
ce.int = Rn;
ce.isFunction = On;
ce.isNum = Fn;
function xn(t, e) {
  for (let n = 0, o = t.length; n < o; n++)
    if (e.apply(e, [t[n], n, t]))
      return t[n];
}
function On(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Function]";
}
function Fn(t) {
  return typeof t == "number" && !isNaN(t);
}
function Rn(t) {
  return parseInt(t, 10);
}
function Mn(t, e, n) {
  if (t[e])
    return new Error("Invalid prop ".concat(e, " passed to ").concat(n, " - do not set this, set it on the child."));
}
var pe = {};
Object.defineProperty(pe, "__esModule", {
  value: !0
});
pe.browserPrefixToKey = Et;
pe.browserPrefixToStyle = kn;
pe.default = void 0;
pe.getPrefix = Tt;
const Ie = ["Moz", "Webkit", "O", "ms"];
function Tt() {
  var t;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const n = (t = window.document) === null || t === void 0 || (t = t.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!n || e in n)
    return "";
  for (let o = 0; o < Ie.length; o++)
    if (Et(e, Ie[o]) in n)
      return Ie[o];
  return "";
}
function Et(t, e) {
  return e ? "".concat(e).concat(Tn(t)) : t;
}
function kn(t, e) {
  return e ? "-".concat(e.toLowerCase(), "-").concat(t) : t;
}
function Tn(t) {
  let e = "", n = !0;
  for (let o = 0; o < t.length; o++)
    n ? (e += t[o].toUpperCase(), n = !1) : t[o] === "-" ? n = !0 : e += t[o];
  return e;
}
pe.default = Tt();
Object.defineProperty(z, "__esModule", {
  value: !0
});
z.addClassName = At;
z.addEvent = _n;
z.addUserSelectStyles = Gn;
z.createCSSTransform = qn;
z.createSVGTransform = Qn;
z.getTouch = Wn;
z.getTouchIdentifier = Yn;
z.getTranslation = je;
z.innerHeight = Xn;
z.innerWidth = Bn;
z.matchesSelector = _t;
z.matchesSelectorAndParentsTo = Ln;
z.offsetXYFromParent = zn;
z.outerHeight = Vn;
z.outerWidth = In;
z.removeClassName = Vt;
z.removeEvent = An;
z.removeUserSelectStyles = Un;
var ne = ce, lt = En(pe);
function Lt(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Lt = function(o) {
    return o ? n : e;
  })(t);
}
function En(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var n = Lt(e);
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
let Oe = "";
function _t(t, e) {
  return Oe || (Oe = (0, ne.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, ne.isFunction)(t[n]);
  })), (0, ne.isFunction)(t[Oe]) ? t[Oe](e) : !1;
}
function Ln(t, e, n) {
  let o = t;
  do {
    if (_t(o, e))
      return !0;
    if (o === n)
      return !1;
    o = o.parentNode;
  } while (o);
  return !1;
}
function _n(t, e, n, o) {
  if (!t)
    return;
  const a = {
    capture: !0,
    ...o
  };
  t.addEventListener ? t.addEventListener(e, n, a) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n;
}
function An(t, e, n, o) {
  if (!t)
    return;
  const a = {
    capture: !0,
    ...o
  };
  t.removeEventListener ? t.removeEventListener(e, n, a) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null;
}
function Vn(t) {
  let e = t.clientHeight;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e += (0, ne.int)(n.borderTopWidth), e += (0, ne.int)(n.borderBottomWidth), e;
}
function In(t) {
  let e = t.clientWidth;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e += (0, ne.int)(n.borderLeftWidth), e += (0, ne.int)(n.borderRightWidth), e;
}
function Xn(t) {
  let e = t.clientHeight;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e -= (0, ne.int)(n.paddingTop), e -= (0, ne.int)(n.paddingBottom), e;
}
function Bn(t) {
  let e = t.clientWidth;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e -= (0, ne.int)(n.paddingLeft), e -= (0, ne.int)(n.paddingRight), e;
}
function zn(t, e, n) {
  const a = e === e.ownerDocument.body ? {
    left: 0,
    top: 0
  } : e.getBoundingClientRect(), i = (t.clientX + e.scrollLeft - a.left) / n, s = (t.clientY + e.scrollTop - a.top) / n;
  return {
    x: i,
    y: s
  };
}
function qn(t, e) {
  const n = je(t, e, "px");
  return {
    [(0, lt.browserPrefixToKey)("transform", lt.default)]: n
  };
}
function Qn(t, e) {
  return je(t, e, "");
}
function je(t, e, n) {
  let {
    x: o,
    y: a
  } = t, i = "translate(".concat(o).concat(n, ",").concat(a).concat(n, ")");
  if (e) {
    const s = "".concat(typeof e.x == "string" ? e.x : e.x + n), u = "".concat(typeof e.y == "string" ? e.y : e.y + n);
    i = "translate(".concat(s, ", ").concat(u, ")") + i;
  }
  return i;
}
function Wn(t, e) {
  return t.targetTouches && (0, ne.findInArray)(t.targetTouches, (n) => e === n.identifier) || t.changedTouches && (0, ne.findInArray)(t.changedTouches, (n) => e === n.identifier);
}
function Yn(t) {
  if (t.targetTouches && t.targetTouches[0])
    return t.targetTouches[0].identifier;
  if (t.changedTouches && t.changedTouches[0])
    return t.changedTouches[0].identifier;
}
function Gn(t) {
  if (!t)
    return;
  let e = t.getElementById("react-draggable-style-el");
  e || (e = t.createElement("style"), e.type = "text/css", e.id = "react-draggable-style-el", e.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, e.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, t.getElementsByTagName("head")[0].appendChild(e)), t.body && At(t.body, "react-draggable-transparent-selection");
}
function Un(t) {
  if (t)
    try {
      if (t.body && Vt(t.body, "react-draggable-transparent-selection"), t.selection)
        t.selection.empty();
      else {
        const e = (t.defaultView || window).getSelection();
        e && e.type !== "Caret" && e.removeAllRanges();
      }
    } catch {
    }
}
function At(t, e) {
  t.classList ? t.classList.add(e) : t.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) || (t.className += " ".concat(e));
}
function Vt(t, e) {
  t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"), "");
}
var ue = {};
Object.defineProperty(ue, "__esModule", {
  value: !0
});
ue.canDragX = Kn;
ue.canDragY = jn;
ue.createCoreData = Zn;
ue.createDraggableData = er;
ue.getBoundPosition = $n;
ue.getControlPosition = Jn;
ue.snapToGrid = Hn;
var te = ce, ye = z;
function $n(t, e, n) {
  if (!t.props.bounds)
    return [e, n];
  let {
    bounds: o
  } = t.props;
  o = typeof o == "string" ? o : tr(o);
  const a = Je(t);
  if (typeof o == "string") {
    const {
      ownerDocument: i
    } = a, s = i.defaultView;
    let u;
    if (o === "parent" ? u = a.parentNode : u = i.querySelector(o), !(u instanceof s.HTMLElement))
      throw new Error('Bounds selector "' + o + '" could not find an element.');
    const d = u, p = s.getComputedStyle(a), b = s.getComputedStyle(d);
    o = {
      left: -a.offsetLeft + (0, te.int)(b.paddingLeft) + (0, te.int)(p.marginLeft),
      top: -a.offsetTop + (0, te.int)(b.paddingTop) + (0, te.int)(p.marginTop),
      right: (0, ye.innerWidth)(d) - (0, ye.outerWidth)(a) - a.offsetLeft + (0, te.int)(b.paddingRight) - (0, te.int)(p.marginRight),
      bottom: (0, ye.innerHeight)(d) - (0, ye.outerHeight)(a) - a.offsetTop + (0, te.int)(b.paddingBottom) - (0, te.int)(p.marginBottom)
    };
  }
  return (0, te.isNum)(o.right) && (e = Math.min(e, o.right)), (0, te.isNum)(o.bottom) && (n = Math.min(n, o.bottom)), (0, te.isNum)(o.left) && (e = Math.max(e, o.left)), (0, te.isNum)(o.top) && (n = Math.max(n, o.top)), [e, n];
}
function Hn(t, e, n) {
  const o = Math.round(e / t[0]) * t[0], a = Math.round(n / t[1]) * t[1];
  return [o, a];
}
function Kn(t) {
  return t.props.axis === "both" || t.props.axis === "x";
}
function jn(t) {
  return t.props.axis === "both" || t.props.axis === "y";
}
function Jn(t, e, n) {
  const o = typeof e == "number" ? (0, ye.getTouch)(t, e) : null;
  if (typeof e == "number" && !o)
    return null;
  const a = Je(n), i = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, ye.offsetXYFromParent)(o || t, i, n.props.scale);
}
function Zn(t, e, n) {
  const o = !(0, te.isNum)(t.lastX), a = Je(t);
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
function er(t, e) {
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
function tr(t) {
  return {
    left: t.left,
    top: t.top,
    right: t.right,
    bottom: t.bottom
  };
}
function Je(t) {
  const e = t.findDOMNode();
  if (!e)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return e;
}
var Te = {}, Ee = {};
Object.defineProperty(Ee, "__esModule", {
  value: !0
});
Ee.default = nr;
function nr() {
}
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.default = void 0;
var Xe = or(ft), ee = Ze(ht), rr = Ze(xt), $ = z, de = ue, Be = ce, Se = Ze(Ee);
function Ze(t) {
  return t && t.__esModule ? t : { default: t };
}
function It(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (It = function(o) {
    return o ? n : e;
  })(t);
}
function or(t, e) {
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
function j(t, e, n) {
  return e = ar(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ar(t) {
  var e = ir(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function ir(t, e) {
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
let fe = se.mouse, Le = class extends Xe.Component {
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
      const i = (0, de.getControlPosition)(e, a, this);
      if (i == null)
        return;
      const {
        x: s,
        y: u
      } = i, d = (0, de.createCoreData)(this, s, u);
      (0, Se.default)("DraggableCore: handleDragStart: %j", d), (0, Se.default)("calling", this.props.onStart), !(this.props.onStart(e, d) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, $.addUserSelectStyles)(o), this.dragging = !0, this.lastX = s, this.lastY = u, (0, $.addEvent)(o, fe.move, this.handleDrag), (0, $.addEvent)(o, fe.stop, this.handleDragStop));
    }), j(this, "handleDrag", (e) => {
      const n = (0, de.getControlPosition)(e, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: o,
        y: a
      } = n;
      if (Array.isArray(this.props.grid)) {
        let u = o - this.lastX, d = a - this.lastY;
        if ([u, d] = (0, de.snapToGrid)(this.props.grid, u, d), !u && !d)
          return;
        o = this.lastX + u, a = this.lastY + d;
      }
      const i = (0, de.createCoreData)(this, o, a);
      if ((0, Se.default)("DraggableCore: handleDrag: %j", i), this.props.onDrag(e, i) === !1 || this.mounted === !1) {
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
      const n = (0, de.getControlPosition)(e, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: o,
        y: a
      } = n;
      if (Array.isArray(this.props.grid)) {
        let d = o - this.lastX || 0, p = a - this.lastY || 0;
        [d, p] = (0, de.snapToGrid)(this.props.grid, d, p), o = this.lastX + d, a = this.lastY + p;
      }
      const i = (0, de.createCoreData)(this, o, a);
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
    return (e = this.props) !== null && e !== void 0 && e.nodeRef ? (n = this.props) === null || n === void 0 || (n = n.nodeRef) === null || n === void 0 ? void 0 : n.current : rr.default.findDOMNode(this);
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
  className: Be.dontSetMe,
  style: Be.dontSetMe,
  transform: Be.dontSetMe
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
      return d.default;
    }
  }), t.default = void 0;
  var e = w(ft), n = b(ht), o = b(xt), a = b(Nn), i = z, s = ue, u = ce, d = b(Te), p = b(Ee);
  function b(m) {
    return m && m.__esModule ? m : { default: m };
  }
  function v(m) {
    if (typeof WeakMap != "function")
      return null;
    var g = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
    return (v = function(y) {
      return y ? h : g;
    })(m);
  }
  function w(m, g) {
    if (!g && m && m.__esModule)
      return m;
    if (m === null || typeof m != "object" && typeof m != "function")
      return { default: m };
    var h = v(g);
    if (h && h.has(m))
      return h.get(m);
    var y = {}, P = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var S in m)
      if (S !== "default" && Object.prototype.hasOwnProperty.call(m, S)) {
        var N = P ? Object.getOwnPropertyDescriptor(m, S) : null;
        N && (N.get || N.set) ? Object.defineProperty(y, S, N) : y[S] = m[S];
      }
    return y.default = m, h && h.set(m, y), y;
  }
  function D() {
    return D = Object.assign ? Object.assign.bind() : function(m) {
      for (var g = 1; g < arguments.length; g++) {
        var h = arguments[g];
        for (var y in h)
          Object.prototype.hasOwnProperty.call(h, y) && (m[y] = h[y]);
      }
      return m;
    }, D.apply(this, arguments);
  }
  function O(m, g, h) {
    return g = q(g), g in m ? Object.defineProperty(m, g, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : m[g] = h, m;
  }
  function q(m) {
    var g = B(m, "string");
    return typeof g == "symbol" ? g : String(g);
  }
  function B(m, g) {
    if (typeof m != "object" || m === null)
      return m;
    var h = m[Symbol.toPrimitive];
    if (h !== void 0) {
      var y = h.call(m, g || "default");
      if (typeof y != "object")
        return y;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (g === "string" ? String : Number)(m);
  }
  class I extends e.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(g, h) {
      let {
        position: y
      } = g, {
        prevPropsPosition: P
      } = h;
      return y && (!P || y.x !== P.x || y.y !== P.y) ? ((0, p.default)("Draggable: getDerivedStateFromProps %j", {
        position: y,
        prevPropsPosition: P
      }), {
        x: y.x,
        y: y.y,
        prevPropsPosition: {
          ...y
        }
      }) : null;
    }
    constructor(g) {
      super(g), O(this, "onDragStart", (h, y) => {
        if ((0, p.default)("Draggable: onDragStart: %j", y), this.props.onStart(h, (0, s.createDraggableData)(this, y)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), O(this, "onDrag", (h, y) => {
        if (!this.state.dragging)
          return !1;
        (0, p.default)("Draggable: onDrag: %j", y);
        const P = (0, s.createDraggableData)(this, y), S = {
          x: P.x,
          y: P.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: E,
            y: X
          } = S;
          S.x += this.state.slackX, S.y += this.state.slackY;
          const [_, Q] = (0, s.getBoundPosition)(this, S.x, S.y);
          S.x = _, S.y = Q, S.slackX = this.state.slackX + (E - S.x), S.slackY = this.state.slackY + (X - S.y), P.x = S.x, P.y = S.y, P.deltaX = S.x - this.state.x, P.deltaY = S.y - this.state.y;
        }
        if (this.props.onDrag(h, P) === !1)
          return !1;
        this.setState(S);
      }), O(this, "onDragStop", (h, y) => {
        if (!this.state.dragging || this.props.onStop(h, (0, s.createDraggableData)(this, y)) === !1)
          return !1;
        (0, p.default)("Draggable: onDragStop: %j", y);
        const S = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: E,
            y: X
          } = this.props.position;
          S.x = E, S.y = X;
        }
        this.setState(S);
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
      var g, h;
      return (g = (h = this.props) === null || h === void 0 || (h = h.nodeRef) === null || h === void 0 ? void 0 : h.current) !== null && g !== void 0 ? g : o.default.findDOMNode(this);
    }
    render() {
      const {
        axis: g,
        bounds: h,
        children: y,
        defaultPosition: P,
        defaultClassName: S,
        defaultClassNameDragging: N,
        defaultClassNameDragged: E,
        position: X,
        positionOffset: _,
        scale: Q,
        ...l
      } = this.props;
      let C = {}, L = null;
      const U = !!!X || this.state.dragging, H = X || P, Y = {
        // Set left if horizontal drag is enabled
        x: (0, s.canDragX)(this) && U ? this.state.x : H.x,
        // Set top if vertical drag is enabled
        y: (0, s.canDragY)(this) && U ? this.state.y : H.y
      };
      this.state.isElementSVG ? L = (0, i.createSVGTransform)(Y, _) : C = (0, i.createCSSTransform)(Y, _);
      const T = (0, a.default)(y.props.className || "", S, {
        [N]: this.state.dragging,
        [E]: this.state.dragged
      });
      return /* @__PURE__ */ e.createElement(d.default, D({}, l, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ e.cloneElement(e.Children.only(y), {
        className: T,
        style: {
          ...y.props.style,
          ...C
        },
        transform: L
      }));
    }
  }
  t.default = I, O(I, "displayName", "Draggable"), O(I, "propTypes", {
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
    className: u.dontSetMe,
    style: u.dontSetMe,
    transform: u.dontSetMe
  }), O(I, "defaultProps", {
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
})(Mt);
const {
  default: Xt,
  DraggableCore: sr
} = Mt;
ke.exports = Xt;
ke.exports.default = Xt;
ke.exports.DraggableCore = sr;
var lr = ke.exports;
const cr = /* @__PURE__ */ fn(lr);
const ur = (t) => {
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
}, dr = re(function(e, n) {
  const { formLayout: o, context: a } = e, { formData: i } = a, s = J({}), u = ur(e), d = "palmyra-form-field-data", p = mt(() => (b) => Ft(b, s, b.label), [i.data]);
  return /* @__PURE__ */ r("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: o.fields.map((b, v) => /* @__PURE__ */ r("div", { className: u, children: /* @__PURE__ */ r("div", { className: d, children: p(b) }) }, b.attribute)) });
});
function fr(t) {
  return /* @__PURE__ */ r(
    cr,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ r(Zt, { ...t })
    }
  );
}
const Bt = ({ columns: t, isOpen: e, onClose: n, setFilter: o, defaultFilter: a = {} }) => {
  var { getFieldManager: i, getFilterData: s } = mn(a);
  const u = () => {
    o({});
  }, d = () => {
    var w = s();
    o && o(w);
  }, p = () => {
    n();
  }, b = (w) => {
    w.keyCode === 27 && p();
  }, v = un(t);
  return /* @__PURE__ */ r("div", { className: "grid-filter-container", children: /* @__PURE__ */ r(
    Jt,
    {
      open: e,
      onClose: p,
      PaperComponent: fr,
      onKeyDown: b,
      PaperProps: { sx: { minWidth: "500px" } },
      children: /* @__PURE__ */ r(Ge, { onClickAway: n, children: /* @__PURE__ */ M("div", { children: [
        /* @__PURE__ */ M("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ r("div", { className: "grid-header-text-container", children: /* @__PURE__ */ r("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ r("div", { className: "grid-header-icon-container", onClick: p, children: /* @__PURE__ */ r(cn, { className: "filter-cancel-icon" }) })
        ] }),
        /* @__PURE__ */ r("span", { className: "filter-header-border" }),
        /* @__PURE__ */ r("div", { className: "grid-filter-content", children: /* @__PURE__ */ r(Ne.Provider, { value: i, children: /* @__PURE__ */ r(
          Rt,
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
              Renderer: dr
            }
          }
        ) }) }),
        /* @__PURE__ */ M("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ r(le, { className: "filter-reset-btn dialog-btn", disableRipple: !0, onClick: u, children: "Reset" }),
          /* @__PURE__ */ r(le, { className: "filter-button dialog-btn", disableRipple: !0, onClick: d, children: "Filter" })
        ] })
      ] }) })
    }
  ) });
}, mr = re(function(e, n) {
  const { columns: o, children: a, EmptyChild: i, onRowClick: s, quickSearch: u } = e, d = i || Ct, p = e.customizer || Nt, b = e.customButton, v = e.gridTitle, [w, D] = V(!1), [O, q] = V("standard"), [B, I] = V(!1), [m, g] = V(""), {
    setQueryFilter: h,
    setQuickSearch: y,
    setSortColumns: P,
    setEndPointOptions: S,
    gotoPage: N,
    setPageSize: E,
    getPageNo: X,
    refreshData: _,
    setQueryLimit: Q,
    getQueryLimit: l,
    data: C,
    totalRecords: L,
    queryLimit: W,
    pageSizeOptions: U,
    filter: H
  } = be(e), Y = n || J(null);
  he(Y, () => ({
    setFilter: (k) => {
      h(k);
    },
    refresh: () => {
      _();
    },
    resetFilter() {
      h({});
    },
    setEndPointOptions: (k) => {
      S(k);
    },
    addFilter: (k, oe) => {
      h((R) => (R[k] = oe, { ...R }));
    },
    setQueryLimit: (k) => {
      Q(k);
    },
    getQueryLimit: () => l(),
    setSortOptions(k) {
      P(k);
    },
    getCurrentData: () => C
  }), [l]);
  const T = (k, oe) => {
    N(oe);
  }, A = bt(o, p), c = (k) => {
    q(k);
  }, x = () => {
    D(!w);
  }, G = () => O === "compact" ? { padding: "3px" } : O === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, ge = () => O === "compact" ? { padding: "3px" } : O === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, f = () => {
    var k;
    switch (O) {
      case "compact":
        k = /* @__PURE__ */ r(Re, { className: "density-icon" });
        break;
      case "comfortable":
        k = /* @__PURE__ */ r(Me, { className: "density-icon" });
        break;
      default:
        k = /* @__PURE__ */ r(Fe, { className: "grid-button-icon" });
        break;
    }
    return k;
  }, F = (k) => {
    const oe = k.target.value;
    g(oe), oe ? y(oe) : h({});
  }, Z = (k) => {
    s && s(k);
  }, Ce = (k) => {
    const oe = parseInt(k.target.value, 10);
    E(oe);
  }, _e = () => {
    console.info("Export Clicked");
  }, Ae = 200, Ve = !!e.pageSize;
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ M("div", { children: [
    a,
    /* @__PURE__ */ M("div", { className: "grid-header", children: [
      /* @__PURE__ */ r("div", { className: "grid-header-right-content", children: /* @__PURE__ */ r("span", { className: "grid-header-right-content-text", children: v }) }),
      /* @__PURE__ */ M("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ r("div", { className: "grid-header-filter", children: !!u && /* @__PURE__ */ r(
          xe,
          {
            sx: { width: Ae },
            type: "text",
            value: m,
            onChange: F,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ r(Ue, { position: "end", children: /* @__PURE__ */ r(Qe, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ r(Ge, { onClickAway: () => {
          D(!1);
        }, children: /* @__PURE__ */ M("div", { className: "grid-header-button grid-density-btn", onClick: x, children: [
          /* @__PURE__ */ r(me, { title: "Density", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, children: f() }) }),
          w && /* @__PURE__ */ r("div", { className: "density-dropdown-content", children: /* @__PURE__ */ M("ul", { children: [
            /* @__PURE__ */ M("li", { onClick: () => c("standard"), children: [
              /* @__PURE__ */ r(Fe, { className: "density-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ M("li", { onClick: () => c("compact"), children: [
              /* @__PURE__ */ r(Re, { className: "density-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ M("li", { onClick: () => c("comfortable"), children: [
              /* @__PURE__ */ r(Me, { className: "density-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        o.some((k) => k.searchable) && /* @__PURE__ */ M("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ r(me, { title: "Filter", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, onClick: () => I(!0), children: /* @__PURE__ */ r(Dt, { className: "grid-button-icon" }) }) }),
          /* @__PURE__ */ r(
            Bt,
            {
              columns: o,
              setFilter: h,
              defaultFilter: H,
              isOpen: B,
              onClose: () => I(!1)
            }
          )
        ] }),
        /* @__PURE__ */ r("div", { className: "grid-header-button grid-export-btn", onClick: _e, children: /* @__PURE__ */ r(me, { title: "Export", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ r(Pt, { className: "grid-button-icon" }) }) }) }),
        e.onNewClick ? /* @__PURE__ */ r("div", { className: "grid-header-button", onClick: () => {
          e.onNewClick();
        }, children: /* @__PURE__ */ r(me, { title: "New", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ r(wt, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ r(ve, {}),
        b && b.map((k, oe) => /* @__PURE__ */ r("div", { className: "grid-custom-button grid-export-btn", children: k }, oe))
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "grid-table", children: /* @__PURE__ */ r(
      St,
      {
        columnDefs: A,
        EmptyChild: d,
        customizer: p,
        rowData: C,
        onRowClick: Z,
        onRowStyle: G,
        onHeaderStyle: ge,
        onSortColumn: P
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "grid-footer", children: /* @__PURE__ */ r("div", { className: "grid-filter", children: Ve && /* @__PURE__ */ r(
      $e,
      {
        component: "div",
        count: L || 0,
        page: X(),
        onPageChange: T,
        rowsPerPage: W.limit,
        rowsPerPageOptions: U || [],
        onRowsPerPageChange: Ce
      }
    ) }) })
  ] }) });
}), Mo = re(function(e, n) {
  const { children: o, EmptyChild: a, onRowClick: i, quickSearch: s } = e, u = e.columns, d = a || Ct, p = e.customizer || Nt, b = e.customButton, v = e.gridTitle, [w, D] = V(!1), [O, q] = V("standard"), [B, I] = V(!1), [m, g] = V(""), {
    setQueryFilter: h,
    setQuickSearch: y,
    setSortColumns: P,
    setEndPointOptions: S,
    gotoPage: N,
    setPageSize: E,
    getPageNo: X,
    refreshData: _,
    setQueryLimit: Q,
    getQueryLimit: l,
    data: C,
    totalRecords: L,
    queryLimit: W,
    pageSizeOptions: U,
    filter: H
  } = be(e), [Y, T] = V(u(C)), A = n || J(null);
  he(A, () => ({
    setFilter: (R) => {
      h(R);
    },
    refresh: () => {
      _();
    },
    resetFilter() {
      h({});
    },
    setEndPointOptions: (R) => {
      S(R);
    },
    addFilter: (R, ie) => {
      h((tt) => (tt[R] = ie, { ...tt }));
    },
    setQueryLimit: (R) => {
      Q(R);
    },
    getQueryLimit: () => l(),
    setSortOptions(R) {
      P(R);
    },
    getCurrentData: () => C
  }), [l, Y]), ae(() => {
    T(u(C));
  }, [C]);
  const c = (R, ie) => {
    N(ie);
  }, x = bt(Y, p), G = (R) => {
    q(R);
  }, ge = () => {
    D(!w);
  }, f = () => O === "compact" ? { padding: "3px" } : O === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, F = () => O === "compact" ? { padding: "3px" } : O === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, Z = () => {
    var R;
    switch (O) {
      case "compact":
        R = /* @__PURE__ */ r(Re, { className: "density-icon" });
        break;
      case "comfortable":
        R = /* @__PURE__ */ r(Me, { className: "density-icon" });
        break;
      default:
        R = /* @__PURE__ */ r(Fe, { className: "grid-button-icon" });
        break;
    }
    return R;
  }, Ce = (R) => {
    const ie = R.target.value;
    g(ie), ie ? y(ie) : h({});
  }, _e = (R) => {
    i && i(R);
  }, Ae = (R) => {
    const ie = parseInt(R.target.value, 10);
    E(ie);
  }, Ve = () => {
    console.info("Export Clicked");
  }, et = 200, k = !!e.pageSize;
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ M("div", { children: [
    o,
    /* @__PURE__ */ M("div", { className: "grid-header", children: [
      /* @__PURE__ */ r("div", { className: "grid-header-right-content", children: /* @__PURE__ */ r("span", { className: "grid-header-right-content-text", children: v }) }),
      /* @__PURE__ */ M("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ r("div", { className: "grid-header-filter", children: !!s && /* @__PURE__ */ r(
          xe,
          {
            sx: { width: et },
            type: "text",
            value: m,
            onChange: Ce,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ r(Ue, { position: "end", children: /* @__PURE__ */ r(Qe, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ r(Ge, { onClickAway: () => {
          D(!1);
        }, children: /* @__PURE__ */ M("div", { className: "grid-header-button grid-density-btn", onClick: ge, children: [
          /* @__PURE__ */ r(me, { title: "Density", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, children: Z() }) }),
          w && /* @__PURE__ */ r("div", { className: "density-dropdown-content", children: /* @__PURE__ */ M("ul", { children: [
            /* @__PURE__ */ M("li", { onClick: () => G("standard"), children: [
              /* @__PURE__ */ r(Fe, { className: "density-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ M("li", { onClick: () => G("compact"), children: [
              /* @__PURE__ */ r(Re, { className: "density-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ M("li", { onClick: () => G("comfortable"), children: [
              /* @__PURE__ */ r(Me, { className: "density-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        Y.some((R) => R.searchable) && /* @__PURE__ */ M("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ r(me, { title: "Filter", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, onClick: () => I(!0), children: /* @__PURE__ */ r(Dt, { className: "grid-button-icon" }) }) }),
          /* @__PURE__ */ r(
            Bt,
            {
              columns: Y,
              setFilter: h,
              defaultFilter: H,
              isOpen: B,
              onClose: () => I(!1)
            }
          )
        ] }),
        /* @__PURE__ */ r("div", { className: "grid-header-button grid-export-btn", onClick: Ve, children: /* @__PURE__ */ r(me, { title: "Export", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ r(Pt, { className: "grid-button-icon" }) }) }) }),
        e.onNewClick ? /* @__PURE__ */ r("div", { className: "grid-header-button", onClick: () => {
          e.onNewClick();
        }, children: /* @__PURE__ */ r(me, { title: "New", placement: "top", children: /* @__PURE__ */ r(le, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ r(wt, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ r(ve, {}),
        b && b.map((R, ie) => /* @__PURE__ */ r("div", { className: "grid-custom-button grid-export-btn", children: R }, ie))
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "grid-table", children: /* @__PURE__ */ r(
      St,
      {
        columnDefs: x,
        EmptyChild: d,
        customizer: p,
        rowData: C,
        onRowClick: _e,
        onRowStyle: f,
        onHeaderStyle: F,
        onSortColumn: P
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "grid-footer", children: /* @__PURE__ */ r("div", { className: "grid-filter", children: k && /* @__PURE__ */ r(
      $e,
      {
        component: "div",
        count: L || 0,
        page: X(),
        onPageChange: c,
        rowsPerPage: W.limit,
        rowsPerPageOptions: U || [],
        onRowsPerPageChange: Ae
      }
    ) }) })
  ] }) });
}), ko = re(function(e, n) {
  const { columns: o, endPoint: a, storeFactory: i, layoutParams: s, pagination: u } = e, d = e.quickSearch || "", p = e.customButton, b = e.gridTitle, v = (D, O) => {
  };
  ae(() => {
    var D = at.subscribe(e.topic, v);
    return () => {
      at.unsubscribe(D);
    };
  }, [e.topic]);
  const w = {
    fields: o,
    pagination: u,
    quickSearch: d,
    storeOptions: {
      endPoint: a
    },
    actionOptions: e.actions
  };
  return /* @__PURE__ */ r(ve, { children: /* @__PURE__ */ r(qe.Provider, { value: i, children: /* @__PURE__ */ r(
    zt,
    {
      layout: w,
      context: s,
      onDataChange: e.onDataChange,
      gridTitle: b,
      defaultParams: e.defaultParams,
      customButton: p,
      customizer: e.customizer,
      ref: n
    }
  ) }) });
}), hr = re(function(e, n) {
  const o = e.layout, [a, i] = V(o.fields), s = o.pagination ? o.pagination : [15], u = De(qe), d = De(dt);
  var p = o.storeOptions || {}, b = {};
  on(b, p, d);
  const v = u.getGridStore(b, o.storeOptions.endPoint);
  ae(() => {
    p.hasLayout && v.queryLayout({}).then((O) => {
      i(O.columns);
    });
  }, []);
  const { onClick: w, onNewClick: D } = hn(o.actionOptions, d);
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    mr,
    {
      columns: a,
      store: v,
      pageSize: s,
      onRowClick: w,
      onDataChange: e.onDataChange,
      gridTitle: e.gridTitle,
      onNewClick: D,
      customizer: e.customizer,
      customButton: e.customButton,
      quickSearch: o.quickSearch,
      ref: n,
      defaultParams: e.defaultParams
    }
  ) });
}), zt = hr, gr = (t) => {
  const { layout: e, context: n } = t;
  var o = e.Container || vt;
  return /* @__PURE__ */ r(Ot, { fallback: /* @__PURE__ */ r("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ r(o, { ...e, children: ((i) => /* @__PURE__ */ r(
    zt,
    {
      context: n,
      layout: i
    }
  ))(e.tableLayout) }) });
}, pr = (t) => {
  const { layout: e } = t;
  switch (e.type) {
    case "form":
      return /* @__PURE__ */ r(Rt, { ...t });
    case "view":
      return /* @__PURE__ */ r(pn, { ...t });
    case "grid":
      return /* @__PURE__ */ r(gr, { ...t });
    case "chart":
      return /* @__PURE__ */ r(nn, { ...t });
    default:
      return /* @__PURE__ */ r(gn, { ...t });
  }
};
function yr(t, e) {
  var n = t || 1, o = e;
  return {
    w: n,
    h: o
  };
}
const qt = (t) => {
  const { layout: e, context: n } = t, o = e.sections;
  function a(i, s, u) {
    const { w: d, h: p } = yr(i.width, i.height);
    return /* @__PURE__ */ r(en, { sx: { width: d, height: p }, children: /* @__PURE__ */ r(
      pr,
      {
        layout: i,
        context: s
      }
    ) }, (i.name || "tab") + u);
  }
  return /* @__PURE__ */ r("div", { style: { display: "flex", flexWrap: "wrap" }, children: o.map((i, s) => a(i, n, s)) });
}, ct = re(function(e, n) {
  const { layout: o } = e;
  he(n, () => ({
    resetFilter() {
    }
  }), []);
  const a = {}, i = o.tabs;
  return /* @__PURE__ */ r("div", { children: i.map((s, u) => /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    qt,
    {
      layout: s,
      context: a
    }
  ) }, s.name + u)) });
}), vr = (t) => {
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
}, ut = re(function(e, n) {
  var b;
  const o = e.data || {}, { layout: a } = e;
  var { getFieldManager: i, getFormData: s, isFormValid: u } = yn(o, (b = e.callbacks) == null ? void 0 : b.onFormValidChange, vr(e.mode));
  he(n, () => ({
    getData() {
      return s();
    },
    isValid() {
      return u();
    }
  }), []);
  const d = { formData: o }, p = a.tabs;
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(Ne.Provider, { value: i, children: p.map((v, w) => /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    qt,
    {
      layout: v,
      context: d
    }
  ) }, v.name + w)) }) });
}), br = (t) => {
  switch (t) {
    case "grid":
      return ct;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), ut;
    case "formEdit":
    case "formNew":
    case "formView":
      return ut;
    default:
      return ct;
  }
}, To = re(function(e, n) {
  const [o, a] = V(e.layout), i = e.mode ? e.mode : o.type ? o.type : "grid", s = e.layoutParams || {}, u = br(i), d = J(0);
  return ae(() => {
    a(e.layout), d.current < 999999 ? d.current++ : d.current = 0;
  }, [e.layout]), /* @__PURE__ */ r(Ot, { fallback: /* @__PURE__ */ r("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ r(qe.Provider, { value: e.storeFactory, children: /* @__PURE__ */ r(dt.Provider, { value: s, children: /* @__PURE__ */ r(u, { ...e, ref: (p) => {
    n && (n.current = p);
  } }, d.current) }) }) });
}), Eo = re(function(e, n) {
  const { children: o, Child: a, childProps: i, pageSize: s } = e, u = n || J(null), {
    setQueryFilter: d,
    refreshData: p,
    setSortColumns: b,
    setEndPointOptions: v,
    setQuickSearch: w,
    gotoPage: D,
    setPageSize: O,
    getPageNo: q,
    setQueryLimit: B,
    getQueryLimit: I,
    data: m,
    totalRecords: g,
    pageSizeOptions: h,
    queryLimit: y
  } = be(e), P = e.listKeyProvider || ((l, C) => C);
  he(u, () => ({
    setFilter: (l) => {
      d(l);
    },
    refresh: () => {
      p();
    },
    resetFilter() {
      d({});
    },
    setEndPointOptions: (l) => {
      v(l);
    },
    addFilter: (l, C) => {
      d((L) => (L[l] = C, { ...L }));
    },
    setQueryLimit: (l) => {
      B(l);
    },
    getQueryLimit: () => I(),
    getCurrentData: () => m,
    setSortOptions(l) {
      b(l);
    }
  }), [d]);
  const S = (l, C) => {
    D(C);
  }, N = (l) => {
    const C = l.target.value;
    w(C);
  }, E = (l) => {
    const C = parseInt(l.target.value, 10);
    O(C);
  }, X = 200, _ = !!s, Q = !!e.quickSearch;
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("div", { className: "card-page-container", children: /* @__PURE__ */ M("div", { children: [
    /* @__PURE__ */ M("div", { className: "card-header", children: [
      o,
      /* @__PURE__ */ r("div", { className: "card-filter", children: Q && /* @__PURE__ */ r(
        xe,
        {
          sx: { width: X },
          type: "text",
          onChange: N,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ r(Ue, { position: "end", children: /* @__PURE__ */ r(Qe, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ r("div", { className: "card-pagination", children: _ && /* @__PURE__ */ r(
        $e,
        {
          component: "div",
          count: g || 0,
          page: q(),
          onPageChange: S,
          rowsPerPage: y.limit,
          rowsPerPageOptions: h || [],
          onRowsPerPageChange: E
        }
      ) })
    ] }),
    /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
      tn,
      {
        Child: a,
        childKeyProvider: P,
        preProcess: e.preProcess,
        dataList: m,
        childProps: i,
        EmptyChild: e.EmptyChild
      }
    ) })
  ] }) }) });
});
export {
  Mo as D,
  To as F,
  zt as G,
  Cn as M,
  ko as P,
  Eo as S,
  qt as T,
  mr as a,
  Fo as b,
  Sn as c,
  Pn as d,
  Rt as e,
  dr as f,
  Ft as g,
  Bt as h,
  gr as i,
  pr as j,
  ct as k,
  ut as l,
  be as u
};
