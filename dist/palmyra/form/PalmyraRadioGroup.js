import { jsxs as d, jsx as t } from "react/jsx-runtime";
import { forwardRef as p, useRef as v, useImperativeHandle as R, useEffect as b } from "react";
import { FormControl as x, RadioGroup as F, FormControlLabel as g, Radio as h, FormHelperText as L } from "@mui/material";
import { getEventListeners as j, decorateListenersForInput as D } from "./InputEventListeners.js";
const C = p(function(e, n) {
  const { data: u, setData: i, error: o, eventListeners: l } = j(e), c = D(l), a = v(null), { options: s } = e.fieldDef;
  R(n, () => ({
    focus() {
      a.current.focus();
    },
    isValid() {
      return !o.status;
    },
    assignAttribute(r) {
      a.current.assignAttribute(r);
    }
  }), []), b(() => {
    i(e.value);
  }, [e.value]);
  var f = { ...e.muiFieldDef, value: u };
  return /* @__PURE__ */ d(x, { fullWidth: !0, error: o.status, children: [
    /* @__PURE__ */ t(F, { row: !0, ...f, ...c, children: Object.keys(s).map((r, m) => /* @__PURE__ */ t(g, { value: r, control: /* @__PURE__ */ t(h, { inputRef: a }), label: s[r] }, m)) }),
    /* @__PURE__ */ t(L, { className: "form-error-text", children: o.message })
  ] });
});
export {
  C as default
};
