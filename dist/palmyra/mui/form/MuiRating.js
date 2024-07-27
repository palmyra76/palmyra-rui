import { jsx as s, Fragment as O } from "react/jsx-runtime";
import { forwardRef as h, useContext as I, useRef as f, useImperativeHandle as L } from "react";
import { Rating as V } from "@mui/material";
import { copyMuiOptions as D, getFieldLabel as P } from "./MuiUtil.js";
import { FieldManagerContext as z } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import B from "./FieldDecorator.js";
import { Star as S, StarOutline as T } from "@mui/icons-material";
const J = h(function(e, r) {
  var d;
  const g = I(z), u = r || f(null), n = g(e, "string", u), { mutateOptions: C, setMutateOptions: i } = n, o = n.error, l = n.eventListeners, c = f(null), F = e.variant || "standard", b = e.autoFocus || !1, v = e.precision || 1, y = e.max || 5, x = e.icon || S, R = e.emptyIcon || T;
  L(u, () => ({
    focus() {
      c.current.focus();
    },
    isValid() {
      return !o.status;
    },
    getValue() {
      return n.getData();
    },
    clear() {
      n.setData("", !0);
    },
    setValue(t, a = !1) {
      n.setData(t, a);
    },
    setVisible(t) {
      i((a) => ({ ...a, visible: t }));
    },
    setRequired(t) {
      i((a) => ({ ...a, required: t }));
    },
    setReadOnly(t) {
      i((a) => ({ ...a, readonly: t }));
    },
    setAttribute(t) {
      i((a) => ({ ...a, ...t }));
    }
  }), [n]);
  var m = D(e, n.data, e.label);
  e.readonly && (m.inputProps = { readOnly: !0 });
  var M = {
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (t) => l.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ s(O, { children: C.visible && /* @__PURE__ */ s(
    B,
    {
      label: P(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ s(
        V,
        {
          ...m,
          variant: F,
          precision: v,
          readOnly: e.readonly,
          disabled: e.disabled,
          inputRef: c,
          size: (d = e == null ? void 0 : e.fieldProps) == null ? void 0 : d.size,
          icon: /* @__PURE__ */ s(x, {}),
          emptyIcon: /* @__PURE__ */ s(R, {}),
          max: y,
          ...M,
          error: o.status,
          helperText: o.message,
          autoFocus: b
        }
      )
    }
  ) });
});
export {
  J as default
};
