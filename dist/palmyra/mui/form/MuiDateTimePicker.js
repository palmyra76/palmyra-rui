import { jsx as n } from "react/jsx-runtime";
import { forwardRef as C, useContext as g, useRef as v, useImperativeHandle as D } from "react";
import { LocalizationProvider as F, DateTimePicker as y } from "@mui/x-date-pickers";
import { AdapterDayjs as M } from "@mui/x-date-pickers/AdapterDayjs";
import P from "dayjs";
import { copyMuiOptions as h } from "./MuiUtil.js";
import { FieldManagerContext as b } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import x from "./FieldDecorator.js";
const V = C(function(t, i) {
  const l = g(b), u = t.displayPattern || t.serverPattern || "YYYY-MM-DD HH:mm:ss", r = l(t, "datetime"), o = r.error, c = r.data, a = r.eventListeners, s = v(null), m = () => P(c);
  D(i, () => ({
    focus() {
      s.current.focus();
    },
    isValid() {
      return !o.status;
    },
    assignAttribute(e) {
      s.current.assignAttribute(e);
    }
  }), []);
  var d = h(t, m()), f = {
    onBlur: a.onBlur,
    onFocus: a.onFocus,
    onChange: (e) => {
      e && e.toDate ? a.onValueChange(e.toDate()) : a.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ n(
    x,
    {
      label: t.title,
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ n(F, { dateAdapter: M, children: /* @__PURE__ */ n(
        y,
        {
          ...d,
          readOnly: t.readonly,
          format: u,
          ...f,
          slotProps: {
            textField: {
              error: o.status,
              helperText: o.message,
              variant: t.variant,
              fullWidth: !0
            }
          }
        }
      ) })
    }
  );
});
export {
  V as default
};
