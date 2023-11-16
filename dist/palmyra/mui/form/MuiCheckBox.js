import { jsxs as b, jsx as n } from "react/jsx-runtime";
import { forwardRef as C, useContext as F, useRef as M, useImperativeHandle as k } from "react";
import { FormControl as B, FormControlLabel as D, Checkbox as O, FormHelperText as j } from "@mui/material";
import { copyMuiOptions as y } from "./MuiUtil.js";
import { FieldManagerContext as L } from "../../layout/flexiLayout/FlexiLayoutContext.js";
const S = C(function(r, d) {
  const f = F(L), { options: a } = r, t = f(r, "checkbox"), m = t.data ? t.data.split(",") : [], x = r.flexDirection || "row", i = t.error, s = t.eventListeners, l = M(null);
  k(d, () => ({
    focus() {
      l.current.focus();
    },
    isValid() {
      return !i.status;
    },
    assignAttribute(e) {
      l.current.assignAttribute(e);
    }
  }), []);
  var u = y(r, t.data);
  r.readonly && (u.inputProps = { readOnly: !0 });
  function p(e, v) {
    const o = t.data ? t.data.split(",") : [];
    var c = o.indexOf(e);
    v ? c < 0 && o.push(e) : c >= 0 && o.splice(c, 1), s.onValueChange(o.toString());
  }
  var h = {
    onBlur: s.onBlur,
    onFocus: s.onFocus,
    onChange: (e) => {
      p(e.target.value, e.target.checked);
    }
  };
  const g = (e) => m.includes(e);
  return /* @__PURE__ */ b(B, { fullWidth: !0, error: i.status, ...u, style: {
    flexDirection: x
  }, children: [
    a ? Object.keys(a).map((e) => /* @__PURE__ */ n(
      D,
      {
        value: e,
        control: /* @__PURE__ */ n(
          O,
          {
            ...h,
            checked: g(e),
            disabled: r.readonly
          }
        ),
        label: a[e]
      },
      e
    )) : /* @__PURE__ */ n("div", { children: "No options provided" }),
    /* @__PURE__ */ n(j, { className: "form-error-text", children: i.message })
  ] });
});
export {
  S as default
};
