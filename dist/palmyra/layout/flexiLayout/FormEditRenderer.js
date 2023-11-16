import { jsx as o, Fragment as d } from "react/jsx-runtime";
import { forwardRef as p, useRef as u, useMemo as F } from "react";
import h from "../../form/FieldGenerator.js";
const b = p(function(m, R) {
  var n;
  const { formLayout: r, context: l } = m, { formData: s } = l, t = r.Container;
  u({});
  const a = F(() => (e) => h(e), [s.data]);
  var c = ((n = r.options) == null ? void 0 : n.columns) || 1, f = { columns: c };
  return t ? /* @__PURE__ */ o("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: r.fields.map((e, i) => /* @__PURE__ */ o(
    t,
    {
      index: i,
      field: e,
      label: e.title,
      options: f,
      children: a(e)
    },
    e.attribute
  )) }) : /* @__PURE__ */ o("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: r.fields.map((e, i) => /* @__PURE__ */ o(d, { children: a(e) })) });
});
export {
  b as default
};
