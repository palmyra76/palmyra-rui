var a = Object.defineProperty;
var d = (r, t, o) => t in r ? a(r, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[t] = o;
var i = (r, t, o) => (d(r, typeof t != "symbol" ? t + "" : t, o), o);
import "../../layout/flexiLayout/FlexiLayoutRenderer.js";
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
import { StringFormat as p } from "../../utils/StringUtil.js";
import "dayjs";
import "../../layout/flexiLayout/FlexiLayoutContext.js";
import "../../grid/plugins/filter/Filter.js";
import "../../core/topic.js";
import "../../mui/form/MuiDatePicker.js";
import "../../mui/form/MuiDateTimePicker.js";
import "../../mui/form/MuiRadioGroup.js";
import "../../mui/form/MuiSelect.js";
import "../../mui/form/MuiTextArea.js";
import "../../mui/form/MuiTextField.js";
import "../../mui/form/MuiServerLookup.js";
import n from "axios";
class K {
  constructor(t) {
    i(this, "request");
    i(this, "target");
    this.request = t, this.target = t.target;
  }
  query(t) {
    var o = p(this.target, {});
    const m = { params: c(t) };
    return n.get(o, m).then((s) => s.data);
  }
  queryLayout(t) {
    var o = p(this.target, {});
    return n.get(o, {
      headers: {
        action: "schema"
      }
    }).then((e) => e.data);
  }
  get(t) {
    throw new Error("Method not implemented.");
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
function c(r) {
  const t = Object.keys((r == null ? void 0 : r.sortOrder) || {}).map((e) => (r.sortOrder[e] === "asc" ? "+" : "-") + e);
  return { ...r.filter || {}, _orderBy: t.length ? t.join(",") : [] };
}
export {
  K as PalmyraGridStore
};
