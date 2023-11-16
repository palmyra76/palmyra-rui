import { jsxs as p, jsx as o } from "react/jsx-runtime";
import { forwardRef as g, useContext as v, useRef as x, useImperativeHandle as h } from "react";
import { FormControl as F, RadioGroup as R, FormControlLabel as b, Radio as C, FormHelperText as M } from "@mui/material";
import { copyMuiOptions as j } from "./MuiUtil.js";
import { FieldManagerContext as y } from "../../layout/flexiLayout/FlexiLayoutContext.js";
const H = g(function(e, l) {
  const c = v(y), { options: t } = e, n = c(e, "radio"), d = e.flexDirection != "column", i = n.error, a = n.eventListeners, s = x(null);
  h(l, () => ({
    focus() {
      s.current.focus();
    },
    isValid() {
      return !i.status;
    },
    assignAttribute(r) {
      s.current.assignAttribute(r);
    }
  }), []);
  var u = j(e, n.data);
  e.readonly && (u.inputProps = { readOnly: !0 });
  var m = {
    onBlur: a.onBlur,
    onFocus: a.onFocus,
    onChange: (r) => a.onValueChange(r.target.value)
  };
  return /* @__PURE__ */ p(F, { fullWidth: !0, error: i.status, children: [
    /* @__PURE__ */ o(R, { row: d, ...m, ...u, children: t ? Object.keys(t).map((r, f) => /* @__PURE__ */ o(
      b,
      {
        value: r,
        control: /* @__PURE__ */ o(C, { inputRef: s, inputProps: u }),
        label: t[r]
      },
      f
    )) : /* @__PURE__ */ o("div", { children: "No options provided" }) }),
    /* @__PURE__ */ o(M, { className: "form-error-text", children: i.message })
  ] });
});
export {
  H as default
};
