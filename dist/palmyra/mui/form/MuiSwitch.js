import { jsx as r, Fragment as x, jsxs as L } from "react/jsx-runtime";
import { forwardRef as y, useContext as w, useRef as b, useMemo as R, useState as S, useEffect as g, useImperativeHandle as j } from "react";
import { FormControl as A, FormControlLabel as D, Switch as H, FormHelperText as I } from "@mui/material";
import { copyMuiOptions as P, getFieldLabel as E } from "./MuiUtil.js";
import N from "./OptionsParser.js";
import { FieldManagerContext as T } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import q from "./FieldDecorator.js";
const X = y(function(e, i) {
  const C = w(T), c = i || b(null), n = C(e, "switch", c), { mutateOptions: k, setMutateOptions: v } = n, l = n.error, F = n.eventListeners, o = R(
    () => N(e.options, e.name),
    [e.options, e.name]
  ), u = (t, O) => {
    var h = o.checked.value;
    return t != null && t != null ? h == t : h == O;
  }, [a, d] = S(u(n.data, e.defaultValue)), s = b(null);
  g(() => {
    d(u(n.data, e.defaultValue));
  }, [n.data]), j(c, () => ({
    focus() {
      s.current.checked = !0, s.current.focus();
    },
    isValid() {
      return !l.status;
    },
    assignAttribute(t) {
      s.current.assignAttribute(t);
    },
    setValue(t) {
      n.setData(t);
    },
    setVisible(t) {
      v({ visible: t });
    }
  }), []);
  var m = P(e, n.data, e.label);
  e.readonly && (m.inputProps = { readOnly: !0 });
  const V = () => {
    d(!a);
  };
  g(() => {
    F.onValueChange(f());
  }, [a]);
  const M = () => {
    var t = a ? "checked" : "unchecked";
    return o[t].title;
  }, f = () => {
    var t = a ? "checked" : "unchecked";
    return o[t].value;
  };
  return /* @__PURE__ */ r(x, { children: k.visible && /* @__PURE__ */ r(
    q,
    {
      label: E(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ L(A, { error: l.status, ...m, children: [
        /* @__PURE__ */ r(
          D,
          {
            value: f(),
            inputRef: (t) => {
              s.current = t;
            },
            control: /* @__PURE__ */ r(
              H,
              {
                checked: a,
                onClick: V,
                disabled: e.readonly
              }
            ),
            label: M()
          }
        ),
        /* @__PURE__ */ r(I, { className: "form-error-text", children: l.message })
      ] })
    }
  ) });
});
export {
  X as default
};
