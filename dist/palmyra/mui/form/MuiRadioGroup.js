import { jsx as o, jsxs as F } from "react/jsx-runtime";
import { forwardRef as v, useContext as h, useRef as d, useImperativeHandle as x } from "react";
import { FormControl as R, RadioGroup as M, FormControlLabel as y, Radio as L, FormHelperText as O } from "@mui/material";
import { copyMuiOptions as j } from "./MuiUtil.js";
import { FieldManagerContext as p } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import D from "./FieldDecorator.js";
const P = v(function(e, i) {
  const m = h(p), u = i || d(null), { options: n } = e, r = m(e, "radio", u), f = e.flexDirection != "column", a = r.error, l = r.eventListeners, s = d(null);
  x(u, () => ({
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
  var c = j(e, r.data, e.label);
  e.readonly && (c.inputProps = { readOnly: !0 });
  const C = !!e.readonly;
  var b = {
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (t) => {
      C || l.onValueChange(t.target.value);
    }
  };
  return /* @__PURE__ */ o(
    D,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ F(R, { fullWidth: !0, error: a.status, children: [
        /* @__PURE__ */ o(M, { row: f, ...b, ...c, children: n ? Object.keys(n).map((t, g) => /* @__PURE__ */ o(
          y,
          {
            value: t,
            control: /* @__PURE__ */ o(L, { inputRef: s }),
            label: n[t]
          },
          g
        )) : /* @__PURE__ */ o("div", { children: "No options provided" }) }),
        /* @__PURE__ */ o(O, { className: "form-error-text", children: a.message })
      ] })
    }
  );
});
export {
  P as default
};
