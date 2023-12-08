import { jsx as o, Fragment as F } from "react/jsx-runtime";
import { forwardRef as b, useContext as x, useRef as c, useImperativeHandle as v } from "react";
import { TextField as M } from "@mui/material";
import { copyMuiOptions as h, getFieldLabel as R } from "./MuiUtil.js";
import { FieldManagerContext as L } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import V from "./FieldDecorator.js";
const B = b(function(e, l) {
  const m = x(L), u = l || c(null), t = m(e, "string", u), { mutateOptions: d, setMutateOptions: f } = t, s = t.error, n = t.eventListeners, g = e.autoFocus || !1, r = c(null);
  v(u, () => ({
    focus() {
      r.current.focus();
    },
    isValid() {
      return !s.status;
    },
    assignAttribute(a) {
      r.current.assignAttribute(a);
    },
    getValue() {
      return t.getData();
    },
    clear() {
      t.setData("");
    },
    setValue(a) {
      t.setData(a);
    },
    setVisible(a) {
      f({ visible: a });
    }
  }), [t]);
  var i = h(e, t.data, e.label);
  e.readonly && (i.inputProps = { readOnly: !0 });
  var C = {
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (a) => n.onValueChange(a.target.value)
  };
  return /* @__PURE__ */ o(F, { children: d.visible && /* @__PURE__ */ o(
    V,
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
          ...i,
          inputRef: r,
          ...C,
          error: s.status,
          helperText: s.message
        }
      )
    }
  ) });
});
export {
  B as default
};
