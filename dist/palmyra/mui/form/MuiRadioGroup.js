import { jsx as o, Fragment as h, jsxs as x } from "react/jsx-runtime";
import { forwardRef as R, useContext as M, useRef as d, useImperativeHandle as L } from "react";
import { FormControl as O, RadioGroup as p, FormControlLabel as y, Radio as D, FormHelperText as V } from "@mui/material";
import { copyMuiOptions as j, getFieldLabel as G } from "./MuiUtil.js";
import { FieldManagerContext as w } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import A from "./FieldDecorator.js";
const W = R(function(e, i) {
  const m = M(w), u = i || d(null), { options: n } = e, r = m(e, "radio", u), { mutateOptions: f, setMutateOptions: b } = r, C = e.flexDirection != "column", a = r.error, s = r.eventListeners, l = d(null);
  L(u, () => ({
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
      b({ visible: t });
    }
  }), []);
  var c = j(e, r.data, e.label);
  e.readonly && (c.inputProps = { readOnly: !0 });
  const g = !!e.readonly;
  var F = {
    onBlur: s.onBlur,
    onFocus: s.onFocus,
    onChange: (t) => {
      g || s.onValueChange(t.target.value);
    }
  };
  return /* @__PURE__ */ o(h, { children: f.visible && /* @__PURE__ */ o(
    A,
    {
      label: G(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ x(O, { fullWidth: !0, error: a.status, children: [
        /* @__PURE__ */ o(p, { row: C, ...F, ...c, children: n ? Object.keys(n).map((t, v) => /* @__PURE__ */ o(
          y,
          {
            value: t,
            control: /* @__PURE__ */ o(D, { inputRef: l }),
            label: n[t]
          },
          v
        )) : /* @__PURE__ */ o("div", { children: "No options provided" }) }),
        /* @__PURE__ */ o(V, { className: "form-error-text", children: a.message })
      ] })
    }
  ) });
});
export {
  W as default
};
