import { jsx as o } from "react/jsx-runtime";
import { forwardRef as g, useContext as v, useRef as u, useImperativeHandle as F } from "react";
import { LocalizationProvider as y, DatePicker as M } from "@mui/x-date-pickers";
import { AdapterDayjs as P } from "@mui/x-date-pickers/AdapterDayjs";
import b from "dayjs";
import { copyMuiOptions as h } from "./MuiUtil.js";
import { FieldManagerContext as x } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import L from "./FieldDecorator.js";
const w = g(function(t, s) {
  const c = v(x), i = s || u(null), d = t.displayPattern || t.serverPattern || "YYYY-MM-DD", a = c(t, "date", i), n = a.error, m = a.data, r = a.eventListeners, l = u(null), f = () => b(m);
  F(i, () => ({
    focus() {
      l.current.focus();
    },
    isValid() {
      return !n.status;
    },
    assignAttribute(e) {
      l.current.assignAttribute(e);
    },
    clear() {
      a.setData("");
    },
    setValue(e) {
      a.setData(e);
    }
  }), []);
  var C = h(t, f(), t.label), D = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (e) => {
      e && e.toDate ? r.onValueChange(e.toDate()) : r.onValueChange(void 0);
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
          format: d,
          ...D,
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
  w as default
};
