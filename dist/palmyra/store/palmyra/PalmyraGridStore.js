var d = Object.defineProperty;
var u = (o, t, r) => t in o ? d(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r;
var n = (o, t, r) => (u(o, typeof t != "symbol" ? t + "" : t, r), r);
import "../../../index-22a27bec.js";
import "../../layout/flexiLayout/FlexiLayoutContext.js";
import s from "axios";
import "react/jsx-runtime";
/* empty css                               */import "react-router-dom";
import "react";
import "@mui/icons-material";
/* empty css                          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css                              *//* empty css                            */import "@mui/material";
import "../../grid/GridX.js";
import "../../core/topic.js";
import { StringFormat as m } from "../../utils/StringUtil.js";
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
class J {
  constructor(t, r, e) {
    n(this, "request");
    n(this, "target");
    n(this, "endPoint");
    n(this, "idProperty");
    this.request = t, this.target = t.target, this.endPoint = r, this.idProperty = e;
  }
  getClient() {
    return s;
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
    var r = this.target + this.queryUrl(), e = m(r, t.options);
    const p = { params: h(t) };
    return s.get(e, p).then((a) => a.data);
  }
  queryLayout(t) {
    var r = this.target + this.queryUrl(), e = m(r, {});
    return s.get(e, {
      headers: {
        action: "schema"
      }
    }).then((i) => i.data);
  }
  get(t, r) {
    var e = this.target + this.queryUrl(), i = m(e, t.options || {});
    return s.get(i).then((p) => p.data);
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
function h(o) {
  const t = Object.keys((o == null ? void 0 : o.sortOrder) || {}).map((i) => (o.sortOrder[i] === "asc" ? "+" : "-") + i), r = !!o.total;
  return { ...o.filter || {}, _total: r, _orderBy: t.length ? t.join(",") : [] };
}
export {
  J as PalmyraGridStore
};
