import { jsxs as f, jsx as e } from "react/jsx-runtime";
import { forwardRef as p, useContext as g, useRef as v, useImperativeHandle as h } from "react";
import { FormControl as x, RadioGroup as F, FormControlLabel as R, Radio as b, FormHelperText as C } from "@mui/material";
import { copyMuiOptions as M } from "./MuiUtil.js";
import { FieldManagerContext as j } from "../../layout/flexiLayout/FlexiLayoutContext.js";
const N = p(function(o, u) {
  const l = g(j), { options: t } = o, n = l(o, "radio"), a = n.error, s = n.eventListeners, i = v(null);
  h(u, () => ({
    focus() {
      i.current.focus();
    },
    isValid() {
      return !a.status;
    },
    assignAttribute(r) {
      i.current.assignAttribute(r);
    }
  }), []);
  var c = M(o, n.data), d = {
    onBlur: s.onBlur,
    onFocus: s.onFocus,
    onChange: (r) => s.onValueChange(r.target.value)
  };
  return /* @__PURE__ */ f(x, { fullWidth: !0, error: a.status, children: [
    /* @__PURE__ */ e(F, { row: !0, ...c, ...d, children: t ? Object.keys(t).map((r, m) => /* @__PURE__ */ e(R, { value: r, control: /* @__PURE__ */ e(b, { inputRef: i }), label: t[r] }, m)) : /* @__PURE__ */ e("div", { children: "No options provided" }) }),
    /* @__PURE__ */ e(C, { className: "form-error-text", children: a.message })
  ] });
});
export {
  N as default
};
