import { jsx as n } from "react/jsx-runtime";
import { LocalizationProvider as D, DatePicker as g } from "@mui/x-date-pickers";
import { forwardRef as P, useRef as p, useImperativeHandle as h, useEffect as y } from "react";
import { AdapterDayjs as F } from "@mui/x-date-pickers/AdapterDayjs";
import V from "dayjs";
import { getEventListeners as j } from "./InputEventListeners.js";
const M = P(function(e, i) {
  const { data: s, setData: u, error: a, eventListeners: r } = j(e), l = e.fieldDef.displayPattern || e.fieldDef.serverPattern || "YYYY-MM-DD", o = p(null), f = () => V(s);
  h(i, () => ({
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
  var d = a.message, c = a.status, m = { ...e.muiFieldDef, value: f() }, v = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (t) => {
      t && t.toDate ? r.onValueChange(t.toDate()) : r.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ n(D, { dateAdapter: F, children: /* @__PURE__ */ n(
    g,
    {
      ...m,
      format: l,
      ...v,
      slotProps: {
        textField: {
          error: c,
          helperText: d,
          variant: "standard",
          fullWidth: !0
        }
      }
    }
  ) });
});
export {
  M as default
};
