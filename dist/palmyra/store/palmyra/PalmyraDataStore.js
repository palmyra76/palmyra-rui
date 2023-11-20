import "../../../index-62c7e03f.js";
import "../../layout/flexiLayout/FlexiLayoutContext.js";
import { PalmyraGridStore as m } from "./PalmyraGridStore.js";
import "axios";
import "react/jsx-runtime";
import "../../layout/container/SectionContainer.js";
import "react-router-dom";
import "react";
import "@mui/icons-material";
/* empty css                          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css                              *//* empty css                            */import "@mui/material";
import "../../grid/GridX.js";
import "../../core/topic.js";
import { StringFormat as p } from "../../utils/StringUtil.js";
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
class J extends m {
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
  J as PalmyraDataStore
};
