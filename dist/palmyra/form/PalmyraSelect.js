import { jsxs as m, jsx as l } from "react/jsx-runtime";
import { forwardRef as d, useRef as v, useImperativeHandle as h, useEffect as x } from "react";
import { FormControl as b, Select as p, MenuItem as g, FormHelperText as j } from "@mui/material";
import D from "./useValidator.js";
const A = d(function(e, u) {
  const { data: i, setData: o, error: r, fieldCallbacks: n } = D(e), a = v(null), { options: s } = e.fieldDef;
  h(u, () => ({
    focus() {
      a.current.focus();
    },
    isValid() {
      return !r.status;
    },
    assignAttribute(t) {
      a.current.assignAttribute(t);
    }
  }), []), x(() => {
    o(e.value);
  }, [e.value]);
  var c = { ...e.muiFieldDef, value: i };
  return /* @__PURE__ */ m(b, { fullWidth: !0, error: r.status, children: [
    /* @__PURE__ */ l(p, { ...c, ...n, inputRef: a, children: Object.keys(s).map(
      (t, f) => /* @__PURE__ */ l(g, { value: t, children: s[t] }, f)
    ) }),
    /* @__PURE__ */ l(j, { className: "form-error-text", children: r.message })
  ] });
});
export {
  A as default
};
