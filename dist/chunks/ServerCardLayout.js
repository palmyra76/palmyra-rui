import "../assets/ServerCardLayout.css";
import Ct from "../palmyra/mui/form/MuiDatePicker.js";
import bt from "../palmyra/mui/form/MuiDateTimePicker.js";
import xt from "../palmyra/mui/form/MuiRadioGroup.js";
import He from "../palmyra/mui/form/MuiSelect.js";
import Ft from "../palmyra/mui/form/MuiTextArea.js";
import St from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import wt from "../palmyra/mui/form/MuiCheckBox.js";
import Ot from "../palmyra/mui/form/MuiSwitch.js";
import Rt from "../palmyra/mui/form/MuiIOSSwitch.js";
import Nt from "../palmyra/mui/form/MuiPassword.js";
import kt from "../palmyra/mui/form/MuiNumberField.js";
import Pt from "../palmyra/mui/form/MuiIntegerField.js";
import Ie from "../palmyra/mui/form/FieldDecorator.js";
import { renderTitle as et } from "../palmyra/mui/widget/InfoTooltip.js";
import { FieldManagerContext as ue, StoreFactoryContext as Qe, LayoutParamsContext as tt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as e, jsxs as h, Fragment as re } from "react/jsx-runtime";
import Dt, { useState as N, useRef as $, useEffect as Z, forwardRef as U, useContext as le, useImperativeHandle as ne, useMemo as nt } from "react";
import { a as Ve } from "./AsyncTreeMenu.js";
import { FormControlLabel as We, Checkbox as Xe, FormControl as oe, FormHelperText as Ee, Autocomplete as rt, TextField as me, CircularProgress as ot, Button as te, InputAdornment as Be, ClickAwayListener as Le, Select as Te, MenuItem as ze, Pagination as qe, Box as At, Stack as Lt } from "@mui/material";
import Mt from "../palmyra/layout/card/CardLayout.js";
import It from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Ge, getFieldLabel as Ke } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as ce } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as de, setValueByKey as Qt } from "../palmyra/form/FormUtil.js";
import { T as _e, a as $e, c as Vt, d as je } from "./index.esm2.js";
import { delay as it, delayGenerator as Et, mergeDeep as Bt } from "../palmyra/utils/index.js";
import Tt from "../palmyra/mui/form/MuiDateRangePicker.js";
import at from "../palmyra/layout/container/SectionContainer.js";
import zt from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as st } from "../palmyra/grid/base/ColumnConverter.js";
import lt from "../palmyra/grid/base/EmptyChildTable.js";
import ct from "../palmyra/grid/base/TableX.js";
import { KeyboardArrowDown as Me, Menu as ge, DensitySmall as pe, DensityLarge as ye, Add as dt } from "@mui/icons-material";
import { NoopCustomizer as ut } from "../palmyra/grid/Types.js";
import { convertToField as qt } from "../palmyra/grid/base/GridFieldConverter.js";
import { createFilterData as Gt } from "../palmyra/form/PalmyraFilterManager.js";
import mt from "../palmyra/grid/base/ExportOptions.js";
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
import { getActionPublishers as Kt } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as ht } from "../palmyra/layout/ErrorBoundary.js";
import jt from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import Ht from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as Wt } from "./PalmyraFieldManager.js";
import { useKeyValue as Xt } from "../palmyra/utils/pubsub/PubSubHelper.js";
const ie = (o) => {
  var H, Y;
  const { store: t, quickSearch: c } = o, i = o.fetchAll != !1, [a, s] = N(o.endPointOptions), [y, g] = N(null), C = ((H = o.defaultParams) == null ? void 0 : H.filter) || {}, p = ((Y = o.defaultParams) == null ? void 0 : Y.sort) || {}, [b, d] = o.filterTopic ? Xt(o.filterTopic, C) : N(C), [F, v] = N({}), I = $(o.initialFetch == !1), A = o.pageSize ? o.pageSize : 15;
  var D = A instanceof Array ? A : [A], R = A instanceof Array ? A[0] : A;
  const [M, T] = N({ limit: R, offset: 0, total: !0 }), [E, Q] = N(null), X = () => Math.round(M.offset / M.limit), k = () => M, P = (S) => {
    T((n) => ({ limit: n.limit, total: n.total, offset: S * n.limit }));
  }, z = (S) => {
    const n = S > 10 || S == -1 ? S : 15;
    T((f) => {
      const G = Math.floor(f.offset / n) * n;
      return { limit: n, total: f.total, offset: G };
    });
  }, L = () => b ? Object.keys(b).length == 0 : !1, _ = (S) => {
    Q((n) => (setTimeout(() => {
      o.onDataChange && o.onDataChange(S, n);
    }, 300), S));
  };
  Z(() => {
    if (I.current) {
      I.current = !1;
      return;
    }
    (i || !L()) && j();
  }, [M, F, a]);
  const B = () => ({
    sortOrder: F && Object.keys(F).length > 0 ? F : p,
    total: !0,
    endPointVars: a,
    ...M,
    filter: { ...b, ...C }
  }), j = () => {
    const S = B();
    if (t)
      try {
        t.query(S).then((n) => {
          _(n.result), g(n.total);
        }).catch((n) => {
          var f = n.response ? n.response : n;
          console.error("error while fetching", f), l();
        });
      } catch (n) {
        console.error(n), u();
      }
    else
      console.error("Store is not provided for the Grid"), u();
  }, u = () => {
    _([]), g(0);
  }, l = () => {
    _(void 0), g(null);
  };
  return {
    setQueryFilter: (S) => {
      typeof S == "function" || S && Object.keys(S).length > 0 ? d(S) : d({}), P(0);
    },
    setQuickSearch: (S) => {
      const n = c;
      d(S ? (f) => (f[n] = S, { ...f }) : (f) => (delete f[n], { ...f })), P(0);
    },
    setSortColumns: (S) => {
      v(S);
    },
    setEndPointOptions: s,
    refreshData: j,
    gotoPage: P,
    setPageSize: z,
    getPageNo: X,
    getQueryLimit: k,
    setQueryLimit: T,
    getQueryRequest: B,
    filter: b,
    queryLimit: M,
    data: E,
    totalRecords: y,
    pageSizeOptions: D
  };
};
function Ue(o) {
  return o ? Array.isArray(o) ? o : typeof o == "string" ? o.split(",") : [o] : [];
}
const Cr = U(function(t, c) {
  const i = le(ue), a = c || $(null), s = i(t, "checkbox", a), { mutateOptions: y, setMutateOptions: g } = s, [C, p] = N(!1), b = Ue(s.data), d = s.error, F = s.eventListeners, v = s.store, I = t.pageSize || -1, A = { store: v, pageSize: I, defaultParams: t.defaultParams }, { data: D } = ie(A), R = D, M = $(null), T = t.lookupOptions || {}, E = T.idAttribute || "id", Q = T.displayAttribute || "name", X = t.showSelectedOnly && t.readonly, k = ce(E) ? (u) => de(E, u) : (u) => u[E], P = ce(Q) ? (u) => de(Q, u) : (u) => u[Q];
  ne(a, () => ({
    focus() {
      M.current.focus();
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
      g((l) => ({ ...l, visible: u }));
    },
    setRequired(u) {
      g((l) => ({ ...l, required: u }));
    },
    setReadOnly(u) {
      g((l) => ({ ...l, readonly: u }));
    },
    setAttribute(u) {
      g((l) => ({ ...l, ...u }));
    },
    setOptions(u) {
    },
    getOptions() {
    }
  }), [s]);
  var z = Ge(t, s.data, t.label);
  t.readonly && (z.inputprops = { readOnly: !0 });
  function L(u, l) {
    const O = Ue(s.data);
    var V = O.indexOf(u);
    l ? V < 0 && O.push(u) : V >= 0 && O.splice(V, 1), F.onValueChange(O.toString());
  }
  var _ = {
    onBlur: F.onBlur,
    onFocus: F.onFocus,
    onChange: (u) => {
      L(u.target.value, u.target.checked);
    }
  };
  const B = (u) => {
    const l = u.toString();
    return b.includes(l);
  }, j = (u) => {
    const l = u.target.checked;
    p(l);
    var O = [];
    l && R.map((V) => {
      O.push(k(V));
    }), F.onValueChange(O.toString());
  };
  return /* @__PURE__ */ e("div", { className: t.className, children: y.visible && /* @__PURE__ */ h(
    Ie,
    {
      label: Ke(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ e("div", { children: t.hideSelectAll ? /* @__PURE__ */ e(re, {}) : /* @__PURE__ */ e(
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
        /* @__PURE__ */ h(
          oe,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: d.status,
            ...z,
            children: [
              R ? R.filter((u) => X ? B(k(u)) : !0).map((u) => /* @__PURE__ */ e(
                We,
                {
                  value: k(u),
                  control: /* @__PURE__ */ e(
                    Xe,
                    {
                      icon: /* @__PURE__ */ e(_e, { style: { fontSize: "20px" } }),
                      checkedIcon: /* @__PURE__ */ e($e, { style: { fontSize: "20px" } }),
                      ..._,
                      checked: B(k(u)),
                      disabled: t.readonly
                    }
                  ),
                  label: P(u)
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
}), _t = Et(100), $t = U(function(t, c) {
  const i = le(ue), a = c || $(null), s = $(null), y = $(0), [g, C] = N([]), [p, b] = N(""), [d, F] = N(!1), v = i(t, "serverlookup", a), I = t.store || v.store, A = t.lookupOptions || {}, D = A.idAttribute || "id", R = A.displayAttribute || "name", M = R, T = t.defaultParams, E = {
    store: I,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: t.pageSize || 15,
    quickSearch: M,
    initialFetch: !1,
    defaultParams: T
  }, Q = ie(E), X = v.eventListeners, k = v.error, { mutateOptions: P, setMutateOptions: z } = v, L = v.data, _ = d && g.length < (L ? 2 : 1), { setQueryFilter: B, setEndPointOptions: j, setQuickSearch: u, totalRecords: l, refreshData: O } = Q, V = Q.data, q = ce(D) ? (r) => de(D, r) : (r) => r == null ? void 0 : r[D], H = ce(R) ? (r) => de(R, r) : (r) => r == null ? void 0 : r[R];
  Z(() => {
    var r = L != "" ? L : void 0;
    r && C([r]);
  }, [v.data]), Z(() => {
    const r = V ? [...V] : [], w = L != "" ? L : void 0, J = q(w), se = H(w);
    r && J && se && !G(r, J) && r.unshift(w), C(r), y.current < l && (y.current = l);
  }, [V, l]), Z(() => {
    it(Y);
  }, [p]), Z(() => {
    _t(Y);
  }, [d]);
  function Y() {
    d && (p.length > 0 && p != H(L) ? u("*" + p + "*") : V ? u(null) : O());
  }
  var S = {
    onBlur: X.onBlur,
    onFocus: X.onFocus,
    onChange: (r, w) => {
      n(w);
    },
    onInputChange: (r, w) => (b(w), !0)
  };
  const n = (r) => {
    X.onValueChange(r);
  }, f = (r) => typeof r == "object" ? H(r) + "" : (console.log(r), "");
  function G(r, w) {
    return r.find((J) => {
      if (q(J) == w)
        return J;
    });
  }
  ne(a, () => ({
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
    setValue(r, w = !1) {
      v.setData(r, w);
    },
    setVisible(r) {
      z((w) => ({ ...w, visible: r }));
    },
    setRequired(r) {
      z((w) => ({ ...w, required: r }));
    },
    setReadOnly(r) {
      z((w) => ({ ...w, readonly: r }));
    },
    setAttribute(r) {
      z((w) => ({ ...w, ...r }));
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
    getCurrentData: () => L,
    refresh: () => {
      O();
    },
    addFilter(r, w) {
      B((J) => (J[r] = w, { ...J }));
    },
    setDefaultFilter(r) {
    },
    setSortOptions(r) {
    }
  }), [v, B]);
  var ee = Ge(t, L, t.label);
  P.readonly && (ee.inputProps = { readOnly: !0 });
  const ae = (r, w) => r instanceof Array ? r.some((J) => q(J) == q(w)) : q(r) == q(w);
  return /* @__PURE__ */ e(
    Ie,
    {
      label: Ke(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ h(oe, { fullWidth: !0, error: k.status, children: [
        /* @__PURE__ */ e(
          rt,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: t.multiple,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            isOptionEqualToValue: ae,
            filterOptions: (r) => r,
            renderInput: (r) => /* @__PURE__ */ e(
              me,
              {
                ...r,
                inputRef: (w) => {
                  s.current = w;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                InputProps: {
                  ...r.InputProps,
                  endAdornment: /* @__PURE__ */ h(re, { children: [
                    _ ? /* @__PURE__ */ e(ot, { color: "inherit", size: 18 }) : null,
                    r.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: f,
            ...ee,
            options: g,
            open: d,
            onClose: () => {
              F(!1);
            },
            onOpen: (r) => {
              F(!0);
            },
            ...S
          }
        ),
        /* @__PURE__ */ e(Ee, { className: "form-error-text", children: k.message })
      ] })
    }
  );
}), Jt = U(function(t, c) {
  const i = le(ue), a = c || $(null), s = $(null), y = $(0), [g, C] = N([]), [p, b] = N(""), [d, F] = N(!1), v = i(t, "autoComplete", a), I = t.store || v.store, D = (t.lookupOptions || {}).attribute || "name", R = D, M = {
    store: I,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: R,
    initialFetch: !1
  }, T = ie(M), E = v.eventListeners, Q = v.error, { mutateOptions: X, setMutateOptions: k } = v, P = v.data, z = d && g.length < (P ? 2 : 1), { setQueryFilter: L, setEndPointOptions: _, setQuickSearch: B, totalRecords: j, refreshData: u } = T, l = T.data, O = ce(D) ? (n) => de(D, n) : (n) => n == null ? void 0 : n[D];
  Z(() => {
    var n = P != "" ? P : void 0;
    n && C([n]);
  }, [v.data]), Z(() => {
    const f = (l ? [...l] : []).map((ee) => O(ee)), G = P != "" ? P : void 0;
    f && G && !Y(f, G) && f.unshift(G), C(f), y.current < j && (y.current = j);
  }, [l, j]), Z(() => {
    it(V);
  }, [p, d]);
  function V() {
    d && (p.length > 0 && p != P ? B("*" + p + "*") : l ? B(null) : u());
  }
  var q = {
    onBlur: (n) => {
      H(p), E.onBlur(p);
    },
    onFocus: E.onFocus,
    onChange: (n, f) => {
      H(f);
    },
    onInputChange: (n, f) => (b(f), !0)
  };
  const H = (n) => {
    E.onValueChange(n);
  };
  function Y(n, f) {
    return n.find((G) => {
      if (G == f)
        return G;
    });
  }
  ne(a, () => ({
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
    setValue(n, f = !1) {
      v.setData(n, f);
    },
    setVisible(n) {
      k((f) => ({ ...f, visible: n }));
    },
    setRequired(n) {
      k((f) => ({ ...f, required: n }));
    },
    setReadOnly(n) {
      k((f) => ({ ...f, readonly: n }));
    },
    setAttribute(n) {
      k((f) => ({ ...f, ...n }));
    },
    setFilter(n) {
      L(n);
    },
    resetFilter() {
      L({});
    },
    setEndPointOptions(n) {
      _(n);
    },
    getCurrentData: () => P,
    refresh: () => {
      u();
    },
    addFilter(n, f) {
      L((G) => (G[n] = f, { ...G }));
    },
    setDefaultFilter(n) {
    },
    setSortOptions(n) {
    }
  }), [v, L]);
  var S = Ge(t, P, t.label);
  return X.readonly && (S.inputProps = { readOnly: !0 }), /* @__PURE__ */ e(
    Ie,
    {
      label: Ke(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ h(oe, { fullWidth: !0, error: Q.status, children: [
        /* @__PURE__ */ e(
          rt,
          {
            freeSolo: !0,
            autoSelect: !0,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            filterOptions: (n) => n,
            renderInput: (n) => /* @__PURE__ */ e(
              me,
              {
                ...n,
                inputRef: (f) => {
                  s.current = f;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                ...S,
                InputProps: {
                  ...n.InputProps,
                  endAdornment: /* @__PURE__ */ h(re, { children: [
                    z ? /* @__PURE__ */ e(ot, { color: "inherit", size: 18 }) : null,
                    n.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...S,
            options: g,
            open: d,
            onClose: () => {
              F(!1);
            },
            onOpen: (n) => {
              F(!0);
            },
            ...q
          }
        ),
        /* @__PURE__ */ e(Ee, { className: "form-error-text", children: Q.message })
      ] })
    }
  );
}), Ut = (o) => {
  const { fieldDef: t } = o;
  return /* @__PURE__ */ h("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, W = (o, t) => {
  const c = o.fieldDef;
  return /* @__PURE__ */ e(
    t,
    {
      ...c,
      label: o.title
    },
    c.title + c.attribute
  );
}, ft = (o, t, c) => {
  const { type: i } = o, a = { fieldDef: o, title: c };
  switch (i) {
    case "string":
      return W(a, St);
    case "radio":
      return W(a, xt);
    case "select":
      return W(a, He);
    case "date":
      return W(a, Ct);
    case "datetime":
      return W(a, bt);
    case "checkbox":
      return W(a, wt);
    case "serverlookup":
      return W(a, $t);
    case "textarea":
      return W(a, Ft);
    case "switch":
      return W(a, Ot);
    case "iosswitch":
      return W(a, Rt);
    case "password":
      return W(a, Nt);
    case "float":
    case "number":
    case "numbersOnly":
      return W(a, kt);
    case "integer":
      return W(a, Pt);
    case "multiSelect":
      return W(a, He);
    case "dateRange":
      return W(a, Tt);
    case "autoComplete":
      return W(a, Jt);
    default:
      return Ut(a);
  }
}, Yt = U(function(t, c) {
  var b;
  const { formLayout: i, context: a } = t, { formData: s } = a, y = i.Container;
  $({});
  const g = nt(() => (d) => ft(d), [s.data]);
  var C = ((b = i.options) == null ? void 0 : b.columns) || 1, p = { columns: C };
  return y ? /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: i.fields.map((d, F) => /* @__PURE__ */ e(
    y,
    {
      index: F,
      field: d,
      label: d.title,
      options: p,
      children: g(d)
    },
    d.attribute + d.name + d.type
  )) }) : /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: i.fields.map((d, F) => g(d)) });
}), gt = (o) => {
  const { layout: t, context: c } = o;
  var i = t.Renderer || Yt, a = t.Container || at;
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
const Zt = (o) => {
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
}, en = U(function(t, c) {
  const { formLayout: i, context: a } = t, { formData: s } = a, y = $({}), g = Zt(t), C = "palmyra-form-field-data", p = nt(() => (b) => ft(b, y, b.label), [s.data]);
  return /* @__PURE__ */ e("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: i.fields.map((b, d) => /* @__PURE__ */ e("div", { className: b.type === "dateRange" ? "palmyra-form-field-container" : g, children: /* @__PURE__ */ e("div", { className: C, children: p(b) }) }, b.attribute)) });
}), pt = ({ columns: o, isOpen: t, onClose: c, setFilter: i, defaultFilter: a = {} }) => {
  const s = {};
  Object.keys(a || {}).map((d) => {
    const F = a[d];
    Qt(d, s, F);
  });
  var { getFieldManager: y, getFilterData: g } = Gt(s);
  const C = () => {
    i({});
  }, p = () => {
    var d = g();
    i && i(d);
  }, b = qt(o);
  return /* @__PURE__ */ h("div", { className: "grid-filter-container", children: [
    /* @__PURE__ */ e("div", { className: "grid-filter-content", children: /* @__PURE__ */ e(ue.Provider, { value: y, children: /* @__PURE__ */ e(
      gt,
      {
        context: { formData: {} },
        layout: {
          type: "form",
          formLayout: {
            fields: b,
            options: {
              columns: 2
            }
          },
          Renderer: en
        }
      }
    ) }) }),
    /* @__PURE__ */ h("div", { className: "grid-filter-btn-container", children: [
      /* @__PURE__ */ h(te, { className: "secondary-filled-button", disableRipple: !0, onClick: C, children: [
        /* @__PURE__ */ e(Vt, { className: "button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ h(te, { className: "filled-button", disableRipple: !0, onClick: p, children: [
        /* @__PURE__ */ e(je, { className: "button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
}, tn = U(function(t, c) {
  const { columns: i, children: a, EmptyChild: s, onRowClick: y, quickSearch: g, exportOptions: C } = t, p = s || lt, b = t.customizer || ut, d = t.customButton, [F, v] = N(!1), [I, A] = N(!1), [D, R] = N(!1), [M, T] = N("standard"), [E, Q] = N(!1), [X, k] = N(""), {
    setQueryFilter: P,
    setQuickSearch: z,
    setSortColumns: L,
    setEndPointOptions: _,
    gotoPage: B,
    setPageSize: j,
    getPageNo: u,
    refreshData: l,
    setQueryLimit: O,
    getQueryLimit: V,
    getQueryRequest: q,
    data: H,
    totalRecords: Y,
    queryLimit: S,
    pageSizeOptions: n,
    filter: f
  } = ie(t), G = c || $(null);
  ne(G, () => ({
    setFilter: (m) => {
      P(m);
    },
    refresh: () => {
      l();
    },
    resetFilter() {
      P({});
    },
    setEndPointOptions: (m) => {
      _(m);
    },
    addFilter: (m, K) => {
      P((fe) => (fe[m] = K, { ...fe }));
    },
    setQueryLimit: (m) => {
      O(m);
    },
    getQueryLimit: () => V(),
    setSortOptions(m) {
      L(m);
    },
    getCurrentData: () => H
  }), [V]);
  const ee = (m, K) => {
    B(K - 1);
  }, ae = st(i, b), r = (m) => {
    T(m);
  }, w = () => {
    v(!F);
  }, J = () => M === "compact" ? { padding: "3px", borderRight: "1px solid var(--border-color)" } : M === "comfortable" ? { padding: "15px", fontSize: "18px", borderRight: "1px solid var(--border-color)" } : { padding: "7px", borderRight: "1px solid var(--border-color)" }, se = () => M === "compact" ? { padding: "3px", borderRight: "1px solid var(--border-color)" } : M === "comfortable" ? { padding: "15px", fontSize: "18px", borderRight: "1px solid var(--border-color)" } : { padding: "7px", borderRight: "1px solid var(--border-color)" }, ve = () => {
    var m;
    switch (M) {
      case "compact":
        m = /* @__PURE__ */ e(pe, { className: "density-icon" });
        break;
      case "comfortable":
        m = /* @__PURE__ */ e(ye, { className: "density-icon" });
        break;
      default:
        m = /* @__PURE__ */ e(ge, { className: "grid-button-icon" });
        break;
    }
    return m;
  }, Ce = (m) => {
    const K = m.target.value;
    k(K), K ? z(K) : P({});
  }, be = (m) => {
    y && y(m);
  }, xe = (m) => {
    const K = parseInt(m.target.value, 10);
    j(K);
  }, Fe = (m) => {
    A(!I);
  }, Se = () => {
    R(!D);
  }, we = () => {
    R(!1);
  }, Oe = (m) => {
    const fe = { ...q(), format: m, limit: -1 };
    t.store.export(fe), R(!D);
  }, he = () => {
    t.onNewClick();
  }, Re = 200, Ne = !!t.pageSize, ke = !!g, Pe = {
    transform: F ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, De = {
    transform: I ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Ae = {
    transform: D ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, x = Math.ceil(Y / S.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { children: [
    a,
    /* @__PURE__ */ h("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: et(t.title) }),
      /* @__PURE__ */ h("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: ke && /* @__PURE__ */ e(
          me,
          {
            sx: { width: Re },
            type: "text",
            value: X,
            onChange: Ce,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Be, { position: "end", children: /* @__PURE__ */ e(Ve, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(Le, { onClickAway: () => {
          v(!1);
        }, children: /* @__PURE__ */ h("div", { className: "grid-header-button grid-density-btn", onClick: w, children: [
          /* @__PURE__ */ h(te, { className: "grid-btn", disableRipple: !0, children: [
            ve(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(Me, { style: Pe, className: "avathar-arrw-icon" })
          ] }),
          F && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ h("ul", { children: [
            /* @__PURE__ */ h("li", { onClick: () => r("standard"), children: [
              /* @__PURE__ */ e(ge, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => r("compact"), children: [
              /* @__PURE__ */ e(pe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => r("comfortable"), children: [
              /* @__PURE__ */ e(ye, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        i.some((m) => m.searchable) && /* @__PURE__ */ e(Le, { onClickAway: () => {
          A(!1);
        }, children: /* @__PURE__ */ h("div", { className: "grid-header-button grid-filter-btn", onClick: Fe, children: [
          /* @__PURE__ */ h(te, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(je, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" }),
            /* @__PURE__ */ e(Me, { style: De, className: "avathar-arrw-icon" })
          ] }),
          I && /* @__PURE__ */ e("div", { className: "filter-dropdown-content", onClick: (m) => m.stopPropagation(), children: /* @__PURE__ */ e(
            pt,
            {
              columns: i,
              setFilter: P,
              defaultFilter: f,
              isOpen: E,
              onClose: () => Q(!1)
            }
          ) })
        ] }) }),
        C && /* @__PURE__ */ e(
          mt,
          {
            dropdownOpen: D,
            dropdownClose: we,
            onExportClick: Se,
            arrowStyle: Ae,
            exportOption: C,
            exportData: Oe
          }
        ),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: /* @__PURE__ */ e("div", { onClick: he, children: /* @__PURE__ */ h(te, { className: "grid-btn", disableRipple: !0, children: [
          t.customAddButton && t.customAddButton.icon ? Dt.cloneElement(t.customAddButton.icon, {
            className: "grid-button-icon"
          }) : /* @__PURE__ */ e(dt, { className: "grid-button-icon" }),
          t.customAddButton && t.customAddButton.text ? /* @__PURE__ */ e(re, { children: t.customAddButton.text }) : /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(re, {}),
        d && d.map((m, K) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: m }, K))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      ct,
      {
        columnDefs: ae,
        EmptyChild: p,
        customizer: b,
        rowData: H,
        onRowClick: be,
        onRowStyle: J,
        onHeaderStyle: se,
        onSortColumn: L
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: Ne && x !== 0 && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: n && n.length > 1 ? /* @__PURE__ */ e(oe, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Te,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: n[0],
            onChange: xe,
            label: "Rows per page",
            children: n.map((m) => /* @__PURE__ */ e(ze, { value: m, children: m }, m))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("span", { children: [
          "of ",
          Y,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        qe,
        {
          count: x,
          shape: "rounded",
          onChange: ee,
          page: u() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), br = U(function(t, c) {
  const { children: i, EmptyChild: a, onRowClick: s, quickSearch: y, exportOptions: g } = t, C = t.columns, p = a || lt, b = t.customizer || ut, d = t.customButton, F = t.title, [v, I] = N(!1), [A, D] = N(!1), [R, M] = N("standard"), [T, E] = N(!1), [Q, X] = N(""), {
    setQueryFilter: k,
    setQuickSearch: P,
    setSortColumns: z,
    setEndPointOptions: L,
    gotoPage: _,
    setPageSize: B,
    getPageNo: j,
    refreshData: u,
    setQueryLimit: l,
    getQueryLimit: O,
    getQueryRequest: V,
    data: q,
    totalRecords: H,
    queryLimit: Y,
    pageSizeOptions: S,
    filter: n
  } = ie(t), [f, G] = N(C(q)), ee = c || $(null);
  ne(ee, () => ({
    setFilter: (x) => {
      k(x);
    },
    refresh: () => {
      u();
    },
    resetFilter() {
      k({});
    },
    setEndPointOptions: (x) => {
      L(x);
    },
    addFilter: (x, m) => {
      k((K) => (K[x] = m, { ...K }));
    },
    setQueryLimit: (x) => {
      l(x);
    },
    getQueryLimit: () => O(),
    setSortOptions(x) {
      z(x);
    },
    getCurrentData: () => q
  }), [O, f]), Z(() => {
    G(C(q));
  }, [q]);
  const ae = (x, m) => {
    _(m - 1);
  }, r = st(f, b), w = (x) => {
    M(x);
  }, J = () => {
    I(!v);
  }, se = () => R === "compact" ? { padding: "3px" } : R === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, ve = () => R === "compact" ? { padding: "3px" } : R === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, Ce = () => {
    var x;
    switch (R) {
      case "compact":
        x = /* @__PURE__ */ e(pe, { className: "density-icon" });
        break;
      case "comfortable":
        x = /* @__PURE__ */ e(ye, { className: "density-icon" });
        break;
      default:
        x = /* @__PURE__ */ e(ge, { className: "grid-button-icon" });
        break;
    }
    return x;
  }, be = (x) => {
    const m = x.target.value;
    X(m), m ? P(m) : k({});
  }, xe = (x) => {
    s && s(x);
  }, Fe = (x) => {
    const m = parseInt(x.target.value, 10);
    B(m);
  }, Se = () => {
    D(!A);
  }, we = () => {
    D(!1);
  }, Oe = (x) => {
    const K = { ...V(), format: x, limit: -1 };
    t.store.export(K), D(!A);
  }, he = () => {
    t.onNewClick();
  }, Re = 200, Ne = !!t.pageSize, ke = !!y, Pe = {
    transform: v ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, De = {
    transform: A ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Ae = Math.ceil(H / Y.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { children: [
    i,
    /* @__PURE__ */ h("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: /* @__PURE__ */ e("span", { className: "grid-header-right-content-text", children: F }) }),
      /* @__PURE__ */ h("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: ke && /* @__PURE__ */ e(
          me,
          {
            sx: { width: Re },
            type: "text",
            value: Q,
            onChange: be,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Be, { position: "end", children: /* @__PURE__ */ e(Ve, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(Le, { onClickAway: () => {
          I(!1);
        }, children: /* @__PURE__ */ h("div", { className: "grid-header-button grid-density-btn", onClick: J, children: [
          /* @__PURE__ */ h(te, { className: "grid-btn", disableRipple: !0, children: [
            Ce(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(Me, { style: Pe, className: "avathar-arrw-icon" })
          ] }),
          v && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ h("ul", { children: [
            /* @__PURE__ */ h("li", { onClick: () => w("standard"), children: [
              /* @__PURE__ */ e(ge, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => w("compact"), children: [
              /* @__PURE__ */ e(pe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => w("comfortable"), children: [
              /* @__PURE__ */ e(ye, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        f.some((x) => x.searchable) && /* @__PURE__ */ h("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ h(te, { className: "grid-btn", disableRipple: !0, onClick: () => E(!0), children: [
            /* @__PURE__ */ e(je, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ e(
            pt,
            {
              columns: f,
              setFilter: k,
              defaultFilter: n,
              isOpen: T,
              onClose: () => E(!1)
            }
          )
        ] }),
        g && /* @__PURE__ */ e(
          mt,
          {
            dropdownOpen: A,
            dropdownClose: we,
            onExportClick: Se,
            arrowStyle: De,
            exportOption: g,
            exportData: Oe
          }
        ),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: t.customAddButton ? /* @__PURE__ */ e("div", { onClick: he, children: t.customAddButton }) : /* @__PURE__ */ e("div", { onClick: he, children: /* @__PURE__ */ h(te, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ e(dt, { className: "grid-button-icon" }),
          /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(re, {}),
        d && d.map((x, m) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: x }, m))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      ct,
      {
        columnDefs: r,
        EmptyChild: p,
        customizer: b,
        rowData: q,
        onRowClick: xe,
        onRowStyle: se,
        onHeaderStyle: ve,
        onSortColumn: z
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: Ne && H !== null && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: S && S.length > 1 ? /* @__PURE__ */ e(oe, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Te,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: S[0],
            onChange: Fe,
            label: "Rows per page",
            children: S.map((x) => /* @__PURE__ */ e(ze, { value: x, children: x }, x))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("span", { children: [
          "of ",
          H,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        qe,
        {
          count: Ae,
          shape: "rounded",
          onChange: ae,
          page: j() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), xr = U(function(t, c) {
  const { columns: i, endPoint: a, storeFactory: s, layoutParams: y, pagination: g } = t, C = t.quickSearch || "", p = t.customButton, b = t.customAddButton, d = t.title, F = t.fetchAll, v = t.filterTopic, I = t.initialFetch, A = (R, M) => {
  };
  Z(() => {
    var R = Je.subscribe(t.topic, A);
    return () => {
      Je.unsubscribe(R);
    };
  }, [t.topic]);
  const D = {
    fields: i,
    pagination: g,
    quickSearch: C,
    storeOptions: {
      endPoint: a
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ e(re, { children: /* @__PURE__ */ e(Qe.Provider, { value: s, children: /* @__PURE__ */ e(
    yt,
    {
      layout: D,
      context: y,
      customAddButton: b,
      onDataChange: t.onDataChange,
      title: d,
      defaultParams: t.defaultParams,
      customButton: p,
      customizer: t.customizer,
      ref: c,
      exportOptions: t.exportOptions,
      fetchAll: F,
      filterTopic: v,
      initialFetch: I
    }
  ) }) });
}), nn = U(function(t, c) {
  const i = t.layout, [a, s] = N(i.fields), y = i.pagination ? i.pagination : [15], g = le(Qe), C = le(tt);
  var p = i.storeOptions || {}, b = {};
  Bt(b, p, C);
  const d = g.getGridStore(b, i.storeOptions.endPoint);
  Z(() => {
    p.hasLayout && d.queryLayout({}).then((I) => {
      s(I.columns);
    });
  }, []);
  const { onClick: F, onNewClick: v } = Kt(i.actionOptions, C);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    tn,
    {
      columns: a,
      store: d,
      pageSize: y,
      onRowClick: F,
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
}), yt = nn, rn = (o) => {
  const { layout: t, context: c } = o;
  var i = t.Container || at;
  return /* @__PURE__ */ e(ht, { fallback: /* @__PURE__ */ e("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ e(i, { ...t, children: ((s) => /* @__PURE__ */ e(
    yt,
    {
      context: c,
      layout: s
    }
  ))(t.tableLayout) }) });
}, on = (o) => {
  const { layout: t } = o;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ e(gt, { ...o });
    case "view":
      return /* @__PURE__ */ e(Ht, { ...o });
    case "grid":
      return /* @__PURE__ */ e(rn, { ...o });
    case "chart":
      return /* @__PURE__ */ e(It, { ...o });
    default:
      return /* @__PURE__ */ e(jt, { ...o });
  }
};
function an(o, t) {
  var c = o || 1, i = t;
  return {
    w: c,
    h: i
  };
}
const vt = (o) => {
  const { layout: t, context: c } = o, i = t.sections;
  function a(s, y, g) {
    const { w: C, h: p } = an(s.width, s.height);
    return /* @__PURE__ */ e(At, { sx: { width: C, height: p }, children: /* @__PURE__ */ e(
      on,
      {
        layout: s,
        context: y
      }
    ) }, (s.name || "tab") + g);
  }
  return /* @__PURE__ */ e("div", { style: { display: "flex", flexWrap: "wrap" }, children: i.map((s, y) => a(s, c, y)) });
}, Ye = U(function(t, c) {
  const { layout: i } = t;
  ne(c, () => ({
    resetFilter() {
    }
  }), []);
  const a = {}, s = i.tabs;
  return /* @__PURE__ */ e("div", { children: s.map((y, g) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    vt,
    {
      layout: y,
      context: a
    }
  ) }, y.name + g)) });
}), sn = (o) => {
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
  var b;
  const i = t.data || {}, { layout: a } = t;
  var { getFieldManager: s, getFormData: y, isFormValid: g } = Wt(i, (b = t.callbacks) == null ? void 0 : b.onFormValidChange, sn(t.mode));
  ne(c, () => ({
    getData() {
      return y();
    },
    isValid() {
      return g();
    }
  }), []);
  const C = { formData: i }, p = a.tabs;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(ue.Provider, { value: s, children: p.map((d, F) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    vt,
    {
      layout: d,
      context: C
    }
  ) }, d.name + F)) }) });
}), ln = (o) => {
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
}, Fr = U(function(t, c) {
  const [i, a] = N(t.layout), s = t.mode ? t.mode : i.type ? i.type : "grid", y = t.layoutParams || {}, g = ln(s), C = $(0);
  return Z(() => {
    a(t.layout), C.current < 999999 ? C.current++ : C.current = 0;
  }, [t.layout]), /* @__PURE__ */ e(ht, { fallback: /* @__PURE__ */ e("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ e(Qe.Provider, { value: t.storeFactory, children: /* @__PURE__ */ e(tt.Provider, { value: y, children: /* @__PURE__ */ e(g, { ...t, ref: (p) => {
    c && (c.current = p);
  } }, C.current) }) }) });
}), Sr = U(function(t, c) {
  const { title: i, Child: a, childProps: s, pageSize: y, customButton: g } = t, C = c || $(null), {
    setQueryFilter: p,
    refreshData: b,
    setSortColumns: d,
    setEndPointOptions: F,
    setQuickSearch: v,
    gotoPage: I,
    setPageSize: A,
    getPageNo: D,
    setQueryLimit: R,
    getQueryLimit: M,
    data: T,
    totalRecords: E,
    pageSizeOptions: Q,
    queryLimit: X
  } = ie(t), k = t.listKeyProvider || ((l, O) => O);
  ne(C, () => ({
    setFilter: (l) => {
      p(l);
    },
    refresh: () => {
      b();
    },
    resetFilter() {
      p({});
    },
    setEndPointOptions: (l) => {
      F(l);
    },
    addFilter: (l, O) => {
      p((V) => (V[l] = O, { ...V }));
    },
    setQueryLimit: (l) => {
      R(l);
    },
    getQueryLimit: () => M(),
    getCurrentData: () => T,
    setSortOptions(l) {
      d(l);
    }
  }), [p]);
  const P = (l, O) => {
    I(O - 1);
  }, z = (l) => {
    const O = l.target.value;
    v(O);
  }, L = (l) => {
    const O = parseInt(l.target.value, 10);
    A(O);
  }, _ = 200, B = !!y, j = !!t.quickSearch, u = Math.ceil(E / X.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "card-page-container", children: /* @__PURE__ */ h("div", { children: [
    /* @__PURE__ */ h("div", { className: "card-header", children: [
      /* @__PURE__ */ e("div", { className: "card-left-content", children: et(i) }),
      /* @__PURE__ */ h("div", { className: "card-right-content", children: [
        j && /* @__PURE__ */ e(
          me,
          {
            sx: { width: _ },
            type: "text",
            onChange: z,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Be, { position: "end", children: /* @__PURE__ */ e(Ve, { className: "card-filter-icon" }) })
            }
          }
        ),
        g && g.map((l, O) => /* @__PURE__ */ e("div", { className: "card-custom-button", children: l }, O))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      Mt,
      {
        Child: a,
        childKeyProvider: k,
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
    /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { children: Q && Q.length > 1 ? /* @__PURE__ */ e(oe, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Te,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: Q[0],
            onChange: L,
            label: "Rows per page",
            children: Q.map((l) => /* @__PURE__ */ e(ze, { value: l, children: l }, l))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("span", { children: [
          "of ",
          E,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(Lt, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ e(
        qe,
        {
          count: u,
          shape: "rounded",
          onChange: P,
          page: D() + 1
        }
      ) }) })
    ] }) })
  ] }) }) });
});
export {
  br as D,
  Fr as F,
  yt as G,
  $t as M,
  xr as P,
  Sr as S,
  vt as T,
  tn as a,
  Cr as b,
  Jt as c,
  Yt as d,
  gt as e,
  en as f,
  ft as g,
  pt as h,
  rn as i,
  on as j,
  Ye as k,
  Ze as l,
  ie as u
};
