import "../assets/ServerCardLayout.css";
import bt from "../palmyra/mui/form/MuiDatePicker.js";
import xt from "../palmyra/mui/form/MuiDateTimePicker.js";
import Ft from "../palmyra/mui/form/MuiRadioGroup.js";
import He from "../palmyra/mui/form/MuiSelect.js";
import wt from "../palmyra/mui/form/MuiTextArea.js";
import Nt from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import St from "../palmyra/mui/form/MuiCheckBox.js";
import kt from "../palmyra/mui/form/MuiSwitch.js";
import Ot from "../palmyra/mui/form/MuiIOSSwitch.js";
import Pt from "../palmyra/mui/form/MuiPassword.js";
import Rt from "../palmyra/mui/form/MuiNumberField.js";
import Dt from "../palmyra/mui/form/MuiIntegerField.js";
import Ae from "../palmyra/mui/form/FieldDecorator.js";
import { renderTitle as Ue } from "../palmyra/mui/widget/InfoTooltip.js";
import { FieldManagerContext as he, StoreFactoryContext as Le, LayoutParamsContext as Ye } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as e, jsxs as s, Fragment as ie } from "react/jsx-runtime";
import At, { useState as O, useRef as _, useEffect as Y, forwardRef as U, useContext as de, useImperativeHandle as ne, useMemo as et } from "react";
import { a as Me } from "./AsyncTreeMenu.js";
import { FormControlLabel as Ke, Checkbox as Ze, FormControl as ae, FormHelperText as Ve, Autocomplete as tt, TextField as fe, CircularProgress as nt, Button as te, InputAdornment as Ee, ClickAwayListener as le, Select as Ie, MenuItem as Be, Pagination as Te, Box as Lt, Stack as Mt } from "@mui/material";
import Vt from "../palmyra/layout/card/CardLayout.js";
import Et from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Qe, getFieldLabel as ze } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as ue } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as me, setValueByKey as It } from "../palmyra/form/FormUtil.js";
import { T as je, a as We, b as Bt, c as qe, d as rt } from "./index.esm2.js";
import { delay as it, delayGenerator as Tt, mergeDeep as Qt } from "../palmyra/utils/index.js";
import zt from "../palmyra/mui/form/MuiDateRangePicker.js";
import at from "../palmyra/layout/container/SectionContainer.js";
import qt from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as ot } from "../palmyra/grid/base/ColumnConverter.js";
import st from "../palmyra/grid/base/EmptyChildTable.js";
import lt from "../palmyra/grid/base/TableX.js";
import { KeyboardArrowDown as ce, Menu as ye, DensitySmall as pe, DensityLarge as ve, Add as ct } from "@mui/icons-material";
import { NoopCustomizer as dt } from "../palmyra/grid/Types.js";
import { convertToField as Gt } from "../palmyra/grid/base/GridFieldConverter.js";
import { createFilterData as Ht } from "../palmyra/form/PalmyraFilterManager.js";
import { G as ut } from "./iconBase.js";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import "../palmyra/layout/tree/AsyncTreeMenuEditor.js";
import { topic as Xe } from "../palmyra/utils/pubsub/topic.js";
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
import { getActionPublishers as Kt } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as mt } from "../palmyra/layout/ErrorBoundary.js";
import Zt from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import jt from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as Wt } from "./PalmyraFieldManager.js";
import { useKeyValue as Xt } from "../palmyra/utils/pubsub/PubSubHelper.js";
const oe = (n) => {
  var K, Z;
  const { store: t, quickSearch: d } = n, a = n.fetchAll != !1, [o, l] = O(n.endPointOptions), [y, g] = O(null), C = ((K = n.defaultParams) == null ? void 0 : K.filter) || {}, f = ((Z = n.defaultParams) == null ? void 0 : Z.sort) || {}, [v, u] = n.filterTopic ? Xt(n.filterTopic, C) : O(C), [b, p] = O({}), E = _(n.initialFetch == !1), A = n.pageSize ? n.pageSize : 15;
  var R = A instanceof Array ? A : [A], D = A instanceof Array ? A[0] : A;
  const [B, T] = O({ limit: D, offset: 0, total: !0 }), [q, I] = O(null), Q = () => Math.round(B.offset / B.limit), P = () => B, L = (N) => {
    T((k) => ({ limit: k.limit, total: k.total, offset: N * k.limit }));
  }, G = (N) => {
    const k = N > 10 || N == -1 ? N : 15;
    T((r) => {
      const F = Math.floor(r.offset / k) * k;
      return { limit: k, total: r.total, offset: F };
    });
  }, M = () => v ? Object.keys(v).length == 0 : !1, W = (N) => {
    I((k) => (setTimeout(() => {
      n.onDataChange && n.onDataChange(N, k);
    }, 300), N));
  };
  Y(() => {
    if (E.current) {
      E.current = !1;
      return;
    }
    (a || !M()) && z();
  }, [B, b, o]);
  const z = () => {
    const k = {
      sortOrder: b && Object.keys(b).length > 0 ? b : f,
      total: !0,
      endPointVars: o,
      ...B,
      filter: { ...v, ...C }
    };
    if (t)
      try {
        t.query(k).then((r) => {
          W(r.result), g(r.total);
        }).catch((r) => {
          var F = r.response ? r.response : r;
          console.error("error while fetching", F), m();
        });
      } catch (r) {
        console.error(r), H();
      }
    else
      console.error("Store is not provided for the Grid"), H();
  }, H = () => {
    W([]), g(0);
  }, m = () => {
    W(void 0), g(null);
  };
  return {
    setQueryFilter: (N) => {
      typeof N == "function" || N && Object.keys(N).length > 0 ? u(N) : u({}), L(0);
    },
    setQuickSearch: (N) => {
      const k = d;
      u(N ? (r) => (r[k] = N, { ...r }) : (r) => (delete r[k], { ...r })), L(0);
    },
    setSortColumns: (N) => {
      p(N);
    },
    setEndPointOptions: l,
    refreshData: z,
    gotoPage: L,
    setPageSize: G,
    getPageNo: Q,
    getQueryLimit: P,
    setQueryLimit: T,
    filter: v,
    queryLimit: B,
    data: q,
    totalRecords: y,
    pageSizeOptions: R
  };
};
function _e(n) {
  return n ? Array.isArray(n) ? n : typeof n == "string" ? n.split(",") : [n] : [];
}
const br = U(function(t, d) {
  const a = de(he), o = d || _(null), l = a(t, "checkbox", o), { mutateOptions: y, setMutateOptions: g } = l, [C, f] = O(!1), v = _e(l.data), u = l.error, b = l.eventListeners, p = l.store, E = t.pageSize || -1, A = { store: p, pageSize: E, defaultParams: t.defaultParams }, { data: R } = oe(A), D = R, B = _(null), T = t.lookupOptions || {}, q = T.idAttribute || "id", I = T.displayAttribute || "name", Q = t.showSelectedOnly && t.readonly, P = ue(q) ? (m) => me(q, m) : (m) => m[q], L = ue(I) ? (m) => me(I, m) : (m) => m[I];
  ne(o, () => ({
    focus() {
      B.current.focus();
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
    setValue(m, c = !1) {
      l.setData(m, c);
    },
    setVisible(m) {
      g((c) => ({ ...c, visible: m }));
    },
    setRequired(m) {
      g((c) => ({ ...c, required: m }));
    },
    setReadOnly(m) {
      g((c) => ({ ...c, readonly: m }));
    },
    setAttribute(m) {
      g((c) => ({ ...c, ...m }));
    },
    setOptions(m) {
    },
    getOptions() {
    }
  }), [l]);
  var G = Qe(t, l.data, t.label);
  t.readonly && (G.inputprops = { readOnly: !0 });
  function M(m, c) {
    const x = _e(l.data);
    var V = x.indexOf(m);
    c ? V < 0 && x.push(m) : V >= 0 && x.splice(V, 1), b.onValueChange(x.toString());
  }
  var W = {
    onBlur: b.onBlur,
    onFocus: b.onFocus,
    onChange: (m) => {
      M(m.target.value, m.target.checked);
    }
  };
  const z = (m) => {
    const c = m.toString();
    return v.includes(c);
  }, H = (m) => {
    const c = m.target.checked;
    f(c);
    var x = [];
    c && D.map((V) => {
      x.push(P(V));
    }), b.onValueChange(x.toString());
  };
  return /* @__PURE__ */ e("div", { className: t.className, children: y.visible && /* @__PURE__ */ s(
    Ae,
    {
      label: ze(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ e("div", { children: t.hideSelectAll ? /* @__PURE__ */ e(ie, {}) : /* @__PURE__ */ e(
          Ke,
          {
            control: /* @__PURE__ */ e(
              Ze,
              {
                icon: /* @__PURE__ */ e(je, { style: { fontSize: "20px" } }),
                checkedIcon: /* @__PURE__ */ e(We, { style: { fontSize: "20px" } }),
                onChange: H
              }
            ),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ s(
          ae,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: u.status,
            ...G,
            children: [
              D ? D.filter((m) => Q ? z(P(m)) : !0).map((m) => /* @__PURE__ */ e(
                Ke,
                {
                  value: P(m),
                  control: /* @__PURE__ */ e(
                    Ze,
                    {
                      icon: /* @__PURE__ */ e(je, { style: { fontSize: "20px" } }),
                      checkedIcon: /* @__PURE__ */ e(We, { style: { fontSize: "20px" } }),
                      ...W,
                      checked: z(P(m)),
                      disabled: t.readonly
                    }
                  ),
                  label: L(m)
                },
                P(m)
              )) : /* @__PURE__ */ e("div", { children: "No options provided" }),
              /* @__PURE__ */ e(Ve, { className: "form-error-text", children: u.message })
            ]
          }
        )
      ]
    }
  ) });
}), _t = Tt(100), $t = U(function(t, d) {
  const a = de(he), o = d || _(null), l = _(null), y = _(0), [g, C] = O([]), [f, v] = O(""), [u, b] = O(!1), p = a(t, "serverlookup", o), E = t.store || p.store, A = t.lookupOptions || {}, R = A.idAttribute || "id", D = A.displayAttribute || "name", B = D, T = t.defaultParams, q = {
    store: E,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: t.pageSize || 15,
    quickSearch: B,
    initialFetch: !1,
    defaultParams: T
  }, I = oe(q), Q = p.eventListeners, P = p.error, { mutateOptions: L, setMutateOptions: G } = p, M = p.data, W = u && g.length < (M ? 2 : 1), { setQueryFilter: z, setEndPointOptions: H, setQuickSearch: m, totalRecords: c, refreshData: x } = I, V = I.data, K = ue(R) ? (i) => me(R, i) : (i) => i == null ? void 0 : i[R], Z = ue(D) ? (i) => me(D, i) : (i) => i == null ? void 0 : i[D];
  Y(() => {
    var i = M != "" ? M : void 0;
    i && C([i]);
  }, [p.data]), Y(() => {
    const i = V ? [...V] : [], S = M != "" ? M : void 0, $ = K(S), se = Z(S);
    i && $ && se && !X(i, $) && i.unshift(S), C(i), y.current < c && (y.current = c);
  }, [V, c]), Y(() => {
    it(N);
  }, [f]), Y(() => {
    _t(N);
  }, [u]);
  function N() {
    u && (f.length > 0 && f != Z(M) ? m("*" + f + "*") : V ? m(null) : x());
  }
  var k = {
    onBlur: Q.onBlur,
    onFocus: Q.onFocus,
    onChange: (i, S) => {
      r(S);
    },
    onInputChange: (i, S) => (v(S), !0)
  };
  const r = (i) => {
    Q.onValueChange(i);
  }, F = (i) => typeof i == "object" ? Z(i) + "" : (console.log(i), "");
  function X(i, S) {
    return i.find(($) => {
      if (K($) == S)
        return $;
    });
  }
  ne(o, () => ({
    focus() {
      l.current.focus();
    },
    isValid() {
      return !P.status;
    },
    clear() {
      t.multiple ? p.setData([], !0) : p.setData(void 0, !0);
    },
    getValue() {
      return p.getData();
    },
    setValue(i, S = !1) {
      p.setData(i, S);
    },
    setVisible(i) {
      G((S) => ({ ...S, visible: i }));
    },
    setRequired(i) {
      G((S) => ({ ...S, required: i }));
    },
    setReadOnly(i) {
      G((S) => ({ ...S, readonly: i }));
    },
    setAttribute(i) {
      G((S) => ({ ...S, ...i }));
    },
    setFilter(i) {
      z(i);
    },
    resetFilter() {
      z({});
    },
    setEndPointOptions(i) {
      H(i);
    },
    getCurrentData: () => M,
    refresh: () => {
      x();
    },
    addFilter(i, S) {
      z(($) => ($[i] = S, { ...$ }));
    },
    setDefaultFilter(i) {
    },
    setSortOptions(i) {
    }
  }), [p, z]);
  var ee = Qe(t, M, t.label);
  L.readonly && (ee.inputProps = { readOnly: !0 });
  const re = (i, S) => i instanceof Array ? i.some(($) => K($) == K(S)) : K(i) == K(S);
  return /* @__PURE__ */ e(
    Ae,
    {
      label: ze(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ s(ae, { fullWidth: !0, error: P.status, children: [
        /* @__PURE__ */ e(
          tt,
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
                inputRef: (S) => {
                  l.current = S;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                InputProps: {
                  ...i.InputProps,
                  endAdornment: /* @__PURE__ */ s(ie, { children: [
                    W ? /* @__PURE__ */ e(nt, { color: "inherit", size: 18 }) : null,
                    i.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: F,
            ...ee,
            options: g,
            open: u,
            onClose: () => {
              b(!1);
            },
            onOpen: (i) => {
              b(!0);
            },
            ...k
          }
        ),
        /* @__PURE__ */ e(Ve, { className: "form-error-text", children: P.message })
      ] })
    }
  );
}), Jt = U(function(t, d) {
  const a = de(he), o = d || _(null), l = _(null), y = _(0), [g, C] = O([]), [f, v] = O(""), [u, b] = O(!1), p = a(t, "autoComplete", o), E = t.store || p.store, R = (t.lookupOptions || {}).attribute || "name", D = R, B = {
    store: E,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: D,
    initialFetch: !1
  }, T = oe(B), q = p.eventListeners, I = p.error, { mutateOptions: Q, setMutateOptions: P } = p, L = p.data, G = u && g.length < (L ? 2 : 1), { setQueryFilter: M, setEndPointOptions: W, setQuickSearch: z, totalRecords: H, refreshData: m } = T, c = T.data, x = ue(R) ? (r) => me(R, r) : (r) => r == null ? void 0 : r[R];
  Y(() => {
    var r = L != "" ? L : void 0;
    r && C([r]);
  }, [p.data]), Y(() => {
    const F = (c ? [...c] : []).map((ee) => x(ee)), X = L != "" ? L : void 0;
    F && X && !N(F, X) && F.unshift(X), C(F), y.current < H && (y.current = H);
  }, [c, H]), Y(() => {
    it(V);
  }, [f, u]);
  function V() {
    u && (f.length > 0 && f != L ? z("*" + f + "*") : c ? z(null) : m());
  }
  var K = {
    onBlur: (r) => {
      Z(f), q.onBlur(f);
    },
    onFocus: q.onFocus,
    onChange: (r, F) => {
      Z(F);
    },
    onInputChange: (r, F) => (v(F), !0)
  };
  const Z = (r) => {
    q.onValueChange(r);
  };
  function N(r, F) {
    return r.find((X) => {
      if (X == F)
        return X;
    });
  }
  ne(o, () => ({
    focus() {
      l.current.focus();
    },
    isValid() {
      return !I.status;
    },
    clear() {
      p.setData(void 0, !0);
    },
    getValue() {
      return p.getData();
    },
    setValue(r, F = !1) {
      p.setData(r, F);
    },
    setVisible(r) {
      P((F) => ({ ...F, visible: r }));
    },
    setRequired(r) {
      P((F) => ({ ...F, required: r }));
    },
    setReadOnly(r) {
      P((F) => ({ ...F, readonly: r }));
    },
    setAttribute(r) {
      P((F) => ({ ...F, ...r }));
    },
    setFilter(r) {
      M(r);
    },
    resetFilter() {
      M({});
    },
    setEndPointOptions(r) {
      W(r);
    },
    getCurrentData: () => L,
    refresh: () => {
      m();
    },
    addFilter(r, F) {
      M((X) => (X[r] = F, { ...X }));
    },
    setDefaultFilter(r) {
    },
    setSortOptions(r) {
    }
  }), [p, M]);
  var k = Qe(t, L, t.label);
  return Q.readonly && (k.inputProps = { readOnly: !0 }), /* @__PURE__ */ e(
    Ae,
    {
      label: ze(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ s(ae, { fullWidth: !0, error: I.status, children: [
        /* @__PURE__ */ e(
          tt,
          {
            freeSolo: !0,
            autoSelect: !0,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            filterOptions: (r) => r,
            renderInput: (r) => /* @__PURE__ */ e(
              fe,
              {
                ...r,
                inputRef: (F) => {
                  l.current = F;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                ...k,
                InputProps: {
                  ...r.InputProps,
                  endAdornment: /* @__PURE__ */ s(ie, { children: [
                    G ? /* @__PURE__ */ e(nt, { color: "inherit", size: 18 }) : null,
                    r.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...k,
            options: g,
            open: u,
            onClose: () => {
              b(!1);
            },
            onOpen: (r) => {
              b(!0);
            },
            ...K
          }
        ),
        /* @__PURE__ */ e(Ve, { className: "form-error-text", children: I.message })
      ] })
    }
  );
}), Ut = (n) => {
  const { fieldDef: t } = n;
  return /* @__PURE__ */ s("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, j = (n, t) => {
  const d = n.fieldDef;
  return /* @__PURE__ */ e(
    t,
    {
      ...d,
      label: n.title
    },
    d.title + d.attribute
  );
}, ht = (n, t, d) => {
  const { type: a } = n, o = { fieldDef: n, title: d };
  switch (a) {
    case "string":
      return j(o, Nt);
    case "radio":
      return j(o, Ft);
    case "select":
      return j(o, He);
    case "date":
      return j(o, bt);
    case "datetime":
      return j(o, xt);
    case "checkbox":
      return j(o, St);
    case "serverlookup":
      return j(o, $t);
    case "textarea":
      return j(o, wt);
    case "switch":
      return j(o, kt);
    case "iosswitch":
      return j(o, Ot);
    case "password":
      return j(o, Pt);
    case "float":
    case "number":
    case "numbersOnly":
      return j(o, Rt);
    case "integer":
      return j(o, Dt);
    case "multiSelect":
      return j(o, He);
    case "dateRange":
      return j(o, zt);
    case "autoComplete":
      return j(o, Jt);
    default:
      return Ut(o);
  }
}, Yt = U(function(t, d) {
  var v;
  const { formLayout: a, context: o } = t, { formData: l } = o, y = a.Container;
  _({});
  const g = et(() => (u) => ht(u), [l.data]);
  var C = ((v = a.options) == null ? void 0 : v.columns) || 1, f = { columns: C };
  return y ? /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: a.fields.map((u, b) => /* @__PURE__ */ e(
    y,
    {
      index: b,
      field: u,
      label: u.title,
      options: f,
      children: g(u)
    },
    u.attribute + u.name + u.type
  )) }) : /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: a.fields.map((u, b) => g(u)) });
}), ft = (n) => {
  const { layout: t, context: d } = n;
  var a = t.Renderer || Yt, o = t.Container || at;
  const l = (y) => /* @__PURE__ */ e(
    a,
    {
      context: d,
      formLayout: y
    }
  );
  return /* @__PURE__ */ e(
    o,
    {
      hideTitle: t.hideTitle,
      title: t.title,
      name: t.name,
      children: /* @__PURE__ */ e(qt, { columns: t.columns, children: l(t.formLayout) })
    }
  );
};
const en = (n) => {
  const { formLayout: t } = n;
  var d = "palmyra-form-field-container";
  const a = t.options;
  if (a && a.columns)
    switch (a.columns) {
      case 2:
        return d + " palmyra-form-field-container-2column";
      case 3:
        return d + " palmyra-form-field-container-3column";
      case 4:
        return d + " palmyra-form-field-container-4column";
    }
  return d;
}, tn = U(function(t, d) {
  const { formLayout: a, context: o } = t, { formData: l } = o, y = _({}), g = en(t), C = "palmyra-form-field-data", f = et(() => (v) => ht(v, y, v.label), [l.data]);
  return /* @__PURE__ */ e("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: a.fields.map((v, u) => /* @__PURE__ */ e("div", { className: v.type === "dateRange" ? "palmyra-form-field-container" : g, children: /* @__PURE__ */ e("div", { className: C, children: f(v) }) }, v.attribute)) });
}), gt = ({ columns: n, isOpen: t, onClose: d, setFilter: a, defaultFilter: o = {} }) => {
  const l = {};
  Object.keys(o || {}).map((u) => {
    const b = o[u];
    It(u, l, b);
  });
  var { getFieldManager: y, getFilterData: g } = Ht(l);
  const C = () => {
    a({});
  }, f = () => {
    var u = g();
    a && a(u);
  }, v = Gt(n);
  return /* @__PURE__ */ s("div", { className: "grid-filter-container", children: [
    /* @__PURE__ */ e("div", { className: "grid-filter-content", children: /* @__PURE__ */ e(he.Provider, { value: y, children: /* @__PURE__ */ e(
      ft,
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
          Renderer: tn
        }
      }
    ) }) }),
    /* @__PURE__ */ s("div", { className: "grid-filter-btn-container", children: [
      /* @__PURE__ */ s(te, { className: "secondary-filled-button", disableRipple: !0, onClick: C, children: [
        /* @__PURE__ */ e(Bt, { className: "button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ s(te, { className: "filled-button", disableRipple: !0, onClick: f, children: [
        /* @__PURE__ */ e(qe, { className: "button-icon" }),
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
const nn = U(function(t, d) {
  const { columns: a, children: o, EmptyChild: l, onRowClick: y, quickSearch: g } = t, C = l || st, f = t.customizer || dt, v = t.customButton, [u, b] = O(!1), [p, E] = O(!1), [A, R] = O(!1), [D, B] = O("standard"), [T, q] = O(!1), [I, Q] = O(""), {
    setQueryFilter: P,
    setQuickSearch: L,
    setSortColumns: G,
    setEndPointOptions: M,
    gotoPage: W,
    setPageSize: z,
    getPageNo: H,
    refreshData: m,
    setQueryLimit: c,
    getQueryLimit: x,
    data: V,
    totalRecords: K,
    queryLimit: Z,
    pageSizeOptions: N,
    filter: k
  } = oe(t), r = d || _(null);
  ne(r, () => ({
    setFilter: (h) => {
      P(h);
    },
    refresh: () => {
      m();
    },
    resetFilter() {
      P({});
    },
    setEndPointOptions: (h) => {
      M(h);
    },
    addFilter: (h, J) => {
      P((Ge) => (Ge[h] = J, { ...Ge }));
    },
    setQueryLimit: (h) => {
      c(h);
    },
    getQueryLimit: () => x(),
    setSortOptions(h) {
      G(h);
    },
    getCurrentData: () => V
  }), [x]);
  const F = (h, J) => {
    W(J - 1);
  }, X = ot(a, f), ee = (h) => {
    B(h);
  }, re = () => {
    b(!u);
  }, i = () => D === "compact" ? { padding: "3px" } : D === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, S = () => D === "compact" ? { padding: "3px" } : D === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, $ = () => {
    var h;
    switch (D) {
      case "compact":
        h = /* @__PURE__ */ e(pe, { className: "density-icon" });
        break;
      case "comfortable":
        h = /* @__PURE__ */ e(ve, { className: "density-icon" });
        break;
      default:
        h = /* @__PURE__ */ e(ye, { className: "grid-button-icon" });
        break;
    }
    return h;
  }, se = (h) => {
    const J = h.target.value;
    Q(J), J ? L(J) : P({});
  }, Ce = (h) => {
    y && y(h);
  }, be = (h) => {
    const J = parseInt(h.target.value, 10);
    z(J);
  }, xe = (h) => {
    E(!p);
  }, Fe = () => {
    R(!A);
  }, ge = () => {
  }, we = () => {
  }, Ne = () => {
    t.onNewClick();
  }, Se = 200, ke = !!t.pageSize, Oe = !!g, Pe = {
    transform: u ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Re = {
    transform: p ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, De = {
    transform: A ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, w = Math.ceil(K / Z.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("div", { children: [
    o,
    /* @__PURE__ */ s("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: Ue(t.title) }),
      /* @__PURE__ */ s("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: Oe && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: Se },
            type: "text",
            value: I,
            onChange: se,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ee, { position: "end", children: /* @__PURE__ */ e(Me, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(le, { onClickAway: () => {
          b(!1);
        }, children: /* @__PURE__ */ s("div", { className: "grid-header-button grid-density-btn", onClick: re, children: [
          /* @__PURE__ */ s(te, { className: "grid-btn", disableRipple: !0, children: [
            $(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(ce, { style: Pe, className: "avathar-arrw-icon" })
          ] }),
          u && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ s("ul", { children: [
            /* @__PURE__ */ s("li", { onClick: () => ee("standard"), children: [
              /* @__PURE__ */ e(ye, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ s("li", { onClick: () => ee("compact"), children: [
              /* @__PURE__ */ e(pe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ s("li", { onClick: () => ee("comfortable"), children: [
              /* @__PURE__ */ e(ve, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        a.some((h) => h.searchable) && /* @__PURE__ */ e(le, { onClickAway: () => {
          E(!1);
        }, children: /* @__PURE__ */ s("div", { className: "grid-header-button grid-filter-btn", onClick: xe, children: [
          /* @__PURE__ */ s(te, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(qe, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" }),
            /* @__PURE__ */ e(ce, { style: Re, className: "avathar-arrw-icon" })
          ] }),
          p && /* @__PURE__ */ e("div", { className: "filter-dropdown-content", onClick: (h) => h.stopPropagation(), children: /* @__PURE__ */ e(
            gt,
            {
              columns: a,
              setFilter: P,
              defaultFilter: k,
              isOpen: T,
              onClose: () => q(!1)
            }
          ) })
        ] }) }),
        /* @__PURE__ */ e(le, { onClickAway: () => {
          R(!1);
        }, children: /* @__PURE__ */ s("div", { className: "grid-header-button grid-export-btn", onClick: Fe, children: [
          /* @__PURE__ */ s(te, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(rt, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Export" }),
            /* @__PURE__ */ e(ce, { style: De, className: "avathar-arrw-icon" })
          ] }),
          A && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ s("ul", { children: [
            /* @__PURE__ */ s("li", { onClick: ge, children: [
              /* @__PURE__ */ e(yt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ s("li", { onClick: we, children: [
              /* @__PURE__ */ e(pt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: /* @__PURE__ */ e("div", { onClick: Ne, children: /* @__PURE__ */ s(te, { className: "grid-btn", disableRipple: !0, children: [
          t.customAddButton && t.customAddButton.icon ? At.cloneElement(t.customAddButton.icon, {
            className: "grid-button-icon"
          }) : /* @__PURE__ */ e(ct, { className: "grid-button-icon" }),
          t.customAddButton && t.customAddButton.text ? /* @__PURE__ */ e(ie, { children: t.customAddButton.text }) : /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(ie, {}),
        v && v.map((h, J) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: h }, J))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      lt,
      {
        columnDefs: X,
        EmptyChild: C,
        customizer: f,
        rowData: V,
        onRowClick: Ce,
        onRowStyle: i,
        onHeaderStyle: S,
        onSortColumn: G
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: ke && w !== 0 && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: N && N.length > 1 ? /* @__PURE__ */ e(ae, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Ie,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: N[0],
            onChange: be,
            label: "Rows per page",
            children: N.map((h) => /* @__PURE__ */ e(Be, { value: h, children: h }, h))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("span", { children: [
          "of ",
          K,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        Te,
        {
          count: w,
          shape: "rounded",
          onChange: F,
          page: H() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), xr = U(function(t, d) {
  const { children: a, EmptyChild: o, onRowClick: l, quickSearch: y } = t, g = t.columns, C = o || st, f = t.customizer || dt, v = t.customButton, u = t.title, [b, p] = O(!1), [E, A] = O(!1), [R, D] = O("standard"), [B, T] = O(!1), [q, I] = O(""), {
    setQueryFilter: Q,
    setQuickSearch: P,
    setSortColumns: L,
    setEndPointOptions: G,
    gotoPage: M,
    setPageSize: W,
    getPageNo: z,
    refreshData: H,
    setQueryLimit: m,
    getQueryLimit: c,
    data: x,
    totalRecords: V,
    queryLimit: K,
    pageSizeOptions: Z,
    filter: N
  } = oe(t), [k, r] = O(g(x)), F = d || _(null);
  ne(F, () => ({
    setFilter: (w) => {
      Q(w);
    },
    refresh: () => {
      H();
    },
    resetFilter() {
      Q({});
    },
    setEndPointOptions: (w) => {
      G(w);
    },
    addFilter: (w, h) => {
      Q((J) => (J[w] = h, { ...J }));
    },
    setQueryLimit: (w) => {
      m(w);
    },
    getQueryLimit: () => c(),
    setSortOptions(w) {
      L(w);
    },
    getCurrentData: () => x
  }), [c, k]), Y(() => {
    r(g(x));
  }, [x]);
  const X = (w, h) => {
    M(h - 1);
  }, ee = ot(k, f), re = (w) => {
    D(w);
  }, i = () => {
    p(!b);
  }, S = () => R === "compact" ? { padding: "3px" } : R === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, $ = () => R === "compact" ? { padding: "3px" } : R === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, se = () => {
    var w;
    switch (R) {
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
  }, Ce = (w) => {
    const h = w.target.value;
    I(h), h ? P(h) : Q({});
  }, be = (w) => {
    l && l(w);
  }, xe = (w) => {
    const h = parseInt(w.target.value, 10);
    W(h);
  }, Fe = () => {
    A(!E);
  }, ge = () => {
    t.onNewClick();
  }, we = () => {
  }, Ne = () => {
  }, Se = 200, ke = !!t.pageSize, Oe = !!y, Pe = {
    transform: b ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Re = {
    transform: E ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, De = Math.ceil(V / K.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("div", { children: [
    a,
    /* @__PURE__ */ s("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: /* @__PURE__ */ e("span", { className: "grid-header-right-content-text", children: u }) }),
      /* @__PURE__ */ s("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: Oe && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: Se },
            type: "text",
            value: q,
            onChange: Ce,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ee, { position: "end", children: /* @__PURE__ */ e(Me, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(le, { onClickAway: () => {
          p(!1);
        }, children: /* @__PURE__ */ s("div", { className: "grid-header-button grid-density-btn", onClick: i, children: [
          /* @__PURE__ */ s(te, { className: "grid-btn", disableRipple: !0, children: [
            se(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(ce, { style: Pe, className: "avathar-arrw-icon" })
          ] }),
          b && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ s("ul", { children: [
            /* @__PURE__ */ s("li", { onClick: () => re("standard"), children: [
              /* @__PURE__ */ e(ye, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ s("li", { onClick: () => re("compact"), children: [
              /* @__PURE__ */ e(pe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ s("li", { onClick: () => re("comfortable"), children: [
              /* @__PURE__ */ e(ve, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        k.some((w) => w.searchable) && /* @__PURE__ */ s("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ s(te, { className: "grid-btn", disableRipple: !0, onClick: () => T(!0), children: [
            /* @__PURE__ */ e(qe, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ e(
            gt,
            {
              columns: k,
              setFilter: Q,
              defaultFilter: N,
              isOpen: B,
              onClose: () => T(!1)
            }
          )
        ] }),
        /* @__PURE__ */ e(le, { onClickAway: () => {
          A(!1);
        }, children: /* @__PURE__ */ s("div", { className: "grid-header-button grid-export-btn", onClick: Fe, children: [
          /* @__PURE__ */ s(te, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(rt, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Export" }),
            /* @__PURE__ */ e(ce, { style: Re, className: "avathar-arrw-icon" })
          ] }),
          E && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ s("ul", { children: [
            /* @__PURE__ */ s("li", { onClick: we, children: [
              /* @__PURE__ */ e(yt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ s("li", { onClick: Ne, children: [
              /* @__PURE__ */ e(pt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: t.customAddButton ? /* @__PURE__ */ e("div", { onClick: ge, children: t.customAddButton }) : /* @__PURE__ */ e("div", { onClick: ge, children: /* @__PURE__ */ s(te, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ e(ct, { className: "grid-button-icon" }),
          /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(ie, {}),
        v && v.map((w, h) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: w }, h))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      lt,
      {
        columnDefs: ee,
        EmptyChild: C,
        customizer: f,
        rowData: x,
        onRowClick: be,
        onRowStyle: S,
        onHeaderStyle: $,
        onSortColumn: L
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: ke && V !== null && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: Z && Z.length > 1 ? /* @__PURE__ */ e(ae, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Ie,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: Z[0],
            onChange: xe,
            label: "Rows per page",
            children: Z.map((w) => /* @__PURE__ */ e(Be, { value: w, children: w }, w))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("span", { children: [
          "of ",
          V,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        Te,
        {
          count: De,
          shape: "rounded",
          onChange: X,
          page: z() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), Fr = U(function(t, d) {
  const { columns: a, endPoint: o, storeFactory: l, layoutParams: y, pagination: g } = t, C = t.quickSearch || "", f = t.customButton, v = t.customAddButton, u = t.title, b = t.fetchAll, p = t.filterTopic, E = t.initialFetch, A = (D, B) => {
  };
  Y(() => {
    var D = Xe.subscribe(t.topic, A);
    return () => {
      Xe.unsubscribe(D);
    };
  }, [t.topic]);
  const R = {
    fields: a,
    pagination: g,
    quickSearch: C,
    storeOptions: {
      endPoint: o
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ e(ie, { children: /* @__PURE__ */ e(Le.Provider, { value: l, children: /* @__PURE__ */ e(
    vt,
    {
      layout: R,
      context: y,
      customAddButton: v,
      onDataChange: t.onDataChange,
      title: u,
      defaultParams: t.defaultParams,
      customButton: f,
      customizer: t.customizer,
      ref: d,
      fetchAll: b,
      filterTopic: p,
      initialFetch: E
    }
  ) }) });
}), rn = U(function(t, d) {
  const a = t.layout, [o, l] = O(a.fields), y = a.pagination ? a.pagination : [15], g = de(Le), C = de(Ye);
  var f = a.storeOptions || {}, v = {};
  Qt(v, f, C);
  const u = g.getGridStore(v, a.storeOptions.endPoint);
  Y(() => {
    f.hasLayout && u.queryLayout({}).then((E) => {
      l(E.columns);
    });
  }, []);
  const { onClick: b, onNewClick: p } = Kt(a.actionOptions, C);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    nn,
    {
      columns: o,
      store: u,
      pageSize: y,
      onRowClick: b,
      onDataChange: t.onDataChange,
      title: t.title,
      customAddButton: t.customAddButton,
      onNewClick: p,
      customizer: t.customizer,
      customButton: t.customButton,
      quickSearch: a.quickSearch,
      ref: d,
      defaultParams: t.defaultParams,
      fetchAll: t.fetchAll,
      filterTopic: t.filterTopic,
      initialFetch: t.initialFetch
    }
  ) });
}), vt = rn, an = (n) => {
  const { layout: t, context: d } = n;
  var a = t.Container || at;
  return /* @__PURE__ */ e(mt, { fallback: /* @__PURE__ */ e("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ e(a, { ...t, children: ((l) => /* @__PURE__ */ e(
    vt,
    {
      context: d,
      layout: l
    }
  ))(t.tableLayout) }) });
}, on = (n) => {
  const { layout: t } = n;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ e(ft, { ...n });
    case "view":
      return /* @__PURE__ */ e(jt, { ...n });
    case "grid":
      return /* @__PURE__ */ e(an, { ...n });
    case "chart":
      return /* @__PURE__ */ e(Et, { ...n });
    default:
      return /* @__PURE__ */ e(Zt, { ...n });
  }
};
function sn(n, t) {
  var d = n || 1, a = t;
  return {
    w: d,
    h: a
  };
}
const Ct = (n) => {
  const { layout: t, context: d } = n, a = t.sections;
  function o(l, y, g) {
    const { w: C, h: f } = sn(l.width, l.height);
    return /* @__PURE__ */ e(Lt, { sx: { width: C, height: f }, children: /* @__PURE__ */ e(
      on,
      {
        layout: l,
        context: y
      }
    ) }, (l.name || "tab") + g);
  }
  return /* @__PURE__ */ e("div", { style: { display: "flex", flexWrap: "wrap" }, children: a.map((l, y) => o(l, d, y)) });
}, $e = U(function(t, d) {
  const { layout: a } = t;
  ne(d, () => ({
    resetFilter() {
    }
  }), []);
  const o = {}, l = a.tabs;
  return /* @__PURE__ */ e("div", { children: l.map((y, g) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    Ct,
    {
      layout: y,
      context: o
    }
  ) }, y.name + g)) });
}), ln = (n) => {
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
}, Je = U(function(t, d) {
  var v;
  const a = t.data || {}, { layout: o } = t;
  var { getFieldManager: l, getFormData: y, isFormValid: g } = Wt(a, (v = t.callbacks) == null ? void 0 : v.onFormValidChange, ln(t.mode));
  ne(d, () => ({
    getData() {
      return y();
    },
    isValid() {
      return g();
    }
  }), []);
  const C = { formData: a }, f = o.tabs;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(he.Provider, { value: l, children: f.map((u, b) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    Ct,
    {
      layout: u,
      context: C
    }
  ) }, u.name + b)) }) });
}), cn = (n) => {
  switch (n) {
    case "grid":
      return $e;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), Je;
    case "formEdit":
    case "formNew":
    case "formView":
      return Je;
    default:
      return $e;
  }
}, wr = U(function(t, d) {
  const [a, o] = O(t.layout), l = t.mode ? t.mode : a.type ? a.type : "grid", y = t.layoutParams || {}, g = cn(l), C = _(0);
  return Y(() => {
    o(t.layout), C.current < 999999 ? C.current++ : C.current = 0;
  }, [t.layout]), /* @__PURE__ */ e(mt, { fallback: /* @__PURE__ */ e("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ e(Le.Provider, { value: t.storeFactory, children: /* @__PURE__ */ e(Ye.Provider, { value: y, children: /* @__PURE__ */ e(g, { ...t, ref: (f) => {
    d && (d.current = f);
  } }, C.current) }) }) });
}), Nr = U(function(t, d) {
  const { title: a, Child: o, childProps: l, pageSize: y, customButton: g } = t, C = d || _(null), {
    setQueryFilter: f,
    refreshData: v,
    setSortColumns: u,
    setEndPointOptions: b,
    setQuickSearch: p,
    gotoPage: E,
    setPageSize: A,
    getPageNo: R,
    setQueryLimit: D,
    getQueryLimit: B,
    data: T,
    totalRecords: q,
    pageSizeOptions: I,
    queryLimit: Q
  } = oe(t), P = t.listKeyProvider || ((c, x) => x);
  ne(C, () => ({
    setFilter: (c) => {
      f(c);
    },
    refresh: () => {
      v();
    },
    resetFilter() {
      f({});
    },
    setEndPointOptions: (c) => {
      b(c);
    },
    addFilter: (c, x) => {
      f((V) => (V[c] = x, { ...V }));
    },
    setQueryLimit: (c) => {
      D(c);
    },
    getQueryLimit: () => B(),
    getCurrentData: () => T,
    setSortOptions(c) {
      u(c);
    }
  }), [f]);
  const L = (c, x) => {
    E(x - 1);
  }, G = (c) => {
    const x = c.target.value;
    p(x);
  }, M = (c) => {
    const x = parseInt(c.target.value, 10);
    A(x);
  }, W = 200, z = !!y, H = !!t.quickSearch, m = Math.ceil(q / Q.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "card-page-container", children: /* @__PURE__ */ s("div", { children: [
    /* @__PURE__ */ s("div", { className: "card-header", children: [
      /* @__PURE__ */ e("div", { className: "card-left-content", children: Ue(a) }),
      /* @__PURE__ */ s("div", { className: "card-right-content", children: [
        H && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: W },
            type: "text",
            onChange: G,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ee, { position: "end", children: /* @__PURE__ */ e(Me, { className: "card-filter-icon" }) })
            }
          }
        ),
        g && g.map((c, x) => /* @__PURE__ */ e("div", { className: "card-custom-button", children: c }, x))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      Vt,
      {
        Child: o,
        childKeyProvider: P,
        preProcess: t.preProcess,
        dataList: T,
        childProps: l,
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
    /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { children: I && I.length > 1 ? /* @__PURE__ */ e(ae, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Ie,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: I[0],
            onChange: M,
            label: "Rows per page",
            children: I.map((c) => /* @__PURE__ */ e(Be, { value: c, children: c }, c))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("span", { children: [
          "of ",
          q,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(Mt, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ e(
        Te,
        {
          count: m,
          shape: "rounded",
          onChange: L,
          page: R() + 1
        }
      ) }) })
    ] }) })
  ] }) }) });
});
export {
  xr as D,
  wr as F,
  vt as G,
  $t as M,
  Fr as P,
  Nr as S,
  Ct as T,
  nn as a,
  br as b,
  Jt as c,
  Yt as d,
  ft as e,
  tn as f,
  ht as g,
  gt as h,
  an as i,
  on as j,
  $e as k,
  Je as l,
  oe as u
};
