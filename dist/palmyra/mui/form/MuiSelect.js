import { jsx as a, Fragment as d, jsxs as x } from "react/jsx-runtime";
import { forwardRef as L, useContext as O, useRef as m, useImperativeHandle as R } from "react";
import { FormControl as V, InputLabel as D, Select as j, MenuItem as y, FormHelperText as I } from "@mui/material";
import { copyMuiOptions as S, getFieldLabel as q } from "./MuiUtil.js";
import { FieldManagerContext as A } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import B from "./FieldDecorator.js";
const z = L(function(e, i) {
  const f = O(A), u = i || m(null), { options: s } = e, b = e.variant || "standard", g = e.autoFocus || !1, v = e.required || !1, n = f(e, "select", u), { mutateOptions: C, setMutateOptions: F } = n, l = n.error, o = n.eventListeners, r = m(null);
  R(u, () => ({
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
      F({ visible: t });
    }
  }), [n]);
  var c = S(e, n.data, e.label);
  e.readonly && (c.inputProps = { readOnly: !0 });
  var h = {
    onBlur: o.onBlur,
    onFocus: o.onFocus,
    onChange: (t) => o.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ a(d, { children: C.visible && /* @__PURE__ */ a(
    B,
    {
      label: q(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ x(V, { variant: b, fullWidth: !0, error: l.status, children: [
        e.label ? /* @__PURE__ */ a(D, { required: v, children: e.label }) : /* @__PURE__ */ a(d, {}),
        /* @__PURE__ */ a(j, { ...c, ...h, inputRef: (t) => {
          r.current = t;
        }, autoFocus: g, children: s ? Object.keys(s).map(
          (t, M) => /* @__PURE__ */ a(y, { value: t, children: s[t] }, M)
        ) : /* @__PURE__ */ a("div", { children: "No options provided" }) }),
        /* @__PURE__ */ a(I, { className: "form-error-text", children: l.message })
      ] })
    }
  ) });
});
export {
  z as default
};
