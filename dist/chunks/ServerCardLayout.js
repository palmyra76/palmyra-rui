import "../assets/ServerCardLayout.css";
import Ft from "../palmyra/mui/form/MuiDatePicker.js";
import Nt from "../palmyra/mui/form/MuiDateTimePicker.js";
import wt from "../palmyra/mui/form/MuiRadioGroup.js";
import Ke from "../palmyra/mui/form/MuiSelect.js";
import St from "../palmyra/mui/form/MuiTextArea.js";
import kt from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import Ot from "../palmyra/mui/form/MuiCheckBox.js";
import Pt from "../palmyra/mui/form/MuiSwitch.js";
import Rt from "../palmyra/mui/form/MuiIOSSwitch.js";
import Dt from "../palmyra/mui/form/MuiPassword.js";
import At from "../palmyra/mui/form/MuiNumberField.js";
import Lt from "../palmyra/mui/form/MuiIntegerField.js";
import Le from "../palmyra/mui/form/FieldDecorator.js";
import { FieldManagerContext as he, StoreFactoryContext as Me, LayoutParamsContext as Ye } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as e, jsxs as a, Fragment as ne } from "react/jsx-runtime";
import Mt, { useState as R, useRef as X, useEffect as Y, forwardRef as U, useContext as de, useImperativeHandle as re, useMemo as et } from "react";
import { a as Te } from "./index.esm2.js";
import { FormControlLabel as Ze, Checkbox as je, FormControl as oe, FormHelperText as Ee, Autocomplete as tt, TextField as fe, CircularProgress as nt, Button as te, InputAdornment as Ve, ClickAwayListener as le, Select as Ie, MenuItem as Be, Pagination as Qe, Box as Tt, Stack as Et } from "@mui/material";
import Vt from "../palmyra/layout/card/CardLayout.js";
import { S as rt, B as it } from "./SectionContainer.js";
import It from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as ze, getFieldLabel as qe } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as ue } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as me } from "../palmyra/form/FormUtil.js";
import { T as We, a as Xe, b as Bt, c as Ge, d as ot } from "./index.esm.js";
import { delay as at, delayGenerator as Qt, mergeDeep as zt } from "../palmyra/utils/index.js";
import qt from "../palmyra/mui/form/MuiDateRangePicker.js";
import Gt from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as st } from "../palmyra/grid/base/ColumnConverter.js";
import lt from "../palmyra/grid/base/EmptyChildTable.js";
import ct from "../palmyra/grid/base/TableX.js";
import { KeyboardArrowDown as ce, Menu as ye, DensitySmall as pe, DensityLarge as ve, Add as dt } from "@mui/icons-material";
import { NoopCustomizer as ut } from "../palmyra/grid/Types.js";
import { convertToField as Ht } from "../palmyra/grid/base/GridFieldConverter.js";
import { createFilterData as Kt } from "../palmyra/form/PalmyraFilterManager.js";
import { G as mt } from "./iconBase.js";
import { InfoTooltip as ht } from "../palmyra/tooltip/InfoTooltip.js";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import { topic as _e } from "../palmyra/utils/pubsub/topic.js";
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
import { getActionPublishers as Zt } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as ft } from "../palmyra/layout/ErrorBoundary.js";
import jt from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import Wt from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as Xt } from "./PalmyraFieldManager.js";
import { useKeyValue as _t } from "../palmyra/utils/pubsub/PubSubHelper.js";
const ae = (n) => {
  var J, K;
  const { store: t, quickSearch: c } = n, o = n.fetchAll != !1, [s, l] = R(n.endPointOptions), [g, f] = R(null), C = ((J = n.defaultParams) == null ? void 0 : J.filter) || {}, m = ((K = n.defaultParams) == null ? void 0 : K.sort) || {}, [y, u] = n.filterTopic ? _t(n.filterTopic, C) : R(C), [b, p] = R({}), M = X(n.initialFetch == !1), T = n.pageSize ? n.pageSize : 15;
  var P = T instanceof Array ? T : [T], E = T instanceof Array ? T[0] : T;
  const [A, V] = R({ limit: E, offset: 0, total: !0 }), [I, B] = R(null), L = () => Math.round(A.offset / A.limit), H = () => A, S = (D) => {
    V((k) => ({ limit: k.limit, total: k.total, offset: D * k.limit }));
  }, Q = (D) => {
    const k = D > 10 || D == -1 ? D : 15;
    V((i) => {
      const x = Math.floor(i.offset / k) * k;
      return { limit: k, total: i.total, offset: x };
    });
  }, G = () => y ? Object.keys(y).length == 0 : !1, z = (D) => {
    B((k) => (setTimeout(() => {
      n.onDataChange && n.onDataChange(I, k);
    }, 300), D));
  };
  Y(() => {
    if (M.current) {
      M.current = !1;
      return;
    }
    (o || !G()) && W();
  }, [A, b, s]);
  const W = () => {
    const k = {
      sortOrder: b && Object.keys(b).length > 0 ? b : m,
      total: !0,
      endPointVars: s,
      ...A,
      filter: { ...y, ...C }
    };
    if (t)
      try {
        t.query(k).then((i) => {
          z(i.result), f(i.total);
        }).catch((i) => {
          var x = i.response ? i.response : i;
          console.error("error while fetching", x), w();
        });
      } catch (i) {
        console.error(i), d();
      }
    else
      console.error("Store is not provided for the Grid"), d();
  }, d = () => {
    z([]), f(0);
  }, w = () => {
    z(void 0), f(null);
  };
  return {
    setQueryFilter: (D) => {
      typeof D == "function" || D && Object.keys(D).length > 0 ? u(D) : u({}), S(0);
    },
    setQuickSearch: (D) => {
      const k = c;
      u(D ? (i) => (i[k] = D, { ...i }) : (i) => (delete i[k], { ...i })), S(0);
    },
    setSortColumns: (D) => {
      p(D);
    },
    setEndPointOptions: l,
    refreshData: W,
    gotoPage: S,
    setPageSize: Q,
    getPageNo: L,
    getQueryLimit: H,
    setQueryLimit: V,
    filter: y,
    queryLimit: A,
    data: I,
    totalRecords: g,
    pageSizeOptions: P
  };
};
function $e(n) {
  return n ? Array.isArray(n) ? n : typeof n == "string" ? n.split(",") : [n] : [];
}
const br = U(function(t, c) {
  const o = de(he), s = c || X(null), l = o(t, "checkbox", s), { mutateOptions: g, setMutateOptions: f } = l, [C, m] = R(!1), y = $e(l.data), u = l.error, b = l.eventListeners, M = { store: l.store, pageSize: -1 }, { data: T } = ae(M), P = T, E = X(null), A = t.lookupOptions || {}, V = A.idAttribute || "id", I = A.displayAttribute || "name", B = t.showSelectedOnly && t.readonly, L = ue(V) ? (d) => me(V, d) : (d) => d[V], H = ue(I) ? (d) => me(I, d) : (d) => d[I];
  re(s, () => ({
    focus() {
      E.current.focus();
    },
    isValid() {
      return !u.status;
    },
    clear() {
      l.setData("", !0);
    },
    getValue() {
      return l.getData();
    },
    setValue(d, w = !1) {
      l.setData(d, w);
    },
    setVisible(d) {
      f((w) => ({ ...w, visible: d }));
    },
    setRequired(d) {
      f((w) => ({ ...w, required: d }));
    },
    setReadOnly(d) {
      f((w) => ({ ...w, readonly: d }));
    },
    setAttribute(d) {
      f((w) => ({ ...w, ...d }));
    },
    setOptions(d) {
    },
    getOptions() {
    }
  }), [l]);
  var S = ze(t, l.data, t.label);
  t.readonly && (S.inputprops = { readOnly: !0 });
  function Q(d, w) {
    const h = $e(l.data);
    var F = h.indexOf(d);
    w ? F < 0 && h.push(d) : F >= 0 && h.splice(F, 1), b.onValueChange(h.toString());
  }
  var G = {
    onBlur: b.onBlur,
    onFocus: b.onFocus,
    onChange: (d) => {
      Q(d.target.value, d.target.checked);
    }
  };
  const z = (d) => {
    const w = d.toString();
    return y.includes(w);
  }, W = (d) => {
    const w = d.target.checked;
    m(w);
    var h = [];
    w && P.map((F) => {
      h.push(L(F));
    }), b.onValueChange(h.toString());
  };
  return /* @__PURE__ */ e("div", { className: t.className, children: g.visible && /* @__PURE__ */ a(
    Le,
    {
      label: qe(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ e("div", { children: t.hideSelectAll ? /* @__PURE__ */ e(ne, {}) : /* @__PURE__ */ e(
          Ze,
          {
            control: /* @__PURE__ */ e(
              je,
              {
                icon: /* @__PURE__ */ e(We, { style: { fontSize: "20px" } }),
                checkedIcon: /* @__PURE__ */ e(Xe, { style: { fontSize: "20px" } }),
                onChange: W
              }
            ),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ a(
          oe,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: u.status,
            ...S,
            children: [
              P ? P.filter((d) => B ? z(L(d)) : !0).map((d) => /* @__PURE__ */ e(
                Ze,
                {
                  value: L(d),
                  control: /* @__PURE__ */ e(
                    je,
                    {
                      icon: /* @__PURE__ */ e(We, { style: { fontSize: "20px" } }),
                      checkedIcon: /* @__PURE__ */ e(Xe, { style: { fontSize: "20px" } }),
                      ...G,
                      checked: z(L(d)),
                      disabled: t.readonly
                    }
                  ),
                  label: H(d)
                },
                L(d)
              )) : /* @__PURE__ */ e("div", { children: "No options provided" }),
              /* @__PURE__ */ e(Ee, { className: "form-error-text", children: u.message })
            ]
          }
        )
      ]
    }
  ) });
}), $t = Qt(100), Jt = U(function(t, c) {
  const o = de(he), s = c || X(null), l = X(null), g = X(0), [f, C] = R([]), [m, y] = R(""), [u, b] = R(!1), p = o(t, "serverlookup", s), M = t.store || p.store, T = t.lookupOptions || {}, P = T.idAttribute || "id", E = T.displayAttribute || "name", A = E, V = {
    store: M,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: A,
    initialFetch: !1
  }, I = ae(V), B = p.eventListeners, L = p.error, { mutateOptions: H, setMutateOptions: S } = p, Q = p.data, G = u && f.length < (Q ? 2 : 1), { setQueryFilter: z, setEndPointOptions: W, setQuickSearch: d, totalRecords: w, refreshData: h } = I, F = I.data, q = ue(P) ? (r) => me(P, r) : (r) => r == null ? void 0 : r[P], J = ue(E) ? (r) => me(E, r) : (r) => r == null ? void 0 : r[E];
  Y(() => {
    var r = Q != "" ? Q : void 0;
    r && C([r]);
  }, [p.data]), Y(() => {
    const r = F ? [...F] : [], O = Q != "" ? Q : void 0, _ = q(O), se = J(O);
    r && _ && se && !x(r, _) && r.unshift(O), C(r), g.current < w && (g.current = w);
  }, [F, w]), Y(() => {
    at(K);
  }, [m]), Y(() => {
    $t(K);
  }, [u]);
  function K() {
    u && (m.length > 0 && m != J(Q) ? d("*" + m + "*") : F ? d(null) : h());
  }
  var D = {
    onBlur: B.onBlur,
    onFocus: B.onFocus,
    onChange: (r, O) => {
      k(O);
    },
    onInputChange: (r, O) => (y(O), !0)
  };
  const k = (r) => {
    B.onValueChange(r);
  }, i = (r) => typeof r == "object" ? J(r) + "" : (console.log(r), "");
  function x(r, O) {
    return r.find((_) => {
      if (q(_) == O)
        return _;
    });
  }
  re(s, () => ({
    focus() {
      l.current.focus();
    },
    isValid() {
      return !L.status;
    },
    clear() {
      t.multiple ? p.setData([], !0) : p.setData(void 0, !0);
    },
    getValue() {
      return p.getData();
    },
    setValue(r, O = !1) {
      p.setData(r, O);
    },
    setVisible(r) {
      S((O) => ({ ...O, visible: r }));
    },
    setRequired(r) {
      S((O) => ({ ...O, required: r }));
    },
    setReadOnly(r) {
      S((O) => ({ ...O, readonly: r }));
    },
    setAttribute(r) {
      S((O) => ({ ...O, ...r }));
    },
    setFilter(r) {
      z(r);
    },
    resetFilter() {
      z({});
    },
    setEndPointOptions(r) {
      W(r);
    },
    getCurrentData: () => Q,
    refresh: () => {
      h();
    },
    addFilter(r, O) {
      z((_) => (_[r] = O, { ..._ }));
    },
    setDefaultFilter(r) {
    },
    setSortOptions(r) {
    }
  }), [p, z]);
  var Z = ze(t, Q, t.label);
  H.readonly && (Z.inputProps = { readOnly: !0 });
  const ie = (r, O) => r instanceof Array ? r.some((_) => q(_) == q(O)) : q(r) == q(O);
  return /* @__PURE__ */ e(
    Le,
    {
      label: qe(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ a(oe, { fullWidth: !0, error: L.status, children: [
        /* @__PURE__ */ e(
          tt,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: t.multiple,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            isOptionEqualToValue: ie,
            filterOptions: (r) => r,
            renderInput: (r) => /* @__PURE__ */ e(
              fe,
              {
                ...r,
                inputRef: (O) => {
                  l.current = O;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                InputProps: {
                  ...r.InputProps,
                  endAdornment: /* @__PURE__ */ a(ne, { children: [
                    G ? /* @__PURE__ */ e(nt, { color: "inherit", size: 18 }) : null,
                    r.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: i,
            ...Z,
            options: f,
            open: u,
            onClose: () => {
              b(!1);
            },
            onOpen: (r) => {
              b(!0);
            },
            ...D
          }
        ),
        /* @__PURE__ */ e(Ee, { className: "form-error-text", children: L.message })
      ] })
    }
  );
}), Ut = U(function(t, c) {
  const o = de(he), s = c || X(null), l = X(null), g = X(0), [f, C] = R([]), [m, y] = R(""), [u, b] = R(!1), p = o(t, "autoComplete", s), M = t.store || p.store, P = (t.lookupOptions || {}).attribute || "name", E = P, A = {
    store: M,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: E,
    initialFetch: !1
  }, V = ae(A), I = p.eventListeners, B = p.error, { mutateOptions: L, setMutateOptions: H } = p, S = p.data, Q = u && f.length < (S ? 2 : 1), { setQueryFilter: G, setEndPointOptions: z, setQuickSearch: W, totalRecords: d, refreshData: w } = V, h = V.data, F = ue(P) ? (i) => me(P, i) : (i) => i == null ? void 0 : i[P];
  Y(() => {
    var i = S != "" ? S : void 0;
    i && C([i]);
  }, [p.data]), Y(() => {
    const x = (h ? [...h] : []).map((ie) => F(ie)), Z = S != "" ? S : void 0;
    x && Z && !D(x, Z) && x.unshift(Z), C(x), g.current < d && (g.current = d);
  }, [h, d]), Y(() => {
    at(q);
  }, [m, u]);
  function q() {
    u && (m.length > 0 && m != S ? W("*" + m + "*") : h ? W(null) : w());
  }
  var J = {
    onBlur: (i) => {
      K(m), I.onBlur(m);
    },
    onFocus: I.onFocus,
    onChange: (i, x) => {
      K(x);
    },
    onInputChange: (i, x) => (y(x), !0)
  };
  const K = (i) => {
    I.onValueChange(i);
  };
  function D(i, x) {
    return i.find((Z) => {
      if (Z == x)
        return Z;
    });
  }
  re(s, () => ({
    focus() {
      l.current.focus();
    },
    isValid() {
      return !B.status;
    },
    clear() {
      p.setData(void 0, !0);
    },
    getValue() {
      return p.getData();
    },
    setValue(i, x = !1) {
      p.setData(i, x);
    },
    setVisible(i) {
      H((x) => ({ ...x, visible: i }));
    },
    setRequired(i) {
      H((x) => ({ ...x, required: i }));
    },
    setReadOnly(i) {
      H((x) => ({ ...x, readonly: i }));
    },
    setAttribute(i) {
      H((x) => ({ ...x, ...i }));
    },
    setFilter(i) {
      G(i);
    },
    resetFilter() {
      G({});
    },
    setEndPointOptions(i) {
      z(i);
    },
    getCurrentData: () => S,
    refresh: () => {
      w();
    },
    addFilter(i, x) {
      G((Z) => (Z[i] = x, { ...Z }));
    },
    setDefaultFilter(i) {
    },
    setSortOptions(i) {
    }
  }), [p, G]);
  var k = ze(t, S, t.label);
  return L.readonly && (k.inputProps = { readOnly: !0 }), /* @__PURE__ */ e(
    Le,
    {
      label: qe(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ a(oe, { fullWidth: !0, error: B.status, children: [
        /* @__PURE__ */ e(
          tt,
          {
            freeSolo: !0,
            autoSelect: !0,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            filterOptions: (i) => i,
            renderInput: (i) => /* @__PURE__ */ e(
              fe,
              {
                ...i,
                inputRef: (x) => {
                  l.current = x;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                ...k,
                InputProps: {
                  ...i.InputProps,
                  endAdornment: /* @__PURE__ */ a(ne, { children: [
                    Q ? /* @__PURE__ */ e(nt, { color: "inherit", size: 18 }) : null,
                    i.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...k,
            options: f,
            open: u,
            onClose: () => {
              b(!1);
            },
            onOpen: (i) => {
              b(!0);
            },
            ...J
          }
        ),
        /* @__PURE__ */ e(Ee, { className: "form-error-text", children: B.message })
      ] })
    }
  );
}), Yt = (n) => {
  const { fieldDef: t } = n;
  return /* @__PURE__ */ a("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, j = (n, t) => {
  const c = n.fieldDef;
  return /* @__PURE__ */ e(
    t,
    {
      ...c,
      label: n.title
    },
    c.title + c.attribute
  );
}, gt = (n, t, c) => {
  const { type: o } = n, s = { fieldDef: n, title: c };
  switch (o) {
    case "string":
      return j(s, kt);
    case "radio":
      return j(s, wt);
    case "select":
      return j(s, Ke);
    case "date":
      return j(s, Ft);
    case "datetime":
      return j(s, Nt);
    case "checkbox":
      return j(s, Ot);
    case "serverlookup":
      return j(s, Jt);
    case "textarea":
      return j(s, St);
    case "switch":
      return j(s, Pt);
    case "iosswitch":
      return j(s, Rt);
    case "password":
      return j(s, Dt);
    case "float":
    case "number":
    case "numbersOnly":
      return j(s, At);
    case "integer":
      return j(s, Lt);
    case "multiSelect":
      return j(s, Ke);
    case "dateRange":
      return j(s, qt);
    case "autoComplete":
      return j(s, Ut);
    default:
      return Yt(s);
  }
}, en = U(function(t, c) {
  var y;
  const { formLayout: o, context: s } = t, { formData: l } = s, g = o.Container;
  X({});
  const f = et(() => (u) => gt(u), [l.data]);
  var C = ((y = o.options) == null ? void 0 : y.columns) || 1, m = { columns: C };
  return g ? /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: o.fields.map((u, b) => /* @__PURE__ */ e(
    g,
    {
      index: b,
      field: u,
      label: u.title,
      options: m,
      children: f(u)
    },
    u.attribute + u.name + u.type
  )) }) : /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: o.fields.map((u, b) => f(u)) });
}), yt = (n) => {
  const { layout: t, context: c } = n;
  var o = t.Renderer || en, s = t.Container || rt;
  const l = (g) => /* @__PURE__ */ e(
    o,
    {
      context: c,
      formLayout: g
    }
  );
  return /* @__PURE__ */ e(
    s,
    {
      hideTitle: t.hideTitle,
      title: t.title,
      name: t.name,
      children: /* @__PURE__ */ e(Gt, { columns: t.columns, children: l(t.formLayout) })
    }
  );
};
const tn = (n) => {
  const { formLayout: t } = n;
  var c = "palmyra-form-field-container";
  const o = t.options;
  if (o && o.columns)
    switch (o.columns) {
      case 2:
        return c + " palmyra-form-field-container-2column";
      case 3:
        return c + " palmyra-form-field-container-3column";
      case 4:
        return c + " palmyra-form-field-container-4column";
    }
  return c;
}, nn = U(function(t, c) {
  const { formLayout: o, context: s } = t, { formData: l } = s, g = X({}), f = tn(t), C = "palmyra-form-field-data", m = et(() => (y) => gt(y, g, y.label), [l.data]);
  return /* @__PURE__ */ e("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: o.fields.map((y, u) => /* @__PURE__ */ e("div", { className: y.type === "dateRange" ? "palmyra-form-field-container" : f, children: /* @__PURE__ */ e("div", { className: C, children: m(y) }) }, y.attribute)) });
}), pt = ({ columns: n, isOpen: t, onClose: c, setFilter: o, defaultFilter: s = {} }) => {
  var { getFieldManager: l, getFilterData: g } = Kt(s);
  const f = () => {
    o({});
  }, C = () => {
    var y = g();
    o && o(y);
  }, m = Ht(n);
  return /* @__PURE__ */ a("div", { className: "grid-filter-container", children: [
    /* @__PURE__ */ e("div", { className: "grid-filter-content", children: /* @__PURE__ */ e(he.Provider, { value: l, children: /* @__PURE__ */ e(
      yt,
      {
        context: { formData: {} },
        layout: {
          type: "form",
          formLayout: {
            fields: m,
            options: {
              columns: 2
            }
          },
          Renderer: nn
        }
      }
    ) }) }),
    /* @__PURE__ */ a("div", { className: "grid-filter-btn-container", children: [
      /* @__PURE__ */ a(te, { className: "secondary-filled-button", disableRipple: !0, onClick: f, children: [
        /* @__PURE__ */ e(Bt, { className: "button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ a(te, { className: "filled-button", disableRipple: !0, onClick: C, children: [
        /* @__PURE__ */ e(Ge, { className: "button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
};
function vt(n) {
  return mt({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" } }] })(n);
}
function Ct(n) {
  return mt({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M156,208a8,8,0,0,1-8,8H120a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v48h20A8,8,0,0,1,156,208ZM92.65,145.49a8,8,0,0,0-11.16,1.86L68,166.24,54.51,147.35a8,8,0,1,0-13,9.3L58.17,180,41.49,203.35a8,8,0,0,0,13,9.3L68,193.76l13.49,18.89a8,8,0,0,0,13-9.3L77.83,180l16.68-23.35A8,8,0,0,0,92.65,145.49Zm98.94,25.82c-4-1.16-8.14-2.35-10.45-3.84-1.25-.82-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.72,19.82-.56a8,8,0,0,0,4.07-15.48c-2.11-.55-21-5.22-32.83,2.76a20.58,20.58,0,0,0-8.95,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.33-2.15,3.93-4.6,3.06-15.16,1.55-19.54.35A8,8,0,0,0,173.93,214a60.63,60.63,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.81,20.81,0,0,0,9.18-15.23C218,179,201.48,174.17,191.59,171.31ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,1,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.68L160,51.31Z" } }] })(n);
}
const rn = U(function(t, c) {
  const { columns: o, children: s, EmptyChild: l, onRowClick: g, quickSearch: f } = t, C = l || lt, m = t.customizer || ut, y = t.customButton, u = t.title, [b, p] = R(!1), [M, T] = R(!1), [P, E] = R(!1), [A, V] = R("standard"), [I, B] = R(!1), [L, H] = R(""), {
    setQueryFilter: S,
    setQuickSearch: Q,
    setSortColumns: G,
    setEndPointOptions: z,
    gotoPage: W,
    setPageSize: d,
    getPageNo: w,
    refreshData: h,
    setQueryLimit: F,
    getQueryLimit: q,
    data: J,
    totalRecords: K,
    queryLimit: D,
    pageSizeOptions: k,
    filter: i
  } = ae(t), x = c || X(null);
  re(x, () => ({
    setFilter: (v) => {
      S(v);
    },
    refresh: () => {
      h();
    },
    resetFilter() {
      S({});
    },
    setEndPointOptions: (v) => {
      z(v);
    },
    addFilter: (v, ee) => {
      S((He) => (He[v] = ee, { ...He }));
    },
    setQueryLimit: (v) => {
      F(v);
    },
    getQueryLimit: () => q(),
    setSortOptions(v) {
      G(v);
    },
    getCurrentData: () => J
  }), [q]);
  const Z = (v, ee) => {
    W(ee - 1);
  }, ie = st(o, m), r = (v) => {
    V(v);
  }, O = () => {
    p(!b);
  }, _ = () => A === "compact" ? { padding: "3px" } : A === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, se = () => A === "compact" ? { padding: "3px" } : A === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, Ce = () => {
    var v;
    switch (A) {
      case "compact":
        v = /* @__PURE__ */ e(pe, { className: "density-icon" });
        break;
      case "comfortable":
        v = /* @__PURE__ */ e(ve, { className: "density-icon" });
        break;
      default:
        v = /* @__PURE__ */ e(ye, { className: "grid-button-icon" });
        break;
    }
    return v;
  }, be = (v) => {
    const ee = v.target.value;
    H(ee), ee ? Q(ee) : S({});
  }, xe = (v) => {
    g && g(v);
  }, Fe = (v) => {
    const ee = parseInt(v.target.value, 10);
    d(ee);
  }, Ne = (v) => {
    T(!M);
  }, ge = () => {
    E(!P);
  }, we = () => {
  }, Se = () => {
  }, ke = () => {
    t.onNewClick();
  }, Oe = 200, Pe = !!t.pageSize, Re = !!f, De = {
    transform: b ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Ae = {
    transform: M ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, N = {
    transform: P ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, $ = Math.ceil(K / D.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("div", { children: [
    s,
    /* @__PURE__ */ a("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: t.titleTooltip ? /* @__PURE__ */ e(ht, { placement: "right", title: t.titleTooltip, arrow: !0, children: /* @__PURE__ */ a("div", { className: "info-grid-header", children: [
        /* @__PURE__ */ e("span", { className: "grid-header-right-content-text", children: u }),
        /* @__PURE__ */ e(it, { class: "grid-header-info-icon" })
      ] }) }) : /* @__PURE__ */ e("span", { className: "grid-header-right-content-text", children: u }) }),
      /* @__PURE__ */ a("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: Re && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: Oe },
            type: "text",
            value: L,
            onChange: be,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ve, { position: "end", children: /* @__PURE__ */ e(Te, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(le, { onClickAway: () => {
          p(!1);
        }, children: /* @__PURE__ */ a("div", { className: "grid-header-button grid-density-btn", onClick: O, children: [
          /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
            Ce(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(ce, { style: De, className: "avathar-arrw-icon" })
          ] }),
          b && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ a("ul", { children: [
            /* @__PURE__ */ a("li", { onClick: () => r("standard"), children: [
              /* @__PURE__ */ e(ye, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: () => r("compact"), children: [
              /* @__PURE__ */ e(pe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: () => r("comfortable"), children: [
              /* @__PURE__ */ e(ve, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        o.some((v) => v.searchable) && /* @__PURE__ */ e(le, { onClickAway: () => {
          T(!1);
        }, children: /* @__PURE__ */ a("div", { className: "grid-header-button grid-filter-btn", onClick: Ne, children: [
          /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(Ge, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" }),
            /* @__PURE__ */ e(ce, { style: Ae, className: "avathar-arrw-icon" })
          ] }),
          M && /* @__PURE__ */ e("div", { className: "filter-dropdown-content", onClick: (v) => v.stopPropagation(), children: /* @__PURE__ */ e(
            pt,
            {
              columns: o,
              setFilter: S,
              defaultFilter: i,
              isOpen: I,
              onClose: () => B(!1)
            }
          ) })
        ] }) }),
        /* @__PURE__ */ e(le, { onClickAway: () => {
          E(!1);
        }, children: /* @__PURE__ */ a("div", { className: "grid-header-button grid-export-btn", onClick: ge, children: [
          /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(ot, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Export" }),
            /* @__PURE__ */ e(ce, { style: N, className: "avathar-arrw-icon" })
          ] }),
          P && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ a("ul", { children: [
            /* @__PURE__ */ a("li", { onClick: we, children: [
              /* @__PURE__ */ e(vt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: Se, children: [
              /* @__PURE__ */ e(Ct, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: /* @__PURE__ */ e("div", { onClick: ke, children: /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
          t.customAddButton && t.customAddButton.icon ? Mt.cloneElement(t.customAddButton.icon, {
            className: "grid-button-icon"
          }) : /* @__PURE__ */ e(dt, { className: "grid-button-icon" }),
          t.customAddButton && t.customAddButton.text ? /* @__PURE__ */ e(ne, { children: t.customAddButton.text }) : /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(ne, {}),
        y && y.map((v, ee) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: v }, ee))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      ct,
      {
        columnDefs: ie,
        EmptyChild: C,
        customizer: m,
        rowData: J,
        onRowClick: xe,
        onRowStyle: _,
        onHeaderStyle: se,
        onSortColumn: G
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: Pe && $ !== 0 && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: k && k.length > 1 ? /* @__PURE__ */ e(oe, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Ie,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: k[0],
            onChange: Fe,
            label: "Rows per page",
            children: k.map((v) => /* @__PURE__ */ e(Be, { value: v, children: v }, v))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("span", { children: [
          "of ",
          K,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        Qe,
        {
          count: $,
          shape: "rounded",
          componentName: "div",
          onChange: Z,
          page: w() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), xr = U(function(t, c) {
  const { children: o, EmptyChild: s, onRowClick: l, quickSearch: g } = t, f = t.columns, C = s || lt, m = t.customizer || ut, y = t.customButton, u = t.gridTitle, [b, p] = R(!1), [M, T] = R(!1), [P, E] = R("standard"), [A, V] = R(!1), [I, B] = R(""), {
    setQueryFilter: L,
    setQuickSearch: H,
    setSortColumns: S,
    setEndPointOptions: Q,
    gotoPage: G,
    setPageSize: z,
    getPageNo: W,
    refreshData: d,
    setQueryLimit: w,
    getQueryLimit: h,
    data: F,
    totalRecords: q,
    queryLimit: J,
    pageSizeOptions: K,
    filter: D
  } = ae(t), [k, i] = R(f(F)), x = c || X(null);
  re(x, () => ({
    setFilter: (N) => {
      L(N);
    },
    refresh: () => {
      d();
    },
    resetFilter() {
      L({});
    },
    setEndPointOptions: (N) => {
      Q(N);
    },
    addFilter: (N, $) => {
      L((v) => (v[N] = $, { ...v }));
    },
    setQueryLimit: (N) => {
      w(N);
    },
    getQueryLimit: () => h(),
    setSortOptions(N) {
      S(N);
    },
    getCurrentData: () => F
  }), [h, k]), Y(() => {
    i(f(F));
  }, [F]);
  const Z = (N, $) => {
    G($ - 1);
  }, ie = st(k, m), r = (N) => {
    E(N);
  }, O = () => {
    p(!b);
  }, _ = () => P === "compact" ? { padding: "3px" } : P === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, se = () => P === "compact" ? { padding: "3px" } : P === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, Ce = () => {
    var N;
    switch (P) {
      case "compact":
        N = /* @__PURE__ */ e(pe, { className: "density-icon" });
        break;
      case "comfortable":
        N = /* @__PURE__ */ e(ve, { className: "density-icon" });
        break;
      default:
        N = /* @__PURE__ */ e(ye, { className: "grid-button-icon" });
        break;
    }
    return N;
  }, be = (N) => {
    const $ = N.target.value;
    B($), $ ? H($) : L({});
  }, xe = (N) => {
    l && l(N);
  }, Fe = (N) => {
    const $ = parseInt(N.target.value, 10);
    z($);
  }, Ne = () => {
    T(!M);
  }, ge = () => {
    t.onNewClick();
  }, we = () => {
  }, Se = () => {
  }, ke = 200, Oe = !!t.pageSize, Pe = !!g, Re = {
    transform: b ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, De = {
    transform: M ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Ae = Math.ceil(q / J.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("div", { children: [
    o,
    /* @__PURE__ */ a("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: /* @__PURE__ */ e("span", { className: "grid-header-right-content-text", children: u }) }),
      /* @__PURE__ */ a("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: Pe && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: ke },
            type: "text",
            value: I,
            onChange: be,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ve, { position: "end", children: /* @__PURE__ */ e(Te, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(le, { onClickAway: () => {
          p(!1);
        }, children: /* @__PURE__ */ a("div", { className: "grid-header-button grid-density-btn", onClick: O, children: [
          /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
            Ce(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(ce, { style: Re, className: "avathar-arrw-icon" })
          ] }),
          b && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ a("ul", { children: [
            /* @__PURE__ */ a("li", { onClick: () => r("standard"), children: [
              /* @__PURE__ */ e(ye, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: () => r("compact"), children: [
              /* @__PURE__ */ e(pe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: () => r("comfortable"), children: [
              /* @__PURE__ */ e(ve, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        k.some((N) => N.searchable) && /* @__PURE__ */ a("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, onClick: () => V(!0), children: [
            /* @__PURE__ */ e(Ge, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ e(
            pt,
            {
              columns: k,
              setFilter: L,
              defaultFilter: D,
              isOpen: A,
              onClose: () => V(!1)
            }
          )
        ] }),
        /* @__PURE__ */ e(le, { onClickAway: () => {
          T(!1);
        }, children: /* @__PURE__ */ a("div", { className: "grid-header-button grid-export-btn", onClick: Ne, children: [
          /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(ot, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Export" }),
            /* @__PURE__ */ e(ce, { style: De, className: "avathar-arrw-icon" })
          ] }),
          M && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ a("ul", { children: [
            /* @__PURE__ */ a("li", { onClick: we, children: [
              /* @__PURE__ */ e(vt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: Se, children: [
              /* @__PURE__ */ e(Ct, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: t.customAddButton ? /* @__PURE__ */ e("div", { onClick: ge, children: t.customAddButton }) : /* @__PURE__ */ e("div", { onClick: ge, children: /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ e(dt, { className: "grid-button-icon" }),
          /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(ne, {}),
        y && y.map((N, $) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: N }, $))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      ct,
      {
        columnDefs: ie,
        EmptyChild: C,
        customizer: m,
        rowData: F,
        onRowClick: xe,
        onRowStyle: _,
        onHeaderStyle: se,
        onSortColumn: S
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: Oe && q !== null && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: K && K.length > 1 ? /* @__PURE__ */ e(oe, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Ie,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: K[0],
            onChange: Fe,
            label: "Rows per page",
            children: K.map((N) => /* @__PURE__ */ e(Be, { value: N, children: N }, N))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("span", { children: [
          "of ",
          q,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        Qe,
        {
          count: Ae,
          shape: "rounded",
          componentName: "div",
          onChange: Z,
          page: W() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), Fr = U(function(t, c) {
  const { columns: o, endPoint: s, storeFactory: l, layoutParams: g, pagination: f } = t, C = t.quickSearch || "", m = t.customButton, y = t.customAddButton, u = t.title, b = t.fetchAll, p = t.filterTopic, M = t.initialFetch, T = (E, A) => {
  };
  Y(() => {
    var E = _e.subscribe(t.topic, T);
    return () => {
      _e.unsubscribe(E);
    };
  }, [t.topic]);
  const P = {
    fields: o,
    pagination: f,
    quickSearch: C,
    storeOptions: {
      endPoint: s
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ e(ne, { children: /* @__PURE__ */ e(Me.Provider, { value: l, children: /* @__PURE__ */ e(
    bt,
    {
      layout: P,
      context: g,
      customAddButton: y,
      onDataChange: t.onDataChange,
      title: u,
      defaultParams: t.defaultParams,
      customButton: m,
      customizer: t.customizer,
      ref: c,
      titleTooltip: t.titleTooltip,
      fetchAll: b,
      filterTopic: p,
      initialFetch: M
    }
  ) }) });
}), on = U(function(t, c) {
  const o = t.layout, [s, l] = R(o.fields), g = o.pagination ? o.pagination : [15], f = de(Me), C = de(Ye);
  var m = o.storeOptions || {}, y = {};
  zt(y, m, C);
  const u = f.getGridStore(y, o.storeOptions.endPoint);
  Y(() => {
    m.hasLayout && u.queryLayout({}).then((M) => {
      l(M.columns);
    });
  }, []);
  const { onClick: b, onNewClick: p } = Zt(o.actionOptions, C);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    rn,
    {
      columns: s,
      store: u,
      pageSize: g,
      onRowClick: b,
      onDataChange: t.onDataChange,
      title: t.title,
      customAddButton: t.customAddButton,
      onNewClick: p,
      customizer: t.customizer,
      customButton: t.customButton,
      quickSearch: o.quickSearch,
      ref: c,
      defaultParams: t.defaultParams,
      fetchAll: t.fetchAll,
      filterTopic: t.filterTopic,
      initialFetch: t.initialFetch,
      titleTooltip: t.titleTooltip
    }
  ) });
}), bt = on, an = (n) => {
  const { layout: t, context: c } = n;
  var o = t.Container || rt;
  return /* @__PURE__ */ e(ft, { fallback: /* @__PURE__ */ e("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ e(o, { ...t, children: ((l) => /* @__PURE__ */ e(
    bt,
    {
      context: c,
      layout: l
    }
  ))(t.tableLayout) }) });
}, sn = (n) => {
  const { layout: t } = n;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ e(yt, { ...n });
    case "view":
      return /* @__PURE__ */ e(Wt, { ...n });
    case "grid":
      return /* @__PURE__ */ e(an, { ...n });
    case "chart":
      return /* @__PURE__ */ e(It, { ...n });
    default:
      return /* @__PURE__ */ e(jt, { ...n });
  }
};
function ln(n, t) {
  var c = n || 1, o = t;
  return {
    w: c,
    h: o
  };
}
const xt = (n) => {
  const { layout: t, context: c } = n, o = t.sections;
  function s(l, g, f) {
    const { w: C, h: m } = ln(l.width, l.height);
    return /* @__PURE__ */ e(Tt, { sx: { width: C, height: m }, children: /* @__PURE__ */ e(
      sn,
      {
        layout: l,
        context: g
      }
    ) }, (l.name || "tab") + f);
  }
  return /* @__PURE__ */ e("div", { style: { display: "flex", flexWrap: "wrap" }, children: o.map((l, g) => s(l, c, g)) });
}, Je = U(function(t, c) {
  const { layout: o } = t;
  re(c, () => ({
    resetFilter() {
    }
  }), []);
  const s = {}, l = o.tabs;
  return /* @__PURE__ */ e("div", { children: l.map((g, f) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    xt,
    {
      layout: g,
      context: s
    }
  ) }, g.name + f)) });
}), cn = (n) => {
  switch (n) {
    case "formEdit":
      return "edit";
    case "formNew":
      return "new";
    case "formView":
      return "view";
    default:
      return "edit";
  }
}, Ue = U(function(t, c) {
  var y;
  const o = t.data || {}, { layout: s } = t;
  var { getFieldManager: l, getFormData: g, isFormValid: f } = Xt(o, (y = t.callbacks) == null ? void 0 : y.onFormValidChange, cn(t.mode));
  re(c, () => ({
    getData() {
      return g();
    },
    isValid() {
      return f();
    }
  }), []);
  const C = { formData: o }, m = s.tabs;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(he.Provider, { value: l, children: m.map((u, b) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    xt,
    {
      layout: u,
      context: C
    }
  ) }, u.name + b)) }) });
}), dn = (n) => {
  switch (n) {
    case "grid":
      return Je;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), Ue;
    case "formEdit":
    case "formNew":
    case "formView":
      return Ue;
    default:
      return Je;
  }
}, Nr = U(function(t, c) {
  const [o, s] = R(t.layout), l = t.mode ? t.mode : o.type ? o.type : "grid", g = t.layoutParams || {}, f = dn(l), C = X(0);
  return Y(() => {
    s(t.layout), C.current < 999999 ? C.current++ : C.current = 0;
  }, [t.layout]), /* @__PURE__ */ e(ft, { fallback: /* @__PURE__ */ e("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ e(Me.Provider, { value: t.storeFactory, children: /* @__PURE__ */ e(Ye.Provider, { value: g, children: /* @__PURE__ */ e(f, { ...t, ref: (m) => {
    c && (c.current = m);
  } }, C.current) }) }) });
}), wr = U(function(t, c) {
  const { title: o, Child: s, childProps: l, pageSize: g, customButton: f } = t, C = c || X(null), {
    setQueryFilter: m,
    refreshData: y,
    setSortColumns: u,
    setEndPointOptions: b,
    setQuickSearch: p,
    gotoPage: M,
    setPageSize: T,
    getPageNo: P,
    setQueryLimit: E,
    getQueryLimit: A,
    data: V,
    totalRecords: I,
    pageSizeOptions: B,
    queryLimit: L
  } = ae(t), H = t.listKeyProvider || ((h, F) => F);
  re(C, () => ({
    setFilter: (h) => {
      m(h);
    },
    refresh: () => {
      y();
    },
    resetFilter() {
      m({});
    },
    setEndPointOptions: (h) => {
      b(h);
    },
    addFilter: (h, F) => {
      m((q) => (q[h] = F, { ...q }));
    },
    setQueryLimit: (h) => {
      E(h);
    },
    getQueryLimit: () => A(),
    getCurrentData: () => V,
    setSortOptions(h) {
      u(h);
    }
  }), [m]);
  const S = (h, F) => {
    M(F - 1);
  }, Q = (h) => {
    const F = h.target.value;
    p(F);
  }, G = (h) => {
    const F = parseInt(h.target.value, 10);
    T(F);
  }, z = 200, W = !!g, d = !!t.quickSearch, w = Math.ceil(I / L.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "card-page-container", children: /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ a("div", { className: "card-header", children: [
      /* @__PURE__ */ e("div", { className: "card-left-content", children: t.titleTooltip ? /* @__PURE__ */ e(ht, { placement: "right", title: t.titleTooltip, arrow: !0, children: /* @__PURE__ */ a("div", { className: "card-left-content-info", children: [
        o,
        /* @__PURE__ */ e(it, { class: "card-header-info-icon" })
      ] }) }) : /* @__PURE__ */ e(ne, { children: o }) }),
      /* @__PURE__ */ a("div", { className: "card-right-content", children: [
        d && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: z },
            type: "text",
            onChange: Q,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ve, { position: "end", children: /* @__PURE__ */ e(Te, { className: "card-filter-icon" }) })
            }
          }
        ),
        f && f.map((h, F) => /* @__PURE__ */ e("div", { className: "card-custom-button", children: h }, F))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      Vt,
      {
        Child: s,
        childKeyProvider: H,
        preProcess: t.preProcess,
        dataList: V,
        childProps: l,
        EmptyChild: t.EmptyChild
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "card-pagination", children: W && w !== 0 && // <TablePagination
    //     component="div"
    //     count={totalRecords || 0}
    //     page={getPageNo()}
    //     onPageChange={nextPage}
    //     rowsPerPage={queryLimit.limit}
    //     rowsPerPageOptions={pageSizeOptions || []}
    //     onRowsPerPageChange={handleRowsPerPageChange}
    // />
    /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { children: B && B.length > 1 ? /* @__PURE__ */ e(oe, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Ie,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: B[0],
            onChange: G,
            label: "Rows per page",
            children: B.map((h) => /* @__PURE__ */ e(Be, { value: h, children: h }, h))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("span", { children: [
          "of ",
          I,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(Et, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ e(
        Qe,
        {
          count: w,
          shape: "rounded",
          componentName: "div",
          onChange: S,
          page: P() + 1
        }
      ) }) })
    ] }) })
  ] }) }) });
});
export {
  xr as D,
  Nr as F,
  bt as G,
  Jt as M,
  Fr as P,
  wr as S,
  xt as T,
  rn as a,
  br as b,
  Ut as c,
  en as d,
  yt as e,
  nn as f,
  gt as g,
  pt as h,
  an as i,
  sn as j,
  Je as k,
  Ue as l,
  ae as u
};
