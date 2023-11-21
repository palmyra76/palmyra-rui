import { jsx as n, Fragment as F } from "react/jsx-runtime";
import { forwardRef as h, useContext as p, useRef as d, useState as v, useImperativeHandle as x } from "react";
import { IconButton as w, TextField as M } from "@mui/material";
import { copyMuiOptions as y } from "./MuiUtil.js";
import { FieldManagerContext as P } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import V from "./FieldDecorator.js";
import { Visibility as O, VisibilityOff as L } from "@mui/icons-material";
const j = h(function(t, l) {
  const m = p(P), u = l || d(null), [c, f] = v(!1), s = m(t, "string", u), { mutateOptions: C, setMutateOptions: b } = s, r = s.error, o = s.eventListeners, a = d(null);
  x(u, () => ({
    focus() {
      a.current.focus();
    },
    isValid() {
      return !r.status;
    },
    assignAttribute(e) {
      a.current.assignAttribute(e);
    },
    clear() {
      s.setData("");
    },
    setValue(e) {
      s.setData(e);
    },
    setVisible(e) {
      b({ visible: e });
    }
  }), []);
  var i = y(t, s.data, t.label);
  t.readonly ? i.inputProps = { readOnly: !0 } : i.InputProps = {
    endAdornment: /* @__PURE__ */ n(w, { onClick: () => f((e) => !e), children: c ? /* @__PURE__ */ n(O, {}) : /* @__PURE__ */ n(L, {}) })
  };
  var g = {
    onBlur: o.onBlur,
    onFocus: o.onFocus,
    onChange: (e) => o.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ n(F, { children: C.visible && /* @__PURE__ */ n(
    V,
    {
      label: t.title,
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ n(
        M,
        {
          ...i,
          type: c ? "text" : "password",
          fullWidth: !0,
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
  j as default
};
