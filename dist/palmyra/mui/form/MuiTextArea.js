import { jsx as c } from "react/jsx-runtime";
import { forwardRef as f, useRef as m, useImperativeHandle as g } from "react";
import { TextField as d } from "@mui/material";
import { copyMuiOptions as p } from "./MuiUtil.js";
const A = f(function(e, u) {
  const { getFieldManager: a } = e, t = a(e, "string"), r = t.error, n = t.eventListeners, o = m(null);
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
  var i = p(e, t.data), l = {
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (s) => n.onValueChange(s.target.value)
  };
  return /* @__PURE__ */ c(
    d,
    {
      minRows: 2,
      maxRows: 5,
      fullWidth: !0,
      multiline: !0,
      ...i,
      inputRef: o,
      ...l,
      error: r.status,
      helperText: r.message
    }
  );
});
export {
  A as default
};
