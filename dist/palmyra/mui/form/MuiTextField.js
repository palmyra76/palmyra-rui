import { jsx as l } from "react/jsx-runtime";
import { forwardRef as c, useContext as f, useRef as d, useImperativeHandle as g } from "react";
import { TextField as m } from "@mui/material";
import { copyMuiOptions as p } from "./MuiUtil.js";
import { FieldManagerContext as x } from "../../layout/flexiLayout/FlexiLayoutContext.js";
const y = c(function(e, s) {
  const t = f(x)(e, "string"), r = t.error, n = t.eventListeners, o = d(null);
  g(s, () => ({
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
  var i = p(e, t.data, e.label);
  e.readonly && (i.inputProps = { readOnly: !0 });
  var u = {
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (a) => n.onValueChange(a.target.value)
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
  y as default
};
