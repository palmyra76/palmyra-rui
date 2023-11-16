import { jsxs as v, jsx as n } from "react/jsx-runtime";
import { forwardRef as b, useContext as C, useRef as F, useImperativeHandle as M } from "react";
import { FormControl as k, FormControlLabel as B, Checkbox as O, FormHelperText as j } from "@mui/material";
import { copyMuiOptions as L } from "./MuiUtil.js";
import { FieldManagerContext as R } from "../../layout/flexiLayout/FlexiLayoutContext.js";
const S = b(function(r, d) {
  const f = C(R), { options: a } = r, t = f(r, "checkbox"), m = t.data ? t.data.split(",") : [], s = t.error, i = t.eventListeners, u = F(null);
  M(d, () => ({
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
  var l = L(r, t.data);
  r.readonly && (l.inputProps = { readOnly: !0 });
  function p(e, g) {
    const o = t.data ? t.data.split(",") : [];
    var c = o.indexOf(e);
    g ? c < 0 && o.push(e) : c >= 0 && o.splice(c, 1), i.onValueChange(o.toString());
  }
  var h = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: (e) => {
      p(e.target.value, e.target.checked);
    }
  };
  const x = (e) => m.includes(e);
  return /* @__PURE__ */ v(k, { fullWidth: !0, error: s.status, ...l, children: [
    a ? Object.keys(a).map((e) => /* @__PURE__ */ n(
      B,
      {
        value: e,
        control: /* @__PURE__ */ n(
          O,
          {
            ...h,
            checked: x(e),
            disabled: r.readonly
          }
        ),
        label: a[e]
      },
      e
    )) : /* @__PURE__ */ n("div", { children: "No options provided" }),
    /* @__PURE__ */ n(j, { className: "form-error-text", children: s.message })
  ] });
});
export {
  S as default
};
