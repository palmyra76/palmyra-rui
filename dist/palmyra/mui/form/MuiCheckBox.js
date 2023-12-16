import { jsx as r, Fragment as p, jsxs as L } from "react/jsx-runtime";
import { forwardRef as O, useContext as R, useRef as b, useImperativeHandle as V } from "react";
import { FormControl as B, FormControlLabel as j, Checkbox as y, FormHelperText as w } from "@mui/material";
import { copyMuiOptions as A, getFieldLabel as H } from "./MuiUtil.js";
import { FieldManagerContext as N } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import P from "./FieldDecorator.js";
const E = O(function(t, d) {
  const C = R(N), f = d || b(null), { options: s } = t, a = C(t, "checkbox", f), { mutateOptions: g, setMutateOptions: h } = a, x = a.data ? a.data.split(",") : [], F = t.flexDirection || "row", l = a.error, i = a.eventListeners, v = t.autoFocus || !1, o = b(null);
  V(f, () => ({
    focus() {
      o.current.checked = !0, o.current.focus();
    },
    isValid() {
      return !l.status;
    },
    getValue() {
      return a.getData();
    },
    assignAttribute(e) {
      o.current.assignAttribute(e);
    },
    clear() {
      a.setData("");
    },
    setValue(e) {
      a.setData(e);
    },
    setVisible(e) {
      h({ visible: e });
    }
  }), [a]);
  var m = A(t, a.data, t.label);
  t.readonly && (m.inputProps = { readOnly: !0 });
  function D(e, c) {
    const n = a.data ? a.data.split(",") : [];
    var u = n.indexOf(e);
    c ? u < 0 && n.push(e) : u >= 0 && n.splice(u, 1), i.onValueChange(n.toString());
  }
  var M = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: (e) => {
      D(e.target.value, e.target.checked);
    }
  };
  const k = (e) => x.includes(e);
  return /* @__PURE__ */ r(p, { children: g.visible && /* @__PURE__ */ r(
    P,
    {
      label: H(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ L(B, { fullWidth: !0, error: l.status, ...m, style: { flexDirection: F }, children: [
        s ? Object.keys(s).map((e, c) => /* @__PURE__ */ r(
          j,
          {
            value: e,
            control: /* @__PURE__ */ r(
              y,
              {
                ...M,
                checked: k(e),
                autoFocus: v,
                disabled: t.readonly,
                inputRef: (n) => {
                  c == 0 && (o.current = n);
                }
              }
            ),
            label: s[e]
          },
          e
        )) : /* @__PURE__ */ r("div", { children: "No options provided" }),
        /* @__PURE__ */ r(w, { className: "form-error-text", children: l.message })
      ] })
    }
  ) });
});
export {
  E as default
};
