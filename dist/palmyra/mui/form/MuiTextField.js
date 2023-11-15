import { jsx as l } from "react/jsx-runtime";
import { forwardRef as c, useContext as f, useRef as d, useImperativeHandle as g } from "react";
import { TextField as m } from "@mui/material";
import { copyMuiOptions as p } from "./MuiUtil.js";
import { FieldManagerContext as x } from "../../layout/flexiLayout/FlexiLayoutContext.js";
const R = c(function(e, a) {
  const t = f(x)(e, "string"), r = t.error, n = t.eventListeners, o = d(null);
  g(a, () => ({
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
  var i = p(e, t.data, e.label), u = {
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (s) => n.onValueChange(s.target.value)
  };
  return /* @__PURE__ */ l(
    m,
    {
      ...i,
      fullWidth: !0,
      inputRef: o,
      ...u,
      error: r.status,
      helperText: r.message
    }
  );
});
export {
  R as default
};
