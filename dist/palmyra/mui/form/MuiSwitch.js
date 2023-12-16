import { jsx as r, Fragment as y, jsxs as L } from "react/jsx-runtime";
import { forwardRef as R, useContext as w, useRef as b, useMemo as S, useState as D, useEffect as F, useImperativeHandle as j } from "react";
import { FormControl as H, FormControlLabel as I, Switch as P, FormHelperText as q } from "@mui/material";
import { copyMuiOptions as A, getFieldLabel as E } from "./MuiUtil.js";
import N from "./OptionsParser.js";
import { FieldManagerContext as T } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import z from "./FieldDecorator.js";
const Y = R(function(t, d) {
  const k = w(T), m = d || b(null), n = k(t, "switch", m), { mutateOptions: O, setMutateOptions: o } = n, l = n.error, v = n.eventListeners, V = t.autoFocus || !1, u = S(
    () => N(t.options, t.name),
    [t.options, t.name]
  ), f = (e, a) => {
    var C = u.checked.value;
    return e != null && e != null ? C == e : C == a;
  }, [s, h] = D(f(n.data, t.defaultValue)), c = b(null);
  F(() => {
    h(f(n.data, t.defaultValue));
  }, [n.data]), j(m, () => ({
    focus() {
      c.current.checked = !0, c.current.focus();
    },
    isValid() {
      return !l.status;
    },
    getValue() {
      return i();
    },
    clear() {
      n.setData("", !0);
    },
    setValue(e, a = !1) {
      n.setData(e, a);
    },
    setVisible(e) {
      o((a) => ({ ...a, visible: e }));
    },
    setRequired(e) {
      o((a) => ({ ...a, required: e }));
    },
    setReadOnly(e) {
      o((a) => ({ ...a, readonly: e }));
    },
    setAttribute(e) {
      o((a) => ({ ...a, ...e }));
    },
    getOptions() {
    },
    setOptions(e) {
    }
  }), [n]);
  var g = A(t, n.data, t.label);
  t.readonly && (g.inputProps = { readOnly: !0 });
  const M = () => {
    h(!s);
  };
  F(() => {
    v.onValueChange(i());
  }, [s]);
  const x = () => {
    var e = s ? "checked" : "unchecked";
    return u[e].title;
  }, i = () => {
    var e = s ? "checked" : "unchecked";
    return u[e].value;
  };
  return /* @__PURE__ */ r(y, { children: O.visible && /* @__PURE__ */ r(
    z,
    {
      label: E(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ L(H, { error: l.status, ...g, children: [
        /* @__PURE__ */ r(
          I,
          {
            value: i(),
            inputRef: (e) => {
              c.current = e;
            },
            control: /* @__PURE__ */ r(
              P,
              {
                checked: s,
                onClick: M,
                disabled: t.readonly,
                autoFocus: V
              }
            ),
            label: x()
          }
        ),
        /* @__PURE__ */ r(q, { className: "form-error-text", children: l.message })
      ] })
    }
  ) });
});
export {
  Y as default
};
