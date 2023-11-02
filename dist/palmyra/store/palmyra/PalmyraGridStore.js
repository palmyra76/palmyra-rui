var n = Object.defineProperty;
var s = (r, t, o) => t in r ? n(r, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[t] = o;
var i = (r, t, o) => (s(r, typeof t != "symbol" ? t + "" : t, o), o);
import "../../layout/flexiLayout/FlexiLayoutRenderer.js";
import "react/jsx-runtime";
import "@emotion/styled";
import "react-router-dom";
import "@mui/icons-material";
import "@mui/x-tree-view";
/* empty css                            */import "react";
import "@mui/material";
import "../../grid/base/ColumnConverter.js";
import "../../grid/base/TableX.js";
import "@tanstack/react-table";
import { StringFormat as d } from "../../utils/StringUtil.js";
import "../../core/topic.js";
import "../../mui/form/MuiDatePicker.js";
import "../../mui/form/MuiDateTimePicker.js";
import "../../mui/form/MuiRadioGroup.js";
import "../../mui/form/MuiSelect.js";
import "../../mui/form/MuiTextArea.js";
import "../../mui/form/MuiTextField.js";
import "../../mui/form/MuiServerLookup.js";
import "dayjs";
import "../../layout/flexiLayout/FlexiLayoutContext.js";
import a from "axios";
class D {
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
  D as PalmyraGridStore
};
