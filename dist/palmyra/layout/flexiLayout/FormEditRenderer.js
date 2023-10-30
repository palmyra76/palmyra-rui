import { jsx as a } from "react/jsx-runtime";
import { forwardRef as p, useRef as F, useMemo as h } from "react";
import g from "../container/FieldContainer.js";
import x from "../../form/FieldGenerator.js";
const M = p(function(t, C) {
  var n;
  w(t);
  const { formLayout: r, context: i } = t, { getFieldManager: m, formData: f } = i, s = r.Container || g;
  F({});
  const l = h(() => (e) => x(e, m), [f.data]);
  var c = ((n = r.options) == null ? void 0 : n.columns) || 1, d = { columns: c };
  return /* @__PURE__ */ a("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: r.fields.map((e, u) => /* @__PURE__ */ a(
    s,
    {
      index: u,
      field: e,
      label: e.title,
      options: d,
      children: l(e)
    },
    e.attribute
  )) });
});
function w(o) {
  var t;
  if (!((t = o.context) != null && t.getFieldManager))
    throw new Error('Form Context not available, if this the form page, set the type as "form" in the definition');
}
export {
  M as default
};
