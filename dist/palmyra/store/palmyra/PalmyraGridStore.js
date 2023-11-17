var d = Object.defineProperty;
var u = (o, t, r) => t in o ? d(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r;
var n = (o, t, r) => (u(o, typeof t != "symbol" ? t + "" : t, r), r);
import "../../../index-ba5ad291.js";
import "../../layout/flexiLayout/FlexiLayoutContext.js";
import m from "axios";
import "react/jsx-runtime";
import "../../layout/container/SectionContainer.js";
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
import { StringFormat as s } from "../../utils/StringUtil.js";
import "dayjs";
import "../../form/PalmyraForm.js";
import "../../grid/plugins/filter/Filter.js";
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
import "../../mui/form/MuiPassword.js";
import "../../mui/form/MuiServerLookup.js";
class V {
  constructor(t, r, i) {
    n(this, "request");
    n(this, "target");
    n(this, "endPoint");
    n(this, "idProperty");
    this.request = t, this.target = t.target, this.endPoint = r, this.idProperty = i;
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
    var r = this.target + this.queryUrl(), i = s(r, t.options);
    const p = { params: h(t) };
    return m.get(i, p).then((a) => a.data);
  }
  queryLayout(t) {
    var r = this.target + this.queryUrl(), i = s(r, {});
    return m.get(i, {
      headers: {
        action: "schema"
      }
    }).then((e) => e.data);
  }
  get(t, r) {
    var i = this.target + this.queryUrl(), e = s(i, t.options || {});
    return m.get(e).then((p) => p.data);
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
function h(o) {
  const t = Object.keys((o == null ? void 0 : o.sortOrder) || {}).map((e) => (o.sortOrder[e] === "asc" ? "+" : "-") + e), r = !!o.total;
  return { ...o.filter || {}, _total: r, _orderBy: t.length ? t.join(",") : [] };
}
export {
  V as PalmyraGridStore
};
