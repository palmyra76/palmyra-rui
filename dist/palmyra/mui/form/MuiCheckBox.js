import { jsxs as v, jsx as o } from "react/jsx-runtime";
import { forwardRef as C, useContext as b, useRef as F, useImperativeHandle as M } from "react";
import { FormControl as k, FormControlLabel as B, Checkbox as j, FormHelperText as L } from "@mui/material";
import { copyMuiOptions as O } from "./MuiUtil.js";
import { FieldManagerContext as R } from "../../layout/flexiLayout/FlexiLayoutContext.js";
const w = C(function(n, l) {
  const d = b(R), { options: s } = n, t = d(n, "checkbox"), f = t.data ? t.data.split(",") : [], a = t.error, i = t.eventListeners, u = F(null);
  M(l, () => ({
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
  var m = O(n, t.data);
  function p(e, g) {
    const r = t.data ? t.data.split(",") : [];
    var c = r.indexOf(e);
    g ? c < 0 && r.push(e) : c >= 0 && r.splice(c, 1), i.onValueChange(r.toString());
  }
  var h = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: (e) => {
      p(e.target.value, e.target.checked);
    }
  };
  const x = (e) => f.includes(e);
  return /* @__PURE__ */ v(k, { fullWidth: !0, error: a.status, ...m, children: [
    s ? Object.keys(s).map((e) => /* @__PURE__ */ o(
      B,
      {
        value: e,
        control: /* @__PURE__ */ o(j, { ...h, checked: x(e) }),
        label: s[e]
      },
      e
    )) : /* @__PURE__ */ o("div", { children: "No options provided" }),
    /* @__PURE__ */ o(L, { className: "form-error-text", children: a.message })
  ] });
});
export {
  w as default
};
