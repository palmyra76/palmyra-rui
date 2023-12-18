import "../assets/ServerCardLayout.css";
import or from "../palmyra/mui/form/MuiDatePicker.js";
import ar from "../palmyra/mui/form/MuiDateTimePicker.js";
import ir from "../palmyra/mui/form/MuiRadioGroup.js";
import sr from "../palmyra/mui/form/MuiSelect.js";
import lr from "../palmyra/mui/form/MuiTextArea.js";
import cr from "../palmyra/mui/form/MuiTextField.js";
import "../palmyra/mui/form/MuiCheckBoxGroup.js";
import ur from "../palmyra/mui/form/MuiCheckBox.js";
import dr from "../palmyra/mui/form/MuiSwitch.js";
import fr from "../palmyra/mui/form/MuiPassword.js";
import pr from "../palmyra/mui/form/MuiNumberField.js";
import { FieldManagerContext as Me, StoreFactoryContext as He, LayoutParamsContext as Et } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as i, jsxs as J, Fragment as Te } from "react/jsx-runtime";
import he, { useState as Z, useRef as se, useEffect as de, forwardRef as ce, useContext as Fe, useImperativeHandle as ve, useMemo as Dt } from "react";
import { FormControlLabel as it, Checkbox as st, FormControl as Ke, FormHelperText as Qe, Autocomplete as Rt, TextField as Ae, CircularProgress as _t, Dialog as hr, ClickAwayListener as Ft, Button as Se, Paper as mr, InputAdornment as Nt, Tooltip as De, TablePagination as Mt, Box as gr } from "@mui/material";
import yr from "../palmyra/layout/card/CardLayout.js";
import vr from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Je, getFieldLabel as Ze } from "../palmyra/mui/form/MuiUtil.js";
import et from "../palmyra/mui/form/FieldDecorator.js";
import { hasDot as Pe } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as Oe, setValueByKey as Ne } from "../palmyra/form/FormUtil.js";
import { delay as At, mergeDeep as br } from "../palmyra/utils/index.js";
import Sr from "../palmyra/mui/form/MuiDateRangePicker.js";
import Cr from "../palmyra/mui/form/MuiIntegerField.js";
import kt from "../palmyra/layout/container/SectionContainer.js";
import Pr from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as Or } from "../palmyra/grid/base/ColumnConverter.js";
import wr from "../palmyra/grid/base/EmptyChildTable.js";
import Tr from "../palmyra/grid/base/TableX.js";
import { Close as xr, Menu as lt, DensitySmall as ct, DensityLarge as ut, FilterAlt as Er, FileDownloadOutlined as Dr, Add as Rr } from "@mui/icons-material";
import { NoopCustomizer as _r } from "../palmyra/grid/Types.js";
import { convertToField as Fr } from "../palmyra/grid/base/GridFieldConverter.js";
import { a as Nr, g as Mr } from "./_commonjsHelpers.js";
import Lt from "react-dom";
import { createFilterData as Ar } from "../palmyra/form/PalmyraFilterManager.js";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import { topic as dt } from "../palmyra/utils/pubsub/topic.js";
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
import { getActionPublishers as kr } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as It } from "../palmyra/layout/ErrorBoundary.js";
import Lr from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import Ir from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { d as $r } from "./PalmyraFieldManager.js";
import { useKeyValue as Yr } from "../palmyra/utils/pubsub/PubSubHelper.js";
const xe = (e) => {
  const { store: t, quickSearch: r } = e, n = e.fetchAll != !1, [a, o] = Z(e.endPointOptions), [c, u] = Z(null), [d, p] = e.filterTopic ? Yr(e.filterTopic, {}) : Z({}), [h, m] = Z({}), C = se(e.initialFetch == !1), x = e.pageSize ? e.pageSize : 15;
  var w = x instanceof Array ? x : [x], T = x instanceof Array ? x[0] : x;
  const [E, V] = Z({ limit: T, offset: 0 }), [P, v] = Z(null), S = () => Math.round(E.offset / E.limit), s = () => E.limit, L = (k) => {
    V({ ...E, offset: k * T });
  }, D = (k) => {
    const X = k > 10 || k == -1 ? k : 15;
    V({ ...E, limit: X });
  }, K = () => d ? Object.keys(d).length == 0 : !1, Y = (k) => {
    v((X) => (setTimeout(() => {
      e.onDataChange && e.onDataChange(P, X);
    }, 300), k));
  };
  de(() => {
    if (C.current) {
      C.current = !1;
      return;
    }
    (n || !K()) && W();
  }, [E, d, h]);
  const W = () => {
    const k = { filter: d, sortOrder: h, total: !0, endPointVars: a, ...E };
    if (t)
      try {
        t.query(k).then((X) => {
          Y(X.result), u(X.total);
        }).catch((X) => {
          var g = X.response ? X.response : X;
          console.error("error while fetching", g), O();
        });
      } catch (X) {
        console.error(X), G();
      }
    else
      console.error("Store is not provided for the Grid"), G();
  }, G = () => {
    Y([]), u(0);
  }, O = () => {
    Y(void 0), u(null);
  };
  return {
    setQueryFilter: (k) => {
      typeof k == "function" || k && Object.keys(k).length > 0 ? p(k) : p({});
    },
    setQuickSearch: (k) => {
      const X = r;
      p(k ? (g) => (g[X] = k, { ...g }) : (g) => (delete g[X], { ...g }));
    },
    setSortColumns: (k) => {
      m(k);
    },
    setEndPointOptions: o,
    refreshData: W,
    gotoPage: L,
    setPageSize: D,
    getPageNo: S,
    getLimit: s,
    filter: d,
    queryLimit: E,
    data: P,
    totalRecords: c,
    pageSizeOptions: w
  };
};
function ft(e) {
  return e ? Array.isArray(e) ? e : typeof e == "string" ? e.split(",") : (console.log(e), [e]) : [];
}
const la = ce(function(t, r) {
  const n = Fe(Me), a = r || se(null), o = n(t, "checkbox", a), { mutateOptions: c, setMutateOptions: u } = o, [d, p] = Z(!1), h = ft(o.data), m = o.error, C = o.eventListeners, w = { store: o.store, pageSize: -1 }, { data: T } = xe(w), E = T, V = se(null), P = t.lookupOptions || {}, v = P.idAttribute || "id", S = P.titleAttribute || "name", s = Pe(v) ? (O) => Oe(v, O) : (O) => O[v], L = Pe(S) ? (O) => Oe(S, O) : (O) => O[S];
  ve(a, () => ({
    focus() {
      V.current.focus();
    },
    isValid() {
      return !m.status;
    },
    clear() {
      o.setData("", !0);
    },
    getValue() {
      return o.getData();
    },
    setValue(O, q = !1) {
      o.setData(O, q);
    },
    setVisible(O) {
      u((q) => ({ ...q, visible: O }));
    },
    setRequired(O) {
      u((q) => ({ ...q, required: O }));
    },
    setReadOnly(O) {
      u((q) => ({ ...q, readonly: O }));
    },
    setAttribute(O) {
      u((q) => ({ ...q, ...O }));
    },
    setOptions(O) {
    },
    getOptions() {
    }
  }), [o]);
  var D = Je(t, o.data, t.label);
  t.readonly && (D.inputProps = { readOnly: !0 });
  function K(O, q) {
    const H = ft(o.data);
    var ee = H.indexOf(O);
    q ? ee < 0 && H.push(O) : ee >= 0 && H.splice(ee, 1), C.onValueChange(H.toString());
  }
  var Y = {
    onBlur: C.onBlur,
    onFocus: C.onFocus,
    onChange: (O) => {
      K(O.target.value, O.target.checked);
    }
  };
  const W = (O) => {
    const q = O.toString();
    return h.includes(q);
  }, G = (O) => {
    const q = O.target.checked;
    p(q);
    var H = [];
    q && E.map((ee) => {
      H.push(s(ee));
    }), C.onValueChange(H.toString());
  };
  return /* @__PURE__ */ i("div", { className: t.className, children: c.visible && /* @__PURE__ */ J(
    et,
    {
      label: Ze(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ i("div", { children: t.hideSelectAll ? /* @__PURE__ */ i(Te, {}) : /* @__PURE__ */ i(
          it,
          {
            control: /* @__PURE__ */ i(st, { onChange: G }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ J(
          Ke,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: m.status,
            ...D,
            children: [
              E ? E.map((O) => /* @__PURE__ */ i(
                it,
                {
                  value: s(O),
                  control: /* @__PURE__ */ i(
                    st,
                    {
                      ...Y,
                      checked: W(s(O)),
                      disabled: t.readonly
                    }
                  ),
                  label: L(O)
                },
                s(O)
              )) : /* @__PURE__ */ i("div", { children: "No options provided" }),
              /* @__PURE__ */ i(Qe, { className: "form-error-text", children: m.message })
            ]
          }
        )
      ]
    }
  ) });
}), qr = (e, t, r) => {
  const n = e.store || r.store, a = e.lookupOptions || {}, o = a.idAttribute || "id", c = a.titleAttribute || "name", u = a.searchAttribute || c, d = r.data, p = se(0), [h, m] = Z(null), [C, x] = Z([]), [w, T] = Z(""), [E, V] = Z(!1), P = E && C.length < (h ? 2 : 1), v = {
    store: n,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: u,
    initialFetch: !1
  }, S = xe(v), { setQueryFilter: s, setEndPointOptions: L, setQuickSearch: D, filter: K, totalRecords: Y, refreshData: W } = S, G = S.data, O = Pe(o) ? (g) => Oe(o, g) : (g) => g == null ? void 0 : g[o], q = Pe(c) ? (g) => Oe(c, g) : (g) => g == null ? void 0 : g[c];
  function H() {
    if (d) {
      var g = {};
      Ne(o, g, d);
      const z = r.getMeta("displayValue") || d;
      return Ne(c, g, z), g;
    } else
      return null;
  }
  de(() => {
    if (O(h) != r.data) {
      var g = H();
      g && (x([g]), m(g));
    }
  }, [r.data]), de(() => {
    const g = G ? [...G] : [], z = h;
    g && z && !ee(g, O(z)) && g.unshift(z), x(g), p.current < Y && (p.current = Y);
  }, [G, Y]);
  function ee(g, z) {
    return g.find((l) => {
      if (O(l) == z)
        return l;
    });
  }
  de(() => {
    At(k);
  }, [w, E]);
  function k() {
    E && (w.length > 0 && w != q(h) ? D("*" + w + "*") : G ? D(null) : W());
  }
  return {
    getSelectedOption: H,
    filter: K,
    labelAccessor: q,
    idAccessor: O,
    getServerLookup: (g) => {
      var z = Je(e, h, e.label);
      const l = r.eventListeners, b = r.error, A = e.variant || "standard", N = e.autoFocus || !1, R = e.label, I = e.readonly || !1, F = e.required || !1;
      t.readonly && (z.inputProps = { readOnly: !0 });
      var M = {
        onBlur: l.onBlur,
        onFocus: l.onFocus,
        onChange: (f, _) => {
          $(_), m(_);
        },
        onInputChange: (f, _) => (T(_), !0)
      };
      const $ = (f) => {
        if (f) {
          const _ = O(f);
          l.onValueChange(_), r.setMeta("displayValue", q(f));
        } else
          l.onValueChange(void 0), r.setMeta("displayValue", void 0);
      }, j = (f) => typeof f == "object" ? q(f) + "" : f;
      return /* @__PURE__ */ i(
        et,
        {
          label: Ze(e),
          customContainerClass: e.customContainerClass,
          colspan: e.colspan,
          customFieldClass: e.customFieldClass,
          customLabelClass: e.customLabelClass,
          children: /* @__PURE__ */ J(Ke, { fullWidth: !0, error: b.status, children: [
            /* @__PURE__ */ i(
              Rt,
              {
                includeInputInList: !0,
                autoHighlight: !0,
                readOnly: I,
                renderOption: e.renderOption,
                isOptionEqualToValue: (f, _) => O(f) == O(_),
                filterOptions: (f) => f,
                renderInput: (f) => /* @__PURE__ */ i(
                  Ae,
                  {
                    ...f,
                    inputRef: (_) => {
                      g.current = _;
                    },
                    variant: A,
                    label: R,
                    autoFocus: N,
                    required: F,
                    InputProps: {
                      ...f.InputProps,
                      endAdornment: /* @__PURE__ */ J(Te, { children: [
                        P ? /* @__PURE__ */ i(_t, { color: "inherit", size: 18 }) : null,
                        f.InputProps.endAdornment
                      ] })
                    }
                  }
                ),
                getOptionLabel: j,
                ...z,
                options: C,
                open: E,
                onClose: () => {
                  V(!1);
                },
                onOpen: (f) => {
                  V(!0);
                },
                ...M
              }
            ),
            /* @__PURE__ */ i(Qe, { className: "form-error-text", children: b.message })
          ] })
        }
      );
    },
    refreshData: W,
    setQueryFilter: s,
    searchText: w,
    setSearchText: T,
    refreshOptions: k,
    setEndPointOptions: L
  };
}, jr = (e, t, r) => {
  const n = e.store || r.store, a = e.lookupOptions || {}, o = a.idAttribute || "id", c = a.titleAttribute || "name", u = a.searchAttribute || c, d = r.data, p = se(0), [h, m] = Z([]), [C, x] = Z(null), [w, T] = Z(""), [E, V] = Z(!1), P = E && C.length < (h ? 2 : 1), v = {
    store: n,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: u,
    initialFetch: !1
  }, S = xe(v), { setQueryFilter: s, setEndPointOptions: L, setQuickSearch: D, filter: K, totalRecords: Y, refreshData: W } = S, G = S.data, O = Pe(o) ? (g) => Oe(o, g) : (g) => g == null ? void 0 : g[o], q = Pe(c) ? (g) => Oe(c, g) : (g) => g == null ? void 0 : g[c];
  function H() {
    if (d) {
      if (d instanceof Array)
        return d.map((z) => {
          var l = {};
          return Ne(o, l, O(z)), Ne(c, l, q(z)), l;
        });
      console.warn("The value should be an array for " + e.attribute);
    } else
      return null;
  }
  de(() => {
    if (!(r.data && r.data.length > 0)) {
      var g = H();
      g && (x(g), m(g));
    }
  }, [r.data]), de(() => {
    const g = G ? [...G] : [], z = h;
    g && z && z.length > 0 && z.map((l) => {
      ee(g, O(l)) || g.unshift(l);
    }), x(g), p.current < Y && (p.current = Y);
  }, [G, Y]);
  function ee(g, z) {
    return g.find((l) => {
      if (O(l) == z)
        return l;
    });
  }
  de(() => {
    At(k);
  }, [w, E]);
  function k() {
    E && (w.length > 0 && w != q(h) ? D("*" + w + "*") : G ? D(null) : W());
  }
  return {
    getSelectedOption: H,
    filter: K,
    labelAccessor: q,
    idAccessor: O,
    getServerLookup: (g) => {
      var z = Je(e, h, e.label);
      const l = r.eventListeners, b = r.error, A = e.variant || "standard", N = e.autoFocus || !1, R = e.label, I = e.readonly || !1, F = e.required || !1;
      t.readonly && (z.inputProps = { readOnly: !0 });
      var M = {
        onBlur: l.onBlur,
        onFocus: l.onFocus,
        onChange: (f, _) => {
          $(_), m(_);
        },
        onInputChange: (f, _) => (T(_), !0)
      };
      const $ = (f) => {
        f ? l.onValueChange(f) : l.onValueChange(void 0);
      }, j = (f) => typeof f == "object" ? q(f) + "" : f;
      return /* @__PURE__ */ i(
        et,
        {
          label: Ze(e),
          customContainerClass: e.customContainerClass,
          colspan: e.colspan,
          customFieldClass: e.customFieldClass,
          customLabelClass: e.customLabelClass,
          children: /* @__PURE__ */ J(Ke, { fullWidth: !0, error: b.status, children: [
            C && /* @__PURE__ */ i(
              Rt,
              {
                disableCloseOnSelect: !0,
                multiple: !0,
                renderOption: e.renderOption,
                readOnly: I,
                isOptionEqualToValue: (f, _) => f instanceof Array ? f.some((y) => O(y) == O(_)) : O(f) == O(_),
                filterOptions: (f) => f,
                renderInput: (f) => /* @__PURE__ */ i(
                  Ae,
                  {
                    ...f,
                    inputRef: (_) => {
                      g.current = _;
                    },
                    variant: A,
                    label: R,
                    autoFocus: N,
                    required: F,
                    InputProps: {
                      ...f.InputProps,
                      endAdornment: /* @__PURE__ */ J(Te, { children: [
                        P ? /* @__PURE__ */ i(_t, { color: "inherit", size: 18 }) : null,
                        f.InputProps.endAdornment
                      ] })
                    }
                  }
                ),
                getOptionLabel: j,
                ...z,
                options: C,
                open: E,
                onClose: () => {
                  V(!1);
                },
                onOpen: (f) => {
                  V(!0);
                },
                ...M
              }
            ),
            /* @__PURE__ */ i(Qe, { className: "form-error-text", children: b.message })
          ] })
        }
      );
    },
    refreshData: W,
    setQueryFilter: s,
    searchText: w,
    setSearchText: T,
    refreshOptions: k,
    setEndPointOptions: L
  };
}, Vr = ce(function(t, r) {
  const n = Fe(Me), a = r || se(null), o = n(t, "serverlookup", a), c = o.error, { mutateOptions: u, setMutateOptions: d } = o, p = se(null), { getServerLookup: h, setQueryFilter: m, refreshData: C, setEndPointOptions: x } = t.multiple ? jr(t, u, o) : qr(t, u, o);
  return ve(a, () => ({
    focus() {
      p.current.focus();
    },
    isValid() {
      return !c.status;
    },
    clear() {
      o.setData("", !0);
    },
    getValue() {
      return o.getData();
    },
    setValue(w, T = !1) {
      o.setData(w, T);
    },
    setVisible(w) {
      d((T) => ({ ...T, visible: w }));
    },
    setRequired(w) {
      d((T) => ({ ...T, required: w }));
    },
    setReadOnly(w) {
      d((T) => ({ ...T, readonly: w }));
    },
    setAttribute(w) {
      d((T) => ({ ...T, ...w }));
    },
    setFilter(w) {
      m(w);
    },
    resetFilter() {
      m({});
    },
    setEndPointOptions(w) {
      x(w);
    },
    refresh: () => {
      C();
    },
    addFilter(w, T) {
      m((E) => (E[w] = T, { ...E }));
    },
    setDefaultFilter(w) {
    }
  }), [o]), h(p);
}), Wr = (e) => {
  const { fieldDef: t } = e;
  return /* @__PURE__ */ J("div", { children: [
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
}, zr = () => /* @__PURE__ */ i("div", { children: "To be Implemented" }), $t = (e, t, r) => {
  const { type: n } = e, a = { fieldDef: e, title: r };
  switch (n) {
    case "string":
      return oe(a, cr);
    case "radio":
      return oe(a, ir);
    case "select":
      return oe(a, sr);
    case "date":
      return oe(a, or);
    case "datetime":
      return oe(a, ar);
    case "checkbox":
      return oe(a, ur);
    case "serverlookup":
      return oe(a, Vr);
    case "textarea":
      return oe(a, lr);
    case "switch":
      return oe(a, dr);
    case "password":
      return oe(a, fr);
    case "float":
    case "number":
    case "numbersOnly":
      return oe(a, pr);
    case "integer":
      return oe(a, Cr);
    case "multiSelect":
      return zr();
    case "dateRange":
      return oe(a, Sr);
    default:
      return Wr(a);
  }
}, Xr = ce(function(t, r) {
  var h;
  const { formLayout: n, context: a } = t, { formData: o } = a, c = n.Container;
  se({});
  const u = Dt(() => (m) => $t(m), [o.data]);
  var d = ((h = n.options) == null ? void 0 : h.columns) || 1, p = { columns: d };
  return c ? /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((m, C) => /* @__PURE__ */ i(
    c,
    {
      index: C,
      field: m,
      label: m.title,
      options: p,
      children: u(m)
    },
    m.attribute + m.name + m.type
  )) }) : /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((m, C) => u(m)) });
}), Yt = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Renderer || Xr, a = t.Container || kt;
  const o = (c) => /* @__PURE__ */ i(
    n,
    {
      context: r,
      formLayout: c
    }
  );
  return /* @__PURE__ */ i(
    a,
    {
      hideTitle: t.hideTitle,
      title: t.title,
      name: t.name,
      children: /* @__PURE__ */ i(Pr, { columns: t.columns, children: o(t.formLayout) })
    }
  );
};
var qt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, pt = he.createContext && he.createContext(qt), ye = globalThis && globalThis.__assign || function() {
  return ye = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, ye.apply(this, arguments);
}, Br = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function jt(e) {
  return e && e.map(function(t, r) {
    return he.createElement(t.tag, ye({
      key: r
    }, t.attr), jt(t.child));
  });
}
function Ur(e) {
  return function(t) {
    return he.createElement(Gr, ye({
      attr: ye({}, e.attr)
    }, t), jt(e.child));
  };
}
function Gr(e) {
  var t = function(r) {
    var n = e.attr, a = e.size, o = e.title, c = Br(e, ["attr", "size", "title"]), u = a || r.size || "1em", d;
    return r.className && (d = r.className), e.className && (d = (d ? d + " " : "") + e.className), he.createElement("svg", ye({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, c, {
      className: d,
      style: ye(ye({
        color: e.color || r.color
      }, r.style), e.style),
      height: u,
      width: u,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && he.createElement("title", null, o), e.children);
  };
  return pt !== void 0 ? he.createElement(pt.Consumer, null, function(r) {
    return t(r);
  }) : t(qt);
}
function Vt(e) {
  return Ur({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
}
var ke = { exports: {} }, Wt = {}, Ge = { exports: {} }, Re = { exports: {} }, B = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ht;
function Hr() {
  if (ht)
    return B;
  ht = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, C = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, V = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function v(s) {
    if (typeof s == "object" && s !== null) {
      var L = s.$$typeof;
      switch (L) {
        case t:
          switch (s = s.type, s) {
            case d:
            case p:
            case n:
            case o:
            case a:
            case m:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case u:
                case h:
                case w:
                case x:
                case c:
                  return s;
                default:
                  return L;
              }
          }
        case r:
          return L;
      }
    }
  }
  function S(s) {
    return v(s) === p;
  }
  return B.AsyncMode = d, B.ConcurrentMode = p, B.ContextConsumer = u, B.ContextProvider = c, B.Element = t, B.ForwardRef = h, B.Fragment = n, B.Lazy = w, B.Memo = x, B.Portal = r, B.Profiler = o, B.StrictMode = a, B.Suspense = m, B.isAsyncMode = function(s) {
    return S(s) || v(s) === d;
  }, B.isConcurrentMode = S, B.isContextConsumer = function(s) {
    return v(s) === u;
  }, B.isContextProvider = function(s) {
    return v(s) === c;
  }, B.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === t;
  }, B.isForwardRef = function(s) {
    return v(s) === h;
  }, B.isFragment = function(s) {
    return v(s) === n;
  }, B.isLazy = function(s) {
    return v(s) === w;
  }, B.isMemo = function(s) {
    return v(s) === x;
  }, B.isPortal = function(s) {
    return v(s) === r;
  }, B.isProfiler = function(s) {
    return v(s) === o;
  }, B.isStrictMode = function(s) {
    return v(s) === a;
  }, B.isSuspense = function(s) {
    return v(s) === m;
  }, B.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === p || s === o || s === a || s === m || s === C || typeof s == "object" && s !== null && (s.$$typeof === w || s.$$typeof === x || s.$$typeof === c || s.$$typeof === u || s.$$typeof === h || s.$$typeof === E || s.$$typeof === V || s.$$typeof === P || s.$$typeof === T);
  }, B.typeOf = v, B;
}
var U = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mt;
function Kr() {
  return mt || (mt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, C = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, V = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function v(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === n || y === p || y === o || y === a || y === m || y === C || typeof y == "object" && y !== null && (y.$$typeof === w || y.$$typeof === x || y.$$typeof === c || y.$$typeof === u || y.$$typeof === h || y.$$typeof === E || y.$$typeof === V || y.$$typeof === P || y.$$typeof === T);
    }
    function S(y) {
      if (typeof y == "object" && y !== null) {
        var ue = y.$$typeof;
        switch (ue) {
          case t:
            var Ee = y.type;
            switch (Ee) {
              case d:
              case p:
              case n:
              case o:
              case a:
              case m:
                return Ee;
              default:
                var at = Ee && Ee.$$typeof;
                switch (at) {
                  case u:
                  case h:
                  case w:
                  case x:
                  case c:
                    return at;
                  default:
                    return ue;
                }
            }
          case r:
            return ue;
        }
      }
    }
    var s = d, L = p, D = u, K = c, Y = t, W = h, G = n, O = w, q = x, H = r, ee = o, k = a, X = m, g = !1;
    function z(y) {
      return g || (g = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), l(y) || S(y) === d;
    }
    function l(y) {
      return S(y) === p;
    }
    function b(y) {
      return S(y) === u;
    }
    function A(y) {
      return S(y) === c;
    }
    function N(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }
    function R(y) {
      return S(y) === h;
    }
    function I(y) {
      return S(y) === n;
    }
    function F(y) {
      return S(y) === w;
    }
    function M(y) {
      return S(y) === x;
    }
    function $(y) {
      return S(y) === r;
    }
    function j(y) {
      return S(y) === o;
    }
    function f(y) {
      return S(y) === a;
    }
    function _(y) {
      return S(y) === m;
    }
    U.AsyncMode = s, U.ConcurrentMode = L, U.ContextConsumer = D, U.ContextProvider = K, U.Element = Y, U.ForwardRef = W, U.Fragment = G, U.Lazy = O, U.Memo = q, U.Portal = H, U.Profiler = ee, U.StrictMode = k, U.Suspense = X, U.isAsyncMode = z, U.isConcurrentMode = l, U.isContextConsumer = b, U.isContextProvider = A, U.isElement = N, U.isForwardRef = R, U.isFragment = I, U.isLazy = F, U.isMemo = M, U.isPortal = $, U.isProfiler = j, U.isStrictMode = f, U.isSuspense = _, U.isValidElementType = v, U.typeOf = S;
  }()), U;
}
var gt;
function zt() {
  return gt || (gt = 1, process.env.NODE_ENV === "production" ? Re.exports = Hr() : Re.exports = Kr()), Re.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ye, yt;
function Qr() {
  if (yt)
    return Ye;
  yt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var c = {}, u = 0; u < 10; u++)
        c["_" + String.fromCharCode(u)] = u;
      var d = Object.getOwnPropertyNames(c).map(function(h) {
        return c[h];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        p[h] = h;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ye = a() ? Object.assign : function(o, c) {
    for (var u, d = n(o), p, h = 1; h < arguments.length; h++) {
      u = Object(arguments[h]);
      for (var m in u)
        t.call(u, m) && (d[m] = u[m]);
      if (e) {
        p = e(u);
        for (var C = 0; C < p.length; C++)
          r.call(u, p[C]) && (d[p[C]] = u[p[C]]);
      }
    }
    return d;
  }, Ye;
}
var qe, vt;
function tt() {
  if (vt)
    return qe;
  vt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return qe = e, qe;
}
var je, bt;
function Xt() {
  return bt || (bt = 1, je = Function.call.bind(Object.prototype.hasOwnProperty)), je;
}
var Ve, St;
function Jr() {
  if (St)
    return Ve;
  St = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = tt(), r = {}, n = Xt();
    e = function(o) {
      var c = "Warning: " + o;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function a(o, c, u, d, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in o)
        if (n(o, h)) {
          var m;
          try {
            if (typeof o[h] != "function") {
              var C = Error(
                (d || "React class") + ": " + u + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw C.name = "Invariant Violation", C;
            }
            m = o[h](c, h, d, u, null, t);
          } catch (w) {
            m = w;
          }
          if (m && !(m instanceof Error) && e(
            (d || "React class") + ": type specification of " + u + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var x = p ? p() : "";
            e(
              "Failed " + u + " type: " + m.message + (x ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ve = a, Ve;
}
var We, Ct;
function Zr() {
  if (Ct)
    return We;
  Ct = 1;
  var e = zt(), t = Qr(), r = tt(), n = Xt(), a = Jr(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(u) {
    var d = "Warning: " + u;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return We = function(u, d) {
    var p = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function m(l) {
      var b = l && (p && l[p] || l[h]);
      if (typeof b == "function")
        return b;
    }
    var C = "<<anonymous>>", x = {
      array: V("array"),
      bigint: V("bigint"),
      bool: V("boolean"),
      func: V("function"),
      number: V("number"),
      object: V("object"),
      string: V("string"),
      symbol: V("symbol"),
      any: P(),
      arrayOf: v,
      element: S(),
      elementType: s(),
      instanceOf: L,
      node: W(),
      objectOf: K,
      oneOf: D,
      oneOfType: Y,
      shape: O,
      exact: q
    };
    function w(l, b) {
      return l === b ? l !== 0 || 1 / l === 1 / b : l !== l && b !== b;
    }
    function T(l, b) {
      this.message = l, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    T.prototype = Error.prototype;
    function E(l) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, A = 0;
      function N(I, F, M, $, j, f, _) {
        if ($ = $ || C, f = f || M, _ !== r) {
          if (d) {
            var y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw y.name = "Invariant Violation", y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = $ + ":" + M;
            !b[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + f + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[ue] = !0, A++);
          }
        }
        return F[M] == null ? I ? F[M] === null ? new T("The " + j + " `" + f + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new T("The " + j + " `" + f + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : l(F, M, $, j, f);
      }
      var R = N.bind(null, !1);
      return R.isRequired = N.bind(null, !0), R;
    }
    function V(l) {
      function b(A, N, R, I, F, M) {
        var $ = A[N], j = k($);
        if (j !== l) {
          var f = X($);
          return new T(
            "Invalid " + I + " `" + F + "` of type " + ("`" + f + "` supplied to `" + R + "`, expected ") + ("`" + l + "`."),
            { expectedType: l }
          );
        }
        return null;
      }
      return E(b);
    }
    function P() {
      return E(c);
    }
    function v(l) {
      function b(A, N, R, I, F) {
        if (typeof l != "function")
          return new T("Property `" + F + "` of component `" + R + "` has invalid PropType notation inside arrayOf.");
        var M = A[N];
        if (!Array.isArray(M)) {
          var $ = k(M);
          return new T("Invalid " + I + " `" + F + "` of type " + ("`" + $ + "` supplied to `" + R + "`, expected an array."));
        }
        for (var j = 0; j < M.length; j++) {
          var f = l(M, j, R, I, F + "[" + j + "]", r);
          if (f instanceof Error)
            return f;
        }
        return null;
      }
      return E(b);
    }
    function S() {
      function l(b, A, N, R, I) {
        var F = b[A];
        if (!u(F)) {
          var M = k(F);
          return new T("Invalid " + R + " `" + I + "` of type " + ("`" + M + "` supplied to `" + N + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(l);
    }
    function s() {
      function l(b, A, N, R, I) {
        var F = b[A];
        if (!e.isValidElementType(F)) {
          var M = k(F);
          return new T("Invalid " + R + " `" + I + "` of type " + ("`" + M + "` supplied to `" + N + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(l);
    }
    function L(l) {
      function b(A, N, R, I, F) {
        if (!(A[N] instanceof l)) {
          var M = l.name || C, $ = z(A[N]);
          return new T("Invalid " + I + " `" + F + "` of type " + ("`" + $ + "` supplied to `" + R + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return E(b);
    }
    function D(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), c;
      function b(A, N, R, I, F) {
        for (var M = A[N], $ = 0; $ < l.length; $++)
          if (w(M, l[$]))
            return null;
        var j = JSON.stringify(l, function(_, y) {
          var ue = X(y);
          return ue === "symbol" ? String(y) : y;
        });
        return new T("Invalid " + I + " `" + F + "` of value `" + String(M) + "` " + ("supplied to `" + R + "`, expected one of " + j + "."));
      }
      return E(b);
    }
    function K(l) {
      function b(A, N, R, I, F) {
        if (typeof l != "function")
          return new T("Property `" + F + "` of component `" + R + "` has invalid PropType notation inside objectOf.");
        var M = A[N], $ = k(M);
        if ($ !== "object")
          return new T("Invalid " + I + " `" + F + "` of type " + ("`" + $ + "` supplied to `" + R + "`, expected an object."));
        for (var j in M)
          if (n(M, j)) {
            var f = l(M, j, R, I, F + "." + j, r);
            if (f instanceof Error)
              return f;
          }
        return null;
      }
      return E(b);
    }
    function Y(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var b = 0; b < l.length; b++) {
        var A = l[b];
        if (typeof A != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + g(A) + " at index " + b + "."
          ), c;
      }
      function N(R, I, F, M, $) {
        for (var j = [], f = 0; f < l.length; f++) {
          var _ = l[f], y = _(R, I, F, M, $, r);
          if (y == null)
            return null;
          y.data && n(y.data, "expectedType") && j.push(y.data.expectedType);
        }
        var ue = j.length > 0 ? ", expected one of type [" + j.join(", ") + "]" : "";
        return new T("Invalid " + M + " `" + $ + "` supplied to " + ("`" + F + "`" + ue + "."));
      }
      return E(N);
    }
    function W() {
      function l(b, A, N, R, I) {
        return H(b[A]) ? null : new T("Invalid " + R + " `" + I + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
      }
      return E(l);
    }
    function G(l, b, A, N, R) {
      return new T(
        (l || "React class") + ": " + b + " type `" + A + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + R + "`."
      );
    }
    function O(l) {
      function b(A, N, R, I, F) {
        var M = A[N], $ = k(M);
        if ($ !== "object")
          return new T("Invalid " + I + " `" + F + "` of type `" + $ + "` " + ("supplied to `" + R + "`, expected `object`."));
        for (var j in l) {
          var f = l[j];
          if (typeof f != "function")
            return G(R, I, F, j, X(f));
          var _ = f(M, j, R, I, F + "." + j, r);
          if (_)
            return _;
        }
        return null;
      }
      return E(b);
    }
    function q(l) {
      function b(A, N, R, I, F) {
        var M = A[N], $ = k(M);
        if ($ !== "object")
          return new T("Invalid " + I + " `" + F + "` of type `" + $ + "` " + ("supplied to `" + R + "`, expected `object`."));
        var j = t({}, A[N], l);
        for (var f in j) {
          var _ = l[f];
          if (n(l, f) && typeof _ != "function")
            return G(R, I, F, f, X(_));
          if (!_)
            return new T(
              "Invalid " + I + " `" + F + "` key `" + f + "` supplied to `" + R + "`.\nBad object: " + JSON.stringify(A[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(l), null, "  ")
            );
          var y = _(M, f, R, I, F + "." + f, r);
          if (y)
            return y;
        }
        return null;
      }
      return E(b);
    }
    function H(l) {
      switch (typeof l) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !l;
        case "object":
          if (Array.isArray(l))
            return l.every(H);
          if (l === null || u(l))
            return !0;
          var b = m(l);
          if (b) {
            var A = b.call(l), N;
            if (b !== l.entries) {
              for (; !(N = A.next()).done; )
                if (!H(N.value))
                  return !1;
            } else
              for (; !(N = A.next()).done; ) {
                var R = N.value;
                if (R && !H(R[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ee(l, b) {
      return l === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function k(l) {
      var b = typeof l;
      return Array.isArray(l) ? "array" : l instanceof RegExp ? "object" : ee(b, l) ? "symbol" : b;
    }
    function X(l) {
      if (typeof l > "u" || l === null)
        return "" + l;
      var b = k(l);
      if (b === "object") {
        if (l instanceof Date)
          return "date";
        if (l instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function g(l) {
      var b = X(l);
      switch (b) {
        case "array":
        case "object":
          return "an " + b;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + b;
        default:
          return b;
      }
    }
    function z(l) {
      return !l.constructor || !l.constructor.name ? C : l.constructor.name;
    }
    return x.checkPropTypes = a, x.resetWarningCache = a.resetWarningCache, x.PropTypes = x, x;
  }, We;
}
var ze, Pt;
function en() {
  if (Pt)
    return ze;
  Pt = 1;
  var e = tt();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ze = function() {
    function n(c, u, d, p, h, m) {
      if (m !== e) {
        var C = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw C.name = "Invariant Violation", C;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var o = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, ze;
}
if (process.env.NODE_ENV !== "production") {
  var tn = zt(), rn = !0;
  Ge.exports = Zr()(tn.isElement, rn);
} else
  Ge.exports = en()();
var Bt = Ge.exports;
function Ut(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Ut(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Ot() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Ut(e)) && (n && (n += " "), n += t);
  return n;
}
const nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Ot,
  default: Ot
}, Symbol.toStringTag, { value: "Module" })), on = /* @__PURE__ */ Nr(nn);
var Q = {}, fe = {};
Object.defineProperty(fe, "__esModule", {
  value: !0
});
fe.dontSetMe = un;
fe.findInArray = an;
fe.int = cn;
fe.isFunction = sn;
fe.isNum = ln;
function an(e, t) {
  for (let r = 0, n = e.length; r < n; r++)
    if (t.apply(t, [e[r], r, e]))
      return e[r];
}
function sn(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function ln(e) {
  return typeof e == "number" && !isNaN(e);
}
function cn(e) {
  return parseInt(e, 10);
}
function un(e, t, r) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var be = {};
Object.defineProperty(be, "__esModule", {
  value: !0
});
be.browserPrefixToKey = Ht;
be.browserPrefixToStyle = dn;
be.default = void 0;
be.getPrefix = Gt;
const Xe = ["Moz", "Webkit", "O", "ms"];
function Gt() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const r = (e = window.document) === null || e === void 0 || (e = e.documentElement) === null || e === void 0 ? void 0 : e.style;
  if (!r || t in r)
    return "";
  for (let n = 0; n < Xe.length; n++)
    if (Ht(t, Xe[n]) in r)
      return Xe[n];
  return "";
}
function Ht(e, t) {
  return t ? "".concat(t).concat(fn(e)) : e;
}
function dn(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function fn(e) {
  let t = "", r = !0;
  for (let n = 0; n < e.length; n++)
    r ? (t += e[n].toUpperCase(), r = !1) : e[n] === "-" ? r = !0 : t += e[n];
  return t;
}
be.default = Gt();
Object.defineProperty(Q, "__esModule", {
  value: !0
});
Q.addClassName = Jt;
Q.addEvent = mn;
Q.addUserSelectStyles = xn;
Q.createCSSTransform = Pn;
Q.createSVGTransform = On;
Q.getTouch = wn;
Q.getTouchIdentifier = Tn;
Q.getTranslation = rt;
Q.innerHeight = bn;
Q.innerWidth = Sn;
Q.matchesSelector = Qt;
Q.matchesSelectorAndParentsTo = hn;
Q.offsetXYFromParent = Cn;
Q.outerHeight = yn;
Q.outerWidth = vn;
Q.removeClassName = Zt;
Q.removeEvent = gn;
Q.removeUserSelectStyles = En;
var ie = fe, wt = pn(be);
function Kt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Kt = function(n) {
    return n ? r : t;
  })(e);
}
function pn(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Kt(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var c = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      c && (c.get || c.set) ? Object.defineProperty(n, o, c) : n[o] = e[o];
    }
  return n.default = e, r && r.set(e, n), n;
}
let _e = "";
function Qt(e, t) {
  return _e || (_e = (0, ie.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, ie.isFunction)(e[r]);
  })), (0, ie.isFunction)(e[_e]) ? e[_e](t) : !1;
}
function hn(e, t, r) {
  let n = e;
  do {
    if (Qt(n, t))
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
  const a = {
    capture: !0,
    ...n
  };
  e.addEventListener ? e.addEventListener(t, r, a) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r;
}
function gn(e, t, r, n) {
  if (!e)
    return;
  const a = {
    capture: !0,
    ...n
  };
  e.removeEventListener ? e.removeEventListener(t, r, a) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
}
function yn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ie.int)(r.borderTopWidth), t += (0, ie.int)(r.borderBottomWidth), t;
}
function vn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ie.int)(r.borderLeftWidth), t += (0, ie.int)(r.borderRightWidth), t;
}
function bn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ie.int)(r.paddingTop), t -= (0, ie.int)(r.paddingBottom), t;
}
function Sn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ie.int)(r.paddingLeft), t -= (0, ie.int)(r.paddingRight), t;
}
function Cn(e, t, r) {
  const a = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), o = (e.clientX + t.scrollLeft - a.left) / r, c = (e.clientY + t.scrollTop - a.top) / r;
  return {
    x: o,
    y: c
  };
}
function Pn(e, t) {
  const r = rt(e, t, "px");
  return {
    [(0, wt.browserPrefixToKey)("transform", wt.default)]: r
  };
}
function On(e, t) {
  return rt(e, t, "");
}
function rt(e, t, r) {
  let {
    x: n,
    y: a
  } = e, o = "translate(".concat(n).concat(r, ",").concat(a).concat(r, ")");
  if (t) {
    const c = "".concat(typeof t.x == "string" ? t.x : t.x + r), u = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    o = "translate(".concat(c, ", ").concat(u, ")") + o;
  }
  return o;
}
function wn(e, t) {
  return e.targetTouches && (0, ie.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, ie.findInArray)(e.changedTouches, (r) => t === r.identifier);
}
function Tn(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function xn(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && Jt(e.body, "react-draggable-transparent-selection");
}
function En(e) {
  if (e)
    try {
      if (e.body && Zt(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        const t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function Jt(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function Zt(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var pe = {};
Object.defineProperty(pe, "__esModule", {
  value: !0
});
pe.canDragX = _n;
pe.canDragY = Fn;
pe.createCoreData = Mn;
pe.createDraggableData = An;
pe.getBoundPosition = Dn;
pe.getControlPosition = Nn;
pe.snapToGrid = Rn;
var ae = fe, Ce = Q;
function Dn(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : kn(n);
  const a = nt(e);
  if (typeof n == "string") {
    const {
      ownerDocument: o
    } = a, c = o.defaultView;
    let u;
    if (n === "parent" ? u = a.parentNode : u = o.querySelector(n), !(u instanceof c.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const d = u, p = c.getComputedStyle(a), h = c.getComputedStyle(d);
    n = {
      left: -a.offsetLeft + (0, ae.int)(h.paddingLeft) + (0, ae.int)(p.marginLeft),
      top: -a.offsetTop + (0, ae.int)(h.paddingTop) + (0, ae.int)(p.marginTop),
      right: (0, Ce.innerWidth)(d) - (0, Ce.outerWidth)(a) - a.offsetLeft + (0, ae.int)(h.paddingRight) - (0, ae.int)(p.marginRight),
      bottom: (0, Ce.innerHeight)(d) - (0, Ce.outerHeight)(a) - a.offsetTop + (0, ae.int)(h.paddingBottom) - (0, ae.int)(p.marginBottom)
    };
  }
  return (0, ae.isNum)(n.right) && (t = Math.min(t, n.right)), (0, ae.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, ae.isNum)(n.left) && (t = Math.max(t, n.left)), (0, ae.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function Rn(e, t, r) {
  const n = Math.round(t / e[0]) * e[0], a = Math.round(r / e[1]) * e[1];
  return [n, a];
}
function _n(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function Fn(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function Nn(e, t, r) {
  const n = typeof t == "number" ? (0, Ce.getTouch)(e, t) : null;
  if (typeof t == "number" && !n)
    return null;
  const a = nt(r), o = r.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, Ce.offsetXYFromParent)(n || e, o, r.props.scale);
}
function Mn(e, t, r) {
  const n = !(0, ae.isNum)(e.lastX), a = nt(e);
  return n ? {
    node: a,
    deltaX: 0,
    deltaY: 0,
    lastX: t,
    lastY: r,
    x: t,
    y: r
  } : {
    node: a,
    deltaX: t - e.lastX,
    deltaY: r - e.lastY,
    lastX: e.lastX,
    lastY: e.lastY,
    x: t,
    y: r
  };
}
function An(e, t) {
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
function kn(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function nt(e) {
  const t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var Le = {}, Ie = {};
Object.defineProperty(Ie, "__esModule", {
  value: !0
});
Ie.default = Ln;
function Ln() {
}
Object.defineProperty(Le, "__esModule", {
  value: !0
});
Le.default = void 0;
var Be = $n(he), ne = ot(Bt), In = ot(Lt), te = Q, me = pe, Ue = fe, we = ot(Ie);
function ot(e) {
  return e && e.__esModule ? e : { default: e };
}
function er(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (er = function(n) {
    return n ? r : t;
  })(e);
}
function $n(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = er(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var c = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      c && (c.get || c.set) ? Object.defineProperty(n, o, c) : n[o] = e[o];
    }
  return n.default = e, r && r.set(e, n), n;
}
function re(e, t, r) {
  return t = Yn(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Yn(e) {
  var t = qn(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function qn(e, t) {
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
const le = {
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
let ge = le.mouse, $e = class extends Be.Component {
  constructor() {
    super(...arguments), re(this, "dragging", !1), re(this, "lastX", NaN), re(this, "lastY", NaN), re(this, "touchIdentifier", null), re(this, "mounted", !1), re(this, "handleDragStart", (t) => {
      if (this.props.onMouseDown(t), !this.props.allowAnyClick && typeof t.button == "number" && t.button !== 0)
        return !1;
      const r = this.findDOMNode();
      if (!r || !r.ownerDocument || !r.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      const {
        ownerDocument: n
      } = r;
      if (this.props.disabled || !(t.target instanceof n.defaultView.Node) || this.props.handle && !(0, te.matchesSelectorAndParentsTo)(t.target, this.props.handle, r) || this.props.cancel && (0, te.matchesSelectorAndParentsTo)(t.target, this.props.cancel, r))
        return;
      t.type === "touchstart" && t.preventDefault();
      const a = (0, te.getTouchIdentifier)(t);
      this.touchIdentifier = a;
      const o = (0, me.getControlPosition)(t, a, this);
      if (o == null)
        return;
      const {
        x: c,
        y: u
      } = o, d = (0, me.createCoreData)(this, c, u);
      (0, we.default)("DraggableCore: handleDragStart: %j", d), (0, we.default)("calling", this.props.onStart), !(this.props.onStart(t, d) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, te.addUserSelectStyles)(n), this.dragging = !0, this.lastX = c, this.lastY = u, (0, te.addEvent)(n, ge.move, this.handleDrag), (0, te.addEvent)(n, ge.stop, this.handleDragStop));
    }), re(this, "handleDrag", (t) => {
      const r = (0, me.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: a
      } = r;
      if (Array.isArray(this.props.grid)) {
        let u = n - this.lastX, d = a - this.lastY;
        if ([u, d] = (0, me.snapToGrid)(this.props.grid, u, d), !u && !d)
          return;
        n = this.lastX + u, a = this.lastY + d;
      }
      const o = (0, me.createCoreData)(this, n, a);
      if ((0, we.default)("DraggableCore: handleDrag: %j", o), this.props.onDrag(t, o) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const d = document.createEvent("MouseEvents");
          d.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(d);
        }
        return;
      }
      this.lastX = n, this.lastY = a;
    }), re(this, "handleDragStop", (t) => {
      if (!this.dragging)
        return;
      const r = (0, me.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: a
      } = r;
      if (Array.isArray(this.props.grid)) {
        let d = n - this.lastX || 0, p = a - this.lastY || 0;
        [d, p] = (0, me.snapToGrid)(this.props.grid, d, p), n = this.lastX + d, a = this.lastY + p;
      }
      const o = (0, me.createCoreData)(this, n, a);
      if (this.props.onStop(t, o) === !1 || this.mounted === !1)
        return !1;
      const u = this.findDOMNode();
      u && this.props.enableUserSelectHack && (0, te.removeUserSelectStyles)(u.ownerDocument), (0, we.default)("DraggableCore: handleDragStop: %j", o), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, u && ((0, we.default)("DraggableCore: Removing handlers"), (0, te.removeEvent)(u.ownerDocument, ge.move, this.handleDrag), (0, te.removeEvent)(u.ownerDocument, ge.stop, this.handleDragStop));
    }), re(this, "onMouseDown", (t) => (ge = le.mouse, this.handleDragStart(t))), re(this, "onMouseUp", (t) => (ge = le.mouse, this.handleDragStop(t))), re(this, "onTouchStart", (t) => (ge = le.touch, this.handleDragStart(t))), re(this, "onTouchEnd", (t) => (ge = le.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = !0;
    const t = this.findDOMNode();
    t && (0, te.addEvent)(t, le.touch.start, this.onTouchStart, {
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
      (0, te.removeEvent)(r, le.mouse.move, this.handleDrag), (0, te.removeEvent)(r, le.touch.move, this.handleDrag), (0, te.removeEvent)(r, le.mouse.stop, this.handleDragStop), (0, te.removeEvent)(r, le.touch.stop, this.handleDragStop), (0, te.removeEvent)(t, le.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, te.removeUserSelectStyles)(r);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var t, r;
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (r = this.props) === null || r === void 0 || (r = r.nodeRef) === null || r === void 0 ? void 0 : r.current : In.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ Be.cloneElement(Be.Children.only(this.props.children), {
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
Le.default = $e;
re($e, "displayName", "DraggableCore");
re($e, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: ne.default.bool,
  children: ne.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: ne.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: ne.default.bool,
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
  grid: ne.default.arrayOf(ne.default.number),
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
  handle: ne.default.string,
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
  cancel: ne.default.string,
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
  nodeRef: ne.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: ne.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: ne.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: ne.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: ne.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: ne.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: Ue.dontSetMe,
  style: Ue.dontSetMe,
  transform: Ue.dontSetMe
});
re($e, "defaultProps", {
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
      return d.default;
    }
  }), e.default = void 0;
  var t = C(he), r = h(Bt), n = h(Lt), a = h(on), o = Q, c = pe, u = fe, d = h(Le), p = h(Ie);
  function h(P) {
    return P && P.__esModule ? P : { default: P };
  }
  function m(P) {
    if (typeof WeakMap != "function")
      return null;
    var v = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap();
    return (m = function(s) {
      return s ? S : v;
    })(P);
  }
  function C(P, v) {
    if (!v && P && P.__esModule)
      return P;
    if (P === null || typeof P != "object" && typeof P != "function")
      return { default: P };
    var S = m(v);
    if (S && S.has(P))
      return S.get(P);
    var s = {}, L = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var D in P)
      if (D !== "default" && Object.prototype.hasOwnProperty.call(P, D)) {
        var K = L ? Object.getOwnPropertyDescriptor(P, D) : null;
        K && (K.get || K.set) ? Object.defineProperty(s, D, K) : s[D] = P[D];
      }
    return s.default = P, S && S.set(P, s), s;
  }
  function x() {
    return x = Object.assign ? Object.assign.bind() : function(P) {
      for (var v = 1; v < arguments.length; v++) {
        var S = arguments[v];
        for (var s in S)
          Object.prototype.hasOwnProperty.call(S, s) && (P[s] = S[s]);
      }
      return P;
    }, x.apply(this, arguments);
  }
  function w(P, v, S) {
    return v = T(v), v in P ? Object.defineProperty(P, v, { value: S, enumerable: !0, configurable: !0, writable: !0 }) : P[v] = S, P;
  }
  function T(P) {
    var v = E(P, "string");
    return typeof v == "symbol" ? v : String(v);
  }
  function E(P, v) {
    if (typeof P != "object" || P === null)
      return P;
    var S = P[Symbol.toPrimitive];
    if (S !== void 0) {
      var s = S.call(P, v || "default");
      if (typeof s != "object")
        return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (v === "string" ? String : Number)(P);
  }
  class V extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(v, S) {
      let {
        position: s
      } = v, {
        prevPropsPosition: L
      } = S;
      return s && (!L || s.x !== L.x || s.y !== L.y) ? ((0, p.default)("Draggable: getDerivedStateFromProps %j", {
        position: s,
        prevPropsPosition: L
      }), {
        x: s.x,
        y: s.y,
        prevPropsPosition: {
          ...s
        }
      }) : null;
    }
    constructor(v) {
      super(v), w(this, "onDragStart", (S, s) => {
        if ((0, p.default)("Draggable: onDragStart: %j", s), this.props.onStart(S, (0, c.createDraggableData)(this, s)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), w(this, "onDrag", (S, s) => {
        if (!this.state.dragging)
          return !1;
        (0, p.default)("Draggable: onDrag: %j", s);
        const L = (0, c.createDraggableData)(this, s), D = {
          x: L.x,
          y: L.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: Y,
            y: W
          } = D;
          D.x += this.state.slackX, D.y += this.state.slackY;
          const [G, O] = (0, c.getBoundPosition)(this, D.x, D.y);
          D.x = G, D.y = O, D.slackX = this.state.slackX + (Y - D.x), D.slackY = this.state.slackY + (W - D.y), L.x = D.x, L.y = D.y, L.deltaX = D.x - this.state.x, L.deltaY = D.y - this.state.y;
        }
        if (this.props.onDrag(S, L) === !1)
          return !1;
        this.setState(D);
      }), w(this, "onDragStop", (S, s) => {
        if (!this.state.dragging || this.props.onStop(S, (0, c.createDraggableData)(this, s)) === !1)
          return !1;
        (0, p.default)("Draggable: onDragStop: %j", s);
        const D = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: Y,
            y: W
          } = this.props.position;
          D.x = Y, D.y = W;
        }
        this.setState(D);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: v.position ? v.position.x : v.defaultPosition.x,
        y: v.position ? v.position.y : v.defaultPosition.y,
        prevPropsPosition: {
          ...v.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, v.position && !(v.onDrag || v.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
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
      var v, S;
      return (v = (S = this.props) === null || S === void 0 || (S = S.nodeRef) === null || S === void 0 ? void 0 : S.current) !== null && v !== void 0 ? v : n.default.findDOMNode(this);
    }
    render() {
      const {
        axis: v,
        bounds: S,
        children: s,
        defaultPosition: L,
        defaultClassName: D,
        defaultClassNameDragging: K,
        defaultClassNameDragged: Y,
        position: W,
        positionOffset: G,
        scale: O,
        ...q
      } = this.props;
      let H = {}, ee = null;
      const X = !!!W || this.state.dragging, g = W || L, z = {
        // Set left if horizontal drag is enabled
        x: (0, c.canDragX)(this) && X ? this.state.x : g.x,
        // Set top if vertical drag is enabled
        y: (0, c.canDragY)(this) && X ? this.state.y : g.y
      };
      this.state.isElementSVG ? ee = (0, o.createSVGTransform)(z, G) : H = (0, o.createCSSTransform)(z, G);
      const l = (0, a.default)(s.props.className || "", D, {
        [K]: this.state.dragging,
        [Y]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(d.default, x({}, q, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(s), {
        className: l,
        style: {
          ...s.props.style,
          ...H
        },
        transform: ee
      }));
    }
  }
  e.default = V, w(V, "displayName", "Draggable"), w(V, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ...d.default.propTypes,
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
    className: u.dontSetMe,
    style: u.dontSetMe,
    transform: u.dontSetMe
  }), w(V, "defaultProps", {
    ...d.default.defaultProps,
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
  default: tr,
  DraggableCore: jn
} = Wt;
ke.exports = tr;
ke.exports.default = tr;
ke.exports.DraggableCore = jn;
var Vn = ke.exports;
const Wn = /* @__PURE__ */ Mr(Vn);
const zn = (e) => {
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
}, Xn = ce(function(t, r) {
  const { formLayout: n, context: a } = t, { formData: o } = a, c = se({}), u = zn(t), d = "palmyra-form-field-data", p = Dt(() => (h) => $t(h, c, h.label), [o.data]);
  return /* @__PURE__ */ i("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: n.fields.map((h, m) => /* @__PURE__ */ i("div", { className: u, children: /* @__PURE__ */ i("div", { className: d, children: p(h) }) }, h.attribute)) });
});
function Bn(e) {
  return /* @__PURE__ */ i(
    Wn,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ i(mr, { ...e })
    }
  );
}
const Un = ({ columns: e, isOpen: t, onClose: r, setFilter: n, defaultFilter: a = {} }) => {
  var { getFieldManager: o, getFilterData: c } = Ar(a);
  const u = () => {
    n({});
  }, d = () => {
    var C = c();
    n && n(C);
  }, p = () => {
    r();
  }, h = (C) => {
    C.keyCode === 27 && p();
  }, m = Fr(e);
  return /* @__PURE__ */ i("div", { className: "grid-filter-container", children: /* @__PURE__ */ i(
    hr,
    {
      open: t,
      onClose: p,
      PaperComponent: Bn,
      onKeyDown: h,
      children: /* @__PURE__ */ i(Ft, { onClickAway: r, children: /* @__PURE__ */ J("div", { children: [
        /* @__PURE__ */ J("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ i("div", { className: "grid-header-text-container", children: /* @__PURE__ */ i("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ i("div", { className: "grid-header-icon-container", onClick: p, children: /* @__PURE__ */ i(xr, { className: "filter-cancel-icon" }) })
        ] }),
        /* @__PURE__ */ i("span", { className: "filter-header-border" }),
        /* @__PURE__ */ i("div", { className: "grid-filter-content", children: /* @__PURE__ */ i(Me.Provider, { value: o, children: /* @__PURE__ */ i(
          Yt,
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
              Renderer: Xn
            }
          }
        ) }) }),
        /* @__PURE__ */ J("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ i(Se, { className: "filter-reset-btn", disableRipple: !0, onClick: u, children: "Reset" }),
          /* @__PURE__ */ i(Se, { className: "filter-button", disableRipple: !0, onClick: d, children: "Filter" })
        ] })
      ] }) })
    }
  ) });
}, Gn = ce(function(t, r) {
  const { columns: n, children: a, EmptyChild: o, onRowClick: c, quickSearch: u } = t, d = o || wr, p = t.customizer || _r, [h, m] = Z(!1), [C, x] = Z("standard"), [w, T] = Z(!1), [E, V] = Z(""), {
    setQueryFilter: P,
    setQuickSearch: v,
    setSortColumns: S,
    setEndPointOptions: s,
    gotoPage: L,
    setPageSize: D,
    getPageNo: K,
    refreshData: Y,
    data: W,
    totalRecords: G,
    pageSizeOptions: O,
    filter: q,
    queryLimit: H
  } = xe(t), ee = r || se(null);
  ve(ee, () => ({
    setFilter: (f) => {
      P(f);
    },
    refresh: () => {
      Y();
    },
    resetFilter() {
      P({});
    },
    setEndPointOptions: (f) => {
      s(f);
    },
    addFilter: (f, _) => {
      P((y) => (y[f] = _, { ...y }));
    }
  }), []);
  const k = (f, _) => {
    L(_);
  }, X = Or(n, p), g = (f) => {
    x(f);
  }, z = () => {
    m(!h);
  }, l = () => C === "compact" ? { padding: "3px" } : C === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, b = () => C === "compact" ? { padding: "3px" } : C === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, A = () => {
    var f;
    switch (C) {
      case "compact":
        f = /* @__PURE__ */ i(ct, { className: "density-icon" });
        break;
      case "comfortable":
        f = /* @__PURE__ */ i(ut, { className: "density-icon" });
        break;
      default:
        f = /* @__PURE__ */ i(lt, { className: "grid-button-icon" });
        break;
    }
    return f;
  }, N = (f) => {
    const _ = f.target.value;
    V(_), _ ? v(_) : P({});
  }, R = (f) => {
    c && c(f);
  }, I = (f) => {
    const _ = parseInt(f.target.value, 10);
    D(_);
  }, F = () => {
    console.info("Export Clicked");
  }, M = 200, $ = !!t.pageSize;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ J("div", { children: [
    a,
    /* @__PURE__ */ J("div", { className: "grid-header", children: [
      /* @__PURE__ */ i("div", { className: "grid-header-filter", children: !!u && /* @__PURE__ */ i(
        Ae,
        {
          sx: { width: M },
          type: "text",
          value: E,
          onChange: N,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ i(Nt, { position: "end", children: /* @__PURE__ */ i(Vt, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ i(Ft, { onClickAway: () => {
        m(!1);
      }, children: /* @__PURE__ */ J("div", { className: "grid-header-button grid-density-btn", onClick: z, children: [
        /* @__PURE__ */ i(De, { title: "Density", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: A() }) }),
        h && /* @__PURE__ */ i("div", { className: "density-dropdown-content", children: /* @__PURE__ */ J("ul", { children: [
          /* @__PURE__ */ J("li", { onClick: () => g("standard"), children: [
            /* @__PURE__ */ i(lt, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ J("li", { onClick: () => g("compact"), children: [
            /* @__PURE__ */ i(ct, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ J("li", { onClick: () => g("comfortable"), children: [
            /* @__PURE__ */ i(ut, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ J("div", { className: "grid-header-button grid-filter-btn", children: [
        /* @__PURE__ */ i(De, { title: "Filter", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, onClick: () => T(!0), children: /* @__PURE__ */ i(Er, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ i(
          Un,
          {
            columns: n,
            setFilter: P,
            defaultFilter: q,
            isOpen: w,
            onClose: () => T(!1)
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "grid-header-button grid-export-btn", onClick: F, children: /* @__PURE__ */ i(De, { title: "Export", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Dr, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ i(De, { title: "New", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Rr, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ i(Te, {})
    ] }),
    /* @__PURE__ */ i("div", { className: "grid-table", children: /* @__PURE__ */ i(
      Tr,
      {
        columnDefs: X,
        EmptyChild: d,
        rowData: W,
        onRowClick: R,
        onRowStyle: l,
        onHeaderStyle: b,
        onSortColumn: S
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "grid-header", children: /* @__PURE__ */ i("div", { className: "grid-filter", children: $ && /* @__PURE__ */ i(
      Mt,
      {
        component: "div",
        count: G || 0,
        page: K(),
        onPageChange: k,
        rowsPerPage: H.limit,
        rowsPerPageOptions: O || [],
        onRowsPerPageChange: I
      }
    ) }) })
  ] }) });
}), ua = ce(function(t, r) {
  const { columns: n, endPoint: a, storeFactory: o, layoutParams: c, pagination: u } = t, d = t.quickSearch || "", p = se(null), h = (C, x) => {
    console.log(x);
  };
  de(() => {
    var C = dt.subscribe(t.topic, h);
    return () => {
      dt.unsubscribe(C);
    };
  }, [t.topic]), r && ve(r, () => ({
    setFilter: (C) => {
      p.current.setFilter(C);
    },
    refresh: () => {
      p.current.refresh();
    },
    resetFilter() {
      p.current.resetFilter();
    },
    setEndPointOptions: (C) => {
      p.current.setEndPointOptions(C);
    },
    addFilter: (C, x) => {
      p.current.addFilter(C, x);
    }
  }), [n, a]);
  const m = {
    fields: n,
    pagination: u,
    quickSearch: d,
    storeOptions: {
      endPoint: a
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ i(Te, { children: /* @__PURE__ */ i(He.Provider, { value: o, children: /* @__PURE__ */ i(rr, { layout: m, context: c, customizer: t.customizer, ref: p }) }) });
}), Hn = ce(function(t, r) {
  const n = t.layout, [a, o] = Z(n.fields), c = n.pagination ? n.pagination : [15], u = Fe(He), d = Fe(Et);
  var p = n.storeOptions || {}, h = {};
  br(h, p, d);
  const m = u.getGridStore(h, n.storeOptions.endPoint);
  de(() => {
    p.hasLayout && m.queryLayout({}).then((w) => {
      o(w.columns);
    });
  }, []);
  const { onClick: C, onNewClick: x } = kr(n.actionOptions, d);
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    Gn,
    {
      columns: a,
      store: m,
      pageSize: c,
      onRowClick: C,
      onNewClick: x,
      customizer: t.customizer,
      quickSearch: n.quickSearch,
      ref: r
    }
  ) });
}), rr = Hn, Kn = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Container || kt;
  return /* @__PURE__ */ i(It, { fallback: /* @__PURE__ */ i("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ i(n, { ...t, children: ((o) => /* @__PURE__ */ i(
    rr,
    {
      context: r,
      layout: o
    }
  ))(t.tableLayout) }) });
}, Qn = (e) => {
  const { layout: t } = e;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ i(Yt, { ...e });
    case "view":
      return /* @__PURE__ */ i(Ir, { ...e });
    case "grid":
      return /* @__PURE__ */ i(Kn, { ...e });
    case "chart":
      return /* @__PURE__ */ i(vr, { ...e });
    default:
      return /* @__PURE__ */ i(Lr, { ...e });
  }
};
function Jn(e, t) {
  var r = e || 1, n = t;
  return {
    w: r,
    h: n
  };
}
const nr = (e) => {
  const { layout: t, context: r } = e, n = t.sections;
  function a(o, c, u) {
    const { w: d, h: p } = Jn(o.width, o.height);
    return /* @__PURE__ */ i(gr, { sx: { width: d, height: p }, children: /* @__PURE__ */ i(
      Qn,
      {
        layout: o,
        context: c
      }
    ) }, (o.name || "tab") + u);
  }
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap" }, children: n.map((o, c) => a(o, r, c)) });
}, Tt = ce(function(t, r) {
  const { layout: n } = t;
  ve(r, () => ({
    resetFilter() {
    }
  }), []);
  const a = {}, o = n.tabs;
  return /* @__PURE__ */ i("div", { children: o.map((c, u) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    nr,
    {
      layout: c,
      context: a
    }
  ) }, c.name + u)) });
}), Zn = (e) => {
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
}, xt = ce(function(t, r) {
  var h;
  const n = t.data || {}, { layout: a } = t;
  var { getFieldManager: o, getFormData: c, isFormValid: u } = $r(n, (h = t.callbacks) == null ? void 0 : h.onFormValidChange, Zn(t.mode));
  ve(r, () => ({
    getData() {
      return c();
    },
    isValid() {
      return u();
    }
  }), []);
  const d = { formData: n }, p = a.tabs;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(Me.Provider, { value: o, children: p.map((m, C) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    nr,
    {
      layout: m,
      context: d
    }
  ) }, m.name + C)) }) });
}), eo = (e) => {
  switch (e) {
    case "grid":
      return Tt;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), xt;
    case "formEdit":
    case "formNew":
    case "formView":
      return xt;
    default:
      return Tt;
  }
}, da = ce(function(t, r) {
  const [n, a] = Z(t.layout), o = t.mode ? t.mode : n.type ? n.type : "grid", c = t.layoutParams || {}, u = eo(o), d = se(0);
  return de(() => {
    a(t.layout), d.current < 999999 ? d.current++ : d.current = 0;
  }, [t.layout]), /* @__PURE__ */ i(It, { fallback: /* @__PURE__ */ i("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ i(He.Provider, { value: t.storeFactory, children: /* @__PURE__ */ i(Et.Provider, { value: c, children: /* @__PURE__ */ i(u, { ...t, ref: (p) => {
    r && (r.current = p);
  } }, d.current) }) }) });
}), fa = ce(function(t, r) {
  const { children: n, Child: a, childProps: o, pageSize: c } = t, u = r || se(null), {
    setQueryFilter: d,
    refreshData: p,
    setQuickSearch: h,
    gotoPage: m,
    setPageSize: C,
    getPageNo: x,
    data: w,
    totalRecords: T,
    pageSizeOptions: E,
    queryLimit: V
  } = xe(t), P = t.listKeyProvider || ((Y, W) => W);
  ve(u, () => ({
    setFilter(Y) {
      d(Y);
    },
    refresh: () => {
      p();
    },
    gotoPage(Y) {
      m(Y);
    },
    nextPage() {
    },
    prevPage() {
    }
  }), []);
  const v = (Y, W) => {
    m(W);
  }, S = (Y) => {
    const W = Y.target.value;
    h(W);
  }, s = (Y) => {
    const W = parseInt(Y.target.value, 10);
    C(W);
  }, L = 200, D = !!c, K = !!t.quickSearch;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ J("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ J("div", { children: [
      /* @__PURE__ */ J("div", { className: "card-header", children: [
        /* @__PURE__ */ i("div", { className: "card-filter", children: K && /* @__PURE__ */ i(
          Ae,
          {
            sx: { width: L },
            type: "text",
            onChange: S,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ i(Nt, { position: "end", children: /* @__PURE__ */ i(Vt, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ i("div", { className: "card-pagination", children: D && /* @__PURE__ */ i(
          Mt,
          {
            component: "div",
            count: T || 0,
            page: x(),
            onPageChange: v,
            rowsPerPage: V.limit,
            rowsPerPageOptions: E || [],
            onRowsPerPageChange: s
          }
        ) })
      ] }),
      /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
        yr,
        {
          Child: a,
          childKeyProvider: P,
          dataList: w,
          childProps: o,
          EmptyChild: t.EmptyChild
        }
      ) })
    ] })
  ] }) });
});
export {
  da as F,
  rr as G,
  Vr as M,
  ua as P,
  fa as S,
  nr as T,
  Gn as a,
  la as b,
  xe as c,
  jr as d,
  Xr as e,
  Yt as f,
  $t as g,
  Xn as h,
  Un as i,
  Kn as j,
  Qn as k,
  Tt as l,
  xt as m,
  qr as u
};
