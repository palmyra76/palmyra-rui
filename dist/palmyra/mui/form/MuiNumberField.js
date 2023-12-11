import { jsx as l, Fragment as C } from "react/jsx-runtime";
import { forwardRef as v, useContext as M, useRef as c, useImperativeHandle as h } from "react";
import { TextField as x } from "@mui/material";
import { copyMuiOptions as L, getFieldLabel as O } from "./MuiUtil.js";
import { FieldManagerContext as V } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import y from "./FieldDecorator.js";
const j = v(function(e, o) {
  const m = M(V), u = o || c(null), t = m(e, "numbersOnly", u), { mutateOptions: d, setMutateOptions: f } = t, n = t.error, s = t.eventListeners, r = c(null), g = e.variant || "standard", b = e.autoFocus || !1;
  h(u, () => ({
    focus() {
      r.current.focus();
    },
    isValid() {
      return !n.status;
    },
    getValue() {
      return t.getData();
    },
    assignAttribute(a) {
      r.current.assignAttribute(a);
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
  var i = L(e, t.data, e.label);
  e.readonly && (i.inputProps = { readOnly: !0 });
  var F = {
    onBlur: s.onBlur,
    onFocus: s.onFocus,
    onChange: (a) => s.onValueChange(a.target.value.replace(/[^\d\.\+\-]/g, ""))
  };
  return /* @__PURE__ */ l(C, { children: d.visible && /* @__PURE__ */ l(
    y,
    {
      label: O(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        x,
        {
          ...i,
          variant: g,
          fullWidth: !0,
          inputRef: r,
          ...F,
          error: n.status,
          helperText: n.message,
          autoFocus: b
        }
      )
    }
  ) });
});
export {
  j as default
};
