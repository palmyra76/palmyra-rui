import { jsx as u, Fragment as b } from "react/jsx-runtime";
import { forwardRef as v, useContext as x, useRef as d, useImperativeHandle as R } from "react";
import { TextField as M } from "@mui/material";
import { copyMuiOptions as h, getFieldLabel as L } from "./MuiUtil.js";
import { FieldManagerContext as O } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import V from "./FieldDecorator.js";
const j = v(function(e, i) {
  const f = x(O), c = i || d(null), s = f(e, "string", c), { mutateOptions: g, setMutateOptions: n } = s, r = s.error, o = s.eventListeners, C = e.autoFocus || !1, m = d(null);
  R(c, () => ({
    focus() {
      m.current.focus();
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
  var l = h(e, s.data, e.label);
  e.readonly && (l.inputProps = { readOnly: !0 });
  var F = {
    onBlur: o.onBlur,
    onFocus: o.onFocus,
    onChange: (t) => o.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ u(b, { children: g.visible && /* @__PURE__ */ u(
    V,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ u(
        M,
        {
          ...l,
          variant: e.variant || "standard",
          minRows: 2,
          maxRows: 5,
          fullWidth: !0,
          multiline: !0,
          autoFocus: C,
          ...l,
          inputRef: m,
          ...F,
          error: r.status,
          helperText: r.message
        }
      )
    }
  ) });
});
export {
  j as default
};
