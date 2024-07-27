import { jsx as o } from "react/jsx-runtime";
import d from "../container/FieldContainer.js";
import { getDisplayValue as u } from "../../form/FormUtil.js";
const y = (r) => {
  var n;
  const { formLayout: a } = r, { formData: i } = r.context, l = r.FieldContainer || d, m = (e) => {
    const t = u(e, i);
    return /* @__PURE__ */ o("div", { children: t });
  };
  var s = ((n = a.options) == null ? void 0 : n.columns) || 1, c = { columns: s };
  return /* @__PURE__ */ o("form", { className: "palmyra-form-field-container-wrapper", noValidate: !0, children: a.fields.map((e, t) => /* @__PURE__ */ o(
    l,
    {
      label: e.label,
      field: e,
      options: c,
      index: t,
      children: m(e)
    },
    e.attribute
  )) });
};
export {
  y as default
};
