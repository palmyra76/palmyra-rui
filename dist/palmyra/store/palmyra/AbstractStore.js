var l = Object.defineProperty;
var c = (r, t, o) => t in r ? l(r, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[t] = o;
var e = (r, t, o) => (c(r, typeof t != "symbol" ? t + "" : t, o), o);
import n from "axios";
import "../../../chunks/ServerCardLayout.js";
import "../../layout/flexiLayout/FlexiLayoutContext.js";
import "react/jsx-runtime";
import "@mui/material";
import "../../layout/container/SectionContainer.js";
import "@mui/icons-material";
import "react";
import "../../mui/widget/InfoTooltip.js";
import "react-router-dom";
/* empty css                        */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css                            */import "../../layout/card/CardLayout.js";
import "../../layout/tree/AsyncTreeMenuEditor.js";
/* empty css                             */import { StringFormat as p, hasUnfilledParameter as d } from "../../utils/StringUtil.js";
import "../../utils/pubsub/topic.js";
import "@tanstack/react-table";
import "react-chartjs-2";
import "../../../chunks/ChartJS.js";
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
class _ {
  constructor(t, o, s) {
    e(this, "options");
    e(this, "target");
    e(this, "endPoint");
    e(this, "axiosInstance");
    this.axiosInstance = n.create({
      timeout: 5e3
    });
    const m = s || (() => (i) => {
      const a = i.request.responseURL || i.config.url;
      console.log(i.response.status + ":" + i.code + "-requestUrl:" + a), console.log(i.message + " -- response data:'" + i.response.data + "'");
    });
    n.interceptors.response.use(void 0, function(i) {
      return i.handleGlobally = m(i), Promise.reject(i);
    }), this.options = t, this.target = t.target, this.endPoint = o;
  }
  getClient() {
    return n;
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
  formatUrl(t, o) {
    return o ? p(p(t, o.options), o.endPointVars) : t;
  }
  isUrlValid(t) {
    return d(t) ? Promise.reject("endPoint options yet to be populated " + t) : !1;
  }
  handleError(t, o) {
    t.errorHandler && t.errorHandler(o) || o.handleGlobally(o);
  }
}
export {
  _ as PalmyraAbstractStore
};
