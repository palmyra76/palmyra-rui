var d = Object.defineProperty;
var s = (o, t, r) => t in o ? d(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r;
var p = (o, t, r) => (s(o, typeof t != "symbol" ? t + "" : t, r), r);
import "../../layout/flexiLayout/FlexiLayoutRenderer.js";
import m from "axios";
import "react/jsx-runtime";
import "react-router-dom";
import "react";
import "@mui/icons-material";
/* empty css                          */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css                            */import "@mui/material";
import "../../grid/base/ColumnConverter.js";
import "../../grid/base/TableX.js";
import "@tanstack/react-table";
import "../../layout/flexiLayout/FormEditRenderer.js";
import "../../layout/container/SectionContainer.js";
import { StringFormat as n } from "../../utils/StringUtil.js";
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
import "../../mui/form/MuiServerLookup.js";
class K {
  constructor(t) {
    p(this, "request");
    p(this, "target");
    this.request = t, this.target = t.target;
  }
  query(t) {
    var r = n(this.target, {});
    const i = { params: h(t) };
    return m.get(r, i).then((a) => a.data);
  }
  queryLayout(t) {
    var r = n(this.target, t.options || {});
    return m.get(r, {
      headers: {
        action: "schema"
      }
    }).then((e) => e.data);
  }
  get(t, r) {
    var e = n(this.target, t.options || {});
    return m.get(e).then((i) => i.data);
  }
  post(t, r) {
    throw new Error("Method not implemented.");
  }
  put(t, r, e) {
    throw new Error("Method not implemented.");
  }
  remove(t, r) {
    throw new Error("Method not implemented.");
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
function h(o) {
  const t = Object.keys((o == null ? void 0 : o.sortOrder) || {}).map((e) => (o.sortOrder[e] === "asc" ? "+" : "-") + e);
  return { ...o.filter || {}, _orderBy: t.length ? t.join(",") : [] };
}
export {
  K as PalmyraDataStore
};
