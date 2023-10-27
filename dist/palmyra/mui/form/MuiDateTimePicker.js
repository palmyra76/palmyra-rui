import { jsx as s } from "react/jsx-runtime";
import { forwardRef as p, useRef as g, useImperativeHandle as v } from "react";
import { LocalizationProvider as D, DatePicker as P } from "@mui/x-date-pickers";
import { AdapterDayjs as M } from "@mui/x-date-pickers/AdapterDayjs";
import h from "dayjs";
import { copyMuiOptions as y } from "./MuiUtil.js";
const C = p(function(t, i) {
  const { getFieldManager: u } = t, c = t.displayPattern || t.serverPattern || "YYYY-MM-DD HH:mm:ss", a = u(t, "datetime"), o = a.error, l = a.data, r = a.eventListeners, n = g(null), d = () => h(l);
  v(i, () => ({
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
  var m = y(t, d()), f = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (e) => {
      e && e.toDate ? r.onValueChange(e.toDate()) : r.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ s(D, { dateAdapter: M, children: /* @__PURE__ */ s(
    P,
    {
      ...m,
      format: c,
      ...f,
      slotProps: {
        textField: {
          error: o.status,
          helperText: o.message,
          variant: "standard",
          fullWidth: !0
        }
      }
    }
  ) });
});
export {
  C as default
};
