import { jsx as o, Fragment as x, jsxs as R } from "react/jsx-runtime";
import { forwardRef as M, useContext as L, useRef as d, useImperativeHandle as O } from "react";
import { FormControl as y, RadioGroup as D, FormControlLabel as V, Radio as j, FormHelperText as p } from "@mui/material";
import { copyMuiOptions as G, getFieldLabel as w } from "./MuiUtil.js";
import { FieldManagerContext as A } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import B from "./FieldDecorator.js";
const q = M(function(e, i) {
  const m = L(A), u = i || d(null), { options: a } = e, r = m(e, "radio", u), { mutateOptions: f, setMutateOptions: b } = r, C = e.flexDirection != "column", n = r.error, s = r.eventListeners, F = e.autoFocus || !1, l = d(null);
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
    clear() {
      r.setData("");
    },
    setValue(t) {
      r.setData(t);
    },
    setVisible(t) {
      b({ visible: t });
    }
  }), []);
  var c = G(e, r.data, e.label);
  e.readonly && (c.inputProps = { readOnly: !0 });
  const g = !!e.readonly;
  var v = {
    onBlur: s.onBlur,
    onFocus: s.onFocus,
    onChange: (t) => {
      g || s.onValueChange(t.target.value);
    }
  };
  return /* @__PURE__ */ o(x, { children: f.visible && /* @__PURE__ */ o(
    B,
    {
      label: w(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ R(y, { fullWidth: !0, error: n.status, children: [
        /* @__PURE__ */ o(D, { row: C, ...v, ...c, children: a ? Object.keys(a).map((t, h) => /* @__PURE__ */ o(
          V,
          {
            value: t,
            control: /* @__PURE__ */ o(j, { inputRef: l, autoFocus: F }),
            label: a[t]
          },
          h
        )) : /* @__PURE__ */ o("div", { children: "No options provided" }) }),
        /* @__PURE__ */ o(p, { className: "form-error-text", children: n.message })
      ] })
    }
  ) });
});
export {
  q as default
};
