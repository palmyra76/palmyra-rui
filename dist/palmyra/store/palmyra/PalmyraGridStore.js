var m = Object.defineProperty;
var p = (o, t, r) => t in o ? m(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r;
var i = (o, t, r) => (p(o, typeof t != "symbol" ? t + "" : t, r), r);
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
import { StringFormat as n } from "../../utils/StringUtil.js";
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
class B {
  constructor(t) {
    i(this, "request");
    i(this, "target");
    this.request = t, this.target = t.target;
  }
  query(t) {
    var r = n(this.target, {});
    return a.get(r).then((e) => e.data);
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
export {
  B as PalmyraGridStore
};
