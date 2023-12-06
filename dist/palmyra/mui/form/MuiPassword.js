import { jsx as n, Fragment as h } from "react/jsx-runtime";
import { forwardRef as x, useContext as w, useRef as d, useState as M, useImperativeHandle as y } from "react";
import { IconButton as P, TextField as V } from "@mui/material";
import { copyMuiOptions as p, getFieldLabel as L } from "./MuiUtil.js";
import { FieldManagerContext as O } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import R from "./FieldDecorator.js";
import { Visibility as A, VisibilityOff as B } from "@mui/icons-material";
const q = x(function(t, l) {
  const m = w(O), u = l || d(null), [c, f] = M(!1), s = m(t, "string", u), { mutateOptions: g, setMutateOptions: b } = s, o = s.error, a = s.eventListeners, C = t.variant || "standard", F = t.autoFocus || !1, r = d(null);
  y(u, () => ({
    focus() {
      console.log("focusing"), r.current.focus();
    },
    isValid() {
      return !o.status;
    },
    assignAttribute(e) {
      r.current.assignAttribute(e);
    },
    clear() {
      s.setData("");
    },
    setValue(e) {
      s.setData(e);
    },
    setVisible(e) {
      b({ visible: e });
    }
  }), []);
  var i = p(t, s.data, t.label);
  t.readonly ? i.inputProps = { readOnly: !0 } : i.InputProps = {
    endAdornment: /* @__PURE__ */ n(P, { onClick: () => f((e) => !e), children: c ? /* @__PURE__ */ n(A, {}) : /* @__PURE__ */ n(B, {}) })
  };
  var v = {
    onBlur: a.onBlur,
    onFocus: a.onFocus,
    onChange: (e) => a.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ n(h, { children: g.visible && /* @__PURE__ */ n(
    R,
    {
      label: L(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ n(
        V,
        {
          ...i,
          variant: C,
          type: c ? "text" : "password",
          fullWidth: !0,
          inputRef: r,
          ...v,
          error: o.status,
          autoFocus: F,
          helperText: o.message
        }
      )
    }
  ) });
});
export {
  q as default
};
