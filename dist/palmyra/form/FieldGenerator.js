import { jsxs as u, jsx as n } from "react/jsx-runtime";
import s from "../mui/form/MuiTextField.js";
import m from "../mui/form/MuiTextArea.js";
import d from "../mui/form/MuiRadioGroup.js";
import l from "../mui/form/MuiSelect.js";
import p from "../mui/form/MuiDatePicker.js";
import f from "../mui/form/MuiDateTimePicker.js";
import M from "../mui/form/MuiServerLookup.js";
import g from "../mui/form/MuiCheckBox.js";
import x from "../mui/form/MuiSwitch.js";
const h = (t) => {
  const { fieldDef: i } = t;
  return /* @__PURE__ */ u("div", { children: [
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
}, c = () => /* @__PURE__ */ n("div", { children: "To be Implemented" }), I = (t, i, o) => {
  const { type: a } = t, e = { fieldDef: t, getFieldManager: i };
  switch (a) {
    case "string":
      return r(e, s);
    case "radio":
      return r(e, d);
    case "select":
      return r(e, l);
    case "date":
      return r(e, p);
    case "datetime":
      return r(e, f);
    case "checkbox":
      return r(e, g);
    case "serverlookup":
      return r(e, M);
    case "textarea":
      return r(e, m);
    case "switch":
      return r(e, x);
    case "multiSelect":
      return c();
    case "dateRange":
      return c();
    default:
      return h(e);
  }
};
export {
  I as default
};
