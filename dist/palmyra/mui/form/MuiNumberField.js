import { jsx as o, Fragment as v } from "react/jsx-runtime";
import { forwardRef as M, useContext as h, useRef as m, useImperativeHandle as x } from "react";
import { TextField as O } from "@mui/material";
import { copyMuiOptions as R, getFieldLabel as y } from "./MuiUtil.js";
import { FieldManagerContext as L } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import V from "./FieldDecorator.js";
const p = M(function(e, u) {
  const f = h(L), i = u || m(null), s = f(e, "numbersOnly", i), { mutateOptions: F, setMutateOptions: n } = s, r = s.error, l = s.eventListeners, c = m(null), g = e.variant || "standard", b = e.autoFocus || !1;
  x(i, () => ({
    focus() {
      c.current.focus();
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
    setValue(t, a = !1) {
      s.setData(t, a);
    },
    setVisible(t) {
      n((a) => ({ ...a, visible: t }));
    },
    setRequired(t) {
      n((a) => ({ ...a, required: t }));
    },
    setReadOnly(t) {
      n((a) => ({ ...a, readonly: t }));
    },
    setAttribute(t) {
      n((a) => ({ ...a, ...t }));
    }
  }), [s]);
  var d = R(e, s.data, e.label);
  e.readonly && (d.inputProps = { readOnly: !0 });
  var C = {
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (t) => l.onValueChange(t.target.value.replace(/[^\d\.\+\-]/g, ""))
  };
  return /* @__PURE__ */ o(v, { children: F.visible && /* @__PURE__ */ o(
    V,
    {
      label: y(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        O,
        {
          ...d,
          variant: g,
          fullWidth: !0,
          inputRef: c,
          ...C,
          error: r.status,
          helperText: r.message,
          autoFocus: b
        }
      )
    }
  ) });
});
export {
  p as default
};
