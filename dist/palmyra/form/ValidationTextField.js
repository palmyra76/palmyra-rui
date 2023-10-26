import { jsx as f } from "react/jsx-runtime";
import { forwardRef as c, useRef as d, useImperativeHandle as m, useEffect as v } from "react";
import { TextField as g } from "@mui/material";
import { getEventListeners as x } from "./InputEventListeners.js";
const b = c(function(e, n) {
  const { data: s, setData: i, error: t, eventListeners: r } = x(e), a = d(null);
  m(n, () => ({
    focus() {
      a.current.focus();
    },
    isValid() {
      return !t.status;
    },
    assignAttribute(u) {
      a.current.assignAttribute(u);
    }
  }), []), v(() => {
    i(e.value);
  }, [e.value]);
  var o = { fullWidth: !0, ...e.muiFieldDef, value: s }, l = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (u) => r.onValueChange(u.target.value)
  };
  return /* @__PURE__ */ f(
    g,
    {
      ...o,
      inputRef: a,
      ...l,
      error: t.status,
      helperText: t.message
    }
  );
});
export {
  b as default
};
