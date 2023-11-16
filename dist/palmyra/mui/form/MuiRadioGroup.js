import { jsx as t, jsxs as g } from "react/jsx-runtime";
import { forwardRef as F, useContext as b, useRef as v, useImperativeHandle as h } from "react";
import { FormControl as x, RadioGroup as R, FormControlLabel as M, Radio as p, FormHelperText as y } from "@mui/material";
import { copyMuiOptions as L } from "./MuiUtil.js";
import { FieldManagerContext as O } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import j from "./FieldDecorator.js";
const P = F(function(e, u) {
  const c = b(O), { options: r } = e, n = c(e, "radio"), d = e.flexDirection != "column", a = n.error, s = n.eventListeners, l = v(null);
  h(u, () => ({
    focus() {
      l.current.focus();
    },
    isValid() {
      return !a.status;
    },
    assignAttribute(o) {
      l.current.assignAttribute(o);
    }
  }), []);
  var i = L(e, n.data);
  e.readonly && (i.inputProps = { readOnly: !0 });
  const m = !!e.readonly;
  var f = {
    onBlur: s.onBlur,
    onFocus: s.onFocus,
    onChange: (o) => {
      m || s.onValueChange(o.target.value);
    }
  };
  return /* @__PURE__ */ t(
    j,
    {
      label: e.title,
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ g(x, { fullWidth: !0, error: a.status, children: [
        /* @__PURE__ */ t(R, { row: d, ...f, ...i, children: r ? Object.keys(r).map((o, C) => /* @__PURE__ */ t(
          M,
          {
            value: o,
            control: /* @__PURE__ */ t(p, { inputRef: l }),
            label: r[o]
          },
          C
        )) : /* @__PURE__ */ t("div", { children: "No options provided" }) }),
        /* @__PURE__ */ t(y, { className: "form-error-text", children: a.message })
      ] })
    }
  );
});
export {
  P as default
};
