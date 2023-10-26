import { jsx as f } from "react/jsx-runtime";
import { forwardRef as m, useRef as c, useImperativeHandle as d, useEffect as v } from "react";
import { TextField as x } from "@mui/material";
import { getEventListeners as p, decorateListenersForInput as R } from "./InputEventListeners.js";
const F = m(function(e, a) {
  const { data: s, setData: i, error: t, eventListeners: u } = p(e);
  var n = R(u);
  const r = c(null);
  d(a, () => ({
    focus() {
      r.current.focus();
    },
    isValid() {
      return !t.status;
    },
    assignAttribute(l) {
      r.current.assignAttribute(l);
    }
  }), []), v(() => {
    i(e.value);
  }, [e.value]);
  var o = { fullWidth: !0, ...e.muiFieldDef, value: s };
  return /* @__PURE__ */ f(
    x,
    {
      minRows: 2,
      maxRows: 5,
      multiline: !0,
      ...o,
      inputRef: r,
      ...n,
      error: t.status,
      helperText: t.message
    }
  );
});
export {
  F as default
};
