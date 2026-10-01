import { jsx as n, Fragment as x } from "react/jsx-runtime";
import { forwardRef as w, useContext as y, useRef as f, useState as M, useImperativeHandle as V } from "react";
import { IconButton as O, TextField as P } from "@mui/material";
import { copyMuiOptions as R, getFieldLabel as p } from "./MuiUtil.js";
import { FieldManagerContext as L } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import D from "./FieldDecorator.js";
import { Visibility as B, VisibilityOff as I } from "@mui/icons-material";
const z = w(function(e, u) {
  const g = y(L), c = u || f(null), [d, C] = M(!1), a = g(e, "string", c), { mutateOptions: F, setMutateOptions: o } = a, r = a.error, l = a.eventListeners, b = e.variant || "standard", h = e.autoFocus || !1, m = f(null);
  V(c, () => ({
    focus() {
      m.current.focus();
    },
    isValid() {
      return !r.status;
    },
    getValue() {
      return a.getData();
    },
    clear() {
      a.setData("", !0);
    },
    setValue(t, s = !1) {
      a.setData(t, s);
    },
    setVisible(t) {
      o((s) => ({ ...s, visible: t }));
    },
    setRequired(t) {
      o((s) => ({ ...s, required: t }));
    },
    setReadOnly(t) {
      o((s) => ({ ...s, readonly: t }));
    },
    setAttribute(t) {
      o((s) => ({ ...s, ...t }));
    }
  }), [a]);
  var i = R(e, a.data, e.label);
  e.readonly ? i.slotProps = { htmlInput: { readOnly: !0 } } : i.slotProps = {
    input: {
      endAdornment: /* @__PURE__ */ n(O, { onClick: () => C((t) => !t), children: d ? /* @__PURE__ */ n(B, {}) : /* @__PURE__ */ n(I, {}) })
    }
  };
  var v = {
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (t) => l.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ n(x, { children: F.visible && /* @__PURE__ */ n(
    D,
    {
      label: p(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        P,
        {
          ...i,
          variant: b,
          type: d ? "text" : "password",
          fullWidth: !0,
          inputRef: m,
          ...v,
          error: r.status,
          autoFocus: h,
          helperText: r.message
        }
      )
    }
  ) });
});
export {
  z as default
};
