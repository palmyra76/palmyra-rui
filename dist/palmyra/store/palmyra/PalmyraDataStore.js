import "../../../index-dd123fe7.js";
import "../../layout/flexiLayout/FlexiLayoutContext.js";
import { PalmyraGridStore as n } from "./PalmyraGridStore.js";
import "axios";
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
import { StringFormat as p } from "../../utils/StringUtil.js";
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
class Q extends n {
  constructor(t, r, e) {
    super(t, r, e);
  }
  post(t, r) {
    var e = this.target + this.postUrl(), o = p(e, r);
    return this.getClient().post(o, t).then((i) => i.data);
  }
  put(t, r, e) {
    var o = this.target + this.putUrl(), i = p(o, r);
    return this.getClient().put(i, t).then((m) => m.data);
  }
  remove(t, r) {
    var e = this.target + this.deleteUrl(), o = p(e, t);
    return this.getClient().delete(o).then((i) => i.data);
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
  Q as PalmyraDataStore
};
