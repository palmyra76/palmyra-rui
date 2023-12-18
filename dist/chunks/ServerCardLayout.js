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
import hr from "../palmyra/mui/form/MuiNumberField.js";
import { FieldManagerContext as Me, StoreFactoryContext as He, LayoutParamsContext as Dt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as i, jsxs as J, Fragment as Te } from "react/jsx-runtime";
import pe, { useState as Z, useRef as se, useEffect as de, forwardRef as ce, useContext as Fe, useImperativeHandle as ve, useMemo as Et } from "react";
import { FormControlLabel as it, Checkbox as st, FormControl as Ke, FormHelperText as Qe, Autocomplete as Rt, TextField as Ae, CircularProgress as _t, Dialog as pr, ClickAwayListener as Ft, Button as Se, Paper as mr, InputAdornment as Nt, Tooltip as Ee, TablePagination as Mt, Box as gr } from "@mui/material";
import yr from "../palmyra/layout/card/CardLayout.js";
import vr from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Je, getFieldLabel as Ze } from "../palmyra/mui/form/MuiUtil.js";
import et from "../palmyra/mui/form/FieldDecorator.js";
import { hasDot as Pe } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as we, setValueByKey as Ne } from "../palmyra/form/FormUtil.js";
import { delay as At, mergeDeep as br } from "../palmyra/utils/index.js";
import Sr from "../palmyra/mui/form/MuiDateRangePicker.js";
import Cr from "../palmyra/mui/form/MuiIntegerField.js";
import kt from "../palmyra/layout/container/SectionContainer.js";
import Pr from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as wr } from "../palmyra/grid/base/ColumnConverter.js";
import Or from "../palmyra/grid/base/EmptyChildTable.js";
import Tr from "../palmyra/grid/base/TableX.js";
import { Close as xr, Menu as lt, DensitySmall as ct, DensityLarge as ut, FilterAlt as Dr, FileDownloadOutlined as Er, Add as Rr } from "@mui/icons-material";
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
  const { store: t, quickSearch: r, endPointVars: n } = e, a = e.fetchAll != !1, [o, l] = Z(null), [c, u] = e.filterTopic ? Yr(e.filterTopic, {}) : Z({}), [p, h] = Z({}), y = se(e.initialFetch == !1), m = e.pageSize ? e.pageSize : 15;
  var T = m instanceof Array ? m : [m], x = m instanceof Array ? m[0] : m;
  const [D, L] = Z({ limit: x, offset: 0 }), [q, P] = Z(null), v = () => Math.round(D.offset / D.limit), b = () => D.limit, s = (k) => {
    L({ ...D, offset: k * x });
  }, A = (k) => {
    const X = k > 10 || k == -1 ? k : 15;
    L({ ...D, limit: X });
  }, E = () => c ? Object.keys(c).length == 0 : !1, B = (k) => {
    P((X) => (setTimeout(() => {
      e.onDataChange && e.onDataChange(q, X);
    }, 300), k));
  };
  de(() => {
    if (y.current) {
      y.current = !1;
      return;
    }
    (a || !E()) && U();
  }, [D, c, p]);
  const U = () => {
    const k = { filter: c, sortOrder: p, total: !0, endPointVars: n, ...D };
    if (t)
      try {
        t.query(k).then((X) => {
          B(X.result), l(X.total);
        }).catch((X) => {
          var g = X.response ? X.response : X;
          console.error("error while fetching", g), V();
        });
      } catch (X) {
        console.error(X), Y();
      }
    else
      console.error("Store is not provided for the Grid"), Y();
  }, Y = () => {
    B([]), l(0);
  }, V = () => {
    B(void 0), l(null);
  };
  return {
    setQueryFilter: (k) => {
      typeof k == "function" || k && Object.keys(k).length > 0 ? u(k) : u({});
    },
    setQuickSearch: (k) => {
      const X = r;
      u(k ? (g) => (g[X] = k, { ...g }) : (g) => (delete g[X], { ...g }));
    },
    setSortColumns: (k) => {
      h(k);
    },
    refreshData: U,
    gotoPage: s,
    setPageSize: A,
    getPageNo: v,
    getLimit: b,
    filter: c,
    queryLimit: D,
    data: q,
    totalRecords: o,
    pageSizeOptions: T
  };
};
function ft(e) {
  return e ? Array.isArray(e) ? e : typeof e == "string" ? e.split(",") : (console.log(e), [e]) : [];
}
const la = ce(function(t, r) {
  const n = Fe(Me), a = r || se(null), o = n(t, "checkbox", a), { mutateOptions: l, setMutateOptions: c } = o, [u, p] = Z(!1), h = ft(o.data), y = o.error, m = o.eventListeners, x = { store: o.store, pageSize: -1 }, { data: D } = xe(x), L = D, q = se(null), P = t.lookupOptions || {}, v = P.idAttribute || "id", b = P.titleAttribute || "name", s = Pe(v) ? (O) => we(v, O) : (O) => O[v], A = Pe(b) ? (O) => we(b, O) : (O) => O[b];
  ve(a, () => ({
    focus() {
      q.current.focus();
    },
    isValid() {
      return !y.status;
    },
    clear() {
      o.setData("", !0);
    },
    getValue() {
      return o.getData();
    },
    setValue(O, z = !1) {
      o.setData(O, z);
    },
    setVisible(O) {
      c((z) => ({ ...z, visible: O }));
    },
    setRequired(O) {
      c((z) => ({ ...z, required: O }));
    },
    setReadOnly(O) {
      c((z) => ({ ...z, readonly: O }));
    },
    setAttribute(O) {
      c((z) => ({ ...z, ...O }));
    },
    setOptions(O) {
    },
    getOptions() {
    }
  }), [o]);
  var E = Je(t, o.data, t.label);
  t.readonly && (E.inputProps = { readOnly: !0 });
  function B(O, z) {
    const K = ft(o.data);
    var k = K.indexOf(O);
    z ? k < 0 && K.push(O) : k >= 0 && K.splice(k, 1), m.onValueChange(K.toString());
  }
  var U = {
    onBlur: m.onBlur,
    onFocus: m.onFocus,
    onChange: (O) => {
      B(O.target.value, O.target.checked);
    }
  };
  const Y = (O) => {
    const z = O.toString();
    return h.includes(z);
  }, V = (O) => {
    const z = O.target.checked;
    p(z);
    var K = [];
    z && L.map((k) => {
      K.push(s(k));
    }), m.onValueChange(K.toString());
  };
  return /* @__PURE__ */ i("div", { className: t.className, children: l.visible && /* @__PURE__ */ J(
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
            control: /* @__PURE__ */ i(st, { onChange: V }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ J(
          Ke,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: y.status,
            ...E,
            children: [
              L ? L.map((O) => /* @__PURE__ */ i(
                it,
                {
                  value: s(O),
                  control: /* @__PURE__ */ i(
                    st,
                    {
                      ...U,
                      checked: Y(s(O)),
                      disabled: t.readonly
                    }
                  ),
                  label: A(O)
                },
                s(O)
              )) : /* @__PURE__ */ i("div", { children: "No options provided" }),
              /* @__PURE__ */ i(Qe, { className: "form-error-text", children: y.message })
            ]
          }
        )
      ]
    }
  ) });
}), qr = (e, t, r) => {
  const n = e.store || r.store, a = e.lookupOptions || {}, o = a.idAttribute || "id", l = a.titleAttribute || "name", c = a.searchAttribute || l, u = r.data, p = se(0), [h, y] = Z(null), [m, T] = Z([]), [x, D] = Z(""), [L, q] = Z(!1), P = L && m.length < (h ? 2 : 1), v = {
    store: n,
    endPointVars: e.storeOptions.endPointVars,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: c,
    initialFetch: !1
  }, b = xe(v), { setQueryFilter: s, setQuickSearch: A, filter: E, totalRecords: B, refreshData: U } = b, Y = b.data, V = Pe(o) ? (g) => we(o, g) : (g) => g == null ? void 0 : g[o], O = Pe(l) ? (g) => we(l, g) : (g) => g == null ? void 0 : g[l];
  function z() {
    if (u) {
      var g = {};
      Ne(o, g, u);
      const j = r.displayValue || u;
      return Ne(l, g, j), g;
    } else
      return null;
  }
  de(() => {
    if (V(h) != r.data) {
      var g = z();
      g && (T([g]), y(g));
    }
  }, [r.data]), de(() => {
    const g = Y ? [...Y] : [], j = h;
    g && j && !K(g, V(j)) && g.unshift(j), T(g), p.current < B && (p.current = B);
  }, [Y, B]);
  function K(g, j) {
    return g.find((W) => {
      if (V(W) == j)
        return W;
    });
  }
  de(() => {
    At(k);
  }, [x, L]);
  function k() {
    L && (x.length > 0 && x != O(h) ? A("*" + x + "*") : Y ? A(null) : U());
  }
  return {
    getSelectedOption: z,
    filter: E,
    labelAccessor: O,
    idAccessor: V,
    getServerLookup: (g) => {
      var j = Je(e, h, e.label);
      const W = r.eventListeners, d = r.error, S = e.variant || "standard", M = e.autoFocus || !1, F = e.label, R = e.readonly || !1, I = e.required || !1;
      t.readonly && (j.inputProps = { readOnly: !0 });
      var _ = {
        onBlur: W.onBlur,
        onFocus: W.onFocus,
        onChange: (f, w) => {
          N(w), y(w);
        },
        onInputChange: (f, w) => (D(w), !0)
      };
      const N = (f) => {
        if (f) {
          const w = V(f);
          W.onValueChange(w), r.setDisplayValue(O(f));
        } else
          W.onValueChange(void 0), r.setDisplayValue(void 0);
      }, $ = (f) => typeof f == "object" ? O(f) + "" : f;
      return /* @__PURE__ */ i(
        et,
        {
          label: Ze(e),
          customContainerClass: e.customContainerClass,
          colspan: e.colspan,
          customFieldClass: e.customFieldClass,
          customLabelClass: e.customLabelClass,
          children: /* @__PURE__ */ J(Ke, { fullWidth: !0, error: d.status, children: [
            /* @__PURE__ */ i(
              Rt,
              {
                includeInputInList: !0,
                autoHighlight: !0,
                readOnly: R,
                renderOption: e.renderOption,
                isOptionEqualToValue: (f, w) => V(f) == V(w),
                filterOptions: (f) => f,
                renderInput: (f) => /* @__PURE__ */ i(
                  Ae,
                  {
                    ...f,
                    inputRef: (w) => {
                      g.current = w;
                    },
                    variant: S,
                    label: F,
                    autoFocus: M,
                    required: I,
                    InputProps: {
                      ...f.InputProps,
                      endAdornment: /* @__PURE__ */ J(Te, { children: [
                        P ? /* @__PURE__ */ i(_t, { color: "inherit", size: 18 }) : null,
                        f.InputProps.endAdornment
                      ] })
                    }
                  }
                ),
                getOptionLabel: $,
                ...j,
                options: m,
                open: L,
                onClose: () => {
                  q(!1);
                },
                onOpen: (f) => {
                  q(!0);
                },
                ..._
              }
            ),
            /* @__PURE__ */ i(Qe, { className: "form-error-text", children: d.message })
          ] })
        }
      );
    },
    setQueryFilter: s,
    searchText: x,
    setSearchText: D,
    refreshOptions: k
  };
}, Vr = (e, t, r) => {
  const n = e.store || r.store, a = e.lookupOptions || {}, o = a.idAttribute || "id", l = a.titleAttribute || "name", c = a.searchAttribute || l, u = r.data, p = se(0), [h, y] = Z([]), [m, T] = Z(null), [x, D] = Z(""), [L, q] = Z(!1), P = L && m.length < (h ? 2 : 1), v = {
    store: n,
    endPointVars: e.storeOptions.endPointVars,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: c,
    initialFetch: !1
  }, b = xe(v), { setQueryFilter: s, setQuickSearch: A, filter: E, totalRecords: B, refreshData: U } = b, Y = b.data, V = Pe(o) ? (g) => we(o, g) : (g) => g == null ? void 0 : g[o], O = Pe(l) ? (g) => we(l, g) : (g) => g == null ? void 0 : g[l];
  function z() {
    if (u) {
      if (u instanceof Array)
        return u.map((j) => {
          var W = {};
          return Ne(o, W, V(j)), Ne(l, W, O(j)), console.log(W), W;
        });
      console.warn("The value should be an array for " + e.attribute);
    } else
      return null;
  }
  de(() => {
    if (!(r.data && r.data.length > 0)) {
      var g = z();
      g && (T(g), y(g));
    }
  }, [r.data]), de(() => {
    const g = Y ? [...Y] : [], j = h;
    g && j && j.length > 0 && j.map((W) => {
      K(g, V(W)) || g.unshift(W);
    }), T(g), p.current < B && (p.current = B);
  }, [Y, B]);
  function K(g, j) {
    return g.find((W) => {
      if (V(W) == j)
        return W;
    });
  }
  de(() => {
    At(k);
  }, [x, L]);
  function k() {
    L && (x.length > 0 && x != O(h) ? A("*" + x + "*") : Y ? A(null) : U());
  }
  return {
    getSelectedOption: z,
    filter: E,
    labelAccessor: O,
    idAccessor: V,
    getServerLookup: (g) => {
      var j = Je(e, h, e.label);
      const W = r.eventListeners, d = r.error, S = e.variant || "standard", M = e.autoFocus || !1, F = e.label, R = e.readonly || !1, I = e.required || !1;
      t.readonly && (j.inputProps = { readOnly: !0 });
      var _ = {
        onBlur: W.onBlur,
        onFocus: W.onFocus,
        onChange: (f, w) => {
          N(w), y(w);
        },
        onInputChange: (f, w) => (D(w), !0)
      };
      const N = (f) => {
        f ? W.onValueChange(f) : (W.onValueChange(void 0), r.setDisplayValue(void 0));
      }, $ = (f) => typeof f == "object" ? O(f) + "" : f;
      return /* @__PURE__ */ i(
        et,
        {
          label: Ze(e),
          customContainerClass: e.customContainerClass,
          colspan: e.colspan,
          customFieldClass: e.customFieldClass,
          customLabelClass: e.customLabelClass,
          children: /* @__PURE__ */ J(Ke, { fullWidth: !0, error: d.status, children: [
            m && /* @__PURE__ */ i(
              Rt,
              {
                disableCloseOnSelect: !0,
                multiple: !0,
                renderOption: e.renderOption,
                readOnly: R,
                isOptionEqualToValue: (f, w) => f instanceof Array ? f.some((ee) => V(ee) == V(w)) : V(f) == V(w),
                filterOptions: (f) => f,
                renderInput: (f) => /* @__PURE__ */ i(
                  Ae,
                  {
                    ...f,
                    inputRef: (w) => {
                      g.current = w;
                    },
                    variant: S,
                    label: F,
                    autoFocus: M,
                    required: I,
                    InputProps: {
                      ...f.InputProps,
                      endAdornment: /* @__PURE__ */ J(Te, { children: [
                        P ? /* @__PURE__ */ i(_t, { color: "inherit", size: 18 }) : null,
                        f.InputProps.endAdornment
                      ] })
                    }
                  }
                ),
                getOptionLabel: $,
                ...j,
                options: m,
                open: L,
                onClose: () => {
                  q(!1);
                },
                onOpen: (f) => {
                  q(!0);
                },
                ..._
              }
            ),
            /* @__PURE__ */ i(Qe, { className: "form-error-text", children: d.message })
          ] })
        }
      );
    },
    setQueryFilter: s,
    searchText: x,
    setSearchText: D,
    refreshOptions: k
  };
}, jr = ce(function(t, r) {
  const n = Fe(Me), a = r || se(null), o = n(t, "serverlookup", a), l = o.error, { mutateOptions: c, setMutateOptions: u } = o, p = se(null), { getServerLookup: h, setQueryFilter: y } = t.multiple ? Vr(t, c, o) : qr(t, c, o);
  return ve(a, () => ({
    focus() {
      p.current.focus();
    },
    isValid() {
      return !l.status;
    },
    clear() {
      o.setData("", !0);
    },
    getValue() {
      return o.getData();
    },
    setValue(m, T = !1) {
      o.setData(m, T);
    },
    setVisible(m) {
      u((T) => ({ ...T, visible: m }));
    },
    setRequired(m) {
      u((T) => ({ ...T, required: m }));
    },
    setReadOnly(m) {
      u((T) => ({ ...T, readonly: m }));
    },
    setAttribute(m) {
      u((T) => ({ ...T, ...m }));
    },
    setFilter(m) {
      y(m);
    },
    resetFilter() {
    },
    addFilter(m, T) {
      y((x) => (x[m] = T, { ...x }));
    },
    setDefaultFilter(m) {
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
      return oe(a, jr);
    case "textarea":
      return oe(a, lr);
    case "switch":
      return oe(a, dr);
    case "password":
      return oe(a, fr);
    case "float":
    case "number":
    case "numbersOnly":
      return oe(a, hr);
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
  const { formLayout: n, context: a } = t, { formData: o } = a, l = n.Container;
  se({});
  const c = Et(() => (y) => $t(y), [o.data]);
  var u = ((h = n.options) == null ? void 0 : h.columns) || 1, p = { columns: u };
  return l ? /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((y, m) => /* @__PURE__ */ i(
    l,
    {
      index: m,
      field: y,
      label: y.title,
      options: p,
      children: c(y)
    },
    y.attribute + y.name + y.type
  )) }) : /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((y, m) => c(y)) });
}), Yt = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Renderer || Xr, a = t.Container || kt;
  const o = (l) => /* @__PURE__ */ i(
    n,
    {
      context: r,
      formLayout: l
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
}, ht = pe.createContext && pe.createContext(qt), ye = globalThis && globalThis.__assign || function() {
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
function Vt(e) {
  return e && e.map(function(t, r) {
    return pe.createElement(t.tag, ye({
      key: r
    }, t.attr), Vt(t.child));
  });
}
function Ur(e) {
  return function(t) {
    return pe.createElement(Gr, ye({
      attr: ye({}, e.attr)
    }, t), Vt(e.child));
  };
}
function Gr(e) {
  var t = function(r) {
    var n = e.attr, a = e.size, o = e.title, l = Br(e, ["attr", "size", "title"]), c = a || r.size || "1em", u;
    return r.className && (u = r.className), e.className && (u = (u ? u + " " : "") + e.className), pe.createElement("svg", ye({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, l, {
      className: u,
      style: ye(ye({
        color: e.color || r.color
      }, r.style), e.style),
      height: c,
      width: c,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && pe.createElement("title", null, o), e.children);
  };
  return ht !== void 0 ? pe.createElement(ht.Consumer, null, function(r) {
    return t(r);
  }) : t(qt);
}
function jt(e) {
  return Ur({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
}
var ke = { exports: {} }, Wt = {}, Ge = { exports: {} }, Re = { exports: {} }, G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function Hr() {
  if (pt)
    return G;
  pt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, D = e ? Symbol.for("react.block") : 60121, L = e ? Symbol.for("react.fundamental") : 60117, q = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function v(s) {
    if (typeof s == "object" && s !== null) {
      var A = s.$$typeof;
      switch (A) {
        case t:
          switch (s = s.type, s) {
            case u:
            case p:
            case n:
            case o:
            case a:
            case y:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case c:
                case h:
                case x:
                case T:
                case l:
                  return s;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function b(s) {
    return v(s) === p;
  }
  return G.AsyncMode = u, G.ConcurrentMode = p, G.ContextConsumer = c, G.ContextProvider = l, G.Element = t, G.ForwardRef = h, G.Fragment = n, G.Lazy = x, G.Memo = T, G.Portal = r, G.Profiler = o, G.StrictMode = a, G.Suspense = y, G.isAsyncMode = function(s) {
    return b(s) || v(s) === u;
  }, G.isConcurrentMode = b, G.isContextConsumer = function(s) {
    return v(s) === c;
  }, G.isContextProvider = function(s) {
    return v(s) === l;
  }, G.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === t;
  }, G.isForwardRef = function(s) {
    return v(s) === h;
  }, G.isFragment = function(s) {
    return v(s) === n;
  }, G.isLazy = function(s) {
    return v(s) === x;
  }, G.isMemo = function(s) {
    return v(s) === T;
  }, G.isPortal = function(s) {
    return v(s) === r;
  }, G.isProfiler = function(s) {
    return v(s) === o;
  }, G.isStrictMode = function(s) {
    return v(s) === a;
  }, G.isSuspense = function(s) {
    return v(s) === y;
  }, G.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === p || s === o || s === a || s === y || s === m || typeof s == "object" && s !== null && (s.$$typeof === x || s.$$typeof === T || s.$$typeof === l || s.$$typeof === c || s.$$typeof === h || s.$$typeof === L || s.$$typeof === q || s.$$typeof === P || s.$$typeof === D);
  }, G.typeOf = v, G;
}
var H = {};
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
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, D = e ? Symbol.for("react.block") : 60121, L = e ? Symbol.for("react.fundamental") : 60117, q = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function v(C) {
      return typeof C == "string" || typeof C == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      C === n || C === p || C === o || C === a || C === y || C === m || typeof C == "object" && C !== null && (C.$$typeof === x || C.$$typeof === T || C.$$typeof === l || C.$$typeof === c || C.$$typeof === h || C.$$typeof === L || C.$$typeof === q || C.$$typeof === P || C.$$typeof === D);
    }
    function b(C) {
      if (typeof C == "object" && C !== null) {
        var ue = C.$$typeof;
        switch (ue) {
          case t:
            var De = C.type;
            switch (De) {
              case u:
              case p:
              case n:
              case o:
              case a:
              case y:
                return De;
              default:
                var at = De && De.$$typeof;
                switch (at) {
                  case c:
                  case h:
                  case x:
                  case T:
                  case l:
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
    var s = u, A = p, E = c, B = l, U = t, Y = h, V = n, O = x, z = T, K = r, k = o, X = a, g = y, j = !1;
    function W(C) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(C) || b(C) === u;
    }
    function d(C) {
      return b(C) === p;
    }
    function S(C) {
      return b(C) === c;
    }
    function M(C) {
      return b(C) === l;
    }
    function F(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function R(C) {
      return b(C) === h;
    }
    function I(C) {
      return b(C) === n;
    }
    function _(C) {
      return b(C) === x;
    }
    function N(C) {
      return b(C) === T;
    }
    function $(C) {
      return b(C) === r;
    }
    function f(C) {
      return b(C) === o;
    }
    function w(C) {
      return b(C) === a;
    }
    function ee(C) {
      return b(C) === y;
    }
    H.AsyncMode = s, H.ConcurrentMode = A, H.ContextConsumer = E, H.ContextProvider = B, H.Element = U, H.ForwardRef = Y, H.Fragment = V, H.Lazy = O, H.Memo = z, H.Portal = K, H.Profiler = k, H.StrictMode = X, H.Suspense = g, H.isAsyncMode = W, H.isConcurrentMode = d, H.isContextConsumer = S, H.isContextProvider = M, H.isElement = F, H.isForwardRef = R, H.isFragment = I, H.isLazy = _, H.isMemo = N, H.isPortal = $, H.isProfiler = f, H.isStrictMode = w, H.isSuspense = ee, H.isValidElementType = v, H.typeOf = b;
  }()), H;
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
      for (var l = {}, c = 0; c < 10; c++)
        l["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(l).map(function(h) {
        return l[h];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        p[h] = h;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ye = a() ? Object.assign : function(o, l) {
    for (var c, u = n(o), p, h = 1; h < arguments.length; h++) {
      c = Object(arguments[h]);
      for (var y in c)
        t.call(c, y) && (u[y] = c[y]);
      if (e) {
        p = e(c);
        for (var m = 0; m < p.length; m++)
          r.call(c, p[m]) && (u[p[m]] = c[p[m]]);
      }
    }
    return u;
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
var Ve, bt;
function Xt() {
  return bt || (bt = 1, Ve = Function.call.bind(Object.prototype.hasOwnProperty)), Ve;
}
var je, St;
function Jr() {
  if (St)
    return je;
  St = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = tt(), r = {}, n = Xt();
    e = function(o) {
      var l = "Warning: " + o;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function a(o, l, c, u, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in o)
        if (n(o, h)) {
          var y;
          try {
            if (typeof o[h] != "function") {
              var m = Error(
                (u || "React class") + ": " + c + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            y = o[h](l, h, u, c, null, t);
          } catch (x) {
            y = x;
          }
          if (y && !(y instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in r)) {
            r[y.message] = !0;
            var T = p ? p() : "";
            e(
              "Failed " + c + " type: " + y.message + (T ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, je = a, je;
}
var We, Ct;
function Zr() {
  if (Ct)
    return We;
  Ct = 1;
  var e = zt(), t = Qr(), r = tt(), n = Xt(), a = Jr(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return We = function(c, u) {
    var p = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function y(d) {
      var S = d && (p && d[p] || d[h]);
      if (typeof S == "function")
        return S;
    }
    var m = "<<anonymous>>", T = {
      array: q("array"),
      bigint: q("bigint"),
      bool: q("boolean"),
      func: q("function"),
      number: q("number"),
      object: q("object"),
      string: q("string"),
      symbol: q("symbol"),
      any: P(),
      arrayOf: v,
      element: b(),
      elementType: s(),
      instanceOf: A,
      node: Y(),
      objectOf: B,
      oneOf: E,
      oneOfType: U,
      shape: O,
      exact: z
    };
    function x(d, S) {
      return d === S ? d !== 0 || 1 / d === 1 / S : d !== d && S !== S;
    }
    function D(d, S) {
      this.message = d, this.data = S && typeof S == "object" ? S : {}, this.stack = "";
    }
    D.prototype = Error.prototype;
    function L(d) {
      if (process.env.NODE_ENV !== "production")
        var S = {}, M = 0;
      function F(I, _, N, $, f, w, ee) {
        if ($ = $ || m, w = w || N, ee !== r) {
          if (u) {
            var C = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw C.name = "Invariant Violation", C;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = $ + ":" + N;
            !S[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            M < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + w + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), S[ue] = !0, M++);
          }
        }
        return _[N] == null ? I ? _[N] === null ? new D("The " + f + " `" + w + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new D("The " + f + " `" + w + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : d(_, N, $, f, w);
      }
      var R = F.bind(null, !1);
      return R.isRequired = F.bind(null, !0), R;
    }
    function q(d) {
      function S(M, F, R, I, _, N) {
        var $ = M[F], f = X($);
        if (f !== d) {
          var w = g($);
          return new D(
            "Invalid " + I + " `" + _ + "` of type " + ("`" + w + "` supplied to `" + R + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return L(S);
    }
    function P() {
      return L(l);
    }
    function v(d) {
      function S(M, F, R, I, _) {
        if (typeof d != "function")
          return new D("Property `" + _ + "` of component `" + R + "` has invalid PropType notation inside arrayOf.");
        var N = M[F];
        if (!Array.isArray(N)) {
          var $ = X(N);
          return new D("Invalid " + I + " `" + _ + "` of type " + ("`" + $ + "` supplied to `" + R + "`, expected an array."));
        }
        for (var f = 0; f < N.length; f++) {
          var w = d(N, f, R, I, _ + "[" + f + "]", r);
          if (w instanceof Error)
            return w;
        }
        return null;
      }
      return L(S);
    }
    function b() {
      function d(S, M, F, R, I) {
        var _ = S[M];
        if (!c(_)) {
          var N = X(_);
          return new D("Invalid " + R + " `" + I + "` of type " + ("`" + N + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return L(d);
    }
    function s() {
      function d(S, M, F, R, I) {
        var _ = S[M];
        if (!e.isValidElementType(_)) {
          var N = X(_);
          return new D("Invalid " + R + " `" + I + "` of type " + ("`" + N + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return L(d);
    }
    function A(d) {
      function S(M, F, R, I, _) {
        if (!(M[F] instanceof d)) {
          var N = d.name || m, $ = W(M[F]);
          return new D("Invalid " + I + " `" + _ + "` of type " + ("`" + $ + "` supplied to `" + R + "`, expected ") + ("instance of `" + N + "`."));
        }
        return null;
      }
      return L(S);
    }
    function E(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), l;
      function S(M, F, R, I, _) {
        for (var N = M[F], $ = 0; $ < d.length; $++)
          if (x(N, d[$]))
            return null;
        var f = JSON.stringify(d, function(ee, C) {
          var ue = g(C);
          return ue === "symbol" ? String(C) : C;
        });
        return new D("Invalid " + I + " `" + _ + "` of value `" + String(N) + "` " + ("supplied to `" + R + "`, expected one of " + f + "."));
      }
      return L(S);
    }
    function B(d) {
      function S(M, F, R, I, _) {
        if (typeof d != "function")
          return new D("Property `" + _ + "` of component `" + R + "` has invalid PropType notation inside objectOf.");
        var N = M[F], $ = X(N);
        if ($ !== "object")
          return new D("Invalid " + I + " `" + _ + "` of type " + ("`" + $ + "` supplied to `" + R + "`, expected an object."));
        for (var f in N)
          if (n(N, f)) {
            var w = d(N, f, R, I, _ + "." + f, r);
            if (w instanceof Error)
              return w;
          }
        return null;
      }
      return L(S);
    }
    function U(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var S = 0; S < d.length; S++) {
        var M = d[S];
        if (typeof M != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + j(M) + " at index " + S + "."
          ), l;
      }
      function F(R, I, _, N, $) {
        for (var f = [], w = 0; w < d.length; w++) {
          var ee = d[w], C = ee(R, I, _, N, $, r);
          if (C == null)
            return null;
          C.data && n(C.data, "expectedType") && f.push(C.data.expectedType);
        }
        var ue = f.length > 0 ? ", expected one of type [" + f.join(", ") + "]" : "";
        return new D("Invalid " + N + " `" + $ + "` supplied to " + ("`" + _ + "`" + ue + "."));
      }
      return L(F);
    }
    function Y() {
      function d(S, M, F, R, I) {
        return K(S[M]) ? null : new D("Invalid " + R + " `" + I + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return L(d);
    }
    function V(d, S, M, F, R) {
      return new D(
        (d || "React class") + ": " + S + " type `" + M + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + R + "`."
      );
    }
    function O(d) {
      function S(M, F, R, I, _) {
        var N = M[F], $ = X(N);
        if ($ !== "object")
          return new D("Invalid " + I + " `" + _ + "` of type `" + $ + "` " + ("supplied to `" + R + "`, expected `object`."));
        for (var f in d) {
          var w = d[f];
          if (typeof w != "function")
            return V(R, I, _, f, g(w));
          var ee = w(N, f, R, I, _ + "." + f, r);
          if (ee)
            return ee;
        }
        return null;
      }
      return L(S);
    }
    function z(d) {
      function S(M, F, R, I, _) {
        var N = M[F], $ = X(N);
        if ($ !== "object")
          return new D("Invalid " + I + " `" + _ + "` of type `" + $ + "` " + ("supplied to `" + R + "`, expected `object`."));
        var f = t({}, M[F], d);
        for (var w in f) {
          var ee = d[w];
          if (n(d, w) && typeof ee != "function")
            return V(R, I, _, w, g(ee));
          if (!ee)
            return new D(
              "Invalid " + I + " `" + _ + "` key `" + w + "` supplied to `" + R + "`.\nBad object: " + JSON.stringify(M[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var C = ee(N, w, R, I, _ + "." + w, r);
          if (C)
            return C;
        }
        return null;
      }
      return L(S);
    }
    function K(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(K);
          if (d === null || c(d))
            return !0;
          var S = y(d);
          if (S) {
            var M = S.call(d), F;
            if (S !== d.entries) {
              for (; !(F = M.next()).done; )
                if (!K(F.value))
                  return !1;
            } else
              for (; !(F = M.next()).done; ) {
                var R = F.value;
                if (R && !K(R[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function k(d, S) {
      return d === "symbol" ? !0 : S ? S["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && S instanceof Symbol : !1;
    }
    function X(d) {
      var S = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : k(S, d) ? "symbol" : S;
    }
    function g(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var S = X(d);
      if (S === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return S;
    }
    function j(d) {
      var S = g(d);
      switch (S) {
        case "array":
        case "object":
          return "an " + S;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + S;
        default:
          return S;
      }
    }
    function W(d) {
      return !d.constructor || !d.constructor.name ? m : d.constructor.name;
    }
    return T.checkPropTypes = a, T.resetWarningCache = a.resetWarningCache, T.PropTypes = T, T;
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
    function n(l, c, u, p, h, y) {
      if (y !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
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
function wt() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Ut(e)) && (n && (n += " "), n += t);
  return n;
}
const nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: wt,
  default: wt
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
Q.createSVGTransform = wn;
Q.getTouch = On;
Q.getTouchIdentifier = Tn;
Q.getTranslation = rt;
Q.innerHeight = bn;
Q.innerWidth = Sn;
Q.matchesSelector = Qt;
Q.matchesSelectorAndParentsTo = pn;
Q.offsetXYFromParent = Cn;
Q.outerHeight = yn;
Q.outerWidth = vn;
Q.removeClassName = Zt;
Q.removeEvent = gn;
Q.removeUserSelectStyles = Dn;
var ie = fe, Ot = hn(be);
function Kt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Kt = function(n) {
    return n ? r : t;
  })(e);
}
function hn(e, t) {
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
      var l = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      l && (l.get || l.set) ? Object.defineProperty(n, o, l) : n[o] = e[o];
    }
  return n.default = e, r && r.set(e, n), n;
}
let _e = "";
function Qt(e, t) {
  return _e || (_e = (0, ie.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, ie.isFunction)(e[r]);
  })), (0, ie.isFunction)(e[_e]) ? e[_e](t) : !1;
}
function pn(e, t, r) {
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
  } : t.getBoundingClientRect(), o = (e.clientX + t.scrollLeft - a.left) / r, l = (e.clientY + t.scrollTop - a.top) / r;
  return {
    x: o,
    y: l
  };
}
function Pn(e, t) {
  const r = rt(e, t, "px");
  return {
    [(0, Ot.browserPrefixToKey)("transform", Ot.default)]: r
  };
}
function wn(e, t) {
  return rt(e, t, "");
}
function rt(e, t, r) {
  let {
    x: n,
    y: a
  } = e, o = "translate(".concat(n).concat(r, ",").concat(a).concat(r, ")");
  if (t) {
    const l = "".concat(typeof t.x == "string" ? t.x : t.x + r), c = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    o = "translate(".concat(l, ", ").concat(c, ")") + o;
  }
  return o;
}
function On(e, t) {
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
function Dn(e) {
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
var he = {};
Object.defineProperty(he, "__esModule", {
  value: !0
});
he.canDragX = _n;
he.canDragY = Fn;
he.createCoreData = Mn;
he.createDraggableData = An;
he.getBoundPosition = En;
he.getControlPosition = Nn;
he.snapToGrid = Rn;
var ae = fe, Ce = Q;
function En(e, t, r) {
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
    } = a, l = o.defaultView;
    let c;
    if (n === "parent" ? c = a.parentNode : c = o.querySelector(n), !(c instanceof l.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const u = c, p = l.getComputedStyle(a), h = l.getComputedStyle(u);
    n = {
      left: -a.offsetLeft + (0, ae.int)(h.paddingLeft) + (0, ae.int)(p.marginLeft),
      top: -a.offsetTop + (0, ae.int)(h.paddingTop) + (0, ae.int)(p.marginTop),
      right: (0, Ce.innerWidth)(u) - (0, Ce.outerWidth)(a) - a.offsetLeft + (0, ae.int)(h.paddingRight) - (0, ae.int)(p.marginRight),
      bottom: (0, Ce.innerHeight)(u) - (0, Ce.outerHeight)(a) - a.offsetTop + (0, ae.int)(h.paddingBottom) - (0, ae.int)(p.marginBottom)
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
var Be = $n(pe), ne = ot(Bt), In = ot(Lt), te = Q, me = he, Ue = fe, Oe = ot(Ie);
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
      var l = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      l && (l.get || l.set) ? Object.defineProperty(n, o, l) : n[o] = e[o];
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
        x: l,
        y: c
      } = o, u = (0, me.createCoreData)(this, l, c);
      (0, Oe.default)("DraggableCore: handleDragStart: %j", u), (0, Oe.default)("calling", this.props.onStart), !(this.props.onStart(t, u) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, te.addUserSelectStyles)(n), this.dragging = !0, this.lastX = l, this.lastY = c, (0, te.addEvent)(n, ge.move, this.handleDrag), (0, te.addEvent)(n, ge.stop, this.handleDragStop));
    }), re(this, "handleDrag", (t) => {
      const r = (0, me.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: a
      } = r;
      if (Array.isArray(this.props.grid)) {
        let c = n - this.lastX, u = a - this.lastY;
        if ([c, u] = (0, me.snapToGrid)(this.props.grid, c, u), !c && !u)
          return;
        n = this.lastX + c, a = this.lastY + u;
      }
      const o = (0, me.createCoreData)(this, n, a);
      if ((0, Oe.default)("DraggableCore: handleDrag: %j", o), this.props.onDrag(t, o) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const u = document.createEvent("MouseEvents");
          u.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(u);
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
        let u = n - this.lastX || 0, p = a - this.lastY || 0;
        [u, p] = (0, me.snapToGrid)(this.props.grid, u, p), n = this.lastX + u, a = this.lastY + p;
      }
      const o = (0, me.createCoreData)(this, n, a);
      if (this.props.onStop(t, o) === !1 || this.mounted === !1)
        return !1;
      const c = this.findDOMNode();
      c && this.props.enableUserSelectHack && (0, te.removeUserSelectStyles)(c.ownerDocument), (0, Oe.default)("DraggableCore: handleDragStop: %j", o), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, c && ((0, Oe.default)("DraggableCore: Removing handlers"), (0, te.removeEvent)(c.ownerDocument, ge.move, this.handleDrag), (0, te.removeEvent)(c.ownerDocument, ge.stop, this.handleDragStop));
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
      return u.default;
    }
  }), e.default = void 0;
  var t = m(pe), r = h(Bt), n = h(Lt), a = h(on), o = Q, l = he, c = fe, u = h(Le), p = h(Ie);
  function h(P) {
    return P && P.__esModule ? P : { default: P };
  }
  function y(P) {
    if (typeof WeakMap != "function")
      return null;
    var v = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap();
    return (y = function(s) {
      return s ? b : v;
    })(P);
  }
  function m(P, v) {
    if (!v && P && P.__esModule)
      return P;
    if (P === null || typeof P != "object" && typeof P != "function")
      return { default: P };
    var b = y(v);
    if (b && b.has(P))
      return b.get(P);
    var s = {}, A = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var E in P)
      if (E !== "default" && Object.prototype.hasOwnProperty.call(P, E)) {
        var B = A ? Object.getOwnPropertyDescriptor(P, E) : null;
        B && (B.get || B.set) ? Object.defineProperty(s, E, B) : s[E] = P[E];
      }
    return s.default = P, b && b.set(P, s), s;
  }
  function T() {
    return T = Object.assign ? Object.assign.bind() : function(P) {
      for (var v = 1; v < arguments.length; v++) {
        var b = arguments[v];
        for (var s in b)
          Object.prototype.hasOwnProperty.call(b, s) && (P[s] = b[s]);
      }
      return P;
    }, T.apply(this, arguments);
  }
  function x(P, v, b) {
    return v = D(v), v in P ? Object.defineProperty(P, v, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : P[v] = b, P;
  }
  function D(P) {
    var v = L(P, "string");
    return typeof v == "symbol" ? v : String(v);
  }
  function L(P, v) {
    if (typeof P != "object" || P === null)
      return P;
    var b = P[Symbol.toPrimitive];
    if (b !== void 0) {
      var s = b.call(P, v || "default");
      if (typeof s != "object")
        return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (v === "string" ? String : Number)(P);
  }
  class q extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(v, b) {
      let {
        position: s
      } = v, {
        prevPropsPosition: A
      } = b;
      return s && (!A || s.x !== A.x || s.y !== A.y) ? ((0, p.default)("Draggable: getDerivedStateFromProps %j", {
        position: s,
        prevPropsPosition: A
      }), {
        x: s.x,
        y: s.y,
        prevPropsPosition: {
          ...s
        }
      }) : null;
    }
    constructor(v) {
      super(v), x(this, "onDragStart", (b, s) => {
        if ((0, p.default)("Draggable: onDragStart: %j", s), this.props.onStart(b, (0, l.createDraggableData)(this, s)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), x(this, "onDrag", (b, s) => {
        if (!this.state.dragging)
          return !1;
        (0, p.default)("Draggable: onDrag: %j", s);
        const A = (0, l.createDraggableData)(this, s), E = {
          x: A.x,
          y: A.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: U,
            y: Y
          } = E;
          E.x += this.state.slackX, E.y += this.state.slackY;
          const [V, O] = (0, l.getBoundPosition)(this, E.x, E.y);
          E.x = V, E.y = O, E.slackX = this.state.slackX + (U - E.x), E.slackY = this.state.slackY + (Y - E.y), A.x = E.x, A.y = E.y, A.deltaX = E.x - this.state.x, A.deltaY = E.y - this.state.y;
        }
        if (this.props.onDrag(b, A) === !1)
          return !1;
        this.setState(E);
      }), x(this, "onDragStop", (b, s) => {
        if (!this.state.dragging || this.props.onStop(b, (0, l.createDraggableData)(this, s)) === !1)
          return !1;
        (0, p.default)("Draggable: onDragStop: %j", s);
        const E = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: U,
            y: Y
          } = this.props.position;
          E.x = U, E.y = Y;
        }
        this.setState(E);
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
      var v, b;
      return (v = (b = this.props) === null || b === void 0 || (b = b.nodeRef) === null || b === void 0 ? void 0 : b.current) !== null && v !== void 0 ? v : n.default.findDOMNode(this);
    }
    render() {
      const {
        axis: v,
        bounds: b,
        children: s,
        defaultPosition: A,
        defaultClassName: E,
        defaultClassNameDragging: B,
        defaultClassNameDragged: U,
        position: Y,
        positionOffset: V,
        scale: O,
        ...z
      } = this.props;
      let K = {}, k = null;
      const g = !!!Y || this.state.dragging, j = Y || A, W = {
        // Set left if horizontal drag is enabled
        x: (0, l.canDragX)(this) && g ? this.state.x : j.x,
        // Set top if vertical drag is enabled
        y: (0, l.canDragY)(this) && g ? this.state.y : j.y
      };
      this.state.isElementSVG ? k = (0, o.createSVGTransform)(W, V) : K = (0, o.createCSSTransform)(W, V);
      const d = (0, a.default)(s.props.className || "", E, {
        [B]: this.state.dragging,
        [U]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(u.default, T({}, z, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(s), {
        className: d,
        style: {
          ...s.props.style,
          ...K
        },
        transform: k
      }));
    }
  }
  e.default = q, x(q, "displayName", "Draggable"), x(q, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ...u.default.propTypes,
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
  }), x(q, "defaultProps", {
    ...u.default.defaultProps,
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
  DraggableCore: Vn
} = Wt;
ke.exports = tr;
ke.exports.default = tr;
ke.exports.DraggableCore = Vn;
var jn = ke.exports;
const Wn = /* @__PURE__ */ Mr(jn);
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
  const { formLayout: n, context: a } = t, { formData: o } = a, l = se({}), c = zn(t), u = "palmyra-form-field-data", p = Et(() => (h) => $t(h, l, h.label), [o.data]);
  return /* @__PURE__ */ i("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: n.fields.map((h, y) => /* @__PURE__ */ i("div", { className: c, children: /* @__PURE__ */ i("div", { className: u, children: p(h) }) }, h.attribute)) });
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
  var { getFieldManager: o, getFilterData: l } = Ar(a);
  const c = () => {
    n({});
  }, u = () => {
    var m = l();
    n && n(m);
  }, p = () => {
    r();
  }, h = (m) => {
    m.keyCode === 27 && p();
  }, y = Fr(e);
  return /* @__PURE__ */ i("div", { className: "grid-filter-container", children: /* @__PURE__ */ i(
    pr,
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
                fields: y,
                options: {
                  columns: 2
                }
              },
              Renderer: Xn
            }
          }
        ) }) }),
        /* @__PURE__ */ J("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ i(Se, { className: "filter-reset-btn", disableRipple: !0, onClick: c, children: "Reset" }),
          /* @__PURE__ */ i(Se, { className: "filter-button", disableRipple: !0, onClick: u, children: "Filter" })
        ] })
      ] }) })
    }
  ) });
}, Gn = ce(function(t, r) {
  const { columns: n, children: a, EmptyChild: o, onRowClick: l, quickSearch: c } = t, u = o || Or, p = t.customizer || _r, [h, y] = Z(!1), [m, T] = Z("standard"), [x, D] = Z(!1), [L, q] = Z(""), {
    setQueryFilter: P,
    setQuickSearch: v,
    setSortColumns: b,
    gotoPage: s,
    setPageSize: A,
    getPageNo: E,
    refreshData: B,
    data: U,
    totalRecords: Y,
    pageSizeOptions: V,
    filter: O,
    queryLimit: z
  } = xe(t), K = r || se(null);
  ve(K, () => ({
    setFilter: (f) => {
      P(f);
    },
    refresh: () => {
      B();
    }
  }), []);
  const k = (f, w) => {
    s(w);
  }, X = wr(n, p), g = (f) => {
    T(f);
  }, j = () => {
    y(!h);
  }, W = () => m === "compact" ? { padding: "3px" } : m === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, d = () => m === "compact" ? { padding: "3px" } : m === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, S = () => {
    var f;
    switch (m) {
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
  }, M = (f) => {
    const w = f.target.value;
    q(w), w ? v(w) : P({});
  }, F = (f) => {
    l && l(f);
  }, R = (f) => {
    const w = parseInt(f.target.value, 10);
    A(w);
  }, I = () => {
    console.info("Export Clicked");
  }, _ = 200, N = !!t.pageSize;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ J("div", { children: [
    a,
    /* @__PURE__ */ J("div", { className: "grid-header", children: [
      /* @__PURE__ */ i("div", { className: "grid-header-filter", children: !!c && /* @__PURE__ */ i(
        Ae,
        {
          sx: { width: _ },
          type: "text",
          value: L,
          onChange: M,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ i(Nt, { position: "end", children: /* @__PURE__ */ i(jt, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ i(Ft, { onClickAway: () => {
        y(!1);
      }, children: /* @__PURE__ */ J("div", { className: "grid-header-button grid-density-btn", onClick: j, children: [
        /* @__PURE__ */ i(Ee, { title: "Density", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: S() }) }),
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
        /* @__PURE__ */ i(Ee, { title: "Filter", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, onClick: () => D(!0), children: /* @__PURE__ */ i(Dr, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ i(
          Un,
          {
            columns: n,
            setFilter: P,
            defaultFilter: O,
            isOpen: x,
            onClose: () => D(!1)
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "grid-header-button grid-export-btn", onClick: I, children: /* @__PURE__ */ i(Ee, { title: "Export", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Er, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ i(Ee, { title: "New", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Rr, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ i(Te, {})
    ] }),
    /* @__PURE__ */ i("div", { className: "grid-table", children: /* @__PURE__ */ i(
      Tr,
      {
        columnDefs: X,
        EmptyChild: u,
        rowData: U,
        onRowClick: F,
        onRowStyle: W,
        onHeaderStyle: d,
        onSortColumn: b
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "grid-header", children: /* @__PURE__ */ i("div", { className: "grid-filter", children: N && /* @__PURE__ */ i(
      Mt,
      {
        component: "div",
        count: Y || 0,
        page: E(),
        onPageChange: k,
        rowsPerPage: z.limit,
        rowsPerPageOptions: V || [],
        onRowsPerPageChange: R
      }
    ) }) })
  ] }) });
}), ua = ce(function(t, r) {
  const { columns: n, endPoint: a, storeFactory: o, layoutParams: l, pagination: c } = t, u = t.quickSearch || "", p = se(null), h = (m, T) => {
    console.log(T);
  };
  de(() => {
    var m = dt.subscribe(t.topic, h);
    return () => {
      dt.unsubscribe(m);
    };
  }, [t.topic]), r && ve(r, () => ({
    setFilter: (m) => {
      p.current.setFilter(m);
    },
    refresh: () => {
      p.current.refresh();
    }
  }), [n, a]);
  const y = {
    fields: n,
    pagination: c,
    quickSearch: u,
    storeOptions: {
      endPoint: a
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ i(Te, { children: /* @__PURE__ */ i(He.Provider, { value: o, children: /* @__PURE__ */ i(rr, { layout: y, context: l, customizer: t.customizer, ref: p }) }) });
}), Hn = ce(function(t, r) {
  const n = t.layout, [a, o] = Z(n.fields), l = n.pagination ? n.pagination : [15], c = Fe(He), u = Fe(Dt);
  var p = n.storeOptions || {}, h = {};
  br(h, p, u);
  const y = c.getGridStore(h, n.storeOptions.endPoint);
  de(() => {
    p.hasLayout && y.queryLayout({}).then((x) => {
      o(x.columns);
    });
  }, []);
  const { onClick: m, onNewClick: T } = kr(n.actionOptions, u);
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    Gn,
    {
      columns: a,
      store: y,
      pageSize: l,
      onRowClick: m,
      onNewClick: T,
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
  function a(o, l, c) {
    const { w: u, h: p } = Jn(o.width, o.height);
    return /* @__PURE__ */ i(gr, { sx: { width: u, height: p }, children: /* @__PURE__ */ i(
      Qn,
      {
        layout: o,
        context: l
      }
    ) }, (o.name || "tab") + c);
  }
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap" }, children: n.map((o, l) => a(o, r, l)) });
}, Tt = ce(function(t, r) {
  const { layout: n } = t;
  ve(r, () => ({
    resetFilter() {
    }
  }), []);
  const a = {}, o = n.tabs;
  return /* @__PURE__ */ i("div", { children: o.map((l, c) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    nr,
    {
      layout: l,
      context: a
    }
  ) }, l.name + c)) });
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
  var { getFieldManager: o, getFormData: l, isFormValid: c } = $r(n, (h = t.callbacks) == null ? void 0 : h.onFormValidChange, Zn(t.mode));
  ve(r, () => ({
    getData() {
      return l();
    },
    isValid() {
      return c();
    }
  }), []);
  const u = { formData: n }, p = a.tabs;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(Me.Provider, { value: o, children: p.map((y, m) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    nr,
    {
      layout: y,
      context: u
    }
  ) }, y.name + m)) }) });
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
  const [n, a] = Z(t.layout), o = t.mode ? t.mode : n.type ? n.type : "grid", l = t.layoutParams || {}, c = eo(o), u = se(0);
  return de(() => {
    a(t.layout), u.current < 999999 ? u.current++ : u.current = 0;
  }, [t.layout]), /* @__PURE__ */ i(It, { fallback: /* @__PURE__ */ i("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ i(He.Provider, { value: t.storeFactory, children: /* @__PURE__ */ i(Dt.Provider, { value: l, children: /* @__PURE__ */ i(c, { ...t, ref: (p) => {
    r && (r.current = p);
  } }, u.current) }) }) });
}), fa = ce(function(t, r) {
  const { children: n, Child: a, childProps: o, pageSize: l } = t, c = r || se(null), {
    setQueryFilter: u,
    refreshData: p,
    setQuickSearch: h,
    gotoPage: y,
    setPageSize: m,
    getPageNo: T,
    data: x,
    totalRecords: D,
    pageSizeOptions: L,
    queryLimit: q
  } = xe(t), P = t.listKeyProvider || ((U, Y) => Y);
  ve(c, () => ({
    setFilter(U) {
      u(U);
    },
    refresh: () => {
      p();
    },
    gotoPage(U) {
      y(U);
    },
    nextPage() {
    },
    prevPage() {
    }
  }), []);
  const v = (U, Y) => {
    y(Y);
  }, b = (U) => {
    const Y = U.target.value;
    h(Y);
  }, s = (U) => {
    const Y = parseInt(U.target.value, 10);
    m(Y);
  }, A = 200, E = !!l, B = !!t.quickSearch;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ J("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ J("div", { children: [
      /* @__PURE__ */ J("div", { className: "card-header", children: [
        /* @__PURE__ */ i("div", { className: "card-filter", children: B && /* @__PURE__ */ i(
          Ae,
          {
            sx: { width: A },
            type: "text",
            onChange: b,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ i(Nt, { position: "end", children: /* @__PURE__ */ i(jt, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ i("div", { className: "card-pagination", children: E && /* @__PURE__ */ i(
          Mt,
          {
            component: "div",
            count: D || 0,
            page: T(),
            onPageChange: v,
            rowsPerPage: q.limit,
            rowsPerPageOptions: L || [],
            onRowsPerPageChange: s
          }
        ) })
      ] }),
      /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
        yr,
        {
          Child: a,
          childKeyProvider: P,
          dataList: x,
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
  jr as M,
  ua as P,
  fa as S,
  nr as T,
  Gn as a,
  la as b,
  xe as c,
  Vr as d,
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
