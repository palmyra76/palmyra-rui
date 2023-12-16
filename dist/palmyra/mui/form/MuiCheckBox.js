import { jsx as r, Fragment as M, jsxs as R } from "react/jsx-runtime";
import { forwardRef as k, useContext as L, useRef as h, useImperativeHandle as V } from "react";
import { FormControl as y, FormControlLabel as B, Checkbox as j, FormHelperText as w } from "@mui/material";
import { copyMuiOptions as H, getFieldLabel as N } from "./MuiUtil.js";
import { FieldManagerContext as P } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import S from "./FieldDecorator.js";
const E = k(function(t, f) {
  const b = L(P), m = f || h(null), { options: l } = t, n = b(t, "checkbox", m), { mutateOptions: g, setMutateOptions: s } = n, x = n.data ? n.data.split(",") : [], F = t.flexDirection || "row", i = n.error, c = n.eventListeners, v = t.autoFocus || !1, u = h(null);
  V(m, () => ({
    focus() {
      u.current.checked = !0, u.current.focus();
    },
    isValid() {
      return !i.status;
    },
    getValue() {
      return n.getData();
    },
    clear() {
      n.setData("", !0);
    },
    setValue(e, a = !1) {
      n.setData(e, a);
    },
    setVisible(e) {
      s((a) => ({ ...a, visible: e }));
    },
    setRequired(e) {
      s((a) => ({ ...a, required: e }));
    },
    setReadOnly(e) {
      s((a) => ({ ...a, readonly: e }));
    },
    setAttribute(e) {
      s((a) => ({ ...a, ...e }));
    },
    setOptions(e) {
    },
    getOptions() {
    }
  }), [n]);
  var C = H(t, n.data, t.label);
  t.readonly && (C.inputProps = { readOnly: !0 });
  function O(e, a) {
    const o = n.data ? n.data.split(",") : [];
    var d = o.indexOf(e);
    a ? d < 0 && o.push(e) : d >= 0 && o.splice(d, 1), c.onValueChange(o.toString());
  }
  var p = {
    onBlur: c.onBlur,
    onFocus: c.onFocus,
    onChange: (e) => {
      O(e.target.value, e.target.checked);
    }
  };
  const D = (e) => x.includes(e);
  return /* @__PURE__ */ r(M, { children: g.visible && /* @__PURE__ */ r(
    S,
    {
      label: N(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ R(y, { fullWidth: !0, error: i.status, ...C, style: { flexDirection: F }, children: [
        l ? Object.keys(l).map((e, a) => /* @__PURE__ */ r(
          B,
          {
            value: e,
            control: /* @__PURE__ */ r(
              j,
              {
                ...p,
                checked: D(e),
                autoFocus: v,
                disabled: t.readonly,
                inputRef: (o) => {
                  a == 0 && (u.current = o);
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
  E as default
};
