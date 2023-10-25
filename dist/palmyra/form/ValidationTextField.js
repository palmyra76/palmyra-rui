import { jsx as n } from "react/jsx-runtime";
import { forwardRef as f, useRef as d, useImperativeHandle as m, useEffect as c } from "react";
import { TextField as x } from "@mui/material";
import v from "./useValidator.js";
const g = f(function(e, a) {
  const { data: i, setData: u, error: t, fieldCallbacks: s } = v(e), r = d(null);
  m(a, () => ({
    focus() {
      r.current.focus();
    },
    isValid() {
      return !t.status;
    },
    assignAttribute(o) {
      r.current.assignAttribute(o);
    }
  }), []), c(() => {
    u(e.value);
  }, [e.value]);
  var l = { fullWidth: !0, ...e.muiFieldDef, value: i };
  return /* @__PURE__ */ n(
    x,
    {
      ...l,
      inputRef: r,
      ...s,
      error: t.status,
      helperText: t.message
    }
  );
});
export {
  g as default
};
