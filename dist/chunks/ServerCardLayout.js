import "../assets/ServerCardLayout.css";
import Ct from "../palmyra/mui/form/MuiDatePicker.js";
import xt from "../palmyra/mui/form/MuiDateTimePicker.js";
import Ft from "../palmyra/mui/form/MuiRadioGroup.js";
import We from "../palmyra/mui/form/MuiSelect.js";
import Ot from "../palmyra/mui/form/MuiTextArea.js";
import St from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import wt from "../palmyra/mui/form/MuiCheckBox.js";
import Rt from "../palmyra/mui/form/MuiSwitch.js";
import Nt from "../palmyra/mui/form/MuiIOSSwitch.js";
import kt from "../palmyra/mui/form/MuiPassword.js";
import Pt from "../palmyra/mui/form/MuiNumberField.js";
import Dt from "../palmyra/mui/form/MuiIntegerField.js";
import Ie from "../palmyra/mui/form/FieldDecorator.js";
import { renderTitle as tt } from "../palmyra/mui/widget/InfoTooltip.js";
import { FieldManagerContext as me, StoreFactoryContext as Qe, LayoutParamsContext as nt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as e, jsxs as h, Fragment as oe } from "react/jsx-runtime";
import At, { useState as N, useRef as $, useEffect as ee, forwardRef as U, useContext as ce, useImperativeHandle as re, useMemo as rt } from "react";
import { a as Ve } from "./AsyncTreeMenu.js";
import { FormControlLabel as Xe, Checkbox as _e, FormControl as ie, FormHelperText as Ee, Autocomplete as ot, TextField as he, CircularProgress as it, Button as ne, InputAdornment as Te, ClickAwayListener as Me, Select as ze, MenuItem as qe, Pagination as Ge, Box as Lt, Stack as Mt } from "@mui/material";
import Bt from "../palmyra/layout/card/CardLayout.js";
import It from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Ke, getFieldLabel as je } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as de } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as ue, setValueByKey as Qt } from "../palmyra/form/FormUtil.js";
import { T as $e, a as Je, c as Vt, d as He } from "./index.esm2.js";
import { delay as at, delayGenerator as Et, mergeDeep as Tt } from "../palmyra/utils/index.js";
import zt from "../palmyra/mui/form/MuiDateRangePicker.js";
import st from "../palmyra/layout/container/SectionContainer.js";
import qt from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as lt } from "../palmyra/grid/base/ColumnConverter.js";
import ct from "../palmyra/grid/base/EmptyChildTable.js";
import dt from "../palmyra/grid/base/TableX.js";
import { KeyboardArrowDown as Be, Menu as pe, DensitySmall as ye, DensityLarge as ve, Add as ut } from "@mui/icons-material";
import { NoopCustomizer as mt } from "../palmyra/grid/Types.js";
import { convertToField as Gt } from "../palmyra/grid/base/GridFieldConverter.js";
import { createFilterData as Kt } from "../palmyra/form/PalmyraFilterManager.js";
import ht from "../palmyra/grid/base/ExportOptions.js";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import "../palmyra/layout/tree/AsyncTreeMenuEditor.js";
import { topic as Ue } from "../palmyra/utils/pubsub/topic.js";
import "@tanstack/react-table";
import "react-chartjs-2";
import "../palmyra/chart/chartjs/chart/LineChart.js";
import "../palmyra/chart/chartjs/chart/BarChart.js";
import "../palmyra/chart/chartjs/chart/PieChart.js";
import "../palmyra/chart/chartjs/chart/DoughnutChart.js";
import "../palmyra/chart/chartjs/chart/PolarAreaChart.js";
import "../palmyra/chart/chartjs/chart/RadarChart.js";
import "../palmyra/chart/chartjs/chart/ScatterChart.js";
import "../palmyra/chart/chartjs/chart/BubbleChart.js";
import "dayjs";
import "../palmyra/form/PalmyraForm.js";
import { getActionPublishers as jt } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as ft } from "../palmyra/layout/ErrorBoundary.js";
import Ht from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import Wt from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as Xt } from "./PalmyraFieldManager.js";
import { useKeyValue as _t } from "../palmyra/utils/pubsub/PubSubHelper.js";
const ae = (r) => {
  var X, Y;
  const { store: t, quickSearch: c } = r, i = r.fetchAll != !1, [a, s] = N(r.endPointOptions), [y, f] = N(null), b = ((X = r.defaultParams) == null ? void 0 : X.filter) || {}, g = ((Y = r.defaultParams) == null ? void 0 : Y.sort) || {}, [C, d] = r.filterTopic ? _t(r.filterTopic, b) : N(b), [S, v] = N({}), V = $(r.initialFetch == !1), P = r.pageSize ? r.pageSize : 15;
  var D = P instanceof Array ? P : [P], R = P instanceof Array ? P[0] : P;
  const [I, L] = N({ limit: R, offset: 0, total: !0 }), [T, Q] = N(null), W = () => Math.round(I.offset / I.limit), k = () => I, M = (x) => {
    L((n) => ({ limit: n.limit, total: n.total, offset: x * n.limit }));
  }, B = (x) => {
    const n = x > 10 || x == -1 ? x : 15;
    L((m) => {
      const G = Math.floor(m.offset / n) * n;
      return { limit: n, total: m.total, offset: G };
    });
  }, A = () => C ? Object.keys(C).length == 0 : !1, K = (x) => {
    Q((n) => (setTimeout(() => {
      r.onDataChange && r.onDataChange(x, n);
    }, 300), x));
  };
  ee(() => {
    if (V.current) {
      V.current = !1;
      return;
    }
    (i || !A()) && j();
  }, [I, S, a]);
  const z = () => ({
    sortOrder: S && Object.keys(S).length > 0 ? S : g,
    total: !0,
    endPointVars: a,
    ...I,
    filter: { ...C, ...b }
  }), j = () => {
    const x = z();
    if (t)
      try {
        t.query(x).then((n) => {
          K(n.result), f(n.total);
        }).catch((n) => {
          var m = n.response ? n.response : n;
          console.error("error while fetching", m), l();
        });
      } catch (n) {
        console.error(n), u();
      }
    else
      console.error("Store is not provided for the Grid"), u();
  }, u = () => {
    K([]), f(0);
  }, l = () => {
    K(void 0), f(null);
  };
  return {
    setQueryFilter: (x) => {
      typeof x == "function" || x && Object.keys(x).length > 0 ? d(x) : d({}), M(0);
    },
    setQuickSearch: (x) => {
      const n = c;
      d(x ? (m) => (m[n] = x, { ...m }) : (m) => (delete m[n], { ...m })), M(0);
    },
    setSortColumns: (x) => {
      v(x);
    },
    setEndPointOptions: s,
    refreshData: j,
    gotoPage: M,
    setPageSize: B,
    getPageNo: W,
    getQueryLimit: k,
    setQueryLimit: L,
    getQueryRequest: z,
    filter: C,
    queryLimit: I,
    data: T,
    totalRecords: y,
    pageSizeOptions: D
  };
};
function Ye(r) {
  return r ? Array.isArray(r) ? r : typeof r == "string" ? r.split(",") : [r] : [];
}
const xr = U(function(t, c) {
  const i = ce(me), a = c || $(null), s = i(t, "checkbox", a), { mutateOptions: y, setMutateOptions: f } = s, [b, g] = N(!1), C = Ye(s.data), d = s.error, S = s.eventListeners, v = s.store, V = t.pageSize || -1, P = { store: v, pageSize: V, defaultParams: t.defaultParams }, { data: D } = ae(P), R = D, I = $(null), L = t.lookupOptions || {}, T = L.idAttribute || "id", Q = L.displayAttribute || "name", W = t.showSelectedOnly && t.readonly, k = de(T) ? (u) => ue(T, u) : (u) => u[T], M = de(Q) ? (u) => ue(Q, u) : (u) => u[Q];
  re(a, () => ({
    focus() {
      I.current.focus();
    },
    isValid() {
      return !d.status;
    },
    clear() {
      s.setData("", !0);
    },
    getValue() {
      return s.getData();
    },
    setValue(u, l = !1) {
      s.setData(u, l);
    },
    setVisible(u) {
      f((l) => ({ ...l, visible: u }));
    },
    setRequired(u) {
      f((l) => ({ ...l, required: u }));
    },
    setReadOnly(u) {
      f((l) => ({ ...l, readonly: u }));
    },
    setAttribute(u) {
      f((l) => ({ ...l, ...u }));
    },
    setOptions(u) {
    },
    getOptions() {
    }
  }), [s]);
  var B = Ke(t, s.data, t.label);
  t.readonly && (B.inputprops = { readOnly: !0 });
  function A(u, l) {
    const w = Ye(s.data);
    var E = w.indexOf(u);
    l ? E < 0 && w.push(u) : E >= 0 && w.splice(E, 1), S.onValueChange(w.toString());
  }
  var K = {
    onBlur: S.onBlur,
    onFocus: S.onFocus,
    onChange: (u) => {
      A(u.target.value, u.target.checked);
    }
  };
  const z = (u) => {
    const l = u.toString();
    return C.includes(l);
  }, j = (u) => {
    const l = u.target.checked;
    g(l);
    var w = [];
    l && R.map((E) => {
      w.push(k(E));
    }), S.onValueChange(w.toString());
  };
  return /* @__PURE__ */ e("div", { className: t.className, children: y.visible && /* @__PURE__ */ h(
    Ie,
    {
      label: je(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ e("div", { children: t.hideSelectAll ? /* @__PURE__ */ e(oe, {}) : /* @__PURE__ */ e(
          Xe,
          {
            control: /* @__PURE__ */ e(
              _e,
              {
                icon: /* @__PURE__ */ e($e, { style: { fontSize: "20px" } }),
                checkedIcon: /* @__PURE__ */ e(Je, { style: { fontSize: "20px" } }),
                onChange: j
              }
            ),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ h(
          ie,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: d.status,
            ...B,
            children: [
              R ? R.filter((u) => W ? z(k(u)) : !0).map((u) => /* @__PURE__ */ e(
                Xe,
                {
                  value: k(u),
                  control: /* @__PURE__ */ e(
                    _e,
                    {
                      icon: /* @__PURE__ */ e($e, { style: { fontSize: "20px" } }),
                      checkedIcon: /* @__PURE__ */ e(Je, { style: { fontSize: "20px" } }),
                      ...K,
                      checked: z(k(u)),
                      disabled: t.readonly
                    }
                  ),
                  label: M(u)
                },
                k(u)
              )) : /* @__PURE__ */ e("div", { children: "No options provided" }),
              /* @__PURE__ */ e(Ee, { className: "form-error-text", children: d.message })
            ]
          }
        )
      ]
    }
  ) });
}), $t = Et(100), Jt = U(function(t, c) {
  const i = ce(me), a = c || $(null), s = $(null), y = $(0), [f, b] = N([]), [g, C] = N(""), [d, S] = N(!1), v = i(t, "serverlookup", a), V = t.store || v.store, P = t.lookupOptions || {}, D = P.idAttribute || "id", R = P.displayAttribute || "name", I = R, L = t.defaultParams, T = {
    store: V,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: t.pageSize || 15,
    quickSearch: I,
    initialFetch: !1,
    defaultParams: L
  }, Q = ae(T), W = v.eventListeners, k = v.error, { mutateOptions: M, setMutateOptions: B } = v, A = v.data, K = d && f.length < (A ? 2 : 1), { setQueryFilter: z, setEndPointOptions: j, setQuickSearch: u, totalRecords: l, refreshData: w } = Q, E = Q.data, q = de(D) ? (o) => ue(D, o) : (o) => o == null ? void 0 : o[D], X = de(R) ? (o) => ue(R, o) : (o) => o == null ? void 0 : o[R];
  ee(() => {
    var o = A != "" ? A : void 0;
    o && b([o]);
  }, [v.data]), ee(() => {
    const o = E ? [...E] : [], O = A != "" ? A : void 0, J = q(O), le = X(O);
    o && J && le && !G(o, J) && o.unshift(O), b(o), y.current < l && (y.current = l);
  }, [E, l]), ee(() => {
    at(Y);
  }, [g]), ee(() => {
    $t(Y);
  }, [d]);
  function Y() {
    d && (g.length > 0 && g != X(A) ? u("*" + g + "*") : E ? u(null) : w());
  }
  var x = {
    onBlur: W.onBlur,
    onFocus: W.onFocus,
    onChange: (o, O) => {
      n(O);
    },
    onInputChange: (o, O) => (C(O), !0)
  };
  const n = (o) => {
    W.onValueChange(o);
  }, m = (o) => typeof o == "object" ? X(o) + "" : (console.log(o), "");
  function G(o, O) {
    return o.find((J) => {
      if (q(J) == O)
        return J;
    });
  }
  re(a, () => ({
    focus() {
      s.current.focus();
    },
    isValid() {
      return !k.status;
    },
    clear() {
      t.multiple ? v.setData([], !0) : v.setData(void 0, !0);
    },
    getValue() {
      return v.getData();
    },
    setValue(o, O = !1) {
      v.setData(o, O);
    },
    setVisible(o) {
      B((O) => ({ ...O, visible: o }));
    },
    setRequired(o) {
      B((O) => ({ ...O, required: o }));
    },
    setReadOnly(o) {
      B((O) => ({ ...O, readonly: o }));
    },
    setAttribute(o) {
      B((O) => ({ ...O, ...o }));
    },
    setFilter(o) {
      z(o);
    },
    resetFilter() {
      z({});
    },
    setEndPointOptions(o) {
      j(o);
    },
    getCurrentData: () => A,
    refresh: () => {
      w();
    },
    addFilter(o, O) {
      z((J) => (J[o] = O, { ...J }));
    },
    setDefaultFilter(o) {
    },
    setSortOptions(o) {
    }
  }), [v, z]);
  var te = Ke(t, A, t.label);
  M.readonly && (te.inputProps = { readOnly: !0 });
  const se = (o, O) => o instanceof Array ? o.some((J) => q(J) == q(O)) : q(o) == q(O);
  return /* @__PURE__ */ e(
    Ie,
    {
      label: je(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ h(ie, { fullWidth: !0, error: k.status, children: [
        /* @__PURE__ */ e(
          ot,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: t.multiple,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            isOptionEqualToValue: se,
            filterOptions: (o) => o,
            renderInput: (o) => /* @__PURE__ */ e(
              he,
              {
                ...o,
                inputRef: (O) => {
                  s.current = O;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                InputProps: {
                  ...o.InputProps,
                  endAdornment: /* @__PURE__ */ h(oe, { children: [
                    K ? /* @__PURE__ */ e(it, { color: "inherit", size: 18 }) : null,
                    o.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: m,
            ...te,
            options: f,
            open: d,
            onClose: () => {
              S(!1);
            },
            onOpen: (o) => {
              S(!0);
            },
            ...x
          }
        ),
        /* @__PURE__ */ e(Ee, { className: "form-error-text", children: k.message })
      ] })
    }
  );
}), Ut = U(function(t, c) {
  const i = ce(me), a = c || $(null), s = $(null), y = $(0), [f, b] = N([]), [g, C] = N(""), [d, S] = N(!1), v = i(t, "autoComplete", a), V = t.store || v.store, D = (t.lookupOptions || {}).attribute || "name", R = D, I = {
    store: V,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: R,
    initialFetch: !1
  }, L = ae(I), T = v.eventListeners, Q = v.error, { mutateOptions: W, setMutateOptions: k } = v, M = v.data, B = d && f.length < (M ? 2 : 1), { setQueryFilter: A, setEndPointOptions: K, setQuickSearch: z, totalRecords: j, refreshData: u } = L, l = L.data, w = de(D) ? (n) => ue(D, n) : (n) => n == null ? void 0 : n[D];
  ee(() => {
    var n = M != "" ? M : void 0;
    n && b([n]);
  }, [v.data]), ee(() => {
    const m = (l ? [...l] : []).map((te) => w(te)), G = M != "" ? M : void 0;
    m && G && !Y(m, G) && m.unshift(G), b(m), y.current < j && (y.current = j);
  }, [l, j]), ee(() => {
    at(E);
  }, [g, d]);
  function E() {
    d && (g.length > 0 && g != M ? z("*" + g + "*") : l ? z(null) : u());
  }
  var q = {
    onBlur: (n) => {
      X(g), T.onBlur(g);
    },
    onFocus: T.onFocus,
    onChange: (n, m) => {
      X(m);
    },
    onInputChange: (n, m) => (C(m), !0)
  };
  const X = (n) => {
    T.onValueChange(n);
  };
  function Y(n, m) {
    return n.find((G) => {
      if (G == m)
        return G;
    });
  }
  re(a, () => ({
    focus() {
      s.current.focus();
    },
    isValid() {
      return !Q.status;
    },
    clear() {
      v.setData(void 0, !0);
    },
    getValue() {
      return v.getData();
    },
    setValue(n, m = !1) {
      v.setData(n, m);
    },
    setVisible(n) {
      k((m) => ({ ...m, visible: n }));
    },
    setRequired(n) {
      k((m) => ({ ...m, required: n }));
    },
    setReadOnly(n) {
      k((m) => ({ ...m, readonly: n }));
    },
    setAttribute(n) {
      k((m) => ({ ...m, ...n }));
    },
    setFilter(n) {
      A(n);
    },
    resetFilter() {
      A({});
    },
    setEndPointOptions(n) {
      K(n);
    },
    getCurrentData: () => M,
    refresh: () => {
      u();
    },
    addFilter(n, m) {
      A((G) => (G[n] = m, { ...G }));
    },
    setDefaultFilter(n) {
    },
    setSortOptions(n) {
    }
  }), [v, A]);
  var x = Ke(t, M, t.label);
  return W.readonly && (x.inputProps = { readOnly: !0 }), /* @__PURE__ */ e(
    Ie,
    {
      label: je(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ h(ie, { fullWidth: !0, error: Q.status, children: [
        /* @__PURE__ */ e(
          ot,
          {
            freeSolo: !0,
            autoSelect: !0,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            filterOptions: (n) => n,
            renderInput: (n) => /* @__PURE__ */ e(
              he,
              {
                ...n,
                inputRef: (m) => {
                  s.current = m;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                ...x,
                InputProps: {
                  ...n.InputProps,
                  endAdornment: /* @__PURE__ */ h(oe, { children: [
                    B ? /* @__PURE__ */ e(it, { color: "inherit", size: 18 }) : null,
                    n.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...x,
            options: f,
            open: d,
            onClose: () => {
              S(!1);
            },
            onOpen: (n) => {
              S(!0);
            },
            ...q
          }
        ),
        /* @__PURE__ */ e(Ee, { className: "form-error-text", children: Q.message })
      ] })
    }
  );
}), Yt = (r) => {
  const { fieldDef: t } = r;
  return /* @__PURE__ */ h("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, H = (r, t) => {
  const c = r.fieldDef;
  return /* @__PURE__ */ e(
    t,
    {
      ...c,
      label: r.title
    },
    c.title + c.attribute
  );
}, gt = (r, t, c) => {
  const { type: i } = r, a = { fieldDef: r, title: c };
  switch (i) {
    case "string":
      return H(a, St);
    case "radio":
      return H(a, Ft);
    case "select":
      return H(a, We);
    case "date":
      return H(a, Ct);
    case "datetime":
      return H(a, xt);
    case "checkbox":
      return H(a, wt);
    case "serverlookup":
      return H(a, Jt);
    case "textarea":
      return H(a, Ot);
    case "switch":
      return H(a, Rt);
    case "iosswitch":
      return H(a, Nt);
    case "password":
      return H(a, kt);
    case "float":
    case "number":
    case "numbersOnly":
      return H(a, Pt);
    case "integer":
      return H(a, Dt);
    case "multiSelect":
      return H(a, We);
    case "dateRange":
      return H(a, zt);
    case "autoComplete":
      return H(a, Ut);
    default:
      return Yt(a);
  }
}, Zt = U(function(t, c) {
  var C;
  const { formLayout: i, context: a } = t, { formData: s } = a, y = i.Container;
  $({});
  const f = rt(() => (d) => gt(d), [s.data]);
  var b = ((C = i.options) == null ? void 0 : C.columns) || 1, g = { columns: b };
  return y ? /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: i.fields.map((d, S) => /* @__PURE__ */ e(
    y,
    {
      index: S,
      field: d,
      label: d.title,
      options: g,
      children: f(d)
    },
    d.attribute + d.name + d.type
  )) }) : /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: i.fields.map((d, S) => f(d)) });
}), pt = (r) => {
  const { layout: t, context: c } = r;
  var i = t.Renderer || Zt, a = t.Container || st;
  const s = (y) => /* @__PURE__ */ e(
    i,
    {
      context: c,
      formLayout: y
    }
  );
  return /* @__PURE__ */ e(
    a,
    {
      hideTitle: t.hideTitle,
      title: t.title,
      name: t.name,
      children: /* @__PURE__ */ e(qt, { columns: t.columns, children: s(t.formLayout) })
    }
  );
};
const en = (r) => {
  const { formLayout: t } = r;
  var c = "palmyra-form-field-container";
  const i = t.options;
  if (i && i.columns)
    switch (i.columns) {
      case 2:
        return c + " palmyra-form-field-container-2column";
      case 3:
        return c + " palmyra-form-field-container-3column";
      case 4:
        return c + " palmyra-form-field-container-4column";
    }
  return c;
}, tn = U(function(t, c) {
  const { formLayout: i, context: a } = t, { formData: s } = a, y = $({}), f = en(t), b = "palmyra-form-field-data", g = rt(() => (C) => gt(C, y, C.label), [s.data]);
  return /* @__PURE__ */ e("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: i.fields.map((C, d) => /* @__PURE__ */ e("div", { className: C.type === "dateRange" ? "palmyra-form-field-container" : f, children: /* @__PURE__ */ e("div", { className: b, children: g(C) }) }, C.attribute)) });
}), yt = ({ columns: r, isOpen: t, onClose: c, setFilter: i, defaultFilter: a = {} }) => {
  const s = {};
  Object.keys(a || {}).map((d) => {
    const S = a[d];
    Qt(d, s, S);
  });
  var { getFieldManager: y, getFilterData: f } = Kt(s);
  const b = () => {
    i({});
  }, g = () => {
    var d = f();
    i && i(d);
  }, C = Gt(r);
  return /* @__PURE__ */ h("div", { className: "grid-filter-container", children: [
    /* @__PURE__ */ e("div", { className: "grid-filter-content", children: /* @__PURE__ */ e(me.Provider, { value: y, children: /* @__PURE__ */ e(
      pt,
      {
        context: { formData: {} },
        layout: {
          type: "form",
          formLayout: {
            fields: C,
            options: {
              columns: 2
            }
          },
          Renderer: tn
        }
      }
    ) }) }),
    /* @__PURE__ */ h("div", { className: "grid-filter-btn-container", children: [
      /* @__PURE__ */ h(ne, { className: "secondary-filled-button", disableRipple: !0, onClick: b, children: [
        /* @__PURE__ */ e(Vt, { className: "button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ h(ne, { className: "filled-button", disableRipple: !0, onClick: g, children: [
        /* @__PURE__ */ e(He, { className: "button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
}, nn = U(function(t, c) {
  const { columns: i, children: a, EmptyChild: s, onRowClick: y, quickSearch: f, exportOptions: b, densityOption: g } = t, C = s || ct, d = t.customizer || mt, S = t.customButton, [v, V] = N(!1), [P, D] = N(!1), [R, I] = N(!1), [L, T] = N("standard"), [Q, W] = N(!1), [k, M] = N(""), {
    setQueryFilter: B,
    setQuickSearch: A,
    setSortColumns: K,
    setEndPointOptions: z,
    gotoPage: j,
    setPageSize: u,
    getPageNo: l,
    refreshData: w,
    setQueryLimit: E,
    getQueryLimit: q,
    getQueryRequest: X,
    data: Y,
    totalRecords: x,
    queryLimit: n,
    pageSizeOptions: m,
    filter: G
  } = ae(t), te = c || $(null);
  re(te, () => ({
    setFilter: (p) => {
      B(p);
    },
    refresh: () => {
      w();
    },
    resetFilter() {
      B({});
    },
    setEndPointOptions: (p) => {
      z(p);
    },
    addFilter: (p, Z) => {
      B((ge) => (ge[p] = Z, { ...ge }));
    },
    setQueryLimit: (p) => {
      E(p);
    },
    getQueryLimit: () => q(),
    setSortOptions(p) {
      K(p);
    },
    getCurrentData: () => Y
  }), [q]);
  const se = (p, Z) => {
    j(Z - 1);
  }, o = lt(i, d), O = (p) => {
    T(p);
  }, J = () => {
    V(!v);
  }, le = () => L === "compact" ? {
    padding: "3px",
    borderRight: "0.55px solid var(--border-color)",
    borderBottom: "0.55px solid var(--border-color)"
  } : L === "comfortable" ? {
    padding: "15px",
    fontSize: "18px",
    borderRight: "0.55px solid var(--border-color)",
    borderBottom: "0.55px solid var(--border-color)"
  } : {
    padding: "7px",
    borderRight: "0.55px solid var(--border-color)",
    borderBottom: "0.55px solid var(--border-color)"
  }, be = () => L === "compact" ? { padding: "3px", borderRight: "1px solid var(--border-color)" } : L === "comfortable" ? { padding: "15px", fontSize: "18px", borderRight: "1px solid var(--border-color)" } : { padding: "7px", borderRight: "1px solid var(--border-color)" }, Ce = () => {
    var p;
    switch (L) {
      case "compact":
        p = /* @__PURE__ */ e(ye, { className: "density-icon" });
        break;
      case "comfortable":
        p = /* @__PURE__ */ e(ve, { className: "density-icon" });
        break;
      default:
        p = /* @__PURE__ */ e(pe, { className: "grid-button-icon" });
        break;
    }
    return p;
  }, xe = (p) => {
    const Z = p.target.value;
    M(Z), Z ? A(Z) : B({});
  }, Fe = (p) => {
    y && y(p);
  }, Oe = (p) => {
    const Z = parseInt(p.target.value, 10);
    u(Z);
  }, Se = (p) => {
    D(!P);
  }, we = () => {
    I(!R);
  }, Re = () => {
    I(!1);
  }, fe = (p) => {
    const ge = { ...X(), format: p, limit: -1 };
    t.store.export(ge), I(!R);
  }, Ne = () => {
    t.onNewClick();
  }, ke = 200, Pe = !!t.pageSize, De = !!f, Ae = {
    transform: v ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Le = {
    transform: P ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, F = {
    transform: R ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, _ = Math.ceil(x / n.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { children: [
    a,
    /* @__PURE__ */ h("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: tt(t.title) }),
      /* @__PURE__ */ h("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: De && /* @__PURE__ */ e(
          he,
          {
            sx: { width: ke },
            type: "text",
            value: k,
            onChange: xe,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Te, { position: "end", children: /* @__PURE__ */ e(Ve, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        g && /* @__PURE__ */ e(Me, { onClickAway: () => {
          V(!1);
        }, children: /* @__PURE__ */ h("div", { className: "grid-header-button grid-density-btn", onClick: J, children: [
          /* @__PURE__ */ h(ne, { className: "grid-btn", disableRipple: !0, children: [
            Ce(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(Be, { style: Ae, className: "avathar-arrw-icon" })
          ] }),
          v && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ h("ul", { children: [
            /* @__PURE__ */ h("li", { onClick: () => O("standard"), children: [
              /* @__PURE__ */ e(pe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => O("compact"), children: [
              /* @__PURE__ */ e(ye, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => O("comfortable"), children: [
              /* @__PURE__ */ e(ve, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        i.some((p) => p.searchable) && /* @__PURE__ */ e(Me, { onClickAway: () => {
          D(!1);
        }, children: /* @__PURE__ */ h("div", { className: "grid-header-button grid-filter-btn", onClick: Se, children: [
          /* @__PURE__ */ h(ne, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(He, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" }),
            /* @__PURE__ */ e(Be, { style: Le, className: "avathar-arrw-icon" })
          ] }),
          P && /* @__PURE__ */ e("div", { className: "filter-dropdown-content", onClick: (p) => p.stopPropagation(), children: /* @__PURE__ */ e(
            yt,
            {
              columns: i,
              setFilter: B,
              defaultFilter: G,
              isOpen: Q,
              onClose: () => W(!1)
            }
          ) })
        ] }) }),
        b && /* @__PURE__ */ e(
          ht,
          {
            dropdownOpen: R,
            dropdownClose: Re,
            onExportClick: we,
            arrowStyle: F,
            exportOption: b,
            exportData: fe
          }
        ),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: /* @__PURE__ */ e("div", { onClick: Ne, children: /* @__PURE__ */ h(ne, { className: "grid-btn", disableRipple: !0, children: [
          t.customAddButton && t.customAddButton.icon ? At.cloneElement(t.customAddButton.icon, {
            className: "grid-button-icon"
          }) : /* @__PURE__ */ e(ut, { className: "grid-button-icon" }),
          t.customAddButton && t.customAddButton.text ? /* @__PURE__ */ e(oe, { children: t.customAddButton.text }) : /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(oe, {}),
        S && S.map((p, Z) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: p }, Z))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      dt,
      {
        columnDefs: o,
        EmptyChild: C,
        customizer: d,
        rowData: Y,
        onRowClick: Fe,
        onRowStyle: le,
        onHeaderStyle: be,
        onSortColumn: K
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: Pe && _ !== 0 && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: m && m.length > 1 ? /* @__PURE__ */ e(ie, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          ze,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: m[0],
            onChange: Oe,
            label: "Rows per page",
            children: m.map((p) => /* @__PURE__ */ e(qe, { value: p, children: p }, p))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("span", { children: [
          "of ",
          x,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        Ge,
        {
          count: _,
          shape: "rounded",
          onChange: se,
          page: l() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), Fr = U(function(t, c) {
  const { children: i, EmptyChild: a, onRowClick: s, quickSearch: y, exportOptions: f } = t, b = t.columns, g = a || ct, C = t.customizer || mt, d = t.customButton, S = t.title, [v, V] = N(!1), [P, D] = N(!1), [R, I] = N("standard"), [L, T] = N(!1), [Q, W] = N(""), {
    setQueryFilter: k,
    setQuickSearch: M,
    setSortColumns: B,
    setEndPointOptions: A,
    gotoPage: K,
    setPageSize: z,
    getPageNo: j,
    refreshData: u,
    setQueryLimit: l,
    getQueryLimit: w,
    getQueryRequest: E,
    data: q,
    totalRecords: X,
    queryLimit: Y,
    pageSizeOptions: x,
    filter: n
  } = ae(t), [m, G] = N(b(q)), te = c || $(null);
  re(te, () => ({
    setFilter: (F) => {
      k(F);
    },
    refresh: () => {
      u();
    },
    resetFilter() {
      k({});
    },
    setEndPointOptions: (F) => {
      A(F);
    },
    addFilter: (F, _) => {
      k((p) => (p[F] = _, { ...p }));
    },
    setQueryLimit: (F) => {
      l(F);
    },
    getQueryLimit: () => w(),
    setSortOptions(F) {
      B(F);
    },
    getCurrentData: () => q
  }), [w, m]), ee(() => {
    G(b(q));
  }, [q]);
  const se = (F, _) => {
    K(_ - 1);
  }, o = lt(m, C), O = (F) => {
    I(F);
  }, J = () => {
    V(!v);
  }, le = () => R === "compact" ? {
    padding: "3px",
    borderRight: "0.55px solid var(--border-color)",
    borderBottom: "0.55px solid var(--border-color)"
  } : R === "comfortable" ? {
    padding: "15px",
    fontSize: "18px",
    borderRight: "0.55px solid var(--border-color)",
    borderBottom: "0.55px solid var(--border-color)"
  } : {
    padding: "7px",
    borderRight: "0.55px solid var(--border-color)",
    borderBottom: "0.55px solid var(--border-color)"
  }, be = () => R === "compact" ? { padding: "3px", borderRight: "1px solid var(--border-color)" } : R === "comfortable" ? { padding: "15px", fontSize: "18px", borderRight: "1px solid var(--border-color)" } : { padding: "7px", borderRight: "1px solid var(--border-color)" }, Ce = () => {
    var F;
    switch (R) {
      case "compact":
        F = /* @__PURE__ */ e(ye, { className: "density-icon" });
        break;
      case "comfortable":
        F = /* @__PURE__ */ e(ve, { className: "density-icon" });
        break;
      default:
        F = /* @__PURE__ */ e(pe, { className: "grid-button-icon" });
        break;
    }
    return F;
  }, xe = (F) => {
    const _ = F.target.value;
    W(_), _ ? M(_) : k({});
  }, Fe = (F) => {
    s && s(F);
  }, Oe = (F) => {
    const _ = parseInt(F.target.value, 10);
    z(_);
  }, Se = () => {
    D(!P);
  }, we = () => {
    D(!1);
  }, Re = (F) => {
    const p = { ...E(), format: F, limit: -1 };
    t.store.export(p), D(!P);
  }, fe = () => {
    t.onNewClick();
  }, Ne = 200, ke = !!t.pageSize, Pe = !!y, De = {
    transform: v ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Ae = {
    transform: P ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Le = Math.ceil(X / Y.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { children: [
    i,
    /* @__PURE__ */ h("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: /* @__PURE__ */ e("span", { className: "grid-header-right-content-text", children: S }) }),
      /* @__PURE__ */ h("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: Pe && /* @__PURE__ */ e(
          he,
          {
            sx: { width: Ne },
            type: "text",
            value: Q,
            onChange: xe,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Te, { position: "end", children: /* @__PURE__ */ e(Ve, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(Me, { onClickAway: () => {
          V(!1);
        }, children: /* @__PURE__ */ h("div", { className: "grid-header-button grid-density-btn", onClick: J, children: [
          /* @__PURE__ */ h(ne, { className: "grid-btn", disableRipple: !0, children: [
            Ce(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(Be, { style: De, className: "avathar-arrw-icon" })
          ] }),
          v && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ h("ul", { children: [
            /* @__PURE__ */ h("li", { onClick: () => O("standard"), children: [
              /* @__PURE__ */ e(pe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => O("compact"), children: [
              /* @__PURE__ */ e(ye, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => O("comfortable"), children: [
              /* @__PURE__ */ e(ve, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        m.some((F) => F.searchable) && /* @__PURE__ */ h("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ h(ne, { className: "grid-btn", disableRipple: !0, onClick: () => T(!0), children: [
            /* @__PURE__ */ e(He, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ e(
            yt,
            {
              columns: m,
              setFilter: k,
              defaultFilter: n,
              isOpen: L,
              onClose: () => T(!1)
            }
          )
        ] }),
        f && /* @__PURE__ */ e(
          ht,
          {
            dropdownOpen: P,
            dropdownClose: we,
            onExportClick: Se,
            arrowStyle: Ae,
            exportOption: f,
            exportData: Re
          }
        ),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: t.customAddButton ? /* @__PURE__ */ e("div", { onClick: fe, children: t.customAddButton }) : /* @__PURE__ */ e("div", { onClick: fe, children: /* @__PURE__ */ h(ne, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ e(ut, { className: "grid-button-icon" }),
          /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(oe, {}),
        d && d.map((F, _) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: F }, _))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      dt,
      {
        columnDefs: o,
        EmptyChild: g,
        customizer: C,
        rowData: q,
        onRowClick: Fe,
        onRowStyle: le,
        onHeaderStyle: be,
        onSortColumn: B
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: ke && X !== null && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: x && x.length > 1 ? /* @__PURE__ */ e(ie, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          ze,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: x[0],
            onChange: Oe,
            label: "Rows per page",
            children: x.map((F) => /* @__PURE__ */ e(qe, { value: F, children: F }, F))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("span", { children: [
          "of ",
          X,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        Ge,
        {
          count: Le,
          shape: "rounded",
          onChange: se,
          page: j() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), Or = U(function(t, c) {
  const { columns: i, endPoint: a, storeFactory: s, layoutParams: y, pagination: f } = t, b = t.quickSearch || "", g = t.customButton, C = t.customAddButton, d = t.title, S = t.fetchAll, v = t.filterTopic, V = t.initialFetch, P = (R, I) => {
  };
  ee(() => {
    var R = Ue.subscribe(t.topic, P);
    return () => {
      Ue.unsubscribe(R);
    };
  }, [t.topic]);
  const D = {
    fields: i,
    pagination: f,
    quickSearch: b,
    storeOptions: {
      endPoint: a
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ e(oe, { children: /* @__PURE__ */ e(Qe.Provider, { value: s, children: /* @__PURE__ */ e(
    vt,
    {
      layout: D,
      context: y,
      customAddButton: C,
      onDataChange: t.onDataChange,
      title: d,
      densityOption: t.densityOption,
      defaultParams: t.defaultParams,
      customButton: g,
      customizer: t.customizer,
      ref: c,
      exportOptions: t.exportOptions,
      fetchAll: S,
      filterTopic: v,
      initialFetch: V
    }
  ) }) });
}), rn = U(function(t, c) {
  const i = t.layout, [a, s] = N(i.fields), y = i.pagination ? i.pagination : [15], f = ce(Qe), b = ce(nt);
  var g = i.storeOptions || {}, C = {};
  Tt(C, g, b);
  const d = f.getGridStore(C, i.storeOptions.endPoint);
  ee(() => {
    g.hasLayout && d.queryLayout({}).then((V) => {
      s(V.columns);
    });
  }, []);
  const { onClick: S, onNewClick: v } = jt(i.actionOptions, b);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    nn,
    {
      columns: a,
      store: d,
      pageSize: y,
      onRowClick: S,
      exportOptions: t.exportOptions,
      onDataChange: t.onDataChange,
      title: t.title,
      customAddButton: t.customAddButton,
      onNewClick: v,
      customizer: t.customizer,
      customButton: t.customButton,
      quickSearch: i.quickSearch,
      ref: c,
      defaultParams: t.defaultParams,
      densityOption: t.densityOption,
      fetchAll: t.fetchAll,
      filterTopic: t.filterTopic,
      initialFetch: t.initialFetch
    }
  ) });
}), vt = rn, on = (r) => {
  const { layout: t, context: c } = r;
  var i = t.Container || st;
  return /* @__PURE__ */ e(ft, { fallback: /* @__PURE__ */ e("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ e(i, { ...t, children: ((s) => /* @__PURE__ */ e(
    vt,
    {
      context: c,
      layout: s
    }
  ))(t.tableLayout) }) });
}, an = (r) => {
  const { layout: t } = r;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ e(pt, { ...r });
    case "view":
      return /* @__PURE__ */ e(Wt, { ...r });
    case "grid":
      return /* @__PURE__ */ e(on, { ...r });
    case "chart":
      return /* @__PURE__ */ e(It, { ...r });
    default:
      return /* @__PURE__ */ e(Ht, { ...r });
  }
};
function sn(r, t) {
  var c = r || 1, i = t;
  return {
    w: c,
    h: i
  };
}
const bt = (r) => {
  const { layout: t, context: c } = r, i = t.sections;
  function a(s, y, f) {
    const { w: b, h: g } = sn(s.width, s.height);
    return /* @__PURE__ */ e(Lt, { sx: { width: b, height: g }, children: /* @__PURE__ */ e(
      an,
      {
        layout: s,
        context: y
      }
    ) }, (s.name || "tab") + f);
  }
  return /* @__PURE__ */ e("div", { style: { display: "flex", flexWrap: "wrap" }, children: i.map((s, y) => a(s, c, y)) });
}, Ze = U(function(t, c) {
  const { layout: i } = t;
  re(c, () => ({
    resetFilter() {
    }
  }), []);
  const a = {}, s = i.tabs;
  return /* @__PURE__ */ e("div", { children: s.map((y, f) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    bt,
    {
      layout: y,
      context: a
    }
  ) }, y.name + f)) });
}), ln = (r) => {
  switch (r) {
    case "formEdit":
      return "edit";
    case "formNew":
      return "new";
    case "formView":
      return "view";
    default:
      return "edit";
  }
}, et = U(function(t, c) {
  var C;
  const i = t.data || {}, { layout: a } = t;
  var { getFieldManager: s, getFormData: y, isFormValid: f } = Xt(i, (C = t.callbacks) == null ? void 0 : C.onFormValidChange, ln(t.mode));
  re(c, () => ({
    getData() {
      return y();
    },
    isValid() {
      return f();
    }
  }), []);
  const b = { formData: i }, g = a.tabs;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(me.Provider, { value: s, children: g.map((d, S) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    bt,
    {
      layout: d,
      context: b
    }
  ) }, d.name + S)) }) });
}), cn = (r) => {
  switch (r) {
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
}, Sr = U(function(t, c) {
  const [i, a] = N(t.layout), s = t.mode ? t.mode : i.type ? i.type : "grid", y = t.layoutParams || {}, f = cn(s), b = $(0);
  return ee(() => {
    a(t.layout), b.current < 999999 ? b.current++ : b.current = 0;
  }, [t.layout]), /* @__PURE__ */ e(ft, { fallback: /* @__PURE__ */ e("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ e(Qe.Provider, { value: t.storeFactory, children: /* @__PURE__ */ e(nt.Provider, { value: y, children: /* @__PURE__ */ e(f, { ...t, ref: (g) => {
    c && (c.current = g);
  } }, b.current) }) }) });
}), wr = U(function(t, c) {
  const { title: i, Child: a, childProps: s, pageSize: y, customButton: f } = t, b = c || $(null), {
    setQueryFilter: g,
    refreshData: C,
    setSortColumns: d,
    setEndPointOptions: S,
    setQuickSearch: v,
    gotoPage: V,
    setPageSize: P,
    getPageNo: D,
    setQueryLimit: R,
    getQueryLimit: I,
    data: L,
    totalRecords: T,
    pageSizeOptions: Q,
    queryLimit: W
  } = ae(t), k = t.listKeyProvider || ((l, w) => w);
  re(b, () => ({
    setFilter: (l) => {
      g(l);
    },
    refresh: () => {
      C();
    },
    resetFilter() {
      g({});
    },
    setEndPointOptions: (l) => {
      S(l);
    },
    addFilter: (l, w) => {
      g((E) => (E[l] = w, { ...E }));
    },
    setQueryLimit: (l) => {
      R(l);
    },
    getQueryLimit: () => I(),
    getCurrentData: () => L,
    setSortOptions(l) {
      d(l);
    }
  }), [g]);
  const M = (l, w) => {
    V(w - 1);
  }, B = (l) => {
    const w = l.target.value;
    v(w);
  }, A = (l) => {
    const w = parseInt(l.target.value, 10);
    P(w);
  }, K = 200, z = !!y, j = !!t.quickSearch, u = Math.ceil(T / W.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "card-page-container", children: /* @__PURE__ */ h("div", { children: [
    /* @__PURE__ */ h("div", { className: "card-header", children: [
      /* @__PURE__ */ e("div", { className: "card-left-content", children: tt(i) }),
      /* @__PURE__ */ h("div", { className: "card-right-content", children: [
        j && /* @__PURE__ */ e(
          he,
          {
            sx: { width: K },
            type: "text",
            onChange: B,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Te, { position: "end", children: /* @__PURE__ */ e(Ve, { className: "card-filter-icon" }) })
            }
          }
        ),
        f && f.map((l, w) => /* @__PURE__ */ e("div", { className: "card-custom-button", children: l }, w))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      Bt,
      {
        Child: a,
        childKeyProvider: k,
        preProcess: t.preProcess,
        dataList: L,
        childProps: s,
        EmptyChild: t.EmptyChild
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "card-pagination", children: z && u !== 0 && // <TablePagination
    //     component="div"
    //     count={totalRecords || 0}
    //     page={getPageNo()}
    //     onPageChange={nextPage}
    //     rowsPerPage={queryLimit.limit}
    //     rowsPerPageOptions={pageSizeOptions || []}
    //     onRowsPerPageChange={handleRowsPerPageChange}
    // />
    /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { children: Q && Q.length > 1 ? /* @__PURE__ */ e(ie, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          ze,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: Q[0],
            onChange: A,
            label: "Rows per page",
            children: Q.map((l) => /* @__PURE__ */ e(qe, { value: l, children: l }, l))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("span", { children: [
          "of ",
          T,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(Mt, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ e(
        Ge,
        {
          count: u,
          shape: "rounded",
          onChange: M,
          page: D() + 1
        }
      ) }) })
    ] }) })
  ] }) }) });
});
export {
  Fr as D,
  Sr as F,
  vt as G,
  Jt as M,
  Or as P,
  wr as S,
  bt as T,
  nn as a,
  xr as b,
  Ut as c,
  Zt as d,
  pt as e,
  tn as f,
  gt as g,
  yt as h,
  on as i,
  an as j,
  Ze as k,
  et as l,
  ae as u
};
