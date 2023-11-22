import { jsx as n, Fragment as m, jsxs as v } from "react/jsx-runtime";
import { forwardRef as F, useContext as M, useRef as d, useImperativeHandle as x } from "react";
import { FormControl as L, InputLabel as O, Select as R, MenuItem as p, FormHelperText as V } from "@mui/material";
import { copyMuiOptions as j } from "./MuiUtil.js";
import { FieldManagerContext as y } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import D from "./FieldDecorator.js";
const k = F(function(e, i) {
  const f = M(y), u = i || d(null), { options: s } = e, r = f(e, "select", u), { mutateOptions: b, setMutateOptions: C } = r, a = r.error, o = r.eventListeners, l = d(null);
  x(u, () => ({
    focus() {
      l && l.current.focus();
    },
    isValid() {
      return !a.status;
    },
    assignAttribute(t) {
      l.current.assignAttribute(t);
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
  var c = j(e, r.data, e.label);
  e.readonly && (c.inputProps = { readOnly: !0 });
  var g = {
    onBlur: o.onBlur,
    onFocus: o.onFocus,
    onChange: (t) => o.onValueChange(t.target.value)
  };
  return /* @__PURE__ */ n(m, { children: b.visible && /* @__PURE__ */ n(
    D,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ v(L, { fullWidth: !0, error: a.status, children: [
        e.label ? /* @__PURE__ */ n(O, { children: e.label }) : /* @__PURE__ */ n(m, {}),
        /* @__PURE__ */ n(R, { ...c, ...g, inputRef: (t) => {
          l.current = t;
        }, children: s ? Object.keys(s).map(
          (t, h) => /* @__PURE__ */ n(p, { value: t, children: s[t] }, h)
        ) : /* @__PURE__ */ n("div", { children: "No options provided" }) }),
        /* @__PURE__ */ n(V, { className: "form-error-text", children: a.message })
      ] })
    }
  ) });
});
export {
  k as default
};
