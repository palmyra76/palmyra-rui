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
import { FieldManagerContext as Ne, StoreFactoryContext as Ue, LayoutParamsContext as Pt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as s, jsxs as U, Fragment as Te } from "react/jsx-runtime";
import pe, { useState as Z, useEffect as ge, forwardRef as ce, useContext as Oe, useRef as se, useImperativeHandle as ve, useMemo as wt } from "react";
import { FormControlLabel as et, Checkbox as tt, FormControl as Tt, FormHelperText as xt, InputLabel as ur, Autocomplete as dr, TextField as Ge, Dialog as fr, Tooltip as we, Button as Se, Paper as pr, InputAdornment as Dt, ClickAwayListener as mr, TablePagination as Et, Box as hr } from "@mui/material";
import gr from "../palmyra/layout/card/CardLayout.js";
import yr from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Ot, getFieldLabel as Rt } from "../palmyra/mui/form/MuiUtil.js";
import _t from "../palmyra/mui/form/FieldDecorator.js";
import { hasDot as Re } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as _e, setValueByKey as rt } from "../palmyra/form/FormUtil.js";
import { delay as vr, mergeDeep as br } from "../palmyra/utils/index.js";
import Sr from "../palmyra/mui/form/MuiDateRangePicker.js";
import Nt from "../palmyra/layout/container/SectionContainer.js";
import Cr from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as Pr } from "../palmyra/grid/base/ColumnConverter.js";
import wr from "../palmyra/grid/base/EmptyChildTable.js";
import Tr from "../palmyra/grid/base/TableX.js";
import { Close as xr, Menu as nt, DensitySmall as ot, DensityLarge as at, FilterAlt as Dr, FileDownloadOutlined as Er, Add as Or } from "@mui/icons-material";
import { NoopCustomizer as Rr } from "../palmyra/grid/Types.js";
import { convertToField as _r } from "../palmyra/grid/base/GridFieldConverter.js";
import { d as Mt } from "./PalmyraFormManager.js";
import "../palmyra/form/PalmyraForm.js";
import { a as Nr, g as Mr } from "./_commonjsHelpers.js";
import Ft from "react-dom";
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
import { ErrorBoundary as At } from "../palmyra/layout/ErrorBoundary.js";
import Ar from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import kr from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { useKeyValue as Lr } from "../palmyra/utils/pubsub/PubSubHelper.js";
const Me = (e) => {
  const { store: t, quickSearch: r, endPointVars: n } = e, o = e.fetchAll != !1, [a, c] = Z(null), [l, d] = e.filterTopic ? Lr(e.filterTopic, {}) : Z({}), [h, p] = Z({}), m = e.pageSize ? e.pageSize : 15;
  var b = m instanceof Array ? m : [m], E = m instanceof Array ? m[0] : m;
  const [w, k] = Z({ limit: E, offset: 0 }), [j, Y] = Z(null), S = () => Math.round(w.offset / w.limit), g = () => w.limit, v = (C) => {
    k({ ...w, offset: C * E });
  }, i = (C) => {
    const D = C > 10 || C == -1 ? C : 15;
    k({ ...w, limit: D });
  }, _ = () => l ? Object.keys(l).length == 0 : !1;
  ge(() => {
    (o || !_()) && P();
  }, [w, l, h]);
  const P = () => {
    const C = { filter: l, sortOrder: h, total: !0, endPointVars: n, ...w };
    if (t)
      try {
        t.query(C).then((D) => {
          Y(D.result), c(D.total);
        }).catch((D) => {
          var q = D.response ? D.response : D;
          console.error("error while fetching", q), z();
        });
      } catch (D) {
        console.error(D), $();
      }
    else
      console.error("Store is not provided for the Grid"), $();
  }, $ = () => {
    Y([]), c(0);
  }, z = () => {
    Y(void 0), c(null);
  };
  return {
    setQueryFilter: (C) => {
      typeof C == "function" || C && Object.keys(C).length > 0 ? d(C) : d({});
    },
    setQuickSearch: (C) => {
      const D = r;
      d(C ? (q) => (q[D] = C, { ...q }) : (q) => (delete q[D], { ...q }));
    },
    setSortColumns: (C) => {
      p(C);
    },
    refreshData: P,
    gotoPage: v,
    setPageSize: i,
    getPageNo: S,
    getLimit: g,
    filter: l,
    queryLimit: w,
    data: j,
    totalRecords: a,
    pageSizeOptions: b
  };
};
function st(e) {
  return e ? Array.isArray(e) ? e : typeof e == "string" ? e.split(",") : (console.log(e), [e]) : [];
}
const ea = ce(function(t, r) {
  const n = Oe(Ne), o = r || se(null), a = n(t, "checkbox", o), { mutateOptions: c, setMutateOptions: l } = a, [d, h] = Z(!1), p = st(a.data), m = a.error, b = a.eventListeners, w = { store: a.store, pageSize: -1 }, { data: k } = Me(w), j = k, Y = se(null), S = t.lookupOptions || {}, g = S.idAttribute || "id", v = S.titleAttribute || "name", i = Re(g) ? (N) => _e(g, N) : (N) => N[g], _ = Re(v) ? (N) => _e(v, N) : (N) => N[v];
  ve(o, () => ({
    focus() {
      Y.current.focus();
    },
    isValid() {
      return !m.status;
    },
    assignAttribute(N) {
      Y.current.assignAttribute(N);
    },
    clear() {
      a.setData("");
    },
    setValue(N) {
      a.setData(N);
    },
    setVisible(N) {
      l({ visible: N });
    }
  }), []);
  var P = Ot(t, a.data, t.label);
  t.readonly && (P.inputProps = { readOnly: !0 });
  function $(N, C) {
    const D = st(a.data);
    var q = D.indexOf(N);
    C ? q < 0 && D.push(N) : q >= 0 && D.splice(q, 1), b.onValueChange(D.toString());
  }
  var z = {
    onBlur: b.onBlur,
    onFocus: b.onFocus,
    onChange: (N) => {
      $(N.target.value, N.target.checked);
    }
  };
  const G = (N) => {
    const C = N.toString();
    return p.includes(C);
  }, B = (N) => {
    const C = N.target.checked;
    h(C);
    var D = [];
    C && j.map((q) => {
      D.push(i(q));
    }), b.onValueChange(D.toString());
  };
  return /* @__PURE__ */ s("div", { className: t.className, children: c.visible && /* @__PURE__ */ U(
    _t,
    {
      label: Rt(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ s("div", { children: t.hideSelectAll ? /* @__PURE__ */ s(Te, {}) : /* @__PURE__ */ s(
          et,
          {
            control: /* @__PURE__ */ s(tt, { onChange: B }),
            label: "Select All"
          }
        ) }),
        /* @__PURE__ */ U(
          Tt,
          {
            className: "MuiServerCheckBoxFormControl",
            fullWidth: !0,
            error: m.status,
            ...P,
            children: [
              j ? j.map((N) => /* @__PURE__ */ s(
                et,
                {
                  value: i(N),
                  control: /* @__PURE__ */ s(
                    tt,
                    {
                      ...z,
                      checked: G(i(N)),
                      disabled: t.readonly
                    }
                  ),
                  label: _(N)
                },
                i(N)
              )) : /* @__PURE__ */ s("div", { children: "No options provided" }),
              /* @__PURE__ */ s(xt, { className: "form-error-text", children: m.message })
            ]
          }
        )
      ]
    }
  ) });
}), Ir = (e, t, r) => {
  const n = e.store || r.store, o = e.lookupOptions || {}, a = o.idAttribute || "id", c = o.titleAttribute || "name", l = o.searchAttribute || c, d = r.data, h = se(0), [p, m] = Z(null), [b, E] = Z([]), [w, k] = Z(""), j = {
    store: n,
    endPointVars: e.storeOptions.endPointVars,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: l
  }, Y = Me(j), {
    setQueryFilter: S,
    setQuickSearch: g,
    filter: v,
    totalRecords: i
  } = Y, _ = Y.data, P = Re(a) ? (C) => _e(a, C) : (C) => C == null ? void 0 : C[a], $ = Re(c) ? (C) => _e(c, C) : (C) => C[c];
  function z() {
    if (d) {
      var C = {};
      rt(a, C, d);
      const D = r.displayValue || d;
      return rt(c, C, D), C;
    } else
      return null;
  }
  ge(() => {
    var C = z();
    C && E([C]), m(z());
  }, [r.displayValue]), ge(() => {
    const C = _ ? [..._] : [], D = p;
    C && D && !G(_, P(D)) && C.unshift(D), E(C), h.current < i && (h.current = i);
  }, [_, i]);
  function G(C, D) {
    return C.find((q) => {
      if (P(q) === D)
        return q;
    });
  }
  ge(() => {
    vr(B);
  }, [w]);
  function B() {
    w.length > 0 ? g("*" + w + "*") : g("");
  }
  return {
    getSelectedOption: z,
    filter: v,
    labelAccessor: $,
    idAccessor: P,
    getServerLookup: (C) => {
      var D = Ot(e, p, e.label);
      const q = r.eventListeners, H = r.error, K = e.variant || "standard", oe = e.autoFocus || !1;
      t.readonly && (D.inputProps = { readOnly: !0 });
      var le = {
        onBlur: q.onBlur,
        onFocus: q.onFocus,
        onChange: (f, T) => {
          m(T);
        },
        onInputChange: (f, T) => (k(T), !0)
      };
      ge(() => {
        if (p) {
          const f = P(p);
          q.onValueChange(f);
        } else
          q.onValueChange(void 0);
      }, [p]);
      const u = (f) => typeof f == "object" ? $(f) + "" : f;
      return /* @__PURE__ */ s(
        _t,
        {
          label: Rt(e),
          customContainerClass: e.customContainerClass,
          colspan: e.colspan,
          customFieldClass: e.customFieldClass,
          customLabelClass: e.customLabelClass,
          children: /* @__PURE__ */ U(Tt, { variant: K, fullWidth: !0, error: H.status, children: [
            e.label ? /* @__PURE__ */ s(ur, { children: e.label }) : /* @__PURE__ */ s(Te, {}),
            /* @__PURE__ */ s(
              dr,
              {
                includeInputInList: !0,
                autoHighlight: !0,
                isOptionEqualToValue: (f, T) => P(f) == P(T),
                filterOptions: (f) => f,
                renderInput: (f) => /* @__PURE__ */ s(Ge, { ...f, inputRef: (T) => {
                  C.current = T;
                } }),
                getOptionLabel: u,
                ...D,
                options: b,
                autoFocus: oe,
                onOpen: (f) => {
                  B();
                },
                ...le
              }
            ),
            /* @__PURE__ */ s(xt, { className: "form-error-text", children: H.message })
          ] })
        }
      );
    },
    setQueryFilter: S,
    searchText: w,
    setSearchText: k,
    refreshOptions: B
  };
}, $r = ce(function(t, r) {
  const n = Oe(Ne), o = r || se(null), a = n(t, "serverlookup", o), c = a.error, { mutateOptions: l, setMutateOptions: d } = a, h = se(null), { getServerLookup: p, setQueryFilter: m } = Ir(t, l, a);
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
      d({ visible: b });
    },
    setAttribute(b) {
    },
    setFilter(b) {
      m(b);
    },
    resetFilter() {
    },
    addFilter(b, E) {
      m((w) => (w[b] = E, { ...w }));
    },
    setDefaultFilter(b) {
    }
  }), []), p(h);
}), Yr = (e) => {
  const { fieldDef: t } = e;
  return /* @__PURE__ */ U("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, ae = (e, t) => {
  const r = e.fieldDef;
  return /* @__PURE__ */ s(
    t,
    {
      ...r,
      label: e.title
    }
  );
}, jr = () => /* @__PURE__ */ s("div", { children: "To be Implemented" }), kt = (e, t, r) => {
  const { type: n } = e, o = { fieldDef: e, title: r };
  switch (n) {
    case "string":
      return ae(o, ir);
    case "radio":
      return ae(o, nr);
    case "select":
      return ae(o, or);
    case "date":
      return ae(o, tr);
    case "datetime":
      return ae(o, rr);
    case "checkbox":
      return ae(o, sr);
    case "serverlookup":
      return ae(o, $r);
    case "textarea":
      return ae(o, ar);
    case "switch":
      return ae(o, cr);
    case "password":
      return ae(o, lr);
    case "multiSelect":
      return jr();
    case "dateRange":
      return ae(o, Sr);
    default:
      return Yr(o);
  }
}, qr = ce(function(t, r) {
  var p;
  const { formLayout: n, context: o } = t, { formData: a } = o, c = n.Container;
  se({});
  const l = wt(() => (m) => kt(m), [a.data]);
  var d = ((p = n.options) == null ? void 0 : p.columns) || 1, h = { columns: d };
  return c ? /* @__PURE__ */ s("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((m, b) => /* @__PURE__ */ s(
    c,
    {
      index: b,
      field: m,
      label: m.title,
      options: h,
      children: l(m)
    },
    m.attribute
  )) }) : /* @__PURE__ */ s("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((m, b) => /* @__PURE__ */ s(Te, { children: l(m) })) });
}), Lt = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Renderer || qr, o = t.Container || Nt;
  const a = (c) => /* @__PURE__ */ s(
    n,
    {
      context: r,
      formLayout: c
    }
  );
  return /* @__PURE__ */ s(
    o,
    {
      hideTitle: t.hideTitle,
      title: t.title,
      name: t.name,
      children: /* @__PURE__ */ s(Cr, { columns: t.columns, children: a(t.formLayout) })
    }
  );
};
var It = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ct = pe.createContext && pe.createContext(It), ye = globalThis && globalThis.__assign || function() {
  return ye = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ye.apply(this, arguments);
}, Wr = globalThis && globalThis.__rest || function(e, t) {
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
    return pe.createElement(t.tag, ye({
      key: r
    }, t.attr), $t(t.child));
  });
}
function Vr(e) {
  return function(t) {
    return pe.createElement(zr, ye({
      attr: ye({}, e.attr)
    }, t), $t(e.child));
  };
}
function zr(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, a = e.title, c = Wr(e, ["attr", "size", "title"]), l = o || r.size || "1em", d;
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
    }), a && pe.createElement("title", null, a), e.children);
  };
  return ct !== void 0 ? pe.createElement(ct.Consumer, null, function(r) {
    return t(r);
  }) : t(It);
}
function Yt(e) {
  return Vr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
}
var Fe = { exports: {} }, jt = {}, Be = { exports: {} }, De = { exports: {} }, W = {};
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
    return W;
  lt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, j = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function g(i) {
    if (typeof i == "object" && i !== null) {
      var _ = i.$$typeof;
      switch (_) {
        case t:
          switch (i = i.type, i) {
            case d:
            case h:
            case n:
            case a:
            case o:
            case m:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case l:
                case p:
                case w:
                case E:
                case c:
                  return i;
                default:
                  return _;
              }
          }
        case r:
          return _;
      }
    }
  }
  function v(i) {
    return g(i) === h;
  }
  return W.AsyncMode = d, W.ConcurrentMode = h, W.ContextConsumer = l, W.ContextProvider = c, W.Element = t, W.ForwardRef = p, W.Fragment = n, W.Lazy = w, W.Memo = E, W.Portal = r, W.Profiler = a, W.StrictMode = o, W.Suspense = m, W.isAsyncMode = function(i) {
    return v(i) || g(i) === d;
  }, W.isConcurrentMode = v, W.isContextConsumer = function(i) {
    return g(i) === l;
  }, W.isContextProvider = function(i) {
    return g(i) === c;
  }, W.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === t;
  }, W.isForwardRef = function(i) {
    return g(i) === p;
  }, W.isFragment = function(i) {
    return g(i) === n;
  }, W.isLazy = function(i) {
    return g(i) === w;
  }, W.isMemo = function(i) {
    return g(i) === E;
  }, W.isPortal = function(i) {
    return g(i) === r;
  }, W.isProfiler = function(i) {
    return g(i) === a;
  }, W.isStrictMode = function(i) {
    return g(i) === o;
  }, W.isSuspense = function(i) {
    return g(i) === m;
  }, W.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === n || i === h || i === a || i === o || i === m || i === b || typeof i == "object" && i !== null && (i.$$typeof === w || i.$$typeof === E || i.$$typeof === c || i.$$typeof === l || i.$$typeof === p || i.$$typeof === j || i.$$typeof === Y || i.$$typeof === S || i.$$typeof === k);
  }, W.typeOf = g, W;
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
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, j = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function g(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === n || y === h || y === a || y === o || y === m || y === b || typeof y == "object" && y !== null && (y.$$typeof === w || y.$$typeof === E || y.$$typeof === c || y.$$typeof === l || y.$$typeof === p || y.$$typeof === j || y.$$typeof === Y || y.$$typeof === S || y.$$typeof === k);
    }
    function v(y) {
      if (typeof y == "object" && y !== null) {
        var ue = y.$$typeof;
        switch (ue) {
          case t:
            var xe = y.type;
            switch (xe) {
              case d:
              case h:
              case n:
              case a:
              case o:
              case m:
                return xe;
              default:
                var Ze = xe && xe.$$typeof;
                switch (Ze) {
                  case l:
                  case p:
                  case w:
                  case E:
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
    var i = d, _ = h, P = l, $ = c, z = t, G = p, B = n, N = w, C = E, D = r, q = a, H = o, K = m, oe = !1;
    function le(y) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), u(y) || v(y) === d;
    }
    function u(y) {
      return v(y) === h;
    }
    function f(y) {
      return v(y) === l;
    }
    function T(y) {
      return v(y) === c;
    }
    function F(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }
    function O(y) {
      return v(y) === p;
    }
    function L(y) {
      return v(y) === n;
    }
    function M(y) {
      return v(y) === w;
    }
    function A(y) {
      return v(y) === E;
    }
    function I(y) {
      return v(y) === r;
    }
    function x(y) {
      return v(y) === a;
    }
    function R(y) {
      return v(y) === o;
    }
    function ee(y) {
      return v(y) === m;
    }
    V.AsyncMode = i, V.ConcurrentMode = _, V.ContextConsumer = P, V.ContextProvider = $, V.Element = z, V.ForwardRef = G, V.Fragment = B, V.Lazy = N, V.Memo = C, V.Portal = D, V.Profiler = q, V.StrictMode = H, V.Suspense = K, V.isAsyncMode = le, V.isConcurrentMode = u, V.isContextConsumer = f, V.isContextProvider = T, V.isElement = F, V.isForwardRef = O, V.isFragment = L, V.isLazy = M, V.isMemo = A, V.isPortal = I, V.isProfiler = x, V.isStrictMode = R, V.isSuspense = ee, V.isValidElementType = g, V.typeOf = v;
  }()), V;
}
var dt;
function qt() {
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
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        h[p] = p;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ie = o() ? Object.assign : function(a, c) {
    for (var l, d = n(a), h, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var m in l)
        t.call(l, m) && (d[m] = l[m]);
      if (e) {
        h = e(l);
        for (var b = 0; b < h.length; b++)
          r.call(l, h[b]) && (d[h[b]] = l[h[b]]);
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
var Ye, mt;
function Wt() {
  return mt || (mt = 1, Ye = Function.call.bind(Object.prototype.hasOwnProperty)), Ye;
}
var je, ht;
function Gr() {
  if (ht)
    return je;
  ht = 1;
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
  function o(a, c, l, d, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (n(a, p)) {
          var m;
          try {
            if (typeof a[p] != "function") {
              var b = Error(
                (d || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            m = a[p](c, p, d, l, null, t);
          } catch (w) {
            m = w;
          }
          if (m && !(m instanceof Error) && e(
            (d || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var E = h ? h() : "";
            e(
              "Failed " + l + " type: " + m.message + (E ?? "")
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
function Hr() {
  if (gt)
    return qe;
  gt = 1;
  var e = qt(), t = Ur(), r = He(), n = Wt(), o = Gr(), a = function() {
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
    var h = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(u) {
      var f = u && (h && u[h] || u[p]);
      if (typeof f == "function")
        return f;
    }
    var b = "<<anonymous>>", E = {
      array: Y("array"),
      bigint: Y("bigint"),
      bool: Y("boolean"),
      func: Y("function"),
      number: Y("number"),
      object: Y("object"),
      string: Y("string"),
      symbol: Y("symbol"),
      any: S(),
      arrayOf: g,
      element: v(),
      elementType: i(),
      instanceOf: _,
      node: G(),
      objectOf: $,
      oneOf: P,
      oneOfType: z,
      shape: N,
      exact: C
    };
    function w(u, f) {
      return u === f ? u !== 0 || 1 / u === 1 / f : u !== u && f !== f;
    }
    function k(u, f) {
      this.message = u, this.data = f && typeof f == "object" ? f : {}, this.stack = "";
    }
    k.prototype = Error.prototype;
    function j(u) {
      if (process.env.NODE_ENV !== "production")
        var f = {}, T = 0;
      function F(L, M, A, I, x, R, ee) {
        if (I = I || b, R = R || A, ee !== r) {
          if (d) {
            var y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw y.name = "Invariant Violation", y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = I + ":" + A;
            !f[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            T < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + R + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), f[ue] = !0, T++);
          }
        }
        return M[A] == null ? L ? M[A] === null ? new k("The " + x + " `" + R + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new k("The " + x + " `" + R + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : u(M, A, I, x, R);
      }
      var O = F.bind(null, !1);
      return O.isRequired = F.bind(null, !0), O;
    }
    function Y(u) {
      function f(T, F, O, L, M, A) {
        var I = T[F], x = H(I);
        if (x !== u) {
          var R = K(I);
          return new k(
            "Invalid " + L + " `" + M + "` of type " + ("`" + R + "` supplied to `" + O + "`, expected ") + ("`" + u + "`."),
            { expectedType: u }
          );
        }
        return null;
      }
      return j(f);
    }
    function S() {
      return j(c);
    }
    function g(u) {
      function f(T, F, O, L, M) {
        if (typeof u != "function")
          return new k("Property `" + M + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var A = T[F];
        if (!Array.isArray(A)) {
          var I = H(A);
          return new k("Invalid " + L + " `" + M + "` of type " + ("`" + I + "` supplied to `" + O + "`, expected an array."));
        }
        for (var x = 0; x < A.length; x++) {
          var R = u(A, x, O, L, M + "[" + x + "]", r);
          if (R instanceof Error)
            return R;
        }
        return null;
      }
      return j(f);
    }
    function v() {
      function u(f, T, F, O, L) {
        var M = f[T];
        if (!l(M)) {
          var A = H(M);
          return new k("Invalid " + O + " `" + L + "` of type " + ("`" + A + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return j(u);
    }
    function i() {
      function u(f, T, F, O, L) {
        var M = f[T];
        if (!e.isValidElementType(M)) {
          var A = H(M);
          return new k("Invalid " + O + " `" + L + "` of type " + ("`" + A + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return j(u);
    }
    function _(u) {
      function f(T, F, O, L, M) {
        if (!(T[F] instanceof u)) {
          var A = u.name || b, I = le(T[F]);
          return new k("Invalid " + L + " `" + M + "` of type " + ("`" + I + "` supplied to `" + O + "`, expected ") + ("instance of `" + A + "`."));
        }
        return null;
      }
      return j(f);
    }
    function P(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), c;
      function f(T, F, O, L, M) {
        for (var A = T[F], I = 0; I < u.length; I++)
          if (w(A, u[I]))
            return null;
        var x = JSON.stringify(u, function(ee, y) {
          var ue = K(y);
          return ue === "symbol" ? String(y) : y;
        });
        return new k("Invalid " + L + " `" + M + "` of value `" + String(A) + "` " + ("supplied to `" + O + "`, expected one of " + x + "."));
      }
      return j(f);
    }
    function $(u) {
      function f(T, F, O, L, M) {
        if (typeof u != "function")
          return new k("Property `" + M + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var A = T[F], I = H(A);
        if (I !== "object")
          return new k("Invalid " + L + " `" + M + "` of type " + ("`" + I + "` supplied to `" + O + "`, expected an object."));
        for (var x in A)
          if (n(A, x)) {
            var R = u(A, x, O, L, M + "." + x, r);
            if (R instanceof Error)
              return R;
          }
        return null;
      }
      return j(f);
    }
    function z(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var f = 0; f < u.length; f++) {
        var T = u[f];
        if (typeof T != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(T) + " at index " + f + "."
          ), c;
      }
      function F(O, L, M, A, I) {
        for (var x = [], R = 0; R < u.length; R++) {
          var ee = u[R], y = ee(O, L, M, A, I, r);
          if (y == null)
            return null;
          y.data && n(y.data, "expectedType") && x.push(y.data.expectedType);
        }
        var ue = x.length > 0 ? ", expected one of type [" + x.join(", ") + "]" : "";
        return new k("Invalid " + A + " `" + I + "` supplied to " + ("`" + M + "`" + ue + "."));
      }
      return j(F);
    }
    function G() {
      function u(f, T, F, O, L) {
        return D(f[T]) ? null : new k("Invalid " + O + " `" + L + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return j(u);
    }
    function B(u, f, T, F, O) {
      return new k(
        (u || "React class") + ": " + f + " type `" + T + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function N(u) {
      function f(T, F, O, L, M) {
        var A = T[F], I = H(A);
        if (I !== "object")
          return new k("Invalid " + L + " `" + M + "` of type `" + I + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var x in u) {
          var R = u[x];
          if (typeof R != "function")
            return B(O, L, M, x, K(R));
          var ee = R(A, x, O, L, M + "." + x, r);
          if (ee)
            return ee;
        }
        return null;
      }
      return j(f);
    }
    function C(u) {
      function f(T, F, O, L, M) {
        var A = T[F], I = H(A);
        if (I !== "object")
          return new k("Invalid " + L + " `" + M + "` of type `" + I + "` " + ("supplied to `" + O + "`, expected `object`."));
        var x = t({}, T[F], u);
        for (var R in x) {
          var ee = u[R];
          if (n(u, R) && typeof ee != "function")
            return B(O, L, M, R, K(ee));
          if (!ee)
            return new k(
              "Invalid " + L + " `" + M + "` key `" + R + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(T[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(u), null, "  ")
            );
          var y = ee(A, R, O, L, M + "." + R, r);
          if (y)
            return y;
        }
        return null;
      }
      return j(f);
    }
    function D(u) {
      switch (typeof u) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !u;
        case "object":
          if (Array.isArray(u))
            return u.every(D);
          if (u === null || l(u))
            return !0;
          var f = m(u);
          if (f) {
            var T = f.call(u), F;
            if (f !== u.entries) {
              for (; !(F = T.next()).done; )
                if (!D(F.value))
                  return !1;
            } else
              for (; !(F = T.next()).done; ) {
                var O = F.value;
                if (O && !D(O[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function q(u, f) {
      return u === "symbol" ? !0 : f ? f["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && f instanceof Symbol : !1;
    }
    function H(u) {
      var f = typeof u;
      return Array.isArray(u) ? "array" : u instanceof RegExp ? "object" : q(f, u) ? "symbol" : f;
    }
    function K(u) {
      if (typeof u > "u" || u === null)
        return "" + u;
      var f = H(u);
      if (f === "object") {
        if (u instanceof Date)
          return "date";
        if (u instanceof RegExp)
          return "regexp";
      }
      return f;
    }
    function oe(u) {
      var f = K(u);
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
    function le(u) {
      return !u.constructor || !u.constructor.name ? b : u.constructor.name;
    }
    return E.checkPropTypes = o, E.resetWarningCache = o.resetWarningCache, E.PropTypes = E, E;
  }, qe;
}
var We, yt;
function Kr() {
  if (yt)
    return We;
  yt = 1;
  var e = He();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, We = function() {
    function n(c, l, d, h, p, m) {
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
  }, We;
}
if (process.env.NODE_ENV !== "production") {
  var Qr = qt(), Jr = !0;
  Be.exports = Hr()(Qr.isElement, Jr);
} else
  Be.exports = Kr()();
var Vt = Be.exports;
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
function vt() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = zt(e)) && (n && (n += " "), n += t);
  return n;
}
const Zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: vt,
  default: vt
}, Symbol.toStringTag, { value: "Module" })), en = /* @__PURE__ */ Nr(Zr);
var X = {}, de = {};
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
be.browserPrefixToKey = Bt;
be.browserPrefixToStyle = sn;
be.default = void 0;
be.getPrefix = Xt;
const Ve = ["Moz", "Webkit", "O", "ms"];
function Xt() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const r = (e = window.document) === null || e === void 0 || (e = e.documentElement) === null || e === void 0 ? void 0 : e.style;
  if (!r || t in r)
    return "";
  for (let n = 0; n < Ve.length; n++)
    if (Bt(t, Ve[n]) in r)
      return Ve[n];
  return "";
}
function Bt(e, t) {
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
be.default = Xt();
Object.defineProperty(X, "__esModule", {
  value: !0
});
X.addClassName = Ht;
X.addEvent = dn;
X.addUserSelectStyles = Pn;
X.createCSSTransform = vn;
X.createSVGTransform = bn;
X.getTouch = Sn;
X.getTouchIdentifier = Cn;
X.getTranslation = Ke;
X.innerHeight = hn;
X.innerWidth = gn;
X.matchesSelector = Gt;
X.matchesSelectorAndParentsTo = un;
X.offsetXYFromParent = yn;
X.outerHeight = pn;
X.outerWidth = mn;
X.removeClassName = Kt;
X.removeEvent = fn;
X.removeUserSelectStyles = wn;
var ne = de, bt = ln(be);
function Ut(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Ut = function(n) {
    return n ? r : t;
  })(e);
}
function ln(e, t) {
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
function un(e, t, r) {
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
function dn(e, t, r, n) {
  if (!e)
    return;
  const o = {
    capture: !0,
    ...n
  };
  e.addEventListener ? e.addEventListener(t, r, o) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r;
}
function fn(e, t, r, n) {
  if (!e)
    return;
  const o = {
    capture: !0,
    ...n
  };
  e.removeEventListener ? e.removeEventListener(t, r, o) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
}
function pn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ne.int)(r.borderTopWidth), t += (0, ne.int)(r.borderBottomWidth), t;
}
function mn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ne.int)(r.borderLeftWidth), t += (0, ne.int)(r.borderRightWidth), t;
}
function hn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ne.int)(r.paddingTop), t -= (0, ne.int)(r.paddingBottom), t;
}
function gn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ne.int)(r.paddingLeft), t -= (0, ne.int)(r.paddingRight), t;
}
function yn(e, t, r) {
  const o = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), a = (e.clientX + t.scrollLeft - o.left) / r, c = (e.clientY + t.scrollTop - o.top) / r;
  return {
    x: a,
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
    y: o
  } = e, a = "translate(".concat(n).concat(r, ",").concat(o).concat(r, ")");
  if (t) {
    const c = "".concat(typeof t.x == "string" ? t.x : t.x + r), l = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    a = "translate(".concat(c, ", ").concat(l, ")") + a;
  }
  return a;
}
function Sn(e, t) {
  return e.targetTouches && (0, ne.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, ne.findInArray)(e.changedTouches, (r) => t === r.identifier);
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
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && Ht(e.body, "react-draggable-transparent-selection");
}
function wn(e) {
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
fe.canDragX = Dn;
fe.canDragY = En;
fe.createCoreData = Rn;
fe.createDraggableData = _n;
fe.getBoundPosition = Tn;
fe.getControlPosition = On;
fe.snapToGrid = xn;
var re = de, Ce = X;
function Tn(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : Nn(n);
  const o = Qe(e);
  if (typeof n == "string") {
    const {
      ownerDocument: a
    } = o, c = a.defaultView;
    let l;
    if (n === "parent" ? l = o.parentNode : l = a.querySelector(n), !(l instanceof c.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const d = l, h = c.getComputedStyle(o), p = c.getComputedStyle(d);
    n = {
      left: -o.offsetLeft + (0, re.int)(p.paddingLeft) + (0, re.int)(h.marginLeft),
      top: -o.offsetTop + (0, re.int)(p.paddingTop) + (0, re.int)(h.marginTop),
      right: (0, Ce.innerWidth)(d) - (0, Ce.outerWidth)(o) - o.offsetLeft + (0, re.int)(p.paddingRight) - (0, re.int)(h.marginRight),
      bottom: (0, Ce.innerHeight)(d) - (0, Ce.outerHeight)(o) - o.offsetTop + (0, re.int)(p.paddingBottom) - (0, re.int)(h.marginBottom)
    };
  }
  return (0, re.isNum)(n.right) && (t = Math.min(t, n.right)), (0, re.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, re.isNum)(n.left) && (t = Math.max(t, n.left)), (0, re.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function xn(e, t, r) {
  const n = Math.round(t / e[0]) * e[0], o = Math.round(r / e[1]) * e[1];
  return [n, o];
}
function Dn(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function En(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function On(e, t, r) {
  const n = typeof t == "number" ? (0, Ce.getTouch)(e, t) : null;
  if (typeof t == "number" && !n)
    return null;
  const o = Qe(r), a = r.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, Ce.offsetXYFromParent)(n || e, a, r.props.scale);
}
function Rn(e, t, r) {
  const n = !(0, re.isNum)(e.lastX), o = Qe(e);
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
var ze = An(pe), te = Je(Vt), Fn = Je(Ft), Q = X, me = fe, Xe = de, Pe = Je(ke);
function Je(e) {
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
function An(e, t) {
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
let he = ie.mouse, Le = class extends ze.Component {
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
      const a = (0, me.getControlPosition)(t, o, this);
      if (a == null)
        return;
      const {
        x: c,
        y: l
      } = a, d = (0, me.createCoreData)(this, c, l);
      (0, Pe.default)("DraggableCore: handleDragStart: %j", d), (0, Pe.default)("calling", this.props.onStart), !(this.props.onStart(t, d) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, Q.addUserSelectStyles)(n), this.dragging = !0, this.lastX = c, this.lastY = l, (0, Q.addEvent)(n, he.move, this.handleDrag), (0, Q.addEvent)(n, he.stop, this.handleDragStop));
    }), J(this, "handleDrag", (t) => {
      const r = (0, me.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let l = n - this.lastX, d = o - this.lastY;
        if ([l, d] = (0, me.snapToGrid)(this.props.grid, l, d), !l && !d)
          return;
        n = this.lastX + l, o = this.lastY + d;
      }
      const a = (0, me.createCoreData)(this, n, o);
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
      const r = (0, me.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: o
      } = r;
      if (Array.isArray(this.props.grid)) {
        let d = n - this.lastX || 0, h = o - this.lastY || 0;
        [d, h] = (0, me.snapToGrid)(this.props.grid, d, h), n = this.lastX + d, o = this.lastY + h;
      }
      const a = (0, me.createCoreData)(this, n, o);
      if (this.props.onStop(t, a) === !1 || this.mounted === !1)
        return !1;
      const l = this.findDOMNode();
      l && this.props.enableUserSelectHack && (0, Q.removeUserSelectStyles)(l.ownerDocument), (0, Pe.default)("DraggableCore: handleDragStop: %j", a), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, l && ((0, Pe.default)("DraggableCore: Removing handlers"), (0, Q.removeEvent)(l.ownerDocument, he.move, this.handleDrag), (0, Q.removeEvent)(l.ownerDocument, he.stop, this.handleDragStop));
    }), J(this, "onMouseDown", (t) => (he = ie.mouse, this.handleDragStart(t))), J(this, "onMouseUp", (t) => (he = ie.mouse, this.handleDragStop(t))), J(this, "onTouchStart", (t) => (he = ie.touch, this.handleDragStart(t))), J(this, "onTouchEnd", (t) => (he = ie.touch, this.handleDragStop(t)));
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
      return d.default;
    }
  }), e.default = void 0;
  var t = b(pe), r = p(Vt), n = p(Ft), o = p(en), a = X, c = fe, l = de, d = p(Ae), h = p(ke);
  function p(S) {
    return S && S.__esModule ? S : { default: S };
  }
  function m(S) {
    if (typeof WeakMap != "function")
      return null;
    var g = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap();
    return (m = function(i) {
      return i ? v : g;
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
    var i = {}, _ = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var P in S)
      if (P !== "default" && Object.prototype.hasOwnProperty.call(S, P)) {
        var $ = _ ? Object.getOwnPropertyDescriptor(S, P) : null;
        $ && ($.get || $.set) ? Object.defineProperty(i, P, $) : i[P] = S[P];
      }
    return i.default = S, v && v.set(S, i), i;
  }
  function E() {
    return E = Object.assign ? Object.assign.bind() : function(S) {
      for (var g = 1; g < arguments.length; g++) {
        var v = arguments[g];
        for (var i in v)
          Object.prototype.hasOwnProperty.call(v, i) && (S[i] = v[i]);
      }
      return S;
    }, E.apply(this, arguments);
  }
  function w(S, g, v) {
    return g = k(g), g in S ? Object.defineProperty(S, g, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : S[g] = v, S;
  }
  function k(S) {
    var g = j(S, "string");
    return typeof g == "symbol" ? g : String(g);
  }
  function j(S, g) {
    if (typeof S != "object" || S === null)
      return S;
    var v = S[Symbol.toPrimitive];
    if (v !== void 0) {
      var i = v.call(S, g || "default");
      if (typeof i != "object")
        return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (g === "string" ? String : Number)(S);
  }
  class Y extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(g, v) {
      let {
        position: i
      } = g, {
        prevPropsPosition: _
      } = v;
      return i && (!_ || i.x !== _.x || i.y !== _.y) ? ((0, h.default)("Draggable: getDerivedStateFromProps %j", {
        position: i,
        prevPropsPosition: _
      }), {
        x: i.x,
        y: i.y,
        prevPropsPosition: {
          ...i
        }
      }) : null;
    }
    constructor(g) {
      super(g), w(this, "onDragStart", (v, i) => {
        if ((0, h.default)("Draggable: onDragStart: %j", i), this.props.onStart(v, (0, c.createDraggableData)(this, i)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), w(this, "onDrag", (v, i) => {
        if (!this.state.dragging)
          return !1;
        (0, h.default)("Draggable: onDrag: %j", i);
        const _ = (0, c.createDraggableData)(this, i), P = {
          x: _.x,
          y: _.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: z,
            y: G
          } = P;
          P.x += this.state.slackX, P.y += this.state.slackY;
          const [B, N] = (0, c.getBoundPosition)(this, P.x, P.y);
          P.x = B, P.y = N, P.slackX = this.state.slackX + (z - P.x), P.slackY = this.state.slackY + (G - P.y), _.x = P.x, _.y = P.y, _.deltaX = P.x - this.state.x, _.deltaY = P.y - this.state.y;
        }
        if (this.props.onDrag(v, _) === !1)
          return !1;
        this.setState(P);
      }), w(this, "onDragStop", (v, i) => {
        if (!this.state.dragging || this.props.onStop(v, (0, c.createDraggableData)(this, i)) === !1)
          return !1;
        (0, h.default)("Draggable: onDragStop: %j", i);
        const P = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: z,
            y: G
          } = this.props.position;
          P.x = z, P.y = G;
        }
        this.setState(P);
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
        children: i,
        defaultPosition: _,
        defaultClassName: P,
        defaultClassNameDragging: $,
        defaultClassNameDragged: z,
        position: G,
        positionOffset: B,
        scale: N,
        ...C
      } = this.props;
      let D = {}, q = null;
      const K = !!!G || this.state.dragging, oe = G || _, le = {
        // Set left if horizontal drag is enabled
        x: (0, c.canDragX)(this) && K ? this.state.x : oe.x,
        // Set top if vertical drag is enabled
        y: (0, c.canDragY)(this) && K ? this.state.y : oe.y
      };
      this.state.isElementSVG ? q = (0, a.createSVGTransform)(le, B) : D = (0, a.createCSSTransform)(le, B);
      const u = (0, o.default)(i.props.className || "", P, {
        [$]: this.state.dragging,
        [z]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(d.default, E({}, C, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(i), {
        className: u,
        style: {
          ...i.props.style,
          ...D
        },
        transform: q
      }));
    }
  }
  e.default = Y, w(Y, "displayName", "Draggable"), w(Y, "propTypes", {
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
  }), w(Y, "defaultProps", {
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
})(jt);
const {
  default: Jt,
  DraggableCore: In
} = jt;
Fe.exports = Jt;
Fe.exports.default = Jt;
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
}, qn = ce(function(t, r) {
  const { formLayout: n, context: o } = t, { formData: a } = o, c = se({}), l = jn(t), d = "palmyra-form-field-data", h = wt(() => (p) => kt(p, c, p.label), [a.data]);
  return /* @__PURE__ */ s("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: n.fields.map((p, m) => /* @__PURE__ */ s("div", { className: l, children: /* @__PURE__ */ s("div", { className: d, children: h(p) }) }, p.attribute)) });
});
function Wn(e) {
  return /* @__PURE__ */ s(
    Yn,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ s(pr, { ...e })
    }
  );
}
const Vn = ({ columns: e, isOpen: t, onClose: r, setFilter: n, defaultFilter: o = {} }) => {
  const a = (E) => {
    E.stopPropagation();
  };
  var { getFieldManager: c, getFormData: l } = Mt(o, () => {
  }, "edit");
  const d = () => {
    n({});
  }, h = () => {
    var E = l();
    n && n(E);
  }, p = () => {
    r();
  }, m = (E) => {
    E.keyCode === 27 && p();
  }, b = _r(e);
  return /* @__PURE__ */ s("div", { className: "grid-filter-container", children: /* @__PURE__ */ U(
    fr,
    {
      open: t,
      onClick: a,
      PaperComponent: Wn,
      onKeyDown: m,
      children: [
        /* @__PURE__ */ U("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ s("div", { className: "grid-header-text-container", children: /* @__PURE__ */ s("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ s("div", { className: "grid-header-icon-container", onClick: p, children: /* @__PURE__ */ s(we, { title: "close", arrow: !0, children: /* @__PURE__ */ s(xr, { className: "filter-cancel-icon" }) }) })
        ] }),
        /* @__PURE__ */ s("span", { className: "filter-header-border" }),
        /* @__PURE__ */ s("div", { className: "grid-filter-content", children: /* @__PURE__ */ s(Ne.Provider, { value: c, children: /* @__PURE__ */ s(
          Lt,
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
              Renderer: qn
            }
          }
        ) }) }),
        /* @__PURE__ */ U("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ s(Se, { className: "filter-reset-btn", disableRipple: !0, onClick: d, children: "Reset" }),
          /* @__PURE__ */ s(Se, { className: "filter-button", disableRipple: !0, onClick: h, children: "Filter" })
        ] })
      ]
    }
  ) });
}, zn = ce(function(t, r) {
  const { columns: n, children: o, EmptyChild: a, onRowClick: c, quickSearch: l } = t, d = a || wr, h = t.customizer || Rr, [p, m] = Z(!1), [b, E] = Z("standard"), [w, k] = Z(!1), [j, Y] = Z(""), {
    setQueryFilter: S,
    setQuickSearch: g,
    setSortColumns: v,
    gotoPage: i,
    setPageSize: _,
    getPageNo: P,
    refreshData: $,
    data: z,
    totalRecords: G,
    pageSizeOptions: B,
    filter: N,
    queryLimit: C
  } = Me(t), D = r || se(null);
  ve(D, () => ({
    setFilter: (x) => {
      S(x);
    },
    refresh: () => {
      $();
    }
  }), []);
  const q = (x, R) => {
    i(R);
  }, H = Pr(n, h), K = (x) => {
    E(x);
  }, oe = () => {
    m(!p);
  }, le = () => b === "compact" ? { padding: "3px" } : b === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, u = () => b === "compact" ? { padding: "3px" } : b === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, f = () => {
    var x;
    switch (b) {
      case "compact":
        x = /* @__PURE__ */ s(ot, { className: "density-icon" });
        break;
      case "comfortable":
        x = /* @__PURE__ */ s(at, { className: "density-icon" });
        break;
      default:
        x = /* @__PURE__ */ s(nt, { className: "grid-button-icon" });
        break;
    }
    return x;
  }, T = (x) => {
    const R = x.target.value;
    Y(R), R ? g(R) : S({});
  }, F = (x) => {
    c && c(x);
  }, O = (x) => {
    const R = parseInt(x.target.value, 10);
    _(R);
  }, L = () => {
    console.info("Export Clicked");
  }, M = 200, A = !!t.pageSize;
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ U("div", { children: [
    o,
    /* @__PURE__ */ U("div", { className: "grid-header", children: [
      /* @__PURE__ */ s("div", { className: "grid-header-filter", children: !!l && /* @__PURE__ */ s(
        Ge,
        {
          sx: { width: M },
          type: "text",
          value: j,
          onChange: T,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ s(Dt, { position: "end", children: /* @__PURE__ */ s(Yt, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ s(mr, { onClickAway: () => {
        m(!1);
      }, children: /* @__PURE__ */ U("div", { className: "grid-header-button", onClick: oe, children: [
        /* @__PURE__ */ s(we, { title: "Density", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, children: f() }) }),
        p && /* @__PURE__ */ s("div", { className: "density-dropdown-content", children: /* @__PURE__ */ U("ul", { children: [
          /* @__PURE__ */ U("li", { onClick: () => K("standard"), children: [
            /* @__PURE__ */ s(nt, { className: "density-icon" }),
            /* @__PURE__ */ s("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ U("li", { onClick: () => K("compact"), children: [
            /* @__PURE__ */ s(ot, { className: "density-icon" }),
            /* @__PURE__ */ s("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ U("li", { onClick: () => K("comfortable"), children: [
            /* @__PURE__ */ s(at, { className: "density-icon" }),
            /* @__PURE__ */ s("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ U("div", { className: "grid-header-button", children: [
        /* @__PURE__ */ s(we, { title: "Filter", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, onClick: () => k(!0), children: /* @__PURE__ */ s(Dr, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ s(
          Vn,
          {
            columns: n,
            setFilter: S,
            defaultFilter: N,
            isOpen: w,
            onClose: () => k(!1)
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { className: "grid-header-button", onClick: L, children: /* @__PURE__ */ s(we, { title: "Export", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ s(Er, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ s("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ s(we, { title: "New", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ s(Or, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ s(Te, {})
    ] }),
    /* @__PURE__ */ s("div", { className: "grid-table", children: /* @__PURE__ */ s(
      Tr,
      {
        columnDefs: H,
        EmptyChild: d,
        rowData: z,
        onRowClick: F,
        onRowStyle: le,
        onHeaderStyle: u,
        onSortColumn: v
      }
    ) }),
    /* @__PURE__ */ s("div", { className: "grid-header", children: /* @__PURE__ */ s("div", { className: "grid-filter", children: A && /* @__PURE__ */ s(
      Et,
      {
        component: "div",
        count: G || 0,
        page: P(),
        onPageChange: q,
        rowsPerPage: C.limit,
        rowsPerPageOptions: B || [],
        onRowsPerPageChange: O
      }
    ) }) })
  ] }) });
}), ra = ce(function(t, r) {
  const { columns: n, endPoint: o, storeFactory: a, layoutParams: c } = t, l = t.quickSearch || "", d = se(null), h = (m, b) => {
    console.log(b);
  };
  ge(() => {
    var m = it.subscribe(t.topic, h);
    return () => {
      it.unsubscribe(m);
    };
  }, [t.topic]), r && ve(r, () => ({
    setFilter: (m) => {
      d.current.setFilter(m);
    },
    refresh: () => {
      d.current.refresh();
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
  return /* @__PURE__ */ s(Te, { children: /* @__PURE__ */ s(Ue.Provider, { value: a, children: /* @__PURE__ */ s(Zt, { layout: p, context: c, customizer: t.customizer, ref: d }) }) });
}), Xn = ce(function(t, r) {
  const n = t.layout, [o, a] = Z(n.fields), c = n.pagination ? n.pagination : [15], l = Oe(Ue), d = Oe(Pt);
  var h = n.storeOptions || {}, p = {};
  br(p, h, d);
  const m = l.getGridStore(p, n.storeOptions.endPoint);
  ge(() => {
    h.hasLayout && m.queryLayout({}).then((w) => {
      a(w.columns);
    });
  }, []);
  const { onClick: b, onNewClick: E } = Fr(n.actionOptions, d);
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    zn,
    {
      columns: o,
      store: m,
      pageSize: c,
      onRowClick: b,
      onNewClick: E,
      customizer: t.customizer,
      quickSearch: n.quickSearch,
      ref: r
    }
  ) });
}), Zt = Xn, Bn = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Container || Nt;
  return /* @__PURE__ */ s(At, { fallback: /* @__PURE__ */ s("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ s(n, { ...t, children: ((a) => /* @__PURE__ */ s(
    Zt,
    {
      context: r,
      layout: a
    }
  ))(t.tableLayout) }) });
}, Un = (e) => {
  const { layout: t } = e;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ s(Lt, { ...e });
    case "view":
      return /* @__PURE__ */ s(kr, { ...e });
    case "grid":
      return /* @__PURE__ */ s(Bn, { ...e });
    case "chart":
      return /* @__PURE__ */ s(yr, { ...e });
    default:
      return /* @__PURE__ */ s(Ar, { ...e });
  }
};
function Gn(e, t) {
  var r = e || 1, n = t;
  return {
    w: r,
    h: n
  };
}
const er = (e) => {
  const { layout: t, context: r } = e, n = t.sections;
  function o(a, c, l) {
    const { w: d, h } = Gn(a.width, a.height);
    return /* @__PURE__ */ s(hr, { sx: { width: d, height: h }, children: /* @__PURE__ */ s(
      Un,
      {
        layout: a,
        context: c
      }
    ) }, (a.name || "tab") + l);
  }
  return /* @__PURE__ */ s("div", { style: { display: "flex", flexWrap: "wrap" }, children: n.map((a, c) => o(a, r, c)) });
}, St = ce(function(t, r) {
  const { layout: n } = t;
  ve(r, () => ({
    resetFilter() {
    }
  }), []);
  const o = {}, a = n.tabs;
  return /* @__PURE__ */ s("div", { children: a.map((c, l) => /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    er,
    {
      layout: c,
      context: o
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
}, Ct = ce(function(t, r) {
  var p;
  const n = t.data || {}, { layout: o } = t;
  var { getFieldManager: a, getFormData: c, isFormValid: l } = Mt(n, (p = t.callbacks) == null ? void 0 : p.onFormValidChange, Hn(t.mode));
  ve(r, () => ({
    getData() {
      return c();
    },
    isValid() {
      return l();
    }
  }), []);
  const d = { formData: n }, h = o.tabs;
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(Ne.Provider, { value: a, children: h.map((m, b) => /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    er,
    {
      layout: m,
      context: d
    }
  ) }, m.name + b)) }) });
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
}, na = ce(function(t, r) {
  const [n, o] = Z(t.layout), a = t.mode ? t.mode : n.type ? n.type : "grid", c = t.layoutParams || {}, l = Kn(a), d = se(0);
  return ge(() => {
    o(t.layout), d.current < 999999 ? d.current++ : d.current = 0;
  }, [t.layout]), /* @__PURE__ */ s(At, { fallback: /* @__PURE__ */ s("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ s(Ue.Provider, { value: t.storeFactory, children: /* @__PURE__ */ s(Pt.Provider, { value: c, children: /* @__PURE__ */ s(l, { ...t, ref: (h) => {
    r && (r.current = h);
  } }, d.current) }) }) });
}), oa = ce(function(t, r) {
  const { children: n, Child: o, childProps: a, pageSize: c } = t, l = r || se(null), {
    setQueryFilter: d,
    refreshData: h,
    setQuickSearch: p,
    gotoPage: m,
    setPageSize: b,
    getPageNo: E,
    data: w,
    pageSizeOptions: k,
    queryLimit: j
  } = Me(t), Y = t.listKeyProvider || (($, z) => z);
  ve(l, () => ({
    setFilter($) {
      d($);
    },
    refresh: () => {
      h();
    },
    gotoPage($) {
      m($);
    },
    nextPage() {
    },
    prevPage() {
    }
  }), []);
  const S = ($, z) => {
    m(z);
  }, g = ($) => {
    const z = $.target.value;
    p(z);
  }, v = ($) => {
    const z = parseInt($.target.value, 10);
    b(z);
  }, i = 200, _ = !!c, P = !!t.quickSearch;
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ U("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ U("div", { children: [
      /* @__PURE__ */ U("div", { className: "card-header", children: [
        /* @__PURE__ */ s("div", { className: "card-filter", children: P && /* @__PURE__ */ s(
          Ge,
          {
            sx: { width: i },
            type: "text",
            onChange: g,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ s(Dt, { position: "end", children: /* @__PURE__ */ s(Yt, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ s("div", { className: "card-pagination", children: _ && /* @__PURE__ */ s(
          Et,
          {
            component: "div",
            count: w,
            page: E(),
            onPageChange: S,
            rowsPerPage: j.limit,
            rowsPerPageOptions: k || [],
            onRowsPerPageChange: v
          }
        ) })
      ] }),
      /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
        gr,
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
  na as F,
  Zt as G,
  ea as M,
  ra as P,
  oa as S,
  er as T,
  zn as a,
  $r as b,
  Me as c,
  qr as d,
  Lt as e,
  qn as f,
  kt as g,
  Vn as h,
  Bn as i,
  Un as j,
  St as k,
  Ct as l,
  Ir as u
};
