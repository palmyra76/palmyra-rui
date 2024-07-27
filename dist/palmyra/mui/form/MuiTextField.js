import { jsx as o, Fragment as M } from "react/jsx-runtime";
import { forwardRef as h, useContext as R, useRef as F, useImperativeHandle as L } from "react";
import { TextField as O } from "@mui/material";
import { copyMuiOptions as V, getFieldLabel as y } from "./MuiUtil.js";
import { FieldManagerContext as D } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import T from "./FieldDecorator.js";
const A = h(function(e, i) {
  var f;
  const g = R(D), u = i || F(null), s = g(e, "string", u), { mutateOptions: C, setMutateOptions: n } = s, l = s.error, r = s.eventListeners, c = F(null), b = e.variant || "standard", v = e.autoFocus || !1;
  L(u, () => ({
    focus() {
      c.current.focus();
    },
    isValid() {
      return !l.status;
    },
    getValue() {
      return s.getData();
    },
    clear() {
      s.setData("", !0);
    },
    setValue(t, a = !1) {
      s.setData(t, a);
    },
    setVisible(t) {
      n((a) => ({ ...a, visible: t }));
    },
    setRequired(t) {
      n((a) => ({ ...a, required: t }));
    },
    setReadOnly(t) {
      n((a) => ({ ...a, readonly: t }));
    },
    setAttribute(t) {
      n((a) => ({ ...a, ...t }));
    }
  }), [s]);
  const d = e.labelMode != "title" ? e.label : "";
  var m = V(e, s.data, d);
  e.readonly && (m.inputProps = { readOnly: !0 });
  var x = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (t) => r.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ o(M, { children: C.visible && /* @__PURE__ */ o(
    T,
    {
      label: y(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        O,
        {
          ...m,
          variant: b,
          fullWidth: !0,
          inputRef: c,
          ...x,
          label: d,
          error: l.status,
          size: (f = e.fieldProps) == null ? void 0 : f.size,
          helperText: l.message,
          autoFocus: v
        }
      )
    }
  ) });
});
export {
  A as default
};
