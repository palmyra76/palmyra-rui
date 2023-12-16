import { jsx as a, Fragment as h, jsxs as O } from "react/jsx-runtime";
import { forwardRef as x, useContext as M, useRef as f, useImperativeHandle as y } from "react";
import { FormControl as L, RadioGroup as p, FormControlLabel as D, Radio as V, FormHelperText as j } from "@mui/material";
import { copyMuiOptions as G, getFieldLabel as w } from "./MuiUtil.js";
import { FieldManagerContext as B } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import H from "./FieldDecorator.js";
const W = x(function(t, c) {
  const C = M(B), d = c || f(null), { options: s } = t, r = C(t, "radio", d), { mutateOptions: F, setMutateOptions: n } = r, g = t.flexDirection != "column", l = r.error, i = r.eventListeners, b = t.autoFocus || !1, u = f(null);
  y(d, () => ({
    focus() {
      u && u.current.focus();
    },
    isValid() {
      return !l.status;
    },
    getValue() {
      return r.getData();
    },
    clear() {
      r.setData("", !0);
    },
    setValue(e, o = !1) {
      r.setData(e, o);
    },
    setVisible(e) {
      n((o) => ({ ...o, visible: e }));
    },
    setRequired(e) {
      n((o) => ({ ...o, required: e }));
    },
    setReadOnly(e) {
      n((o) => ({ ...o, readonly: e }));
    },
    setAttribute(e) {
      n((o) => ({ ...o, ...e }));
    },
    setOptions(e) {
    },
    getOptions() {
    }
  }), [r]);
  var m = G(t, r.data, t.label);
  t.readonly && (m.inputProps = { readOnly: !0 });
  const v = !!t.readonly;
  var R = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: (e) => {
      v || i.onValueChange(e.target.value);
    }
  };
  return /* @__PURE__ */ a(h, { children: F.visible && /* @__PURE__ */ a(
    H,
    {
      label: w(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ O(L, { fullWidth: !0, error: l.status, children: [
        /* @__PURE__ */ a(p, { row: g, ...R, ...m, children: s ? Object.keys(s).map((e, o) => /* @__PURE__ */ a(
          D,
          {
            value: e,
            control: /* @__PURE__ */ a(V, { inputRef: u, autoFocus: b }),
            label: s[e]
          },
          o
        )) : /* @__PURE__ */ a("div", { children: "No options provided" }) }),
        /* @__PURE__ */ a(j, { className: "form-error-text", children: l.message })
      ] })
    }
  ) });
});
export {
  W as default
};
