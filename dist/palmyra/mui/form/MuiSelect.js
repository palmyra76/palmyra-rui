import { jsxs as f, jsx as r } from "react/jsx-runtime";
import { forwardRef as p, useRef as g, useImperativeHandle as v } from "react";
import { FormControl as h, Select as M, MenuItem as x, FormHelperText as F } from "@mui/material";
import { copyMuiOptions as b } from "./MuiUtil.js";
const B = p(function(t, a) {
  const { options: n, getFieldManager: l } = t, o = l(t, "select"), s = o.error, i = o.eventListeners, u = g(null);
  v(a, () => ({
    focus() {
      u.current.focus();
    },
    isValid() {
      return !s.status;
    },
    assignAttribute(e) {
      u.current.assignAttribute(e);
    }
  }), []);
  var c = b(t, o.data), d = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: (e) => i.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ f(h, { fullWidth: !0, error: s.status, children: [
    /* @__PURE__ */ r(M, { ...c, ...d, inputRef: u, children: n ? Object.keys(n).map(
      (e, m) => /* @__PURE__ */ r(x, { value: e, children: n[e] }, m)
    ) : /* @__PURE__ */ r("div", { children: "No options provided" }) }),
    /* @__PURE__ */ r(F, { className: "form-error-text", children: s.message })
  ] });
});
export {
  B as default
};
