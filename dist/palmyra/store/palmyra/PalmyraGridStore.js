var a = Object.defineProperty;
var h = (r, t, o) => t in r ? a(r, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[t] = o;
var s = (r, t, o) => (h(r, typeof t != "symbol" ? t + "" : t, o), o);
import "../../../chunks/ServerCardLayout.js";
import "../../layout/flexiLayout/FlexiLayoutContext.js";
import m from "axios";
import "react/jsx-runtime";
import "@mui/material";
import "../../layout/container/SectionContainer.js";
import "@mui/icons-material";
import "react";
import "react-router-dom";
/* empty css                        */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css                            */import "../../layout/card/CardLayout.js";
import { StringFormat as d } from "../../utils/StringUtil.js";
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
import "../../form/PalmyraForm.js";
class J {
  constructor(t, o, e) {
    s(this, "request");
    s(this, "target");
    s(this, "endPoint");
    s(this, "idProperty");
    this.request = t, this.target = t.target, this.endPoint = o, this.idProperty = e;
  }
  getClient() {
    return m;
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
    var o = this.target + this.queryUrl(), e = d(o, t.options);
    const n = { params: l(t) };
    return m.get(e, n).then((p) => p.data);
  }
  queryLayout(t) {
    var o = this.target + this.queryUrl(), e = d(o, {});
    return m.get(e, {
      headers: {
        action: "schema"
      }
    }).then((i) => i.data);
  }
  get(t, o) {
    var e = this.target + this.queryUrl(), i = d(e, t.options || {});
    return m.get(i).then((n) => n.data);
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
function l(r) {
  const t = Object.keys((r == null ? void 0 : r.sortOrder) || {}).map((p) => (r.sortOrder[p] === "asc" ? "+" : "-") + p), o = !!r.total, e = r.filter || {}, i = r.offset || 0, n = r.limit || 15;
  return { ...e, _total: o, _orderBy: t.length ? t.join(",") : [], _offset: i, _limit: n };
}
export {
  J as PalmyraGridStore
};
