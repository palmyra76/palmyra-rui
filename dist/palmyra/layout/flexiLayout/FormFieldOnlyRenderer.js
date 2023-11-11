import "../../../assets/FormFieldOnlyRenderer.css";
import { jsx as a } from "react/jsx-runtime";
import { forwardRef as u, useRef as p, useMemo as y } from "react";
import F from "../../form/FieldGenerator.js";
const h = (o) => {
  const { formLayout: e } = o;
  var r = "palmyra-form-field-container";
  const t = e.options;
  if (t && t.columns)
    switch (t.columns) {
      case 2:
        return r + " palmyra-form-field-container-2column";
      case 3:
        return r + " palmyra-form-field-container-3column";
      case 4:
        return r + " palmyra-form-field-container-4column";
    }
  return r;
}, L = u(function(e, r) {
  g(e);
  const { formLayout: t, context: i } = e, { getFieldManager: l, formData: c } = i, s = p({}), m = h(e), f = "palmyra-form-field-data", d = y(() => (n) => F(n, l, s, n.title), [c.data]);
  return /* @__PURE__ */ a("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: t.fields.map((n, x) => /* @__PURE__ */ a("div", { className: m, children: /* @__PURE__ */ a("div", { className: f, children: d(n) }) }, n.attribute)) });
});
function g(o) {
  var e;
  if (!((e = o.context) != null && e.getFieldManager))
    throw new Error('Form Context not available, if this the form page, set the type as "form" in the definition');
}
export {
  L as default
};
