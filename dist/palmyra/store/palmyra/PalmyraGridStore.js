var s = Object.defineProperty;
var d = (r, t, o) => t in r ? s(r, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[t] = o;
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
import "../../mui/form/MuiServerLookup.js";
import n from "axios";
class R {
  constructor(t) {
    p(this, "request");
    p(this, "target");
    this.request = t, this.target = t.target;
  }
  query(t) {
    var o = m(this.target, {});
    const e = { params: c(t) };
    return n.get(o, e).then((a) => a.data);
  }
  queryLayout(t) {
    var o = m(this.target, {});
    return n.get(o, {
      headers: {
        action: "schema"
      }
    }).then((i) => i.data);
  }
  get(t, o) {
    var i = m(this.target, t.options || {});
    return n.get(i).then((e) => e.data);
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
function c(r) {
  const t = Object.keys((r == null ? void 0 : r.sortOrder) || {}).map((e) => (r.sortOrder[e] === "asc" ? "+" : "-") + e), o = !!r.total;
  return { ...r.filter || {}, _total: o, _orderBy: t.length ? t.join(",") : [] };
}
export {
  R as PalmyraGridStore
};
