import "../assets/ServerCardLayout.css";
import nr from "../palmyra/mui/form/MuiDatePicker.js";
import or from "../palmyra/mui/form/MuiDateTimePicker.js";
import ar from "../palmyra/mui/form/MuiRadioGroup.js";
import ir from "../palmyra/mui/form/MuiSelect.js";
import sr from "../palmyra/mui/form/MuiTextArea.js";
import cr from "../palmyra/mui/form/MuiTextField.js";
import lr from "../palmyra/mui/form/MuiCheckBox.js";
import ur from "../palmyra/mui/form/MuiSwitch.js";
import dr from "../palmyra/mui/form/MuiPassword.js";
import { FieldManagerContext as Ne, StoreFactoryContext as Ue, LayoutParamsContext as Dt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as i, jsxs as U, Fragment as Pe } from "react/jsx-runtime";
import pe, { useState as Z, useEffect as ye, forwardRef as se, useContext as Oe, useRef as ae, useImperativeHandle as ve, useMemo as Ge } from "react";
import { FormControlLabel as rt, Checkbox as nt, FormControl as Et, FormHelperText as Ot, InputLabel as fr, Select as pr, ListSubheader as hr, TextField as He, InputAdornment as Ke, MenuItem as mr, Dialog as gr, Tooltip as Te, Button as Se, Paper as yr, ClickAwayListener as vr, TablePagination as Rt, Box as br } from "@mui/material";
import Sr from "../palmyra/layout/card/CardLayout.js";
import Cr from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as _t, getFieldLabel as Nt } from "../palmyra/mui/form/MuiUtil.js";
import Mt from "../palmyra/mui/form/FieldDecorator.js";
import { hasDot as Re } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as _e, setValueByKey as ot } from "../palmyra/form/FormUtil.js";
import { delay as Pr, mergeDeep as wr } from "../palmyra/utils/index.js";
import { m as Tr, p as xr } from "./index.js";
import { Search as Dr, DeleteOutlined as Er, Close as Or, Menu as at, DensitySmall as it, DensityLarge as st, FilterAlt as Rr, FileDownloadOutlined as _r, Add as Nr } from "@mui/icons-material";
import Ft from "../palmyra/layout/container/SectionContainer.js";
import Mr from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as Fr } from "../palmyra/grid/base/ColumnConverter.js";
import Ar from "../palmyra/grid/base/EmptyChildTable.js";
import kr from "../palmyra/grid/base/TableX.js";
import { NoopCustomizer as Lr } from "../palmyra/grid/Types.js";
import { convertToField as Ir } from "../palmyra/grid/base/GridFieldConverter.js";
import { d as At } from "./PalmyraFormManager.js";
import "../palmyra/form/PalmyraForm.js";
import { a as $r, g as Yr } from "./_commonjsHelpers.js";
import kt from "react-dom";
import "axios";
import "react-router-dom";
/* empty css          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css              */import { topic as ct } from "../palmyra/utils/pubsub/topic.js";
import "dayjs";
import { getActionPublishers as Wr } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as Lt } from "../palmyra/layout/ErrorBoundary.js";
import jr from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import qr from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { useKeyValue as Vr } from "../palmyra/utils/pubsub/PubSubHelper.js";
const Me = (e) => {
  const { store: t, quickSearch: r, endPointVars: n } = e, o = e.fetchAll != !1, [a, c] = Z(null), [l, u] = e.filterTopic ? Vr(e.filterTopic, {}) : Z({}), [h, p] = Z({}), m = e.pageSize ? e.pageSize : 15;
  var b = m instanceof Array ? m : [m], T = m instanceof Array ? m[0] : m;
  const [x, E] = Z({ limit: T, offset: 0 }), [W, j] = Z(null), S = () => Math.round(x.offset / x.limit), g = () => x.limit, v = (k) => {
    E({ ...x, offset: k * T });
  }, s = (k) => {
    const L = k > 10 || k == -1 ? k : 15;
    E({ ...x, limit: L });
  }, M = () => l ? Object.keys(l).length == 0 : !1;
  ye(() => {
    (o || !M()) && C();
  }, [x, l, h]);
  const C = () => {
    const k = { filter: l, sortOrder: h, total: !0, endPointVars: n, ...x };
    if (t)
      try {
        t.query(k).then((L) => {
          j(L.result), c(L.total);
        }).catch((L) => {
          var P = L.response ? L.response : L;
          console.error("error while fetching", P), G();
        });
      } catch (L) {
        console.error(L), $();
      }
    else
      console.error("Store is not provided for the Grid"), $();
  }, $ = () => {
    j([]), c(0);
  }, G = () => {
    j(void 0), c(null);
  };
  return {
    setQueryFilter: (k) => {
      typeof k == "function" || k && Object.keys(k).length > 0 ? u(k) : u({});
    },
    setQuickSearch: (k) => {
      const L = r;
      u(k ? (P) => (P[L] = k, { ...P }) : (P) => (delete P[L], { ...P }));
    },
    setSortColumns: (k) => {
      p(k);
    },
    refreshData: C,
    gotoPage: v,
    setPageSize: s,
    getPageNo: S,
    getLimit: g,
    filter: l,
    queryLimit: x,
    data: W,
    totalRecords: a,
    pageSizeOptions: b
  };
};
function lt(e) {
  return e ? Array.isArray(e) ? e : typeof e == "string" ? e.split(",") : (console.log(e), [e]) : [];
}
const Qo = se(function(t, r) {
  const n = Oe(Ne), o = r || ae(null), a = n(t, "checkbox", o), { mutateOptions: c, setMutateOptions: l } = a, [u, h] = Z(!1), p = lt(a.data), m = a.error, b = a.eventListeners, x = { store: a.store, pageSize: -1 }, { data: E } = Me(x), W = E, j = ae(null), S = t.lookupOptions || {}, g = S.idAttribute || "id", v = S.titleAttribute || "name", s = Re(g) ? (O) => _e(g, O) : (O) => O[g], M = Re(v) ? (O) => _e(v, O) : (O) => O[v];
  ve(o, () => ({
    focus() {
      j.current.focus();
    },
    isValid() {
      return !m.status;
    },
    assignAttribute(O) {
      j.current.assignAttribute(O);
    },
    clear() {
      a.setData("");
    },
    setValue(O) {
      a.setData(O);
    },
    setVisible(O) {
      l({ visible: O });
    }
  }), []);
  var C = _t(t, a.data, t.label);
  t.readonly && (C.inputProps = { readOnly: !0 });
  function $(O, k) {
    const L = lt(a.data);
    var P = L.indexOf(O);
    k ? P < 0 && L.push(O) : P >= 0 && L.splice(P, 1), b.onValueChange(L.toString());
  }
  var G = {
    onBlur: b.onBlur,
    onFocus: b.onFocus,
    onChange: (O) => {
      $(O.target.value, O.target.checked);
    }
  };
  const H = (O) => {
    const k = O.toString();
    return p.includes(k);
  }, K = (O) => {
    const k = O.target.checked;
    h(k);
    var L = [];
    k && W.map((P) => {
      L.push(s(P));
    }), b.onValueChange(L.toString());
  };
  return /* @__PURE__ */ i("div", { className: t.className, children: c.visible && /* @__PURE__ */ U(
    Mt,
    {
      label: Nt(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ i("div", { children: t.hideSelectAll ? /* @__PURE__ */ i(Pe, {}) : /* @__PURE__ */ i(
          rt,
          {
            control: /* @__PURE__ */ i(nt, { onChange: K }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ U(
          Et,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: m.status,
            ...C,
            children: [
              W ? W.map((O) => /* @__PURE__ */ i(
                rt,
                {
                  value: s(O),
                  control: /* @__PURE__ */ i(
                    nt,
                    {
                      ...G,
                      checked: H(s(O)),
                      disabled: t.readonly
                    }
                  ),
                  label: M(O)
                },
                s(O)
              )) : /* @__PURE__ */ i("div", { children: "No options provided" }),
              /* @__PURE__ */ i(Ot, { className: "form-error-text", children: m.message })
            ]
          }
        )
      ]
    }
  ) });
}), ut = (e, t) => {
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
}, zr = (e, t, r) => {
  const n = e.store || r.store, o = e.lookupOptions || {}, a = o.idAttribute || "id", c = o.titleAttribute || "name", l = o.searchAttribute || c, u = r.data, h = ae(0), p = ae(null), [m, b] = Z(r.displayValue), [T, x] = Z([]), [E, W] = Z(""), j = {
    store: n,
    endPointVars: e.storeOptions.endPointVars,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: l
  }, S = Me(j), {
    setQueryFilter: g,
    setQuickSearch: v,
    filter: s,
    totalRecords: M
  } = S, C = S.data, $ = Re(a) ? (P) => _e(a, P) : (P) => P[a], G = Re(c) ? (P) => _e(c, P) : (P) => P[c];
  function H() {
    if (u) {
      var P = {};
      ot(a, P, u);
      const z = r.displayValue || u;
      return ot(c, P, z), P;
    }
  }
  ye(() => {
    b(r.displayValue);
  }, [r.displayValue]), Ge(() => {
    var P = H();
    P && (x([P]), p.current = P);
  }, [m]), ye(() => {
    const P = C ? [...C] : [], z = p.current;
    P && z && !K(C, $(z)) && P.unshift(z), x(P), h.current < M && (h.current = M);
  }, [C, M]);
  function K(P, z) {
    return P.find((B) => {
      if ($(B) === z)
        return B;
    });
  }
  ye(() => {
    Pr(k);
  }, [E]);
  const O = () => h.current > 2;
  function k() {
    E.length > 0 ? v("*" + E + "*") : v("");
  }
  return {
    getSelectedOption: H,
    filter: s,
    labelAccessor: G,
    idAccessor: $,
    renderOption: ut,
    getServerLookup: (P) => {
      var z = _t(e, r.data, e.label);
      const B = r.eventListeners, oe = r.error, ce = e.variant || "standard";
      t.readonly && (z.inputProps = { readOnly: !0 });
      var d = {
        onBlur: B.onBlur,
        onFocus: B.onFocus,
        onChange: (f) => B.onValueChange(f.target.value)
      };
      return /* @__PURE__ */ i(
        Mt,
        {
          label: Nt(e),
          customContainerClass: e.customContainerClass,
          colspan: e.colspan,
          customFieldClass: e.customFieldClass,
          customLabelClass: e.customLabelClass,
          children: /* @__PURE__ */ U(Et, { variant: ce, fullWidth: !0, error: oe.status, children: [
            e.label ? /* @__PURE__ */ i(fr, { children: e.label }) : /* @__PURE__ */ i(Pe, {}),
            /* @__PURE__ */ U(
              pr,
              {
                inputRef: (f) => {
                  P.current = f;
                },
                ...z,
                MenuProps: { autoFocus: !1 },
                value: u,
                onOpen: (f) => {
                  k();
                },
                ...d,
                children: [
                  O() ? /* @__PURE__ */ U(hr, { children: [
                    /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
                      He,
                      {
                        size: "small",
                        value: E,
                        autoFocus: !0,
                        placeholder: "Type to search...",
                        fullWidth: !0,
                        InputProps: {
                          startAdornment: /* @__PURE__ */ i(Ke, { position: "start", children: /* @__PURE__ */ i(Dr, {}) })
                        },
                        onChange: (f) => W(f.target.value),
                        onKeyDown: (f) => {
                          f.key !== "Escape" && f.stopPropagation();
                        }
                      }
                    ) }),
                    e.required ? /* @__PURE__ */ i(Pe, {}) : /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i("span", { children: /* @__PURE__ */ i(Er, {}) }) })
                  ] }) : /* @__PURE__ */ i("div", {}),
                  T.map((f, _) => /* @__PURE__ */ i(mr, { value: $(f), children: ut(G(f), E) }, $(f) || _))
                ]
              }
            ),
            /* @__PURE__ */ i(Ot, { className: "form-error-text", children: oe.message })
          ] })
        }
      );
    },
    setQueryFilter: g,
    searchText: E,
    setSearchText: W,
    refreshOptions: k
  };
}, Xr = se(function(t, r) {
  const n = Oe(Ne), o = r || ae(null), a = n(t, "serverlookup", o), c = a.error, { mutateOptions: l, setMutateOptions: u } = a, h = ae(null), { getServerLookup: p, setQueryFilter: m } = zr(t, l, a);
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
    setValue(b) {
      a.setData(b);
    },
    setRequired(b) {
    },
    setReadOnly(b) {
    },
    setVisible(b) {
      u({ visible: b });
    },
    setAttribute(b) {
    },
    setFilter(b) {
      m(b);
    },
    resetFilter() {
    },
    addFilter(b, T) {
      m((x) => (x[b] = T, { ...x }));
    },
    setDefaultFilter(b) {
    }
  }), []), p(h);
}), Br = (e) => {
  const { fieldDef: t } = e;
  return /* @__PURE__ */ U("div", { children: [
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
}, dt = () => /* @__PURE__ */ i("div", { children: "To be Implemented" }), It = (e, t, r) => {
  const { type: n } = e, o = { fieldDef: e, title: r };
  switch (n) {
    case "string":
      return ue(o, cr);
    case "radio":
      return ue(o, ar);
    case "select":
      return ue(o, ir);
    case "date":
      return ue(o, nr);
    case "datetime":
      return ue(o, or);
    case "checkbox":
      return ue(o, lr);
    case "serverlookup":
      return ue(o, Xr);
    case "textarea":
      return ue(o, sr);
    case "switch":
      return ue(o, ur);
    case "password":
      return ue(o, dr);
    case "multiSelect":
      return dt();
    case "dateRange":
      return dt();
    default:
      return Br(o);
  }
}, Ur = se(function(t, r) {
  var p;
  const { formLayout: n, context: o } = t, { formData: a } = o, c = n.Container;
  ae({});
  const l = Ge(() => (m) => It(m), [a.data]);
  var u = ((p = n.options) == null ? void 0 : p.columns) || 1, h = { columns: u };
  return c ? /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((m, b) => /* @__PURE__ */ i(
    c,
    {
      index: b,
      field: m,
      label: m.title,
      options: h,
      children: l(m)
    },
    m.attribute
  )) }) : /* @__PURE__ */ i("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((m, b) => /* @__PURE__ */ i(Pe, { children: l(m) })) });
}), $t = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Renderer || Ur, o = t.Container || Ft;
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
var Yt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ft = pe.createContext && pe.createContext(Yt), ge = globalThis && globalThis.__assign || function() {
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
function Wt(e) {
  return e && e.map(function(t, r) {
    return pe.createElement(t.tag, ge({
      key: r
    }, t.attr), Wt(t.child));
  });
}
function Hr(e) {
  return function(t) {
    return pe.createElement(Kr, ge({
      attr: ge({}, e.attr)
    }, t), Wt(e.child));
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
  return ft !== void 0 ? pe.createElement(ft.Consumer, null, function(r) {
    return t(r);
  }) : t(Yt);
}
function jt(e) {
  return Hr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
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
var pt;
function Qr() {
  if (pt)
    return q;
  pt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, W = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
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
                case p:
                case x:
                case T:
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
  return q.AsyncMode = u, q.ConcurrentMode = h, q.ContextConsumer = l, q.ContextProvider = c, q.Element = t, q.ForwardRef = p, q.Fragment = n, q.Lazy = x, q.Memo = T, q.Portal = r, q.Profiler = a, q.StrictMode = o, q.Suspense = m, q.isAsyncMode = function(s) {
    return v(s) || g(s) === u;
  }, q.isConcurrentMode = v, q.isContextConsumer = function(s) {
    return g(s) === l;
  }, q.isContextProvider = function(s) {
    return g(s) === c;
  }, q.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === t;
  }, q.isForwardRef = function(s) {
    return g(s) === p;
  }, q.isFragment = function(s) {
    return g(s) === n;
  }, q.isLazy = function(s) {
    return g(s) === x;
  }, q.isMemo = function(s) {
    return g(s) === T;
  }, q.isPortal = function(s) {
    return g(s) === r;
  }, q.isProfiler = function(s) {
    return g(s) === a;
  }, q.isStrictMode = function(s) {
    return g(s) === o;
  }, q.isSuspense = function(s) {
    return g(s) === m;
  }, q.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === h || s === a || s === o || s === m || s === b || typeof s == "object" && s !== null && (s.$$typeof === x || s.$$typeof === T || s.$$typeof === c || s.$$typeof === l || s.$$typeof === p || s.$$typeof === W || s.$$typeof === j || s.$$typeof === S || s.$$typeof === E);
  }, q.typeOf = g, q;
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
var ht;
function Jr() {
  return ht || (ht = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, W = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function g(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === n || y === h || y === a || y === o || y === m || y === b || typeof y == "object" && y !== null && (y.$$typeof === x || y.$$typeof === T || y.$$typeof === c || y.$$typeof === l || y.$$typeof === p || y.$$typeof === W || y.$$typeof === j || y.$$typeof === S || y.$$typeof === E);
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
                  case p:
                  case x:
                  case T:
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
    var s = u, M = h, C = l, $ = c, G = t, H = p, K = n, O = x, k = T, L = r, P = a, z = o, B = m, oe = !1;
    function ce(y) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(y) || v(y) === u;
    }
    function d(y) {
      return v(y) === h;
    }
    function f(y) {
      return v(y) === l;
    }
    function _(y) {
      return v(y) === c;
    }
    function F(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }
    function D(y) {
      return v(y) === p;
    }
    function I(y) {
      return v(y) === n;
    }
    function N(y) {
      return v(y) === x;
    }
    function A(y) {
      return v(y) === T;
    }
    function Y(y) {
      return v(y) === r;
    }
    function w(y) {
      return v(y) === a;
    }
    function R(y) {
      return v(y) === o;
    }
    function ee(y) {
      return v(y) === m;
    }
    V.AsyncMode = s, V.ConcurrentMode = M, V.ContextConsumer = C, V.ContextProvider = $, V.Element = G, V.ForwardRef = H, V.Fragment = K, V.Lazy = O, V.Memo = k, V.Portal = L, V.Profiler = P, V.StrictMode = z, V.Suspense = B, V.isAsyncMode = ce, V.isConcurrentMode = d, V.isContextConsumer = f, V.isContextProvider = _, V.isElement = F, V.isForwardRef = D, V.isFragment = I, V.isLazy = N, V.isMemo = A, V.isPortal = Y, V.isProfiler = w, V.isStrictMode = R, V.isSuspense = ee, V.isValidElementType = g, V.typeOf = v;
  }()), V;
}
var mt;
function Vt() {
  return mt || (mt = 1, process.env.NODE_ENV === "production" ? De.exports = Qr() : De.exports = Jr()), De.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ie, gt;
function Zr() {
  if (gt)
    return Ie;
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
      for (var c = {}, l = 0; l < 10; l++)
        c["_" + String.fromCharCode(l)] = l;
      var u = Object.getOwnPropertyNames(c).map(function(p) {
        return c[p];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        h[p] = p;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ie = o() ? Object.assign : function(a, c) {
    for (var l, u = n(a), h, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var m in l)
        t.call(l, m) && (u[m] = l[m]);
      if (e) {
        h = e(l);
        for (var b = 0; b < h.length; b++)
          r.call(l, h[b]) && (u[h[b]] = l[h[b]]);
      }
    }
    return u;
  }, Ie;
}
var $e, yt;
function Qe() {
  if (yt)
    return $e;
  yt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return $e = e, $e;
}
var Ye, vt;
function zt() {
  return vt || (vt = 1, Ye = Function.call.bind(Object.prototype.hasOwnProperty)), Ye;
}
var We, bt;
function en() {
  if (bt)
    return We;
  bt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Qe(), r = {}, n = zt();
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
      for (var p in a)
        if (n(a, p)) {
          var m;
          try {
            if (typeof a[p] != "function") {
              var b = Error(
                (u || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            m = a[p](c, p, u, l, null, t);
          } catch (x) {
            m = x;
          }
          if (m && !(m instanceof Error) && e(
            (u || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var T = h ? h() : "";
            e(
              "Failed " + l + " type: " + m.message + (T ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, We = o, We;
}
var je, St;
function tn() {
  if (St)
    return je;
  St = 1;
  var e = Vt(), t = Zr(), r = Qe(), n = zt(), o = en(), a = function() {
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
    var h = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(d) {
      var f = d && (h && d[h] || d[p]);
      if (typeof f == "function")
        return f;
    }
    var b = "<<anonymous>>", T = {
      array: j("array"),
      bigint: j("bigint"),
      bool: j("boolean"),
      func: j("function"),
      number: j("number"),
      object: j("object"),
      string: j("string"),
      symbol: j("symbol"),
      any: S(),
      arrayOf: g,
      element: v(),
      elementType: s(),
      instanceOf: M,
      node: H(),
      objectOf: $,
      oneOf: C,
      oneOfType: G,
      shape: O,
      exact: k
    };
    function x(d, f) {
      return d === f ? d !== 0 || 1 / d === 1 / f : d !== d && f !== f;
    }
    function E(d, f) {
      this.message = d, this.data = f && typeof f == "object" ? f : {}, this.stack = "";
    }
    E.prototype = Error.prototype;
    function W(d) {
      if (process.env.NODE_ENV !== "production")
        var f = {}, _ = 0;
      function F(I, N, A, Y, w, R, ee) {
        if (Y = Y || b, R = R || A, ee !== r) {
          if (u) {
            var y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw y.name = "Invariant Violation", y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = Y + ":" + A;
            !f[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            _ < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + R + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), f[le] = !0, _++);
          }
        }
        return N[A] == null ? I ? N[A] === null ? new E("The " + w + " `" + R + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new E("The " + w + " `" + R + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : d(N, A, Y, w, R);
      }
      var D = F.bind(null, !1);
      return D.isRequired = F.bind(null, !0), D;
    }
    function j(d) {
      function f(_, F, D, I, N, A) {
        var Y = _[F], w = z(Y);
        if (w !== d) {
          var R = B(Y);
          return new E(
            "Invalid " + I + " `" + N + "` of type " + ("`" + R + "` supplied to `" + D + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return W(f);
    }
    function S() {
      return W(c);
    }
    function g(d) {
      function f(_, F, D, I, N) {
        if (typeof d != "function")
          return new E("Property `" + N + "` of component `" + D + "` has invalid PropType notation inside arrayOf.");
        var A = _[F];
        if (!Array.isArray(A)) {
          var Y = z(A);
          return new E("Invalid " + I + " `" + N + "` of type " + ("`" + Y + "` supplied to `" + D + "`, expected an array."));
        }
        for (var w = 0; w < A.length; w++) {
          var R = d(A, w, D, I, N + "[" + w + "]", r);
          if (R instanceof Error)
            return R;
        }
        return null;
      }
      return W(f);
    }
    function v() {
      function d(f, _, F, D, I) {
        var N = f[_];
        if (!l(N)) {
          var A = z(N);
          return new E("Invalid " + D + " `" + I + "` of type " + ("`" + A + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return W(d);
    }
    function s() {
      function d(f, _, F, D, I) {
        var N = f[_];
        if (!e.isValidElementType(N)) {
          var A = z(N);
          return new E("Invalid " + D + " `" + I + "` of type " + ("`" + A + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return W(d);
    }
    function M(d) {
      function f(_, F, D, I, N) {
        if (!(_[F] instanceof d)) {
          var A = d.name || b, Y = ce(_[F]);
          return new E("Invalid " + I + " `" + N + "` of type " + ("`" + Y + "` supplied to `" + D + "`, expected ") + ("instance of `" + A + "`."));
        }
        return null;
      }
      return W(f);
    }
    function C(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), c;
      function f(_, F, D, I, N) {
        for (var A = _[F], Y = 0; Y < d.length; Y++)
          if (x(A, d[Y]))
            return null;
        var w = JSON.stringify(d, function(ee, y) {
          var le = B(y);
          return le === "symbol" ? String(y) : y;
        });
        return new E("Invalid " + I + " `" + N + "` of value `" + String(A) + "` " + ("supplied to `" + D + "`, expected one of " + w + "."));
      }
      return W(f);
    }
    function $(d) {
      function f(_, F, D, I, N) {
        if (typeof d != "function")
          return new E("Property `" + N + "` of component `" + D + "` has invalid PropType notation inside objectOf.");
        var A = _[F], Y = z(A);
        if (Y !== "object")
          return new E("Invalid " + I + " `" + N + "` of type " + ("`" + Y + "` supplied to `" + D + "`, expected an object."));
        for (var w in A)
          if (n(A, w)) {
            var R = d(A, w, D, I, N + "." + w, r);
            if (R instanceof Error)
              return R;
          }
        return null;
      }
      return W(f);
    }
    function G(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var f = 0; f < d.length; f++) {
        var _ = d[f];
        if (typeof _ != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(_) + " at index " + f + "."
          ), c;
      }
      function F(D, I, N, A, Y) {
        for (var w = [], R = 0; R < d.length; R++) {
          var ee = d[R], y = ee(D, I, N, A, Y, r);
          if (y == null)
            return null;
          y.data && n(y.data, "expectedType") && w.push(y.data.expectedType);
        }
        var le = w.length > 0 ? ", expected one of type [" + w.join(", ") + "]" : "";
        return new E("Invalid " + A + " `" + Y + "` supplied to " + ("`" + N + "`" + le + "."));
      }
      return W(F);
    }
    function H() {
      function d(f, _, F, D, I) {
        return L(f[_]) ? null : new E("Invalid " + D + " `" + I + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return W(d);
    }
    function K(d, f, _, F, D) {
      return new E(
        (d || "React class") + ": " + f + " type `" + _ + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + D + "`."
      );
    }
    function O(d) {
      function f(_, F, D, I, N) {
        var A = _[F], Y = z(A);
        if (Y !== "object")
          return new E("Invalid " + I + " `" + N + "` of type `" + Y + "` " + ("supplied to `" + D + "`, expected `object`."));
        for (var w in d) {
          var R = d[w];
          if (typeof R != "function")
            return K(D, I, N, w, B(R));
          var ee = R(A, w, D, I, N + "." + w, r);
          if (ee)
            return ee;
        }
        return null;
      }
      return W(f);
    }
    function k(d) {
      function f(_, F, D, I, N) {
        var A = _[F], Y = z(A);
        if (Y !== "object")
          return new E("Invalid " + I + " `" + N + "` of type `" + Y + "` " + ("supplied to `" + D + "`, expected `object`."));
        var w = t({}, _[F], d);
        for (var R in w) {
          var ee = d[R];
          if (n(d, R) && typeof ee != "function")
            return K(D, I, N, R, B(ee));
          if (!ee)
            return new E(
              "Invalid " + I + " `" + N + "` key `" + R + "` supplied to `" + D + "`.\nBad object: " + JSON.stringify(_[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var y = ee(A, R, D, I, N + "." + R, r);
          if (y)
            return y;
        }
        return null;
      }
      return W(f);
    }
    function L(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(L);
          if (d === null || l(d))
            return !0;
          var f = m(d);
          if (f) {
            var _ = f.call(d), F;
            if (f !== d.entries) {
              for (; !(F = _.next()).done; )
                if (!L(F.value))
                  return !1;
            } else
              for (; !(F = _.next()).done; ) {
                var D = F.value;
                if (D && !L(D[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function P(d, f) {
      return d === "symbol" ? !0 : f ? f["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && f instanceof Symbol : !1;
    }
    function z(d) {
      var f = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : P(f, d) ? "symbol" : f;
    }
    function B(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var f = z(d);
      if (f === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return f;
    }
    function oe(d) {
      var f = B(d);
      switch (f) {
        case "array":
        case "object":
          return "an " + f;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + f;
        default:
          return f;
      }
    }
    function ce(d) {
      return !d.constructor || !d.constructor.name ? b : d.constructor.name;
    }
    return T.checkPropTypes = o, T.resetWarningCache = o.resetWarningCache, T.PropTypes = T, T;
  }, je;
}
var qe, Ct;
function rn() {
  if (Ct)
    return qe;
  Ct = 1;
  var e = Qe();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, qe = function() {
    function n(c, l, u, h, p, m) {
      if (m !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
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
  var nn = Vt(), on = !0;
  Be.exports = tn()(nn.isElement, on);
} else
  Be.exports = rn()();
var Xt = Be.exports;
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
const an = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Pt,
  default: Pt
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
be.browserPrefixToKey = Gt;
be.browserPrefixToStyle = pn;
be.default = void 0;
be.getPrefix = Ut;
const Ve = ["Moz", "Webkit", "O", "ms"];
function Ut() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const r = (e = window.document) === null || e === void 0 || (e = e.documentElement) === null || e === void 0 ? void 0 : e.style;
  if (!r || t in r)
    return "";
  for (let n = 0; n < Ve.length; n++)
    if (Gt(t, Ve[n]) in r)
      return Ve[n];
  return "";
}
function Gt(e, t) {
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
be.default = Ut();
Object.defineProperty(X, "__esModule", {
  value: !0
});
X.addClassName = Qt;
X.addEvent = yn;
X.addUserSelectStyles = On;
X.createCSSTransform = Tn;
X.createSVGTransform = xn;
X.getTouch = Dn;
X.getTouchIdentifier = En;
X.getTranslation = Je;
X.innerHeight = Cn;
X.innerWidth = Pn;
X.matchesSelector = Kt;
X.matchesSelectorAndParentsTo = gn;
X.offsetXYFromParent = wn;
X.outerHeight = bn;
X.outerWidth = Sn;
X.removeClassName = Jt;
X.removeEvent = vn;
X.removeUserSelectStyles = Rn;
var ne = de, wt = mn(be);
function Ht(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Ht = function(n) {
    return n ? r : t;
  })(e);
}
function mn(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Ht(t);
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
function Kt(e, t) {
  return Ee || (Ee = (0, ne.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, ne.isFunction)(e[r]);
  })), (0, ne.isFunction)(e[Ee]) ? e[Ee](t) : !1;
}
function gn(e, t, r) {
  let n = e;
  do {
    if (Kt(n, t))
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
    [(0, wt.browserPrefixToKey)("transform", wt.default)]: r
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
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && Qt(e.body, "react-draggable-transparent-selection");
}
function Rn(e) {
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
function Qt(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function Jt(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var fe = {};
Object.defineProperty(fe, "__esModule", {
  value: !0
});
fe.canDragX = Mn;
fe.canDragY = Fn;
fe.createCoreData = kn;
fe.createDraggableData = Ln;
fe.getBoundPosition = _n;
fe.getControlPosition = An;
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
    const u = l, h = c.getComputedStyle(o), p = c.getComputedStyle(u);
    n = {
      left: -o.offsetLeft + (0, re.int)(p.paddingLeft) + (0, re.int)(h.marginLeft),
      top: -o.offsetTop + (0, re.int)(p.paddingTop) + (0, re.int)(h.marginTop),
      right: (0, Ce.innerWidth)(u) - (0, Ce.outerWidth)(o) - o.offsetLeft + (0, re.int)(p.paddingRight) - (0, re.int)(h.marginRight),
      bottom: (0, Ce.innerHeight)(u) - (0, Ce.outerHeight)(o) - o.offsetTop + (0, re.int)(p.paddingBottom) - (0, re.int)(h.marginBottom)
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
function An(e, t, r) {
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
var Ae = {}, ke = {};
Object.defineProperty(ke, "__esModule", {
  value: !0
});
ke.default = $n;
function $n() {
}
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = void 0;
var ze = Wn(pe), te = et(Xt), Yn = et(kt), Q = X, he = fe, Xe = de, we = et(ke);
function et(e) {
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
function Wn(e, t) {
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
let me = ie.mouse, Le = class extends ze.Component {
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
      if (this.props.disabled || !(t.target instanceof n.defaultView.Node) || this.props.handle && !(0, Q.matchesSelectorAndParentsTo)(t.target, this.props.handle, r) || this.props.cancel && (0, Q.matchesSelectorAndParentsTo)(t.target, this.props.cancel, r))
        return;
      t.type === "touchstart" && t.preventDefault();
      const o = (0, Q.getTouchIdentifier)(t);
      this.touchIdentifier = o;
      const a = (0, he.getControlPosition)(t, o, this);
      if (a == null)
        return;
      const {
        x: c,
        y: l
      } = a, u = (0, he.createCoreData)(this, c, l);
      (0, we.default)("DraggableCore: handleDragStart: %j", u), (0, we.default)("calling", this.props.onStart), !(this.props.onStart(t, u) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, Q.addUserSelectStyles)(n), this.dragging = !0, this.lastX = c, this.lastY = l, (0, Q.addEvent)(n, me.move, this.handleDrag), (0, Q.addEvent)(n, me.stop, this.handleDragStop));
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
      if ((0, we.default)("DraggableCore: handleDrag: %j", a), this.props.onDrag(t, a) === !1 || this.mounted === !1) {
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
      l && this.props.enableUserSelectHack && (0, Q.removeUserSelectStyles)(l.ownerDocument), (0, we.default)("DraggableCore: handleDragStop: %j", a), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, l && ((0, we.default)("DraggableCore: Removing handlers"), (0, Q.removeEvent)(l.ownerDocument, me.move, this.handleDrag), (0, Q.removeEvent)(l.ownerDocument, me.stop, this.handleDragStop));
    }), J(this, "onMouseDown", (t) => (me = ie.mouse, this.handleDragStart(t))), J(this, "onMouseUp", (t) => (me = ie.mouse, this.handleDragStop(t))), J(this, "onTouchStart", (t) => (me = ie.touch, this.handleDragStart(t))), J(this, "onTouchEnd", (t) => (me = ie.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = !0;
    const t = this.findDOMNode();
    t && (0, Q.addEvent)(t, ie.touch.start, this.onTouchStart, {
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
      (0, Q.removeEvent)(r, ie.mouse.move, this.handleDrag), (0, Q.removeEvent)(r, ie.touch.move, this.handleDrag), (0, Q.removeEvent)(r, ie.mouse.stop, this.handleDragStop), (0, Q.removeEvent)(r, ie.touch.stop, this.handleDragStop), (0, Q.removeEvent)(t, ie.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, Q.removeUserSelectStyles)(r);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var t, r;
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (r = this.props) === null || r === void 0 || (r = r.nodeRef) === null || r === void 0 ? void 0 : r.current : Yn.default.findDOMNode(this);
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
J(Le, "displayName", "DraggableCore");
J(Le, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: te.default.bool,
  children: te.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: te.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: te.default.bool,
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
  grid: te.default.arrayOf(te.default.number),
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
  handle: te.default.string,
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
  cancel: te.default.string,
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
  nodeRef: te.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: te.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: te.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: te.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: te.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: te.default.number,
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
  var t = b(pe), r = p(Xt), n = p(kt), o = p(sn), a = X, c = fe, l = de, u = p(Ae), h = p(ke);
  function p(S) {
    return S && S.__esModule ? S : { default: S };
  }
  function m(S) {
    if (typeof WeakMap != "function")
      return null;
    var g = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap();
    return (m = function(s) {
      return s ? v : g;
    })(S);
  }
  function b(S, g) {
    if (!g && S && S.__esModule)
      return S;
    if (S === null || typeof S != "object" && typeof S != "function")
      return { default: S };
    var v = m(g);
    if (v && v.has(S))
      return v.get(S);
    var s = {}, M = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var C in S)
      if (C !== "default" && Object.prototype.hasOwnProperty.call(S, C)) {
        var $ = M ? Object.getOwnPropertyDescriptor(S, C) : null;
        $ && ($.get || $.set) ? Object.defineProperty(s, C, $) : s[C] = S[C];
      }
    return s.default = S, v && v.set(S, s), s;
  }
  function T() {
    return T = Object.assign ? Object.assign.bind() : function(S) {
      for (var g = 1; g < arguments.length; g++) {
        var v = arguments[g];
        for (var s in v)
          Object.prototype.hasOwnProperty.call(v, s) && (S[s] = v[s]);
      }
      return S;
    }, T.apply(this, arguments);
  }
  function x(S, g, v) {
    return g = E(g), g in S ? Object.defineProperty(S, g, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : S[g] = v, S;
  }
  function E(S) {
    var g = W(S, "string");
    return typeof g == "symbol" ? g : String(g);
  }
  function W(S, g) {
    if (typeof S != "object" || S === null)
      return S;
    var v = S[Symbol.toPrimitive];
    if (v !== void 0) {
      var s = v.call(S, g || "default");
      if (typeof s != "object")
        return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (g === "string" ? String : Number)(S);
  }
  class j extends t.Component {
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
      super(g), x(this, "onDragStart", (v, s) => {
        if ((0, h.default)("Draggable: onDragStart: %j", s), this.props.onStart(v, (0, c.createDraggableData)(this, s)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), x(this, "onDrag", (v, s) => {
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
            x: G,
            y: H
          } = C;
          C.x += this.state.slackX, C.y += this.state.slackY;
          const [K, O] = (0, c.getBoundPosition)(this, C.x, C.y);
          C.x = K, C.y = O, C.slackX = this.state.slackX + (G - C.x), C.slackY = this.state.slackY + (H - C.y), M.x = C.x, M.y = C.y, M.deltaX = C.x - this.state.x, M.deltaY = C.y - this.state.y;
        }
        if (this.props.onDrag(v, M) === !1)
          return !1;
        this.setState(C);
      }), x(this, "onDragStop", (v, s) => {
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
            x: G,
            y: H
          } = this.props.position;
          C.x = G, C.y = H;
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
        defaultClassNameDragging: $,
        defaultClassNameDragged: G,
        position: H,
        positionOffset: K,
        scale: O,
        ...k
      } = this.props;
      let L = {}, P = null;
      const B = !!!H || this.state.dragging, oe = H || M, ce = {
        // Set left if horizontal drag is enabled
        x: (0, c.canDragX)(this) && B ? this.state.x : oe.x,
        // Set top if vertical drag is enabled
        y: (0, c.canDragY)(this) && B ? this.state.y : oe.y
      };
      this.state.isElementSVG ? P = (0, a.createSVGTransform)(ce, K) : L = (0, a.createCSSTransform)(ce, K);
      const d = (0, o.default)(s.props.className || "", C, {
        [$]: this.state.dragging,
        [G]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(u.default, T({}, k, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(s), {
        className: d,
        style: {
          ...s.props.style,
          ...L
        },
        transform: P
      }));
    }
  }
  e.default = j, x(j, "displayName", "Draggable"), x(j, "propTypes", {
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
  }), x(j, "defaultProps", {
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
})(qt);
const {
  default: er,
  DraggableCore: Vn
} = qt;
Fe.exports = er;
Fe.exports.default = er;
Fe.exports.DraggableCore = Vn;
var zn = Fe.exports;
const Xn = /* @__PURE__ */ Yr(zn);
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
  const { formLayout: n, context: o } = t, { formData: a } = o, c = ae({}), l = Bn(t), u = "palmyra-form-field-data", h = Ge(() => (p) => It(p, c, p.label), [a.data]);
  return /* @__PURE__ */ i("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: n.fields.map((p, m) => /* @__PURE__ */ i("div", { className: l, children: /* @__PURE__ */ i("div", { className: u, children: h(p) }) }, p.attribute)) });
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
  const a = (T) => {
    T.stopPropagation();
  };
  var { getFieldManager: c, getFormData: l } = At(o, () => {
  }, "edit");
  const u = () => {
    n({});
  }, h = () => {
    var T = l();
    n && n(T);
  }, p = () => {
    r();
  }, m = (T) => {
    T.keyCode === 27 && p();
  }, b = Ir(e);
  return /* @__PURE__ */ i("div", { className: "grid-filter-container", children: /* @__PURE__ */ U(
    gr,
    {
      open: t,
      onClick: a,
      PaperComponent: Gn,
      onKeyDown: m,
      children: [
        /* @__PURE__ */ U("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ i("div", { className: "grid-header-text-container", children: /* @__PURE__ */ i("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ i("div", { className: "grid-header-icon-container", onClick: p, children: /* @__PURE__ */ i(Te, { title: "close", arrow: !0, children: /* @__PURE__ */ i(Or, { className: "filter-cancel-icon" }) }) })
        ] }),
        /* @__PURE__ */ i("span", { className: "filter-header-border" }),
        /* @__PURE__ */ i("div", { className: "grid-filter-content", children: /* @__PURE__ */ i(Ne.Provider, { value: c, children: /* @__PURE__ */ i(
          $t,
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
              Renderer: Un
            }
          }
        ) }) }),
        /* @__PURE__ */ U("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ i(Se, { className: "filter-reset-btn", disableRipple: !0, onClick: u, children: "Reset" }),
          /* @__PURE__ */ i(Se, { className: "filter-button", disableRipple: !0, onClick: h, children: "Filter" })
        ] })
      ]
    }
  ) });
}, Kn = se(function(t, r) {
  const { columns: n, children: o, EmptyChild: a, onRowClick: c, quickSearch: l } = t, u = a || Ar, h = t.customizer || Lr, [p, m] = Z(!1), [b, T] = Z("standard"), [x, E] = Z(!1), [W, j] = Z(""), {
    setQueryFilter: S,
    setQuickSearch: g,
    setSortColumns: v,
    gotoPage: s,
    setPageSize: M,
    getPageNo: C,
    refreshData: $,
    data: G,
    totalRecords: H,
    pageSizeOptions: K,
    filter: O,
    queryLimit: k
  } = Me(t), L = r || ae(null);
  ve(L, () => ({
    setFilter: (w) => {
      S(w);
    },
    refresh: () => {
      $();
    }
  }), []);
  const P = (w, R) => {
    s(R);
  }, z = Fr(n, h), B = (w) => {
    T(w);
  }, oe = () => {
    m(!p);
  }, ce = () => b === "compact" ? { padding: "3px" } : b === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, d = () => b === "compact" ? { padding: "3px" } : b === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, f = () => {
    var w;
    switch (b) {
      case "compact":
        w = /* @__PURE__ */ i(it, { className: "density-icon" });
        break;
      case "comfortable":
        w = /* @__PURE__ */ i(st, { className: "density-icon" });
        break;
      default:
        w = /* @__PURE__ */ i(at, { className: "grid-button-icon" });
        break;
    }
    return w;
  }, _ = (w) => {
    const R = w.target.value;
    j(R), R ? g(R) : S({});
  }, F = (w) => {
    c && c(w);
  }, D = (w) => {
    const R = parseInt(w.target.value, 10);
    M(R);
  }, I = () => {
    console.info("Export Clicked");
  }, N = 200, A = !!t.pageSize;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ U("div", { children: [
    o,
    /* @__PURE__ */ U("div", { className: "grid-header", children: [
      /* @__PURE__ */ i("div", { className: "grid-header-filter", children: !!l && /* @__PURE__ */ i(
        He,
        {
          sx: { width: N },
          type: "text",
          value: W,
          onChange: _,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ i(Ke, { position: "end", children: /* @__PURE__ */ i(jt, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ i(vr, { onClickAway: () => {
        m(!1);
      }, children: /* @__PURE__ */ U("div", { className: "grid-header-button", onClick: oe, children: [
        /* @__PURE__ */ i(Te, { title: "Density", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: f() }) }),
        p && /* @__PURE__ */ i("div", { className: "density-dropdown-content", children: /* @__PURE__ */ U("ul", { children: [
          /* @__PURE__ */ U("li", { onClick: () => B("standard"), children: [
            /* @__PURE__ */ i(at, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ U("li", { onClick: () => B("compact"), children: [
            /* @__PURE__ */ i(it, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ U("li", { onClick: () => B("comfortable"), children: [
            /* @__PURE__ */ i(st, { className: "density-icon" }),
            /* @__PURE__ */ i("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ U("div", { className: "grid-header-button", children: [
        /* @__PURE__ */ i(Te, { title: "Filter", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, onClick: () => E(!0), children: /* @__PURE__ */ i(Rr, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ i(
          Hn,
          {
            columns: n,
            setFilter: S,
            defaultFilter: O,
            isOpen: x,
            onClose: () => E(!1)
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: I, children: /* @__PURE__ */ i(Te, { title: "Export", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(_r, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ i("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ i(Te, { title: "New", placement: "top", children: /* @__PURE__ */ i(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ i(Nr, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ i(Pe, {})
    ] }),
    /* @__PURE__ */ i("div", { className: "grid-table", children: /* @__PURE__ */ i(
      kr,
      {
        columnDefs: z,
        EmptyChild: u,
        rowData: G,
        onRowClick: F,
        onRowStyle: ce,
        onHeaderStyle: d,
        onSortColumn: v
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "grid-header", children: /* @__PURE__ */ i("div", { className: "grid-filter", children: A && /* @__PURE__ */ i(
      Rt,
      {
        component: "div",
        count: H || 0,
        page: C(),
        onPageChange: P,
        rowsPerPage: k.limit,
        rowsPerPageOptions: K || [],
        onRowsPerPageChange: D
      }
    ) }) })
  ] }) });
}), Zo = se(function(t, r) {
  const { columns: n, endPoint: o, storeFactory: a, layoutParams: c } = t, l = t.quickSearch || "", u = ae(null), h = (m, b) => {
    console.log(b);
  };
  ye(() => {
    var m = ct.subscribe(t.topic, h);
    return () => {
      ct.unsubscribe(m);
    };
  }, [t.topic]), r && ve(r, () => ({
    setFilter: (m) => {
      u.current.setFilter(m);
    },
    refresh: () => {
      u.current.refresh();
    }
  }), [n, o]);
  const p = {
    fields: n,
    quickSearch: l,
    storeOptions: {
      endPoint: o
    },
    actionOptions: t.actions
  };
  return /* @__PURE__ */ i(Pe, { children: /* @__PURE__ */ i(Ue.Provider, { value: a, children: /* @__PURE__ */ i(tr, { layout: p, context: c, customizer: t.customizer, ref: u }) }) });
}), Qn = se(function(t, r) {
  const n = t.layout, [o, a] = Z(n.fields), c = n.pagination ? n.pagination : [15], l = Oe(Ue), u = Oe(Dt);
  var h = n.storeOptions || {}, p = {};
  wr(p, h, u);
  const m = l.getGridStore(p, n.storeOptions.endPoint);
  ye(() => {
    h.hasLayout && m.queryLayout({}).then((x) => {
      a(x.columns);
    });
  }, []);
  const { onClick: b, onNewClick: T } = Wr(n.actionOptions, u);
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    Kn,
    {
      columns: o,
      store: m,
      pageSize: c,
      onRowClick: b,
      onNewClick: T,
      customizer: t.customizer,
      quickSearch: n.quickSearch,
      ref: r
    }
  ) });
}), tr = Qn, Jn = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Container || Ft;
  return /* @__PURE__ */ i(Lt, { fallback: /* @__PURE__ */ i("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ i(n, { ...t, children: ((a) => /* @__PURE__ */ i(
    tr,
    {
      context: r,
      layout: a
    }
  ))(t.tableLayout) }) });
}, Zn = (e) => {
  const { layout: t } = e;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ i($t, { ...e });
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
const rr = (e) => {
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
}, Tt = se(function(t, r) {
  const { layout: n } = t;
  ve(r, () => ({
    resetFilter() {
    }
  }), []);
  const o = {}, a = n.tabs;
  return /* @__PURE__ */ i("div", { children: a.map((c, l) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    rr,
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
}, xt = se(function(t, r) {
  var p;
  const n = t.data || {}, { layout: o } = t;
  var { getFieldManager: a, getFormData: c, isFormValid: l } = At(n, (p = t.callbacks) == null ? void 0 : p.onFormValidChange, to(t.mode));
  ve(r, () => ({
    getData() {
      return c();
    },
    isValid() {
      return l();
    }
  }), []);
  const u = { formData: n }, h = o.tabs;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(Ne.Provider, { value: a, children: h.map((m, b) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    rr,
    {
      layout: m,
      context: u
    }
  ) }, m.name + b)) }) });
}), ro = (e) => {
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
}, ea = se(function(t, r) {
  const [n, o] = Z(t.layout), a = t.mode ? t.mode : n.type ? n.type : "grid", c = t.layoutParams || {}, l = ro(a), u = ae(0);
  return ye(() => {
    o(t.layout), u.current < 999999 ? u.current++ : u.current = 0;
  }, [t.layout]), /* @__PURE__ */ i(Lt, { fallback: /* @__PURE__ */ i("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ i(Ue.Provider, { value: t.storeFactory, children: /* @__PURE__ */ i(Dt.Provider, { value: c, children: /* @__PURE__ */ i(l, { ...t, ref: (h) => {
    r && (r.current = h);
  } }, u.current) }) }) });
}), ta = se(function(t, r) {
  const { children: n, Child: o, childProps: a, pageSize: c } = t, l = r || ae(null), {
    setQueryFilter: u,
    setQuickSearch: h,
    gotoPage: p,
    setPageSize: m,
    getPageNo: b,
    data: T,
    pageSizeOptions: x,
    queryLimit: E
  } = Me(t), W = t.listKeyProvider || ((C, $) => $);
  ve(l, () => ({
    setFilter(C) {
      u(C);
    },
    gotoPage(C) {
      p(C);
    },
    nextPage() {
    },
    prevPage() {
    }
  }), []);
  const j = (C, $) => {
    p($);
  }, S = (C) => {
    const $ = C.target.value;
    h($);
  }, g = (C) => {
    const $ = parseInt(C.target.value, 10);
    m($);
  }, v = 200, s = !!c, M = !!t.quickSearch;
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ U("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ U("div", { children: [
      /* @__PURE__ */ U("div", { className: "card-header", children: [
        /* @__PURE__ */ i("div", { className: "card-filter", children: M && /* @__PURE__ */ i(
          He,
          {
            sx: { width: v },
            type: "text",
            onChange: S,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ i(Ke, { position: "end", children: /* @__PURE__ */ i(jt, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ i("div", { className: "card-pagination", children: s && /* @__PURE__ */ i(
          Rt,
          {
            component: "div",
            count: T,
            page: b(),
            onPageChange: j,
            rowsPerPage: E.limit,
            rowsPerPageOptions: x || [],
            onRowsPerPageChange: g
          }
        ) })
      ] }),
      /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
        Sr,
        {
          Child: o,
          childKeyProvider: W,
          dataList: T,
          childProps: a,
          EmptyChild: t.EmptyChild
        }
      ) })
    ] })
  ] }) });
});
export {
  ea as F,
  tr as G,
  Qo as M,
  Zo as P,
  ta as S,
  rr as T,
  Kn as a,
  Xr as b,
  Me as c,
  Ur as d,
  $t as e,
  Un as f,
  It as g,
  Hn as h,
  Jn as i,
  Zn as j,
  Tt as k,
  xt as l,
  zr as u
};
