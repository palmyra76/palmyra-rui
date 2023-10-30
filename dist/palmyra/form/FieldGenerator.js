import { jsxs as c, jsx as s } from "react/jsx-runtime";
import u from "../mui/form/MuiTextField.js";
import n from "../mui/form/MuiTextArea.js";
import m from "../mui/form/MuiRadioGroup.js";
import d from "../mui/form/MuiSelect.js";
import f from "../mui/form/MuiDatePicker.js";
import l from "../mui/form/MuiDateTimePicker.js";
import p from "../mui/form/MuiServerLookup.js";
import M from "../mui/form/MuiCheckBox.js";
import g from "../mui/form/MuiSwitch.js";
const x = (t) => {
  const { fieldDef: i } = t;
  return /* @__PURE__ */ c("div", { children: [
    "invalid type " + i.type,
    " "
  ] });
}, r = (t, i) => {
  const o = t.fieldDef;
  return /* @__PURE__ */ s(
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
      return r(e, u);
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
      return r(e, n);
    case "switch":
      return r(e, g);
    default:
      return x(e);
  }
};
export {
  j as default
};
