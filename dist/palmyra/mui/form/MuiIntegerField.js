import { jsx as o, Fragment as v } from "react/jsx-runtime";
import { forwardRef as M, useContext as h, useRef as m, useImperativeHandle as x } from "react";
import { TextField as R } from "@mui/material";
import { copyMuiOptions as D, getFieldLabel as L } from "./MuiUtil.js";
import { FieldManagerContext as O } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import V from "./FieldDecorator.js";
const p = M(function(e, u) {
  const f = h(O), i = u || m(null), n = f(e, "integer", i), { mutateOptions: g, setMutateOptions: r } = n, s = n.error, l = n.eventListeners, c = m(null), F = e.variant || "standard", C = e.autoFocus || !1;
  x(i, () => ({
    focus() {
      c.current.focus();
    },
    isValid() {
      return !s.status;
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
      r((a) => ({ ...a, visible: t }));
    },
    setRequired(t) {
      r((a) => ({ ...a, required: t }));
    },
    setReadOnly(t) {
      r((a) => ({ ...a, readonly: t }));
    },
    setAttribute(t) {
      r((a) => ({ ...a, ...t }));
    }
  }), [n]);
  var d = D(e, n.data, e.label);
  e.readonly && (d.inputProps = { readOnly: !0 });
  var b = {
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (t) => l.onValueChange(t.target.value.replace(/\D/g, ""))
  };
  return /* @__PURE__ */ o(v, { children: g.visible && /* @__PURE__ */ o(
    V,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        R,
        {
          ...d,
          variant: F,
          fullWidth: !0,
          inputRef: c,
          ...b,
          error: s.status,
          helperText: s.message,
          autoFocus: C
        }
      )
    }
  ) });
});
export {
  p as default
};
