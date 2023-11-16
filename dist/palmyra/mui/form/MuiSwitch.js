import { jsxs as x, jsx as i } from "react/jsx-runtime";
import { forwardRef as V, useContext as b, useMemo as y, useState as C, useRef as F, useEffect as m, useImperativeHandle as O } from "react";
import { FormControl as p, FormControlLabel as w, Switch as S, FormHelperText as L } from "@mui/material";
import { copyMuiOptions as R } from "./MuiUtil.js";
import j from "./MuiSwitchOption.js";
import { FieldManagerContext as A } from "../../layout/flexiLayout/FlexiLayoutContext.js";
const B = V(function(e, g) {
  const r = b(A)(e, "switch"), a = r.error, h = r.eventListeners, o = y(
    () => j(e.options, e.name),
    [e.options, e.name]
  ), u = (t, M) => {
    var f = o.checked.value;
    return t != null && t != null ? f == t : f == M;
  }, [n, c] = C(u(r.data, e.defaultValue)), s = F(null);
  m(() => {
    c(u(r.data, e.defaultValue));
  }, [r.data]), O(g, () => ({
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
  var l = R(e, r.data);
  e.readonly && (l.inputProps = { readOnly: !0 });
  const k = () => {
    c(!n);
  };
  m(() => {
    h.onValueChange(d());
  }, [n]);
  const v = () => {
    var t = n ? "checked" : "unchecked";
    return o[t].title;
  }, d = () => {
    var t = n ? "checked" : "unchecked";
    return o[t].value;
  };
  return /* @__PURE__ */ x(p, { error: a.status, ...l, children: [
    /* @__PURE__ */ i(
      w,
      {
        value: d(),
        control: /* @__PURE__ */ i(
          S,
          {
            inputRef: s,
            checked: n,
            onClick: k,
            disabled: e.readonly
          }
        ),
        label: v()
      }
    ),
    /* @__PURE__ */ i(L, { className: "form-error-text", children: a.message })
  ] });
});
export {
  B as default
};
