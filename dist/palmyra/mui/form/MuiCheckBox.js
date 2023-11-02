import { jsxs as v, jsx as o } from "react/jsx-runtime";
import { forwardRef as b, useRef as C, useImperativeHandle as F } from "react";
import { FormControl as k, FormControlLabel as M, Checkbox as B, FormHelperText as j } from "@mui/material";
import { copyMuiOptions as L } from "./MuiUtil.js";
const N = b(function(n, l) {
  const { getFieldManager: d, options: s } = n, t = d(n, "checkbox"), f = t.data ? t.data.split(",") : [], a = t.error, i = t.eventListeners, u = C(null);
  F(l, () => ({
    focus() {
      u.current.focus();
    },
    isValid() {
      return !a.status;
    },
    assignAttribute(e) {
      u.current.assignAttribute(e);
    }
  }), []);
  var p = L(n, t.data);
  function m(e, x) {
    const r = t.data ? t.data.split(",") : [];
    var c = r.indexOf(e);
    x ? c < 0 && r.push(e) : c >= 0 && r.splice(c, 1), i.onValueChange(r.toString());
  }
  var h = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: (e) => {
      m(e.target.value, e.target.checked);
    }
  };
  const g = (e) => f.includes(e);
  return /* @__PURE__ */ v(k, { fullWidth: !0, error: a.status, ...p, children: [
    s ? Object.keys(s).map((e) => /* @__PURE__ */ o(
      M,
      {
        value: e,
        control: /* @__PURE__ */ o(B, { ...h, checked: g(e) }),
        label: s[e]
      },
      e
    )) : /* @__PURE__ */ o("div", { children: "No options provided" }),
    /* @__PURE__ */ o(j, { className: "form-error-text", children: a.message })
  ] });
});
export {
  N as default
};
