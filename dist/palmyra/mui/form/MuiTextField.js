import { jsx as o, Fragment as v } from "react/jsx-runtime";
import { forwardRef as x, useContext as M, useRef as f, useImperativeHandle as h } from "react";
import { TextField as R } from "@mui/material";
import { copyMuiOptions as D, getFieldLabel as L } from "./MuiUtil.js";
import { FieldManagerContext as O } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import V from "./FieldDecorator.js";
const A = x(function(a, u) {
  const F = M(O), i = u || f(null), s = F(a, "string", i), { mutateOptions: c, setMutateOptions: n } = s, r = s.error, l = s.eventListeners, d = f(null), g = a.variant || "standard", C = a.autoFocus || !1;
  h(i, () => ({
    focus() {
      d.current.focus();
    },
    isValid() {
      return !r.status;
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
      n((t) => ({ ...t, visible: e }));
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
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (e) => {
      m.readOnly || l.onValueChange(e.target.value);
    }
  };
  return /* @__PURE__ */ o(v, { children: c.visible && /* @__PURE__ */ o(
    V,
    {
      label: L(a),
      customContainerClass: a.customContainerClass,
      colspan: a.colspan,
      customFieldClass: a.customFieldClass,
      customLabelClass: a.customLabelClass,
      children: /* @__PURE__ */ o(
        R,
        {
          ...m,
          variant: g,
          fullWidth: !0,
          inputRef: d,
          ...b,
          error: r.status,
          helperText: r.message,
          autoFocus: C
        }
      )
    }
  ) });
});
export {
  A as default
};
