import { jsx as u, jsxs as F } from "react/jsx-runtime";
import g from "./ValidationTextField.js";
import y from "./ValidationTextArea.js";
import D from "./PalmyraRadioGroup.js";
import R from "./PalmyraSelect.js";
import P from "./ValidationDatePicker.js";
import b from "./ValidationDateTimePicker.js";
import x from "./ServerLookup.js";
import { StoreFactoryContext as V, LayoutParamsContext as S } from "../layout/flexiLayout/FlexiLayoutContext.js";
import { useContext as d } from "react";
import { mergeDeep as T } from "../utils/index.js";
import { getValueByKey as f } from "./FormUtil.js";
const k = (t) => {
  const { fieldDef: e, fieldRuntime: a, fieldRefs: o, value: i } = t;
  var r = s(e, i);
  return /* @__PURE__ */ u(
    g,
    {
      ref: (n) => {
        o.current[e.attribute] = n;
      },
      runtime: a,
      muiFieldDef: r,
      fieldDef: e,
      value: i
    }
  );
}, A = (t) => {
  const { fieldDef: e, fieldRuntime: a, fieldRefs: o, value: i } = t;
  var r = s(e, i);
  return /* @__PURE__ */ u(
    y,
    {
      ref: (n) => {
        o.current[e.attribute] = n;
      },
      runtime: a,
      muiFieldDef: r,
      fieldDef: e,
      value: i
    }
  );
}, q = (t) => {
  const { fieldDef: e, fieldRuntime: a, fieldRefs: o, value: i } = t;
  var r = s(e, i);
  return /* @__PURE__ */ u(
    D,
    {
      ref: (n) => {
        o.current[e.attribute] = n;
      },
      runtime: a,
      muiFieldDef: r,
      fieldDef: e,
      value: i
    }
  );
}, C = (t) => {
  const { fieldDef: e, fieldRuntime: a, fieldRefs: o, value: i } = t;
  var r = s(e, i);
  return /* @__PURE__ */ u(
    R,
    {
      ref: (n) => {
        o.current[e.attribute] = n;
      },
      runtime: a,
      muiFieldDef: r,
      fieldDef: e,
      value: i
    }
  );
}, L = (t) => {
  const { fieldDef: e } = t;
  return /* @__PURE__ */ F("div", { children: [
    "invalid type " + e.type,
    " "
  ] });
}, h = (t) => {
  const { fieldDef: e, fieldRuntime: a, fieldRefs: o, value: i } = t;
  var r = s(e, i);
  return /* @__PURE__ */ u(
    P,
    {
      ref: (n) => {
        o.current[e.attribute] = n;
      },
      ...r,
      runtime: a,
      muiFieldDef: r,
      fieldDef: e,
      value: i
    }
  );
}, j = (t) => {
  const { fieldDef: e, fieldRuntime: a, fieldRefs: o, value: i } = t;
  var r = s(e, i);
  return /* @__PURE__ */ u(
    b,
    {
      ref: (n) => {
        o.current[e.attribute] = n;
      },
      ...r,
      runtime: a,
      muiFieldDef: r,
      fieldDef: e,
      value: i
    }
  );
}, G = (t) => {
  const e = d(V), a = d(S), { fieldDef: o, fieldRuntime: i, fieldRefs: r, value: n, displayValue: m } = t;
  var l = o.storeOptions || {};
  a && T(l, a);
  const c = e.getGridStore(l);
  var p = s(o, n);
  return /* @__PURE__ */ u(
    x,
    {
      ref: (v) => {
        r.current[o.attribute] = v;
      },
      store: c,
      runtime: i,
      muiFieldDef: p,
      fieldDef: o,
      value: n,
      displayValue: m
    }
  );
}, s = (t, e) => ({
  value: e,
  required: t.required,
  disabled: t.disabled == !0,
  variant: t.variant || "standard"
}), O = (t, e, a, o) => {
  const i = f(t.attribute, o);
  if (t.displayAttribute) {
    const r = f(t.displayAttribute, o);
    return { fieldDef: t, fieldRuntime: e, fieldRefs: a, value: i, displayValue: r };
  } else
    return { fieldDef: t, fieldRuntime: e, fieldRefs: a, value: i };
}, W = (t, e, a, o) => {
  const { type: i } = t, r = O(t, e, a, o);
  switch (i) {
    case "string":
      return k(r);
    case "radio":
      return q(r);
    case "select":
      return C(r);
    case "date":
      return h(r);
    case "datetime":
      return j(r);
    case "serverlookup":
      return G(r);
    case "textarea":
      return A(r);
    default:
      return L(r);
  }
};
export {
  W as default
};
