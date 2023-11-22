var m = Object.defineProperty;
var d = (r, t, o) => t in r ? m(r, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[t] = o;
var i = (r, t, o) => (d(r, typeof t != "symbol" ? t + "" : t, o), o);
import "../../../chunks/ServerCardLayout.js";
import "../../layout/flexiLayout/FlexiLayoutContext.js";
import h from "axios";
import "react/jsx-runtime";
import "@mui/material";
import "../../layout/container/SectionContainer.js";
import "@mui/icons-material";
import "react";
import "react-router-dom";
/* empty css                        */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css                            */import "../../layout/card/CardLayout.js";
import { StringFormat as l } from "../../utils/StringUtil.js";
import "../../utils/pubsub/topic.js";
import "dayjs";
import "../../mui/form/MuiDatePicker.js";
import "../../mui/form/MuiDateTimePicker.js";
import "../../mui/form/MuiRadioGroup.js";
import "../../mui/form/MuiSelect.js";
import "../../mui/form/MuiTextArea.js";
import "../../mui/form/MuiTextField.js";
import "../../mui/form/MuiCheckBox.js";
import "../../mui/form/MuiSwitch.js";
import "../../mui/form/MuiPassword.js";
import "../../mui/form/MuiServerLookup.js";
import "../../form/PalmyraForm.js";
class K {
  constructor(t, o, e) {
    i(this, "request");
    i(this, "target");
    i(this, "endPoint");
    i(this, "idProperty");
    this.request = t, this.target = t.target, this.endPoint = o, this.idProperty = e;
  }
  getEndPoint() {
    return this.endPoint;
  }
  queryUrl() {
    if (typeof this.endPoint == "string")
      return this.endPoint;
    this.endPoint.query;
  }
  getUrl() {
    if (typeof this.endPoint == "string")
      return this.endPoint;
    this.endPoint.get;
  }
  query(t) {
    var o = this.target + this.queryUrl(), e = l(o, t.options);
    const p = { params: a(t) };
    return h.get(e, p).then((s) => s.data);
  }
}
function a(r) {
  const t = Object.keys((r == null ? void 0 : r.sortOrder) || {}).map((n) => (r.sortOrder[n] === "asc" ? "+" : "-") + n), o = !!r.total;
  return { ...r.filter || {}, _total: o, _orderBy: t.length ? t.join(",") : [] };
}
export {
  K as PalmyraLookupStore
};
