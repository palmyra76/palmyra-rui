import "../assets/ServerCardLayout.css";
import Mt from "../palmyra/mui/form/MuiDatePicker.js";
import Rt from "../palmyra/mui/form/MuiDateTimePicker.js";
import Tt from "../palmyra/mui/form/MuiRadioGroup.js";
import kt from "../palmyra/mui/form/MuiSelect.js";
import Et from "../palmyra/mui/form/MuiTextArea.js";
import Lt from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import _t from "../palmyra/mui/form/MuiCheckBox.js";
import At from "../palmyra/mui/form/MuiSwitch.js";
import Vt from "../palmyra/mui/form/MuiPassword.js";
import It from "../palmyra/mui/form/MuiNumberField.js";
import Ee from "../palmyra/mui/form/FieldDecorator.js";
import { FieldManagerContext as be, StoreFactoryContext as Le, LayoutParamsContext as et } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as o, jsxs as A, Fragment as Se } from "react/jsx-runtime";
import tt, { useState as Y, useRef as K, useEffect as oe, forwardRef as ne, useContext as pe, useImperativeHandle as ue, useMemo as nt } from "react";
import { p as rt, a as ot } from "./index.js";
import { FormControlLabel as Be, Checkbox as ze, FormControl as _e, FormHelperText as Ae, Autocomplete as at, TextField as we, CircularProgress as it, Dialog as Xt, ClickAwayListener as st, Button as fe, Paper as Wt, InputAdornment as lt, Tooltip as De, TablePagination as ct, Box as Yt } from "@mui/material";
import qt from "../palmyra/layout/card/CardLayout.js";
import Bt from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Ve, getFieldLabel as Ie } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as ye } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as ve } from "../palmyra/form/FormUtil.js";
import { delay as ut, delayGenerator as zt, mergeDeep as Qt } from "../palmyra/utils/index.js";
import Gt from "../palmyra/mui/form/MuiDateRangePicker.js";
import Ut from "../palmyra/mui/form/MuiIntegerField.js";
import dt from "../palmyra/layout/container/SectionContainer.js";
import $t from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as Ht } from "../palmyra/grid/base/ColumnConverter.js";
import Kt from "../palmyra/grid/base/EmptyChildTable.js";
import jt from "../palmyra/grid/base/TableX.js";
import { Close as Jt, Menu as Qe, DensitySmall as Ge, DensityLarge as Ue, FilterAlt as Zt, FileDownloadOutlined as en, Add as tn } from "@mui/icons-material";
import { NoopCustomizer as nn } from "../palmyra/grid/Types.js";
import { convertToField as rn } from "../palmyra/grid/base/GridFieldConverter.js";
import { a as on, g as an } from "./_commonjsHelpers.js";
import ft from "react-dom";
import { createFilterData as sn } from "../palmyra/form/PalmyraFilterManager.js";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import { topic as $e } from "../palmyra/utils/pubsub/topic.js";
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
import { getActionPublishers as ln } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as mt } from "../palmyra/layout/ErrorBoundary.js";
import cn from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import un from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as dn } from "./PalmyraFieldManager.js";
import { useKeyValue as fn } from "../palmyra/utils/pubsub/PubSubHelper.js";
const Ce = (t) => {
  var j, J;
  const { store: e, quickSearch: n } = t, r = t.fetchAll != !1, [a, i] = Y(t.endPointOptions), [s, c] = Y(null), f = ((j = t.defaultParams) == null ? void 0 : j.filter) || {}, g = ((J = t.defaultParams) == null ? void 0 : J.sort) || {}, [b, v] = t.filterTopic ? fn(t.filterTopic, f) : Y(f), [D, w] = Y({}), L = K(t.initialFetch == !1), X = t.pageSize ? t.pageSize : 15;
  var V = X instanceof Array ? X : [X], I = X instanceof Array ? X[0] : X;
  const [u, h] = Y({ limit: I, offset: 0, total: !0 }), [p, y] = Y(null), P = () => Math.round(u.offset / u.limit), S = () => u, O = (F) => {
    h((W) => ({ limit: W.limit, total: W.total, offset: F * I }));
  }, R = (F) => {
    const W = F > 10 || F == -1 ? F : 15;
    h((d) => ({ limit: W, total: d.total, offset: d.offset }));
  }, _ = () => b ? Object.keys(b).length == 0 : !1, k = (F) => {
    y((W) => (setTimeout(() => {
      t.onDataChange && t.onDataChange(p, W);
    }, 300), F));
  };
  oe(() => {
    if (L.current) {
      L.current = !1;
      return;
    }
    (r || !_()) && q();
  }, [u, b, D, a]);
  const q = () => {
    const W = {
      sortOrder: D && Object.keys(D).length > 0 ? D : g,
      total: !0,
      endPointVars: a,
      ...u,
      filter: { ...b, ...f }
    };
    if (e)
      try {
        e.query(W).then((d) => {
          k(d.result), c(d.total);
        }).catch((d) => {
          var x = d.response ? d.response : d;
          console.error("error while fetching", x), C();
        });
      } catch (d) {
        console.error(d), l();
      }
    else
      console.error("Store is not provided for the Grid"), l();
  }, l = () => {
    k([]), c(0);
  }, C = () => {
    k(void 0), c(null);
  };
  return {
    setQueryFilter: (F) => {
      typeof F == "function" || F && Object.keys(F).length > 0 ? v(F) : v({});
    },
    setQuickSearch: (F) => {
      const W = n;
      v(F ? (d) => (d[W] = F, { ...d }) : (d) => (delete d[W], { ...d }));
    },
    setSortColumns: (F) => {
      w(F);
    },
    setEndPointOptions: i,
    refreshData: q,
    gotoPage: O,
    setPageSize: R,
    getPageNo: P,
    getQueryLimit: S,
    setQueryLimit: h,
    filter: b,
    queryLimit: u,
    data: p,
    totalRecords: s,
    pageSizeOptions: V
  };
};
function He(t) {
  return t ? Array.isArray(t) ? t : typeof t == "string" ? t.split(",") : (console.log(t), [t]) : [];
}
const Oo = ne(function(e, n) {
  const r = pe(be), a = n || K(null), i = r(e, "checkbox", a), { mutateOptions: s, setMutateOptions: c } = i, [f, g] = Y(!1), b = He(i.data), v = i.error, D = i.eventListeners, L = { store: i.store, pageSize: -1 }, { data: X } = Ce(L), V = X, I = K(null), u = e.lookupOptions || {}, h = u.idAttribute || "id", p = u.displayAttribute || "name", y = e.showSelectedOnly && e.readonly, P = ye(h) ? (l) => ve(h, l) : (l) => l[h], S = ye(p) ? (l) => ve(p, l) : (l) => l[p];
  ue(a, () => ({
    focus() {
      I.current.focus();
    },
    isValid() {
      return !v.status;
    },
    clear() {
      i.setData("", !0);
    },
    getValue() {
      return i.getData();
    },
    setValue(l, C = !1) {
      i.setData(l, C);
    },
    setVisible(l) {
      c((C) => ({ ...C, visible: l }));
    },
    setRequired(l) {
      c((C) => ({ ...C, required: l }));
    },
    setReadOnly(l) {
      c((C) => ({ ...C, readonly: l }));
    },
    setAttribute(l) {
      c((C) => ({ ...C, ...l }));
    },
    setOptions(l) {
    },
    getOptions() {
    }
  }), [i]);
  var O = Ve(e, i.data, e.label);
  e.readonly && (O.inputprops = { readOnly: !0 });
  function R(l, C) {
    const T = He(i.data);
    var B = T.indexOf(l);
    C ? B < 0 && T.push(l) : B >= 0 && T.splice(B, 1), D.onValueChange(T.toString());
  }
  var _ = {
    onBlur: D.onBlur,
    onFocus: D.onFocus,
    onChange: (l) => {
      R(l.target.value, l.target.checked);
    }
  };
  const k = (l) => {
    const C = l.toString();
    return b.includes(C);
  }, q = (l) => {
    const C = l.target.checked;
    g(C);
    var T = [];
    C && V.map((B) => {
      T.push(P(B));
    }), D.onValueChange(T.toString());
  };
  return /* @__PURE__ */ o("div", { className: e.className, children: s.visible && /* @__PURE__ */ A(
    Ee,
    {
      label: Ie(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: [
        /* @__PURE__ */ o("div", { children: e.hideSelectAll ? /* @__PURE__ */ o(Se, {}) : /* @__PURE__ */ o(
          Be,
          {
            control: /* @__PURE__ */ o(ze, { onChange: q }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ A(
          _e,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: v.status,
            ...O,
            children: [
              V ? V.filter((l) => y ? k(P(l)) : !0).map((l) => /* @__PURE__ */ o(
                Be,
                {
                  value: P(l),
                  control: /* @__PURE__ */ o(
                    ze,
                    {
                      ..._,
                      checked: k(P(l)),
                      disabled: e.readonly
                    }
                  ),
                  label: S(l)
                },
                P(l)
              )) : /* @__PURE__ */ o("div", { children: "No options provided" }),
              /* @__PURE__ */ o(Ae, { className: "form-error-text", children: v.message })
            ]
          }
        )
      ]
    }
  ) });
}), mn = zt(100), hn = ne(function(e, n) {
  const r = pe(be), a = n || K(null), i = K(null), s = K(0), [c, f] = Y([]), [g, b] = Y(""), [v, D] = Y(!1), w = r(e, "serverlookup", a), L = e.store || w.store, X = e.lookupOptions || {}, V = X.idAttribute || "id", I = X.displayAttribute || "name", u = I, h = {
    store: L,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: u,
    initialFetch: !1
  }, p = Ce(h), y = w.eventListeners, P = w.error, { mutateOptions: S, setMutateOptions: O } = w, R = w.data, _ = v && c.length < (R ? 2 : 1), { setQueryFilter: k, setEndPointOptions: q, setQuickSearch: l, totalRecords: C, refreshData: T } = p, B = p.data, G = ye(V) ? (m) => ve(V, m) : (m) => m == null ? void 0 : m[V], j = ye(I) ? (m) => ve(I, m) : (m) => m == null ? void 0 : m[I];
  oe(() => {
    var m = R != "" ? R : void 0;
    m && f([m]);
  }, [w.data]), oe(() => {
    const m = B ? [...B] : [], N = R != "" ? R : void 0, te = G(N), Me = j(N);
    m && te && Me && !x(m, te) && m.unshift(N), f(m), s.current < C && (s.current = C);
  }, [B, C]), oe(() => {
    ut(J);
  }, [g]), oe(() => {
    mn(J);
  }, [v]);
  function J() {
    v && (g.length > 0 && g != j(R) ? l("*" + g + "*") : B ? l(null) : T());
  }
  var F = {
    onBlur: y.onBlur,
    onFocus: y.onFocus,
    onChange: (m, N) => {
      W(N);
    },
    onInputChange: (m, N) => (b(N), !0)
  };
  const W = (m) => {
    y.onValueChange(m);
  }, d = (m) => typeof m == "object" ? j(m) + "" : (console.log(m), "");
  function x(m, N) {
    return m.find((te) => {
      if (G(te) == N)
        return te;
    });
  }
  ue(a, () => ({
    focus() {
      i.current.focus();
    },
    isValid() {
      return !P.status;
    },
    clear() {
      e.multiple ? w.setData([], !0) : w.setData(void 0, !0);
    },
    getValue() {
      return w.getData();
    },
    setValue(m, N = !1) {
      w.setData(m, N);
    },
    setVisible(m) {
      O((N) => ({ ...N, visible: m }));
    },
    setRequired(m) {
      O((N) => ({ ...N, required: m }));
    },
    setReadOnly(m) {
      O((N) => ({ ...N, readonly: m }));
    },
    setAttribute(m) {
      O((N) => ({ ...N, ...m }));
    },
    setFilter(m) {
      k(m);
    },
    resetFilter() {
      k({});
    },
    setEndPointOptions(m) {
      q(m);
    },
    getCurrentData: () => R,
    refresh: () => {
      T();
    },
    addFilter(m, N) {
      k((te) => (te[m] = N, { ...te }));
    },
    setDefaultFilter(m) {
    },
    setSortOptions(m) {
    }
  }), [w, k]);
  var U = Ve(e, R, e.label);
  S.readonly && (U.inputProps = { readOnly: !0 });
  const he = (m, N) => m instanceof Array ? m.some((te) => G(te) == G(N)) : G(m) == G(N);
  return /* @__PURE__ */ o(
    Ee,
    {
      label: Ie(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ A(_e, { fullWidth: !0, error: P.status, children: [
        /* @__PURE__ */ o(
          at,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: e.multiple,
            readOnly: e.readonly,
            renderOption: e.renderOption,
            isOptionEqualToValue: he,
            filterOptions: (m) => m,
            renderInput: (m) => /* @__PURE__ */ o(
              we,
              {
                ...m,
                inputRef: (N) => {
                  i.current = N;
                },
                variant: e.variant || "standard",
                label: e.label,
                autoFocus: e.autoFocus,
                required: e.required,
                InputProps: {
                  ...m.InputProps,
                  endAdornment: /* @__PURE__ */ A(Se, { children: [
                    _ ? /* @__PURE__ */ o(it, { color: "inherit", size: 18 }) : null,
                    m.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: d,
            ...U,
            options: c,
            open: v,
            onClose: () => {
              D(!1);
            },
            onOpen: (m) => {
              D(!0);
            },
            ...F
          }
        ),
        /* @__PURE__ */ o(Ae, { className: "form-error-text", children: P.message })
      ] })
    }
  );
}), gn = ne(function(e, n) {
  const r = pe(be), a = n || K(null), i = K(null), s = K(0), [c, f] = Y([]), [g, b] = Y(""), [v, D] = Y(!1), w = r(e, "autoComplete", a), L = e.store || w.store, V = (e.lookupOptions || {}).attribute || "name", I = V, u = {
    store: L,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: I,
    initialFetch: !1
  }, h = Ce(u), p = w.eventListeners, y = w.error, { mutateOptions: P, setMutateOptions: S } = w, O = w.data, R = v && c.length < (O ? 2 : 1), { setQueryFilter: _, setEndPointOptions: k, setQuickSearch: q, totalRecords: l, refreshData: C } = h, T = h.data, B = ye(V) ? (d) => ve(V, d) : (d) => d == null ? void 0 : d[V];
  oe(() => {
    var d = O != "" ? O : void 0;
    d && f([d]);
  }, [w.data]), oe(() => {
    const x = (T ? [...T] : []).map((he) => B(he)), U = O != "" ? O : void 0;
    x && U && !F(x, U) && x.unshift(U), f(x), s.current < l && (s.current = l);
  }, [T, l]), oe(() => {
    ut(G);
  }, [g, v]);
  function G() {
    v && (g.length > 0 && g != O ? q("*" + g + "*") : T ? q(null) : C());
  }
  var j = {
    onBlur: (d) => {
      J(g), p.onBlur(g);
    },
    onFocus: p.onFocus,
    onChange: (d, x) => {
      J(x);
    },
    onInputChange: (d, x) => (b(x), !0)
  };
  const J = (d) => {
    p.onValueChange(d);
  };
  function F(d, x) {
    return d.find((U) => {
      if (U == x)
        return U;
    });
  }
  ue(a, () => ({
    focus() {
      i.current.focus();
    },
    isValid() {
      return !y.status;
    },
    clear() {
      w.setData(void 0, !0);
    },
    getValue() {
      return w.getData();
    },
    setValue(d, x = !1) {
      w.setData(d, x);
    },
    setVisible(d) {
      S((x) => ({ ...x, visible: d }));
    },
    setRequired(d) {
      S((x) => ({ ...x, required: d }));
    },
    setReadOnly(d) {
      S((x) => ({ ...x, readonly: d }));
    },
    setAttribute(d) {
      S((x) => ({ ...x, ...d }));
    },
    setFilter(d) {
      _(d);
    },
    resetFilter() {
      _({});
    },
    setEndPointOptions(d) {
      k(d);
    },
    getCurrentData: () => O,
    refresh: () => {
      C();
    },
    addFilter(d, x) {
      _((U) => (U[d] = x, { ...U }));
    },
    setDefaultFilter(d) {
    },
    setSortOptions(d) {
    }
  }), [w, _]);
  var W = Ve(e, O, e.label);
  return P.readonly && (W.inputProps = { readOnly: !0 }), /* @__PURE__ */ o(
    Ee,
    {
      label: Ie(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ A(_e, { fullWidth: !0, error: y.status, children: [
        /* @__PURE__ */ o(
          at,
          {
            freeSolo: !0,
            autoSelect: !0,
            readOnly: e.readonly,
            renderOption: e.renderOption,
            filterOptions: (d) => d,
            renderInput: (d) => /* @__PURE__ */ o(
              we,
              {
                ...d,
                inputRef: (x) => {
                  i.current = x;
                },
                variant: e.variant || "standard",
                label: e.label,
                autoFocus: e.autoFocus,
                required: e.required,
                ...W,
                InputProps: {
                  ...d.InputProps,
                  endAdornment: /* @__PURE__ */ A(Se, { children: [
                    R ? /* @__PURE__ */ o(it, { color: "inherit", size: 18 }) : null,
                    d.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ...W,
            options: c,
            open: v,
            onClose: () => {
              D(!1);
            },
            onOpen: (d) => {
              D(!0);
            },
            ...j
          }
        ),
        /* @__PURE__ */ o(Ae, { className: "form-error-text", children: y.message })
      ] })
    }
  );
}), pn = (t) => {
  const { fieldDef: e } = t;
  return /* @__PURE__ */ A("div", { children: [
    "invalid type " + e.type,
    " "
  ] });
}, $ = (t, e) => {
  const n = t.fieldDef;
  return /* @__PURE__ */ o(
    e,
    {
      ...n,
      label: t.title
    },
    n.title + n.attribute
  );
}, yn = () => /* @__PURE__ */ o("div", { children: "To be Implemented" }), ht = (t, e, n) => {
  const { type: r } = t, a = { fieldDef: t, title: n };
  switch (r) {
    case "string":
      return $(a, Lt);
    case "radio":
      return $(a, Tt);
    case "select":
      return $(a, kt);
    case "date":
      return $(a, Mt);
    case "datetime":
      return $(a, Rt);
    case "checkbox":
      return $(a, _t);
    case "serverlookup":
      return $(a, hn);
    case "textarea":
      return $(a, Et);
    case "switch":
      return $(a, At);
    case "password":
      return $(a, Vt);
    case "float":
    case "number":
    case "numbersOnly":
      return $(a, It);
    case "integer":
      return $(a, Ut);
    case "multiSelect":
      return yn();
    case "dateRange":
      return $(a, Gt);
    case "autoComplete":
      return $(a, gn);
    default:
      return pn(a);
  }
}, vn = ne(function(e, n) {
  var b;
  const { formLayout: r, context: a } = e, { formData: i } = a, s = r.Container;
  K({});
  const c = nt(() => (v) => ht(v), [i.data]);
  var f = ((b = r.options) == null ? void 0 : b.columns) || 1, g = { columns: f };
  return s ? /* @__PURE__ */ o("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: r.fields.map((v, D) => /* @__PURE__ */ o(
    s,
    {
      index: D,
      field: v,
      label: v.title,
      options: g,
      children: c(v)
    },
    v.attribute + v.name + v.type
  )) }) : /* @__PURE__ */ o("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: r.fields.map((v, D) => c(v)) });
}), gt = (t) => {
  const { layout: e, context: n } = t;
  var r = e.Renderer || vn, a = e.Container || dt;
  const i = (s) => /* @__PURE__ */ o(
    r,
    {
      context: n,
      formLayout: s
    }
  );
  return /* @__PURE__ */ o(
    a,
    {
      hideTitle: e.hideTitle,
      title: e.title,
      name: e.name,
      children: /* @__PURE__ */ o($t, { columns: e.columns, children: i(e.formLayout) })
    }
  );
};
var Oe = { exports: {} }, pt = {};
function yt(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number")
    r += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = yt(t[e])) && (r && (r += " "), r += n);
    else
      for (e in t)
        t[e] && (r && (r += " "), r += e);
  return r;
}
function Ke() {
  for (var t, e, n = 0, r = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = yt(t)) && (r && (r += " "), r += e);
  return r;
}
const bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Ke,
  default: Ke
}, Symbol.toStringTag, { value: "Module" })), Sn = /* @__PURE__ */ on(bn);
var E = {}, ae = {};
Object.defineProperty(ae, "__esModule", {
  value: !0
});
ae.dontSetMe = On;
ae.findInArray = Cn;
ae.int = wn;
ae.isFunction = Dn;
ae.isNum = Pn;
function Cn(t, e) {
  for (let n = 0, r = t.length; n < r; n++)
    if (e.apply(e, [t[n], n, t]))
      return t[n];
}
function Dn(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Function]";
}
function Pn(t) {
  return typeof t == "number" && !isNaN(t);
}
function wn(t) {
  return parseInt(t, 10);
}
function On(t, e, n) {
  if (t[e])
    return new Error("Invalid prop ".concat(e, " passed to ").concat(n, " - do not set this, set it on the child."));
}
var de = {};
Object.defineProperty(de, "__esModule", {
  value: !0
});
de.browserPrefixToKey = bt;
de.browserPrefixToStyle = xn;
de.default = void 0;
de.getPrefix = vt;
const Re = ["Moz", "Webkit", "O", "ms"];
function vt() {
  var t;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const n = (t = window.document) === null || t === void 0 || (t = t.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!n || e in n)
    return "";
  for (let r = 0; r < Re.length; r++)
    if (bt(e, Re[r]) in n)
      return Re[r];
  return "";
}
function bt(t, e) {
  return e ? "".concat(e).concat(Fn(t)) : t;
}
function xn(t, e) {
  return e ? "-".concat(e.toLowerCase(), "-").concat(t) : t;
}
function Fn(t) {
  let e = "", n = !0;
  for (let r = 0; r < t.length; r++)
    n ? (e += t[r].toUpperCase(), n = !1) : t[r] === "-" ? n = !0 : e += t[r];
  return e;
}
de.default = vt();
Object.defineProperty(E, "__esModule", {
  value: !0
});
E.addClassName = Dt;
E.addEvent = Rn;
E.addUserSelectStyles = Yn;
E.createCSSTransform = Vn;
E.createSVGTransform = In;
E.getTouch = Xn;
E.getTouchIdentifier = Wn;
E.getTranslation = Xe;
E.innerHeight = Ln;
E.innerWidth = _n;
E.matchesSelector = Ct;
E.matchesSelectorAndParentsTo = Mn;
E.offsetXYFromParent = An;
E.outerHeight = kn;
E.outerWidth = En;
E.removeClassName = Pt;
E.removeEvent = Tn;
E.removeUserSelectStyles = qn;
var ee = ae, je = Nn(de);
function St(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (St = function(r) {
    return r ? n : e;
  })(t);
}
function Nn(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var n = St(e);
  if (n && n.has(t))
    return n.get(t);
  var r = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(t, i)) {
      var s = a ? Object.getOwnPropertyDescriptor(t, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : r[i] = t[i];
    }
  return r.default = t, n && n.set(t, r), r;
}
let Pe = "";
function Ct(t, e) {
  return Pe || (Pe = (0, ee.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, ee.isFunction)(t[n]);
  })), (0, ee.isFunction)(t[Pe]) ? t[Pe](e) : !1;
}
function Mn(t, e, n) {
  let r = t;
  do {
    if (Ct(r, e))
      return !0;
    if (r === n)
      return !1;
    r = r.parentNode;
  } while (r);
  return !1;
}
function Rn(t, e, n, r) {
  if (!t)
    return;
  const a = {
    capture: !0,
    ...r
  };
  t.addEventListener ? t.addEventListener(e, n, a) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n;
}
function Tn(t, e, n, r) {
  if (!t)
    return;
  const a = {
    capture: !0,
    ...r
  };
  t.removeEventListener ? t.removeEventListener(e, n, a) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null;
}
function kn(t) {
  let e = t.clientHeight;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e += (0, ee.int)(n.borderTopWidth), e += (0, ee.int)(n.borderBottomWidth), e;
}
function En(t) {
  let e = t.clientWidth;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e += (0, ee.int)(n.borderLeftWidth), e += (0, ee.int)(n.borderRightWidth), e;
}
function Ln(t) {
  let e = t.clientHeight;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e -= (0, ee.int)(n.paddingTop), e -= (0, ee.int)(n.paddingBottom), e;
}
function _n(t) {
  let e = t.clientWidth;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e -= (0, ee.int)(n.paddingLeft), e -= (0, ee.int)(n.paddingRight), e;
}
function An(t, e, n) {
  const a = e === e.ownerDocument.body ? {
    left: 0,
    top: 0
  } : e.getBoundingClientRect(), i = (t.clientX + e.scrollLeft - a.left) / n, s = (t.clientY + e.scrollTop - a.top) / n;
  return {
    x: i,
    y: s
  };
}
function Vn(t, e) {
  const n = Xe(t, e, "px");
  return {
    [(0, je.browserPrefixToKey)("transform", je.default)]: n
  };
}
function In(t, e) {
  return Xe(t, e, "");
}
function Xe(t, e, n) {
  let {
    x: r,
    y: a
  } = t, i = "translate(".concat(r).concat(n, ",").concat(a).concat(n, ")");
  if (e) {
    const s = "".concat(typeof e.x == "string" ? e.x : e.x + n), c = "".concat(typeof e.y == "string" ? e.y : e.y + n);
    i = "translate(".concat(s, ", ").concat(c, ")") + i;
  }
  return i;
}
function Xn(t, e) {
  return t.targetTouches && (0, ee.findInArray)(t.targetTouches, (n) => e === n.identifier) || t.changedTouches && (0, ee.findInArray)(t.changedTouches, (n) => e === n.identifier);
}
function Wn(t) {
  if (t.targetTouches && t.targetTouches[0])
    return t.targetTouches[0].identifier;
  if (t.changedTouches && t.changedTouches[0])
    return t.changedTouches[0].identifier;
}
function Yn(t) {
  if (!t)
    return;
  let e = t.getElementById("react-draggable-style-el");
  e || (e = t.createElement("style"), e.type = "text/css", e.id = "react-draggable-style-el", e.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, e.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, t.getElementsByTagName("head")[0].appendChild(e)), t.body && Dt(t.body, "react-draggable-transparent-selection");
}
function qn(t) {
  if (t)
    try {
      if (t.body && Pt(t.body, "react-draggable-transparent-selection"), t.selection)
        t.selection.empty();
      else {
        const e = (t.defaultView || window).getSelection();
        e && e.type !== "Caret" && e.removeAllRanges();
      }
    } catch {
    }
}
function Dt(t, e) {
  t.classList ? t.classList.add(e) : t.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) || (t.className += " ".concat(e));
}
function Pt(t, e) {
  t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"), "");
}
var ie = {};
Object.defineProperty(ie, "__esModule", {
  value: !0
});
ie.canDragX = Qn;
ie.canDragY = Gn;
ie.createCoreData = $n;
ie.createDraggableData = Hn;
ie.getBoundPosition = Bn;
ie.getControlPosition = Un;
ie.snapToGrid = zn;
var Z = ae, me = E;
function Bn(t, e, n) {
  if (!t.props.bounds)
    return [e, n];
  let {
    bounds: r
  } = t.props;
  r = typeof r == "string" ? r : Kn(r);
  const a = We(t);
  if (typeof r == "string") {
    const {
      ownerDocument: i
    } = a, s = i.defaultView;
    let c;
    if (r === "parent" ? c = a.parentNode : c = i.querySelector(r), !(c instanceof s.HTMLElement))
      throw new Error('Bounds selector "' + r + '" could not find an element.');
    const f = c, g = s.getComputedStyle(a), b = s.getComputedStyle(f);
    r = {
      left: -a.offsetLeft + (0, Z.int)(b.paddingLeft) + (0, Z.int)(g.marginLeft),
      top: -a.offsetTop + (0, Z.int)(b.paddingTop) + (0, Z.int)(g.marginTop),
      right: (0, me.innerWidth)(f) - (0, me.outerWidth)(a) - a.offsetLeft + (0, Z.int)(b.paddingRight) - (0, Z.int)(g.marginRight),
      bottom: (0, me.innerHeight)(f) - (0, me.outerHeight)(a) - a.offsetTop + (0, Z.int)(b.paddingBottom) - (0, Z.int)(g.marginBottom)
    };
  }
  return (0, Z.isNum)(r.right) && (e = Math.min(e, r.right)), (0, Z.isNum)(r.bottom) && (n = Math.min(n, r.bottom)), (0, Z.isNum)(r.left) && (e = Math.max(e, r.left)), (0, Z.isNum)(r.top) && (n = Math.max(n, r.top)), [e, n];
}
function zn(t, e, n) {
  const r = Math.round(e / t[0]) * t[0], a = Math.round(n / t[1]) * t[1];
  return [r, a];
}
function Qn(t) {
  return t.props.axis === "both" || t.props.axis === "x";
}
function Gn(t) {
  return t.props.axis === "both" || t.props.axis === "y";
}
function Un(t, e, n) {
  const r = typeof e == "number" ? (0, me.getTouch)(t, e) : null;
  if (typeof e == "number" && !r)
    return null;
  const a = We(n), i = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, me.offsetXYFromParent)(r || t, i, n.props.scale);
}
function $n(t, e, n) {
  const r = !(0, Z.isNum)(t.lastX), a = We(t);
  return r ? {
    node: a,
    deltaX: 0,
    deltaY: 0,
    lastX: e,
    lastY: n,
    x: e,
    y: n
  } : {
    node: a,
    deltaX: e - t.lastX,
    deltaY: n - t.lastY,
    lastX: t.lastX,
    lastY: t.lastY,
    x: e,
    y: n
  };
}
function Hn(t, e) {
  const n = t.props.scale;
  return {
    node: e.node,
    x: t.state.x + e.deltaX / n,
    y: t.state.y + e.deltaY / n,
    deltaX: e.deltaX / n,
    deltaY: e.deltaY / n,
    lastX: t.state.x,
    lastY: t.state.y
  };
}
function Kn(t) {
  return {
    left: t.left,
    top: t.top,
    right: t.right,
    bottom: t.bottom
  };
}
function We(t) {
  const e = t.findDOMNode();
  if (!e)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return e;
}
var xe = {}, Fe = {};
Object.defineProperty(Fe, "__esModule", {
  value: !0
});
Fe.default = jn;
function jn() {
}
Object.defineProperty(xe, "__esModule", {
  value: !0
});
xe.default = void 0;
var Te = Zn(tt), H = Ye(rt), Jn = Ye(ft), z = E, le = ie, ke = ae, ge = Ye(Fe);
function Ye(t) {
  return t && t.__esModule ? t : { default: t };
}
function wt(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (wt = function(r) {
    return r ? n : e;
  })(t);
}
function Zn(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var n = wt(e);
  if (n && n.has(t))
    return n.get(t);
  var r = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(t, i)) {
      var s = a ? Object.getOwnPropertyDescriptor(t, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : r[i] = t[i];
    }
  return r.default = t, n && n.set(t, r), r;
}
function Q(t, e, n) {
  return e = er(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function er(t) {
  var e = tr(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function tr(t, e) {
  if (typeof t != "object" || t === null)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
const re = {
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
let ce = re.mouse, Ne = class extends Te.Component {
  constructor() {
    super(...arguments), Q(this, "dragging", !1), Q(this, "lastX", NaN), Q(this, "lastY", NaN), Q(this, "touchIdentifier", null), Q(this, "mounted", !1), Q(this, "handleDragStart", (e) => {
      if (this.props.onMouseDown(e), !this.props.allowAnyClick && typeof e.button == "number" && e.button !== 0)
        return !1;
      const n = this.findDOMNode();
      if (!n || !n.ownerDocument || !n.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      const {
        ownerDocument: r
      } = n;
      if (this.props.disabled || !(e.target instanceof r.defaultView.Node) || this.props.handle && !(0, z.matchesSelectorAndParentsTo)(e.target, this.props.handle, n) || this.props.cancel && (0, z.matchesSelectorAndParentsTo)(e.target, this.props.cancel, n))
        return;
      e.type === "touchstart" && e.preventDefault();
      const a = (0, z.getTouchIdentifier)(e);
      this.touchIdentifier = a;
      const i = (0, le.getControlPosition)(e, a, this);
      if (i == null)
        return;
      const {
        x: s,
        y: c
      } = i, f = (0, le.createCoreData)(this, s, c);
      (0, ge.default)("DraggableCore: handleDragStart: %j", f), (0, ge.default)("calling", this.props.onStart), !(this.props.onStart(e, f) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, z.addUserSelectStyles)(r), this.dragging = !0, this.lastX = s, this.lastY = c, (0, z.addEvent)(r, ce.move, this.handleDrag), (0, z.addEvent)(r, ce.stop, this.handleDragStop));
    }), Q(this, "handleDrag", (e) => {
      const n = (0, le.getControlPosition)(e, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: r,
        y: a
      } = n;
      if (Array.isArray(this.props.grid)) {
        let c = r - this.lastX, f = a - this.lastY;
        if ([c, f] = (0, le.snapToGrid)(this.props.grid, c, f), !c && !f)
          return;
        r = this.lastX + c, a = this.lastY + f;
      }
      const i = (0, le.createCoreData)(this, r, a);
      if ((0, ge.default)("DraggableCore: handleDrag: %j", i), this.props.onDrag(e, i) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const f = document.createEvent("MouseEvents");
          f.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(f);
        }
        return;
      }
      this.lastX = r, this.lastY = a;
    }), Q(this, "handleDragStop", (e) => {
      if (!this.dragging)
        return;
      const n = (0, le.getControlPosition)(e, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: r,
        y: a
      } = n;
      if (Array.isArray(this.props.grid)) {
        let f = r - this.lastX || 0, g = a - this.lastY || 0;
        [f, g] = (0, le.snapToGrid)(this.props.grid, f, g), r = this.lastX + f, a = this.lastY + g;
      }
      const i = (0, le.createCoreData)(this, r, a);
      if (this.props.onStop(e, i) === !1 || this.mounted === !1)
        return !1;
      const c = this.findDOMNode();
      c && this.props.enableUserSelectHack && (0, z.removeUserSelectStyles)(c.ownerDocument), (0, ge.default)("DraggableCore: handleDragStop: %j", i), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, c && ((0, ge.default)("DraggableCore: Removing handlers"), (0, z.removeEvent)(c.ownerDocument, ce.move, this.handleDrag), (0, z.removeEvent)(c.ownerDocument, ce.stop, this.handleDragStop));
    }), Q(this, "onMouseDown", (e) => (ce = re.mouse, this.handleDragStart(e))), Q(this, "onMouseUp", (e) => (ce = re.mouse, this.handleDragStop(e))), Q(this, "onTouchStart", (e) => (ce = re.touch, this.handleDragStart(e))), Q(this, "onTouchEnd", (e) => (ce = re.touch, this.handleDragStop(e)));
  }
  componentDidMount() {
    this.mounted = !0;
    const e = this.findDOMNode();
    e && (0, z.addEvent)(e, re.touch.start, this.onTouchStart, {
      passive: !1
    });
  }
  componentWillUnmount() {
    this.mounted = !1;
    const e = this.findDOMNode();
    if (e) {
      const {
        ownerDocument: n
      } = e;
      (0, z.removeEvent)(n, re.mouse.move, this.handleDrag), (0, z.removeEvent)(n, re.touch.move, this.handleDrag), (0, z.removeEvent)(n, re.mouse.stop, this.handleDragStop), (0, z.removeEvent)(n, re.touch.stop, this.handleDragStop), (0, z.removeEvent)(e, re.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, z.removeUserSelectStyles)(n);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var e, n;
    return (e = this.props) !== null && e !== void 0 && e.nodeRef ? (n = this.props) === null || n === void 0 || (n = n.nodeRef) === null || n === void 0 ? void 0 : n.current : Jn.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ Te.cloneElement(Te.Children.only(this.props.children), {
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
xe.default = Ne;
Q(Ne, "displayName", "DraggableCore");
Q(Ne, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: H.default.bool,
  children: H.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: H.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: H.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(t, e) {
    if (t[e] && t[e].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: H.default.arrayOf(H.default.number),
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
  handle: H.default.string,
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
  cancel: H.default.string,
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
  nodeRef: H.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: H.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: H.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: H.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: H.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: H.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: ke.dontSetMe,
  style: ke.dontSetMe,
  transform: ke.dontSetMe
});
Q(Ne, "defaultProps", {
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
(function(t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return f.default;
    }
  }), t.default = void 0;
  var e = D(tt), n = b(rt), r = b(ft), a = b(Sn), i = E, s = ie, c = ae, f = b(xe), g = b(Fe);
  function b(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function v(u) {
    if (typeof WeakMap != "function")
      return null;
    var h = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap();
    return (v = function(y) {
      return y ? p : h;
    })(u);
  }
  function D(u, h) {
    if (!h && u && u.__esModule)
      return u;
    if (u === null || typeof u != "object" && typeof u != "function")
      return { default: u };
    var p = v(h);
    if (p && p.has(u))
      return p.get(u);
    var y = {}, P = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var S in u)
      if (S !== "default" && Object.prototype.hasOwnProperty.call(u, S)) {
        var O = P ? Object.getOwnPropertyDescriptor(u, S) : null;
        O && (O.get || O.set) ? Object.defineProperty(y, S, O) : y[S] = u[S];
      }
    return y.default = u, p && p.set(u, y), y;
  }
  function w() {
    return w = Object.assign ? Object.assign.bind() : function(u) {
      for (var h = 1; h < arguments.length; h++) {
        var p = arguments[h];
        for (var y in p)
          Object.prototype.hasOwnProperty.call(p, y) && (u[y] = p[y]);
      }
      return u;
    }, w.apply(this, arguments);
  }
  function L(u, h, p) {
    return h = X(h), h in u ? Object.defineProperty(u, h, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : u[h] = p, u;
  }
  function X(u) {
    var h = V(u, "string");
    return typeof h == "symbol" ? h : String(h);
  }
  function V(u, h) {
    if (typeof u != "object" || u === null)
      return u;
    var p = u[Symbol.toPrimitive];
    if (p !== void 0) {
      var y = p.call(u, h || "default");
      if (typeof y != "object")
        return y;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(u);
  }
  class I extends e.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(h, p) {
      let {
        position: y
      } = h, {
        prevPropsPosition: P
      } = p;
      return y && (!P || y.x !== P.x || y.y !== P.y) ? ((0, g.default)("Draggable: getDerivedStateFromProps %j", {
        position: y,
        prevPropsPosition: P
      }), {
        x: y.x,
        y: y.y,
        prevPropsPosition: {
          ...y
        }
      }) : null;
    }
    constructor(h) {
      super(h), L(this, "onDragStart", (p, y) => {
        if ((0, g.default)("Draggable: onDragStart: %j", y), this.props.onStart(p, (0, s.createDraggableData)(this, y)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), L(this, "onDrag", (p, y) => {
        if (!this.state.dragging)
          return !1;
        (0, g.default)("Draggable: onDrag: %j", y);
        const P = (0, s.createDraggableData)(this, y), S = {
          x: P.x,
          y: P.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: R,
            y: _
          } = S;
          S.x += this.state.slackX, S.y += this.state.slackY;
          const [k, q] = (0, s.getBoundPosition)(this, S.x, S.y);
          S.x = k, S.y = q, S.slackX = this.state.slackX + (R - S.x), S.slackY = this.state.slackY + (_ - S.y), P.x = S.x, P.y = S.y, P.deltaX = S.x - this.state.x, P.deltaY = S.y - this.state.y;
        }
        if (this.props.onDrag(p, P) === !1)
          return !1;
        this.setState(S);
      }), L(this, "onDragStop", (p, y) => {
        if (!this.state.dragging || this.props.onStop(p, (0, s.createDraggableData)(this, y)) === !1)
          return !1;
        (0, g.default)("Draggable: onDragStop: %j", y);
        const S = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: R,
            y: _
          } = this.props.position;
          S.x = R, S.y = _;
        }
        this.setState(S);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: h.position ? h.position.x : h.defaultPosition.x,
        y: h.position ? h.position.y : h.defaultPosition.y,
        prevPropsPosition: {
          ...h.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, h.position && !(h.onDrag || h.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
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
      var h, p;
      return (h = (p = this.props) === null || p === void 0 || (p = p.nodeRef) === null || p === void 0 ? void 0 : p.current) !== null && h !== void 0 ? h : r.default.findDOMNode(this);
    }
    render() {
      const {
        axis: h,
        bounds: p,
        children: y,
        defaultPosition: P,
        defaultClassName: S,
        defaultClassNameDragging: O,
        defaultClassNameDragged: R,
        position: _,
        positionOffset: k,
        scale: q,
        ...l
      } = this.props;
      let C = {}, T = null;
      const G = !!!_ || this.state.dragging, j = _ || P, J = {
        // Set left if horizontal drag is enabled
        x: (0, s.canDragX)(this) && G ? this.state.x : j.x,
        // Set top if vertical drag is enabled
        y: (0, s.canDragY)(this) && G ? this.state.y : j.y
      };
      this.state.isElementSVG ? T = (0, i.createSVGTransform)(J, k) : C = (0, i.createCSSTransform)(J, k);
      const F = (0, a.default)(y.props.className || "", S, {
        [O]: this.state.dragging,
        [R]: this.state.dragged
      });
      return /* @__PURE__ */ e.createElement(f.default, w({}, l, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ e.cloneElement(e.Children.only(y), {
        className: F,
        style: {
          ...y.props.style,
          ...C
        },
        transform: T
      }));
    }
  }
  t.default = I, L(I, "displayName", "Draggable"), L(I, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ...f.default.propTypes,
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
    axis: n.default.oneOf(["both", "x", "y", "none"]),
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
    bounds: n.default.oneOfType([n.default.shape({
      left: n.default.number,
      right: n.default.number,
      top: n.default.number,
      bottom: n.default.number
    }), n.default.string, n.default.oneOf([!1])]),
    defaultClassName: n.default.string,
    defaultClassNameDragging: n.default.string,
    defaultClassNameDragged: n.default.string,
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
    defaultPosition: n.default.shape({
      x: n.default.number,
      y: n.default.number
    }),
    positionOffset: n.default.shape({
      x: n.default.oneOfType([n.default.number, n.default.string]),
      y: n.default.oneOfType([n.default.number, n.default.string])
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
    position: n.default.shape({
      x: n.default.number,
      y: n.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: c.dontSetMe,
    style: c.dontSetMe,
    transform: c.dontSetMe
  }), L(I, "defaultProps", {
    ...f.default.defaultProps,
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
})(pt);
const {
  default: Ot,
  DraggableCore: nr
} = pt;
Oe.exports = Ot;
Oe.exports.default = Ot;
Oe.exports.DraggableCore = nr;
var rr = Oe.exports;
const or = /* @__PURE__ */ an(rr);
const ar = (t) => {
  const { formLayout: e } = t;
  var n = "palmyra-form-field-container";
  const r = e.options;
  if (r && r.columns)
    switch (r.columns) {
      case 2:
        return n + " palmyra-form-field-container-2column";
      case 3:
        return n + " palmyra-form-field-container-3column";
      case 4:
        return n + " palmyra-form-field-container-4column";
    }
  return n;
}, ir = ne(function(e, n) {
  const { formLayout: r, context: a } = e, { formData: i } = a, s = K({}), c = ar(e), f = "palmyra-form-field-data", g = nt(() => (b) => ht(b, s, b.label), [i.data]);
  return /* @__PURE__ */ o("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: r.fields.map((b, v) => /* @__PURE__ */ o("div", { className: c, children: /* @__PURE__ */ o("div", { className: f, children: g(b) }) }, b.attribute)) });
});
function sr(t) {
  return /* @__PURE__ */ o(
    or,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ o(Wt, { ...t })
    }
  );
}
const lr = ({ columns: t, isOpen: e, onClose: n, setFilter: r, defaultFilter: a = {} }) => {
  var { getFieldManager: i, getFilterData: s } = sn(a);
  const c = () => {
    r({});
  }, f = () => {
    var D = s();
    r && r(D);
  }, g = () => {
    n();
  }, b = (D) => {
    D.keyCode === 27 && g();
  }, v = rn(t);
  return /* @__PURE__ */ o("div", { className: "grid-filter-container", children: /* @__PURE__ */ o(
    Xt,
    {
      open: e,
      onClose: g,
      PaperComponent: sr,
      onKeyDown: b,
      PaperProps: { sx: { minWidth: "500px" } },
      children: /* @__PURE__ */ o(st, { onClickAway: n, children: /* @__PURE__ */ A("div", { children: [
        /* @__PURE__ */ A("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ o("div", { className: "grid-header-text-container", children: /* @__PURE__ */ o("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ o("div", { className: "grid-header-icon-container", onClick: g, children: /* @__PURE__ */ o(Jt, { className: "filter-cancel-icon" }) })
        ] }),
        /* @__PURE__ */ o("span", { className: "filter-header-border" }),
        /* @__PURE__ */ o("div", { className: "grid-filter-content", children: /* @__PURE__ */ o(be.Provider, { value: i, children: /* @__PURE__ */ o(
          gt,
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
              Renderer: ir
            }
          }
        ) }) }),
        /* @__PURE__ */ A("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ o(fe, { className: "filter-reset-btn", disableRipple: !0, onClick: c, children: "Reset" }),
          /* @__PURE__ */ o(fe, { className: "filter-button", disableRipple: !0, onClick: f, children: "Filter" })
        ] })
      ] }) })
    }
  ) });
}, cr = ne(function(e, n) {
  const { columns: r, children: a, EmptyChild: i, onRowClick: s, quickSearch: c } = e, f = i || Kt, g = e.customizer || nn, [b, v] = Y(!1), [D, w] = Y("standard"), [L, X] = Y(!1), [V, I] = Y(""), {
    setQueryFilter: u,
    setQuickSearch: h,
    setSortColumns: p,
    setEndPointOptions: y,
    gotoPage: P,
    setPageSize: S,
    getPageNo: O,
    refreshData: R,
    setQueryLimit: _,
    getQueryLimit: k,
    data: q,
    totalRecords: l,
    queryLimit: C,
    pageSizeOptions: T,
    filter: B
  } = Ce(e), G = n || K(null);
  ue(G, () => ({
    setFilter: (M) => {
      u(M);
    },
    refresh: () => {
      R();
    },
    resetFilter() {
      u({});
    },
    setEndPointOptions: (M) => {
      y(M);
    },
    addFilter: (M, se) => {
      u((qe) => (qe[M] = se, { ...qe }));
    },
    setQueryLimit: (M) => {
      _(M);
    },
    getQueryLimit: () => k(),
    setSortOptions(M) {
      p(M);
    },
    getCurrentData: () => q
  }), [k]);
  const j = (M, se) => {
    P(se);
  }, J = Ht(r, g), F = (M) => {
    w(M);
  }, W = () => {
    v(!b);
  }, d = () => D === "compact" ? { padding: "3px" } : D === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, x = () => D === "compact" ? { padding: "3px" } : D === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, U = () => {
    var M;
    switch (D) {
      case "compact":
        M = /* @__PURE__ */ o(Ge, { className: "density-icon" });
        break;
      case "comfortable":
        M = /* @__PURE__ */ o(Ue, { className: "density-icon" });
        break;
      default:
        M = /* @__PURE__ */ o(Qe, { className: "grid-button-icon" });
        break;
    }
    return M;
  }, he = (M) => {
    const se = M.target.value;
    I(se), se ? h(se) : u({});
  }, m = (M) => {
    s && s(M);
  }, N = (M) => {
    const se = parseInt(M.target.value, 10);
    S(se);
  }, te = () => {
    console.info("Export Clicked");
  }, Me = 200, Nt = !!e.pageSize;
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ A("div", { children: [
    a,
    /* @__PURE__ */ A("div", { className: "grid-header", children: [
      /* @__PURE__ */ o("div", { className: "grid-header-filter", children: !!c && /* @__PURE__ */ o(
        we,
        {
          sx: { width: Me },
          type: "text",
          value: V,
          onChange: he,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ o(lt, { position: "end", children: /* @__PURE__ */ o(ot, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ o(st, { onClickAway: () => {
        v(!1);
      }, children: /* @__PURE__ */ A("div", { className: "grid-header-button grid-density-btn", onClick: W, children: [
        /* @__PURE__ */ o(De, { title: "Density", placement: "top", children: /* @__PURE__ */ o(fe, { className: "grid-btn", disableRipple: !0, children: U() }) }),
        b && /* @__PURE__ */ o("div", { className: "density-dropdown-content", children: /* @__PURE__ */ A("ul", { children: [
          /* @__PURE__ */ A("li", { onClick: () => F("standard"), children: [
            /* @__PURE__ */ o(Qe, { className: "density-icon" }),
            /* @__PURE__ */ o("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ A("li", { onClick: () => F("compact"), children: [
            /* @__PURE__ */ o(Ge, { className: "density-icon" }),
            /* @__PURE__ */ o("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ A("li", { onClick: () => F("comfortable"), children: [
            /* @__PURE__ */ o(Ue, { className: "density-icon" }),
            /* @__PURE__ */ o("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      r.some((M) => M.searchable) && /* @__PURE__ */ A("div", { className: "grid-header-button grid-filter-btn", children: [
        /* @__PURE__ */ o(De, { title: "Filter", placement: "top", children: /* @__PURE__ */ o(fe, { className: "grid-btn", disableRipple: !0, onClick: () => X(!0), children: /* @__PURE__ */ o(Zt, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ o(
          lr,
          {
            columns: r,
            setFilter: u,
            defaultFilter: B,
            isOpen: L,
            onClose: () => X(!1)
          }
        )
      ] }),
      /* @__PURE__ */ o("div", { className: "grid-header-button grid-export-btn", onClick: te, children: /* @__PURE__ */ o(De, { title: "Export", placement: "top", children: /* @__PURE__ */ o(fe, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ o(en, { className: "grid-button-icon" }) }) }) }),
      e.onNewClick ? /* @__PURE__ */ o("div", { className: "grid-header-button", onClick: () => {
        e.onNewClick();
      }, children: /* @__PURE__ */ o(De, { title: "New", placement: "top", children: /* @__PURE__ */ o(fe, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ o(tn, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ o(Se, {})
    ] }),
    /* @__PURE__ */ o("div", { className: "grid-table", children: /* @__PURE__ */ o(
      jt,
      {
        columnDefs: J,
        EmptyChild: f,
        rowData: q,
        onRowClick: m,
        onRowStyle: d,
        onHeaderStyle: x,
        onSortColumn: p
      }
    ) }),
    /* @__PURE__ */ o("div", { className: "grid-footer", children: /* @__PURE__ */ o("div", { className: "grid-filter", children: Nt && /* @__PURE__ */ o(
      ct,
      {
        component: "div",
        count: l || 0,
        page: O(),
        onPageChange: j,
        rowsPerPage: C.limit,
        rowsPerPageOptions: T || [],
        onRowsPerPageChange: N
      }
    ) }) })
  ] }) });
}), Fo = ne(function(e, n) {
  const { columns: r, endPoint: a, storeFactory: i, layoutParams: s, pagination: c } = e, f = e.quickSearch || "", g = (v, D) => {
  };
  oe(() => {
    var v = $e.subscribe(e.topic, g);
    return () => {
      $e.unsubscribe(v);
    };
  }, [e.topic]);
  const b = {
    fields: r,
    pagination: c,
    quickSearch: f,
    storeOptions: {
      endPoint: a
    },
    actionOptions: e.actions
  };
  return /* @__PURE__ */ o(Se, { children: /* @__PURE__ */ o(Le.Provider, { value: i, children: /* @__PURE__ */ o(
    xt,
    {
      layout: b,
      context: s,
      defaultParams: e.defaultParams,
      customizer: e.customizer,
      ref: n
    }
  ) }) });
}), ur = ne(function(e, n) {
  const r = e.layout, [a, i] = Y(r.fields), s = r.pagination ? r.pagination : [15], c = pe(Le), f = pe(et);
  var g = r.storeOptions || {}, b = {};
  Qt(b, g, f);
  const v = c.getGridStore(b, r.storeOptions.endPoint);
  oe(() => {
    g.hasLayout && v.queryLayout({}).then((L) => {
      i(L.columns);
    });
  }, []);
  const { onClick: D, onNewClick: w } = ln(r.actionOptions, f);
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
    cr,
    {
      columns: a,
      store: v,
      pageSize: s,
      onRowClick: D,
      onNewClick: w,
      customizer: e.customizer,
      quickSearch: r.quickSearch,
      ref: n,
      defaultParams: e.defaultParams
    }
  ) });
}), xt = ur, dr = (t) => {
  const { layout: e, context: n } = t;
  var r = e.Container || dt;
  return /* @__PURE__ */ o(mt, { fallback: /* @__PURE__ */ o("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ o(r, { ...e, children: ((i) => /* @__PURE__ */ o(
    xt,
    {
      context: n,
      layout: i
    }
  ))(e.tableLayout) }) });
}, fr = (t) => {
  const { layout: e } = t;
  switch (e.type) {
    case "form":
      return /* @__PURE__ */ o(gt, { ...t });
    case "view":
      return /* @__PURE__ */ o(un, { ...t });
    case "grid":
      return /* @__PURE__ */ o(dr, { ...t });
    case "chart":
      return /* @__PURE__ */ o(Bt, { ...t });
    default:
      return /* @__PURE__ */ o(cn, { ...t });
  }
};
function mr(t, e) {
  var n = t || 1, r = e;
  return {
    w: n,
    h: r
  };
}
const Ft = (t) => {
  const { layout: e, context: n } = t, r = e.sections;
  function a(i, s, c) {
    const { w: f, h: g } = mr(i.width, i.height);
    return /* @__PURE__ */ o(Yt, { sx: { width: f, height: g }, children: /* @__PURE__ */ o(
      fr,
      {
        layout: i,
        context: s
      }
    ) }, (i.name || "tab") + c);
  }
  return /* @__PURE__ */ o("div", { style: { display: "flex", flexWrap: "wrap" }, children: r.map((i, s) => a(i, n, s)) });
}, Je = ne(function(e, n) {
  const { layout: r } = e;
  ue(n, () => ({
    resetFilter() {
    }
  }), []);
  const a = {}, i = r.tabs;
  return /* @__PURE__ */ o("div", { children: i.map((s, c) => /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
    Ft,
    {
      layout: s,
      context: a
    }
  ) }, s.name + c)) });
}), hr = (t) => {
  switch (t) {
    case "formEdit":
      return "edit";
    case "formNew":
      return "new";
    case "formView":
      return "view";
    default:
      return "edit";
  }
}, Ze = ne(function(e, n) {
  var b;
  const r = e.data || {}, { layout: a } = e;
  var { getFieldManager: i, getFormData: s, isFormValid: c } = dn(r, (b = e.callbacks) == null ? void 0 : b.onFormValidChange, hr(e.mode));
  ue(n, () => ({
    getData() {
      return s();
    },
    isValid() {
      return c();
    }
  }), []);
  const f = { formData: r }, g = a.tabs;
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(be.Provider, { value: i, children: g.map((v, D) => /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
    Ft,
    {
      layout: v,
      context: f
    }
  ) }, v.name + D)) }) });
}), gr = (t) => {
  switch (t) {
    case "grid":
      return Je;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), Ze;
    case "formEdit":
    case "formNew":
    case "formView":
      return Ze;
    default:
      return Je;
  }
}, No = ne(function(e, n) {
  const [r, a] = Y(e.layout), i = e.mode ? e.mode : r.type ? r.type : "grid", s = e.layoutParams || {}, c = gr(i), f = K(0);
  return oe(() => {
    a(e.layout), f.current < 999999 ? f.current++ : f.current = 0;
  }, [e.layout]), /* @__PURE__ */ o(mt, { fallback: /* @__PURE__ */ o("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ o(Le.Provider, { value: e.storeFactory, children: /* @__PURE__ */ o(et.Provider, { value: s, children: /* @__PURE__ */ o(c, { ...e, ref: (g) => {
    n && (n.current = g);
  } }, f.current) }) }) });
}), Mo = ne(function(e, n) {
  const { children: r, Child: a, childProps: i, pageSize: s } = e, c = n || K(null), {
    setQueryFilter: f,
    refreshData: g,
    setSortColumns: b,
    setEndPointOptions: v,
    setQuickSearch: D,
    gotoPage: w,
    setPageSize: L,
    getPageNo: X,
    setQueryLimit: V,
    getQueryLimit: I,
    data: u,
    totalRecords: h,
    pageSizeOptions: p,
    queryLimit: y
  } = Ce(e), P = e.listKeyProvider || ((l, C) => C);
  ue(c, () => ({
    setFilter: (l) => {
      f(l);
    },
    refresh: () => {
      g();
    },
    resetFilter() {
      f({});
    },
    setEndPointOptions: (l) => {
      v(l);
    },
    addFilter: (l, C) => {
      f((T) => (T[l] = C, { ...T }));
    },
    setQueryLimit: (l) => {
      V(l);
    },
    getQueryLimit: () => I(),
    getCurrentData: () => u,
    setSortOptions(l) {
      b(l);
    }
  }), [f]);
  const S = (l, C) => {
    w(C);
  }, O = (l) => {
    const C = l.target.value;
    D(C);
  }, R = (l) => {
    const C = parseInt(l.target.value, 10);
    L(C);
  }, _ = 200, k = !!s, q = !!e.quickSearch;
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ A("div", { className: "card-page-container", children: [
    r,
    /* @__PURE__ */ A("div", { children: [
      /* @__PURE__ */ A("div", { className: "card-header", children: [
        /* @__PURE__ */ o("div", { className: "card-filter", children: q && /* @__PURE__ */ o(
          we,
          {
            sx: { width: _ },
            type: "text",
            onChange: O,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ o(lt, { position: "end", children: /* @__PURE__ */ o(ot, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ o("div", { className: "card-pagination", children: k && /* @__PURE__ */ o(
          ct,
          {
            component: "div",
            count: h || 0,
            page: X(),
            onPageChange: S,
            rowsPerPage: y.limit,
            rowsPerPageOptions: p || [],
            onRowsPerPageChange: R
          }
        ) })
      ] }),
      /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
        qt,
        {
          Child: a,
          childKeyProvider: P,
          preProcess: e.preProcess,
          dataList: u,
          childProps: i,
          EmptyChild: e.EmptyChild
        }
      ) })
    ] })
  ] }) });
});
export {
  No as F,
  xt as G,
  hn as M,
  Fo as P,
  Mo as S,
  Ft as T,
  cr as a,
  Oo as b,
  gn as c,
  vn as d,
  gt as e,
  ir as f,
  ht as g,
  lr as h,
  dr as i,
  fr as j,
  Je as k,
  Ze as l,
  Ce as u
};
