import { jsx as o, Fragment as C } from "react/jsx-runtime";
import { forwardRef as b, useContext as F, useRef as c, useImperativeHandle as x } from "react";
import { TextField as v } from "@mui/material";
import { copyMuiOptions as M, getFieldLabel as h } from "./MuiUtil.js";
import { FieldManagerContext as R } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import L from "./FieldDecorator.js";
const D = b(function(e, l) {
  const m = F(R), i = l || c(null), s = m(e, "string", i), { mutateOptions: d, setMutateOptions: f } = s, r = s.error, a = s.eventListeners, n = c(null);
  x(i, () => ({
    focus() {
      n.current.focus();
    },
    isValid() {
      return !r.status;
    },
    assignAttribute(t) {
      n.current.assignAttribute(t);
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
  var u = M(e, s.data, e.label);
  e.readonly && (u.inputProps = { readOnly: !0 });
  var g = {
    onBlur: a.onBlur,
    onFocus: a.onFocus,
    onChange: (t) => a.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ o(C, { children: d.visible && /* @__PURE__ */ o(
    L,
    {
      label: h(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        v,
        {
          minRows: 2,
          maxRows: 5,
          fullWidth: !0,
          multiline: !0,
          ...u,
          inputRef: n,
          ...g,
          error: r.status,
          helperText: r.message
        }
      )
    }
  ) });
});
export {
  D as default
};
