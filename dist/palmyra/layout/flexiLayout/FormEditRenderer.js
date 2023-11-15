import { jsx as t } from "react/jsx-runtime";
import { forwardRef as d, useRef as p, useMemo as u } from "react";
import F from "../container/FieldContainer.js";
import R from "../../form/FieldGenerator.js";
const w = d(function(n, C) {
  var o;
  const { formLayout: e, context: a } = n, { formData: m } = a, i = e.Container || F;
  p({});
  const s = u(() => (r) => R(r), [m.data]);
  var l = ((o = e.options) == null ? void 0 : o.columns) || 1, c = { columns: l };
  return /* @__PURE__ */ t("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: e.fields.map((r, f) => /* @__PURE__ */ t(
    i,
    {
      index: f,
      field: r,
      label: r.title,
      options: c,
      children: s(r)
    },
    r.attribute
  )) });
});
export {
  w as default
};
