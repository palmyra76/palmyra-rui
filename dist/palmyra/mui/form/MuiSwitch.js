import { jsx as s, Fragment as x, jsxs as y } from "react/jsx-runtime";
import { forwardRef as L, useContext as w, useRef as C, useMemo as S, useState as R, useEffect as b, useImperativeHandle as j } from "react";
import { FormControl as A, FormControlLabel as D, Switch as H, FormHelperText as I } from "@mui/material";
import { copyMuiOptions as P } from "./MuiUtil.js";
import E from "./OptionsParser.js";
import { FieldManagerContext as N } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import T from "./FieldDecorator.js";
const W = L(function(e, i) {
  const g = w(N), c = i || C(null), n = g(e, "switch", c), { mutateOptions: v, setMutateOptions: k } = n, r = n.error, F = n.eventListeners, o = S(
    () => E(e.options, e.name),
    [e.options, e.name]
  ), u = (t, O) => {
    var h = o.checked.value;
    return t != null && t != null ? h == t : h == O;
  }, [a, d] = R(u(n.data, e.defaultValue)), l = C(null);
  b(() => {
    d(u(n.data, e.defaultValue));
  }, [n.data]), j(c, () => ({
    focus() {
      l.current.focus();
    },
    isValid() {
      return !r.status;
    },
    assignAttribute(t) {
      l.current.assignAttribute(t);
    },
    setValue(t) {
      n.setData(t);
    },
    setVisible(t) {
      k({ visible: t });
    }
  }), []);
  var m = P(e, n.data, e.label);
  e.readonly && (m.inputProps = { readOnly: !0 });
  const V = () => {
    d(!a);
  };
  b(() => {
    F.onValueChange(f());
  }, [a]);
  const M = () => {
    var t = a ? "checked" : "unchecked";
    return o[t].title;
  }, f = () => {
    var t = a ? "checked" : "unchecked";
    return o[t].value;
  };
  return /* @__PURE__ */ s(x, { children: v.visible && /* @__PURE__ */ s(
    T,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ y(A, { error: r.status, ...m, children: [
        /* @__PURE__ */ s(
          D,
          {
            value: f(),
            control: /* @__PURE__ */ s(
              H,
              {
                inputRef: l,
                checked: a,
                onClick: V,
                disabled: e.readonly
              }
            ),
            label: M()
          }
        ),
        /* @__PURE__ */ s(I, { className: "form-error-text", children: r.message })
      ] })
    }
  ) });
});
export {
  W as default
};
