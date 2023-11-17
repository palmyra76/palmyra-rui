import { jsx as i } from "react/jsx-runtime";
import { forwardRef as d, useContext as C, useRef as c, useImperativeHandle as g } from "react";
import { TextField as x } from "@mui/material";
import { copyMuiOptions as F } from "./MuiUtil.js";
import { FieldManagerContext as b } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import v from "./FieldDecorator.js";
const y = d(function(e, o) {
  const m = C(b), l = o || c(null), t = m(e, "string", l), r = t.error, n = t.eventListeners, s = c(null);
  g(l, () => ({
    focus() {
      s.current.focus();
    },
    isValid() {
      return !r.status;
    },
    assignAttribute(a) {
      s.current.assignAttribute(a);
    }
  }), []);
  var u = F(e, t.data, e.label);
  e.readonly && (u.inputProps = { readOnly: !0 });
  var f = {
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (a) => n.onValueChange(a.target.value)
  };
  return /* @__PURE__ */ i(
    v,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ i(
        x,
        {
          minRows: 2,
          maxRows: 5,
          fullWidth: !0,
          multiline: !0,
          ...u,
          inputRef: s,
          ...f,
          error: r.status,
          helperText: r.message
        }
      )
    }
  );
});
export {
  y as default
};
