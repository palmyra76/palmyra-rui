import { jsx as l } from "react/jsx-runtime";
import { forwardRef as c, useContext as f, useRef as m, useImperativeHandle as g } from "react";
import { TextField as d } from "@mui/material";
import { copyMuiOptions as p } from "./MuiUtil.js";
import { FieldManagerContext as x } from "../../layout/flexiLayout/FlexiLayoutContext.js";
const T = c(function(s, a) {
  const e = f(x)(s, "string"), t = e.error, r = e.eventListeners, n = m(null);
  g(a, () => ({
    focus() {
      n.current.focus();
    },
    isValid() {
      return !t.status;
    },
    assignAttribute(o) {
      n.current.assignAttribute(o);
    }
  }), []);
  var u = p(s, e.data), i = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (o) => r.onValueChange(o.target.value)
  };
  return /* @__PURE__ */ l(
    d,
    {
      minRows: 2,
      maxRows: 5,
      fullWidth: !0,
      multiline: !0,
      ...u,
      inputRef: n,
      ...i,
      error: t.status,
      helperText: t.message
    }
  );
});
export {
  T as default
};
