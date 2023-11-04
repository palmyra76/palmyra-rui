import { jsx as o, jsxs as i } from "react/jsx-runtime";
import { Dialog as f, DialogTitle as p, Tooltip as g, Button as h } from "@mui/material";
import { Close as F } from "@mui/icons-material";
/* empty css                         */import { convertToField as u } from "../../base/GridFieldConverter.js";
import v from "../../../layout/flexiLayout/SectionRendererEditForm.js";
import { createFormData as C } from "../../../form/PalmyraFormManager.js";
const j = ({ columns: r, isOpen: l, onClose: a, setFilter: e }) => {
  const n = (t) => {
    t.stopPropagation();
  };
  var { getFieldManager: c, getFormData: d } = C({}, () => {
  }, "edit");
  const s = () => {
    var t = d();
    e && e(t);
  }, m = u(r);
  return /* @__PURE__ */ o("div", { className: "grid-header-button", children: /* @__PURE__ */ i(f, { open: l, onClick: n, children: [
    /* @__PURE__ */ i("div", { className: "filter-dialog-container", children: [
      /* @__PURE__ */ o(p, { children: "Filter" }),
      /* @__PURE__ */ o("div", { className: "filter-dialog-close-btn", onClick: a, children: /* @__PURE__ */ o(g, { title: "Close", children: /* @__PURE__ */ o(F, { className: "close-icon" }) }) })
    ] }),
    /* @__PURE__ */ o("div", { className: "filter-dialog-content", children: /* @__PURE__ */ o(
      v,
      {
        context: { getFieldManager: c, formData: {} },
        layout: {
          type: "form",
          formLayout: {
            fields: m
          }
        }
      }
    ) }),
    /* @__PURE__ */ o(h, { className: "filter-dialog-button", onClick: s, children: "Filter" })
  ] }) });
};
export {
  j as default
};
