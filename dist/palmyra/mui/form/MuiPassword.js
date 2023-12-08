import { jsx as a, Fragment as h } from "react/jsx-runtime";
import { forwardRef as x, useContext as w, useRef as d, useState as M, useImperativeHandle as V } from "react";
import { IconButton as y, TextField as P } from "@mui/material";
import { copyMuiOptions as p, getFieldLabel as L } from "./MuiUtil.js";
import { FieldManagerContext as O } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import D from "./FieldDecorator.js";
import { Visibility as R, VisibilityOff as A } from "@mui/icons-material";
const q = x(function(t, l) {
  const m = w(O), u = l || d(null), [c, f] = M(!1), s = m(t, "string", u), { mutateOptions: g, setMutateOptions: b } = s, n = s.error, o = s.eventListeners, C = t.variant || "standard", F = t.autoFocus || !1, r = d(null);
  V(u, () => ({
    focus() {
      console.log("focusing"), r.current.focus();
    },
    isValid() {
      return !n.status;
    },
    getValue() {
      return s.getData();
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
  }), [s]);
  var i = p(t, s.data, t.label);
  t.readonly ? i.inputProps = { readOnly: !0 } : i.InputProps = {
    endAdornment: /* @__PURE__ */ a(y, { onClick: () => f((e) => !e), children: c ? /* @__PURE__ */ a(R, {}) : /* @__PURE__ */ a(A, {}) })
  };
  var v = {
    onBlur: o.onBlur,
    onFocus: o.onFocus,
    onChange: (e) => o.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ a(h, { children: g.visible && /* @__PURE__ */ a(
    D,
    {
      label: L(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ a(
        P,
        {
          ...i,
          variant: C,
          type: c ? "text" : "password",
          fullWidth: !0,
          inputRef: r,
          ...v,
          error: n.status,
          autoFocus: F,
          helperText: n.message
        }
      )
    }
  ) });
});
export {
  q as default
};
