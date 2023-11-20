import { jsx as o, jsxs as v } from "react/jsx-runtime";
import { forwardRef as h, useContext as x, useRef as d, useImperativeHandle as R } from "react";
import { FormControl as M, RadioGroup as y, FormControlLabel as L, Radio as O, FormHelperText as j } from "@mui/material";
import { copyMuiOptions as D } from "./MuiUtil.js";
import { FieldManagerContext as G } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import V from "./FieldDecorator.js";
const q = h(function(e, i) {
  const m = x(G), u = i || d(null), { options: n } = e, r = m(e, "radio", u), f = e.flexDirection != "column", a = r.error, l = r.eventListeners, s = d(null);
  R(u, () => ({
    focus() {
      s.current.focus();
    },
    isValid() {
      return !a.status;
    },
    assignAttribute(t) {
      s.current.assignAttribute(t);
    },
    setValue(t) {
      r.setData(t);
    }
  }), []);
  var c = D(e, r.data, e.label);
  e.readonly && (c.inputProps = { readOnly: !0 });
  const C = !!e.readonly;
  var b = {
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (t) => {
      C || l.onValueChange(t.target.value);
    }
  };
  const g = e.required ? e.title + "*" : e.title;
  return /* @__PURE__ */ o(
    V,
    {
      label: g,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ v(M, { fullWidth: !0, error: a.status, children: [
        /* @__PURE__ */ o(y, { row: f, ...b, ...c, children: n ? Object.keys(n).map((t, F) => /* @__PURE__ */ o(
          L,
          {
            value: t,
            control: /* @__PURE__ */ o(O, { inputRef: s }),
            label: n[t]
          },
          F
        )) : /* @__PURE__ */ o("div", { children: "No options provided" }) }),
        /* @__PURE__ */ o(j, { className: "form-error-text", children: a.message })
      ] })
    }
  );
});
export {
  q as default
};
