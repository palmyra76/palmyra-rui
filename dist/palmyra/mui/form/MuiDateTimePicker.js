import { jsx as o } from "react/jsx-runtime";
import { forwardRef as v, useContext as D, useRef as u, useImperativeHandle as F } from "react";
import { LocalizationProvider as y, DateTimePicker as M } from "@mui/x-date-pickers";
import { AdapterDayjs as P } from "@mui/x-date-pickers/AdapterDayjs";
import b from "dayjs";
import { copyMuiOptions as h } from "./MuiUtil.js";
import { FieldManagerContext as x } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import L from "./FieldDecorator.js";
const O = v(function(t, s) {
  const c = D(x), i = s || u(null), m = t.displayPattern || t.serverPattern || "YYYY-MM-DD HH:mm:ss", r = c(t, "datetime", i), n = r.error, d = r.data, a = r.eventListeners, l = u(null), f = () => b(d);
  F(i, () => ({
    focus() {
      l.current.focus();
    },
    isValid() {
      return !n.status;
    },
    assignAttribute(e) {
      l.current.assignAttribute(e);
    }
  }), []);
  var C = h(t, f(), t.label), g = {
    onBlur: a.onBlur,
    onFocus: a.onFocus,
    onChange: (e) => {
      e && e.toDate ? a.onValueChange(e.toDate()) : a.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ o(
    L,
    {
      label: t.title,
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ o(y, { dateAdapter: P, children: /* @__PURE__ */ o(
        M,
        {
          ...C,
          readOnly: t.readonly,
          format: m,
          ...g,
          slotProps: {
            textField: {
              error: n.status,
              helperText: n.message,
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
  O as default
};
