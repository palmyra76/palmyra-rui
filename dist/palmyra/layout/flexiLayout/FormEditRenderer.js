import { jsx as a } from "react/jsx-runtime";
import { forwardRef as u, useRef as F, useMemo as h } from "react";
import g from "../container/FieldContainer.js";
import x from "../../form/FieldGenerator.js";
const M = u(function(t, w) {
  var n;
  v(t);
  const { formLayout: r, context: i } = t, { getFieldManager: m, formData: s } = i, f = r.Container || g;
  F({});
  const c = h(() => (e) => x(e, m), [s.data]);
  var l = ((n = r.options) == null ? void 0 : n.columns) || 1, d = { columns: l };
  return /* @__PURE__ */ a("div", { className: "palmyra-form-field-container-wrapper", children: r.fields.map((e, p) => /* @__PURE__ */ a(
    f,
    {
      index: p,
      field: e,
      label: e.title,
      options: d,
      children: c(e)
    },
    e.attribute
  )) });
});
function v(o) {
  var t;
  if (!((t = o.context) != null && t.getFieldManager))
    throw new Error('Form Context not available, if this the form page, set the type as "form" in the definition');
}
export {
  M as default
};
