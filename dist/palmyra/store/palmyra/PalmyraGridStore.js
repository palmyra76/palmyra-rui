var d = Object.defineProperty;
var h = (o, t, r) => t in o ? d(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r;
var n = (o, t, r) => (h(o, typeof t != "symbol" ? t + "" : t, r), r);
import "../../../index-9502e5dc.js";
import "react/jsx-runtime";
import "react-router-dom";
import "react";
import "@mui/icons-material";
/* empty css                          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css                              *//* empty css                            */import "@mui/material";
import "../../grid/base/ColumnConverter.js";
import "../../grid/base/TableX.js";
import "@tanstack/react-table";
import "../../layout/flexiLayout/FormEditRenderer.js";
import "../../layout/container/SectionContainer.js";
import { StringFormat as m } from "../../utils/StringUtil.js";
import "dayjs";
import "../../layout/flexiLayout/FlexiLayoutContext.js";
import "../../layout/flexiLayout/FormFieldOnlyRenderer.js";
import "../../core/topic.js";
import "../../mui/form/MuiDatePicker.js";
import "../../mui/form/MuiDateTimePicker.js";
import "../../mui/form/MuiRadioGroup.js";
import "../../mui/form/MuiSelect.js";
import "../../mui/form/MuiTextArea.js";
import "../../mui/form/MuiTextField.js";
import "../../mui/form/MuiCheckBox.js";
import "../../mui/form/MuiSwitch.js";
/* empty css                            */import "../../mui/form/MuiServerLookup.js";
import s from "axios";
class R {
  constructor(t, r, i) {
    n(this, "request");
    n(this, "target");
    n(this, "endPoint");
    n(this, "idProperty");
    this.request = t, this.target = t.target, this.endPoint = r, this.idProperty = i;
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
    var r = this.target + this.queryUrl(), i = m(r, t.options);
    const p = { params: u(t) };
    return s.get(i, p).then((a) => a.data);
  }
  queryLayout(t) {
    var r = this.target + this.queryUrl(), i = m(r, {});
    return s.get(i, {
      headers: {
        action: "schema"
      }
    }).then((e) => e.data);
  }
  get(t, r) {
    var i = this.target + this.queryUrl(), e = m(i, t.options || {});
    return s.get(e).then((p) => p.data);
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
function u(o) {
  const t = Object.keys((o == null ? void 0 : o.sortOrder) || {}).map((e) => (o.sortOrder[e] === "asc" ? "+" : "-") + e), r = !!o.total;
  return { ...o.filter || {}, _total: r, _orderBy: t.length ? t.join(",") : [] };
}
export {
  R as PalmyraGridStore
};
