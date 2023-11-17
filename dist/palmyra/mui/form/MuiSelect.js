import { jsx as t, jsxs as d, Fragment as f } from "react/jsx-runtime";
import { forwardRef as g, useContext as C, useRef as b, useImperativeHandle as F } from "react";
import { FormControl as h, InputLabel as v, Select as M, MenuItem as x, FormHelperText as L } from "@mui/material";
import { copyMuiOptions as j } from "./MuiUtil.js";
import { FieldManagerContext as y } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import I from "./FieldDecorator.js";
const V = g(function(e, u) {
  const { options: n } = e, l = C(y)(e, "select"), a = l.error, o = l.eventListeners, s = b(null);
  F(u, () => ({
    focus() {
      s.current.focus();
    },
    isValid() {
      return !a.status;
    },
    assignAttribute(r) {
      s.current.assignAttribute(r);
    }
  }), []);
  var i = j(e, l.data, e.label);
  e.readonly && (i.inputProps = { readOnly: !0 });
  var c = {
    onBlur: o.onBlur,
    onFocus: o.onFocus,
    onChange: (r) => o.onValueChange(r.target.value)
  };
  return /* @__PURE__ */ t(
    I,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ d(h, { fullWidth: !0, error: a.status, children: [
        e.label ? /* @__PURE__ */ t(v, { children: e.label }) : /* @__PURE__ */ t(f, {}),
        /* @__PURE__ */ t(M, { ...i, ...c, inputRef: s, children: n ? Object.keys(n).map(
          (r, m) => /* @__PURE__ */ t(x, { value: r, children: n[r] }, m)
        ) : /* @__PURE__ */ t("div", { children: "No options provided" }) }),
        /* @__PURE__ */ t(L, { className: "form-error-text", children: a.message })
      ] })
    }
  );
});
export {
  V as default
};
