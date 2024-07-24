import { jsx as r, Fragment as v } from "react/jsx-runtime";
import { forwardRef as x, useContext as h, useRef as f, useImperativeHandle as M } from "react";
import { TextField as R } from "@mui/material";
import { copyMuiOptions as D, getFieldLabel as L } from "./MuiUtil.js";
import { FieldManagerContext as O } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import V from "./FieldDecorator.js";
const A = x(function(a, u) {
  const g = h(O), i = u || f(null), s = g(a, "string", i), { mutateOptions: c, setMutateOptions: n } = s, l = s.error, o = s.eventListeners, d = f(null), F = a.variant || "standard", C = a.autoFocus || !1;
  M(i, () => ({
    focus() {
      d.current.focus();
    },
    isValid() {
      return !l.status;
    },
    getValue() {
      return s.getData();
    },
    clear() {
      s.setData("", !0);
    },
    setValue(e, t = !1) {
      s.setData(e, t);
    },
    setVisible(e) {
      console.log("hello"), n((t) => ({ ...t, visible: e }));
    },
    setRequired(e) {
      n((t) => ({ ...t, required: e }));
    },
    setReadOnly(e) {
      n((t) => ({ ...t, readonly: e }));
    },
    setDisabled(e) {
      n((t) => ({ ...t, disabled: e }));
    },
    setAttribute(e) {
      n((t) => ({ ...t, ...e }));
    }
  }), [s]);
  var m = D(a, s.data, a.label, c), b = {
    onBlur: o.onBlur,
    onFocus: o.onFocus,
    onChange: (e) => {
      m.readOnly || o.onValueChange(e.target.value);
    }
  };
  return /* @__PURE__ */ r(v, { children: c.visible && /* @__PURE__ */ r(
    V,
    {
      label: L(a),
      customContainerClass: a.customContainerClass,
      colspan: a.colspan,
      customFieldClass: a.customFieldClass,
      customLabelClass: a.customLabelClass,
      children: /* @__PURE__ */ r(
        R,
        {
          ...m,
          variant: F,
          fullWidth: !0,
          inputRef: d,
          ...b,
          error: l.status,
          helperText: l.message,
          autoFocus: C
        }
      )
    }
  ) });
});
export {
  A as default
};
