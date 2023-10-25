import { jsxs as c, jsx as t } from "react/jsx-runtime";
import { forwardRef as d, useRef as p, useImperativeHandle as R, useEffect as b } from "react";
import { FormControl as v, RadioGroup as x, FormControlLabel as h, Radio as F, FormHelperText as g } from "@mui/material";
import j from "./useValidator.js";
const y = d(function(r, l) {
  const { data: i, setData: s, error: o, fieldCallbacks: n } = j(r), a = p(null), { options: u } = r.fieldDef;
  R(l, () => ({
    focus() {
      a.current.focus();
    },
    isValid() {
      return !o.status;
    },
    assignAttribute(e) {
      a.current.assignAttribute(e);
    }
  }), []), b(() => {
    s(r.value);
  }, [r.value]);
  var f = { ...r.muiFieldDef, value: i };
  return /* @__PURE__ */ c(v, { fullWidth: !0, error: o.status, children: [
    /* @__PURE__ */ t(x, { row: !0, ...f, ...n, children: Object.keys(u).map((e, m) => /* @__PURE__ */ t(h, { value: e, control: /* @__PURE__ */ t(F, { inputRef: a }), label: u[e] }, m)) }),
    /* @__PURE__ */ t(g, { className: "form-error-text", children: o.message })
  ] });
});
export {
  y as default
};
