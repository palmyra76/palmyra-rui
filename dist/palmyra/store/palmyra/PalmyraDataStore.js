import "../../../chunks/ServerCardLayout.js";
import "../../layout/flexiLayout/FlexiLayoutContext.js";
import { PalmyraGridStore as m } from "./PalmyraGridStore.js";
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
import { StringFormat as e } from "../../utils/StringUtil.js";
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
import "../../form/PalmyraForm.js";
class R extends m {
  constructor(t, r, o) {
    super(t, r, o);
  }
  post(t, r) {
    var o = this.target + this.postUrl(), i = e(o, r == null ? void 0 : r.endPointVars);
    return this.getClient().post(i, t).then((p) => p.data);
  }
  put(t, r) {
    var o = this.target + this.putUrl(), i = e(o, r == null ? void 0 : r.endPointVars);
    return this.getClient().put(i, t).then((p) => p.data);
  }
  remove(t, r) {
    var o = this.target + this.deleteUrl(), i = e(o, t);
    return this.getClient().delete(i).then((p) => p.data);
  }
  postUrl() {
    const t = this.getEndPoint();
    return typeof t == "string" ? t : t.post ? t.post : t.get;
  }
  putUrl() {
    const t = this.getEndPoint();
    return typeof t == "string" ? t : t.put;
  }
  deleteUrl() {
    const t = this.getEndPoint();
    return typeof t == "string" ? t : t.delete ? t.delete : t.put;
  }
}
export {
  R as PalmyraDataStore
};
