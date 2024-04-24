import { jsx as s, Fragment as M } from "react/jsx-runtime";
import { forwardRef as O, useContext as h, useRef as d, useImperativeHandle as I } from "react";
import { Rating as L } from "@mui/material";
import { copyMuiOptions as V, getFieldLabel as D } from "./MuiUtil.js";
import { FieldManagerContext as z } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import B from "./FieldDecorator.js";
import { Star as P, StarOutline as S } from "@mui/icons-material";
const G = O(function(e, l) {
  const f = h(z), u = l || d(null), n = f(e, "string", u), { mutateOptions: g, setMutateOptions: o } = n, r = n.error, i = n.eventListeners, c = d(null), C = e.variant || "standard", F = e.autoFocus || !1, b = e.precision || 1, v = e.max || 5, y = e.icon || P, x = e.emptyIcon || S;
  I(u, () => ({
    focus() {
      c.current.focus();
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
    setValue(t, a = !1) {
      n.setData(t, a);
    },
    setVisible(t) {
      o((a) => ({ ...a, visible: t }));
    },
    setRequired(t) {
      o((a) => ({ ...a, required: t }));
    },
    setReadOnly(t) {
      o((a) => ({ ...a, readonly: t }));
    },
    setAttribute(t) {
      o((a) => ({ ...a, ...t }));
    }
  }), [n]);
  var m = V(e, n.data, e.label);
  e.readonly && (m.inputProps = { readOnly: !0 });
  var R = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: (t) => i.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ s(M, { children: g.visible && /* @__PURE__ */ s(
    B,
    {
      label: D(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ s(
        L,
        {
          ...m,
          variant: C,
          precision: b,
          readOnly: e.readonly,
          disabled: e.disabled,
          inputRef: c,
          size: e.size,
          icon: /* @__PURE__ */ s(y, {}),
          emptyIcon: /* @__PURE__ */ s(x, {}),
          max: v,
          ...R,
          error: r.status,
          helperText: r.message,
          autoFocus: F
        }
      )
    }
  ) });
});
export {
  G as default
};
