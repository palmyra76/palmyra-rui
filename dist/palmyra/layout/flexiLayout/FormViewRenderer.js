import { jsx as o } from "react/jsx-runtime";
import d from "../container/FieldContainer.js";
import { getDisplayValue as u } from "../../form/FormUtil.js";
const v = (e) => {
  var a;
  const { formLayout: n } = e, { formData: i } = e.context, l = e.FieldContainer || d, m = (t) => {
    const r = u(t, i);
    return /* @__PURE__ */ o("div", { children: r });
  };
  var s = ((a = n.options) == null ? void 0 : a.columns) || 1, c = { columns: s };
  return /* @__PURE__ */ o("div", { className: "palmyra-form-field-container-wrapper", children: n.fields.map((t, r) => /* @__PURE__ */ o(
    l,
    {
      label: t.title,
      field: t,
      options: c,
      index: r,
      children: m(t)
    },
    t.attribute
  )) });
};
export {
  v as default
};
