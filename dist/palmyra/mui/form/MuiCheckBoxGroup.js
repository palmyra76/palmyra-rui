import { jsx as r, Fragment as M, jsxs as R } from "react/jsx-runtime";
import { forwardRef as k, useContext as L, useRef as h, useImperativeHandle as V } from "react";
import { FormControl as y, FormControlLabel as B, Checkbox as j, FormHelperText as w } from "@mui/material";
import { copyMuiOptions as G, getFieldLabel as H } from "./MuiUtil.js";
import { FieldManagerContext as N } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import P from "./FieldDecorator.js";
const z = k(function(t, f) {
  const b = L(N), m = f || h(null), { options: l } = t, a = b(t, "checkbox", m), { mutateOptions: g, setMutateOptions: s } = a, x = a.data ? a.data.split(",") : [], F = t.flexDirection || "row", i = a.error, c = a.eventListeners, v = t.autoFocus || !1, u = h(null);
  V(m, () => ({
    focus() {
      u.current.checked = !0, u.current.focus();
    },
    isValid() {
      return !i.status;
    },
    getValue() {
      return a.getData();
    },
    clear() {
      a.setData("", !0);
    },
    setValue(e, o = !1) {
      a.setData(e, o);
    },
    setVisible(e) {
      s((o) => ({ ...o, visible: e }));
    },
    setRequired(e) {
      s((o) => ({ ...o, required: e }));
    },
    setReadOnly(e) {
      s((o) => ({ ...o, readonly: e }));
    },
    setAttribute(e) {
      s((o) => ({ ...o, ...e }));
    },
    setOptions(e) {
    },
    getOptions() {
    }
  }), [a]);
  var C = G(t, a.data, t.label);
  t.readonly && (C.inputProps = { readOnly: !0 });
  function p(e, o) {
    const n = a.data ? a.data.split(",") : [];
    var d = n.indexOf(e);
    o ? d < 0 && n.push(e) : d >= 0 && n.splice(d, 1), c.onValueChange(n.toString());
  }
  var O = {
    onBlur: c.onBlur,
    onFocus: c.onFocus,
    onChange: (e) => {
      p(e.target.value, e.target.checked);
    }
  };
  const D = (e) => x.includes(e);
  return /* @__PURE__ */ r(M, { children: g.visible && /* @__PURE__ */ r(
    P,
    {
      label: H(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ R(y, { fullWidth: !0, error: i.status, ...C, style: { flexDirection: F }, children: [
        l ? Object.keys(l).map((e, o) => /* @__PURE__ */ r(
          B,
          {
            value: e,
            control: /* @__PURE__ */ r(
              j,
              {
                ...O,
                checked: D(e),
                autoFocus: v,
                disabled: t.readonly,
                inputRef: (n) => {
                  o == 0 && (u.current = n);
                }
              }
            ),
            label: l[e]
          },
          e
        )) : /* @__PURE__ */ r("div", { children: "No options provided" }),
        /* @__PURE__ */ r(w, { className: "form-error-text", children: i.message })
      ] })
    }
  ) });
});
export {
  z as default
};
