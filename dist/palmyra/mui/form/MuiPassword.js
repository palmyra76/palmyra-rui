import { jsx as r } from "react/jsx-runtime";
import { forwardRef as g, useContext as b, useRef as d, useState as F, useImperativeHandle as h } from "react";
import { IconButton as x, TextField as p } from "@mui/material";
import { copyMuiOptions as w } from "./MuiUtil.js";
import { FieldManagerContext as v } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import y from "./FieldDecorator.js";
import { Visibility as M, VisibilityOff as P } from "@mui/icons-material";
const T = g(function(t, i) {
  const m = b(v), u = i || d(null), [c, f] = F(!1), s = m(t, "string", u), n = s.error, o = s.eventListeners, a = d(null);
  h(u, () => ({
    focus() {
      a.current.focus();
    },
    isValid() {
      return !n.status;
    },
    assignAttribute(e) {
      a.current.assignAttribute(e);
    },
    clear() {
      s.setData("");
    },
    setValue(e) {
      s.setData(e);
    }
  }), []);
  var l = w(t, s.data, t.label);
  t.readonly ? l.inputProps = { readOnly: !0 } : l.InputProps = {
    endAdornment: /* @__PURE__ */ r(x, { onClick: () => f((e) => !e), children: c ? /* @__PURE__ */ r(M, {}) : /* @__PURE__ */ r(P, {}) })
  };
  var C = {
    onBlur: o.onBlur,
    onFocus: o.onFocus,
    onChange: (e) => o.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ r(
    y,
    {
      label: t.title,
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ r(
        p,
        {
          ...l,
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
  T as default
};
