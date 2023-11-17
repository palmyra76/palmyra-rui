import { jsx as r, jsxs as M } from "react/jsx-runtime";
import { forwardRef as V, useContext as y, useRef as C, useMemo as L, useState as O, useEffect as g, useImperativeHandle as w } from "react";
import { FormControl as S, FormControlLabel as R, Switch as j, FormHelperText as A } from "@mui/material";
import { copyMuiOptions as H } from "./MuiUtil.js";
import I from "./OptionsParser.js";
import { FieldManagerContext as P } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import D from "./FieldDecorator.js";
const K = V(function(e, c) {
  const b = y(P), u = c || C(null), n = b(e, "switch", u), s = n.error, k = n.eventListeners, o = L(
    () => I(e.options, e.name),
    [e.options, e.name]
  ), i = (t, x) => {
    var h = o.checked.value;
    return t != null && t != null ? h == t : h == x;
  }, [a, d] = O(i(n.data, e.defaultValue)), l = C(null);
  g(() => {
    d(i(n.data, e.defaultValue));
  }, [n.data]), w(u, () => ({
    focus() {
      l.current.focus();
    },
    isValid() {
      return !s.status;
    },
    assignAttribute(t) {
      l.current.assignAttribute(t);
    }
  }), []);
  var m = H(e, n.data, e.label);
  e.readonly && (m.inputProps = { readOnly: !0 });
  const v = () => {
    d(!a);
  };
  g(() => {
    k.onValueChange(f());
  }, [a]);
  const F = () => {
    var t = a ? "checked" : "unchecked";
    return o[t].title;
  }, f = () => {
    var t = a ? "checked" : "unchecked";
    return o[t].value;
  };
  return /* @__PURE__ */ r(
    D,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ M(S, { error: s.status, ...m, children: [
        /* @__PURE__ */ r(
          R,
          {
            value: f(),
            control: /* @__PURE__ */ r(
              j,
              {
                inputRef: l,
                checked: a,
                onClick: v,
                disabled: e.readonly
              }
            ),
            label: F()
          }
        ),
        /* @__PURE__ */ r(A, { className: "form-error-text", children: s.message })
      ] })
    }
  );
});
export {
  K as default
};
