import { jsx as l } from "react/jsx-runtime";
import { forwardRef as c, useContext as m, useRef as d, useImperativeHandle as f } from "react";
import { TextField as g } from "@mui/material";
import { copyMuiOptions as C } from "./MuiUtil.js";
import { FieldManagerContext as F } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import x from "./FieldDecorator.js";
const p = c(function(e, i) {
  const t = m(F)(e, "string"), r = t.error, n = t.eventListeners, a = d(null);
  f(i, () => ({
    focus() {
      a.current.focus();
    },
    isValid() {
      return !r.status;
    },
    assignAttribute(s) {
      a.current.assignAttribute(s);
    }
  }), []);
  var o = C(e, t.data, e.label);
  e.readonly && (o.inputProps = { readOnly: !0 });
  var u = {
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (s) => n.onValueChange(s.target.value)
  };
  return /* @__PURE__ */ l(
    x,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        g,
        {
          ...o,
          fullWidth: !0,
          inputRef: a,
          ...u,
          error: r.status,
          helperText: r.message
        }
      )
    }
  );
});
export {
  p as default
};
