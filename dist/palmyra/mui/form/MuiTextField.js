import { jsx as l, Fragment as C } from "react/jsx-runtime";
import { forwardRef as F, useContext as b, useRef as c, useImperativeHandle as v } from "react";
import { TextField as x } from "@mui/material";
import { copyMuiOptions as M } from "./MuiUtil.js";
import { FieldManagerContext as h } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import p from "./FieldDecorator.js";
const A = F(function(e, o) {
  const m = b(h), i = o || c(null), s = m(e, "string", i), { mutateOptions: d, setMutateOptions: f } = s, n = s.error, r = s.eventListeners, a = c(null);
  v(i, () => ({
    focus() {
      a.current.focus();
    },
    isValid() {
      return !n.status;
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
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (t) => r.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ l(C, { children: d.visible && /* @__PURE__ */ l(
    p,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        x,
        {
          ...u,
          fullWidth: !0,
          inputRef: a,
          ...g,
          error: n.status,
          helperText: n.message
        }
      )
    }
  ) });
});
export {
  A as default
};
