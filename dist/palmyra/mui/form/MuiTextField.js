import { jsx as i } from "react/jsx-runtime";
import { forwardRef as f, useContext as C, useRef as c, useImperativeHandle as g } from "react";
import { TextField as F } from "@mui/material";
import { copyMuiOptions as x } from "./MuiUtil.js";
import { FieldManagerContext as b } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import v from "./FieldDecorator.js";
const V = f(function(e, o) {
  const m = C(b), l = o || c(null), t = m(e, "string", l), a = t.error, n = t.eventListeners, s = c(null);
  g(l, () => ({
    focus() {
      s.current.focus();
    },
    isValid() {
      return !a.status;
    },
    assignAttribute(r) {
      s.current.assignAttribute(r);
    },
    clear() {
      t.setData("");
    },
    setValue(r) {
      t.setData(r);
    }
  }), []);
  var u = x(e, t.data, e.label);
  e.readonly && (u.inputProps = { readOnly: !0 });
  var d = {
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (r) => n.onValueChange(r.target.value)
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
        F,
        {
          ...u,
          fullWidth: !0,
          inputRef: s,
          ...d,
          error: a.status,
          helperText: a.message
        }
      )
    }
  );
});
export {
  V as default
};
