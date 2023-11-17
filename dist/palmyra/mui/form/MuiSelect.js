import { jsx as t, jsxs as b, Fragment as g } from "react/jsx-runtime";
import { forwardRef as h, useContext as F, useRef as m, useImperativeHandle as v } from "react";
import { FormControl as x, InputLabel as M, Select as L, MenuItem as R, FormHelperText as j } from "@mui/material";
import { copyMuiOptions as y } from "./MuiUtil.js";
import { FieldManagerContext as I } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import O from "./FieldDecorator.js";
const k = h(function(e, i) {
  const d = F(I), u = i || m(null), { options: n } = e, l = d(e, "select", u), o = l.error, a = l.eventListeners, s = m(null);
  v(u, () => ({
    focus() {
      s.current.focus();
    },
    isValid() {
      return !o.status;
    },
    assignAttribute(r) {
      s.current.assignAttribute(r);
    }
  }), []);
  var c = y(e, l.data, e.label);
  e.readonly && (c.inputProps = { readOnly: !0 });
  var f = {
    onBlur: a.onBlur,
    onFocus: a.onFocus,
    onChange: (r) => a.onValueChange(r.target.value)
  };
  return /* @__PURE__ */ t(
    O,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ b(x, { fullWidth: !0, error: o.status, children: [
        e.label ? /* @__PURE__ */ t(M, { children: e.label }) : /* @__PURE__ */ t(g, {}),
        /* @__PURE__ */ t(L, { ...c, ...f, inputRef: s, children: n ? Object.keys(n).map(
          (r, C) => /* @__PURE__ */ t(R, { value: r, children: n[r] }, C)
        ) : /* @__PURE__ */ t("div", { children: "No options provided" }) }),
        /* @__PURE__ */ t(j, { className: "form-error-text", children: o.message })
      ] })
    }
  );
});
export {
  k as default
};
