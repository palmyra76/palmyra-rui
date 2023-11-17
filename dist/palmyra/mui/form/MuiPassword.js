import { jsx as s } from "react/jsx-runtime";
import { forwardRef as m, useState as f, useContext as g, useRef as C, useImperativeHandle as F } from "react";
import { IconButton as b, TextField as h } from "@mui/material";
import { copyMuiOptions as x } from "./MuiUtil.js";
import { FieldManagerContext as p } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import w from "./FieldDecorator.js";
import { Visibility as M, VisibilityOff as v } from "@mui/icons-material";
const T = m(function(e, u) {
  const [l, c] = f(!1), r = g(p)(e, "string"), o = r.error, n = r.eventListeners, a = C(null);
  F(u, () => ({
    focus() {
      a.current.focus();
    },
    isValid() {
      return !o.status;
    },
    assignAttribute(t) {
      a.current.assignAttribute(t);
    }
  }), []);
  var i = x(e, r.data, e.label);
  e.readonly ? i.inputProps = { readOnly: !0 } : i.InputProps = {
    endAdornment: /* @__PURE__ */ s(b, { onClick: () => c((t) => !t), children: l ? /* @__PURE__ */ s(M, {}) : /* @__PURE__ */ s(v, {}) })
  };
  var d = {
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (t) => n.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ s(
    w,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ s(
        h,
        {
          ...i,
          type: l ? "text" : "password",
          fullWidth: !0,
          inputRef: a,
          ...d,
          error: o.status,
          helperText: o.message
        }
      )
    }
  );
});
export {
  T as default
};
