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
import { FieldManagerContext as me, StoreFactoryContext as Le, LayoutParamsContext as Ye } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as e, jsxs as s, Fragment as re } from "react/jsx-runtime";
import At, { useState as D, useRef as X, useEffect as Y, forwardRef as U, useContext as ce, useImperativeHandle as ne, useMemo as et } from "react";
import { a as Me } from "./index.esm2.js";
import { FormControlLabel as Ke, Checkbox as Ze, FormControl as ie, FormHelperText as Ve, Autocomplete as tt, TextField as he, CircularProgress as nt, Button as ee, InputAdornment as Ee, ClickAwayListener as se, Select as Ie, MenuItem as Be, Pagination as Te, Box as Lt, Stack as Mt } from "@mui/material";
import Vt from "../palmyra/layout/card/CardLayout.js";
import Et from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Qe, getFieldLabel as ze } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as de } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as ue, setValueByKey as It } from "../palmyra/form/FormUtil.js";
import { T as je, a as We, b as Bt, c as qe, d as rt } from "./index.esm.js";
import { delay as it, delayGenerator as Tt, mergeDeep as Qt } from "../palmyra/utils/index.js";
import zt from "../palmyra/mui/form/MuiDateRangePicker.js";
import ot from "../palmyra/layout/container/SectionContainer.js";
import qt from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as at } from "../palmyra/grid/base/ColumnConverter.js";
import st from "../palmyra/grid/base/EmptyChildTable.js";
import lt from "../palmyra/grid/base/TableX.js";
import { KeyboardArrowDown as le, Menu as ge, DensitySmall as ye, DensityLarge as pe, Add as ct } from "@mui/icons-material";
import { NoopCustomizer as dt } from "../palmyra/grid/Types.js";
import { convertToField as Gt } from "../palmyra/grid/base/GridFieldConverter.js";
import { createFilterData as Ht } from "../palmyra/form/PalmyraFilterManager.js";
import { G as ut } from "./iconBase.js";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import { topic as Xe } from "../palmyra/utils/pubsub/topic.js";
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
  var J, W;
  const { store: t, quickSearch: c } = n, o = n.fetchAll != !1, [a, l] = D(n.endPointOptions), [y, g] = D(null), C = ((J = n.defaultParams) == null ? void 0 : J.filter) || {}, h = ((W = n.defaultParams) == null ? void 0 : W.sort) || {}, [p, d] = n.filterTopic ? Xt(n.filterTopic, C) : D(C), [b, v] = D({}), V = X(n.initialFetch == !1), A = n.pageSize ? n.pageSize : 15;
  var O = A instanceof Array ? A : [A], L = A instanceof Array ? A[0] : A;
  const [I, B] = D({ limit: L, offset: 0, total: !0 }), [T, Q] = D(null), M = () => Math.round(I.offset / I.limit), z = () => I, P = (k) => {
    B((R) => ({ limit: R.limit, total: R.total, offset: k * R.limit }));
  }, E = (k) => {
    const R = k > 10 || k == -1 ? k : 15;
    B((r) => {
      const F = Math.floor(r.offset / R) * R;
      return { limit: R, total: r.total, offset: F };
    });
  }, H = () => p ? Object.keys(p).length == 0 : !1, q = (k) => {
    Q((R) => (setTimeout(() => {
      n.onDataChange && n.onDataChange(T, R);
    }, 300), k));
  };
  Y(() => {
    if (V.current) {
      V.current = !1;
      return;
    }
    (o || !H()) && j();
  }, [I, b, a]);
  const j = () => {
    const R = {
      sortOrder: b && Object.keys(b).length > 0 ? b : h,
      total: !0,
      endPointVars: a,
      ...I,
      filter: { ...p, ...C }
    };
    if (t)
      try {
        t.query(R).then((r) => {
          q(r.result), g(r.total);
        }).catch((r) => {
          var F = r.response ? r.response : r;
          console.error("error while fetching", F), N();
        });
      } catch (r) {
        console.error(r), u();
      }
    else
      console.error("Store is not provided for the Grid"), u();
  }, u = () => {
    q([]), g(0);
  }, N = () => {
    q(void 0), g(null);
  };
  return {
    setQueryFilter: (k) => {
      typeof k == "function" || k && Object.keys(k).length > 0 ? d(k) : d({}), P(0);
    },
    setQuickSearch: (k) => {
      const R = c;
      d(k ? (r) => (r[R] = k, { ...r }) : (r) => (delete r[R], { ...r })), P(0);
    },
    setSortColumns: (k) => {
      v(k);
    },
    setEndPointOptions: l,
    refreshData: j,
    gotoPage: P,
    setPageSize: E,
    getPageNo: M,
    getQueryLimit: z,
    setQueryLimit: B,
    filter: p,
    queryLimit: I,
    data: T,
    totalRecords: y,
    pageSizeOptions: O
  };
};
function _e(n) {
  return n ? Array.isArray(n) ? n : typeof n == "string" ? n.split(",") : [n] : [];
}
const Cr = U(function(t, c) {
  const o = ce(me), a = c || X(null), l = o(t, "checkbox", a), { mutateOptions: y, setMutateOptions: g } = l, [C, h] = D(!1), p = _e(l.data), d = l.error, b = l.eventListeners, V = { store: l.store, pageSize: -1 }, { data: A } = oe(V), O = A, L = X(null), I = t.lookupOptions || {}, B = I.idAttribute || "id", T = I.displayAttribute || "name", Q = t.showSelectedOnly && t.readonly, M = de(B) ? (u) => ue(B, u) : (u) => u[B], z = de(T) ? (u) => ue(T, u) : (u) => u[T];
  ne(a, () => ({
    focus() {
      L.current.focus();
    },
    isValid() {
      return !d.status;
    },
    clear() {
      l.setData("", !0);
    },
    getValue() {
      return l.getData();
    },
    setValue(u, N = !1) {
      l.setData(u, N);
    },
    setVisible(u) {
      g((N) => ({ ...N, visible: u }));
    },
    setRequired(u) {
      g((N) => ({ ...N, required: u }));
    },
    setReadOnly(u) {
      g((N) => ({ ...N, readonly: u }));
    },
    setAttribute(u) {
      g((N) => ({ ...N, ...u }));
    },
    setOptions(u) {
    },
    getOptions() {
    }
  }), [l]);
  var P = Qe(t, l.data, t.label);
  t.readonly && (P.inputprops = { readOnly: !0 });
  function E(u, N) {
    const f = _e(l.data);
    var x = f.indexOf(u);
    N ? x < 0 && f.push(u) : x >= 0 && f.splice(x, 1), b.onValueChange(f.toString());
  }
  var H = {
    onBlur: b.onBlur,
    onFocus: b.onFocus,
    onChange: (u) => {
      E(u.target.value, u.target.checked);
    }
  };
  const q = (u) => {
    const N = u.toString();
    return p.includes(N);
  }, j = (u) => {
    const N = u.target.checked;
    h(N);
    var f = [];
    N && O.map((x) => {
      f.push(M(x));
    }), b.onValueChange(f.toString());
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
        /* @__PURE__ */ e("div", { children: t.hideSelectAll ? /* @__PURE__ */ e(re, {}) : /* @__PURE__ */ e(
          Ke,
          {
            control: /* @__PURE__ */ e(
              Ze,
              {
                icon: /* @__PURE__ */ e(je, { style: { fontSize: "20px" } }),
                checkedIcon: /* @__PURE__ */ e(We, { style: { fontSize: "20px" } }),
                onChange: j
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
            error: d.status,
            ...P,
            children: [
              O ? O.filter((u) => Q ? q(M(u)) : !0).map((u) => /* @__PURE__ */ e(
                Ke,
                {
                  value: M(u),
                  control: /* @__PURE__ */ e(
                    Ze,
                    {
                      icon: /* @__PURE__ */ e(je, { style: { fontSize: "20px" } }),
                      checkedIcon: /* @__PURE__ */ e(We, { style: { fontSize: "20px" } }),
                      ...H,
                      checked: q(M(u)),
                      disabled: t.readonly
                    }
                  ),
                  label: z(u)
                },
                M(u)
              )) : /* @__PURE__ */ e("div", { children: "No options provided" }),
              /* @__PURE__ */ e(Ve, { className: "form-error-text", children: d.message })
            ]
          }
        )
      ]
    }
  ) });
}), _t = Tt(100), $t = U(function(t, c) {
  const o = ce(me), a = c || X(null), l = X(null), y = X(0), [g, C] = D([]), [h, p] = D(""), [d, b] = D(!1), v = o(t, "serverlookup", a), V = t.store || v.store, A = t.lookupOptions || {}, O = A.idAttribute || "id", L = A.displayAttribute || "name", I = L, B = {
    store: V,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: I,
    initialFetch: !1
  }, T = oe(B), Q = v.eventListeners, M = v.error, { mutateOptions: z, setMutateOptions: P } = v, E = v.data, H = d && g.length < (E ? 2 : 1), { setQueryFilter: q, setEndPointOptions: j, setQuickSearch: u, totalRecords: N, refreshData: f } = T, x = T.data, G = de(O) ? (i) => ue(O, i) : (i) => i == null ? void 0 : i[O], J = de(L) ? (i) => ue(L, i) : (i) => i == null ? void 0 : i[L];
  Y(() => {
    var i = E != "" ? E : void 0;
    i && C([i]);
  }, [v.data]), Y(() => {
    const i = x ? [...x] : [], S = E != "" ? E : void 0, _ = G(S), ae = J(S);
    i && _ && ae && !F(i, _) && i.unshift(S), C(i), y.current < N && (y.current = N);
  }, [x, N]), Y(() => {
    it(W);
  }, [h]), Y(() => {
    _t(W);
  }, [d]);
  function W() {
    d && (h.length > 0 && h != J(E) ? u("*" + h + "*") : x ? u(null) : f());
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
  }, r = (i) => typeof i == "object" ? J(i) + "" : (console.log(i), "");
  function F(i, S) {
    return i.find((_) => {
      if (G(_) == S)
        return _;
    });
  }
  ne(a, () => ({
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
    getCurrentData: () => E,
    refresh: () => {
      f();
    },
    addFilter(i, S) {
      q((_) => (_[i] = S, { ..._ }));
    },
    setDefaultFilter(i) {
    },
    setSortOptions(i) {
    }
  }), [v, q]);
  var K = Qe(t, E, t.label);
  z.readonly && (K.inputProps = { readOnly: !0 });
  const te = (i, S) => i instanceof Array ? i.some((_) => G(_) == G(S)) : G(i) == G(S);
  return /* @__PURE__ */ e(
    Ae,
    {
      label: ze(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ s(ie, { fullWidth: !0, error: M.status, children: [
        /* @__PURE__ */ e(
          tt,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: t.multiple,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            isOptionEqualToValue: te,
            filterOptions: (i) => i,
            renderInput: (i) => /* @__PURE__ */ e(
              he,
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
                  endAdornment: /* @__PURE__ */ s(re, { children: [
                    H ? /* @__PURE__ */ e(nt, { color: "inherit", size: 18 }) : null,
                    i.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: r,
            ...K,
            options: g,
            open: d,
            onClose: () => {
              b(!1);
            },
            onOpen: (i) => {
              b(!0);
            },
            ...k
          }
        ),
        /* @__PURE__ */ e(Ve, { className: "form-error-text", children: M.message })
      ] })
    }
  );
}), Jt = U(function(t, c) {
  const o = ce(me), a = c || X(null), l = X(null), y = X(0), [g, C] = D([]), [h, p] = D(""), [d, b] = D(!1), v = o(t, "autoComplete", a), V = t.store || v.store, O = (t.lookupOptions || {}).attribute || "name", L = O, I = {
    store: V,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: L,
    initialFetch: !1
  }, B = oe(I), T = v.eventListeners, Q = v.error, { mutateOptions: M, setMutateOptions: z } = v, P = v.data, E = d && g.length < (P ? 2 : 1), { setQueryFilter: H, setEndPointOptions: q, setQuickSearch: j, totalRecords: u, refreshData: N } = B, f = B.data, x = de(O) ? (r) => ue(O, r) : (r) => r == null ? void 0 : r[O];
  Y(() => {
    var r = P != "" ? P : void 0;
    r && C([r]);
  }, [v.data]), Y(() => {
    const F = (f ? [...f] : []).map((te) => x(te)), K = P != "" ? P : void 0;
    F && K && !k(F, K) && F.unshift(K), C(F), y.current < u && (y.current = u);
  }, [f, u]), Y(() => {
    it(G);
  }, [h, d]);
  function G() {
    d && (h.length > 0 && h != P ? j("*" + h + "*") : f ? j(null) : N());
  }
  var J = {
    onBlur: (r) => {
      W(h), T.onBlur(h);
    },
    onFocus: T.onFocus,
    onChange: (r, F) => {
      W(F);
    },
    onInputChange: (r, F) => (p(F), !0)
  };
  const W = (r) => {
    T.onValueChange(r);
  };
  function k(r, F) {
    return r.find((K) => {
      if (K == F)
        return K;
    });
  }
  ne(a, () => ({
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
    setValue(r, F = !1) {
      v.setData(r, F);
    },
    setVisible(r) {
      z((F) => ({ ...F, visible: r }));
    },
    setRequired(r) {
      z((F) => ({ ...F, required: r }));
    },
    setReadOnly(r) {
      z((F) => ({ ...F, readonly: r }));
    },
    setAttribute(r) {
      z((F) => ({ ...F, ...r }));
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
      N();
    },
    addFilter(r, F) {
      H((K) => (K[r] = F, { ...K }));
    },
    setDefaultFilter(r) {
    },
    setSortOptions(r) {
    }
  }), [v, H]);
  var R = Qe(t, P, t.label);
  return M.readonly && (R.inputProps = { readOnly: !0 }), /* @__PURE__ */ e(
    Ae,
    {
      label: ze(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ s(ie, { fullWidth: !0, error: Q.status, children: [
        /* @__PURE__ */ e(
          tt,
          {
            freeSolo: !0,
            autoSelect: !0,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            filterOptions: (r) => r,
            renderInput: (r) => /* @__PURE__ */ e(
              he,
              {
                ...r,
                inputRef: (F) => {
                  l.current = F;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                ...R,
                InputProps: {
                  ...r.InputProps,
                  endAdornment: /* @__PURE__ */ s(re, { children: [
                    E ? /* @__PURE__ */ e(nt, { color: "inherit", size: 18 }) : null,
                    r.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...R,
            options: g,
            open: d,
            onClose: () => {
              b(!1);
            },
            onOpen: (r) => {
              b(!0);
            },
            ...J
          }
        ),
        /* @__PURE__ */ e(Ve, { className: "form-error-text", children: Q.message })
      ] })
    }
  );
}), Ut = (n) => {
  const { fieldDef: t } = n;
  return /* @__PURE__ */ s("div", { children: [
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
}, ht = (n, t, c) => {
  const { type: o } = n, a = { fieldDef: n, title: c };
  switch (o) {
    case "string":
      return Z(a, Nt);
    case "radio":
      return Z(a, Ft);
    case "select":
      return Z(a, He);
    case "date":
      return Z(a, bt);
    case "datetime":
      return Z(a, xt);
    case "checkbox":
      return Z(a, St);
    case "serverlookup":
      return Z(a, $t);
    case "textarea":
      return Z(a, wt);
    case "switch":
      return Z(a, kt);
    case "iosswitch":
      return Z(a, Ot);
    case "password":
      return Z(a, Pt);
    case "float":
    case "number":
    case "numbersOnly":
      return Z(a, Rt);
    case "integer":
      return Z(a, Dt);
    case "multiSelect":
      return Z(a, He);
    case "dateRange":
      return Z(a, zt);
    case "autoComplete":
      return Z(a, Jt);
    default:
      return Ut(a);
  }
}, Yt = U(function(t, c) {
  var p;
  const { formLayout: o, context: a } = t, { formData: l } = a, y = o.Container;
  X({});
  const g = et(() => (d) => ht(d), [l.data]);
  var C = ((p = o.options) == null ? void 0 : p.columns) || 1, h = { columns: C };
  return y ? /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: o.fields.map((d, b) => /* @__PURE__ */ e(
    y,
    {
      index: b,
      field: d,
      label: d.title,
      options: h,
      children: g(d)
    },
    d.attribute + d.name + d.type
  )) }) : /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: o.fields.map((d, b) => g(d)) });
}), ft = (n) => {
  const { layout: t, context: c } = n;
  var o = t.Renderer || Yt, a = t.Container || ot;
  const l = (y) => /* @__PURE__ */ e(
    o,
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
      children: /* @__PURE__ */ e(qt, { columns: t.columns, children: l(t.formLayout) })
    }
  );
};
const en = (n) => {
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
}, tn = U(function(t, c) {
  const { formLayout: o, context: a } = t, { formData: l } = a, y = X({}), g = en(t), C = "palmyra-form-field-data", h = et(() => (p) => ht(p, y, p.label), [l.data]);
  return /* @__PURE__ */ e("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: o.fields.map((p, d) => /* @__PURE__ */ e("div", { className: p.type === "dateRange" ? "palmyra-form-field-container" : g, children: /* @__PURE__ */ e("div", { className: C, children: h(p) }) }, p.attribute)) });
}), gt = ({ columns: n, isOpen: t, onClose: c, setFilter: o, defaultFilter: a = {} }) => {
  const l = {};
  Object.keys(a || {}).map((d) => {
    const b = a[d];
    It(d, l, b);
  });
  var { getFieldManager: y, getFilterData: g } = Ht(l);
  const C = () => {
    o({});
  }, h = () => {
    var d = g();
    o && o(d);
  }, p = Gt(n);
  return /* @__PURE__ */ s("div", { className: "grid-filter-container", children: [
    /* @__PURE__ */ e("div", { className: "grid-filter-content", children: /* @__PURE__ */ e(me.Provider, { value: y, children: /* @__PURE__ */ e(
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
          Renderer: tn
        }
      }
    ) }) }),
    /* @__PURE__ */ s("div", { className: "grid-filter-btn-container", children: [
      /* @__PURE__ */ s(ee, { className: "secondary-filled-button", disableRipple: !0, onClick: C, children: [
        /* @__PURE__ */ e(Bt, { className: "button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ s(ee, { className: "filled-button", disableRipple: !0, onClick: h, children: [
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
const nn = U(function(t, c) {
  const { columns: o, children: a, EmptyChild: l, onRowClick: y, quickSearch: g } = t, C = l || st, h = t.customizer || dt, p = t.customButton, [d, b] = D(!1), [v, V] = D(!1), [A, O] = D(!1), [L, I] = D("standard"), [B, T] = D(!1), [Q, M] = D(""), {
    setQueryFilter: z,
    setQuickSearch: P,
    setSortColumns: E,
    setEndPointOptions: H,
    gotoPage: q,
    setPageSize: j,
    getPageNo: u,
    refreshData: N,
    setQueryLimit: f,
    getQueryLimit: x,
    data: G,
    totalRecords: J,
    queryLimit: W,
    pageSizeOptions: k,
    filter: R
  } = oe(t), r = c || X(null);
  ne(r, () => ({
    setFilter: (m) => {
      z(m);
    },
    refresh: () => {
      N();
    },
    resetFilter() {
      z({});
    },
    setEndPointOptions: (m) => {
      H(m);
    },
    addFilter: (m, $) => {
      z((Ge) => (Ge[m] = $, { ...Ge }));
    },
    setQueryLimit: (m) => {
      f(m);
    },
    getQueryLimit: () => x(),
    setSortOptions(m) {
      E(m);
    },
    getCurrentData: () => G
  }), [x]);
  const F = (m, $) => {
    q($ - 1);
  }, K = at(o, h), te = (m) => {
    I(m);
  }, i = () => {
    b(!d);
  }, S = () => L === "compact" ? { padding: "3px" } : L === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, _ = () => L === "compact" ? { padding: "3px" } : L === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, ae = () => {
    var m;
    switch (L) {
      case "compact":
        m = /* @__PURE__ */ e(ye, { className: "density-icon" });
        break;
      case "comfortable":
        m = /* @__PURE__ */ e(pe, { className: "density-icon" });
        break;
      default:
        m = /* @__PURE__ */ e(ge, { className: "grid-button-icon" });
        break;
    }
    return m;
  }, ve = (m) => {
    const $ = m.target.value;
    M($), $ ? P($) : z({});
  }, Ce = (m) => {
    y && y(m);
  }, be = (m) => {
    const $ = parseInt(m.target.value, 10);
    j($);
  }, xe = (m) => {
    V(!v);
  }, Fe = () => {
    O(!A);
  }, fe = () => {
  }, we = () => {
  }, Ne = () => {
    t.onNewClick();
  }, Se = 200, ke = !!t.pageSize, Oe = !!g, Pe = {
    transform: d ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Re = {
    transform: v ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, De = {
    transform: A ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, w = Math.ceil(J / W.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("div", { children: [
    a,
    /* @__PURE__ */ s("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: Ue(t.title) }),
      /* @__PURE__ */ s("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: Oe && /* @__PURE__ */ e(
          he,
          {
            sx: { width: Se },
            type: "text",
            value: Q,
            onChange: ve,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ee, { position: "end", children: /* @__PURE__ */ e(Me, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(se, { onClickAway: () => {
          b(!1);
        }, children: /* @__PURE__ */ s("div", { className: "grid-header-button grid-density-btn", onClick: i, children: [
          /* @__PURE__ */ s(ee, { className: "grid-btn", disableRipple: !0, children: [
            ae(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(le, { style: Pe, className: "avathar-arrw-icon" })
          ] }),
          d && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ s("ul", { children: [
            /* @__PURE__ */ s("li", { onClick: () => te("standard"), children: [
              /* @__PURE__ */ e(ge, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ s("li", { onClick: () => te("compact"), children: [
              /* @__PURE__ */ e(ye, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ s("li", { onClick: () => te("comfortable"), children: [
              /* @__PURE__ */ e(pe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        o.some((m) => m.searchable) && /* @__PURE__ */ e(se, { onClickAway: () => {
          V(!1);
        }, children: /* @__PURE__ */ s("div", { className: "grid-header-button grid-filter-btn", onClick: xe, children: [
          /* @__PURE__ */ s(ee, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(qe, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" }),
            /* @__PURE__ */ e(le, { style: Re, className: "avathar-arrw-icon" })
          ] }),
          v && /* @__PURE__ */ e("div", { className: "filter-dropdown-content", onClick: (m) => m.stopPropagation(), children: /* @__PURE__ */ e(
            gt,
            {
              columns: o,
              setFilter: z,
              defaultFilter: R,
              isOpen: B,
              onClose: () => T(!1)
            }
          ) })
        ] }) }),
        /* @__PURE__ */ e(se, { onClickAway: () => {
          O(!1);
        }, children: /* @__PURE__ */ s("div", { className: "grid-header-button grid-export-btn", onClick: Fe, children: [
          /* @__PURE__ */ s(ee, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(rt, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Export" }),
            /* @__PURE__ */ e(le, { style: De, className: "avathar-arrw-icon" })
          ] }),
          A && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ s("ul", { children: [
            /* @__PURE__ */ s("li", { onClick: fe, children: [
              /* @__PURE__ */ e(yt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ s("li", { onClick: we, children: [
              /* @__PURE__ */ e(pt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: /* @__PURE__ */ e("div", { onClick: Ne, children: /* @__PURE__ */ s(ee, { className: "grid-btn", disableRipple: !0, children: [
          t.customAddButton && t.customAddButton.icon ? At.cloneElement(t.customAddButton.icon, {
            className: "grid-button-icon"
          }) : /* @__PURE__ */ e(ct, { className: "grid-button-icon" }),
          t.customAddButton && t.customAddButton.text ? /* @__PURE__ */ e(re, { children: t.customAddButton.text }) : /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(re, {}),
        p && p.map((m, $) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: m }, $))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      lt,
      {
        columnDefs: K,
        EmptyChild: C,
        customizer: h,
        rowData: G,
        onRowClick: Ce,
        onRowStyle: S,
        onHeaderStyle: _,
        onSortColumn: E
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: ke && w !== 0 && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: k && k.length > 1 ? /* @__PURE__ */ e(ie, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Ie,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: k[0],
            onChange: be,
            label: "Rows per page",
            children: k.map((m) => /* @__PURE__ */ e(Be, { value: m, children: m }, m))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("span", { children: [
          "of ",
          J,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        Te,
        {
          count: w,
          shape: "rounded",
          onChange: F,
          page: u() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), br = U(function(t, c) {
  const { children: o, EmptyChild: a, onRowClick: l, quickSearch: y } = t, g = t.columns, C = a || st, h = t.customizer || dt, p = t.customButton, d = t.title, [b, v] = D(!1), [V, A] = D(!1), [O, L] = D("standard"), [I, B] = D(!1), [T, Q] = D(""), {
    setQueryFilter: M,
    setQuickSearch: z,
    setSortColumns: P,
    setEndPointOptions: E,
    gotoPage: H,
    setPageSize: q,
    getPageNo: j,
    refreshData: u,
    setQueryLimit: N,
    getQueryLimit: f,
    data: x,
    totalRecords: G,
    queryLimit: J,
    pageSizeOptions: W,
    filter: k
  } = oe(t), [R, r] = D(g(x)), F = c || X(null);
  ne(F, () => ({
    setFilter: (w) => {
      M(w);
    },
    refresh: () => {
      u();
    },
    resetFilter() {
      M({});
    },
    setEndPointOptions: (w) => {
      E(w);
    },
    addFilter: (w, m) => {
      M(($) => ($[w] = m, { ...$ }));
    },
    setQueryLimit: (w) => {
      N(w);
    },
    getQueryLimit: () => f(),
    setSortOptions(w) {
      P(w);
    },
    getCurrentData: () => x
  }), [f, R]), Y(() => {
    r(g(x));
  }, [x]);
  const K = (w, m) => {
    H(m - 1);
  }, te = at(R, h), i = (w) => {
    L(w);
  }, S = () => {
    v(!b);
  }, _ = () => O === "compact" ? { padding: "3px" } : O === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, ae = () => O === "compact" ? { padding: "3px" } : O === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, ve = () => {
    var w;
    switch (O) {
      case "compact":
        w = /* @__PURE__ */ e(ye, { className: "density-icon" });
        break;
      case "comfortable":
        w = /* @__PURE__ */ e(pe, { className: "density-icon" });
        break;
      default:
        w = /* @__PURE__ */ e(ge, { className: "grid-button-icon" });
        break;
    }
    return w;
  }, Ce = (w) => {
    const m = w.target.value;
    Q(m), m ? z(m) : M({});
  }, be = (w) => {
    l && l(w);
  }, xe = (w) => {
    const m = parseInt(w.target.value, 10);
    q(m);
  }, Fe = () => {
    A(!V);
  }, fe = () => {
    t.onNewClick();
  }, we = () => {
  }, Ne = () => {
  }, Se = 200, ke = !!t.pageSize, Oe = !!y, Pe = {
    transform: b ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Re = {
    transform: V ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, De = Math.ceil(G / J.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("div", { children: [
    o,
    /* @__PURE__ */ s("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: /* @__PURE__ */ e("span", { className: "grid-header-right-content-text", children: d }) }),
      /* @__PURE__ */ s("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: Oe && /* @__PURE__ */ e(
          he,
          {
            sx: { width: Se },
            type: "text",
            value: T,
            onChange: Ce,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ee, { position: "end", children: /* @__PURE__ */ e(Me, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(se, { onClickAway: () => {
          v(!1);
        }, children: /* @__PURE__ */ s("div", { className: "grid-header-button grid-density-btn", onClick: S, children: [
          /* @__PURE__ */ s(ee, { className: "grid-btn", disableRipple: !0, children: [
            ve(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(le, { style: Pe, className: "avathar-arrw-icon" })
          ] }),
          b && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ s("ul", { children: [
            /* @__PURE__ */ s("li", { onClick: () => i("standard"), children: [
              /* @__PURE__ */ e(ge, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ s("li", { onClick: () => i("compact"), children: [
              /* @__PURE__ */ e(ye, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ s("li", { onClick: () => i("comfortable"), children: [
              /* @__PURE__ */ e(pe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        R.some((w) => w.searchable) && /* @__PURE__ */ s("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ s(ee, { className: "grid-btn", disableRipple: !0, onClick: () => B(!0), children: [
            /* @__PURE__ */ e(qe, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ e(
            gt,
            {
              columns: R,
              setFilter: M,
              defaultFilter: k,
              isOpen: I,
              onClose: () => B(!1)
            }
          )
        ] }),
        /* @__PURE__ */ e(se, { onClickAway: () => {
          A(!1);
        }, children: /* @__PURE__ */ s("div", { className: "grid-header-button grid-export-btn", onClick: Fe, children: [
          /* @__PURE__ */ s(ee, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(rt, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Export" }),
            /* @__PURE__ */ e(le, { style: Re, className: "avathar-arrw-icon" })
          ] }),
          V && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ s("ul", { children: [
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
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: t.customAddButton ? /* @__PURE__ */ e("div", { onClick: fe, children: t.customAddButton }) : /* @__PURE__ */ e("div", { onClick: fe, children: /* @__PURE__ */ s(ee, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ e(ct, { className: "grid-button-icon" }),
          /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(re, {}),
        p && p.map((w, m) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: w }, m))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      lt,
      {
        columnDefs: te,
        EmptyChild: C,
        customizer: h,
        rowData: x,
        onRowClick: be,
        onRowStyle: _,
        onHeaderStyle: ae,
        onSortColumn: P
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: ke && G !== null && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: W && W.length > 1 ? /* @__PURE__ */ e(ie, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Ie,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: W[0],
            onChange: xe,
            label: "Rows per page",
            children: W.map((w) => /* @__PURE__ */ e(Be, { value: w, children: w }, w))
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
          count: De,
          shape: "rounded",
          onChange: K,
          page: j() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), xr = U(function(t, c) {
  const { columns: o, endPoint: a, storeFactory: l, layoutParams: y, pagination: g } = t, C = t.quickSearch || "", h = t.customButton, p = t.customAddButton, d = t.title, b = t.fetchAll, v = t.filterTopic, V = t.initialFetch, A = (L, I) => {
  };
  Y(() => {
    var L = Xe.subscribe(t.topic, A);
    return () => {
      Xe.unsubscribe(L);
    };
  }, [t.topic]);
  const O = {
    fields: o,
    pagination: g,
    quickSearch: C,
    storeOptions: {
      endPoint: a
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ e(re, { children: /* @__PURE__ */ e(Le.Provider, { value: l, children: /* @__PURE__ */ e(
    vt,
    {
      layout: O,
      context: y,
      customAddButton: p,
      onDataChange: t.onDataChange,
      title: d,
      defaultParams: t.defaultParams,
      customButton: h,
      customizer: t.customizer,
      ref: c,
      fetchAll: b,
      filterTopic: v,
      initialFetch: V
    }
  ) }) });
}), rn = U(function(t, c) {
  const o = t.layout, [a, l] = D(o.fields), y = o.pagination ? o.pagination : [15], g = ce(Le), C = ce(Ye);
  var h = o.storeOptions || {}, p = {};
  Qt(p, h, C);
  const d = g.getGridStore(p, o.storeOptions.endPoint);
  Y(() => {
    h.hasLayout && d.queryLayout({}).then((V) => {
      l(V.columns);
    });
  }, []);
  const { onClick: b, onNewClick: v } = Kt(o.actionOptions, C);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    nn,
    {
      columns: a,
      store: d,
      pageSize: y,
      onRowClick: b,
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
}), vt = rn, on = (n) => {
  const { layout: t, context: c } = n;
  var o = t.Container || ot;
  return /* @__PURE__ */ e(mt, { fallback: /* @__PURE__ */ e("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ e(o, { ...t, children: ((l) => /* @__PURE__ */ e(
    vt,
    {
      context: c,
      layout: l
    }
  ))(t.tableLayout) }) });
}, an = (n) => {
  const { layout: t } = n;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ e(ft, { ...n });
    case "view":
      return /* @__PURE__ */ e(jt, { ...n });
    case "grid":
      return /* @__PURE__ */ e(on, { ...n });
    case "chart":
      return /* @__PURE__ */ e(Et, { ...n });
    default:
      return /* @__PURE__ */ e(Zt, { ...n });
  }
};
function sn(n, t) {
  var c = n || 1, o = t;
  return {
    w: c,
    h: o
  };
}
const Ct = (n) => {
  const { layout: t, context: c } = n, o = t.sections;
  function a(l, y, g) {
    const { w: C, h } = sn(l.width, l.height);
    return /* @__PURE__ */ e(Lt, { sx: { width: C, height: h }, children: /* @__PURE__ */ e(
      an,
      {
        layout: l,
        context: y
      }
    ) }, (l.name || "tab") + g);
  }
  return /* @__PURE__ */ e("div", { style: { display: "flex", flexWrap: "wrap" }, children: o.map((l, y) => a(l, c, y)) });
}, $e = U(function(t, c) {
  const { layout: o } = t;
  ne(c, () => ({
    resetFilter() {
    }
  }), []);
  const a = {}, l = o.tabs;
  return /* @__PURE__ */ e("div", { children: l.map((y, g) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    Ct,
    {
      layout: y,
      context: a
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
}, Je = U(function(t, c) {
  var p;
  const o = t.data || {}, { layout: a } = t;
  var { getFieldManager: l, getFormData: y, isFormValid: g } = Wt(o, (p = t.callbacks) == null ? void 0 : p.onFormValidChange, ln(t.mode));
  ne(c, () => ({
    getData() {
      return y();
    },
    isValid() {
      return g();
    }
  }), []);
  const C = { formData: o }, h = a.tabs;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(me.Provider, { value: l, children: h.map((d, b) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    Ct,
    {
      layout: d,
      context: C
    }
  ) }, d.name + b)) }) });
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
}, Fr = U(function(t, c) {
  const [o, a] = D(t.layout), l = t.mode ? t.mode : o.type ? o.type : "grid", y = t.layoutParams || {}, g = cn(l), C = X(0);
  return Y(() => {
    a(t.layout), C.current < 999999 ? C.current++ : C.current = 0;
  }, [t.layout]), /* @__PURE__ */ e(mt, { fallback: /* @__PURE__ */ e("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ e(Le.Provider, { value: t.storeFactory, children: /* @__PURE__ */ e(Ye.Provider, { value: y, children: /* @__PURE__ */ e(g, { ...t, ref: (h) => {
    c && (c.current = h);
  } }, C.current) }) }) });
}), wr = U(function(t, c) {
  const { title: o, Child: a, childProps: l, pageSize: y, customButton: g } = t, C = c || X(null), {
    setQueryFilter: h,
    refreshData: p,
    setSortColumns: d,
    setEndPointOptions: b,
    setQuickSearch: v,
    gotoPage: V,
    setPageSize: A,
    getPageNo: O,
    setQueryLimit: L,
    getQueryLimit: I,
    data: B,
    totalRecords: T,
    pageSizeOptions: Q,
    queryLimit: M
  } = oe(t), z = t.listKeyProvider || ((f, x) => x);
  ne(C, () => ({
    setFilter: (f) => {
      h(f);
    },
    refresh: () => {
      p();
    },
    resetFilter() {
      h({});
    },
    setEndPointOptions: (f) => {
      b(f);
    },
    addFilter: (f, x) => {
      h((G) => (G[f] = x, { ...G }));
    },
    setQueryLimit: (f) => {
      L(f);
    },
    getQueryLimit: () => I(),
    getCurrentData: () => B,
    setSortOptions(f) {
      d(f);
    }
  }), [h]);
  const P = (f, x) => {
    V(x - 1);
  }, E = (f) => {
    const x = f.target.value;
    v(x);
  }, H = (f) => {
    const x = parseInt(f.target.value, 10);
    A(x);
  }, q = 200, j = !!y, u = !!t.quickSearch, N = Math.ceil(T / M.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "card-page-container", children: /* @__PURE__ */ s("div", { children: [
    /* @__PURE__ */ s("div", { className: "card-header", children: [
      /* @__PURE__ */ e("div", { className: "card-left-content", children: Ue(o) }),
      /* @__PURE__ */ s("div", { className: "card-right-content", children: [
        u && /* @__PURE__ */ e(
          he,
          {
            sx: { width: q },
            type: "text",
            onChange: E,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ee, { position: "end", children: /* @__PURE__ */ e(Me, { className: "card-filter-icon" }) })
            }
          }
        ),
        g && g.map((f, x) => /* @__PURE__ */ e("div", { className: "card-custom-button", children: f }, x))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      Vt,
      {
        Child: a,
        childKeyProvider: z,
        preProcess: t.preProcess,
        dataList: B,
        childProps: l,
        EmptyChild: t.EmptyChild
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "card-pagination", children: j && N !== 0 && // <TablePagination
    //     component="div"
    //     count={totalRecords || 0}
    //     page={getPageNo()}
    //     onPageChange={nextPage}
    //     rowsPerPage={queryLimit.limit}
    //     rowsPerPageOptions={pageSizeOptions || []}
    //     onRowsPerPageChange={handleRowsPerPageChange}
    // />
    /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { children: Q && Q.length > 1 ? /* @__PURE__ */ e(ie, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Ie,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: Q[0],
            onChange: H,
            label: "Rows per page",
            children: Q.map((f) => /* @__PURE__ */ e(Be, { value: f, children: f }, f))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("span", { children: [
          "of ",
          T,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(Mt, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ e(
        Te,
        {
          count: N,
          shape: "rounded",
          onChange: P,
          page: O() + 1
        }
      ) }) })
    ] }) })
  ] }) }) });
});
export {
  br as D,
  Fr as F,
  vt as G,
  $t as M,
  xr as P,
  wr as S,
  Ct as T,
  nn as a,
  Cr as b,
  Jt as c,
  Yt as d,
  ft as e,
  tn as f,
  ht as g,
  gt as h,
  on as i,
  an as j,
  $e as k,
  Je as l,
  oe as u
};
