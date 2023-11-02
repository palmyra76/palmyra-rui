import { jsxs as b, jsx as c } from "react/jsx-runtime";
import { forwardRef as w, useMemo as x, useState as O, useRef as S, useEffect as f, useImperativeHandle as p } from "react";
import { FormControl as C, FormControlLabel as F, Switch as L, FormHelperText as y } from "@mui/material";
import { copyMuiOptions as R } from "./MuiUtil.js";
import j from "./MuiSwitchOption.js";
const T = w(function(e, m) {
  const { getFieldManager: h } = e, r = h(e, "switch"), a = r.error, g = r.eventListeners, o = x(
    () => j(e.options, e.name),
    [e.options, e.name]
  ), u = (t, M) => {
    var d = o.checked.value;
    return t != null && t != null ? d == t : d == M;
  }, [n, i] = O(u(r.data, e.defaultValue)), s = S(null);
  f(() => {
    i(u(r.data, e.defaultValue));
  }, [r.data]), p(m, () => ({
    focus() {
      s.current.focus();
    },
    isValid() {
      return !a.status;
    },
    assignAttribute(t) {
      s.current.assignAttribute(t);
    }
  }), []);
  var k = R(e, r.data);
  const v = () => {
    i(!n);
  };
  f(() => {
    g.onValueChange(l());
  }, [n]);
  const V = () => {
    var t = n ? "checked" : "unchecked";
    return o[t].title;
  }, l = () => {
    var t = n ? "checked" : "unchecked";
    return o[t].value;
  };
  return /* @__PURE__ */ b(C, { error: a.status, ...k, children: [
    /* @__PURE__ */ c(
      F,
      {
        value: l(),
        control: /* @__PURE__ */ c(L, { inputRef: s, checked: n, onClick: v }),
        label: V()
      }
    ),
    /* @__PURE__ */ c(y, { className: "form-error-text", children: a.message })
  ] });
});
export {
  T as default
};
