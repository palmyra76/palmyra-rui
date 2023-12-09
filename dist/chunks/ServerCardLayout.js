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
import { FieldManagerContext as Ne, StoreFactoryContext as Ue, LayoutParamsContext as Pt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as i, jsxs as K, Fragment as we } from "react/jsx-runtime";
import pe, { useState as ee, useRef as ie, useEffect as ge, forwardRef as le, useContext as Ee, useImperativeHandle as ve, useMemo as wt } from "react";
import { FormControlLabel as et, Checkbox as tt, FormControl as Tt, FormHelperText as xt, Autocomplete as dr, TextField as Ge, CircularProgress as fr, Dialog as pr, ClickAwayListener as Dt, Button as Se, Paper as hr, InputAdornment as Ot, Tooltip as xe, TablePagination as Et, Box as mr } from "@mui/material";
import gr from "../palmyra/layout/card/CardLayout.js";
import yr from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Rt, getFieldLabel as _t } from "../palmyra/mui/form/MuiUtil.js";
import Nt from "../palmyra/mui/form/FieldDecorator.js";
import { hasDot as Re } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as _e, setValueByKey as rt } from "../palmyra/form/FormUtil.js";
import { delay as vr, mergeDeep as br } from "../palmyra/utils/index.js";
import Sr from "../palmyra/mui/form/MuiDateRangePicker.js";
import Mt from "../palmyra/layout/container/SectionContainer.js";
import Cr from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as Pr } from "../palmyra/grid/base/ColumnConverter.js";
import wr from "../palmyra/grid/base/EmptyChildTable.js";
import Tr from "../palmyra/grid/base/TableX.js";
import { Close as xr, Menu as nt, DensitySmall as ot, DensityLarge as at, FilterAlt as Dr, FileDownloadOutlined as Or, Add as Er } from "@mui/icons-material";
import { NoopCustomizer as Rr } from "../palmyra/grid/Types.js";
import { convertToField as _r } from "../palmyra/grid/base/GridFieldConverter.js";
import { d as Ft } from "./PalmyraFormManager.js";
import "../palmyra/form/PalmyraForm.js";
import { a as Nr, g as Mr } from "./_commonjsHelpers.js";
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
import { getActionPublishers as Fr } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as kt } from "../palmyra/layout/ErrorBoundary.js";
import Ar from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import kr from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { useKeyValue as Lr } from "../palmyra/utils/pubsub/PubSubHelper.js";
const Me = (e) => {
  const { store: t, quickSearch: r, endPointVars: n } = e, a = e.fetchAll != !1, [o, c] = ee(null), [l, d] = e.filterTopic ? Lr(e.filterTopic, {}) : ee({}), [p, f] = ee({}), h = ie(e.initialFetch == !1), g = e.pageSize ? e.pageSize : 15;
  var L = g instanceof Array ? g : [g], R = g instanceof Array ? g[0] : g;
  const [x, $] = ee({ limit: R, offset: 0 }), [W, S] = ee(null), m = () => Math.round(x.offset / x.limit), b = () => x.limit, s = (F) => {
    $({ ...x, offset: F * R });
  }, k = (F) => {
    const j = F > 10 || F == -1 ? F : 15;
    $({ ...x, limit: j });
  }, w = () => l ? Object.keys(l).length == 0 : !1;
  ge(() => {
    if (h.current) {
      h.current = !1;
      return;
    }
    (a || !w()) && Y();
  }, [x, l, p]);
  const Y = () => {
    const F = { filter: l, sortOrder: p, total: !0, endPointVars: n, ...x };
    if (t)
      try {
        t.query(F).then((j) => {
          S(j.result), c(j.total);
        }).catch((j) => {
          var X = j.response ? j.response : j;
          console.error("error while fetching", X), U();
        });
      } catch (j) {
        console.error(j), z();
      }
    else
      console.error("Store is not provided for the Grid"), z();
  }, z = () => {
    S([]), c(0);
  }, U = () => {
    S(void 0), c(null);
  };
  return {
    setQueryFilter: (F) => {
      typeof F == "function" || F && Object.keys(F).length > 0 ? d(F) : d({});
    },
    setQuickSearch: (F) => {
      const j = r;
      d(F ? (X) => (X[j] = F, { ...X }) : (X) => (delete X[j], { ...X }));
    },
    setSortColumns: (F) => {
      f(F);
    },
    refreshData: Y,
    gotoPage: s,
    setPageSize: k,
    getPageNo: m,
    getLimit: b,
    filter: l,
    queryLimit: x,
    data: W,
    totalRecords: o,
    pageSizeOptions: L
  };
};
function st(e) {
  return e ? Array.isArray(e) ? e : typeof e == "string" ? e.split(",") : (console.log(e), [e]) : [];
}
const ea = le(function(t, r) {
  const n = Ee(Ne), a = r || ie(null), o = n(t, "checkbox", a), { mutateOptions: c, setMutateOptions: l } = o, [d, p] = ee(!1), f = st(o.data), h = o.error, g = o.eventListeners, R = { store: o.store, pageSize: -1 }, { data: x } = Me(R), $ = x, W = ie(null), S = t.lookupOptions || {}, m = S.idAttribute || "id", b = S.titleAttribute || "name", s = Re(m) ? (D) => _e(m, D) : (D) => D[m], k = Re(b) ? (D) => _e(b, D) : (D) => D[b];
  ve(a, () => ({
    focus() {
      W.current.focus();
    },
    isValid() {
      return !h.status;
    },
    assignAttribute(D) {
      W.current.assignAttribute(D);
    },
    getValue() {
      return o.getData();
    },
    clear() {
      o.setData("");
    },
    setValue(D) {
      o.setData(D);
    },
    setVisible(D) {
      l({ visible: D });
    }
  }), [o]);
  var w = Rt(t, o.data, t.label);
  t.readonly && (w.inputProps = { readOnly: !0 });
  function Y(D, Q) {
    const F = st(o.data);
    var j = F.indexOf(D);
    Q ? j < 0 && F.push(D) : j >= 0 && F.splice(j, 1), g.onValueChange(F.toString());
  }
  var z = {
    onBlur: g.onBlur,
    onFocus: g.onFocus,
    onChange: (D) => {
      Y(D.target.value, D.target.checked);
    }
  };
  const U = (D) => {
    const Q = D.toString();
    return f.includes(Q);
  }, G = (D) => {
    const Q = D.target.checked;
    p(Q);
    var F = [];
    Q && $.map((j) => {
      F.push(s(j));
    }), g.onValueChange(F.toString());
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
            control: /* @__PURE__ */ i(tt, { onChange: G }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ K(
          Tt,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: h.status,
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
                      checked: U(s(D)),
                      disabled: t.readonly
                    }
                  ),
                  label: k(D)
                },
                s(D)
              )) : /* @__PURE__ */ i("div", { children: "No options provided" }),
              /* @__PURE__ */ i(xt, { className: "form-error-text", children: h.message })
            ]
          }
        )
      ]
    }
  ) });
}), Ir = (e, t, r) => {
  const n = e.store || r.store, a = e.lookupOptions || {}, o = a.idAttribute || "id", c = a.titleAttribute || "name", l = a.searchAttribute || c, d = r.data, p = ie(0), [f, h] = ee(null), [g, L] = ee([]), [R, x] = ee(""), [$, W] = ee(!1), S = $ && g.length < 1, m = {
    store: n,
    endPointVars: e.storeOptions.endPointVars,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: l,
    initialFetch: !1
  }, b = Me(m), { setQueryFilter: s, setQuickSearch: k, filter: w, totalRecords: Y, refreshData: z } = b, U = b.data, G = Re(o) ? (O) => _e(o, O) : (O) => O == null ? void 0 : O[o], D = Re(c) ? (O) => _e(c, O) : (O) => O == null ? void 0 : O[c];
  function Q() {
    if (d) {
      var O = {};
      rt(o, O, d);
      const H = r.displayValue || d;
      return rt(c, O, H), O;
    } else
      return null;
  }
  ge(() => {
    if (!f) {
      var O = Q();
      O && (L([O]), h(O));
    }
  }, [r.displayValue, r.data]), ge(() => {
    const O = U ? [...U] : [], H = f;
    O && H && !F(O, G(H)) && O.unshift(H), L(O), p.current < Y && (p.current = Y);
  }, [U, Y]);
  function F(O, H) {
    return O.find((J) => {
      if (G(J) == H)
        return J;
    });
  }
  ge(() => {
    vr(j);
  }, [R, $]);
  function j() {
    $ && (R.length > 0 && R != D(f) ? k("*" + R + "*") : U ? k(null) : z());
  }
  return {
    getSelectedOption: Q,
    filter: w,
    labelAccessor: D,
    idAccessor: G,
    getServerLookup: (O) => {
      var H = Rt(e, f, e.label);
      const J = r.eventListeners, u = r.error, v = e.variant || "standard", A = e.autoFocus || !1, _ = e.label, T = e.readonly || !1;
      t.readonly && (H.inputProps = { readOnly: !0 });
      var I = {
        onBlur: J.onBlur,
        onFocus: J.onFocus,
        onChange: (P, C) => {
          E(C), h(C);
        },
        onInputChange: (P, C) => (x(C), !0)
      };
      ge(() => {
        E(f);
      }, [f]);
      const E = (P) => {
        if (P) {
          const C = G(P);
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
              dr,
              {
                includeInputInList: !0,
                autoHighlight: !0,
                readOnly: T,
                isOptionEqualToValue: (P, C) => G(P) == G(C),
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
                        S ? /* @__PURE__ */ i(fr, { color: "inherit", size: 18 }) : null,
                        P.InputProps.endAdornment
                      ] })
                    }
                  }
                ),
                getOptionLabel: N,
                ...H,
                options: g,
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
    searchText: R,
    setSearchText: x,
    refreshOptions: j
  };
}, $r = le(function(t, r) {
  const n = Ee(Ne), a = r || ie(null), o = n(t, "serverlookup", a), c = o.error, { mutateOptions: l, setMutateOptions: d } = o, p = ie(null), { getServerLookup: f, setQueryFilter: h } = Ir(t, l, o);
  return ve(a, () => ({
    focus() {
      p.current.focus();
    },
    isValid() {
      return !c.status;
    },
    clear() {
      o.setData("");
    },
    getValue() {
      return o.getData();
    },
    setValue(g) {
      o.setData(g);
    },
    setRequired(g) {
    },
    setReadOnly(g) {
    },
    setVisible(g) {
      d({ visible: g });
    },
    setAttribute(g) {
    },
    setFilter(g) {
      h(g);
    },
    resetFilter() {
    },
    addFilter(g, L) {
      h((R) => (R[g] = L, { ...R }));
    },
    setDefaultFilter(g) {
    }
  }), [o]), f(p);
}), Yr = (e) => {
  const { fieldDef: t } = e;
  return /* @__PURE__ */ K("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, se = (e, t) => {
  const r = e.fieldDef;
  return /* @__PURE__ */ i(
    t,
    {
      ...r,
      label: e.title
    }
  );
}, jr = () => /* @__PURE__ */ i("div", { children: "To be Implemented" }), Lt = (e, t, r) => {
  const { type: n } = e, a = { fieldDef: e, title: r };
  switch (n) {
    case "string":
      return se(a, sr);
    case "radio":
      return se(a, or);
    case "select":
      return se(a, ar);
    case "date":
      return se(a, rr);
    case "datetime":
      return se(a, nr);
    case "checkbox":
      return se(a, cr);
    case "serverlookup":
      return se(a, $r);
    case "textarea":
      return se(a, ir);
    case "switch":
      return se(a, lr);
    case "password":
      return se(a, ur);
    case "multiSelect":
      return jr();
    case "dateRange":
      return se(a, Sr);
    default:
      return Yr(a);
  }
}, qr = le(function(t, r) {
  var f;
  const { formLayout: n, context: a } = t, { formData: o } = a, c = n.Container;
  ie({});
  const l = wt(() => (h) => Lt(h), [o.data]);
  var d = ((f = n.options) == null ? void 0 : f.columns) || 1, p = { columns: d };
  return c ? /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((h, g) => /* @__PURE__ */ i(
    c,
    {
      index: g,
      field: h,
      label: h.title,
      options: p,
      children: l(h)
    },
    h.attribute
  )) }) : /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((h, g) => /* @__PURE__ */ i(we, { children: l(h) })) });
}), It = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Renderer || qr, a = t.Container || Mt;
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
      children: /* @__PURE__ */ i(Cr, { columns: t.columns, children: o(t.formLayout) })
    }
  );
};
var $t = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ct = pe.createContext && pe.createContext($t), ye = globalThis && globalThis.__assign || function() {
  return ye = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, ye.apply(this, arguments);
}, Vr = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function Yt(e) {
  return e && e.map(function(t, r) {
    return pe.createElement(t.tag, ye({
      key: r
    }, t.attr), Yt(t.child));
  });
}
function Wr(e) {
  return function(t) {
    return pe.createElement(zr, ye({
      attr: ye({}, e.attr)
    }, t), Yt(e.child));
  };
}
function zr(e) {
  var t = function(r) {
    var n = e.attr, a = e.size, o = e.title, c = Vr(e, ["attr", "size", "title"]), l = a || r.size || "1em", d;
    return r.className && (d = r.className), e.className && (d = (d ? d + " " : "") + e.className), pe.createElement("svg", ye({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, c, {
      className: d,
      style: ye(ye({
        color: e.color || r.color
      }, r.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && pe.createElement("title", null, o), e.children);
  };
  return ct !== void 0 ? pe.createElement(ct.Consumer, null, function(r) {
    return t(r);
  }) : t($t);
}
function jt(e) {
  return Wr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
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
function Xr() {
  if (lt)
    return q;
  lt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, L = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, W = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function m(s) {
    if (typeof s == "object" && s !== null) {
      var k = s.$$typeof;
      switch (k) {
        case t:
          switch (s = s.type, s) {
            case d:
            case p:
            case n:
            case o:
            case a:
            case h:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case l:
                case f:
                case R:
                case L:
                case c:
                  return s;
                default:
                  return k;
              }
          }
        case r:
          return k;
      }
    }
  }
  function b(s) {
    return m(s) === p;
  }
  return q.AsyncMode = d, q.ConcurrentMode = p, q.ContextConsumer = l, q.ContextProvider = c, q.Element = t, q.ForwardRef = f, q.Fragment = n, q.Lazy = R, q.Memo = L, q.Portal = r, q.Profiler = o, q.StrictMode = a, q.Suspense = h, q.isAsyncMode = function(s) {
    return b(s) || m(s) === d;
  }, q.isConcurrentMode = b, q.isContextConsumer = function(s) {
    return m(s) === l;
  }, q.isContextProvider = function(s) {
    return m(s) === c;
  }, q.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === t;
  }, q.isForwardRef = function(s) {
    return m(s) === f;
  }, q.isFragment = function(s) {
    return m(s) === n;
  }, q.isLazy = function(s) {
    return m(s) === R;
  }, q.isMemo = function(s) {
    return m(s) === L;
  }, q.isPortal = function(s) {
    return m(s) === r;
  }, q.isProfiler = function(s) {
    return m(s) === o;
  }, q.isStrictMode = function(s) {
    return m(s) === a;
  }, q.isSuspense = function(s) {
    return m(s) === h;
  }, q.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === p || s === o || s === a || s === h || s === g || typeof s == "object" && s !== null && (s.$$typeof === R || s.$$typeof === L || s.$$typeof === c || s.$$typeof === l || s.$$typeof === f || s.$$typeof === $ || s.$$typeof === W || s.$$typeof === S || s.$$typeof === x);
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
function Br() {
  return ut || (ut = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, L = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, W = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function m(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === n || y === p || y === o || y === a || y === h || y === g || typeof y == "object" && y !== null && (y.$$typeof === R || y.$$typeof === L || y.$$typeof === c || y.$$typeof === l || y.$$typeof === f || y.$$typeof === $ || y.$$typeof === W || y.$$typeof === S || y.$$typeof === x);
    }
    function b(y) {
      if (typeof y == "object" && y !== null) {
        var ue = y.$$typeof;
        switch (ue) {
          case t:
            var Te = y.type;
            switch (Te) {
              case d:
              case p:
              case n:
              case o:
              case a:
              case h:
                return Te;
              default:
                var Ze = Te && Te.$$typeof;
                switch (Ze) {
                  case l:
                  case f:
                  case R:
                  case L:
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
    var s = d, k = p, w = l, Y = c, z = t, U = f, G = n, D = R, Q = L, F = r, j = o, X = a, O = h, H = !1;
    function J(y) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), u(y) || b(y) === d;
    }
    function u(y) {
      return b(y) === p;
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
      return b(y) === f;
    }
    function I(y) {
      return b(y) === n;
    }
    function E(y) {
      return b(y) === R;
    }
    function N(y) {
      return b(y) === L;
    }
    function P(y) {
      return b(y) === r;
    }
    function C(y) {
      return b(y) === o;
    }
    function M(y) {
      return b(y) === a;
    }
    function re(y) {
      return b(y) === h;
    }
    V.AsyncMode = s, V.ConcurrentMode = k, V.ContextConsumer = w, V.ContextProvider = Y, V.Element = z, V.ForwardRef = U, V.Fragment = G, V.Lazy = D, V.Memo = Q, V.Portal = F, V.Profiler = j, V.StrictMode = X, V.Suspense = O, V.isAsyncMode = J, V.isConcurrentMode = u, V.isContextConsumer = v, V.isContextProvider = A, V.isElement = _, V.isForwardRef = T, V.isFragment = I, V.isLazy = E, V.isMemo = N, V.isPortal = P, V.isProfiler = C, V.isStrictMode = M, V.isSuspense = re, V.isValidElementType = m, V.typeOf = b;
  }()), V;
}
var dt;
function Vt() {
  return dt || (dt = 1, process.env.NODE_ENV === "production" ? De.exports = Xr() : De.exports = Br()), De.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ie, ft;
function Ur() {
  if (ft)
    return Ie;
  ft = 1;
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
      for (var c = {}, l = 0; l < 10; l++)
        c["_" + String.fromCharCode(l)] = l;
      var d = Object.getOwnPropertyNames(c).map(function(f) {
        return c[f];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        p[f] = f;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ie = a() ? Object.assign : function(o, c) {
    for (var l, d = n(o), p, f = 1; f < arguments.length; f++) {
      l = Object(arguments[f]);
      for (var h in l)
        t.call(l, h) && (d[h] = l[h]);
      if (e) {
        p = e(l);
        for (var g = 0; g < p.length; g++)
          r.call(l, p[g]) && (d[p[g]] = l[p[g]]);
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
function Gr() {
  if (mt)
    return je;
  mt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = He(), r = {}, n = Wt();
    e = function(o) {
      var c = "Warning: " + o;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function a(o, c, l, d, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in o)
        if (n(o, f)) {
          var h;
          try {
            if (typeof o[f] != "function") {
              var g = Error(
                (d || "React class") + ": " + l + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            h = o[f](c, f, d, l, null, t);
          } catch (R) {
            h = R;
          }
          if (h && !(h instanceof Error) && e(
            (d || "React class") + ": type specification of " + l + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var L = p ? p() : "";
            e(
              "Failed " + l + " type: " + h.message + (L ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, je = a, je;
}
var qe, gt;
function Hr() {
  if (gt)
    return qe;
  gt = 1;
  var e = Vt(), t = Ur(), r = He(), n = Wt(), a = Gr(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(l) {
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
    var p = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function h(u) {
      var v = u && (p && u[p] || u[f]);
      if (typeof v == "function")
        return v;
    }
    var g = "<<anonymous>>", L = {
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
      instanceOf: k,
      node: U(),
      objectOf: Y,
      oneOf: w,
      oneOfType: z,
      shape: D,
      exact: Q
    };
    function R(u, v) {
      return u === v ? u !== 0 || 1 / u === 1 / v : u !== u && v !== v;
    }
    function x(u, v) {
      this.message = u, this.data = v && typeof v == "object" ? v : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function $(u) {
      if (process.env.NODE_ENV !== "production")
        var v = {}, A = 0;
      function _(I, E, N, P, C, M, re) {
        if (P = P || g, M = M || N, re !== r) {
          if (d) {
            var y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw y.name = "Invariant Violation", y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = P + ":" + N;
            !v[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + M + "` prop on `" + P + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), v[ue] = !0, A++);
          }
        }
        return E[N] == null ? I ? E[N] === null ? new x("The " + C + " `" + M + "` is marked as required " + ("in `" + P + "`, but its value is `null`.")) : new x("The " + C + " `" + M + "` is marked as required in " + ("`" + P + "`, but its value is `undefined`.")) : null : u(E, N, P, C, M);
      }
      var T = _.bind(null, !1);
      return T.isRequired = _.bind(null, !0), T;
    }
    function W(u) {
      function v(A, _, T, I, E, N) {
        var P = A[_], C = X(P);
        if (C !== u) {
          var M = O(P);
          return new x(
            "Invalid " + I + " `" + E + "` of type " + ("`" + M + "` supplied to `" + T + "`, expected ") + ("`" + u + "`."),
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
      function v(A, _, T, I, E) {
        if (typeof u != "function")
          return new x("Property `" + E + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var N = A[_];
        if (!Array.isArray(N)) {
          var P = X(N);
          return new x("Invalid " + I + " `" + E + "` of type " + ("`" + P + "` supplied to `" + T + "`, expected an array."));
        }
        for (var C = 0; C < N.length; C++) {
          var M = u(N, C, T, I, E + "[" + C + "]", r);
          if (M instanceof Error)
            return M;
        }
        return null;
      }
      return $(v);
    }
    function b() {
      function u(v, A, _, T, I) {
        var E = v[A];
        if (!l(E)) {
          var N = X(E);
          return new x("Invalid " + T + " `" + I + "` of type " + ("`" + N + "` supplied to `" + _ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return $(u);
    }
    function s() {
      function u(v, A, _, T, I) {
        var E = v[A];
        if (!e.isValidElementType(E)) {
          var N = X(E);
          return new x("Invalid " + T + " `" + I + "` of type " + ("`" + N + "` supplied to `" + _ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return $(u);
    }
    function k(u) {
      function v(A, _, T, I, E) {
        if (!(A[_] instanceof u)) {
          var N = u.name || g, P = J(A[_]);
          return new x("Invalid " + I + " `" + E + "` of type " + ("`" + P + "` supplied to `" + T + "`, expected ") + ("instance of `" + N + "`."));
        }
        return null;
      }
      return $(v);
    }
    function w(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), c;
      function v(A, _, T, I, E) {
        for (var N = A[_], P = 0; P < u.length; P++)
          if (R(N, u[P]))
            return null;
        var C = JSON.stringify(u, function(re, y) {
          var ue = O(y);
          return ue === "symbol" ? String(y) : y;
        });
        return new x("Invalid " + I + " `" + E + "` of value `" + String(N) + "` " + ("supplied to `" + T + "`, expected one of " + C + "."));
      }
      return $(v);
    }
    function Y(u) {
      function v(A, _, T, I, E) {
        if (typeof u != "function")
          return new x("Property `" + E + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var N = A[_], P = X(N);
        if (P !== "object")
          return new x("Invalid " + I + " `" + E + "` of type " + ("`" + P + "` supplied to `" + T + "`, expected an object."));
        for (var C in N)
          if (n(N, C)) {
            var M = u(N, C, T, I, E + "." + C, r);
            if (M instanceof Error)
              return M;
          }
        return null;
      }
      return $(v);
    }
    function z(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var v = 0; v < u.length; v++) {
        var A = u[v];
        if (typeof A != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + H(A) + " at index " + v + "."
          ), c;
      }
      function _(T, I, E, N, P) {
        for (var C = [], M = 0; M < u.length; M++) {
          var re = u[M], y = re(T, I, E, N, P, r);
          if (y == null)
            return null;
          y.data && n(y.data, "expectedType") && C.push(y.data.expectedType);
        }
        var ue = C.length > 0 ? ", expected one of type [" + C.join(", ") + "]" : "";
        return new x("Invalid " + N + " `" + P + "` supplied to " + ("`" + E + "`" + ue + "."));
      }
      return $(_);
    }
    function U() {
      function u(v, A, _, T, I) {
        return F(v[A]) ? null : new x("Invalid " + T + " `" + I + "` supplied to " + ("`" + _ + "`, expected a ReactNode."));
      }
      return $(u);
    }
    function G(u, v, A, _, T) {
      return new x(
        (u || "React class") + ": " + v + " type `" + A + "." + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function D(u) {
      function v(A, _, T, I, E) {
        var N = A[_], P = X(N);
        if (P !== "object")
          return new x("Invalid " + I + " `" + E + "` of type `" + P + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var C in u) {
          var M = u[C];
          if (typeof M != "function")
            return G(T, I, E, C, O(M));
          var re = M(N, C, T, I, E + "." + C, r);
          if (re)
            return re;
        }
        return null;
      }
      return $(v);
    }
    function Q(u) {
      function v(A, _, T, I, E) {
        var N = A[_], P = X(N);
        if (P !== "object")
          return new x("Invalid " + I + " `" + E + "` of type `" + P + "` " + ("supplied to `" + T + "`, expected `object`."));
        var C = t({}, A[_], u);
        for (var M in C) {
          var re = u[M];
          if (n(u, M) && typeof re != "function")
            return G(T, I, E, M, O(re));
          if (!re)
            return new x(
              "Invalid " + I + " `" + E + "` key `" + M + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(A[_], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(u), null, "  ")
            );
          var y = re(N, M, T, I, E + "." + M, r);
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
          var v = h(u);
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
    function X(u) {
      var v = typeof u;
      return Array.isArray(u) ? "array" : u instanceof RegExp ? "object" : j(v, u) ? "symbol" : v;
    }
    function O(u) {
      if (typeof u > "u" || u === null)
        return "" + u;
      var v = X(u);
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
      return !u.constructor || !u.constructor.name ? g : u.constructor.name;
    }
    return L.checkPropTypes = a, L.resetWarningCache = a.resetWarningCache, L.PropTypes = L, L;
  }, qe;
}
var Ve, yt;
function Kr() {
  if (yt)
    return Ve;
  yt = 1;
  var e = He();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ve = function() {
    function n(c, l, d, p, f, h) {
      if (h !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
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
  }, Ve;
}
if (process.env.NODE_ENV !== "production") {
  var Qr = Vt(), Jr = !0;
  Be.exports = Hr()(Qr.isElement, Jr);
} else
  Be.exports = Kr()();
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
const Zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: vt,
  default: vt
}, Symbol.toStringTag, { value: "Module" })), en = /* @__PURE__ */ Nr(Zr);
var B = {}, de = {};
Object.defineProperty(de, "__esModule", {
  value: !0
});
de.dontSetMe = an;
de.findInArray = tn;
de.int = on;
de.isFunction = rn;
de.isNum = nn;
function tn(e, t) {
  for (let r = 0, n = e.length; r < n; r++)
    if (t.apply(t, [e[r], r, e]))
      return e[r];
}
function rn(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function nn(e) {
  return typeof e == "number" && !isNaN(e);
}
function on(e) {
  return parseInt(e, 10);
}
function an(e, t, r) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var be = {};
Object.defineProperty(be, "__esModule", {
  value: !0
});
be.browserPrefixToKey = Ut;
be.browserPrefixToStyle = sn;
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
  return t ? "".concat(t).concat(cn(e)) : e;
}
function sn(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function cn(e) {
  let t = "", r = !0;
  for (let n = 0; n < e.length; n++)
    r ? (t += e[n].toUpperCase(), r = !1) : e[n] === "-" ? r = !0 : t += e[n];
  return t;
}
be.default = Bt();
Object.defineProperty(B, "__esModule", {
  value: !0
});
B.addClassName = Kt;
B.addEvent = dn;
B.addUserSelectStyles = Pn;
B.createCSSTransform = vn;
B.createSVGTransform = bn;
B.getTouch = Sn;
B.getTouchIdentifier = Cn;
B.getTranslation = Ke;
B.innerHeight = mn;
B.innerWidth = gn;
B.matchesSelector = Ht;
B.matchesSelectorAndParentsTo = un;
B.offsetXYFromParent = yn;
B.outerHeight = pn;
B.outerWidth = hn;
B.removeClassName = Qt;
B.removeEvent = fn;
B.removeUserSelectStyles = wn;
var ae = de, bt = ln(be);
function Gt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Gt = function(n) {
    return n ? r : t;
  })(e);
}
function ln(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Gt(t);
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
let Oe = "";
function Ht(e, t) {
  return Oe || (Oe = (0, ae.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, ae.isFunction)(e[r]);
  })), (0, ae.isFunction)(e[Oe]) ? e[Oe](t) : !1;
}
function un(e, t, r) {
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
function dn(e, t, r, n) {
  if (!e)
    return;
  const a = {
    capture: !0,
    ...n
  };
  e.addEventListener ? e.addEventListener(t, r, a) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r;
}
function fn(e, t, r, n) {
  if (!e)
    return;
  const a = {
    capture: !0,
    ...n
  };
  e.removeEventListener ? e.removeEventListener(t, r, a) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
}
function pn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ae.int)(r.borderTopWidth), t += (0, ae.int)(r.borderBottomWidth), t;
}
function hn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ae.int)(r.borderLeftWidth), t += (0, ae.int)(r.borderRightWidth), t;
}
function mn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ae.int)(r.paddingTop), t -= (0, ae.int)(r.paddingBottom), t;
}
function gn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ae.int)(r.paddingLeft), t -= (0, ae.int)(r.paddingRight), t;
}
function yn(e, t, r) {
  const a = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), o = (e.clientX + t.scrollLeft - a.left) / r, c = (e.clientY + t.scrollTop - a.top) / r;
  return {
    x: o,
    y: c
  };
}
function vn(e, t) {
  const r = Ke(e, t, "px");
  return {
    [(0, bt.browserPrefixToKey)("transform", bt.default)]: r
  };
}
function bn(e, t) {
  return Ke(e, t, "");
}
function Ke(e, t, r) {
  let {
    x: n,
    y: a
  } = e, o = "translate(".concat(n).concat(r, ",").concat(a).concat(r, ")");
  if (t) {
    const c = "".concat(typeof t.x == "string" ? t.x : t.x + r), l = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    o = "translate(".concat(c, ", ").concat(l, ")") + o;
  }
  return o;
}
function Sn(e, t) {
  return e.targetTouches && (0, ae.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, ae.findInArray)(e.changedTouches, (r) => t === r.identifier);
}
function Cn(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Pn(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && Kt(e.body, "react-draggable-transparent-selection");
}
function wn(e) {
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
fe.canDragX = Dn;
fe.canDragY = On;
fe.createCoreData = Rn;
fe.createDraggableData = _n;
fe.getBoundPosition = Tn;
fe.getControlPosition = En;
fe.snapToGrid = xn;
var oe = de, Ce = B;
function Tn(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : Nn(n);
  const a = Qe(e);
  if (typeof n == "string") {
    const {
      ownerDocument: o
    } = a, c = o.defaultView;
    let l;
    if (n === "parent" ? l = a.parentNode : l = o.querySelector(n), !(l instanceof c.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const d = l, p = c.getComputedStyle(a), f = c.getComputedStyle(d);
    n = {
      left: -a.offsetLeft + (0, oe.int)(f.paddingLeft) + (0, oe.int)(p.marginLeft),
      top: -a.offsetTop + (0, oe.int)(f.paddingTop) + (0, oe.int)(p.marginTop),
      right: (0, Ce.innerWidth)(d) - (0, Ce.outerWidth)(a) - a.offsetLeft + (0, oe.int)(f.paddingRight) - (0, oe.int)(p.marginRight),
      bottom: (0, Ce.innerHeight)(d) - (0, Ce.outerHeight)(a) - a.offsetTop + (0, oe.int)(f.paddingBottom) - (0, oe.int)(p.marginBottom)
    };
  }
  return (0, oe.isNum)(n.right) && (t = Math.min(t, n.right)), (0, oe.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, oe.isNum)(n.left) && (t = Math.max(t, n.left)), (0, oe.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function xn(e, t, r) {
  const n = Math.round(t / e[0]) * e[0], a = Math.round(r / e[1]) * e[1];
  return [n, a];
}
function Dn(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function On(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function En(e, t, r) {
  const n = typeof t == "number" ? (0, Ce.getTouch)(e, t) : null;
  if (typeof t == "number" && !n)
    return null;
  const a = Qe(r), o = r.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, Ce.offsetXYFromParent)(n || e, o, r.props.scale);
}
function Rn(e, t, r) {
  const n = !(0, oe.isNum)(e.lastX), a = Qe(e);
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
function _n(e, t) {
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
ke.default = Mn;
function Mn() {
}
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = void 0;
var ze = An(pe), ne = Je(zt), Fn = Je(At), Z = B, he = fe, Xe = de, Pe = Je(ke);
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
function An(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Jt(t);
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
function te(e, t, r) {
  return t = kn(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kn(e) {
  var t = Ln(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Ln(e, t) {
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
      const a = (0, Z.getTouchIdentifier)(t);
      this.touchIdentifier = a;
      const o = (0, he.getControlPosition)(t, a, this);
      if (o == null)
        return;
      const {
        x: c,
        y: l
      } = o, d = (0, he.createCoreData)(this, c, l);
      (0, Pe.default)("DraggableCore: handleDragStart: %j", d), (0, Pe.default)("calling", this.props.onStart), !(this.props.onStart(t, d) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, Z.addUserSelectStyles)(n), this.dragging = !0, this.lastX = c, this.lastY = l, (0, Z.addEvent)(n, me.move, this.handleDrag), (0, Z.addEvent)(n, me.stop, this.handleDragStop));
    }), te(this, "handleDrag", (t) => {
      const r = (0, he.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: a
      } = r;
      if (Array.isArray(this.props.grid)) {
        let l = n - this.lastX, d = a - this.lastY;
        if ([l, d] = (0, he.snapToGrid)(this.props.grid, l, d), !l && !d)
          return;
        n = this.lastX + l, a = this.lastY + d;
      }
      const o = (0, he.createCoreData)(this, n, a);
      if ((0, Pe.default)("DraggableCore: handleDrag: %j", o), this.props.onDrag(t, o) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const d = document.createEvent("MouseEvents");
          d.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(d);
        }
        return;
      }
      this.lastX = n, this.lastY = a;
    }), te(this, "handleDragStop", (t) => {
      if (!this.dragging)
        return;
      const r = (0, he.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: a
      } = r;
      if (Array.isArray(this.props.grid)) {
        let d = n - this.lastX || 0, p = a - this.lastY || 0;
        [d, p] = (0, he.snapToGrid)(this.props.grid, d, p), n = this.lastX + d, a = this.lastY + p;
      }
      const o = (0, he.createCoreData)(this, n, a);
      if (this.props.onStop(t, o) === !1 || this.mounted === !1)
        return !1;
      const l = this.findDOMNode();
      l && this.props.enableUserSelectHack && (0, Z.removeUserSelectStyles)(l.ownerDocument), (0, Pe.default)("DraggableCore: handleDragStop: %j", o), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, l && ((0, Pe.default)("DraggableCore: Removing handlers"), (0, Z.removeEvent)(l.ownerDocument, me.move, this.handleDrag), (0, Z.removeEvent)(l.ownerDocument, me.stop, this.handleDragStop));
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
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (r = this.props) === null || r === void 0 || (r = r.nodeRef) === null || r === void 0 ? void 0 : r.current : Fn.default.findDOMNode(this);
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
  var t = g(pe), r = f(zt), n = f(At), a = f(en), o = B, c = fe, l = de, d = f(Ae), p = f(ke);
  function f(S) {
    return S && S.__esModule ? S : { default: S };
  }
  function h(S) {
    if (typeof WeakMap != "function")
      return null;
    var m = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap();
    return (h = function(s) {
      return s ? b : m;
    })(S);
  }
  function g(S, m) {
    if (!m && S && S.__esModule)
      return S;
    if (S === null || typeof S != "object" && typeof S != "function")
      return { default: S };
    var b = h(m);
    if (b && b.has(S))
      return b.get(S);
    var s = {}, k = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var w in S)
      if (w !== "default" && Object.prototype.hasOwnProperty.call(S, w)) {
        var Y = k ? Object.getOwnPropertyDescriptor(S, w) : null;
        Y && (Y.get || Y.set) ? Object.defineProperty(s, w, Y) : s[w] = S[w];
      }
    return s.default = S, b && b.set(S, s), s;
  }
  function L() {
    return L = Object.assign ? Object.assign.bind() : function(S) {
      for (var m = 1; m < arguments.length; m++) {
        var b = arguments[m];
        for (var s in b)
          Object.prototype.hasOwnProperty.call(b, s) && (S[s] = b[s]);
      }
      return S;
    }, L.apply(this, arguments);
  }
  function R(S, m, b) {
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
        prevPropsPosition: k
      } = b;
      return s && (!k || s.x !== k.x || s.y !== k.y) ? ((0, p.default)("Draggable: getDerivedStateFromProps %j", {
        position: s,
        prevPropsPosition: k
      }), {
        x: s.x,
        y: s.y,
        prevPropsPosition: {
          ...s
        }
      }) : null;
    }
    constructor(m) {
      super(m), R(this, "onDragStart", (b, s) => {
        if ((0, p.default)("Draggable: onDragStart: %j", s), this.props.onStart(b, (0, c.createDraggableData)(this, s)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), R(this, "onDrag", (b, s) => {
        if (!this.state.dragging)
          return !1;
        (0, p.default)("Draggable: onDrag: %j", s);
        const k = (0, c.createDraggableData)(this, s), w = {
          x: k.x,
          y: k.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: z,
            y: U
          } = w;
          w.x += this.state.slackX, w.y += this.state.slackY;
          const [G, D] = (0, c.getBoundPosition)(this, w.x, w.y);
          w.x = G, w.y = D, w.slackX = this.state.slackX + (z - w.x), w.slackY = this.state.slackY + (U - w.y), k.x = w.x, k.y = w.y, k.deltaX = w.x - this.state.x, k.deltaY = w.y - this.state.y;
        }
        if (this.props.onDrag(b, k) === !1)
          return !1;
        this.setState(w);
      }), R(this, "onDragStop", (b, s) => {
        if (!this.state.dragging || this.props.onStop(b, (0, c.createDraggableData)(this, s)) === !1)
          return !1;
        (0, p.default)("Draggable: onDragStop: %j", s);
        const w = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: z,
            y: U
          } = this.props.position;
          w.x = z, w.y = U;
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
        defaultPosition: k,
        defaultClassName: w,
        defaultClassNameDragging: Y,
        defaultClassNameDragged: z,
        position: U,
        positionOffset: G,
        scale: D,
        ...Q
      } = this.props;
      let F = {}, j = null;
      const O = !!!U || this.state.dragging, H = U || k, J = {
        // Set left if horizontal drag is enabled
        x: (0, c.canDragX)(this) && O ? this.state.x : H.x,
        // Set top if vertical drag is enabled
        y: (0, c.canDragY)(this) && O ? this.state.y : H.y
      };
      this.state.isElementSVG ? j = (0, o.createSVGTransform)(J, G) : F = (0, o.createCSSTransform)(J, G);
      const u = (0, a.default)(s.props.className || "", w, {
        [Y]: this.state.dragging,
        [z]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(d.default, L({}, Q, {
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
  e.default = W, R(W, "displayName", "Draggable"), R(W, "propTypes", {
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
  }), R(W, "defaultProps", {
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
  DraggableCore: In
} = qt;
Fe.exports = Zt;
Fe.exports.default = Zt;
Fe.exports.DraggableCore = In;
var $n = Fe.exports;
const Yn = /* @__PURE__ */ Mr($n);
const jn = (e) => {
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
}, qn = le(function(t, r) {
  const { formLayout: n, context: a } = t, { formData: o } = a, c = ie({}), l = jn(t), d = "palmyra-form-field-data", p = wt(() => (f) => Lt(f, c, f.label), [o.data]);
  return /* @__PURE__ */ i("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: n.fields.map((f, h) => /* @__PURE__ */ i("div", { className: l, children: /* @__PURE__ */ i("div", { className: d, children: p(f) }) }, f.attribute)) });
});
function Vn(e) {
  return /* @__PURE__ */ i(
    Yn,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ i(hr, { ...e })
    }
  );
}
const Wn = ({ columns: e, isOpen: t, onClose: r, setFilter: n, defaultFilter: a = {} }) => {
  var { getFieldManager: o, getFormData: c } = Ft(a, () => {
  }, "edit");
  const l = () => {
    n({});
  }, d = () => {
    var g = c();
    n && n(g);
  }, p = () => {
    r();
  }, f = (g) => {
    g.keyCode === 27 && p();
  }, h = _r(e);
  return /* @__PURE__ */ i("div", { className: "grid-filter-container", children: /* @__PURE__ */ i(
    pr,
    {
      open: t,
      onClose: p,
      PaperComponent: Vn,
      onKeyDown: f,
      children: /* @__PURE__ */ i(Dt, { onClickAway: r, children: /* @__PURE__ */ K("div", { children: [
        /* @__PURE__ */ K("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ i("div", { className: "grid-header-text-container", children: /* @__PURE__ */ i("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ i("div", { className: "grid-header-icon-container", onClick: p, children: /* @__PURE__ */ i(xr, { className: "filter-cancel-icon" }) })
        ] }),
        /* @__PURE__ */ i("span", { className: "filter-header-border" }),
        /* @__PURE__ */ i("div", { className: "grid-filter-content", children: /* @__PURE__ */ i(Ne.Provider, { value: o, children: /* @__PURE__ */ i(
          It,
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
              Renderer: qn
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
}, zn = le(function(t, r) {
  const { columns: n, children: a, EmptyChild: o, onRowClick: c, quickSearch: l } = t, d = o || wr, p = t.customizer || Rr, [f, h] = ee(!1), [g, L] = ee("standard"), [R, x] = ee(!1), [$, W] = ee(""), {
    setQueryFilter: S,
    setQuickSearch: m,
    setSortColumns: b,
    gotoPage: s,
    setPageSize: k,
    getPageNo: w,
    refreshData: Y,
    data: z,
    totalRecords: U,
    pageSizeOptions: G,
    filter: D,
    queryLimit: Q
  } = Me(t), F = r || ie(null);
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
  }, X = Pr(n, p), O = (C) => {
    L(C);
  }, H = () => {
    h(!f);
  }, J = () => g === "compact" ? { padding: "3px" } : g === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, u = () => g === "compact" ? { padding: "3px" } : g === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, v = () => {
    var C;
    switch (g) {
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
    k(M);
  }, I = () => {
    console.info("Export Clicked");
  }, E = 200, N = !!t.pageSize;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ K("div", { children: [
    a,
    /* @__PURE__ */ K("div", { className: "grid-header", children: [
      /* @__PURE__ */ i("div", { className: "grid-header-filter", children: !!l && /* @__PURE__ */ i(
        Ge,
        {
          sx: { width: E },
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
        h(!1);
      }, children: /* @__PURE__ */ K("div", { className: "grid-header-button", onClick: H, children: [
        /* @__PURE__ */ i(xe, { title: "Density", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: v() }) }),
        f && /* @__PURE__ */ i("div", { className: "density-dropdown-content", children: /* @__PURE__ */ K("ul", { children: [
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
        /* @__PURE__ */ i(xe, { title: "Filter", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, onClick: () => x(!0), children: /* @__PURE__ */ i(Dr, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ i(
          Wn,
          {
            columns: n,
            setFilter: S,
            defaultFilter: D,
            isOpen: R,
            onClose: () => x(!1)
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: I, children: /* @__PURE__ */ i(xe, { title: "Export", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Or, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ i(xe, { title: "New", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Er, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ i(we, {})
    ] }),
    /* @__PURE__ */ i("div", { className: "grid-table", children: /* @__PURE__ */ i(
      Tr,
      {
        columnDefs: X,
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
        count: U || 0,
        page: w(),
        onPageChange: j,
        rowsPerPage: Q.limit,
        rowsPerPageOptions: G || [],
        onRowsPerPageChange: T
      }
    ) }) })
  ] }) });
}), ra = le(function(t, r) {
  const { columns: n, endPoint: a, storeFactory: o, layoutParams: c } = t, l = t.quickSearch || "", d = ie(null), p = (h, g) => {
    console.log(g);
  };
  ge(() => {
    var h = it.subscribe(t.topic, p);
    return () => {
      it.unsubscribe(h);
    };
  }, [t.topic]), r && ve(r, () => ({
    setFilter: (h) => {
      d.current.setFilter(h);
    },
    refresh: () => {
      d.current.refresh();
    }
  }), [n, a]);
  const f = {
    fields: n,
    quickSearch: l,
    storeOptions: {
      endPoint: a
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ i(we, { children: /* @__PURE__ */ i(Ue.Provider, { value: o, children: /* @__PURE__ */ i(er, { layout: f, context: c, customizer: t.customizer, ref: d }) }) });
}), Xn = le(function(t, r) {
  const n = t.layout, [a, o] = ee(n.fields), c = n.pagination ? n.pagination : [15], l = Ee(Ue), d = Ee(Pt);
  var p = n.storeOptions || {}, f = {};
  br(f, p, d);
  const h = l.getGridStore(f, n.storeOptions.endPoint);
  ge(() => {
    p.hasLayout && h.queryLayout({}).then((R) => {
      o(R.columns);
    });
  }, []);
  const { onClick: g, onNewClick: L } = Fr(n.actionOptions, d);
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    zn,
    {
      columns: a,
      store: h,
      pageSize: c,
      onRowClick: g,
      onNewClick: L,
      customizer: t.customizer,
      quickSearch: n.quickSearch,
      ref: r
    }
  ) });
}), er = Xn, Bn = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Container || Mt;
  return /* @__PURE__ */ i(kt, { fallback: /* @__PURE__ */ i("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ i(n, { ...t, children: ((o) => /* @__PURE__ */ i(
    er,
    {
      context: r,
      layout: o
    }
  ))(t.tableLayout) }) });
}, Un = (e) => {
  const { layout: t } = e;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ i(It, { ...e });
    case "view":
      return /* @__PURE__ */ i(kr, { ...e });
    case "grid":
      return /* @__PURE__ */ i(Bn, { ...e });
    case "chart":
      return /* @__PURE__ */ i(yr, { ...e });
    default:
      return /* @__PURE__ */ i(Ar, { ...e });
  }
};
function Gn(e, t) {
  var r = e || 1, n = t;
  return {
    w: r,
    h: n
  };
}
const tr = (e) => {
  const { layout: t, context: r } = e, n = t.sections;
  function a(o, c, l) {
    const { w: d, h: p } = Gn(o.width, o.height);
    return /* @__PURE__ */ i(mr, { sx: { width: d, height: p }, children: /* @__PURE__ */ i(
      Un,
      {
        layout: o,
        context: c
      }
    ) }, (o.name || "tab") + l);
  }
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap" }, children: n.map((o, c) => a(o, r, c)) });
}, St = le(function(t, r) {
  const { layout: n } = t;
  ve(r, () => ({
    resetFilter() {
    }
  }), []);
  const a = {}, o = n.tabs;
  return /* @__PURE__ */ i("div", { children: o.map((c, l) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    tr,
    {
      layout: c,
      context: a
    }
  ) }, c.name + l)) });
}), Hn = (e) => {
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
  var f;
  const n = t.data || {}, { layout: a } = t;
  var { getFieldManager: o, getFormData: c, isFormValid: l } = Ft(n, (f = t.callbacks) == null ? void 0 : f.onFormValidChange, Hn(t.mode));
  ve(r, () => ({
    getData() {
      return c();
    },
    isValid() {
      return l();
    }
  }), []);
  const d = { formData: n }, p = a.tabs;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(Ne.Provider, { value: o, children: p.map((h, g) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    tr,
    {
      layout: h,
      context: d
    }
  ) }, h.name + g)) }) });
}), Kn = (e) => {
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
}, na = le(function(t, r) {
  const [n, a] = ee(t.layout), o = t.mode ? t.mode : n.type ? n.type : "grid", c = t.layoutParams || {}, l = Kn(o), d = ie(0);
  return ge(() => {
    a(t.layout), d.current < 999999 ? d.current++ : d.current = 0;
  }, [t.layout]), /* @__PURE__ */ i(kt, { fallback: /* @__PURE__ */ i("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ i(Ue.Provider, { value: t.storeFactory, children: /* @__PURE__ */ i(Pt.Provider, { value: c, children: /* @__PURE__ */ i(l, { ...t, ref: (p) => {
    r && (r.current = p);
  } }, d.current) }) }) });
}), oa = le(function(t, r) {
  const { children: n, Child: a, childProps: o, pageSize: c } = t, l = r || ie(null), {
    setQueryFilter: d,
    refreshData: p,
    setQuickSearch: f,
    gotoPage: h,
    setPageSize: g,
    getPageNo: L,
    data: R,
    pageSizeOptions: x,
    queryLimit: $
  } = Me(t), W = t.listKeyProvider || ((Y, z) => z);
  ve(l, () => ({
    setFilter(Y) {
      d(Y);
    },
    refresh: () => {
      p();
    },
    gotoPage(Y) {
      h(Y);
    },
    nextPage() {
    },
    prevPage() {
    }
  }), []);
  const S = (Y, z) => {
    h(z);
  }, m = (Y) => {
    const z = Y.target.value;
    f(z);
  }, b = (Y) => {
    const z = parseInt(Y.target.value, 10);
    g(z);
  }, s = 200, k = !!c, w = !!t.quickSearch;
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
        /* @__PURE__ */ i("div", { className: "card-pagination", children: k && /* @__PURE__ */ i(
          Et,
          {
            component: "div",
            count: R,
            page: L(),
            onPageChange: S,
            rowsPerPage: $.limit,
            rowsPerPageOptions: x || [],
            onRowsPerPageChange: b
          }
        ) })
      ] }),
      /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
        gr,
        {
          Child: a,
          childKeyProvider: W,
          dataList: R,
          childProps: o,
          EmptyChild: t.EmptyChild
        }
      ) })
    ] })
  ] }) });
});
export {
  na as F,
  er as G,
  ea as M,
  ra as P,
  oa as S,
  tr as T,
  zn as a,
  $r as b,
  Me as c,
  qr as d,
  It as e,
  qn as f,
  Lt as g,
  Wn as h,
  Bn as i,
  Un as j,
  St as k,
  Ct as l,
  Ir as u
};
