import { jsx as r, Fragment as L, jsxs as y } from "react/jsx-runtime";
import { forwardRef as w, useContext as R, useRef as g, useMemo as S, useState as j, useEffect as b, useImperativeHandle as A } from "react";
import { FormControl as D, FormControlLabel as H, Switch as I, FormHelperText as P } from "@mui/material";
import { copyMuiOptions as E, getFieldLabel as N } from "./MuiUtil.js";
import T from "./OptionsParser.js";
import { FieldManagerContext as q } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import z from "./FieldDecorator.js";
const Y = w(function(e, c) {
  const C = R(q), i = c || g(null), n = C(e, "switch", i), { mutateOptions: F, setMutateOptions: k } = n, o = n.error, v = n.eventListeners, V = e.autoFocus || !1, l = S(
    () => T(e.options, e.name),
    [e.options, e.name]
  ), d = (t, x) => {
    var h = l.checked.value;
    return t != null && t != null ? h == t : h == x;
  }, [a, m] = j(d(n.data, e.defaultValue)), s = g(null);
  b(() => {
    m(d(n.data, e.defaultValue));
  }, [n.data]), A(i, () => ({
    focus() {
      s.current.checked = !0, s.current.focus();
    },
    isValid() {
      return !o.status;
    },
    getValue() {
      return u();
    },
    assignAttribute(t) {
      s.current.assignAttribute(t);
    },
    setValue(t) {
      n.setData(t);
    },
    setVisible(t) {
      k({ visible: t });
    }
  }), [n]);
  var f = E(e, n.data, e.label);
  e.readonly && (f.inputProps = { readOnly: !0 });
  const M = () => {
    m(!a);
  };
  b(() => {
    v.onValueChange(u());
  }, [a]);
  const O = () => {
    var t = a ? "checked" : "unchecked";
    return l[t].title;
  }, u = () => {
    var t = a ? "checked" : "unchecked";
    return l[t].value;
  };
  return /* @__PURE__ */ r(L, { children: F.visible && /* @__PURE__ */ r(
    z,
    {
      label: N(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ y(D, { error: o.status, ...f, children: [
        /* @__PURE__ */ r(
          H,
          {
            value: u(),
            inputRef: (t) => {
              s.current = t;
            },
            control: /* @__PURE__ */ r(
              I,
              {
                checked: a,
                onClick: M,
                disabled: e.readonly,
                autoFocus: V
              }
            ),
            label: O()
          }
        ),
        /* @__PURE__ */ r(P, { className: "form-error-text", children: o.message })
      ] })
    }
  ) });
});
export {
  Y as default
};
