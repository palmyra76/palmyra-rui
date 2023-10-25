import { jsx as i } from "react/jsx-runtime";
import { LocalizationProvider as m, DatePicker as D } from "@mui/x-date-pickers";
import { forwardRef as v, useRef as p, useState as P, useImperativeHandle as g, useEffect as k } from "react";
import { AdapterDayjs as x } from "@mui/x-date-pickers/AdapterDayjs";
import A from "dayjs";
import V from "./useValidator.js";
const R = v(function(t, s) {
  const { error: e, fieldCallbacks: o } = V(t), u = t.fieldDef.displayPattern || "YYYY-MM-DD", a = p(null), n = (r) => A(r, u), [l, d] = P(n(t.value));
  g(s, () => ({
    focus() {
      a.current.focus();
    },
    isValid() {
      return !e.status;
    },
    assignAttribute(r) {
      a.current.assignAttribute(r);
    }
  }), []), k(() => {
    d(t.value);
  }, [t.value]);
  var f = e.message, c = { ...t.muiFieldDef, value: l };
  return /* @__PURE__ */ i(m, { dateAdapter: x, children: /* @__PURE__ */ i(
    D,
    {
      ...c,
      ...o,
      onError: e.status,
      slotProps: {
        textField: {
          helperText: f,
          variant: "standard",
          fullWidth: !0
        }
      }
    }
  ) });
});
export {
  R as default
};
