import "../assets/ServerCardLayout.css";
import Ct from "../palmyra/mui/form/MuiDatePicker.js";
import bt from "../palmyra/mui/form/MuiDateTimePicker.js";
import xt from "../palmyra/mui/form/MuiRadioGroup.js";
import He from "../palmyra/mui/form/MuiSelect.js";
import Ft from "../palmyra/mui/form/MuiTextArea.js";
import wt from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import Nt from "../palmyra/mui/form/MuiCheckBox.js";
import St from "../palmyra/mui/form/MuiSwitch.js";
import kt from "../palmyra/mui/form/MuiIOSSwitch.js";
import Ot from "../palmyra/mui/form/MuiPassword.js";
import Pt from "../palmyra/mui/form/MuiNumberField.js";
import Rt from "../palmyra/mui/form/MuiIntegerField.js";
import Ae from "../palmyra/mui/form/FieldDecorator.js";
import { r as Dt, a as At, B as Lt } from "./InfoTooltip.js";
import { FieldManagerContext as me, StoreFactoryContext as Le, LayoutParamsContext as Ue } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as e, jsxs as a, Fragment as ne } from "react/jsx-runtime";
import Mt, { useState as D, useRef as X, useEffect as Y, forwardRef as U, useContext as ce, useImperativeHandle as re, useMemo as Ye } from "react";
import { a as Me } from "./index.esm2.js";
import { FormControlLabel as Ke, Checkbox as Ze, FormControl as ie, FormHelperText as Ee, Autocomplete as et, TextField as he, CircularProgress as tt, Button as ee, InputAdornment as Ve, ClickAwayListener as se, Select as Te, MenuItem as Ie, Pagination as Be, Box as Et, Stack as Vt } from "@mui/material";
import Tt from "../palmyra/layout/card/CardLayout.js";
import It from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Qe, getFieldLabel as ze } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as de } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as ue } from "../palmyra/form/FormUtil.js";
import { T as je, a as We, b as Bt, c as qe, d as nt } from "./index.esm.js";
import { delay as rt, delayGenerator as Qt, mergeDeep as zt } from "../palmyra/utils/index.js";
import qt from "../palmyra/mui/form/MuiDateRangePicker.js";
import it from "../palmyra/layout/container/SectionContainer.js";
import Gt from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as ot } from "../palmyra/grid/base/ColumnConverter.js";
import at from "../palmyra/grid/base/EmptyChildTable.js";
import st from "../palmyra/grid/base/TableX.js";
import { KeyboardArrowDown as le, Menu as ge, DensitySmall as ye, DensityLarge as pe, Add as lt } from "@mui/icons-material";
import { NoopCustomizer as ct } from "../palmyra/grid/Types.js";
import { convertToField as Ht } from "../palmyra/grid/base/GridFieldConverter.js";
import { createFilterData as Kt } from "../palmyra/form/PalmyraFilterManager.js";
import { G as dt } from "./iconBase.js";
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
import { getActionPublishers as Zt } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as ut } from "../palmyra/layout/ErrorBoundary.js";
import jt from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import Wt from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as Xt } from "./PalmyraFieldManager.js";
import { useKeyValue as _t } from "../palmyra/utils/pubsub/PubSubHelper.js";
const oe = (n) => {
  var J, W;
  const { store: t, quickSearch: c } = n, o = n.fetchAll != !1, [s, l] = D(n.endPointOptions), [y, g] = D(null), C = ((J = n.defaultParams) == null ? void 0 : J.filter) || {}, h = ((W = n.defaultParams) == null ? void 0 : W.sort) || {}, [p, u] = n.filterTopic ? _t(n.filterTopic, C) : D(C), [w, v] = D({}), E = X(n.initialFetch == !1), A = n.pageSize ? n.pageSize : 15;
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
  Y(() => {
    if (E.current) {
      E.current = !1;
      return;
    }
    (o || !H()) && j();
  }, [T, w, s]);
  const j = () => {
    const R = {
      sortOrder: w && Object.keys(w).length > 0 ? w : h,
      total: !0,
      endPointVars: s,
      ...T,
      filter: { ...p, ...C }
    };
    if (t)
      try {
        t.query(R).then((r) => {
          q(r.result), g(r.total);
        }).catch((r) => {
          var x = r.response ? r.response : r;
          console.error("error while fetching", x), N();
        });
      } catch (r) {
        console.error(r), d();
      }
    else
      console.error("Store is not provided for the Grid"), d();
  }, d = () => {
    q([]), g(0);
  }, N = () => {
    q(void 0), g(null);
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
    totalRecords: y,
    pageSizeOptions: O
  };
};
function _e(n) {
  return n ? Array.isArray(n) ? n : typeof n == "string" ? n.split(",") : [n] : [];
}
const br = U(function(t, c) {
  const o = ce(me), s = c || X(null), l = o(t, "checkbox", s), { mutateOptions: y, setMutateOptions: g } = l, [C, h] = D(!1), p = _e(l.data), u = l.error, w = l.eventListeners, E = { store: l.store, pageSize: -1 }, { data: A } = oe(E), O = A, L = X(null), T = t.lookupOptions || {}, I = T.idAttribute || "id", B = T.displayAttribute || "name", Q = t.showSelectedOnly && t.readonly, M = de(I) ? (d) => ue(I, d) : (d) => d[I], z = de(B) ? (d) => ue(B, d) : (d) => d[B];
  re(s, () => ({
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
    setValue(d, N = !1) {
      l.setData(d, N);
    },
    setVisible(d) {
      g((N) => ({ ...N, visible: d }));
    },
    setRequired(d) {
      g((N) => ({ ...N, required: d }));
    },
    setReadOnly(d) {
      g((N) => ({ ...N, readonly: d }));
    },
    setAttribute(d) {
      g((N) => ({ ...N, ...d }));
    },
    setOptions(d) {
    },
    getOptions() {
    }
  }), [l]);
  var P = Qe(t, l.data, t.label);
  t.readonly && (P.inputprops = { readOnly: !0 });
  function V(d, N) {
    const f = _e(l.data);
    var b = f.indexOf(d);
    N ? b < 0 && f.push(d) : b >= 0 && f.splice(b, 1), w.onValueChange(f.toString());
  }
  var H = {
    onBlur: w.onBlur,
    onFocus: w.onFocus,
    onChange: (d) => {
      V(d.target.value, d.target.checked);
    }
  };
  const q = (d) => {
    const N = d.toString();
    return p.includes(N);
  }, j = (d) => {
    const N = d.target.checked;
    h(N);
    var f = [];
    N && O.map((b) => {
      f.push(M(b));
    }), w.onValueChange(f.toString());
  };
  return /* @__PURE__ */ e("div", { className: t.className, children: y.visible && /* @__PURE__ */ a(
    Ae,
    {
      label: ze(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ e("div", { children: t.hideSelectAll ? /* @__PURE__ */ e(ne, {}) : /* @__PURE__ */ e(
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
        /* @__PURE__ */ a(
          ie,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: u.status,
            ...P,
            children: [
              O ? O.filter((d) => Q ? q(M(d)) : !0).map((d) => /* @__PURE__ */ e(
                Ke,
                {
                  value: M(d),
                  control: /* @__PURE__ */ e(
                    Ze,
                    {
                      icon: /* @__PURE__ */ e(je, { style: { fontSize: "20px" } }),
                      checkedIcon: /* @__PURE__ */ e(We, { style: { fontSize: "20px" } }),
                      ...H,
                      checked: q(M(d)),
                      disabled: t.readonly
                    }
                  ),
                  label: z(d)
                },
                M(d)
              )) : /* @__PURE__ */ e("div", { children: "No options provided" }),
              /* @__PURE__ */ e(Ee, { className: "form-error-text", children: u.message })
            ]
          }
        )
      ]
    }
  ) });
}), $t = Qt(100), Jt = U(function(t, c) {
  const o = ce(me), s = c || X(null), l = X(null), y = X(0), [g, C] = D([]), [h, p] = D(""), [u, w] = D(!1), v = o(t, "serverlookup", s), E = t.store || v.store, A = t.lookupOptions || {}, O = A.idAttribute || "id", L = A.displayAttribute || "name", T = L, I = {
    store: E,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: T,
    initialFetch: !1
  }, B = oe(I), Q = v.eventListeners, M = v.error, { mutateOptions: z, setMutateOptions: P } = v, V = v.data, H = u && g.length < (V ? 2 : 1), { setQueryFilter: q, setEndPointOptions: j, setQuickSearch: d, totalRecords: N, refreshData: f } = B, b = B.data, G = de(O) ? (i) => ue(O, i) : (i) => i == null ? void 0 : i[O], J = de(L) ? (i) => ue(L, i) : (i) => i == null ? void 0 : i[L];
  Y(() => {
    var i = V != "" ? V : void 0;
    i && C([i]);
  }, [v.data]), Y(() => {
    const i = b ? [...b] : [], S = V != "" ? V : void 0, _ = G(S), ae = J(S);
    i && _ && ae && !x(i, _) && i.unshift(S), C(i), y.current < N && (y.current = N);
  }, [b, N]), Y(() => {
    rt(W);
  }, [h]), Y(() => {
    $t(W);
  }, [u]);
  function W() {
    u && (h.length > 0 && h != J(V) ? d("*" + h + "*") : b ? d(null) : f());
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
  function x(i, S) {
    return i.find((_) => {
      if (G(_) == S)
        return _;
    });
  }
  re(s, () => ({
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
  var K = Qe(t, V, t.label);
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
      children: /* @__PURE__ */ a(ie, { fullWidth: !0, error: M.status, children: [
        /* @__PURE__ */ e(
          et,
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
                  endAdornment: /* @__PURE__ */ a(ne, { children: [
                    H ? /* @__PURE__ */ e(tt, { color: "inherit", size: 18 }) : null,
                    i.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: r,
            ...K,
            options: g,
            open: u,
            onClose: () => {
              w(!1);
            },
            onOpen: (i) => {
              w(!0);
            },
            ...k
          }
        ),
        /* @__PURE__ */ e(Ee, { className: "form-error-text", children: M.message })
      ] })
    }
  );
}), Ut = U(function(t, c) {
  const o = ce(me), s = c || X(null), l = X(null), y = X(0), [g, C] = D([]), [h, p] = D(""), [u, w] = D(!1), v = o(t, "autoComplete", s), E = t.store || v.store, O = (t.lookupOptions || {}).attribute || "name", L = O, T = {
    store: E,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: L,
    initialFetch: !1
  }, I = oe(T), B = v.eventListeners, Q = v.error, { mutateOptions: M, setMutateOptions: z } = v, P = v.data, V = u && g.length < (P ? 2 : 1), { setQueryFilter: H, setEndPointOptions: q, setQuickSearch: j, totalRecords: d, refreshData: N } = I, f = I.data, b = de(O) ? (r) => ue(O, r) : (r) => r == null ? void 0 : r[O];
  Y(() => {
    var r = P != "" ? P : void 0;
    r && C([r]);
  }, [v.data]), Y(() => {
    const x = (f ? [...f] : []).map((te) => b(te)), K = P != "" ? P : void 0;
    x && K && !k(x, K) && x.unshift(K), C(x), y.current < d && (y.current = d);
  }, [f, d]), Y(() => {
    rt(G);
  }, [h, u]);
  function G() {
    u && (h.length > 0 && h != P ? j("*" + h + "*") : f ? j(null) : N());
  }
  var J = {
    onBlur: (r) => {
      W(h), B.onBlur(h);
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
  re(s, () => ({
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
      N();
    },
    addFilter(r, x) {
      H((K) => (K[r] = x, { ...K }));
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
      children: /* @__PURE__ */ a(ie, { fullWidth: !0, error: Q.status, children: [
        /* @__PURE__ */ e(
          et,
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
                  endAdornment: /* @__PURE__ */ a(ne, { children: [
                    V ? /* @__PURE__ */ e(tt, { color: "inherit", size: 18 }) : null,
                    r.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...R,
            options: g,
            open: u,
            onClose: () => {
              w(!1);
            },
            onOpen: (r) => {
              w(!0);
            },
            ...J
          }
        ),
        /* @__PURE__ */ e(Ee, { className: "form-error-text", children: Q.message })
      ] })
    }
  );
}), Yt = (n) => {
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
}, mt = (n, t, c) => {
  const { type: o } = n, s = { fieldDef: n, title: c };
  switch (o) {
    case "string":
      return Z(s, wt);
    case "radio":
      return Z(s, xt);
    case "select":
      return Z(s, He);
    case "date":
      return Z(s, Ct);
    case "datetime":
      return Z(s, bt);
    case "checkbox":
      return Z(s, Nt);
    case "serverlookup":
      return Z(s, Jt);
    case "textarea":
      return Z(s, Ft);
    case "switch":
      return Z(s, St);
    case "iosswitch":
      return Z(s, kt);
    case "password":
      return Z(s, Ot);
    case "float":
    case "number":
    case "numbersOnly":
      return Z(s, Pt);
    case "integer":
      return Z(s, Rt);
    case "multiSelect":
      return Z(s, He);
    case "dateRange":
      return Z(s, qt);
    case "autoComplete":
      return Z(s, Ut);
    default:
      return Yt(s);
  }
}, en = U(function(t, c) {
  var p;
  const { formLayout: o, context: s } = t, { formData: l } = s, y = o.Container;
  X({});
  const g = Ye(() => (u) => mt(u), [l.data]);
  var C = ((p = o.options) == null ? void 0 : p.columns) || 1, h = { columns: C };
  return y ? /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: o.fields.map((u, w) => /* @__PURE__ */ e(
    y,
    {
      index: w,
      field: u,
      label: u.title,
      options: h,
      children: g(u)
    },
    u.attribute + u.name + u.type
  )) }) : /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: o.fields.map((u, w) => g(u)) });
}), ht = (n) => {
  const { layout: t, context: c } = n;
  var o = t.Renderer || en, s = t.Container || it;
  const l = (y) => /* @__PURE__ */ e(
    o,
    {
      context: c,
      formLayout: y
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
  const { formLayout: o, context: s } = t, { formData: l } = s, y = X({}), g = tn(t), C = "palmyra-form-field-data", h = Ye(() => (p) => mt(p, y, p.label), [l.data]);
  return /* @__PURE__ */ e("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: o.fields.map((p, u) => /* @__PURE__ */ e("div", { className: p.type === "dateRange" ? "palmyra-form-field-container" : g, children: /* @__PURE__ */ e("div", { className: C, children: h(p) }) }, p.attribute)) });
}), ft = ({ columns: n, isOpen: t, onClose: c, setFilter: o, defaultFilter: s = {} }) => {
  var { getFieldManager: l, getFilterData: y } = Kt(s);
  const g = () => {
    o({});
  }, C = () => {
    var p = y();
    o && o(p);
  }, h = Ht(n);
  return /* @__PURE__ */ a("div", { className: "grid-filter-container", children: [
    /* @__PURE__ */ e("div", { className: "grid-filter-content", children: /* @__PURE__ */ e(me.Provider, { value: l, children: /* @__PURE__ */ e(
      ht,
      {
        context: { formData: {} },
        layout: {
          type: "form",
          formLayout: {
            fields: h,
            options: {
              columns: 2
            }
          },
          Renderer: nn
        }
      }
    ) }) }),
    /* @__PURE__ */ a("div", { className: "grid-filter-btn-container", children: [
      /* @__PURE__ */ a(ee, { className: "secondary-filled-button", disableRipple: !0, onClick: g, children: [
        /* @__PURE__ */ e(Bt, { className: "button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ a(ee, { className: "filled-button", disableRipple: !0, onClick: C, children: [
        /* @__PURE__ */ e(qe, { className: "button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
};
function gt(n) {
  return dt({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" } }] })(n);
}
function yt(n) {
  return dt({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M156,208a8,8,0,0,1-8,8H120a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v48h20A8,8,0,0,1,156,208ZM92.65,145.49a8,8,0,0,0-11.16,1.86L68,166.24,54.51,147.35a8,8,0,1,0-13,9.3L58.17,180,41.49,203.35a8,8,0,0,0,13,9.3L68,193.76l13.49,18.89a8,8,0,0,0,13-9.3L77.83,180l16.68-23.35A8,8,0,0,0,92.65,145.49Zm98.94,25.82c-4-1.16-8.14-2.35-10.45-3.84-1.25-.82-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.72,19.82-.56a8,8,0,0,0,4.07-15.48c-2.11-.55-21-5.22-32.83,2.76a20.58,20.58,0,0,0-8.95,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.33-2.15,3.93-4.6,3.06-15.16,1.55-19.54.35A8,8,0,0,0,173.93,214a60.63,60.63,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.81,20.81,0,0,0,9.18-15.23C218,179,201.48,174.17,191.59,171.31ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,1,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.68L160,51.31Z" } }] })(n);
}
const rn = U(function(t, c) {
  const { columns: o, children: s, EmptyChild: l, onRowClick: y, quickSearch: g } = t, C = l || at, h = t.customizer || ct, p = t.customButton, [u, w] = D(!1), [v, E] = D(!1), [A, O] = D(!1), [L, T] = D("standard"), [I, B] = D(!1), [Q, M] = D(""), {
    setQueryFilter: z,
    setQuickSearch: P,
    setSortColumns: V,
    setEndPointOptions: H,
    gotoPage: q,
    setPageSize: j,
    getPageNo: d,
    refreshData: N,
    setQueryLimit: f,
    getQueryLimit: b,
    data: G,
    totalRecords: J,
    queryLimit: W,
    pageSizeOptions: k,
    filter: R
  } = oe(t), r = c || X(null);
  re(r, () => ({
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
    getQueryLimit: () => b(),
    setSortOptions(m) {
      V(m);
    },
    getCurrentData: () => G
  }), [b]);
  const x = (m, $) => {
    q($ - 1);
  }, K = ot(o, h), te = (m) => {
    T(m);
  }, i = () => {
    w(!u);
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
    E(!v);
  }, Fe = () => {
    O(!A);
  }, fe = () => {
  }, we = () => {
  }, Ne = () => {
    t.onNewClick();
  }, Se = 200, ke = !!t.pageSize, Oe = !!g, Pe = {
    transform: u ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Re = {
    transform: v ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, De = {
    transform: A ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, F = Math.ceil(J / W.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("div", { children: [
    s,
    /* @__PURE__ */ a("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: Dt(t.title) }),
      /* @__PURE__ */ a("div", { className: "grid-header-left-content", children: [
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
              endAdornment: /* @__PURE__ */ e(Ve, { position: "end", children: /* @__PURE__ */ e(Me, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(se, { onClickAway: () => {
          w(!1);
        }, children: /* @__PURE__ */ a("div", { className: "grid-header-button grid-density-btn", onClick: i, children: [
          /* @__PURE__ */ a(ee, { className: "grid-btn", disableRipple: !0, children: [
            ae(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(le, { style: Pe, className: "avathar-arrw-icon" })
          ] }),
          u && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ a("ul", { children: [
            /* @__PURE__ */ a("li", { onClick: () => te("standard"), children: [
              /* @__PURE__ */ e(ge, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: () => te("compact"), children: [
              /* @__PURE__ */ e(ye, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: () => te("comfortable"), children: [
              /* @__PURE__ */ e(pe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        o.some((m) => m.searchable) && /* @__PURE__ */ e(se, { onClickAway: () => {
          E(!1);
        }, children: /* @__PURE__ */ a("div", { className: "grid-header-button grid-filter-btn", onClick: xe, children: [
          /* @__PURE__ */ a(ee, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(qe, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" }),
            /* @__PURE__ */ e(le, { style: Re, className: "avathar-arrw-icon" })
          ] }),
          v && /* @__PURE__ */ e("div", { className: "filter-dropdown-content", onClick: (m) => m.stopPropagation(), children: /* @__PURE__ */ e(
            ft,
            {
              columns: o,
              setFilter: z,
              defaultFilter: R,
              isOpen: I,
              onClose: () => B(!1)
            }
          ) })
        ] }) }),
        /* @__PURE__ */ e(se, { onClickAway: () => {
          O(!1);
        }, children: /* @__PURE__ */ a("div", { className: "grid-header-button grid-export-btn", onClick: Fe, children: [
          /* @__PURE__ */ a(ee, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(nt, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Export" }),
            /* @__PURE__ */ e(le, { style: De, className: "avathar-arrw-icon" })
          ] }),
          A && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ a("ul", { children: [
            /* @__PURE__ */ a("li", { onClick: fe, children: [
              /* @__PURE__ */ e(gt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: we, children: [
              /* @__PURE__ */ e(yt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: /* @__PURE__ */ e("div", { onClick: Ne, children: /* @__PURE__ */ a(ee, { className: "grid-btn", disableRipple: !0, children: [
          t.customAddButton && t.customAddButton.icon ? Mt.cloneElement(t.customAddButton.icon, {
            className: "grid-button-icon"
          }) : /* @__PURE__ */ e(lt, { className: "grid-button-icon" }),
          t.customAddButton && t.customAddButton.text ? /* @__PURE__ */ e(ne, { children: t.customAddButton.text }) : /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(ne, {}),
        p && p.map((m, $) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: m }, $))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      st,
      {
        columnDefs: K,
        EmptyChild: C,
        customizer: h,
        rowData: G,
        onRowClick: Ce,
        onRowStyle: S,
        onHeaderStyle: _,
        onSortColumn: V
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: ke && F !== 0 && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: k && k.length > 1 ? /* @__PURE__ */ e(ie, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Te,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: k[0],
            onChange: be,
            label: "Rows per page",
            children: k.map((m) => /* @__PURE__ */ e(Ie, { value: m, children: m }, m))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("span", { children: [
          "of ",
          J,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        Be,
        {
          count: F,
          shape: "rounded",
          componentName: "div",
          onChange: x,
          page: d() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), xr = U(function(t, c) {
  const { children: o, EmptyChild: s, onRowClick: l, quickSearch: y } = t, g = t.columns, C = s || at, h = t.customizer || ct, p = t.customButton, u = t.gridTitle, [w, v] = D(!1), [E, A] = D(!1), [O, L] = D("standard"), [T, I] = D(!1), [B, Q] = D(""), {
    setQueryFilter: M,
    setQuickSearch: z,
    setSortColumns: P,
    setEndPointOptions: V,
    gotoPage: H,
    setPageSize: q,
    getPageNo: j,
    refreshData: d,
    setQueryLimit: N,
    getQueryLimit: f,
    data: b,
    totalRecords: G,
    queryLimit: J,
    pageSizeOptions: W,
    filter: k
  } = oe(t), [R, r] = D(g(b)), x = c || X(null);
  re(x, () => ({
    setFilter: (F) => {
      M(F);
    },
    refresh: () => {
      d();
    },
    resetFilter() {
      M({});
    },
    setEndPointOptions: (F) => {
      V(F);
    },
    addFilter: (F, m) => {
      M(($) => ($[F] = m, { ...$ }));
    },
    setQueryLimit: (F) => {
      N(F);
    },
    getQueryLimit: () => f(),
    setSortOptions(F) {
      P(F);
    },
    getCurrentData: () => b
  }), [f, R]), Y(() => {
    r(g(b));
  }, [b]);
  const K = (F, m) => {
    H(m - 1);
  }, te = ot(R, h), i = (F) => {
    L(F);
  }, S = () => {
    v(!w);
  }, _ = () => O === "compact" ? { padding: "3px" } : O === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, ae = () => O === "compact" ? { padding: "3px" } : O === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, ve = () => {
    var F;
    switch (O) {
      case "compact":
        F = /* @__PURE__ */ e(ye, { className: "density-icon" });
        break;
      case "comfortable":
        F = /* @__PURE__ */ e(pe, { className: "density-icon" });
        break;
      default:
        F = /* @__PURE__ */ e(ge, { className: "grid-button-icon" });
        break;
    }
    return F;
  }, Ce = (F) => {
    const m = F.target.value;
    Q(m), m ? z(m) : M({});
  }, be = (F) => {
    l && l(F);
  }, xe = (F) => {
    const m = parseInt(F.target.value, 10);
    q(m);
  }, Fe = () => {
    A(!E);
  }, fe = () => {
    t.onNewClick();
  }, we = () => {
  }, Ne = () => {
  }, Se = 200, ke = !!t.pageSize, Oe = !!y, Pe = {
    transform: w ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Re = {
    transform: E ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, De = Math.ceil(G / J.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("div", { children: [
    o,
    /* @__PURE__ */ a("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: /* @__PURE__ */ e("span", { className: "grid-header-right-content-text", children: u }) }),
      /* @__PURE__ */ a("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: Oe && /* @__PURE__ */ e(
          he,
          {
            sx: { width: Se },
            type: "text",
            value: B,
            onChange: Ce,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ve, { position: "end", children: /* @__PURE__ */ e(Me, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(se, { onClickAway: () => {
          v(!1);
        }, children: /* @__PURE__ */ a("div", { className: "grid-header-button grid-density-btn", onClick: S, children: [
          /* @__PURE__ */ a(ee, { className: "grid-btn", disableRipple: !0, children: [
            ve(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(le, { style: Pe, className: "avathar-arrw-icon" })
          ] }),
          w && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ a("ul", { children: [
            /* @__PURE__ */ a("li", { onClick: () => i("standard"), children: [
              /* @__PURE__ */ e(ge, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: () => i("compact"), children: [
              /* @__PURE__ */ e(ye, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: () => i("comfortable"), children: [
              /* @__PURE__ */ e(pe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        R.some((F) => F.searchable) && /* @__PURE__ */ a("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ a(ee, { className: "grid-btn", disableRipple: !0, onClick: () => I(!0), children: [
            /* @__PURE__ */ e(qe, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ e(
            ft,
            {
              columns: R,
              setFilter: M,
              defaultFilter: k,
              isOpen: T,
              onClose: () => I(!1)
            }
          )
        ] }),
        /* @__PURE__ */ e(se, { onClickAway: () => {
          A(!1);
        }, children: /* @__PURE__ */ a("div", { className: "grid-header-button grid-export-btn", onClick: Fe, children: [
          /* @__PURE__ */ a(ee, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(nt, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Export" }),
            /* @__PURE__ */ e(le, { style: Re, className: "avathar-arrw-icon" })
          ] }),
          E && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ a("ul", { children: [
            /* @__PURE__ */ a("li", { onClick: we, children: [
              /* @__PURE__ */ e(gt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ a("li", { onClick: Ne, children: [
              /* @__PURE__ */ e(yt, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: t.customAddButton ? /* @__PURE__ */ e("div", { onClick: fe, children: t.customAddButton }) : /* @__PURE__ */ e("div", { onClick: fe, children: /* @__PURE__ */ a(ee, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ e(lt, { className: "grid-button-icon" }),
          /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(ne, {}),
        p && p.map((F, m) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: F }, m))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      st,
      {
        columnDefs: te,
        EmptyChild: C,
        customizer: h,
        rowData: b,
        onRowClick: be,
        onRowStyle: _,
        onHeaderStyle: ae,
        onSortColumn: P
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: ke && G !== null && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: W && W.length > 1 ? /* @__PURE__ */ e(ie, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Te,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: W[0],
            onChange: xe,
            label: "Rows per page",
            children: W.map((F) => /* @__PURE__ */ e(Ie, { value: F, children: F }, F))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("span", { children: [
          "of ",
          G,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        Be,
        {
          count: De,
          shape: "rounded",
          componentName: "div",
          onChange: K,
          page: j() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), Fr = U(function(t, c) {
  const { columns: o, endPoint: s, storeFactory: l, layoutParams: y, pagination: g } = t, C = t.quickSearch || "", h = t.customButton, p = t.customAddButton, u = t.title, w = t.fetchAll, v = t.filterTopic, E = t.initialFetch, A = (L, T) => {
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
      endPoint: s
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ e(ne, { children: /* @__PURE__ */ e(Le.Provider, { value: l, children: /* @__PURE__ */ e(
    pt,
    {
      layout: O,
      context: y,
      customAddButton: p,
      onDataChange: t.onDataChange,
      title: u,
      defaultParams: t.defaultParams,
      customButton: h,
      customizer: t.customizer,
      ref: c,
      fetchAll: w,
      filterTopic: v,
      initialFetch: E
    }
  ) }) });
}), on = U(function(t, c) {
  const o = t.layout, [s, l] = D(o.fields), y = o.pagination ? o.pagination : [15], g = ce(Le), C = ce(Ue);
  var h = o.storeOptions || {}, p = {};
  zt(p, h, C);
  const u = g.getGridStore(p, o.storeOptions.endPoint);
  Y(() => {
    h.hasLayout && u.queryLayout({}).then((E) => {
      l(E.columns);
    });
  }, []);
  const { onClick: w, onNewClick: v } = Zt(o.actionOptions, C);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    rn,
    {
      columns: s,
      store: u,
      pageSize: y,
      onRowClick: w,
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
}), pt = on, an = (n) => {
  const { layout: t, context: c } = n;
  var o = t.Container || it;
  return /* @__PURE__ */ e(ut, { fallback: /* @__PURE__ */ e("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ e(o, { ...t, children: ((l) => /* @__PURE__ */ e(
    pt,
    {
      context: c,
      layout: l
    }
  ))(t.tableLayout) }) });
}, sn = (n) => {
  const { layout: t } = n;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ e(ht, { ...n });
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
const vt = (n) => {
  const { layout: t, context: c } = n, o = t.sections;
  function s(l, y, g) {
    const { w: C, h } = ln(l.width, l.height);
    return /* @__PURE__ */ e(Et, { sx: { width: C, height: h }, children: /* @__PURE__ */ e(
      sn,
      {
        layout: l,
        context: y
      }
    ) }, (l.name || "tab") + g);
  }
  return /* @__PURE__ */ e("div", { style: { display: "flex", flexWrap: "wrap" }, children: o.map((l, y) => s(l, c, y)) });
}, $e = U(function(t, c) {
  const { layout: o } = t;
  re(c, () => ({
    resetFilter() {
    }
  }), []);
  const s = {}, l = o.tabs;
  return /* @__PURE__ */ e("div", { children: l.map((y, g) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    vt,
    {
      layout: y,
      context: s
    }
  ) }, y.name + g)) });
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
}, Je = U(function(t, c) {
  var p;
  const o = t.data || {}, { layout: s } = t;
  var { getFieldManager: l, getFormData: y, isFormValid: g } = Xt(o, (p = t.callbacks) == null ? void 0 : p.onFormValidChange, cn(t.mode));
  re(c, () => ({
    getData() {
      return y();
    },
    isValid() {
      return g();
    }
  }), []);
  const C = { formData: o }, h = s.tabs;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(me.Provider, { value: l, children: h.map((u, w) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    vt,
    {
      layout: u,
      context: C
    }
  ) }, u.name + w)) }) });
}), dn = (n) => {
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
}, wr = U(function(t, c) {
  const [o, s] = D(t.layout), l = t.mode ? t.mode : o.type ? o.type : "grid", y = t.layoutParams || {}, g = dn(l), C = X(0);
  return Y(() => {
    s(t.layout), C.current < 999999 ? C.current++ : C.current = 0;
  }, [t.layout]), /* @__PURE__ */ e(ut, { fallback: /* @__PURE__ */ e("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ e(Le.Provider, { value: t.storeFactory, children: /* @__PURE__ */ e(Ue.Provider, { value: y, children: /* @__PURE__ */ e(g, { ...t, ref: (h) => {
    c && (c.current = h);
  } }, C.current) }) }) });
}), Nr = U(function(t, c) {
  const { title: o, Child: s, childProps: l, pageSize: y, customButton: g } = t, C = c || X(null), {
    setQueryFilter: h,
    refreshData: p,
    setSortColumns: u,
    setEndPointOptions: w,
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
  } = oe(t), z = t.listKeyProvider || ((f, b) => b);
  re(C, () => ({
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
      w(f);
    },
    addFilter: (f, b) => {
      h((G) => (G[f] = b, { ...G }));
    },
    setQueryLimit: (f) => {
      L(f);
    },
    getQueryLimit: () => T(),
    getCurrentData: () => I,
    setSortOptions(f) {
      u(f);
    }
  }), [h]);
  const P = (f, b) => {
    E(b - 1);
  }, V = (f) => {
    const b = f.target.value;
    v(b);
  }, H = (f) => {
    const b = parseInt(f.target.value, 10);
    A(b);
  }, q = 200, j = !!y, d = !!t.quickSearch, N = Math.ceil(B / M.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "card-page-container", children: /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ a("div", { className: "card-header", children: [
      /* @__PURE__ */ e("div", { className: "card-left-content", children: t.titleTooltip ? /* @__PURE__ */ e(At, { placement: "right", title: t.titleTooltip, arrow: !0, children: /* @__PURE__ */ a("div", { className: "card-left-content-info", children: [
        o,
        /* @__PURE__ */ e(Lt, { className: "card-header-info-icon" })
      ] }) }) : /* @__PURE__ */ e(ne, { children: o }) }),
      /* @__PURE__ */ a("div", { className: "card-right-content", children: [
        d && /* @__PURE__ */ e(
          he,
          {
            sx: { width: q },
            type: "text",
            onChange: V,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Ve, { position: "end", children: /* @__PURE__ */ e(Me, { className: "card-filter-icon" }) })
            }
          }
        ),
        g && g.map((f, b) => /* @__PURE__ */ e("div", { className: "card-custom-button", children: f }, b))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      Tt,
      {
        Child: s,
        childKeyProvider: z,
        preProcess: t.preProcess,
        dataList: I,
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
    /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { children: Q && Q.length > 1 ? /* @__PURE__ */ e(ie, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          Te,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: Q[0],
            onChange: H,
            label: "Rows per page",
            children: Q.map((f) => /* @__PURE__ */ e(Ie, { value: f, children: f }, f))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("span", { children: [
          "of ",
          B,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(Vt, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ e(
        Be,
        {
          count: N,
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
  xr as D,
  wr as F,
  pt as G,
  Jt as M,
  Fr as P,
  Nr as S,
  vt as T,
  rn as a,
  br as b,
  Ut as c,
  en as d,
  ht as e,
  nn as f,
  mt as g,
  ft as h,
  an as i,
  sn as j,
  $e as k,
  Je as l,
  oe as u
};
