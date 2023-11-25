import { jsx as n, Fragment as v } from "react/jsx-runtime";
import { forwardRef as h, useContext as x, useRef as d, useState as p, useImperativeHandle as w } from "react";
import { IconButton as M, TextField as y } from "@mui/material";
import { copyMuiOptions as P, getFieldLabel as V } from "./MuiUtil.js";
import { FieldManagerContext as L } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import O from "./FieldDecorator.js";
import { Visibility as R, VisibilityOff as A } from "@mui/icons-material";
const W = h(function(t, l) {
  const m = x(L), u = l || d(null), [c, f] = p(!1), s = m(t, "string", u), { mutateOptions: g, setMutateOptions: b } = s, a = s.error, o = s.eventListeners, C = t.variant || "standard", r = d(null);
  w(u, () => ({
    focus() {
      console.log("focusing"), r.current.focus();
    },
    isValid() {
      return !a.status;
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
  var i = P(t, s.data, t.label);
  t.readonly ? i.inputProps = { readOnly: !0 } : i.InputProps = {
    endAdornment: /* @__PURE__ */ n(M, { onClick: () => f((e) => !e), children: c ? /* @__PURE__ */ n(R, {}) : /* @__PURE__ */ n(A, {}) })
  };
  var F = {
    onBlur: o.onBlur,
    onFocus: o.onFocus,
    onChange: (e) => o.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ n(v, { children: g.visible && /* @__PURE__ */ n(
    O,
    {
      label: V(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ n(
        y,
        {
          ...i,
          variant: C,
          type: c ? "text" : "password",
          fullWidth: !0,
          inputRef: r,
          ...F,
          error: a.status,
          helperText: a.message
        }
      )
    }
  ) });
});
export {
  W as default
};
