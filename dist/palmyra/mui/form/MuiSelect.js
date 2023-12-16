import { jsx as r, Fragment as f, jsxs as O } from "react/jsx-runtime";
import { forwardRef as x, useContext as R, useRef as b, useImperativeHandle as L } from "react";
import { FormControl as V, InputLabel as q, Select as y, MenuItem as D, FormHelperText as j } from "@mui/material";
import { copyMuiOptions as I, getFieldLabel as S } from "./MuiUtil.js";
import { FieldManagerContext as B } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import H from "./FieldDecorator.js";
const p = x(function(t, c) {
  const g = R(B), d = c || b(null), { options: l } = t, C = t.variant || "standard", F = t.autoFocus || !1, v = t.required || !1, a = g(t, "select", d), { mutateOptions: h, setMutateOptions: s } = a, o = a.error, i = a.eventListeners, u = b(null);
  L(d, () => ({
    focus() {
      u && u.current.focus();
    },
    isValid() {
      return !o.status;
    },
    getValue() {
      return a.getData();
    },
    clear() {
      a.setData("", !0);
    },
    setValue(e, n = !1) {
      a.setData(e, n);
    },
    setVisible(e) {
      s((n) => ({ ...n, visible: e }));
    },
    setRequired(e) {
      s((n) => ({ ...n, required: e }));
    },
    setReadOnly(e) {
      s((n) => ({ ...n, readonly: e }));
    },
    setAttribute(e) {
      s((n) => ({ ...n, ...e }));
    },
    setOptions(e) {
    },
    getOptions() {
    }
  }), [a]);
  var m = I(t, a.data, t.label);
  t.readonly && (m.inputProps = { readOnly: !0 });
  var M = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: (e) => i.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ r(f, { children: h.visible && /* @__PURE__ */ r(
    H,
    {
      label: S(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ O(V, { variant: C, fullWidth: !0, error: o.status, children: [
        t.label ? /* @__PURE__ */ r(q, { required: v, children: t.label }) : /* @__PURE__ */ r(f, {}),
        /* @__PURE__ */ r(y, { ...m, ...M, inputRef: (e) => {
          u.current = e;
        }, autoFocus: F, children: l ? Object.keys(l).map(
          (e, n) => /* @__PURE__ */ r(D, { value: e, children: l[e] }, n)
        ) : /* @__PURE__ */ r("div", { children: "No options provided" }) }),
        /* @__PURE__ */ r(j, { className: "form-error-text", children: o.message })
      ] })
    }
  ) });
});
export {
  p as default
};
