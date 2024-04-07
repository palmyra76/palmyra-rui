import { PalmyraStoreFactory as f } from "../../store/palmyra/PalmyraStoreFactory.js";
import "axios";
import "../../../chunks/ServerCardLayout.js";
import "../../layout/flexiLayout/FlexiLayoutContext.js";
import "react/jsx-runtime";
import "@mui/material";
import "../../layout/container/SectionContainer.js";
import "@mui/icons-material";
import { useEffect as s } from "react";
import "../../mui/widget/InfoTooltip.js";
import "react-router-dom";
/* empty css                        */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css                            */import "../../layout/card/CardLayout.js";
import "../../layout/tree/AsyncTreeMenuEditor.js";
/* empty css                             */import { mergeDeep as u } from "../../utils/index.js";
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
const Z = (t) => {
  const a = new f({ baseUrl: "/api/palmyra" });
  var i = {};
  u(i, t.storeOptions);
  const n = a.getChartStore(i, t.storeOptions.endPoint);
  s(() => {
    e(t.filter);
  }, [t.filter]);
  const m = (r) => t.transformData ? t.transformData(r) : r, p = (r) => {
    t.onData(m(r));
  }, c = (r) => {
    if (t.onError) {
      t.onError(r);
      return;
    }
    t.onData(null);
  }, e = (r) => {
    n.query({ filter: r, limit: 2e3 }).then((o) => p(o)).catch((o) => c(o));
  };
  return { fetchData: e, transform: m };
};
export {
  Z as useChartDataManager
};
