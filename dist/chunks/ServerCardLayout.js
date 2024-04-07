import "../assets/ServerCardLayout.css";
import Ot from "../palmyra/mui/form/MuiDatePicker.js";
import St from "../palmyra/mui/form/MuiDateTimePicker.js";
import Rt from "../palmyra/mui/form/MuiRadioGroup.js";
import Je from "../palmyra/mui/form/MuiSelect.js";
import Nt from "../palmyra/mui/form/MuiTextArea.js";
import Pt from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import kt from "../palmyra/mui/form/MuiCheckBox.js";
import Dt from "../palmyra/mui/form/MuiSwitch.js";
import At from "../palmyra/mui/form/MuiIOSSwitch.js";
import Lt from "../palmyra/mui/form/MuiPassword.js";
import Mt from "../palmyra/mui/form/MuiNumberField.js";
import Bt from "../palmyra/mui/form/MuiIntegerField.js";
import Te from "../palmyra/mui/form/FieldDecorator.js";
import { renderTitle as it } from "../palmyra/mui/widget/InfoTooltip.js";
import { FieldManagerContext as he, StoreFactoryContext as ze, LayoutParamsContext as at } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as e, jsxs as h, Fragment as oe } from "react/jsx-runtime";
import It, { useState as N, useRef as _, useEffect as ee, forwardRef as Y, useContext as de, useImperativeHandle as re, useMemo as st } from "react";
import { a as qe } from "./AsyncTreeMenu.js";
import { FormControlLabel as Ue, Checkbox as Ye, FormControl as ie, FormHelperText as Ge, Autocomplete as lt, TextField as fe, CircularProgress as ct, Button as ne, InputAdornment as Ke, ClickAwayListener as Ve, Select as je, MenuItem as He, Pagination as We, Box as Qt, Stack as Vt } from "@mui/material";
import Et from "../palmyra/layout/card/CardLayout.js";
import Tt from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Xe, getFieldLabel as _e } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as ue } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as me, setValueByKey as zt } from "../palmyra/form/FormUtil.js";
import { T as Ze, a as et, c as qt, d as $e } from "./index.esm2.js";
import { delay as dt, delayGenerator as Gt, mergeDeep as Kt } from "../palmyra/utils/index.js";
import jt from "../palmyra/mui/form/MuiDateRangePicker.js";
import ut from "../palmyra/layout/container/SectionContainer.js";
import Ht from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as mt } from "../palmyra/grid/base/ColumnConverter.js";
import ht from "../palmyra/grid/base/EmptyChildTable.js";
import ft from "../palmyra/grid/base/TableX.js";
import { KeyboardArrowDown as Ee, Menu as Ce, DensitySmall as xe, DensityLarge as Fe, Add as gt } from "@mui/icons-material";
import { NoopCustomizer as pt } from "../palmyra/grid/Types.js";
import { convertToField as Wt } from "../palmyra/grid/base/GridFieldConverter.js";
import { createFilterData as Xt } from "../palmyra/form/PalmyraFilterManager.js";
import yt from "../palmyra/grid/base/ExportOptions.js";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import "../palmyra/layout/tree/AsyncTreeMenuEditor.js";
import { topic as tt } from "../palmyra/utils/pubsub/topic.js";
import "@tanstack/react-table";
import "react-chartjs-2";
import "./ChartJS.js";
import "dayjs";
import "../palmyra/form/PalmyraForm.js";
import { getActionPublishers as _t } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as vt } from "../palmyra/layout/ErrorBoundary.js";
import $t from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import Jt from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as Ut } from "./PalmyraFieldManager.js";
import { useKeyValue as Yt } from "../palmyra/utils/pubsub/PubSubHelper.js";
const ae = (r) => {
  var H, U;
  const { store: t, quickSearch: c } = r, i = r.fetchAll != !1, [a, s] = N(r.endPointOptions), [y, f] = N(null), b = ((H = r.defaultParams) == null ? void 0 : H.filter) || {}, g = ((U = r.defaultParams) == null ? void 0 : U.sort) || {}, [C, d] = r.filterTopic ? Yt(r.filterTopic, b) : N(b), [O, v] = N({}), V = _(r.initialFetch == !1), k = r.pageSize ? r.pageSize : 15;
  var D = k instanceof Array ? k : [k], R = k instanceof Array ? k[0] : k;
  const [I, L] = N({ limit: R, offset: 0, total: !0 }), [T, Q] = N(null), X = () => Math.round(I.offset / I.limit), P = () => I, M = (x) => {
    L((n) => ({ limit: n.limit, total: n.total, offset: x * n.limit }));
  }, B = (x) => {
    const n = x > 10 || x == -1 ? x : 15;
    L((m) => {
      const K = Math.floor(m.offset / n) * n;
      return { limit: n, total: m.total, offset: K };
    });
  }, A = () => C ? Object.keys(C).length == 0 : !1, j = (x) => {
    Q((n) => (setTimeout(() => {
      r.onDataChange && r.onDataChange(x, n);
    }, 300), x));
  };
  ee(() => {
    if (V.current) {
      V.current = !1;
      return;
    }
    (i || !A()) && G();
  }, [I, O, a]);
  const z = () => ({
    sortOrder: O && Object.keys(O).length > 0 ? O : g,
    total: !0,
    endPointVars: a,
    ...I,
    filter: { ...C, ...b }
  }), G = () => {
    const x = z();
    if (t)
      try {
        t.query(x).then((n) => {
          j(n.result), f(n.total);
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
    j([]), f(0);
  }, l = () => {
    j(void 0), f(null);
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
    refreshData: G,
    gotoPage: M,
    setPageSize: B,
    getPageNo: X,
    getQueryLimit: P,
    setQueryLimit: L,
    getQueryRequest: z,
    filter: C,
    queryLimit: I,
    data: T,
    totalRecords: y,
    pageSizeOptions: D
  };
};
function nt(r) {
  return r ? Array.isArray(r) ? r : typeof r == "string" ? r.split(",") : [r] : [];
}
const vr = Y(function(t, c) {
  const i = de(he), a = c || _(null), s = i(t, "checkbox", a), { mutateOptions: y, setMutateOptions: f } = s, [b, g] = N(!1), C = nt(s.data), d = s.error, O = s.eventListeners, v = s.store, V = t.pageSize || -1, k = { store: v, pageSize: V, defaultParams: t.defaultParams }, { data: D } = ae(k), R = D, I = _(null), L = t.lookupOptions || {}, T = L.idAttribute || "id", Q = L.displayAttribute || "name", X = t.showSelectedOnly && t.readonly, P = ue(T) ? (u) => me(T, u) : (u) => u[T], M = ue(Q) ? (u) => me(Q, u) : (u) => u[Q];
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
  var B = Xe(t, s.data, t.label);
  t.readonly && (B.inputprops = { readOnly: !0 });
  function A(u, l) {
    const S = nt(s.data);
    var E = S.indexOf(u);
    l ? E < 0 && S.push(u) : E >= 0 && S.splice(E, 1), O.onValueChange(S.toString());
  }
  var j = {
    onBlur: O.onBlur,
    onFocus: O.onFocus,
    onChange: (u) => {
      A(u.target.value, u.target.checked);
    }
  };
  const z = (u) => {
    const l = u.toString();
    return C.includes(l);
  }, G = (u) => {
    const l = u.target.checked;
    g(l);
    var S = [];
    l && R.map((E) => {
      S.push(P(E));
    }), O.onValueChange(S.toString());
  };
  return /* @__PURE__ */ e("div", { className: t.className, children: y.visible && /* @__PURE__ */ h(
    Te,
    {
      label: _e(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ e("div", { children: t.hideSelectAll ? /* @__PURE__ */ e(oe, {}) : /* @__PURE__ */ e(
          Ue,
          {
            control: /* @__PURE__ */ e(
              Ye,
              {
                icon: /* @__PURE__ */ e(Ze, { style: { fontSize: "20px" } }),
                checkedIcon: /* @__PURE__ */ e(et, { style: { fontSize: "20px" } }),
                onChange: G
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
              R ? R.filter((u) => X ? z(P(u)) : !0).map((u) => /* @__PURE__ */ e(
                Ue,
                {
                  value: P(u),
                  control: /* @__PURE__ */ e(
                    Ye,
                    {
                      icon: /* @__PURE__ */ e(Ze, { style: { fontSize: "20px" } }),
                      checkedIcon: /* @__PURE__ */ e(et, { style: { fontSize: "20px" } }),
                      ...j,
                      checked: z(P(u)),
                      disabled: t.readonly
                    }
                  ),
                  label: M(u)
                },
                P(u)
              )) : /* @__PURE__ */ e("div", { children: "No options provided" }),
              /* @__PURE__ */ e(Ge, { className: "form-error-text", children: d.message })
            ]
          }
        )
      ]
    }
  ) });
}), Zt = Gt(100), en = Y(function(t, c) {
  const i = de(he), a = c || _(null), s = _(null), y = _(0), [f, b] = N([]), [g, C] = N(""), [d, O] = N(!1), v = i(t, "serverlookup", a), V = t.store || v.store, k = t.lookupOptions || {}, D = k.idAttribute || "id", R = k.displayAttribute || "name", I = R, L = t.defaultParams, T = {
    store: V,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: t.pageSize || 15,
    quickSearch: I,
    initialFetch: !1,
    defaultParams: L
  }, Q = ae(T), X = v.eventListeners, P = v.error, { mutateOptions: M, setMutateOptions: B } = v, A = v.data, j = d && f.length < (A ? 2 : 1), { setQueryFilter: z, setEndPointOptions: G, setQuickSearch: u, totalRecords: l, refreshData: S } = Q, E = Q.data, q = ue(D) ? (o) => me(D, o) : (o) => o == null ? void 0 : o[D], H = ue(R) ? (o) => me(R, o) : (o) => o == null ? void 0 : o[R];
  ee(() => {
    var o = A != "" ? A : void 0;
    o && b([o]);
  }, [v.data]), ee(() => {
    const o = E ? [...E] : [], w = A != "" ? A : void 0, $ = q(w), le = H(w);
    o && $ && le && !K(o, $) && o.unshift(w), b(o), y.current < l && (y.current = l);
  }, [E, l]), ee(() => {
    dt(U);
  }, [g]), ee(() => {
    Zt(U);
  }, [d]);
  function U() {
    d && (g.length > 0 && g != H(A) ? u("*" + g + "*") : E ? u(null) : S());
  }
  var x = {
    onBlur: X.onBlur,
    onFocus: X.onFocus,
    onChange: (o, w) => {
      n(w);
    },
    onInputChange: (o, w) => (C(w), !0)
  };
  const n = (o) => {
    X.onValueChange(o);
  }, m = (o) => typeof o == "object" ? H(o) + "" : (console.log(o), "");
  function K(o, w) {
    return o.find(($) => {
      if (q($) == w)
        return $;
    });
  }
  re(a, () => ({
    focus() {
      s.current.focus();
    },
    isValid() {
      return !P.status;
    },
    clear() {
      t.multiple ? v.setData([], !0) : v.setData(void 0, !0);
    },
    getValue() {
      return v.getData();
    },
    setValue(o, w = !1) {
      v.setData(o, w);
    },
    setVisible(o) {
      B((w) => ({ ...w, visible: o }));
    },
    setRequired(o) {
      B((w) => ({ ...w, required: o }));
    },
    setReadOnly(o) {
      B((w) => ({ ...w, readonly: o }));
    },
    setAttribute(o) {
      B((w) => ({ ...w, ...o }));
    },
    setFilter(o) {
      z(o);
    },
    resetFilter() {
      z({});
    },
    setEndPointOptions(o) {
      G(o);
    },
    getCurrentData: () => A,
    refresh: () => {
      S();
    },
    addFilter(o, w) {
      z(($) => ($[o] = w, { ...$ }));
    },
    setDefaultFilter(o) {
    },
    setSortOptions(o) {
    }
  }), [v, z]);
  var te = Xe(t, A, t.label);
  M.readonly && (te.inputProps = { readOnly: !0 });
  const se = (o, w) => o instanceof Array ? o.some(($) => q($) == q(w)) : q(o) == q(w);
  return /* @__PURE__ */ e(
    Te,
    {
      label: _e(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ h(ie, { fullWidth: !0, error: P.status, children: [
        /* @__PURE__ */ e(
          lt,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: t.multiple,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            isOptionEqualToValue: se,
            filterOptions: (o) => o,
            renderInput: (o) => /* @__PURE__ */ e(
              fe,
              {
                ...o,
                inputRef: (w) => {
                  s.current = w;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                InputProps: {
                  ...o.InputProps,
                  endAdornment: /* @__PURE__ */ h(oe, { children: [
                    j ? /* @__PURE__ */ e(ct, { color: "inherit", size: 18 }) : null,
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
              O(!1);
            },
            onOpen: (o) => {
              O(!0);
            },
            ...x
          }
        ),
        /* @__PURE__ */ e(Ge, { className: "form-error-text", children: P.message })
      ] })
    }
  );
}), tn = Y(function(t, c) {
  const i = de(he), a = c || _(null), s = _(null), y = _(0), [f, b] = N([]), [g, C] = N(""), [d, O] = N(!1), v = i(t, "autoComplete", a), V = t.store || v.store, D = (t.lookupOptions || {}).attribute || "name", R = D, I = {
    store: V,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: R,
    initialFetch: !1
  }, L = ae(I), T = v.eventListeners, Q = v.error, { mutateOptions: X, setMutateOptions: P } = v, M = v.data, B = d && f.length < (M ? 2 : 1), { setQueryFilter: A, setEndPointOptions: j, setQuickSearch: z, totalRecords: G, refreshData: u } = L, l = L.data, S = ue(D) ? (n) => me(D, n) : (n) => n == null ? void 0 : n[D];
  ee(() => {
    var n = M != "" ? M : void 0;
    n && b([n]);
  }, [v.data]), ee(() => {
    const m = (l ? [...l] : []).map((te) => S(te)), K = M != "" ? M : void 0;
    m && K && !U(m, K) && m.unshift(K), b(m), y.current < G && (y.current = G);
  }, [l, G]), ee(() => {
    dt(E);
  }, [g, d]);
  function E() {
    d && (g.length > 0 && g != M ? z("*" + g + "*") : l ? z(null) : u());
  }
  var q = {
    onBlur: (n) => {
      H(g), T.onBlur(g);
    },
    onFocus: T.onFocus,
    onChange: (n, m) => {
      H(m);
    },
    onInputChange: (n, m) => (C(m), !0)
  };
  const H = (n) => {
    T.onValueChange(n);
  };
  function U(n, m) {
    return n.find((K) => {
      if (K == m)
        return K;
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
      P((m) => ({ ...m, visible: n }));
    },
    setRequired(n) {
      P((m) => ({ ...m, required: n }));
    },
    setReadOnly(n) {
      P((m) => ({ ...m, readonly: n }));
    },
    setAttribute(n) {
      P((m) => ({ ...m, ...n }));
    },
    setFilter(n) {
      A(n);
    },
    resetFilter() {
      A({});
    },
    setEndPointOptions(n) {
      j(n);
    },
    getCurrentData: () => M,
    refresh: () => {
      u();
    },
    addFilter(n, m) {
      A((K) => (K[n] = m, { ...K }));
    },
    setDefaultFilter(n) {
    },
    setSortOptions(n) {
    }
  }), [v, A]);
  var x = Xe(t, M, t.label);
  return X.readonly && (x.inputProps = { readOnly: !0 }), /* @__PURE__ */ e(
    Te,
    {
      label: _e(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ h(ie, { fullWidth: !0, error: Q.status, children: [
        /* @__PURE__ */ e(
          lt,
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
                    B ? /* @__PURE__ */ e(ct, { color: "inherit", size: 18 }) : null,
                    n.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...x,
            options: f,
            open: d,
            onClose: () => {
              O(!1);
            },
            onOpen: (n) => {
              O(!0);
            },
            ...q
          }
        ),
        /* @__PURE__ */ e(Ge, { className: "form-error-text", children: Q.message })
      ] })
    }
  );
}), nn = (r) => {
  const { fieldDef: t } = r;
  return /* @__PURE__ */ h("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, W = (r, t) => {
  const c = r.fieldDef;
  return /* @__PURE__ */ e(
    t,
    {
      ...c,
      label: r.title
    },
    c.title + c.attribute
  );
}, bt = (r, t, c) => {
  const { type: i } = r, a = { fieldDef: r, title: c };
  switch (i) {
    case "string":
      return W(a, Pt);
    case "radio":
      return W(a, Rt);
    case "select":
      return W(a, Je);
    case "date":
      return W(a, Ot);
    case "datetime":
      return W(a, St);
    case "checkbox":
      return W(a, kt);
    case "serverlookup":
      return W(a, en);
    case "textarea":
      return W(a, Nt);
    case "switch":
      return W(a, Dt);
    case "iosswitch":
      return W(a, At);
    case "password":
      return W(a, Lt);
    case "float":
    case "number":
    case "numbersOnly":
      return W(a, Mt);
    case "integer":
      return W(a, Bt);
    case "multiSelect":
      return W(a, Je);
    case "dateRange":
      return W(a, jt);
    case "autoComplete":
      return W(a, tn);
    default:
      return nn(a);
  }
}, rn = Y(function(t, c) {
  var C;
  const { formLayout: i, context: a } = t, { formData: s } = a, y = i.Container;
  _({});
  const f = st(() => (d) => bt(d), [s.data]);
  var b = ((C = i.options) == null ? void 0 : C.columns) || 1, g = { columns: b };
  return y ? /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: i.fields.map((d, O) => /* @__PURE__ */ e(
    y,
    {
      index: O,
      field: d,
      label: d.title,
      options: g,
      children: f(d)
    },
    d.attribute + d.name + d.type
  )) }) : /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: i.fields.map((d, O) => f(d)) });
}), Ct = (r) => {
  const { layout: t, context: c } = r;
  var i = t.Renderer || rn, a = t.Container || ut;
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
      children: /* @__PURE__ */ e(Ht, { columns: t.columns, children: s(t.formLayout) })
    }
  );
};
const on = (r) => {
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
}, an = Y(function(t, c) {
  const { formLayout: i, context: a } = t, { formData: s } = a, y = _({}), f = on(t), b = "palmyra-form-field-data", g = st(() => (C) => bt(C, y, C.label), [s.data]);
  return /* @__PURE__ */ e("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: i.fields.map((C, d) => /* @__PURE__ */ e("div", { className: C.type === "dateRange" ? "palmyra-form-field-container" : f, children: /* @__PURE__ */ e("div", { className: b, children: g(C) }) }, C.attribute)) });
}), xt = ({ columns: r, isOpen: t, onClose: c, setFilter: i, defaultFilter: a = {} }) => {
  const s = {};
  Object.keys(a || {}).map((d) => {
    const O = a[d];
    zt(d, s, O);
  });
  var { getFieldManager: y, getFilterData: f } = Xt(s);
  const b = () => {
    i({});
  }, g = () => {
    var d = f();
    i && i(d);
  }, C = Wt(r);
  return /* @__PURE__ */ h("div", { className: "grid-filter-container", children: [
    /* @__PURE__ */ e("div", { className: "grid-filter-content", children: /* @__PURE__ */ e(he.Provider, { value: y, children: /* @__PURE__ */ e(
      Ct,
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
          Renderer: an
        }
      }
    ) }) }),
    /* @__PURE__ */ h("div", { className: "grid-filter-btn-container", children: [
      /* @__PURE__ */ h(ne, { className: "secondary-filled-button", disableRipple: !0, onClick: b, children: [
        /* @__PURE__ */ e(qt, { className: "button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ h(ne, { className: "filled-button", disableRipple: !0, onClick: g, children: [
        /* @__PURE__ */ e($e, { className: "button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
}, sn = Y(function(t, c) {
  const { columns: i, children: a, EmptyChild: s, onRowClick: y, quickSearch: f, exportOptions: b, densityOption: g } = t, C = s || ht, d = t.customizer || pt, O = t.customButton, [v, V] = N(!1), [k, D] = N(!1), [R, I] = N(!1), [L, T] = N("standard"), [Q, X] = N(!1), [P, M] = N(""), {
    setQueryFilter: B,
    setQuickSearch: A,
    setSortColumns: j,
    setEndPointOptions: z,
    gotoPage: G,
    setPageSize: u,
    getPageNo: l,
    refreshData: S,
    setQueryLimit: E,
    getQueryLimit: q,
    getQueryRequest: H,
    data: U,
    totalRecords: x,
    queryLimit: n,
    pageSizeOptions: m,
    filter: K
  } = ae(t), te = c || _(null);
  re(te, () => ({
    setFilter: (p) => {
      B(p);
    },
    refresh: () => {
      S();
    },
    resetFilter() {
      B({});
    },
    setEndPointOptions: (p) => {
      z(p);
    },
    addFilter: (p, Z) => {
      B((be) => (be[p] = Z, { ...be }));
    },
    setQueryLimit: (p) => {
      E(p);
    },
    getQueryLimit: () => q(),
    setSortOptions(p) {
      j(p);
    },
    getCurrentData: () => U
  }), [q]);
  const se = (p, Z) => {
    G(Z - 1);
  }, o = mt(i, d), w = (p) => {
    T(p);
  }, $ = () => {
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
  }, we = () => L === "compact" ? { padding: "3px", borderRight: "1px solid var(--border-color)" } : L === "comfortable" ? { padding: "15px", fontSize: "18px", borderRight: "1px solid var(--border-color)" } : { padding: "7px", borderRight: "1px solid var(--border-color)" }, Oe = () => {
    var p;
    switch (L) {
      case "compact":
        p = /* @__PURE__ */ e(xe, { className: "density-icon" });
        break;
      case "comfortable":
        p = /* @__PURE__ */ e(Fe, { className: "density-icon" });
        break;
      default:
        p = /* @__PURE__ */ e(Ce, { className: "grid-button-icon" });
        break;
    }
    return p;
  }, Se = (p) => {
    const Z = p.target.value;
    M(Z), Z ? A(Z) : B({});
  }, Re = (p) => {
    y && y(p);
  }, Ne = (p) => {
    const Z = parseInt(p.target.value, 10);
    u(Z);
  }, Pe = (p) => {
    D(!k);
  }, ke = () => {
    I(!R);
  }, De = () => {
    I(!1);
  }, ge = (p) => {
    const be = { ...H(), format: p, limit: -1 };
    t.store.export(be), I(!R);
  }, Ae = () => {
    t.onNewClick();
  }, Le = 200, Me = !!t.pageSize, Be = !!f, Ie = {
    transform: v ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Qe = {
    transform: k ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, pe = {
    transform: R ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, ce = Math.ceil(x / n.limit), ye = l(), ve = n.limit, F = ye * ve + 1, J = Math.min((ye + 1) * ve, x);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { children: [
    a,
    /* @__PURE__ */ h("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: it(t.title) }),
      /* @__PURE__ */ h("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: Be && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: Le },
            type: "text",
            value: P,
            onChange: Se,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ke, { position: "end", children: /* @__PURE__ */ e(qe, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        g && /* @__PURE__ */ e(Ve, { onClickAway: () => {
          V(!1);
        }, children: /* @__PURE__ */ h("div", { className: "grid-header-button grid-density-btn", onClick: $, children: [
          /* @__PURE__ */ h(ne, { className: "grid-btn", disableRipple: !0, children: [
            Oe(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(Ee, { style: Ie, className: "avathar-arrw-icon" })
          ] }),
          v && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ h("ul", { children: [
            /* @__PURE__ */ h("li", { onClick: () => w("standard"), children: [
              /* @__PURE__ */ e(Ce, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => w("compact"), children: [
              /* @__PURE__ */ e(xe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => w("comfortable"), children: [
              /* @__PURE__ */ e(Fe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        i.some((p) => p.searchable) && /* @__PURE__ */ e(Ve, { onClickAway: () => {
          D(!1);
        }, children: /* @__PURE__ */ h("div", { className: "grid-header-button grid-filter-btn", onClick: Pe, children: [
          /* @__PURE__ */ h(ne, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e($e, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" }),
            /* @__PURE__ */ e(Ee, { style: Qe, className: "avathar-arrw-icon" })
          ] }),
          k && /* @__PURE__ */ e("div", { className: "filter-dropdown-content", onClick: (p) => p.stopPropagation(), children: /* @__PURE__ */ e(
            xt,
            {
              columns: i,
              setFilter: B,
              defaultFilter: K,
              isOpen: Q,
              onClose: () => X(!1)
            }
          ) })
        ] }) }),
        b && /* @__PURE__ */ e(
          yt,
          {
            dropdownOpen: R,
            dropdownClose: De,
            onExportClick: ke,
            arrowStyle: pe,
            exportOption: b,
            exportData: ge
          }
        ),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: /* @__PURE__ */ e("div", { onClick: Ae, children: /* @__PURE__ */ h(ne, { className: "grid-btn", disableRipple: !0, children: [
          t.customAddButton && t.customAddButton.icon ? It.cloneElement(t.customAddButton.icon, {
            className: "grid-button-icon"
          }) : /* @__PURE__ */ e(gt, { className: "grid-button-icon" }),
          t.customAddButton && t.customAddButton.text ? /* @__PURE__ */ e(oe, { children: t.customAddButton.text }) : /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(oe, {}),
        O && O.map((p, Z) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: p }, Z))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      ft,
      {
        columnDefs: o,
        EmptyChild: C,
        customizer: d,
        rowData: U,
        onRowClick: Re,
        onRowStyle: le,
        onHeaderStyle: we,
        onSortColumn: j
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: Me && ce !== 0 && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: m && m.length > 1 ? /* @__PURE__ */ e(ie, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          je,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: m[0],
            onChange: Ne,
            label: "Rows per page",
            children: m.map((p) => /* @__PURE__ */ e(He, { value: p, children: p }, p))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("span", { children: [
          F,
          " - ",
          J,
          " of ",
          x,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        We,
        {
          count: ce,
          shape: "rounded",
          onChange: se,
          page: l() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), br = Y(function(t, c) {
  const { children: i, EmptyChild: a, onRowClick: s, quickSearch: y, exportOptions: f } = t, b = t.columns, g = a || ht, C = t.customizer || pt, d = t.customButton, O = t.title, [v, V] = N(!1), [k, D] = N(!1), [R, I] = N("standard"), [L, T] = N(!1), [Q, X] = N(""), {
    setQueryFilter: P,
    setQuickSearch: M,
    setSortColumns: B,
    setEndPointOptions: A,
    gotoPage: j,
    setPageSize: z,
    getPageNo: G,
    refreshData: u,
    setQueryLimit: l,
    getQueryLimit: S,
    getQueryRequest: E,
    data: q,
    totalRecords: H,
    queryLimit: U,
    pageSizeOptions: x,
    filter: n
  } = ae(t), [m, K] = N(b(q)), te = c || _(null);
  re(te, () => ({
    setFilter: (F) => {
      P(F);
    },
    refresh: () => {
      u();
    },
    resetFilter() {
      P({});
    },
    setEndPointOptions: (F) => {
      A(F);
    },
    addFilter: (F, J) => {
      P((p) => (p[F] = J, { ...p }));
    },
    setQueryLimit: (F) => {
      l(F);
    },
    getQueryLimit: () => S(),
    setSortOptions(F) {
      B(F);
    },
    getCurrentData: () => q
  }), [S, m]), ee(() => {
    K(b(q));
  }, [q]);
  const se = (F, J) => {
    j(J - 1);
  }, o = mt(m, C), w = (F) => {
    I(F);
  }, $ = () => {
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
  }, we = () => R === "compact" ? { padding: "3px", borderRight: "1px solid var(--border-color)" } : R === "comfortable" ? { padding: "15px", fontSize: "18px", borderRight: "1px solid var(--border-color)" } : { padding: "7px", borderRight: "1px solid var(--border-color)" }, Oe = () => {
    var F;
    switch (R) {
      case "compact":
        F = /* @__PURE__ */ e(xe, { className: "density-icon" });
        break;
      case "comfortable":
        F = /* @__PURE__ */ e(Fe, { className: "density-icon" });
        break;
      default:
        F = /* @__PURE__ */ e(Ce, { className: "grid-button-icon" });
        break;
    }
    return F;
  }, Se = (F) => {
    const J = F.target.value;
    X(J), J ? M(J) : P({});
  }, Re = (F) => {
    s && s(F);
  }, Ne = (F) => {
    const J = parseInt(F.target.value, 10);
    z(J);
  }, Pe = () => {
    D(!k);
  }, ke = () => {
    D(!1);
  }, De = (F) => {
    const p = { ...E(), format: F, limit: -1 };
    t.store.export(p), D(!k);
  }, ge = () => {
    t.onNewClick();
  }, Ae = 200, Le = !!t.pageSize, Me = !!y, Be = {
    transform: v ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Ie = {
    transform: k ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Qe = Math.ceil(H / U.limit), pe = G(), ce = U.limit, ye = pe * ce + 1, ve = Math.min((pe + 1) * ce, H);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { children: [
    i,
    /* @__PURE__ */ h("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: /* @__PURE__ */ e("span", { className: "grid-header-right-content-text", children: O }) }),
      /* @__PURE__ */ h("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: Me && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: Ae },
            type: "text",
            value: Q,
            onChange: Se,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ke, { position: "end", children: /* @__PURE__ */ e(qe, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(Ve, { onClickAway: () => {
          V(!1);
        }, children: /* @__PURE__ */ h("div", { className: "grid-header-button grid-density-btn", onClick: $, children: [
          /* @__PURE__ */ h(ne, { className: "grid-btn", disableRipple: !0, children: [
            Oe(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(Ee, { style: Be, className: "avathar-arrw-icon" })
          ] }),
          v && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ h("ul", { children: [
            /* @__PURE__ */ h("li", { onClick: () => w("standard"), children: [
              /* @__PURE__ */ e(Ce, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => w("compact"), children: [
              /* @__PURE__ */ e(xe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => w("comfortable"), children: [
              /* @__PURE__ */ e(Fe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        m.some((F) => F.searchable) && /* @__PURE__ */ h("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ h(ne, { className: "grid-btn", disableRipple: !0, onClick: () => T(!0), children: [
            /* @__PURE__ */ e($e, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ e(
            xt,
            {
              columns: m,
              setFilter: P,
              defaultFilter: n,
              isOpen: L,
              onClose: () => T(!1)
            }
          )
        ] }),
        f && /* @__PURE__ */ e(
          yt,
          {
            dropdownOpen: k,
            dropdownClose: ke,
            onExportClick: Pe,
            arrowStyle: Ie,
            exportOption: f,
            exportData: De
          }
        ),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: t.customAddButton ? /* @__PURE__ */ e("div", { onClick: ge, children: t.customAddButton }) : /* @__PURE__ */ e("div", { onClick: ge, children: /* @__PURE__ */ h(ne, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ e(gt, { className: "grid-button-icon" }),
          /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(oe, {}),
        d && d.map((F, J) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: F }, J))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      ft,
      {
        columnDefs: o,
        EmptyChild: g,
        customizer: C,
        rowData: q,
        onRowClick: Re,
        onRowStyle: le,
        onHeaderStyle: we,
        onSortColumn: B
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: Le && H !== null && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: x && x.length > 1 ? /* @__PURE__ */ e(ie, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          je,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: x[0],
            onChange: Ne,
            label: "Rows per page",
            children: x.map((F) => /* @__PURE__ */ e(He, { value: F, children: F }, F))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("span", { children: [
          ye,
          " - ",
          ve,
          " of ",
          H,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        We,
        {
          count: Qe,
          shape: "rounded",
          onChange: se,
          page: G() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), Cr = Y(function(t, c) {
  const { columns: i, endPoint: a, storeFactory: s, layoutParams: y, pagination: f } = t, b = t.quickSearch || "", g = t.customButton, C = t.customAddButton, d = t.title, O = t.fetchAll, v = t.filterTopic, V = t.initialFetch, k = (R, I) => {
  };
  ee(() => {
    var R = tt.subscribe(t.topic, k);
    return () => {
      tt.unsubscribe(R);
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
  return /* @__PURE__ */ e(oe, { children: /* @__PURE__ */ e(ze.Provider, { value: s, children: /* @__PURE__ */ e(
    Ft,
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
      fetchAll: O,
      filterTopic: v,
      initialFetch: V
    }
  ) }) });
}), ln = Y(function(t, c) {
  const i = t.layout, [a, s] = N(i.fields), y = i.pagination ? i.pagination : [15], f = de(ze), b = de(at);
  var g = i.storeOptions || {}, C = {};
  Kt(C, g, b);
  const d = f.getGridStore(C, i.storeOptions.endPoint);
  ee(() => {
    g.hasLayout && d.queryLayout({}).then((V) => {
      s(V.columns);
    });
  }, []);
  const { onClick: O, onNewClick: v } = _t(i.actionOptions, b);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    sn,
    {
      columns: a,
      store: d,
      pageSize: y,
      onRowClick: O,
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
}), Ft = ln, cn = (r) => {
  const { layout: t, context: c } = r;
  var i = t.Container || ut;
  return /* @__PURE__ */ e(vt, { fallback: /* @__PURE__ */ e("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ e(i, { ...t, children: ((s) => /* @__PURE__ */ e(
    Ft,
    {
      context: c,
      layout: s
    }
  ))(t.tableLayout) }) });
}, dn = (r) => {
  const { layout: t } = r;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ e(Ct, { ...r });
    case "view":
      return /* @__PURE__ */ e(Jt, { ...r });
    case "grid":
      return /* @__PURE__ */ e(cn, { ...r });
    case "chart":
      return /* @__PURE__ */ e(Tt, { ...r });
    default:
      return /* @__PURE__ */ e($t, { ...r });
  }
};
function un(r, t) {
  var c = r || 1, i = t;
  return {
    w: c,
    h: i
  };
}
const wt = (r) => {
  const { layout: t, context: c } = r, i = t.sections;
  function a(s, y, f) {
    const { w: b, h: g } = un(s.width, s.height);
    return /* @__PURE__ */ e(Qt, { sx: { width: b, height: g }, children: /* @__PURE__ */ e(
      dn,
      {
        layout: s,
        context: y
      }
    ) }, (s.name || "tab") + f);
  }
  return /* @__PURE__ */ e("div", { style: { display: "flex", flexWrap: "wrap" }, children: i.map((s, y) => a(s, c, y)) });
}, rt = Y(function(t, c) {
  const { layout: i } = t;
  re(c, () => ({
    resetFilter() {
    }
  }), []);
  const a = {}, s = i.tabs;
  return /* @__PURE__ */ e("div", { children: s.map((y, f) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    wt,
    {
      layout: y,
      context: a
    }
  ) }, y.name + f)) });
}), mn = (r) => {
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
}, ot = Y(function(t, c) {
  var C;
  const i = t.data || {}, { layout: a } = t;
  var { getFieldManager: s, getFormData: y, isFormValid: f } = Ut(i, (C = t.callbacks) == null ? void 0 : C.onFormValidChange, mn(t.mode));
  re(c, () => ({
    getData() {
      return y();
    },
    isValid() {
      return f();
    }
  }), []);
  const b = { formData: i }, g = a.tabs;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(he.Provider, { value: s, children: g.map((d, O) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    wt,
    {
      layout: d,
      context: b
    }
  ) }, d.name + O)) }) });
}), hn = (r) => {
  switch (r) {
    case "grid":
      return rt;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), ot;
    case "formEdit":
    case "formNew":
    case "formView":
      return ot;
    default:
      return rt;
  }
}, xr = Y(function(t, c) {
  const [i, a] = N(t.layout), s = t.mode ? t.mode : i.type ? i.type : "grid", y = t.layoutParams || {}, f = hn(s), b = _(0);
  return ee(() => {
    a(t.layout), b.current < 999999 ? b.current++ : b.current = 0;
  }, [t.layout]), /* @__PURE__ */ e(vt, { fallback: /* @__PURE__ */ e("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ e(ze.Provider, { value: t.storeFactory, children: /* @__PURE__ */ e(at.Provider, { value: y, children: /* @__PURE__ */ e(f, { ...t, ref: (g) => {
    c && (c.current = g);
  } }, b.current) }) }) });
}), Fr = Y(function(t, c) {
  const { title: i, Child: a, childProps: s, pageSize: y, customButton: f } = t, b = c || _(null), {
    setQueryFilter: g,
    refreshData: C,
    setSortColumns: d,
    setEndPointOptions: O,
    setQuickSearch: v,
    gotoPage: V,
    setPageSize: k,
    getPageNo: D,
    setQueryLimit: R,
    getQueryLimit: I,
    data: L,
    totalRecords: T,
    pageSizeOptions: Q,
    queryLimit: X
  } = ae(t), P = t.listKeyProvider || ((l, S) => S);
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
      O(l);
    },
    addFilter: (l, S) => {
      g((E) => (E[l] = S, { ...E }));
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
  const M = (l, S) => {
    V(S - 1);
  }, B = (l) => {
    const S = l.target.value;
    v(S);
  }, A = (l) => {
    const S = parseInt(l.target.value, 10);
    k(S);
  }, j = 200, z = !!y, G = !!t.quickSearch, u = Math.ceil(T / X.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "card-page-container", children: /* @__PURE__ */ h("div", { children: [
    /* @__PURE__ */ h("div", { className: "card-header", children: [
      /* @__PURE__ */ e("div", { className: "card-left-content", children: it(i) }),
      /* @__PURE__ */ h("div", { className: "card-right-content", children: [
        G && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: j },
            type: "text",
            onChange: B,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ke, { position: "end", children: /* @__PURE__ */ e(qe, { className: "card-filter-icon" }) })
            }
          }
        ),
        f && f.map((l, S) => /* @__PURE__ */ e("div", { className: "card-custom-button", children: l }, S))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      Et,
      {
        Child: a,
        childKeyProvider: P,
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
          je,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: Q[0],
            onChange: A,
            label: "Rows per page",
            children: Q.map((l) => /* @__PURE__ */ e(He, { value: l, children: l }, l))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("span", { children: [
          "of ",
          T,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(Vt, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ e(
        We,
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
  br as D,
  xr as F,
  Ft as G,
  en as M,
  Cr as P,
  Fr as S,
  wt as T,
  sn as a,
  vr as b,
  tn as c,
  rn as d,
  Ct as e,
  an as f,
  bt as g,
  xt as h,
  cn as i,
  dn as j,
  rt as k,
  ot as l,
  ae as u
};
