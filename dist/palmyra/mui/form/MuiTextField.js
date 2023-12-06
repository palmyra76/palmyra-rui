import { jsx as o, Fragment as b } from "react/jsx-runtime";
import { forwardRef as v, useContext as x, useRef as c, useImperativeHandle as M } from "react";
import { TextField as h } from "@mui/material";
import { copyMuiOptions as L, getFieldLabel as O } from "./MuiUtil.js";
import { FieldManagerContext as R } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import T from "./FieldDecorator.js";
const k = v(function(t, l) {
  const d = x(R), i = l || c(null), a = d(t, "string", i), { mutateOptions: m, setMutateOptions: f } = a, s = a.error, n = a.eventListeners, r = c(null), F = t.variant || "standard", g = t.autoFocus || !1;
  M(i, () => ({
    focus() {
      r.current.focus();
    },
    isValid() {
      return !s.status;
    },
    assignAttribute(e) {
      r.current.assignAttribute(e);
    },
    clear() {
      a.setData("");
    },
    setValue(e) {
      a.setData(e);
    },
    setVisible(e) {
      f({ visible: e });
    }
  }), []);
  var u = L(t, a.data, t.label);
  t.readonly && (u.inputProps = { readOnly: !0 });
  var C = {
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (e) => n.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ o(b, { children: m.visible && /* @__PURE__ */ o(
    T,
    {
      label: O(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ o(
        h,
        {
          ...u,
          variant: F,
          fullWidth: !0,
          inputRef: r,
          ...C,
          error: s.status,
          helperText: s.message,
          autoFocus: g
        }
      )
    }
  ) });
});
export {
  k as default
};
