import { jsx as s, Fragment as L, jsxs as y } from "react/jsx-runtime";
import { forwardRef as w, useContext as R, useRef as b, useMemo as S, useState as j, useEffect as g, useImperativeHandle as A } from "react";
import { FormControl as D, FormControlLabel as H, Switch as I, FormHelperText as P } from "@mui/material";
import { copyMuiOptions as E, getFieldLabel as N } from "./MuiUtil.js";
import T from "./OptionsParser.js";
import { FieldManagerContext as q } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import z from "./FieldDecorator.js";
const Y = w(function(e, c) {
  const C = R(q), u = c || b(null), n = C(e, "switch", u), { mutateOptions: F, setMutateOptions: k } = n, o = n.error, v = n.eventListeners, V = e.autoFocus || !1, l = S(
    () => T(e.options, e.name),
    [e.options, e.name]
  ), i = (t, x) => {
    var h = l.checked.value;
    return t != null && t != null ? h == t : h == x;
  }, [a, d] = j(i(n.data, e.defaultValue)), r = b(null);
  g(() => {
    d(i(n.data, e.defaultValue));
  }, [n.data]), A(u, () => ({
    focus() {
      r.current.checked = !0, r.current.focus();
    },
    isValid() {
      return !o.status;
    },
    assignAttribute(t) {
      r.current.assignAttribute(t);
    },
    setValue(t) {
      n.setData(t);
    },
    setVisible(t) {
      k({ visible: t });
    }
  }), []);
  var m = E(e, n.data, e.label);
  e.readonly && (m.inputProps = { readOnly: !0 });
  const M = () => {
    d(!a);
  };
  g(() => {
    v.onValueChange(f());
  }, [a]);
  const O = () => {
    var t = a ? "checked" : "unchecked";
    return l[t].title;
  }, f = () => {
    var t = a ? "checked" : "unchecked";
    return l[t].value;
  };
  return /* @__PURE__ */ s(L, { children: F.visible && /* @__PURE__ */ s(
    z,
    {
      label: N(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ y(D, { error: o.status, ...m, children: [
        /* @__PURE__ */ s(
          H,
          {
            value: f(),
            inputRef: (t) => {
              r.current = t;
            },
            control: /* @__PURE__ */ s(
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
        /* @__PURE__ */ s(P, { className: "form-error-text", children: o.message })
      ] })
    }
  ) });
});
export {
  Y as default
};
