import { jsx as i, Fragment as F } from "react/jsx-runtime";
import { forwardRef as b, useContext as v, useRef as c, useImperativeHandle as x } from "react";
import { TextField as M } from "@mui/material";
import { copyMuiOptions as h, getFieldLabel as L } from "./MuiUtil.js";
import { FieldManagerContext as O } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import R from "./FieldDecorator.js";
const P = b(function(e, l) {
  const d = v(O), o = l || c(null), a = d(e, "string", o), { mutateOptions: m, setMutateOptions: f } = a, n = a.error, s = a.eventListeners, r = c(null), g = e.variant || "standard";
  x(o, () => ({
    focus() {
      r.current.focus();
    },
    isValid() {
      return !n.status;
    },
    assignAttribute(t) {
      r.current.assignAttribute(t);
    },
    clear() {
      a.setData("");
    },
    setValue(t) {
      a.setData(t);
    },
    setVisible(t) {
      f({ visible: t });
    }
  }), []);
  var u = h(e, a.data, e.label);
  e.readonly && (u.inputProps = { readOnly: !0 });
  var C = {
    onBlur: s.onBlur,
    onFocus: s.onFocus,
    onChange: (t) => s.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ i(F, { children: m.visible && /* @__PURE__ */ i(
    R,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ i(
        M,
        {
          ...u,
          variant: g,
          fullWidth: !0,
          inputRef: r,
          ...C,
          error: n.status,
          helperText: n.message
        }
      )
    }
  ) });
});
export {
  P as default
};
