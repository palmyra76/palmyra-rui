import "../assets/ServerCardLayout.css";
import vt from "../palmyra/mui/form/MuiDatePicker.js";
import Ct from "../palmyra/mui/form/MuiDateTimePicker.js";
import bt from "../palmyra/mui/form/MuiRadioGroup.js";
import He from "../palmyra/mui/form/MuiSelect.js";
import xt from "../palmyra/mui/form/MuiTextArea.js";
import Ft from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import wt from "../palmyra/mui/form/MuiCheckBox.js";
import St from "../palmyra/mui/form/MuiSwitch.js";
import Ot from "../palmyra/mui/form/MuiIOSSwitch.js";
import Nt from "../palmyra/mui/form/MuiPassword.js";
import kt from "../palmyra/mui/form/MuiNumberField.js";
import Pt from "../palmyra/mui/form/MuiIntegerField.js";
import Ee from "../palmyra/mui/form/FieldDecorator.js";
import { renderTitle as et } from "../palmyra/mui/widget/InfoTooltip.js";
import { FieldManagerContext as he, StoreFactoryContext as Ie, LayoutParamsContext as tt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as e, jsxs as d, Fragment as ie } from "react/jsx-runtime";
import Rt, { useState as P, useRef as X, useEffect as ee, forwardRef as U, useContext as de, useImperativeHandle as re, useMemo as nt } from "react";
import { a as Qe } from "./AsyncTreeMenu.js";
import { FormControlLabel as We, Checkbox as Xe, FormControl as ae, FormHelperText as Te, Autocomplete as rt, TextField as fe, CircularProgress as ot, Button as te, InputAdornment as Ve, ClickAwayListener as pe, Select as Be, MenuItem as ze, Pagination as qe, Box as Dt, Stack as At } from "@mui/material";
import Lt from "../palmyra/layout/card/CardLayout.js";
import Mt from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Ge, getFieldLabel as Ke } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as ue } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as me, setValueByKey as Et } from "../palmyra/form/FormUtil.js";
import { T as _e, a as $e, c as It, d as je, b as Qt } from "./index.esm2.js";
import { delay as it, delayGenerator as Tt, mergeDeep as Vt } from "../palmyra/utils/index.js";
import Bt from "../palmyra/mui/form/MuiDateRangePicker.js";
import at from "../palmyra/layout/container/SectionContainer.js";
import zt from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as st } from "../palmyra/grid/base/ColumnConverter.js";
import lt from "../palmyra/grid/base/EmptyChildTable.js";
import ct from "../palmyra/grid/base/TableX.js";
import { KeyboardArrowDown as ve, Menu as Ce, DensitySmall as be, DensityLarge as xe, Add as dt } from "@mui/icons-material";
import { NoopCustomizer as ut } from "../palmyra/grid/Types.js";
import { convertToField as qt } from "../palmyra/grid/base/GridFieldConverter.js";
import { createFilterData as Gt } from "../palmyra/form/PalmyraFilterManager.js";
import { E as Kt, P as jt, a as Ht } from "./ExportOptions.js";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import "../palmyra/layout/tree/AsyncTreeMenuEditor.js";
import { topic as Je } from "../palmyra/utils/pubsub/topic.js";
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
import { getActionPublishers as Wt } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as mt } from "../palmyra/layout/ErrorBoundary.js";
import Xt from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import _t from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as $t } from "./PalmyraFieldManager.js";
import { useKeyValue as Jt } from "../palmyra/utils/pubsub/PubSubHelper.js";
const se = (o) => {
  var G, Y;
  const { store: t, quickSearch: c } = o, i = o.fetchAll != !1, [a, s] = P(o.endPointOptions), [y, f] = P(null), C = ((G = o.defaultParams) == null ? void 0 : G.filter) || {}, h = ((Y = o.defaultParams) == null ? void 0 : Y.sort) || {}, [p, m] = o.filterTopic ? Jt(o.filterTopic, C) : P(C), [b, v] = P({}), M = X(o.initialFetch == !1), E = o.pageSize ? o.pageSize : 15;
  var N = E instanceof Array ? E : [E], D = E instanceof Array ? E[0] : E;
  const [A, T] = P({ limit: D, offset: 0, total: !0 }), [z, Q] = P(null), V = () => Math.round(A.offset / A.limit), I = () => A, k = (F) => {
    T((n) => ({ limit: n.limit, total: n.total, offset: F * n.limit }));
  }, q = (F) => {
    const n = F > 10 || F == -1 ? F : 15;
    T((g) => {
      const K = Math.floor(g.offset / n) * n;
      return { limit: n, total: g.total, offset: K };
    });
  }, R = () => p ? Object.keys(p).length == 0 : !1, W = (F) => {
    Q((n) => (setTimeout(() => {
      o.onDataChange && o.onDataChange(F, n);
    }, 300), F));
  };
  ee(() => {
    if (M.current) {
      M.current = !1;
      return;
    }
    (i || !R()) && j();
  }, [A, b, a]);
  const B = () => ({
    sortOrder: b && Object.keys(b).length > 0 ? b : h,
    total: !0,
    endPointVars: a,
    ...A,
    filter: { ...p, ...C }
  }), j = () => {
    const F = B();
    if (t)
      try {
        t.query(F).then((n) => {
          W(n.result), f(n.total);
        }).catch((n) => {
          var g = n.response ? n.response : n;
          console.error("error while fetching", g), l();
        });
      } catch (n) {
        console.error(n), u();
      }
    else
      console.error("Store is not provided for the Grid"), u();
  }, u = () => {
    W([]), f(0);
  }, l = () => {
    W(void 0), f(null);
  };
  return {
    setQueryFilter: (F) => {
      typeof F == "function" || F && Object.keys(F).length > 0 ? m(F) : m({}), k(0);
    },
    setQuickSearch: (F) => {
      const n = c;
      m(F ? (g) => (g[n] = F, { ...g }) : (g) => (delete g[n], { ...g })), k(0);
    },
    setSortColumns: (F) => {
      v(F);
    },
    setEndPointOptions: s,
    refreshData: j,
    gotoPage: k,
    setPageSize: q,
    getPageNo: V,
    getQueryLimit: I,
    setQueryLimit: T,
    getQueryRequest: B,
    filter: p,
    queryLimit: A,
    data: z,
    totalRecords: y,
    pageSizeOptions: N
  };
};
function Ue(o) {
  return o ? Array.isArray(o) ? o : typeof o == "string" ? o.split(",") : [o] : [];
}
const Fr = U(function(t, c) {
  const i = de(he), a = c || X(null), s = i(t, "checkbox", a), { mutateOptions: y, setMutateOptions: f } = s, [C, h] = P(!1), p = Ue(s.data), m = s.error, b = s.eventListeners, v = s.store, M = t.pageSize || -1, E = { store: v, pageSize: M, defaultParams: t.defaultParams }, { data: N } = se(E), D = N, A = X(null), T = t.lookupOptions || {}, z = T.idAttribute || "id", Q = T.displayAttribute || "name", V = t.showSelectedOnly && t.readonly, I = ue(z) ? (u) => me(z, u) : (u) => u[z], k = ue(Q) ? (u) => me(Q, u) : (u) => u[Q];
  re(a, () => ({
    focus() {
      A.current.focus();
    },
    isValid() {
      return !m.status;
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
  var q = Ge(t, s.data, t.label);
  t.readonly && (q.inputprops = { readOnly: !0 });
  function R(u, l) {
    const w = Ue(s.data);
    var L = w.indexOf(u);
    l ? L < 0 && w.push(u) : L >= 0 && w.splice(L, 1), b.onValueChange(w.toString());
  }
  var W = {
    onBlur: b.onBlur,
    onFocus: b.onFocus,
    onChange: (u) => {
      R(u.target.value, u.target.checked);
    }
  };
  const B = (u) => {
    const l = u.toString();
    return p.includes(l);
  }, j = (u) => {
    const l = u.target.checked;
    h(l);
    var w = [];
    l && D.map((L) => {
      w.push(I(L));
    }), b.onValueChange(w.toString());
  };
  return /* @__PURE__ */ e("div", { className: t.className, children: y.visible && /* @__PURE__ */ d(
    Ee,
    {
      label: Ke(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ e("div", { children: t.hideSelectAll ? /* @__PURE__ */ e(ie, {}) : /* @__PURE__ */ e(
          We,
          {
            control: /* @__PURE__ */ e(
              Xe,
              {
                icon: /* @__PURE__ */ e(_e, { style: { fontSize: "20px" } }),
                checkedIcon: /* @__PURE__ */ e($e, { style: { fontSize: "20px" } }),
                onChange: j
              }
            ),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ d(
          ae,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: m.status,
            ...q,
            children: [
              D ? D.filter((u) => V ? B(I(u)) : !0).map((u) => /* @__PURE__ */ e(
                We,
                {
                  value: I(u),
                  control: /* @__PURE__ */ e(
                    Xe,
                    {
                      icon: /* @__PURE__ */ e(_e, { style: { fontSize: "20px" } }),
                      checkedIcon: /* @__PURE__ */ e($e, { style: { fontSize: "20px" } }),
                      ...W,
                      checked: B(I(u)),
                      disabled: t.readonly
                    }
                  ),
                  label: k(u)
                },
                I(u)
              )) : /* @__PURE__ */ e("div", { children: "No options provided" }),
              /* @__PURE__ */ e(Te, { className: "form-error-text", children: m.message })
            ]
          }
        )
      ]
    }
  ) });
}), Ut = Tt(100), Yt = U(function(t, c) {
  const i = de(he), a = c || X(null), s = X(null), y = X(0), [f, C] = P([]), [h, p] = P(""), [m, b] = P(!1), v = i(t, "serverlookup", a), M = t.store || v.store, E = t.lookupOptions || {}, N = E.idAttribute || "id", D = E.displayAttribute || "name", A = D, T = t.defaultParams, z = {
    store: M,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: t.pageSize || 15,
    quickSearch: A,
    initialFetch: !1,
    defaultParams: T
  }, Q = se(z), V = v.eventListeners, I = v.error, { mutateOptions: k, setMutateOptions: q } = v, R = v.data, W = m && f.length < (R ? 2 : 1), { setQueryFilter: B, setEndPointOptions: j, setQuickSearch: u, totalRecords: l, refreshData: w } = Q, L = Q.data, $ = ue(N) ? (r) => me(N, r) : (r) => r == null ? void 0 : r[N], G = ue(D) ? (r) => me(D, r) : (r) => r == null ? void 0 : r[D];
  ee(() => {
    var r = R != "" ? R : void 0;
    r && C([r]);
  }, [v.data]), ee(() => {
    const r = L ? [...L] : [], O = R != "" ? R : void 0, _ = $(O), le = G(O);
    r && _ && le && !K(r, _) && r.unshift(O), C(r), y.current < l && (y.current = l);
  }, [L, l]), ee(() => {
    it(Y);
  }, [h]), ee(() => {
    Ut(Y);
  }, [m]);
  function Y() {
    m && (h.length > 0 && h != G(R) ? u("*" + h + "*") : L ? u(null) : w());
  }
  var F = {
    onBlur: V.onBlur,
    onFocus: V.onFocus,
    onChange: (r, O) => {
      n(O);
    },
    onInputChange: (r, O) => (p(O), !0)
  };
  const n = (r) => {
    V.onValueChange(r);
  }, g = (r) => typeof r == "object" ? G(r) + "" : (console.log(r), "");
  function K(r, O) {
    return r.find((_) => {
      if ($(_) == O)
        return _;
    });
  }
  re(a, () => ({
    focus() {
      s.current.focus();
    },
    isValid() {
      return !I.status;
    },
    clear() {
      t.multiple ? v.setData([], !0) : v.setData(void 0, !0);
    },
    getValue() {
      return v.getData();
    },
    setValue(r, O = !1) {
      v.setData(r, O);
    },
    setVisible(r) {
      q((O) => ({ ...O, visible: r }));
    },
    setRequired(r) {
      q((O) => ({ ...O, required: r }));
    },
    setReadOnly(r) {
      q((O) => ({ ...O, readonly: r }));
    },
    setAttribute(r) {
      q((O) => ({ ...O, ...r }));
    },
    setFilter(r) {
      B(r);
    },
    resetFilter() {
      B({});
    },
    setEndPointOptions(r) {
      j(r);
    },
    getCurrentData: () => R,
    refresh: () => {
      w();
    },
    addFilter(r, O) {
      B((_) => (_[r] = O, { ..._ }));
    },
    setDefaultFilter(r) {
    },
    setSortOptions(r) {
    }
  }), [v, B]);
  var ne = Ge(t, R, t.label);
  k.readonly && (ne.inputProps = { readOnly: !0 });
  const oe = (r, O) => r instanceof Array ? r.some((_) => $(_) == $(O)) : $(r) == $(O);
  return /* @__PURE__ */ e(
    Ee,
    {
      label: Ke(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ d(ae, { fullWidth: !0, error: I.status, children: [
        /* @__PURE__ */ e(
          rt,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: t.multiple,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            isOptionEqualToValue: oe,
            filterOptions: (r) => r,
            renderInput: (r) => /* @__PURE__ */ e(
              fe,
              {
                ...r,
                inputRef: (O) => {
                  s.current = O;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                InputProps: {
                  ...r.InputProps,
                  endAdornment: /* @__PURE__ */ d(ie, { children: [
                    W ? /* @__PURE__ */ e(ot, { color: "inherit", size: 18 }) : null,
                    r.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: g,
            ...ne,
            options: f,
            open: m,
            onClose: () => {
              b(!1);
            },
            onOpen: (r) => {
              b(!0);
            },
            ...F
          }
        ),
        /* @__PURE__ */ e(Te, { className: "form-error-text", children: I.message })
      ] })
    }
  );
}), Zt = U(function(t, c) {
  const i = de(he), a = c || X(null), s = X(null), y = X(0), [f, C] = P([]), [h, p] = P(""), [m, b] = P(!1), v = i(t, "autoComplete", a), M = t.store || v.store, N = (t.lookupOptions || {}).attribute || "name", D = N, A = {
    store: M,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: D,
    initialFetch: !1
  }, T = se(A), z = v.eventListeners, Q = v.error, { mutateOptions: V, setMutateOptions: I } = v, k = v.data, q = m && f.length < (k ? 2 : 1), { setQueryFilter: R, setEndPointOptions: W, setQuickSearch: B, totalRecords: j, refreshData: u } = T, l = T.data, w = ue(N) ? (n) => me(N, n) : (n) => n == null ? void 0 : n[N];
  ee(() => {
    var n = k != "" ? k : void 0;
    n && C([n]);
  }, [v.data]), ee(() => {
    const g = (l ? [...l] : []).map((ne) => w(ne)), K = k != "" ? k : void 0;
    g && K && !Y(g, K) && g.unshift(K), C(g), y.current < j && (y.current = j);
  }, [l, j]), ee(() => {
    it(L);
  }, [h, m]);
  function L() {
    m && (h.length > 0 && h != k ? B("*" + h + "*") : l ? B(null) : u());
  }
  var $ = {
    onBlur: (n) => {
      G(h), z.onBlur(h);
    },
    onFocus: z.onFocus,
    onChange: (n, g) => {
      G(g);
    },
    onInputChange: (n, g) => (p(g), !0)
  };
  const G = (n) => {
    z.onValueChange(n);
  };
  function Y(n, g) {
    return n.find((K) => {
      if (K == g)
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
    setValue(n, g = !1) {
      v.setData(n, g);
    },
    setVisible(n) {
      I((g) => ({ ...g, visible: n }));
    },
    setRequired(n) {
      I((g) => ({ ...g, required: n }));
    },
    setReadOnly(n) {
      I((g) => ({ ...g, readonly: n }));
    },
    setAttribute(n) {
      I((g) => ({ ...g, ...n }));
    },
    setFilter(n) {
      R(n);
    },
    resetFilter() {
      R({});
    },
    setEndPointOptions(n) {
      W(n);
    },
    getCurrentData: () => k,
    refresh: () => {
      u();
    },
    addFilter(n, g) {
      R((K) => (K[n] = g, { ...K }));
    },
    setDefaultFilter(n) {
    },
    setSortOptions(n) {
    }
  }), [v, R]);
  var F = Ge(t, k, t.label);
  return V.readonly && (F.inputProps = { readOnly: !0 }), /* @__PURE__ */ e(
    Ee,
    {
      label: Ke(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ d(ae, { fullWidth: !0, error: Q.status, children: [
        /* @__PURE__ */ e(
          rt,
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
                inputRef: (g) => {
                  s.current = g;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                ...F,
                InputProps: {
                  ...n.InputProps,
                  endAdornment: /* @__PURE__ */ d(ie, { children: [
                    q ? /* @__PURE__ */ e(ot, { color: "inherit", size: 18 }) : null,
                    n.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...F,
            options: f,
            open: m,
            onClose: () => {
              b(!1);
            },
            onOpen: (n) => {
              b(!0);
            },
            ...$
          }
        ),
        /* @__PURE__ */ e(Te, { className: "form-error-text", children: Q.message })
      ] })
    }
  );
}), en = (o) => {
  const { fieldDef: t } = o;
  return /* @__PURE__ */ d("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, H = (o, t) => {
  const c = o.fieldDef;
  return /* @__PURE__ */ e(
    t,
    {
      ...c,
      label: o.title
    },
    c.title + c.attribute
  );
}, ht = (o, t, c) => {
  const { type: i } = o, a = { fieldDef: o, title: c };
  switch (i) {
    case "string":
      return H(a, Ft);
    case "radio":
      return H(a, bt);
    case "select":
      return H(a, He);
    case "date":
      return H(a, vt);
    case "datetime":
      return H(a, Ct);
    case "checkbox":
      return H(a, wt);
    case "serverlookup":
      return H(a, Yt);
    case "textarea":
      return H(a, xt);
    case "switch":
      return H(a, St);
    case "iosswitch":
      return H(a, Ot);
    case "password":
      return H(a, Nt);
    case "float":
    case "number":
    case "numbersOnly":
      return H(a, kt);
    case "integer":
      return H(a, Pt);
    case "multiSelect":
      return H(a, He);
    case "dateRange":
      return H(a, Bt);
    case "autoComplete":
      return H(a, Zt);
    default:
      return en(a);
  }
}, tn = U(function(t, c) {
  var p;
  const { formLayout: i, context: a } = t, { formData: s } = a, y = i.Container;
  X({});
  const f = nt(() => (m) => ht(m), [s.data]);
  var C = ((p = i.options) == null ? void 0 : p.columns) || 1, h = { columns: C };
  return y ? /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: i.fields.map((m, b) => /* @__PURE__ */ e(
    y,
    {
      index: b,
      field: m,
      label: m.title,
      options: h,
      children: f(m)
    },
    m.attribute + m.name + m.type
  )) }) : /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: i.fields.map((m, b) => f(m)) });
}), ft = (o) => {
  const { layout: t, context: c } = o;
  var i = t.Renderer || tn, a = t.Container || at;
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
      children: /* @__PURE__ */ e(zt, { columns: t.columns, children: s(t.formLayout) })
    }
  );
};
const nn = (o) => {
  const { formLayout: t } = o;
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
}, rn = U(function(t, c) {
  const { formLayout: i, context: a } = t, { formData: s } = a, y = X({}), f = nn(t), C = "palmyra-form-field-data", h = nt(() => (p) => ht(p, y, p.label), [s.data]);
  return /* @__PURE__ */ e("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: i.fields.map((p, m) => /* @__PURE__ */ e("div", { className: p.type === "dateRange" ? "palmyra-form-field-container" : f, children: /* @__PURE__ */ e("div", { className: C, children: h(p) }) }, p.attribute)) });
}), gt = ({ columns: o, isOpen: t, onClose: c, setFilter: i, defaultFilter: a = {} }) => {
  const s = {};
  Object.keys(a || {}).map((m) => {
    const b = a[m];
    Et(m, s, b);
  });
  var { getFieldManager: y, getFilterData: f } = Gt(s);
  const C = () => {
    i({});
  }, h = () => {
    var m = f();
    i && i(m);
  }, p = qt(o);
  return /* @__PURE__ */ d("div", { className: "grid-filter-container", children: [
    /* @__PURE__ */ e("div", { className: "grid-filter-content", children: /* @__PURE__ */ e(he.Provider, { value: y, children: /* @__PURE__ */ e(
      ft,
      {
        context: { formData: {} },
        layout: {
          type: "form",
          formLayout: {
            fields: p,
            options: {
              columns: 2
            }
          },
          Renderer: rn
        }
      }
    ) }) }),
    /* @__PURE__ */ d("div", { className: "grid-filter-btn-container", children: [
      /* @__PURE__ */ d(te, { className: "secondary-filled-button", disableRipple: !0, onClick: C, children: [
        /* @__PURE__ */ e(It, { className: "button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ d(te, { className: "filled-button", disableRipple: !0, onClick: h, children: [
        /* @__PURE__ */ e(je, { className: "button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
}, on = U(function(t, c) {
  const { columns: i, children: a, EmptyChild: s, onRowClick: y, quickSearch: f, exportOptions: C } = t, h = s || lt, p = t.customizer || ut, m = t.customButton, [b, v] = P(!1), [M, E] = P(!1), [N, D] = P(!1), [A, T] = P("standard"), [z, Q] = P(!1), [V, I] = P(""), {
    setQueryFilter: k,
    setQuickSearch: q,
    setSortColumns: R,
    setEndPointOptions: W,
    gotoPage: B,
    setPageSize: j,
    getPageNo: u,
    refreshData: l,
    setQueryLimit: w,
    getQueryLimit: L,
    getQueryRequest: $,
    data: G,
    totalRecords: Y,
    queryLimit: F,
    pageSizeOptions: n,
    filter: g
  } = se(t), K = c || X(null);
  re(K, () => ({
    setFilter: (x) => {
      k(x);
    },
    refresh: () => {
      l();
    },
    resetFilter() {
      k({});
    },
    setEndPointOptions: (x) => {
      W(x);
    },
    addFilter: (x, Z) => {
      k((ye) => (ye[x] = Z, { ...ye }));
    },
    setQueryLimit: (x) => {
      w(x);
    },
    getQueryLimit: () => L(),
    setSortOptions(x) {
      R(x);
    },
    getCurrentData: () => G
  }), [L]);
  const ne = (x, Z) => {
    B(Z - 1);
  }, oe = st(i, p), r = (x) => {
    T(x);
  }, O = () => {
    v(!b);
  }, _ = () => A === "compact" ? { padding: "3px" } : A === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, le = () => A === "compact" ? { padding: "3px" } : A === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, Fe = () => {
    var x;
    switch (A) {
      case "compact":
        x = /* @__PURE__ */ e(be, { className: "density-icon" });
        break;
      case "comfortable":
        x = /* @__PURE__ */ e(xe, { className: "density-icon" });
        break;
      default:
        x = /* @__PURE__ */ e(Ce, { className: "grid-button-icon" });
        break;
    }
    return x;
  }, we = (x) => {
    const Z = x.target.value;
    I(Z), Z ? q(Z) : k({});
  }, Se = (x) => {
    y && y(x);
  }, Oe = (x) => {
    const Z = parseInt(x.target.value, 10);
    j(Z);
  }, ge = (x) => {
    E(!M);
  }, Ne = () => {
    D(!N);
  }, ke = () => {
    D(!1);
  }, Pe = (x) => {
    const ye = { ...$(), format: x, limit: -1 };
    t.store.export(ye), D(!N);
  }, Re = () => {
    t.onNewClick();
  }, De = 200, Ae = !!t.pageSize, Le = !!f, Me = {
    transform: b ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, S = {
    transform: M ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, J = {
    transform: N ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, ce = Math.ceil(Y / F.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ d("div", { children: [
    a,
    /* @__PURE__ */ d("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: et(t.title) }),
      /* @__PURE__ */ d("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: Le && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: De },
            type: "text",
            value: V,
            onChange: we,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ve, { position: "end", children: /* @__PURE__ */ e(Qe, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(pe, { onClickAway: () => {
          v(!1);
        }, children: /* @__PURE__ */ d("div", { className: "grid-header-button grid-density-btn", onClick: O, children: [
          /* @__PURE__ */ d(te, { className: "grid-btn", disableRipple: !0, children: [
            Fe(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(ve, { style: Me, className: "avathar-arrw-icon" })
          ] }),
          b && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ d("ul", { children: [
            /* @__PURE__ */ d("li", { onClick: () => r("standard"), children: [
              /* @__PURE__ */ e(Ce, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ d("li", { onClick: () => r("compact"), children: [
              /* @__PURE__ */ e(be, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ d("li", { onClick: () => r("comfortable"), children: [
              /* @__PURE__ */ e(xe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        i.some((x) => x.searchable) && /* @__PURE__ */ e(pe, { onClickAway: () => {
          E(!1);
        }, children: /* @__PURE__ */ d("div", { className: "grid-header-button grid-filter-btn", onClick: ge, children: [
          /* @__PURE__ */ d(te, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(je, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" }),
            /* @__PURE__ */ e(ve, { style: S, className: "avathar-arrw-icon" })
          ] }),
          M && /* @__PURE__ */ e("div", { className: "filter-dropdown-content", onClick: (x) => x.stopPropagation(), children: /* @__PURE__ */ e(
            gt,
            {
              columns: i,
              setFilter: k,
              defaultFilter: g,
              isOpen: z,
              onClose: () => Q(!1)
            }
          ) })
        ] }) }),
        C && /* @__PURE__ */ e(
          Kt,
          {
            dropdownOpen: N,
            dropdownClose: ke,
            onExportClick: Ne,
            arrowStyle: J,
            exportOption: C,
            exportData: Pe
          }
        ),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: /* @__PURE__ */ e("div", { onClick: Re, children: /* @__PURE__ */ d(te, { className: "grid-btn", disableRipple: !0, children: [
          t.customAddButton && t.customAddButton.icon ? Rt.cloneElement(t.customAddButton.icon, {
            className: "grid-button-icon"
          }) : /* @__PURE__ */ e(dt, { className: "grid-button-icon" }),
          t.customAddButton && t.customAddButton.text ? /* @__PURE__ */ e(ie, { children: t.customAddButton.text }) : /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(ie, {}),
        m && m.map((x, Z) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: x }, Z))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      ct,
      {
        columnDefs: oe,
        EmptyChild: h,
        customizer: p,
        rowData: G,
        onRowClick: Se,
        onRowStyle: _,
        onHeaderStyle: le,
        onSortColumn: R
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: Ae && ce !== 0 && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: n && n.length > 1 ? /* @__PURE__ */ e(ae, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Be,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: n[0],
            onChange: Oe,
            label: "Rows per page",
            children: n.map((x) => /* @__PURE__ */ e(ze, { value: x, children: x }, x))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ d("span", { children: [
          "of ",
          Y,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        qe,
        {
          count: ce,
          shape: "rounded",
          onChange: ne,
          page: u() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), wr = U(function(t, c) {
  const { children: i, EmptyChild: a, onRowClick: s, quickSearch: y } = t, f = t.columns, C = a || lt, h = t.customizer || ut, p = t.customButton, m = t.title, [b, v] = P(!1), [M, E] = P(!1), [N, D] = P("standard"), [A, T] = P(!1), [z, Q] = P(""), {
    setQueryFilter: V,
    setQuickSearch: I,
    setSortColumns: k,
    setEndPointOptions: q,
    gotoPage: R,
    setPageSize: W,
    getPageNo: B,
    refreshData: j,
    setQueryLimit: u,
    getQueryLimit: l,
    data: w,
    totalRecords: L,
    queryLimit: $,
    pageSizeOptions: G,
    filter: Y
  } = se(t), [F, n] = P(f(w)), g = c || X(null);
  re(g, () => ({
    setFilter: (S) => {
      V(S);
    },
    refresh: () => {
      j();
    },
    resetFilter() {
      V({});
    },
    setEndPointOptions: (S) => {
      q(S);
    },
    addFilter: (S, J) => {
      V((ce) => (ce[S] = J, { ...ce }));
    },
    setQueryLimit: (S) => {
      u(S);
    },
    getQueryLimit: () => l(),
    setSortOptions(S) {
      k(S);
    },
    getCurrentData: () => w
  }), [l, F]), ee(() => {
    n(f(w));
  }, [w]);
  const K = (S, J) => {
    R(J - 1);
  }, ne = st(F, h), oe = (S) => {
    D(S);
  }, r = () => {
    v(!b);
  }, O = () => N === "compact" ? { padding: "3px" } : N === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, _ = () => N === "compact" ? { padding: "3px" } : N === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, le = () => {
    var S;
    switch (N) {
      case "compact":
        S = /* @__PURE__ */ e(be, { className: "density-icon" });
        break;
      case "comfortable":
        S = /* @__PURE__ */ e(xe, { className: "density-icon" });
        break;
      default:
        S = /* @__PURE__ */ e(Ce, { className: "grid-button-icon" });
        break;
    }
    return S;
  }, Fe = (S) => {
    const J = S.target.value;
    Q(J), J ? I(J) : V({});
  }, we = (S) => {
    s && s(S);
  }, Se = (S) => {
    const J = parseInt(S.target.value, 10);
    W(J);
  }, Oe = () => {
    E(!M);
  }, ge = () => {
    t.onNewClick();
  }, Ne = () => {
  }, ke = () => {
  }, Pe = 200, Re = !!t.pageSize, De = !!y, Ae = {
    transform: b ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Le = {
    transform: M ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Me = Math.ceil(L / $.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ d("div", { children: [
    i,
    /* @__PURE__ */ d("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: /* @__PURE__ */ e("span", { className: "grid-header-right-content-text", children: m }) }),
      /* @__PURE__ */ d("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: De && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: Pe },
            type: "text",
            value: z,
            onChange: Fe,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ve, { position: "end", children: /* @__PURE__ */ e(Qe, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(pe, { onClickAway: () => {
          v(!1);
        }, children: /* @__PURE__ */ d("div", { className: "grid-header-button grid-density-btn", onClick: r, children: [
          /* @__PURE__ */ d(te, { className: "grid-btn", disableRipple: !0, children: [
            le(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(ve, { style: Ae, className: "avathar-arrw-icon" })
          ] }),
          b && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ d("ul", { children: [
            /* @__PURE__ */ d("li", { onClick: () => oe("standard"), children: [
              /* @__PURE__ */ e(Ce, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ d("li", { onClick: () => oe("compact"), children: [
              /* @__PURE__ */ e(be, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ d("li", { onClick: () => oe("comfortable"), children: [
              /* @__PURE__ */ e(xe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        F.some((S) => S.searchable) && /* @__PURE__ */ d("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ d(te, { className: "grid-btn", disableRipple: !0, onClick: () => T(!0), children: [
            /* @__PURE__ */ e(je, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ e(
            gt,
            {
              columns: F,
              setFilter: V,
              defaultFilter: Y,
              isOpen: A,
              onClose: () => T(!1)
            }
          )
        ] }),
        /* @__PURE__ */ e(pe, { onClickAway: () => {
          E(!1);
        }, children: /* @__PURE__ */ d("div", { className: "grid-header-button grid-export-btn", onClick: Oe, children: [
          /* @__PURE__ */ d(te, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(Qt, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Export" }),
            /* @__PURE__ */ e(ve, { style: Le, className: "avathar-arrw-icon" })
          ] }),
          M && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ d("ul", { children: [
            /* @__PURE__ */ d("li", { onClick: Ne, children: [
              /* @__PURE__ */ e(jt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ d("li", { onClick: ke, children: [
              /* @__PURE__ */ e(Ht, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: t.customAddButton ? /* @__PURE__ */ e("div", { onClick: ge, children: t.customAddButton }) : /* @__PURE__ */ e("div", { onClick: ge, children: /* @__PURE__ */ d(te, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ e(dt, { className: "grid-button-icon" }),
          /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(ie, {}),
        p && p.map((S, J) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: S }, J))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      ct,
      {
        columnDefs: ne,
        EmptyChild: C,
        customizer: h,
        rowData: w,
        onRowClick: we,
        onRowStyle: O,
        onHeaderStyle: _,
        onSortColumn: k
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: Re && L !== null && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: G && G.length > 1 ? /* @__PURE__ */ e(ae, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Be,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: G[0],
            onChange: Se,
            label: "Rows per page",
            children: G.map((S) => /* @__PURE__ */ e(ze, { value: S, children: S }, S))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ d("span", { children: [
          "of ",
          L,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        qe,
        {
          count: Me,
          shape: "rounded",
          onChange: K,
          page: B() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), Sr = U(function(t, c) {
  const { columns: i, endPoint: a, storeFactory: s, layoutParams: y, pagination: f } = t, C = t.quickSearch || "", h = t.customButton, p = t.customAddButton, m = t.title, b = t.fetchAll, v = t.filterTopic, M = t.initialFetch, E = (D, A) => {
  };
  ee(() => {
    var D = Je.subscribe(t.topic, E);
    return () => {
      Je.unsubscribe(D);
    };
  }, [t.topic]);
  const N = {
    fields: i,
    pagination: f,
    quickSearch: C,
    storeOptions: {
      endPoint: a
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ e(ie, { children: /* @__PURE__ */ e(Ie.Provider, { value: s, children: /* @__PURE__ */ e(
    yt,
    {
      layout: N,
      context: y,
      customAddButton: p,
      onDataChange: t.onDataChange,
      title: m,
      defaultParams: t.defaultParams,
      customButton: h,
      customizer: t.customizer,
      ref: c,
      exportOptions: t.exportOptions,
      fetchAll: b,
      filterTopic: v,
      initialFetch: M
    }
  ) }) });
}), an = U(function(t, c) {
  const i = t.layout, [a, s] = P(i.fields), y = i.pagination ? i.pagination : [15], f = de(Ie), C = de(tt);
  var h = i.storeOptions || {}, p = {};
  Vt(p, h, C);
  const m = f.getGridStore(p, i.storeOptions.endPoint);
  ee(() => {
    h.hasLayout && m.queryLayout({}).then((M) => {
      s(M.columns);
    });
  }, []);
  const { onClick: b, onNewClick: v } = Wt(i.actionOptions, C);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    on,
    {
      columns: a,
      store: m,
      pageSize: y,
      onRowClick: b,
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
      fetchAll: t.fetchAll,
      filterTopic: t.filterTopic,
      initialFetch: t.initialFetch
    }
  ) });
}), yt = an, sn = (o) => {
  const { layout: t, context: c } = o;
  var i = t.Container || at;
  return /* @__PURE__ */ e(mt, { fallback: /* @__PURE__ */ e("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ e(i, { ...t, children: ((s) => /* @__PURE__ */ e(
    yt,
    {
      context: c,
      layout: s
    }
  ))(t.tableLayout) }) });
}, ln = (o) => {
  const { layout: t } = o;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ e(ft, { ...o });
    case "view":
      return /* @__PURE__ */ e(_t, { ...o });
    case "grid":
      return /* @__PURE__ */ e(sn, { ...o });
    case "chart":
      return /* @__PURE__ */ e(Mt, { ...o });
    default:
      return /* @__PURE__ */ e(Xt, { ...o });
  }
};
function cn(o, t) {
  var c = o || 1, i = t;
  return {
    w: c,
    h: i
  };
}
const pt = (o) => {
  const { layout: t, context: c } = o, i = t.sections;
  function a(s, y, f) {
    const { w: C, h } = cn(s.width, s.height);
    return /* @__PURE__ */ e(Dt, { sx: { width: C, height: h }, children: /* @__PURE__ */ e(
      ln,
      {
        layout: s,
        context: y
      }
    ) }, (s.name || "tab") + f);
  }
  return /* @__PURE__ */ e("div", { style: { display: "flex", flexWrap: "wrap" }, children: i.map((s, y) => a(s, c, y)) });
}, Ye = U(function(t, c) {
  const { layout: i } = t;
  re(c, () => ({
    resetFilter() {
    }
  }), []);
  const a = {}, s = i.tabs;
  return /* @__PURE__ */ e("div", { children: s.map((y, f) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    pt,
    {
      layout: y,
      context: a
    }
  ) }, y.name + f)) });
}), dn = (o) => {
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
}, Ze = U(function(t, c) {
  var p;
  const i = t.data || {}, { layout: a } = t;
  var { getFieldManager: s, getFormData: y, isFormValid: f } = $t(i, (p = t.callbacks) == null ? void 0 : p.onFormValidChange, dn(t.mode));
  re(c, () => ({
    getData() {
      return y();
    },
    isValid() {
      return f();
    }
  }), []);
  const C = { formData: i }, h = a.tabs;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(he.Provider, { value: s, children: h.map((m, b) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    pt,
    {
      layout: m,
      context: C
    }
  ) }, m.name + b)) }) });
}), un = (o) => {
  switch (o) {
    case "grid":
      return Ye;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), Ze;
    case "formEdit":
    case "formNew":
    case "formView":
      return Ze;
    default:
      return Ye;
  }
}, Or = U(function(t, c) {
  const [i, a] = P(t.layout), s = t.mode ? t.mode : i.type ? i.type : "grid", y = t.layoutParams || {}, f = un(s), C = X(0);
  return ee(() => {
    a(t.layout), C.current < 999999 ? C.current++ : C.current = 0;
  }, [t.layout]), /* @__PURE__ */ e(mt, { fallback: /* @__PURE__ */ e("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ e(Ie.Provider, { value: t.storeFactory, children: /* @__PURE__ */ e(tt.Provider, { value: y, children: /* @__PURE__ */ e(f, { ...t, ref: (h) => {
    c && (c.current = h);
  } }, C.current) }) }) });
}), Nr = U(function(t, c) {
  const { title: i, Child: a, childProps: s, pageSize: y, customButton: f } = t, C = c || X(null), {
    setQueryFilter: h,
    refreshData: p,
    setSortColumns: m,
    setEndPointOptions: b,
    setQuickSearch: v,
    gotoPage: M,
    setPageSize: E,
    getPageNo: N,
    setQueryLimit: D,
    getQueryLimit: A,
    data: T,
    totalRecords: z,
    pageSizeOptions: Q,
    queryLimit: V
  } = se(t), I = t.listKeyProvider || ((l, w) => w);
  re(C, () => ({
    setFilter: (l) => {
      h(l);
    },
    refresh: () => {
      p();
    },
    resetFilter() {
      h({});
    },
    setEndPointOptions: (l) => {
      b(l);
    },
    addFilter: (l, w) => {
      h((L) => (L[l] = w, { ...L }));
    },
    setQueryLimit: (l) => {
      D(l);
    },
    getQueryLimit: () => A(),
    getCurrentData: () => T,
    setSortOptions(l) {
      m(l);
    }
  }), [h]);
  const k = (l, w) => {
    M(w - 1);
  }, q = (l) => {
    const w = l.target.value;
    v(w);
  }, R = (l) => {
    const w = parseInt(l.target.value, 10);
    E(w);
  }, W = 200, B = !!y, j = !!t.quickSearch, u = Math.ceil(z / V.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "card-page-container", children: /* @__PURE__ */ d("div", { children: [
    /* @__PURE__ */ d("div", { className: "card-header", children: [
      /* @__PURE__ */ e("div", { className: "card-left-content", children: et(i) }),
      /* @__PURE__ */ d("div", { className: "card-right-content", children: [
        j && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: W },
            type: "text",
            onChange: q,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ve, { position: "end", children: /* @__PURE__ */ e(Qe, { className: "card-filter-icon" }) })
            }
          }
        ),
        f && f.map((l, w) => /* @__PURE__ */ e("div", { className: "card-custom-button", children: l }, w))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      Lt,
      {
        Child: a,
        childKeyProvider: I,
        preProcess: t.preProcess,
        dataList: T,
        childProps: s,
        EmptyChild: t.EmptyChild
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "card-pagination", children: B && u !== 0 && // <TablePagination
    //     component="div"
    //     count={totalRecords || 0}
    //     page={getPageNo()}
    //     onPageChange={nextPage}
    //     rowsPerPage={queryLimit.limit}
    //     rowsPerPageOptions={pageSizeOptions || []}
    //     onRowsPerPageChange={handleRowsPerPageChange}
    // />
    /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { children: Q && Q.length > 1 ? /* @__PURE__ */ e(ae, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ d("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Be,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: Q[0],
            onChange: R,
            label: "Rows per page",
            children: Q.map((l) => /* @__PURE__ */ e(ze, { value: l, children: l }, l))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ d("span", { children: [
          "of ",
          z,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(At, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ e(
        qe,
        {
          count: u,
          shape: "rounded",
          onChange: k,
          page: N() + 1
        }
      ) }) })
    ] }) })
  ] }) }) });
});
export {
  wr as D,
  Or as F,
  yt as G,
  Yt as M,
  Sr as P,
  Nr as S,
  pt as T,
  on as a,
  Fr as b,
  Zt as c,
  tn as d,
  ft as e,
  rn as f,
  ht as g,
  gt as h,
  sn as i,
  ln as j,
  Ye as k,
  Ze as l,
  se as u
};
