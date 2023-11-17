import { jsx as o, jsxs as b } from "react/jsx-runtime";
import { forwardRef as g, useContext as F, useRef as v, useImperativeHandle as h } from "react";
import { FormControl as x, RadioGroup as R, FormControlLabel as M, Radio as y, FormHelperText as L } from "@mui/material";
import { copyMuiOptions as O } from "./MuiUtil.js";
import { FieldManagerContext as j } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import p from "./FieldDecorator.js";
const P = g(function(e, u) {
  const c = F(j), { options: r } = e, n = c(e, "radio"), d = e.flexDirection != "column", a = n.error, l = n.eventListeners, s = v(null);
  h(u, () => ({
    focus() {
      s.current.focus();
    },
    isValid() {
      return !a.status;
    },
    assignAttribute(t) {
      s.current.assignAttribute(t);
    }
  }), []);
  var i = O(e, n.data, e.label);
  e.readonly && (i.inputProps = { readOnly: !0 });
  const m = !!e.readonly;
  var f = {
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (t) => {
      m || l.onValueChange(t.target.value);
    }
  };
  return /* @__PURE__ */ o(
    p,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ b(x, { fullWidth: !0, error: a.status, children: [
        /* @__PURE__ */ o(R, { row: d, ...f, ...i, children: r ? Object.keys(r).map((t, C) => /* @__PURE__ */ o(
          M,
          {
            value: t,
            control: /* @__PURE__ */ o(y, { inputRef: s }),
            label: r[t]
          },
          C
        )) : /* @__PURE__ */ o("div", { children: "No options provided" }) }),
        /* @__PURE__ */ o(L, { className: "form-error-text", children: a.message })
      ] })
    }
  );
});
export {
  P as default
};
