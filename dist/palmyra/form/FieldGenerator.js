import { jsxs as s, jsx as a } from "react/jsx-runtime";
import d from "../mui/form/MuiTextField.js";
import u from "../mui/form/MuiTextArea.js";
import l from "../mui/form/MuiRadioGroup.js";
import m from "../mui/form/MuiSelect.js";
import f from "../mui/form/MuiDatePicker.js";
import p from "../mui/form/MuiDateTimePicker.js";
const g = (e) => {
  const { fieldDef: i } = e;
  return /* @__PURE__ */ s("div", { children: [
    "invalid type " + i.type,
    " "
  ] });
}, r = (e, i) => {
  const o = e.fieldDef;
  return /* @__PURE__ */ a(
    i,
    {
      getFieldManager: e.getFieldManager,
      ...o
    }
  );
}, n = () => /* @__PURE__ */ a("div", { children: "To be Implemented" }), D = (e, i, o) => {
  const { type: c } = e, t = { fieldDef: e, getFieldManager: i };
  switch (c) {
    case "string":
      return r(t, d);
    case "radio":
      return r(t, l);
    case "select":
      return r(t, m);
    case "date":
      return r(t, f);
    case "datetime":
      return r(t, p);
    case "checkbox":
      return n();
    case "serverlookup":
      return n();
    case "textarea":
      return r(t, u);
    default:
      return g(t);
  }
};
export {
  D as default
};
