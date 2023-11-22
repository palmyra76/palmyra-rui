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
import { StringFormat as p } from "../../utils/StringUtil.js";
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
import "../../mui/form/MuiServerLookup.js";
import "../../form/PalmyraForm.js";
class I extends m {
  constructor(t, r, o) {
    super(t, r, o);
  }
  post(t, r) {
    var o = this.target + this.postUrl(), i = p(o, r == null ? void 0 : r.endPointVars);
    return this.getClient().post(i, t).then((e) => e.data);
  }
  put(t, r) {
    var o = this.target + this.putUrl(), i = p(o, r == null ? void 0 : r.endPointVars);
    return this.getClient().put(i, t).then((e) => e.data);
  }
  remove(t, r) {
    var o = this.target + this.deleteUrl(), i = p(o, t);
    return this.getClient().delete(i).then((e) => e.data);
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
  I as PalmyraDataStore
};
