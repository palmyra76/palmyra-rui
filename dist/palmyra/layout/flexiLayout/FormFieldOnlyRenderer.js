import { jsx as o } from "react/jsx-runtime";
import { forwardRef as l, useRef as s, useMemo as c } from "react";
import u from "../../form/FieldGenerator.js";
const R = l(function(e, F) {
  p(e);
  const { formLayout: n, context: a } = e, { getFieldManager: i, formData: f } = a, m = s({}), d = c(() => (t) => u(t, i, m, t.title), [f.data]);
  return /* @__PURE__ */ o("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: n.fields.map((t, h) => /* @__PURE__ */ o("div", { children: d(t) }, t.attribute)) });
});
function p(r) {
  var e;
  if (!((e = r.context) != null && e.getFieldManager))
    throw new Error('Form Context not available, if this the form page, set the type as "form" in the definition');
}
export {
  R as default
};
