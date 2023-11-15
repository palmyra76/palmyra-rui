import { jsxs as p, jsx as c } from "react/jsx-runtime";
import { forwardRef as x, useContext as V, useMemo as C, useState as F, useRef as b, useEffect as m, useImperativeHandle as w } from "react";
import { FormControl as O, FormControlLabel as S, Switch as L, FormHelperText as y } from "@mui/material";
import { copyMuiOptions as R } from "./MuiUtil.js";
import j from "./MuiSwitchOption.js";
import { FieldManagerContext as A } from "../../layout/flexiLayout/FlexiLayoutContext.js";
const B = x(function(t, f) {
  const r = V(A)(t, "switch"), a = r.error, g = r.eventListeners, o = C(
    () => j(t.options, t.name),
    [t.options, t.name]
  ), u = (e, M) => {
    var d = o.checked.value;
    return e != null && e != null ? d == e : d == M;
  }, [n, i] = F(u(r.data, t.defaultValue)), s = b(null);
  m(() => {
    i(u(r.data, t.defaultValue));
  }, [r.data]), w(f, () => ({
    focus() {
      s.current.focus();
    },
    isValid() {
      return !a.status;
    },
    assignAttribute(e) {
      s.current.assignAttribute(e);
    }
  }), []);
  var h = R(t, r.data);
  const k = () => {
    i(!n);
  };
  m(() => {
    g.onValueChange(l());
  }, [n]);
  const v = () => {
    var e = n ? "checked" : "unchecked";
    return o[e].title;
  }, l = () => {
    var e = n ? "checked" : "unchecked";
    return o[e].value;
  };
  return /* @__PURE__ */ p(O, { error: a.status, ...h, children: [
    /* @__PURE__ */ c(
      S,
      {
        value: l(),
        control: /* @__PURE__ */ c(L, { inputRef: s, checked: n, onClick: k }),
        label: v()
      }
    ),
    /* @__PURE__ */ c(y, { className: "form-error-text", children: a.message })
  ] });
});
export {
  B as default
};
