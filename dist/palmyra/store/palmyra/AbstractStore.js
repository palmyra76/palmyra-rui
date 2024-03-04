var m = Object.defineProperty;
var e = (i, t, r) => t in i ? m(i, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : i[t] = r;
var o = (i, t, r) => (e(i, typeof t != "symbol" ? t + "" : t, r), r);
import "../../../chunks/ServerCardLayout.js";
import "../../layout/flexiLayout/FlexiLayoutContext.js";
import "axios";
import "react/jsx-runtime";
import "@mui/material";
import "../../layout/container/SectionContainer.js";
import "@mui/icons-material";
import "react";
import "react-router-dom";
/* empty css                        */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css                            */import "../../layout/card/CardLayout.js";
import { StringFormat as p, hasUnfilledParameter as n } from "../../utils/StringUtil.js";
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
import "../../mui/form/MuiCheckBoxGroup.js";
import "../../mui/form/MuiCheckBox.js";
import "../../mui/form/MuiSwitch.js";
import "../../mui/form/MuiIOSSwitch.js";
import "../../mui/form/MuiPassword.js";
import "../../mui/form/MuiNumberField.js";
import "../../mui/form/MuiIntegerField.js";
import "../../form/PalmyraForm.js";
class Y {
  constructor(t, r) {
    o(this, "options");
    o(this, "target");
    o(this, "endPoint");
    this.options = t, this.target = t.target, this.endPoint = r;
  }
  getEndPoint() {
    return this.endPoint;
  }
  getOptions() {
    return this.options;
  }
  getTarget() {
    return this.target;
  }
  formatUrl(t, r) {
    return r ? p(p(t, r.options), r.endPointVars) : t;
  }
  isUrlValid(t) {
    return n(t) ? Promise.reject("endPoint options yet to be populated " + t) : !1;
  }
}
export {
  Y as PalmyraAbstractStore
};
