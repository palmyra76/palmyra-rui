import "../assets/ServerCardLayout.css";
import nr from "../palmyra/mui/form/MuiDatePicker.js";
import or from "../palmyra/mui/form/MuiDateTimePicker.js";
import ar from "../palmyra/mui/form/MuiRadioGroup.js";
import ir from "../palmyra/mui/form/MuiSelect.js";
import sr from "../palmyra/mui/form/MuiTextArea.js";
import lr from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import cr from "../palmyra/mui/form/MuiCheckBox.js";
import ur from "../palmyra/mui/form/MuiSwitch.js";
import dr from "../palmyra/mui/form/MuiPassword.js";
import fr from "../palmyra/mui/form/MuiNumberField.js";
import Ge from "../palmyra/mui/form/FieldDecorator.js";
import { FieldManagerContext as xe, StoreFactoryContext as Qe, LayoutParamsContext as Dt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as i, jsxs as H, Fragment as Ee } from "react/jsx-runtime";
import pe, { useState as J, useRef as ie, useEffect as de, forwardRef as ce, useContext as we, useImperativeHandle as be, useMemo as xt } from "react";
import { FormControlLabel as at, Checkbox as it, FormControl as He, FormHelperText as Ke, Autocomplete as Et, TextField as Ne, CircularProgress as Rt, Dialog as mr, ClickAwayListener as _t, Button as Ce, Paper as pr, InputAdornment as Mt, Tooltip as _e, TablePagination as Ft, Box as hr } from "@mui/material";
import gr from "../palmyra/layout/card/CardLayout.js";
import yr from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Je, getFieldLabel as Ze } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as Te } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as De } from "../palmyra/form/FormUtil.js";
import { delay as Nt, mergeDeep as vr } from "../palmyra/utils/index.js";
import br from "../palmyra/mui/form/MuiDateRangePicker.js";
import Sr from "../palmyra/mui/form/MuiIntegerField.js";
import At from "../palmyra/layout/container/SectionContainer.js";
import Cr from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as Pr } from "../palmyra/grid/base/ColumnConverter.js";
import Or from "../palmyra/grid/base/EmptyChildTable.js";
import wr from "../palmyra/grid/base/TableX.js";
import { Close as Tr, Menu as st, DensitySmall as lt, DensityLarge as ct, FilterAlt as Dr, FileDownloadOutlined as xr, Add as Er } from "@mui/icons-material";
import { NoopCustomizer as Rr } from "../palmyra/grid/Types.js";
import { convertToField as _r } from "../palmyra/grid/base/GridFieldConverter.js";
import { a as Mr, g as Fr } from "./_commonjsHelpers.js";
import kt from "react-dom";
import { createFilterData as Nr } from "../palmyra/form/PalmyraFilterManager.js";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import { topic as ut } from "../palmyra/utils/pubsub/topic.js";
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
import { getActionPublishers as Ar } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as Lt } from "../palmyra/layout/ErrorBoundary.js";
import kr from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import Lr from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as Ir } from "./PalmyraFieldManager.js";
import { useKeyValue as $r } from "../palmyra/utils/pubsub/PubSubHelper.js";
const Re = (e) => {
  var Z, te;
  const { store: t, quickSearch: r } = e, n = e.fetchAll != !1, [o, a] = J(e.endPointOptions), [f, c] = J(null), p = ((Z = e.defaultParams) == null ? void 0 : Z.filter) || {}, g = ((te = e.defaultParams) == null ? void 0 : te.sort) || {}, [y, v] = e.filterTopic ? $r(e.filterTopic, p) : J(p), [T, x] = J({}), k = ie(e.initialFetch == !1), F = e.pageSize ? e.pageSize : 15;
  var A = F instanceof Array ? F : [F], $ = F instanceof Array ? F[0] : F;
  const [C, b] = J({ limit: $, offset: 0, total: !0 }), [S, s] = J(null), M = () => Math.round(C.offset / C.limit), E = () => C, L = (l) => {
    b((h) => ({ limit: h.limit, total: h.total, offset: l * $ }));
  }, W = (l) => {
    const h = l > 10 || l == -1 ? l : 15;
    b((u) => ({ limit: h, total: u.total, offset: u.offset }));
  }, B = () => y ? Object.keys(y).length == 0 : !1, V = (l) => {
    s((h) => (setTimeout(() => {
      e.onDataChange && e.onDataChange(S, h);
    }, 300), l));
  };
  de(() => {
    if (k.current) {
      k.current = !1;
      return;
    }
    (n || !B()) && Q();
  }, [C, y, T]);
  const Q = () => {
    const h = {
      sortOrder: T && Object.keys(T).length > 0 ? T : g,
      total: !0,
      endPointVars: o,
      ...C,
      filter: { ...y, ...p }
    };
    if (t)
      try {
        t.query(h).then((u) => {
          V(u.result), c(u.total);
        }).catch((u) => {
          var O = u.response ? u.response : u;
          console.error("error while fetching", O), R();
        });
      } catch (u) {
        console.error(u), P();
      }
    else
      console.error("Store is not provided for the Grid"), P();
  }, P = () => {
    V([]), c(0);
  }, R = () => {
    V(void 0), c(null);
  };
  return {
    setQueryFilter: (l) => {
      typeof l == "function" || l && Object.keys(l).length > 0 ? v(l) : v({});
    },
    setQuickSearch: (l) => {
      const h = r;
      v(l ? (u) => (u[h] = l, { ...u }) : (u) => (delete u[h], { ...u }));
    },
    setSortColumns: (l) => {
      x(l);
    },
    setEndPointOptions: a,
    refreshData: Q,
    gotoPage: L,
    setPageSize: W,
    getPageNo: M,
    getQueryLimit: E,
    setQueryLimit: b,
    filter: y,
    queryLimit: C,
    data: S,
    totalRecords: f,
    pageSizeOptions: A
  };
};
function dt(e) {
  return e ? Array.isArray(e) ? e : typeof e == "string" ? e.split(",") : (console.log(e), [e]) : [];
}
const ia = ce(function(t, r) {
  const n = we(xe), o = r || ie(null), a = n(t, "checkbox", o), { mutateOptions: f, setMutateOptions: c } = a, [p, g] = J(!1), y = dt(a.data), v = a.error, T = a.eventListeners, k = { store: a.store, pageSize: -1 }, { data: F } = Re(k), A = F, $ = ie(null), C = t.lookupOptions || {}, b = C.idAttribute || "id", S = C.titleAttribute || "name", s = t.showSelectedOnly && t.readonly, M = Te(b) ? (P) => De(b, P) : (P) => P[b], E = Te(S) ? (P) => De(S, P) : (P) => P[S];
  be(o, () => ({
    focus() {
      $.current.focus();
    },
    isValid() {
      return !v.status;
    },
    clear() {
      a.setData("", !0);
    },
    getValue() {
      return a.getData();
    },
    setValue(P, R = !1) {
      a.setData(P, R);
    },
    setVisible(P) {
      c((R) => ({ ...R, visible: P }));
    },
    setRequired(P) {
      c((R) => ({ ...R, required: P }));
    },
    setReadOnly(P) {
      c((R) => ({ ...R, readonly: P }));
    },
    setAttribute(P) {
      c((R) => ({ ...R, ...P }));
    },
    setOptions(P) {
    },
    getOptions() {
    }
  }), [a]);
  var L = Je(t, a.data, t.label);
  t.readonly && (L.inputProps = { readOnly: !0 });
  function W(P, R) {
    const z = dt(a.data);
    var X = z.indexOf(P);
    R ? X < 0 && z.push(P) : X >= 0 && z.splice(X, 1), T.onValueChange(z.toString());
  }
  var B = {
    onBlur: T.onBlur,
    onFocus: T.onFocus,
    onChange: (P) => {
      W(P.target.value, P.target.checked);
    }
  };
  const V = (P) => {
    const R = P.toString();
    return y.includes(R);
  }, Q = (P) => {
    const R = P.target.checked;
    g(R);
    var z = [];
    R && A.map((X) => {
      z.push(M(X));
    }), T.onValueChange(z.toString());
  };
  return /* @__PURE__ */ i("div", { className: t.className, children: f.visible && /* @__PURE__ */ H(
    Ge,
    {
      label: Ze(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ i("div", { children: t.hideSelectAll ? /* @__PURE__ */ i(Ee, {}) : /* @__PURE__ */ i(
          at,
          {
            control: /* @__PURE__ */ i(it, { onChange: Q }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ H(
          He,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: v.status,
            ...L,
            children: [
              A ? A.filter((P) => s ? V(M(P)) : !0).map((P) => /* @__PURE__ */ i(
                at,
                {
                  value: M(P),
                  control: /* @__PURE__ */ i(
                    it,
                    {
                      ...B,
                      checked: V(M(P)),
                      disabled: t.readonly
                    }
                  ),
                  label: E(P)
                },
                M(P)
              )) : /* @__PURE__ */ i("div", { children: "No options provided" }),
              /* @__PURE__ */ i(Ke, { className: "form-error-text", children: v.message })
            ]
          }
        )
      ]
    }
  ) });
}), Yr = ce(function(t, r) {
  const n = we(xe), o = r || ie(null), a = ie(null), f = ie(0), [c, p] = J([]), [g, y] = J(""), [v, T] = J(!1), x = n(t, "serverlookup", o), k = t.store || x.store, F = t.lookupOptions || {}, A = F.idAttribute || "id", $ = F.titleAttribute || "name", C = $, b = {
    store: k,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: C,
    initialFetch: !1
  }, S = Re(b), s = x.eventListeners, M = x.error, { mutateOptions: E, setMutateOptions: L } = x, W = x.data, B = v && c.length < (W ? 2 : 1), { setQueryFilter: V, setEndPointOptions: Q, setQuickSearch: P, totalRecords: R, refreshData: z } = S, X = S.data, U = Te(A) ? (d) => De(A, d) : (d) => d == null ? void 0 : d[A], Z = Te($) ? (d) => De($, d) : (d) => d == null ? void 0 : d[$];
  de(() => {
    var d = W != "" ? W : void 0;
    d && p([d]);
  }, [x.data]), de(() => {
    const d = X ? [...X] : [], w = W != "" ? W : void 0, _ = U(w), Y = Z(w);
    d && _ && Y && !O(d, _) && d.unshift(w), p(d), f.current < R && (f.current = R);
  }, [X, R]), de(() => {
    Nt(te);
  }, [g, v]);
  function te() {
    v && (g.length > 0 && g != Z(W) ? P("*" + g + "*") : X ? P(null) : z());
  }
  var l = {
    onBlur: s.onBlur,
    onFocus: s.onFocus,
    onChange: (d, w) => {
      h(w);
    },
    onInputChange: (d, w) => (y(w), !0)
  };
  const h = (d) => {
    s.onValueChange(d);
  }, u = (d) => typeof d == "object" ? Z(d) + "" : (console.log(d), "");
  function O(d, w) {
    return d.find((_) => {
      if (U(_) == w)
        return _;
    });
  }
  be(o, () => ({
    focus() {
      a.current.focus();
    },
    isValid() {
      return !M.status;
    },
    clear() {
      t.multiple ? x.setData([], !0) : x.setData(void 0, !0);
    },
    getValue() {
      return x.getData();
    },
    setValue(d, w = !1) {
      x.setData(d, w);
    },
    setVisible(d) {
      L((w) => ({ ...w, visible: d }));
    },
    setRequired(d) {
      L((w) => ({ ...w, required: d }));
    },
    setReadOnly(d) {
      L((w) => ({ ...w, readonly: d }));
    },
    setAttribute(d) {
      L((w) => ({ ...w, ...d }));
    },
    setFilter(d) {
      V(d);
    },
    resetFilter() {
      V({});
    },
    setEndPointOptions(d) {
      Q(d);
    },
    getCurrentData: () => W,
    refresh: () => {
      z();
    },
    addFilter(d, w) {
      V((_) => (_[d] = w, { ..._ }));
    },
    setDefaultFilter(d) {
    },
    setSortOptions(d) {
    }
  }), [x, V]);
  var D = Je(t, W, t.label);
  E.readonly && (D.inputProps = { readOnly: !0 });
  const N = (d, w) => d instanceof Array ? d.some((_) => U(_) == U(w)) : U(d) == U(w);
  return /* @__PURE__ */ i(
    Ge,
    {
      label: Ze(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ H(He, { fullWidth: !0, error: M.status, children: [
        /* @__PURE__ */ i(
          Et,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: t.multiple,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            isOptionEqualToValue: N,
            filterOptions: (d) => d,
            renderInput: (d) => /* @__PURE__ */ i(
              Ne,
              {
                ...d,
                inputRef: (w) => {
                  a.current = w;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                InputProps: {
                  ...d.InputProps,
                  endAdornment: /* @__PURE__ */ H(Ee, { children: [
                    B ? /* @__PURE__ */ i(Rt, { color: "inherit", size: 18 }) : null,
                    d.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: u,
            ...D,
            options: c,
            open: v,
            onClose: () => {
              T(!1);
            },
            onOpen: (d) => {
              T(!0);
            },
            ...l
          }
        ),
        /* @__PURE__ */ i(Ke, { className: "form-error-text", children: M.message })
      ] })
    }
  );
}), qr = ce(function(t, r) {
  const n = we(xe), o = r || ie(null), a = ie(null), f = ie(0), [c, p] = J([]), [g, y] = J(""), [v, T] = J(!1), x = n(t, "autoComplete", o), k = t.store || x.store, A = (t.lookupOptions || {}).attribute || "name", $ = A, C = {
    store: k,
    endPointOptions: t.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: $,
    initialFetch: !1
  }, b = Re(C), S = x.eventListeners, s = x.error, { mutateOptions: M, setMutateOptions: E } = x, L = x.data, W = v && c.length < (L ? 2 : 1), { setQueryFilter: B, setEndPointOptions: V, setQuickSearch: Q, totalRecords: P, refreshData: R } = b, z = b.data, X = Te(A) ? (u) => De(A, u) : (u) => u == null ? void 0 : u[A];
  de(() => {
    var u = L != "" ? L : void 0;
    u && p([u]);
  }, [x.data]), de(() => {
    const O = (z ? [...z] : []).map((N) => X(N)), D = L != "" ? L : void 0;
    O && D && !l(O, D) && O.unshift(D), p(O), f.current < P && (f.current = P);
  }, [z, P]), de(() => {
    Nt(U);
  }, [g, v]);
  function U() {
    v && (g.length > 0 && g != L ? Q("*" + g + "*") : z ? Q(null) : R());
  }
  var Z = {
    onBlur: S.onBlur,
    onFocus: S.onFocus,
    onChange: (u, O) => {
      te(O);
    },
    onInputChange: (u, O) => (y(O), !0)
  };
  const te = (u) => {
    S.onValueChange(u);
  };
  function l(u, O) {
    return u.find((D) => {
      if (D == O)
        return D;
    });
  }
  be(o, () => ({
    focus() {
      a.current.focus();
    },
    isValid() {
      return !s.status;
    },
    clear() {
      x.setData(void 0, !0);
    },
    getValue() {
      return x.getData();
    },
    setValue(u, O = !1) {
      x.setData(u, O);
    },
    setVisible(u) {
      E((O) => ({ ...O, visible: u }));
    },
    setRequired(u) {
      E((O) => ({ ...O, required: u }));
    },
    setReadOnly(u) {
      E((O) => ({ ...O, readonly: u }));
    },
    setAttribute(u) {
      E((O) => ({ ...O, ...u }));
    },
    setFilter(u) {
      B(u);
    },
    resetFilter() {
      B({});
    },
    setEndPointOptions(u) {
      V(u);
    },
    getCurrentData: () => L,
    refresh: () => {
      R();
    },
    addFilter(u, O) {
      B((D) => (D[u] = O, { ...D }));
    },
    setDefaultFilter(u) {
    },
    setSortOptions(u) {
    }
  }), [x, B]);
  var h = Je(t, L, t.label);
  return M.readonly && (h.inputProps = { readOnly: !0 }), /* @__PURE__ */ i(
    Ge,
    {
      label: Ze(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ H(He, { fullWidth: !0, error: s.status, children: [
        /* @__PURE__ */ i(
          Et,
          {
            freeSolo: !0,
            autoSelect: !0,
            readOnly: t.readonly,
            renderOption: t.renderOption,
            filterOptions: (u) => u,
            renderInput: (u) => /* @__PURE__ */ i(
              Ne,
              {
                ...u,
                inputRef: (O) => {
                  a.current = O;
                },
                variant: t.variant || "standard",
                label: t.label,
                autoFocus: t.autoFocus,
                required: t.required,
                InputProps: {
                  ...u.InputProps,
                  endAdornment: /* @__PURE__ */ H(Ee, { children: [
                    W ? /* @__PURE__ */ i(Rt, { color: "inherit", size: 18 }) : null,
                    u.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...h,
            options: c,
            open: v,
            onClose: () => {
              T(!1);
            },
            onOpen: (u) => {
              T(!0);
            },
            ...Z
          }
        ),
        /* @__PURE__ */ i(Ke, { className: "form-error-text", children: s.message })
      ] })
    }
  );
}), jr = (e) => {
  const { fieldDef: t } = e;
  return /* @__PURE__ */ H("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, oe = (e, t) => {
  const r = e.fieldDef;
  return /* @__PURE__ */ i(
    t,
    {
      ...r,
      label: e.title
    },
    r.title + r.attribute
  );
}, Wr = () => /* @__PURE__ */ i("div", { children: "To be Implemented" }), It = (e, t, r) => {
  const { type: n } = e, o = { fieldDef: e, title: r };
  switch (n) {
    case "string":
      return oe(o, lr);
    case "radio":
      return oe(o, ar);
    case "select":
      return oe(o, ir);
    case "date":
      return oe(o, nr);
    case "datetime":
      return oe(o, or);
    case "checkbox":
      return oe(o, cr);
    case "serverlookup":
      return oe(o, Yr);
    case "textarea":
      return oe(o, sr);
    case "switch":
      return oe(o, ur);
    case "password":
      return oe(o, dr);
    case "float":
    case "number":
    case "numbersOnly":
      return oe(o, fr);
    case "integer":
      return oe(o, Sr);
    case "multiSelect":
      return Wr();
    case "dateRange":
      return oe(o, br);
    case "autoComplete":
      return oe(o, qr);
    default:
      return jr(o);
  }
}, Vr = ce(function(t, r) {
  var y;
  const { formLayout: n, context: o } = t, { formData: a } = o, f = n.Container;
  ie({});
  const c = xt(() => (v) => It(v), [a.data]);
  var p = ((y = n.options) == null ? void 0 : y.columns) || 1, g = { columns: p };
  return f ? /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((v, T) => /* @__PURE__ */ i(
    f,
    {
      index: T,
      field: v,
      label: v.title,
      options: g,
      children: c(v)
    },
    v.attribute + v.name + v.type
  )) }) : /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((v, T) => c(v)) });
}), $t = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Renderer || Vr, o = t.Container || At;
  const a = (f) => /* @__PURE__ */ i(
    n,
    {
      context: r,
      formLayout: f
    }
  );
  return /* @__PURE__ */ i(
    o,
    {
      hideTitle: t.hideTitle,
      title: t.title,
      name: t.name,
      children: /* @__PURE__ */ i(Cr, { columns: t.columns, children: a(t.formLayout) })
    }
  );
};
var Yt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ft = pe.createContext && pe.createContext(Yt), ye = globalThis && globalThis.__assign || function() {
  return ye = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ye.apply(this, arguments);
}, zr = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function qt(e) {
  return e && e.map(function(t, r) {
    return pe.createElement(t.tag, ye({
      key: r
    }, t.attr), qt(t.child));
  });
}
function Xr(e) {
  return function(t) {
    return pe.createElement(Br, ye({
      attr: ye({}, e.attr)
    }, t), qt(e.child));
  };
}
function Br(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, a = e.title, f = zr(e, ["attr", "size", "title"]), c = o || r.size || "1em", p;
    return r.className && (p = r.className), e.className && (p = (p ? p + " " : "") + e.className), pe.createElement("svg", ye({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, f, {
      className: p,
      style: ye(ye({
        color: e.color || r.color
      }, r.style), e.style),
      height: c,
      width: c,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && pe.createElement("title", null, a), e.children);
  };
  return ft !== void 0 ? pe.createElement(ft.Consumer, null, function(r) {
    return t(r);
  }) : t(Yt);
}
function jt(e) {
  return Xr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
}
var Ae = { exports: {} }, Wt = {}, Ue = { exports: {} }, Me = { exports: {} }, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mt;
function Ur() {
  if (mt)
    return q;
  mt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, f = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, T = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, k = e ? Symbol.for("react.lazy") : 60116, F = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function b(s) {
    if (typeof s == "object" && s !== null) {
      var M = s.$$typeof;
      switch (M) {
        case t:
          switch (s = s.type, s) {
            case p:
            case g:
            case n:
            case a:
            case o:
            case v:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case c:
                case y:
                case k:
                case x:
                case f:
                  return s;
                default:
                  return M;
              }
          }
        case r:
          return M;
      }
    }
  }
  function S(s) {
    return b(s) === g;
  }
  return q.AsyncMode = p, q.ConcurrentMode = g, q.ContextConsumer = c, q.ContextProvider = f, q.Element = t, q.ForwardRef = y, q.Fragment = n, q.Lazy = k, q.Memo = x, q.Portal = r, q.Profiler = a, q.StrictMode = o, q.Suspense = v, q.isAsyncMode = function(s) {
    return S(s) || b(s) === p;
  }, q.isConcurrentMode = S, q.isContextConsumer = function(s) {
    return b(s) === c;
  }, q.isContextProvider = function(s) {
    return b(s) === f;
  }, q.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === t;
  }, q.isForwardRef = function(s) {
    return b(s) === y;
  }, q.isFragment = function(s) {
    return b(s) === n;
  }, q.isLazy = function(s) {
    return b(s) === k;
  }, q.isMemo = function(s) {
    return b(s) === x;
  }, q.isPortal = function(s) {
    return b(s) === r;
  }, q.isProfiler = function(s) {
    return b(s) === a;
  }, q.isStrictMode = function(s) {
    return b(s) === o;
  }, q.isSuspense = function(s) {
    return b(s) === v;
  }, q.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === g || s === a || s === o || s === v || s === T || typeof s == "object" && s !== null && (s.$$typeof === k || s.$$typeof === x || s.$$typeof === f || s.$$typeof === c || s.$$typeof === y || s.$$typeof === A || s.$$typeof === $ || s.$$typeof === C || s.$$typeof === F);
  }, q.typeOf = b, q;
}
var j = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function Gr() {
  return pt || (pt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, f = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, T = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, k = e ? Symbol.for("react.lazy") : 60116, F = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function b(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === n || m === g || m === a || m === o || m === v || m === T || typeof m == "object" && m !== null && (m.$$typeof === k || m.$$typeof === x || m.$$typeof === f || m.$$typeof === c || m.$$typeof === y || m.$$typeof === A || m.$$typeof === $ || m.$$typeof === C || m.$$typeof === F);
    }
    function S(m) {
      if (typeof m == "object" && m !== null) {
        var K = m.$$typeof;
        switch (K) {
          case t:
            var ve = m.type;
            switch (ve) {
              case p:
              case g:
              case n:
              case a:
              case o:
              case v:
                return ve;
              default:
                var ot = ve && ve.$$typeof;
                switch (ot) {
                  case c:
                  case y:
                  case k:
                  case x:
                  case f:
                    return ot;
                  default:
                    return K;
                }
            }
          case r:
            return K;
        }
      }
    }
    var s = p, M = g, E = c, L = f, W = t, B = y, V = n, Q = k, P = x, R = r, z = a, X = o, U = v, Z = !1;
    function te(m) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), l(m) || S(m) === p;
    }
    function l(m) {
      return S(m) === g;
    }
    function h(m) {
      return S(m) === c;
    }
    function u(m) {
      return S(m) === f;
    }
    function O(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function D(m) {
      return S(m) === y;
    }
    function N(m) {
      return S(m) === n;
    }
    function d(m) {
      return S(m) === k;
    }
    function w(m) {
      return S(m) === x;
    }
    function _(m) {
      return S(m) === r;
    }
    function Y(m) {
      return S(m) === a;
    }
    function I(m) {
      return S(m) === o;
    }
    function re(m) {
      return S(m) === v;
    }
    j.AsyncMode = s, j.ConcurrentMode = M, j.ContextConsumer = E, j.ContextProvider = L, j.Element = W, j.ForwardRef = B, j.Fragment = V, j.Lazy = Q, j.Memo = P, j.Portal = R, j.Profiler = z, j.StrictMode = X, j.Suspense = U, j.isAsyncMode = te, j.isConcurrentMode = l, j.isContextConsumer = h, j.isContextProvider = u, j.isElement = O, j.isForwardRef = D, j.isFragment = N, j.isLazy = d, j.isMemo = w, j.isPortal = _, j.isProfiler = Y, j.isStrictMode = I, j.isSuspense = re, j.isValidElementType = b, j.typeOf = S;
  }()), j;
}
var ht;
function Vt() {
  return ht || (ht = 1, process.env.NODE_ENV === "production" ? Me.exports = Ur() : Me.exports = Gr()), Me.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var $e, gt;
function Qr() {
  if (gt)
    return $e;
  gt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var f = {}, c = 0; c < 10; c++)
        f["_" + String.fromCharCode(c)] = c;
      var p = Object.getOwnPropertyNames(f).map(function(y) {
        return f[y];
      });
      if (p.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(y) {
        g[y] = y;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return $e = o() ? Object.assign : function(a, f) {
    for (var c, p = n(a), g, y = 1; y < arguments.length; y++) {
      c = Object(arguments[y]);
      for (var v in c)
        t.call(c, v) && (p[v] = c[v]);
      if (e) {
        g = e(c);
        for (var T = 0; T < g.length; T++)
          r.call(c, g[T]) && (p[g[T]] = c[g[T]]);
      }
    }
    return p;
  }, $e;
}
var Ye, yt;
function et() {
  if (yt)
    return Ye;
  yt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ye = e, Ye;
}
var qe, vt;
function zt() {
  return vt || (vt = 1, qe = Function.call.bind(Object.prototype.hasOwnProperty)), qe;
}
var je, bt;
function Hr() {
  if (bt)
    return je;
  bt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = et(), r = {}, n = zt();
    e = function(a) {
      var f = "Warning: " + a;
      typeof console < "u" && console.error(f);
      try {
        throw new Error(f);
      } catch {
      }
    };
  }
  function o(a, f, c, p, g) {
    if (process.env.NODE_ENV !== "production") {
      for (var y in a)
        if (n(a, y)) {
          var v;
          try {
            if (typeof a[y] != "function") {
              var T = Error(
                (p || "React class") + ": " + c + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw T.name = "Invariant Violation", T;
            }
            v = a[y](f, y, p, c, null, t);
          } catch (k) {
            v = k;
          }
          if (v && !(v instanceof Error) && e(
            (p || "React class") + ": type specification of " + c + " `" + y + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in r)) {
            r[v.message] = !0;
            var x = g ? g() : "";
            e(
              "Failed " + c + " type: " + v.message + (x ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, je = o, je;
}
var We, St;
function Kr() {
  if (St)
    return We;
  St = 1;
  var e = Vt(), t = Qr(), r = et(), n = zt(), o = Hr(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var p = "Warning: " + c;
    typeof console < "u" && console.error(p);
    try {
      throw new Error(p);
    } catch {
    }
  });
  function f() {
    return null;
  }
  return We = function(c, p) {
    var g = typeof Symbol == "function" && Symbol.iterator, y = "@@iterator";
    function v(l) {
      var h = l && (g && l[g] || l[y]);
      if (typeof h == "function")
        return h;
    }
    var T = "<<anonymous>>", x = {
      array: $("array"),
      bigint: $("bigint"),
      bool: $("boolean"),
      func: $("function"),
      number: $("number"),
      object: $("object"),
      string: $("string"),
      symbol: $("symbol"),
      any: C(),
      arrayOf: b,
      element: S(),
      elementType: s(),
      instanceOf: M,
      node: B(),
      objectOf: L,
      oneOf: E,
      oneOfType: W,
      shape: Q,
      exact: P
    };
    function k(l, h) {
      return l === h ? l !== 0 || 1 / l === 1 / h : l !== l && h !== h;
    }
    function F(l, h) {
      this.message = l, this.data = h && typeof h == "object" ? h : {}, this.stack = "";
    }
    F.prototype = Error.prototype;
    function A(l) {
      if (process.env.NODE_ENV !== "production")
        var h = {}, u = 0;
      function O(N, d, w, _, Y, I, re) {
        if (_ = _ || T, I = I || w, re !== r) {
          if (p) {
            var m = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw m.name = "Invariant Violation", m;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var K = _ + ":" + w;
            !h[K] && // Avoid spamming the console because they are often not actionable except for lib authors
            u < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + I + "` prop on `" + _ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), h[K] = !0, u++);
          }
        }
        return d[w] == null ? N ? d[w] === null ? new F("The " + Y + " `" + I + "` is marked as required " + ("in `" + _ + "`, but its value is `null`.")) : new F("The " + Y + " `" + I + "` is marked as required in " + ("`" + _ + "`, but its value is `undefined`.")) : null : l(d, w, _, Y, I);
      }
      var D = O.bind(null, !1);
      return D.isRequired = O.bind(null, !0), D;
    }
    function $(l) {
      function h(u, O, D, N, d, w) {
        var _ = u[O], Y = X(_);
        if (Y !== l) {
          var I = U(_);
          return new F(
            "Invalid " + N + " `" + d + "` of type " + ("`" + I + "` supplied to `" + D + "`, expected ") + ("`" + l + "`."),
            { expectedType: l }
          );
        }
        return null;
      }
      return A(h);
    }
    function C() {
      return A(f);
    }
    function b(l) {
      function h(u, O, D, N, d) {
        if (typeof l != "function")
          return new F("Property `" + d + "` of component `" + D + "` has invalid PropType notation inside arrayOf.");
        var w = u[O];
        if (!Array.isArray(w)) {
          var _ = X(w);
          return new F("Invalid " + N + " `" + d + "` of type " + ("`" + _ + "` supplied to `" + D + "`, expected an array."));
        }
        for (var Y = 0; Y < w.length; Y++) {
          var I = l(w, Y, D, N, d + "[" + Y + "]", r);
          if (I instanceof Error)
            return I;
        }
        return null;
      }
      return A(h);
    }
    function S() {
      function l(h, u, O, D, N) {
        var d = h[u];
        if (!c(d)) {
          var w = X(d);
          return new F("Invalid " + D + " `" + N + "` of type " + ("`" + w + "` supplied to `" + O + "`, expected a single ReactElement."));
        }
        return null;
      }
      return A(l);
    }
    function s() {
      function l(h, u, O, D, N) {
        var d = h[u];
        if (!e.isValidElementType(d)) {
          var w = X(d);
          return new F("Invalid " + D + " `" + N + "` of type " + ("`" + w + "` supplied to `" + O + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return A(l);
    }
    function M(l) {
      function h(u, O, D, N, d) {
        if (!(u[O] instanceof l)) {
          var w = l.name || T, _ = te(u[O]);
          return new F("Invalid " + N + " `" + d + "` of type " + ("`" + _ + "` supplied to `" + D + "`, expected ") + ("instance of `" + w + "`."));
        }
        return null;
      }
      return A(h);
    }
    function E(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), f;
      function h(u, O, D, N, d) {
        for (var w = u[O], _ = 0; _ < l.length; _++)
          if (k(w, l[_]))
            return null;
        var Y = JSON.stringify(l, function(re, m) {
          var K = U(m);
          return K === "symbol" ? String(m) : m;
        });
        return new F("Invalid " + N + " `" + d + "` of value `" + String(w) + "` " + ("supplied to `" + D + "`, expected one of " + Y + "."));
      }
      return A(h);
    }
    function L(l) {
      function h(u, O, D, N, d) {
        if (typeof l != "function")
          return new F("Property `" + d + "` of component `" + D + "` has invalid PropType notation inside objectOf.");
        var w = u[O], _ = X(w);
        if (_ !== "object")
          return new F("Invalid " + N + " `" + d + "` of type " + ("`" + _ + "` supplied to `" + D + "`, expected an object."));
        for (var Y in w)
          if (n(w, Y)) {
            var I = l(w, Y, D, N, d + "." + Y, r);
            if (I instanceof Error)
              return I;
          }
        return null;
      }
      return A(h);
    }
    function W(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), f;
      for (var h = 0; h < l.length; h++) {
        var u = l[h];
        if (typeof u != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Z(u) + " at index " + h + "."
          ), f;
      }
      function O(D, N, d, w, _) {
        for (var Y = [], I = 0; I < l.length; I++) {
          var re = l[I], m = re(D, N, d, w, _, r);
          if (m == null)
            return null;
          m.data && n(m.data, "expectedType") && Y.push(m.data.expectedType);
        }
        var K = Y.length > 0 ? ", expected one of type [" + Y.join(", ") + "]" : "";
        return new F("Invalid " + w + " `" + _ + "` supplied to " + ("`" + d + "`" + K + "."));
      }
      return A(O);
    }
    function B() {
      function l(h, u, O, D, N) {
        return R(h[u]) ? null : new F("Invalid " + D + " `" + N + "` supplied to " + ("`" + O + "`, expected a ReactNode."));
      }
      return A(l);
    }
    function V(l, h, u, O, D) {
      return new F(
        (l || "React class") + ": " + h + " type `" + u + "." + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + D + "`."
      );
    }
    function Q(l) {
      function h(u, O, D, N, d) {
        var w = u[O], _ = X(w);
        if (_ !== "object")
          return new F("Invalid " + N + " `" + d + "` of type `" + _ + "` " + ("supplied to `" + D + "`, expected `object`."));
        for (var Y in l) {
          var I = l[Y];
          if (typeof I != "function")
            return V(D, N, d, Y, U(I));
          var re = I(w, Y, D, N, d + "." + Y, r);
          if (re)
            return re;
        }
        return null;
      }
      return A(h);
    }
    function P(l) {
      function h(u, O, D, N, d) {
        var w = u[O], _ = X(w);
        if (_ !== "object")
          return new F("Invalid " + N + " `" + d + "` of type `" + _ + "` " + ("supplied to `" + D + "`, expected `object`."));
        var Y = t({}, u[O], l);
        for (var I in Y) {
          var re = l[I];
          if (n(l, I) && typeof re != "function")
            return V(D, N, d, I, U(re));
          if (!re)
            return new F(
              "Invalid " + N + " `" + d + "` key `" + I + "` supplied to `" + D + "`.\nBad object: " + JSON.stringify(u[O], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(l), null, "  ")
            );
          var m = re(w, I, D, N, d + "." + I, r);
          if (m)
            return m;
        }
        return null;
      }
      return A(h);
    }
    function R(l) {
      switch (typeof l) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !l;
        case "object":
          if (Array.isArray(l))
            return l.every(R);
          if (l === null || c(l))
            return !0;
          var h = v(l);
          if (h) {
            var u = h.call(l), O;
            if (h !== l.entries) {
              for (; !(O = u.next()).done; )
                if (!R(O.value))
                  return !1;
            } else
              for (; !(O = u.next()).done; ) {
                var D = O.value;
                if (D && !R(D[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function z(l, h) {
      return l === "symbol" ? !0 : h ? h["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && h instanceof Symbol : !1;
    }
    function X(l) {
      var h = typeof l;
      return Array.isArray(l) ? "array" : l instanceof RegExp ? "object" : z(h, l) ? "symbol" : h;
    }
    function U(l) {
      if (typeof l > "u" || l === null)
        return "" + l;
      var h = X(l);
      if (h === "object") {
        if (l instanceof Date)
          return "date";
        if (l instanceof RegExp)
          return "regexp";
      }
      return h;
    }
    function Z(l) {
      var h = U(l);
      switch (h) {
        case "array":
        case "object":
          return "an " + h;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + h;
        default:
          return h;
      }
    }
    function te(l) {
      return !l.constructor || !l.constructor.name ? T : l.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, We;
}
var Ve, Ct;
function Jr() {
  if (Ct)
    return Ve;
  Ct = 1;
  var e = et();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ve = function() {
    function n(f, c, p, g, y, v) {
      if (v !== e) {
        var T = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw T.name = "Invariant Violation", T;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Ve;
}
if (process.env.NODE_ENV !== "production") {
  var Zr = Vt(), en = !0;
  Ue.exports = Kr()(Zr.isElement, en);
} else
  Ue.exports = Jr()();
var Xt = Ue.exports;
function Bt(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Bt(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Pt() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Bt(e)) && (n && (n += " "), n += t);
  return n;
}
const tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Pt,
  default: Pt
}, Symbol.toStringTag, { value: "Module" })), rn = /* @__PURE__ */ Mr(tn);
var G = {}, fe = {};
Object.defineProperty(fe, "__esModule", {
  value: !0
});
fe.dontSetMe = ln;
fe.findInArray = nn;
fe.int = sn;
fe.isFunction = on;
fe.isNum = an;
function nn(e, t) {
  for (let r = 0, n = e.length; r < n; r++)
    if (t.apply(t, [e[r], r, e]))
      return e[r];
}
function on(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function an(e) {
  return typeof e == "number" && !isNaN(e);
}
function sn(e) {
  return parseInt(e, 10);
}
function ln(e, t, r) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var Se = {};
Object.defineProperty(Se, "__esModule", {
  value: !0
});
Se.browserPrefixToKey = Gt;
Se.browserPrefixToStyle = cn;
Se.default = void 0;
Se.getPrefix = Ut;
const ze = ["Moz", "Webkit", "O", "ms"];
function Ut() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const r = (e = window.document) === null || e === void 0 || (e = e.documentElement) === null || e === void 0 ? void 0 : e.style;
  if (!r || t in r)
    return "";
  for (let n = 0; n < ze.length; n++)
    if (Gt(t, ze[n]) in r)
      return ze[n];
  return "";
}
function Gt(e, t) {
  return t ? "".concat(t).concat(un(e)) : e;
}
function cn(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function un(e) {
  let t = "", r = !0;
  for (let n = 0; n < e.length; n++)
    r ? (t += e[n].toUpperCase(), r = !1) : e[n] === "-" ? r = !0 : t += e[n];
  return t;
}
Se.default = Ut();
Object.defineProperty(G, "__esModule", {
  value: !0
});
G.addClassName = Kt;
G.addEvent = mn;
G.addUserSelectStyles = wn;
G.createCSSTransform = Sn;
G.createSVGTransform = Cn;
G.getTouch = Pn;
G.getTouchIdentifier = On;
G.getTranslation = tt;
G.innerHeight = yn;
G.innerWidth = vn;
G.matchesSelector = Ht;
G.matchesSelectorAndParentsTo = fn;
G.offsetXYFromParent = bn;
G.outerHeight = hn;
G.outerWidth = gn;
G.removeClassName = Jt;
G.removeEvent = pn;
G.removeUserSelectStyles = Tn;
var le = fe, Ot = dn(Se);
function Qt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Qt = function(n) {
    return n ? r : t;
  })(e);
}
function dn(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Qt(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var f = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      f && (f.get || f.set) ? Object.defineProperty(n, a, f) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
let Fe = "";
function Ht(e, t) {
  return Fe || (Fe = (0, le.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, le.isFunction)(e[r]);
  })), (0, le.isFunction)(e[Fe]) ? e[Fe](t) : !1;
}
function fn(e, t, r) {
  let n = e;
  do {
    if (Ht(n, t))
      return !0;
    if (n === r)
      return !1;
    n = n.parentNode;
  } while (n);
  return !1;
}
function mn(e, t, r, n) {
  if (!e)
    return;
  const o = {
    capture: !0,
    ...n
  };
  e.addEventListener ? e.addEventListener(t, r, o) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r;
}
function pn(e, t, r, n) {
  if (!e)
    return;
  const o = {
    capture: !0,
    ...n
  };
  e.removeEventListener ? e.removeEventListener(t, r, o) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
}
function hn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, le.int)(r.borderTopWidth), t += (0, le.int)(r.borderBottomWidth), t;
}
function gn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, le.int)(r.borderLeftWidth), t += (0, le.int)(r.borderRightWidth), t;
}
function yn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, le.int)(r.paddingTop), t -= (0, le.int)(r.paddingBottom), t;
}
function vn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, le.int)(r.paddingLeft), t -= (0, le.int)(r.paddingRight), t;
}
function bn(e, t, r) {
  const o = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), a = (e.clientX + t.scrollLeft - o.left) / r, f = (e.clientY + t.scrollTop - o.top) / r;
  return {
    x: a,
    y: f
  };
}
function Sn(e, t) {
  const r = tt(e, t, "px");
  return {
    [(0, Ot.browserPrefixToKey)("transform", Ot.default)]: r
  };
}
function Cn(e, t) {
  return tt(e, t, "");
}
function tt(e, t, r) {
  let {
    x: n,
    y: o
  } = e, a = "translate(".concat(n).concat(r, ",").concat(o).concat(r, ")");
  if (t) {
    const f = "".concat(typeof t.x == "string" ? t.x : t.x + r), c = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    a = "translate(".concat(f, ", ").concat(c, ")") + a;
  }
  return a;
}
function Pn(e, t) {
  return e.targetTouches && (0, le.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, le.findInArray)(e.changedTouches, (r) => t === r.identifier);
}
function On(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function wn(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && Kt(e.body, "react-draggable-transparent-selection");
}
function Tn(e) {
  if (e)
    try {
      if (e.body && Jt(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        const t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function Kt(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function Jt(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var me = {};
Object.defineProperty(me, "__esModule", {
  value: !0
});
me.canDragX = En;
me.canDragY = Rn;
me.createCoreData = Mn;
me.createDraggableData = Fn;
me.getBoundPosition = Dn;
me.getControlPosition = _n;
me.snapToGrid = xn;
var se = fe, Pe = G;
function Dn(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : Nn(n);
  const o = rt(e);
  if (typeof n == "string") {
    const {
      ownerDocument: a
    } = o, f = a.defaultView;
    let c;
    if (n === "parent" ? c = o.parentNode : c = a.querySelector(n), !(c instanceof f.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const p = c, g = f.getComputedStyle(o), y = f.getComputedStyle(p);
    n = {
      left: -o.offsetLeft + (0, se.int)(y.paddingLeft) + (0, se.int)(g.marginLeft),
      top: -o.offsetTop + (0, se.int)(y.paddingTop) + (0, se.int)(g.marginTop),
      right: (0, Pe.innerWidth)(p) - (0, Pe.outerWidth)(o) - o.offsetLeft + (0, se.int)(y.paddingRight) - (0, se.int)(g.marginRight),
      bottom: (0, Pe.innerHeight)(p) - (0, Pe.outerHeight)(o) - o.offsetTop + (0, se.int)(y.paddingBottom) - (0, se.int)(g.marginBottom)
    };
  }
  return (0, se.isNum)(n.right) && (t = Math.min(t, n.right)), (0, se.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, se.isNum)(n.left) && (t = Math.max(t, n.left)), (0, se.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function xn(e, t, r) {
  const n = Math.round(t / e[0]) * e[0], o = Math.round(r / e[1]) * e[1];
  return [n, o];
}
function En(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function Rn(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function _n(e, t, r) {
  const n = typeof t == "number" ? (0, Pe.getTouch)(e, t) : null;
  if (typeof t == "number" && !n)
    return null;
  const o = rt(r), a = r.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, Pe.offsetXYFromParent)(n || e, a, r.props.scale);
}
function Mn(e, t, r) {
  const n = !(0, se.isNum)(e.lastX), o = rt(e);
  return n ? {
    node: o,
    deltaX: 0,
    deltaY: 0,
    lastX: t,
    lastY: r,
    x: t,
    y: r
  } : {
    node: o,
    deltaX: t - e.lastX,
    deltaY: r - e.lastY,
    lastX: e.lastX,
    lastY: e.lastY,
    x: t,
    y: r
  };
}
function Fn(e, t) {
  const r = e.props.scale;
  return {
    node: t.node,
    x: e.state.x + t.deltaX / r,
    y: e.state.y + t.deltaY / r,
    deltaX: t.deltaX / r,
    deltaY: t.deltaY / r,
    lastX: e.state.x,
    lastY: e.state.y
  };
}
function Nn(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function rt(e) {
  const t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var ke = {}, Le = {};
Object.defineProperty(Le, "__esModule", {
  value: !0
});
Le.default = An;
function An() {
}
Object.defineProperty(ke, "__esModule", {
  value: !0
});
ke.default = void 0;
var Xe = Ln(pe), ae = nt(Xt), kn = nt(kt), ee = G, he = me, Be = fe, Oe = nt(Le);
function nt(e) {
  return e && e.__esModule ? e : { default: e };
}
function Zt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Zt = function(n) {
    return n ? r : t;
  })(e);
}
function Ln(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Zt(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var f = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      f && (f.get || f.set) ? Object.defineProperty(n, a, f) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
function ne(e, t, r) {
  return t = In(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function In(e) {
  var t = $n(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function $n(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
const ue = {
  touch: {
    start: "touchstart",
    move: "touchmove",
    stop: "touchend"
  },
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  }
};
let ge = ue.mouse, Ie = class extends Xe.Component {
  constructor() {
    super(...arguments), ne(this, "dragging", !1), ne(this, "lastX", NaN), ne(this, "lastY", NaN), ne(this, "touchIdentifier", null), ne(this, "mounted", !1), ne(this, "handleDragStart", (t) => {
      if (this.props.onMouseDown(t), !this.props.allowAnyClick && typeof t.button == "number" && t.button !== 0)
        return !1;
      const r = this.findDOMNode();
      if (!r || !r.ownerDocument || !r.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      const {
        ownerDocument: n
      } = r;
      if (this.props.disabled || !(t.target instanceof n.defaultView.Node) || this.props.handle && !(0, ee.matchesSelectorAndParentsTo)(t.target, this.props.handle, r) || this.props.cancel && (0, ee.matchesSelectorAndParentsTo)(t.target, this.props.cancel, r))
        return;
      t.type === "touchstart" && t.preventDefault();
      const o = (0, ee.getTouchIdentifier)(t);
      this.touchIdentifier = o;
      const a = (0, he.getControlPosition)(t, o, this);
      if (a == null)
        return;
      const {
        x: f,
        y: c
      } = a, p = (0, he.createCoreData)(this, f, c);
      (0, Oe.default)("DraggableCore: handleDragStart: %j", p), (0, Oe.default)("calling", this.props.onStart), !(this.props.onStart(t, p) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, ee.addUserSelectStyles)(n), this.dragging = !0, this.lastX = f, this.lastY = c, (0, ee.addEvent)(n, ge.move, this.handleDrag), (0, ee.addEvent)(n, ge.stop, this.handleDragStop));
    }), ne(this, "handleDrag", (t) => {
      const r = (0, he.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let c = n - this.lastX, p = o - this.lastY;
        if ([c, p] = (0, he.snapToGrid)(this.props.grid, c, p), !c && !p)
          return;
        n = this.lastX + c, o = this.lastY + p;
      }
      const a = (0, he.createCoreData)(this, n, o);
      if ((0, Oe.default)("DraggableCore: handleDrag: %j", a), this.props.onDrag(t, a) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const p = document.createEvent("MouseEvents");
          p.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(p);
        }
        return;
      }
      this.lastX = n, this.lastY = o;
    }), ne(this, "handleDragStop", (t) => {
      if (!this.dragging)
        return;
      const r = (0, he.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let p = n - this.lastX || 0, g = o - this.lastY || 0;
        [p, g] = (0, he.snapToGrid)(this.props.grid, p, g), n = this.lastX + p, o = this.lastY + g;
      }
      const a = (0, he.createCoreData)(this, n, o);
      if (this.props.onStop(t, a) === !1 || this.mounted === !1)
        return !1;
      const c = this.findDOMNode();
      c && this.props.enableUserSelectHack && (0, ee.removeUserSelectStyles)(c.ownerDocument), (0, Oe.default)("DraggableCore: handleDragStop: %j", a), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, c && ((0, Oe.default)("DraggableCore: Removing handlers"), (0, ee.removeEvent)(c.ownerDocument, ge.move, this.handleDrag), (0, ee.removeEvent)(c.ownerDocument, ge.stop, this.handleDragStop));
    }), ne(this, "onMouseDown", (t) => (ge = ue.mouse, this.handleDragStart(t))), ne(this, "onMouseUp", (t) => (ge = ue.mouse, this.handleDragStop(t))), ne(this, "onTouchStart", (t) => (ge = ue.touch, this.handleDragStart(t))), ne(this, "onTouchEnd", (t) => (ge = ue.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = !0;
    const t = this.findDOMNode();
    t && (0, ee.addEvent)(t, ue.touch.start, this.onTouchStart, {
      passive: !1
    });
  }
  componentWillUnmount() {
    this.mounted = !1;
    const t = this.findDOMNode();
    if (t) {
      const {
        ownerDocument: r
      } = t;
      (0, ee.removeEvent)(r, ue.mouse.move, this.handleDrag), (0, ee.removeEvent)(r, ue.touch.move, this.handleDrag), (0, ee.removeEvent)(r, ue.mouse.stop, this.handleDragStop), (0, ee.removeEvent)(r, ue.touch.stop, this.handleDragStop), (0, ee.removeEvent)(t, ue.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, ee.removeUserSelectStyles)(r);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var t, r;
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (r = this.props) === null || r === void 0 || (r = r.nodeRef) === null || r === void 0 ? void 0 : r.current : kn.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ Xe.cloneElement(Xe.Children.only(this.props.children), {
      // Note: mouseMove handler is attached to document so it will still function
      // when the user drags quickly and leaves the bounds of the element.
      onMouseDown: this.onMouseDown,
      onMouseUp: this.onMouseUp,
      // onTouchStart is added on `componentDidMount` so they can be added with
      // {passive: false}, which allows it to cancel. See
      // https://developers.google.com/web/updates/2017/01/scrolling-intervention
      onTouchEnd: this.onTouchEnd
    });
  }
};
ke.default = Ie;
ne(Ie, "displayName", "DraggableCore");
ne(Ie, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: ae.default.bool,
  children: ae.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: ae.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: ae.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(e, t) {
    if (e[t] && e[t].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: ae.default.arrayOf(ae.default.number),
  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: ae.default.string,
  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: ae.default.string,
  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: ae.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: ae.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: ae.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: ae.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: ae.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: ae.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: Be.dontSetMe,
  style: Be.dontSetMe,
  transform: Be.dontSetMe
});
ne(Ie, "defaultProps", {
  allowAnyClick: !1,
  // by default only accept left click
  disabled: !1,
  enableUserSelectHack: !0,
  onStart: function() {
  },
  onDrag: function() {
  },
  onStop: function() {
  },
  onMouseDown: function() {
  },
  scale: 1
});
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return p.default;
    }
  }), e.default = void 0;
  var t = T(pe), r = y(Xt), n = y(kt), o = y(rn), a = G, f = me, c = fe, p = y(ke), g = y(Le);
  function y(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function v(C) {
    if (typeof WeakMap != "function")
      return null;
    var b = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap();
    return (v = function(s) {
      return s ? S : b;
    })(C);
  }
  function T(C, b) {
    if (!b && C && C.__esModule)
      return C;
    if (C === null || typeof C != "object" && typeof C != "function")
      return { default: C };
    var S = v(b);
    if (S && S.has(C))
      return S.get(C);
    var s = {}, M = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var E in C)
      if (E !== "default" && Object.prototype.hasOwnProperty.call(C, E)) {
        var L = M ? Object.getOwnPropertyDescriptor(C, E) : null;
        L && (L.get || L.set) ? Object.defineProperty(s, E, L) : s[E] = C[E];
      }
    return s.default = C, S && S.set(C, s), s;
  }
  function x() {
    return x = Object.assign ? Object.assign.bind() : function(C) {
      for (var b = 1; b < arguments.length; b++) {
        var S = arguments[b];
        for (var s in S)
          Object.prototype.hasOwnProperty.call(S, s) && (C[s] = S[s]);
      }
      return C;
    }, x.apply(this, arguments);
  }
  function k(C, b, S) {
    return b = F(b), b in C ? Object.defineProperty(C, b, { value: S, enumerable: !0, configurable: !0, writable: !0 }) : C[b] = S, C;
  }
  function F(C) {
    var b = A(C, "string");
    return typeof b == "symbol" ? b : String(b);
  }
  function A(C, b) {
    if (typeof C != "object" || C === null)
      return C;
    var S = C[Symbol.toPrimitive];
    if (S !== void 0) {
      var s = S.call(C, b || "default");
      if (typeof s != "object")
        return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (b === "string" ? String : Number)(C);
  }
  class $ extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(b, S) {
      let {
        position: s
      } = b, {
        prevPropsPosition: M
      } = S;
      return s && (!M || s.x !== M.x || s.y !== M.y) ? ((0, g.default)("Draggable: getDerivedStateFromProps %j", {
        position: s,
        prevPropsPosition: M
      }), {
        x: s.x,
        y: s.y,
        prevPropsPosition: {
          ...s
        }
      }) : null;
    }
    constructor(b) {
      super(b), k(this, "onDragStart", (S, s) => {
        if ((0, g.default)("Draggable: onDragStart: %j", s), this.props.onStart(S, (0, f.createDraggableData)(this, s)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), k(this, "onDrag", (S, s) => {
        if (!this.state.dragging)
          return !1;
        (0, g.default)("Draggable: onDrag: %j", s);
        const M = (0, f.createDraggableData)(this, s), E = {
          x: M.x,
          y: M.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: W,
            y: B
          } = E;
          E.x += this.state.slackX, E.y += this.state.slackY;
          const [V, Q] = (0, f.getBoundPosition)(this, E.x, E.y);
          E.x = V, E.y = Q, E.slackX = this.state.slackX + (W - E.x), E.slackY = this.state.slackY + (B - E.y), M.x = E.x, M.y = E.y, M.deltaX = E.x - this.state.x, M.deltaY = E.y - this.state.y;
        }
        if (this.props.onDrag(S, M) === !1)
          return !1;
        this.setState(E);
      }), k(this, "onDragStop", (S, s) => {
        if (!this.state.dragging || this.props.onStop(S, (0, f.createDraggableData)(this, s)) === !1)
          return !1;
        (0, g.default)("Draggable: onDragStop: %j", s);
        const E = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: W,
            y: B
          } = this.props.position;
          E.x = W, E.y = B;
        }
        this.setState(E);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: b.position ? b.position.x : b.defaultPosition.x,
        y: b.position ? b.position.y : b.defaultPosition.y,
        prevPropsPosition: {
          ...b.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, b.position && !(b.onDrag || b.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    componentDidMount() {
      typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
        isElementSVG: !0
      });
    }
    componentWillUnmount() {
      this.setState({
        dragging: !1
      });
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
    findDOMNode() {
      var b, S;
      return (b = (S = this.props) === null || S === void 0 || (S = S.nodeRef) === null || S === void 0 ? void 0 : S.current) !== null && b !== void 0 ? b : n.default.findDOMNode(this);
    }
    render() {
      const {
        axis: b,
        bounds: S,
        children: s,
        defaultPosition: M,
        defaultClassName: E,
        defaultClassNameDragging: L,
        defaultClassNameDragged: W,
        position: B,
        positionOffset: V,
        scale: Q,
        ...P
      } = this.props;
      let R = {}, z = null;
      const U = !!!B || this.state.dragging, Z = B || M, te = {
        // Set left if horizontal drag is enabled
        x: (0, f.canDragX)(this) && U ? this.state.x : Z.x,
        // Set top if vertical drag is enabled
        y: (0, f.canDragY)(this) && U ? this.state.y : Z.y
      };
      this.state.isElementSVG ? z = (0, a.createSVGTransform)(te, V) : R = (0, a.createCSSTransform)(te, V);
      const l = (0, o.default)(s.props.className || "", E, {
        [L]: this.state.dragging,
        [W]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(p.default, x({}, P, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(s), {
        className: l,
        style: {
          ...s.props.style,
          ...R
        },
        transform: z
      }));
    }
  }
  e.default = $, k($, "displayName", "Draggable"), k($, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ...p.default.propTypes,
    /**
     * `axis` determines which axis the draggable can move.
     *
     *  Note that all callbacks will still return data as normal. This only
     *  controls flushing to the DOM.
     *
     * 'both' allows movement horizontally and vertically.
     * 'x' limits movement to horizontal axis.
     * 'y' limits movement to vertical axis.
     * 'none' limits all movement.
     *
     * Defaults to 'both'.
     */
    axis: r.default.oneOf(["both", "x", "y", "none"]),
    /**
     * `bounds` determines the range of movement available to the element.
     * Available values are:
     *
     * 'parent' restricts movement within the Draggable's parent node.
     *
     * Alternatively, pass an object with the following properties, all of which are optional:
     *
     * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
     *
     * All values are in px.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable bounds={{right: 300, bottom: 300}}>
     *              <div>Content</div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    bounds: r.default.oneOfType([r.default.shape({
      left: r.default.number,
      right: r.default.number,
      top: r.default.number,
      bottom: r.default.number
    }), r.default.string, r.default.oneOf([!1])]),
    defaultClassName: r.default.string,
    defaultClassNameDragging: r.default.string,
    defaultClassNameDragged: r.default.string,
    /**
     * `defaultPosition` specifies the x and y that the dragged item should start at
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable defaultPosition={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    defaultPosition: r.default.shape({
      x: r.default.number,
      y: r.default.number
    }),
    positionOffset: r.default.shape({
      x: r.default.oneOfType([r.default.number, r.default.string]),
      y: r.default.oneOfType([r.default.number, r.default.string])
    }),
    /**
     * `position`, if present, defines the current position of the element.
     *
     *  This is similar to how form elements in React work - if no `position` is supplied, the component
     *  is uncontrolled.
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable position={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    position: r.default.shape({
      x: r.default.number,
      y: r.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: c.dontSetMe,
    style: c.dontSetMe,
    transform: c.dontSetMe
  }), k($, "defaultProps", {
    ...p.default.defaultProps,
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: {
      x: 0,
      y: 0
    },
    scale: 1
  });
})(Wt);
const {
  default: er,
  DraggableCore: Yn
} = Wt;
Ae.exports = er;
Ae.exports.default = er;
Ae.exports.DraggableCore = Yn;
var qn = Ae.exports;
const jn = /* @__PURE__ */ Fr(qn);
const Wn = (e) => {
  const { formLayout: t } = e;
  var r = "palmyra-form-field-container";
  const n = t.options;
  if (n && n.columns)
    switch (n.columns) {
      case 2:
        return r + " palmyra-form-field-container-2column";
      case 3:
        return r + " palmyra-form-field-container-3column";
      case 4:
        return r + " palmyra-form-field-container-4column";
    }
  return r;
}, Vn = ce(function(t, r) {
  const { formLayout: n, context: o } = t, { formData: a } = o, f = ie({}), c = Wn(t), p = "palmyra-form-field-data", g = xt(() => (y) => It(y, f, y.label), [a.data]);
  return /* @__PURE__ */ i("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: n.fields.map((y, v) => /* @__PURE__ */ i("div", { className: c, children: /* @__PURE__ */ i("div", { className: p, children: g(y) }) }, y.attribute)) });
});
function zn(e) {
  return /* @__PURE__ */ i(
    jn,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ i(pr, { ...e })
    }
  );
}
const Xn = ({ columns: e, isOpen: t, onClose: r, setFilter: n, defaultFilter: o = {} }) => {
  var { getFieldManager: a, getFilterData: f } = Nr(o);
  const c = () => {
    n({});
  }, p = () => {
    var T = f();
    n && n(T);
  }, g = () => {
    r();
  }, y = (T) => {
    T.keyCode === 27 && g();
  }, v = _r(e);
  return /* @__PURE__ */ i("div", { className: "grid-filter-container", children: /* @__PURE__ */ i(
    mr,
    {
      open: t,
      onClose: g,
      PaperComponent: zn,
      onKeyDown: y,
      PaperProps: { sx: { minWidth: "500px" } },
      children: /* @__PURE__ */ i(_t, { onClickAway: r, children: /* @__PURE__ */ H("div", { children: [
        /* @__PURE__ */ H("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ i("div", { className: "grid-header-text-container", children: /* @__PURE__ */ i("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ i("div", { className: "grid-header-icon-container", onClick: g, children: /* @__PURE__ */ i(Tr, { className: "filter-cancel-icon" }) })
        ] }),
        /* @__PURE__ */ i("span", { className: "filter-header-border" }),
        /* @__PURE__ */ i("div", { className: "grid-filter-content", children: /* @__PURE__ */ i(xe.Provider, { value: a, children: /* @__PURE__ */ i(
          $t,
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
              Renderer: Vn
            }
          }
        ) }) }),
        /* @__PURE__ */ H("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ i(Ce, { className: "filter-reset-btn", disableRipple: !0, onClick: c, children: "Reset" }),
          /* @__PURE__ */ i(Ce, { className: "filter-button", disableRipple: !0, onClick: p, children: "Filter" })
        ] })
      ] }) })
    }
  ) });
}, Bn = ce(function(t, r) {
  const { columns: n, children: o, EmptyChild: a, onRowClick: f, quickSearch: c } = t, p = a || Or, g = t.customizer || Rr, [y, v] = J(!1), [T, x] = J("standard"), [k, F] = J(!1), [A, $] = J(""), {
    setQueryFilter: C,
    setQuickSearch: b,
    setSortColumns: S,
    setEndPointOptions: s,
    gotoPage: M,
    setPageSize: E,
    getPageNo: L,
    refreshData: W,
    setQueryLimit: B,
    getQueryLimit: V,
    data: Q,
    totalRecords: P,
    queryLimit: R,
    pageSizeOptions: z,
    filter: X
  } = Re(t), U = r || ie(null);
  be(U, () => ({
    setFilter: (m) => {
      C(m);
    },
    refresh: () => {
      W();
    },
    resetFilter() {
      C({});
    },
    setEndPointOptions: (m) => {
      s(m);
    },
    addFilter: (m, K) => {
      C((ve) => (ve[m] = K, { ...ve }));
    },
    setQueryLimit: (m) => {
      B(m);
    },
    getQueryLimit: () => V(),
    setSortOptions(m) {
      S(m);
    },
    getCurrentData: () => Q
  }), [V]);
  const Z = (m, K) => {
    M(K);
  }, te = Pr(n, g), l = (m) => {
    x(m);
  }, h = () => {
    v(!y);
  }, u = () => T === "compact" ? { padding: "3px" } : T === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, O = () => T === "compact" ? { padding: "3px" } : T === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, D = () => {
    var m;
    switch (T) {
      case "compact":
        m = /* @__PURE__ */ i(lt, { className: "density-icon" });
        break;
      case "comfortable":
        m = /* @__PURE__ */ i(ct, { className: "density-icon" });
        break;
      default:
        m = /* @__PURE__ */ i(st, { className: "grid-button-icon" });
        break;
    }
    return m;
  }, N = (m) => {
    const K = m.target.value;
    $(K), K ? b(K) : C({});
  }, d = (m) => {
    f && f(m);
  }, w = (m) => {
    const K = parseInt(m.target.value, 10);
    E(K);
  }, _ = () => {
    console.info("Export Clicked");
  }, Y = 200, I = !!t.pageSize;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ H("div", { children: [
    o,
    /* @__PURE__ */ H("div", { className: "grid-header", children: [
      /* @__PURE__ */ i("div", { className: "grid-header-filter", children: !!c && /* @__PURE__ */ i(
        Ne,
        {
          sx: { width: Y },
          type: "text",
          value: A,
          onChange: N,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ i(Mt, { position: "end", children: /* @__PURE__ */ i(jt, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ i(_t, { onClickAway: () => {
        v(!1);
      }, children: /* @__PURE__ */ H("div", { className: "grid-header-button grid-density-btn", onClick: h, children: [
        /* @__PURE__ */ i(_e, { title: "Density", placement: "top", children: /* @__PURE__ */ i(Ce, { className: "grid-btn", disableRipple: !0, children: D() }) }),
        y && /* @__PURE__ */ i("div", { className: "density-dropdown-content", children: /* @__PURE__ */ H("ul", { children: [
          /* @__PURE__ */ H("li", { onClick: () => l("standard"), children: [
            /* @__PURE__ */ i(st, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ H("li", { onClick: () => l("compact"), children: [
            /* @__PURE__ */ i(lt, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ H("li", { onClick: () => l("comfortable"), children: [
            /* @__PURE__ */ i(ct, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      n.some((m) => m.searchable) && /* @__PURE__ */ H("div", { className: "grid-header-button grid-filter-btn", children: [
        /* @__PURE__ */ i(_e, { title: "Filter", placement: "top", children: /* @__PURE__ */ i(Ce, { className: "grid-btn", disableRipple: !0, onClick: () => F(!0), children: /* @__PURE__ */ i(Dr, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ i(
          Xn,
          {
            columns: n,
            setFilter: C,
            defaultFilter: X,
            isOpen: k,
            onClose: () => F(!1)
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "grid-header-button grid-export-btn", onClick: _, children: /* @__PURE__ */ i(_e, { title: "Export", placement: "top", children: /* @__PURE__ */ i(Ce, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(xr, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ i(_e, { title: "New", placement: "top", children: /* @__PURE__ */ i(Ce, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Er, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ i(Ee, {})
    ] }),
    /* @__PURE__ */ i("div", { className: "grid-table", children: /* @__PURE__ */ i(
      wr,
      {
        columnDefs: te,
        EmptyChild: p,
        rowData: Q,
        onRowClick: d,
        onRowStyle: u,
        onHeaderStyle: O,
        onSortColumn: S
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "grid-header", children: /* @__PURE__ */ i("div", { className: "grid-filter", children: I && /* @__PURE__ */ i(
      Ft,
      {
        component: "div",
        count: P || 0,
        page: L(),
        onPageChange: Z,
        rowsPerPage: R.limit,
        rowsPerPageOptions: z || [],
        onRowsPerPageChange: w
      }
    ) }) })
  ] }) });
}), la = ce(function(t, r) {
  const { columns: n, endPoint: o, storeFactory: a, layoutParams: f, pagination: c } = t, p = t.quickSearch || "", g = (v, T) => {
  };
  de(() => {
    var v = ut.subscribe(t.topic, g);
    return () => {
      ut.unsubscribe(v);
    };
  }, [t.topic]);
  const y = {
    fields: n,
    pagination: c,
    quickSearch: p,
    storeOptions: {
      endPoint: o
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ i(Ee, { children: /* @__PURE__ */ i(Qe.Provider, { value: a, children: /* @__PURE__ */ i(
    tr,
    {
      layout: y,
      context: f,
      defaultParams: t.defaultParams,
      customizer: t.customizer,
      ref: r
    }
  ) }) });
}), Un = ce(function(t, r) {
  const n = t.layout, [o, a] = J(n.fields), f = n.pagination ? n.pagination : [15], c = we(Qe), p = we(Dt);
  var g = n.storeOptions || {}, y = {};
  vr(y, g, p);
  const v = c.getGridStore(y, n.storeOptions.endPoint);
  de(() => {
    g.hasLayout && v.queryLayout({}).then((k) => {
      a(k.columns);
    });
  }, []);
  const { onClick: T, onNewClick: x } = Ar(n.actionOptions, p);
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    Bn,
    {
      columns: o,
      store: v,
      pageSize: f,
      onRowClick: T,
      onNewClick: x,
      customizer: t.customizer,
      quickSearch: n.quickSearch,
      ref: r,
      defaultParams: t.defaultParams
    }
  ) });
}), tr = Un, Gn = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Container || At;
  return /* @__PURE__ */ i(Lt, { fallback: /* @__PURE__ */ i("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ i(n, { ...t, children: ((a) => /* @__PURE__ */ i(
    tr,
    {
      context: r,
      layout: a
    }
  ))(t.tableLayout) }) });
}, Qn = (e) => {
  const { layout: t } = e;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ i($t, { ...e });
    case "view":
      return /* @__PURE__ */ i(Lr, { ...e });
    case "grid":
      return /* @__PURE__ */ i(Gn, { ...e });
    case "chart":
      return /* @__PURE__ */ i(yr, { ...e });
    default:
      return /* @__PURE__ */ i(kr, { ...e });
  }
};
function Hn(e, t) {
  var r = e || 1, n = t;
  return {
    w: r,
    h: n
  };
}
const rr = (e) => {
  const { layout: t, context: r } = e, n = t.sections;
  function o(a, f, c) {
    const { w: p, h: g } = Hn(a.width, a.height);
    return /* @__PURE__ */ i(hr, { sx: { width: p, height: g }, children: /* @__PURE__ */ i(
      Qn,
      {
        layout: a,
        context: f
      }
    ) }, (a.name || "tab") + c);
  }
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap" }, children: n.map((a, f) => o(a, r, f)) });
}, wt = ce(function(t, r) {
  const { layout: n } = t;
  be(r, () => ({
    resetFilter() {
    }
  }), []);
  const o = {}, a = n.tabs;
  return /* @__PURE__ */ i("div", { children: a.map((f, c) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    rr,
    {
      layout: f,
      context: o
    }
  ) }, f.name + c)) });
}), Kn = (e) => {
  switch (e) {
    case "formEdit":
      return "edit";
    case "formNew":
      return "new";
    case "formView":
      return "view";
    default:
      return "edit";
  }
}, Tt = ce(function(t, r) {
  var y;
  const n = t.data || {}, { layout: o } = t;
  var { getFieldManager: a, getFormData: f, isFormValid: c } = Ir(n, (y = t.callbacks) == null ? void 0 : y.onFormValidChange, Kn(t.mode));
  be(r, () => ({
    getData() {
      return f();
    },
    isValid() {
      return c();
    }
  }), []);
  const p = { formData: n }, g = o.tabs;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(xe.Provider, { value: a, children: g.map((v, T) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    rr,
    {
      layout: v,
      context: p
    }
  ) }, v.name + T)) }) });
}), Jn = (e) => {
  switch (e) {
    case "grid":
      return wt;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), Tt;
    case "formEdit":
    case "formNew":
    case "formView":
      return Tt;
    default:
      return wt;
  }
}, ca = ce(function(t, r) {
  const [n, o] = J(t.layout), a = t.mode ? t.mode : n.type ? n.type : "grid", f = t.layoutParams || {}, c = Jn(a), p = ie(0);
  return de(() => {
    o(t.layout), p.current < 999999 ? p.current++ : p.current = 0;
  }, [t.layout]), /* @__PURE__ */ i(Lt, { fallback: /* @__PURE__ */ i("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ i(Qe.Provider, { value: t.storeFactory, children: /* @__PURE__ */ i(Dt.Provider, { value: f, children: /* @__PURE__ */ i(c, { ...t, ref: (g) => {
    r && (r.current = g);
  } }, p.current) }) }) });
}), ua = ce(function(t, r) {
  const { children: n, Child: o, childProps: a, pageSize: f } = t, c = r || ie(null), {
    setQueryFilter: p,
    refreshData: g,
    setSortColumns: y,
    setEndPointOptions: v,
    setQuickSearch: T,
    gotoPage: x,
    setPageSize: k,
    getPageNo: F,
    setQueryLimit: A,
    getQueryLimit: $,
    data: C,
    totalRecords: b,
    pageSizeOptions: S,
    queryLimit: s
  } = Re(t), M = t.listKeyProvider || ((P, R) => R);
  be(c, () => ({
    setFilter: (P) => {
      p(P);
    },
    refresh: () => {
      g();
    },
    resetFilter() {
      p({});
    },
    setEndPointOptions: (P) => {
      v(P);
    },
    addFilter: (P, R) => {
      p((z) => (z[P] = R, { ...z }));
    },
    setQueryLimit: (P) => {
      A(P);
    },
    getQueryLimit: () => $(),
    getCurrentData: () => C,
    setSortOptions(P) {
      y(P);
    }
  }), [p]);
  const E = (P, R) => {
    x(R);
  }, L = (P) => {
    const R = P.target.value;
    T(R);
  }, W = (P) => {
    const R = parseInt(P.target.value, 10);
    k(R);
  }, B = 200, V = !!f, Q = !!t.quickSearch;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ H("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ H("div", { children: [
      /* @__PURE__ */ H("div", { className: "card-header", children: [
        /* @__PURE__ */ i("div", { className: "card-filter", children: Q && /* @__PURE__ */ i(
          Ne,
          {
            sx: { width: B },
            type: "text",
            onChange: L,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ i(Mt, { position: "end", children: /* @__PURE__ */ i(jt, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ i("div", { className: "card-pagination", children: V && /* @__PURE__ */ i(
          Ft,
          {
            component: "div",
            count: b || 0,
            page: F(),
            onPageChange: E,
            rowsPerPage: s.limit,
            rowsPerPageOptions: S || [],
            onRowsPerPageChange: W
          }
        ) })
      ] }),
      /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
        gr,
        {
          Child: o,
          childKeyProvider: M,
          preProcess: t.preProcess,
          dataList: C,
          childProps: a,
          EmptyChild: t.EmptyChild
        }
      ) })
    ] })
  ] }) });
});
export {
  ca as F,
  tr as G,
  Yr as M,
  la as P,
  ua as S,
  rr as T,
  Bn as a,
  ia as b,
  qr as c,
  Vr as d,
  $t as e,
  Vn as f,
  It as g,
  Xn as h,
  Gn as i,
  Qn as j,
  wt as k,
  Tt as l,
  Re as u
};
