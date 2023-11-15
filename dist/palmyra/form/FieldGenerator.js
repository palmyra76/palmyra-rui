import { jsxs as a, jsx as n } from "react/jsx-runtime";
import s from "../mui/form/MuiTextField.js";
import m from "../mui/form/MuiTextArea.js";
import l from "../mui/form/MuiRadioGroup.js";
import d from "../mui/form/MuiSelect.js";
import p from "../mui/form/MuiDatePicker.js";
import f from "../mui/form/MuiDateTimePicker.js";
import M from "../mui/form/MuiCheckBox.js";
import x from "../mui/form/MuiSwitch.js";
/* empty css                         */import h from "../mui/form/MuiServerLookup.js";
const g = (r) => {
  const { fieldDef: i } = r;
  return /* @__PURE__ */ a("div", { children: [
    "invalid type " + i.type,
    " "
  ] });
}, t = (r, i) => {
  const o = r.fieldDef;
  return /* @__PURE__ */ n(
    i,
    {
      ...o,
      label: r.title
    }
  );
}, c = () => /* @__PURE__ */ n("div", { children: "To be Implemented" }), j = (r, i, o) => {
  const { type: u } = r, e = { fieldDef: r, title: o };
  switch (u) {
    case "string":
      return t(e, s);
    case "radio":
      return t(e, l);
    case "select":
      return t(e, d);
    case "date":
      return t(e, p);
    case "datetime":
      return t(e, f);
    case "checkbox":
      return t(e, M);
    case "serverlookup":
      return t(e, h);
    case "textarea":
      return t(e, m);
    case "switch":
      return t(e, x);
    case "multiSelect":
      return c();
    case "dateRange":
      return c();
    default:
      return g(e);
  }
};
export {
  j as default
};
