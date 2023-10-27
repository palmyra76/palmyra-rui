import { jsxs as f, jsx as e } from "react/jsx-runtime";
import { forwardRef as p, useRef as g, useImperativeHandle as v } from "react";
import { FormControl as h, RadioGroup as R, FormControlLabel as b, Radio as F, FormHelperText as x } from "@mui/material";
import { copyMuiOptions as M } from "./MuiUtil.js";
const A = p(function(o, u) {
  const { getFieldManager: l, options: t } = o, n = l(o, "radio"), a = n.error, s = n.eventListeners, i = g(null);
  v(u, () => ({
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
  return /* @__PURE__ */ f(h, { fullWidth: !0, error: a.status, children: [
    /* @__PURE__ */ e(R, { row: !0, ...c, ...d, children: t ? Object.keys(t).map((r, m) => /* @__PURE__ */ e(b, { value: r, control: /* @__PURE__ */ e(F, { inputRef: i }), label: t[r] }, m)) : /* @__PURE__ */ e("div", { children: "No options provided" }) }),
    /* @__PURE__ */ e(x, { className: "form-error-text", children: a.message })
  ] });
});
export {
  A as default
};
