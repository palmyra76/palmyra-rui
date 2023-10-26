import { jsxs as d, jsx as a } from "react/jsx-runtime";
import { forwardRef as v, useRef as h, useImperativeHandle as p, useEffect as x } from "react";
import { FormControl as b, Select as g, MenuItem as F, FormHelperText as j } from "@mui/material";
import { getEventListeners as D, decorateListenersForInput as I } from "./InputEventListeners.js";
const A = v(function(e, u) {
  const { data: l, setData: i, error: r, eventListeners: o } = D(e);
  var c = I(o);
  const s = h(null), { options: n } = e.fieldDef;
  p(u, () => ({
    focus() {
      s.current.focus();
    },
    isValid() {
      return !r.status;
    },
    assignAttribute(t) {
      s.current.assignAttribute(t);
    }
  }), []), x(() => {
    i(e.value);
  }, [e.value]);
  var f = { ...e.muiFieldDef, value: l };
  return /* @__PURE__ */ d(b, { fullWidth: !0, error: r.status, children: [
    /* @__PURE__ */ a(g, { ...f, ...c, inputRef: s, children: Object.keys(n).map(
      (t, m) => /* @__PURE__ */ a(F, { value: t, children: n[t] }, m)
    ) }),
    /* @__PURE__ */ a(j, { className: "form-error-text", children: r.message })
  ] });
});
export {
  A as default
};
