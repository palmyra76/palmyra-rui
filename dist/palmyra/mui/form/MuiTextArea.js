import { jsx as o, Fragment as F } from "react/jsx-runtime";
import { forwardRef as b, useContext as x, useRef as c, useImperativeHandle as v } from "react";
import { TextField as M } from "@mui/material";
import { copyMuiOptions as h, getFieldLabel as R } from "./MuiUtil.js";
import { FieldManagerContext as L } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import A from "./FieldDecorator.js";
const B = b(function(e, l) {
  const m = x(L), i = l || c(null), s = m(e, "string", i), { mutateOptions: d, setMutateOptions: f } = s, a = s.error, n = s.eventListeners, g = e.autoFocus || !1, r = c(null);
  v(i, () => ({
    focus() {
      r.current.focus();
    },
    isValid() {
      return !a.status;
    },
    assignAttribute(t) {
      r.current.assignAttribute(t);
    },
    clear() {
      s.setData("");
    },
    setValue(t) {
      s.setData(t);
    },
    setVisible(t) {
      f({ visible: t });
    }
  }), []);
  var u = h(e, s.data, e.label);
  e.readonly && (u.inputProps = { readOnly: !0 });
  var C = {
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (t) => n.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ o(F, { children: d.visible && /* @__PURE__ */ o(
    A,
    {
      label: R(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        M,
        {
          minRows: 2,
          maxRows: 5,
          fullWidth: !0,
          multiline: !0,
          autoFocus: g,
          ...u,
          inputRef: r,
          ...C,
          error: a.status,
          helperText: a.message
        }
      )
    }
  ) });
});
export {
  B as default
};
