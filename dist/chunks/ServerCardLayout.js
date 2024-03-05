import "../assets/ServerCardLayout.css";
import xt from "../palmyra/mui/form/MuiDatePicker.js";
import Ft from "../palmyra/mui/form/MuiDateTimePicker.js";
import Nt from "../palmyra/mui/form/MuiRadioGroup.js";
import Ke from "../palmyra/mui/form/MuiSelect.js";
import wt from "../palmyra/mui/form/MuiTextArea.js";
import St from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import kt from "../palmyra/mui/form/MuiCheckBox.js";
import Ot from "../palmyra/mui/form/MuiSwitch.js";
import Pt from "../palmyra/mui/form/MuiIOSSwitch.js";
import Rt from "../palmyra/mui/form/MuiPassword.js";
import Dt from "../palmyra/mui/form/MuiNumberField.js";
import At from "../palmyra/mui/form/MuiIntegerField.js";
import Le from "../palmyra/mui/form/FieldDecorator.js";
import { a as Ye, I as Lt, B as Mt } from "./InfoTooltip.js";
import { FieldManagerContext as he, StoreFactoryContext as Me, LayoutParamsContext as et } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as e, jsxs as a, Fragment as re } from "react/jsx-runtime";
import Et, { useState as D, useRef as X, useEffect as ee, forwardRef as Y, useContext as de, useImperativeHandle as ie, useMemo as tt } from "react";
import { a as Ee } from "./index.esm2.js";
import { FormControlLabel as Ze, Checkbox as je, FormControl as oe, FormHelperText as Ve, Autocomplete as nt, TextField as fe, CircularProgress as rt, Button as te, InputAdornment as Te, ClickAwayListener as le, Select as Ie, MenuItem as Be, Pagination as Qe, Box as Vt, Stack as Tt } from "@mui/material";
import It from "../palmyra/layout/card/CardLayout.js";
import Bt from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as ze, getFieldLabel as qe } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as ue } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as me } from "../palmyra/form/FormUtil.js";
import { T as We, a as Xe, b as Qt, c as Ge, d as it } from "./index.esm.js";
import { delay as ot, delayGenerator as zt, mergeDeep as qt } from "../palmyra/utils/index.js";
import Gt from "../palmyra/mui/form/MuiDateRangePicker.js";
import at from "../palmyra/layout/container/SectionContainer.js";
import Ht from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as st } from "../palmyra/grid/base/ColumnConverter.js";
import lt from "../palmyra/grid/base/EmptyChildTable.js";
import ct from "../palmyra/grid/base/TableX.js";
import { KeyboardArrowDown as ce, Menu as ye, DensitySmall as pe, DensityLarge as ve, Add as dt } from "@mui/icons-material";
import { NoopCustomizer as ut } from "../palmyra/grid/Types.js";
import { convertToField as Kt } from "../palmyra/grid/base/GridFieldConverter.js";
import { createFilterData as Zt } from "../palmyra/form/PalmyraFilterManager.js";
import { G as mt } from "./iconBase.js";
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
import { getActionPublishers as jt } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as ht } from "../palmyra/layout/ErrorBoundary.js";
import Wt from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import Xt from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as _t } from "./PalmyraFieldManager.js";
import { useKeyValue as $t } from "../palmyra/utils/pubsub/PubSubHelper.js";
const ae = (n) => {
  var U, W;
  const { store: t, quickSearch: c } = n, o = n.fetchAll != !1, [s, l] = D(n.endPointOptions), [g, f] = D(null), C = ((U = n.defaultParams) == null ? void 0 : U.filter) || {}, m = ((W = n.defaultParams) == null ? void 0 : W.sort) || {}, [p, u] = n.filterTopic ? $t(n.filterTopic, C) : D(C), [F, v] = D({}), E = X(n.initialFetch == !1), A = n.pageSize ? n.pageSize : 15;
  var O = A instanceof Array ? A : [A], L = A instanceof Array ? A[0] : A;
  const [T, I] = D({ limit: L, offset: 0, total: !0 }), [B, Q] = D(null), M = () => Math.round(T.offset / T.limit), z = () => T, P = (k) => {
    I((R) => ({ limit: R.limit, total: R.total, offset: k * R.limit }));
  }, V = (k) => {
    const R = k > 10 || k == -1 ? k : 15;
    I((r) => {
      const x = Math.floor(r.offset / R) * R;
      return { limit: R, total: r.total, offset: x };
    });
  }, H = () => p ? Object.keys(p).length == 0 : !1, q = (k) => {
    Q((R) => (setTimeout(() => {
      n.onDataChange && n.onDataChange(B, R);
    }, 300), k));
  };
  ee(() => {
    if (E.current) {
      E.current = !1;
      return;
    }
    (o || !H()) && j();
  }, [T, F, s]);
  const j = () => {
    const R = {
      sortOrder: F && Object.keys(F).length > 0 ? F : m,
      total: !0,
      endPointVars: s,
      ...T,
      filter: { ...p, ...C }
    };
    if (t)
      try {
        t.query(R).then((r) => {
          q(r.result), f(r.total);
        }).catch((r) => {
          var x = r.response ? r.response : r;
          console.error("error while fetching", x), w();
        });
      } catch (r) {
        console.error(r), d();
      }
    else
      console.error("Store is not provided for the Grid"), d();
  }, d = () => {
    q([]), f(0);
  }, w = () => {
    q(void 0), f(null);
  };
  return {
    setQueryFilter: (k) => {
      typeof k == "function" || k && Object.keys(k).length > 0 ? u(k) : u({}), P(0);
    },
    setQuickSearch: (k) => {
      const R = c;
      u(k ? (r) => (r[R] = k, { ...r }) : (r) => (delete r[R], { ...r })), P(0);
    },
    setSortColumns: (k) => {
      v(k);
    },
    setEndPointOptions: l,
    refreshData: j,
    gotoPage: P,
    setPageSize: V,
    getPageNo: M,
    getQueryLimit: z,
    setQueryLimit: I,
    filter: p,
    queryLimit: T,
    data: B,
    totalRecords: g,
    pageSizeOptions: O
  };
};
function $e(n) {
  return n ? Array.isArray(n) ? n : typeof n == "string" ? n.split(",") : [n] : [];
}
const xr = Y(function(t, c) {
  const o = de(he), s = c || X(null), l = o(t, "checkbox", s), { mutateOptions: g, setMutateOptions: f } = l, [C, m] = D(!1), p = $e(l.data), u = l.error, F = l.eventListeners, E = { store: l.store, pageSize: -1 }, { data: A } = ae(E), O = A, L = X(null), T = t.lookupOptions || {}, I = T.idAttribute || "id", B = T.displayAttribute || "name", Q = t.showSelectedOnly && t.readonly, M = ue(I) ? (d) => me(I, d) : (d) => d[I], z = ue(B) ? (d) => me(B, d) : (d) => d[B];
  ie(s, () => ({
    focus() {
      L.current.focus();
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
  var P = ze(t, l.data, t.label);
  t.readonly && (P.inputprops = { readOnly: !0 });
  function V(d, w) {
    const h = $e(l.data);
    var b = h.indexOf(d);
    w ? b < 0 && h.push(d) : b >= 0 && h.splice(b, 1), F.onValueChange(h.toString());
  }
  var H = {
    onBlur: F.onBlur,
    onFocus: F.onFocus,
    onChange: (d) => {
      V(d.target.value, d.target.checked);
    }
  };
  const q = (d) => {
    const w = d.toString();
    return p.includes(w);
  }, j = (d) => {
    const w = d.target.checked;
    m(w);
    var h = [];
    w && O.map((b) => {
      h.push(M(b));
    }), F.onValueChange(h.toString());
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
        /* @__PURE__ */ e("div", { children: t.hideSelectAll ? /* @__PURE__ */ e(re, {}) : /* @__PURE__ */ e(
          Ze,
          {
            control: /* @__PURE__ */ e(
              je,
              {
                icon: /* @__PURE__ */ e(We, { style: { fontSize: "20px" } }),
                checkedIcon: /* @__PURE__ */ e(Xe, { style: { fontSize: "20px" } }),
                onChange: j
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
            ...P,
            children: [
              O ? O.filter((d) => Q ? q(M(d)) : !0).map((d) => /* @__PURE__ */ e(
                Ze,
                {
                  value: M(d),
                  control: /* @__PURE__ */ e(
                    je,
                    {
                      icon: /* @__PURE__ */ e(We, { style: { fontSize: "20px" } }),
                      checkedIcon: /* @__PURE__ */ e(Xe, { style: { fontSize: "20px" } }),
                      ...H,
                      checked: q(M(d)),
                      disabled: t.readonly
                    }
                  ),
                  label: z(d)
                },
                M(d)
              )) : /* @__PURE__ */ e("div", { children: "No options provided" }),
              /* @__PURE__ */ e(Ve, { className: "form-error-text", children: u.message })
            ]
          }
        )
      ]
    }
  ) });
}), Jt = zt(100), Ut = Y(function(t, c) {
  const o = de(he), s = c || X(null), l = X(null), g = X(0), [f, C] = D([]), [m, p] = D(""), [u, F] = D(!1), v = o(t, "serverlookup", s), E = t.store || v.store, A = t.lookupOptions || {}, O = A.idAttribute || "id", L = A.displayAttribute || "name", T = L, I = {
    store: E,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: T,
    initialFetch: !1
  }, B = ae(I), Q = v.eventListeners, M = v.error, { mutateOptions: z, setMutateOptions: P } = v, V = v.data, H = u && f.length < (V ? 2 : 1), { setQueryFilter: q, setEndPointOptions: j, setQuickSearch: d, totalRecords: w, refreshData: h } = B, b = B.data, G = ue(O) ? (i) => me(O, i) : (i) => i == null ? void 0 : i[O], U = ue(L) ? (i) => me(L, i) : (i) => i == null ? void 0 : i[L];
  ee(() => {
    var i = V != "" ? V : void 0;
    i && C([i]);
  }, [v.data]), ee(() => {
    const i = b ? [...b] : [], S = V != "" ? V : void 0, _ = G(S), se = U(S);
    i && _ && se && !x(i, _) && i.unshift(S), C(i), g.current < w && (g.current = w);
  }, [b, w]), ee(() => {
    ot(W);
  }, [m]), ee(() => {
    Jt(W);
  }, [u]);
  function W() {
    u && (m.length > 0 && m != U(V) ? d("*" + m + "*") : b ? d(null) : h());
  }
  var k = {
    onBlur: Q.onBlur,
    onFocus: Q.onFocus,
    onChange: (i, S) => {
      R(S);
    },
    onInputChange: (i, S) => (p(S), !0)
  };
  const R = (i) => {
    Q.onValueChange(i);
  }, r = (i) => typeof i == "object" ? U(i) + "" : (console.log(i), "");
  function x(i, S) {
    return i.find((_) => {
      if (G(_) == S)
        return _;
    });
  }
  ie(s, () => ({
    focus() {
      l.current.focus();
    },
    isValid() {
      return !M.status;
    },
    clear() {
      t.multiple ? v.setData([], !0) : v.setData(void 0, !0);
    },
    getValue() {
      return v.getData();
    },
    setValue(i, S = !1) {
      v.setData(i, S);
    },
    setVisible(i) {
      P((S) => ({ ...S, visible: i }));
    },
    setRequired(i) {
      P((S) => ({ ...S, required: i }));
    },
    setReadOnly(i) {
      P((S) => ({ ...S, readonly: i }));
    },
    setAttribute(i) {
      P((S) => ({ ...S, ...i }));
    },
    setFilter(i) {
      q(i);
    },
    resetFilter() {
      q({});
    },
    setEndPointOptions(i) {
      j(i);
    },
    getCurrentData: () => V,
    refresh: () => {
      h();
    },
    addFilter(i, S) {
      q((_) => (_[i] = S, { ..._ }));
    },
    setDefaultFilter(i) {
    },
    setSortOptions(i) {
    }
  }), [v, q]);
  var K = ze(t, V, t.label);
  z.readonly && (K.inputProps = { readOnly: !0 });
  const ne = (i, S) => i instanceof Array ? i.some((_) => G(_) == G(S)) : G(i) == G(S);
  return /* @__PURE__ */ e(
    Le,
    {
      label: qe(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ a(oe, { fullWidth: !0, error: M.status, children: [
        /* @__PURE__ */ e(
          nt,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: t.multiple,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            isOptionEqualToValue: ne,
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
                  endAdornment: /* @__PURE__ */ a(re, { children: [
                    H ? /* @__PURE__ */ e(rt, { color: "inherit", size: 18 }) : null,
                    i.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: r,
            ...K,
            options: f,
            open: u,
            onClose: () => {
              F(!1);
            },
            onOpen: (i) => {
              F(!0);
            },
            ...k
          }
        ),
        /* @__PURE__ */ e(Ve, { className: "form-error-text", children: M.message })
      ] })
    }
  );
}), Yt = Y(function(t, c) {
  const o = de(he), s = c || X(null), l = X(null), g = X(0), [f, C] = D([]), [m, p] = D(""), [u, F] = D(!1), v = o(t, "autoComplete", s), E = t.store || v.store, O = (t.lookupOptions || {}).attribute || "name", L = O, T = {
    store: E,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: L,
    initialFetch: !1
  }, I = ae(T), B = v.eventListeners, Q = v.error, { mutateOptions: M, setMutateOptions: z } = v, P = v.data, V = u && f.length < (P ? 2 : 1), { setQueryFilter: H, setEndPointOptions: q, setQuickSearch: j, totalRecords: d, refreshData: w } = I, h = I.data, b = ue(O) ? (r) => me(O, r) : (r) => r == null ? void 0 : r[O];
  ee(() => {
    var r = P != "" ? P : void 0;
    r && C([r]);
  }, [v.data]), ee(() => {
    const x = (h ? [...h] : []).map((ne) => b(ne)), K = P != "" ? P : void 0;
    x && K && !k(x, K) && x.unshift(K), C(x), g.current < d && (g.current = d);
  }, [h, d]), ee(() => {
    ot(G);
  }, [m, u]);
  function G() {
    u && (m.length > 0 && m != P ? j("*" + m + "*") : h ? j(null) : w());
  }
  var U = {
    onBlur: (r) => {
      W(m), B.onBlur(m);
    },
    onFocus: B.onFocus,
    onChange: (r, x) => {
      W(x);
    },
    onInputChange: (r, x) => (p(x), !0)
  };
  const W = (r) => {
    B.onValueChange(r);
  };
  function k(r, x) {
    return r.find((K) => {
      if (K == x)
        return K;
    });
  }
  ie(s, () => ({
    focus() {
      l.current.focus();
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
    setValue(r, x = !1) {
      v.setData(r, x);
    },
    setVisible(r) {
      z((x) => ({ ...x, visible: r }));
    },
    setRequired(r) {
      z((x) => ({ ...x, required: r }));
    },
    setReadOnly(r) {
      z((x) => ({ ...x, readonly: r }));
    },
    setAttribute(r) {
      z((x) => ({ ...x, ...r }));
    },
    setFilter(r) {
      H(r);
    },
    resetFilter() {
      H({});
    },
    setEndPointOptions(r) {
      q(r);
    },
    getCurrentData: () => P,
    refresh: () => {
      w();
    },
    addFilter(r, x) {
      H((K) => (K[r] = x, { ...K }));
    },
    setDefaultFilter(r) {
    },
    setSortOptions(r) {
    }
  }), [v, H]);
  var R = ze(t, P, t.label);
  return M.readonly && (R.inputProps = { readOnly: !0 }), /* @__PURE__ */ e(
    Le,
    {
      label: qe(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ a(oe, { fullWidth: !0, error: Q.status, children: [
        /* @__PURE__ */ e(
          nt,
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
                inputRef: (x) => {
                  l.current = x;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                ...R,
                InputProps: {
                  ...r.InputProps,
                  endAdornment: /* @__PURE__ */ a(re, { children: [
                    V ? /* @__PURE__ */ e(rt, { color: "inherit", size: 18 }) : null,
                    r.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...R,
            options: f,
            open: u,
            onClose: () => {
              F(!1);
            },
            onOpen: (r) => {
              F(!0);
            },
            ...U
          }
        ),
        /* @__PURE__ */ e(Ve, { className: "form-error-text", children: Q.message })
      ] })
    }
  );
}), en = (n) => {
  const { fieldDef: t } = n;
  return /* @__PURE__ */ a("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, Z = (n, t) => {
  const c = n.fieldDef;
  return /* @__PURE__ */ e(
    t,
    {
      ...c,
      label: n.title
    },
    c.title + c.attribute
  );
}, ft = (n, t, c) => {
  const { type: o } = n, s = { fieldDef: n, title: c };
  switch (o) {
    case "string":
      return Z(s, St);
    case "radio":
      return Z(s, Nt);
    case "select":
      return Z(s, Ke);
    case "date":
      return Z(s, xt);
    case "datetime":
      return Z(s, Ft);
    case "checkbox":
      return Z(s, kt);
    case "serverlookup":
      return Z(s, Ut);
    case "textarea":
      return Z(s, wt);
    case "switch":
      return Z(s, Ot);
    case "iosswitch":
      return Z(s, Pt);
    case "password":
      return Z(s, Rt);
    case "float":
    case "number":
    case "numbersOnly":
      return Z(s, Dt);
    case "integer":
      return Z(s, At);
    case "multiSelect":
      return Z(s, Ke);
    case "dateRange":
      return Z(s, Gt);
    case "autoComplete":
      return Z(s, Yt);
    default:
      return en(s);
  }
}, tn = Y(function(t, c) {
  var p;
  const { formLayout: o, context: s } = t, { formData: l } = s, g = o.Container;
  X({});
  const f = tt(() => (u) => ft(u), [l.data]);
  var C = ((p = o.options) == null ? void 0 : p.columns) || 1, m = { columns: C };
  return g ? /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: o.fields.map((u, F) => /* @__PURE__ */ e(
    g,
    {
      index: F,
      field: u,
      label: u.title,
      options: m,
      children: f(u)
    },
    u.attribute + u.name + u.type
  )) }) : /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: o.fields.map((u, F) => f(u)) });
}), gt = (n) => {
  const { layout: t, context: c } = n;
  var o = t.Renderer || tn, s = t.Container || at;
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
      children: /* @__PURE__ */ e(Ht, { columns: t.columns, children: l(t.formLayout) })
    }
  );
};
const nn = (n) => {
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
}, rn = Y(function(t, c) {
  const { formLayout: o, context: s } = t, { formData: l } = s, g = X({}), f = nn(t), C = "palmyra-form-field-data", m = tt(() => (p) => ft(p, g, p.label), [l.data]);
  return /* @__PURE__ */ e("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: o.fields.map((p, u) => /* @__PURE__ */ e("div", { className: p.type === "dateRange" ? "palmyra-form-field-container" : f, children: /* @__PURE__ */ e("div", { className: C, children: m(p) }) }, p.attribute)) });
}), yt = ({ columns: n, isOpen: t, onClose: c, setFilter: o, defaultFilter: s = {} }) => {
  var { getFieldManager: l, getFilterData: g } = Zt(s);
  const f = () => {
    o({});
  }, C = () => {
    var p = g();
    o && o(p);
  }, m = Kt(n);
  return /* @__PURE__ */ a("div", { className: "grid-filter-container", children: [
    /* @__PURE__ */ e("div", { className: "grid-filter-content", children: /* @__PURE__ */ e(he.Provider, { value: l, children: /* @__PURE__ */ e(
      gt,
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
          Renderer: rn
        }
      }
    ) }) }),
    /* @__PURE__ */ a("div", { className: "grid-filter-btn-container", children: [
      /* @__PURE__ */ a(te, { className: "secondary-filled-button", disableRipple: !0, onClick: f, children: [
        /* @__PURE__ */ e(Qt, { className: "button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ a(te, { className: "filled-button", disableRipple: !0, onClick: C, children: [
        /* @__PURE__ */ e(Ge, { className: "button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
};
function pt(n) {
  return mt({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" } }] })(n);
}
function vt(n) {
  return mt({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M156,208a8,8,0,0,1-8,8H120a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v48h20A8,8,0,0,1,156,208ZM92.65,145.49a8,8,0,0,0-11.16,1.86L68,166.24,54.51,147.35a8,8,0,1,0-13,9.3L58.17,180,41.49,203.35a8,8,0,0,0,13,9.3L68,193.76l13.49,18.89a8,8,0,0,0,13-9.3L77.83,180l16.68-23.35A8,8,0,0,0,92.65,145.49Zm98.94,25.82c-4-1.16-8.14-2.35-10.45-3.84-1.25-.82-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.72,19.82-.56a8,8,0,0,0,4.07-15.48c-2.11-.55-21-5.22-32.83,2.76a20.58,20.58,0,0,0-8.95,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.33-2.15,3.93-4.6,3.06-15.16,1.55-19.54.35A8,8,0,0,0,173.93,214a60.63,60.63,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.81,20.81,0,0,0,9.18-15.23C218,179,201.48,174.17,191.59,171.31ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,1,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.68L160,51.31Z" } }] })(n);
}
const on = Y(function(t, c) {
  const { columns: o, children: s, EmptyChild: l, onRowClick: g, quickSearch: f } = t, C = l || lt, m = t.customizer || ut, p = t.customButton, [u, F] = D(!1), [v, E] = D(!1), [A, O] = D(!1), [L, T] = D("standard"), [I, B] = D(!1), [Q, M] = D(""), {
    setQueryFilter: z,
    setQuickSearch: P,
    setSortColumns: V,
    setEndPointOptions: H,
    gotoPage: q,
    setPageSize: j,
    getPageNo: d,
    refreshData: w,
    setQueryLimit: h,
    getQueryLimit: b,
    data: G,
    totalRecords: U,
    queryLimit: W,
    pageSizeOptions: k,
    filter: R
  } = ae(t), r = c || X(null);
  ie(r, () => ({
    setFilter: (y) => {
      z(y);
    },
    refresh: () => {
      w();
    },
    resetFilter() {
      z({});
    },
    setEndPointOptions: (y) => {
      H(y);
    },
    addFilter: (y, J) => {
      z((He) => (He[y] = J, { ...He }));
    },
    setQueryLimit: (y) => {
      h(y);
    },
    getQueryLimit: () => b(),
    setSortOptions(y) {
      V(y);
    },
    getCurrentData: () => G
  }), [b]);
  const x = (y, J) => {
    q(J - 1);
  }, K = st(o, m), ne = (y) => {
    T(y);
  }, i = () => {
    F(!u);
  }, S = () => L === "compact" ? { padding: "3px" } : L === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, _ = () => L === "compact" ? { padding: "3px" } : L === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, se = () => {
    var y;
    switch (L) {
      case "compact":
        y = /* @__PURE__ */ e(pe, { className: "density-icon" });
        break;
      case "comfortable":
        y = /* @__PURE__ */ e(ve, { className: "density-icon" });
        break;
      default:
        y = /* @__PURE__ */ e(ye, { className: "grid-button-icon" });
        break;
    }
    return y;
  }, Ce = (y) => {
    const J = y.target.value;
    M(J), J ? P(J) : z({});
  }, be = (y) => {
    g && g(y);
  }, xe = (y) => {
    const J = parseInt(y.target.value, 10);
    j(J);
  }, Fe = (y) => {
    E(!v);
  }, Ne = () => {
    O(!A);
  }, ge = () => {
  }, we = () => {
  }, Se = () => {
    t.onNewClick();
  }, ke = 200, Oe = !!t.pageSize, Pe = !!f, Re = {
    transform: u ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, De = {
    transform: v ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Ae = {
    transform: A ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, N = () => {
    if (t.title) {
      if (typeof t.title == "object" && t.title.toolTip) {
        const J = t.title;
        return /* @__PURE__ */ e(Ye, { placement: "right", title: J.toolTip, arrow: !0, children: /* @__PURE__ */ a("div", { className: "info-grid-header", children: [
          /* @__PURE__ */ e("span", { className: "grid-header-right-content-text", children: J.title }),
          /* @__PURE__ */ e(Lt, {})
        ] }) });
      }
      const y = typeof t.title == "string" ? t.title : t.title.title;
      return /* @__PURE__ */ e("span", { className: "grid-header-right-content-text", children: y });
    } else
      return /* @__PURE__ */ e(re, {});
  }, $ = Math.ceil(U / W.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("div", { children: [
    s,
    /* @__PURE__ */ a("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: N() }),
      /* @__PURE__ */ a("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: Pe && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: ke },
            type: "text",
            value: Q,
            onChange: Ce,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Te, { position: "end", children: /* @__PURE__ */ e(Ee, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(le, { onClickAway: () => {
          F(!1);
        }, children: /* @__PURE__ */ a("div", { className: "grid-header-button grid-density-btn", onClick: i, children: [
          /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
            se(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(ce, { style: Re, className: "avathar-arrw-icon" })
          ] }),
          u && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ a("ul", { children: [
            /* @__PURE__ */ a("li", { onClick: () => ne("standard"), children: [
              /* @__PURE__ */ e(ye, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: () => ne("compact"), children: [
              /* @__PURE__ */ e(pe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: () => ne("comfortable"), children: [
              /* @__PURE__ */ e(ve, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        o.some((y) => y.searchable) && /* @__PURE__ */ e(le, { onClickAway: () => {
          E(!1);
        }, children: /* @__PURE__ */ a("div", { className: "grid-header-button grid-filter-btn", onClick: Fe, children: [
          /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(Ge, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" }),
            /* @__PURE__ */ e(ce, { style: De, className: "avathar-arrw-icon" })
          ] }),
          v && /* @__PURE__ */ e("div", { className: "filter-dropdown-content", onClick: (y) => y.stopPropagation(), children: /* @__PURE__ */ e(
            yt,
            {
              columns: o,
              setFilter: z,
              defaultFilter: R,
              isOpen: I,
              onClose: () => B(!1)
            }
          ) })
        ] }) }),
        /* @__PURE__ */ e(le, { onClickAway: () => {
          O(!1);
        }, children: /* @__PURE__ */ a("div", { className: "grid-header-button grid-export-btn", onClick: Ne, children: [
          /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(it, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Export" }),
            /* @__PURE__ */ e(ce, { style: Ae, className: "avathar-arrw-icon" })
          ] }),
          A && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ a("ul", { children: [
            /* @__PURE__ */ a("li", { onClick: ge, children: [
              /* @__PURE__ */ e(pt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: we, children: [
              /* @__PURE__ */ e(vt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: /* @__PURE__ */ e("div", { onClick: Se, children: /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
          t.customAddButton && t.customAddButton.icon ? Et.cloneElement(t.customAddButton.icon, {
            className: "grid-button-icon"
          }) : /* @__PURE__ */ e(dt, { className: "grid-button-icon" }),
          t.customAddButton && t.customAddButton.text ? /* @__PURE__ */ e(re, { children: t.customAddButton.text }) : /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(re, {}),
        p && p.map((y, J) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: y }, J))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      ct,
      {
        columnDefs: K,
        EmptyChild: C,
        customizer: m,
        rowData: G,
        onRowClick: be,
        onRowStyle: S,
        onHeaderStyle: _,
        onSortColumn: V
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: Oe && $ !== 0 && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: k && k.length > 1 ? /* @__PURE__ */ e(oe, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Ie,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: k[0],
            onChange: xe,
            label: "Rows per page",
            children: k.map((y) => /* @__PURE__ */ e(Be, { value: y, children: y }, y))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("span", { children: [
          "of ",
          U,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        Qe,
        {
          count: $,
          shape: "rounded",
          componentName: "div",
          onChange: x,
          page: d() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), Fr = Y(function(t, c) {
  const { children: o, EmptyChild: s, onRowClick: l, quickSearch: g } = t, f = t.columns, C = s || lt, m = t.customizer || ut, p = t.customButton, u = t.gridTitle, [F, v] = D(!1), [E, A] = D(!1), [O, L] = D("standard"), [T, I] = D(!1), [B, Q] = D(""), {
    setQueryFilter: M,
    setQuickSearch: z,
    setSortColumns: P,
    setEndPointOptions: V,
    gotoPage: H,
    setPageSize: q,
    getPageNo: j,
    refreshData: d,
    setQueryLimit: w,
    getQueryLimit: h,
    data: b,
    totalRecords: G,
    queryLimit: U,
    pageSizeOptions: W,
    filter: k
  } = ae(t), [R, r] = D(f(b)), x = c || X(null);
  ie(x, () => ({
    setFilter: (N) => {
      M(N);
    },
    refresh: () => {
      d();
    },
    resetFilter() {
      M({});
    },
    setEndPointOptions: (N) => {
      V(N);
    },
    addFilter: (N, $) => {
      M((y) => (y[N] = $, { ...y }));
    },
    setQueryLimit: (N) => {
      w(N);
    },
    getQueryLimit: () => h(),
    setSortOptions(N) {
      P(N);
    },
    getCurrentData: () => b
  }), [h, R]), ee(() => {
    r(f(b));
  }, [b]);
  const K = (N, $) => {
    H($ - 1);
  }, ne = st(R, m), i = (N) => {
    L(N);
  }, S = () => {
    v(!F);
  }, _ = () => O === "compact" ? { padding: "3px" } : O === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, se = () => O === "compact" ? { padding: "3px" } : O === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, Ce = () => {
    var N;
    switch (O) {
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
    Q($), $ ? z($) : M({});
  }, xe = (N) => {
    l && l(N);
  }, Fe = (N) => {
    const $ = parseInt(N.target.value, 10);
    q($);
  }, Ne = () => {
    A(!E);
  }, ge = () => {
    t.onNewClick();
  }, we = () => {
  }, Se = () => {
  }, ke = 200, Oe = !!t.pageSize, Pe = !!g, Re = {
    transform: F ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, De = {
    transform: E ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Ae = Math.ceil(G / U.limit);
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
            value: B,
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
          v(!1);
        }, children: /* @__PURE__ */ a("div", { className: "grid-header-button grid-density-btn", onClick: S, children: [
          /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
            Ce(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(ce, { style: Re, className: "avathar-arrw-icon" })
          ] }),
          F && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ a("ul", { children: [
            /* @__PURE__ */ a("li", { onClick: () => i("standard"), children: [
              /* @__PURE__ */ e(ye, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: () => i("compact"), children: [
              /* @__PURE__ */ e(pe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: () => i("comfortable"), children: [
              /* @__PURE__ */ e(ve, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        R.some((N) => N.searchable) && /* @__PURE__ */ a("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, onClick: () => I(!0), children: [
            /* @__PURE__ */ e(Ge, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ e(
            yt,
            {
              columns: R,
              setFilter: M,
              defaultFilter: k,
              isOpen: T,
              onClose: () => I(!1)
            }
          )
        ] }),
        /* @__PURE__ */ e(le, { onClickAway: () => {
          A(!1);
        }, children: /* @__PURE__ */ a("div", { className: "grid-header-button grid-export-btn", onClick: Ne, children: [
          /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(it, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Export" }),
            /* @__PURE__ */ e(ce, { style: De, className: "avathar-arrw-icon" })
          ] }),
          E && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ a("ul", { children: [
            /* @__PURE__ */ a("li", { onClick: we, children: [
              /* @__PURE__ */ e(pt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: Se, children: [
              /* @__PURE__ */ e(vt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: t.customAddButton ? /* @__PURE__ */ e("div", { onClick: ge, children: t.customAddButton }) : /* @__PURE__ */ e("div", { onClick: ge, children: /* @__PURE__ */ a(te, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ e(dt, { className: "grid-button-icon" }),
          /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(re, {}),
        p && p.map((N, $) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: N }, $))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      ct,
      {
        columnDefs: ne,
        EmptyChild: C,
        customizer: m,
        rowData: b,
        onRowClick: xe,
        onRowStyle: _,
        onHeaderStyle: se,
        onSortColumn: P
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: Oe && G !== null && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: W && W.length > 1 ? /* @__PURE__ */ e(oe, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Ie,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: W[0],
            onChange: Fe,
            label: "Rows per page",
            children: W.map((N) => /* @__PURE__ */ e(Be, { value: N, children: N }, N))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("span", { children: [
          "of ",
          G,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        Qe,
        {
          count: Ae,
          shape: "rounded",
          componentName: "div",
          onChange: K,
          page: j() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), Nr = Y(function(t, c) {
  const { columns: o, endPoint: s, storeFactory: l, layoutParams: g, pagination: f } = t, C = t.quickSearch || "", m = t.customButton, p = t.customAddButton, u = t.title, F = t.fetchAll, v = t.filterTopic, E = t.initialFetch, A = (L, T) => {
  };
  ee(() => {
    var L = _e.subscribe(t.topic, A);
    return () => {
      _e.unsubscribe(L);
    };
  }, [t.topic]);
  const O = {
    fields: o,
    pagination: f,
    quickSearch: C,
    storeOptions: {
      endPoint: s
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ e(re, { children: /* @__PURE__ */ e(Me.Provider, { value: l, children: /* @__PURE__ */ e(
    Ct,
    {
      layout: O,
      context: g,
      customAddButton: p,
      onDataChange: t.onDataChange,
      title: u,
      defaultParams: t.defaultParams,
      customButton: m,
      customizer: t.customizer,
      ref: c,
      fetchAll: F,
      filterTopic: v,
      initialFetch: E
    }
  ) }) });
}), an = Y(function(t, c) {
  const o = t.layout, [s, l] = D(o.fields), g = o.pagination ? o.pagination : [15], f = de(Me), C = de(et);
  var m = o.storeOptions || {}, p = {};
  qt(p, m, C);
  const u = f.getGridStore(p, o.storeOptions.endPoint);
  ee(() => {
    m.hasLayout && u.queryLayout({}).then((E) => {
      l(E.columns);
    });
  }, []);
  const { onClick: F, onNewClick: v } = jt(o.actionOptions, C);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    on,
    {
      columns: s,
      store: u,
      pageSize: g,
      onRowClick: F,
      onDataChange: t.onDataChange,
      title: t.title,
      customAddButton: t.customAddButton,
      onNewClick: v,
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
}), Ct = an, sn = (n) => {
  const { layout: t, context: c } = n;
  var o = t.Container || at;
  return /* @__PURE__ */ e(ht, { fallback: /* @__PURE__ */ e("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ e(o, { ...t, children: ((l) => /* @__PURE__ */ e(
    Ct,
    {
      context: c,
      layout: l
    }
  ))(t.tableLayout) }) });
}, ln = (n) => {
  const { layout: t } = n;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ e(gt, { ...n });
    case "view":
      return /* @__PURE__ */ e(Xt, { ...n });
    case "grid":
      return /* @__PURE__ */ e(sn, { ...n });
    case "chart":
      return /* @__PURE__ */ e(Bt, { ...n });
    default:
      return /* @__PURE__ */ e(Wt, { ...n });
  }
};
function cn(n, t) {
  var c = n || 1, o = t;
  return {
    w: c,
    h: o
  };
}
const bt = (n) => {
  const { layout: t, context: c } = n, o = t.sections;
  function s(l, g, f) {
    const { w: C, h: m } = cn(l.width, l.height);
    return /* @__PURE__ */ e(Vt, { sx: { width: C, height: m }, children: /* @__PURE__ */ e(
      ln,
      {
        layout: l,
        context: g
      }
    ) }, (l.name || "tab") + f);
  }
  return /* @__PURE__ */ e("div", { style: { display: "flex", flexWrap: "wrap" }, children: o.map((l, g) => s(l, c, g)) });
}, Je = Y(function(t, c) {
  const { layout: o } = t;
  ie(c, () => ({
    resetFilter() {
    }
  }), []);
  const s = {}, l = o.tabs;
  return /* @__PURE__ */ e("div", { children: l.map((g, f) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    bt,
    {
      layout: g,
      context: s
    }
  ) }, g.name + f)) });
}), dn = (n) => {
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
}, Ue = Y(function(t, c) {
  var p;
  const o = t.data || {}, { layout: s } = t;
  var { getFieldManager: l, getFormData: g, isFormValid: f } = _t(o, (p = t.callbacks) == null ? void 0 : p.onFormValidChange, dn(t.mode));
  ie(c, () => ({
    getData() {
      return g();
    },
    isValid() {
      return f();
    }
  }), []);
  const C = { formData: o }, m = s.tabs;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(he.Provider, { value: l, children: m.map((u, F) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    bt,
    {
      layout: u,
      context: C
    }
  ) }, u.name + F)) }) });
}), un = (n) => {
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
}, wr = Y(function(t, c) {
  const [o, s] = D(t.layout), l = t.mode ? t.mode : o.type ? o.type : "grid", g = t.layoutParams || {}, f = un(l), C = X(0);
  return ee(() => {
    s(t.layout), C.current < 999999 ? C.current++ : C.current = 0;
  }, [t.layout]), /* @__PURE__ */ e(ht, { fallback: /* @__PURE__ */ e("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ e(Me.Provider, { value: t.storeFactory, children: /* @__PURE__ */ e(et.Provider, { value: g, children: /* @__PURE__ */ e(f, { ...t, ref: (m) => {
    c && (c.current = m);
  } }, C.current) }) }) });
}), Sr = Y(function(t, c) {
  const { title: o, Child: s, childProps: l, pageSize: g, customButton: f } = t, C = c || X(null), {
    setQueryFilter: m,
    refreshData: p,
    setSortColumns: u,
    setEndPointOptions: F,
    setQuickSearch: v,
    gotoPage: E,
    setPageSize: A,
    getPageNo: O,
    setQueryLimit: L,
    getQueryLimit: T,
    data: I,
    totalRecords: B,
    pageSizeOptions: Q,
    queryLimit: M
  } = ae(t), z = t.listKeyProvider || ((h, b) => b);
  ie(C, () => ({
    setFilter: (h) => {
      m(h);
    },
    refresh: () => {
      p();
    },
    resetFilter() {
      m({});
    },
    setEndPointOptions: (h) => {
      F(h);
    },
    addFilter: (h, b) => {
      m((G) => (G[h] = b, { ...G }));
    },
    setQueryLimit: (h) => {
      L(h);
    },
    getQueryLimit: () => T(),
    getCurrentData: () => I,
    setSortOptions(h) {
      u(h);
    }
  }), [m]);
  const P = (h, b) => {
    E(b - 1);
  }, V = (h) => {
    const b = h.target.value;
    v(b);
  }, H = (h) => {
    const b = parseInt(h.target.value, 10);
    A(b);
  }, q = 200, j = !!g, d = !!t.quickSearch, w = Math.ceil(B / M.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "card-page-container", children: /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ a("div", { className: "card-header", children: [
      /* @__PURE__ */ e("div", { className: "card-left-content", children: t.titleTooltip ? /* @__PURE__ */ e(Ye, { placement: "right", title: t.titleTooltip, arrow: !0, children: /* @__PURE__ */ a("div", { className: "card-left-content-info", children: [
        o,
        /* @__PURE__ */ e(Mt, { className: "card-header-info-icon" })
      ] }) }) : /* @__PURE__ */ e(re, { children: o }) }),
      /* @__PURE__ */ a("div", { className: "card-right-content", children: [
        d && /* @__PURE__ */ e(
          fe,
          {
            sx: { width: q },
            type: "text",
            onChange: V,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Te, { position: "end", children: /* @__PURE__ */ e(Ee, { className: "card-filter-icon" }) })
            }
          }
        ),
        f && f.map((h, b) => /* @__PURE__ */ e("div", { className: "card-custom-button", children: h }, b))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      It,
      {
        Child: s,
        childKeyProvider: z,
        preProcess: t.preProcess,
        dataList: I,
        childProps: l,
        EmptyChild: t.EmptyChild
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "card-pagination", children: j && w !== 0 && // <TablePagination
    //     component="div"
    //     count={totalRecords || 0}
    //     page={getPageNo()}
    //     onPageChange={nextPage}
    //     rowsPerPage={queryLimit.limit}
    //     rowsPerPageOptions={pageSizeOptions || []}
    //     onRowsPerPageChange={handleRowsPerPageChange}
    // />
    /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { children: Q && Q.length > 1 ? /* @__PURE__ */ e(oe, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Ie,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: Q[0],
            onChange: H,
            label: "Rows per page",
            children: Q.map((h) => /* @__PURE__ */ e(Be, { value: h, children: h }, h))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("span", { children: [
          "of ",
          B,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(Tt, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ e(
        Qe,
        {
          count: w,
          shape: "rounded",
          componentName: "div",
          onChange: P,
          page: O() + 1
        }
      ) }) })
    ] }) })
  ] }) }) });
});
export {
  Fr as D,
  wr as F,
  Ct as G,
  Ut as M,
  Nr as P,
  Sr as S,
  bt as T,
  on as a,
  xr as b,
  Yt as c,
  tn as d,
  gt as e,
  rn as f,
  ft as g,
  yt as h,
  sn as i,
  ln as j,
  Je as k,
  Ue as l,
  ae as u
};
