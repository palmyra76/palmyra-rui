import { jsx as l, Fragment as g, jsxs as R } from "react/jsx-runtime";
import { forwardRef as L, useContext as V, useRef as b, useImperativeHandle as q } from "react";
import { FormControl as y, InputLabel as D, Select as j, MenuItem as I, FormHelperText as P } from "@mui/material";
import { copyMuiOptions as S, getFieldLabel as B } from "./MuiUtil.js";
import { FieldManagerContext as H } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import N from "./FieldDecorator.js";
const G = L(function(e, c) {
  var f;
  const C = V(H), d = c || b(null), { options: s } = e, F = e.variant || "standard", v = e.autoFocus || !1, h = e.required || !1, a = C(e, "select", d), { mutateOptions: M, setMutateOptions: r } = a, i = a.error, o = a.eventListeners, u = b(null);
  q(d, () => ({
    focus() {
      u && u.current.focus();
    },
    isValid() {
      return !i.status;
    },
    getValue() {
      return a.getData();
    },
    clear() {
      a.setData("", !0);
    },
    setValue(t, n = !1) {
      a.setData(t, n);
    },
    setVisible(t) {
      r((n) => ({ ...n, visible: t }));
    },
    setRequired(t) {
      r((n) => ({ ...n, required: t }));
    },
    setReadOnly(t) {
      r((n) => ({ ...n, readonly: t }));
    },
    setAttribute(t) {
      r((n) => ({ ...n, ...t }));
    },
    setOptions(t) {
    },
    getOptions() {
    }
  }), [a]);
  var m = S(e, a.data, e.label);
  e.readonly && (m.inputProps = { readOnly: !0 });
  var x = {
    onBlur: o.onBlur,
    onFocus: o.onFocus,
    onChange: (t) => o.onValueChange(t.target.value)
  };
  const O = ((f = e == null ? void 0 : e.fieldProps) == null ? void 0 : f.size) == "small" ? 1 : 0;
  return /* @__PURE__ */ l(g, { children: M.visible && /* @__PURE__ */ l(
    N,
    {
      label: B(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ R(y, { variant: F, fullWidth: !0, error: i.status, children: [
        e.label ? /* @__PURE__ */ l(D, { required: h, children: e.label }) : /* @__PURE__ */ l(g, {}),
        /* @__PURE__ */ l(j, { sx: {
          m: O
        }, ...m, ...x, inputRef: (t) => {
          u.current = t;
        }, autoFocus: v, children: s ? Object.keys(s).map(
          (t, n) => /* @__PURE__ */ l(I, { value: t, children: s[t] }, n)
        ) : /* @__PURE__ */ l("div", { children: "No options provided" }) }),
        /* @__PURE__ */ l(P, { className: "form-error-text", children: i.message })
      ] })
    }
  ) });
});
export {
  G as default
};
