import { jsx as s } from "react/jsx-runtime";
import { forwardRef as p, useContext as g, useRef as v, useImperativeHandle as D } from "react";
import { LocalizationProvider as M, DateTimePicker as P } from "@mui/x-date-pickers";
import { AdapterDayjs as h } from "@mui/x-date-pickers/AdapterDayjs";
import x from "dayjs";
import { copyMuiOptions as y } from "./MuiUtil.js";
import { FieldManagerContext as F } from "../../layout/flexiLayout/FlexiLayoutContext.js";
const L = p(function(e, i) {
  const u = g(F), c = e.displayPattern || e.serverPattern || "YYYY-MM-DD HH:mm:ss", a = u(e, "datetime"), o = a.error, l = a.data, r = a.eventListeners, n = v(null), m = () => x(l);
  D(i, () => ({
    focus() {
      n.current.focus();
    },
    isValid() {
      return !o.status;
    },
    assignAttribute(t) {
      n.current.assignAttribute(t);
    }
  }), []);
  var d = y(e, m()), f = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (t) => {
      t && t.toDate ? r.onValueChange(t.toDate()) : r.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ s(M, { dateAdapter: h, children: /* @__PURE__ */ s(
    P,
    {
      ...d,
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
  L as default
};
