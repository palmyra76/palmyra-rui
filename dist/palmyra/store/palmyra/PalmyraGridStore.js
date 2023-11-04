var n = Object.defineProperty;
var s = (r, t, o) => t in r ? n(r, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[t] = o;
var i = (r, t, o) => (s(r, typeof t != "symbol" ? t + "" : t, o), o);
import "../../layout/flexiLayout/FlexiLayoutRenderer.js";
import "react/jsx-runtime";
import "react-router-dom";
import "react";
import "@mui/icons-material";
/* empty css                          *//* empty css                            */import "@mui/material";
import "../../grid/base/ColumnConverter.js";
/* empty css                      */import "@tanstack/react-table";
import "../../layout/flexiLayout/FormEditRenderer.js";
import "../../layout/container/SectionContainer.js";
import { StringFormat as d } from "../../utils/StringUtil.js";
import "dayjs";
import "../../layout/flexiLayout/FlexiLayoutContext.js";
import "../../core/topic.js";
import "../../mui/form/MuiDatePicker.js";
import "../../mui/form/MuiDateTimePicker.js";
import "../../mui/form/MuiRadioGroup.js";
import "../../mui/form/MuiSelect.js";
import "../../mui/form/MuiTextArea.js";
import "../../mui/form/MuiTextField.js";
import "../../mui/form/MuiServerLookup.js";
import a from "axios";
class H {
  constructor(t) {
    i(this, "request");
    i(this, "target");
    this.request = t, this.target = t.target;
  }
  query(t) {
    var o = d(this.target, {});
    const m = { params: c(t) };
    return a.get(o, m).then((p) => p.data);
  }
  get(t) {
    throw new Error("Method not implemented.");
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
function c(r) {
  const t = Object.keys((r == null ? void 0 : r.sortOrder) || {}).map((e) => (r.sortOrder[e] === "asc" ? "+" : "-") + e);
  return { ...r.filter || {}, _orderBy: t.length ? t.join(",") : [] };
}
export {
  H as PalmyraGridStore
};
