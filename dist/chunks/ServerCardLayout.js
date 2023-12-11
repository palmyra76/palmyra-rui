import "../assets/ServerCardLayout.css";
import rr from "../palmyra/mui/form/MuiDatePicker.js";
import nr from "../palmyra/mui/form/MuiDateTimePicker.js";
import or from "../palmyra/mui/form/MuiRadioGroup.js";
import ar from "../palmyra/mui/form/MuiSelect.js";
import ir from "../palmyra/mui/form/MuiTextArea.js";
import sr from "../palmyra/mui/form/MuiTextField.js";
import cr from "../palmyra/mui/form/MuiCheckBox.js";
import lr from "../palmyra/mui/form/MuiSwitch.js";
import ur from "../palmyra/mui/form/MuiPassword.js";
import dr from "../palmyra/mui/form/MuiNumberField.js";
import { FieldManagerContext as Ne, StoreFactoryContext as Ue, LayoutParamsContext as Pt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as i, jsxs as K, Fragment as we } from "react/jsx-runtime";
import pe, { useState as ee, useRef as se, useEffect as ye, forwardRef as le, useContext as Ee, useImperativeHandle as ve, useMemo as wt } from "react";
import { FormControlLabel as et, Checkbox as tt, FormControl as Tt, FormHelperText as xt, Autocomplete as fr, TextField as Ge, CircularProgress as pr, Dialog as hr, ClickAwayListener as Dt, Button as Se, Paper as mr, InputAdornment as Ot, Tooltip as xe, TablePagination as Et, Box as gr } from "@mui/material";
import yr from "../palmyra/layout/card/CardLayout.js";
import vr from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Rt, getFieldLabel as _t } from "../palmyra/mui/form/MuiUtil.js";
import Nt from "../palmyra/mui/form/FieldDecorator.js";
import { hasDot as Re } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as _e, setValueByKey as rt } from "../palmyra/form/FormUtil.js";
import { delay as br, mergeDeep as Sr } from "../palmyra/utils/index.js";
import Cr from "../palmyra/mui/form/MuiDateRangePicker.js";
import Mt from "../palmyra/layout/container/SectionContainer.js";
import Pr from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as wr } from "../palmyra/grid/base/ColumnConverter.js";
import Tr from "../palmyra/grid/base/EmptyChildTable.js";
import xr from "../palmyra/grid/base/TableX.js";
import { Close as Dr, Menu as nt, DensitySmall as ot, DensityLarge as at, FilterAlt as Or, FileDownloadOutlined as Er, Add as Rr } from "@mui/icons-material";
import { NoopCustomizer as _r } from "../palmyra/grid/Types.js";
import { convertToField as Nr } from "../palmyra/grid/base/GridFieldConverter.js";
import { d as Ft } from "./PalmyraFormManager.js";
import "../palmyra/form/PalmyraForm.js";
import { a as Mr, g as Fr } from "./_commonjsHelpers.js";
import At from "react-dom";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import { topic as it } from "../palmyra/utils/pubsub/topic.js";
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
import { getActionPublishers as Ar } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as kt } from "../palmyra/layout/ErrorBoundary.js";
import kr from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import Lr from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { useKeyValue as Ir } from "../palmyra/utils/pubsub/PubSubHelper.js";
const Me = (e) => {
  const { store: t, quickSearch: r, endPointVars: n } = e, o = e.fetchAll != !1, [a, c] = ee(null), [l, d] = e.filterTopic ? Ir(e.filterTopic, {}) : ee({}), [f, p] = ee({}), g = se(e.initialFetch == !1), h = e.pageSize ? e.pageSize : 15;
  var k = h instanceof Array ? h : [h], E = h instanceof Array ? h[0] : h;
  const [x, $] = ee({ limit: E, offset: 0 }), [W, S] = ee(null), m = () => Math.round(x.offset / x.limit), b = () => x.limit, s = (F) => {
    $({ ...x, offset: F * E });
  }, L = (F) => {
    const j = F > 10 || F == -1 ? F : 15;
    $({ ...x, limit: j });
  }, w = () => l ? Object.keys(l).length == 0 : !1;
  ye(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    (o || !w()) && Y();
  }, [x, l, f]);
  const Y = () => {
    const F = { filter: l, sortOrder: f, total: !0, endPointVars: n, ...x };
    if (t)
      try {
        t.query(F).then((j) => {
          S(j.result), c(j.total);
        }).catch((j) => {
          var B = j.response ? j.response : j;
          console.error("error while fetching", B), G();
        });
      } catch (j) {
        console.error(j), z();
      }
    else
      console.error("Store is not provided for the Grid"), z();
  }, z = () => {
    S([]), c(0);
  }, G = () => {
    S(void 0), c(null);
  };
  return {
    setQueryFilter: (F) => {
      typeof F == "function" || F && Object.keys(F).length > 0 ? d(F) : d({});
    },
    setQuickSearch: (F) => {
      const j = r;
      d(F ? (B) => (B[j] = F, { ...B }) : (B) => (delete B[j], { ...B }));
    },
    setSortColumns: (F) => {
      p(F);
    },
    refreshData: Y,
    gotoPage: s,
    setPageSize: L,
    getPageNo: m,
    getLimit: b,
    filter: l,
    queryLimit: x,
    data: W,
    totalRecords: a,
    pageSizeOptions: k
  };
};
function st(e) {
  return e ? Array.isArray(e) ? e : typeof e == "string" ? e.split(",") : (console.log(e), [e]) : [];
}
const ra = le(function(t, r) {
  const n = Ee(Ne), o = r || se(null), a = n(t, "checkbox", o), { mutateOptions: c, setMutateOptions: l } = a, [d, f] = ee(!1), p = st(a.data), g = a.error, h = a.eventListeners, E = { store: a.store, pageSize: -1 }, { data: x } = Me(E), $ = x, W = se(null), S = t.lookupOptions || {}, m = S.idAttribute || "id", b = S.titleAttribute || "name", s = Re(m) ? (D) => _e(m, D) : (D) => D[m], L = Re(b) ? (D) => _e(b, D) : (D) => D[b];
  ve(o, () => ({
    focus() {
      W.current.focus();
    },
    isValid() {
      return !g.status;
    },
    assignAttribute(D) {
      W.current.assignAttribute(D);
    },
    getValue() {
      return a.getData();
    },
    clear() {
      a.setData("");
    },
    setValue(D) {
      a.setData(D);
    },
    setVisible(D) {
      l({ visible: D });
    }
  }), [a]);
  var w = Rt(t, a.data, t.label);
  t.readonly && (w.inputProps = { readOnly: !0 });
  function Y(D, Q) {
    const F = st(a.data);
    var j = F.indexOf(D);
    Q ? j < 0 && F.push(D) : j >= 0 && F.splice(j, 1), h.onValueChange(F.toString());
  }
  var z = {
    onBlur: h.onBlur,
    onFocus: h.onFocus,
    onChange: (D) => {
      Y(D.target.value, D.target.checked);
    }
  };
  const G = (D) => {
    const Q = D.toString();
    return p.includes(Q);
  }, X = (D) => {
    const Q = D.target.checked;
    f(Q);
    var F = [];
    Q && $.map((j) => {
      F.push(s(j));
    }), h.onValueChange(F.toString());
  };
  return /* @__PURE__ */ i("div", { className: t.className, children: c.visible && /* @__PURE__ */ K(
    Nt,
    {
      label: _t(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ i("div", { children: t.hideSelectAll ? /* @__PURE__ */ i(we, {}) : /* @__PURE__ */ i(
          et,
          {
            control: /* @__PURE__ */ i(tt, { onChange: X }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ K(
          Tt,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: g.status,
            ...w,
            children: [
              $ ? $.map((D) => /* @__PURE__ */ i(
                et,
                {
                  value: s(D),
                  control: /* @__PURE__ */ i(
                    tt,
                    {
                      ...z,
                      checked: G(s(D)),
                      disabled: t.readonly
                    }
                  ),
                  label: L(D)
                },
                s(D)
              )) : /* @__PURE__ */ i("div", { children: "No options provided" }),
              /* @__PURE__ */ i(xt, { className: "form-error-text", children: g.message })
            ]
          }
        )
      ]
    }
  ) });
}), $r = (e, t, r) => {
  const n = e.store || r.store, o = e.lookupOptions || {}, a = o.idAttribute || "id", c = o.titleAttribute || "name", l = o.searchAttribute || c, d = r.data, f = se(0), [p, g] = ee(null), [h, k] = ee([]), [E, x] = ee(""), [$, W] = ee(!1), S = $ && h.length < (p ? 2 : 1), m = {
    store: n,
    endPointVars: e.storeOptions.endPointVars,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: l,
    initialFetch: !1
  }, b = Me(m), { setQueryFilter: s, setQuickSearch: L, filter: w, totalRecords: Y, refreshData: z } = b, G = b.data, X = Re(a) ? (O) => _e(a, O) : (O) => O == null ? void 0 : O[a], D = Re(c) ? (O) => _e(c, O) : (O) => O == null ? void 0 : O[c];
  function Q() {
    if (d) {
      var O = {};
      rt(a, O, d);
      const H = r.displayValue || d;
      return rt(c, O, H), O;
    } else
      return null;
  }
  ye(() => {
    if (X(p) != r.data) {
      var O = Q();
      O && (k([O]), g(O));
    }
  }, [r.data]), ye(() => {
    const O = G ? [...G] : [], H = p;
    O && H && !F(O, X(H)) && O.unshift(H), k(O), f.current < Y && (f.current = Y);
  }, [G, Y]);
  function F(O, H) {
    return O.find((J) => {
      if (X(J) == H)
        return J;
    });
  }
  ye(() => {
    br(j);
  }, [E, $]);
  function j() {
    $ && (E.length > 0 && E != D(p) ? L("*" + E + "*") : G ? L(null) : z());
  }
  return {
    getSelectedOption: Q,
    filter: w,
    labelAccessor: D,
    idAccessor: X,
    getServerLookup: (O) => {
      var H = Rt(e, p, e.label);
      const J = r.eventListeners, u = r.error, v = e.variant || "standard", A = e.autoFocus || !1, _ = e.label, T = e.readonly || !1;
      t.readonly && (H.inputProps = { readOnly: !0 });
      var I = {
        onBlur: J.onBlur,
        onFocus: J.onFocus,
        onChange: (P, C) => {
          R(C), g(C);
        },
        onInputChange: (P, C) => (x(C), !0)
      };
      const R = (P) => {
        if (P) {
          const C = X(P);
          J.onValueChange(C), r.setDisplayValue(D(P));
        } else
          J.onValueChange(void 0), r.setDisplayValue(void 0);
      }, N = (P) => typeof P == "object" ? D(P) + "" : P;
      return /* @__PURE__ */ i(
        Nt,
        {
          label: _t(e),
          customContainerClass: e.customContainerClass,
          colspan: e.colspan,
          customFieldClass: e.customFieldClass,
          customLabelClass: e.customLabelClass,
          children: /* @__PURE__ */ K(Tt, { fullWidth: !0, error: u.status, children: [
            /* @__PURE__ */ i(
              fr,
              {
                includeInputInList: !0,
                autoHighlight: !0,
                readOnly: T,
                isOptionEqualToValue: (P, C) => X(P) == X(C),
                filterOptions: (P) => P,
                renderInput: (P) => /* @__PURE__ */ i(
                  Ge,
                  {
                    ...P,
                    inputRef: (C) => {
                      O.current = C;
                    },
                    variant: v,
                    label: _,
                    autoFocus: A,
                    InputProps: {
                      ...P.InputProps,
                      endAdornment: /* @__PURE__ */ K(we, { children: [
                        S ? /* @__PURE__ */ i(pr, { color: "inherit", size: 18 }) : null,
                        P.InputProps.endAdornment
                      ] })
                    }
                  }
                ),
                getOptionLabel: N,
                ...H,
                options: h,
                open: $,
                onClose: () => {
                  W(!1);
                },
                onOpen: (P) => {
                  W(!0);
                },
                ...I
              }
            ),
            /* @__PURE__ */ i(xt, { className: "form-error-text", children: u.message })
          ] })
        }
      );
    },
    setQueryFilter: s,
    searchText: E,
    setSearchText: x,
    refreshOptions: j
  };
}, Yr = le(function(t, r) {
  const n = Ee(Ne), o = r || se(null), a = n(t, "serverlookup", o), c = a.error, { mutateOptions: l, setMutateOptions: d } = a, f = se(null), { getServerLookup: p, setQueryFilter: g } = $r(t, l, a);
  return ve(o, () => ({
    focus() {
      f.current.focus();
    },
    isValid() {
      return !c.status;
    },
    clear() {
      a.setData("");
    },
    getValue() {
      return a.getData();
    },
    setValue(h) {
      a.setData(h);
    },
    setRequired(h) {
    },
    setReadOnly(h) {
    },
    setVisible(h) {
      d({ visible: h });
    },
    setAttribute(h) {
    },
    setFilter(h) {
      g(h);
    },
    resetFilter() {
    },
    addFilter(h, k) {
      g((E) => (E[h] = k, { ...E }));
    },
    setDefaultFilter(h) {
    }
  }), [a]), p(f);
}), jr = (e) => {
  const { fieldDef: t } = e;
  return /* @__PURE__ */ K("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, ie = (e, t) => {
  const r = e.fieldDef;
  return /* @__PURE__ */ i(
    t,
    {
      ...r,
      label: e.title
    }
  );
}, qr = () => /* @__PURE__ */ i("div", { children: "To be Implemented" }), Lt = (e, t, r) => {
  const { type: n } = e, o = { fieldDef: e, title: r };
  switch (n) {
    case "string":
      return ie(o, sr);
    case "radio":
      return ie(o, or);
    case "select":
      return ie(o, ar);
    case "date":
      return ie(o, rr);
    case "datetime":
      return ie(o, nr);
    case "checkbox":
      return ie(o, cr);
    case "serverlookup":
      return ie(o, Yr);
    case "textarea":
      return ie(o, ir);
    case "switch":
      return ie(o, lr);
    case "password":
      return ie(o, ur);
    case "numbersOnly":
      return ie(o, dr);
    case "multiSelect":
      return qr();
    case "dateRange":
      return ie(o, Cr);
    default:
      return jr(o);
  }
}, Vr = le(function(t, r) {
  var p;
  const { formLayout: n, context: o } = t, { formData: a } = o, c = n.Container;
  se({});
  const l = wt(() => (g) => Lt(g), [a.data]);
  var d = ((p = n.options) == null ? void 0 : p.columns) || 1, f = { columns: d };
  return c ? /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((g, h) => /* @__PURE__ */ i(
    c,
    {
      index: h,
      field: g,
      label: g.title,
      options: f,
      children: l(g)
    },
    g.attribute
  )) }) : /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((g, h) => /* @__PURE__ */ i(we, { children: l(g) })) });
}), It = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Renderer || Vr, o = t.Container || Mt;
  const a = (c) => /* @__PURE__ */ i(
    n,
    {
      context: r,
      formLayout: c
    }
  );
  return /* @__PURE__ */ i(
    o,
    {
      hideTitle: t.hideTitle,
      title: t.title,
      name: t.name,
      children: /* @__PURE__ */ i(Pr, { columns: t.columns, children: a(t.formLayout) })
    }
  );
};
var $t = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ct = pe.createContext && pe.createContext($t), ge = globalThis && globalThis.__assign || function() {
  return ge = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ge.apply(this, arguments);
}, Wr = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Yt(e) {
  return e && e.map(function(t, r) {
    return pe.createElement(t.tag, ge({
      key: r
    }, t.attr), Yt(t.child));
  });
}
function zr(e) {
  return function(t) {
    return pe.createElement(Xr, ge({
      attr: ge({}, e.attr)
    }, t), Yt(e.child));
  };
}
function Xr(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, a = e.title, c = Wr(e, ["attr", "size", "title"]), l = o || r.size || "1em", d;
    return r.className && (d = r.className), e.className && (d = (d ? d + " " : "") + e.className), pe.createElement("svg", ge({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, c, {
      className: d,
      style: ge(ge({
        color: e.color || r.color
      }, r.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && pe.createElement("title", null, a), e.children);
  };
  return ct !== void 0 ? pe.createElement(ct.Consumer, null, function(r) {
    return t(r);
  }) : t($t);
}
function jt(e) {
  return zr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
}
var Fe = { exports: {} }, qt = {}, Be = { exports: {} }, De = { exports: {} }, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function Br() {
  if (lt)
    return q;
  lt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, W = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function m(s) {
    if (typeof s == "object" && s !== null) {
      var L = s.$$typeof;
      switch (L) {
        case t:
          switch (s = s.type, s) {
            case d:
            case f:
            case n:
            case a:
            case o:
            case g:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case l:
                case p:
                case E:
                case k:
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
  function b(s) {
    return m(s) === f;
  }
  return q.AsyncMode = d, q.ConcurrentMode = f, q.ContextConsumer = l, q.ContextProvider = c, q.Element = t, q.ForwardRef = p, q.Fragment = n, q.Lazy = E, q.Memo = k, q.Portal = r, q.Profiler = a, q.StrictMode = o, q.Suspense = g, q.isAsyncMode = function(s) {
    return b(s) || m(s) === d;
  }, q.isConcurrentMode = b, q.isContextConsumer = function(s) {
    return m(s) === l;
  }, q.isContextProvider = function(s) {
    return m(s) === c;
  }, q.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === t;
  }, q.isForwardRef = function(s) {
    return m(s) === p;
  }, q.isFragment = function(s) {
    return m(s) === n;
  }, q.isLazy = function(s) {
    return m(s) === E;
  }, q.isMemo = function(s) {
    return m(s) === k;
  }, q.isPortal = function(s) {
    return m(s) === r;
  }, q.isProfiler = function(s) {
    return m(s) === a;
  }, q.isStrictMode = function(s) {
    return m(s) === o;
  }, q.isSuspense = function(s) {
    return m(s) === g;
  }, q.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === f || s === a || s === o || s === g || s === h || typeof s == "object" && s !== null && (s.$$typeof === E || s.$$typeof === k || s.$$typeof === c || s.$$typeof === l || s.$$typeof === p || s.$$typeof === $ || s.$$typeof === W || s.$$typeof === S || s.$$typeof === x);
  }, q.typeOf = m, q;
}
var V = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function Ur() {
  return ut || (ut = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, W = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function m(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === n || y === f || y === a || y === o || y === g || y === h || typeof y == "object" && y !== null && (y.$$typeof === E || y.$$typeof === k || y.$$typeof === c || y.$$typeof === l || y.$$typeof === p || y.$$typeof === $ || y.$$typeof === W || y.$$typeof === S || y.$$typeof === x);
    }
    function b(y) {
      if (typeof y == "object" && y !== null) {
        var ue = y.$$typeof;
        switch (ue) {
          case t:
            var Te = y.type;
            switch (Te) {
              case d:
              case f:
              case n:
              case a:
              case o:
              case g:
                return Te;
              default:
                var Ze = Te && Te.$$typeof;
                switch (Ze) {
                  case l:
                  case p:
                  case E:
                  case k:
                  case c:
                    return Ze;
                  default:
                    return ue;
                }
            }
          case r:
            return ue;
        }
      }
    }
    var s = d, L = f, w = l, Y = c, z = t, G = p, X = n, D = E, Q = k, F = r, j = a, B = o, O = g, H = !1;
    function J(y) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), u(y) || b(y) === d;
    }
    function u(y) {
      return b(y) === f;
    }
    function v(y) {
      return b(y) === l;
    }
    function A(y) {
      return b(y) === c;
    }
    function _(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }
    function T(y) {
      return b(y) === p;
    }
    function I(y) {
      return b(y) === n;
    }
    function R(y) {
      return b(y) === E;
    }
    function N(y) {
      return b(y) === k;
    }
    function P(y) {
      return b(y) === r;
    }
    function C(y) {
      return b(y) === a;
    }
    function M(y) {
      return b(y) === o;
    }
    function re(y) {
      return b(y) === g;
    }
    V.AsyncMode = s, V.ConcurrentMode = L, V.ContextConsumer = w, V.ContextProvider = Y, V.Element = z, V.ForwardRef = G, V.Fragment = X, V.Lazy = D, V.Memo = Q, V.Portal = F, V.Profiler = j, V.StrictMode = B, V.Suspense = O, V.isAsyncMode = J, V.isConcurrentMode = u, V.isContextConsumer = v, V.isContextProvider = A, V.isElement = _, V.isForwardRef = T, V.isFragment = I, V.isLazy = R, V.isMemo = N, V.isPortal = P, V.isProfiler = C, V.isStrictMode = M, V.isSuspense = re, V.isValidElementType = m, V.typeOf = b;
  }()), V;
}
var dt;
function Vt() {
  return dt || (dt = 1, process.env.NODE_ENV === "production" ? De.exports = Br() : De.exports = Ur()), De.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ie, ft;
function Gr() {
  if (ft)
    return Ie;
  ft = 1;
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
      for (var c = {}, l = 0; l < 10; l++)
        c["_" + String.fromCharCode(l)] = l;
      var d = Object.getOwnPropertyNames(c).map(function(p) {
        return c[p];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        f[p] = p;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ie = o() ? Object.assign : function(a, c) {
    for (var l, d = n(a), f, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var g in l)
        t.call(l, g) && (d[g] = l[g]);
      if (e) {
        f = e(l);
        for (var h = 0; h < f.length; h++)
          r.call(l, f[h]) && (d[f[h]] = l[f[h]]);
      }
    }
    return d;
  }, Ie;
}
var $e, pt;
function He() {
  if (pt)
    return $e;
  pt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return $e = e, $e;
}
var Ye, ht;
function Wt() {
  return ht || (ht = 1, Ye = Function.call.bind(Object.prototype.hasOwnProperty)), Ye;
}
var je, mt;
function Hr() {
  if (mt)
    return je;
  mt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = He(), r = {}, n = Wt();
    e = function(a) {
      var c = "Warning: " + a;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function o(a, c, l, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (n(a, p)) {
          var g;
          try {
            if (typeof a[p] != "function") {
              var h = Error(
                (d || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            g = a[p](c, p, d, l, null, t);
          } catch (E) {
            g = E;
          }
          if (g && !(g instanceof Error) && e(
            (d || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in r)) {
            r[g.message] = !0;
            var k = f ? f() : "";
            e(
              "Failed " + l + " type: " + g.message + (k ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, je = o, je;
}
var qe, gt;
function Kr() {
  if (gt)
    return qe;
  gt = 1;
  var e = Vt(), t = Gr(), r = He(), n = Wt(), o = Hr(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var d = "Warning: " + l;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return qe = function(l, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function g(u) {
      var v = u && (f && u[f] || u[p]);
      if (typeof v == "function")
        return v;
    }
    var h = "<<anonymous>>", k = {
      array: W("array"),
      bigint: W("bigint"),
      bool: W("boolean"),
      func: W("function"),
      number: W("number"),
      object: W("object"),
      string: W("string"),
      symbol: W("symbol"),
      any: S(),
      arrayOf: m,
      element: b(),
      elementType: s(),
      instanceOf: L,
      node: G(),
      objectOf: Y,
      oneOf: w,
      oneOfType: z,
      shape: D,
      exact: Q
    };
    function E(u, v) {
      return u === v ? u !== 0 || 1 / u === 1 / v : u !== u && v !== v;
    }
    function x(u, v) {
      this.message = u, this.data = v && typeof v == "object" ? v : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function $(u) {
      if (process.env.NODE_ENV !== "production")
        var v = {}, A = 0;
      function _(I, R, N, P, C, M, re) {
        if (P = P || h, M = M || N, re !== r) {
          if (d) {
            var y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw y.name = "Invariant Violation", y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = P + ":" + N;
            !v[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + M + "` prop on `" + P + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), v[ue] = !0, A++);
          }
        }
        return R[N] == null ? I ? R[N] === null ? new x("The " + C + " `" + M + "` is marked as required " + ("in `" + P + "`, but its value is `null`.")) : new x("The " + C + " `" + M + "` is marked as required in " + ("`" + P + "`, but its value is `undefined`.")) : null : u(R, N, P, C, M);
      }
      var T = _.bind(null, !1);
      return T.isRequired = _.bind(null, !0), T;
    }
    function W(u) {
      function v(A, _, T, I, R, N) {
        var P = A[_], C = B(P);
        if (C !== u) {
          var M = O(P);
          return new x(
            "Invalid " + I + " `" + R + "` of type " + ("`" + M + "` supplied to `" + T + "`, expected ") + ("`" + u + "`."),
            { expectedType: u }
          );
        }
        return null;
      }
      return $(v);
    }
    function S() {
      return $(c);
    }
    function m(u) {
      function v(A, _, T, I, R) {
        if (typeof u != "function")
          return new x("Property `" + R + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var N = A[_];
        if (!Array.isArray(N)) {
          var P = B(N);
          return new x("Invalid " + I + " `" + R + "` of type " + ("`" + P + "` supplied to `" + T + "`, expected an array."));
        }
        for (var C = 0; C < N.length; C++) {
          var M = u(N, C, T, I, R + "[" + C + "]", r);
          if (M instanceof Error)
            return M;
        }
        return null;
      }
      return $(v);
    }
    function b() {
      function u(v, A, _, T, I) {
        var R = v[A];
        if (!l(R)) {
          var N = B(R);
          return new x("Invalid " + T + " `" + I + "` of type " + ("`" + N + "` supplied to `" + _ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return $(u);
    }
    function s() {
      function u(v, A, _, T, I) {
        var R = v[A];
        if (!e.isValidElementType(R)) {
          var N = B(R);
          return new x("Invalid " + T + " `" + I + "` of type " + ("`" + N + "` supplied to `" + _ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return $(u);
    }
    function L(u) {
      function v(A, _, T, I, R) {
        if (!(A[_] instanceof u)) {
          var N = u.name || h, P = J(A[_]);
          return new x("Invalid " + I + " `" + R + "` of type " + ("`" + P + "` supplied to `" + T + "`, expected ") + ("instance of `" + N + "`."));
        }
        return null;
      }
      return $(v);
    }
    function w(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), c;
      function v(A, _, T, I, R) {
        for (var N = A[_], P = 0; P < u.length; P++)
          if (E(N, u[P]))
            return null;
        var C = JSON.stringify(u, function(re, y) {
          var ue = O(y);
          return ue === "symbol" ? String(y) : y;
        });
        return new x("Invalid " + I + " `" + R + "` of value `" + String(N) + "` " + ("supplied to `" + T + "`, expected one of " + C + "."));
      }
      return $(v);
    }
    function Y(u) {
      function v(A, _, T, I, R) {
        if (typeof u != "function")
          return new x("Property `" + R + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var N = A[_], P = B(N);
        if (P !== "object")
          return new x("Invalid " + I + " `" + R + "` of type " + ("`" + P + "` supplied to `" + T + "`, expected an object."));
        for (var C in N)
          if (n(N, C)) {
            var M = u(N, C, T, I, R + "." + C, r);
            if (M instanceof Error)
              return M;
          }
        return null;
      }
      return $(v);
    }
    function z(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var v = 0; v < u.length; v++) {
        var A = u[v];
        if (typeof A != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + H(A) + " at index " + v + "."
          ), c;
      }
      function _(T, I, R, N, P) {
        for (var C = [], M = 0; M < u.length; M++) {
          var re = u[M], y = re(T, I, R, N, P, r);
          if (y == null)
            return null;
          y.data && n(y.data, "expectedType") && C.push(y.data.expectedType);
        }
        var ue = C.length > 0 ? ", expected one of type [" + C.join(", ") + "]" : "";
        return new x("Invalid " + N + " `" + P + "` supplied to " + ("`" + R + "`" + ue + "."));
      }
      return $(_);
    }
    function G() {
      function u(v, A, _, T, I) {
        return F(v[A]) ? null : new x("Invalid " + T + " `" + I + "` supplied to " + ("`" + _ + "`, expected a ReactNode."));
      }
      return $(u);
    }
    function X(u, v, A, _, T) {
      return new x(
        (u || "React class") + ": " + v + " type `" + A + "." + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function D(u) {
      function v(A, _, T, I, R) {
        var N = A[_], P = B(N);
        if (P !== "object")
          return new x("Invalid " + I + " `" + R + "` of type `" + P + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var C in u) {
          var M = u[C];
          if (typeof M != "function")
            return X(T, I, R, C, O(M));
          var re = M(N, C, T, I, R + "." + C, r);
          if (re)
            return re;
        }
        return null;
      }
      return $(v);
    }
    function Q(u) {
      function v(A, _, T, I, R) {
        var N = A[_], P = B(N);
        if (P !== "object")
          return new x("Invalid " + I + " `" + R + "` of type `" + P + "` " + ("supplied to `" + T + "`, expected `object`."));
        var C = t({}, A[_], u);
        for (var M in C) {
          var re = u[M];
          if (n(u, M) && typeof re != "function")
            return X(T, I, R, M, O(re));
          if (!re)
            return new x(
              "Invalid " + I + " `" + R + "` key `" + M + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(A[_], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(u), null, "  ")
            );
          var y = re(N, M, T, I, R + "." + M, r);
          if (y)
            return y;
        }
        return null;
      }
      return $(v);
    }
    function F(u) {
      switch (typeof u) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !u;
        case "object":
          if (Array.isArray(u))
            return u.every(F);
          if (u === null || l(u))
            return !0;
          var v = g(u);
          if (v) {
            var A = v.call(u), _;
            if (v !== u.entries) {
              for (; !(_ = A.next()).done; )
                if (!F(_.value))
                  return !1;
            } else
              for (; !(_ = A.next()).done; ) {
                var T = _.value;
                if (T && !F(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function j(u, v) {
      return u === "symbol" ? !0 : v ? v["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && v instanceof Symbol : !1;
    }
    function B(u) {
      var v = typeof u;
      return Array.isArray(u) ? "array" : u instanceof RegExp ? "object" : j(v, u) ? "symbol" : v;
    }
    function O(u) {
      if (typeof u > "u" || u === null)
        return "" + u;
      var v = B(u);
      if (v === "object") {
        if (u instanceof Date)
          return "date";
        if (u instanceof RegExp)
          return "regexp";
      }
      return v;
    }
    function H(u) {
      var v = O(u);
      switch (v) {
        case "array":
        case "object":
          return "an " + v;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + v;
        default:
          return v;
      }
    }
    function J(u) {
      return !u.constructor || !u.constructor.name ? h : u.constructor.name;
    }
    return k.checkPropTypes = o, k.resetWarningCache = o.resetWarningCache, k.PropTypes = k, k;
  }, qe;
}
var Ve, yt;
function Qr() {
  if (yt)
    return Ve;
  yt = 1;
  var e = He();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ve = function() {
    function n(c, l, d, f, p, g) {
      if (g !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
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
  var Jr = Vt(), Zr = !0;
  Be.exports = Kr()(Jr.isElement, Zr);
} else
  Be.exports = Qr()();
var zt = Be.exports;
function Xt(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Xt(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function vt() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Xt(e)) && (n && (n += " "), n += t);
  return n;
}
const en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: vt,
  default: vt
}, Symbol.toStringTag, { value: "Module" })), tn = /* @__PURE__ */ Mr(en);
var U = {}, de = {};
Object.defineProperty(de, "__esModule", {
  value: !0
});
de.dontSetMe = sn;
de.findInArray = rn;
de.int = an;
de.isFunction = nn;
de.isNum = on;
function rn(e, t) {
  for (let r = 0, n = e.length; r < n; r++)
    if (t.apply(t, [e[r], r, e]))
      return e[r];
}
function nn(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function on(e) {
  return typeof e == "number" && !isNaN(e);
}
function an(e) {
  return parseInt(e, 10);
}
function sn(e, t, r) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var be = {};
Object.defineProperty(be, "__esModule", {
  value: !0
});
be.browserPrefixToKey = Ut;
be.browserPrefixToStyle = cn;
be.default = void 0;
be.getPrefix = Bt;
const We = ["Moz", "Webkit", "O", "ms"];
function Bt() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const r = (e = window.document) === null || e === void 0 || (e = e.documentElement) === null || e === void 0 ? void 0 : e.style;
  if (!r || t in r)
    return "";
  for (let n = 0; n < We.length; n++)
    if (Ut(t, We[n]) in r)
      return We[n];
  return "";
}
function Ut(e, t) {
  return t ? "".concat(t).concat(ln(e)) : e;
}
function cn(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function ln(e) {
  let t = "", r = !0;
  for (let n = 0; n < e.length; n++)
    r ? (t += e[n].toUpperCase(), r = !1) : e[n] === "-" ? r = !0 : t += e[n];
  return t;
}
be.default = Bt();
Object.defineProperty(U, "__esModule", {
  value: !0
});
U.addClassName = Kt;
U.addEvent = fn;
U.addUserSelectStyles = wn;
U.createCSSTransform = bn;
U.createSVGTransform = Sn;
U.getTouch = Cn;
U.getTouchIdentifier = Pn;
U.getTranslation = Ke;
U.innerHeight = gn;
U.innerWidth = yn;
U.matchesSelector = Ht;
U.matchesSelectorAndParentsTo = dn;
U.offsetXYFromParent = vn;
U.outerHeight = hn;
U.outerWidth = mn;
U.removeClassName = Qt;
U.removeEvent = pn;
U.removeUserSelectStyles = Tn;
var ae = de, bt = un(be);
function Gt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Gt = function(n) {
    return n ? r : t;
  })(e);
}
function un(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Gt(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var c = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
let Oe = "";
function Ht(e, t) {
  return Oe || (Oe = (0, ae.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, ae.isFunction)(e[r]);
  })), (0, ae.isFunction)(e[Oe]) ? e[Oe](t) : !1;
}
function dn(e, t, r) {
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
function fn(e, t, r, n) {
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
  return t += (0, ae.int)(r.borderTopWidth), t += (0, ae.int)(r.borderBottomWidth), t;
}
function mn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ae.int)(r.borderLeftWidth), t += (0, ae.int)(r.borderRightWidth), t;
}
function gn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ae.int)(r.paddingTop), t -= (0, ae.int)(r.paddingBottom), t;
}
function yn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ae.int)(r.paddingLeft), t -= (0, ae.int)(r.paddingRight), t;
}
function vn(e, t, r) {
  const o = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), a = (e.clientX + t.scrollLeft - o.left) / r, c = (e.clientY + t.scrollTop - o.top) / r;
  return {
    x: a,
    y: c
  };
}
function bn(e, t) {
  const r = Ke(e, t, "px");
  return {
    [(0, bt.browserPrefixToKey)("transform", bt.default)]: r
  };
}
function Sn(e, t) {
  return Ke(e, t, "");
}
function Ke(e, t, r) {
  let {
    x: n,
    y: o
  } = e, a = "translate(".concat(n).concat(r, ",").concat(o).concat(r, ")");
  if (t) {
    const c = "".concat(typeof t.x == "string" ? t.x : t.x + r), l = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    a = "translate(".concat(c, ", ").concat(l, ")") + a;
  }
  return a;
}
function Cn(e, t) {
  return e.targetTouches && (0, ae.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, ae.findInArray)(e.changedTouches, (r) => t === r.identifier);
}
function Pn(e) {
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
      if (e.body && Qt(e.body, "react-draggable-transparent-selection"), e.selection)
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
function Qt(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var fe = {};
Object.defineProperty(fe, "__esModule", {
  value: !0
});
fe.canDragX = On;
fe.canDragY = En;
fe.createCoreData = _n;
fe.createDraggableData = Nn;
fe.getBoundPosition = xn;
fe.getControlPosition = Rn;
fe.snapToGrid = Dn;
var oe = de, Ce = U;
function xn(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : Mn(n);
  const o = Qe(e);
  if (typeof n == "string") {
    const {
      ownerDocument: a
    } = o, c = a.defaultView;
    let l;
    if (n === "parent" ? l = o.parentNode : l = a.querySelector(n), !(l instanceof c.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const d = l, f = c.getComputedStyle(o), p = c.getComputedStyle(d);
    n = {
      left: -o.offsetLeft + (0, oe.int)(p.paddingLeft) + (0, oe.int)(f.marginLeft),
      top: -o.offsetTop + (0, oe.int)(p.paddingTop) + (0, oe.int)(f.marginTop),
      right: (0, Ce.innerWidth)(d) - (0, Ce.outerWidth)(o) - o.offsetLeft + (0, oe.int)(p.paddingRight) - (0, oe.int)(f.marginRight),
      bottom: (0, Ce.innerHeight)(d) - (0, Ce.outerHeight)(o) - o.offsetTop + (0, oe.int)(p.paddingBottom) - (0, oe.int)(f.marginBottom)
    };
  }
  return (0, oe.isNum)(n.right) && (t = Math.min(t, n.right)), (0, oe.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, oe.isNum)(n.left) && (t = Math.max(t, n.left)), (0, oe.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function Dn(e, t, r) {
  const n = Math.round(t / e[0]) * e[0], o = Math.round(r / e[1]) * e[1];
  return [n, o];
}
function On(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function En(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function Rn(e, t, r) {
  const n = typeof t == "number" ? (0, Ce.getTouch)(e, t) : null;
  if (typeof t == "number" && !n)
    return null;
  const o = Qe(r), a = r.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, Ce.offsetXYFromParent)(n || e, a, r.props.scale);
}
function _n(e, t, r) {
  const n = !(0, oe.isNum)(e.lastX), o = Qe(e);
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
function Nn(e, t) {
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
function Mn(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function Qe(e) {
  const t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var Ae = {}, ke = {};
Object.defineProperty(ke, "__esModule", {
  value: !0
});
ke.default = Fn;
function Fn() {
}
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = void 0;
var ze = kn(pe), ne = Je(zt), An = Je(At), Z = U, he = fe, Xe = de, Pe = Je(ke);
function Je(e) {
  return e && e.__esModule ? e : { default: e };
}
function Jt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Jt = function(n) {
    return n ? r : t;
  })(e);
}
function kn(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Jt(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var c = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
function te(e, t, r) {
  return t = Ln(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ln(e) {
  var t = In(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function In(e, t) {
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
const ce = {
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
let me = ce.mouse, Le = class extends ze.Component {
  constructor() {
    super(...arguments), te(this, "dragging", !1), te(this, "lastX", NaN), te(this, "lastY", NaN), te(this, "touchIdentifier", null), te(this, "mounted", !1), te(this, "handleDragStart", (t) => {
      if (this.props.onMouseDown(t), !this.props.allowAnyClick && typeof t.button == "number" && t.button !== 0)
        return !1;
      const r = this.findDOMNode();
      if (!r || !r.ownerDocument || !r.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      const {
        ownerDocument: n
      } = r;
      if (this.props.disabled || !(t.target instanceof n.defaultView.Node) || this.props.handle && !(0, Z.matchesSelectorAndParentsTo)(t.target, this.props.handle, r) || this.props.cancel && (0, Z.matchesSelectorAndParentsTo)(t.target, this.props.cancel, r))
        return;
      t.type === "touchstart" && t.preventDefault();
      const o = (0, Z.getTouchIdentifier)(t);
      this.touchIdentifier = o;
      const a = (0, he.getControlPosition)(t, o, this);
      if (a == null)
        return;
      const {
        x: c,
        y: l
      } = a, d = (0, he.createCoreData)(this, c, l);
      (0, Pe.default)("DraggableCore: handleDragStart: %j", d), (0, Pe.default)("calling", this.props.onStart), !(this.props.onStart(t, d) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, Z.addUserSelectStyles)(n), this.dragging = !0, this.lastX = c, this.lastY = l, (0, Z.addEvent)(n, me.move, this.handleDrag), (0, Z.addEvent)(n, me.stop, this.handleDragStop));
    }), te(this, "handleDrag", (t) => {
      const r = (0, he.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let l = n - this.lastX, d = o - this.lastY;
        if ([l, d] = (0, he.snapToGrid)(this.props.grid, l, d), !l && !d)
          return;
        n = this.lastX + l, o = this.lastY + d;
      }
      const a = (0, he.createCoreData)(this, n, o);
      if ((0, Pe.default)("DraggableCore: handleDrag: %j", a), this.props.onDrag(t, a) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const d = document.createEvent("MouseEvents");
          d.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(d);
        }
        return;
      }
      this.lastX = n, this.lastY = o;
    }), te(this, "handleDragStop", (t) => {
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
        let d = n - this.lastX || 0, f = o - this.lastY || 0;
        [d, f] = (0, he.snapToGrid)(this.props.grid, d, f), n = this.lastX + d, o = this.lastY + f;
      }
      const a = (0, he.createCoreData)(this, n, o);
      if (this.props.onStop(t, a) === !1 || this.mounted === !1)
        return !1;
      const l = this.findDOMNode();
      l && this.props.enableUserSelectHack && (0, Z.removeUserSelectStyles)(l.ownerDocument), (0, Pe.default)("DraggableCore: handleDragStop: %j", a), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, l && ((0, Pe.default)("DraggableCore: Removing handlers"), (0, Z.removeEvent)(l.ownerDocument, me.move, this.handleDrag), (0, Z.removeEvent)(l.ownerDocument, me.stop, this.handleDragStop));
    }), te(this, "onMouseDown", (t) => (me = ce.mouse, this.handleDragStart(t))), te(this, "onMouseUp", (t) => (me = ce.mouse, this.handleDragStop(t))), te(this, "onTouchStart", (t) => (me = ce.touch, this.handleDragStart(t))), te(this, "onTouchEnd", (t) => (me = ce.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = !0;
    const t = this.findDOMNode();
    t && (0, Z.addEvent)(t, ce.touch.start, this.onTouchStart, {
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
      (0, Z.removeEvent)(r, ce.mouse.move, this.handleDrag), (0, Z.removeEvent)(r, ce.touch.move, this.handleDrag), (0, Z.removeEvent)(r, ce.mouse.stop, this.handleDragStop), (0, Z.removeEvent)(r, ce.touch.stop, this.handleDragStop), (0, Z.removeEvent)(t, ce.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, Z.removeUserSelectStyles)(r);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var t, r;
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (r = this.props) === null || r === void 0 || (r = r.nodeRef) === null || r === void 0 ? void 0 : r.current : An.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ ze.cloneElement(ze.Children.only(this.props.children), {
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
Ae.default = Le;
te(Le, "displayName", "DraggableCore");
te(Le, "propTypes", {
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
  className: Xe.dontSetMe,
  style: Xe.dontSetMe,
  transform: Xe.dontSetMe
});
te(Le, "defaultProps", {
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
  var t = h(pe), r = p(zt), n = p(At), o = p(tn), a = U, c = fe, l = de, d = p(Ae), f = p(ke);
  function p(S) {
    return S && S.__esModule ? S : { default: S };
  }
  function g(S) {
    if (typeof WeakMap != "function")
      return null;
    var m = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap();
    return (g = function(s) {
      return s ? b : m;
    })(S);
  }
  function h(S, m) {
    if (!m && S && S.__esModule)
      return S;
    if (S === null || typeof S != "object" && typeof S != "function")
      return { default: S };
    var b = g(m);
    if (b && b.has(S))
      return b.get(S);
    var s = {}, L = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var w in S)
      if (w !== "default" && Object.prototype.hasOwnProperty.call(S, w)) {
        var Y = L ? Object.getOwnPropertyDescriptor(S, w) : null;
        Y && (Y.get || Y.set) ? Object.defineProperty(s, w, Y) : s[w] = S[w];
      }
    return s.default = S, b && b.set(S, s), s;
  }
  function k() {
    return k = Object.assign ? Object.assign.bind() : function(S) {
      for (var m = 1; m < arguments.length; m++) {
        var b = arguments[m];
        for (var s in b)
          Object.prototype.hasOwnProperty.call(b, s) && (S[s] = b[s]);
      }
      return S;
    }, k.apply(this, arguments);
  }
  function E(S, m, b) {
    return m = x(m), m in S ? Object.defineProperty(S, m, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : S[m] = b, S;
  }
  function x(S) {
    var m = $(S, "string");
    return typeof m == "symbol" ? m : String(m);
  }
  function $(S, m) {
    if (typeof S != "object" || S === null)
      return S;
    var b = S[Symbol.toPrimitive];
    if (b !== void 0) {
      var s = b.call(S, m || "default");
      if (typeof s != "object")
        return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (m === "string" ? String : Number)(S);
  }
  class W extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(m, b) {
      let {
        position: s
      } = m, {
        prevPropsPosition: L
      } = b;
      return s && (!L || s.x !== L.x || s.y !== L.y) ? ((0, f.default)("Draggable: getDerivedStateFromProps %j", {
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
    constructor(m) {
      super(m), E(this, "onDragStart", (b, s) => {
        if ((0, f.default)("Draggable: onDragStart: %j", s), this.props.onStart(b, (0, c.createDraggableData)(this, s)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), E(this, "onDrag", (b, s) => {
        if (!this.state.dragging)
          return !1;
        (0, f.default)("Draggable: onDrag: %j", s);
        const L = (0, c.createDraggableData)(this, s), w = {
          x: L.x,
          y: L.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: z,
            y: G
          } = w;
          w.x += this.state.slackX, w.y += this.state.slackY;
          const [X, D] = (0, c.getBoundPosition)(this, w.x, w.y);
          w.x = X, w.y = D, w.slackX = this.state.slackX + (z - w.x), w.slackY = this.state.slackY + (G - w.y), L.x = w.x, L.y = w.y, L.deltaX = w.x - this.state.x, L.deltaY = w.y - this.state.y;
        }
        if (this.props.onDrag(b, L) === !1)
          return !1;
        this.setState(w);
      }), E(this, "onDragStop", (b, s) => {
        if (!this.state.dragging || this.props.onStop(b, (0, c.createDraggableData)(this, s)) === !1)
          return !1;
        (0, f.default)("Draggable: onDragStop: %j", s);
        const w = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: z,
            y: G
          } = this.props.position;
          w.x = z, w.y = G;
        }
        this.setState(w);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: m.position ? m.position.x : m.defaultPosition.x,
        y: m.position ? m.position.y : m.defaultPosition.y,
        prevPropsPosition: {
          ...m.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, m.position && !(m.onDrag || m.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
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
      var m, b;
      return (m = (b = this.props) === null || b === void 0 || (b = b.nodeRef) === null || b === void 0 ? void 0 : b.current) !== null && m !== void 0 ? m : n.default.findDOMNode(this);
    }
    render() {
      const {
        axis: m,
        bounds: b,
        children: s,
        defaultPosition: L,
        defaultClassName: w,
        defaultClassNameDragging: Y,
        defaultClassNameDragged: z,
        position: G,
        positionOffset: X,
        scale: D,
        ...Q
      } = this.props;
      let F = {}, j = null;
      const O = !!!G || this.state.dragging, H = G || L, J = {
        // Set left if horizontal drag is enabled
        x: (0, c.canDragX)(this) && O ? this.state.x : H.x,
        // Set top if vertical drag is enabled
        y: (0, c.canDragY)(this) && O ? this.state.y : H.y
      };
      this.state.isElementSVG ? j = (0, a.createSVGTransform)(J, X) : F = (0, a.createCSSTransform)(J, X);
      const u = (0, o.default)(s.props.className || "", w, {
        [Y]: this.state.dragging,
        [z]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(d.default, k({}, Q, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(s), {
        className: u,
        style: {
          ...s.props.style,
          ...F
        },
        transform: j
      }));
    }
  }
  e.default = W, E(W, "displayName", "Draggable"), E(W, "propTypes", {
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
    className: l.dontSetMe,
    style: l.dontSetMe,
    transform: l.dontSetMe
  }), E(W, "defaultProps", {
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
})(qt);
const {
  default: Zt,
  DraggableCore: $n
} = qt;
Fe.exports = Zt;
Fe.exports.default = Zt;
Fe.exports.DraggableCore = $n;
var Yn = Fe.exports;
const jn = /* @__PURE__ */ Fr(Yn);
const qn = (e) => {
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
}, Vn = le(function(t, r) {
  const { formLayout: n, context: o } = t, { formData: a } = o, c = se({}), l = qn(t), d = "palmyra-form-field-data", f = wt(() => (p) => Lt(p, c, p.label), [a.data]);
  return /* @__PURE__ */ i("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: n.fields.map((p, g) => /* @__PURE__ */ i("div", { className: l, children: /* @__PURE__ */ i("div", { className: d, children: f(p) }) }, p.attribute)) });
});
function Wn(e) {
  return /* @__PURE__ */ i(
    jn,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ i(mr, { ...e })
    }
  );
}
const zn = ({ columns: e, isOpen: t, onClose: r, setFilter: n, defaultFilter: o = {} }) => {
  var { getFieldManager: a, getFormData: c } = Ft(o, () => {
  }, "edit");
  const l = () => {
    n({});
  }, d = () => {
    var h = c();
    n && n(h);
  }, f = () => {
    r();
  }, p = (h) => {
    h.keyCode === 27 && f();
  }, g = Nr(e);
  return /* @__PURE__ */ i("div", { className: "grid-filter-container", children: /* @__PURE__ */ i(
    hr,
    {
      open: t,
      onClose: f,
      PaperComponent: Wn,
      onKeyDown: p,
      children: /* @__PURE__ */ i(Dt, { onClickAway: r, children: /* @__PURE__ */ K("div", { children: [
        /* @__PURE__ */ K("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ i("div", { className: "grid-header-text-container", children: /* @__PURE__ */ i("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ i("div", { className: "grid-header-icon-container", onClick: f, children: /* @__PURE__ */ i(Dr, { className: "filter-cancel-icon" }) })
        ] }),
        /* @__PURE__ */ i("span", { className: "filter-header-border" }),
        /* @__PURE__ */ i("div", { className: "grid-filter-content", children: /* @__PURE__ */ i(Ne.Provider, { value: a, children: /* @__PURE__ */ i(
          It,
          {
            context: { formData: {} },
            layout: {
              type: "form",
              formLayout: {
                fields: g,
                options: {
                  columns: 2
                }
              },
              Renderer: Vn
            }
          }
        ) }) }),
        /* @__PURE__ */ K("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ i(Se, { className: "filter-reset-btn", disableRipple: !0, onClick: l, children: "Reset" }),
          /* @__PURE__ */ i(Se, { className: "filter-button", disableRipple: !0, onClick: d, children: "Filter" })
        ] })
      ] }) })
    }
  ) });
}, Xn = le(function(t, r) {
  const { columns: n, children: o, EmptyChild: a, onRowClick: c, quickSearch: l } = t, d = a || Tr, f = t.customizer || _r, [p, g] = ee(!1), [h, k] = ee("standard"), [E, x] = ee(!1), [$, W] = ee(""), {
    setQueryFilter: S,
    setQuickSearch: m,
    setSortColumns: b,
    gotoPage: s,
    setPageSize: L,
    getPageNo: w,
    refreshData: Y,
    data: z,
    totalRecords: G,
    pageSizeOptions: X,
    filter: D,
    queryLimit: Q
  } = Me(t), F = r || se(null);
  ve(F, () => ({
    setFilter: (C) => {
      S(C);
    },
    refresh: () => {
      Y();
    }
  }), []);
  const j = (C, M) => {
    s(M);
  }, B = wr(n, f), O = (C) => {
    k(C);
  }, H = () => {
    g(!p);
  }, J = () => h === "compact" ? { padding: "3px" } : h === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, u = () => h === "compact" ? { padding: "3px" } : h === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, v = () => {
    var C;
    switch (h) {
      case "compact":
        C = /* @__PURE__ */ i(ot, { className: "density-icon" });
        break;
      case "comfortable":
        C = /* @__PURE__ */ i(at, { className: "density-icon" });
        break;
      default:
        C = /* @__PURE__ */ i(nt, { className: "grid-button-icon" });
        break;
    }
    return C;
  }, A = (C) => {
    const M = C.target.value;
    W(M), M ? m(M) : S({});
  }, _ = (C) => {
    c && c(C);
  }, T = (C) => {
    const M = parseInt(C.target.value, 10);
    L(M);
  }, I = () => {
    console.info("Export Clicked");
  }, R = 200, N = !!t.pageSize;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ K("div", { children: [
    o,
    /* @__PURE__ */ K("div", { className: "grid-header", children: [
      /* @__PURE__ */ i("div", { className: "grid-header-filter", children: !!l && /* @__PURE__ */ i(
        Ge,
        {
          sx: { width: R },
          type: "text",
          value: $,
          onChange: A,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ i(Ot, { position: "end", children: /* @__PURE__ */ i(jt, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ i(Dt, { onClickAway: () => {
        g(!1);
      }, children: /* @__PURE__ */ K("div", { className: "grid-header-button", onClick: H, children: [
        /* @__PURE__ */ i(xe, { title: "Density", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: v() }) }),
        p && /* @__PURE__ */ i("div", { className: "density-dropdown-content", children: /* @__PURE__ */ K("ul", { children: [
          /* @__PURE__ */ K("li", { onClick: () => O("standard"), children: [
            /* @__PURE__ */ i(nt, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ K("li", { onClick: () => O("compact"), children: [
            /* @__PURE__ */ i(ot, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ K("li", { onClick: () => O("comfortable"), children: [
            /* @__PURE__ */ i(at, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ K("div", { className: "grid-header-button", children: [
        /* @__PURE__ */ i(xe, { title: "Filter", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, onClick: () => x(!0), children: /* @__PURE__ */ i(Or, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ i(
          zn,
          {
            columns: n,
            setFilter: S,
            defaultFilter: D,
            isOpen: E,
            onClose: () => x(!1)
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: I, children: /* @__PURE__ */ i(xe, { title: "Export", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Er, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ i(xe, { title: "New", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Rr, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ i(we, {})
    ] }),
    /* @__PURE__ */ i("div", { className: "grid-table", children: /* @__PURE__ */ i(
      xr,
      {
        columnDefs: B,
        EmptyChild: d,
        rowData: z,
        onRowClick: _,
        onRowStyle: J,
        onHeaderStyle: u,
        onSortColumn: b
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "grid-header", children: /* @__PURE__ */ i("div", { className: "grid-filter", children: N && /* @__PURE__ */ i(
      Et,
      {
        component: "div",
        count: G || 0,
        page: w(),
        onPageChange: j,
        rowsPerPage: Q.limit,
        rowsPerPageOptions: X || [],
        onRowsPerPageChange: T
      }
    ) }) })
  ] }) });
}), oa = le(function(t, r) {
  const { columns: n, endPoint: o, storeFactory: a, layoutParams: c, pagination: l } = t, d = t.quickSearch || "", f = se(null), p = (h, k) => {
    console.log(k);
  };
  ye(() => {
    var h = it.subscribe(t.topic, p);
    return () => {
      it.unsubscribe(h);
    };
  }, [t.topic]), r && ve(r, () => ({
    setFilter: (h) => {
      f.current.setFilter(h);
    },
    refresh: () => {
      f.current.refresh();
    }
  }), [n, o]);
  const g = {
    fields: n,
    pagination: l,
    quickSearch: d,
    storeOptions: {
      endPoint: o
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ i(we, { children: /* @__PURE__ */ i(Ue.Provider, { value: a, children: /* @__PURE__ */ i(er, { layout: g, context: c, customizer: t.customizer, ref: f }) }) });
}), Bn = le(function(t, r) {
  const n = t.layout, [o, a] = ee(n.fields), c = n.pagination ? n.pagination : [15], l = Ee(Ue), d = Ee(Pt);
  var f = n.storeOptions || {}, p = {};
  Sr(p, f, d);
  const g = l.getGridStore(p, n.storeOptions.endPoint);
  ye(() => {
    f.hasLayout && g.queryLayout({}).then((E) => {
      a(E.columns);
    });
  }, []);
  const { onClick: h, onNewClick: k } = Ar(n.actionOptions, d);
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    Xn,
    {
      columns: o,
      store: g,
      pageSize: c,
      onRowClick: h,
      onNewClick: k,
      customizer: t.customizer,
      quickSearch: n.quickSearch,
      ref: r
    }
  ) });
}), er = Bn, Un = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Container || Mt;
  return /* @__PURE__ */ i(kt, { fallback: /* @__PURE__ */ i("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ i(n, { ...t, children: ((a) => /* @__PURE__ */ i(
    er,
    {
      context: r,
      layout: a
    }
  ))(t.tableLayout) }) });
}, Gn = (e) => {
  const { layout: t } = e;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ i(It, { ...e });
    case "view":
      return /* @__PURE__ */ i(Lr, { ...e });
    case "grid":
      return /* @__PURE__ */ i(Un, { ...e });
    case "chart":
      return /* @__PURE__ */ i(vr, { ...e });
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
const tr = (e) => {
  const { layout: t, context: r } = e, n = t.sections;
  function o(a, c, l) {
    const { w: d, h: f } = Hn(a.width, a.height);
    return /* @__PURE__ */ i(gr, { sx: { width: d, height: f }, children: /* @__PURE__ */ i(
      Gn,
      {
        layout: a,
        context: c
      }
    ) }, (a.name || "tab") + l);
  }
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap" }, children: n.map((a, c) => o(a, r, c)) });
}, St = le(function(t, r) {
  const { layout: n } = t;
  ve(r, () => ({
    resetFilter() {
    }
  }), []);
  const o = {}, a = n.tabs;
  return /* @__PURE__ */ i("div", { children: a.map((c, l) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    tr,
    {
      layout: c,
      context: o
    }
  ) }, c.name + l)) });
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
}, Ct = le(function(t, r) {
  var p;
  const n = t.data || {}, { layout: o } = t;
  var { getFieldManager: a, getFormData: c, isFormValid: l } = Ft(n, (p = t.callbacks) == null ? void 0 : p.onFormValidChange, Kn(t.mode));
  ve(r, () => ({
    getData() {
      return c();
    },
    isValid() {
      return l();
    }
  }), []);
  const d = { formData: n }, f = o.tabs;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(Ne.Provider, { value: a, children: f.map((g, h) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    tr,
    {
      layout: g,
      context: d
    }
  ) }, g.name + h)) }) });
}), Qn = (e) => {
  switch (e) {
    case "grid":
      return St;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), Ct;
    case "formEdit":
    case "formNew":
    case "formView":
      return Ct;
    default:
      return St;
  }
}, aa = le(function(t, r) {
  const [n, o] = ee(t.layout), a = t.mode ? t.mode : n.type ? n.type : "grid", c = t.layoutParams || {}, l = Qn(a), d = se(0);
  return ye(() => {
    o(t.layout), d.current < 999999 ? d.current++ : d.current = 0;
  }, [t.layout]), /* @__PURE__ */ i(kt, { fallback: /* @__PURE__ */ i("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ i(Ue.Provider, { value: t.storeFactory, children: /* @__PURE__ */ i(Pt.Provider, { value: c, children: /* @__PURE__ */ i(l, { ...t, ref: (f) => {
    r && (r.current = f);
  } }, d.current) }) }) });
}), ia = le(function(t, r) {
  const { children: n, Child: o, childProps: a, pageSize: c } = t, l = r || se(null), {
    setQueryFilter: d,
    refreshData: f,
    setQuickSearch: p,
    gotoPage: g,
    setPageSize: h,
    getPageNo: k,
    data: E,
    pageSizeOptions: x,
    queryLimit: $
  } = Me(t), W = t.listKeyProvider || ((Y, z) => z);
  ve(l, () => ({
    setFilter(Y) {
      d(Y);
    },
    refresh: () => {
      f();
    },
    gotoPage(Y) {
      g(Y);
    },
    nextPage() {
    },
    prevPage() {
    }
  }), []);
  const S = (Y, z) => {
    g(z);
  }, m = (Y) => {
    const z = Y.target.value;
    p(z);
  }, b = (Y) => {
    const z = parseInt(Y.target.value, 10);
    h(z);
  }, s = 200, L = !!c, w = !!t.quickSearch;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ K("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ K("div", { children: [
      /* @__PURE__ */ K("div", { className: "card-header", children: [
        /* @__PURE__ */ i("div", { className: "card-filter", children: w && /* @__PURE__ */ i(
          Ge,
          {
            sx: { width: s },
            type: "text",
            onChange: m,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ i(Ot, { position: "end", children: /* @__PURE__ */ i(jt, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ i("div", { className: "card-pagination", children: L && /* @__PURE__ */ i(
          Et,
          {
            component: "div",
            count: E,
            page: k(),
            onPageChange: S,
            rowsPerPage: $.limit,
            rowsPerPageOptions: x || [],
            onRowsPerPageChange: b
          }
        ) })
      ] }),
      /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
        yr,
        {
          Child: o,
          childKeyProvider: W,
          dataList: E,
          childProps: a,
          EmptyChild: t.EmptyChild
        }
      ) })
    ] })
  ] }) });
});
export {
  aa as F,
  er as G,
  ra as M,
  oa as P,
  ia as S,
  tr as T,
  Xn as a,
  Yr as b,
  Me as c,
  Vr as d,
  It as e,
  Vn as f,
  Lt as g,
  zn as h,
  Un as i,
  Gn as j,
  St as k,
  Ct as l,
  $r as u
};
