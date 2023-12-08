import { jsx as r, Fragment as x, jsxs as R } from "react/jsx-runtime";
import { forwardRef as M, useContext as L, useRef as d, useImperativeHandle as O } from "react";
import { FormControl as y, RadioGroup as D, FormControlLabel as V, Radio as j, FormHelperText as p } from "@mui/material";
import { copyMuiOptions as G, getFieldLabel as w } from "./MuiUtil.js";
import { FieldManagerContext as A } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import B from "./FieldDecorator.js";
const q = M(function(e, i) {
  const m = L(A), u = i || d(null), { options: a } = e, o = m(e, "radio", u), { mutateOptions: f, setMutateOptions: b } = o, g = e.flexDirection != "column", n = o.error, s = o.eventListeners, C = e.autoFocus || !1, l = d(null);
  O(u, () => ({
    focus() {
      l.current.focus();
    },
    isValid() {
      return !n.status;
    },
    assignAttribute(t) {
      l.current.assignAttribute(t);
    },
    getValue() {
      return o.getData();
    },
    clear() {
      o.setData("");
    },
    setValue(t) {
      o.setData(t);
    },
    setVisible(t) {
      b({ visible: t });
    }
  }), [o]);
  var c = G(e, o.data, e.label);
  e.readonly && (c.inputProps = { readOnly: !0 });
  const F = !!e.readonly;
  var v = {
    onBlur: s.onBlur,
    onFocus: s.onFocus,
    onChange: (t) => {
      F || s.onValueChange(t.target.value);
    }
  };
  return /* @__PURE__ */ r(x, { children: f.visible && /* @__PURE__ */ r(
    B,
    {
      label: w(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ R(y, { fullWidth: !0, error: n.status, children: [
        /* @__PURE__ */ r(D, { row: g, ...v, ...c, children: a ? Object.keys(a).map((t, h) => /* @__PURE__ */ r(
          V,
          {
            value: t,
            control: /* @__PURE__ */ r(j, { inputRef: l, autoFocus: C }),
            label: a[t]
          },
          h
        )) : /* @__PURE__ */ r("div", { children: "No options provided" }) }),
        /* @__PURE__ */ r(p, { className: "form-error-text", children: n.message })
      ] })
    }
  ) });
});
export {
  q as default
};
