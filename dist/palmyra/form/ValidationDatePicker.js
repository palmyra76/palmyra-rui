import { jsx as n } from "react/jsx-runtime";
import { LocalizationProvider as v, DatePicker as D } from "@mui/x-date-pickers";
import { forwardRef as g, useRef as P, useImperativeHandle as p, useEffect as h } from "react";
import { AdapterDayjs as y } from "@mui/x-date-pickers/AdapterDayjs";
import F from "dayjs";
import { getEventListeners as V } from "./InputEventListeners.js";
const L = g(function(e, i) {
  const { data: s, setData: u, error: a, eventListeners: r } = V(e), l = e.fieldDef.displayPattern || e.fieldDef.serverPattern || "YYYY-MM-DD", o = P(null), f = () => F(s);
  p(i, () => ({
    focus() {
      o.current.focus();
    },
    isValid() {
      return !a.status;
    },
    assignAttribute(t) {
      o.current.assignAttribute(t);
    }
  }), []), h(() => {
    u(e.value);
  }, [e.value]);
  var d = a.message, c = { ...e.muiFieldDef, value: f() }, m = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (t) => {
      t && t.toDate ? r.onValueChange(t.toDate()) : r.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ n(v, { dateAdapter: y, children: /* @__PURE__ */ n(
    D,
    {
      ...c,
      format: l,
      ...m,
      error: a.status,
      slotProps: {
        textField: {
          helperText: d,
          variant: "standard",
          fullWidth: !0
        }
      }
    }
  ) });
});
export {
  L as default
};
