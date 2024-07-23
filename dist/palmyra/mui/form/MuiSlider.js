import { jsx as o, Fragment as k, jsxs as P } from "react/jsx-runtime";
import { forwardRef as V, useContext as j, useRef as h, useImperativeHandle as z } from "react";
import { Slider as B } from "@mui/material";
import { copyMuiOptions as T, getFieldLabel as q } from "./MuiUtil.js";
import { FieldManagerContext as w } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import H from "./FieldDecorator.js";
const N = V(function(e, u) {
  var C;
  const F = j(w), c = u || h(null), x = e.range ? "sliderRange" : "slider", n = F(e, x, c), { mutateOptions: y, setMutateOptions: s } = n, r = n.error, i = n.eventListeners, d = h(null), D = e.variant || "standard", M = e.autoFocus || !1, m = e.minDistance || 5, L = e.label || "", f = e.min || 0, g = e.max || 100;
  z(c, () => ({
    focus() {
      d.current.focus();
    },
    isValid() {
      return !r.status;
    },
    getValue() {
      return n.getData();
    },
    clear() {
      n.setData("", !0);
    },
    setValue(a, t = !1) {
      n.setData(a, t);
    },
    setVisible(a) {
      s((t) => ({ ...t, visible: a }));
    },
    setRequired(a) {
      s((t) => ({ ...t, required: a }));
    },
    setReadOnly(a) {
      s((t) => ({ ...t, readonly: a }));
    },
    setAttribute(a) {
      s((t) => ({ ...t, ...a }));
    }
  }), [n]);
  const b = (a) => {
    if (a)
      return a;
    if (e.range)
      return e.range ? [f, g] : 0;
  };
  var v = T(e, b(n.data), e.label);
  e.readonly && (v.inputProps = { readOnly: !0 });
  const R = (a, t, O) => {
    if (!Array.isArray(t)) {
      i.onValueChange(t);
      return;
    }
    const l = b(n.data), A = O === 0 ? [Math.min(t[0], l[1] - m), l[1]] : [l[0], Math.max(t[1], l[0] + m)];
    i.onValueChange(A);
  };
  var S = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: R
  };
  return /* @__PURE__ */ o(k, { children: y.visible && /* @__PURE__ */ o(
    H,
    {
      label: q(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ P("div", { style: { width: "100%", textAlign: "center" }, children: [
        L,
        /* @__PURE__ */ o(
          B,
          {
            ...v,
            variant: D,
            fullWidth: !0,
            inputRef: d,
            ...S,
            marks: e.marks,
            size: (C = e.fieldProps) == null ? void 0 : C.size,
            disableSwap: e.disableSwap,
            valueLabelDisplay: e.valueLabelDisplay,
            min: f,
            step: e.step,
            max: g,
            error: r.status,
            helperText: r.message,
            autoFocus: M
          }
        )
      ] })
    }
  ) });
});
export {
  N as default
};
