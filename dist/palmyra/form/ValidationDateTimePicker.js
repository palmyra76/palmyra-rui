import { jsx as i } from "react/jsx-runtime";
import { LocalizationProvider as D, DateTimePicker as g } from "@mui/x-date-pickers";
import { forwardRef as P, useRef as p, useImperativeHandle as h, useEffect as y } from "react";
import { AdapterDayjs as F } from "@mui/x-date-pickers/AdapterDayjs";
import V from "dayjs";
import { getEventListeners as j } from "./InputEventListeners.js";
const H = P(function(e, s) {
  const { data: n, setData: u, error: a, eventListeners: r } = j(e), l = e.fieldDef.displayPattern || e.fieldDef.serverPattern || "YYYY-MM-DD HH:mm:ss", o = p(null), f = () => V(n);
  h(s, () => ({
    focus() {
      o.current.focus();
    },
    isValid() {
      return !a.status;
    },
    assignAttribute(t) {
      o.current.assignAttribute(t);
    }
  }), []), y(() => {
    u(e.value);
  }, [e.value]);
  var d = a.message, m = a.status, c = { ...e.muiFieldDef, value: f() }, v = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (t) => {
      t && t.toDate ? r.onValueChange(t.toDate()) : r.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ i(D, { dateAdapter: F, children: /* @__PURE__ */ i(
    g,
    {
      ...c,
      format: l,
      ...v,
      slotProps: {
        textField: {
          error: m,
          helperText: d,
          variant: "standard",
          fullWidth: !0
        }
      }
    }
  ) });
});
export {
  H as default
};
