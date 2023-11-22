import { jsx as i, Fragment as b } from "react/jsx-runtime";
import { forwardRef as x, useContext as F, useRef as c, useImperativeHandle as v } from "react";
import { TextField as M } from "@mui/material";
import { copyMuiOptions as h } from "./MuiUtil.js";
import { FieldManagerContext as R } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import A from "./FieldDecorator.js";
const B = x(function(e, l) {
  const m = F(R), o = l || c(null), s = m(e, "string", o), { mutateOptions: d, setMutateOptions: f } = s, n = s.error, r = s.eventListeners, a = c(null);
  v(o, () => ({
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
  return /* @__PURE__ */ i(b, { children: d.visible && /* @__PURE__ */ i(
    A,
    {
      label: C,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ i(
        M,
        {
          minRows: 2,
          maxRows: 5,
          fullWidth: !0,
          multiline: !0,
          ...u,
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
  B as default
};
