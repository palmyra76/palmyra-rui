import { jsx as n, Fragment as d, jsxs as M } from "react/jsx-runtime";
import { forwardRef as x, useContext as L, useRef as m, useImperativeHandle as O } from "react";
import { FormControl as R, InputLabel as V, Select as j, MenuItem as y, FormHelperText as D } from "@mui/material";
import { copyMuiOptions as I, getFieldLabel as S } from "./MuiUtil.js";
import { FieldManagerContext as A } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import B from "./FieldDecorator.js";
const p = x(function(e, i) {
  const f = L(A), u = i || m(null), { options: s } = e, b = e.variant || "standard", v = e.autoFocus || !1, a = f(e, "select", u), { mutateOptions: C, setMutateOptions: F } = a, l = a.error, o = a.eventListeners, r = m(null);
  O(u, () => ({
    focus() {
      r && r.current.focus();
    },
    isValid() {
      return !l.status;
    },
    assignAttribute(t) {
      r.current.assignAttribute(t);
    },
    clear() {
      a.setData("");
    },
    setValue(t) {
      a.setData(t);
    },
    setVisible(t) {
      F({ visible: t });
    }
  }), []);
  var c = I(e, a.data, e.label);
  e.readonly && (c.inputProps = { readOnly: !0 });
  var g = {
    onBlur: o.onBlur,
    onFocus: o.onFocus,
    onChange: (t) => o.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ n(d, { children: C.visible && /* @__PURE__ */ n(
    B,
    {
      label: S(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ M(R, { variant: b, fullWidth: !0, error: l.status, children: [
        e.label ? /* @__PURE__ */ n(V, { children: e.label }) : /* @__PURE__ */ n(d, {}),
        /* @__PURE__ */ n(j, { ...c, ...g, inputRef: (t) => {
          r.current = t;
        }, autoFocus: v, children: s ? Object.keys(s).map(
          (t, h) => /* @__PURE__ */ n(y, { value: t, children: s[t] }, h)
        ) : /* @__PURE__ */ n("div", { children: "No options provided" }) }),
        /* @__PURE__ */ n(D, { className: "form-error-text", children: l.message })
      ] })
    }
  ) });
});
export {
  p as default
};
