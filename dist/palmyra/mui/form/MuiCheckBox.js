import { jsx as r, jsxs as v } from "react/jsx-runtime";
import { forwardRef as F, useContext as M, useRef as k, useImperativeHandle as p } from "react";
import { FormControl as D, FormControlLabel as L, Checkbox as B, FormHelperText as O } from "@mui/material";
import { copyMuiOptions as j } from "./MuiUtil.js";
import { FieldManagerContext as y } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import R from "./FieldDecorator.js";
const I = F(function(t, d) {
  const m = M(y), { options: a } = t, o = m(t, "checkbox"), f = o.data ? o.data.split(",") : [], C = t.flexDirection || "row", s = o.error, l = o.eventListeners, c = k(null);
  p(d, () => ({
    focus() {
      c.current.focus();
    },
    isValid() {
      return !s.status;
    },
    assignAttribute(e) {
      c.current.assignAttribute(e);
    }
  }), []);
  var u = j(t, o.data, t.label);
  t.readonly && (u.inputProps = { readOnly: !0 });
  function x(e, g) {
    const n = o.data ? o.data.split(",") : [];
    var i = n.indexOf(e);
    g ? i < 0 && n.push(e) : i >= 0 && n.splice(i, 1), l.onValueChange(n.toString());
  }
  var h = {
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (e) => {
      x(e.target.value, e.target.checked);
    }
  };
  const b = (e) => f.includes(e);
  return /* @__PURE__ */ r(
    R,
    {
      label: t.title,
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ v(D, { fullWidth: !0, error: s.status, ...u, style: { flexDirection: C }, children: [
        a ? Object.keys(a).map((e) => /* @__PURE__ */ r(
          L,
          {
            value: e,
            control: /* @__PURE__ */ r(
              B,
              {
                ...h,
                checked: b(e),
                disabled: t.readonly
              }
            ),
            label: a[e]
          },
          e
        )) : /* @__PURE__ */ r("div", { children: "No options provided" }),
        /* @__PURE__ */ r(O, { className: "form-error-text", children: s.message })
      ] })
    }
  );
});
export {
  I as default
};
