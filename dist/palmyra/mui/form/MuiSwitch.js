import { jsxs as w, jsx as i } from "react/jsx-runtime";
import { forwardRef as M, useMemo as x, useState as S, useRef as j, useEffect as h, useImperativeHandle as C } from "react";
import { FormControl as F, FormControlLabel as L, Switch as R, FormHelperText as p } from "@mui/material";
import { copyMuiOptions as A } from "./MuiUtil.js";
const H = (c, e) => {
  if (c) {
    var a = Object.keys(c);
    if (a.length == 2) {
      const n = Object.values[0];
      var l = 0, t = 1;
      return (n == "false" || n == "0" || n == 0 || n == "unchecked") && (l = 1, t = 0), {
        checked: {
          title: a[l],
          value: c[a[l]]
        },
        unchecked: {
          title: a[t],
          value: c[a[t]]
        }
      };
    } else
      console.error("invalid options, must contain two keys - sample - "), console.error({ active: 1, inactive: 0 });
  } else
    return {
      checked: {
        title: e,
        value: 1
      },
      unchecked: {
        title: e,
        value: 0
      }
    };
}, P = M(function(e, a) {
  const { getFieldManager: l } = e, t = l(e, "switch"), n = t.error, g = t.eventListeners, u = x(
    () => H(e.options, e.name),
    [e.options, e.name]
  ), d = (r, V) => {
    var m = u.checked.value;
    return r != null && r != null ? m == r : m == V;
  }, [s, f] = S(d(t.data, e.defaultValue)), o = j(null);
  h(() => {
    f(d(t.data, e.defaultValue));
  }, [t.data]), C(a, () => ({
    focus() {
      o.current.focus();
    },
    isValid() {
      return !n.status;
    },
    assignAttribute(r) {
      o.current.assignAttribute(r);
    }
  }), []);
  var k = A(e, t.data);
  const b = () => {
    f(!s);
  };
  h(() => {
    g.onValueChange(v());
  }, [s]);
  const O = () => {
    var r = s ? "checked" : "unchecked";
    return u[r].title;
  }, v = () => {
    var r = s ? "checked" : "unchecked";
    return u[r].value;
  };
  return /* @__PURE__ */ w(F, { fullWidth: !0, error: n.status, ...k, children: [
    /* @__PURE__ */ i(
      L,
      {
        value: v(),
        control: /* @__PURE__ */ i(R, { inputRef: o, checked: s, onClick: b }),
        label: O()
      }
    ),
    /* @__PURE__ */ i(p, { className: "form-error-text", children: n.message })
  ] });
});
export {
  P as default
};
