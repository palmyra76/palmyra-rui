import { jsx as o, Fragment as C } from "react/jsx-runtime";
import { forwardRef as b, useContext as x, useRef as c, useImperativeHandle as F } from "react";
import { TextField as v } from "@mui/material";
import { copyMuiOptions as M } from "./MuiUtil.js";
import { FieldManagerContext as h } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import R from "./FieldDecorator.js";
const y = b(function(e, i) {
  const m = x(h), l = i || c(null), s = m(e, "string", l), { mutateOptions: d, setMutateOptions: f } = s, r = s.error, n = s.eventListeners, a = c(null);
  F(l, () => ({
    focus() {
      a.current.focus();
    },
    isValid() {
      return !r.status;
    },
    assignAttribute(t) {
      a.current.assignAttribute(t);
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
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (t) => n.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ o(C, { children: d.visible && /* @__PURE__ */ o(
    R,
    {
      label: e.title,
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
          inputRef: a,
          ...g,
          error: r.status,
          helperText: r.message
        }
      )
    }
  ) });
});
export {
  y as default
};
