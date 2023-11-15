import { jsx as i } from "react/jsx-runtime";
import { forwardRef as g, useContext as p, useRef as v, useImperativeHandle as D } from "react";
import { LocalizationProvider as y, DateTimePicker as M } from "@mui/x-date-pickers";
import { AdapterDayjs as P } from "@mui/x-date-pickers/AdapterDayjs";
import h from "dayjs";
import { copyMuiOptions as x } from "./MuiUtil.js";
import { FieldManagerContext as F } from "../../layout/flexiLayout/FlexiLayoutContext.js";
const L = g(function(t, s) {
  const u = p(F), l = t.displayPattern || t.serverPattern || "YYYY-MM-DD HH:mm:ss", a = u(t, "datetime"), o = a.error, c = a.data, r = a.eventListeners, n = v(null), m = () => h(c);
  D(s, () => ({
    focus() {
      n.current.focus();
    },
    isValid() {
      return !o.status;
    },
    assignAttribute(e) {
      n.current.assignAttribute(e);
    }
  }), []);
  var d = x(t, m()), f = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (e) => {
      e && e.toDate ? r.onValueChange(e.toDate()) : r.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ i(y, { dateAdapter: P, children: /* @__PURE__ */ i(
    M,
    {
      ...d,
      readOnly: t.readonly,
      format: l,
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
  ) });
});
export {
  L as default
};
