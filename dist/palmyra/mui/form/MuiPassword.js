import { jsx as s } from "react/jsx-runtime";
import { forwardRef as g, useContext as b, useRef as d, useState as F, useImperativeHandle as h } from "react";
import { IconButton as x, TextField as p } from "@mui/material";
import { copyMuiOptions as w } from "./MuiUtil.js";
import { FieldManagerContext as v } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import y from "./FieldDecorator.js";
import { Visibility as M, VisibilityOff as P } from "@mui/icons-material";
const k = g(function(t, l) {
  const m = b(v), u = l || d(null), [c, f] = F(!1), r = m(t, "string", u), n = r.error, o = r.eventListeners, a = d(null);
  h(u, () => ({
    focus() {
      a.current.focus();
    },
    isValid() {
      return !n.status;
    },
    assignAttribute(e) {
      a.current.assignAttribute(e);
    }
  }), []);
  var i = w(t, r.data, t.label);
  t.readonly ? i.inputProps = { readOnly: !0 } : i.InputProps = {
    endAdornment: /* @__PURE__ */ s(x, { onClick: () => f((e) => !e), children: c ? /* @__PURE__ */ s(M, {}) : /* @__PURE__ */ s(P, {}) })
  };
  var C = {
    onBlur: o.onBlur,
    onFocus: o.onFocus,
    onChange: (e) => o.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ s(
    y,
    {
      label: t.title,
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ s(
        p,
        {
          ...i,
          type: c ? "text" : "password",
          fullWidth: !0,
          inputRef: a,
          ...C,
          error: n.status,
          helperText: n.message
        }
      )
    }
  );
});
export {
  k as default
};
