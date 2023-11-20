import { jsx as r, jsxs as D } from "react/jsx-runtime";
import { forwardRef as M, useContext as k, useRef as f, useImperativeHandle as p } from "react";
import { FormControl as L, FormControlLabel as B, Checkbox as O, FormHelperText as R } from "@mui/material";
import { copyMuiOptions as j } from "./MuiUtil.js";
import { FieldManagerContext as y } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import V from "./FieldDecorator.js";
const T = M(function(t, c) {
  const C = k(y), u = c || f(null), { options: n } = t, o = C(t, "checkbox", u), x = o.data ? o.data.split(",") : [], h = t.flexDirection || "row", s = o.error, l = o.eventListeners, d = f(null);
  p(u, () => ({
    focus() {
      d.current.focus();
    },
    isValid() {
      return !s.status;
    },
    assignAttribute(e) {
      d.current.assignAttribute(e);
    },
    clear() {
      o.setData("");
    },
    setValue(e) {
      o.setData(e);
    }
  }), []);
  var m = j(t, o.data, t.label);
  t.readonly && (m.inputProps = { readOnly: !0 });
  function b(e, F) {
    const a = o.data ? o.data.split(",") : [];
    var i = a.indexOf(e);
    F ? i < 0 && a.push(e) : i >= 0 && a.splice(i, 1), l.onValueChange(a.toString());
  }
  var g = {
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (e) => {
      b(e.target.value, e.target.checked);
    }
  };
  const v = (e) => x.includes(e);
  return /* @__PURE__ */ r(
    V,
    {
      label: t.title,
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ D(L, { fullWidth: !0, error: s.status, ...m, style: { flexDirection: h }, children: [
        n ? Object.keys(n).map((e) => /* @__PURE__ */ r(
          B,
          {
            value: e,
            control: /* @__PURE__ */ r(
              O,
              {
                ...g,
                checked: v(e),
                disabled: t.readonly
              }
            ),
            label: n[e]
          },
          e
        )) : /* @__PURE__ */ r("div", { children: "No options provided" }),
        /* @__PURE__ */ r(R, { className: "form-error-text", children: s.message })
      ] })
    }
  );
});
export {
  T as default
};
