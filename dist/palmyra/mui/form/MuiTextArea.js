import { jsx as l } from "react/jsx-runtime";
import { forwardRef as c, useContext as f, useRef as m, useImperativeHandle as d } from "react";
import { TextField as g } from "@mui/material";
import { copyMuiOptions as p } from "./MuiUtil.js";
import { FieldManagerContext as x } from "../../layout/flexiLayout/FlexiLayoutContext.js";
const T = c(function(e, u) {
  const t = f(x)(e, "string"), r = t.error, n = t.eventListeners, o = m(null);
  d(u, () => ({
    focus() {
      o.current.focus();
    },
    isValid() {
      return !r.status;
    },
    assignAttribute(a) {
      o.current.assignAttribute(a);
    }
  }), []);
  var s = p(e, t.data);
  e.readonly && (s.inputProps = { readOnly: !0 });
  var i = {
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (a) => n.onValueChange(a.target.value)
  };
  return /* @__PURE__ */ l(
    g,
    {
      minRows: 2,
      maxRows: 5,
      fullWidth: !0,
      multiline: !0,
      ...s,
      inputRef: o,
      ...i,
      error: r.status,
      helperText: r.message
    }
  );
});
export {
  T as default
};
