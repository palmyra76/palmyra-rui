import { jsx as r, jsxs as v } from "react/jsx-runtime";
import { forwardRef as F, useContext as M, useMemo as x, useState as V, useRef as y, useEffect as f, useImperativeHandle as L } from "react";
import { FormControl as O, FormControlLabel as w, Switch as S, FormHelperText as R } from "@mui/material";
import { copyMuiOptions as j } from "./MuiUtil.js";
import A from "./OptionsParser.js";
import { FieldManagerContext as H } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import I from "./FieldDecorator.js";
const J = F(function(e, h) {
  const a = M(H)(e, "switch"), s = a.error, g = a.eventListeners, o = x(
    () => A(e.options, e.name),
    [e.options, e.name]
  ), c = (t, k) => {
    var m = o.checked.value;
    return t != null && t != null ? m == t : m == k;
  }, [n, i] = V(c(a.data, e.defaultValue)), l = y(null);
  f(() => {
    i(c(a.data, e.defaultValue));
  }, [a.data]), L(h, () => ({
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
  var u = j(e, a.data, e.label);
  e.readonly && (u.inputProps = { readOnly: !0 });
  const C = () => {
    i(!n);
  };
  f(() => {
    g.onValueChange(d());
  }, [n]);
  const b = () => {
    var t = n ? "checked" : "unchecked";
    return o[t].title;
  }, d = () => {
    var t = n ? "checked" : "unchecked";
    return o[t].value;
  };
  return /* @__PURE__ */ r(
    I,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ v(O, { error: s.status, ...u, children: [
        /* @__PURE__ */ r(
          w,
          {
            value: d(),
            control: /* @__PURE__ */ r(
              S,
              {
                inputRef: l,
                checked: n,
                onClick: C,
                disabled: e.readonly
              }
            ),
            label: b()
          }
        ),
        /* @__PURE__ */ r(R, { className: "form-error-text", children: s.message })
      ] })
    }
  );
});
export {
  J as default
};
