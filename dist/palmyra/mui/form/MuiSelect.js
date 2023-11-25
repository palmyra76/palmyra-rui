import { jsx as n, Fragment as d, jsxs as F } from "react/jsx-runtime";
import { forwardRef as M, useContext as x, useRef as m, useImperativeHandle as L } from "react";
import { FormControl as O, InputLabel as R, Select as V, MenuItem as j, FormHelperText as y } from "@mui/material";
import { copyMuiOptions as D, getFieldLabel as I } from "./MuiUtil.js";
import { FieldManagerContext as S } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import p from "./FieldDecorator.js";
const T = M(function(e, i) {
  const f = x(S), u = i || m(null), { options: l } = e, b = e.variant || "standard", r = f(e, "select", u), { mutateOptions: v, setMutateOptions: C } = r, s = r.error, o = r.eventListeners, a = m(null);
  L(u, () => ({
    focus() {
      a && a.current.focus();
    },
    isValid() {
      return !s.status;
    },
    assignAttribute(t) {
      a.current.assignAttribute(t);
    },
    clear() {
      r.setData("");
    },
    setValue(t) {
      r.setData(t);
    },
    setVisible(t) {
      C({ visible: t });
    }
  }), []);
  var c = D(e, r.data, e.label);
  e.readonly && (c.inputProps = { readOnly: !0 });
  var g = {
    onBlur: o.onBlur,
    onFocus: o.onFocus,
    onChange: (t) => o.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ n(d, { children: v.visible && /* @__PURE__ */ n(
    p,
    {
      label: I(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ F(O, { variant: b, fullWidth: !0, error: s.status, children: [
        e.label ? /* @__PURE__ */ n(R, { children: e.label }) : /* @__PURE__ */ n(d, {}),
        /* @__PURE__ */ n(V, { ...c, ...g, inputRef: (t) => {
          a.current = t;
        }, children: l ? Object.keys(l).map(
          (t, h) => /* @__PURE__ */ n(j, { value: t, children: l[t] }, h)
        ) : /* @__PURE__ */ n("div", { children: "No options provided" }) }),
        /* @__PURE__ */ n(y, { className: "form-error-text", children: s.message })
      ] })
    }
  ) });
});
export {
  T as default
};
