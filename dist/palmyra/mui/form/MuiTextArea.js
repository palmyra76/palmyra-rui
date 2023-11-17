import { jsx as l } from "react/jsx-runtime";
import { forwardRef as c, useContext as m, useRef as d, useImperativeHandle as f } from "react";
import { TextField as g } from "@mui/material";
import { copyMuiOptions as C } from "./MuiUtil.js";
import { FieldManagerContext as x } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import F from "./FieldDecorator.js";
const w = c(function(e, i) {
  const t = m(x)(e, "string"), r = t.error, n = t.eventListeners, a = d(null);
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
    F,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        g,
        {
          minRows: 2,
          maxRows: 5,
          fullWidth: !0,
          multiline: !0,
          ...o,
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
  w as default
};
