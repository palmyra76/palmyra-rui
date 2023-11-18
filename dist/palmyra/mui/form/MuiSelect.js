import { jsx as r, jsxs as b, Fragment as g } from "react/jsx-runtime";
import { forwardRef as h, useContext as F, useRef as m, useImperativeHandle as v } from "react";
import { FormControl as x, InputLabel as M, Select as L, MenuItem as R, FormHelperText as j } from "@mui/material";
import { copyMuiOptions as y } from "./MuiUtil.js";
import { FieldManagerContext as I } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import O from "./FieldDecorator.js";
const P = h(function(e, i) {
  const d = F(I), u = i || m(null), { options: l } = e, n = d(e, "select", u), a = n.error, o = n.eventListeners, s = m(null);
  v(u, () => ({
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
      n.setData(t);
    }
  }), []);
  var c = y(e, n.data, e.label);
  e.readonly && (c.inputProps = { readOnly: !0 });
  var f = {
    onBlur: o.onBlur,
    onFocus: o.onFocus,
    onChange: (t) => o.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ r(
    O,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ b(x, { fullWidth: !0, error: a.status, children: [
        e.label ? /* @__PURE__ */ r(M, { children: e.label }) : /* @__PURE__ */ r(g, {}),
        /* @__PURE__ */ r(L, { ...c, ...f, inputRef: s, children: l ? Object.keys(l).map(
          (t, C) => /* @__PURE__ */ r(R, { value: t, children: l[t] }, C)
        ) : /* @__PURE__ */ r("div", { children: "No options provided" }) }),
        /* @__PURE__ */ r(j, { className: "form-error-text", children: a.message })
      ] })
    }
  );
});
export {
  P as default
};
