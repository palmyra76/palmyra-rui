import { jsx as n, Fragment as F } from "react/jsx-runtime";
import { forwardRef as h, useContext as p, useRef as d, useState as v, useImperativeHandle as x } from "react";
import { IconButton as w, TextField as M } from "@mui/material";
import { copyMuiOptions as y, getFieldLabel as P } from "./MuiUtil.js";
import { FieldManagerContext as V } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import L from "./FieldDecorator.js";
import { Visibility as O, VisibilityOff as R } from "@mui/icons-material";
const H = h(function(e, l) {
  const m = p(V), u = l || d(null), [c, f] = v(!1), s = m(e, "string", u), { mutateOptions: g, setMutateOptions: b } = s, o = s.error, r = s.eventListeners, a = d(null);
  x(u, () => ({
    focus() {
      console.log("focusing"), a.current.focus();
    },
    isValid() {
      return !o.status;
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
      b({ visible: t });
    }
  }), []);
  var i = y(e, s.data, e.label);
  e.readonly ? i.inputProps = { readOnly: !0 } : i.InputProps = {
    endAdornment: /* @__PURE__ */ n(w, { onClick: () => f((t) => !t), children: c ? /* @__PURE__ */ n(O, {}) : /* @__PURE__ */ n(R, {}) })
  };
  var C = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (t) => r.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ n(F, { children: g.visible && /* @__PURE__ */ n(
    L,
    {
      label: P(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        M,
        {
          ...i,
          type: c ? "text" : "password",
          fullWidth: !0,
          inputRef: a,
          ...C,
          error: o.status,
          helperText: o.message
        }
      )
    }
  ) });
});
export {
  H as default
};
