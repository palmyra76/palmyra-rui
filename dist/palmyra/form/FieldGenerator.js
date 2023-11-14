import { jsxs as m, jsx as c } from "react/jsx-runtime";
import s from "../mui/form/MuiTextField.js";
import l from "../mui/form/MuiTextArea.js";
import d from "../mui/form/MuiRadioGroup.js";
import f from "../mui/form/MuiSelect.js";
import p from "../mui/form/MuiDatePicker.js";
import M from "../mui/form/MuiDateTimePicker.js";
import g from "../mui/form/MuiCheckBox.js";
import x from "../mui/form/MuiSwitch.js";
/* empty css                         */import h from "../mui/form/MuiServerLookup.js";
const k = (r) => {
  const { fieldDef: i } = r;
  return /* @__PURE__ */ m("div", { children: [
    "invalid type " + i.type,
    " "
  ] });
}, t = (r, i) => {
  const o = r.fieldDef;
  return /* @__PURE__ */ c(
    i,
    {
      getFieldManager: r.getFieldManager,
      ...o,
      label: r.title
    }
  );
}, a = () => /* @__PURE__ */ c("div", { children: "To be Implemented" }), P = (r, i, o, n) => {
  const { type: u } = r, e = { fieldDef: r, getFieldManager: i, title: n };
  switch (u) {
    case "string":
      return t(e, s);
    case "radio":
      return t(e, d);
    case "select":
      return t(e, f);
    case "date":
      return t(e, p);
    case "datetime":
      return t(e, M);
    case "checkbox":
      return t(e, g);
    case "serverlookup":
      return t(e, h);
    case "textarea":
      return t(e, l);
    case "switch":
      return t(e, x);
    case "multiSelect":
      return a();
    case "dateRange":
      return a();
    default:
      return k(e);
  }
};
export {
  P as default
};
