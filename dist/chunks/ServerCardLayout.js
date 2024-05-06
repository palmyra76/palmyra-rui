import "../assets/ServerCardLayout.css";
import Ft from "../palmyra/mui/form/MuiDatePicker.js";
import wt from "../palmyra/mui/form/MuiDateTimePicker.js";
import St from "../palmyra/mui/form/MuiRadioGroup.js";
import _e from "../palmyra/mui/form/MuiSelect.js";
import Ot from "../palmyra/mui/form/MuiTextArea.js";
import Rt from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import Nt from "../palmyra/mui/form/MuiCheckBox.js";
import Pt from "../palmyra/mui/form/MuiSwitch.js";
import kt from "../palmyra/mui/form/MuiIOSSwitch.js";
import Dt from "../palmyra/mui/form/MuiPassword.js";
import At from "../palmyra/mui/form/MuiNumberField.js";
import Lt from "../palmyra/mui/form/MuiIntegerField.js";
import Ve from "../palmyra/mui/form/FieldDecorator.js";
import "../palmyra/mui/form/MuiSlider.js";
import Mt from "../palmyra/mui/form/MuiRating.js";
/* empty css                                */import "../palmyra/mui/textView/DateView.js";
import "../palmyra/mui/textView/OptionsView.js";
import "../palmyra/mui/textView/LookupView.js";
import { renderTitle as rt } from "../palmyra/mui/widget/InfoTooltip.js";
import { FieldManagerContext as he, StoreFactoryContext as Ee, LayoutParamsContext as ot } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as e, jsxs as h, Fragment as oe } from "react/jsx-runtime";
import Bt, { useState as P, useRef as _, useEffect as Y, forwardRef as U, useContext as de, useImperativeHandle as ne, useMemo as it } from "react";
import { a as Te } from "./AsyncTreeMenu.js";
import { FormControlLabel as $e, Checkbox as Je, FormControl as ie, FormHelperText as ze, Autocomplete as at, TextField as fe, CircularProgress as st, Button as te, InputAdornment as qe, ClickAwayListener as Ie, Select as Ge, MenuItem as Ke, Pagination as je, Box as It, Stack as Qt } from "@mui/material";
import Vt from "../palmyra/layout/card/CardLayout.js";
import Et from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as He, getFieldLabel as We } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as ue } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as me, setValueByKey as Tt } from "../palmyra/form/FormUtil.js";
import { T as Ue, a as Ye, c as zt, d as Xe } from "./index.esm2.js";
import { delay as lt, delayGenerator as qt, mergeDeep as Gt } from "../palmyra/utils/index.js";
import Kt from "../palmyra/mui/form/MuiDateRangePicker.js";
import ct from "../palmyra/layout/container/SectionContainer.js";
import jt from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as dt } from "../palmyra/grid/base/ColumnConverter.js";
import ut from "../palmyra/grid/base/EmptyChildTable.js";
import mt from "../palmyra/grid/base/TableX.js";
import { KeyboardArrowDown as Qe, Menu as ye, DensitySmall as ve, DensityLarge as be, Add as ht } from "@mui/icons-material";
import { NoopCustomizer as ft } from "../palmyra/grid/Types.js";
import { convertToField as Ht } from "../palmyra/grid/base/GridFieldConverter.js";
import { createFilterData as Wt } from "../palmyra/form/PalmyraFilterManager.js";
import gt from "../palmyra/grid/base/ExportOptions.js";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import "../palmyra/layout/tree/AsyncTreeMenuEditor.js";
import { topic as Ze } from "../palmyra/utils/pubsub/topic.js";
import "@tanstack/react-table";
import "react-chartjs-2";
import "./ChartJS.js";
import "dayjs";
import "../palmyra/form/PalmyraForm.js";
import "./jspdf.es.min.js";
import "react-dom";
import { getActionPublishers as Xt } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as pt } from "../palmyra/layout/ErrorBoundary.js";
import _t from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import $t from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as Jt } from "./PalmyraFieldManager.js";
import { useKeyValue as Ut } from "../palmyra/utils/pubsub/PubSubHelper.js";
const ae = (o) => {
  var K, J;
  const { store: t, quickSearch: l } = o, a = o.fetchAll != !1, [s, c] = P(o.endPointOptions), [y, g] = P(null), b = ((K = o.defaultParams) == null ? void 0 : K.filter) || {}, p = ((J = o.defaultParams) == null ? void 0 : J.sort) || {}, [C, u] = o.filterTopic ? Ut(o.filterTopic, b) : P(b), [F, v] = P({}), Q = _(o.initialFetch == !1), N = o.pageSize ? o.pageSize : 15;
  var D = N instanceof Array ? N : [N], R = N instanceof Array ? N[0] : N;
  const [B, L] = P({ limit: R, offset: 0, total: !0 }), [E, I] = P(null), W = () => Math.round(B.offset / B.limit), O = () => B, M = (x) => {
    L((n) => ({ limit: n.limit, total: n.total, offset: x * n.limit }));
  }, T = (x) => {
    const n = x > 10 || x == -1 ? x : 15;
    L((f) => {
      const j = Math.floor(f.offset / n) * n;
      return { limit: n, total: f.total, offset: j };
    });
  }, A = () => C ? Object.keys(C).length == 0 : !1, X = (x) => {
    I((n) => (setTimeout(() => {
      o.onDataChange && o.onDataChange(x, n);
    }, 300), x));
  };
  Y(() => {
    if (Q.current) {
      Q.current = !1;
      return;
    }
    (a || !A()) && q();
  }, [B, F, s]);
  const z = () => ({
    sortOrder: F && Object.keys(F).length > 0 ? F : p,
    total: !0,
    endPointVars: s,
    ...B,
    filter: { ...C, ...b }
  }), q = () => {
    const x = z();
    if (t)
      try {
        t.query(x).then((n) => {
          X(n.result), g(n.total);
        }).catch((n) => {
          var f = n.response ? n.response : n;
          console.error("error while fetching", f), d();
        });
      } catch (n) {
        console.error(n), m();
      }
    else
      console.error("Store is not provided for the Grid"), m();
  }, m = () => {
    X([]), g(0);
  }, d = () => {
    X(void 0), g(null);
  };
  return {
    setQueryFilter: (x) => {
      typeof x == "function" || x && Object.keys(x).length > 0 ? u(x) : u({}), M(0);
    },
    setQuickSearch: (x) => {
      const n = l;
      u(x ? (f) => (f[n] = x, { ...f }) : (f) => (delete f[n], { ...f })), M(0);
    },
    setSortColumns: (x) => {
      v(x);
    },
    setEndPointOptions: c,
    refreshData: q,
    gotoPage: M,
    setPageSize: T,
    getPageNo: W,
    getQueryLimit: O,
    setQueryLimit: L,
    getQueryRequest: z,
    filter: C,
    queryLimit: B,
    data: E,
    totalRecords: y,
    pageSizeOptions: D
  };
};
function et(o) {
  return o ? Array.isArray(o) ? o : typeof o == "string" ? o.split(",") : [o] : [];
}
const Sr = U(function(t, l) {
  const a = de(he), s = l || _(null), c = a(t, "checkbox", s), { mutateOptions: y, setMutateOptions: g } = c, [b, p] = P(!1), C = et(c.data), u = c.error, F = c.eventListeners, v = c.store, Q = t.pageSize || -1, N = { store: v, pageSize: Q, defaultParams: t.defaultParams }, { data: D } = ae(N), R = D, B = _(null), L = t.lookupOptions || {}, E = L.idAttribute || "id", I = L.displayAttribute || "name", W = t.showSelectedOnly && t.readonly, O = ue(E) ? (m) => me(E, m) : (m) => m[E], M = ue(I) ? (m) => me(I, m) : (m) => m[I];
  ne(s, () => ({
    focus() {
      B.current.focus();
    },
    isValid() {
      return !u.status;
    },
    clear() {
      c.setData("", !0);
    },
    getValue() {
      return c.getData();
    },
    setValue(m, d = !1) {
      c.setData(m, d);
    },
    setVisible(m) {
      g((d) => ({ ...d, visible: m }));
    },
    setRequired(m) {
      g((d) => ({ ...d, required: m }));
    },
    setReadOnly(m) {
      g((d) => ({ ...d, readonly: m }));
    },
    setAttribute(m) {
      g((d) => ({ ...d, ...m }));
    },
    setOptions(m) {
    },
    getOptions() {
    }
  }), [c]);
  var T = He(t, c.data, t.label);
  t.readonly && (T.inputprops = { readOnly: !0 });
  function A(m, d) {
    const S = et(c.data);
    var V = S.indexOf(m);
    d ? V < 0 && S.push(m) : V >= 0 && S.splice(V, 1), F.onValueChange(S.toString());
  }
  var X = {
    onBlur: F.onBlur,
    onFocus: F.onFocus,
    onChange: (m) => {
      A(m.target.value, m.target.checked);
    }
  };
  const z = (m) => {
    const d = m.toString();
    return C.includes(d);
  }, q = (m) => {
    const d = m.target.checked;
    p(d);
    var S = [];
    d && R.map((V) => {
      S.push(O(V));
    }), F.onValueChange(S.toString());
  };
  return /* @__PURE__ */ e("div", { className: t.className, children: y.visible && /* @__PURE__ */ h(
    Ve,
    {
      label: We(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ e("div", { children: t.hideSelectAll ? /* @__PURE__ */ e(oe, {}) : /* @__PURE__ */ e(
          $e,
          {
            control: /* @__PURE__ */ e(
              Je,
              {
                icon: /* @__PURE__ */ e(Ue, { style: { fontSize: "20px" } }),
                checkedIcon: /* @__PURE__ */ e(Ye, { style: { fontSize: "20px" } }),
                onChange: q
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
            error: u.status,
            ...T,
            children: [
              R ? R.filter((m) => W ? z(O(m)) : !0).map((m) => /* @__PURE__ */ e(
                $e,
                {
                  value: O(m),
                  control: /* @__PURE__ */ e(
                    Je,
                    {
                      icon: /* @__PURE__ */ e(Ue, { style: { fontSize: "20px" } }),
                      checkedIcon: /* @__PURE__ */ e(Ye, { style: { fontSize: "20px" } }),
                      ...X,
                      checked: z(O(m)),
                      disabled: t.readonly
                    }
                  ),
                  label: M(m)
                },
                O(m)
              )) : /* @__PURE__ */ e("div", { children: "No options provided" }),
              /* @__PURE__ */ e(ze, { className: "form-error-text", children: u.message })
            ]
          }
        )
      ]
    }
  ) });
}), Yt = qt(100), Zt = U(function(t, l) {
  const a = de(he), s = l || _(null), c = _(null), y = _(0), [g, b] = P([]), [p, C] = P(""), [u, F] = P(!1), v = a(t, "serverlookup", s), Q = t.store || v.store, N = t.lookupOptions || {}, D = N.idAttribute || "id", R = N.displayAttribute || "name", B = R, L = t.defaultParams, E = {
    store: Q,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: t.pageSize || 15,
    quickSearch: B,
    initialFetch: !1,
    defaultParams: L
  }, I = ae(E), W = v.eventListeners, O = v.error, { mutateOptions: M, setMutateOptions: T } = v, A = v.data, X = u && g.length < (A ? 2 : 1), { setQueryFilter: z, setEndPointOptions: q, setQuickSearch: m, totalRecords: d, refreshData: S } = I, V = I.data, G = ue(D) ? (i) => me(D, i) : (i) => i == null ? void 0 : i[D], K = ue(R) ? (i) => me(R, i) : (i) => i == null ? void 0 : i[R];
  Y(() => {
    var i = A != "" ? A : void 0;
    i && b([i]);
  }, [v.data]), Y(() => {
    const i = V ? [...V] : [], w = A != "" ? A : void 0, $ = G(w), se = K(w);
    i && $ && se && !j(i, $) && i.unshift(w), b(i), y.current < d && (y.current = d);
  }, [V, d]), Y(() => {
    lt(J);
  }, [p]), Y(() => {
    Yt(J);
  }, [u]);
  function J() {
    u && (p.length > 0 && p != K(A) ? m("*" + p + "*") : V ? m(null) : S());
  }
  var x = {
    onBlur: W.onBlur,
    onFocus: W.onFocus,
    onChange: (i, w) => {
      n(w);
    },
    onInputChange: (i, w) => (C(w), !0)
  };
  const n = (i) => {
    W.onValueChange(i);
  }, f = (i) => typeof i == "object" ? K(i) + "" : (console.log(i), "");
  function j(i, w) {
    return i.find(($) => {
      if (G($) == w)
        return $;
    });
  }
  ne(s, () => ({
    focus() {
      c.current.focus();
    },
    isValid() {
      return !O.status;
    },
    clear() {
      t.multiple ? v.setData([], !0) : v.setData(void 0, !0);
    },
    getValue() {
      return v.getData();
    },
    setValue(i, w = !1) {
      v.setData(i, w);
    },
    setVisible(i) {
      T((w) => ({ ...w, visible: i }));
    },
    setRequired(i) {
      T((w) => ({ ...w, required: i }));
    },
    setReadOnly(i) {
      T((w) => ({ ...w, readonly: i }));
    },
    setAttribute(i) {
      T((w) => ({ ...w, ...i }));
    },
    setFilter(i) {
      z(i);
    },
    resetFilter() {
      z({});
    },
    setEndPointOptions(i) {
      q(i);
    },
    getCurrentData: () => A,
    refresh: () => {
      S();
    },
    addFilter(i, w) {
      z(($) => ($[i] = w, { ...$ }));
    },
    setDefaultFilter(i) {
    },
    setSortOptions(i) {
    }
  }), [v, z]);
  var ee = He(t, A, t.label);
  M.readonly && (ee.inputProps = { readOnly: !0 });
  const re = (i, w) => i instanceof Array ? i.some(($) => G($) == G(w)) : G(i) == G(w);
  return /* @__PURE__ */ e(
    Ve,
    {
      label: We(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ h(ie, { fullWidth: !0, error: O.status, children: [
        /* @__PURE__ */ e(
          at,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: t.multiple,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            isOptionEqualToValue: re,
            filterOptions: (i) => i,
            renderInput: (i) => /* @__PURE__ */ e(
              fe,
              {
                ...i,
                inputRef: (w) => {
                  c.current = w;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                InputProps: {
                  ...i.InputProps,
                  endAdornment: /* @__PURE__ */ h(oe, { children: [
                    X ? /* @__PURE__ */ e(st, { color: "inherit", size: 18 }) : null,
                    i.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: f,
            ...ee,
            options: g,
            open: u,
            onClose: () => {
              F(!1);
            },
            onOpen: (i) => {
              F(!0);
            },
            ...x
          }
        ),
        /* @__PURE__ */ e(ze, { className: "form-error-text", children: O.message })
      ] })
    }
  );
}), en = U(function(t, l) {
  const a = de(he), s = l || _(null), c = _(null), y = _(0), [g, b] = P([]), [p, C] = P(""), [u, F] = P(!1), v = a(t, "autoComplete", s), Q = t.store || v.store, D = (t.lookupOptions || {}).attribute || "name", R = D, B = {
    store: Q,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: R,
    initialFetch: !1
  }, L = ae(B), E = v.eventListeners, I = v.error, { mutateOptions: W, setMutateOptions: O } = v, M = v.data, T = u && g.length < (M ? 2 : 1), { setQueryFilter: A, setEndPointOptions: X, setQuickSearch: z, totalRecords: q, refreshData: m } = L, d = L.data, S = ue(D) ? (n) => me(D, n) : (n) => n == null ? void 0 : n[D];
  Y(() => {
    var n = M != "" ? M : void 0;
    n && b([n]);
  }, [v.data]), Y(() => {
    const f = (d ? [...d] : []).map((ee) => S(ee)), j = M != "" ? M : void 0;
    f && j && !J(f, j) && f.unshift(j), b(f), y.current < q && (y.current = q);
  }, [d, q]), Y(() => {
    lt(V);
  }, [p, u]);
  function V() {
    u && (p.length > 0 && p != M ? z("*" + p + "*") : d ? z(null) : m());
  }
  var G = {
    onBlur: (n) => {
      K(p), E.onBlur(p);
    },
    onFocus: E.onFocus,
    onChange: (n, f) => {
      K(f);
    },
    onInputChange: (n, f) => (C(f), !0)
  };
  const K = (n) => {
    E.onValueChange(n);
  };
  function J(n, f) {
    return n.find((j) => {
      if (j == f)
        return j;
    });
  }
  ne(s, () => ({
    focus() {
      c.current.focus();
    },
    isValid() {
      return !I.status;
    },
    clear() {
      v.setData(void 0, !0);
    },
    getValue() {
      return v.getData();
    },
    setValue(n, f = !1) {
      v.setData(n, f);
    },
    setVisible(n) {
      O((f) => ({ ...f, visible: n }));
    },
    setRequired(n) {
      O((f) => ({ ...f, required: n }));
    },
    setReadOnly(n) {
      O((f) => ({ ...f, readonly: n }));
    },
    setAttribute(n) {
      O((f) => ({ ...f, ...n }));
    },
    setFilter(n) {
      A(n);
    },
    resetFilter() {
      A({});
    },
    setEndPointOptions(n) {
      X(n);
    },
    getCurrentData: () => M,
    refresh: () => {
      m();
    },
    addFilter(n, f) {
      A((j) => (j[n] = f, { ...j }));
    },
    setDefaultFilter(n) {
    },
    setSortOptions(n) {
    }
  }), [v, A]);
  var x = He(t, M, t.label);
  return W.readonly && (x.inputProps = { readOnly: !0 }), /* @__PURE__ */ e(
    Ve,
    {
      label: We(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ h(ie, { fullWidth: !0, error: I.status, children: [
        /* @__PURE__ */ e(
          at,
          {
            freeSolo: !0,
            autoSelect: !0,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            filterOptions: (n) => n,
            renderInput: (n) => /* @__PURE__ */ e(
              fe,
              {
                ...n,
                inputRef: (f) => {
                  c.current = f;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                ...x,
                InputProps: {
                  ...n.InputProps,
                  endAdornment: /* @__PURE__ */ h(oe, { children: [
                    T ? /* @__PURE__ */ e(st, { color: "inherit", size: 18 }) : null,
                    n.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...x,
            options: g,
            open: u,
            onClose: () => {
              F(!1);
            },
            onOpen: (n) => {
              F(!0);
            },
            ...G
          }
        ),
        /* @__PURE__ */ e(ze, { className: "form-error-text", children: I.message })
      ] })
    }
  );
}), tn = (o) => {
  const { fieldDef: t } = o;
  return /* @__PURE__ */ h("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, H = (o, t) => {
  const l = o.fieldDef;
  return /* @__PURE__ */ e(
    t,
    {
      ...l,
      label: o.title
    },
    l.title + l.attribute
  );
}, yt = (o, t, l) => {
  const { type: a } = o, s = { fieldDef: o, title: l };
  switch (a) {
    case "string":
      return H(s, Rt);
    case "radio":
      return H(s, St);
    case "select":
      return H(s, _e);
    case "date":
      return H(s, Ft);
    case "datetime":
      return H(s, wt);
    case "checkbox":
      return H(s, Nt);
    case "serverlookup":
      return H(s, Zt);
    case "textarea":
      return H(s, Ot);
    case "switch":
      return H(s, Pt);
    case "iosswitch":
      return H(s, kt);
    case "password":
      return H(s, Dt);
    case "rating":
      return H(s, Mt);
    case "float":
    case "number":
    case "numbersOnly":
      return H(s, At);
    case "integer":
      return H(s, Lt);
    case "multiSelect":
      return H(s, _e);
    case "dateRange":
      return H(s, Kt);
    case "autoComplete":
      return H(s, en);
    default:
      return tn(s);
  }
}, nn = U(function(t, l) {
  var C;
  const { formLayout: a, context: s } = t, { formData: c } = s, y = a.Container;
  _({});
  const g = it(() => (u) => yt(u), [c.data]);
  var b = ((C = a.options) == null ? void 0 : C.columns) || 1, p = { columns: b };
  return y ? /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: a.fields.map((u, F) => /* @__PURE__ */ e(
    y,
    {
      index: F,
      field: u,
      label: u.title,
      options: p,
      children: g(u)
    },
    u.attribute + u.name + u.type
  )) }) : /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: a.fields.map((u, F) => g(u)) });
}), vt = (o) => {
  const { layout: t, context: l } = o;
  var a = t.Renderer || nn, s = t.Container || ct;
  const c = (y) => /* @__PURE__ */ e(
    a,
    {
      context: l,
      formLayout: y
    }
  );
  return /* @__PURE__ */ e(
    s,
    {
      hideTitle: t.hideTitle,
      title: t.title,
      name: t.name,
      children: /* @__PURE__ */ e(jt, { columns: t.columns, children: c(t.formLayout) })
    }
  );
};
const rn = (o) => {
  const { formLayout: t } = o;
  var l = "palmyra-form-field-container";
  const a = t.options;
  if (a && a.columns)
    switch (a.columns) {
      case 2:
        return l + " palmyra-form-field-container-2column";
      case 3:
        return l + " palmyra-form-field-container-3column";
      case 4:
        return l + " palmyra-form-field-container-4column";
    }
  return l;
}, on = U(function(t, l) {
  const { formLayout: a, context: s } = t, { formData: c } = s, y = _({}), g = rn(t), b = "palmyra-form-field-data", p = it(() => (C) => yt(C, y, C.label), [c.data]);
  return /* @__PURE__ */ e("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: a.fields.map((C, u) => /* @__PURE__ */ e("div", { className: C.type === "dateRange" ? "palmyra-form-field-container" : g, children: /* @__PURE__ */ e("div", { className: b, children: p(C) }) }, C.attribute)) });
}), bt = ({ columns: o, isOpen: t, onClose: l, setFilter: a, defaultFilter: s = {} }) => {
  const c = {};
  Object.keys(s || {}).map((u) => {
    const F = s[u];
    Tt(u, c, F);
  });
  var { getFieldManager: y, getFilterData: g } = Wt(c);
  const b = () => {
    a({}), l();
  }, p = () => {
    var u = g();
    a && a(u), l();
  }, C = Ht(o);
  return /* @__PURE__ */ h("div", { className: "grid-filter-container", children: [
    /* @__PURE__ */ e("div", { className: "grid-filter-content", children: /* @__PURE__ */ e(he.Provider, { value: y, children: /* @__PURE__ */ e(
      vt,
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
          Renderer: on
        }
      }
    ) }) }),
    /* @__PURE__ */ h("div", { className: "grid-filter-btn-container", children: [
      /* @__PURE__ */ h(te, { className: "secondary-filled-button", disableRipple: !0, onClick: b, children: [
        /* @__PURE__ */ e(zt, { className: "button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ h(te, { className: "filled-button", disableRipple: !0, onClick: p, children: [
        /* @__PURE__ */ e(Xe, { className: "button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
}, an = U(function(t, l) {
  const { columns: a, children: s, EmptyChild: c, onRowClick: y, quickSearch: g, exportOptions: b, densityOption: p } = t, C = c || ut, u = t.customizer || ft, F = t.customButton, [v, Q] = P(!1), [N, D] = P(!1), [R, B] = P(!1), [L, E] = P("standard"), [I, W] = P(""), {
    setQueryFilter: O,
    setQuickSearch: M,
    setSortColumns: T,
    setEndPointOptions: A,
    gotoPage: X,
    setPageSize: z,
    getPageNo: q,
    refreshData: m,
    setQueryLimit: d,
    getQueryLimit: S,
    getQueryRequest: V,
    data: G,
    totalRecords: K,
    queryLimit: J,
    pageSizeOptions: x,
    filter: n
  } = ae(t), f = l || _(null);
  ne(f, () => ({
    setFilter: (r) => {
      O(r);
    },
    refresh: () => {
      m();
    },
    resetFilter() {
      O({});
    },
    setEndPointOptions: (r) => {
      A(r);
    },
    addFilter: (r, k) => {
      O((Z) => (Z[r] = k, { ...Z }));
    },
    setQueryLimit: (r) => {
      d(r);
    },
    getQueryLimit: () => S(),
    setSortOptions(r) {
      T(r);
    },
    getCurrentData: () => G
  }), [S]);
  const j = (r, k) => {
    X(k - 1);
  }, ee = dt(a, u), re = (r) => {
    E(r);
  }, i = () => {
    Q(!v);
  }, w = () => L === "compact" ? {
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
  }, $ = () => L === "compact" ? { padding: "3px", borderRight: "1px solid var(--border-color)" } : L === "comfortable" ? { padding: "15px", fontSize: "18px", borderRight: "1px solid var(--border-color)" } : { padding: "7px", borderRight: "1px solid var(--border-color)" }, se = () => {
    var r;
    switch (L) {
      case "compact":
        r = /* @__PURE__ */ e(ve, { className: "density-icon" });
        break;
      case "comfortable":
        r = /* @__PURE__ */ e(be, { className: "density-icon" });
        break;
      default:
        r = /* @__PURE__ */ e(ye, { className: "grid-button-icon" });
        break;
    }
    return r;
  }, Ce = (r) => {
    const k = r.target.value;
    W(k), k ? M(k) : O({});
  }, xe = (r) => {
    y && y(r);
  }, Fe = (r) => {
    const k = parseInt(r.target.value, 10);
    z(k);
  }, we = (r) => {
    D(!N);
  }, Se = () => {
    B(!R);
  }, Oe = () => {
    B(!1);
  }, Re = (r) => {
    const Z = { ...V(), format: r, limit: -1 };
    t.store.export(Z), B(!R);
  }, Ne = () => {
    t.onNewClick();
  }, ge = 200, Pe = !!t.pageSize, ke = !!g, De = {
    transform: v ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Ae = {
    transform: N ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Le = {
    transform: R ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, pe = Math.ceil(K / J.limit), le = q(), ce = J.limit, Me = le * ce + 1, Be = Math.min((le + 1) * ce, K);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { children: [
    s,
    /* @__PURE__ */ h("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: rt(t.title) }),
      /* @__PURE__ */ h("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: ke && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: ge },
            type: "text",
            value: I,
            onChange: Ce,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(qe, { position: "end", children: /* @__PURE__ */ e(Te, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        p && /* @__PURE__ */ e(Ie, { onClickAway: () => {
          Q(!1);
        }, children: /* @__PURE__ */ h("div", { className: "grid-header-button grid-density-btn", onClick: i, children: [
          /* @__PURE__ */ h(te, { className: "grid-btn", disableRipple: !0, children: [
            se(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(Qe, { style: De, className: "avathar-arrw-icon" })
          ] }),
          v && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ h("ul", { children: [
            /* @__PURE__ */ h("li", { onClick: () => re("standard"), children: [
              /* @__PURE__ */ e(ye, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => re("compact"), children: [
              /* @__PURE__ */ e(ve, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => re("comfortable"), children: [
              /* @__PURE__ */ e(be, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        a.some((r) => r.searchable) && /* @__PURE__ */ e(Ie, { onClickAway: () => {
          D(!1);
        }, children: /* @__PURE__ */ h("div", { className: "grid-header-button grid-filter-btn", onClick: we, children: [
          /* @__PURE__ */ h(te, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(Xe, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" }),
            /* @__PURE__ */ e(Qe, { style: Ae, className: "avathar-arrw-icon" })
          ] }),
          N && /* @__PURE__ */ e("div", { className: "filter-dropdown-content", onClick: (r) => r.stopPropagation(), children: /* @__PURE__ */ e(
            bt,
            {
              columns: a,
              setFilter: O,
              defaultFilter: n,
              isOpen: N,
              onClose: () => D(!1)
            }
          ) })
        ] }) }),
        b && /* @__PURE__ */ e(
          gt,
          {
            dropdownOpen: R,
            dropdownClose: Oe,
            onExportClick: Se,
            arrowStyle: Le,
            exportOption: b,
            exportData: Re
          }
        ),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: /* @__PURE__ */ e("div", { onClick: Ne, children: /* @__PURE__ */ h(te, { className: "grid-btn", disableRipple: !0, children: [
          t.customAddButton && t.customAddButton.icon ? Bt.cloneElement(t.customAddButton.icon, {
            className: "grid-button-icon"
          }) : /* @__PURE__ */ e(ht, { className: "grid-button-icon" }),
          t.customAddButton && t.customAddButton.text ? /* @__PURE__ */ e(oe, { children: t.customAddButton.text }) : /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(oe, {}),
        F && F.map((r, k) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: r }, k))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      mt,
      {
        columnDefs: ee,
        EmptyChild: C,
        customizer: u,
        rowData: G,
        onRowClick: xe,
        onRowStyle: w,
        onHeaderStyle: $,
        onSortColumn: T
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: Pe && pe !== 0 && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: x && x.length > 1 ? /* @__PURE__ */ e(ie, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Ge,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: x[0],
            onChange: Fe,
            label: "Rows per page",
            children: x.map((r) => /* @__PURE__ */ e(Ke, { value: r, children: r }, r))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("span", { children: [
          Me,
          " - ",
          Be,
          " of ",
          K,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        je,
        {
          count: pe,
          shape: "rounded",
          onChange: j,
          page: q() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), Or = U(function(t, l) {
  const { children: a, EmptyChild: s, onRowClick: c, quickSearch: y, exportOptions: g } = t, b = t.columns, p = s || ut, C = t.customizer || ft, u = t.customButton, F = t.title, [v, Q] = P(!1), [N, D] = P(!1), [R, B] = P("standard"), [L, E] = P(!1), [I, W] = P(""), {
    setQueryFilter: O,
    setQuickSearch: M,
    setSortColumns: T,
    setEndPointOptions: A,
    gotoPage: X,
    setPageSize: z,
    getPageNo: q,
    refreshData: m,
    setQueryLimit: d,
    getQueryLimit: S,
    getQueryRequest: V,
    data: G,
    totalRecords: K,
    queryLimit: J,
    pageSizeOptions: x,
    filter: n
  } = ae(t), [f, j] = P(b(G)), ee = l || _(null);
  ne(ee, () => ({
    setFilter: (r) => {
      O(r);
    },
    refresh: () => {
      m();
    },
    resetFilter() {
      O({});
    },
    setEndPointOptions: (r) => {
      A(r);
    },
    addFilter: (r, k) => {
      O((Z) => (Z[r] = k, { ...Z }));
    },
    setQueryLimit: (r) => {
      d(r);
    },
    getQueryLimit: () => S(),
    setSortOptions(r) {
      T(r);
    },
    getCurrentData: () => G
  }), [S, f]), Y(() => {
    j(b(G));
  }, [G]);
  const re = (r, k) => {
    X(k - 1);
  }, i = dt(f, C), w = (r) => {
    B(r);
  }, $ = () => {
    Q(!v);
  }, se = () => R === "compact" ? {
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
  }, Ce = () => R === "compact" ? { padding: "3px", borderRight: "1px solid var(--border-color)" } : R === "comfortable" ? { padding: "15px", fontSize: "18px", borderRight: "1px solid var(--border-color)" } : { padding: "7px", borderRight: "1px solid var(--border-color)" }, xe = () => {
    var r;
    switch (R) {
      case "compact":
        r = /* @__PURE__ */ e(ve, { className: "density-icon" });
        break;
      case "comfortable":
        r = /* @__PURE__ */ e(be, { className: "density-icon" });
        break;
      default:
        r = /* @__PURE__ */ e(ye, { className: "grid-button-icon" });
        break;
    }
    return r;
  }, Fe = (r) => {
    const k = r.target.value;
    W(k), k ? M(k) : O({});
  }, we = (r) => {
    c && c(r);
  }, Se = (r) => {
    const k = parseInt(r.target.value, 10);
    z(k);
  }, Oe = () => {
    D(!N);
  }, Re = () => {
    D(!1);
  }, Ne = (r) => {
    const Z = { ...V(), format: r, limit: -1 };
    t.store.export(Z), D(!N);
  }, ge = () => {
    t.onNewClick();
  }, Pe = 200, ke = !!t.pageSize, De = !!y, Ae = {
    transform: v ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Le = {
    transform: N ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, pe = Math.ceil(K / J.limit), le = q(), ce = J.limit, Me = le * ce + 1, Be = Math.min((le + 1) * ce, K);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { children: [
    a,
    /* @__PURE__ */ h("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: /* @__PURE__ */ e("span", { className: "grid-header-right-content-text", children: F }) }),
      /* @__PURE__ */ h("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: De && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: Pe },
            type: "text",
            value: I,
            onChange: Fe,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(qe, { position: "end", children: /* @__PURE__ */ e(Te, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(Ie, { onClickAway: () => {
          Q(!1);
        }, children: /* @__PURE__ */ h("div", { className: "grid-header-button grid-density-btn", onClick: $, children: [
          /* @__PURE__ */ h(te, { className: "grid-btn", disableRipple: !0, children: [
            xe(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(Qe, { style: Ae, className: "avathar-arrw-icon" })
          ] }),
          v && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ h("ul", { children: [
            /* @__PURE__ */ h("li", { onClick: () => w("standard"), children: [
              /* @__PURE__ */ e(ye, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => w("compact"), children: [
              /* @__PURE__ */ e(ve, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => w("comfortable"), children: [
              /* @__PURE__ */ e(be, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        f.some((r) => r.searchable) && /* @__PURE__ */ h("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ h(te, { className: "grid-btn", disableRipple: !0, onClick: () => E(!0), children: [
            /* @__PURE__ */ e(Xe, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ e(
            bt,
            {
              columns: f,
              setFilter: O,
              defaultFilter: n,
              isOpen: L,
              onClose: () => E(!1)
            }
          )
        ] }),
        g && /* @__PURE__ */ e(
          gt,
          {
            dropdownOpen: N,
            dropdownClose: Re,
            onExportClick: Oe,
            arrowStyle: Le,
            exportOption: g,
            exportData: Ne
          }
        ),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: t.customAddButton ? /* @__PURE__ */ e("div", { onClick: ge, children: t.customAddButton }) : /* @__PURE__ */ e("div", { onClick: ge, children: /* @__PURE__ */ h(te, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ e(ht, { className: "grid-button-icon" }),
          /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(oe, {}),
        u && u.map((r, k) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: r }, k))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      mt,
      {
        columnDefs: i,
        EmptyChild: p,
        customizer: C,
        rowData: G,
        onRowClick: we,
        onRowStyle: se,
        onHeaderStyle: Ce,
        onSortColumn: T
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: ke && K !== null && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: x && x.length > 1 ? /* @__PURE__ */ e(ie, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Ge,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: x[0],
            onChange: Se,
            label: "Rows per page",
            children: x.map((r) => /* @__PURE__ */ e(Ke, { value: r, children: r }, r))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("span", { children: [
          Me,
          " - ",
          Be,
          " of ",
          K,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        je,
        {
          count: pe,
          shape: "rounded",
          onChange: re,
          page: q() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), Rr = U(function(t, l) {
  const { columns: a, endPoint: s, storeFactory: c, layoutParams: y, pagination: g } = t, b = t.quickSearch || "", p = t.customButton, C = t.customAddButton, u = t.title, F = t.fetchAll, v = t.filterTopic, Q = t.initialFetch, N = (R, B) => {
  };
  Y(() => {
    var R = Ze.subscribe(t.topic, N);
    return () => {
      Ze.unsubscribe(R);
    };
  }, [t.topic]);
  const D = {
    fields: a,
    pagination: g,
    quickSearch: b,
    storeOptions: {
      endPoint: s
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ e(oe, { children: /* @__PURE__ */ e(Ee.Provider, { value: c, children: /* @__PURE__ */ e(
    Ct,
    {
      layout: D,
      context: y,
      customAddButton: C,
      onDataChange: t.onDataChange,
      title: u,
      densityOption: t.densityOption,
      defaultParams: t.defaultParams,
      customButton: p,
      customizer: t.customizer,
      ref: l,
      exportOptions: t.exportOptions,
      fetchAll: F,
      filterTopic: v,
      initialFetch: Q
    }
  ) }) });
}), sn = U(function(t, l) {
  const a = t.layout, [s, c] = P(a.fields), y = a.pagination ? a.pagination : [15], g = de(Ee), b = de(ot);
  var p = a.storeOptions || {}, C = {};
  Gt(C, p, b);
  const u = g.getGridStore(C, a.storeOptions.endPoint);
  Y(() => {
    p.hasLayout && u.queryLayout({}).then((Q) => {
      c(Q.columns);
    });
  }, []);
  const { onClick: F, onNewClick: v } = Xt(a.actionOptions, b);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    an,
    {
      columns: s,
      store: u,
      pageSize: y,
      onRowClick: F,
      exportOptions: t.exportOptions,
      onDataChange: t.onDataChange,
      title: t.title,
      customAddButton: t.customAddButton,
      onNewClick: v,
      customizer: t.customizer,
      customButton: t.customButton,
      quickSearch: a.quickSearch,
      ref: l,
      defaultParams: t.defaultParams,
      densityOption: t.densityOption,
      fetchAll: t.fetchAll,
      filterTopic: t.filterTopic,
      initialFetch: t.initialFetch
    }
  ) });
}), Ct = sn, ln = (o) => {
  const { layout: t, context: l } = o;
  var a = t.Container || ct;
  return /* @__PURE__ */ e(pt, { fallback: /* @__PURE__ */ e("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ e(a, { ...t, children: ((c) => /* @__PURE__ */ e(
    Ct,
    {
      context: l,
      layout: c
    }
  ))(t.tableLayout) }) });
}, cn = (o) => {
  const { layout: t } = o;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ e(vt, { ...o });
    case "view":
      return /* @__PURE__ */ e($t, { ...o });
    case "grid":
      return /* @__PURE__ */ e(ln, { ...o });
    case "chart":
      return /* @__PURE__ */ e(Et, { ...o });
    default:
      return /* @__PURE__ */ e(_t, { ...o });
  }
};
function dn(o, t) {
  var l = o || 1, a = t;
  return {
    w: l,
    h: a
  };
}
const xt = (o) => {
  const { layout: t, context: l } = o, a = t.sections;
  function s(c, y, g) {
    const { w: b, h: p } = dn(c.width, c.height);
    return /* @__PURE__ */ e(It, { sx: { width: b, height: p }, children: /* @__PURE__ */ e(
      cn,
      {
        layout: c,
        context: y
      }
    ) }, (c.name || "tab") + g);
  }
  return /* @__PURE__ */ e("div", { style: { display: "flex", flexWrap: "wrap" }, children: a.map((c, y) => s(c, l, y)) });
}, tt = U(function(t, l) {
  const { layout: a } = t;
  ne(l, () => ({
    resetFilter() {
    }
  }), []);
  const s = {}, c = a.tabs;
  return /* @__PURE__ */ e("div", { children: c.map((y, g) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    xt,
    {
      layout: y,
      context: s
    }
  ) }, y.name + g)) });
}), un = (o) => {
  switch (o) {
    case "formEdit":
      return "edit";
    case "formNew":
      return "new";
    case "formView":
      return "view";
    default:
      return "edit";
  }
}, nt = U(function(t, l) {
  var C;
  const a = t.data || {}, { layout: s } = t;
  var { getFieldManager: c, getFormData: y, isFormValid: g } = Jt(a, (C = t.callbacks) == null ? void 0 : C.onFormValidChange, un(t.mode));
  ne(l, () => ({
    getData() {
      return y();
    },
    isValid() {
      return g();
    }
  }), []);
  const b = { formData: a }, p = s.tabs;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(he.Provider, { value: c, children: p.map((u, F) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    xt,
    {
      layout: u,
      context: b
    }
  ) }, u.name + F)) }) });
}), mn = (o) => {
  switch (o) {
    case "grid":
      return tt;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), nt;
    case "formEdit":
    case "formNew":
    case "formView":
      return nt;
    default:
      return tt;
  }
}, Nr = U(function(t, l) {
  const [a, s] = P(t.layout), c = t.mode ? t.mode : a.type ? a.type : "grid", y = t.layoutParams || {}, g = mn(c), b = _(0);
  return Y(() => {
    s(t.layout), b.current < 999999 ? b.current++ : b.current = 0;
  }, [t.layout]), /* @__PURE__ */ e(pt, { fallback: /* @__PURE__ */ e("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ e(Ee.Provider, { value: t.storeFactory, children: /* @__PURE__ */ e(ot.Provider, { value: y, children: /* @__PURE__ */ e(g, { ...t, ref: (p) => {
    l && (l.current = p);
  } }, b.current) }) }) });
}), Pr = U(function(t, l) {
  const { title: a, Child: s, childProps: c, pageSize: y, customButton: g } = t, b = l || _(null), {
    setQueryFilter: p,
    refreshData: C,
    setSortColumns: u,
    setEndPointOptions: F,
    setQuickSearch: v,
    gotoPage: Q,
    setPageSize: N,
    getPageNo: D,
    setQueryLimit: R,
    getQueryLimit: B,
    data: L,
    totalRecords: E,
    pageSizeOptions: I,
    queryLimit: W
  } = ae(t), O = t.listKeyProvider || ((d, S) => S);
  ne(b, () => ({
    setFilter: (d) => {
      p(d);
    },
    refresh: () => {
      C();
    },
    resetFilter() {
      p({});
    },
    setEndPointOptions: (d) => {
      F(d);
    },
    addFilter: (d, S) => {
      p((V) => (V[d] = S, { ...V }));
    },
    setQueryLimit: (d) => {
      R(d);
    },
    getQueryLimit: () => B(),
    getCurrentData: () => L,
    setSortOptions(d) {
      u(d);
    }
  }), [p]);
  const M = (d, S) => {
    Q(S - 1);
  }, T = (d) => {
    const S = d.target.value;
    v(S);
  }, A = (d) => {
    const S = parseInt(d.target.value, 10);
    N(S);
  }, X = 200, z = !!y, q = !!t.quickSearch, m = Math.ceil(E / W.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "card-page-container", children: /* @__PURE__ */ h("div", { children: [
    /* @__PURE__ */ h("div", { className: "card-header", children: [
      /* @__PURE__ */ e("div", { className: "card-left-content", children: rt(a) }),
      /* @__PURE__ */ h("div", { className: "card-right-content", children: [
        q && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: X },
            type: "text",
            onChange: T,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(qe, { position: "end", children: /* @__PURE__ */ e(Te, { className: "card-filter-icon" }) })
            }
          }
        ),
        g && g.map((d, S) => /* @__PURE__ */ e("div", { className: "card-custom-button", children: d }, S))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      Vt,
      {
        Child: s,
        childKeyProvider: O,
        preProcess: t.preProcess,
        dataList: L,
        childProps: c,
        EmptyChild: t.EmptyChild
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "card-pagination", children: z && m !== 0 && // <TablePagination
    //     component="div"
    //     count={totalRecords || 0}
    //     page={getPageNo()}
    //     onPageChange={nextPage}
    //     rowsPerPage={queryLimit.limit}
    //     rowsPerPageOptions={pageSizeOptions || []}
    //     onRowsPerPageChange={handleRowsPerPageChange}
    // />
    /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { children: I && I.length > 1 ? /* @__PURE__ */ e(ie, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Ge,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: I[0],
            onChange: A,
            label: "Rows per page",
            children: I.map((d) => /* @__PURE__ */ e(Ke, { value: d, children: d }, d))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("span", { children: [
          "of ",
          E,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(Qt, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ e(
        je,
        {
          count: m,
          shape: "rounded",
          onChange: M,
          page: D() + 1
        }
      ) }) })
    ] }) })
  ] }) }) });
});
export {
  Or as D,
  Nr as F,
  Ct as G,
  Zt as M,
  Rr as P,
  Pr as S,
  xt as T,
  an as a,
  Sr as b,
  en as c,
  nn as d,
  vt as e,
  on as f,
  yt as g,
  bt as h,
  ln as i,
  cn as j,
  tt as k,
  nt as l,
  ae as u
};
