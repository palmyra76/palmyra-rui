import "../assets/ServerCardLayout.css";
import on from "../palmyra/mui/form/MuiDatePicker.js";
import an from "../palmyra/mui/form/MuiDateTimePicker.js";
import sn from "../palmyra/mui/form/MuiRadioGroup.js";
import ht from "../palmyra/mui/form/MuiSelect.js";
import ln from "../palmyra/mui/form/MuiTextArea.js";
import cn from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import dn from "../palmyra/mui/form/MuiCheckBox.js";
import un from "../palmyra/mui/form/MuiSwitch.js";
import fn from "../palmyra/mui/form/MuiIOSSwitch.js";
import hn from "../palmyra/mui/form/MuiPassword.js";
import mn from "../palmyra/mui/form/MuiNumberField.js";
import Ze from "../palmyra/mui/form/FieldDecorator.js";
import { FieldManagerContext as Oe, StoreFactoryContext as Je, LayoutParamsContext as xt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as r, jsxs as g, Fragment as ye } from "react/jsx-runtime";
import Nt, { useState as I, useRef as Z, useEffect as ae, forwardRef as oe, useContext as we, useImperativeHandle as he, useMemo as Pt } from "react";
import { a as et } from "./index.esm2.js";
import { FormControlLabel as mt, Checkbox as gt, FormControl as ve, FormHelperText as tt, Autocomplete as Ot, TextField as Fe, CircularProgress as Ft, Dialog as gn, ClickAwayListener as xe, Button as le, Paper as pn, InputAdornment as nt, Select as rt, MenuItem as ot, Pagination as at, Box as yn, Stack as vn } from "@mui/material";
import bn from "../palmyra/layout/card/CardLayout.js";
import Cn from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as it, getFieldLabel as st } from "../palmyra/mui/form/MuiUtil.js";
import { hasDot as Ne } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as Pe } from "../palmyra/form/FormUtil.js";
import { T as pt, a as yt, b as Sn, c as lt, d as Rt } from "./index.esm.js";
import { delay as Mt, delayGenerator as Dn, mergeDeep as wn } from "../palmyra/utils/index.js";
import xn from "../palmyra/mui/form/MuiDateRangePicker.js";
import Nn from "../palmyra/mui/form/MuiIntegerField.js";
import kt from "../palmyra/layout/container/SectionContainer.js";
import Pn from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as Tt } from "../palmyra/grid/base/ColumnConverter.js";
import Et from "../palmyra/grid/base/EmptyChildTable.js";
import At from "../palmyra/grid/base/TableX.js";
import { Close as On, KeyboardArrowDown as Me, Menu as ke, DensitySmall as Te, DensityLarge as Ee, Add as Lt } from "@mui/icons-material";
import { NoopCustomizer as _t } from "../palmyra/grid/Types.js";
import { convertToField as Fn } from "../palmyra/grid/base/GridFieldConverter.js";
import { a as Rn, g as Mn } from "./_commonjsHelpers.js";
import { p as Vt } from "./index.js";
import It from "react-dom";
import { createFilterData as kn } from "../palmyra/form/PalmyraFilterManager.js";
import { G as Bt } from "./iconBase.js";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import { topic as vt } from "../palmyra/utils/pubsub/topic.js";
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
import { getActionPublishers as Tn } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as Xt } from "../palmyra/layout/ErrorBoundary.js";
import En from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import An from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { u as Ln } from "./PalmyraFieldManager.js";
import { useKeyValue as _n } from "../palmyra/utils/pubsub/PubSubHelper.js";
const be = (t) => {
  var K, Q;
  const { store: e, quickSearch: n } = t, o = t.fetchAll != !1, [a, i] = I(t.endPointOptions), [s, l] = I(null), h = ((K = t.defaultParams) == null ? void 0 : K.filter) || {}, m = ((Q = t.defaultParams) == null ? void 0 : Q.sort) || {}, [C, b] = t.filterTopic ? _n(t.filterTopic, h) : I(h), [N, x] = I({}), A = Z(t.initialFetch == !1), B = t.pageSize ? t.pageSize : 15;
  var T = B instanceof Array ? B : [B], X = B instanceof Array ? B[0] : B;
  const [f, u] = I({ limit: X, offset: 0, total: !0 }), [y, p] = I(null), D = () => Math.round(f.offset / f.limit), w = () => f, P = (L) => {
    u((_) => ({ limit: _.limit, total: _.total, offset: L * _.limit }));
  }, V = (L) => {
    const _ = L > 10 || L == -1 ? L : 15;
    u((c) => {
      const R = Math.floor(c.offset / _) * _;
      return { limit: _, total: c.total, offset: R };
    });
  }, q = () => C ? Object.keys(C).length == 0 : !1, W = (L) => {
    p((_) => (setTimeout(() => {
      t.onDataChange && t.onDataChange(y, _);
    }, 300), L));
  };
  ae(() => {
    if (A.current) {
      A.current = !1;
      return;
    }
    (o || !q()) && Y();
  }, [f, N, a]);
  const Y = () => {
    const _ = {
      sortOrder: N && Object.keys(N).length > 0 ? N : m,
      total: !0,
      endPointVars: a,
      ...f,
      filter: { ...C, ...h }
    };
    if (e)
      try {
        e.query(_).then((c) => {
          W(c.result), l(c.total);
        }).catch((c) => {
          var R = c.response ? c.response : c;
          console.error("error while fetching", R), F();
        });
      } catch (c) {
        console.error(c), v();
      }
    else
      console.error("Store is not provided for the Grid"), v();
  }, v = () => {
    W([]), l(0);
  }, F = () => {
    W(void 0), l(null);
  };
  return {
    setQueryFilter: (L) => {
      typeof L == "function" || L && Object.keys(L).length > 0 ? b(L) : b({}), P(0);
    },
    setQuickSearch: (L) => {
      const _ = n;
      b(L ? (c) => (c[_] = L, { ...c }) : (c) => (delete c[_], { ...c })), P(0);
    },
    setSortColumns: (L) => {
      x(L);
    },
    setEndPointOptions: i,
    refreshData: Y,
    gotoPage: P,
    setPageSize: V,
    getPageNo: D,
    getQueryLimit: w,
    setQueryLimit: u,
    filter: C,
    queryLimit: f,
    data: y,
    totalRecords: s,
    pageSizeOptions: T
  };
};
function bt(t) {
  return t ? Array.isArray(t) ? t : typeof t == "string" ? t.split(",") : [t] : [];
}
const Ko = oe(function(e, n) {
  const o = we(Oe), a = n || Z(null), i = o(e, "checkbox", a), { mutateOptions: s, setMutateOptions: l } = i, [h, m] = I(!1), C = bt(i.data), b = i.error, N = i.eventListeners, A = { store: i.store, pageSize: -1 }, { data: B } = be(A), T = B, X = Z(null), f = e.lookupOptions || {}, u = f.idAttribute || "id", y = f.displayAttribute || "name", p = e.showSelectedOnly && e.readonly, D = Ne(u) ? (v) => Pe(u, v) : (v) => v[u], w = Ne(y) ? (v) => Pe(y, v) : (v) => v[y];
  he(a, () => ({
    focus() {
      X.current.focus();
    },
    isValid() {
      return !b.status;
    },
    clear() {
      i.setData("", !0);
    },
    getValue() {
      return i.getData();
    },
    setValue(v, F = !1) {
      i.setData(v, F);
    },
    setVisible(v) {
      l((F) => ({ ...F, visible: v }));
    },
    setRequired(v) {
      l((F) => ({ ...F, required: v }));
    },
    setReadOnly(v) {
      l((F) => ({ ...F, readonly: v }));
    },
    setAttribute(v) {
      l((F) => ({ ...F, ...v }));
    },
    setOptions(v) {
    },
    getOptions() {
    }
  }), [i]);
  var P = it(e, i.data, e.label);
  e.readonly && (P.inputprops = { readOnly: !0 });
  function V(v, F) {
    const S = bt(i.data);
    var O = S.indexOf(v);
    F ? O < 0 && S.push(v) : O >= 0 && S.splice(O, 1), N.onValueChange(S.toString());
  }
  var q = {
    onBlur: N.onBlur,
    onFocus: N.onFocus,
    onChange: (v) => {
      V(v.target.value, v.target.checked);
    }
  };
  const W = (v) => {
    const F = v.toString();
    return C.includes(F);
  }, Y = (v) => {
    const F = v.target.checked;
    m(F);
    var S = [];
    F && T.map((O) => {
      S.push(D(O));
    }), N.onValueChange(S.toString());
  };
  return /* @__PURE__ */ r("div", { className: e.className, children: s.visible && /* @__PURE__ */ g(
    Ze,
    {
      label: st(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: [
        /* @__PURE__ */ r("div", { children: e.hideSelectAll ? /* @__PURE__ */ r(ye, {}) : /* @__PURE__ */ r(
          mt,
          {
            control: /* @__PURE__ */ r(
              gt,
              {
                icon: /* @__PURE__ */ r(pt, { style: { fontSize: "20px" } }),
                checkedIcon: /* @__PURE__ */ r(yt, { style: { fontSize: "20px" } }),
                onChange: Y
              }
            ),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ g(
          ve,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: b.status,
            ...P,
            children: [
              T ? T.filter((v) => p ? W(D(v)) : !0).map((v) => /* @__PURE__ */ r(
                mt,
                {
                  value: D(v),
                  control: /* @__PURE__ */ r(
                    gt,
                    {
                      icon: /* @__PURE__ */ r(pt, { style: { fontSize: "20px" } }),
                      checkedIcon: /* @__PURE__ */ r(yt, { style: { fontSize: "20px" } }),
                      ...q,
                      checked: W(D(v)),
                      disabled: e.readonly
                    }
                  ),
                  label: w(v)
                },
                D(v)
              )) : /* @__PURE__ */ r("div", { children: "No options provided" }),
              /* @__PURE__ */ r(tt, { className: "form-error-text", children: b.message })
            ]
          }
        )
      ]
    }
  ) });
}), Vn = Dn(100), In = oe(function(e, n) {
  const o = we(Oe), a = n || Z(null), i = Z(null), s = Z(0), [l, h] = I([]), [m, C] = I(""), [b, N] = I(!1), x = o(e, "serverlookup", a), A = e.store || x.store, B = e.lookupOptions || {}, T = B.idAttribute || "id", X = B.displayAttribute || "name", f = X, u = {
    store: A,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: f,
    initialFetch: !1
  }, y = be(u), p = x.eventListeners, D = x.error, { mutateOptions: w, setMutateOptions: P } = x, V = x.data, q = b && l.length < (V ? 2 : 1), { setQueryFilter: W, setEndPointOptions: Y, setQuickSearch: v, totalRecords: F, refreshData: S } = y, O = y.data, z = Ne(T) ? (d) => Pe(T, d) : (d) => d == null ? void 0 : d[T], K = Ne(X) ? (d) => Pe(X, d) : (d) => d == null ? void 0 : d[X];
  ae(() => {
    var d = V != "" ? V : void 0;
    d && h([d]);
  }, [x.data]), ae(() => {
    const d = O ? [...O] : [], E = V != "" ? V : void 0, J = z(E), Ce = K(E);
    d && J && Ce && !R(d, J) && d.unshift(E), h(d), s.current < F && (s.current = F);
  }, [O, F]), ae(() => {
    Mt(Q);
  }, [m]), ae(() => {
    Vn(Q);
  }, [b]);
  function Q() {
    b && (m.length > 0 && m != K(V) ? v("*" + m + "*") : O ? v(null) : S());
  }
  var L = {
    onBlur: p.onBlur,
    onFocus: p.onFocus,
    onChange: (d, E) => {
      _(E);
    },
    onInputChange: (d, E) => (C(E), !0)
  };
  const _ = (d) => {
    p.onValueChange(d);
  }, c = (d) => typeof d == "object" ? K(d) + "" : (console.log(d), "");
  function R(d, E) {
    return d.find((J) => {
      if (z(J) == E)
        return J;
    });
  }
  he(a, () => ({
    focus() {
      i.current.focus();
    },
    isValid() {
      return !D.status;
    },
    clear() {
      e.multiple ? x.setData([], !0) : x.setData(void 0, !0);
    },
    getValue() {
      return x.getData();
    },
    setValue(d, E = !1) {
      x.setData(d, E);
    },
    setVisible(d) {
      P((E) => ({ ...E, visible: d }));
    },
    setRequired(d) {
      P((E) => ({ ...E, required: d }));
    },
    setReadOnly(d) {
      P((E) => ({ ...E, readonly: d }));
    },
    setAttribute(d) {
      P((E) => ({ ...E, ...d }));
    },
    setFilter(d) {
      W(d);
    },
    resetFilter() {
      W({});
    },
    setEndPointOptions(d) {
      Y(d);
    },
    getCurrentData: () => V,
    refresh: () => {
      S();
    },
    addFilter(d, E) {
      W((J) => (J[d] = E, { ...J }));
    },
    setDefaultFilter(d) {
    },
    setSortOptions(d) {
    }
  }), [x, W]);
  var H = it(e, V, e.label);
  w.readonly && (H.inputProps = { readOnly: !0 });
  const me = (d, E) => d instanceof Array ? d.some((J) => z(J) == z(E)) : z(d) == z(E);
  return /* @__PURE__ */ r(
    Ze,
    {
      label: st(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ g(ve, { fullWidth: !0, error: D.status, children: [
        /* @__PURE__ */ r(
          Ot,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: e.multiple,
            readOnly: e.readonly,
            renderOption: e.renderOption,
            isOptionEqualToValue: me,
            filterOptions: (d) => d,
            renderInput: (d) => /* @__PURE__ */ r(
              Fe,
              {
                ...d,
                inputRef: (E) => {
                  i.current = E;
                },
                variant: e.variant || "standard",
                label: e.label,
                autoFocus: e.autoFocus,
                required: e.required,
                InputProps: {
                  ...d.InputProps,
                  endAdornment: /* @__PURE__ */ g(ye, { children: [
                    q ? /* @__PURE__ */ r(Ft, { color: "inherit", size: 18 }) : null,
                    d.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: c,
            ...H,
            options: l,
            open: b,
            onClose: () => {
              N(!1);
            },
            onOpen: (d) => {
              N(!0);
            },
            ...L
          }
        ),
        /* @__PURE__ */ r(tt, { className: "form-error-text", children: D.message })
      ] })
    }
  );
}), Bn = oe(function(e, n) {
  const o = we(Oe), a = n || Z(null), i = Z(null), s = Z(0), [l, h] = I([]), [m, C] = I(""), [b, N] = I(!1), x = o(e, "autoComplete", a), A = e.store || x.store, T = (e.lookupOptions || {}).attribute || "name", X = T, f = {
    store: A,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: X,
    initialFetch: !1
  }, u = be(f), y = x.eventListeners, p = x.error, { mutateOptions: D, setMutateOptions: w } = x, P = x.data, V = b && l.length < (P ? 2 : 1), { setQueryFilter: q, setEndPointOptions: W, setQuickSearch: Y, totalRecords: v, refreshData: F } = u, S = u.data, O = Ne(T) ? (c) => Pe(T, c) : (c) => c == null ? void 0 : c[T];
  ae(() => {
    var c = P != "" ? P : void 0;
    c && h([c]);
  }, [x.data]), ae(() => {
    const R = (S ? [...S] : []).map((me) => O(me)), H = P != "" ? P : void 0;
    R && H && !L(R, H) && R.unshift(H), h(R), s.current < v && (s.current = v);
  }, [S, v]), ae(() => {
    Mt(z);
  }, [m, b]);
  function z() {
    b && (m.length > 0 && m != P ? Y("*" + m + "*") : S ? Y(null) : F());
  }
  var K = {
    onBlur: (c) => {
      Q(m), y.onBlur(m);
    },
    onFocus: y.onFocus,
    onChange: (c, R) => {
      Q(R);
    },
    onInputChange: (c, R) => (C(R), !0)
  };
  const Q = (c) => {
    y.onValueChange(c);
  };
  function L(c, R) {
    return c.find((H) => {
      if (H == R)
        return H;
    });
  }
  he(a, () => ({
    focus() {
      i.current.focus();
    },
    isValid() {
      return !p.status;
    },
    clear() {
      x.setData(void 0, !0);
    },
    getValue() {
      return x.getData();
    },
    setValue(c, R = !1) {
      x.setData(c, R);
    },
    setVisible(c) {
      w((R) => ({ ...R, visible: c }));
    },
    setRequired(c) {
      w((R) => ({ ...R, required: c }));
    },
    setReadOnly(c) {
      w((R) => ({ ...R, readonly: c }));
    },
    setAttribute(c) {
      w((R) => ({ ...R, ...c }));
    },
    setFilter(c) {
      q(c);
    },
    resetFilter() {
      q({});
    },
    setEndPointOptions(c) {
      W(c);
    },
    getCurrentData: () => P,
    refresh: () => {
      F();
    },
    addFilter(c, R) {
      q((H) => (H[c] = R, { ...H }));
    },
    setDefaultFilter(c) {
    },
    setSortOptions(c) {
    }
  }), [x, q]);
  var _ = it(e, P, e.label);
  return D.readonly && (_.inputProps = { readOnly: !0 }), /* @__PURE__ */ r(
    Ze,
    {
      label: st(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ g(ve, { fullWidth: !0, error: p.status, children: [
        /* @__PURE__ */ r(
          Ot,
          {
            freeSolo: !0,
            autoSelect: !0,
            readOnly: e.readonly,
            renderOption: e.renderOption,
            filterOptions: (c) => c,
            renderInput: (c) => /* @__PURE__ */ r(
              Fe,
              {
                ...c,
                inputRef: (R) => {
                  i.current = R;
                },
                variant: e.variant || "standard",
                label: e.label,
                autoFocus: e.autoFocus,
                required: e.required,
                ..._,
                InputProps: {
                  ...c.InputProps,
                  endAdornment: /* @__PURE__ */ g(ye, { children: [
                    V ? /* @__PURE__ */ r(Ft, { color: "inherit", size: 18 }) : null,
                    c.InputProps.endAdornment
                  ] })
                }
              }
            ),
            ..._,
            options: l,
            open: b,
            onClose: () => {
              N(!1);
            },
            onOpen: (c) => {
              N(!0);
            },
            ...K
          }
        ),
        /* @__PURE__ */ r(tt, { className: "form-error-text", children: p.message })
      ] })
    }
  );
}), Xn = (t) => {
  const { fieldDef: e } = t;
  return /* @__PURE__ */ g("div", { children: [
    "invalid type " + e.type,
    " "
  ] });
}, U = (t, e) => {
  const n = t.fieldDef;
  return /* @__PURE__ */ r(
    e,
    {
      ...n,
      label: t.title
    },
    n.title + n.attribute
  );
}, Wt = (t, e, n) => {
  const { type: o } = t, a = { fieldDef: t, title: n };
  switch (o) {
    case "string":
      return U(a, cn);
    case "radio":
      return U(a, sn);
    case "select":
      return U(a, ht);
    case "date":
      return U(a, on);
    case "datetime":
      return U(a, an);
    case "checkbox":
      return U(a, dn);
    case "serverlookup":
      return U(a, In);
    case "textarea":
      return U(a, ln);
    case "switch":
      return U(a, un);
    case "iosswitch":
      return U(a, fn);
    case "password":
      return U(a, hn);
    case "float":
    case "number":
    case "numbersOnly":
      return U(a, mn);
    case "integer":
      return U(a, Nn);
    case "multiSelect":
      return U(a, ht);
    case "dateRange":
      return U(a, xn);
    case "autoComplete":
      return U(a, Bn);
    default:
      return Xn(a);
  }
}, Wn = oe(function(e, n) {
  var C;
  const { formLayout: o, context: a } = e, { formData: i } = a, s = o.Container;
  Z({});
  const l = Pt(() => (b) => Wt(b), [i.data]);
  var h = ((C = o.options) == null ? void 0 : C.columns) || 1, m = { columns: h };
  return s ? /* @__PURE__ */ r("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: o.fields.map((b, N) => /* @__PURE__ */ r(
    s,
    {
      index: N,
      field: b,
      label: b.title,
      options: m,
      children: l(b)
    },
    b.attribute + b.name + b.type
  )) }) : /* @__PURE__ */ r("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: o.fields.map((b, N) => l(b)) });
}), qt = (t) => {
  const { layout: e, context: n } = t;
  var o = e.Renderer || Wn, a = e.Container || kt;
  const i = (s) => /* @__PURE__ */ r(
    o,
    {
      context: n,
      formLayout: s
    }
  );
  return /* @__PURE__ */ r(
    a,
    {
      hideTitle: e.hideTitle,
      title: e.title,
      name: e.name,
      children: /* @__PURE__ */ r(Pn, { columns: e.columns, children: i(e.formLayout) })
    }
  );
};
var Ae = { exports: {} }, zt = {};
function Gt(t) {
  var e, n, o = "";
  if (typeof t == "string" || typeof t == "number")
    o += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = Gt(t[e])) && (o && (o += " "), o += n);
    else
      for (e in t)
        t[e] && (o && (o += " "), o += e);
  return o;
}
function Ct() {
  for (var t, e, n = 0, o = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = Gt(t)) && (o && (o += " "), o += e);
  return o;
}
const qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Ct,
  default: Ct
}, Symbol.toStringTag, { value: "Module" })), zn = /* @__PURE__ */ Rn(qn);
var G = {}, ce = {};
Object.defineProperty(ce, "__esModule", {
  value: !0
});
ce.dontSetMe = Un;
ce.findInArray = Gn;
ce.int = Hn;
ce.isFunction = Qn;
ce.isNum = Yn;
function Gn(t, e) {
  for (let n = 0, o = t.length; n < o; n++)
    if (e.apply(e, [t[n], n, t]))
      return t[n];
}
function Qn(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Function]";
}
function Yn(t) {
  return typeof t == "number" && !isNaN(t);
}
function Hn(t) {
  return parseInt(t, 10);
}
function Un(t, e, n) {
  if (t[e])
    return new Error("Invalid prop ".concat(e, " passed to ").concat(n, " - do not set this, set it on the child."));
}
var ge = {};
Object.defineProperty(ge, "__esModule", {
  value: !0
});
ge.browserPrefixToKey = Yt;
ge.browserPrefixToStyle = $n;
ge.default = void 0;
ge.getPrefix = Qt;
const $e = ["Moz", "Webkit", "O", "ms"];
function Qt() {
  var t;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const n = (t = window.document) === null || t === void 0 || (t = t.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!n || e in n)
    return "";
  for (let o = 0; o < $e.length; o++)
    if (Yt(e, $e[o]) in n)
      return $e[o];
  return "";
}
function Yt(t, e) {
  return e ? "".concat(e).concat(Kn(t)) : t;
}
function $n(t, e) {
  return e ? "-".concat(e.toLowerCase(), "-").concat(t) : t;
}
function Kn(t) {
  let e = "", n = !0;
  for (let o = 0; o < t.length; o++)
    n ? (e += t[o].toUpperCase(), n = !1) : t[o] === "-" ? n = !0 : e += t[o];
  return e;
}
ge.default = Qt();
Object.defineProperty(G, "__esModule", {
  value: !0
});
G.addClassName = $t;
G.addEvent = Jn;
G.addUserSelectStyles = dr;
G.createCSSTransform = ir;
G.createSVGTransform = sr;
G.getTouch = lr;
G.getTouchIdentifier = cr;
G.getTranslation = ct;
G.innerHeight = rr;
G.innerWidth = or;
G.matchesSelector = Ut;
G.matchesSelectorAndParentsTo = Zn;
G.offsetXYFromParent = ar;
G.outerHeight = tr;
G.outerWidth = nr;
G.removeClassName = Kt;
G.removeEvent = er;
G.removeUserSelectStyles = ur;
var re = ce, St = jn(ge);
function Ht(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Ht = function(o) {
    return o ? n : e;
  })(t);
}
function jn(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var n = Ht(e);
  if (n && n.has(t))
    return n.get(t);
  var o = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(t, i)) {
      var s = a ? Object.getOwnPropertyDescriptor(t, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = t[i];
    }
  return o.default = t, n && n.set(t, o), o;
}
let Re = "";
function Ut(t, e) {
  return Re || (Re = (0, re.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, re.isFunction)(t[n]);
  })), (0, re.isFunction)(t[Re]) ? t[Re](e) : !1;
}
function Zn(t, e, n) {
  let o = t;
  do {
    if (Ut(o, e))
      return !0;
    if (o === n)
      return !1;
    o = o.parentNode;
  } while (o);
  return !1;
}
function Jn(t, e, n, o) {
  if (!t)
    return;
  const a = {
    capture: !0,
    ...o
  };
  t.addEventListener ? t.addEventListener(e, n, a) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n;
}
function er(t, e, n, o) {
  if (!t)
    return;
  const a = {
    capture: !0,
    ...o
  };
  t.removeEventListener ? t.removeEventListener(e, n, a) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null;
}
function tr(t) {
  let e = t.clientHeight;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e += (0, re.int)(n.borderTopWidth), e += (0, re.int)(n.borderBottomWidth), e;
}
function nr(t) {
  let e = t.clientWidth;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e += (0, re.int)(n.borderLeftWidth), e += (0, re.int)(n.borderRightWidth), e;
}
function rr(t) {
  let e = t.clientHeight;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e -= (0, re.int)(n.paddingTop), e -= (0, re.int)(n.paddingBottom), e;
}
function or(t) {
  let e = t.clientWidth;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e -= (0, re.int)(n.paddingLeft), e -= (0, re.int)(n.paddingRight), e;
}
function ar(t, e, n) {
  const a = e === e.ownerDocument.body ? {
    left: 0,
    top: 0
  } : e.getBoundingClientRect(), i = (t.clientX + e.scrollLeft - a.left) / n, s = (t.clientY + e.scrollTop - a.top) / n;
  return {
    x: i,
    y: s
  };
}
function ir(t, e) {
  const n = ct(t, e, "px");
  return {
    [(0, St.browserPrefixToKey)("transform", St.default)]: n
  };
}
function sr(t, e) {
  return ct(t, e, "");
}
function ct(t, e, n) {
  let {
    x: o,
    y: a
  } = t, i = "translate(".concat(o).concat(n, ",").concat(a).concat(n, ")");
  if (e) {
    const s = "".concat(typeof e.x == "string" ? e.x : e.x + n), l = "".concat(typeof e.y == "string" ? e.y : e.y + n);
    i = "translate(".concat(s, ", ").concat(l, ")") + i;
  }
  return i;
}
function lr(t, e) {
  return t.targetTouches && (0, re.findInArray)(t.targetTouches, (n) => e === n.identifier) || t.changedTouches && (0, re.findInArray)(t.changedTouches, (n) => e === n.identifier);
}
function cr(t) {
  if (t.targetTouches && t.targetTouches[0])
    return t.targetTouches[0].identifier;
  if (t.changedTouches && t.changedTouches[0])
    return t.changedTouches[0].identifier;
}
function dr(t) {
  if (!t)
    return;
  let e = t.getElementById("react-draggable-style-el");
  e || (e = t.createElement("style"), e.type = "text/css", e.id = "react-draggable-style-el", e.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, e.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, t.getElementsByTagName("head")[0].appendChild(e)), t.body && $t(t.body, "react-draggable-transparent-selection");
}
function ur(t) {
  if (t)
    try {
      if (t.body && Kt(t.body, "react-draggable-transparent-selection"), t.selection)
        t.selection.empty();
      else {
        const e = (t.defaultView || window).getSelection();
        e && e.type !== "Caret" && e.removeAllRanges();
      }
    } catch {
    }
}
function $t(t, e) {
  t.classList ? t.classList.add(e) : t.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) || (t.className += " ".concat(e));
}
function Kt(t, e) {
  t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"), "");
}
var de = {};
Object.defineProperty(de, "__esModule", {
  value: !0
});
de.canDragX = mr;
de.canDragY = gr;
de.createCoreData = yr;
de.createDraggableData = vr;
de.getBoundPosition = fr;
de.getControlPosition = pr;
de.snapToGrid = hr;
var ne = ce, pe = G;
function fr(t, e, n) {
  if (!t.props.bounds)
    return [e, n];
  let {
    bounds: o
  } = t.props;
  o = typeof o == "string" ? o : br(o);
  const a = dt(t);
  if (typeof o == "string") {
    const {
      ownerDocument: i
    } = a, s = i.defaultView;
    let l;
    if (o === "parent" ? l = a.parentNode : l = i.querySelector(o), !(l instanceof s.HTMLElement))
      throw new Error('Bounds selector "' + o + '" could not find an element.');
    const h = l, m = s.getComputedStyle(a), C = s.getComputedStyle(h);
    o = {
      left: -a.offsetLeft + (0, ne.int)(C.paddingLeft) + (0, ne.int)(m.marginLeft),
      top: -a.offsetTop + (0, ne.int)(C.paddingTop) + (0, ne.int)(m.marginTop),
      right: (0, pe.innerWidth)(h) - (0, pe.outerWidth)(a) - a.offsetLeft + (0, ne.int)(C.paddingRight) - (0, ne.int)(m.marginRight),
      bottom: (0, pe.innerHeight)(h) - (0, pe.outerHeight)(a) - a.offsetTop + (0, ne.int)(C.paddingBottom) - (0, ne.int)(m.marginBottom)
    };
  }
  return (0, ne.isNum)(o.right) && (e = Math.min(e, o.right)), (0, ne.isNum)(o.bottom) && (n = Math.min(n, o.bottom)), (0, ne.isNum)(o.left) && (e = Math.max(e, o.left)), (0, ne.isNum)(o.top) && (n = Math.max(n, o.top)), [e, n];
}
function hr(t, e, n) {
  const o = Math.round(e / t[0]) * t[0], a = Math.round(n / t[1]) * t[1];
  return [o, a];
}
function mr(t) {
  return t.props.axis === "both" || t.props.axis === "x";
}
function gr(t) {
  return t.props.axis === "both" || t.props.axis === "y";
}
function pr(t, e, n) {
  const o = typeof e == "number" ? (0, pe.getTouch)(t, e) : null;
  if (typeof e == "number" && !o)
    return null;
  const a = dt(n), i = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, pe.offsetXYFromParent)(o || t, i, n.props.scale);
}
function yr(t, e, n) {
  const o = !(0, ne.isNum)(t.lastX), a = dt(t);
  return o ? {
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
function vr(t, e) {
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
function br(t) {
  return {
    left: t.left,
    top: t.top,
    right: t.right,
    bottom: t.bottom
  };
}
function dt(t) {
  const e = t.findDOMNode();
  if (!e)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return e;
}
var Le = {}, _e = {};
Object.defineProperty(_e, "__esModule", {
  value: !0
});
_e.default = Cr;
function Cr() {
}
Object.defineProperty(Le, "__esModule", {
  value: !0
});
Le.default = void 0;
var Ke = Dr(Nt), ee = ut(Vt), Sr = ut(It), $ = G, ue = de, je = ce, De = ut(_e);
function ut(t) {
  return t && t.__esModule ? t : { default: t };
}
function jt(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (jt = function(o) {
    return o ? n : e;
  })(t);
}
function Dr(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var n = jt(e);
  if (n && n.has(t))
    return n.get(t);
  var o = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(t, i)) {
      var s = a ? Object.getOwnPropertyDescriptor(t, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = t[i];
    }
  return o.default = t, n && n.set(t, o), o;
}
function j(t, e, n) {
  return e = wr(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function wr(t) {
  var e = xr(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function xr(t, e) {
  if (typeof t != "object" || t === null)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e || "default");
    if (typeof o != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
const se = {
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
let fe = se.mouse, Ve = class extends Ke.Component {
  constructor() {
    super(...arguments), j(this, "dragging", !1), j(this, "lastX", NaN), j(this, "lastY", NaN), j(this, "touchIdentifier", null), j(this, "mounted", !1), j(this, "handleDragStart", (e) => {
      if (this.props.onMouseDown(e), !this.props.allowAnyClick && typeof e.button == "number" && e.button !== 0)
        return !1;
      const n = this.findDOMNode();
      if (!n || !n.ownerDocument || !n.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      const {
        ownerDocument: o
      } = n;
      if (this.props.disabled || !(e.target instanceof o.defaultView.Node) || this.props.handle && !(0, $.matchesSelectorAndParentsTo)(e.target, this.props.handle, n) || this.props.cancel && (0, $.matchesSelectorAndParentsTo)(e.target, this.props.cancel, n))
        return;
      e.type === "touchstart" && e.preventDefault();
      const a = (0, $.getTouchIdentifier)(e);
      this.touchIdentifier = a;
      const i = (0, ue.getControlPosition)(e, a, this);
      if (i == null)
        return;
      const {
        x: s,
        y: l
      } = i, h = (0, ue.createCoreData)(this, s, l);
      (0, De.default)("DraggableCore: handleDragStart: %j", h), (0, De.default)("calling", this.props.onStart), !(this.props.onStart(e, h) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, $.addUserSelectStyles)(o), this.dragging = !0, this.lastX = s, this.lastY = l, (0, $.addEvent)(o, fe.move, this.handleDrag), (0, $.addEvent)(o, fe.stop, this.handleDragStop));
    }), j(this, "handleDrag", (e) => {
      const n = (0, ue.getControlPosition)(e, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: o,
        y: a
      } = n;
      if (Array.isArray(this.props.grid)) {
        let l = o - this.lastX, h = a - this.lastY;
        if ([l, h] = (0, ue.snapToGrid)(this.props.grid, l, h), !l && !h)
          return;
        o = this.lastX + l, a = this.lastY + h;
      }
      const i = (0, ue.createCoreData)(this, o, a);
      if ((0, De.default)("DraggableCore: handleDrag: %j", i), this.props.onDrag(e, i) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const h = document.createEvent("MouseEvents");
          h.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(h);
        }
        return;
      }
      this.lastX = o, this.lastY = a;
    }), j(this, "handleDragStop", (e) => {
      if (!this.dragging)
        return;
      const n = (0, ue.getControlPosition)(e, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: o,
        y: a
      } = n;
      if (Array.isArray(this.props.grid)) {
        let h = o - this.lastX || 0, m = a - this.lastY || 0;
        [h, m] = (0, ue.snapToGrid)(this.props.grid, h, m), o = this.lastX + h, a = this.lastY + m;
      }
      const i = (0, ue.createCoreData)(this, o, a);
      if (this.props.onStop(e, i) === !1 || this.mounted === !1)
        return !1;
      const l = this.findDOMNode();
      l && this.props.enableUserSelectHack && (0, $.removeUserSelectStyles)(l.ownerDocument), (0, De.default)("DraggableCore: handleDragStop: %j", i), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, l && ((0, De.default)("DraggableCore: Removing handlers"), (0, $.removeEvent)(l.ownerDocument, fe.move, this.handleDrag), (0, $.removeEvent)(l.ownerDocument, fe.stop, this.handleDragStop));
    }), j(this, "onMouseDown", (e) => (fe = se.mouse, this.handleDragStart(e))), j(this, "onMouseUp", (e) => (fe = se.mouse, this.handleDragStop(e))), j(this, "onTouchStart", (e) => (fe = se.touch, this.handleDragStart(e))), j(this, "onTouchEnd", (e) => (fe = se.touch, this.handleDragStop(e)));
  }
  componentDidMount() {
    this.mounted = !0;
    const e = this.findDOMNode();
    e && (0, $.addEvent)(e, se.touch.start, this.onTouchStart, {
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
      (0, $.removeEvent)(n, se.mouse.move, this.handleDrag), (0, $.removeEvent)(n, se.touch.move, this.handleDrag), (0, $.removeEvent)(n, se.mouse.stop, this.handleDragStop), (0, $.removeEvent)(n, se.touch.stop, this.handleDragStop), (0, $.removeEvent)(e, se.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, $.removeUserSelectStyles)(n);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var e, n;
    return (e = this.props) !== null && e !== void 0 && e.nodeRef ? (n = this.props) === null || n === void 0 || (n = n.nodeRef) === null || n === void 0 ? void 0 : n.current : Sr.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ Ke.cloneElement(Ke.Children.only(this.props.children), {
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
Le.default = Ve;
j(Ve, "displayName", "DraggableCore");
j(Ve, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: ee.default.bool,
  children: ee.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: ee.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: ee.default.bool,
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
  grid: ee.default.arrayOf(ee.default.number),
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
  handle: ee.default.string,
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
  cancel: ee.default.string,
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
  nodeRef: ee.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: ee.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: ee.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: ee.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: ee.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: ee.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: je.dontSetMe,
  style: je.dontSetMe,
  transform: je.dontSetMe
});
j(Ve, "defaultProps", {
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
      return h.default;
    }
  }), t.default = void 0;
  var e = N(Nt), n = C(Vt), o = C(It), a = C(zn), i = G, s = de, l = ce, h = C(Le), m = C(_e);
  function C(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function b(f) {
    if (typeof WeakMap != "function")
      return null;
    var u = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap();
    return (b = function(p) {
      return p ? y : u;
    })(f);
  }
  function N(f, u) {
    if (!u && f && f.__esModule)
      return f;
    if (f === null || typeof f != "object" && typeof f != "function")
      return { default: f };
    var y = b(u);
    if (y && y.has(f))
      return y.get(f);
    var p = {}, D = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var w in f)
      if (w !== "default" && Object.prototype.hasOwnProperty.call(f, w)) {
        var P = D ? Object.getOwnPropertyDescriptor(f, w) : null;
        P && (P.get || P.set) ? Object.defineProperty(p, w, P) : p[w] = f[w];
      }
    return p.default = f, y && y.set(f, p), p;
  }
  function x() {
    return x = Object.assign ? Object.assign.bind() : function(f) {
      for (var u = 1; u < arguments.length; u++) {
        var y = arguments[u];
        for (var p in y)
          Object.prototype.hasOwnProperty.call(y, p) && (f[p] = y[p]);
      }
      return f;
    }, x.apply(this, arguments);
  }
  function A(f, u, y) {
    return u = B(u), u in f ? Object.defineProperty(f, u, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : f[u] = y, f;
  }
  function B(f) {
    var u = T(f, "string");
    return typeof u == "symbol" ? u : String(u);
  }
  function T(f, u) {
    if (typeof f != "object" || f === null)
      return f;
    var y = f[Symbol.toPrimitive];
    if (y !== void 0) {
      var p = y.call(f, u || "default");
      if (typeof p != "object")
        return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (u === "string" ? String : Number)(f);
  }
  class X extends e.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(u, y) {
      let {
        position: p
      } = u, {
        prevPropsPosition: D
      } = y;
      return p && (!D || p.x !== D.x || p.y !== D.y) ? ((0, m.default)("Draggable: getDerivedStateFromProps %j", {
        position: p,
        prevPropsPosition: D
      }), {
        x: p.x,
        y: p.y,
        prevPropsPosition: {
          ...p
        }
      }) : null;
    }
    constructor(u) {
      super(u), A(this, "onDragStart", (y, p) => {
        if ((0, m.default)("Draggable: onDragStart: %j", p), this.props.onStart(y, (0, s.createDraggableData)(this, p)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), A(this, "onDrag", (y, p) => {
        if (!this.state.dragging)
          return !1;
        (0, m.default)("Draggable: onDrag: %j", p);
        const D = (0, s.createDraggableData)(this, p), w = {
          x: D.x,
          y: D.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: V,
            y: q
          } = w;
          w.x += this.state.slackX, w.y += this.state.slackY;
          const [W, Y] = (0, s.getBoundPosition)(this, w.x, w.y);
          w.x = W, w.y = Y, w.slackX = this.state.slackX + (V - w.x), w.slackY = this.state.slackY + (q - w.y), D.x = w.x, D.y = w.y, D.deltaX = w.x - this.state.x, D.deltaY = w.y - this.state.y;
        }
        if (this.props.onDrag(y, D) === !1)
          return !1;
        this.setState(w);
      }), A(this, "onDragStop", (y, p) => {
        if (!this.state.dragging || this.props.onStop(y, (0, s.createDraggableData)(this, p)) === !1)
          return !1;
        (0, m.default)("Draggable: onDragStop: %j", p);
        const w = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: V,
            y: q
          } = this.props.position;
          w.x = V, w.y = q;
        }
        this.setState(w);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: u.position ? u.position.x : u.defaultPosition.x,
        y: u.position ? u.position.y : u.defaultPosition.y,
        prevPropsPosition: {
          ...u.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, u.position && !(u.onDrag || u.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
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
      var u, y;
      return (u = (y = this.props) === null || y === void 0 || (y = y.nodeRef) === null || y === void 0 ? void 0 : y.current) !== null && u !== void 0 ? u : o.default.findDOMNode(this);
    }
    render() {
      const {
        axis: u,
        bounds: y,
        children: p,
        defaultPosition: D,
        defaultClassName: w,
        defaultClassNameDragging: P,
        defaultClassNameDragged: V,
        position: q,
        positionOffset: W,
        scale: Y,
        ...v
      } = this.props;
      let F = {}, S = null;
      const z = !!!q || this.state.dragging, K = q || D, Q = {
        // Set left if horizontal drag is enabled
        x: (0, s.canDragX)(this) && z ? this.state.x : K.x,
        // Set top if vertical drag is enabled
        y: (0, s.canDragY)(this) && z ? this.state.y : K.y
      };
      this.state.isElementSVG ? S = (0, i.createSVGTransform)(Q, W) : F = (0, i.createCSSTransform)(Q, W);
      const L = (0, a.default)(p.props.className || "", w, {
        [P]: this.state.dragging,
        [V]: this.state.dragged
      });
      return /* @__PURE__ */ e.createElement(h.default, x({}, v, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ e.cloneElement(e.Children.only(p), {
        className: L,
        style: {
          ...p.props.style,
          ...F
        },
        transform: S
      }));
    }
  }
  t.default = X, A(X, "displayName", "Draggable"), A(X, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ...h.default.propTypes,
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
    className: l.dontSetMe,
    style: l.dontSetMe,
    transform: l.dontSetMe
  }), A(X, "defaultProps", {
    ...h.default.defaultProps,
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
})(zt);
const {
  default: Zt,
  DraggableCore: Nr
} = zt;
Ae.exports = Zt;
Ae.exports.default = Zt;
Ae.exports.DraggableCore = Nr;
var Pr = Ae.exports;
const Or = /* @__PURE__ */ Mn(Pr);
const Fr = (t) => {
  const { formLayout: e } = t;
  var n = "palmyra-form-field-container";
  const o = e.options;
  if (o && o.columns)
    switch (o.columns) {
      case 2:
        return n + " palmyra-form-field-container-2column";
      case 3:
        return n + " palmyra-form-field-container-3column";
      case 4:
        return n + " palmyra-form-field-container-4column";
    }
  return n;
}, Rr = oe(function(e, n) {
  const { formLayout: o, context: a } = e, { formData: i } = a, s = Z({}), l = Fr(e), h = "palmyra-form-field-data", m = Pt(() => (C) => Wt(C, s, C.label), [i.data]);
  return /* @__PURE__ */ r("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: o.fields.map((C, b) => /* @__PURE__ */ r("div", { className: l, children: /* @__PURE__ */ r("div", { className: h, children: m(C) }) }, C.attribute)) });
});
function Mr(t) {
  return /* @__PURE__ */ r(
    Or,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ r(pn, { ...t })
    }
  );
}
const Jt = ({ columns: t, isOpen: e, onClose: n, setFilter: o, defaultFilter: a = {} }) => {
  var { getFieldManager: i, getFilterData: s } = kn(a);
  const l = () => {
    o({});
  }, h = () => {
    var N = s();
    o && o(N);
  }, m = () => {
    n();
  }, C = (N) => {
    N.keyCode === 27 && m();
  }, b = Fn(t);
  return /* @__PURE__ */ r("div", { className: "grid-filter-container", children: /* @__PURE__ */ r(
    gn,
    {
      open: e,
      onClose: m,
      PaperComponent: Mr,
      onKeyDown: C,
      PaperProps: { sx: { minWidth: "500px", borderRadius: "10px" } },
      children: /* @__PURE__ */ r(xe, { onClickAway: n, children: /* @__PURE__ */ g("div", { children: [
        /* @__PURE__ */ g("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ r("div", { className: "grid-header-text-container", children: /* @__PURE__ */ r("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ r("div", { className: "grid-header-icon-container", onClick: m, children: /* @__PURE__ */ r("span", { className: "grid-header-icon", children: /* @__PURE__ */ r(On, { className: "filter-cancel-icon" }) }) })
        ] }),
        /* @__PURE__ */ r("span", { className: "filter-header-border" }),
        /* @__PURE__ */ r("div", { className: "grid-filter-content", children: /* @__PURE__ */ r(Oe.Provider, { value: i, children: /* @__PURE__ */ r(
          qt,
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
              Renderer: Rr
            }
          }
        ) }) }),
        /* @__PURE__ */ g("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ g(le, { className: "secondary-filled-button", disableRipple: !0, onClick: l, children: [
            /* @__PURE__ */ r(Sn, { className: "button-icon" }),
            "Reset"
          ] }),
          /* @__PURE__ */ g(le, { className: "filled-button", disableRipple: !0, onClick: h, children: [
            /* @__PURE__ */ r(lt, { className: "button-icon" }),
            "Filter"
          ] })
        ] })
      ] }) })
    }
  ) });
};
function en(t) {
  return Bt({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" } }] })(t);
}
function tn(t) {
  return Bt({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M156,208a8,8,0,0,1-8,8H120a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v48h20A8,8,0,0,1,156,208ZM92.65,145.49a8,8,0,0,0-11.16,1.86L68,166.24,54.51,147.35a8,8,0,1,0-13,9.3L58.17,180,41.49,203.35a8,8,0,0,0,13,9.3L68,193.76l13.49,18.89a8,8,0,0,0,13-9.3L77.83,180l16.68-23.35A8,8,0,0,0,92.65,145.49Zm98.94,25.82c-4-1.16-8.14-2.35-10.45-3.84-1.25-.82-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.72,19.82-.56a8,8,0,0,0,4.07-15.48c-2.11-.55-21-5.22-32.83,2.76a20.58,20.58,0,0,0-8.95,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.33-2.15,3.93-4.6,3.06-15.16,1.55-19.54.35A8,8,0,0,0,173.93,214a60.63,60.63,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.81,20.81,0,0,0,9.18-15.23C218,179,201.48,174.17,191.59,171.31ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,1,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.68L160,51.31Z" } }] })(t);
}
const kr = oe(function(e, n) {
  const { columns: o, children: a, EmptyChild: i, onRowClick: s, quickSearch: l } = e, h = i || Et, m = e.customizer || _t, C = e.customButton, b = e.gridTitle, [N, x] = I(!1), [A, B] = I(!1), [T, X] = I("standard"), [f, u] = I(!1), [y, p] = I(""), {
    setQueryFilter: D,
    setQuickSearch: w,
    setSortColumns: P,
    setEndPointOptions: V,
    gotoPage: q,
    setPageSize: W,
    getPageNo: Y,
    refreshData: v,
    setQueryLimit: F,
    getQueryLimit: S,
    data: O,
    totalRecords: z,
    queryLimit: K,
    pageSizeOptions: Q,
    filter: L
  } = be(e), _ = n || Z(null);
  he(_, () => ({
    setFilter: (k) => {
      D(k);
    },
    refresh: () => {
      v();
    },
    resetFilter() {
      D({});
    },
    setEndPointOptions: (k) => {
      V(k);
    },
    addFilter: (k, te) => {
      D((M) => (M[k] = te, { ...M }));
    },
    setQueryLimit: (k) => {
      F(k);
    },
    getQueryLimit: () => S(),
    setSortOptions(k) {
      P(k);
    },
    getCurrentData: () => O
  }), [S]);
  const c = (k, te) => {
    q(te - 1);
  }, R = Tt(o, m), H = (k) => {
    X(k);
  }, me = () => {
    x(!N);
  }, d = () => T === "compact" ? { padding: "3px" } : T === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, E = () => T === "compact" ? { padding: "3px" } : T === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, J = () => {
    var k;
    switch (T) {
      case "compact":
        k = /* @__PURE__ */ r(Te, { className: "density-icon" });
        break;
      case "comfortable":
        k = /* @__PURE__ */ r(Ee, { className: "density-icon" });
        break;
      default:
        k = /* @__PURE__ */ r(ke, { className: "grid-button-icon" });
        break;
    }
    return k;
  }, Ce = (k) => {
    const te = k.target.value;
    p(te), te ? w(te) : D({});
  }, Ie = (k) => {
    s && s(k);
  }, Be = (k) => {
    const te = parseInt(k.target.value, 10);
    W(te);
  }, Xe = () => {
    B(!A);
  }, We = () => {
  }, qe = () => {
  }, Se = () => {
    e.onNewClick();
  }, ze = 200, Ge = !!e.pageSize, Qe = !!l, Ye = {
    transform: N ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, He = {
    transform: A ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, Ue = Math.ceil(z / K.limit);
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ g("div", { children: [
    a,
    /* @__PURE__ */ g("div", { className: "grid-header", children: [
      /* @__PURE__ */ r("div", { className: "grid-header-right-content", children: /* @__PURE__ */ r("span", { className: "grid-header-right-content-text", children: b }) }),
      /* @__PURE__ */ g("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ r("div", { className: "grid-header-filter", children: Qe && /* @__PURE__ */ r(
          Fe,
          {
            sx: { width: ze },
            type: "text",
            value: y,
            onChange: Ce,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ r(nt, { position: "end", children: /* @__PURE__ */ r(et, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ r(xe, { onClickAway: () => {
          x(!1);
        }, children: /* @__PURE__ */ g("div", { className: "grid-header-button grid-density-btn", onClick: me, children: [
          /* @__PURE__ */ g(le, { className: "grid-btn", disableRipple: !0, children: [
            J(),
            /* @__PURE__ */ r("span", { children: "Density" }),
            /* @__PURE__ */ r(Me, { style: Ye, className: "avathar-arrw-icon" })
          ] }),
          N && /* @__PURE__ */ r("div", { className: "density-dropdown-content", children: /* @__PURE__ */ g("ul", { children: [
            /* @__PURE__ */ g("li", { onClick: () => H("standard"), children: [
              /* @__PURE__ */ r(ke, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ g("li", { onClick: () => H("compact"), children: [
              /* @__PURE__ */ r(Te, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ g("li", { onClick: () => H("comfortable"), children: [
              /* @__PURE__ */ r(Ee, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        o.some((k) => k.searchable) && /* @__PURE__ */ g("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ g(le, { className: "grid-btn", disableRipple: !0, onClick: () => u(!0), children: [
            /* @__PURE__ */ r(lt, { className: "grid-button-icon" }),
            /* @__PURE__ */ r("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ r(
            Jt,
            {
              columns: o,
              setFilter: D,
              defaultFilter: L,
              isOpen: f,
              onClose: () => u(!1)
            }
          )
        ] }),
        /* @__PURE__ */ r(xe, { onClickAway: () => {
          B(!1);
        }, children: /* @__PURE__ */ g("div", { className: "grid-header-button grid-export-btn", onClick: Xe, children: [
          /* @__PURE__ */ g(le, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ r(Rt, { className: "grid-button-icon" }),
            /* @__PURE__ */ r("span", { children: "Export" }),
            /* @__PURE__ */ r(Me, { style: He, className: "avathar-arrw-icon" })
          ] }),
          A && /* @__PURE__ */ r("div", { className: "density-dropdown-content", children: /* @__PURE__ */ g("ul", { children: [
            /* @__PURE__ */ g("li", { onClick: We, children: [
              /* @__PURE__ */ r(en, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ g("li", { onClick: qe, children: [
              /* @__PURE__ */ r(tn, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        e.onNewClick ? /* @__PURE__ */ r("div", { className: "grid-header-button grid-add-btn", children: e.customAddButton ? /* @__PURE__ */ r("div", { onClick: Se, children: e.customAddButton }) : /* @__PURE__ */ r("div", { onClick: Se, children: /* @__PURE__ */ g(le, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ r(Lt, { className: "grid-button-icon" }),
          /* @__PURE__ */ r("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ r(ye, {}),
        C && C.map((k, te) => /* @__PURE__ */ r("div", { className: "grid-custom-button", children: k }, te))
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "grid-table", children: /* @__PURE__ */ r(
      At,
      {
        columnDefs: R,
        EmptyChild: h,
        customizer: m,
        rowData: O,
        onRowClick: Ie,
        onRowStyle: d,
        onHeaderStyle: E,
        onSortColumn: P
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "grid-footer", children: /* @__PURE__ */ r("div", { className: "grid-filter", children: Ge && z !== null && /* @__PURE__ */ r("div", { children: /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ r("div", { style: { width: "50%" }, children: Q && Q.length > 1 ? /* @__PURE__ */ r(ve, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("span", { children: "Showing" }) }),
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
          rt,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: Q[0],
            onChange: Be,
            label: "Rows per page",
            children: Q.map((k) => /* @__PURE__ */ r(ot, { value: k, children: k }, k))
          }
        ) }),
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ g("span", { children: [
          "of ",
          z,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ r("div", { style: {}, children: /* @__PURE__ */ r(
        at,
        {
          count: Ue,
          shape: "rounded",
          componentName: "div",
          onChange: c,
          page: Y() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), Zo = oe(function(e, n) {
  const { children: o, EmptyChild: a, onRowClick: i, quickSearch: s } = e, l = e.columns, h = a || Et, m = e.customizer || _t, C = e.customButton, b = e.gridTitle, [N, x] = I(!1), [A, B] = I(!1), [T, X] = I("standard"), [f, u] = I(!1), [y, p] = I(""), {
    setQueryFilter: D,
    setQuickSearch: w,
    setSortColumns: P,
    setEndPointOptions: V,
    gotoPage: q,
    setPageSize: W,
    getPageNo: Y,
    refreshData: v,
    setQueryLimit: F,
    getQueryLimit: S,
    data: O,
    totalRecords: z,
    queryLimit: K,
    pageSizeOptions: Q,
    filter: L
  } = be(e), [_, c] = I(l(O)), R = n || Z(null);
  he(R, () => ({
    setFilter: (M) => {
      D(M);
    },
    refresh: () => {
      v();
    },
    resetFilter() {
      D({});
    },
    setEndPointOptions: (M) => {
      V(M);
    },
    addFilter: (M, ie) => {
      D((ft) => (ft[M] = ie, { ...ft }));
    },
    setQueryLimit: (M) => {
      F(M);
    },
    getQueryLimit: () => S(),
    setSortOptions(M) {
      P(M);
    },
    getCurrentData: () => O
  }), [S, _]), ae(() => {
    c(l(O));
  }, [O]);
  const H = (M, ie) => {
    q(ie - 1);
  }, me = Tt(_, m), d = (M) => {
    X(M);
  }, E = () => {
    x(!N);
  }, J = () => T === "compact" ? { padding: "3px" } : T === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, Ce = () => T === "compact" ? { padding: "3px" } : T === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, Ie = () => {
    var M;
    switch (T) {
      case "compact":
        M = /* @__PURE__ */ r(Te, { className: "density-icon" });
        break;
      case "comfortable":
        M = /* @__PURE__ */ r(Ee, { className: "density-icon" });
        break;
      default:
        M = /* @__PURE__ */ r(ke, { className: "grid-button-icon" });
        break;
    }
    return M;
  }, Be = (M) => {
    const ie = M.target.value;
    p(ie), ie ? w(ie) : D({});
  }, Xe = (M) => {
    i && i(M);
  }, We = (M) => {
    const ie = parseInt(M.target.value, 10);
    W(ie);
  }, qe = () => {
    B(!A);
  }, Se = () => {
    e.onNewClick();
  }, ze = () => {
  }, Ge = () => {
  }, Qe = 200, Ye = !!e.pageSize, He = !!s, Ue = {
    transform: N ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, k = {
    transform: A ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
  }, te = Math.ceil(z / K.limit);
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ g("div", { children: [
    o,
    /* @__PURE__ */ g("div", { className: "grid-header", children: [
      /* @__PURE__ */ r("div", { className: "grid-header-right-content", children: /* @__PURE__ */ r("span", { className: "grid-header-right-content-text", children: b }) }),
      /* @__PURE__ */ g("div", { className: "grid-header-left-content", children: [
        /* @__PURE__ */ r("div", { className: "grid-header-filter", children: He && /* @__PURE__ */ r(
          Fe,
          {
            sx: { width: Qe },
            type: "text",
            value: y,
            onChange: Be,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ r(nt, { position: "end", children: /* @__PURE__ */ r(et, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ r(xe, { onClickAway: () => {
          x(!1);
        }, children: /* @__PURE__ */ g("div", { className: "grid-header-button grid-density-btn", onClick: E, children: [
          /* @__PURE__ */ g(le, { className: "grid-btn", disableRipple: !0, children: [
            Ie(),
            /* @__PURE__ */ r("span", { children: "Density" }),
            /* @__PURE__ */ r(Me, { style: Ue, className: "avathar-arrw-icon" })
          ] }),
          N && /* @__PURE__ */ r("div", { className: "density-dropdown-content", children: /* @__PURE__ */ g("ul", { children: [
            /* @__PURE__ */ g("li", { onClick: () => d("standard"), children: [
              /* @__PURE__ */ r(ke, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Standard" })
            ] }),
            /* @__PURE__ */ g("li", { onClick: () => d("compact"), children: [
              /* @__PURE__ */ r(Te, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Compact" })
            ] }),
            /* @__PURE__ */ g("li", { onClick: () => d("comfortable"), children: [
              /* @__PURE__ */ r(Ee, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Comfortable" })
            ] })
          ] }) })
        ] }) }),
        _.some((M) => M.searchable) && /* @__PURE__ */ g("div", { className: "grid-header-button grid-filter-btn", children: [
          /* @__PURE__ */ g(le, { className: "grid-btn", disableRipple: !0, onClick: () => u(!0), children: [
            /* @__PURE__ */ r(lt, { className: "grid-button-icon" }),
            /* @__PURE__ */ r("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ r(
            Jt,
            {
              columns: _,
              setFilter: D,
              defaultFilter: L,
              isOpen: f,
              onClose: () => u(!1)
            }
          )
        ] }),
        /* @__PURE__ */ r(xe, { onClickAway: () => {
          B(!1);
        }, children: /* @__PURE__ */ g("div", { className: "grid-header-button grid-export-btn", onClick: qe, children: [
          /* @__PURE__ */ g(le, { className: "grid-btn", disableRipple: !0, children: [
            /* @__PURE__ */ r(Rt, { className: "grid-button-icon" }),
            /* @__PURE__ */ r("span", { children: "Export" }),
            /* @__PURE__ */ r(Me, { style: k, className: "avathar-arrw-icon" })
          ] }),
          A && /* @__PURE__ */ r("div", { className: "density-dropdown-content", children: /* @__PURE__ */ g("ul", { children: [
            /* @__PURE__ */ g("li", { onClick: ze, children: [
              /* @__PURE__ */ r(en, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Export as PDF" })
            ] }),
            /* @__PURE__ */ g("li", { onClick: Ge, children: [
              /* @__PURE__ */ r(tn, { className: "density-icon grid-button-icon" }),
              /* @__PURE__ */ r("span", { className: "drodown-content-text", children: "Export as Excel" })
            ] })
          ] }) })
        ] }) }),
        e.onNewClick ? /* @__PURE__ */ r("div", { className: "grid-header-button grid-add-btn", children: e.customAddButton ? /* @__PURE__ */ r("div", { onClick: Se, children: e.customAddButton }) : /* @__PURE__ */ r("div", { onClick: Se, children: /* @__PURE__ */ g(le, { className: "grid-btn", disableRipple: !0, children: [
          /* @__PURE__ */ r(Lt, { className: "grid-button-icon" }),
          /* @__PURE__ */ r("span", { children: "Add" })
        ] }) }) }) : /* @__PURE__ */ r(ye, {}),
        C && C.map((M, ie) => /* @__PURE__ */ r("div", { className: "grid-custom-button", children: M }, ie))
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "grid-table", children: /* @__PURE__ */ r(
      At,
      {
        columnDefs: me,
        EmptyChild: h,
        customizer: m,
        rowData: O,
        onRowClick: Xe,
        onRowStyle: J,
        onHeaderStyle: Ce,
        onSortColumn: P
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "grid-footer", children: /* @__PURE__ */ r("div", { className: "grid-filter", children: Ye && z !== null && /* @__PURE__ */ r("div", { children: /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ r("div", { style: { width: "50%" }, children: Q && Q.length > 1 ? /* @__PURE__ */ r(ve, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("span", { children: "Showing" }) }),
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
          rt,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: Q[0],
            onChange: We,
            label: "Rows per page",
            children: Q.map((M) => /* @__PURE__ */ r(ot, { value: M, children: M }, M))
          }
        ) }),
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ g("span", { children: [
          "of ",
          z,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ r("div", { style: {}, children: /* @__PURE__ */ r(
        at,
        {
          count: te,
          shape: "rounded",
          componentName: "div",
          onChange: H,
          page: Y() + 1
        }
      ) })
    ] }) }) }) })
  ] }) });
}), Jo = oe(function(e, n) {
  const { columns: o, endPoint: a, storeFactory: i, layoutParams: s, pagination: l } = e, h = e.quickSearch || "", m = e.customButton, C = e.customAddButton, b = e.gridTitle, N = e.fetchAll, x = e.filterTopic, A = e.initialFetch, B = (X, f) => {
  };
  ae(() => {
    var X = vt.subscribe(e.topic, B);
    return () => {
      vt.unsubscribe(X);
    };
  }, [e.topic]);
  const T = {
    fields: o,
    pagination: l,
    quickSearch: h,
    storeOptions: {
      endPoint: a
    },
    actionOptions: e.actions
  };
  return /* @__PURE__ */ r(ye, { children: /* @__PURE__ */ r(Je.Provider, { value: i, children: /* @__PURE__ */ r(
    nn,
    {
      layout: T,
      context: s,
      customAddButton: C,
      onDataChange: e.onDataChange,
      gridTitle: b,
      defaultParams: e.defaultParams,
      customButton: m,
      customizer: e.customizer,
      ref: n,
      fetchAll: N,
      filterTopic: x,
      initialFetch: A
    }
  ) }) });
}), Tr = oe(function(e, n) {
  const o = e.layout, [a, i] = I(o.fields), s = o.pagination ? o.pagination : [15], l = we(Je), h = we(xt);
  var m = o.storeOptions || {}, C = {};
  wn(C, m, h);
  const b = l.getGridStore(C, o.storeOptions.endPoint);
  ae(() => {
    m.hasLayout && b.queryLayout({}).then((A) => {
      i(A.columns);
    });
  }, []);
  const { onClick: N, onNewClick: x } = Tn(o.actionOptions, h);
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    kr,
    {
      columns: a,
      store: b,
      pageSize: s,
      onRowClick: N,
      onDataChange: e.onDataChange,
      gridTitle: e.gridTitle,
      customAddButton: e.customAddButton,
      onNewClick: x,
      customizer: e.customizer,
      customButton: e.customButton,
      quickSearch: o.quickSearch,
      ref: n,
      defaultParams: e.defaultParams,
      fetchAll: e.fetchAll,
      filterTopic: e.filterTopic,
      initialFetch: e.initialFetch
    }
  ) });
}), nn = Tr, Er = (t) => {
  const { layout: e, context: n } = t;
  var o = e.Container || kt;
  return /* @__PURE__ */ r(Xt, { fallback: /* @__PURE__ */ r("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ r(o, { ...e, children: ((i) => /* @__PURE__ */ r(
    nn,
    {
      context: n,
      layout: i
    }
  ))(e.tableLayout) }) });
}, Ar = (t) => {
  const { layout: e } = t;
  switch (e.type) {
    case "form":
      return /* @__PURE__ */ r(qt, { ...t });
    case "view":
      return /* @__PURE__ */ r(An, { ...t });
    case "grid":
      return /* @__PURE__ */ r(Er, { ...t });
    case "chart":
      return /* @__PURE__ */ r(Cn, { ...t });
    default:
      return /* @__PURE__ */ r(En, { ...t });
  }
};
function Lr(t, e) {
  var n = t || 1, o = e;
  return {
    w: n,
    h: o
  };
}
const rn = (t) => {
  const { layout: e, context: n } = t, o = e.sections;
  function a(i, s, l) {
    const { w: h, h: m } = Lr(i.width, i.height);
    return /* @__PURE__ */ r(yn, { sx: { width: h, height: m }, children: /* @__PURE__ */ r(
      Ar,
      {
        layout: i,
        context: s
      }
    ) }, (i.name || "tab") + l);
  }
  return /* @__PURE__ */ r("div", { style: { display: "flex", flexWrap: "wrap" }, children: o.map((i, s) => a(i, n, s)) });
}, Dt = oe(function(e, n) {
  const { layout: o } = e;
  he(n, () => ({
    resetFilter() {
    }
  }), []);
  const a = {}, i = o.tabs;
  return /* @__PURE__ */ r("div", { children: i.map((s, l) => /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    rn,
    {
      layout: s,
      context: a
    }
  ) }, s.name + l)) });
}), _r = (t) => {
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
}, wt = oe(function(e, n) {
  var C;
  const o = e.data || {}, { layout: a } = e;
  var { getFieldManager: i, getFormData: s, isFormValid: l } = Ln(o, (C = e.callbacks) == null ? void 0 : C.onFormValidChange, _r(e.mode));
  he(n, () => ({
    getData() {
      return s();
    },
    isValid() {
      return l();
    }
  }), []);
  const h = { formData: o }, m = a.tabs;
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(Oe.Provider, { value: i, children: m.map((b, N) => /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    rn,
    {
      layout: b,
      context: h
    }
  ) }, b.name + N)) }) });
}), Vr = (t) => {
  switch (t) {
    case "grid":
      return Dt;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), wt;
    case "formEdit":
    case "formNew":
    case "formView":
      return wt;
    default:
      return Dt;
  }
}, ea = oe(function(e, n) {
  const [o, a] = I(e.layout), i = e.mode ? e.mode : o.type ? o.type : "grid", s = e.layoutParams || {}, l = Vr(i), h = Z(0);
  return ae(() => {
    a(e.layout), h.current < 999999 ? h.current++ : h.current = 0;
  }, [e.layout]), /* @__PURE__ */ r(Xt, { fallback: /* @__PURE__ */ r("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ r(Je.Provider, { value: e.storeFactory, children: /* @__PURE__ */ r(xt.Provider, { value: s, children: /* @__PURE__ */ r(l, { ...e, ref: (m) => {
    n && (n.current = m);
  } }, h.current) }) }) });
}), ta = oe(function(e, n) {
  const { title: o, Child: a, childProps: i, pageSize: s, customButton: l } = e, h = n || Z(null), {
    setQueryFilter: m,
    refreshData: C,
    setSortColumns: b,
    setEndPointOptions: N,
    setQuickSearch: x,
    gotoPage: A,
    setPageSize: B,
    getPageNo: T,
    setQueryLimit: X,
    getQueryLimit: f,
    data: u,
    totalRecords: y,
    pageSizeOptions: p,
    queryLimit: D
  } = be(e), w = e.listKeyProvider || ((S, O) => O);
  he(h, () => ({
    setFilter: (S) => {
      m(S);
    },
    refresh: () => {
      C();
    },
    resetFilter() {
      m({});
    },
    setEndPointOptions: (S) => {
      N(S);
    },
    addFilter: (S, O) => {
      m((z) => (z[S] = O, { ...z }));
    },
    setQueryLimit: (S) => {
      X(S);
    },
    getQueryLimit: () => f(),
    getCurrentData: () => u,
    setSortOptions(S) {
      b(S);
    }
  }), [m]);
  const P = (S, O) => {
    A(O - 1);
  }, V = (S) => {
    const O = S.target.value;
    x(O);
  }, q = (S) => {
    const O = parseInt(S.target.value, 10);
    B(O);
  }, W = 200, Y = !!s, v = !!e.quickSearch, F = Math.ceil(y / D.limit);
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("div", { className: "card-page-container", children: /* @__PURE__ */ g("div", { children: [
    /* @__PURE__ */ g("div", { className: "card-header", children: [
      /* @__PURE__ */ r("div", { className: "card-left-content", children: o }),
      /* @__PURE__ */ g("div", { className: "card-right-content", children: [
        v && /* @__PURE__ */ r(
          Fe,
          {
            sx: { width: W },
            type: "text",
            onChange: V,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ r(nt, { position: "end", children: /* @__PURE__ */ r(et, { className: "card-filter-icon" }) })
            }
          }
        ),
        l && l.map((S, O) => /* @__PURE__ */ r("div", { className: "card-custom-button", children: S }, O))
      ] })
    ] }),
    /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
      bn,
      {
        Child: a,
        childKeyProvider: w,
        preProcess: e.preProcess,
        dataList: u,
        childProps: i,
        EmptyChild: e.EmptyChild
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "card-pagination", children: Y && y !== null && // <TablePagination
    //     component="div"
    //     count={totalRecords || 0}
    //     page={getPageNo()}
    //     onPageChange={nextPage}
    //     rowsPerPage={queryLimit.limit}
    //     rowsPerPageOptions={pageSizeOptions || []}
    //     onRowsPerPageChange={handleRowsPerPageChange}
    // />
    /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ r("div", { children: p && p.length > 1 ? /* @__PURE__ */ r(ve, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("span", { children: "Showing" }) }),
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
          rt,
          {
            labelId: "rows-per-page-select-label",
            id: "rows-per-page-select",
            defaultValue: p[0],
            onChange: q,
            label: "Rows per page",
            children: p.map((S) => /* @__PURE__ */ r(ot, { value: S, children: S }, S))
          }
        ) }),
        /* @__PURE__ */ r("div", { children: /* @__PURE__ */ g("span", { children: [
          "of ",
          y,
          " Results"
        ] }) })
      ] }) }) : null }),
      /* @__PURE__ */ r("div", { style: {}, children: /* @__PURE__ */ r(vn, { direction: "row", alignItems: "center", spacing: 1, children: /* @__PURE__ */ r(
        at,
        {
          count: F,
          shape: "rounded",
          componentName: "div",
          onChange: P,
          page: T() + 1
        }
      ) }) })
    ] }) })
  ] }) }) });
});
export {
  Zo as D,
  ea as F,
  nn as G,
  In as M,
  Jo as P,
  ta as S,
  rn as T,
  kr as a,
  Ko as b,
  Bn as c,
  Wn as d,
  qt as e,
  Rr as f,
  Wt as g,
  Jt as h,
  Er as i,
  Ar as j,
  Dt as k,
  wt as l,
  be as u
};
