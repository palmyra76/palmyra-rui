import { jsx as u, jsxs as F } from "react/jsx-runtime";
import y from "./ValidationTextField.js";
import g from "./ValidationTextArea.js";
import R from "./PalmyraRadioGroup.js";
import P from "./PalmyraSelect.js";
import b from "./ValidationDatePicker.js";
import x from "./ServerLookup.js";
import { StoreFactoryContext as D, LayoutParamsContext as S } from "../layout/flexiLayout/FlexiLayoutContext.js";
import { useContext as d } from "react";
import { mergeDeep as V } from "../utils/index.js";
import { getValueByKey as f } from "./FormUtil.js";
const k = (t) => {
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
}, A = (t) => {
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
}, T = (t) => {
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
}, q = (t) => {
  const { fieldDef: e, fieldRuntime: a, fieldRefs: o, value: i } = t;
  var r = s(e, i);
  return /* @__PURE__ */ u(
    P,
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
  const { fieldDef: e } = t;
  return /* @__PURE__ */ F("div", { children: [
    "invalid type " + e.type,
    " "
  ] });
}, L = (t) => {
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
}, h = (t) => {
  const e = d(D), a = d(S), { fieldDef: o, fieldRuntime: i, fieldRefs: r, value: n, displayValue: c } = t;
  var l = o.storeOptions || {};
  a && V(l, a);
  const m = e.getGridStore(l);
  var p = s(o, n);
  return /* @__PURE__ */ u(
    x,
    {
      ref: (v) => {
        r.current[o.attribute] = v;
      },
      store: m,
      runtime: i,
      muiFieldDef: p,
      fieldDef: o,
      value: n,
      displayValue: c
    }
  );
}, s = (t, e) => ({
  value: e,
  required: t.required,
  disabled: t.disabled == !0,
  variant: t.variant || "standard"
}), j = (t, e, a, o) => {
  const i = f(t.attribute, o);
  if (t.displayAttribute) {
    const r = f(t.displayAttribute, o);
    return { fieldDef: t, fieldRuntime: e, fieldRefs: a, value: i, displayValue: r };
  } else
    return { fieldDef: t, fieldRuntime: e, fieldRefs: a, value: i };
}, J = (t, e, a, o) => {
  const { type: i } = t, r = j(t, e, a, o);
  switch (i) {
    case "string":
      return k(r);
    case "radio":
      return T(r);
    case "select":
      return q(r);
    case "date":
      return L(r);
    case "serverlookup":
      return h(r);
    case "textarea":
      return A(r);
    default:
      return C(r);
  }
};
export {
  J as default
};
