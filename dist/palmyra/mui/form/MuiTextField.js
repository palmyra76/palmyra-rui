import { jsx as c } from "react/jsx-runtime";
import { forwardRef as f, useRef as d, useImperativeHandle as g } from "react";
import { TextField as m } from "@mui/material";
import { copyMuiOptions as p } from "./MuiUtil.js";
const h = f(function(e, u) {
  const { getFieldManager: a } = e, t = a(e, "string"), r = t.error, n = t.eventListeners, o = d(null);
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
  var i = p(e, t.data, e.label), l = {
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (s) => n.onValueChange(s.target.value)
  };
  return /* @__PURE__ */ c(
    m,
    {
      ...i,
      fullWidth: !0,
      inputRef: o,
      ...l,
      error: r.status,
      helperText: r.message
    }
  );
});
export {
  h as default
};
