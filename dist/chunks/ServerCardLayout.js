import { jsx as e, jsxs as h, Fragment as ie } from "react/jsx-runtime";
import Ft, { useState as P, useRef as $, useEffect as U, forwardRef as Y, useContext as me, useImperativeHandle as re, useMemo as rt } from "react";
import { a as Ve } from "./AsyncTreeMenu.js";
import { FormControlLabel as _e, Checkbox as $e, FormControl as ae, FormHelperText as Ee, Autocomplete as ot, TextField as ge, CircularProgress as it, Button as ne, InputAdornment as Te, ClickAwayListener as Qe, Select as ze, MenuItem as qe, Pagination as Ge, Box as wt, Stack as St } from "@mui/material";
import Ot from "../palmyra/layout/card/CardLayout.js";
import Rt from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import Nt from "../palmyra/mui/form/MuiTextField.js";
import Pt from "../palmyra/mui/form/MuiTextArea.js";
import kt from "../palmyra/mui/form/MuiRadioGroup.js";
import Je from "../palmyra/mui/form/MuiSelect.js";
import Dt from "../palmyra/mui/form/MuiDatePicker.js";
import At from "../palmyra/mui/form/MuiDateTimePicker.js";
import Lt from "../palmyra/mui/form/MuiDateRangePicker.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import Mt from "../palmyra/mui/form/MuiCheckBox.js";
import Bt from "../palmyra/mui/form/MuiSwitch.js";
import Qt from "../palmyra/mui/form/MuiIOSSwitch.js";
import It from "../palmyra/mui/form/MuiPassword.js";
import { copyMuiOptions as Ke, getFieldLabel as je } from "../palmyra/mui/form/MuiUtil.js";
import { FieldManagerContext as pe, StoreFactoryContext as He, LayoutParamsContext as at } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import We from "../palmyra/mui/form/FieldDecorator.js";
import { hasDot as he } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as fe, setValueByKey as Vt } from "../palmyra/form/FormUtil.js";
import { T as Ue, a as Ye, c as Et, d as Xe } from "./index3.js";
import Tt from "../palmyra/mui/form/MuiNumberField.js";
import zt from "../palmyra/mui/form/MuiIntegerField.js";
import { delay as st, delayGenerator as qt, mergeDeep as Gt } from "../palmyra/utils/index.js";
import "../palmyra/mui/form/MuiSlider.js";
import Kt from "../palmyra/mui/form/MuiRating.js";
import '../assets/MuiXTreeMenu.css';import '../assets/ServerCardLayout.css';/* empty css                               */
import "../palmyra/mui/textView/DateView.js";
import "../palmyra/mui/textView/OptionsView.js";
import "../palmyra/mui/textView/LookupView.js";
import { renderTitle as lt } from "../palmyra/mui/widget/InfoTooltip.js";
import ct from "../palmyra/layout/container/SectionContainer.js";
import jt from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as dt } from "../palmyra/grid/base/ColumnConverter.js";
import ut from "../palmyra/grid/base/EmptyChildTable.js";
import mt from "../palmyra/grid/base/TableX.js";
import { KeyboardArrowDown as Ie, Menu as be, DensitySmall as Ce, DensityLarge as xe, Add as ht } from "@mui/icons-material";
import { NoopCustomizer as ft } from "../palmyra/grid/Types.js";
import { convertToField as Ht } from "../palmyra/grid/base/GridFieldConverter.js";
import { createFilterData as Wt } from "../palmyra/form/PalmyraFilterManager.js";
import gt from "../palmyra/grid/base/ExportOptions.js";
import "@emotion/styled";
import "react-router-dom";
import "@mui/x-tree-view";
/* empty css             */
import "../palmyra/layout/tree/AsyncTreeMenuEditor.js";
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
const se = (i) => {
  var V, J;
  const { store: t, quickSearch: l } = i, a = i.fetchAll != !1, [s, c] = P(i.endPointOptions), [v, g] = P(null), b = ((V = i.defaultParams) == null ? void 0 : V.filter) || {}, p = ((J = i.defaultParams) == null ? void 0 : J.sort) || {}, [x, u] = i.filterTopic ? Ut(i.filterTopic, b) : P(b), [F, y] = P({}), B = $(i.initialFetch == !1), N = i.pageSize ? i.pageSize : 15;
  var D = N instanceof Array ? N : [N], R = N instanceof Array ? N[0] : N;
  const [Q, L] = P({ limit: R, offset: 0, total: !0 }), [E, I] = P(null), X = () => Math.round(Q.offset / Q.limit), O = () => Q, M = (C) => {
    L((n) => ({ limit: n.limit, total: n.total, offset: C * n.limit }));
  }, T = (C) => {
    const n = C > 10 || C == -1 ? C : 15;
    L((f) => {
      const j = Math.floor(f.offset / n) * n;
      return { limit: n, total: f.total, offset: j };
    });
  }, A = () => x ? Object.keys(x).length == 0 : !1, _ = (C) => {
    I((n) => (setTimeout(() => {
      i.onDataChange && i.onDataChange(C, n);
    }, 300), C));
  };
  U(() => {
    if (B.current) {
      B.current = !1;
      return;
    }
    (a || !A()) && q();
  }, [Q, F, s]);
  const z = () => ({
    sortOrder: F && Object.keys(F).length > 0 ? F : p,
    total: !0,
    endPointVars: s,
    ...Q,
    filter: { ...x, ...b }
  }), q = () => {
    const C = z();
    if (t)
      try {
        t.query(C).then((n) => {
          _(n.result), g(n.total);
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
    _([]), g(0);
  }, d = () => {
    _(void 0), g(null);
  };
  return {
    setQueryFilter: (C) => {
      typeof C == "function" || C && Object.keys(C).length > 0 ? u(C) : u({}), M(0);
    },
    setQuickSearch: (C) => {
      const n = l;
      u(C ? (f) => (f[n] = C, { ...f }) : (f) => (delete f[n], { ...f })), M(0);
    },
    setSortColumns: (C) => {
      y(C);
    },
    setEndPointOptions: c,
    refreshData: q,
    gotoPage: M,
    setPageSize: T,
    getPageNo: X,
    getQueryLimit: O,
    setQueryLimit: L,
    getQueryRequest: z,
    filter: x,
    queryLimit: Q,
    data: E,
    totalRecords: v,
    pageSizeOptions: D
  };
};
function et(i) {
  return i ? Array.isArray(i) ? i : typeof i == "string" ? i.split(",") : [i] : [];
}
const Fr = Y(function(t, l) {
  const a = me(pe), s = l || $(null), c = a(t, "checkbox", s), { mutateOptions: v, setMutateOptions: g } = c, [b, p] = P(!1), x = et(c.data), u = c.error, F = c.eventListeners, y = c.store, B = t.pageSize || -1, N = { store: y, pageSize: B, defaultParams: t.defaultParams }, { data: D } = se(N), R = D, Q = $(null), L = t.lookupOptions || {}, E = L.idAttribute || "id", I = L.displayAttribute || "name", X = t.showSelectedOnly && t.readonly, O = he(E) ? (m) => fe(E, m) : (m) => m[E], M = he(I) ? (m) => fe(I, m) : (m) => m[I];
  re(s, () => ({
    focus() {
      Q.current.focus();
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
  var T = Ke(t, c.data, t.label);
  t.readonly && (T.inputprops = { readOnly: !0 });
  function A(m, d) {
    const S = et(c.data);
    var K = S.indexOf(m);
    d ? K < 0 && S.push(m) : K >= 0 && S.splice(K, 1), F.onValueChange(S.toString());
  }
  var _ = {
    onBlur: F.onBlur,
    onFocus: F.onFocus,
    onChange: (m) => {
      A(m.target.value, m.target.checked);
    }
  };
  const z = (m) => {
    const d = m.toString();
    return x.includes(d);
  }, q = (m) => {
    const d = m.target.checked;
    p(d);
    var S = [];
    d && R.map((K) => {
      S.push(O(K));
    }), F.onValueChange(S.toString());
  };
  return /* @__PURE__ */ e("div", { className: t.className, children: v.visible && /* @__PURE__ */ h(
    We,
    {
      label: je(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ e("div", { children: t.hideSelectAll ? /* @__PURE__ */ e(ie, {}) : /* @__PURE__ */ e(
          _e,
          {
            control: /* @__PURE__ */ e(
              $e,
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
          ae,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: u.status,
            ...T,
            children: [
              R ? R.filter((m) => X ? z(O(m)) : !0).map((m) => /* @__PURE__ */ e(
                _e,
                {
                  value: O(m),
                  control: /* @__PURE__ */ e(
                    $e,
                    {
                      icon: /* @__PURE__ */ e(Ue, { style: { fontSize: "20px" } }),
                      checkedIcon: /* @__PURE__ */ e(Ye, { style: { fontSize: "20px" } }),
                      ..._,
                      checked: z(O(m)),
                      disabled: t.readonly
                    }
                  ),
                  label: M(m)
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
}), Yt = qt(100), Zt = Y(function(t, l) {
  const a = me(pe), s = l || $(null), c = $(null), v = $(0), [g, b] = P([]), [p, x] = P(""), [u, F] = P(!1), y = a(t, "serverlookup", s), B = t.store || y.store, N = t.lookupOptions || {}, D = N.idAttribute || "id", R = N.displayAttribute || "name", Q = R, L = t.defaultParams, E = {
    store: B,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: t.pageSize || 15,
    quickSearch: Q,
    initialFetch: !1,
    defaultParams: L
  }, I = se(E), X = y.eventListeners, O = y.error, { mutateOptions: M, setMutateOptions: T } = y, A = y.data, _ = u && g.length < (A ? 2 : 1), {
    setQueryFilter: z,
    setEndPointOptions: q,
    setQuickSearch: m,
    totalRecords: d,
    refreshData: S,
    getQueryRequest: K
  } = I, W = I.data, V = he(D) ? (o) => fe(D, o) : (o) => o == null ? void 0 : o[D], J = he(R) ? (o) => fe(R, o) : (o) => o == null ? void 0 : o[R];
  U(() => {
    var o = A != "" ? A : void 0;
    o && b([o]);
  }, [y.data]), U(() => {
    const o = W ? [...W] : [], w = A != "" ? A : void 0, G = V(w), te = J(w);
    o && G && te && !oe(o, G) && o.unshift(w), b(o), v.current < d && (v.current = d);
  }, [W, d]), U(() => {
    st(C);
  }, [p]), U(() => {
    Yt(C);
  }, [u]), U(() => {
    if (t.fetchDefault != null && t.fetchDefault != null) {
      const o = t.fetchDefault, w = K();
      B.query(w).then((G) => {
        const te = G.result, ce = te.length > o ? o : 0;
        y.setData(te[ce], !1);
      }).catch((G) => {
        console.error(G);
      });
    }
  }, []);
  function C() {
    u && (p.length > 0 && p != J(A) ? m("*" + p + "*") : W ? m(null) : S());
  }
  var n = {
    onBlur: X.onBlur,
    onFocus: X.onFocus,
    onChange: (o, w) => {
      f(w);
    },
    onInputChange: (o, w) => (x(w), !0)
  };
  const f = (o) => {
    X.onValueChange(o);
  }, j = (o) => typeof o == "object" ? J(o) + "" : (console.log(o), "");
  function oe(o, w) {
    return o.find((G) => {
      if (V(G) == w)
        return G;
    });
  }
  re(s, () => ({
    focus() {
      c.current.focus();
    },
    isValid() {
      return !O.status;
    },
    clear() {
      t.multiple ? y.setData([], !0) : y.setData(void 0, !0);
    },
    getValue() {
      return y.getData();
    },
    setValue(o, w = !1) {
      y.setData(o, w);
    },
    setVisible(o) {
      T((w) => ({ ...w, visible: o }));
    },
    setRequired(o) {
      T((w) => ({ ...w, required: o }));
    },
    setReadOnly(o) {
      T((w) => ({ ...w, readonly: o }));
    },
    setAttribute(o) {
      T((w) => ({ ...w, ...o }));
    },
    setFilter(o) {
      z(o);
    },
    resetFilter() {
      z({});
    },
    setEndPointOptions(o) {
      q(o);
    },
    getCurrentData: () => A,
    refresh: () => {
      S();
    },
    addFilter(o, w) {
      z((G) => (G[o] = w, { ...G }));
    },
    setDefaultFilter(o) {
    },
    setSortOptions(o) {
    }
  }), [y, z]);
  var ee = Ke(t, A, t.label);
  M.readonly && (ee.inputProps = { readOnly: !0 });
  const le = (o, w) => o instanceof Array ? o.some((G) => V(G) == V(w)) : V(o) == V(w);
  return /* @__PURE__ */ e(
    We,
    {
      label: je(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ h(ae, { fullWidth: !0, error: O.status, children: [
        /* @__PURE__ */ e(
          ot,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: t.multiple,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            isOptionEqualToValue: le,
            filterOptions: (o) => o,
            renderInput: (o) => /* @__PURE__ */ e(
              ge,
              {
                ...o,
                inputRef: (w) => {
                  c.current = w;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                InputProps: {
                  ...o.InputProps,
                  endAdornment: /* @__PURE__ */ h(ie, { children: [
                    _ ? /* @__PURE__ */ e(it, { color: "inherit", size: 18 }) : null,
                    o.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: j,
            ...ee,
            options: g,
            open: u,
            onClose: () => {
              F(!1);
            },
            onOpen: (o) => {
              F(!0);
            },
            ...n
          }
        ),
        /* @__PURE__ */ e(Ee, { className: "form-error-text", children: O.message })
      ] })
    }
  );
}), en = Y(function(t, l) {
  const a = me(pe), s = l || $(null), c = $(null), v = $(0), [g, b] = P([]), [p, x] = P(""), [u, F] = P(!1), y = a(t, "autoComplete", s), B = t.store || y.store, D = (t.lookupOptions || {}).attribute || "name", R = D, Q = {
    store: B,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: R,
    initialFetch: !1
  }, L = se(Q), E = y.eventListeners, I = y.error, { mutateOptions: X, setMutateOptions: O } = y, M = y.data, T = u && g.length < (M ? 2 : 1), { setQueryFilter: A, setEndPointOptions: _, setQuickSearch: z, totalRecords: q, refreshData: m } = L, d = L.data, S = he(D) ? (n) => fe(D, n) : (n) => n == null ? void 0 : n[D];
  U(() => {
    var n = M != "" ? M : void 0;
    n && b([n]);
  }, [y.data]), U(() => {
    const f = (d ? [...d] : []).map((oe) => S(oe)), j = M != "" ? M : void 0;
    f && j && !J(f, j) && f.unshift(j), b(f), v.current < q && (v.current = q);
  }, [d, q]), U(() => {
    st(K);
  }, [p, u]);
  function K() {
    u && (p.length > 0 && p != M ? z("*" + p + "*") : d ? z(null) : m());
  }
  var W = {
    onBlur: (n) => {
      V(p), E.onBlur(p);
    },
    onFocus: E.onFocus,
    onChange: (n, f) => {
      V(f);
    },
    onInputChange: (n, f) => (x(f), !0)
  };
  const V = (n) => {
    E.onValueChange(n);
  };
  function J(n, f) {
    return n.find((j) => {
      if (j == f)
        return j;
    });
  }
  re(s, () => ({
    focus() {
      c.current.focus();
    },
    isValid() {
      return !I.status;
    },
    clear() {
      y.setData(void 0, !0);
    },
    getValue() {
      return y.getData();
    },
    setValue(n, f = !1) {
      y.setData(n, f);
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
      _(n);
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
  }), [y, A]);
  var C = Ke(t, M, t.label);
  return X.readonly && (C.inputProps = { readOnly: !0 }), /* @__PURE__ */ e(
    We,
    {
      label: je(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ h(ae, { fullWidth: !0, error: I.status, children: [
        /* @__PURE__ */ e(
          ot,
          {
            freeSolo: !0,
            autoSelect: !0,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            filterOptions: (n) => n,
            renderInput: (n) => /* @__PURE__ */ e(
              ge,
              {
                ...n,
                inputRef: (f) => {
                  c.current = f;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                ...C,
                InputProps: {
                  ...n.InputProps,
                  endAdornment: /* @__PURE__ */ h(ie, { children: [
                    T ? /* @__PURE__ */ e(it, { color: "inherit", size: 18 }) : null,
                    n.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...C,
            options: g,
            open: u,
            onClose: () => {
              F(!1);
            },
            onOpen: (n) => {
              F(!0);
            },
            ...W
          }
        ),
        /* @__PURE__ */ e(Ee, { className: "form-error-text", children: I.message })
      ] })
    }
  );
}), tn = (i) => {
  const { fieldDef: t } = i;
  return /* @__PURE__ */ h("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, H = (i, t) => {
  const l = i.fieldDef;
  return /* @__PURE__ */ e(
    t,
    {
      ...l,
      label: i.title
    },
    l.title + l.attribute
  );
}, yt = (i, t, l) => {
  const { type: a } = i, s = { fieldDef: i, title: l };
  switch (a) {
    case "string":
      return H(s, Nt);
    case "radio":
      return H(s, kt);
    case "select":
      return H(s, Je);
    case "date":
      return H(s, Dt);
    case "datetime":
      return H(s, At);
    case "checkbox":
      return H(s, Mt);
    case "serverlookup":
      return H(s, Zt);
    case "textarea":
      return H(s, Pt);
    case "switch":
      return H(s, Bt);
    case "iosswitch":
      return H(s, Qt);
    case "password":
      return H(s, It);
    case "rating":
      return H(s, Kt);
    case "float":
    case "number":
    case "numbersOnly":
      return H(s, Tt);
    case "integer":
      return H(s, zt);
    case "multiSelect":
      return H(s, Je);
    case "dateRange":
      return H(s, Lt);
    case "autoComplete":
      return H(s, en);
    default:
      return tn(s);
  }
}, nn = Y(function(t, l) {
  var x;
  const { formLayout: a, context: s } = t, { formData: c } = s, v = a.Container;
  $({});
  const g = rt(() => (u) => yt(u), [c.data]);
  var b = ((x = a.options) == null ? void 0 : x.columns) || 1, p = { columns: b };
  return v ? /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: a.fields.map((u, F) => /* @__PURE__ */ e(
    v,
    {
      index: F,
      field: u,
      label: u.label,
      options: p,
      children: g(u)
    },
    u.attribute + u.name + u.type
  )) }) : /* @__PURE__ */ e("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: a.fields.map((u, F) => g(u)) });
}), vt = (i) => {
  const { layout: t, context: l } = i;
  var a = t.Renderer || nn, s = t.Container || ct;
  const c = (v) => /* @__PURE__ */ e(
    a,
    {
      context: l,
      formLayout: v
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
}, rn = (i) => {
  const { formLayout: t } = i;
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
}, on = Y(function(t, l) {
  const { formLayout: a, context: s } = t, { formData: c } = s, v = $({}), g = rn(t), b = "palmyra-form-field-data", p = rt(() => (x) => yt(x, v, x.label), [c.data]);
  return /* @__PURE__ */ e("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: a.fields.map((x, u) => /* @__PURE__ */ e("div", { className: x.type === "dateRange" ? "palmyra-form-field-container" : g, children: /* @__PURE__ */ e("div", { className: b, children: p(x) }) }, x.attribute)) });
}), bt = ({ columns: i, isOpen: t, onClose: l, setFilter: a, defaultFilter: s = {} }) => {
  const c = {};
  Object.keys(s || {}).map((u) => {
    const F = s[u];
    Vt(u, c, F);
  });
  var { getFieldManager: v, getFilterData: g } = Wt(c);
  const b = () => {
    a({}), l();
  }, p = () => {
    var u = g();
    a && a(u), l();
  }, x = Ht(i);
  return /* @__PURE__ */ h("div", { className: "grid-filter-container", children: [
    /* @__PURE__ */ e("div", { className: "grid-filter-content", children: /* @__PURE__ */ e(pe.Provider, { value: v, children: /* @__PURE__ */ e(
      vt,
      {
        context: { formData: {} },
        layout: {
          type: "form",
          formLayout: {
            fields: x,
            options: {
              columns: 2
            }
          },
          Renderer: on
        }
      }
    ) }) }),
    /* @__PURE__ */ h("div", { className: "grid-filter-btn-container", children: [
      /* @__PURE__ */ h(ne, { className: "secondary-filled-button", disableRipple: !0, onClick: b, children: [
        /* @__PURE__ */ e(Et, { className: "button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ h(ne, { className: "filled-button", disableRipple: !0, onClick: p, children: [
        /* @__PURE__ */ e(Xe, { className: "button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
}, an = Y(function(t, l) {
  const { columns: a, children: s, EmptyChild: c, onRowClick: v, quickSearch: g, exportOptions: b, densityOption: p } = t, x = c || ut, u = t.customizer || ft, F = t.customButton, [y, B] = P(!1), [N, D] = P(!1), [R, Q] = P(!1), [L, E] = P("standard"), [I, X] = P(""), {
    setQueryFilter: O,
    setQuickSearch: M,
    setSortColumns: T,
    setEndPointOptions: A,
    gotoPage: _,
    setPageSize: z,
    getPageNo: q,
    refreshData: m,
    setQueryLimit: d,
    getQueryLimit: S,
    getQueryRequest: K,
    data: W,
    totalRecords: V,
    queryLimit: J,
    pageSizeOptions: C,
    filter: n
  } = se(t), f = l || $(null);
  re(f, () => ({
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
    getCurrentData: () => W
  }), [S]);
  const j = (r, k) => {
    _(k - 1);
  }, oe = dt(a, u), ee = (r) => {
    E(r);
  }, le = () => {
    B(!y);
  }, o = () => L === "compact" ? {
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
  }, w = () => L === "compact" ? { padding: "3px", borderRight: "1px solid var(--border-color)" } : L === "comfortable" ? { padding: "15px", fontSize: "18px", borderRight: "1px solid var(--border-color)" } : { padding: "7px", borderRight: "1px solid var(--border-color)" }, G = () => {
    var r;
    switch (L) {
      case "compact":
        r = /* @__PURE__ */ e(Ce, { className: "density-icon" });
        break;
      case "comfortable":
        r = /* @__PURE__ */ e(xe, { className: "density-icon" });
        break;
      default:
        r = /* @__PURE__ */ e(be, { className: "grid-button-icon" });
        break;
    }
    return r;
  }, te = (r) => {
    const k = r.target.value;
    X(k), k ? M(k) : O({});
  }, ce = (r) => {
    v && v(r);
  }, Fe = (r) => {
    const k = parseInt(r.target.value, 10);
    z(k);
  }, we = (r) => {
    D(!N);
  }, Se = () => {
    Q(!R);
  }, Oe = () => {
    Q(!1);
  }, Re = (r) => {
    const Z = { ...K(), format: r, limit: -1 };
    t.store.export(Z), Q(!R);
  }, Ne = () => {
    t.onNewClick();
  }, ye = 200, Pe = !!t.pageSize, ke = !!g, De = {
    transform: y ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Ae = {
    transform: N ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Le = {
    transform: R ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, ve = Math.ceil(V / J.limit), de = q(), ue = J.limit, Me = de * ue + 1, Be = Math.min((de + 1) * ue, V);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { children: [
    s,
    /* @__PURE__ */ h("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: lt(t.title) }),
      /* @__PURE__ */ h("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: ke && /* @__PURE__ */ e(
          ge,
          {
            sx: { width: ye },
            type: "text",
            value: I,
            onChange: te,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Te, { position: "end", children: /* @__PURE__ */ e(Ve, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        p && /* @__PURE__ */ e(Qe, { onClickAway: () => {
          B(!1);
        }, children: /* @__PURE__ */ h("div", { className: "grid-header-button grid-density-btn", onClick: le, children: [
          /* @__PURE__ */ h(ne, { className: "grid-btn", disableRipple: !0, children: [
            G(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(Ie, { style: De, className: "avathar-arrw-icon" })
          ] }),
          y && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ h("ul", { children: [
            /* @__PURE__ */ h("li", { onClick: () => ee("standard"), children: [
              /* @__PURE__ */ e(be, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => ee("compact"), children: [
              /* @__PURE__ */ e(Ce, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => ee("comfortable"), children: [
              /* @__PURE__ */ e(xe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        a.some((r) => r.searchable) && /* @__PURE__ */ e(Qe, { onClickAway: () => {
          D(!1);
        }, children: /* @__PURE__ */ h("div", { className: "grid-header-button grid-filter-btn", onClick: we, children: [
          /* @__PURE__ */ h(ne, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ e(Xe, { className: "grid-button-icon" }),
            /* @__PURE__ */ e("span", { children: "Filter" }),
            /* @__PURE__ */ e(Ie, { style: Ae, className: "avathar-arrw-icon" })
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
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: /* @__PURE__ */ e("div", { onClick: Ne, children: /* @__PURE__ */ h(ne, { className: "grid-btn", disableRipple: !0, children: [
          t.customAddButton && t.customAddButton.icon ? Ft.cloneElement(t.customAddButton.icon, {
            className: "grid-button-icon"
          }) : /* @__PURE__ */ e(ht, { className: "grid-button-icon" }),
          t.customAddButton && t.customAddButton.text ? /* @__PURE__ */ e(ie, { children: t.customAddButton.text }) : /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(ie, {}),
        F && F.map((r, k) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: r }, k))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      mt,
      {
        columnDefs: oe,
        EmptyChild: x,
        customizer: u,
        rowData: W,
        onRowClick: ce,
        onRowStyle: o,
        onHeaderStyle: w,
        onSortColumn: T
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: Pe && ve !== 0 && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: C && C.length > 1 ? /* @__PURE__ */ e(ae, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          ze,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: C[0],
            onChange: Fe,
            label: "Rows per page",
            children: C.map((r) => /* @__PURE__ */ e(qe, { value: r, children: r }, r))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("span", { children: [
          Me,
          " - ",
          Be,
          " of ",
          V,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        Ge,
        {
          count: ve,
          shape: "rounded",
          onChange: j,
          page: q() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), wr = Y(function(t, l) {
  const { children: a, EmptyChild: s, onRowClick: c, quickSearch: v, exportOptions: g } = t, b = t.columns, p = s || ut, x = t.customizer || ft, u = t.customButton, F = t.title, [y, B] = P(!1), [N, D] = P(!1), [R, Q] = P("standard"), [L, E] = P(!1), [I, X] = P(""), {
    setQueryFilter: O,
    setQuickSearch: M,
    setSortColumns: T,
    setEndPointOptions: A,
    gotoPage: _,
    setPageSize: z,
    getPageNo: q,
    refreshData: m,
    setQueryLimit: d,
    getQueryLimit: S,
    getQueryRequest: K,
    data: W,
    totalRecords: V,
    queryLimit: J,
    pageSizeOptions: C,
    filter: n
  } = se(t), [f, j] = P(b(W)), oe = l || $(null);
  re(oe, () => ({
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
    getCurrentData: () => W
  }), [S, f]), U(() => {
    j(b(W));
  }, [W]);
  const ee = (r, k) => {
    _(k - 1);
  }, le = dt(f, x), o = (r) => {
    Q(r);
  }, w = () => {
    B(!y);
  }, G = () => R === "compact" ? {
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
  }, te = () => R === "compact" ? { padding: "3px", borderRight: "1px solid var(--border-color)" } : R === "comfortable" ? { padding: "15px", fontSize: "18px", borderRight: "1px solid var(--border-color)" } : { padding: "7px", borderRight: "1px solid var(--border-color)" }, ce = () => {
    var r;
    switch (R) {
      case "compact":
        r = /* @__PURE__ */ e(Ce, { className: "density-icon" });
        break;
      case "comfortable":
        r = /* @__PURE__ */ e(xe, { className: "density-icon" });
        break;
      default:
        r = /* @__PURE__ */ e(be, { className: "grid-button-icon" });
        break;
    }
    return r;
  }, Fe = (r) => {
    const k = r.target.value;
    X(k), k ? M(k) : O({});
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
    const Z = { ...K(), format: r, limit: -1 };
    t.store.export(Z), D(!N);
  }, ye = () => {
    t.onNewClick();
  }, Pe = 200, ke = !!t.pageSize, De = !!v, Ae = {
    transform: y ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Le = {
    transform: N ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, ve = Math.ceil(V / J.limit), de = q(), ue = J.limit, Me = de * ue + 1, Be = Math.min((de + 1) * ue, V);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { children: [
    a,
    /* @__PURE__ */ h("div", { className: "grid-header", children: [
      /* @__PURE__ */ e("div", { className: "grid-header-right-content", children: /* @__PURE__ */ e("span", { className: "grid-header-right-content-text", children: F }) }),
      /* @__PURE__ */ h("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ e("div", { className: "grid-header-filter", children: De && /* @__PURE__ */ e(
          ge,
          {
            sx: { width: Pe },
            type: "text",
            value: I,
            onChange: Fe,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Te, { position: "end", children: /* @__PURE__ */ e(Ve, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ e(Qe, { onClickAway: () => {
          B(!1);
        }, children: /* @__PURE__ */ h("div", { className: "grid-header-button grid-density-btn", onClick: w, children: [
          /* @__PURE__ */ h(ne, { className: "grid-btn", disableRipple: !0, children: [
            ce(),
            /* @__PURE__ */ e("span", { children: "Density" }),
            /* @__PURE__ */ e(Ie, { style: Ae, className: "avathar-arrw-icon" })
          ] }),
          y && /* @__PURE__ */ e("div", { className: "density-dropdown-content", children: /* @__PURE__ */ h("ul", { children: [
            /* @__PURE__ */ h("li", { onClick: () => o("standard"), children: [
              /* @__PURE__ */ e(be, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => o("compact"), children: [
              /* @__PURE__ */ e(Ce, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ h("li", { onClick: () => o("comfortable"), children: [
              /* @__PURE__ */ e(xe, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ e("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        f.some((r) => r.searchable) && /* @__PURE__ */ h("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ h(ne, { className: "grid-btn", disableRipple: !0, onClick: () => E(!0), children: [
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
        t.onNewClick ? /* @__PURE__ */ e("div", { className: "grid-header-button grid-add-btn", children: t.customAddButton ? /* @__PURE__ */ e("div", { onClick: ye, children: t.customAddButton }) : /* @__PURE__ */ e("div", { onClick: ye, children: /* @__PURE__ */ h(ne, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ e(ht, { className: "grid-button-icon" }),
          /* @__PURE__ */ e("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ e(ie, {}),
        u && u.map((r, k) => /* @__PURE__ */ e("div", { className: "grid-custom-button", children: r }, k))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid-table", children: /* @__PURE__ */ e(
      mt,
      {
        columnDefs: le,
        EmptyChild: p,
        customizer: x,
        rowData: W,
        onRowClick: we,
        onRowStyle: G,
        onHeaderStyle: te,
        onSortColumn: T
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "grid-footer", children: /* @__PURE__ */ e("div", { className: "grid-filter", children: ke && V !== null && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ e("div", { style: { width: "50%" }, children: C && C.length > 1 ? /* @__PURE__ */ e(ae, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          ze,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: C[0],
            onChange: Se,
            label: "Rows per page",
            children: C.map((r) => /* @__PURE__ */ e(qe, { value: r, children: r }, r))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("span", { children: [
          Me,
          " - ",
          Be,
          " of ",
          V,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(
        Ge,
        {
          count: ve,
          shape: "rounded",
          onChange: ee,
          page: q() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), Sr = Y(function(t, l) {
  const { columns: a, endPoint: s, storeFactory: c, layoutParams: v, pagination: g } = t, b = t.quickSearch || "", p = t.customButton, x = t.customAddButton, u = t.title, F = t.fetchAll, y = t.filterTopic, B = t.initialFetch, N = (R, Q) => {
  };
  U(() => {
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
  return /* @__PURE__ */ e(ie, { children: /* @__PURE__ */ e(He.Provider, { value: c, children: /* @__PURE__ */ e(
    Ct,
    {
      layout: D,
      context: v,
      customAddButton: x,
      onDataChange: t.onDataChange,
      title: u,
      densityOption: t.densityOption,
      defaultParams: t.defaultParams,
      customButton: p,
      customizer: t.customizer,
      ref: l,
      exportOptions: t.exportOptions,
      fetchAll: F,
      filterTopic: y,
      initialFetch: B
    }
  ) }) });
}), sn = Y(function(t, l) {
  const a = t.layout, [s, c] = P(a.fields), v = a.pagination ? a.pagination : [15], g = me(He), b = me(at);
  var p = a.storeOptions || {}, x = {};
  Gt(x, p, b);
  const u = g.getGridStore(x, a.storeOptions.endPoint);
  U(() => {
    p.hasLayout && u.queryLayout({}).then((B) => {
      c(B.columns);
    });
  }, []);
  const { onClick: F, onNewClick: y } = Xt(a.actionOptions, b);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    an,
    {
      columns: s,
      store: u,
      pageSize: v,
      onRowClick: F,
      exportOptions: t.exportOptions,
      onDataChange: t.onDataChange,
      title: t.title,
      customAddButton: t.customAddButton,
      onNewClick: y,
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
}), Ct = sn, ln = (i) => {
  const { layout: t, context: l } = i;
  var a = t.Container || ct;
  return /* @__PURE__ */ e(pt, { fallback: /* @__PURE__ */ e("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ e(a, { ...t, children: ((c) => /* @__PURE__ */ e(
    Ct,
    {
      context: l,
      layout: c
    }
  ))(t.tableLayout) }) });
}, cn = (i) => {
  const { layout: t } = i;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ e(vt, { ...i });
    case "view":
      return /* @__PURE__ */ e($t, { ...i });
    case "grid":
      return /* @__PURE__ */ e(ln, { ...i });
    case "chart":
      return /* @__PURE__ */ e(Rt, { ...i });
    default:
      return /* @__PURE__ */ e(_t, { ...i });
  }
};
function dn(i, t) {
  var l = i || 1, a = t;
  return {
    w: l,
    h: a
  };
}
const xt = (i) => {
  const { layout: t, context: l } = i, a = t.sections;
  function s(c, v, g) {
    const { w: b, h: p } = dn(c.width, c.height);
    return /* @__PURE__ */ e(wt, { sx: { width: b, height: p }, children: /* @__PURE__ */ e(
      cn,
      {
        layout: c,
        context: v
      }
    ) }, (c.name || "tab") + g);
  }
  return /* @__PURE__ */ e("div", { style: { display: "flex", flexWrap: "wrap" }, children: a.map((c, v) => s(c, l, v)) });
}, tt = Y(function(t, l) {
  const { layout: a } = t;
  re(l, () => ({
    resetFilter() {
    }
  }), []);
  const s = {}, c = a.tabs;
  return /* @__PURE__ */ e("div", { children: c.map((v, g) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    xt,
    {
      layout: v,
      context: s
    }
  ) }, v.name + g)) });
}), un = (i) => {
  switch (i) {
    case "formEdit":
      return "edit";
    case "formNew":
      return "new";
    case "formView":
      return "view";
    default:
      return "edit";
  }
}, nt = Y(function(t, l) {
  var x;
  const a = t.data || {}, { layout: s } = t;
  var { getFieldManager: c, getFormData: v, isFormValid: g } = Jt(a, (x = t.callbacks) == null ? void 0 : x.onFormValidChange, un(t.mode));
  re(l, () => ({
    getData() {
      return v();
    },
    isValid() {
      return g();
    }
  }), []);
  const b = { formData: a }, p = s.tabs;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(pe.Provider, { value: c, children: p.map((u, F) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    xt,
    {
      layout: u,
      context: b
    }
  ) }, u.name + F)) }) });
}), mn = (i) => {
  switch (i) {
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
}, Or = Y(function(t, l) {
  const [a, s] = P(t.layout), c = t.mode ? t.mode : a.type ? a.type : "grid", v = t.layoutParams || {}, g = mn(c), b = $(0);
  return U(() => {
    s(t.layout), b.current < 999999 ? b.current++ : b.current = 0;
  }, [t.layout]), /* @__PURE__ */ e(pt, { fallback: /* @__PURE__ */ e("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ e(He.Provider, { value: t.storeFactory, children: /* @__PURE__ */ e(at.Provider, { value: v, children: /* @__PURE__ */ e(g, { ...t, ref: (p) => {
    l && (l.current = p);
  } }, b.current) }) }) });
}), Rr = Y(function(t, l) {
  const { title: a, Child: s, childProps: c, pageSize: v, customButton: g } = t, b = l || $(null), {
    setQueryFilter: p,
    refreshData: x,
    setSortColumns: u,
    setEndPointOptions: F,
    setQuickSearch: y,
    gotoPage: B,
    setPageSize: N,
    getPageNo: D,
    setQueryLimit: R,
    getQueryLimit: Q,
    data: L,
    totalRecords: E,
    pageSizeOptions: I,
    queryLimit: X
  } = se(t), O = t.listKeyProvider || ((d, S) => S);
  re(b, () => ({
    setFilter: (d) => {
      p(d);
    },
    refresh: () => {
      x();
    },
    resetFilter() {
      p({});
    },
    setEndPointOptions: (d) => {
      F(d);
    },
    addFilter: (d, S) => {
      p((K) => (K[d] = S, { ...K }));
    },
    setQueryLimit: (d) => {
      R(d);
    },
    getQueryLimit: () => Q(),
    getCurrentData: () => L,
    setSortOptions(d) {
      u(d);
    }
  }), [p]);
  const M = (d, S) => {
    B(S - 1);
  }, T = (d) => {
    const S = d.target.value;
    y(S);
  }, A = (d) => {
    const S = parseInt(d.target.value, 10);
    N(S);
  }, _ = 200, z = !!v, q = !!t.quickSearch, m = Math.ceil(E / X.limit);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "card-page-container", children: /* @__PURE__ */ h("div", { children: [
    /* @__PURE__ */ h("div", { className: "card-header", children: [
      /* @__PURE__ */ e("div", { className: "card-left-content", children: lt(a) }),
      /* @__PURE__ */ h("div", { className: "card-right-content", children: [
        q && /* @__PURE__ */ e(
          ge,
          {
            sx: { width: _ },
            type: "text",
            onChange: T,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ e(Te, { position: "end", children: /* @__PURE__ */ e(Ve, { className: "card-filter-icon" }) })
            }
          }
        ),
        g && g.map((d, S) => /* @__PURE__ */ e("div", { className: "card-custom-button", children: d }, S))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      Ot,
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
      /* @__PURE__ */ e("div", { children: I && I.length > 1 ? /* @__PURE__ */ e(ae, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
          ze,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: I[0],
            onChange: A,
            label: "Rows per page",
            children: I.map((d) => /* @__PURE__ */ e(qe, { value: d, children: d }, d))
          }
        ) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ h("span", { children: [
          "of ",
          E,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ e("div", { style: {}, children: /* @__PURE__ */ e(St, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ e(
        Ge,
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
  wr as D,
  Or as F,
  Ct as G,
  Zt as M,
  Sr as P,
  Rr as S,
  xt as T,
  an as a,
  Fr as b,
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
  se as u
};
