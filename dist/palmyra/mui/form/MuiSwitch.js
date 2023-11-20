import { jsx as r, jsxs as x } from "react/jsx-runtime";
import { forwardRef as M, useContext as y, useRef as C, useMemo as L, useState as O, useEffect as g, useImperativeHandle as w } from "react";
import { FormControl as S, FormControlLabel as R, Switch as j, FormHelperText as A } from "@mui/material";
import { copyMuiOptions as D } from "./MuiUtil.js";
import H from "./OptionsParser.js";
import { FieldManagerContext as I } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import P from "./FieldDecorator.js";
const K = M(function(e, c) {
  const b = y(I), u = c || C(null), a = b(e, "switch", u), s = a.error, k = a.eventListeners, o = L(
    () => H(e.options, e.name),
    [e.options, e.name]
  ), i = (t, V) => {
    var h = o.checked.value;
    return t != null && t != null ? h == t : h == V;
  }, [n, d] = O(i(a.data, e.defaultValue)), l = C(null);
  g(() => {
    d(i(a.data, e.defaultValue));
  }, [a.data]), w(u, () => ({
    focus() {
      l.current.focus();
    },
    isValid() {
      return !s.status;
    },
    assignAttribute(t) {
      l.current.assignAttribute(t);
    },
    setValue(t) {
      a.setData(t);
    }
  }), []);
  var m = D(e, a.data, e.label);
  e.readonly && (m.inputProps = { readOnly: !0 });
  const v = () => {
    d(!n);
  };
  g(() => {
    k.onValueChange(f());
  }, [n]);
  const F = () => {
    var t = n ? "checked" : "unchecked";
    return o[t].title;
  }, f = () => {
    var t = n ? "checked" : "unchecked";
    return o[t].value;
  };
  return /* @__PURE__ */ r(
    P,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ x(S, { error: s.status, ...m, children: [
        /* @__PURE__ */ r(
          R,
          {
            value: f(),
            control: /* @__PURE__ */ r(
              j,
              {
                inputRef: l,
                checked: n,
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
