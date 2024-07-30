import { jsx as o, Fragment as v } from "react/jsx-runtime";
import { forwardRef as M, useContext as h, useRef as f, useImperativeHandle as x } from "react";
import { TextField as O } from "@mui/material";
import { copyMuiOptions as R, getFieldLabel as D } from "./MuiUtil.js";
import { FieldManagerContext as L } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import V from "./FieldDecorator.js";
const q = M(function(a, u) {
  const F = h(L), i = u || f(null), s = F(a, "numbersOnly", i), { mutateOptions: c, setMutateOptions: n } = s, r = s.error, l = s.eventListeners, d = f(null), b = a.variant || "standard", g = a.autoFocus || !1;
  x(i, () => ({
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
  var m = R(a, s.data, a.label, c), C = {
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (e) => {
      m.readOnly || l.onValueChange(e.target.value.replace(/[^\d\.\+\-]/g, ""));
    }
  };
  return /* @__PURE__ */ o(v, { children: c.visible && /* @__PURE__ */ o(
    V,
    {
      label: D(a),
      customContainerClass: a.customContainerClass,
      colspan: a.colspan,
      customFieldClass: a.customFieldClass,
      customLabelClass: a.customLabelClass,
      children: /* @__PURE__ */ o(
        O,
        {
          ...m,
          variant: b,
          fullWidth: !0,
          inputRef: d,
          ...C,
          error: r.status,
          helperText: r.message,
          autoFocus: g
        }
      )
    }
  ) });
});
export {
  q as default
};
