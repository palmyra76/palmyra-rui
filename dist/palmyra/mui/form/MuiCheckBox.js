import { jsx as n, jsxs as M } from "react/jsx-runtime";
import { forwardRef as k, useContext as p, useRef as f, useImperativeHandle as D } from "react";
import { FormControl as L, FormControlLabel as B, Checkbox as O, FormHelperText as R } from "@mui/material";
import { copyMuiOptions as j } from "./MuiUtil.js";
import { FieldManagerContext as y } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import w from "./FieldDecorator.js";
const T = k(function(t, c) {
  const C = p(y), u = c || f(null), { options: a } = t, o = C(t, "checkbox", u), x = o.data ? o.data.split(",") : [], h = t.flexDirection || "row", s = o.error, l = o.eventListeners, d = f(null);
  D(u, () => ({
    focus() {
      d.current.focus();
    },
    isValid() {
      return !s.status;
    },
    assignAttribute(e) {
      d.current.assignAttribute(e);
    }
  }), []);
  var m = j(t, o.data, t.label);
  t.readonly && (m.inputProps = { readOnly: !0 });
  function b(e, F) {
    const r = o.data ? o.data.split(",") : [];
    var i = r.indexOf(e);
    F ? i < 0 && r.push(e) : i >= 0 && r.splice(i, 1), l.onValueChange(r.toString());
  }
  var g = {
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (e) => {
      b(e.target.value, e.target.checked);
    }
  };
  const v = (e) => x.includes(e);
  return /* @__PURE__ */ n(
    w,
    {
      label: t.title,
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ M(L, { fullWidth: !0, error: s.status, ...m, style: { flexDirection: h }, children: [
        a ? Object.keys(a).map((e) => /* @__PURE__ */ n(
          B,
          {
            value: e,
            control: /* @__PURE__ */ n(
              O,
              {
                ...g,
                checked: v(e),
                disabled: t.readonly
              }
            ),
            label: a[e]
          },
          e
        )) : /* @__PURE__ */ n("div", { children: "No options provided" }),
        /* @__PURE__ */ n(R, { className: "form-error-text", children: s.message })
      ] })
    }
  );
});
export {
  T as default
};
