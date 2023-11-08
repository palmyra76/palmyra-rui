import { jsx as a } from "react/jsx-runtime";
import { forwardRef as u, useRef as y, useMemo as p } from "react";
import h from "../../form/FieldGenerator.js";
const F = (t) => {
  const { formLayout: e } = t;
  var n = "palmyra-form-field-only-container";
  const r = e.options;
  if (r && r.columns)
    switch (r.columns) {
      case 2:
        return n + " palmyra-form-field-only-container-2column";
      case 3:
        return n + " palmyra-form-field-only-container-3column";
      case 4:
        return n + " palmyra-form-field-only-container-4column";
    }
  return n;
}, v = u(function(e, n) {
  g(e);
  const { formLayout: r, context: l } = e, { getFieldManager: i, formData: c } = l, s = y({}), m = F(e), f = "palmyra-form-field-only-data", d = p(() => (o) => h(o, i, s, o.title), [c.data]);
  return /* @__PURE__ */ a("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: r.fields.map((o, x) => /* @__PURE__ */ a("div", { className: m, children: /* @__PURE__ */ a("div", { className: f, children: d(o) }) }, o.attribute)) });
});
function g(t) {
  var e;
  if (!((e = t.context) != null && e.getFieldManager))
    throw new Error('Form Context not available, if this the form page, set the type as "form" in the definition');
}
export {
  v as default
};
