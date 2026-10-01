import { jsx as o, Fragment as v } from "react/jsx-runtime";
import { forwardRef as h, useContext as M, useRef as m, useImperativeHandle as x } from "react";
import { TextField as R } from "@mui/material";
import { copyMuiOptions as D, getFieldLabel as L } from "./MuiUtil.js";
import { FieldManagerContext as O } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import V from "./FieldDecorator.js";
const p = h(function(e, u) {
  const f = M(O), i = u || m(null), n = f(e, "integer", i), { mutateOptions: g, setMutateOptions: s } = n, r = n.error, l = n.eventListeners, c = m(null), F = e.variant || "standard", C = e.autoFocus || !1;
  x(i, () => ({
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
      s((a) => ({ ...a, visible: t }));
    },
    setRequired(t) {
      s((a) => ({ ...a, required: t }));
    },
    setReadOnly(t) {
      s((a) => ({ ...a, readonly: t }));
    },
    setAttribute(t) {
      s((a) => ({ ...a, ...t }));
    }
  }), [n]);
  var d = D(e, n.data, e.label);
  e.readonly && (d.slotProps = { htmlInput: { readOnly: !0 } });
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
          error: r.status,
          helperText: r.message,
          autoFocus: C
        }
      )
    }
  ) });
});
export {
  p as default
};
