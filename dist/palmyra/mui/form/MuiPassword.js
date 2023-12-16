import { jsx as n, Fragment as x } from "react/jsx-runtime";
import { forwardRef as w, useContext as y, useRef as f, useState as M, useImperativeHandle as V } from "react";
import { IconButton as O, TextField as P } from "@mui/material";
import { copyMuiOptions as R, getFieldLabel as p } from "./MuiUtil.js";
import { FieldManagerContext as L } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import D from "./FieldDecorator.js";
import { Visibility as B, VisibilityOff as I } from "@mui/icons-material";
const z = w(function(t, u) {
  const g = y(L), c = u || f(null), [d, C] = M(!1), a = g(t, "string", c), { mutateOptions: F, setMutateOptions: o } = a, r = a.error, l = a.eventListeners, b = t.variant || "standard", h = t.autoFocus || !1, m = f(null);
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
    setValue(e, s = !1) {
      a.setData(e, s);
    },
    setVisible(e) {
      o((s) => ({ ...s, visible: e }));
    },
    setRequired(e) {
      o((s) => ({ ...s, required: e }));
    },
    setReadOnly(e) {
      o((s) => ({ ...s, readonly: e }));
    },
    setAttribute(e) {
      o((s) => ({ ...s, ...e }));
    }
  }), [a]);
  var i = R(t, a.data, t.label);
  t.readonly ? i.inputProps = { readOnly: !0 } : i.InputProps = {
    endAdornment: /* @__PURE__ */ n(O, { onClick: () => C((e) => !e), children: d ? /* @__PURE__ */ n(B, {}) : /* @__PURE__ */ n(I, {}) })
  };
  var v = {
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (e) => l.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ n(x, { children: F.visible && /* @__PURE__ */ n(
    D,
    {
      label: p(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
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
