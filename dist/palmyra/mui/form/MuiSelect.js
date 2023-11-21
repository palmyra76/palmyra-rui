import { jsx as n, Fragment as m, jsxs as v } from "react/jsx-runtime";
import { forwardRef as F, useContext as M, useRef as d, useImperativeHandle as x } from "react";
import { FormControl as L, InputLabel as O, Select as R, MenuItem as V, FormHelperText as j } from "@mui/material";
import { copyMuiOptions as p } from "./MuiUtil.js";
import { FieldManagerContext as y } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import D from "./FieldDecorator.js";
const k = F(function(e, i) {
  const f = M(y), u = i || d(null), { options: l } = e, r = f(e, "select", u), { mutateOptions: b, setMutateOptions: C } = r, s = r.error, a = r.eventListeners, o = d(null);
  x(u, () => ({
    focus() {
      o.current.focus();
    },
    isValid() {
      return !s.status;
    },
    assignAttribute(t) {
      o.current.assignAttribute(t);
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
  var c = p(e, r.data, e.label);
  e.readonly && (c.inputProps = { readOnly: !0 });
  var g = {
    onBlur: a.onBlur,
    onFocus: a.onFocus,
    onChange: (t) => a.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ n(m, { children: b.visible && /* @__PURE__ */ n(
    D,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ v(L, { fullWidth: !0, error: s.status, children: [
        e.label ? /* @__PURE__ */ n(O, { children: e.label }) : /* @__PURE__ */ n(m, {}),
        /* @__PURE__ */ n(R, { ...c, ...g, inputRef: o, children: l ? Object.keys(l).map(
          (t, h) => /* @__PURE__ */ n(V, { value: t, children: l[t] }, h)
        ) : /* @__PURE__ */ n("div", { children: "No options provided" }) }),
        /* @__PURE__ */ n(j, { className: "form-error-text", children: s.message })
      ] })
    }
  ) });
});
export {
  k as default
};
