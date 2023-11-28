import "../assets/ServerCardLayout.css";
import tr from "../palmyra/mui/form/MuiDatePicker.js";
import rr from "../palmyra/mui/form/MuiDateTimePicker.js";
import nr from "../palmyra/mui/form/MuiRadioGroup.js";
import or from "../palmyra/mui/form/MuiSelect.js";
import ar from "../palmyra/mui/form/MuiTextArea.js";
import ir from "../palmyra/mui/form/MuiTextField.js";
import sr from "../palmyra/mui/form/MuiCheckBox.js";
import cr from "../palmyra/mui/form/MuiSwitch.js";
import lr from "../palmyra/mui/form/MuiPassword.js";
import { FieldManagerContext as Ne, StoreFactoryContext as Ue, LayoutParamsContext as Tt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as i, jsxs as H, Fragment as Te } from "react/jsx-runtime";
import pe, { useState as te, useEffect as ye, forwardRef as se, useContext as Oe, useRef as ae, useImperativeHandle as ve, useMemo as Ge } from "react";
import { FormControl as xt, FormControlLabel as ur, Checkbox as dr, FormHelperText as Dt, InputLabel as fr, Select as pr, ListSubheader as hr, TextField as He, InputAdornment as Ke, MenuItem as mr, Dialog as gr, Tooltip as we, Button as Se, Paper as yr, ClickAwayListener as vr, TablePagination as Et, Box as br } from "@mui/material";
import Sr from "../palmyra/layout/card/CardLayout.js";
import Cr from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Ot, getFieldLabel as Rt } from "../palmyra/mui/form/MuiUtil.js";
import _t from "../palmyra/mui/form/FieldDecorator.js";
import { hasDot as Re } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as _e, setValueByKey as rt } from "../palmyra/form/FormUtil.js";
import { delay as Pr, mergeDeep as wr } from "../palmyra/utils/index.js";
import { m as Tr, p as xr } from "./index.js";
import { Search as Dr, DeleteOutlined as Er, Close as Or, Menu as nt, DensitySmall as ot, DensityLarge as at, FilterAlt as Rr, FileDownloadOutlined as _r, Add as Nr } from "@mui/icons-material";
import Nt from "../palmyra/layout/container/SectionContainer.js";
import Mr from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as Fr } from "../palmyra/grid/base/ColumnConverter.js";
import kr from "../palmyra/grid/base/EmptyChildTable.js";
import Ar from "../palmyra/grid/base/TableX.js";
import { NoopCustomizer as Lr } from "../palmyra/grid/Types.js";
import { convertToField as Ir } from "../palmyra/grid/base/GridFieldConverter.js";
import { d as Mt } from "./PalmyraFormManager.js";
import "../palmyra/form/PalmyraForm.js";
import { a as $r, g as Yr } from "./_commonjsHelpers.js";
import Ft from "react-dom";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import { topic as it } from "../palmyra/utils/pubsub/topic.js";
import "dayjs";
import { getActionPublishers as Wr } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as kt } from "../palmyra/layout/ErrorBoundary.js";
import jr from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import qr from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { useKeyValue as zr } from "../palmyra/utils/pubsub/PubSubHelper.js";
const Me = (e) => {
  const { store: t, quickSearch: r, endPointVars: n } = e, o = e.fetchAll != !1, [a, c] = te(null), [l, u] = e.filterTopic ? zr(e.filterTopic, {}) : te({}), [h, f] = te({}), m = e.pageSize ? e.pageSize : 15;
  var S = m instanceof Array ? m : [m], w = m instanceof Array ? m[0] : m;
  const [T, D] = te({ limit: w, offset: 0 }), [Y, $] = te(null), b = () => Math.round(T.offset / T.limit), g = () => T.limit, v = (q) => {
    D({ ...T, offset: q * w });
  }, s = (q) => {
    const z = q > 10 || q == -1 ? q : 15;
    D({ ...T, limit: z });
  }, M = () => l ? Object.keys(l).length == 0 : !1;
  ye(() => {
    (o || !M()) && C();
  }, [T, l, h]);
  const C = () => {
    const q = { filter: l, sortOrder: h, total: !0, endPointVars: n, ...T };
    if (t)
      try {
        t.query(q).then((z) => {
          $(z.result), c(z.total);
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
    $([]), c(0);
  }, x = () => {
    $(void 0), c(null);
  };
  return {
    setQueryFilter: (q) => {
      typeof q == "function" || q && Object.keys(q).length > 0 ? u(q) : u({});
    },
    setQuickSearch: (q) => {
      const z = r;
      u(q ? (O) => (O[z] = q, { ...O }) : (O) => (delete O[z], { ...O }));
    },
    setSortColumns: (q) => {
      f(q);
    },
    refreshData: C,
    gotoPage: v,
    setPageSize: s,
    getPageNo: b,
    getLimit: g,
    filter: l,
    queryLimit: T,
    data: Y,
    totalRecords: a,
    pageSizeOptions: S
  };
};
function st(e) {
  return e ? Array.isArray(e) ? e : typeof e == "string" ? e.split(",") : (console.log(e), [e]) : [];
}
const Qo = se(function(t, r) {
  const n = Oe(Ne), o = r || ae(null), a = n(t, "checkbox", o), { mutateOptions: c, setMutateOptions: l } = a, u = st(a.data), h = a.error, f = a.eventListeners, S = { store: a.store, pageSize: -1 }, { data: w } = Me(S), T = w, D = ae(null), Y = t.lookupOptions || {}, $ = Y.idAttribute || "id", b = Y.titleAttribute || "name", g = Re($) ? (x) => _e($, x) : (x) => x[$], v = Re(b) ? (x) => _e(b, x) : (x) => x[b];
  ve(o, () => ({
    focus() {
      D.current.focus();
    },
    isValid() {
      return !h.status;
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
      l({ visible: x });
    }
  }), []);
  var s = Ot(t, a.data, t.label);
  t.readonly && (s.inputProps = { readOnly: !0 });
  function M(x, U) {
    const G = st(a.data);
    var Q = G.indexOf(x);
    U ? Q < 0 && G.push(x) : Q >= 0 && G.splice(Q, 1), f.onValueChange(G.toString());
  }
  var C = {
    onBlur: f.onBlur,
    onFocus: f.onFocus,
    onChange: (x) => {
      M(x.target.value, x.target.checked);
    }
  };
  const L = (x) => {
    const U = x.toString();
    return u.includes(U);
  };
  return /* @__PURE__ */ i("div", { className: t.className, children: c.visible && /* @__PURE__ */ i(
    _t,
    {
      label: Rt(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ H(
        xt,
        {
          className: "MuiServerCheckBoxFormControl",
          fullWidth: !0,
          error: h.status,
          ...s,
          children: [
            T ? T.map((x) => /* @__PURE__ */ i(
              ur,
              {
                value: g(x),
                control: /* @__PURE__ */ i(
                  dr,
                  {
                    ...C,
                    checked: L(g(x)),
                    disabled: t.readonly
                  }
                ),
                label: v(x)
              },
              g(x)
            )) : /* @__PURE__ */ i("div", { children: "No options provided" }),
            /* @__PURE__ */ i(Dt, { className: "form-error-text", children: h.message })
          ]
        }
      )
    }
  ) });
}), ct = (e, t) => {
  if (!e)
    return;
  const r = Tr(e, t, { insideWords: !0 }), n = xr(e, r);
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
}, Vr = (e, t, r) => {
  const n = e.store || r.store, o = e.lookupOptions || {}, a = o.idAttribute || "id", c = o.titleAttribute || "name", l = o.searchAttribute || c, u = r.data, h = ae(0), f = ae(null), [m, S] = te(r.displayValue), [w, T] = te([]), [D, Y] = te(""), $ = {
    store: n,
    endPointVars: e.storeOptions.endPointVars,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: l
  }, b = Me($), {
    setQueryFilter: g,
    setQuickSearch: v,
    filter: s,
    totalRecords: M
  } = b, C = b.data, L = Re(a) ? (O) => _e(a, O) : (O) => O[a], x = Re(c) ? (O) => _e(c, O) : (O) => O[c];
  function U() {
    if (u) {
      var O = {};
      rt(a, O, u);
      const V = r.displayValue || u;
      return rt(c, O, V), O;
    }
  }
  ye(() => {
    S(r.displayValue);
  }, [r.displayValue]), Ge(() => {
    var O = U();
    O && (T([O]), f.current = O);
  }, [m]), ye(() => {
    const O = C ? [...C] : [], V = f.current;
    O && V && !G(C, L(V)) && O.unshift(V), T(O), h.current < M && (h.current = M);
  }, [C, M]);
  function G(O, V) {
    return O.find((B) => {
      if (L(B) === V)
        return B;
    });
  }
  ye(() => {
    Pr(q);
  }, [D]);
  const Q = () => h.current > 2;
  function q() {
    D.length > 0 ? v("*" + D + "*") : v("");
  }
  return {
    getSelectedOption: U,
    filter: s,
    labelAccessor: x,
    idAccessor: L,
    renderOption: ct,
    getServerLookup: (O) => {
      var V = Ot(e, r.data, e.label);
      const B = r.eventListeners, oe = r.error, ce = e.variant || "standard";
      t.readonly && (V.inputProps = { readOnly: !0 });
      var d = {
        onBlur: B.onBlur,
        onFocus: B.onFocus,
        onChange: (p) => B.onValueChange(p.target.value)
      };
      return /* @__PURE__ */ i(
        _t,
        {
          label: Rt(e),
          customContainerClass: e.customContainerClass,
          colspan: e.colspan,
          customFieldClass: e.customFieldClass,
          customLabelClass: e.customLabelClass,
          children: /* @__PURE__ */ H(xt, { variant: ce, fullWidth: !0, error: oe.status, children: [
            e.label ? /* @__PURE__ */ i(fr, { children: e.label }) : /* @__PURE__ */ i(Te, {}),
            /* @__PURE__ */ H(
              pr,
              {
                inputRef: (p) => {
                  O.current = p;
                },
                ...V,
                MenuProps: { autoFocus: !1 },
                value: u,
                onOpen: (p) => {
                  q();
                },
                ...d,
                children: [
                  Q() ? /* @__PURE__ */ H(hr, { children: [
                    /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
                      He,
                      {
                        size: "small",
                        value: D,
                        autoFocus: !0,
                        placeholder: "Type to search...",
                        fullWidth: !0,
                        InputProps: {
                          startAdornment: /* @__PURE__ */ i(Ke, { position: "start", children: /* @__PURE__ */ i(Dr, {}) })
                        },
                        onChange: (p) => Y(p.target.value),
                        onKeyDown: (p) => {
                          p.key !== "Escape" && p.stopPropagation();
                        }
                      }
                    ) }),
                    e.required ? /* @__PURE__ */ i(Te, {}) : /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i("span", { children: /* @__PURE__ */ i(Er, {}) }) })
                  ] }) : /* @__PURE__ */ i("div", {}),
                  w.map((p, _) => /* @__PURE__ */ i(mr, { value: L(p), children: ct(x(p), D) }, L(p) || _))
                ]
              }
            ),
            /* @__PURE__ */ i(Dt, { className: "form-error-text", children: oe.message })
          ] })
        }
      );
    },
    setQueryFilter: g,
    searchText: D,
    setSearchText: Y,
    refreshOptions: q
  };
}, Xr = se(function(t, r) {
  const n = Oe(Ne), o = r || ae(null), a = n(t, "serverlookup", o), c = a.error, { mutateOptions: l, setMutateOptions: u } = a, h = ae(null), { getServerLookup: f, setQueryFilter: m } = Vr(t, l, a);
  return ve(o, () => ({
    focus() {
      h.current.focus();
    },
    isValid() {
      return !c.status;
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
      u({ visible: S });
    },
    setAttribute(S) {
    },
    setFilter(S) {
      m(S);
    },
    resetFilter() {
    },
    addFilter(S, w) {
      m((T) => (T[S] = w, { ...T }));
    },
    setDefaultFilter(S) {
    }
  }), []), f(h);
}), Br = (e) => {
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
}, lt = () => /* @__PURE__ */ i("div", { children: "To be Implemented" }), At = (e, t, r) => {
  const { type: n } = e, o = { fieldDef: e, title: r };
  switch (n) {
    case "string":
      return ue(o, ir);
    case "radio":
      return ue(o, nr);
    case "select":
      return ue(o, or);
    case "date":
      return ue(o, tr);
    case "datetime":
      return ue(o, rr);
    case "checkbox":
      return ue(o, sr);
    case "serverlookup":
      return ue(o, Xr);
    case "textarea":
      return ue(o, ar);
    case "switch":
      return ue(o, cr);
    case "password":
      return ue(o, lr);
    case "multiSelect":
      return lt();
    case "dateRange":
      return lt();
    default:
      return Br(o);
  }
}, Ur = se(function(t, r) {
  var f;
  const { formLayout: n, context: o } = t, { formData: a } = o, c = n.Container;
  ae({});
  const l = Ge(() => (m) => At(m), [a.data]);
  var u = ((f = n.options) == null ? void 0 : f.columns) || 1, h = { columns: u };
  return c ? /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((m, S) => /* @__PURE__ */ i(
    c,
    {
      index: S,
      field: m,
      label: m.title,
      options: h,
      children: l(m)
    },
    m.attribute
  )) }) : /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((m, S) => /* @__PURE__ */ i(Te, { children: l(m) })) });
}), Lt = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Renderer || Ur, o = t.Container || Nt;
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
      children: /* @__PURE__ */ i(Mr, { columns: t.columns, children: a(t.formLayout) })
    }
  );
};
var It = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ut = pe.createContext && pe.createContext(It), ge = globalThis && globalThis.__assign || function() {
  return ge = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ge.apply(this, arguments);
}, Gr = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function $t(e) {
  return e && e.map(function(t, r) {
    return pe.createElement(t.tag, ge({
      key: r
    }, t.attr), $t(t.child));
  });
}
function Hr(e) {
  return function(t) {
    return pe.createElement(Kr, ge({
      attr: ge({}, e.attr)
    }, t), $t(e.child));
  };
}
function Kr(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, a = e.title, c = Gr(e, ["attr", "size", "title"]), l = o || r.size || "1em", u;
    return r.className && (u = r.className), e.className && (u = (u ? u + " " : "") + e.className), pe.createElement("svg", ge({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, c, {
      className: u,
      style: ge(ge({
        color: e.color || r.color
      }, r.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && pe.createElement("title", null, a), e.children);
  };
  return ut !== void 0 ? pe.createElement(ut.Consumer, null, function(r) {
    return t(r);
  }) : t(It);
}
function Yt(e) {
  return Hr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
}
var Fe = { exports: {} }, Wt = {}, Be = { exports: {} }, De = { exports: {} }, W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Qr() {
  if (dt)
    return W;
  dt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, D = e ? Symbol.for("react.block") : 60121, Y = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function g(s) {
    if (typeof s == "object" && s !== null) {
      var M = s.$$typeof;
      switch (M) {
        case t:
          switch (s = s.type, s) {
            case u:
            case h:
            case n:
            case a:
            case o:
            case m:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case l:
                case f:
                case T:
                case w:
                case c:
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
  function v(s) {
    return g(s) === h;
  }
  return W.AsyncMode = u, W.ConcurrentMode = h, W.ContextConsumer = l, W.ContextProvider = c, W.Element = t, W.ForwardRef = f, W.Fragment = n, W.Lazy = T, W.Memo = w, W.Portal = r, W.Profiler = a, W.StrictMode = o, W.Suspense = m, W.isAsyncMode = function(s) {
    return v(s) || g(s) === u;
  }, W.isConcurrentMode = v, W.isContextConsumer = function(s) {
    return g(s) === l;
  }, W.isContextProvider = function(s) {
    return g(s) === c;
  }, W.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === t;
  }, W.isForwardRef = function(s) {
    return g(s) === f;
  }, W.isFragment = function(s) {
    return g(s) === n;
  }, W.isLazy = function(s) {
    return g(s) === T;
  }, W.isMemo = function(s) {
    return g(s) === w;
  }, W.isPortal = function(s) {
    return g(s) === r;
  }, W.isProfiler = function(s) {
    return g(s) === a;
  }, W.isStrictMode = function(s) {
    return g(s) === o;
  }, W.isSuspense = function(s) {
    return g(s) === m;
  }, W.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === h || s === a || s === o || s === m || s === S || typeof s == "object" && s !== null && (s.$$typeof === T || s.$$typeof === w || s.$$typeof === c || s.$$typeof === l || s.$$typeof === f || s.$$typeof === Y || s.$$typeof === $ || s.$$typeof === b || s.$$typeof === D);
  }, W.typeOf = g, W;
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
function Jr() {
  return ft || (ft = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, D = e ? Symbol.for("react.block") : 60121, Y = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function g(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === n || y === h || y === a || y === o || y === m || y === S || typeof y == "object" && y !== null && (y.$$typeof === T || y.$$typeof === w || y.$$typeof === c || y.$$typeof === l || y.$$typeof === f || y.$$typeof === Y || y.$$typeof === $ || y.$$typeof === b || y.$$typeof === D);
    }
    function v(y) {
      if (typeof y == "object" && y !== null) {
        var le = y.$$typeof;
        switch (le) {
          case t:
            var xe = y.type;
            switch (xe) {
              case u:
              case h:
              case n:
              case a:
              case o:
              case m:
                return xe;
              default:
                var tt = xe && xe.$$typeof;
                switch (tt) {
                  case l:
                  case f:
                  case T:
                  case w:
                  case c:
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
    var s = u, M = h, C = l, L = c, x = t, U = f, G = n, Q = T, q = w, z = r, O = a, V = o, B = m, oe = !1;
    function ce(y) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(y) || v(y) === u;
    }
    function d(y) {
      return v(y) === h;
    }
    function p(y) {
      return v(y) === l;
    }
    function _(y) {
      return v(y) === c;
    }
    function F(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }
    function E(y) {
      return v(y) === f;
    }
    function A(y) {
      return v(y) === n;
    }
    function N(y) {
      return v(y) === T;
    }
    function k(y) {
      return v(y) === w;
    }
    function I(y) {
      return v(y) === r;
    }
    function P(y) {
      return v(y) === a;
    }
    function R(y) {
      return v(y) === o;
    }
    function Z(y) {
      return v(y) === m;
    }
    j.AsyncMode = s, j.ConcurrentMode = M, j.ContextConsumer = C, j.ContextProvider = L, j.Element = x, j.ForwardRef = U, j.Fragment = G, j.Lazy = Q, j.Memo = q, j.Portal = z, j.Profiler = O, j.StrictMode = V, j.Suspense = B, j.isAsyncMode = ce, j.isConcurrentMode = d, j.isContextConsumer = p, j.isContextProvider = _, j.isElement = F, j.isForwardRef = E, j.isFragment = A, j.isLazy = N, j.isMemo = k, j.isPortal = I, j.isProfiler = P, j.isStrictMode = R, j.isSuspense = Z, j.isValidElementType = g, j.typeOf = v;
  }()), j;
}
var pt;
function jt() {
  return pt || (pt = 1, process.env.NODE_ENV === "production" ? De.exports = Qr() : De.exports = Jr()), De.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ie, ht;
function Zr() {
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
      for (var c = {}, l = 0; l < 10; l++)
        c["_" + String.fromCharCode(l)] = l;
      var u = Object.getOwnPropertyNames(c).map(function(f) {
        return c[f];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        h[f] = f;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ie = o() ? Object.assign : function(a, c) {
    for (var l, u = n(a), h, f = 1; f < arguments.length; f++) {
      l = Object(arguments[f]);
      for (var m in l)
        t.call(l, m) && (u[m] = l[m]);
      if (e) {
        h = e(l);
        for (var S = 0; S < h.length; S++)
          r.call(l, h[S]) && (u[h[S]] = l[h[S]]);
      }
    }
    return u;
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
function qt() {
  return gt || (gt = 1, Ye = Function.call.bind(Object.prototype.hasOwnProperty)), Ye;
}
var We, yt;
function en() {
  if (yt)
    return We;
  yt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Qe(), r = {}, n = qt();
    e = function(a) {
      var c = "Warning: " + a;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function o(a, c, l, u, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (n(a, f)) {
          var m;
          try {
            if (typeof a[f] != "function") {
              var S = Error(
                (u || "React class") + ": " + l + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw S.name = "Invariant Violation", S;
            }
            m = a[f](c, f, u, l, null, t);
          } catch (T) {
            m = T;
          }
          if (m && !(m instanceof Error) && e(
            (u || "React class") + ": type specification of " + l + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var w = h ? h() : "";
            e(
              "Failed " + l + " type: " + m.message + (w ?? "")
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
function tn() {
  if (vt)
    return je;
  vt = 1;
  var e = jt(), t = Zr(), r = Qe(), n = qt(), o = en(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var u = "Warning: " + l;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return je = function(l, u) {
    var h = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function m(d) {
      var p = d && (h && d[h] || d[f]);
      if (typeof p == "function")
        return p;
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
      arrayOf: g,
      element: v(),
      elementType: s(),
      instanceOf: M,
      node: U(),
      objectOf: L,
      oneOf: C,
      oneOfType: x,
      shape: Q,
      exact: q
    };
    function T(d, p) {
      return d === p ? d !== 0 || 1 / d === 1 / p : d !== d && p !== p;
    }
    function D(d, p) {
      this.message = d, this.data = p && typeof p == "object" ? p : {}, this.stack = "";
    }
    D.prototype = Error.prototype;
    function Y(d) {
      if (process.env.NODE_ENV !== "production")
        var p = {}, _ = 0;
      function F(A, N, k, I, P, R, Z) {
        if (I = I || S, R = R || k, Z !== r) {
          if (u) {
            var y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw y.name = "Invariant Violation", y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = I + ":" + k;
            !p[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            _ < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + R + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), p[le] = !0, _++);
          }
        }
        return N[k] == null ? A ? N[k] === null ? new D("The " + P + " `" + R + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new D("The " + P + " `" + R + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : d(N, k, I, P, R);
      }
      var E = F.bind(null, !1);
      return E.isRequired = F.bind(null, !0), E;
    }
    function $(d) {
      function p(_, F, E, A, N, k) {
        var I = _[F], P = V(I);
        if (P !== d) {
          var R = B(I);
          return new D(
            "Invalid " + A + " `" + N + "` of type " + ("`" + R + "` supplied to `" + E + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return Y(p);
    }
    function b() {
      return Y(c);
    }
    function g(d) {
      function p(_, F, E, A, N) {
        if (typeof d != "function")
          return new D("Property `" + N + "` of component `" + E + "` has invalid PropType notation inside arrayOf.");
        var k = _[F];
        if (!Array.isArray(k)) {
          var I = V(k);
          return new D("Invalid " + A + " `" + N + "` of type " + ("`" + I + "` supplied to `" + E + "`, expected an array."));
        }
        for (var P = 0; P < k.length; P++) {
          var R = d(k, P, E, A, N + "[" + P + "]", r);
          if (R instanceof Error)
            return R;
        }
        return null;
      }
      return Y(p);
    }
    function v() {
      function d(p, _, F, E, A) {
        var N = p[_];
        if (!l(N)) {
          var k = V(N);
          return new D("Invalid " + E + " `" + A + "` of type " + ("`" + k + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return Y(d);
    }
    function s() {
      function d(p, _, F, E, A) {
        var N = p[_];
        if (!e.isValidElementType(N)) {
          var k = V(N);
          return new D("Invalid " + E + " `" + A + "` of type " + ("`" + k + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return Y(d);
    }
    function M(d) {
      function p(_, F, E, A, N) {
        if (!(_[F] instanceof d)) {
          var k = d.name || S, I = ce(_[F]);
          return new D("Invalid " + A + " `" + N + "` of type " + ("`" + I + "` supplied to `" + E + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return Y(p);
    }
    function C(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), c;
      function p(_, F, E, A, N) {
        for (var k = _[F], I = 0; I < d.length; I++)
          if (T(k, d[I]))
            return null;
        var P = JSON.stringify(d, function(Z, y) {
          var le = B(y);
          return le === "symbol" ? String(y) : y;
        });
        return new D("Invalid " + A + " `" + N + "` of value `" + String(k) + "` " + ("supplied to `" + E + "`, expected one of " + P + "."));
      }
      return Y(p);
    }
    function L(d) {
      function p(_, F, E, A, N) {
        if (typeof d != "function")
          return new D("Property `" + N + "` of component `" + E + "` has invalid PropType notation inside objectOf.");
        var k = _[F], I = V(k);
        if (I !== "object")
          return new D("Invalid " + A + " `" + N + "` of type " + ("`" + I + "` supplied to `" + E + "`, expected an object."));
        for (var P in k)
          if (n(k, P)) {
            var R = d(k, P, E, A, N + "." + P, r);
            if (R instanceof Error)
              return R;
          }
        return null;
      }
      return Y(p);
    }
    function x(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var p = 0; p < d.length; p++) {
        var _ = d[p];
        if (typeof _ != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(_) + " at index " + p + "."
          ), c;
      }
      function F(E, A, N, k, I) {
        for (var P = [], R = 0; R < d.length; R++) {
          var Z = d[R], y = Z(E, A, N, k, I, r);
          if (y == null)
            return null;
          y.data && n(y.data, "expectedType") && P.push(y.data.expectedType);
        }
        var le = P.length > 0 ? ", expected one of type [" + P.join(", ") + "]" : "";
        return new D("Invalid " + k + " `" + I + "` supplied to " + ("`" + N + "`" + le + "."));
      }
      return Y(F);
    }
    function U() {
      function d(p, _, F, E, A) {
        return z(p[_]) ? null : new D("Invalid " + E + " `" + A + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return Y(d);
    }
    function G(d, p, _, F, E) {
      return new D(
        (d || "React class") + ": " + p + " type `" + _ + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + E + "`."
      );
    }
    function Q(d) {
      function p(_, F, E, A, N) {
        var k = _[F], I = V(k);
        if (I !== "object")
          return new D("Invalid " + A + " `" + N + "` of type `" + I + "` " + ("supplied to `" + E + "`, expected `object`."));
        for (var P in d) {
          var R = d[P];
          if (typeof R != "function")
            return G(E, A, N, P, B(R));
          var Z = R(k, P, E, A, N + "." + P, r);
          if (Z)
            return Z;
        }
        return null;
      }
      return Y(p);
    }
    function q(d) {
      function p(_, F, E, A, N) {
        var k = _[F], I = V(k);
        if (I !== "object")
          return new D("Invalid " + A + " `" + N + "` of type `" + I + "` " + ("supplied to `" + E + "`, expected `object`."));
        var P = t({}, _[F], d);
        for (var R in P) {
          var Z = d[R];
          if (n(d, R) && typeof Z != "function")
            return G(E, A, N, R, B(Z));
          if (!Z)
            return new D(
              "Invalid " + A + " `" + N + "` key `" + R + "` supplied to `" + E + "`.\nBad object: " + JSON.stringify(_[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var y = Z(k, R, E, A, N + "." + R, r);
          if (y)
            return y;
        }
        return null;
      }
      return Y(p);
    }
    function z(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(z);
          if (d === null || l(d))
            return !0;
          var p = m(d);
          if (p) {
            var _ = p.call(d), F;
            if (p !== d.entries) {
              for (; !(F = _.next()).done; )
                if (!z(F.value))
                  return !1;
            } else
              for (; !(F = _.next()).done; ) {
                var E = F.value;
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
    function O(d, p) {
      return d === "symbol" ? !0 : p ? p["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && p instanceof Symbol : !1;
    }
    function V(d) {
      var p = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : O(p, d) ? "symbol" : p;
    }
    function B(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var p = V(d);
      if (p === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return p;
    }
    function oe(d) {
      var p = B(d);
      switch (p) {
        case "array":
        case "object":
          return "an " + p;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + p;
        default:
          return p;
      }
    }
    function ce(d) {
      return !d.constructor || !d.constructor.name ? S : d.constructor.name;
    }
    return w.checkPropTypes = o, w.resetWarningCache = o.resetWarningCache, w.PropTypes = w, w;
  }, je;
}
var qe, bt;
function rn() {
  if (bt)
    return qe;
  bt = 1;
  var e = Qe();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, qe = function() {
    function n(c, l, u, h, f, m) {
      if (m !== e) {
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
  var nn = jt(), on = !0;
  Be.exports = tn()(nn.isElement, on);
} else
  Be.exports = rn()();
var zt = Be.exports;
function Vt(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Vt(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function St() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Vt(e)) && (n && (n += " "), n += t);
  return n;
}
const an = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: St,
  default: St
}, Symbol.toStringTag, { value: "Module" })), sn = /* @__PURE__ */ $r(an);
var X = {}, de = {};
Object.defineProperty(de, "__esModule", {
  value: !0
});
de.dontSetMe = fn;
de.findInArray = cn;
de.int = dn;
de.isFunction = ln;
de.isNum = un;
function cn(e, t) {
  for (let r = 0, n = e.length; r < n; r++)
    if (t.apply(t, [e[r], r, e]))
      return e[r];
}
function ln(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function un(e) {
  return typeof e == "number" && !isNaN(e);
}
function dn(e) {
  return parseInt(e, 10);
}
function fn(e, t, r) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var be = {};
Object.defineProperty(be, "__esModule", {
  value: !0
});
be.browserPrefixToKey = Bt;
be.browserPrefixToStyle = pn;
be.default = void 0;
be.getPrefix = Xt;
const ze = ["Moz", "Webkit", "O", "ms"];
function Xt() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const r = (e = window.document) === null || e === void 0 || (e = e.documentElement) === null || e === void 0 ? void 0 : e.style;
  if (!r || t in r)
    return "";
  for (let n = 0; n < ze.length; n++)
    if (Bt(t, ze[n]) in r)
      return ze[n];
  return "";
}
function Bt(e, t) {
  return t ? "".concat(t).concat(hn(e)) : e;
}
function pn(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function hn(e) {
  let t = "", r = !0;
  for (let n = 0; n < e.length; n++)
    r ? (t += e[n].toUpperCase(), r = !1) : e[n] === "-" ? r = !0 : t += e[n];
  return t;
}
be.default = Xt();
Object.defineProperty(X, "__esModule", {
  value: !0
});
X.addClassName = Ht;
X.addEvent = yn;
X.addUserSelectStyles = On;
X.createCSSTransform = Tn;
X.createSVGTransform = xn;
X.getTouch = Dn;
X.getTouchIdentifier = En;
X.getTranslation = Je;
X.innerHeight = Cn;
X.innerWidth = Pn;
X.matchesSelector = Gt;
X.matchesSelectorAndParentsTo = gn;
X.offsetXYFromParent = wn;
X.outerHeight = bn;
X.outerWidth = Sn;
X.removeClassName = Kt;
X.removeEvent = vn;
X.removeUserSelectStyles = Rn;
var ne = de, Ct = mn(be);
function Ut(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Ut = function(n) {
    return n ? r : t;
  })(e);
}
function mn(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Ut(t);
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
let Ee = "";
function Gt(e, t) {
  return Ee || (Ee = (0, ne.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, ne.isFunction)(e[r]);
  })), (0, ne.isFunction)(e[Ee]) ? e[Ee](t) : !1;
}
function gn(e, t, r) {
  let n = e;
  do {
    if (Gt(n, t))
      return !0;
    if (n === r)
      return !1;
    n = n.parentNode;
  } while (n);
  return !1;
}
function yn(e, t, r, n) {
  if (!e)
    return;
  const o = {
    capture: !0,
    ...n
  };
  e.addEventListener ? e.addEventListener(t, r, o) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r;
}
function vn(e, t, r, n) {
  if (!e)
    return;
  const o = {
    capture: !0,
    ...n
  };
  e.removeEventListener ? e.removeEventListener(t, r, o) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
}
function bn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ne.int)(r.borderTopWidth), t += (0, ne.int)(r.borderBottomWidth), t;
}
function Sn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ne.int)(r.borderLeftWidth), t += (0, ne.int)(r.borderRightWidth), t;
}
function Cn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ne.int)(r.paddingTop), t -= (0, ne.int)(r.paddingBottom), t;
}
function Pn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ne.int)(r.paddingLeft), t -= (0, ne.int)(r.paddingRight), t;
}
function wn(e, t, r) {
  const o = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), a = (e.clientX + t.scrollLeft - o.left) / r, c = (e.clientY + t.scrollTop - o.top) / r;
  return {
    x: a,
    y: c
  };
}
function Tn(e, t) {
  const r = Je(e, t, "px");
  return {
    [(0, Ct.browserPrefixToKey)("transform", Ct.default)]: r
  };
}
function xn(e, t) {
  return Je(e, t, "");
}
function Je(e, t, r) {
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
function Dn(e, t) {
  return e.targetTouches && (0, ne.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, ne.findInArray)(e.changedTouches, (r) => t === r.identifier);
}
function En(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function On(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && Ht(e.body, "react-draggable-transparent-selection");
}
function Rn(e) {
  if (e)
    try {
      if (e.body && Kt(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        const t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function Ht(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function Kt(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var fe = {};
Object.defineProperty(fe, "__esModule", {
  value: !0
});
fe.canDragX = Mn;
fe.canDragY = Fn;
fe.createCoreData = An;
fe.createDraggableData = Ln;
fe.getBoundPosition = _n;
fe.getControlPosition = kn;
fe.snapToGrid = Nn;
var re = de, Ce = X;
function _n(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : In(n);
  const o = Ze(e);
  if (typeof n == "string") {
    const {
      ownerDocument: a
    } = o, c = a.defaultView;
    let l;
    if (n === "parent" ? l = o.parentNode : l = a.querySelector(n), !(l instanceof c.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const u = l, h = c.getComputedStyle(o), f = c.getComputedStyle(u);
    n = {
      left: -o.offsetLeft + (0, re.int)(f.paddingLeft) + (0, re.int)(h.marginLeft),
      top: -o.offsetTop + (0, re.int)(f.paddingTop) + (0, re.int)(h.marginTop),
      right: (0, Ce.innerWidth)(u) - (0, Ce.outerWidth)(o) - o.offsetLeft + (0, re.int)(f.paddingRight) - (0, re.int)(h.marginRight),
      bottom: (0, Ce.innerHeight)(u) - (0, Ce.outerHeight)(o) - o.offsetTop + (0, re.int)(f.paddingBottom) - (0, re.int)(h.marginBottom)
    };
  }
  return (0, re.isNum)(n.right) && (t = Math.min(t, n.right)), (0, re.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, re.isNum)(n.left) && (t = Math.max(t, n.left)), (0, re.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function Nn(e, t, r) {
  const n = Math.round(t / e[0]) * e[0], o = Math.round(r / e[1]) * e[1];
  return [n, o];
}
function Mn(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function Fn(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function kn(e, t, r) {
  const n = typeof t == "number" ? (0, Ce.getTouch)(e, t) : null;
  if (typeof t == "number" && !n)
    return null;
  const o = Ze(r), a = r.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, Ce.offsetXYFromParent)(n || e, a, r.props.scale);
}
function An(e, t, r) {
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
function Ln(e, t) {
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
function In(e) {
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
Ae.default = $n;
function $n() {
}
Object.defineProperty(ke, "__esModule", {
  value: !0
});
ke.default = void 0;
var Ve = Wn(pe), ee = et(zt), Yn = et(Ft), K = X, he = fe, Xe = de, Pe = et(Ae);
function et(e) {
  return e && e.__esModule ? e : { default: e };
}
function Qt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Qt = function(n) {
    return n ? r : t;
  })(e);
}
function Wn(e, t) {
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
      var c = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
function J(e, t, r) {
  return t = jn(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jn(e) {
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
        x: c,
        y: l
      } = a, u = (0, he.createCoreData)(this, c, l);
      (0, Pe.default)("DraggableCore: handleDragStart: %j", u), (0, Pe.default)("calling", this.props.onStart), !(this.props.onStart(t, u) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, K.addUserSelectStyles)(n), this.dragging = !0, this.lastX = c, this.lastY = l, (0, K.addEvent)(n, me.move, this.handleDrag), (0, K.addEvent)(n, me.stop, this.handleDragStop));
    }), J(this, "handleDrag", (t) => {
      const r = (0, he.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let l = n - this.lastX, u = o - this.lastY;
        if ([l, u] = (0, he.snapToGrid)(this.props.grid, l, u), !l && !u)
          return;
        n = this.lastX + l, o = this.lastY + u;
      }
      const a = (0, he.createCoreData)(this, n, o);
      if ((0, Pe.default)("DraggableCore: handleDrag: %j", a), this.props.onDrag(t, a) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const u = document.createEvent("MouseEvents");
          u.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(u);
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
        let u = n - this.lastX || 0, h = o - this.lastY || 0;
        [u, h] = (0, he.snapToGrid)(this.props.grid, u, h), n = this.lastX + u, o = this.lastY + h;
      }
      const a = (0, he.createCoreData)(this, n, o);
      if (this.props.onStop(t, a) === !1 || this.mounted === !1)
        return !1;
      const l = this.findDOMNode();
      l && this.props.enableUserSelectHack && (0, K.removeUserSelectStyles)(l.ownerDocument), (0, Pe.default)("DraggableCore: handleDragStop: %j", a), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, l && ((0, Pe.default)("DraggableCore: Removing handlers"), (0, K.removeEvent)(l.ownerDocument, me.move, this.handleDrag), (0, K.removeEvent)(l.ownerDocument, me.stop, this.handleDragStop));
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
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (r = this.props) === null || r === void 0 || (r = r.nodeRef) === null || r === void 0 ? void 0 : r.current : Yn.default.findDOMNode(this);
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
      return u.default;
    }
  }), e.default = void 0;
  var t = S(pe), r = f(zt), n = f(Ft), o = f(sn), a = X, c = fe, l = de, u = f(ke), h = f(Ae);
  function f(b) {
    return b && b.__esModule ? b : { default: b };
  }
  function m(b) {
    if (typeof WeakMap != "function")
      return null;
    var g = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap();
    return (m = function(s) {
      return s ? v : g;
    })(b);
  }
  function S(b, g) {
    if (!g && b && b.__esModule)
      return b;
    if (b === null || typeof b != "object" && typeof b != "function")
      return { default: b };
    var v = m(g);
    if (v && v.has(b))
      return v.get(b);
    var s = {}, M = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var C in b)
      if (C !== "default" && Object.prototype.hasOwnProperty.call(b, C)) {
        var L = M ? Object.getOwnPropertyDescriptor(b, C) : null;
        L && (L.get || L.set) ? Object.defineProperty(s, C, L) : s[C] = b[C];
      }
    return s.default = b, v && v.set(b, s), s;
  }
  function w() {
    return w = Object.assign ? Object.assign.bind() : function(b) {
      for (var g = 1; g < arguments.length; g++) {
        var v = arguments[g];
        for (var s in v)
          Object.prototype.hasOwnProperty.call(v, s) && (b[s] = v[s]);
      }
      return b;
    }, w.apply(this, arguments);
  }
  function T(b, g, v) {
    return g = D(g), g in b ? Object.defineProperty(b, g, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : b[g] = v, b;
  }
  function D(b) {
    var g = Y(b, "string");
    return typeof g == "symbol" ? g : String(g);
  }
  function Y(b, g) {
    if (typeof b != "object" || b === null)
      return b;
    var v = b[Symbol.toPrimitive];
    if (v !== void 0) {
      var s = v.call(b, g || "default");
      if (typeof s != "object")
        return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (g === "string" ? String : Number)(b);
  }
  class $ extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(g, v) {
      let {
        position: s
      } = g, {
        prevPropsPosition: M
      } = v;
      return s && (!M || s.x !== M.x || s.y !== M.y) ? ((0, h.default)("Draggable: getDerivedStateFromProps %j", {
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
    constructor(g) {
      super(g), T(this, "onDragStart", (v, s) => {
        if ((0, h.default)("Draggable: onDragStart: %j", s), this.props.onStart(v, (0, c.createDraggableData)(this, s)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), T(this, "onDrag", (v, s) => {
        if (!this.state.dragging)
          return !1;
        (0, h.default)("Draggable: onDrag: %j", s);
        const M = (0, c.createDraggableData)(this, s), C = {
          x: M.x,
          y: M.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x,
            y: U
          } = C;
          C.x += this.state.slackX, C.y += this.state.slackY;
          const [G, Q] = (0, c.getBoundPosition)(this, C.x, C.y);
          C.x = G, C.y = Q, C.slackX = this.state.slackX + (x - C.x), C.slackY = this.state.slackY + (U - C.y), M.x = C.x, M.y = C.y, M.deltaX = C.x - this.state.x, M.deltaY = C.y - this.state.y;
        }
        if (this.props.onDrag(v, M) === !1)
          return !1;
        this.setState(C);
      }), T(this, "onDragStop", (v, s) => {
        if (!this.state.dragging || this.props.onStop(v, (0, c.createDraggableData)(this, s)) === !1)
          return !1;
        (0, h.default)("Draggable: onDragStop: %j", s);
        const C = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x,
            y: U
          } = this.props.position;
          C.x = x, C.y = U;
        }
        this.setState(C);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: g.position ? g.position.x : g.defaultPosition.x,
        y: g.position ? g.position.y : g.defaultPosition.y,
        prevPropsPosition: {
          ...g.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, g.position && !(g.onDrag || g.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
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
      var g, v;
      return (g = (v = this.props) === null || v === void 0 || (v = v.nodeRef) === null || v === void 0 ? void 0 : v.current) !== null && g !== void 0 ? g : n.default.findDOMNode(this);
    }
    render() {
      const {
        axis: g,
        bounds: v,
        children: s,
        defaultPosition: M,
        defaultClassName: C,
        defaultClassNameDragging: L,
        defaultClassNameDragged: x,
        position: U,
        positionOffset: G,
        scale: Q,
        ...q
      } = this.props;
      let z = {}, O = null;
      const B = !!!U || this.state.dragging, oe = U || M, ce = {
        // Set left if horizontal drag is enabled
        x: (0, c.canDragX)(this) && B ? this.state.x : oe.x,
        // Set top if vertical drag is enabled
        y: (0, c.canDragY)(this) && B ? this.state.y : oe.y
      };
      this.state.isElementSVG ? O = (0, a.createSVGTransform)(ce, G) : z = (0, a.createCSSTransform)(ce, G);
      const d = (0, o.default)(s.props.className || "", C, {
        [L]: this.state.dragging,
        [x]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(u.default, w({}, q, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(s), {
        className: d,
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
    className: l.dontSetMe,
    style: l.dontSetMe,
    transform: l.dontSetMe
  }), T($, "defaultProps", {
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
  default: Jt,
  DraggableCore: zn
} = Wt;
Fe.exports = Jt;
Fe.exports.default = Jt;
Fe.exports.DraggableCore = zn;
var Vn = Fe.exports;
const Xn = /* @__PURE__ */ Yr(Vn);
const Bn = (e) => {
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
}, Un = se(function(t, r) {
  const { formLayout: n, context: o } = t, { formData: a } = o, c = ae({}), l = Bn(t), u = "palmyra-form-field-data", h = Ge(() => (f) => At(f, c, f.label), [a.data]);
  return /* @__PURE__ */ i("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: n.fields.map((f, m) => /* @__PURE__ */ i("div", { className: l, children: /* @__PURE__ */ i("div", { className: u, children: h(f) }) }, f.attribute)) });
});
function Gn(e) {
  return /* @__PURE__ */ i(
    Xn,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ i(yr, { ...e })
    }
  );
}
const Hn = ({ columns: e, isOpen: t, onClose: r, setFilter: n, defaultFilter: o = {} }) => {
  const a = (w) => {
    w.stopPropagation();
  };
  var { getFieldManager: c, getFormData: l } = Mt(o, () => {
  }, "edit");
  const u = () => {
    n({});
  }, h = () => {
    var w = l();
    n && n(w);
  }, f = () => {
    r();
  }, m = (w) => {
    w.keyCode === 27 && f();
  }, S = Ir(e);
  return /* @__PURE__ */ i("div", { className: "grid-filter-container", children: /* @__PURE__ */ H(
    gr,
    {
      open: t,
      onClick: a,
      PaperComponent: Gn,
      onKeyDown: m,
      children: [
        /* @__PURE__ */ H("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ i("div", { className: "grid-header-text-container", children: /* @__PURE__ */ i("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ i("div", { className: "grid-header-icon-container", onClick: f, children: /* @__PURE__ */ i(we, { title: "close", arrow: !0, children: /* @__PURE__ */ i(Or, { className: "filter-cancel-icon" }) }) })
        ] }),
        /* @__PURE__ */ i("span", { className: "filter-header-border" }),
        /* @__PURE__ */ i("div", { className: "grid-filter-content", children: /* @__PURE__ */ i(Ne.Provider, { value: c, children: /* @__PURE__ */ i(
          Lt,
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
              Renderer: Un
            }
          }
        ) }) }),
        /* @__PURE__ */ H("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ i(Se, { className: "filter-reset-btn", disableRipple: !0, onClick: u, children: "Reset" }),
          /* @__PURE__ */ i(Se, { className: "filter-button", disableRipple: !0, onClick: h, children: "Filter" })
        ] })
      ]
    }
  ) });
}, Kn = se(function(t, r) {
  const { columns: n, children: o, EmptyChild: a, onRowClick: c, quickSearch: l } = t, u = a || kr, h = t.customizer || Lr, [f, m] = te(!1), [S, w] = te("standard"), [T, D] = te(!1), [Y, $] = te(""), {
    setQueryFilter: b,
    setQuickSearch: g,
    setSortColumns: v,
    gotoPage: s,
    setPageSize: M,
    getPageNo: C,
    refreshData: L,
    data: x,
    totalRecords: U,
    pageSizeOptions: G,
    filter: Q,
    queryLimit: q
  } = Me(t), z = r || ae(null);
  ve(z, () => ({
    setFilter: (P) => {
      b(P);
    },
    refresh: () => {
      L();
    }
  }), []);
  const O = (P, R) => {
    s(R);
  }, V = Fr(n, h), B = (P) => {
    w(P);
  }, oe = () => {
    m(!f);
  }, ce = () => S === "compact" ? { padding: "3px" } : S === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, d = () => S === "compact" ? { padding: "3px" } : S === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, p = () => {
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
  }, _ = (P) => {
    const R = P.target.value;
    $(R), R ? g(R) : b({});
  }, F = (P) => {
    c && c(P);
  }, E = (P) => {
    const R = parseInt(P.target.value, 10);
    M(R);
  }, A = () => {
    console.info("Export Clicked");
  }, N = 200, k = !!t.pageSize;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ H("div", { children: [
    o,
    /* @__PURE__ */ H("div", { className: "grid-header", children: [
      /* @__PURE__ */ i("div", { className: "grid-header-filter", children: !!l && /* @__PURE__ */ i(
        He,
        {
          sx: { width: N },
          type: "text",
          value: Y,
          onChange: _,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ i(Ke, { position: "end", children: /* @__PURE__ */ i(Yt, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ i(vr, { onClickAway: () => {
        m(!1);
      }, children: /* @__PURE__ */ H("div", { className: "grid-header-button", onClick: oe, children: [
        /* @__PURE__ */ i(we, { title: "Density", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: p() }) }),
        f && /* @__PURE__ */ i("div", { className: "density-dropdown-content", children: /* @__PURE__ */ H("ul", { children: [
          /* @__PURE__ */ H("li", { onClick: () => B("standard"), children: [
            /* @__PURE__ */ i(nt, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ H("li", { onClick: () => B("compact"), children: [
            /* @__PURE__ */ i(ot, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ H("li", { onClick: () => B("comfortable"), children: [
            /* @__PURE__ */ i(at, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ H("div", { className: "grid-header-button", children: [
        /* @__PURE__ */ i(we, { title: "Filter", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, onClick: () => D(!0), children: /* @__PURE__ */ i(Rr, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ i(
          Hn,
          {
            columns: n,
            setFilter: b,
            defaultFilter: Q,
            isOpen: T,
            onClose: () => D(!1)
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: A, children: /* @__PURE__ */ i(we, { title: "Export", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(_r, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ i(we, { title: "New", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Nr, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ i(Te, {})
    ] }),
    /* @__PURE__ */ i("div", { className: "grid-table", children: /* @__PURE__ */ i(
      Ar,
      {
        columnDefs: V,
        EmptyChild: u,
        rowData: x,
        onRowClick: F,
        onRowStyle: ce,
        onHeaderStyle: d,
        onSortColumn: v
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "grid-header", children: /* @__PURE__ */ i("div", { className: "grid-filter", children: k && /* @__PURE__ */ i(
      Et,
      {
        component: "div",
        count: U || 0,
        page: C(),
        onPageChange: O,
        rowsPerPage: q.limit,
        rowsPerPageOptions: G || [],
        onRowsPerPageChange: E
      }
    ) }) })
  ] }) });
}), Zo = se(function(t, r) {
  const { columns: n, endPoint: o, storeFactory: a, layoutParams: c } = t, l = t.quickSearch || "", u = ae(null), h = (m, S) => {
    console.log(S);
  };
  ye(() => {
    var m = it.subscribe(t.topic, h);
    return () => {
      it.unsubscribe(m);
    };
  }, [t.topic]), r && ve(r, () => ({
    setFilter: (m) => {
      u.current.setFilter(m);
    },
    refresh: () => {
      u.current.refresh();
    }
  }), [n, o]);
  const f = {
    fields: n,
    quickSearch: l,
    storeOptions: {
      endPoint: o
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ i(Te, { children: /* @__PURE__ */ i(Ue.Provider, { value: a, children: /* @__PURE__ */ i(Zt, { layout: f, context: c, customizer: t.customizer, ref: u }) }) });
}), Qn = se(function(t, r) {
  const n = t.layout, [o, a] = te(n.fields), c = n.pagination ? n.pagination : [15], l = Oe(Ue), u = Oe(Tt);
  var h = n.storeOptions || {}, f = {};
  wr(f, h, u);
  const m = l.getGridStore(f, n.storeOptions.endPoint);
  ye(() => {
    h.hasLayout && m.queryLayout({}).then((T) => {
      a(T.columns);
    });
  }, []);
  const { onClick: S, onNewClick: w } = Wr(n.actionOptions, u);
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    Kn,
    {
      columns: o,
      store: m,
      pageSize: c,
      onRowClick: S,
      onNewClick: w,
      customizer: t.customizer,
      quickSearch: n.quickSearch,
      ref: r
    }
  ) });
}), Zt = Qn, Jn = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Container || Nt;
  return /* @__PURE__ */ i(kt, { fallback: /* @__PURE__ */ i("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ i(n, { ...t, children: ((a) => /* @__PURE__ */ i(
    Zt,
    {
      context: r,
      layout: a
    }
  ))(t.tableLayout) }) });
}, Zn = (e) => {
  const { layout: t } = e;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ i(Lt, { ...e });
    case "view":
      return /* @__PURE__ */ i(qr, { ...e });
    case "grid":
      return /* @__PURE__ */ i(Jn, { ...e });
    case "chart":
      return /* @__PURE__ */ i(Cr, { ...e });
    default:
      return /* @__PURE__ */ i(jr, { ...e });
  }
};
function eo(e, t) {
  var r = e || 1, n = t;
  return {
    w: r,
    h: n
  };
}
const er = (e) => {
  const { layout: t, context: r } = e, n = t.sections;
  function o(a, c, l) {
    const { w: u, h } = eo(a.width, a.height);
    return /* @__PURE__ */ i(br, { sx: { width: u, height: h }, children: /* @__PURE__ */ i(
      Zn,
      {
        layout: a,
        context: c
      }
    ) }, (a.name || "tab") + l);
  }
  return /* @__PURE__ */ i("div", { style: { display: "flex", flexWrap: "wrap" }, children: n.map((a, c) => o(a, r, c)) });
}, Pt = se(function(t, r) {
  const { layout: n } = t;
  ve(r, () => ({
    resetFilter() {
    }
  }), []);
  const o = {}, a = n.tabs;
  return /* @__PURE__ */ i("div", { children: a.map((c, l) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    er,
    {
      layout: c,
      context: o
    }
  ) }, c.name + l)) });
}), to = (e) => {
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
  var { getFieldManager: a, getFormData: c, isFormValid: l } = Mt(n, (f = t.callbacks) == null ? void 0 : f.onFormValidChange, to(t.mode));
  ve(r, () => ({
    getData() {
      return c();
    },
    isValid() {
      return l();
    }
  }), []);
  const u = { formData: n }, h = o.tabs;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(Ne.Provider, { value: a, children: h.map((m, S) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    er,
    {
      layout: m,
      context: u
    }
  ) }, m.name + S)) }) });
}), ro = (e) => {
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
}, ea = se(function(t, r) {
  const [n, o] = te(t.layout), a = t.mode ? t.mode : n.type ? n.type : "grid", c = t.layoutParams || {}, l = ro(a), u = ae(0);
  return ye(() => {
    o(t.layout), u.current < 999999 ? u.current++ : u.current = 0;
  }, [t.layout]), /* @__PURE__ */ i(kt, { fallback: /* @__PURE__ */ i("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ i(Ue.Provider, { value: t.storeFactory, children: /* @__PURE__ */ i(Tt.Provider, { value: c, children: /* @__PURE__ */ i(l, { ...t, ref: (h) => {
    r && (r.current = h);
  } }, u.current) }) }) });
}), ta = se(function(t, r) {
  const { children: n, Child: o, childProps: a, pageSize: c } = t, l = r || ae(null), {
    setQueryFilter: u,
    setQuickSearch: h,
    gotoPage: f,
    setPageSize: m,
    getPageNo: S,
    data: w,
    pageSizeOptions: T,
    queryLimit: D
  } = Me(t), Y = t.listKeyProvider || ((C, L) => L);
  ve(l, () => ({
    setFilter(C) {
      u(C);
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
    h(L);
  }, g = (C) => {
    const L = parseInt(C.target.value, 10);
    m(L);
  }, v = 200, s = !!c, M = !!t.quickSearch;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ H("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ H("div", { children: [
      /* @__PURE__ */ H("div", { className: "card-header", children: [
        /* @__PURE__ */ i("div", { className: "card-filter", children: M && /* @__PURE__ */ i(
          He,
          {
            sx: { width: v },
            type: "text",
            onChange: b,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ i(Ke, { position: "end", children: /* @__PURE__ */ i(Yt, { className: "card-filter-icon" }) })
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
            onRowsPerPageChange: g
          }
        ) })
      ] }),
      /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
        Sr,
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
  ea as F,
  Zt as G,
  Qo as M,
  Zo as P,
  ta as S,
  er as T,
  Kn as a,
  Xr as b,
  Me as c,
  Ur as d,
  Lt as e,
  Un as f,
  At as g,
  Hn as h,
  Jn as i,
  Zn as j,
  Pt as k,
  wt as l,
  Vr as u
};
