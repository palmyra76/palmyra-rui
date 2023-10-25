import { jsx as r } from "react/jsx-runtime";
import { useState as u, useEffect as f } from "react";
import p from "../container/FieldContainer.js";
import { getDisplayValue as F } from "../../form/FormUtil.js";
const V = (a) => {
  var n;
  const { formLayout: o } = a, [i, l] = u(a.data), m = a.FieldContainer || p;
  f(() => {
    l(a.data);
  }, [a.data]);
  const s = (t) => {
    const e = F(t, i);
    return /* @__PURE__ */ r("div", { children: e });
  };
  var d = ((n = o.options) == null ? void 0 : n.columns) || 1, c = { columns: d };
  return /* @__PURE__ */ r("div", { className: "palmyra-form-field-container-wrapper", children: o.fields.map((t, e) => /* @__PURE__ */ r(
    m,
    {
      label: t.title,
      field: t,
      options: c,
      index: e,
      children: s(t)
    },
    t.attribute
  )) });
};
export {
  V as default
};
