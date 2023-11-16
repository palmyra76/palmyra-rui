import { jsx as r, jsxs as d } from "react/jsx-runtime";
import { forwardRef as f, useContext as C, useRef as g, useImperativeHandle as F } from "react";
import { FormControl as h, Select as v, MenuItem as M, FormHelperText as b } from "@mui/material";
import { copyMuiOptions as x } from "./MuiUtil.js";
import { FieldManagerContext as p } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import L from "./FieldDecorator.js";
const I = f(function(e, u) {
  const { options: n } = e, o = C(p)(e, "select"), s = o.error, a = o.eventListeners, l = g(null);
  F(u, () => ({
    focus() {
      l.current.focus();
    },
    isValid() {
      return !s.status;
    },
    assignAttribute(t) {
      l.current.assignAttribute(t);
    }
  }), []);
  var i = x(e, o.data);
  e.readonly && (i.inputProps = { readOnly: !0 });
  var c = {
    onBlur: a.onBlur,
    onFocus: a.onFocus,
    onChange: (t) => a.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ r(
    L,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ d(h, { fullWidth: !0, error: s.status, children: [
        /* @__PURE__ */ r(v, { ...i, ...c, inputRef: l, children: n ? Object.keys(n).map(
          (t, m) => /* @__PURE__ */ r(M, { value: t, children: n[t] }, m)
        ) : /* @__PURE__ */ r("div", { children: "No options provided" }) }),
        /* @__PURE__ */ r(b, { className: "form-error-text", children: s.message })
      ] })
    }
  );
});
export {
  I as default
};
