import { jsx as o, Fragment as V, jsxs as j } from "react/jsx-runtime";
import { forwardRef as B, useContext as T, useRef as v, useImperativeHandle as k } from "react";
import { Slider as q } from "@mui/material";
import { copyMuiOptions as H, getFieldLabel as I } from "./MuiUtil.js";
import { FieldManagerContext as W } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import _ from "./FieldDecorator.js";
const U = B(function(e, u) {
  var C, h;
  const b = T(W), c = u || v(null), F = e.range ? "sliderRange" : "slider", a = b(e, F, c), { mutateOptions: x, setMutateOptions: s } = a, l = a.error, r = a.eventListeners, d = v(null), M = e.variant || "standard", y = e.autoFocus || !1, m = e.minDistance || 5, D = e.label || "", R = ((C = e.fieldProps) == null ? void 0 : C.min) || 0, L = ((h = e.fieldProps) == null ? void 0 : h.max) || 100;
  k(c, () => ({
    focus() {
      d.current.focus();
    },
    isValid() {
      return !l.status;
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
      s((t) => ({ ...t, visible: n }));
    },
    setRequired(n) {
      s((t) => ({ ...t, required: n }));
    },
    setReadOnly(n) {
      s((t) => ({ ...t, readonly: n }));
    },
    setAttribute(n) {
      s((t) => ({ ...t, ...n }));
    }
  }), [a]);
  const f = (n) => {
    if (n)
      return n;
    if (e.range)
      return e.range ? [R, L] : 0;
  };
  var g = H(e, f(a.data), e.label);
  e.readonly && (g.inputProps = { readOnly: !0 });
  const O = (n, t, P) => {
    if (!Array.isArray(t)) {
      r.onValueChange(t);
      return;
    }
    const i = f(a.data), S = P === 0 ? [Math.min(t[0], i[1] - m), i[1]] : [i[0], Math.max(t[1], i[0] + m)];
    r.onValueChange(S);
  };
  var A = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: O
  };
  return /* @__PURE__ */ o(V, { children: x.visible && /* @__PURE__ */ o(
    _,
    {
      label: I(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ j("div", { style: { width: "100%", textAlign: "center" }, children: [
        D,
        /* @__PURE__ */ o(
          q,
          {
            ...g,
            variant: M,
            fullWidth: !0,
            inputRef: d,
            ...A,
            error: l.status,
            helperText: l.message,
            autoFocus: y
          }
        )
      ] })
    }
  ) });
});
export {
  U as default
};
