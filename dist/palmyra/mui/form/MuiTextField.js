import { jsx as c } from "react/jsx-runtime";
import { forwardRef as f, useRef as d, useImperativeHandle as g } from "react";
import { TextField as m } from "@mui/material";
import { copyMuiOptions as p } from "./MuiUtil.js";
const T = f(function(e, u) {
  const { getFieldManager: i } = e, t = i(e, "string"), r = t.error, n = t.eventListeners, o = d(null);
  g(u, () => ({
    focus() {
      o.current.focus();
    },
    isValid() {
      return !r.status;
    },
    assignAttribute(s) {
      o.current.assignAttribute(s);
    }
  }), []);
  var a = p(e, t.data), l = {
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (s) => n.onValueChange(s.target.value)
  };
  return /* @__PURE__ */ c(
    m,
    {
      ...a,
      fullWidth: !0,
      inputRef: o,
      ...l,
      error: r.status,
      helperText: r.message
    }
  );
});
export {
  T as default
};
