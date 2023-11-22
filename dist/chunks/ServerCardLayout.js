import "../assets/ServerCardLayout.css";
import er from "../palmyra/mui/form/MuiDatePicker.js";
import tr from "../palmyra/mui/form/MuiDateTimePicker.js";
import rr from "../palmyra/mui/form/MuiRadioGroup.js";
import nr from "../palmyra/mui/form/MuiSelect.js";
import or from "../palmyra/mui/form/MuiTextArea.js";
import ar from "../palmyra/mui/form/MuiTextField.js";
import ir from "../palmyra/mui/form/MuiCheckBox.js";
import sr from "../palmyra/mui/form/MuiSwitch.js";
import cr from "../palmyra/mui/form/MuiPassword.js";
import { FieldManagerContext as Ne, StoreFactoryContext as Ue, LayoutParamsContext as Tt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as i, jsxs as H, Fragment as Te } from "react/jsx-runtime";
import pe, { useState as te, useEffect as ye, forwardRef as se, useContext as Oe, useRef as ae, useImperativeHandle as ve, useMemo as Ge } from "react";
import { FormControl as xt, FormControlLabel as lr, Checkbox as ur, FormHelperText as Dt, InputLabel as dr, Select as fr, ListSubheader as pr, TextField as He, InputAdornment as Ke, MenuItem as hr, Dialog as mr, Tooltip as we, Button as Se, Paper as gr, ClickAwayListener as yr, TablePagination as Et, Box as vr } from "@mui/material";
import br from "../palmyra/layout/card/CardLayout.js";
import Sr from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Ot } from "../palmyra/mui/form/MuiUtil.js";
import Rt from "../palmyra/mui/form/FieldDecorator.js";
import { hasDot as Re } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as _e, setValueByKey as rt } from "../palmyra/form/FormUtil.js";
import { delay as Cr, mergeDeep as Pr } from "../palmyra/utils/index.js";
import { m as wr, p as Tr } from "./index.js";
import { Search as xr, DeleteOutlined as Dr, Close as Er, Menu as nt, DensitySmall as ot, DensityLarge as at, FilterAlt as Or, FileDownloadOutlined as Rr, Add as _r } from "@mui/icons-material";
import _t from "../palmyra/layout/container/SectionContainer.js";
import Nr from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as Mr } from "../palmyra/grid/base/ColumnConverter.js";
import Fr from "../palmyra/grid/base/EmptyChildTable.js";
import kr from "../palmyra/grid/base/TableX.js";
import { NoopCustomizer as Ar } from "../palmyra/grid/Types.js";
import { convertToField as Lr } from "../palmyra/grid/base/GridFieldConverter.js";
import { d as Nt } from "./PalmyraFormManager.js";
import "../palmyra/form/PalmyraForm.js";
import { a as Ir, g as $r } from "./_commonjsHelpers.js";
import Mt from "react-dom";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import { topic as it } from "../palmyra/utils/pubsub/topic.js";
import "dayjs";
import { getActionPublishers as Yr } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as Ft } from "../palmyra/layout/ErrorBoundary.js";
import Wr from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import jr from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { useKeyValue as qr } from "../palmyra/utils/pubsub/PubSubHelper.js";
const Me = (e) => {
  const { store: t, quickSearch: r, endPointVars: n } = e, o = e.fetchAll != !1, [a, l] = te(null), [u, d] = e.filterTopic ? qr(e.filterTopic, {}) : te({}), [p, f] = te({}), h = e.pageSize ? e.pageSize : 15;
  var S = h instanceof Array ? h : [h], w = h instanceof Array ? h[0] : h;
  const [T, D] = te({ limit: w, offset: 0 }), [Y, $] = te(null), b = () => Math.round(T.offset / T.limit), m = () => T.limit, v = (q) => {
    D({ ...T, offset: q * w });
  }, s = (q) => {
    const z = q > 10 || q == -1 ? q : 15;
    D({ ...T, limit: z });
  }, _ = () => u ? Object.keys(u).length == 0 : !1;
  ye(() => {
    (o || !_()) && C();
  }, [T, u, p]);
  const C = () => {
    const q = { filter: u, sortOrder: p, total: !0, endPointVars: n, ...T };
    if (t)
      try {
        t.query(q).then((z) => {
          $(z.result), l(z.total);
        }).catch((z) => {
          var O = z.response ? z.response : z;
          console.error("error while fetching", O), x();
        });
      } catch (z) {
        console.error(z), L();
      }
    else
      console.error("Store is not provided for the Grid"), L();
  }, L = () => {
    $([]), l(0);
  }, x = () => {
    $(void 0), l(null);
  };
  return {
    setQueryFilter: (q) => {
      typeof q == "function" || q && Object.keys(q).length > 0 ? d(q) : d({});
    },
    setQuickSearch: (q) => {
      const z = r;
      d(q ? (O) => (O[z] = q, { ...O }) : (O) => (delete O[z], { ...O }));
    },
    setSortColumns: (q) => {
      f(q);
    },
    refreshData: C,
    gotoPage: v,
    setPageSize: s,
    getPageNo: b,
    getLimit: m,
    filter: u,
    queryLimit: T,
    data: Y,
    totalRecords: a,
    pageSizeOptions: S
  };
};
function st(e) {
  return e ? Array.isArray(e) ? e : typeof e == "string" ? e.split(",") : (console.log(e), [e]) : [];
}
const Ko = se(function(t, r) {
  const n = Oe(Ne), o = r || ae(null), a = n(t, "checkbox", o), { mutateOptions: l, setMutateOptions: u } = a, d = st(a.data), p = a.error, f = a.eventListeners, S = { store: a.store, pageSize: -1 }, { data: w } = Me(S), T = w, D = ae(null), Y = t.lookupOptions || {}, $ = Y.idAttribute || "id", b = Y.titleAttribute || "name", m = Re($) ? (x) => _e($, x) : (x) => x[$], v = Re(b) ? (x) => _e(b, x) : (x) => x[b];
  ve(o, () => ({
    focus() {
      D.current.focus();
    },
    isValid() {
      return !p.status;
    },
    assignAttribute(x) {
      D.current.assignAttribute(x);
    },
    clear() {
      a.setData("");
    },
    setValue(x) {
      a.setData(x);
    },
    setVisible(x) {
      u({ visible: x });
    }
  }), []);
  var s = Ot(t, a.data, t.label);
  t.readonly && (s.inputProps = { readOnly: !0 });
  function _(x, B) {
    const U = st(a.data);
    var Q = U.indexOf(x);
    B ? Q < 0 && U.push(x) : Q >= 0 && U.splice(Q, 1), f.onValueChange(U.toString());
  }
  var C = {
    onBlur: f.onBlur,
    onFocus: f.onFocus,
    onChange: (x) => {
      _(x.target.value, x.target.checked);
    }
  };
  const L = (x) => {
    const B = x.toString();
    return d.includes(B);
  };
  return /* @__PURE__ */ i("div", { className: t.className, children: l.visible && /* @__PURE__ */ i(
    Rt,
    {
      label: t.title,
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ H(
        xt,
        {
          className: "MuiServerCheckBoxFormControl",
          fullWidth: !0,
          error: p.status,
          ...s,
          children: [
            T ? T.map((x) => /* @__PURE__ */ i(
              lr,
              {
                value: m(x),
                control: /* @__PURE__ */ i(
                  ur,
                  {
                    ...C,
                    checked: L(m(x)),
                    disabled: t.readonly
                  }
                ),
                label: v(x)
              },
              m(x)
            )) : /* @__PURE__ */ i("div", { children: "No options provided" }),
            /* @__PURE__ */ i(Dt, { className: "form-error-text", children: p.message })
          ]
        }
      )
    }
  ) });
}), ct = (e, t) => {
  if (!e)
    return;
  const r = wr(e, t, { insideWords: !0 }), n = Tr(e, r);
  return /* @__PURE__ */ i("div", { children: n.map((o, a) => /* @__PURE__ */ i(
    "span",
    {
      style: {
        fontWeight: o.highlight ? 700 : 400
      },
      children: o.text
    },
    a
  )) });
}, zr = (e, t, r) => {
  const n = e.store || r.store, o = e.lookupOptions || {}, a = o.idAttribute || "id", l = o.titleAttribute || "name", u = o.searchAttribute || l, d = r.data, p = ae(0), f = ae(null), [h, S] = te(r.displayValue), [w, T] = te([]), [D, Y] = te(""), $ = {
    store: n,
    endPointVars: e.storeOptions.endPointVars,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: u
  }, b = Me($), {
    setQueryFilter: m,
    setQuickSearch: v,
    filter: s,
    totalRecords: _
  } = b, C = b.data, L = Re(a) ? (O) => _e(a, O) : (O) => O[a], x = Re(l) ? (O) => _e(l, O) : (O) => O[l];
  function B() {
    if (d) {
      var O = {};
      rt(a, O, d);
      const V = r.displayValue || d;
      return rt(l, O, V), O;
    }
  }
  ye(() => {
    S(r.displayValue);
  }, [r.displayValue]), Ge(() => {
    var O = B();
    O && (T([O]), f.current = O);
  }, [h]), ye(() => {
    const O = C ? [...C] : [], V = f.current;
    O && V && !U(C, L(V)) && O.unshift(V), T(O), p.current < _ && (p.current = _);
  }, [C, _]);
  function U(O, V) {
    return O.find((G) => {
      if (L(G) === V)
        return G;
    });
  }
  ye(() => {
    Cr(q);
  }, [D]);
  const Q = () => p.current > 2;
  function q() {
    D.length > 0 ? v("*" + D + "*") : v("");
  }
  return {
    getSelectedOption: B,
    filter: s,
    labelAccessor: x,
    idAccessor: L,
    renderOption: ct,
    getServerLookup: (O) => {
      var V = Ot(e, r.data, e.label);
      const G = r.eventListeners, oe = r.error;
      t.readonly && (V.inputProps = { readOnly: !0 });
      var ce = {
        onBlur: G.onBlur,
        onFocus: G.onFocus,
        onChange: (c) => G.onValueChange(c.target.value)
      };
      return /* @__PURE__ */ i(
        Rt,
        {
          label: e.title,
          customContainerClass: e.customContainerClass,
          colspan: e.colspan,
          customFieldClass: e.customFieldClass,
          customLabelClass: e.customLabelClass,
          children: /* @__PURE__ */ H(xt, { fullWidth: !0, error: oe.status, children: [
            e.label ? /* @__PURE__ */ i(dr, { children: e.label }) : /* @__PURE__ */ i(Te, {}),
            /* @__PURE__ */ H(
              fr,
              {
                ref: O,
                ...V,
                MenuProps: { autoFocus: !1 },
                value: d,
                onOpen: (c) => {
                  q();
                },
                ...ce,
                children: [
                  Q() ? /* @__PURE__ */ H(pr, { children: [
                    /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
                      He,
                      {
                        size: "small",
                        value: D,
                        autoFocus: !0,
                        placeholder: "Type to search...",
                        fullWidth: !0,
                        InputProps: {
                          startAdornment: /* @__PURE__ */ i(Ke, { position: "start", children: /* @__PURE__ */ i(xr, {}) })
                        },
                        onChange: (c) => Y(c.target.value),
                        onKeyDown: (c) => {
                          c.key !== "Escape" && c.stopPropagation();
                        }
                      }
                    ) }),
                    e.required ? /* @__PURE__ */ i(Te, {}) : /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i("span", { children: /* @__PURE__ */ i(Dr, {}) }) })
                  ] }) : /* @__PURE__ */ i("div", {}),
                  w.map((c, y) => /* @__PURE__ */ i(hr, { value: L(c), children: ct(x(c), D) }, L(c) || y))
                ]
              }
            ),
            /* @__PURE__ */ i(Dt, { className: "form-error-text", children: oe.message })
          ] })
        }
      );
    },
    setQueryFilter: m,
    searchText: D,
    setSearchText: Y,
    refreshOptions: q
  };
}, Vr = se(function(t, r) {
  const n = Oe(Ne), o = r || ae(null), a = n(t, "serverlookup", o), l = a.error, { mutateOptions: u, setMutateOptions: d } = a, p = ae(null), { getServerLookup: f, setQueryFilter: h } = zr(t, u, a);
  return ve(o, () => ({
    focus() {
      p.current.focus();
    },
    isValid() {
      return !l.status;
    },
    clear() {
      a.setData("");
    },
    getValue() {
      return null;
    },
    setValue(S) {
      a.setData(S);
    },
    setRequired(S) {
    },
    setReadOnly(S) {
    },
    setVisible(S) {
      d({ visible: S });
    },
    setAttribute(S) {
    },
    setFilter(S) {
      h(S);
    },
    resetFilter() {
    },
    addFilter(S, w) {
      h((T) => (T[S] = w, { ...T }));
    },
    setDefaultFilter(S) {
    }
  }), []), f(p);
}), Xr = (e) => {
  const { fieldDef: t } = e;
  return /* @__PURE__ */ H("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, ue = (e, t) => {
  const r = e.fieldDef;
  return /* @__PURE__ */ i(
    t,
    {
      ...r,
      label: e.title
    }
  );
}, lt = () => /* @__PURE__ */ i("div", { children: "To be Implemented" }), kt = (e, t, r) => {
  const { type: n } = e, o = { fieldDef: e, title: r };
  switch (n) {
    case "string":
      return ue(o, ar);
    case "radio":
      return ue(o, rr);
    case "select":
      return ue(o, nr);
    case "date":
      return ue(o, er);
    case "datetime":
      return ue(o, tr);
    case "checkbox":
      return ue(o, ir);
    case "serverlookup":
      return ue(o, Vr);
    case "textarea":
      return ue(o, or);
    case "switch":
      return ue(o, sr);
    case "password":
      return ue(o, cr);
    case "multiSelect":
      return lt();
    case "dateRange":
      return lt();
    default:
      return Xr(o);
  }
}, Br = se(function(t, r) {
  var f;
  const { formLayout: n, context: o } = t, { formData: a } = o, l = n.Container;
  ae({});
  const u = Ge(() => (h) => kt(h), [a.data]);
  var d = ((f = n.options) == null ? void 0 : f.columns) || 1, p = { columns: d };
  return l ? /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((h, S) => /* @__PURE__ */ i(
    l,
    {
      index: S,
      field: h,
      label: h.title,
      options: p,
      children: u(h)
    },
    h.attribute
  )) }) : /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((h, S) => /* @__PURE__ */ i(Te, { children: u(h) })) });
}), At = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Renderer || Br, o = t.Container || _t;
  const a = (l) => /* @__PURE__ */ i(
    n,
    {
      context: r,
      formLayout: l
    }
  );
  return /* @__PURE__ */ i(
    o,
    {
      hideTitle: t.hideTitle,
      title: t.title,
      name: t.name,
      children: /* @__PURE__ */ i(Nr, { columns: t.columns, children: a(t.formLayout) })
    }
  );
};
var Lt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ut = pe.createContext && pe.createContext(Lt), ge = globalThis && globalThis.__assign || function() {
  return ge = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ge.apply(this, arguments);
}, Ur = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function It(e) {
  return e && e.map(function(t, r) {
    return pe.createElement(t.tag, ge({
      key: r
    }, t.attr), It(t.child));
  });
}
function Gr(e) {
  return function(t) {
    return pe.createElement(Hr, ge({
      attr: ge({}, e.attr)
    }, t), It(e.child));
  };
}
function Hr(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, a = e.title, l = Ur(e, ["attr", "size", "title"]), u = o || r.size || "1em", d;
    return r.className && (d = r.className), e.className && (d = (d ? d + " " : "") + e.className), pe.createElement("svg", ge({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, l, {
      className: d,
      style: ge(ge({
        color: e.color || r.color
      }, r.style), e.style),
      height: u,
      width: u,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && pe.createElement("title", null, a), e.children);
  };
  return ut !== void 0 ? pe.createElement(ut.Consumer, null, function(r) {
    return t(r);
  }) : t(Lt);
}
function $t(e) {
  return Gr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
}
var Fe = { exports: {} }, Yt = {}, Be = { exports: {} }, De = { exports: {} }, W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Kr() {
  if (dt)
    return W;
  dt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, D = e ? Symbol.for("react.block") : 60121, Y = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function m(s) {
    if (typeof s == "object" && s !== null) {
      var _ = s.$$typeof;
      switch (_) {
        case t:
          switch (s = s.type, s) {
            case d:
            case p:
            case n:
            case a:
            case o:
            case h:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case u:
                case f:
                case T:
                case w:
                case l:
                  return s;
                default:
                  return _;
              }
          }
        case r:
          return _;
      }
    }
  }
  function v(s) {
    return m(s) === p;
  }
  return W.AsyncMode = d, W.ConcurrentMode = p, W.ContextConsumer = u, W.ContextProvider = l, W.Element = t, W.ForwardRef = f, W.Fragment = n, W.Lazy = T, W.Memo = w, W.Portal = r, W.Profiler = a, W.StrictMode = o, W.Suspense = h, W.isAsyncMode = function(s) {
    return v(s) || m(s) === d;
  }, W.isConcurrentMode = v, W.isContextConsumer = function(s) {
    return m(s) === u;
  }, W.isContextProvider = function(s) {
    return m(s) === l;
  }, W.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === t;
  }, W.isForwardRef = function(s) {
    return m(s) === f;
  }, W.isFragment = function(s) {
    return m(s) === n;
  }, W.isLazy = function(s) {
    return m(s) === T;
  }, W.isMemo = function(s) {
    return m(s) === w;
  }, W.isPortal = function(s) {
    return m(s) === r;
  }, W.isProfiler = function(s) {
    return m(s) === a;
  }, W.isStrictMode = function(s) {
    return m(s) === o;
  }, W.isSuspense = function(s) {
    return m(s) === h;
  }, W.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === p || s === a || s === o || s === h || s === S || typeof s == "object" && s !== null && (s.$$typeof === T || s.$$typeof === w || s.$$typeof === l || s.$$typeof === u || s.$$typeof === f || s.$$typeof === Y || s.$$typeof === $ || s.$$typeof === b || s.$$typeof === D);
  }, W.typeOf = m, W;
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
var ft;
function Qr() {
  return ft || (ft = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, D = e ? Symbol.for("react.block") : 60121, Y = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function m(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === p || g === a || g === o || g === h || g === S || typeof g == "object" && g !== null && (g.$$typeof === T || g.$$typeof === w || g.$$typeof === l || g.$$typeof === u || g.$$typeof === f || g.$$typeof === Y || g.$$typeof === $ || g.$$typeof === b || g.$$typeof === D);
    }
    function v(g) {
      if (typeof g == "object" && g !== null) {
        var le = g.$$typeof;
        switch (le) {
          case t:
            var xe = g.type;
            switch (xe) {
              case d:
              case p:
              case n:
              case a:
              case o:
              case h:
                return xe;
              default:
                var tt = xe && xe.$$typeof;
                switch (tt) {
                  case u:
                  case f:
                  case T:
                  case w:
                  case l:
                    return tt;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var s = d, _ = p, C = u, L = l, x = t, B = f, U = n, Q = T, q = w, z = r, O = a, V = o, G = h, oe = !1;
    function ce(g) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), c(g) || v(g) === d;
    }
    function c(g) {
      return v(g) === p;
    }
    function y(g) {
      return v(g) === u;
    }
    function M(g) {
      return v(g) === l;
    }
    function N(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function E(g) {
      return v(g) === f;
    }
    function A(g) {
      return v(g) === n;
    }
    function R(g) {
      return v(g) === T;
    }
    function F(g) {
      return v(g) === w;
    }
    function P(g) {
      return v(g) === r;
    }
    function k(g) {
      return v(g) === a;
    }
    function I(g) {
      return v(g) === o;
    }
    function Z(g) {
      return v(g) === h;
    }
    j.AsyncMode = s, j.ConcurrentMode = _, j.ContextConsumer = C, j.ContextProvider = L, j.Element = x, j.ForwardRef = B, j.Fragment = U, j.Lazy = Q, j.Memo = q, j.Portal = z, j.Profiler = O, j.StrictMode = V, j.Suspense = G, j.isAsyncMode = ce, j.isConcurrentMode = c, j.isContextConsumer = y, j.isContextProvider = M, j.isElement = N, j.isForwardRef = E, j.isFragment = A, j.isLazy = R, j.isMemo = F, j.isPortal = P, j.isProfiler = k, j.isStrictMode = I, j.isSuspense = Z, j.isValidElementType = m, j.typeOf = v;
  }()), j;
}
var pt;
function Wt() {
  return pt || (pt = 1, process.env.NODE_ENV === "production" ? De.exports = Kr() : De.exports = Qr()), De.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ie, ht;
function Jr() {
  if (ht)
    return Ie;
  ht = 1;
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
      for (var l = {}, u = 0; u < 10; u++)
        l["_" + String.fromCharCode(u)] = u;
      var d = Object.getOwnPropertyNames(l).map(function(f) {
        return l[f];
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
  return Ie = o() ? Object.assign : function(a, l) {
    for (var u, d = n(a), p, f = 1; f < arguments.length; f++) {
      u = Object(arguments[f]);
      for (var h in u)
        t.call(u, h) && (d[h] = u[h]);
      if (e) {
        p = e(u);
        for (var S = 0; S < p.length; S++)
          r.call(u, p[S]) && (d[p[S]] = u[p[S]]);
      }
    }
    return d;
  }, Ie;
}
var $e, mt;
function Qe() {
  if (mt)
    return $e;
  mt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return $e = e, $e;
}
var Ye, gt;
function jt() {
  return gt || (gt = 1, Ye = Function.call.bind(Object.prototype.hasOwnProperty)), Ye;
}
var We, yt;
function Zr() {
  if (yt)
    return We;
  yt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Qe(), r = {}, n = jt();
    e = function(a) {
      var l = "Warning: " + a;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function o(a, l, u, d, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (n(a, f)) {
          var h;
          try {
            if (typeof a[f] != "function") {
              var S = Error(
                (d || "React class") + ": " + u + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw S.name = "Invariant Violation", S;
            }
            h = a[f](l, f, d, u, null, t);
          } catch (T) {
            h = T;
          }
          if (h && !(h instanceof Error) && e(
            (d || "React class") + ": type specification of " + u + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var w = p ? p() : "";
            e(
              "Failed " + u + " type: " + h.message + (w ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, We = o, We;
}
var je, vt;
function en() {
  if (vt)
    return je;
  vt = 1;
  var e = Wt(), t = Jr(), r = Qe(), n = jt(), o = Zr(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(u) {
    var d = "Warning: " + u;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return je = function(u, d) {
    var p = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function h(c) {
      var y = c && (p && c[p] || c[f]);
      if (typeof y == "function")
        return y;
    }
    var S = "<<anonymous>>", w = {
      array: $("array"),
      bigint: $("bigint"),
      bool: $("boolean"),
      func: $("function"),
      number: $("number"),
      object: $("object"),
      string: $("string"),
      symbol: $("symbol"),
      any: b(),
      arrayOf: m,
      element: v(),
      elementType: s(),
      instanceOf: _,
      node: B(),
      objectOf: L,
      oneOf: C,
      oneOfType: x,
      shape: Q,
      exact: q
    };
    function T(c, y) {
      return c === y ? c !== 0 || 1 / c === 1 / y : c !== c && y !== y;
    }
    function D(c, y) {
      this.message = c, this.data = y && typeof y == "object" ? y : {}, this.stack = "";
    }
    D.prototype = Error.prototype;
    function Y(c) {
      if (process.env.NODE_ENV !== "production")
        var y = {}, M = 0;
      function N(A, R, F, P, k, I, Z) {
        if (P = P || S, I = I || F, Z !== r) {
          if (d) {
            var g = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw g.name = "Invariant Violation", g;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = P + ":" + F;
            !y[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            M < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + I + "` prop on `" + P + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), y[le] = !0, M++);
          }
        }
        return R[F] == null ? A ? R[F] === null ? new D("The " + k + " `" + I + "` is marked as required " + ("in `" + P + "`, but its value is `null`.")) : new D("The " + k + " `" + I + "` is marked as required in " + ("`" + P + "`, but its value is `undefined`.")) : null : c(R, F, P, k, I);
      }
      var E = N.bind(null, !1);
      return E.isRequired = N.bind(null, !0), E;
    }
    function $(c) {
      function y(M, N, E, A, R, F) {
        var P = M[N], k = V(P);
        if (k !== c) {
          var I = G(P);
          return new D(
            "Invalid " + A + " `" + R + "` of type " + ("`" + I + "` supplied to `" + E + "`, expected ") + ("`" + c + "`."),
            { expectedType: c }
          );
        }
        return null;
      }
      return Y(y);
    }
    function b() {
      return Y(l);
    }
    function m(c) {
      function y(M, N, E, A, R) {
        if (typeof c != "function")
          return new D("Property `" + R + "` of component `" + E + "` has invalid PropType notation inside arrayOf.");
        var F = M[N];
        if (!Array.isArray(F)) {
          var P = V(F);
          return new D("Invalid " + A + " `" + R + "` of type " + ("`" + P + "` supplied to `" + E + "`, expected an array."));
        }
        for (var k = 0; k < F.length; k++) {
          var I = c(F, k, E, A, R + "[" + k + "]", r);
          if (I instanceof Error)
            return I;
        }
        return null;
      }
      return Y(y);
    }
    function v() {
      function c(y, M, N, E, A) {
        var R = y[M];
        if (!u(R)) {
          var F = V(R);
          return new D("Invalid " + E + " `" + A + "` of type " + ("`" + F + "` supplied to `" + N + "`, expected a single ReactElement."));
        }
        return null;
      }
      return Y(c);
    }
    function s() {
      function c(y, M, N, E, A) {
        var R = y[M];
        if (!e.isValidElementType(R)) {
          var F = V(R);
          return new D("Invalid " + E + " `" + A + "` of type " + ("`" + F + "` supplied to `" + N + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return Y(c);
    }
    function _(c) {
      function y(M, N, E, A, R) {
        if (!(M[N] instanceof c)) {
          var F = c.name || S, P = ce(M[N]);
          return new D("Invalid " + A + " `" + R + "` of type " + ("`" + P + "` supplied to `" + E + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return Y(y);
    }
    function C(c) {
      if (!Array.isArray(c))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), l;
      function y(M, N, E, A, R) {
        for (var F = M[N], P = 0; P < c.length; P++)
          if (T(F, c[P]))
            return null;
        var k = JSON.stringify(c, function(Z, g) {
          var le = G(g);
          return le === "symbol" ? String(g) : g;
        });
        return new D("Invalid " + A + " `" + R + "` of value `" + String(F) + "` " + ("supplied to `" + E + "`, expected one of " + k + "."));
      }
      return Y(y);
    }
    function L(c) {
      function y(M, N, E, A, R) {
        if (typeof c != "function")
          return new D("Property `" + R + "` of component `" + E + "` has invalid PropType notation inside objectOf.");
        var F = M[N], P = V(F);
        if (P !== "object")
          return new D("Invalid " + A + " `" + R + "` of type " + ("`" + P + "` supplied to `" + E + "`, expected an object."));
        for (var k in F)
          if (n(F, k)) {
            var I = c(F, k, E, A, R + "." + k, r);
            if (I instanceof Error)
              return I;
          }
        return null;
      }
      return Y(y);
    }
    function x(c) {
      if (!Array.isArray(c))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var y = 0; y < c.length; y++) {
        var M = c[y];
        if (typeof M != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(M) + " at index " + y + "."
          ), l;
      }
      function N(E, A, R, F, P) {
        for (var k = [], I = 0; I < c.length; I++) {
          var Z = c[I], g = Z(E, A, R, F, P, r);
          if (g == null)
            return null;
          g.data && n(g.data, "expectedType") && k.push(g.data.expectedType);
        }
        var le = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new D("Invalid " + F + " `" + P + "` supplied to " + ("`" + R + "`" + le + "."));
      }
      return Y(N);
    }
    function B() {
      function c(y, M, N, E, A) {
        return z(y[M]) ? null : new D("Invalid " + E + " `" + A + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
      }
      return Y(c);
    }
    function U(c, y, M, N, E) {
      return new D(
        (c || "React class") + ": " + y + " type `" + M + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + E + "`."
      );
    }
    function Q(c) {
      function y(M, N, E, A, R) {
        var F = M[N], P = V(F);
        if (P !== "object")
          return new D("Invalid " + A + " `" + R + "` of type `" + P + "` " + ("supplied to `" + E + "`, expected `object`."));
        for (var k in c) {
          var I = c[k];
          if (typeof I != "function")
            return U(E, A, R, k, G(I));
          var Z = I(F, k, E, A, R + "." + k, r);
          if (Z)
            return Z;
        }
        return null;
      }
      return Y(y);
    }
    function q(c) {
      function y(M, N, E, A, R) {
        var F = M[N], P = V(F);
        if (P !== "object")
          return new D("Invalid " + A + " `" + R + "` of type `" + P + "` " + ("supplied to `" + E + "`, expected `object`."));
        var k = t({}, M[N], c);
        for (var I in k) {
          var Z = c[I];
          if (n(c, I) && typeof Z != "function")
            return U(E, A, R, I, G(Z));
          if (!Z)
            return new D(
              "Invalid " + A + " `" + R + "` key `" + I + "` supplied to `" + E + "`.\nBad object: " + JSON.stringify(M[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(c), null, "  ")
            );
          var g = Z(F, I, E, A, R + "." + I, r);
          if (g)
            return g;
        }
        return null;
      }
      return Y(y);
    }
    function z(c) {
      switch (typeof c) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !c;
        case "object":
          if (Array.isArray(c))
            return c.every(z);
          if (c === null || u(c))
            return !0;
          var y = h(c);
          if (y) {
            var M = y.call(c), N;
            if (y !== c.entries) {
              for (; !(N = M.next()).done; )
                if (!z(N.value))
                  return !1;
            } else
              for (; !(N = M.next()).done; ) {
                var E = N.value;
                if (E && !z(E[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function O(c, y) {
      return c === "symbol" ? !0 : y ? y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && y instanceof Symbol : !1;
    }
    function V(c) {
      var y = typeof c;
      return Array.isArray(c) ? "array" : c instanceof RegExp ? "object" : O(y, c) ? "symbol" : y;
    }
    function G(c) {
      if (typeof c > "u" || c === null)
        return "" + c;
      var y = V(c);
      if (y === "object") {
        if (c instanceof Date)
          return "date";
        if (c instanceof RegExp)
          return "regexp";
      }
      return y;
    }
    function oe(c) {
      var y = G(c);
      switch (y) {
        case "array":
        case "object":
          return "an " + y;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + y;
        default:
          return y;
      }
    }
    function ce(c) {
      return !c.constructor || !c.constructor.name ? S : c.constructor.name;
    }
    return w.checkPropTypes = o, w.resetWarningCache = o.resetWarningCache, w.PropTypes = w, w;
  }, je;
}
var qe, bt;
function tn() {
  if (bt)
    return qe;
  bt = 1;
  var e = Qe();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, qe = function() {
    function n(l, u, d, p, f, h) {
      if (h !== e) {
        var S = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw S.name = "Invariant Violation", S;
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
  }, qe;
}
if (process.env.NODE_ENV !== "production") {
  var rn = Wt(), nn = !0;
  Be.exports = en()(rn.isElement, nn);
} else
  Be.exports = tn()();
var qt = Be.exports;
function zt(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = zt(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function St() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = zt(e)) && (n && (n += " "), n += t);
  return n;
}
const on = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: St,
  default: St
}, Symbol.toStringTag, { value: "Module" })), an = /* @__PURE__ */ Ir(on);
var X = {}, de = {};
Object.defineProperty(de, "__esModule", {
  value: !0
});
de.dontSetMe = dn;
de.findInArray = sn;
de.int = un;
de.isFunction = cn;
de.isNum = ln;
function sn(e, t) {
  for (let r = 0, n = e.length; r < n; r++)
    if (t.apply(t, [e[r], r, e]))
      return e[r];
}
function cn(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function ln(e) {
  return typeof e == "number" && !isNaN(e);
}
function un(e) {
  return parseInt(e, 10);
}
function dn(e, t, r) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var be = {};
Object.defineProperty(be, "__esModule", {
  value: !0
});
be.browserPrefixToKey = Xt;
be.browserPrefixToStyle = fn;
be.default = void 0;
be.getPrefix = Vt;
const ze = ["Moz", "Webkit", "O", "ms"];
function Vt() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const r = (e = window.document) === null || e === void 0 || (e = e.documentElement) === null || e === void 0 ? void 0 : e.style;
  if (!r || t in r)
    return "";
  for (let n = 0; n < ze.length; n++)
    if (Xt(t, ze[n]) in r)
      return ze[n];
  return "";
}
function Xt(e, t) {
  return t ? "".concat(t).concat(pn(e)) : e;
}
function fn(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function pn(e) {
  let t = "", r = !0;
  for (let n = 0; n < e.length; n++)
    r ? (t += e[n].toUpperCase(), r = !1) : e[n] === "-" ? r = !0 : t += e[n];
  return t;
}
be.default = Vt();
Object.defineProperty(X, "__esModule", {
  value: !0
});
X.addClassName = Gt;
X.addEvent = gn;
X.addUserSelectStyles = En;
X.createCSSTransform = wn;
X.createSVGTransform = Tn;
X.getTouch = xn;
X.getTouchIdentifier = Dn;
X.getTranslation = Je;
X.innerHeight = Sn;
X.innerWidth = Cn;
X.matchesSelector = Ut;
X.matchesSelectorAndParentsTo = mn;
X.offsetXYFromParent = Pn;
X.outerHeight = vn;
X.outerWidth = bn;
X.removeClassName = Ht;
X.removeEvent = yn;
X.removeUserSelectStyles = On;
var ne = de, Ct = hn(be);
function Bt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Bt = function(n) {
    return n ? r : t;
  })(e);
}
function hn(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Bt(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
let Ee = "";
function Ut(e, t) {
  return Ee || (Ee = (0, ne.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, ne.isFunction)(e[r]);
  })), (0, ne.isFunction)(e[Ee]) ? e[Ee](t) : !1;
}
function mn(e, t, r) {
  let n = e;
  do {
    if (Ut(n, t))
      return !0;
    if (n === r)
      return !1;
    n = n.parentNode;
  } while (n);
  return !1;
}
function gn(e, t, r, n) {
  if (!e)
    return;
  const o = {
    capture: !0,
    ...n
  };
  e.addEventListener ? e.addEventListener(t, r, o) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r;
}
function yn(e, t, r, n) {
  if (!e)
    return;
  const o = {
    capture: !0,
    ...n
  };
  e.removeEventListener ? e.removeEventListener(t, r, o) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
}
function vn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ne.int)(r.borderTopWidth), t += (0, ne.int)(r.borderBottomWidth), t;
}
function bn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ne.int)(r.borderLeftWidth), t += (0, ne.int)(r.borderRightWidth), t;
}
function Sn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ne.int)(r.paddingTop), t -= (0, ne.int)(r.paddingBottom), t;
}
function Cn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ne.int)(r.paddingLeft), t -= (0, ne.int)(r.paddingRight), t;
}
function Pn(e, t, r) {
  const o = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), a = (e.clientX + t.scrollLeft - o.left) / r, l = (e.clientY + t.scrollTop - o.top) / r;
  return {
    x: a,
    y: l
  };
}
function wn(e, t) {
  const r = Je(e, t, "px");
  return {
    [(0, Ct.browserPrefixToKey)("transform", Ct.default)]: r
  };
}
function Tn(e, t) {
  return Je(e, t, "");
}
function Je(e, t, r) {
  let {
    x: n,
    y: o
  } = e, a = "translate(".concat(n).concat(r, ",").concat(o).concat(r, ")");
  if (t) {
    const l = "".concat(typeof t.x == "string" ? t.x : t.x + r), u = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    a = "translate(".concat(l, ", ").concat(u, ")") + a;
  }
  return a;
}
function xn(e, t) {
  return e.targetTouches && (0, ne.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, ne.findInArray)(e.changedTouches, (r) => t === r.identifier);
}
function Dn(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function En(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && Gt(e.body, "react-draggable-transparent-selection");
}
function On(e) {
  if (e)
    try {
      if (e.body && Ht(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        const t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function Gt(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function Ht(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var fe = {};
Object.defineProperty(fe, "__esModule", {
  value: !0
});
fe.canDragX = Nn;
fe.canDragY = Mn;
fe.createCoreData = kn;
fe.createDraggableData = An;
fe.getBoundPosition = Rn;
fe.getControlPosition = Fn;
fe.snapToGrid = _n;
var re = de, Ce = X;
function Rn(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : Ln(n);
  const o = Ze(e);
  if (typeof n == "string") {
    const {
      ownerDocument: a
    } = o, l = a.defaultView;
    let u;
    if (n === "parent" ? u = o.parentNode : u = a.querySelector(n), !(u instanceof l.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const d = u, p = l.getComputedStyle(o), f = l.getComputedStyle(d);
    n = {
      left: -o.offsetLeft + (0, re.int)(f.paddingLeft) + (0, re.int)(p.marginLeft),
      top: -o.offsetTop + (0, re.int)(f.paddingTop) + (0, re.int)(p.marginTop),
      right: (0, Ce.innerWidth)(d) - (0, Ce.outerWidth)(o) - o.offsetLeft + (0, re.int)(f.paddingRight) - (0, re.int)(p.marginRight),
      bottom: (0, Ce.innerHeight)(d) - (0, Ce.outerHeight)(o) - o.offsetTop + (0, re.int)(f.paddingBottom) - (0, re.int)(p.marginBottom)
    };
  }
  return (0, re.isNum)(n.right) && (t = Math.min(t, n.right)), (0, re.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, re.isNum)(n.left) && (t = Math.max(t, n.left)), (0, re.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function _n(e, t, r) {
  const n = Math.round(t / e[0]) * e[0], o = Math.round(r / e[1]) * e[1];
  return [n, o];
}
function Nn(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function Mn(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function Fn(e, t, r) {
  const n = typeof t == "number" ? (0, Ce.getTouch)(e, t) : null;
  if (typeof t == "number" && !n)
    return null;
  const o = Ze(r), a = r.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, Ce.offsetXYFromParent)(n || e, a, r.props.scale);
}
function kn(e, t, r) {
  const n = !(0, re.isNum)(e.lastX), o = Ze(e);
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
function Ln(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function Ze(e) {
  const t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var ke = {}, Ae = {};
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = In;
function In() {
}
Object.defineProperty(ke, "__esModule", {
  value: !0
});
ke.default = void 0;
var Ve = Yn(pe), ee = et(qt), $n = et(Mt), K = X, he = fe, Xe = de, Pe = et(Ae);
function et(e) {
  return e && e.__esModule ? e : { default: e };
}
function Kt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Kt = function(n) {
    return n ? r : t;
  })(e);
}
function Yn(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Kt(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
function J(e, t, r) {
  return t = Wn(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Wn(e) {
  var t = jn(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function jn(e, t) {
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
const ie = {
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
let me = ie.mouse, Le = class extends Ve.Component {
  constructor() {
    super(...arguments), J(this, "dragging", !1), J(this, "lastX", NaN), J(this, "lastY", NaN), J(this, "touchIdentifier", null), J(this, "mounted", !1), J(this, "handleDragStart", (t) => {
      if (this.props.onMouseDown(t), !this.props.allowAnyClick && typeof t.button == "number" && t.button !== 0)
        return !1;
      const r = this.findDOMNode();
      if (!r || !r.ownerDocument || !r.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      const {
        ownerDocument: n
      } = r;
      if (this.props.disabled || !(t.target instanceof n.defaultView.Node) || this.props.handle && !(0, K.matchesSelectorAndParentsTo)(t.target, this.props.handle, r) || this.props.cancel && (0, K.matchesSelectorAndParentsTo)(t.target, this.props.cancel, r))
        return;
      t.type === "touchstart" && t.preventDefault();
      const o = (0, K.getTouchIdentifier)(t);
      this.touchIdentifier = o;
      const a = (0, he.getControlPosition)(t, o, this);
      if (a == null)
        return;
      const {
        x: l,
        y: u
      } = a, d = (0, he.createCoreData)(this, l, u);
      (0, Pe.default)("DraggableCore: handleDragStart: %j", d), (0, Pe.default)("calling", this.props.onStart), !(this.props.onStart(t, d) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, K.addUserSelectStyles)(n), this.dragging = !0, this.lastX = l, this.lastY = u, (0, K.addEvent)(n, me.move, this.handleDrag), (0, K.addEvent)(n, me.stop, this.handleDragStop));
    }), J(this, "handleDrag", (t) => {
      const r = (0, he.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let u = n - this.lastX, d = o - this.lastY;
        if ([u, d] = (0, he.snapToGrid)(this.props.grid, u, d), !u && !d)
          return;
        n = this.lastX + u, o = this.lastY + d;
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
    }), J(this, "handleDragStop", (t) => {
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
        let d = n - this.lastX || 0, p = o - this.lastY || 0;
        [d, p] = (0, he.snapToGrid)(this.props.grid, d, p), n = this.lastX + d, o = this.lastY + p;
      }
      const a = (0, he.createCoreData)(this, n, o);
      if (this.props.onStop(t, a) === !1 || this.mounted === !1)
        return !1;
      const u = this.findDOMNode();
      u && this.props.enableUserSelectHack && (0, K.removeUserSelectStyles)(u.ownerDocument), (0, Pe.default)("DraggableCore: handleDragStop: %j", a), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, u && ((0, Pe.default)("DraggableCore: Removing handlers"), (0, K.removeEvent)(u.ownerDocument, me.move, this.handleDrag), (0, K.removeEvent)(u.ownerDocument, me.stop, this.handleDragStop));
    }), J(this, "onMouseDown", (t) => (me = ie.mouse, this.handleDragStart(t))), J(this, "onMouseUp", (t) => (me = ie.mouse, this.handleDragStop(t))), J(this, "onTouchStart", (t) => (me = ie.touch, this.handleDragStart(t))), J(this, "onTouchEnd", (t) => (me = ie.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = !0;
    const t = this.findDOMNode();
    t && (0, K.addEvent)(t, ie.touch.start, this.onTouchStart, {
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
      (0, K.removeEvent)(r, ie.mouse.move, this.handleDrag), (0, K.removeEvent)(r, ie.touch.move, this.handleDrag), (0, K.removeEvent)(r, ie.mouse.stop, this.handleDragStop), (0, K.removeEvent)(r, ie.touch.stop, this.handleDragStop), (0, K.removeEvent)(t, ie.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, K.removeUserSelectStyles)(r);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var t, r;
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (r = this.props) === null || r === void 0 || (r = r.nodeRef) === null || r === void 0 ? void 0 : r.current : $n.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ Ve.cloneElement(Ve.Children.only(this.props.children), {
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
ke.default = Le;
J(Le, "displayName", "DraggableCore");
J(Le, "propTypes", {
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
  offsetParent: function(e, t) {
    if (e[t] && e[t].nodeType !== 1)
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
  className: Xe.dontSetMe,
  style: Xe.dontSetMe,
  transform: Xe.dontSetMe
});
J(Le, "defaultProps", {
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
  var t = S(pe), r = f(qt), n = f(Mt), o = f(an), a = X, l = fe, u = de, d = f(ke), p = f(Ae);
  function f(b) {
    return b && b.__esModule ? b : { default: b };
  }
  function h(b) {
    if (typeof WeakMap != "function")
      return null;
    var m = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap();
    return (h = function(s) {
      return s ? v : m;
    })(b);
  }
  function S(b, m) {
    if (!m && b && b.__esModule)
      return b;
    if (b === null || typeof b != "object" && typeof b != "function")
      return { default: b };
    var v = h(m);
    if (v && v.has(b))
      return v.get(b);
    var s = {}, _ = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var C in b)
      if (C !== "default" && Object.prototype.hasOwnProperty.call(b, C)) {
        var L = _ ? Object.getOwnPropertyDescriptor(b, C) : null;
        L && (L.get || L.set) ? Object.defineProperty(s, C, L) : s[C] = b[C];
      }
    return s.default = b, v && v.set(b, s), s;
  }
  function w() {
    return w = Object.assign ? Object.assign.bind() : function(b) {
      for (var m = 1; m < arguments.length; m++) {
        var v = arguments[m];
        for (var s in v)
          Object.prototype.hasOwnProperty.call(v, s) && (b[s] = v[s]);
      }
      return b;
    }, w.apply(this, arguments);
  }
  function T(b, m, v) {
    return m = D(m), m in b ? Object.defineProperty(b, m, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : b[m] = v, b;
  }
  function D(b) {
    var m = Y(b, "string");
    return typeof m == "symbol" ? m : String(m);
  }
  function Y(b, m) {
    if (typeof b != "object" || b === null)
      return b;
    var v = b[Symbol.toPrimitive];
    if (v !== void 0) {
      var s = v.call(b, m || "default");
      if (typeof s != "object")
        return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (m === "string" ? String : Number)(b);
  }
  class $ extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(m, v) {
      let {
        position: s
      } = m, {
        prevPropsPosition: _
      } = v;
      return s && (!_ || s.x !== _.x || s.y !== _.y) ? ((0, p.default)("Draggable: getDerivedStateFromProps %j", {
        position: s,
        prevPropsPosition: _
      }), {
        x: s.x,
        y: s.y,
        prevPropsPosition: {
          ...s
        }
      }) : null;
    }
    constructor(m) {
      super(m), T(this, "onDragStart", (v, s) => {
        if ((0, p.default)("Draggable: onDragStart: %j", s), this.props.onStart(v, (0, l.createDraggableData)(this, s)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), T(this, "onDrag", (v, s) => {
        if (!this.state.dragging)
          return !1;
        (0, p.default)("Draggable: onDrag: %j", s);
        const _ = (0, l.createDraggableData)(this, s), C = {
          x: _.x,
          y: _.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x,
            y: B
          } = C;
          C.x += this.state.slackX, C.y += this.state.slackY;
          const [U, Q] = (0, l.getBoundPosition)(this, C.x, C.y);
          C.x = U, C.y = Q, C.slackX = this.state.slackX + (x - C.x), C.slackY = this.state.slackY + (B - C.y), _.x = C.x, _.y = C.y, _.deltaX = C.x - this.state.x, _.deltaY = C.y - this.state.y;
        }
        if (this.props.onDrag(v, _) === !1)
          return !1;
        this.setState(C);
      }), T(this, "onDragStop", (v, s) => {
        if (!this.state.dragging || this.props.onStop(v, (0, l.createDraggableData)(this, s)) === !1)
          return !1;
        (0, p.default)("Draggable: onDragStop: %j", s);
        const C = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x,
            y: B
          } = this.props.position;
          C.x = x, C.y = B;
        }
        this.setState(C);
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
      var m, v;
      return (m = (v = this.props) === null || v === void 0 || (v = v.nodeRef) === null || v === void 0 ? void 0 : v.current) !== null && m !== void 0 ? m : n.default.findDOMNode(this);
    }
    render() {
      const {
        axis: m,
        bounds: v,
        children: s,
        defaultPosition: _,
        defaultClassName: C,
        defaultClassNameDragging: L,
        defaultClassNameDragged: x,
        position: B,
        positionOffset: U,
        scale: Q,
        ...q
      } = this.props;
      let z = {}, O = null;
      const G = !!!B || this.state.dragging, oe = B || _, ce = {
        // Set left if horizontal drag is enabled
        x: (0, l.canDragX)(this) && G ? this.state.x : oe.x,
        // Set top if vertical drag is enabled
        y: (0, l.canDragY)(this) && G ? this.state.y : oe.y
      };
      this.state.isElementSVG ? O = (0, a.createSVGTransform)(ce, U) : z = (0, a.createCSSTransform)(ce, U);
      const c = (0, o.default)(s.props.className || "", C, {
        [L]: this.state.dragging,
        [x]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(d.default, w({}, q, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(s), {
        className: c,
        style: {
          ...s.props.style,
          ...z
        },
        transform: O
      }));
    }
  }
  e.default = $, T($, "displayName", "Draggable"), T($, "propTypes", {
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
  }), T($, "defaultProps", {
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
})(Yt);
const {
  default: Qt,
  DraggableCore: qn
} = Yt;
Fe.exports = Qt;
Fe.exports.default = Qt;
Fe.exports.DraggableCore = qn;
var zn = Fe.exports;
const Vn = /* @__PURE__ */ $r(zn);
const Xn = (e) => {
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
}, Bn = se(function(t, r) {
  const { formLayout: n, context: o } = t, { formData: a } = o, l = ae({}), u = Xn(t), d = "palmyra-form-field-data", p = Ge(() => (f) => kt(f, l, f.label), [a.data]);
  return /* @__PURE__ */ i("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: n.fields.map((f, h) => /* @__PURE__ */ i("div", { className: u, children: /* @__PURE__ */ i("div", { className: d, children: p(f) }) }, f.attribute)) });
});
function Un(e) {
  return /* @__PURE__ */ i(
    Vn,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ i(gr, { ...e })
    }
  );
}
const Gn = ({ columns: e, isOpen: t, onClose: r, setFilter: n, defaultFilter: o = {} }) => {
  const a = (w) => {
    w.stopPropagation();
  };
  var { getFieldManager: l, getFormData: u } = Nt(o, () => {
  }, "edit");
  const d = () => {
    n({});
  }, p = () => {
    var w = u();
    n && n(w);
  }, f = () => {
    r();
  }, h = (w) => {
    w.keyCode === 27 && f();
  }, S = Lr(e);
  return /* @__PURE__ */ i("div", { className: "grid-filter-container", children: /* @__PURE__ */ H(
    mr,
    {
      open: t,
      onClick: a,
      PaperComponent: Un,
      onKeyDown: h,
      children: [
        /* @__PURE__ */ H("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ i("div", { className: "grid-header-text-container", children: /* @__PURE__ */ i("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ i("div", { className: "grid-header-icon-container", onClick: f, children: /* @__PURE__ */ i(we, { title: "close", arrow: !0, children: /* @__PURE__ */ i(Er, { className: "filter-cancel-icon" }) }) })
        ] }),
        /* @__PURE__ */ i("span", { className: "filter-header-border" }),
        /* @__PURE__ */ i("div", { className: "grid-filter-content", children: /* @__PURE__ */ i(Ne.Provider, { value: l, children: /* @__PURE__ */ i(
          At,
          {
            context: { formData: {} },
            layout: {
              type: "form",
              formLayout: {
                fields: S,
                options: {
                  columns: 2
                }
              },
              Renderer: Bn
            }
          }
        ) }) }),
        /* @__PURE__ */ H("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ i(Se, { className: "filter-reset-btn", disableRipple: !0, onClick: d, children: "Reset" }),
          /* @__PURE__ */ i(Se, { className: "filter-button", disableRipple: !0, onClick: p, children: "Filter" })
        ] })
      ]
    }
  ) });
}, Hn = se(function(t, r) {
  const { columns: n, children: o, EmptyChild: a, onRowClick: l, quickSearch: u } = t, d = a || Fr, p = t.customizer || Ar, [f, h] = te(!1), [S, w] = te("standard"), [T, D] = te(!1), [Y, $] = te(""), {
    setQueryFilter: b,
    setQuickSearch: m,
    setSortColumns: v,
    gotoPage: s,
    setPageSize: _,
    getPageNo: C,
    data: L,
    totalRecords: x,
    pageSizeOptions: B,
    filter: U,
    queryLimit: Q
  } = Me(t), q = r || ae(null);
  ve(q, () => ({
    setFilter: (P) => {
    }
  }), []);
  const z = (P, k) => {
    s(k);
  }, O = Mr(n, p), V = (P) => {
    w(P);
  }, G = () => {
    h(!f);
  }, oe = () => S === "compact" ? { padding: "3px" } : S === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, ce = () => S === "compact" ? { padding: "3px" } : S === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, c = () => {
    var P;
    switch (S) {
      case "compact":
        P = /* @__PURE__ */ i(ot, { className: "density-icon" });
        break;
      case "comfortable":
        P = /* @__PURE__ */ i(at, { className: "density-icon" });
        break;
      default:
        P = /* @__PURE__ */ i(nt, { className: "grid-button-icon" });
        break;
    }
    return P;
  }, y = (P) => {
    const k = P.target.value;
    $(k), k ? m(k) : b({});
  }, M = (P) => {
    l && l(P);
  }, N = (P) => {
    const k = parseInt(P.target.value, 10);
    _(k);
  }, E = () => {
    console.info("Export Clicked");
  }, A = 200, R = !!t.pageSize;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ H("div", { children: [
    o,
    /* @__PURE__ */ H("div", { className: "grid-header", children: [
      /* @__PURE__ */ i("div", { className: "grid-header-filter", children: !!u && /* @__PURE__ */ i(
        He,
        {
          sx: { width: A },
          type: "text",
          value: Y,
          onChange: y,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ i(Ke, { position: "end", children: /* @__PURE__ */ i($t, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ i(yr, { onClickAway: () => {
        h(!1);
      }, children: /* @__PURE__ */ H("div", { className: "grid-header-button", onClick: G, children: [
        /* @__PURE__ */ i(we, { title: "Density", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: c() }) }),
        f && /* @__PURE__ */ i("div", { className: "density-dropdown-content", children: /* @__PURE__ */ H("ul", { children: [
          /* @__PURE__ */ H("li", { onClick: () => V("standard"), children: [
            /* @__PURE__ */ i(nt, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ H("li", { onClick: () => V("compact"), children: [
            /* @__PURE__ */ i(ot, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ H("li", { onClick: () => V("comfortable"), children: [
            /* @__PURE__ */ i(at, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ H("div", { className: "grid-header-button", children: [
        /* @__PURE__ */ i(we, { title: "Filter", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, onClick: () => D(!0), children: /* @__PURE__ */ i(Or, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ i(
          Gn,
          {
            columns: n,
            setFilter: b,
            defaultFilter: U,
            isOpen: T,
            onClose: () => D(!1)
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: E, children: /* @__PURE__ */ i(we, { title: "Export", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Rr, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ i(we, { title: "New", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(_r, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ i(Te, {})
    ] }),
    /* @__PURE__ */ i("div", { className: "grid-table", children: /* @__PURE__ */ i(
      kr,
      {
        columnDefs: O,
        EmptyChild: d,
        rowData: L,
        onRowClick: M,
        onRowStyle: oe,
        onHeaderStyle: ce,
        onSortColumn: v
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "grid-header", children: /* @__PURE__ */ i("div", { className: "grid-filter", children: R && /* @__PURE__ */ i(
      Et,
      {
        component: "div",
        count: x || 0,
        page: C(),
        onPageChange: z,
        rowsPerPage: Q.limit,
        rowsPerPageOptions: B || [],
        onRowsPerPageChange: N
      }
    ) }) })
  ] }) });
}), Jo = se(function(t, r) {
  const { columns: n, endPoint: o, storeFactory: a, layoutParams: l } = t, u = t.quickSearch || "", d = ae(null), p = (h, S) => {
    console.log(S);
  };
  ye(() => {
    var h = it.subscribe(t.topic, p);
    return () => {
      it.unsubscribe(h);
    };
  }, [t.topic]), r && ve(r, () => ({
    setFilter: (h) => {
      d.current.setFilter(h);
    }
  }), [n, o]);
  const f = {
    fields: n,
    quickSearch: u,
    storeOptions: {
      endPoint: o
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ i(Te, { children: /* @__PURE__ */ i(Ue.Provider, { value: a, children: /* @__PURE__ */ i(Jt, { layout: f, context: l, customizer: t.customizer, ref: d }) }) });
}), Kn = se(function(t, r) {
  const n = t.layout, [o, a] = te(n.fields), l = n.pagination ? n.pagination : [15], u = Oe(Ue), d = Oe(Tt);
  var p = n.storeOptions || {}, f = {};
  Pr(f, p, d);
  const h = u.getGridStore(f, n.storeOptions.endPoint);
  ye(() => {
    p.hasLayout && h.queryLayout({}).then((T) => {
      a(T.columns);
    });
  }, []);
  const { onClick: S, onNewClick: w } = Yr(n.actionOptions, d);
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    Hn,
    {
      columns: o,
      store: h,
      pageSize: l,
      onRowClick: S,
      onNewClick: w,
      customizer: t.customizer,
      quickSearch: n.quickSearch,
      ref: r
    }
  ) });
}), Jt = Kn, Qn = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Container || _t;
  return /* @__PURE__ */ i(Ft, { fallback: /* @__PURE__ */ i("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ i(n, { ...t, children: ((a) => /* @__PURE__ */ i(
    Jt,
    {
      context: r,
      layout: a
    }
  ))(t.tableLayout) }) });
}, Jn = (e) => {
  const { layout: t } = e;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ i(At, { ...e });
    case "view":
      return /* @__PURE__ */ i(jr, { ...e });
    case "grid":
      return /* @__PURE__ */ i(Qn, { ...e });
    case "chart":
      return /* @__PURE__ */ i(Sr, { ...e });
    default:
      return /* @__PURE__ */ i(Wr, { ...e });
  }
};
function Zn(e, t) {
  var r = e || 1, n = t;
  return {
    w: r,
    h: n
  };
}
const Zt = (e) => {
  const { layout: t, context: r } = e, n = t.sections;
  function o(a, l, u) {
    const { w: d, h: p } = Zn(a.width, a.height);
    return /* @__PURE__ */ i(vr, { sx: { width: d, height: p }, children: /* @__PURE__ */ i(
      Jn,
      {
        layout: a,
        context: l
      }
    ) }, (a.name || "tab") + u);
  }
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap" }, children: n.map((a, l) => o(a, r, l)) });
}, Pt = se(function(t, r) {
  const { layout: n } = t;
  ve(r, () => ({
    resetFilter() {
    }
  }), []);
  const o = {}, a = n.tabs;
  return /* @__PURE__ */ i("div", { children: a.map((l, u) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    Zt,
    {
      layout: l,
      context: o
    }
  ) }, l.name + u)) });
}), eo = (e) => {
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
}, wt = se(function(t, r) {
  var f;
  const n = t.data || {}, { layout: o } = t;
  var { getFieldManager: a, getFormData: l, isFormValid: u } = Nt(n, (f = t.callbacks) == null ? void 0 : f.onFormValidChange, eo(t.mode));
  ve(r, () => ({
    getData() {
      return l();
    },
    isValid() {
      return u();
    }
  }), []);
  const d = { formData: n }, p = o.tabs;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(Ne.Provider, { value: a, children: p.map((h, S) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    Zt,
    {
      layout: h,
      context: d
    }
  ) }, h.name + S)) }) });
}), to = (e) => {
  switch (e) {
    case "grid":
      return Pt;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), wt;
    case "formEdit":
    case "formNew":
    case "formView":
      return wt;
    default:
      return Pt;
  }
}, Zo = se(function(t, r) {
  const [n, o] = te(t.layout), a = t.mode ? t.mode : n.type ? n.type : "grid", l = t.layoutParams || {}, u = to(a), d = ae(0);
  return ye(() => {
    o(t.layout), d.current < 999999 ? d.current++ : d.current = 0;
  }, [t.layout]), /* @__PURE__ */ i(Ft, { fallback: /* @__PURE__ */ i("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ i(Ue.Provider, { value: t.storeFactory, children: /* @__PURE__ */ i(Tt.Provider, { value: l, children: /* @__PURE__ */ i(u, { ...t, ref: (p) => {
    r && (r.current = p);
  } }, d.current) }) }) });
}), ea = se(function(t, r) {
  const { children: n, Child: o, childProps: a, pageSize: l } = t, u = r || ae(null), {
    setQueryFilter: d,
    setQuickSearch: p,
    gotoPage: f,
    setPageSize: h,
    getPageNo: S,
    data: w,
    pageSizeOptions: T,
    queryLimit: D
  } = Me(t), Y = t.listKeyProvider || ((C, L) => L);
  ve(u, () => ({
    setFilter(C) {
      d(C);
    },
    gotoPage(C) {
      f(C);
    },
    nextPage() {
    },
    prevPage() {
    }
  }), []);
  const $ = (C, L) => {
    f(L);
  }, b = (C) => {
    const L = C.target.value;
    p(L);
  }, m = (C) => {
    const L = parseInt(C.target.value, 10);
    h(L);
  }, v = 200, s = !!l, _ = !!t.quickSearch;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ H("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ H("div", { className: "card-container", children: [
      /* @__PURE__ */ H("div", { className: "card-header", children: [
        /* @__PURE__ */ i("div", { className: "card-filter", children: _ && /* @__PURE__ */ i(
          He,
          {
            sx: { width: v },
            type: "text",
            onChange: b,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ i(Ke, { position: "end", children: /* @__PURE__ */ i($t, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ i("div", { className: "card-pagination", children: s && /* @__PURE__ */ i(
          Et,
          {
            component: "div",
            count: w,
            page: S(),
            onPageChange: $,
            rowsPerPage: D.limit,
            rowsPerPageOptions: T || [],
            onRowsPerPageChange: m
          }
        ) })
      ] }),
      /* @__PURE__ */ i("div", { className: "card-wrapper", children: /* @__PURE__ */ i(
        br,
        {
          Child: o,
          childKeyProvider: Y,
          dataList: w,
          childProps: a,
          EmptyChild: t.EmptyChild
        }
      ) })
    ] })
  ] }) });
});
export {
  Zo as F,
  Jt as G,
  Ko as M,
  Jo as P,
  ea as S,
  Zt as T,
  Hn as a,
  Vr as b,
  Me as c,
  Br as d,
  At as e,
  Bn as f,
  kt as g,
  Gn as h,
  Qn as i,
  Jn as j,
  Pt as k,
  wt as l,
  zr as u
};
