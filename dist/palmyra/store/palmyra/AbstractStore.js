var m = Object.defineProperty;
var n = (o, t, r) => t in o ? m(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r;
var i = (o, t, r) => (n(o, typeof t != "symbol" ? t + "" : t, r), r);
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
import { StringFormat as p } from "../../utils/StringUtil.js";
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
import "../../mui/form/MuiPassword.js";
import "../../mui/form/MuiNumberField.js";
import "../../form/PalmyraForm.js";
class R {
  constructor(t, r) {
    i(this, "options");
    i(this, "target");
    i(this, "endPoint");
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
}
export {
  R as PalmyraAbstractStore
};
