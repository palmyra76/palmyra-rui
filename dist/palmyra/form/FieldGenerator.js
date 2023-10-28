import { jsxs as c, jsx as n } from "react/jsx-runtime";
import s from "../mui/form/MuiTextField.js";
import u from "../mui/form/MuiTextArea.js";
import m from "../mui/form/MuiRadioGroup.js";
import d from "../mui/form/MuiSelect.js";
import f from "../mui/form/MuiDatePicker.js";
import l from "../mui/form/MuiDateTimePicker.js";
import p from "../mui/form/MuiServerLookup.js";
import M from "../mui/form/MuiCheckBox.js";
const g = (t) => {
  const { fieldDef: i } = t;
  return /* @__PURE__ */ c("div", { children: [
    "invalid type " + i.type,
    " "
  ] });
}, r = (t, i) => {
  const o = t.fieldDef;
  return /* @__PURE__ */ n(
    i,
    {
      getFieldManager: t.getFieldManager,
      ...o
    }
  );
}, j = (t, i, o) => {
  const { type: a } = t, e = { fieldDef: t, getFieldManager: i };
  switch (a) {
    case "string":
      return r(e, s);
    case "radio":
      return r(e, m);
    case "select":
      return r(e, d);
    case "date":
      return r(e, f);
    case "datetime":
      return r(e, l);
    case "checkbox":
      return r(e, M);
    case "serverlookup":
      return r(e, p);
    case "textarea":
      return r(e, u);
    default:
      return g(e);
  }
};
export {
  j as default
};
