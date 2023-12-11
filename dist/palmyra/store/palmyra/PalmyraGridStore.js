var a = Object.defineProperty;
var h = (r, t, o) => t in r ? a(r, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[t] = o;
var p = (r, t, o) => (h(r, typeof t != "symbol" ? t + "" : t, o), o);
import "../../../chunks/ServerCardLayout.js";
import "../../layout/flexiLayout/FlexiLayoutContext.js";
import s from "axios";
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
import "react-chartjs-2";
import "../../chart/chartjs/LineChart.js";
import "../../chart/chartjs/BarChart.js";
import "../../chart/chartjs/PieChart.js";
import "../../chart/chartjs/DoughnutChart.js";
import "../../chart/chartjs/PolarAreaChart.js";
import "../../chart/chartjs/RadarChart.js";
import "../../chart/chartjs/ScatterChart.js";
import "../../chart/chartjs/BubbleChart.js";
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
import "../../mui/form/MuiNumberField.js";
import "../../form/PalmyraForm.js";
class $ {
  constructor(t, o, i) {
    p(this, "request");
    p(this, "target");
    p(this, "endPoint");
    p(this, "idProperty");
    this.request = t, this.target = t.target, this.endPoint = o, this.idProperty = i;
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
    var o = this.target + this.queryUrl(), i = d(o, t.options);
    const n = { params: l(t) };
    return s.get(i, n).then((m) => m.data);
  }
  queryLayout(t) {
    var o = this.target + this.queryUrl(), i = d(o, {});
    return s.get(i, {
      headers: {
        action: "schema"
      }
    }).then((e) => e.data);
  }
  get(t, o) {
    var i = this.target + this.queryUrl(), e = d(i, t.options || {});
    return s.get(e).then((n) => n.data);
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
function l(r) {
  const t = Object.keys((r == null ? void 0 : r.sortOrder) || {}).map((m) => (r.sortOrder[m] === "asc" ? "+" : "-") + m), o = !!r.total, i = r.filter || {}, e = r.offset || 0, n = r.limit || 15;
  return { ...i, _total: o, _orderBy: t.length ? t.join(",") : [], _offset: e, _limit: n };
}
export {
  $ as PalmyraGridStore
};
