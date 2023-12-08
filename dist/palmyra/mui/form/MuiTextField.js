import { jsx as o, Fragment as b } from "react/jsx-runtime";
import { forwardRef as v, useContext as x, useRef as c, useImperativeHandle as M } from "react";
import { TextField as h } from "@mui/material";
import { copyMuiOptions as L, getFieldLabel as V } from "./MuiUtil.js";
import { FieldManagerContext as D } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import O from "./FieldDecorator.js";
const k = v(function(t, l) {
  const d = x(D), i = l || c(null), e = d(t, "string", i), { mutateOptions: m, setMutateOptions: f } = e, s = e.error, n = e.eventListeners, r = c(null), g = t.variant || "standard", F = t.autoFocus || !1;
  M(i, () => ({
    focus() {
      r.current.focus();
    },
    isValid() {
      return !s.status;
    },
    getValue() {
      return e.getData();
    },
    assignAttribute(a) {
      r.current.assignAttribute(a);
    },
    clear() {
      e.setData("");
    },
    setValue(a) {
      e.setData(a);
    },
    setVisible(a) {
      f({ visible: a });
    }
  }), [e]);
  var u = L(t, e.data, t.label);
  t.readonly && (u.inputProps = { readOnly: !0 });
  var C = {
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (a) => n.onValueChange(a.target.value)
  };
  return /* @__PURE__ */ o(b, { children: m.visible && /* @__PURE__ */ o(
    O,
    {
      label: V(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ o(
        h,
        {
          ...u,
          variant: g,
          fullWidth: !0,
          inputRef: r,
          ...C,
          error: s.status,
          helperText: s.message,
          autoFocus: F
        }
      )
    }
  ) });
});
export {
  k as default
};
