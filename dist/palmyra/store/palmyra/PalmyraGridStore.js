var a = Object.defineProperty;
var d = (r, t, o) => t in r ? a(r, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[t] = o;
var p = (r, t, o) => (d(r, typeof t != "symbol" ? t + "" : t, o), o);
import "../../layout/flexiLayout/FlexiLayoutRenderer.js";
import "react/jsx-runtime";
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
import "../../layout/container/SectionContainer.js";
import { StringFormat as m } from "../../utils/StringUtil.js";
import "dayjs";
import "../../layout/flexiLayout/FlexiLayoutContext.js";
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
/* empty css                            */import "../../mui/form/MuiServerLookup.js";
import n from "axios";
class V {
  constructor(t) {
    p(this, "request");
    p(this, "target");
    this.request = t, this.target = t.target;
  }
  query(t) {
    var o = m(this.target, t.options);
    const i = { params: c(t) };
    return n.get(o, i).then((s) => s.data);
  }
  queryLayout(t) {
    var o = m(this.target, {});
    return n.get(o, {
      headers: {
        action: "schema"
      }
    }).then((e) => e.data);
  }
  get(t, o) {
    var e = m(this.target, t.options || {});
    return n.get(e).then((i) => i.data);
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
function c(r) {
  const t = Object.keys((r == null ? void 0 : r.sortOrder) || {}).map((i) => (r.sortOrder[i] === "asc" ? "+" : "-") + i), o = !!r.total;
  return { ...r.filter || {}, _total: o, _orderBy: t.length ? t.join(",") : [] };
}
export {
  V as PalmyraGridStore
};
