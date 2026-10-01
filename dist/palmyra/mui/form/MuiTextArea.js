import { jsx as l, Fragment as b } from "react/jsx-runtime";
import { forwardRef as x, useContext as R, useRef as d, useImperativeHandle as h } from "react";
import { TextField as v } from "@mui/material";
import { copyMuiOptions as M, getFieldLabel as L } from "./MuiUtil.js";
import { FieldManagerContext as O } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import V from "./FieldDecorator.js";
const I = x(function(t, u) {
  const f = R(O), i = u || d(null), s = f(t, "string", i), { mutateOptions: g, setMutateOptions: r } = s, n = s.error, o = s.eventListeners, C = t.autoFocus || !1, c = d(null);
  h(i, () => ({
    focus() {
      c.current.focus();
    },
    isValid() {
      return !n.status;
    },
    getValue() {
      return s.getData();
    },
    clear() {
      s.setData("", !0);
    },
    setValue(e, a = !1) {
      s.setData(e, a);
    },
    setVisible(e) {
      r((a) => ({ ...a, visible: e }));
    },
    setRequired(e) {
      r((a) => ({ ...a, required: e }));
    },
    setReadOnly(e) {
      r((a) => ({ ...a, readonly: e }));
    },
    setAttribute(e) {
      r((a) => ({ ...a, ...e }));
    }
  }), [s]);
  var m = M(t, s.data, t.label);
  t.readonly && (m.slotProps = { htmlInput: { readOnly: !0 } });
  var F = {
    onBlur: o.onBlur,
    onFocus: o.onFocus,
    onChange: (e) => o.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ l(b, { children: g.visible && /* @__PURE__ */ l(
    V,
    {
      label: L(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ l(
        v,
        {
          minRows: 2,
          maxRows: 5,
          fullWidth: !0,
          multiline: !0,
          autoFocus: C,
          ...m,
          inputRef: c,
          ...F,
          error: n.status,
          helperText: n.message
        }
      )
    }
  ) });
});
export {
  I as default
};
