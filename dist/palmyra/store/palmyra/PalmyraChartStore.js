var s = Object.defineProperty;
var d = (r, t, o) => t in r ? s(r, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[t] = o;
var i = (r, t, o) => (d(r, typeof t != "symbol" ? t + "" : t, o), o);
import "../../../index-ba5ad291.js";
import "../../layout/flexiLayout/FlexiLayoutContext.js";
import h from "axios";
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
import { StringFormat as l } from "../../utils/StringUtil.js";
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
class W {
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
    return h.get(e, p).then((m) => m.data);
  }
}
function a(r) {
  const t = Object.keys((r == null ? void 0 : r.sortOrder) || {}).map((n) => (r.sortOrder[n] === "asc" ? "+" : "-") + n), o = !!r.total;
  return { ...r.filter || {}, _total: o, _orderBy: t.length ? t.join(",") : [] };
}
export {
  W as PalmyraChartStore
};
