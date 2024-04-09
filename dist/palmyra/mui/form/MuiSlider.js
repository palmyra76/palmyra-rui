import { jsx as l, Fragment as A } from "react/jsx-runtime";
import { forwardRef as V, useContext as B, useRef as F, useImperativeHandle as T } from "react";
import { Slider as j } from "@mui/material";
import { copyMuiOptions as k, getFieldLabel as q } from "./MuiUtil.js";
import { FieldManagerContext as H } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import I from "./FieldDecorator.js";
const N = V(function(e, u) {
  var C, v;
  const h = B(H), c = u || F(null), b = e.range ? "sliderRange" : "slider", a = h(e, b, c), { mutateOptions: M, setMutateOptions: r } = a, o = a.error, s = a.eventListeners, d = F(null), x = e.variant || "standard", y = e.autoFocus || !1, m = e.minDistance || 5, D = ((C = e.fieldProps) == null ? void 0 : C.min) || 0, R = ((v = e.fieldProps) == null ? void 0 : v.max) || 100;
  T(c, () => ({
    focus() {
      d.current.focus();
    },
    isValid() {
      return !o.status;
    },
    getValue() {
      return a.getData();
    },
    clear() {
      a.setData("", !0);
    },
    setValue(n, t = !1) {
      a.setData(n, t);
    },
    setVisible(n) {
      r((t) => ({ ...t, visible: n }));
    },
    setRequired(n) {
      r((t) => ({ ...t, required: n }));
    },
    setReadOnly(n) {
      r((t) => ({ ...t, readonly: n }));
    },
    setAttribute(n) {
      r((t) => ({ ...t, ...n }));
    }
  }), [a]);
  const f = (n) => {
    if (n)
      return n;
    if (e.range)
      return e.range ? [D, R] : 0;
  };
  var g = k(e, f(a.data), e.label);
  e.readonly && (g.inputProps = { readOnly: !0 });
  const L = (n, t, P) => {
    if (!Array.isArray(t)) {
      s.onValueChange(t);
      return;
    }
    const i = f(a.data), S = P === 0 ? [Math.min(t[0], i[1] - m), i[1]] : [i[0], Math.max(t[1], i[0] + m)];
    s.onValueChange(S);
  };
  var O = {
    onBlur: s.onBlur,
    onFocus: s.onFocus,
    onChange: L
  };
  return /* @__PURE__ */ l(A, { children: M.visible && /* @__PURE__ */ l(
    I,
    {
      label: q(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        j,
        {
          ...g,
          variant: x,
          fullWidth: !0,
          inputRef: d,
          ...O,
          error: o.status,
          helperText: o.message,
          autoFocus: y
        }
      )
    }
  ) });
});
export {
  N as default
};
