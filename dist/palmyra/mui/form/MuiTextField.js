import { jsx as o, Fragment as v } from "react/jsx-runtime";
import { forwardRef as x, useContext as M, useRef as m, useImperativeHandle as h } from "react";
import { TextField as R } from "@mui/material";
import { copyMuiOptions as L, getFieldLabel as O } from "./MuiUtil.js";
import { FieldManagerContext as V } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import y from "./FieldDecorator.js";
const w = x(function(e, u) {
  const f = M(V), i = u || m(null), s = f(e, "string", i), { mutateOptions: F, setMutateOptions: n } = s, r = s.error, l = s.eventListeners, c = m(null), g = e.variant || "standard", C = e.autoFocus || !1;
  h(i, () => ({
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
  var d = L(e, s.data, e.label);
  e.readonly && (d.inputProps = { readOnly: !0 });
  var b = {
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (t) => l.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ o(v, { children: F.visible && /* @__PURE__ */ o(
    y,
    {
      label: O(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        R,
        {
          ...d,
          variant: g,
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
  w as default
};
