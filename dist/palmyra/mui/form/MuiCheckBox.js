import { jsx as r, jsxs as v } from "react/jsx-runtime";
import { forwardRef as F, useContext as p, useRef as M, useImperativeHandle as k } from "react";
import { FormControl as D, FormControlLabel as L, Checkbox as B, FormHelperText as O } from "@mui/material";
import { copyMuiOptions as j } from "./MuiUtil.js";
import { FieldManagerContext as y } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import R from "./FieldDecorator.js";
const I = F(function(t, d) {
  const m = p(y), { options: a } = t, o = m(t, "checkbox"), f = o.data ? o.data.split(",") : [], C = t.flexDirection || "row", s = o.error, i = o.eventListeners, c = M(null);
  k(d, () => ({
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
  var u = j(t, o.data);
  t.readonly && (u.inputProps = { readOnly: !0 });
  function x(e, g) {
    const n = o.data ? o.data.split(",") : [];
    var l = n.indexOf(e);
    g ? l < 0 && n.push(e) : l >= 0 && n.splice(l, 1), i.onValueChange(n.toString());
  }
  var h = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
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
