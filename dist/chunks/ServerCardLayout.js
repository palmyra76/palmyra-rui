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
import Le from "../palmyra/mui/form/FieldDecorator.js";
import { renderTitle as Ue } from "../palmyra/mui/widget/InfoTooltip.js";
import { FieldManagerContext as he, StoreFactoryContext as Me, LayoutParamsContext as Ye } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as e, jsxs as s, Fragment as ae } from "react/jsx-runtime";
import At, { useState as k, useRef as X, useEffect as U, forwardRef as J, useContext as de, useImperativeHandle as re, useMemo as et } from "react";
import { a as Ve } from "./AsyncTreeMenu.js";
import { FormControlLabel as Ke, Checkbox as Ze, FormControl as ie, FormHelperText as Ee, Autocomplete as tt, TextField as fe, CircularProgress as nt, Button as ee, InputAdornment as Ie, ClickAwayListener as le, Select as Be, MenuItem as Qe, Pagination as Te, Box as Lt, Stack as Mt } from "@mui/material";
import Vt from "../palmyra/layout/card/CardLayout.js";
import Et from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as ze, getFieldLabel as qe } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as ue } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as me, setValueByKey as It } from "../palmyra/form/FormUtil.js";
import { T as je, a as We, b as Bt, c as Ge, d as rt } from "./index.esm2.js";
import { delay as at, delayGenerator as Qt, mergeDeep as Tt } from "../palmyra/utils/index.js";
import zt from "../palmyra/mui/form/MuiDateRangePicker.js";
import it from "../palmyra/layout/container/SectionContainer.js";
import qt from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as ot } from "../palmyra/grid/base/ColumnConverter.js";
import st from "../palmyra/grid/base/EmptyChildTable.js";
import lt from "../palmyra/grid/base/TableX.js";
import { KeyboardArrowDown as ce, Menu as ve, DensitySmall as Ce, DensityLarge as be, Add as ct } from "@mui/icons-material";
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
const oe = (r) => {
  var G, Y;
  const { store: t, quickSearch: d } = r, i = r.fetchAll != !1, [o, l] = k(r.endPointOptions), [p, g] = k(null), x = ((G = r.defaultParams) == null ? void 0 : G.filter) || {}, f = ((Y = r.defaultParams) == null ? void 0 : Y.sort) || {}, [C, u] = r.filterTopic ? Xt(r.filterTopic, x) : k(x), [F, v] = k({}), V = X(r.initialFetch == !1), D = r.pageSize ? r.pageSize : 15;
  var P = D instanceof Array ? D : [D], R = D instanceof Array ? D[0] : D;
  const [I, B] = k({ limit: R, offset: 0, total: !0 }), [z, E] = k(null), Q = () => Math.round(I.offset / I.limit), O = () => I, A = (b) => {
    B((n) => ({ limit: n.limit, total: n.total, offset: b * n.limit }));
  }, q = (b) => {
    const n = b > 10 || b == -1 ? b : 15;
    B((y) => {
      const H = Math.floor(y.offset / n) * n;
      return { limit: n, total: y.total, offset: H };
    });
  }, L = () => C ? Object.keys(C).length == 0 : !1, j = (b) => {
    E((n) => (setTimeout(() => {
      r.onDataChange && r.onDataChange(b, n);
    }, 300), b));
  };
  U(() => {
    if (V.current) {
      V.current = !1;
      return;
    }
    (i || !L()) && K();
  }, [I, F, o]);
  const T = () => ({
    sortOrder: F && Object.keys(F).length > 0 ? F : f,
    total: !0,
    endPointVars: o,
    ...I,
    filter: { ...C, ...x }
  }), K = () => {
    const b = T();
    if (t)
      try {
        t.query(b).then((n) => {
          j(n.result), g(n.total);
        }).catch((n) => {
          var y = n.response ? n.response : n;
          console.error("error while fetching", y), c();
        });
      } catch (n) {
        console.error(n), m();
      }
    else
      console.error("Store is not provided for the Grid"), m();
  }, m = () => {
    j([]), g(0);
  }, c = () => {
    j(void 0), g(null);
  };
  return {
    setQueryFilter: (b) => {
      typeof b == "function" || b && Object.keys(b).length > 0 ? u(b) : u({}), A(0);
    },
    setQuickSearch: (b) => {
      const n = d;
      u(b ? (y) => (y[n] = b, { ...y }) : (y) => (delete y[n], { ...y })), A(0);
    },
    setSortColumns: (b) => {
      v(b);
    },
    setEndPointOptions: l,
    refreshData: K,
    gotoPage: A,
    setPageSize: q,
    getPageNo: Q,
    getQueryLimit: O,
    setQueryLimit: B,
    getQueryRequest: T,
    filter: C,
    queryLimit: I,
    data: z,
    totalRecords: p,
    pageSizeOptions: P
  };
};
function _e(r) {
  return r ? Array.isArray(r) ? r : typeof r == "string" ? r.split(",") : [r] : [];
}
const br = J(function(t, d) {
  const i = de(he), o = d || X(null), l = i(t, "checkbox", o), { mutateOptions: p, setMutateOptions: g } = l, [x, f] = k(!1), C = _e(l.data), u = l.error, F = l.eventListeners, v = l.store, V = t.pageSize || -1, D = { store: v, pageSize: V, defaultParams: t.defaultParams }, { data: P } = oe(D), R = P, I = X(null), B = t.lookupOptions || {}, z = B.idAttribute || "id", E = B.displayAttribute || "name", Q = t.showSelectedOnly && t.readonly, O = ue(z) ? (m) => me(z, m) : (m) => m[z], A = ue(E) ? (m) => me(E, m) : (m) => m[E];
  re(o, () => ({
    focus() {
      I.current.focus();
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
  var q = ze(t, l.data, t.label);
  t.readonly && (q.inputprops = { readOnly: !0 });
  function L(m, c) {
    const w = _e(l.data);
    var M = w.indexOf(m);
    c ? M < 0 && w.push(m) : M >= 0 && w.splice(M, 1), F.onValueChange(w.toString());
  }
  var j = {
    onBlur: F.onBlur,
    onFocus: F.onFocus,
    onChange: (m) => {
      L(m.target.value, m.target.checked);
    }
  };
  const T = (m) => {
    const c = m.toString();
    return C.includes(c);
  }, K = (m) => {
    const c = m.target.checked;
    f(c);
    var w = [];
    c && R.map((M) => {
      w.push(O(M));
    }), F.onValueChange(w.toString());
  };
  return /* @__PURE__ */ e("div", { className: t.className, children: p.visible && /* @__PURE__ */ s(
    Le,
    {
      label: qe(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ e("div", { children: t.hideSelectAll ? /* @__PURE__ */ e(ae, {}) : /* @__PURE__ */ e(
          Ke,
          {
            control: /* @__PURE__ */ e(
              Ze,
              {
                icon: /* @__PURE__ */ e(je, { style: { fontSize: "20px" } }),
                checkedIcon: /* @__PURE__ */ e(We, { style: { fontSize: "20px" } }),
                onChange: K
              }
            ),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ s(
          ie,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: u.status,
            ...q,
            children: [
              R ? R.filter((m) => Q ? T(O(m)) : !0).map((m) => /* @__PURE__ */ e(
                Ke,
                {
                  value: O(m),
                  control: /* @__PURE__ */ e(
                    Ze,
                    {
                      icon: /* @__PURE__ */ e(je, { style: { fontSize: "20px" } }),
                      checkedIcon: /* @__PURE__ */ e(We, { style: { fontSize: "20px" } }),
                      ...j,
                      checked: T(O(m)),
                      disabled: t.readonly
                    }
                  ),
                  label: A(m)
                },
                O(m)
              )) : /* @__PURE__ */ e("div", { children: "No options provided" }),
              /* @__PURE__ */ e(Ee, { className: "form-error-text", children: u.message })
            ]
          }
        )
      ]
    }
  ) });
}), _t = Qt(100), $t = J(function(t, d) {
  const i = de(he), o = d || X(null), l = X(null), p = X(0), [g, x] = k([]), [f, C] = k(""), [u, F] = k(!1), v = i(t, "serverlookup", o), V = t.store || v.store, D = t.lookupOptions || {}, P = D.idAttribute || "id", R = D.displayAttribute || "name", I = R, B = t.defaultParams, z = {
    store: V,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: t.pageSize || 15,
    quickSearch: I,
    initialFetch: !1,
    defaultParams: B
  }, E = oe(z), Q = v.eventListeners, O = v.error, { mutateOptions: A, setMutateOptions: q } = v, L = v.data, j = u && g.length < (L ? 2 : 1), { setQueryFilter: T, setEndPointOptions: K, setQuickSearch: m, totalRecords: c, refreshData: w } = E, M = E.data, _ = ue(P) ? (a) => me(P, a) : (a) => a == null ? void 0 : a[P], G = ue(R) ? (a) => me(R, a) : (a) => a == null ? void 0 : a[R];
  U(() => {
    var a = L != "" ? L : void 0;
    a && x([a]);
  }, [v.data]), U(() => {
    const a = M ? [...M] : [], S = L != "" ? L : void 0, $ = _(S), se = G(S);
    a && $ && se && !H(a, $) && a.unshift(S), x(a), p.current < c && (p.current = c);
  }, [M, c]), U(() => {
    at(Y);
  }, [f]), U(() => {
    _t(Y);
  }, [u]);
  function Y() {
    u && (f.length > 0 && f != G(L) ? m("*" + f + "*") : M ? m(null) : w());
  }
  var b = {
    onBlur: Q.onBlur,
    onFocus: Q.onFocus,
    onChange: (a, S) => {
      n(S);
    },
    onInputChange: (a, S) => (C(S), !0)
  };
  const n = (a) => {
    Q.onValueChange(a);
  }, y = (a) => typeof a == "object" ? G(a) + "" : (console.log(a), "");
  function H(a, S) {
    return a.find(($) => {
      if (_($) == S)
        return $;
    });
  }
  re(o, () => ({
    focus() {
      l.current.focus();
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
    setValue(a, S = !1) {
      v.setData(a, S);
    },
    setVisible(a) {
      q((S) => ({ ...S, visible: a }));
    },
    setRequired(a) {
      q((S) => ({ ...S, required: a }));
    },
    setReadOnly(a) {
      q((S) => ({ ...S, readonly: a }));
    },
    setAttribute(a) {
      q((S) => ({ ...S, ...a }));
    },
    setFilter(a) {
      T(a);
    },
    resetFilter() {
      T({});
    },
    setEndPointOptions(a) {
      K(a);
    },
    getCurrentData: () => L,
    refresh: () => {
      w();
    },
    addFilter(a, S) {
      T(($) => ($[a] = S, { ...$ }));
    },
    setDefaultFilter(a) {
    },
    setSortOptions(a) {
    }
  }), [v, T]);
  var ne = ze(t, L, t.label);
  A.readonly && (ne.inputProps = { readOnly: !0 });
  const te = (a, S) => a instanceof Array ? a.some(($) => _($) == _(S)) : _(a) == _(S);
  return /* @__PURE__ */ e(
    Le,
    {
      label: qe(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ s(ie, { fullWidth: !0, error: O.status, children: [
        /* @__PURE__ */ e(
          tt,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: t.multiple,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            isOptionEqualToValue: te,
            filterOptions: (a) => a,
            renderInput: (a) => /* @__PURE__ */ e(
              fe,
              {
                ...a,
                inputRef: (S) => {
                  l.current = S;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                InputProps: {
                  ...a.InputProps,
                  endAdornment: /* @__PURE__ */ s(ae, { children: [
                    j ? /* @__PURE__ */ e(nt, { color: "inherit", size: 18 }) : null,
                    a.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: y,
            ...ne,
            options: g,
            open: u,
            onClose: () => {
              F(!1);
            },
            onOpen: (a) => {
              F(!0);
            },
            ...b
          }
        ),
        /* @__PURE__ */ e(Ee, { className: "form-error-text", children: O.message })
      ] })
    }
  );
}), Jt = J(function(t, d) {
  const i = de(he), o = d || X(null), l = X(null), p = X(0), [g, x] = k([]), [f, C] = k(""), [u, F] = k(!1), v = i(t, "autoComplete", o), V = t.store || v.store, P = (t.lookupOptions || {}).attribute || "name", R = P, I = {
    store: V,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: R,
    initialFetch: !1
  }, B = oe(I), z = v.eventListeners, E = v.error, { mutateOptions: Q, setMutateOptions: O } = v, A = v.data, q = u && g.length < (A ? 2 : 1), { setQueryFilter: L, setEndPointOptions: j, setQuickSearch: T, totalRecords: K, refreshData: m } = B, c = B.data, w = ue(P) ? (n) => me(P, n) : (n) => n == null ? void 0 : n[P];
  U(() => {
    var n = A != "" ? A : void 0;
    n && x([n]);
  }, [v.data]), U(() => {
    const y = (c ? [...c] : []).map((ne) => w(ne)), H = A != "" ? A : void 0;
    y && H && !Y(y, H) && y.unshift(H), x(y), p.current < K && (p.current = K);
  }, [c, K]), U(() => {
    at(M);
  }, [f, u]);
  function M() {
    u && (f.length > 0 && f != A ? T("*" + f + "*") : c ? T(null) : m());
  }
  var _ = {
    onBlur: (n) => {
      G(f), z.onBlur(f);
    },
    onFocus: z.onFocus,
    onChange: (n, y) => {
      G(y);
    },
    onInputChange: (n, y) => (C(y), !0)
  };
  const G = (n) => {
    z.onValueChange(n);
  };
  function Y(n, y) {
    return n.find((H) => {
      if (H == y)
        return H;
    });
  }
  re(o, () => ({
    focus() {
      l.current.focus();
    },
    isValid() {
      return !E.status;
    },
    clear() {
      v.setData(void 0, !0);
    },
    getValue() {
      return v.getData();
    },
    setValue(n, y = !1) {
      v.setData(n, y);
    },
    setVisible(n) {
      O((y) => ({ ...y, visible: n }));
    },
    setRequired(n) {
      O((y) => ({ ...y, required: n }));
    },
    setReadOnly(n) {
      O((y) => ({ ...y, readonly: n }));
    },
    setAttribute(n) {
      O((y) => ({ ...y, ...n }));
    },
    setFilter(n) {
      L(n);
    },
    resetFilter() {
      L({});
    },
    setEndPointOptions(n) {
      j(n);
    },
    getCurrentData: () => A,
    refresh: () => {
      m();
    },
    addFilter(n, y) {
      L((H) => (H[n] = y, { ...H }));
    },
    setDefaultFilter(n) {
    },
    setSortOptions(n) {
    }
  }), [v, L]);
  var b = ze(t, A, t.label);
  return Q.readonly && (b.inputProps = { readOnly: !0 }), /* @__PURE__ */ e(
    Le,
    {
      label: qe(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ s(ie, { fullWidth: !0, error: E.status, children: [
        /* @__PURE__ */ e(
          tt,
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
                inputRef: (y) => {
                  l.current = y;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                ...b,
                InputProps: {
                  ...n.InputProps,
                  endAdornment: /* @__PURE__ */ s(ae, { children: [
                    q ? /* @__PURE__ */ e(nt, { color: "inherit", size: 18 }) : null,
                    n.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...b,
            options: g,
            open: u,
            onClose: () => {
              F(!1);
            },
            onOpen: (n) => {
              F(!0);
            },
            ..._
          }
        ),
        /* @__PURE__ */ e(Ee, { className: "form-error-text", children: E.message })
      ] })
    }
  );
}), Ut = (r) => {
  const { fieldDef: t } = r;
  return /* @__PURE__ */ s("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, Z = (r, t) => {
  const d = r.fieldDef;
  return /* @__PURE__ */ e(
    t,
    {
      ...d,
      label: r.title
    },
    d.title + d.attribute
  );
}, ht = (r, t, d) => {
  const { type: i } = r, o = { fieldDef: r, title: d };
  switch (i) {
    case "string":
      return Z(o, Nt);
    case "radio":
      return Z(o, Ft);
    case "select":
      return Z(o, He);
    case "date":
      return Z(o, bt);
    case "datetime":
      return Z(o, xt);
    case "checkbox":
      return Z(o, St);
    case "serverlookup":
      return Z(o, $t);
    case "textarea":
      return Z(o, wt);
    case "switch":
      return Z(o, kt);
    case "iosswitch":
      return Z(o, Ot);
    case "password":
      return Z(o, Pt);
    case "float":
    case "number":
    case "numbersOnly":
      return Z(o, Rt);
    case "integer":
      return Z(o, Dt);
    case "multiSelect":
      return Z(o, He);
    case "dateRange":
      return Z(o, zt);
    case "autoComplete":
      return Z(o, Jt);
    default:
      return Ut(o);
  }
}, Yt = J(function(t, d) {
  var C;
  const { formLayout: i, context: o } = t, { formData: l } = o, p = i.Container;
  X({});
  const g = et(() => (u) => ht(u), [l.data]);
  var x = ((C = i.options) == null ? void 0 : C.columns) || 1, f = { columns: x };
  return p ? /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: i.fields.map((u, F) => /* @__PURE__ */ e(
    p,
    {
      index: F,
      field: u,
      label: u.title,
      options: f,
      children: g(u)
    },
    u.attribute + u.name + u.type
  )) }) : /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: i.fields.map((u, F) => g(u)) });
}), ft = (r) => {
  const { layout: t, context: d } = r;
  var i = t.Renderer || Yt, o = t.Container || it;
  const l = (p) => /* @__PURE__ */ e(
    i,
    {
      context: d,
      formLayout: p
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
const en = (r) => {
  const { formLayout: t } = r;
  var d = "palmyra-form-field-container";
  const i = t.options;
  if (i && i.columns)
    switch (i.columns) {
      case 2:
        return d + " palmyra-form-field-container-2column";
      case 3:
        return d + " palmyra-form-field-container-3column";
      case 4:
        return d + " palmyra-form-field-container-4column";
    }
  return d;
}, tn = J(function(t, d) {
  const { formLayout: i, context: o } = t, { formData: l } = o, p = X({}), g = en(t), x = "palmyra-form-field-data", f = et(() => (C) => ht(C, p, C.label), [l.data]);
  return /* @__PURE__ */ e("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: i.fields.map((C, u) => /* @__PURE__ */ e("div", { className: C.type === "dateRange" ? "palmyra-form-field-container" : g, children: /* @__PURE__ */ e("div", { className: x, children: f(C) }) }, C.attribute)) });
}), gt = ({ columns: r, isOpen: t, onClose: d, setFilter: i, defaultFilter: o = {} }) => {
  const l = {};
  Object.keys(o || {}).map((u) => {
    const F = o[u];
    It(u, l, F);
  });
  var { getFieldManager: p, getFilterData: g } = Ht(l);
  const x = () => {
    i({});
  }, f = () => {
    var u = g();
    i && i(u);
  }, C = Gt(r);
  return /* @__PURE__ */ s("div", { className: "grid-filter-container", children: [
    /* @__PURE__ */ e("div", { className: "grid-filter-content", children: /* @__PURE__ */ e(he.Provider, { value: p, children: /* @__PURE__ */ e(
      ft,
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
    /* @__PURE__ */ s("div", { className: "grid-filter-btn-container", children: [
      /* @__PURE__ */ s(ee, { className: "secondary-filled-button", disableRipple: !0, onClick: x, children: [
        /* @__PURE__ */ e(Bt, { className: "button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ s(ee, { className: "filled-button", disableRipple: !0, onClick: f, children: [
        /* @__PURE__ */ e(Ge, { className: "button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
};
function yt(r) {
  return ut({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" } }] })(r);
}
function pt(r) {
  return ut({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M156,208a8,8,0,0,1-8,8H120a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v48h20A8,8,0,0,1,156,208ZM92.65,145.49a8,8,0,0,0-11.16,1.86L68,166.24,54.51,147.35a8,8,0,1,0-13,9.3L58.17,180,41.49,203.35a8,8,0,0,0,13,9.3L68,193.76l13.49,18.89a8,8,0,0,0,13-9.3L77.83,180l16.68-23.35A8,8,0,0,0,92.65,145.49Zm98.94,25.82c-4-1.16-8.14-2.35-10.45-3.84-1.25-.82-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.72,19.82-.56a8,8,0,0,0,4.07-15.48c-2.11-.55-21-5.22-32.83,2.76a20.58,20.58,0,0,0-8.95,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.33-2.15,3.93-4.6,3.06-15.16,1.55-19.54.35A8,8,0,0,0,173.93,214a60.63,60.63,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.81,20.81,0,0,0,9.18-15.23C218,179,201.48,174.17,191.59,171.31ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,1,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.68L160,51.31Z" } }] })(r);
}
const nn = J(function(t, d) {
  const { columns: i, children: o, EmptyChild: l, onRowClick: p, quickSearch: g } = t, x = l || st, f = t.customizer || dt, C = t.customButton, [u, F] = k(!1), [v, V] = k(!1), [D, P] = k(!1), [R, I] = k("standard"), [B, z] = k(!1), [E, Q] = k(""), {
    setQueryFilter: O,
    setQuickSearch: A,
    setSortColumns: q,
    setEndPointOptions: L,
    gotoPage: j,
    setPageSize: T,
    getPageNo: K,
    refreshData: m,
    setQueryLimit: c,
    getQueryLimit: w,
    getQueryRequest: M,
    data: _,
    totalRecords: G,
    queryLimit: Y,
    pageSizeOptions: b,
    filter: n
  } = oe(t), y = d || X(null);
  re(y, () => ({
    setFilter: (h) => {
      O(h);
    },
    refresh: () => {
      m();
    },
    resetFilter() {
      O({});
    },
    setEndPointOptions: (h) => {
      L(h);
    },
    addFilter: (h, W) => {
      O((pe) => (pe[h] = W, { ...pe }));
    },
    setQueryLimit: (h) => {
      c(h);
    },
    getQueryLimit: () => w(),
    setSortOptions(h) {
      q(h);
    },
    getCurrentData: () => _
  }), [w]);
  const H = (h, W) => {
    j(W - 1);
  }, ne = ot(i, f), te = (h) => {
    I(h);
  }, a = () => {
    F(!u);
  }, S = () => R === "compact" ? { padding: "3px" } : R === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, $ = () => R === "compact" ? { padding: "3px" } : R === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, se = () => {
    var h;
    switch (R) {
      case "compact":
        h = /* @__PURE__ */ e(Ce, { className: "density-icon" });
        break;
      case "comfortable":
        h = /* @__PURE__ */ e(be, { className: "density-icon" });
        break;
      default:
        h = /* @__PURE__ */ e(ve, { className: "grid-button-icon" });
        break;
    }
    return h;
  }, xe = (h) => {
    const W = h.target.value;
    Q(W), W ? A(W) : O({});
  }, Fe = (h) => {
    p && p(h);
  }, we = (h) => {
    const W = parseInt(h.target.value, 10);
    T(W);
  }, Ne = (h) => {
    V(!v);
  }, ge = () => {
    P(!D);
  }, ye = (h) => {
    const pe = { ...M(), format: h, limit: -1 };
    t.store.export(pe);
  }, Se = () => {
    t.onNewClick();
  }, ke = 200, Oe = !!t.pageSize, Pe = !!g, Re = {
    transform: u ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, De = {
    transform: v ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Ae = {
    transform: D ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, N = Math.ceil(G / Y.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("div", { children: [
    o,
    /* @__PURE__ */ s("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: Ue(t.title) }),
      /* @__PURE__ */ s("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: Pe && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: ke },
            type: "text",
            value: E,
            onChange: xe,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ie, { position: "end", children: /* @__PURE__ */ e(Ve, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(le, { onClickAway: () => {
          F(!1);
        }, children: /* @__PURE__ */ s("div", { className: "grid-header-button grid-density-btn", onClick: a, children: [
          /* @__PURE__ */ s(ee, { className: "grid-btn", disableRipple: !0, children: [
            se(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(ce, { style: Re, className: "avathar-arrw-icon" })
          ] }),
          u && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ s("ul", { children: [
            /* @__PURE__ */ s("li", { onClick: () => te("standard"), children: [
              /* @__PURE__ */ e(ve, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ s("li", { onClick: () => te("compact"), children: [
              /* @__PURE__ */ e(Ce, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ s("li", { onClick: () => te("comfortable"), children: [
              /* @__PURE__ */ e(be, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        i.some((h) => h.searchable) && /* @__PURE__ */ e(le, { onClickAway: () => {
          V(!1);
        }, children: /* @__PURE__ */ s("div", { className: "grid-header-button grid-filter-btn", onClick: Ne, children: [
          /* @__PURE__ */ s(ee, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(Ge, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" }),
            /* @__PURE__ */ e(ce, { style: De, className: "avathar-arrw-icon" })
          ] }),
          v && /* @__PURE__ */ e("div", { className: "filter-dropdown-content", onClick: (h) => h.stopPropagation(), children: /* @__PURE__ */ e(
            gt,
            {
              columns: i,
              setFilter: O,
              defaultFilter: n,
              isOpen: B,
              onClose: () => z(!1)
            }
          ) })
        ] }) }),
        /* @__PURE__ */ e(le, { onClickAway: () => {
          P(!1);
        }, children: /* @__PURE__ */ s("div", { className: "grid-header-button grid-export-btn", onClick: ge, children: [
          /* @__PURE__ */ s(ee, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(rt, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Export" }),
            /* @__PURE__ */ e(ce, { style: Ae, className: "avathar-arrw-icon" })
          ] }),
          D && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ s("ul", { children: [
            /* @__PURE__ */ s("li", { onClick: () => ye("csv"), children: [
              /* @__PURE__ */ e(yt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ s("li", { onClick: () => ye("excel"), children: [
              /* @__PURE__ */ e(pt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: /* @__PURE__ */ e("div", { onClick: Se, children: /* @__PURE__ */ s(ee, { className: "grid-btn", disableRipple: !0, children: [
          t.customAddButton && t.customAddButton.icon ? At.cloneElement(t.customAddButton.icon, {
            className: "grid-button-icon"
          }) : /* @__PURE__ */ e(ct, { className: "grid-button-icon" }),
          t.customAddButton && t.customAddButton.text ? /* @__PURE__ */ e(ae, { children: t.customAddButton.text }) : /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(ae, {}),
        C && C.map((h, W) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: h }, W))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      lt,
      {
        columnDefs: ne,
        EmptyChild: x,
        customizer: f,
        rowData: _,
        onRowClick: Fe,
        onRowStyle: S,
        onHeaderStyle: $,
        onSortColumn: q
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: Oe && N !== 0 && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: b && b.length > 1 ? /* @__PURE__ */ e(ie, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Be,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: b[0],
            onChange: we,
            label: "Rows per page",
            children: b.map((h) => /* @__PURE__ */ e(Qe, { value: h, children: h }, h))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("span", { children: [
          "of ",
          G,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        Te,
        {
          count: N,
          shape: "rounded",
          onChange: H,
          page: K() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), xr = J(function(t, d) {
  const { children: i, EmptyChild: o, onRowClick: l, quickSearch: p } = t, g = t.columns, x = o || st, f = t.customizer || dt, C = t.customButton, u = t.title, [F, v] = k(!1), [V, D] = k(!1), [P, R] = k("standard"), [I, B] = k(!1), [z, E] = k(""), {
    setQueryFilter: Q,
    setQuickSearch: O,
    setSortColumns: A,
    setEndPointOptions: q,
    gotoPage: L,
    setPageSize: j,
    getPageNo: T,
    refreshData: K,
    setQueryLimit: m,
    getQueryLimit: c,
    data: w,
    totalRecords: M,
    queryLimit: _,
    pageSizeOptions: G,
    filter: Y
  } = oe(t), [b, n] = k(g(w)), y = d || X(null);
  re(y, () => ({
    setFilter: (N) => {
      Q(N);
    },
    refresh: () => {
      K();
    },
    resetFilter() {
      Q({});
    },
    setEndPointOptions: (N) => {
      q(N);
    },
    addFilter: (N, h) => {
      Q((W) => (W[N] = h, { ...W }));
    },
    setQueryLimit: (N) => {
      m(N);
    },
    getQueryLimit: () => c(),
    setSortOptions(N) {
      A(N);
    },
    getCurrentData: () => w
  }), [c, b]), U(() => {
    n(g(w));
  }, [w]);
  const H = (N, h) => {
    L(h - 1);
  }, ne = ot(b, f), te = (N) => {
    R(N);
  }, a = () => {
    v(!F);
  }, S = () => P === "compact" ? { padding: "3px" } : P === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, $ = () => P === "compact" ? { padding: "3px" } : P === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, se = () => {
    var N;
    switch (P) {
      case "compact":
        N = /* @__PURE__ */ e(Ce, { className: "density-icon" });
        break;
      case "comfortable":
        N = /* @__PURE__ */ e(be, { className: "density-icon" });
        break;
      default:
        N = /* @__PURE__ */ e(ve, { className: "grid-button-icon" });
        break;
    }
    return N;
  }, xe = (N) => {
    const h = N.target.value;
    E(h), h ? O(h) : Q({});
  }, Fe = (N) => {
    l && l(N);
  }, we = (N) => {
    const h = parseInt(N.target.value, 10);
    j(h);
  }, Ne = () => {
    D(!V);
  }, ge = () => {
    t.onNewClick();
  }, ye = () => {
  }, Se = () => {
  }, ke = 200, Oe = !!t.pageSize, Pe = !!p, Re = {
    transform: F ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, De = {
    transform: V ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Ae = Math.ceil(M / _.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("div", { children: [
    i,
    /* @__PURE__ */ s("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: /* @__PURE__ */ e("span", { className: "grid-header-right-content-text", children: u }) }),
      /* @__PURE__ */ s("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: Pe && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: ke },
            type: "text",
            value: z,
            onChange: xe,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ie, { position: "end", children: /* @__PURE__ */ e(Ve, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(le, { onClickAway: () => {
          v(!1);
        }, children: /* @__PURE__ */ s("div", { className: "grid-header-button grid-density-btn", onClick: a, children: [
          /* @__PURE__ */ s(ee, { className: "grid-btn", disableRipple: !0, children: [
            se(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(ce, { style: Re, className: "avathar-arrw-icon" })
          ] }),
          F && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ s("ul", { children: [
            /* @__PURE__ */ s("li", { onClick: () => te("standard"), children: [
              /* @__PURE__ */ e(ve, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ s("li", { onClick: () => te("compact"), children: [
              /* @__PURE__ */ e(Ce, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ s("li", { onClick: () => te("comfortable"), children: [
              /* @__PURE__ */ e(be, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        b.some((N) => N.searchable) && /* @__PURE__ */ s("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ s(ee, { className: "grid-btn", disableRipple: !0, onClick: () => B(!0), children: [
            /* @__PURE__ */ e(Ge, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ e(
            gt,
            {
              columns: b,
              setFilter: Q,
              defaultFilter: Y,
              isOpen: I,
              onClose: () => B(!1)
            }
          )
        ] }),
        /* @__PURE__ */ e(le, { onClickAway: () => {
          D(!1);
        }, children: /* @__PURE__ */ s("div", { className: "grid-header-button grid-export-btn", onClick: Ne, children: [
          /* @__PURE__ */ s(ee, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(rt, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Export" }),
            /* @__PURE__ */ e(ce, { style: De, className: "avathar-arrw-icon" })
          ] }),
          V && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ s("ul", { children: [
            /* @__PURE__ */ s("li", { onClick: ye, children: [
              /* @__PURE__ */ e(yt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ s("li", { onClick: Se, children: [
              /* @__PURE__ */ e(pt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: t.customAddButton ? /* @__PURE__ */ e("div", { onClick: ge, children: t.customAddButton }) : /* @__PURE__ */ e("div", { onClick: ge, children: /* @__PURE__ */ s(ee, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ e(ct, { className: "grid-button-icon" }),
          /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(ae, {}),
        C && C.map((N, h) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: N }, h))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      lt,
      {
        columnDefs: ne,
        EmptyChild: x,
        customizer: f,
        rowData: w,
        onRowClick: Fe,
        onRowStyle: S,
        onHeaderStyle: $,
        onSortColumn: A
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: Oe && M !== null && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: G && G.length > 1 ? /* @__PURE__ */ e(ie, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Be,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: G[0],
            onChange: we,
            label: "Rows per page",
            children: G.map((N) => /* @__PURE__ */ e(Qe, { value: N, children: N }, N))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("span", { children: [
          "of ",
          M,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        Te,
        {
          count: Ae,
          shape: "rounded",
          onChange: H,
          page: T() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), Fr = J(function(t, d) {
  const { columns: i, endPoint: o, storeFactory: l, layoutParams: p, pagination: g } = t, x = t.quickSearch || "", f = t.customButton, C = t.customAddButton, u = t.title, F = t.fetchAll, v = t.filterTopic, V = t.initialFetch, D = (R, I) => {
  };
  U(() => {
    var R = Xe.subscribe(t.topic, D);
    return () => {
      Xe.unsubscribe(R);
    };
  }, [t.topic]);
  const P = {
    fields: i,
    pagination: g,
    quickSearch: x,
    storeOptions: {
      endPoint: o
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ e(Me.Provider, { value: l, children: /* @__PURE__ */ e(
    vt,
    {
      layout: P,
      context: p,
      customAddButton: C,
      onDataChange: t.onDataChange,
      title: u,
      defaultParams: t.defaultParams,
      customButton: f,
      customizer: t.customizer,
      ref: d,
      fetchAll: F,
      filterTopic: v,
      initialFetch: V
    }
  ) }) });
}), rn = J(function(t, d) {
  const i = t.layout, [o, l] = k(i.fields), p = i.pagination ? i.pagination : [15], g = de(Me), x = de(Ye);
  var f = i.storeOptions || {}, C = {};
  Tt(C, f, x);
  const u = g.getGridStore(C, i.storeOptions.endPoint);
  U(() => {
    f.hasLayout && u.queryLayout({}).then((V) => {
      l(V.columns);
    });
  }, []);
  const { onClick: F, onNewClick: v } = Kt(i.actionOptions, x);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    nn,
    {
      columns: o,
      store: u,
      pageSize: p,
      onRowClick: F,
      onDataChange: t.onDataChange,
      title: t.title,
      customAddButton: t.customAddButton,
      onNewClick: v,
      customizer: t.customizer,
      customButton: t.customButton,
      quickSearch: i.quickSearch,
      ref: d,
      defaultParams: t.defaultParams,
      fetchAll: t.fetchAll,
      filterTopic: t.filterTopic,
      initialFetch: t.initialFetch
    }
  ) });
}), vt = rn, an = (r) => {
  const { layout: t, context: d } = r;
  var i = t.Container || it;
  return /* @__PURE__ */ e(mt, { fallback: /* @__PURE__ */ e("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ e(i, { ...t, children: ((l) => /* @__PURE__ */ e(
    vt,
    {
      context: d,
      layout: l
    }
  ))(t.tableLayout) }) });
}, on = (r) => {
  const { layout: t } = r;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ e(ft, { ...r });
    case "view":
      return /* @__PURE__ */ e(jt, { ...r });
    case "grid":
      return /* @__PURE__ */ e(an, { ...r });
    case "chart":
      return /* @__PURE__ */ e(Et, { ...r });
    default:
      return /* @__PURE__ */ e(Zt, { ...r });
  }
};
function sn(r, t) {
  var d = r || 1, i = t;
  return {
    w: d,
    h: i
  };
}
const Ct = (r) => {
  const { layout: t, context: d } = r, i = t.sections;
  function o(l, p, g) {
    const { w: x, h: f } = sn(l.width, l.height);
    return /* @__PURE__ */ e(Lt, { sx: { width: x, height: f }, children: /* @__PURE__ */ e(
      on,
      {
        layout: l,
        context: p
      }
    ) }, (l.name || "tab") + g);
  }
  return /* @__PURE__ */ e("div", { style: { display: "flex", flexWrap: "wrap" }, children: i.map((l, p) => o(l, d, p)) });
}, $e = J(function(t, d) {
  const { layout: i } = t;
  re(d, () => ({
    resetFilter() {
    }
  }), []);
  const o = {}, l = i.tabs;
  return /* @__PURE__ */ e("div", { children: l.map((p, g) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    Ct,
    {
      layout: p,
      context: o
    }
  ) }, p.name + g)) });
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
}, Je = J(function(t, d) {
  var C;
  const i = t.data || {}, { layout: o } = t;
  var { getFieldManager: l, getFormData: p, isFormValid: g } = Wt(i, (C = t.callbacks) == null ? void 0 : C.onFormValidChange, ln(t.mode));
  re(d, () => ({
    getData() {
      return p();
    },
    isValid() {
      return g();
    }
  }), []);
  const x = { formData: i }, f = o.tabs;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(he.Provider, { value: l, children: f.map((u, F) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    Ct,
    {
      layout: u,
      context: x
    }
  ) }, u.name + F)) }) });
}), cn = (r) => {
  switch (r) {
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
}, wr = J(function(t, d) {
  const [i, o] = k(t.layout), l = t.mode ? t.mode : i.type ? i.type : "grid", p = t.layoutParams || {}, g = cn(l), x = X(0);
  return U(() => {
    o(t.layout), x.current < 999999 ? x.current++ : x.current = 0;
  }, [t.layout]), /* @__PURE__ */ e(mt, { fallback: /* @__PURE__ */ e("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ e(Me.Provider, { value: t.storeFactory, children: /* @__PURE__ */ e(Ye.Provider, { value: p, children: /* @__PURE__ */ e(g, { ...t, ref: (f) => {
    d && (d.current = f);
  } }, x.current) }) }) });
}), Nr = J(function(t, d) {
  const { title: i, Child: o, childProps: l, pageSize: p, customButton: g } = t, x = d || X(null), {
    setQueryFilter: f,
    refreshData: C,
    setSortColumns: u,
    setEndPointOptions: F,
    setQuickSearch: v,
    gotoPage: V,
    setPageSize: D,
    getPageNo: P,
    setQueryLimit: R,
    getQueryLimit: I,
    data: B,
    totalRecords: z,
    pageSizeOptions: E,
    queryLimit: Q
  } = oe(t), O = t.listKeyProvider || ((c, w) => w);
  re(x, () => ({
    setFilter: (c) => {
      f(c);
    },
    refresh: () => {
      C();
    },
    resetFilter() {
      f({});
    },
    setEndPointOptions: (c) => {
      F(c);
    },
    addFilter: (c, w) => {
      f((M) => (M[c] = w, { ...M }));
    },
    setQueryLimit: (c) => {
      R(c);
    },
    getQueryLimit: () => I(),
    getCurrentData: () => B,
    setSortOptions(c) {
      u(c);
    }
  }), [f]);
  const A = (c, w) => {
    V(w - 1);
  }, q = (c) => {
    const w = c.target.value;
    v(w);
  }, L = (c) => {
    const w = parseInt(c.target.value, 10);
    D(w);
  }, j = 200, T = !!p, K = !!t.quickSearch, m = Math.ceil(z / Q.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "card-page-container", children: /* @__PURE__ */ s("div", { children: [
    /* @__PURE__ */ s("div", { className: "card-header", children: [
      /* @__PURE__ */ e("div", { className: "card-left-content", children: Ue(i) }),
      /* @__PURE__ */ s("div", { className: "card-right-content", children: [
        K && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: j },
            type: "text",
            onChange: q,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ie, { position: "end", children: /* @__PURE__ */ e(Ve, { className: "card-filter-icon" }) })
            }
          }
        ),
        g && g.map((c, w) => /* @__PURE__ */ e("div", { className: "card-custom-button", children: c }, w))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      Vt,
      {
        Child: o,
        childKeyProvider: O,
        preProcess: t.preProcess,
        dataList: B,
        childProps: l,
        EmptyChild: t.EmptyChild
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "card-pagination", children: T && m !== 0 && // <TablePagination
    //     component="div"
    //     count={totalRecords || 0}
    //     page={getPageNo()}
    //     onPageChange={nextPage}
    //     rowsPerPage={queryLimit.limit}
    //     rowsPerPageOptions={pageSizeOptions || []}
    //     onRowsPerPageChange={handleRowsPerPageChange}
    // />
    /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { children: E && E.length > 1 ? /* @__PURE__ */ e(ie, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Be,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: E[0],
            onChange: L,
            label: "Rows per page",
            children: E.map((c) => /* @__PURE__ */ e(Qe, { value: c, children: c }, c))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("span", { children: [
          "of ",
          z,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(Mt, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ e(
        Te,
        {
          count: m,
          shape: "rounded",
          onChange: A,
          page: P() + 1
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
