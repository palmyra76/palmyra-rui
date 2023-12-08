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
import { FieldManagerContext as _e, StoreFactoryContext as Ue, LayoutParamsContext as Pt } from "../palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { jsx as s, jsxs as U, Fragment as Ne } from "react/jsx-runtime";
import pe, { useState as Z, useEffect as ge, forwardRef as ce, useContext as Oe, useRef as se, useImperativeHandle as ve, useMemo as wt } from "react";
import { FormControlLabel as et, Checkbox as tt, FormControl as Tt, FormHelperText as xt, Autocomplete as dr, TextField as Ge, Dialog as fr, ClickAwayListener as Dt, Button as Se, Paper as pr, InputAdornment as Ot, Tooltip as Te, TablePagination as Et, Box as mr } from "@mui/material";
import hr from "../palmyra/layout/card/CardLayout.js";
import gr from "../palmyra/layout/flexiLayout/SectionRendererChart.js";
import { copyMuiOptions as Rt, getFieldLabel as _t } from "../palmyra/mui/form/MuiUtil.js";
import Nt from "../palmyra/mui/form/FieldDecorator.js";
import { hasDot as Ee } from "../palmyra/utils/StringUtil.js";
import { getValueByKey as Re, setValueByKey as rt } from "../palmyra/form/FormUtil.js";
import { delay as yr, mergeDeep as vr } from "../palmyra/utils/index.js";
import br from "../palmyra/mui/form/MuiDateRangePicker.js";
import Mt from "../palmyra/layout/container/SectionContainer.js";
import Sr from "../palmyra/layout/container/FieldGroupContainer.js";
import { generateColumns as Cr } from "../palmyra/grid/base/ColumnConverter.js";
import Pr from "../palmyra/grid/base/EmptyChildTable.js";
import wr from "../palmyra/grid/base/TableX.js";
import { Close as Tr, Menu as nt, DensitySmall as ot, DensityLarge as at, FilterAlt as xr, FileDownloadOutlined as Dr, Add as Or } from "@mui/icons-material";
import { NoopCustomizer as Er } from "../palmyra/grid/Types.js";
import { convertToField as Rr } from "../palmyra/grid/base/GridFieldConverter.js";
import { d as Ft } from "./PalmyraFormManager.js";
import "../palmyra/form/PalmyraForm.js";
import { a as _r, g as Nr } from "./_commonjsHelpers.js";
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
import { getActionPublishers as Mr } from "../palmyra/utils/pubsub/Publishers.js";
import { ErrorBoundary as kt } from "../palmyra/layout/ErrorBoundary.js";
import Fr from "../palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import Ar from "../palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { useKeyValue as kr } from "../palmyra/utils/pubsub/PubSubHelper.js";
const Me = (e) => {
  const { store: t, quickSearch: r, endPointVars: n } = e, o = e.fetchAll != !1, [a, c] = Z(null), [l, d] = e.filterTopic ? kr(e.filterTopic, {}) : Z({}), [m, f] = Z({}), p = e.pageSize ? e.pageSize : 15;
  var b = p instanceof Array ? p : [p], A = p instanceof Array ? p[0] : p;
  const [x, k] = Z({ limit: A, offset: 0 }), [j, Y] = Z(null), S = () => Math.round(x.offset / x.limit), h = () => x.limit, v = (C) => {
    k({ ...x, offset: C * A });
  }, i = (C) => {
    const O = C > 10 || C == -1 ? C : 15;
    k({ ...x, limit: O });
  }, M = () => l ? Object.keys(l).length == 0 : !1;
  ge(() => {
    (o || !M()) && w();
  }, [x, l, m]);
  const w = () => {
    const C = { filter: l, sortOrder: m, total: !0, endPointVars: n, ...x };
    if (t)
      try {
        t.query(C).then((O) => {
          Y(O.result), c(O.total);
        }).catch((O) => {
          var q = O.response ? O.response : O;
          console.error("error while fetching", q), z();
        });
      } catch (O) {
        console.error(O), I();
      }
    else
      console.error("Store is not provided for the Grid"), I();
  }, I = () => {
    Y([]), c(0);
  }, z = () => {
    Y(void 0), c(null);
  };
  return {
    setQueryFilter: (C) => {
      typeof C == "function" || C && Object.keys(C).length > 0 ? d(C) : d({});
    },
    setQuickSearch: (C) => {
      const O = r;
      d(C ? (q) => (q[O] = C, { ...q }) : (q) => (delete q[O], { ...q }));
    },
    setSortColumns: (C) => {
      f(C);
    },
    refreshData: w,
    gotoPage: v,
    setPageSize: i,
    getPageNo: S,
    getLimit: h,
    filter: l,
    queryLimit: x,
    data: j,
    totalRecords: a,
    pageSizeOptions: b
  };
};
function st(e) {
  return e ? Array.isArray(e) ? e : typeof e == "string" ? e.split(",") : (console.log(e), [e]) : [];
}
const Zo = ce(function(t, r) {
  const n = Oe(_e), o = r || se(null), a = n(t, "checkbox", o), { mutateOptions: c, setMutateOptions: l } = a, [d, m] = Z(!1), f = st(a.data), p = a.error, b = a.eventListeners, x = { store: a.store, pageSize: -1 }, { data: k } = Me(x), j = k, Y = se(null), S = t.lookupOptions || {}, h = S.idAttribute || "id", v = S.titleAttribute || "name", i = Ee(h) ? (R) => Re(h, R) : (R) => R[h], M = Ee(v) ? (R) => Re(v, R) : (R) => R[v];
  ve(o, () => ({
    focus() {
      Y.current.focus();
    },
    isValid() {
      return !p.status;
    },
    assignAttribute(R) {
      Y.current.assignAttribute(R);
    },
    clear() {
      a.setData("");
    },
    setValue(R) {
      a.setData(R);
    },
    setVisible(R) {
      l({ visible: R });
    }
  }), []);
  var w = Rt(t, a.data, t.label);
  t.readonly && (w.inputProps = { readOnly: !0 });
  function I(R, C) {
    const O = st(a.data);
    var q = O.indexOf(R);
    C ? q < 0 && O.push(R) : q >= 0 && O.splice(q, 1), b.onValueChange(O.toString());
  }
  var z = {
    onBlur: b.onBlur,
    onFocus: b.onFocus,
    onChange: (R) => {
      I(R.target.value, R.target.checked);
    }
  };
  const G = (R) => {
    const C = R.toString();
    return f.includes(C);
  }, B = (R) => {
    const C = R.target.checked;
    m(C);
    var O = [];
    C && j.map((q) => {
      O.push(i(q));
    }), b.onValueChange(O.toString());
  };
  return /* @__PURE__ */ s("div", { className: t.className, children: c.visible && /* @__PURE__ */ U(
    Nt,
    {
      label: _t(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ s("div", { children: t.hideSelectAll ? /* @__PURE__ */ s(Ne, {}) : /* @__PURE__ */ s(
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
            error: p.status,
            ...w,
            children: [
              j ? j.map((R) => /* @__PURE__ */ s(
                et,
                {
                  value: i(R),
                  control: /* @__PURE__ */ s(
                    tt,
                    {
                      ...z,
                      checked: G(i(R)),
                      disabled: t.readonly
                    }
                  ),
                  label: M(R)
                },
                i(R)
              )) : /* @__PURE__ */ s("div", { children: "No options provided" }),
              /* @__PURE__ */ s(xt, { className: "form-error-text", children: p.message })
            ]
          }
        )
      ]
    }
  ) });
}), Lr = (e, t, r) => {
  const n = e.store || r.store, o = e.lookupOptions || {}, a = o.idAttribute || "id", c = o.titleAttribute || "name", l = o.searchAttribute || c, d = r.data, m = se(0), [f, p] = Z(null), [b, A] = Z([]), [x, k] = Z(""), j = {
    store: n,
    endPointVars: e.storeOptions.endPointVars,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: l
  }, Y = Me(j), {
    setQueryFilter: S,
    setQuickSearch: h,
    filter: v,
    totalRecords: i
  } = Y, M = Y.data, w = Ee(a) ? (C) => Re(a, C) : (C) => C == null ? void 0 : C[a], I = Ee(c) ? (C) => Re(c, C) : (C) => C[c];
  function z() {
    if (d) {
      var C = {};
      rt(a, C, d);
      const O = r.displayValue || d;
      return rt(c, C, O), C;
    } else
      return null;
  }
  ge(() => {
    if (!f) {
      var C = z();
      C && (A([C]), p(C));
    }
  }, [r.displayValue, r.data]), ge(() => {
    const C = M ? [...M] : [], O = f;
    C && O && !G(C, w(O)) && C.unshift(O), A(C), m.current < i && (m.current = i);
  }, [M, i]);
  function G(C, O) {
    return C.find((q) => {
      if (w(q) == O)
        return q;
    });
  }
  ge(() => {
    yr(B);
  }, [x]);
  function B() {
    x.length > 0 ? h("*" + x + "*") : h("");
  }
  return {
    getSelectedOption: z,
    filter: v,
    labelAccessor: I,
    idAccessor: w,
    getServerLookup: (C) => {
      var O = Rt(e, f, e.label);
      const q = r.eventListeners, H = r.error, K = e.variant || "standard", oe = e.autoFocus || !1, le = e.label, u = e.readonly || !1;
      t.readonly && (O.inputProps = { readOnly: !0 });
      var y = {
        onBlur: q.onBlur,
        onFocus: q.onFocus,
        onChange: (P, T) => {
          p(T);
        },
        onInputChange: (P, T) => (k(T), !0)
      };
      ge(() => {
        if (f) {
          const P = w(f);
          q.onValueChange(P), r.setDisplayValue(I(f));
        } else
          q.onValueChange(void 0), r.setDisplayValue(void 0);
      }, [f]);
      const _ = (P) => typeof P == "object" ? I(P) + "" : P;
      return /* @__PURE__ */ s(
        Nt,
        {
          label: _t(e),
          customContainerClass: e.customContainerClass,
          colspan: e.colspan,
          customFieldClass: e.customFieldClass,
          customLabelClass: e.customLabelClass,
          children: /* @__PURE__ */ U(Tt, { fullWidth: !0, error: H.status, children: [
            /* @__PURE__ */ s(
              dr,
              {
                includeInputInList: !0,
                autoHighlight: !0,
                readOnly: u,
                isOptionEqualToValue: (P, T) => w(P) == w(T),
                filterOptions: (P) => P,
                renderInput: (P) => /* @__PURE__ */ s(
                  Ge,
                  {
                    ...P,
                    inputRef: (T) => {
                      C.current = T;
                    },
                    variant: K,
                    label: le,
                    autoFocus: oe
                  }
                ),
                getOptionLabel: _,
                ...O,
                options: b,
                onOpen: (P) => {
                  B();
                },
                ...y
              }
            ),
            /* @__PURE__ */ s(xt, { className: "form-error-text", children: H.message })
          ] })
        }
      );
    },
    setQueryFilter: S,
    searchText: x,
    setSearchText: k,
    refreshOptions: B
  };
}, Ir = ce(function(t, r) {
  const n = Oe(_e), o = r || se(null), a = n(t, "serverlookup", o), c = a.error, { mutateOptions: l, setMutateOptions: d } = a, m = se(null), { getServerLookup: f, setQueryFilter: p } = Lr(t, l, a);
  return ve(o, () => ({
    focus() {
      m.current.focus();
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
      p(b);
    },
    resetFilter() {
    },
    addFilter(b, A) {
      p((x) => (x[b] = A, { ...x }));
    },
    setDefaultFilter(b) {
    }
  }), []), f(m);
}), $r = (e) => {
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
}, Yr = () => /* @__PURE__ */ s("div", { children: "To be Implemented" }), Lt = (e, t, r) => {
  const { type: n } = e, o = { fieldDef: e, title: r };
  switch (n) {
    case "string":
      return ae(o, sr);
    case "radio":
      return ae(o, or);
    case "select":
      return ae(o, ar);
    case "date":
      return ae(o, rr);
    case "datetime":
      return ae(o, nr);
    case "checkbox":
      return ae(o, cr);
    case "serverlookup":
      return ae(o, Ir);
    case "textarea":
      return ae(o, ir);
    case "switch":
      return ae(o, lr);
    case "password":
      return ae(o, ur);
    case "multiSelect":
      return Yr();
    case "dateRange":
      return ae(o, br);
    default:
      return $r(o);
  }
}, jr = ce(function(t, r) {
  var f;
  const { formLayout: n, context: o } = t, { formData: a } = o, c = n.Container;
  se({});
  const l = wt(() => (p) => Lt(p), [a.data]);
  var d = ((f = n.options) == null ? void 0 : f.columns) || 1, m = { columns: d };
  return c ? /* @__PURE__ */ s("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((p, b) => /* @__PURE__ */ s(
    c,
    {
      index: b,
      field: p,
      label: p.title,
      options: m,
      children: l(p)
    },
    p.attribute
  )) }) : /* @__PURE__ */ s("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((p, b) => /* @__PURE__ */ s(Ne, { children: l(p) })) });
}), It = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Renderer || jr, o = t.Container || Mt;
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
      children: /* @__PURE__ */ s(Sr, { columns: t.columns, children: a(t.formLayout) })
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
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ye.apply(this, arguments);
}, qr = globalThis && globalThis.__rest || function(e, t) {
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
    return pe.createElement(t.tag, ye({
      key: r
    }, t.attr), Yt(t.child));
  });
}
function Wr(e) {
  return function(t) {
    return pe.createElement(Vr, ye({
      attr: ye({}, e.attr)
    }, t), Yt(e.child));
  };
}
function Vr(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, a = e.title, c = qr(e, ["attr", "size", "title"]), l = o || r.size || "1em", d;
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
  }) : t($t);
}
function jt(e) {
  return Wr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(e);
}
var Fe = { exports: {} }, qt = {}, Be = { exports: {} }, xe = { exports: {} }, W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function zr() {
  if (lt)
    return W;
  lt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, A = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, j = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function h(i) {
    if (typeof i == "object" && i !== null) {
      var M = i.$$typeof;
      switch (M) {
        case t:
          switch (i = i.type, i) {
            case d:
            case m:
            case n:
            case a:
            case o:
            case p:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case l:
                case f:
                case x:
                case A:
                case c:
                  return i;
                default:
                  return M;
              }
          }
        case r:
          return M;
      }
    }
  }
  function v(i) {
    return h(i) === m;
  }
  return W.AsyncMode = d, W.ConcurrentMode = m, W.ContextConsumer = l, W.ContextProvider = c, W.Element = t, W.ForwardRef = f, W.Fragment = n, W.Lazy = x, W.Memo = A, W.Portal = r, W.Profiler = a, W.StrictMode = o, W.Suspense = p, W.isAsyncMode = function(i) {
    return v(i) || h(i) === d;
  }, W.isConcurrentMode = v, W.isContextConsumer = function(i) {
    return h(i) === l;
  }, W.isContextProvider = function(i) {
    return h(i) === c;
  }, W.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === t;
  }, W.isForwardRef = function(i) {
    return h(i) === f;
  }, W.isFragment = function(i) {
    return h(i) === n;
  }, W.isLazy = function(i) {
    return h(i) === x;
  }, W.isMemo = function(i) {
    return h(i) === A;
  }, W.isPortal = function(i) {
    return h(i) === r;
  }, W.isProfiler = function(i) {
    return h(i) === a;
  }, W.isStrictMode = function(i) {
    return h(i) === o;
  }, W.isSuspense = function(i) {
    return h(i) === p;
  }, W.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === n || i === m || i === a || i === o || i === p || i === b || typeof i == "object" && i !== null && (i.$$typeof === x || i.$$typeof === A || i.$$typeof === c || i.$$typeof === l || i.$$typeof === f || i.$$typeof === j || i.$$typeof === Y || i.$$typeof === S || i.$$typeof === k);
  }, W.typeOf = h, W;
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
function Xr() {
  return ut || (ut = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, A = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, j = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function h(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === m || g === a || g === o || g === p || g === b || typeof g == "object" && g !== null && (g.$$typeof === x || g.$$typeof === A || g.$$typeof === c || g.$$typeof === l || g.$$typeof === f || g.$$typeof === j || g.$$typeof === Y || g.$$typeof === S || g.$$typeof === k);
    }
    function v(g) {
      if (typeof g == "object" && g !== null) {
        var ue = g.$$typeof;
        switch (ue) {
          case t:
            var we = g.type;
            switch (we) {
              case d:
              case m:
              case n:
              case a:
              case o:
              case p:
                return we;
              default:
                var Ze = we && we.$$typeof;
                switch (Ze) {
                  case l:
                  case f:
                  case x:
                  case A:
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
    var i = d, M = m, w = l, I = c, z = t, G = f, B = n, R = x, C = A, O = r, q = a, H = o, K = p, oe = !1;
    function le(g) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), u(g) || v(g) === d;
    }
    function u(g) {
      return v(g) === m;
    }
    function y(g) {
      return v(g) === l;
    }
    function _(g) {
      return v(g) === c;
    }
    function P(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function T(g) {
      return v(g) === f;
    }
    function L(g) {
      return v(g) === n;
    }
    function N(g) {
      return v(g) === x;
    }
    function F(g) {
      return v(g) === A;
    }
    function $(g) {
      return v(g) === r;
    }
    function D(g) {
      return v(g) === a;
    }
    function E(g) {
      return v(g) === o;
    }
    function ee(g) {
      return v(g) === p;
    }
    V.AsyncMode = i, V.ConcurrentMode = M, V.ContextConsumer = w, V.ContextProvider = I, V.Element = z, V.ForwardRef = G, V.Fragment = B, V.Lazy = R, V.Memo = C, V.Portal = O, V.Profiler = q, V.StrictMode = H, V.Suspense = K, V.isAsyncMode = le, V.isConcurrentMode = u, V.isContextConsumer = y, V.isContextProvider = _, V.isElement = P, V.isForwardRef = T, V.isFragment = L, V.isLazy = N, V.isMemo = F, V.isPortal = $, V.isProfiler = D, V.isStrictMode = E, V.isSuspense = ee, V.isValidElementType = h, V.typeOf = v;
  }()), V;
}
var dt;
function Wt() {
  return dt || (dt = 1, process.env.NODE_ENV === "production" ? xe.exports = zr() : xe.exports = Xr()), xe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ie, ft;
function Br() {
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
      var d = Object.getOwnPropertyNames(c).map(function(f) {
        return c[f];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        m[f] = f;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ie = o() ? Object.assign : function(a, c) {
    for (var l, d = n(a), m, f = 1; f < arguments.length; f++) {
      l = Object(arguments[f]);
      for (var p in l)
        t.call(l, p) && (d[p] = l[p]);
      if (e) {
        m = e(l);
        for (var b = 0; b < m.length; b++)
          r.call(l, m[b]) && (d[m[b]] = l[m[b]]);
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
function Vt() {
  return mt || (mt = 1, Ye = Function.call.bind(Object.prototype.hasOwnProperty)), Ye;
}
var je, ht;
function Ur() {
  if (ht)
    return je;
  ht = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = He(), r = {}, n = Vt();
    e = function(a) {
      var c = "Warning: " + a;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function o(a, c, l, d, m) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (n(a, f)) {
          var p;
          try {
            if (typeof a[f] != "function") {
              var b = Error(
                (d || "React class") + ": " + l + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            p = a[f](c, f, d, l, null, t);
          } catch (x) {
            p = x;
          }
          if (p && !(p instanceof Error) && e(
            (d || "React class") + ": type specification of " + l + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var A = m ? m() : "";
            e(
              "Failed " + l + " type: " + p.message + (A ?? "")
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
function Gr() {
  if (gt)
    return qe;
  gt = 1;
  var e = Wt(), t = Br(), r = He(), n = Vt(), o = Ur(), a = function() {
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
    var m = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(u) {
      var y = u && (m && u[m] || u[f]);
      if (typeof y == "function")
        return y;
    }
    var b = "<<anonymous>>", A = {
      array: Y("array"),
      bigint: Y("bigint"),
      bool: Y("boolean"),
      func: Y("function"),
      number: Y("number"),
      object: Y("object"),
      string: Y("string"),
      symbol: Y("symbol"),
      any: S(),
      arrayOf: h,
      element: v(),
      elementType: i(),
      instanceOf: M,
      node: G(),
      objectOf: I,
      oneOf: w,
      oneOfType: z,
      shape: R,
      exact: C
    };
    function x(u, y) {
      return u === y ? u !== 0 || 1 / u === 1 / y : u !== u && y !== y;
    }
    function k(u, y) {
      this.message = u, this.data = y && typeof y == "object" ? y : {}, this.stack = "";
    }
    k.prototype = Error.prototype;
    function j(u) {
      if (process.env.NODE_ENV !== "production")
        var y = {}, _ = 0;
      function P(L, N, F, $, D, E, ee) {
        if ($ = $ || b, E = E || F, ee !== r) {
          if (d) {
            var g = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw g.name = "Invariant Violation", g;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = $ + ":" + F;
            !y[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            _ < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + E + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), y[ue] = !0, _++);
          }
        }
        return N[F] == null ? L ? N[F] === null ? new k("The " + D + " `" + E + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new k("The " + D + " `" + E + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : u(N, F, $, D, E);
      }
      var T = P.bind(null, !1);
      return T.isRequired = P.bind(null, !0), T;
    }
    function Y(u) {
      function y(_, P, T, L, N, F) {
        var $ = _[P], D = H($);
        if (D !== u) {
          var E = K($);
          return new k(
            "Invalid " + L + " `" + N + "` of type " + ("`" + E + "` supplied to `" + T + "`, expected ") + ("`" + u + "`."),
            { expectedType: u }
          );
        }
        return null;
      }
      return j(y);
    }
    function S() {
      return j(c);
    }
    function h(u) {
      function y(_, P, T, L, N) {
        if (typeof u != "function")
          return new k("Property `" + N + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var F = _[P];
        if (!Array.isArray(F)) {
          var $ = H(F);
          return new k("Invalid " + L + " `" + N + "` of type " + ("`" + $ + "` supplied to `" + T + "`, expected an array."));
        }
        for (var D = 0; D < F.length; D++) {
          var E = u(F, D, T, L, N + "[" + D + "]", r);
          if (E instanceof Error)
            return E;
        }
        return null;
      }
      return j(y);
    }
    function v() {
      function u(y, _, P, T, L) {
        var N = y[_];
        if (!l(N)) {
          var F = H(N);
          return new k("Invalid " + T + " `" + L + "` of type " + ("`" + F + "` supplied to `" + P + "`, expected a single ReactElement."));
        }
        return null;
      }
      return j(u);
    }
    function i() {
      function u(y, _, P, T, L) {
        var N = y[_];
        if (!e.isValidElementType(N)) {
          var F = H(N);
          return new k("Invalid " + T + " `" + L + "` of type " + ("`" + F + "` supplied to `" + P + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return j(u);
    }
    function M(u) {
      function y(_, P, T, L, N) {
        if (!(_[P] instanceof u)) {
          var F = u.name || b, $ = le(_[P]);
          return new k("Invalid " + L + " `" + N + "` of type " + ("`" + $ + "` supplied to `" + T + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return j(y);
    }
    function w(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), c;
      function y(_, P, T, L, N) {
        for (var F = _[P], $ = 0; $ < u.length; $++)
          if (x(F, u[$]))
            return null;
        var D = JSON.stringify(u, function(ee, g) {
          var ue = K(g);
          return ue === "symbol" ? String(g) : g;
        });
        return new k("Invalid " + L + " `" + N + "` of value `" + String(F) + "` " + ("supplied to `" + T + "`, expected one of " + D + "."));
      }
      return j(y);
    }
    function I(u) {
      function y(_, P, T, L, N) {
        if (typeof u != "function")
          return new k("Property `" + N + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var F = _[P], $ = H(F);
        if ($ !== "object")
          return new k("Invalid " + L + " `" + N + "` of type " + ("`" + $ + "` supplied to `" + T + "`, expected an object."));
        for (var D in F)
          if (n(F, D)) {
            var E = u(F, D, T, L, N + "." + D, r);
            if (E instanceof Error)
              return E;
          }
        return null;
      }
      return j(y);
    }
    function z(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var y = 0; y < u.length; y++) {
        var _ = u[y];
        if (typeof _ != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(_) + " at index " + y + "."
          ), c;
      }
      function P(T, L, N, F, $) {
        for (var D = [], E = 0; E < u.length; E++) {
          var ee = u[E], g = ee(T, L, N, F, $, r);
          if (g == null)
            return null;
          g.data && n(g.data, "expectedType") && D.push(g.data.expectedType);
        }
        var ue = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new k("Invalid " + F + " `" + $ + "` supplied to " + ("`" + N + "`" + ue + "."));
      }
      return j(P);
    }
    function G() {
      function u(y, _, P, T, L) {
        return O(y[_]) ? null : new k("Invalid " + T + " `" + L + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
      }
      return j(u);
    }
    function B(u, y, _, P, T) {
      return new k(
        (u || "React class") + ": " + y + " type `" + _ + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function R(u) {
      function y(_, P, T, L, N) {
        var F = _[P], $ = H(F);
        if ($ !== "object")
          return new k("Invalid " + L + " `" + N + "` of type `" + $ + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var D in u) {
          var E = u[D];
          if (typeof E != "function")
            return B(T, L, N, D, K(E));
          var ee = E(F, D, T, L, N + "." + D, r);
          if (ee)
            return ee;
        }
        return null;
      }
      return j(y);
    }
    function C(u) {
      function y(_, P, T, L, N) {
        var F = _[P], $ = H(F);
        if ($ !== "object")
          return new k("Invalid " + L + " `" + N + "` of type `" + $ + "` " + ("supplied to `" + T + "`, expected `object`."));
        var D = t({}, _[P], u);
        for (var E in D) {
          var ee = u[E];
          if (n(u, E) && typeof ee != "function")
            return B(T, L, N, E, K(ee));
          if (!ee)
            return new k(
              "Invalid " + L + " `" + N + "` key `" + E + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(_[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(u), null, "  ")
            );
          var g = ee(F, E, T, L, N + "." + E, r);
          if (g)
            return g;
        }
        return null;
      }
      return j(y);
    }
    function O(u) {
      switch (typeof u) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !u;
        case "object":
          if (Array.isArray(u))
            return u.every(O);
          if (u === null || l(u))
            return !0;
          var y = p(u);
          if (y) {
            var _ = y.call(u), P;
            if (y !== u.entries) {
              for (; !(P = _.next()).done; )
                if (!O(P.value))
                  return !1;
            } else
              for (; !(P = _.next()).done; ) {
                var T = P.value;
                if (T && !O(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function q(u, y) {
      return u === "symbol" ? !0 : y ? y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && y instanceof Symbol : !1;
    }
    function H(u) {
      var y = typeof u;
      return Array.isArray(u) ? "array" : u instanceof RegExp ? "object" : q(y, u) ? "symbol" : y;
    }
    function K(u) {
      if (typeof u > "u" || u === null)
        return "" + u;
      var y = H(u);
      if (y === "object") {
        if (u instanceof Date)
          return "date";
        if (u instanceof RegExp)
          return "regexp";
      }
      return y;
    }
    function oe(u) {
      var y = K(u);
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
    function le(u) {
      return !u.constructor || !u.constructor.name ? b : u.constructor.name;
    }
    return A.checkPropTypes = o, A.resetWarningCache = o.resetWarningCache, A.PropTypes = A, A;
  }, qe;
}
var We, yt;
function Hr() {
  if (yt)
    return We;
  yt = 1;
  var e = He();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, We = function() {
    function n(c, l, d, m, f, p) {
      if (p !== e) {
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
  var Kr = Wt(), Qr = !0;
  Be.exports = Gr()(Kr.isElement, Qr);
} else
  Be.exports = Hr()();
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
const Jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: vt,
  default: vt
}, Symbol.toStringTag, { value: "Module" })), Zr = /* @__PURE__ */ _r(Jr);
var X = {}, de = {};
Object.defineProperty(de, "__esModule", {
  value: !0
});
de.dontSetMe = on;
de.findInArray = en;
de.int = nn;
de.isFunction = tn;
de.isNum = rn;
function en(e, t) {
  for (let r = 0, n = e.length; r < n; r++)
    if (t.apply(t, [e[r], r, e]))
      return e[r];
}
function tn(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function rn(e) {
  return typeof e == "number" && !isNaN(e);
}
function nn(e) {
  return parseInt(e, 10);
}
function on(e, t, r) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var be = {};
Object.defineProperty(be, "__esModule", {
  value: !0
});
be.browserPrefixToKey = Ut;
be.browserPrefixToStyle = an;
be.default = void 0;
be.getPrefix = Bt;
const Ve = ["Moz", "Webkit", "O", "ms"];
function Bt() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const r = (e = window.document) === null || e === void 0 || (e = e.documentElement) === null || e === void 0 ? void 0 : e.style;
  if (!r || t in r)
    return "";
  for (let n = 0; n < Ve.length; n++)
    if (Ut(t, Ve[n]) in r)
      return Ve[n];
  return "";
}
function Ut(e, t) {
  return t ? "".concat(t).concat(sn(e)) : e;
}
function an(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function sn(e) {
  let t = "", r = !0;
  for (let n = 0; n < e.length; n++)
    r ? (t += e[n].toUpperCase(), r = !1) : e[n] === "-" ? r = !0 : t += e[n];
  return t;
}
be.default = Bt();
Object.defineProperty(X, "__esModule", {
  value: !0
});
X.addClassName = Kt;
X.addEvent = un;
X.addUserSelectStyles = Cn;
X.createCSSTransform = yn;
X.createSVGTransform = vn;
X.getTouch = bn;
X.getTouchIdentifier = Sn;
X.getTranslation = Ke;
X.innerHeight = mn;
X.innerWidth = hn;
X.matchesSelector = Ht;
X.matchesSelectorAndParentsTo = ln;
X.offsetXYFromParent = gn;
X.outerHeight = fn;
X.outerWidth = pn;
X.removeClassName = Qt;
X.removeEvent = dn;
X.removeUserSelectStyles = Pn;
var ne = de, bt = cn(be);
function Gt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Gt = function(n) {
    return n ? r : t;
  })(e);
}
function cn(e, t) {
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
let De = "";
function Ht(e, t) {
  return De || (De = (0, ne.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, ne.isFunction)(e[r]);
  })), (0, ne.isFunction)(e[De]) ? e[De](t) : !1;
}
function ln(e, t, r) {
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
function un(e, t, r, n) {
  if (!e)
    return;
  const o = {
    capture: !0,
    ...n
  };
  e.addEventListener ? e.addEventListener(t, r, o) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r;
}
function dn(e, t, r, n) {
  if (!e)
    return;
  const o = {
    capture: !0,
    ...n
  };
  e.removeEventListener ? e.removeEventListener(t, r, o) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
}
function fn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ne.int)(r.borderTopWidth), t += (0, ne.int)(r.borderBottomWidth), t;
}
function pn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, ne.int)(r.borderLeftWidth), t += (0, ne.int)(r.borderRightWidth), t;
}
function mn(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ne.int)(r.paddingTop), t -= (0, ne.int)(r.paddingBottom), t;
}
function hn(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, ne.int)(r.paddingLeft), t -= (0, ne.int)(r.paddingRight), t;
}
function gn(e, t, r) {
  const o = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), a = (e.clientX + t.scrollLeft - o.left) / r, c = (e.clientY + t.scrollTop - o.top) / r;
  return {
    x: a,
    y: c
  };
}
function yn(e, t) {
  const r = Ke(e, t, "px");
  return {
    [(0, bt.browserPrefixToKey)("transform", bt.default)]: r
  };
}
function vn(e, t) {
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
function bn(e, t) {
  return e.targetTouches && (0, ne.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, ne.findInArray)(e.changedTouches, (r) => t === r.identifier);
}
function Sn(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Cn(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && Kt(e.body, "react-draggable-transparent-selection");
}
function Pn(e) {
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
fe.canDragX = xn;
fe.canDragY = Dn;
fe.createCoreData = En;
fe.createDraggableData = Rn;
fe.getBoundPosition = wn;
fe.getControlPosition = On;
fe.snapToGrid = Tn;
var re = de, Ce = X;
function wn(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : _n(n);
  const o = Qe(e);
  if (typeof n == "string") {
    const {
      ownerDocument: a
    } = o, c = a.defaultView;
    let l;
    if (n === "parent" ? l = o.parentNode : l = a.querySelector(n), !(l instanceof c.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const d = l, m = c.getComputedStyle(o), f = c.getComputedStyle(d);
    n = {
      left: -o.offsetLeft + (0, re.int)(f.paddingLeft) + (0, re.int)(m.marginLeft),
      top: -o.offsetTop + (0, re.int)(f.paddingTop) + (0, re.int)(m.marginTop),
      right: (0, Ce.innerWidth)(d) - (0, Ce.outerWidth)(o) - o.offsetLeft + (0, re.int)(f.paddingRight) - (0, re.int)(m.marginRight),
      bottom: (0, Ce.innerHeight)(d) - (0, Ce.outerHeight)(o) - o.offsetTop + (0, re.int)(f.paddingBottom) - (0, re.int)(m.marginBottom)
    };
  }
  return (0, re.isNum)(n.right) && (t = Math.min(t, n.right)), (0, re.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, re.isNum)(n.left) && (t = Math.max(t, n.left)), (0, re.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function Tn(e, t, r) {
  const n = Math.round(t / e[0]) * e[0], o = Math.round(r / e[1]) * e[1];
  return [n, o];
}
function xn(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function Dn(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function On(e, t, r) {
  const n = typeof t == "number" ? (0, Ce.getTouch)(e, t) : null;
  if (typeof t == "number" && !n)
    return null;
  const o = Qe(r), a = r.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, Ce.offsetXYFromParent)(n || e, a, r.props.scale);
}
function En(e, t, r) {
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
function Rn(e, t) {
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
function _n(e) {
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
ke.default = Nn;
function Nn() {
}
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = void 0;
var ze = Fn(pe), te = Je(zt), Mn = Je(At), Q = X, me = fe, Xe = de, Pe = Je(ke);
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
function Fn(e, t) {
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
function J(e, t, r) {
  return t = An(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function An(e) {
  var t = kn(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function kn(e, t) {
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
        let d = n - this.lastX || 0, m = o - this.lastY || 0;
        [d, m] = (0, me.snapToGrid)(this.props.grid, d, m), n = this.lastX + d, o = this.lastY + m;
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
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (r = this.props) === null || r === void 0 || (r = r.nodeRef) === null || r === void 0 ? void 0 : r.current : Mn.default.findDOMNode(this);
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
  var t = b(pe), r = f(zt), n = f(At), o = f(Zr), a = X, c = fe, l = de, d = f(Ae), m = f(ke);
  function f(S) {
    return S && S.__esModule ? S : { default: S };
  }
  function p(S) {
    if (typeof WeakMap != "function")
      return null;
    var h = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap();
    return (p = function(i) {
      return i ? v : h;
    })(S);
  }
  function b(S, h) {
    if (!h && S && S.__esModule)
      return S;
    if (S === null || typeof S != "object" && typeof S != "function")
      return { default: S };
    var v = p(h);
    if (v && v.has(S))
      return v.get(S);
    var i = {}, M = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var w in S)
      if (w !== "default" && Object.prototype.hasOwnProperty.call(S, w)) {
        var I = M ? Object.getOwnPropertyDescriptor(S, w) : null;
        I && (I.get || I.set) ? Object.defineProperty(i, w, I) : i[w] = S[w];
      }
    return i.default = S, v && v.set(S, i), i;
  }
  function A() {
    return A = Object.assign ? Object.assign.bind() : function(S) {
      for (var h = 1; h < arguments.length; h++) {
        var v = arguments[h];
        for (var i in v)
          Object.prototype.hasOwnProperty.call(v, i) && (S[i] = v[i]);
      }
      return S;
    }, A.apply(this, arguments);
  }
  function x(S, h, v) {
    return h = k(h), h in S ? Object.defineProperty(S, h, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : S[h] = v, S;
  }
  function k(S) {
    var h = j(S, "string");
    return typeof h == "symbol" ? h : String(h);
  }
  function j(S, h) {
    if (typeof S != "object" || S === null)
      return S;
    var v = S[Symbol.toPrimitive];
    if (v !== void 0) {
      var i = v.call(S, h || "default");
      if (typeof i != "object")
        return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(S);
  }
  class Y extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(h, v) {
      let {
        position: i
      } = h, {
        prevPropsPosition: M
      } = v;
      return i && (!M || i.x !== M.x || i.y !== M.y) ? ((0, m.default)("Draggable: getDerivedStateFromProps %j", {
        position: i,
        prevPropsPosition: M
      }), {
        x: i.x,
        y: i.y,
        prevPropsPosition: {
          ...i
        }
      }) : null;
    }
    constructor(h) {
      super(h), x(this, "onDragStart", (v, i) => {
        if ((0, m.default)("Draggable: onDragStart: %j", i), this.props.onStart(v, (0, c.createDraggableData)(this, i)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), x(this, "onDrag", (v, i) => {
        if (!this.state.dragging)
          return !1;
        (0, m.default)("Draggable: onDrag: %j", i);
        const M = (0, c.createDraggableData)(this, i), w = {
          x: M.x,
          y: M.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: z,
            y: G
          } = w;
          w.x += this.state.slackX, w.y += this.state.slackY;
          const [B, R] = (0, c.getBoundPosition)(this, w.x, w.y);
          w.x = B, w.y = R, w.slackX = this.state.slackX + (z - w.x), w.slackY = this.state.slackY + (G - w.y), M.x = w.x, M.y = w.y, M.deltaX = w.x - this.state.x, M.deltaY = w.y - this.state.y;
        }
        if (this.props.onDrag(v, M) === !1)
          return !1;
        this.setState(w);
      }), x(this, "onDragStop", (v, i) => {
        if (!this.state.dragging || this.props.onStop(v, (0, c.createDraggableData)(this, i)) === !1)
          return !1;
        (0, m.default)("Draggable: onDragStop: %j", i);
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
        x: h.position ? h.position.x : h.defaultPosition.x,
        y: h.position ? h.position.y : h.defaultPosition.y,
        prevPropsPosition: {
          ...h.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, h.position && !(h.onDrag || h.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
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
      var h, v;
      return (h = (v = this.props) === null || v === void 0 || (v = v.nodeRef) === null || v === void 0 ? void 0 : v.current) !== null && h !== void 0 ? h : n.default.findDOMNode(this);
    }
    render() {
      const {
        axis: h,
        bounds: v,
        children: i,
        defaultPosition: M,
        defaultClassName: w,
        defaultClassNameDragging: I,
        defaultClassNameDragged: z,
        position: G,
        positionOffset: B,
        scale: R,
        ...C
      } = this.props;
      let O = {}, q = null;
      const K = !!!G || this.state.dragging, oe = G || M, le = {
        // Set left if horizontal drag is enabled
        x: (0, c.canDragX)(this) && K ? this.state.x : oe.x,
        // Set top if vertical drag is enabled
        y: (0, c.canDragY)(this) && K ? this.state.y : oe.y
      };
      this.state.isElementSVG ? q = (0, a.createSVGTransform)(le, B) : O = (0, a.createCSSTransform)(le, B);
      const u = (0, o.default)(i.props.className || "", w, {
        [I]: this.state.dragging,
        [z]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(d.default, A({}, C, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(i), {
        className: u,
        style: {
          ...i.props.style,
          ...O
        },
        transform: q
      }));
    }
  }
  e.default = Y, x(Y, "displayName", "Draggable"), x(Y, "propTypes", {
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
  }), x(Y, "defaultProps", {
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
  DraggableCore: Ln
} = qt;
Fe.exports = Zt;
Fe.exports.default = Zt;
Fe.exports.DraggableCore = Ln;
var In = Fe.exports;
const $n = /* @__PURE__ */ Nr(In);
const Yn = (e) => {
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
}, jn = ce(function(t, r) {
  const { formLayout: n, context: o } = t, { formData: a } = o, c = se({}), l = Yn(t), d = "palmyra-form-field-data", m = wt(() => (f) => Lt(f, c, f.label), [a.data]);
  return /* @__PURE__ */ s("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: n.fields.map((f, p) => /* @__PURE__ */ s("div", { className: l, children: /* @__PURE__ */ s("div", { className: d, children: m(f) }) }, f.attribute)) });
});
function qn(e) {
  return /* @__PURE__ */ s(
    $n,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ s(pr, { ...e })
    }
  );
}
const Wn = ({ columns: e, isOpen: t, onClose: r, setFilter: n, defaultFilter: o = {} }) => {
  var { getFieldManager: a, getFormData: c } = Ft(o, () => {
  }, "edit");
  const l = () => {
    n({});
  }, d = () => {
    var b = c();
    n && n(b);
  }, m = () => {
    r();
  }, f = (b) => {
    b.keyCode === 27 && m();
  }, p = Rr(e);
  return /* @__PURE__ */ s("div", { className: "grid-filter-container", children: /* @__PURE__ */ s(
    fr,
    {
      open: t,
      onClose: m,
      PaperComponent: qn,
      onKeyDown: f,
      children: /* @__PURE__ */ s(Dt, { onClickAway: r, children: /* @__PURE__ */ U("div", { children: [
        /* @__PURE__ */ U("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ s("div", { className: "grid-header-text-container", children: /* @__PURE__ */ s("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ s("div", { className: "grid-header-icon-container", onClick: m, children: /* @__PURE__ */ s(Tr, { className: "filter-cancel-icon" }) })
        ] }),
        /* @__PURE__ */ s("span", { className: "filter-header-border" }),
        /* @__PURE__ */ s("div", { className: "grid-filter-content", children: /* @__PURE__ */ s(_e.Provider, { value: a, children: /* @__PURE__ */ s(
          It,
          {
            context: { formData: {} },
            layout: {
              type: "form",
              formLayout: {
                fields: p,
                options: {
                  columns: 2
                }
              },
              Renderer: jn
            }
          }
        ) }) }),
        /* @__PURE__ */ U("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ s(Se, { className: "filter-reset-btn", disableRipple: !0, onClick: l, children: "Reset" }),
          /* @__PURE__ */ s(Se, { className: "filter-button", disableRipple: !0, onClick: d, children: "Filter" })
        ] })
      ] }) })
    }
  ) });
}, Vn = ce(function(t, r) {
  const { columns: n, children: o, EmptyChild: a, onRowClick: c, quickSearch: l } = t, d = a || Pr, m = t.customizer || Er, [f, p] = Z(!1), [b, A] = Z("standard"), [x, k] = Z(!1), [j, Y] = Z(""), {
    setQueryFilter: S,
    setQuickSearch: h,
    setSortColumns: v,
    gotoPage: i,
    setPageSize: M,
    getPageNo: w,
    refreshData: I,
    data: z,
    totalRecords: G,
    pageSizeOptions: B,
    filter: R,
    queryLimit: C
  } = Me(t), O = r || se(null);
  ve(O, () => ({
    setFilter: (D) => {
      S(D);
    },
    refresh: () => {
      I();
    }
  }), []);
  const q = (D, E) => {
    i(E);
  }, H = Cr(n, m), K = (D) => {
    A(D);
  }, oe = () => {
    p(!f);
  }, le = () => b === "compact" ? { padding: "3px" } : b === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, u = () => b === "compact" ? { padding: "3px" } : b === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, y = () => {
    var D;
    switch (b) {
      case "compact":
        D = /* @__PURE__ */ s(ot, { className: "density-icon" });
        break;
      case "comfortable":
        D = /* @__PURE__ */ s(at, { className: "density-icon" });
        break;
      default:
        D = /* @__PURE__ */ s(nt, { className: "grid-button-icon" });
        break;
    }
    return D;
  }, _ = (D) => {
    const E = D.target.value;
    Y(E), E ? h(E) : S({});
  }, P = (D) => {
    c && c(D);
  }, T = (D) => {
    const E = parseInt(D.target.value, 10);
    M(E);
  }, L = () => {
    console.info("Export Clicked");
  }, N = 200, F = !!t.pageSize;
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ U("div", { children: [
    o,
    /* @__PURE__ */ U("div", { className: "grid-header", children: [
      /* @__PURE__ */ s("div", { className: "grid-header-filter", children: !!l && /* @__PURE__ */ s(
        Ge,
        {
          sx: { width: N },
          type: "text",
          value: j,
          onChange: _,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ s(Ot, { position: "end", children: /* @__PURE__ */ s(jt, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ s(Dt, { onClickAway: () => {
        p(!1);
      }, children: /* @__PURE__ */ U("div", { className: "grid-header-button", onClick: oe, children: [
        /* @__PURE__ */ s(Te, { title: "Density", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, children: y() }) }),
        f && /* @__PURE__ */ s("div", { className: "density-dropdown-content", children: /* @__PURE__ */ U("ul", { children: [
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
        /* @__PURE__ */ s(Te, { title: "Filter", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, onClick: () => k(!0), children: /* @__PURE__ */ s(xr, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ s(
          Wn,
          {
            columns: n,
            setFilter: S,
            defaultFilter: R,
            isOpen: x,
            onClose: () => k(!1)
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { className: "grid-header-button", onClick: L, children: /* @__PURE__ */ s(Te, { title: "Export", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ s(Dr, { className: "grid-button-icon" }) }) }) }),
      t.onNewClick ? /* @__PURE__ */ s("div", { className: "grid-header-button", onClick: () => {
        t.onNewClick();
      }, children: /* @__PURE__ */ s(Te, { title: "New", placement: "top", children: /* @__PURE__ */ s(Se, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ s(Or, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ s(Ne, {})
    ] }),
    /* @__PURE__ */ s("div", { className: "grid-table", children: /* @__PURE__ */ s(
      wr,
      {
        columnDefs: H,
        EmptyChild: d,
        rowData: z,
        onRowClick: P,
        onRowStyle: le,
        onHeaderStyle: u,
        onSortColumn: v
      }
    ) }),
    /* @__PURE__ */ s("div", { className: "grid-header", children: /* @__PURE__ */ s("div", { className: "grid-filter", children: F && /* @__PURE__ */ s(
      Et,
      {
        component: "div",
        count: G || 0,
        page: w(),
        onPageChange: q,
        rowsPerPage: C.limit,
        rowsPerPageOptions: B || [],
        onRowsPerPageChange: T
      }
    ) }) })
  ] }) });
}), ta = ce(function(t, r) {
  const { columns: n, endPoint: o, storeFactory: a, layoutParams: c } = t, l = t.quickSearch || "", d = se(null), m = (p, b) => {
    console.log(b);
  };
  ge(() => {
    var p = it.subscribe(t.topic, m);
    return () => {
      it.unsubscribe(p);
    };
  }, [t.topic]), r && ve(r, () => ({
    setFilter: (p) => {
      d.current.setFilter(p);
    },
    refresh: () => {
      d.current.refresh();
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
  return /* @__PURE__ */ s(Ne, { children: /* @__PURE__ */ s(Ue.Provider, { value: a, children: /* @__PURE__ */ s(er, { layout: f, context: c, customizer: t.customizer, ref: d }) }) });
}), zn = ce(function(t, r) {
  const n = t.layout, [o, a] = Z(n.fields), c = n.pagination ? n.pagination : [15], l = Oe(Ue), d = Oe(Pt);
  var m = n.storeOptions || {}, f = {};
  vr(f, m, d);
  const p = l.getGridStore(f, n.storeOptions.endPoint);
  ge(() => {
    m.hasLayout && p.queryLayout({}).then((x) => {
      a(x.columns);
    });
  }, []);
  const { onClick: b, onNewClick: A } = Mr(n.actionOptions, d);
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    Vn,
    {
      columns: o,
      store: p,
      pageSize: c,
      onRowClick: b,
      onNewClick: A,
      customizer: t.customizer,
      quickSearch: n.quickSearch,
      ref: r
    }
  ) });
}), er = zn, Xn = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Container || Mt;
  return /* @__PURE__ */ s(kt, { fallback: /* @__PURE__ */ s("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ s(n, { ...t, children: ((a) => /* @__PURE__ */ s(
    er,
    {
      context: r,
      layout: a
    }
  ))(t.tableLayout) }) });
}, Bn = (e) => {
  const { layout: t } = e;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ s(It, { ...e });
    case "view":
      return /* @__PURE__ */ s(Ar, { ...e });
    case "grid":
      return /* @__PURE__ */ s(Xn, { ...e });
    case "chart":
      return /* @__PURE__ */ s(gr, { ...e });
    default:
      return /* @__PURE__ */ s(Fr, { ...e });
  }
};
function Un(e, t) {
  var r = e || 1, n = t;
  return {
    w: r,
    h: n
  };
}
const tr = (e) => {
  const { layout: t, context: r } = e, n = t.sections;
  function o(a, c, l) {
    const { w: d, h: m } = Un(a.width, a.height);
    return /* @__PURE__ */ s(mr, { sx: { width: d, height: m }, children: /* @__PURE__ */ s(
      Bn,
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
    tr,
    {
      layout: c,
      context: o
    }
  ) }, c.name + l)) });
}), Gn = (e) => {
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
  var f;
  const n = t.data || {}, { layout: o } = t;
  var { getFieldManager: a, getFormData: c, isFormValid: l } = Ft(n, (f = t.callbacks) == null ? void 0 : f.onFormValidChange, Gn(t.mode));
  ve(r, () => ({
    getData() {
      return c();
    },
    isValid() {
      return l();
    }
  }), []);
  const d = { formData: n }, m = o.tabs;
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(_e.Provider, { value: a, children: m.map((p, b) => /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    tr,
    {
      layout: p,
      context: d
    }
  ) }, p.name + b)) }) });
}), Hn = (e) => {
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
}, ra = ce(function(t, r) {
  const [n, o] = Z(t.layout), a = t.mode ? t.mode : n.type ? n.type : "grid", c = t.layoutParams || {}, l = Hn(a), d = se(0);
  return ge(() => {
    o(t.layout), d.current < 999999 ? d.current++ : d.current = 0;
  }, [t.layout]), /* @__PURE__ */ s(kt, { fallback: /* @__PURE__ */ s("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ s(Ue.Provider, { value: t.storeFactory, children: /* @__PURE__ */ s(Pt.Provider, { value: c, children: /* @__PURE__ */ s(l, { ...t, ref: (m) => {
    r && (r.current = m);
  } }, d.current) }) }) });
}), na = ce(function(t, r) {
  const { children: n, Child: o, childProps: a, pageSize: c } = t, l = r || se(null), {
    setQueryFilter: d,
    refreshData: m,
    setQuickSearch: f,
    gotoPage: p,
    setPageSize: b,
    getPageNo: A,
    data: x,
    pageSizeOptions: k,
    queryLimit: j
  } = Me(t), Y = t.listKeyProvider || ((I, z) => z);
  ve(l, () => ({
    setFilter(I) {
      d(I);
    },
    refresh: () => {
      m();
    },
    gotoPage(I) {
      p(I);
    },
    nextPage() {
    },
    prevPage() {
    }
  }), []);
  const S = (I, z) => {
    p(z);
  }, h = (I) => {
    const z = I.target.value;
    f(z);
  }, v = (I) => {
    const z = parseInt(I.target.value, 10);
    b(z);
  }, i = 200, M = !!c, w = !!t.quickSearch;
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ U("div", { className: "card-page-container", children: [
    n,
    /* @__PURE__ */ U("div", { children: [
      /* @__PURE__ */ U("div", { className: "card-header", children: [
        /* @__PURE__ */ s("div", { className: "card-filter", children: w && /* @__PURE__ */ s(
          Ge,
          {
            sx: { width: i },
            type: "text",
            onChange: h,
            style: { border: "0px" },
            size: "small",
            placeholder: "Name",
            InputProps: {
              endAdornment: /* @__PURE__ */ s(Ot, { position: "end", children: /* @__PURE__ */ s(jt, { className: "card-filter-icon" }) })
            }
          }
        ) }),
        /* @__PURE__ */ s("div", { className: "card-pagination", children: M && /* @__PURE__ */ s(
          Et,
          {
            component: "div",
            count: x,
            page: A(),
            onPageChange: S,
            rowsPerPage: j.limit,
            rowsPerPageOptions: k || [],
            onRowsPerPageChange: v
          }
        ) })
      ] }),
      /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
        hr,
        {
          Child: o,
          childKeyProvider: Y,
          dataList: x,
          childProps: a,
          EmptyChild: t.EmptyChild
        }
      ) })
    ] })
  ] }) });
});
export {
  ra as F,
  er as G,
  Zo as M,
  ta as P,
  na as S,
  tr as T,
  Vn as a,
  Ir as b,
  Me as c,
  jr as d,
  It as e,
  jn as f,
  Lt as g,
  Wn as h,
  Xn as i,
  Bn as j,
  St as k,
  Ct as l,
  Lr as u
};
