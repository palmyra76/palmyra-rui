import { jsxs as f, jsx as e } from "react/jsx-runtime";
import { forwardRef as p, useContext as g, useRef as v, useImperativeHandle as h } from "react";
import { FormControl as x, RadioGroup as F, FormControlLabel as R, Radio as b, FormHelperText as C } from "@mui/material";
import { copyMuiOptions as M } from "./MuiUtil.js";
import { FieldManagerContext as j } from "../../layout/flexiLayout/FlexiLayoutContext.js";
const B = p(function(o, l) {
  const c = g(j), { options: t } = o, n = c(o, "radio"), a = n.error, i = n.eventListeners, s = v(null);
  h(l, () => ({
    focus() {
      s.current.focus();
    },
    isValid() {
      return !a.status;
    },
    assignAttribute(r) {
      s.current.assignAttribute(r);
    }
  }), []);
  var u = M(o, n.data);
  o.readonly && (u.inputProps = { readOnly: !0 });
  var d = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: (r) => i.onValueChange(r.target.value)
  };
  return /* @__PURE__ */ f(x, { fullWidth: !0, error: a.status, children: [
    /* @__PURE__ */ e(F, { row: !0, ...d, ...u, children: t ? Object.keys(t).map((r, m) => /* @__PURE__ */ e(R, { value: r, control: /* @__PURE__ */ e(b, { inputRef: s, inputProps: u }), label: t[r] }, m)) : /* @__PURE__ */ e("div", { children: "No options provided" }) }),
    /* @__PURE__ */ e(C, { className: "form-error-text", children: a.message })
  ] });
});
export {
  B as default
};
