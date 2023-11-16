import { jsx as l } from "react/jsx-runtime";
import { forwardRef as c, useContext as m, useRef as d, useImperativeHandle as f } from "react";
import { TextField as g } from "@mui/material";
import { copyMuiOptions as C } from "./MuiUtil.js";
import { FieldManagerContext as x } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import F from "./FieldDecorator.js";
const w = c(function(e, i) {
  const t = m(x)(e, "string"), r = t.error, n = t.eventListeners, o = d(null);
  f(i, () => ({
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
  var a = C(e, t.data);
  e.readonly && (a.inputProps = { readOnly: !0 });
  var u = {
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (s) => n.onValueChange(s.target.value)
  };
  return console.log(e), /* @__PURE__ */ l(
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
          ...a,
          inputRef: o,
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
