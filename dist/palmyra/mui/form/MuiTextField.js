import { jsx as i, Fragment as F } from "react/jsx-runtime";
import { forwardRef as b, useContext as v, useRef as c, useImperativeHandle as x } from "react";
import { TextField as M } from "@mui/material";
import { copyMuiOptions as h } from "./MuiUtil.js";
import { FieldManagerContext as L } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import O from "./FieldDecorator.js";
const P = b(function(e, l) {
  const m = v(L), o = l || c(null), s = m(e, "string", o), { mutateOptions: d, setMutateOptions: f } = s, n = s.error, r = s.eventListeners, a = c(null);
  x(o, () => ({
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
  var u = h(e, s.data, e.label);
  e.readonly && (u.inputProps = { readOnly: !0 });
  var g = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (t) => r.onValueChange(t.target.value)
  };
  const C = e.required ? e.title + "*" : e.title;
  return /* @__PURE__ */ i(F, { children: d.visible && /* @__PURE__ */ i(
    O,
    {
      label: C,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ i(
        M,
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
  P as default
};
