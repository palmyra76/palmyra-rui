import "../assets/ServerCardLayout.css";
import bt from "../palmyra/mui/form/MuiDatePicker.js";
import xt from "../palmyra/mui/form/MuiDateTimePicker.js";
import Ft from "../palmyra/mui/form/MuiRadioGroup.js";
import Ke from "../palmyra/mui/form/MuiSelect.js";
import wt from "../palmyra/mui/form/MuiTextArea.js";
import Nt from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import St from "../palmyra/mui/form/MuiCheckBox.js";
import kt from "../palmyra/mui/form/MuiSwitch.js";
import Ot from "../palmyra/mui/form/MuiIOSSwitch.js";
import Pt from "../palmyra/mui/form/MuiPassword.js";
import Rt from "../palmyra/mui/form/MuiNumberField.js";
import Dt from "../palmyra/mui/form/MuiIntegerField.js";
import Le from "../palmyra/mui/form/FieldDecorator.js";
import { FieldManagerContext as he, StoreFactoryContext as Me, LayoutParamsContext as Ye } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as e, jsxs as a, Fragment as ie } from "react/jsx-runtime";
import At, { useState as R, useRef as X, useEffect as Y, forwardRef as U, useContext as de, useImperativeHandle as ne, useMemo as et } from "react";
import { a as Ee } from "./index.esm2.js";
import { FormControlLabel as Ze, Checkbox as je, FormControl as oe, FormHelperText as Ve, Autocomplete as tt, TextField as fe, CircularProgress as nt, Button as te, InputAdornment as Te, ClickAwayListener as le, Select as Ie, MenuItem as Be, Pagination as Qe, Box as Lt, Stack as Mt } from "@mui/material";
import Et from "../palmyra/layout/card/CardLayout.js";
import Vt from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as ze, getFieldLabel as qe } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as ue } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as me } from "../palmyra/form/FormUtil.js";
import { T as We, a as Xe, c as Tt, d as Ge, e as rt } from "./index.esm.js";
import { delay as it, delayGenerator as It, mergeDeep as Bt } from "../palmyra/utils/index.js";
import Qt from "../palmyra/mui/form/MuiDateRangePicker.js";
import ot from "../palmyra/layout/container/SectionContainer.js";
import zt from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as at } from "../palmyra/grid/base/ColumnConverter.js";
import st from "../palmyra/grid/base/EmptyChildTable.js";
import lt from "../palmyra/grid/base/TableX.js";
import { KeyboardArrowDown as ce, Menu as ye, DensitySmall as pe, DensityLarge as ve, Add as ct } from "@mui/icons-material";
import { NoopCustomizer as dt } from "../palmyra/grid/Types.js";
import { convertToField as qt } from "../palmyra/grid/base/GridFieldConverter.js";
import { createFilterData as Gt } from "../palmyra/form/PalmyraFilterManager.js";
import { G as ut } from "./iconBase.js";
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
import { getActionPublishers as Ht } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as mt } from "../palmyra/layout/ErrorBoundary.js";
import Kt from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import Zt from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as jt } from "./PalmyraFieldManager.js";
import { useKeyValue as Wt } from "../palmyra/utils/pubsub/PubSubHelper.js";
const ae = (n) => {
  var J, K;
  const { store: t, quickSearch: c } = n, o = n.fetchAll != !1, [s, l] = R(n.endPointOptions), [g, f] = R(null), C = ((J = n.defaultParams) == null ? void 0 : J.filter) || {}, m = ((K = n.defaultParams) == null ? void 0 : K.sort) || {}, [y, u] = n.filterTopic ? Wt(n.filterTopic, C) : R(C), [b, p] = R({}), M = X(n.initialFetch == !1), E = n.pageSize ? n.pageSize : 15;
  var P = E instanceof Array ? E : [E], V = E instanceof Array ? E[0] : E;
  const [A, T] = R({ limit: V, offset: 0, total: !0 }), [I, B] = R(null), L = () => Math.round(A.offset / A.limit), H = () => A, S = (D) => {
    T((k) => ({ limit: k.limit, total: k.total, offset: D * k.limit }));
  }, Q = (D) => {
    const k = D > 10 || D == -1 ? D : 15;
    T((i) => {
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
          console.error("error while fetching", x), N();
        });
      } catch (i) {
        console.error(i), d();
      }
    else
      console.error("Store is not provided for the Grid"), d();
  }, d = () => {
    z([]), f(0);
  }, N = () => {
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
    setQueryLimit: T,
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
const pr = U(function(t, c) {
  const o = de(he), s = c || X(null), l = o(t, "checkbox", s), { mutateOptions: g, setMutateOptions: f } = l, [C, m] = R(!1), y = $e(l.data), u = l.error, b = l.eventListeners, M = { store: l.store, pageSize: -1 }, { data: E } = ae(M), P = E, V = X(null), A = t.lookupOptions || {}, T = A.idAttribute || "id", I = A.displayAttribute || "name", B = t.showSelectedOnly && t.readonly, L = ue(T) ? (d) => me(T, d) : (d) => d[T], H = ue(I) ? (d) => me(I, d) : (d) => d[I];
  ne(s, () => ({
    focus() {
      V.current.focus();
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
    setValue(d, N = !1) {
      l.setData(d, N);
    },
    setVisible(d) {
      f((N) => ({ ...N, visible: d }));
    },
    setRequired(d) {
      f((N) => ({ ...N, required: d }));
    },
    setReadOnly(d) {
      f((N) => ({ ...N, readonly: d }));
    },
    setAttribute(d) {
      f((N) => ({ ...N, ...d }));
    },
    setOptions(d) {
    },
    getOptions() {
    }
  }), [l]);
  var S = ze(t, l.data, t.label);
  t.readonly && (S.inputprops = { readOnly: !0 });
  function Q(d, N) {
    const h = $e(l.data);
    var F = h.indexOf(d);
    N ? F < 0 && h.push(d) : F >= 0 && h.splice(F, 1), b.onValueChange(h.toString());
  }
  var G = {
    onBlur: b.onBlur,
    onFocus: b.onFocus,
    onChange: (d) => {
      Q(d.target.value, d.target.checked);
    }
  };
  const z = (d) => {
    const N = d.toString();
    return y.includes(N);
  }, W = (d) => {
    const N = d.target.checked;
    m(N);
    var h = [];
    N && P.map((F) => {
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
        /* @__PURE__ */ e("div", { children: t.hideSelectAll ? /* @__PURE__ */ e(ie, {}) : /* @__PURE__ */ e(
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
              /* @__PURE__ */ e(Ve, { className: "form-error-text", children: u.message })
            ]
          }
        )
      ]
    }
  ) });
}), Xt = It(100), _t = U(function(t, c) {
  const o = de(he), s = c || X(null), l = X(null), g = X(0), [f, C] = R([]), [m, y] = R(""), [u, b] = R(!1), p = o(t, "serverlookup", s), M = t.store || p.store, E = t.lookupOptions || {}, P = E.idAttribute || "id", V = E.displayAttribute || "name", A = V, T = {
    store: M,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: A,
    initialFetch: !1
  }, I = ae(T), B = p.eventListeners, L = p.error, { mutateOptions: H, setMutateOptions: S } = p, Q = p.data, G = u && f.length < (Q ? 2 : 1), { setQueryFilter: z, setEndPointOptions: W, setQuickSearch: d, totalRecords: N, refreshData: h } = I, F = I.data, q = ue(P) ? (r) => me(P, r) : (r) => r == null ? void 0 : r[P], J = ue(V) ? (r) => me(V, r) : (r) => r == null ? void 0 : r[V];
  Y(() => {
    var r = Q != "" ? Q : void 0;
    r && C([r]);
  }, [p.data]), Y(() => {
    const r = F ? [...F] : [], O = Q != "" ? Q : void 0, _ = q(O), se = J(O);
    r && _ && se && !x(r, _) && r.unshift(O), C(r), g.current < N && (g.current = N);
  }, [F, N]), Y(() => {
    it(K);
  }, [m]), Y(() => {
    Xt(K);
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
  ne(s, () => ({
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
  const re = (r, O) => r instanceof Array ? r.some((_) => q(_) == q(O)) : q(r) == q(O);
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
            isOptionEqualToValue: re,
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
                  endAdornment: /* @__PURE__ */ a(ie, { children: [
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
        /* @__PURE__ */ e(Ve, { className: "form-error-text", children: L.message })
      ] })
    }
  );
}), $t = U(function(t, c) {
  const o = de(he), s = c || X(null), l = X(null), g = X(0), [f, C] = R([]), [m, y] = R(""), [u, b] = R(!1), p = o(t, "autoComplete", s), M = t.store || p.store, P = (t.lookupOptions || {}).attribute || "name", V = P, A = {
    store: M,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: V,
    initialFetch: !1
  }, T = ae(A), I = p.eventListeners, B = p.error, { mutateOptions: L, setMutateOptions: H } = p, S = p.data, Q = u && f.length < (S ? 2 : 1), { setQueryFilter: G, setEndPointOptions: z, setQuickSearch: W, totalRecords: d, refreshData: N } = T, h = T.data, F = ue(P) ? (i) => me(P, i) : (i) => i == null ? void 0 : i[P];
  Y(() => {
    var i = S != "" ? S : void 0;
    i && C([i]);
  }, [p.data]), Y(() => {
    const x = (h ? [...h] : []).map((re) => F(re)), Z = S != "" ? S : void 0;
    x && Z && !D(x, Z) && x.unshift(Z), C(x), g.current < d && (g.current = d);
  }, [h, d]), Y(() => {
    it(q);
  }, [m, u]);
  function q() {
    u && (m.length > 0 && m != S ? W("*" + m + "*") : h ? W(null) : N());
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
  ne(s, () => ({
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
      N();
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
                  endAdornment: /* @__PURE__ */ a(ie, { children: [
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
        /* @__PURE__ */ e(Ve, { className: "form-error-text", children: B.message })
      ] })
    }
  );
}), Jt = (n) => {
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
}, ht = (n, t, c) => {
  const { type: o } = n, s = { fieldDef: n, title: c };
  switch (o) {
    case "string":
      return j(s, Nt);
    case "radio":
      return j(s, Ft);
    case "select":
      return j(s, Ke);
    case "date":
      return j(s, bt);
    case "datetime":
      return j(s, xt);
    case "checkbox":
      return j(s, St);
    case "serverlookup":
      return j(s, _t);
    case "textarea":
      return j(s, wt);
    case "switch":
      return j(s, kt);
    case "iosswitch":
      return j(s, Ot);
    case "password":
      return j(s, Pt);
    case "float":
    case "number":
    case "numbersOnly":
      return j(s, Rt);
    case "integer":
      return j(s, Dt);
    case "multiSelect":
      return j(s, Ke);
    case "dateRange":
      return j(s, Qt);
    case "autoComplete":
      return j(s, $t);
    default:
      return Jt(s);
  }
}, Ut = U(function(t, c) {
  var y;
  const { formLayout: o, context: s } = t, { formData: l } = s, g = o.Container;
  X({});
  const f = et(() => (u) => ht(u), [l.data]);
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
}), ft = (n) => {
  const { layout: t, context: c } = n;
  var o = t.Renderer || Ut, s = t.Container || ot;
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
      children: /* @__PURE__ */ e(zt, { columns: t.columns, children: l(t.formLayout) })
    }
  );
};
const Yt = (n) => {
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
}, en = U(function(t, c) {
  const { formLayout: o, context: s } = t, { formData: l } = s, g = X({}), f = Yt(t), C = "palmyra-form-field-data", m = et(() => (y) => ht(y, g, y.label), [l.data]);
  return /* @__PURE__ */ e("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: o.fields.map((y, u) => /* @__PURE__ */ e("div", { className: y.type === "dateRange" ? "palmyra-form-field-container" : f, children: /* @__PURE__ */ e("div", { className: C, children: m(y) }) }, y.attribute)) });
}), gt = ({ columns: n, isOpen: t, onClose: c, setFilter: o, defaultFilter: s = {} }) => {
  var { getFieldManager: l, getFilterData: g } = Gt(s);
  const f = () => {
    o({});
  }, C = () => {
    var y = g();
    o && o(y);
  }, m = qt(n);
  return /* @__PURE__ */ a("div", { className: "grid-filter-container", children: [
    /* @__PURE__ */ e("div", { className: "grid-filter-content", children: /* @__PURE__ */ e(he.Provider, { value: l, children: /* @__PURE__ */ e(
      ft,
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
          Renderer: en
        }
      }
    ) }) }),
    /* @__PURE__ */ a("div", { className: "grid-filter-btn-container", children: [
      /* @__PURE__ */ a(te, { className: "secondary-filled-button", disableRipple: !0, onClick: f, children: [
        /* @__PURE__ */ e(Tt, { className: "button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ a(te, { className: "filled-button", disableRipple: !0, onClick: C, children: [
        /* @__PURE__ */ e(Ge, { className: "button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
};
function yt(n) {
  return ut({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" } }] })(n);
}
function pt(n) {
  return ut({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M156,208a8,8,0,0,1-8,8H120a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v48h20A8,8,0,0,1,156,208ZM92.65,145.49a8,8,0,0,0-11.16,1.86L68,166.24,54.51,147.35a8,8,0,1,0-13,9.3L58.17,180,41.49,203.35a8,8,0,0,0,13,9.3L68,193.76l13.49,18.89a8,8,0,0,0,13-9.3L77.83,180l16.68-23.35A8,8,0,0,0,92.65,145.49Zm98.94,25.82c-4-1.16-8.14-2.35-10.45-3.84-1.25-.82-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.72,19.82-.56a8,8,0,0,0,4.07-15.48c-2.11-.55-21-5.22-32.83,2.76a20.58,20.58,0,0,0-8.95,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.33-2.15,3.93-4.6,3.06-15.16,1.55-19.54.35A8,8,0,0,0,173.93,214a60.63,60.63,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.81,20.81,0,0,0,9.18-15.23C218,179,201.48,174.17,191.59,171.31ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,1,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.68L160,51.31Z" } }] })(n);
}
const tn = U(function(t, c) {
  const { columns: o, children: s, EmptyChild: l, onRowClick: g, quickSearch: f } = t, C = l || st, m = t.customizer || dt, y = t.customButton, u = t.gridTitle, [b, p] = R(!1), [M, E] = R(!1), [P, V] = R(!1), [A, T] = R("standard"), [I, B] = R(!1), [L, H] = R(""), {
    setQueryFilter: S,
    setQuickSearch: Q,
    setSortColumns: G,
    setEndPointOptions: z,
    gotoPage: W,
    setPageSize: d,
    getPageNo: N,
    refreshData: h,
    setQueryLimit: F,
    getQueryLimit: q,
    data: J,
    totalRecords: K,
    queryLimit: D,
    pageSizeOptions: k,
    filter: i
  } = ae(t), x = c || X(null);
  ne(x, () => ({
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
  }, re = at(o, m), r = (v) => {
    T(v);
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
  }, we = (v) => {
    E(!M);
  }, ge = () => {
    V(!P);
  }, Ne = () => {
  }, Se = () => {
  }, ke = () => {
    t.onNewClick();
  }, Oe = 200, Pe = !!t.pageSize, Re = !!f, De = {
    transform: b ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Ae = {
    transform: M ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, w = {
    transform: P ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, $ = Math.ceil(K / D.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("div", { children: [
    s,
    /* @__PURE__ */ a("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: /* @__PURE__ */ e("span", { className: "grid-header-right-content-text", children: u }) }),
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
              endAdornment: /* @__PURE__ */ e(Te, { position: "end", children: /* @__PURE__ */ e(Ee, { className: "card-filter-icon" }) })
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
          E(!1);
        }, children: /* @__PURE__ */ a("div", { className: "grid-header-button grid-filter-btn", onClick: we, children: [
          /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(Ge, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" }),
            /* @__PURE__ */ e(ce, { style: Ae, className: "avathar-arrw-icon" })
          ] }),
          M && /* @__PURE__ */ e("div", { className: "filter-dropdown-content", onClick: (v) => v.stopPropagation(), children: /* @__PURE__ */ e(
            gt,
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
          V(!1);
        }, children: /* @__PURE__ */ a("div", { className: "grid-header-button grid-export-btn", onClick: ge, children: [
          /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(rt, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Export" }),
            /* @__PURE__ */ e(ce, { style: w, className: "avathar-arrw-icon" })
          ] }),
          P && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ a("ul", { children: [
            /* @__PURE__ */ a("li", { onClick: Ne, children: [
              /* @__PURE__ */ e(yt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: Se, children: [
              /* @__PURE__ */ e(pt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: /* @__PURE__ */ e("div", { onClick: ke, children: /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
          t.customAddButton && t.customAddButton.icon ? At.cloneElement(t.customAddButton.icon, {
            className: "grid-button-icon"
          }) : /* @__PURE__ */ e(ct, { className: "grid-button-icon" }),
          t.customAddButton && t.customAddButton.text ? /* @__PURE__ */ e(ie, { children: t.customAddButton.text }) : /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(ie, {}),
        y && y.map((v, ee) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: v }, ee))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      lt,
      {
        columnDefs: re,
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
          page: N() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), vr = U(function(t, c) {
  const { children: o, EmptyChild: s, onRowClick: l, quickSearch: g } = t, f = t.columns, C = s || st, m = t.customizer || dt, y = t.customButton, u = t.gridTitle, [b, p] = R(!1), [M, E] = R(!1), [P, V] = R("standard"), [A, T] = R(!1), [I, B] = R(""), {
    setQueryFilter: L,
    setQuickSearch: H,
    setSortColumns: S,
    setEndPointOptions: Q,
    gotoPage: G,
    setPageSize: z,
    getPageNo: W,
    refreshData: d,
    setQueryLimit: N,
    getQueryLimit: h,
    data: F,
    totalRecords: q,
    queryLimit: J,
    pageSizeOptions: K,
    filter: D
  } = ae(t), [k, i] = R(f(F)), x = c || X(null);
  ne(x, () => ({
    setFilter: (w) => {
      L(w);
    },
    refresh: () => {
      d();
    },
    resetFilter() {
      L({});
    },
    setEndPointOptions: (w) => {
      Q(w);
    },
    addFilter: (w, $) => {
      L((v) => (v[w] = $, { ...v }));
    },
    setQueryLimit: (w) => {
      N(w);
    },
    getQueryLimit: () => h(),
    setSortOptions(w) {
      S(w);
    },
    getCurrentData: () => F
  }), [h, k]), Y(() => {
    i(f(F));
  }, [F]);
  const Z = (w, $) => {
    G($ - 1);
  }, re = at(k, m), r = (w) => {
    V(w);
  }, O = () => {
    p(!b);
  }, _ = () => P === "compact" ? { padding: "3px" } : P === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, se = () => P === "compact" ? { padding: "3px" } : P === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, Ce = () => {
    var w;
    switch (P) {
      case "compact":
        w = /* @__PURE__ */ e(pe, { className: "density-icon" });
        break;
      case "comfortable":
        w = /* @__PURE__ */ e(ve, { className: "density-icon" });
        break;
      default:
        w = /* @__PURE__ */ e(ye, { className: "grid-button-icon" });
        break;
    }
    return w;
  }, be = (w) => {
    const $ = w.target.value;
    B($), $ ? H($) : L({});
  }, xe = (w) => {
    l && l(w);
  }, Fe = (w) => {
    const $ = parseInt(w.target.value, 10);
    z($);
  }, we = () => {
    E(!M);
  }, ge = () => {
    t.onNewClick();
  }, Ne = () => {
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
              endAdornment: /* @__PURE__ */ e(Te, { position: "end", children: /* @__PURE__ */ e(Ee, { className: "card-filter-icon" }) })
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
        k.some((w) => w.searchable) && /* @__PURE__ */ a("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, onClick: () => T(!0), children: [
            /* @__PURE__ */ e(Ge, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ e(
            gt,
            {
              columns: k,
              setFilter: L,
              defaultFilter: D,
              isOpen: A,
              onClose: () => T(!1)
            }
          )
        ] }),
        /* @__PURE__ */ e(le, { onClickAway: () => {
          E(!1);
        }, children: /* @__PURE__ */ a("div", { className: "grid-header-button grid-export-btn", onClick: we, children: [
          /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(rt, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Export" }),
            /* @__PURE__ */ e(ce, { style: De, className: "avathar-arrw-icon" })
          ] }),
          M && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ a("ul", { children: [
            /* @__PURE__ */ a("li", { onClick: Ne, children: [
              /* @__PURE__ */ e(yt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: Se, children: [
              /* @__PURE__ */ e(pt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: t.customAddButton ? /* @__PURE__ */ e("div", { onClick: ge, children: t.customAddButton }) : /* @__PURE__ */ e("div", { onClick: ge, children: /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ e(ct, { className: "grid-button-icon" }),
          /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(ie, {}),
        y && y.map((w, $) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: w }, $))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      lt,
      {
        columnDefs: re,
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
            children: K.map((w) => /* @__PURE__ */ e(Be, { value: w, children: w }, w))
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
}), Cr = U(function(t, c) {
  const { columns: o, endPoint: s, storeFactory: l, layoutParams: g, pagination: f } = t, C = t.quickSearch || "", m = t.customButton, y = t.customAddButton, u = t.gridTitle, b = t.fetchAll, p = t.filterTopic, M = t.initialFetch, E = (V, A) => {
  };
  Y(() => {
    var V = _e.subscribe(t.topic, E);
    return () => {
      _e.unsubscribe(V);
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
  return /* @__PURE__ */ e(ie, { children: /* @__PURE__ */ e(Me.Provider, { value: l, children: /* @__PURE__ */ e(
    vt,
    {
      layout: P,
      context: g,
      customAddButton: y,
      onDataChange: t.onDataChange,
      gridTitle: u,
      defaultParams: t.defaultParams,
      customButton: m,
      customizer: t.customizer,
      ref: c,
      fetchAll: b,
      filterTopic: p,
      initialFetch: M
    }
  ) }) });
}), nn = U(function(t, c) {
  const o = t.layout, [s, l] = R(o.fields), g = o.pagination ? o.pagination : [15], f = de(Me), C = de(Ye);
  var m = o.storeOptions || {}, y = {};
  Bt(y, m, C);
  const u = f.getGridStore(y, o.storeOptions.endPoint);
  Y(() => {
    m.hasLayout && u.queryLayout({}).then((M) => {
      l(M.columns);
    });
  }, []);
  const { onClick: b, onNewClick: p } = Ht(o.actionOptions, C);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    tn,
    {
      columns: s,
      store: u,
      pageSize: g,
      onRowClick: b,
      onDataChange: t.onDataChange,
      gridTitle: t.gridTitle,
      customAddButton: t.customAddButton,
      onNewClick: p,
      customizer: t.customizer,
      customButton: t.customButton,
      quickSearch: o.quickSearch,
      ref: c,
      defaultParams: t.defaultParams,
      fetchAll: t.fetchAll,
      filterTopic: t.filterTopic,
      initialFetch: t.initialFetch
    }
  ) });
}), vt = nn, rn = (n) => {
  const { layout: t, context: c } = n;
  var o = t.Container || ot;
  return /* @__PURE__ */ e(mt, { fallback: /* @__PURE__ */ e("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ e(o, { ...t, children: ((l) => /* @__PURE__ */ e(
    vt,
    {
      context: c,
      layout: l
    }
  ))(t.tableLayout) }) });
}, on = (n) => {
  const { layout: t } = n;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ e(ft, { ...n });
    case "view":
      return /* @__PURE__ */ e(Zt, { ...n });
    case "grid":
      return /* @__PURE__ */ e(rn, { ...n });
    case "chart":
      return /* @__PURE__ */ e(Vt, { ...n });
    default:
      return /* @__PURE__ */ e(Kt, { ...n });
  }
};
function an(n, t) {
  var c = n || 1, o = t;
  return {
    w: c,
    h: o
  };
}
const Ct = (n) => {
  const { layout: t, context: c } = n, o = t.sections;
  function s(l, g, f) {
    const { w: C, h: m } = an(l.width, l.height);
    return /* @__PURE__ */ e(Lt, { sx: { width: C, height: m }, children: /* @__PURE__ */ e(
      on,
      {
        layout: l,
        context: g
      }
    ) }, (l.name || "tab") + f);
  }
  return /* @__PURE__ */ e("div", { style: { display: "flex", flexWrap: "wrap" }, children: o.map((l, g) => s(l, c, g)) });
}, Je = U(function(t, c) {
  const { layout: o } = t;
  ne(c, () => ({
    resetFilter() {
    }
  }), []);
  const s = {}, l = o.tabs;
  return /* @__PURE__ */ e("div", { children: l.map((g, f) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    Ct,
    {
      layout: g,
      context: s
    }
  ) }, g.name + f)) });
}), sn = (n) => {
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
  var { getFieldManager: l, getFormData: g, isFormValid: f } = jt(o, (y = t.callbacks) == null ? void 0 : y.onFormValidChange, sn(t.mode));
  ne(c, () => ({
    getData() {
      return g();
    },
    isValid() {
      return f();
    }
  }), []);
  const C = { formData: o }, m = s.tabs;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(he.Provider, { value: l, children: m.map((u, b) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    Ct,
    {
      layout: u,
      context: C
    }
  ) }, u.name + b)) }) });
}), ln = (n) => {
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
}, br = U(function(t, c) {
  const [o, s] = R(t.layout), l = t.mode ? t.mode : o.type ? o.type : "grid", g = t.layoutParams || {}, f = ln(l), C = X(0);
  return Y(() => {
    s(t.layout), C.current < 999999 ? C.current++ : C.current = 0;
  }, [t.layout]), /* @__PURE__ */ e(mt, { fallback: /* @__PURE__ */ e("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ e(Me.Provider, { value: t.storeFactory, children: /* @__PURE__ */ e(Ye.Provider, { value: g, children: /* @__PURE__ */ e(f, { ...t, ref: (m) => {
    c && (c.current = m);
  } }, C.current) }) }) });
}), xr = U(function(t, c) {
  const { title: o, Child: s, childProps: l, pageSize: g, customButton: f } = t, C = c || X(null), {
    setQueryFilter: m,
    refreshData: y,
    setSortColumns: u,
    setEndPointOptions: b,
    setQuickSearch: p,
    gotoPage: M,
    setPageSize: E,
    getPageNo: P,
    setQueryLimit: V,
    getQueryLimit: A,
    data: T,
    totalRecords: I,
    pageSizeOptions: B,
    queryLimit: L
  } = ae(t), H = t.listKeyProvider || ((h, F) => F);
  ne(C, () => ({
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
      V(h);
    },
    getQueryLimit: () => A(),
    getCurrentData: () => T,
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
    E(F);
  }, z = 200, W = !!g, d = !!t.quickSearch, N = Math.ceil(I / L.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "card-page-container", children: /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ a("div", { className: "card-header", children: [
      /* @__PURE__ */ e("div", { className: "card-left-content", children: o }),
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
              endAdornment: /* @__PURE__ */ e(Te, { position: "end", children: /* @__PURE__ */ e(Ee, { className: "card-filter-icon" }) })
            }
          }
        ),
        f && f.map((h, F) => /* @__PURE__ */ e("div", { className: "card-custom-button", children: h }, F))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      Et,
      {
        Child: s,
        childKeyProvider: H,
        preProcess: t.preProcess,
        dataList: T,
        childProps: l,
        EmptyChild: t.EmptyChild
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "card-pagination", children: W && N !== 0 && // <TablePagination
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
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(Mt, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ e(
        Qe,
        {
          count: N,
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
  vr as D,
  br as F,
  vt as G,
  _t as M,
  Cr as P,
  xr as S,
  Ct as T,
  tn as a,
  pr as b,
  $t as c,
  Ut as d,
  ft as e,
  en as f,
  ht as g,
  gt as h,
  rn as i,
  on as j,
  Je as k,
  Ue as l,
  ae as u
};
