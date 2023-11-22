import "../assets/ServerCardLayout.css";
import Gt from "../palmyra/mui/form/MuiDatePicker.js";
import Ht from "../palmyra/mui/form/MuiDateTimePicker.js";
import Kt from "../palmyra/mui/form/MuiRadioGroup.js";
import Qt from "../palmyra/mui/form/MuiSelect.js";
import Jt from "../palmyra/mui/form/MuiTextArea.js";
import Zt from "../palmyra/mui/form/MuiTextField.js";
import er from "../palmyra/mui/form/MuiCheckBox.js";
import tr from "../palmyra/mui/form/MuiSwitch.js";
import rr from "../palmyra/mui/form/MuiPassword.js";
import nr from "../palmyra/mui/form/MuiServerLookup.js";
import { FieldManagerContext as qe, StoreFactoryContext as ze, LayoutParamsContext as bt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as s, jsxs as V, Fragment as Xe } from "react/jsx-runtime";
import de, { useState as ne, useEffect as Ee, forwardRef as se, useContext as je, useRef as ge, useImperativeHandle as Se, useMemo as St } from "react";
import { FormControl as or, FormControlLabel as ar, Checkbox as ir, FormHelperText as sr, Dialog as cr, Tooltip as we, Button as ve, Paper as lr, TextField as Ct, InputAdornment as wt, ClickAwayListener as ur, TablePagination as Pt, Box as dr } from "@mui/material";
import fr from "../palmyra/layout/card/CardLayout.js";
import pr from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as mr } from "../palmyra/mui/form/MuiUtil.js";
import hr from "../palmyra/mui/form/FieldDecorator.js";
import { hasDot as Qe } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as Je } from "../palmyra/form/FormUtil.js";
import Tt from "../palmyra/layout/container/SectionContainer.js";
import gr from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as yr } from "../palmyra/grid/base/ColumnConverter.js";
import vr from "../palmyra/grid/base/EmptyChildTable.js";
import br from "../palmyra/grid/base/TableX.js";
import { Close as Sr, Menu as Ze, DensitySmall as et, DensityLarge as tt, FilterAlt as Cr, FileDownloadOutlined as wr, Add as Pr } from "@mui/icons-material";
import { NoopCustomizer as Tr } from "../palmyra/grid/Types.js";
import { convertToField as xr } from "../palmyra/grid/base/GridFieldConverter.js";
import { d as xt } from "./PalmyraFormManager.js";
import "../palmyra/form/PalmyraForm.js";
import { a as Er, g as Dr } from "./_commonjsHelpers.js";
import Et from "react-dom";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import { topic as rt } from "../palmyra/utils/pubsub/topic.js";
import "dayjs";
import { mergeDeep as Or } from "../palmyra/utils/index.js";
import { getActionPublishers as Rr } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as Dt } from "../palmyra/layout/ErrorBoundary.js";
import _r from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import Nr from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { useKeyValue as Mr } from "../palmyra/utils/pubsub/PubSubHelper.js";
const Ue = (e) => {
  const { store: t, quickSearch: r, endPointVars: n } = e, o = e.fetchAll != !1, [a, l] = ne(null), [c, d] = e.filterTopic ? Mr(e.filterTopic, {}) : ne({}), [p, f] = ne({}), g = e.pageSize ? e.pageSize : 15;
  var w = g instanceof Array ? g : [g], T = g instanceof Array ? g[0] : g;
  const [D, M] = ne({ limit: T, offset: 0 }), [Y, $] = ne(null), b = () => Math.round(D.offset / D.limit), m = () => D.limit, v = (W) => {
    M({ ...D, offset: W * T });
  }, i = (W) => {
    const q = W > 10 || W == -1 ? W : 15;
    M({ ...D, limit: q });
  }, F = () => c ? Object.keys(c).length == 0 : !1;
  Ee(() => {
    (o || !F()) && S();
  }, [D, c, p]);
  const S = () => {
    const W = { filter: c, sortOrder: p, total: !0, endPointVars: n, ...D };
    if (t)
      try {
        t.query(W).then((q) => {
          $(q.result), l(q.total);
        }).catch((q) => {
          var oe = q.response ? q.response : q;
          console.error("error while fetching", oe), x();
        });
      } catch (q) {
        console.error(q), j();
      }
    else
      console.error("Store is not provided for the Grid"), j();
  }, j = () => {
    $([]), l(0);
  }, x = () => {
    $(void 0), l(null);
  };
  return {
    setQueryFilter: (W) => {
      W && Object.keys(W).length > 0 ? d(W) : d({});
    },
    setQuickSearch: (W) => {
      d(W ? { [r]: W } : {});
    },
    setSortColumns: (W) => {
      f(W);
    },
    refreshData: S,
    gotoPage: v,
    setPageSize: i,
    getPageNo: b,
    getLimit: m,
    filter: c,
    queryLimit: D,
    data: Y,
    totalRecords: a,
    pageSizeOptions: w
  };
};
function nt(e) {
  return console.log(e), e ? Array.isArray(e) ? e : typeof e == "string" ? e.split(",") : (console.log(e), [e]) : [];
}
const $o = se(function(t, r) {
  const n = je(qe), o = r || ge(null), a = n(t, "checkbox", o), { mutateOptions: l, setMutateOptions: c } = a, d = nt(a.data), p = a.error, f = a.eventListeners, w = { store: a.store, pageSize: -1 }, { data: T } = Ue(w), D = T, M = ge(null), Y = t.lookupOptions || {}, $ = Y.idAttribute || "id", b = Y.titleAttribute || "name", m = Qe($) ? (x) => Je($, x) : (x) => x[$], v = Qe(b) ? (x) => Je(b, x) : (x) => x[b];
  Se(o, () => ({
    focus() {
      M.current.focus();
    },
    isValid() {
      return !p.status;
    },
    assignAttribute(x) {
      M.current.assignAttribute(x);
    },
    clear() {
      a.setData("");
    },
    setValue(x) {
      a.setData(x);
    },
    setVisible(x) {
      c({ visible: x });
    }
  }), []);
  var i = mr(t, a.data, t.label);
  t.readonly && (i.inputProps = { readOnly: !0 });
  function F(x, X) {
    const U = nt(a.data);
    var J = U.indexOf(x);
    X ? J < 0 && U.push(x) : J >= 0 && U.splice(J, 1), f.onValueChange(U.toString());
  }
  var S = {
    onBlur: f.onBlur,
    onFocus: f.onFocus,
    onChange: (x) => {
      F(x.target.value, x.target.checked);
    }
  };
  const j = (x) => {
    const X = x.toString();
    return d.includes(X);
  };
  return /* @__PURE__ */ s("div", { className: t.className, children: l.visible && /* @__PURE__ */ s(
    hr,
    {
      label: t.title,
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ V(
        or,
        {
          className: "MuiServerCheckBoxFormControl",
          fullWidth: !0,
          error: p.status,
          ...i,
          children: [
            D ? D.map((x) => /* @__PURE__ */ s(
              ar,
              {
                value: m(x),
                control: /* @__PURE__ */ s(
                  ir,
                  {
                    ...S,
                    checked: j(m(x)),
                    disabled: t.readonly
                  }
                ),
                label: v(x)
              },
              m(x)
            )) : /* @__PURE__ */ s("div", { children: "No options provided" }),
            /* @__PURE__ */ s(sr, { className: "form-error-text", children: p.message })
          ]
        }
      )
    }
  ) });
}), Fr = (e) => {
  const { fieldDef: t } = e;
  return /* @__PURE__ */ V("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, ie = (e, t) => {
  const r = e.fieldDef;
  return /* @__PURE__ */ s(
    t,
    {
      ...r,
      label: e.title
    }
  );
}, ot = () => /* @__PURE__ */ s("div", { children: "To be Implemented" }), Ot = (e, t, r) => {
  const { type: n } = e, o = { fieldDef: e, title: r };
  switch (n) {
    case "string":
      return ie(o, Zt);
    case "radio":
      return ie(o, Kt);
    case "select":
      return ie(o, Qt);
    case "date":
      return ie(o, Gt);
    case "datetime":
      return ie(o, Ht);
    case "checkbox":
      return ie(o, er);
    case "serverlookup":
      return ie(o, nr);
    case "textarea":
      return ie(o, Jt);
    case "switch":
      return ie(o, tr);
    case "password":
      return ie(o, rr);
    case "multiSelect":
      return ot();
    case "dateRange":
      return ot();
    default:
      return Fr(o);
  }
}, Ar = se(function(t, r) {
  var f;
  const { formLayout: n, context: o } = t, { formData: a } = o, l = n.Container;
  ge({});
  const c = St(() => (g) => Ot(g), [a.data]);
  var d = ((f = n.options) == null ? void 0 : f.columns) || 1, p = { columns: d };
  return l ? /* @__PURE__ */ s("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((g, w) => /* @__PURE__ */ s(
    l,
    {
      index: w,
      field: g,
      label: g.title,
      options: p,
      children: c(g)
    },
    g.attribute
  )) }) : /* @__PURE__ */ s("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((g, w) => /* @__PURE__ */ s(Xe, { children: c(g) })) });
}), Rt = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Renderer || Ar, o = t.Container || Tt;
  const a = (l) => /* @__PURE__ */ s(
    n,
    {
      context: r,
      formLayout: l
    }
  );
  return /* @__PURE__ */ s(
    o,
    {
      hideTitle: t.hideTitle,
      title: t.title,
      name: t.name,
      children: /* @__PURE__ */ s(gr, { columns: t.columns, children: a(t.formLayout) })
    }
  );
};
var _t = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, at = de.createContext && de.createContext(_t), he = globalThis && globalThis.__assign || function() {
  return he = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, he.apply(this, arguments);
}, kr = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Nt(e) {
  return e && e.map(function(t, r) {
    return de.createElement(t.tag, he({
      key: r
    }, t.attr), Nt(t.child));
  });
}
function Ir(e) {
  return function(t) {
    return de.createElement(Lr, he({
      attr: he({}, e.attr)
    }, t), Nt(e.child));
  };
}
function Lr(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, a = e.title, l = kr(e, ["attr", "size", "title"]), c = o || r.size || "1em", d;
    return r.className && (d = r.className), e.className && (d = (d ? d + " " : "") + e.className), de.createElement("svg", he({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, l, {
      className: d,
      style: he(he({
        color: e.color || r.color
      }, r.style), e.style),
      height: c,
      width: c,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && de.createElement("title", null, a), e.children);
  };
  return at !== void 0 ? de.createElement(at.Consumer, null, function(r) {
    return t(r);
  }) : t(_t);
}
function Mt(e) {
  return Ir({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
}
var De = { exports: {} }, Ft = {}, We = { exports: {} }, Te = { exports: {} }, I = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var it;
function $r() {
  if (it)
    return I;
  it = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, w = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, D = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, Y = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function m(i) {
    if (typeof i == "object" && i !== null) {
      var F = i.$$typeof;
      switch (F) {
        case t:
          switch (i = i.type, i) {
            case d:
            case p:
            case n:
            case a:
            case o:
            case g:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case c:
                case f:
                case D:
                case T:
                case l:
                  return i;
                default:
                  return F;
              }
          }
        case r:
          return F;
      }
    }
  }
  function v(i) {
    return m(i) === p;
  }
  return I.AsyncMode = d, I.ConcurrentMode = p, I.ContextConsumer = c, I.ContextProvider = l, I.Element = t, I.ForwardRef = f, I.Fragment = n, I.Lazy = D, I.Memo = T, I.Portal = r, I.Profiler = a, I.StrictMode = o, I.Suspense = g, I.isAsyncMode = function(i) {
    return v(i) || m(i) === d;
  }, I.isConcurrentMode = v, I.isContextConsumer = function(i) {
    return m(i) === c;
  }, I.isContextProvider = function(i) {
    return m(i) === l;
  }, I.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === t;
  }, I.isForwardRef = function(i) {
    return m(i) === f;
  }, I.isFragment = function(i) {
    return m(i) === n;
  }, I.isLazy = function(i) {
    return m(i) === D;
  }, I.isMemo = function(i) {
    return m(i) === T;
  }, I.isPortal = function(i) {
    return m(i) === r;
  }, I.isProfiler = function(i) {
    return m(i) === a;
  }, I.isStrictMode = function(i) {
    return m(i) === o;
  }, I.isSuspense = function(i) {
    return m(i) === g;
  }, I.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === n || i === p || i === a || i === o || i === g || i === w || typeof i == "object" && i !== null && (i.$$typeof === D || i.$$typeof === T || i.$$typeof === l || i.$$typeof === c || i.$$typeof === f || i.$$typeof === Y || i.$$typeof === $ || i.$$typeof === b || i.$$typeof === M);
  }, I.typeOf = m, I;
}
var L = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var st;
function Yr() {
  return st || (st = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, w = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, D = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, Y = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function m(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === n || h === p || h === a || h === o || h === g || h === w || typeof h == "object" && h !== null && (h.$$typeof === D || h.$$typeof === T || h.$$typeof === l || h.$$typeof === c || h.$$typeof === f || h.$$typeof === Y || h.$$typeof === $ || h.$$typeof === b || h.$$typeof === M);
    }
    function v(h) {
      if (typeof h == "object" && h !== null) {
        var ae = h.$$typeof;
        switch (ae) {
          case t:
            var Pe = h.type;
            switch (Pe) {
              case d:
              case p:
              case n:
              case a:
              case o:
              case g:
                return Pe;
              default:
                var Ke = Pe && Pe.$$typeof;
                switch (Ke) {
                  case c:
                  case f:
                  case D:
                  case T:
                  case l:
                    return Ke;
                  default:
                    return ae;
                }
            }
          case r:
            return ae;
        }
      }
    }
    var i = d, F = p, S = c, j = l, x = t, X = f, U = n, J = D, W = T, q = r, oe = a, G = o, te = g, ue = !1;
    function fe(h) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), u(h) || v(h) === d;
    }
    function u(h) {
      return v(h) === p;
    }
    function y(h) {
      return v(h) === c;
    }
    function R(h) {
      return v(h) === l;
    }
    function O(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function P(h) {
      return v(h) === f;
    }
    function A(h) {
      return v(h) === n;
    }
    function E(h) {
      return v(h) === D;
    }
    function _(h) {
      return v(h) === T;
    }
    function C(h) {
      return v(h) === r;
    }
    function N(h) {
      return v(h) === a;
    }
    function k(h) {
      return v(h) === o;
    }
    function K(h) {
      return v(h) === g;
    }
    L.AsyncMode = i, L.ConcurrentMode = F, L.ContextConsumer = S, L.ContextProvider = j, L.Element = x, L.ForwardRef = X, L.Fragment = U, L.Lazy = J, L.Memo = W, L.Portal = q, L.Profiler = oe, L.StrictMode = G, L.Suspense = te, L.isAsyncMode = fe, L.isConcurrentMode = u, L.isContextConsumer = y, L.isContextProvider = R, L.isElement = O, L.isForwardRef = P, L.isFragment = A, L.isLazy = E, L.isMemo = _, L.isPortal = C, L.isProfiler = N, L.isStrictMode = k, L.isSuspense = K, L.isValidElementType = m, L.typeOf = v;
  }()), L;
}
var ct;
function At() {
  return ct || (ct = 1, process.env.NODE_ENV === "production" ? Te.exports = $r() : Te.exports = Yr()), Te.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ne, lt;
function jr() {
  if (lt)
    return Ne;
  lt = 1;
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
      for (var l = {}, c = 0; c < 10; c++)
        l["_" + String.fromCharCode(c)] = c;
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
  return Ne = o() ? Object.assign : function(a, l) {
    for (var c, d = n(a), p, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var g in c)
        t.call(c, g) && (d[g] = c[g]);
      if (e) {
        p = e(c);
        for (var w = 0; w < p.length; w++)
          r.call(c, p[w]) && (d[p[w]] = c[p[w]]);
      }
    }
    return d;
  }, Ne;
}
var Me, ut;
function Be() {
  if (ut)
    return Me;
  ut = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Me = e, Me;
}
var Fe, dt;
function kt() {
  return dt || (dt = 1, Fe = Function.call.bind(Object.prototype.hasOwnProperty)), Fe;
}
var Ae, ft;
function Wr() {
  if (ft)
    return Ae;
  ft = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Be(), r = {}, n = kt();
    e = function(a) {
      var l = "Warning: " + a;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function o(a, l, c, d, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (n(a, f)) {
          var g;
          try {
            if (typeof a[f] != "function") {
              var w = Error(
                (d || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            g = a[f](l, f, d, c, null, t);
          } catch (D) {
            g = D;
          }
          if (g && !(g instanceof Error) && e(
            (d || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in r)) {
            r[g.message] = !0;
            var T = p ? p() : "";
            e(
              "Failed " + c + " type: " + g.message + (T ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ae = o, Ae;
}
var ke, pt;
function qr() {
  if (pt)
    return ke;
  pt = 1;
  var e = At(), t = jr(), r = Be(), n = kt(), o = Wr(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var d = "Warning: " + c;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return ke = function(c, d) {
    var p = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function g(u) {
      var y = u && (p && u[p] || u[f]);
      if (typeof y == "function")
        return y;
    }
    var w = "<<anonymous>>", T = {
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
      elementType: i(),
      instanceOf: F,
      node: X(),
      objectOf: j,
      oneOf: S,
      oneOfType: x,
      shape: J,
      exact: W
    };
    function D(u, y) {
      return u === y ? u !== 0 || 1 / u === 1 / y : u !== u && y !== y;
    }
    function M(u, y) {
      this.message = u, this.data = y && typeof y == "object" ? y : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function Y(u) {
      if (process.env.NODE_ENV !== "production")
        var y = {}, R = 0;
      function O(A, E, _, C, N, k, K) {
        if (C = C || w, k = k || _, K !== r) {
          if (d) {
            var h = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw h.name = "Invariant Violation", h;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ae = C + ":" + _;
            !y[ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            R < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + k + "` prop on `" + C + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), y[ae] = !0, R++);
          }
        }
        return E[_] == null ? A ? E[_] === null ? new M("The " + N + " `" + k + "` is marked as required " + ("in `" + C + "`, but its value is `null`.")) : new M("The " + N + " `" + k + "` is marked as required in " + ("`" + C + "`, but its value is `undefined`.")) : null : u(E, _, C, N, k);
      }
      var P = O.bind(null, !1);
      return P.isRequired = O.bind(null, !0), P;
    }
    function $(u) {
      function y(R, O, P, A, E, _) {
        var C = R[O], N = G(C);
        if (N !== u) {
          var k = te(C);
          return new M(
            "Invalid " + A + " `" + E + "` of type " + ("`" + k + "` supplied to `" + P + "`, expected ") + ("`" + u + "`."),
            { expectedType: u }
          );
        }
        return null;
      }
      return Y(y);
    }
    function b() {
      return Y(l);
    }
    function m(u) {
      function y(R, O, P, A, E) {
        if (typeof u != "function")
          return new M("Property `" + E + "` of component `" + P + "` has invalid PropType notation inside arrayOf.");
        var _ = R[O];
        if (!Array.isArray(_)) {
          var C = G(_);
          return new M("Invalid " + A + " `" + E + "` of type " + ("`" + C + "` supplied to `" + P + "`, expected an array."));
        }
        for (var N = 0; N < _.length; N++) {
          var k = u(_, N, P, A, E + "[" + N + "]", r);
          if (k instanceof Error)
            return k;
        }
        return null;
      }
      return Y(y);
    }
    function v() {
      function u(y, R, O, P, A) {
        var E = y[R];
        if (!c(E)) {
          var _ = G(E);
          return new M("Invalid " + P + " `" + A + "` of type " + ("`" + _ + "` supplied to `" + O + "`, expected a single ReactElement."));
        }
        return null;
      }
      return Y(u);
    }
    function i() {
      function u(y, R, O, P, A) {
        var E = y[R];
        if (!e.isValidElementType(E)) {
          var _ = G(E);
          return new M("Invalid " + P + " `" + A + "` of type " + ("`" + _ + "` supplied to `" + O + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return Y(u);
    }
    function F(u) {
      function y(R, O, P, A, E) {
        if (!(R[O] instanceof u)) {
          var _ = u.name || w, C = fe(R[O]);
          return new M("Invalid " + A + " `" + E + "` of type " + ("`" + C + "` supplied to `" + P + "`, expected ") + ("instance of `" + _ + "`."));
        }
        return null;
      }
      return Y(y);
    }
    function S(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), l;
      function y(R, O, P, A, E) {
        for (var _ = R[O], C = 0; C < u.length; C++)
          if (D(_, u[C]))
            return null;
        var N = JSON.stringify(u, function(K, h) {
          var ae = te(h);
          return ae === "symbol" ? String(h) : h;
        });
        return new M("Invalid " + A + " `" + E + "` of value `" + String(_) + "` " + ("supplied to `" + P + "`, expected one of " + N + "."));
      }
      return Y(y);
    }
    function j(u) {
      function y(R, O, P, A, E) {
        if (typeof u != "function")
          return new M("Property `" + E + "` of component `" + P + "` has invalid PropType notation inside objectOf.");
        var _ = R[O], C = G(_);
        if (C !== "object")
          return new M("Invalid " + A + " `" + E + "` of type " + ("`" + C + "` supplied to `" + P + "`, expected an object."));
        for (var N in _)
          if (n(_, N)) {
            var k = u(_, N, P, A, E + "." + N, r);
            if (k instanceof Error)
              return k;
          }
        return null;
      }
      return Y(y);
    }
    function x(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var y = 0; y < u.length; y++) {
        var R = u[y];
        if (typeof R != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ue(R) + " at index " + y + "."
          ), l;
      }
      function O(P, A, E, _, C) {
        for (var N = [], k = 0; k < u.length; k++) {
          var K = u[k], h = K(P, A, E, _, C, r);
          if (h == null)
            return null;
          h.data && n(h.data, "expectedType") && N.push(h.data.expectedType);
        }
        var ae = N.length > 0 ? ", expected one of type [" + N.join(", ") + "]" : "";
        return new M("Invalid " + _ + " `" + C + "` supplied to " + ("`" + E + "`" + ae + "."));
      }
      return Y(O);
    }
    function X() {
      function u(y, R, O, P, A) {
        return q(y[R]) ? null : new M("Invalid " + P + " `" + A + "` supplied to " + ("`" + O + "`, expected a ReactNode."));
      }
      return Y(u);
    }
    function U(u, y, R, O, P) {
      return new M(
        (u || "React class") + ": " + y + " type `" + R + "." + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + P + "`."
      );
    }
    function J(u) {
      function y(R, O, P, A, E) {
        var _ = R[O], C = G(_);
        if (C !== "object")
          return new M("Invalid " + A + " `" + E + "` of type `" + C + "` " + ("supplied to `" + P + "`, expected `object`."));
        for (var N in u) {
          var k = u[N];
          if (typeof k != "function")
            return U(P, A, E, N, te(k));
          var K = k(_, N, P, A, E + "." + N, r);
          if (K)
            return K;
        }
        return null;
      }
      return Y(y);
    }
    function W(u) {
      function y(R, O, P, A, E) {
        var _ = R[O], C = G(_);
        if (C !== "object")
          return new M("Invalid " + A + " `" + E + "` of type `" + C + "` " + ("supplied to `" + P + "`, expected `object`."));
        var N = t({}, R[O], u);
        for (var k in N) {
          var K = u[k];
          if (n(u, k) && typeof K != "function")
            return U(P, A, E, k, te(K));
          if (!K)
            return new M(
              "Invalid " + A + " `" + E + "` key `" + k + "` supplied to `" + P + "`.\nBad object: " + JSON.stringify(R[O], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(u), null, "  ")
            );
          var h = K(_, k, P, A, E + "." + k, r);
          if (h)
            return h;
        }
        return null;
      }
      return Y(y);
    }
    function q(u) {
      switch (typeof u) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !u;
        case "object":
          if (Array.isArray(u))
            return u.every(q);
          if (u === null || c(u))
            return !0;
          var y = g(u);
          if (y) {
            var R = y.call(u), O;
            if (y !== u.entries) {
              for (; !(O = R.next()).done; )
                if (!q(O.value))
                  return !1;
            } else
              for (; !(O = R.next()).done; ) {
                var P = O.value;
                if (P && !q(P[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(u, y) {
      return u === "symbol" ? !0 : y ? y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && y instanceof Symbol : !1;
    }
    function G(u) {
      var y = typeof u;
      return Array.isArray(u) ? "array" : u instanceof RegExp ? "object" : oe(y, u) ? "symbol" : y;
    }
    function te(u) {
      if (typeof u > "u" || u === null)
        return "" + u;
      var y = G(u);
      if (y === "object") {
        if (u instanceof Date)
          return "date";
        if (u instanceof RegExp)
          return "regexp";
      }
      return y;
    }
    function ue(u) {
      var y = te(u);
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
    function fe(u) {
      return !u.constructor || !u.constructor.name ? w : u.constructor.name;
    }
    return T.checkPropTypes = o, T.resetWarningCache = o.resetWarningCache, T.PropTypes = T, T;
  }, ke;
}
var Ie, mt;
function zr() {
  if (mt)
    return Ie;
  mt = 1;
  var e = Be();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ie = function() {
    function n(l, c, d, p, f, g) {
      if (g !== e) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
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
  }, Ie;
}
if (process.env.NODE_ENV !== "production") {
  var Xr = At(), Ur = !0;
  We.exports = qr()(Xr.isElement, Ur);
} else
  We.exports = zr()();
var It = We.exports;
function Lt(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Lt(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function ht() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Lt(e)) && (n && (n += " "), n += t);
  return n;
}
const Br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: ht,
  default: ht
}, Symbol.toStringTag, { value: "Module" })), Vr = /* @__PURE__ */ Er(Br);
var z = {}, ce = {};
Object.defineProperty(ce, "__esModule", {
  value: !0
});
ce.dontSetMe = Jr;
ce.findInArray = Gr;
ce.int = Qr;
ce.isFunction = Hr;
ce.isNum = Kr;
function Gr(e, t) {
  for (let r = 0, n = e.length; r < n; r++)
    if (t.apply(t, [e[r], r, e]))
      return e[r];
}
function Hr(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function Kr(e) {
  return typeof e == "number" && !isNaN(e);
}
function Qr(e) {
  return parseInt(e, 10);
}
function Jr(e, t, r) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var ye = {};
Object.defineProperty(ye, "__esModule", {
  value: !0
});
ye.browserPrefixToKey = Yt;
ye.browserPrefixToStyle = Zr;
ye.default = void 0;
ye.getPrefix = $t;
const Le = ["Moz", "Webkit", "O", "ms"];
function $t() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const r = (e = window.document) === null || e === void 0 || (e = e.documentElement) === null || e === void 0 ? void 0 : e.style;
  if (!r || t in r)
    return "";
  for (let n = 0; n < Le.length; n++)
    if (Yt(t, Le[n]) in r)
      return Le[n];
  return "";
}
function Yt(e, t) {
  return t ? "".concat(t).concat(en(e)) : e;
}
function Zr(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function en(e) {
  let t = "", r = !0;
  for (let n = 0; n < e.length; n++)
    r ? (t += e[n].toUpperCase(), r = !1) : e[n] === "-" ? r = !0 : t += e[n];
  return t;
}
ye.default = $t();
Object.defineProperty(z, "__esModule", {
  value: !0
});
z.addClassName = qt;
z.addEvent = nn;
z.addUserSelectStyles = hn;
z.createCSSTransform = dn;
z.createSVGTransform = fn;
z.getTouch = pn;
z.getTouchIdentifier = mn;
z.getTranslation = Ve;
z.innerHeight = cn;
z.innerWidth = ln;
z.matchesSelector = Wt;
z.matchesSelectorAndParentsTo = rn;
z.offsetXYFromParent = un;
z.outerHeight = an;
z.outerWidth = sn;
z.removeClassName = zt;
z.removeEvent = on;
z.removeUserSelectStyles = gn;
var ee = ce, gt = tn(ye);
function jt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (jt = function(n) {
    return n ? r : t;
  })(e);
}
function tn(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = jt(t);
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
let xe = "";
function Wt(e, t) {
  return xe || (xe = (0, ee.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, ee.isFunction)(e[r]);
  })), (0, ee.isFunction)(e[xe]) ? e[xe](t) : !1;
}
function rn(e, t, r) {
  let n = e;
  do {
    if (Wt(n, t))
      return !0;
    if (n === r)
      return !1;
    n = n.parentNode;
  } while (n);
  return !1;
}
function nn(e, t, r, n) {
  if (!e)
    return;
  const o = {
    capture: !0,
    ...n
  };
  e.addEventListener ? e.addEventListener(t, r, o) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r;
}
function on(e, t, r, n) {
  if (!e)
    return;
  const o = {
    capture: !0,
    ...n
  };
  e.removeEventListener ? e.removeEventListener(t, r, o) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
}
function an(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ee.int)(r.borderTopWidth), t += (0, ee.int)(r.borderBottomWidth), t;
}
function sn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ee.int)(r.borderLeftWidth), t += (0, ee.int)(r.borderRightWidth), t;
}
function cn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ee.int)(r.paddingTop), t -= (0, ee.int)(r.paddingBottom), t;
}
function ln(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ee.int)(r.paddingLeft), t -= (0, ee.int)(r.paddingRight), t;
}
function un(e, t, r) {
  const o = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), a = (e.clientX + t.scrollLeft - o.left) / r, l = (e.clientY + t.scrollTop - o.top) / r;
  return {
    x: a,
    y: l
  };
}
function dn(e, t) {
  const r = Ve(e, t, "px");
  return {
    [(0, gt.browserPrefixToKey)("transform", gt.default)]: r
  };
}
function fn(e, t) {
  return Ve(e, t, "");
}
function Ve(e, t, r) {
  let {
    x: n,
    y: o
  } = e, a = "translate(".concat(n).concat(r, ",").concat(o).concat(r, ")");
  if (t) {
    const l = "".concat(typeof t.x == "string" ? t.x : t.x + r), c = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    a = "translate(".concat(l, ", ").concat(c, ")") + a;
  }
  return a;
}
function pn(e, t) {
  return e.targetTouches && (0, ee.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, ee.findInArray)(e.changedTouches, (r) => t === r.identifier);
}
function mn(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function hn(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && qt(e.body, "react-draggable-transparent-selection");
}
function gn(e) {
  if (e)
    try {
      if (e.body && zt(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        const t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function qt(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function zt(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var le = {};
Object.defineProperty(le, "__esModule", {
  value: !0
});
le.canDragX = bn;
le.canDragY = Sn;
le.createCoreData = wn;
le.createDraggableData = Pn;
le.getBoundPosition = yn;
le.getControlPosition = Cn;
le.snapToGrid = vn;
var Z = ce, be = z;
function yn(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : Tn(n);
  const o = Ge(e);
  if (typeof n == "string") {
    const {
      ownerDocument: a
    } = o, l = a.defaultView;
    let c;
    if (n === "parent" ? c = o.parentNode : c = a.querySelector(n), !(c instanceof l.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const d = c, p = l.getComputedStyle(o), f = l.getComputedStyle(d);
    n = {
      left: -o.offsetLeft + (0, Z.int)(f.paddingLeft) + (0, Z.int)(p.marginLeft),
      top: -o.offsetTop + (0, Z.int)(f.paddingTop) + (0, Z.int)(p.marginTop),
      right: (0, be.innerWidth)(d) - (0, be.outerWidth)(o) - o.offsetLeft + (0, Z.int)(f.paddingRight) - (0, Z.int)(p.marginRight),
      bottom: (0, be.innerHeight)(d) - (0, be.outerHeight)(o) - o.offsetTop + (0, Z.int)(f.paddingBottom) - (0, Z.int)(p.marginBottom)
    };
  }
  return (0, Z.isNum)(n.right) && (t = Math.min(t, n.right)), (0, Z.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, Z.isNum)(n.left) && (t = Math.max(t, n.left)), (0, Z.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function vn(e, t, r) {
  const n = Math.round(t / e[0]) * e[0], o = Math.round(r / e[1]) * e[1];
  return [n, o];
}
function bn(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function Sn(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function Cn(e, t, r) {
  const n = typeof t == "number" ? (0, be.getTouch)(e, t) : null;
  if (typeof t == "number" && !n)
    return null;
  const o = Ge(r), a = r.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, be.offsetXYFromParent)(n || e, a, r.props.scale);
}
function wn(e, t, r) {
  const n = !(0, Z.isNum)(e.lastX), o = Ge(e);
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
function Pn(e, t) {
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
function Tn(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function Ge(e) {
  const t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var Oe = {}, Re = {};
Object.defineProperty(Re, "__esModule", {
  value: !0
});
Re.default = xn;
function xn() {
}
Object.defineProperty(Oe, "__esModule", {
  value: !0
});
Oe.default = void 0;
var $e = Dn(de), Q = He(It), En = He(Et), B = z, pe = le, Ye = ce, Ce = He(Re);
function He(e) {
  return e && e.__esModule ? e : { default: e };
}
function Xt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Xt = function(n) {
    return n ? r : t;
  })(e);
}
function Dn(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Xt(t);
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
function H(e, t, r) {
  return t = On(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function On(e) {
  var t = Rn(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Rn(e, t) {
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
let me = re.mouse, _e = class extends $e.Component {
  constructor() {
    super(...arguments), H(this, "dragging", !1), H(this, "lastX", NaN), H(this, "lastY", NaN), H(this, "touchIdentifier", null), H(this, "mounted", !1), H(this, "handleDragStart", (t) => {
      if (this.props.onMouseDown(t), !this.props.allowAnyClick && typeof t.button == "number" && t.button !== 0)
        return !1;
      const r = this.findDOMNode();
      if (!r || !r.ownerDocument || !r.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      const {
        ownerDocument: n
      } = r;
      if (this.props.disabled || !(t.target instanceof n.defaultView.Node) || this.props.handle && !(0, B.matchesSelectorAndParentsTo)(t.target, this.props.handle, r) || this.props.cancel && (0, B.matchesSelectorAndParentsTo)(t.target, this.props.cancel, r))
        return;
      t.type === "touchstart" && t.preventDefault();
      const o = (0, B.getTouchIdentifier)(t);
      this.touchIdentifier = o;
      const a = (0, pe.getControlPosition)(t, o, this);
      if (a == null)
        return;
      const {
        x: l,
        y: c
      } = a, d = (0, pe.createCoreData)(this, l, c);
      (0, Ce.default)("DraggableCore: handleDragStart: %j", d), (0, Ce.default)("calling", this.props.onStart), !(this.props.onStart(t, d) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, B.addUserSelectStyles)(n), this.dragging = !0, this.lastX = l, this.lastY = c, (0, B.addEvent)(n, me.move, this.handleDrag), (0, B.addEvent)(n, me.stop, this.handleDragStop));
    }), H(this, "handleDrag", (t) => {
      const r = (0, pe.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let c = n - this.lastX, d = o - this.lastY;
        if ([c, d] = (0, pe.snapToGrid)(this.props.grid, c, d), !c && !d)
          return;
        n = this.lastX + c, o = this.lastY + d;
      }
      const a = (0, pe.createCoreData)(this, n, o);
      if ((0, Ce.default)("DraggableCore: handleDrag: %j", a), this.props.onDrag(t, a) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const d = document.createEvent("MouseEvents");
          d.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(d);
        }
        return;
      }
      this.lastX = n, this.lastY = o;
    }), H(this, "handleDragStop", (t) => {
      if (!this.dragging)
        return;
      const r = (0, pe.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let d = n - this.lastX || 0, p = o - this.lastY || 0;
        [d, p] = (0, pe.snapToGrid)(this.props.grid, d, p), n = this.lastX + d, o = this.lastY + p;
      }
      const a = (0, pe.createCoreData)(this, n, o);
      if (this.props.onStop(t, a) === !1 || this.mounted === !1)
        return !1;
      const c = this.findDOMNode();
      c && this.props.enableUserSelectHack && (0, B.removeUserSelectStyles)(c.ownerDocument), (0, Ce.default)("DraggableCore: handleDragStop: %j", a), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, c && ((0, Ce.default)("DraggableCore: Removing handlers"), (0, B.removeEvent)(c.ownerDocument, me.move, this.handleDrag), (0, B.removeEvent)(c.ownerDocument, me.stop, this.handleDragStop));
    }), H(this, "onMouseDown", (t) => (me = re.mouse, this.handleDragStart(t))), H(this, "onMouseUp", (t) => (me = re.mouse, this.handleDragStop(t))), H(this, "onTouchStart", (t) => (me = re.touch, this.handleDragStart(t))), H(this, "onTouchEnd", (t) => (me = re.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = !0;
    const t = this.findDOMNode();
    t && (0, B.addEvent)(t, re.touch.start, this.onTouchStart, {
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
      (0, B.removeEvent)(r, re.mouse.move, this.handleDrag), (0, B.removeEvent)(r, re.touch.move, this.handleDrag), (0, B.removeEvent)(r, re.mouse.stop, this.handleDragStop), (0, B.removeEvent)(r, re.touch.stop, this.handleDragStop), (0, B.removeEvent)(t, re.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, B.removeUserSelectStyles)(r);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var t, r;
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (r = this.props) === null || r === void 0 || (r = r.nodeRef) === null || r === void 0 ? void 0 : r.current : En.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ $e.cloneElement($e.Children.only(this.props.children), {
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
Oe.default = _e;
H(_e, "displayName", "DraggableCore");
H(_e, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: Q.default.bool,
  children: Q.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: Q.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: Q.default.bool,
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
  grid: Q.default.arrayOf(Q.default.number),
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
  handle: Q.default.string,
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
  cancel: Q.default.string,
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
  nodeRef: Q.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: Q.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: Q.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: Q.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: Q.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: Q.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: Ye.dontSetMe,
  style: Ye.dontSetMe,
  transform: Ye.dontSetMe
});
H(_e, "defaultProps", {
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
  var t = w(de), r = f(It), n = f(Et), o = f(Vr), a = z, l = le, c = ce, d = f(Oe), p = f(Re);
  function f(b) {
    return b && b.__esModule ? b : { default: b };
  }
  function g(b) {
    if (typeof WeakMap != "function")
      return null;
    var m = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap();
    return (g = function(i) {
      return i ? v : m;
    })(b);
  }
  function w(b, m) {
    if (!m && b && b.__esModule)
      return b;
    if (b === null || typeof b != "object" && typeof b != "function")
      return { default: b };
    var v = g(m);
    if (v && v.has(b))
      return v.get(b);
    var i = {}, F = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var S in b)
      if (S !== "default" && Object.prototype.hasOwnProperty.call(b, S)) {
        var j = F ? Object.getOwnPropertyDescriptor(b, S) : null;
        j && (j.get || j.set) ? Object.defineProperty(i, S, j) : i[S] = b[S];
      }
    return i.default = b, v && v.set(b, i), i;
  }
  function T() {
    return T = Object.assign ? Object.assign.bind() : function(b) {
      for (var m = 1; m < arguments.length; m++) {
        var v = arguments[m];
        for (var i in v)
          Object.prototype.hasOwnProperty.call(v, i) && (b[i] = v[i]);
      }
      return b;
    }, T.apply(this, arguments);
  }
  function D(b, m, v) {
    return m = M(m), m in b ? Object.defineProperty(b, m, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : b[m] = v, b;
  }
  function M(b) {
    var m = Y(b, "string");
    return typeof m == "symbol" ? m : String(m);
  }
  function Y(b, m) {
    if (typeof b != "object" || b === null)
      return b;
    var v = b[Symbol.toPrimitive];
    if (v !== void 0) {
      var i = v.call(b, m || "default");
      if (typeof i != "object")
        return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (m === "string" ? String : Number)(b);
  }
  class $ extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(m, v) {
      let {
        position: i
      } = m, {
        prevPropsPosition: F
      } = v;
      return i && (!F || i.x !== F.x || i.y !== F.y) ? ((0, p.default)("Draggable: getDerivedStateFromProps %j", {
        position: i,
        prevPropsPosition: F
      }), {
        x: i.x,
        y: i.y,
        prevPropsPosition: {
          ...i
        }
      }) : null;
    }
    constructor(m) {
      super(m), D(this, "onDragStart", (v, i) => {
        if ((0, p.default)("Draggable: onDragStart: %j", i), this.props.onStart(v, (0, l.createDraggableData)(this, i)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), D(this, "onDrag", (v, i) => {
        if (!this.state.dragging)
          return !1;
        (0, p.default)("Draggable: onDrag: %j", i);
        const F = (0, l.createDraggableData)(this, i), S = {
          x: F.x,
          y: F.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x,
            y: X
          } = S;
          S.x += this.state.slackX, S.y += this.state.slackY;
          const [U, J] = (0, l.getBoundPosition)(this, S.x, S.y);
          S.x = U, S.y = J, S.slackX = this.state.slackX + (x - S.x), S.slackY = this.state.slackY + (X - S.y), F.x = S.x, F.y = S.y, F.deltaX = S.x - this.state.x, F.deltaY = S.y - this.state.y;
        }
        if (this.props.onDrag(v, F) === !1)
          return !1;
        this.setState(S);
      }), D(this, "onDragStop", (v, i) => {
        if (!this.state.dragging || this.props.onStop(v, (0, l.createDraggableData)(this, i)) === !1)
          return !1;
        (0, p.default)("Draggable: onDragStop: %j", i);
        const S = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x,
            y: X
          } = this.props.position;
          S.x = x, S.y = X;
        }
        this.setState(S);
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
        children: i,
        defaultPosition: F,
        defaultClassName: S,
        defaultClassNameDragging: j,
        defaultClassNameDragged: x,
        position: X,
        positionOffset: U,
        scale: J,
        ...W
      } = this.props;
      let q = {}, oe = null;
      const te = !!!X || this.state.dragging, ue = X || F, fe = {
        // Set left if horizontal drag is enabled
        x: (0, l.canDragX)(this) && te ? this.state.x : ue.x,
        // Set top if vertical drag is enabled
        y: (0, l.canDragY)(this) && te ? this.state.y : ue.y
      };
      this.state.isElementSVG ? oe = (0, a.createSVGTransform)(fe, U) : q = (0, a.createCSSTransform)(fe, U);
      const u = (0, o.default)(i.props.className || "", S, {
        [j]: this.state.dragging,
        [x]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(d.default, T({}, W, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(i), {
        className: u,
        style: {
          ...i.props.style,
          ...q
        },
        transform: oe
      }));
    }
  }
  e.default = $, D($, "displayName", "Draggable"), D($, "propTypes", {
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
    className: c.dontSetMe,
    style: c.dontSetMe,
    transform: c.dontSetMe
  }), D($, "defaultProps", {
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
})(Ft);
const {
  default: Ut,
  DraggableCore: _n
} = Ft;
De.exports = Ut;
De.exports.default = Ut;
De.exports.DraggableCore = _n;
var Nn = De.exports;
const Mn = /* @__PURE__ */ Dr(Nn);
const Fn = (e) => {
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
}, An = se(function(t, r) {
  const { formLayout: n, context: o } = t, { formData: a } = o, l = ge({}), c = Fn(t), d = "palmyra-form-field-data", p = St(() => (f) => Ot(f, l, f.label), [a.data]);
  return /* @__PURE__ */ s("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: n.fields.map((f, g) => /* @__PURE__ */ s("div", { className: c, children: /* @__PURE__ */ s("div", { className: d, children: p(f) }) }, f.attribute)) });
});
function kn(e) {
  return /* @__PURE__ */ s(
    Mn,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ s(lr, { ...e })
    }
  );
}
const In = ({ columns: e, isOpen: t, onClose: r, setFilter: n, defaultFilter: o = {} }) => {
  const a = (T) => {
    T.stopPropagation();
  };
  var { getFieldManager: l, getFormData: c } = xt(o, () => {
  }, "edit");
  const d = () => {
    n({});
  }, p = () => {
    var T = c();
    n && n(T);
  }, f = () => {
    r();
  }, g = (T) => {
    T.keyCode === 27 && f();
  }, w = xr(e);
  return /* @__PURE__ */ s("div", { className: "grid-filter-container", children: /* @__PURE__ */ V(
    cr,
    {
      open: t,
      onClick: a,
      PaperComponent: kn,
      onKeyDown: g,
      children: [
        /* @__PURE__ */ V("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ s("div", { className: "grid-header-text-container", children: /* @__PURE__ */ s("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ s("div", { className: "grid-header-icon-container", onClick: f, children: /* @__PURE__ */ s(we, { title: "close", arrow: !0, children: /* @__PURE__ */ s(Sr, { className: "filter-cancel-icon" }) }) })
        ] }),
        /* @__PURE__ */ s("span", { className: "filter-header-border" }),
        /* @__PURE__ */ s("div", { className: "grid-filter-content", children: /* @__PURE__ */ s(qe.Provider, { value: l, children: /* @__PURE__ */ s(
          Rt,
          {
            context: { formData: {} },
            layout: {
              type: "form",
              formLayout: {
                fields: w,
                options: {
                  columns: 2
                }
              },
              Renderer: An
            }
          }
        ) }) }),
        /* @__PURE__ */ V("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ s(ve, { className: "filter-reset-btn", disableRipple: !0, onClick: d, children: "Reset" }),
          /* @__PURE__ */ s(ve, { className: "filter-button", disableRipple: !0, onClick: p, children: "Filter" })
        ] })
      ]
    }
  ) });
}, Ln = se(function(t, r) {
  const { columns: n, children: o, EmptyChild: a, onRowClick: l, quickSearch: c } = t, d = a || vr, p = t.customizer || Tr, [f, g] = ne(!1), [w, T] = ne("standard"), [D, M] = ne(!1), [Y, $] = ne(""), {
    setQueryFilter: b,
    setQuickSearch: m,
    setSortColumns: v,
    gotoPage: i,
    setPageSize: F,
    getPageNo: S,
    data: j,
    totalRecords: x,
    pageSizeOptions: X,
    filter: U,
    queryLimit: J
  } = Ue(t), W = r || ge(null);
  Se(W, () => ({
    setFilter: (C) => {
    }
  }), []);
  const q = (C, N) => {
    i(N);
  }, oe = yr(n, p), G = (C) => {
    T(C);
  }, te = () => {
    g(!f);
  }, ue = () => w === "compact" ? { padding: "3px" } : w === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, fe = () => w === "compact" ? { padding: "3px" } : w === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, u = () => {
    var C;
    switch (w) {
      case "compact":
        C = /* @__PURE__ */ s(et, { className: "density-icon" });
        break;
      case "comfortable":
        C = /* @__PURE__ */ s(tt, { className: "density-icon" });
        break;
      default:
        C = /* @__PURE__ */ s(Ze, { className: "grid-button-icon" });
        break;
    }
    return C;
  }, y = (C) => {
    const N = C.target.value;
    $(N), N ? m(N) : b({});
  }, R = (C) => {
    l && l(C);
  }, O = (C) => {
    const N = parseInt(C.target.value, 10);
    F(N);
  }, P = () => {
    console.info("Export Clicked");
  }, A = 200, E = !!t.pageSize;
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ V("div", { children: [
    o,
    /* @__PURE__ */ V("div", { className: "grid-header", children: [
      /* @__PURE__ */ s("div", { className: "grid-header-filter", children: !!c && /* @__PURE__ */ s(
        Ct,
        {
          sx: { width: A },
          type: "text",
          value: Y,
          onChange: y,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ s(wt, { position: "end", children: /* @__PURE__ */ s(Mt, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ s(ur, { onClickAway: () => {
        g(!1);
      }, children: /* @__PURE__ */ V("div", { className: "grid-header-button", onClick: te, children: [
        /* @__PURE__ */ s(we, { title: "Density", placement: "top", children: /* @__PURE__ */ s(ve, { className: "grid-btn", disableRipple: !0, children: u() }) }),
        f && /* @__PURE__ */ s("div", { className: "density-dropdown-content", children: /* @__PURE__ */ V("ul", { children: [
          /* @__PURE__ */ V("li", { onClick: () => G("standard"), children: [
            /* @__PURE__ */ s(Ze, { className: "density-icon" }),
            /* @__PURE__ */ s("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ V("li", { onClick: () => G("compact"), children: [
            /* @__PURE__ */ s(et, { className: "density-icon" }),
            /* @__PURE__ */ s("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ V("li", { onClick: () => G("comfortable"), children: [
            /* @__PURE__ */ s(tt, { className: "density-icon" }),
            /* @__PURE__ */ s("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ V("div", { className: "grid-header-button", children: [
        /* @__PURE__ */ s(we, { title: "Filter", placement: "top", children: /* @__PURE__ */ s(ve, { className: "grid-btn", disableRipple: !0, onClick: () => M(!0), children: /* @__PURE__ */ s(Cr, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ s(
          In,
          {
            columns: n,
            setFilter: b,
            defaultFilter: U,
            isOpen: D,
            onClose: () => M(!1)
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { className: "grid-header-button", onClick: P, children: /* @__PURE__ */ s(we, { title: "Export", placement: "top", children: /* @__PURE__ */ s(ve, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ s(wr, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ s("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ s(we, { title: "New", placement: "top", children: /* @__PURE__ */ s(ve, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ s(Pr, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ s(Xe, {})
    ] }),
    /* @__PURE__ */ s("div", { className: "grid-table", children: /* @__PURE__ */ s(
      br,
      {
        columnDefs: oe,
        EmptyChild: d,
        rowData: j,
        onRowClick: R,
        onRowStyle: ue,
        onHeaderStyle: fe,
        onSortColumn: v
      }
    ) }),
    /* @__PURE__ */ s("div", { className: "grid-header", children: /* @__PURE__ */ s("div", { className: "grid-filter", children: E && /* @__PURE__ */ s(
      Pt,
      {
        component: "div",
        count: x || 0,
        page: S(),
        onPageChange: q,
        rowsPerPage: J.limit,
        rowsPerPageOptions: X || [],
        onRowsPerPageChange: O
      }
    ) }) })
  ] }) });
}), jo = se(function(t, r) {
  const { columns: n, endPoint: o, storeFactory: a, layoutParams: l } = t, c = t.quickSearch || "", d = ge(null), p = (g, w) => {
    console.log(w);
  };
  Ee(() => {
    var g = rt.subscribe(t.topic, p);
    return () => {
      rt.unsubscribe(g);
    };
  }, [t.topic]), r && Se(r, () => ({
    setFilter: (g) => {
      d.current.setFilter(g);
    }
  }), [n, o]);
  const f = {
    fields: n,
    quickSearch: c,
    storeOptions: {
      endPoint: o
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ s(Xe, { children: /* @__PURE__ */ s(ze.Provider, { value: a, children: /* @__PURE__ */ s(Bt, { layout: f, context: l, customizer: t.customizer, ref: d }) }) });
}), $n = se(function(t, r) {
  const n = t.layout, [o, a] = ne(n.fields), l = n.pagination ? n.pagination : [15], c = je(ze), d = je(bt);
  var p = n.storeOptions || {}, f = {};
  Or(f, p, d);
  const g = c.getGridStore(f, n.storeOptions.endPoint);
  Ee(() => {
    p.hasLayout && g.queryLayout({}).then((D) => {
      a(D.columns);
    });
  }, []);
  const { onClick: w, onNewClick: T } = Rr(n.actionOptions, d);
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    Ln,
    {
      columns: o,
      store: g,
      pageSize: l,
      onRowClick: w,
      onNewClick: T,
      customizer: t.customizer,
      quickSearch: n.quickSearch,
      ref: r
    }
  ) });
}), Bt = $n, Yn = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Container || Tt;
  return /* @__PURE__ */ s(Dt, { fallback: /* @__PURE__ */ s("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ s(n, { ...t, children: ((a) => /* @__PURE__ */ s(
    Bt,
    {
      context: r,
      layout: a
    }
  ))(t.tableLayout) }) });
}, jn = (e) => {
  const { layout: t } = e;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ s(Rt, { ...e });
    case "view":
      return /* @__PURE__ */ s(Nr, { ...e });
    case "grid":
      return /* @__PURE__ */ s(Yn, { ...e });
    case "chart":
      return /* @__PURE__ */ s(pr, { ...e });
    default:
      return /* @__PURE__ */ s(_r, { ...e });
  }
};
function Wn(e, t) {
  var r = e || 1, n = t;
  return {
    w: r,
    h: n
  };
}
const Vt = (e) => {
  const { layout: t, context: r } = e, n = t.sections;
  function o(a, l, c) {
    const { w: d, h: p } = Wn(a.width, a.height);
    return /* @__PURE__ */ s(dr, { sx: { width: d, height: p }, children: /* @__PURE__ */ s(
      jn,
      {
        layout: a,
        context: l
      }
    ) }, (a.name || "tab") + c);
  }
  return /* @__PURE__ */ s("div", { style: { display: "flex", flexWrap: "wrap" }, children: n.map((a, l) => o(a, r, l)) });
}, yt = se(function(t, r) {
  const { layout: n } = t;
  Se(r, () => ({
    resetFilter() {
    }
  }), []);
  const o = {}, a = n.tabs;
  return /* @__PURE__ */ s("div", { children: a.map((l, c) => /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    Vt,
    {
      layout: l,
      context: o
    }
  ) }, l.name + c)) });
}), qn = (e) => {
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
}, vt = se(function(t, r) {
  var f;
  const n = t.data || {}, { layout: o } = t;
  var { getFieldManager: a, getFormData: l, isFormValid: c } = xt(n, (f = t.callbacks) == null ? void 0 : f.onFormValidChange, qn(t.mode));
  Se(r, () => ({
    getData() {
      return l();
    },
    isValid() {
      return c();
    }
  }), []);
  const d = { formData: n }, p = o.tabs;
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(qe.Provider, { value: a, children: p.map((g, w) => /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    Vt,
    {
      layout: g,
      context: d
    }
  ) }, g.name + w)) }) });
}), zn = (e) => {
  switch (e) {
    case "grid":
      return yt;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), vt;
    case "formEdit":
    case "formNew":
    case "formView":
      return vt;
    default:
      return yt;
  }
}, Wo = se(function(t, r) {
  const [n, o] = ne(t.layout), a = t.mode ? t.mode : n.type ? n.type : "grid", l = t.layoutParams || {}, c = zn(a), d = ge(0);
  return Ee(() => {
    o(t.layout), d.current < 999999 ? d.current++ : d.current = 0;
  }, [t.layout]), /* @__PURE__ */ s(Dt, { fallback: /* @__PURE__ */ s("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ s(ze.Provider, { value: t.storeFactory, children: /* @__PURE__ */ s(bt.Provider, { value: l, children: /* @__PURE__ */ s(c, { ...t, ref: (p) => {
    r && (r.current = p);
  } }, d.current) }) }) });
}), qo = se(function(t, r) {
  const { children: n, Child: o, childProps: a, pageSize: l } = t, c = r || ge(null), {
    setQueryFilter: d,
    setQuickSearch: p,
    gotoPage: f,
    setPageSize: g,
    getPageNo: w,
    data: T,
    pageSizeOptions: D,
    queryLimit: M
  } = Ue(t), Y = t.listKeyProvider || ((S, j) => j);
  Se(c, () => ({
    setFilter(S) {
      d(S);
    },
    gotoPage(S) {
      f(S);
    },
    nextPage() {
    },
    prevPage() {
    }
  }), []);
  const $ = (S, j) => {
    f(j);
  }, b = (S) => {
    const j = S.target.value;
    p(j);
  }, m = (S) => {
    const j = parseInt(S.target.value, 10);
    g(j);
  }, v = 200, i = !!l, F = !!t.quickSearch;
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ V("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ V("div", { className: "card-container", children: [
      /* @__PURE__ */ V("div", { className: "card-header", children: [
        /* @__PURE__ */ s("div", { className: "card-filter", children: F && /* @__PURE__ */ s(
          Ct,
          {
            sx: { width: v },
            type: "text",
            onChange: b,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ s(wt, { position: "end", children: /* @__PURE__ */ s(Mt, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ s("div", { className: "card-pagination", children: i && /* @__PURE__ */ s(
          Pt,
          {
            component: "div",
            count: T,
            page: w(),
            onPageChange: $,
            rowsPerPage: M.limit,
            rowsPerPageOptions: D || [],
            onRowsPerPageChange: m
          }
        ) })
      ] }),
      /* @__PURE__ */ s("div", { className: "card-wrapper", children: /* @__PURE__ */ s(
        fr,
        {
          Child: o,
          childKeyProvider: Y,
          dataList: T,
          childProps: a,
          EmptyChild: t.EmptyChild
        }
      ) })
    ] })
  ] }) });
});
export {
  Wo as F,
  Bt as G,
  $o as M,
  jo as P,
  qo as S,
  Vt as T,
  Ln as a,
  Ar as b,
  Rt as c,
  An as d,
  In as e,
  Yn as f,
  Ot as g,
  jn as h,
  yt as i,
  vt as j,
  Ue as u
};
