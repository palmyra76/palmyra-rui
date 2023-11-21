import { jsx as o, Fragment as x, jsxs as R } from "react/jsx-runtime";
import { forwardRef as M, useContext as O, useRef as d, useImperativeHandle as y } from "react";
import { FormControl as L, RadioGroup as D, FormControlLabel as V, Radio as j, FormHelperText as G } from "@mui/material";
import { copyMuiOptions as w } from "./MuiUtil.js";
import { FieldManagerContext as A } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import B from "./FieldDecorator.js";
const T = M(function(e, i) {
  const m = O(A), u = i || d(null), { options: n } = e, r = m(e, "radio", u), { mutateOptions: f, setMutateOptions: C } = r, b = e.flexDirection != "column", a = r.error, s = r.eventListeners, l = d(null);
  y(u, () => ({
    focus() {
      l.current.focus();
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
  var c = w(e, r.data, e.label);
  e.readonly && (c.inputProps = { readOnly: !0 });
  const g = !!e.readonly;
  var v = {
    onBlur: s.onBlur,
    onFocus: s.onFocus,
    onChange: (t) => {
      g || s.onValueChange(t.target.value);
    }
  };
  const F = e.required ? e.title + "*" : e.title;
  return /* @__PURE__ */ o(x, { children: f.visible && /* @__PURE__ */ o(
    B,
    {
      label: F,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ R(L, { fullWidth: !0, error: a.status, children: [
        /* @__PURE__ */ o(D, { row: b, ...v, ...c, children: n ? Object.keys(n).map((t, h) => /* @__PURE__ */ o(
          V,
          {
            value: t,
            control: /* @__PURE__ */ o(j, { inputRef: l }),
            label: n[t]
          },
          h
        )) : /* @__PURE__ */ o("div", { children: "No options provided" }) }),
        /* @__PURE__ */ o(G, { className: "form-error-text", children: a.message })
      ] })
    }
  ) });
});
export {
  T as default
};
