import { jsx as s, Fragment as y, jsxs as L } from "react/jsx-runtime";
import { forwardRef as w, useContext as S, useRef as C, useMemo as R, useState as j, useEffect as b, useImperativeHandle as A } from "react";
import { FormControl as D, FormControlLabel as H, Switch as I, FormHelperText as P } from "@mui/material";
import { copyMuiOptions as q } from "./MuiUtil.js";
import E from "./OptionsParser.js";
import { FieldManagerContext as N } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import T from "./FieldDecorator.js";
const X = w(function(e, i) {
  const g = S(N), c = i || C(null), n = g(e, "switch", c), { mutateOptions: v, setMutateOptions: k } = n, r = n.error, F = n.eventListeners, l = R(
    () => E(e.options, e.name),
    [e.options, e.name]
  ), u = (t, x) => {
    var h = l.checked.value;
    return t != null && t != null ? h == t : h == x;
  }, [a, d] = j(u(n.data, e.defaultValue)), o = C(null);
  b(() => {
    d(u(n.data, e.defaultValue));
  }, [n.data]), A(c, () => ({
    focus() {
      o.current.focus();
    },
    isValid() {
      return !r.status;
    },
    assignAttribute(t) {
      o.current.assignAttribute(t);
    },
    setValue(t) {
      n.setData(t);
    },
    setVisible(t) {
      k({ visible: t });
    }
  }), []);
  var m = q(e, n.data, e.label);
  e.readonly && (m.inputProps = { readOnly: !0 });
  const V = () => {
    d(!a);
  };
  b(() => {
    F.onValueChange(f());
  }, [a]);
  const M = () => {
    var t = a ? "checked" : "unchecked";
    return l[t].title;
  }, f = () => {
    var t = a ? "checked" : "unchecked";
    return l[t].value;
  }, O = e.required ? e.title + "*" : e.title;
  return /* @__PURE__ */ s(y, { children: v.visible && /* @__PURE__ */ s(
    T,
    {
      label: O,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ L(D, { error: r.status, ...m, children: [
        /* @__PURE__ */ s(
          H,
          {
            value: f(),
            control: /* @__PURE__ */ s(
              I,
              {
                inputRef: o,
                checked: a,
                onClick: V,
                disabled: e.readonly
              }
            ),
            label: M()
          }
        ),
        /* @__PURE__ */ s(P, { className: "form-error-text", children: r.message })
      ] })
    }
  ) });
});
export {
  X as default
};
