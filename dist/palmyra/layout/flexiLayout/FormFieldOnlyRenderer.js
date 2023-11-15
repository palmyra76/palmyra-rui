import "../../../assets/FormFieldOnlyRenderer.css";
import { jsx as a } from "react/jsx-runtime";
import { forwardRef as d, useRef as u, useMemo as p } from "react";
import y from "../../form/FieldGenerator.js";
const F = (t) => {
  const { formLayout: n } = t;
  var r = "palmyra-form-field-container";
  const e = n.options;
  if (e && e.columns)
    switch (e.columns) {
      case 2:
        return r + " palmyra-form-field-container-2column";
      case 3:
        return r + " palmyra-form-field-container-3column";
      case 4:
        return r + " palmyra-form-field-container-4column";
    }
  return r;
}, w = d(function(n, r) {
  const { formLayout: e, context: l } = n, { formData: i } = l, s = u({}), c = F(n), m = "palmyra-form-field-data", f = p(() => (o) => y(o, s, o.title), [i.data]);
  return /* @__PURE__ */ a("form", { className: "palmyra-form-field-only-container-wrapper", noValidate: !0, children: e.fields.map((o, C) => /* @__PURE__ */ a("div", { className: c, children: /* @__PURE__ */ a("div", { className: m, children: f(o) }) }, o.attribute)) });
});
export {
  w as default
};
