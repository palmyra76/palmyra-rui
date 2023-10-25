import { jsx as n } from "react/jsx-runtime";
import { forwardRef as f, useRef as m, useImperativeHandle as d, useEffect as c } from "react";
import { TextField as x } from "@mui/material";
import v from "./useValidator.js";
const b = f(function(e, a) {
  const { data: u, setData: i, error: t, fieldCallbacks: s } = v(e), r = m(null);
  d(a, () => ({
    focus() {
      r.current.focus();
    },
    isValid() {
      return !t.status;
    },
    assignAttribute(o) {
      r.current.assignAttribute(o);
    }
  }), []), c(() => {
    i(e.value);
  }, [e.value]);
  var l = { fullWidth: !0, ...e.muiFieldDef, value: u };
  return /* @__PURE__ */ n(
    x,
    {
      minRows: 2,
      maxRows: 5,
      multiline: !0,
      ...l,
      inputRef: r,
      ...s,
      error: t.status,
      helperText: t.message
    }
  );
});
export {
  b as default
};
