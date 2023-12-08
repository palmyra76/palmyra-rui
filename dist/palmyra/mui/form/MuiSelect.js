import { jsx as a, Fragment as d, jsxs as M } from "react/jsx-runtime";
import { forwardRef as x, useContext as L, useRef as m, useImperativeHandle as O } from "react";
import { FormControl as R, InputLabel as V, Select as D, MenuItem as j, FormHelperText as y } from "@mui/material";
import { copyMuiOptions as I, getFieldLabel as S } from "./MuiUtil.js";
import { FieldManagerContext as A } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import B from "./FieldDecorator.js";
const p = x(function(e, i) {
  const f = L(A), u = i || m(null), { options: s } = e, b = e.variant || "standard", g = e.autoFocus || !1, n = f(e, "select", u), { mutateOptions: v, setMutateOptions: C } = n, l = n.error, o = n.eventListeners, r = m(null);
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
    getValue() {
      return n.getData();
    },
    clear() {
      n.setData("");
    },
    setValue(t) {
      n.setData(t);
    },
    setVisible(t) {
      C({ visible: t });
    }
  }), [n]);
  var c = I(e, n.data, e.label);
  e.readonly && (c.inputProps = { readOnly: !0 });
  var F = {
    onBlur: o.onBlur,
    onFocus: o.onFocus,
    onChange: (t) => o.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ a(d, { children: v.visible && /* @__PURE__ */ a(
    B,
    {
      label: S(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ M(R, { variant: b, fullWidth: !0, error: l.status, children: [
        e.label ? /* @__PURE__ */ a(V, { children: e.label }) : /* @__PURE__ */ a(d, {}),
        /* @__PURE__ */ a(D, { ...c, ...F, inputRef: (t) => {
          r.current = t;
        }, autoFocus: g, children: s ? Object.keys(s).map(
          (t, h) => /* @__PURE__ */ a(j, { value: t, children: s[t] }, h)
        ) : /* @__PURE__ */ a("div", { children: "No options provided" }) }),
        /* @__PURE__ */ a(y, { className: "form-error-text", children: l.message })
      ] })
    }
  ) });
});
export {
  p as default
};
