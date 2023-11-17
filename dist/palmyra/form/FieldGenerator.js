import { jsxs as n, jsx as s } from "react/jsx-runtime";
import u from "../mui/form/MuiTextField.js";
import m from "../mui/form/MuiTextArea.js";
import d from "../mui/form/MuiRadioGroup.js";
import l from "../mui/form/MuiSelect.js";
import p from "../mui/form/MuiDatePicker.js";
import f from "../mui/form/MuiDateTimePicker.js";
import M from "../mui/form/MuiCheckBox.js";
import x from "../mui/form/MuiSwitch.js";
import h from "../mui/form/MuiPassword.js";
import g from "../mui/form/MuiServerLookup.js";
const k = (t) => {
  const { fieldDef: i } = t;
  return /* @__PURE__ */ n("div", { children: [
    "invalid type " + i.type,
    " "
  ] });
}, r = (t, i) => {
  const o = t.fieldDef;
  return /* @__PURE__ */ s(
    i,
    {
      ...o,
      label: t.title
    }
  );
}, c = () => /* @__PURE__ */ s("div", { children: "To be Implemented" }), j = (t, i, o) => {
  const { type: a } = t, e = { fieldDef: t, title: o };
  switch (a) {
    case "string":
      return r(e, u);
    case "radio":
      return r(e, d);
    case "select":
      return r(e, l);
    case "date":
      return r(e, p);
    case "datetime":
      return r(e, f);
    case "checkbox":
      return r(e, M);
    case "serverlookup":
      return r(e, g);
    case "textarea":
      return r(e, m);
    case "switch":
      return r(e, x);
    case "password":
      return r(e, h);
    case "multiSelect":
      return c();
    case "dateRange":
      return c();
    default:
      return k(e);
  }
};
export {
  j as default
};
