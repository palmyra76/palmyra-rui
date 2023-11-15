import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { forwardRef as f, useContext as p, useRef as g, useImperativeHandle as v } from "react";
import { FormControl as h, Select as M, MenuItem as x, FormHelperText as F } from "@mui/material";
import { copyMuiOptions as C } from "./MuiUtil.js";
import { FieldManagerContext as b } from "../../layout/flexiLayout/FlexiLayoutContext.js";
const H = f(function(r, l) {
  const { options: n } = r, o = p(b)(r, "select"), s = o.error, i = o.eventListeners, a = g(null);
  v(l, () => ({
    focus() {
      a.current.focus();
    },
    isValid() {
      return !s.status;
    },
    assignAttribute(e) {
      a.current.assignAttribute(e);
    }
  }), []);
  var u = C(r, o.data);
  r.readonly && (u.inputProps = { readOnly: !0 });
  var c = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: (e) => i.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ m(h, { fullWidth: !0, error: s.status, children: [
    /* @__PURE__ */ t(M, { ...u, ...c, inputRef: a, children: n ? Object.keys(n).map(
      (e, d) => /* @__PURE__ */ t(x, { value: e, children: n[e] }, d)
    ) : /* @__PURE__ */ t("div", { children: "No options provided" }) }),
    /* @__PURE__ */ t(F, { className: "form-error-text", children: s.message })
  ] });
});
export {
  H as default
};
