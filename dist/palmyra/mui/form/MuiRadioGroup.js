import { jsx as t, jsxs as C } from "react/jsx-runtime";
import { forwardRef as g, useContext as F, useRef as b, useImperativeHandle as v } from "react";
import { FormControl as h, RadioGroup as x, FormControlLabel as p, Radio as R, FormHelperText as M } from "@mui/material";
import { copyMuiOptions as L } from "./MuiUtil.js";
import { FieldManagerContext as j } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import y from "./FieldDecorator.js";
const N = g(function(e, u) {
  const c = F(j), { options: r } = e, n = c(e, "radio"), d = e.flexDirection != "column", a = n.error, s = n.eventListeners, i = b(null);
  v(u, () => ({
    focus() {
      i.current.focus();
    },
    isValid() {
      return !a.status;
    },
    assignAttribute(o) {
      i.current.assignAttribute(o);
    }
  }), []);
  var l = L(e, n.data);
  e.readonly && (l.inputProps = { readOnly: !0 });
  var m = {
    onBlur: s.onBlur,
    onFocus: s.onFocus,
    onChange: (o) => s.onValueChange(o.target.value)
  };
  return /* @__PURE__ */ t(
    y,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ C(h, { fullWidth: !0, error: a.status, children: [
        /* @__PURE__ */ t(x, { row: d, ...m, ...l, children: r ? Object.keys(r).map((o, f) => /* @__PURE__ */ t(
          p,
          {
            value: o,
            control: /* @__PURE__ */ t(R, { inputRef: i, inputProps: l }),
            label: r[o]
          },
          f
        )) : /* @__PURE__ */ t("div", { children: "No options provided" }) }),
        /* @__PURE__ */ t(M, { className: "form-error-text", children: a.message })
      ] })
    }
  );
});
export {
  N as default
};
