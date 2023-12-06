import { jsx as a, Fragment as p, jsxs as L } from "react/jsx-runtime";
import { forwardRef as O, useContext as R, useRef as b, useImperativeHandle as B } from "react";
import { FormControl as V, FormControlLabel as j, Checkbox as y, FormHelperText as w } from "@mui/material";
import { copyMuiOptions as A, getFieldLabel as H } from "./MuiUtil.js";
import { FieldManagerContext as N } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import P from "./FieldDecorator.js";
const E = O(function(t, d) {
  const C = R(N), f = d || b(null), { options: s } = t, o = C(t, "checkbox", f), { mutateOptions: h, setMutateOptions: g } = o, x = o.data ? o.data.split(",") : [], F = t.flexDirection || "row", l = o.error, i = o.eventListeners, v = t.autoFocus || !1, r = b(null);
  B(f, () => ({
    focus() {
      r.current.checked = !0, r.current.focus();
    },
    isValid() {
      return !l.status;
    },
    assignAttribute(e) {
      r.current.assignAttribute(e);
    },
    clear() {
      o.setData("");
    },
    setValue(e) {
      o.setData(e);
    },
    setVisible(e) {
      g({ visible: e });
    }
  }), []);
  var m = A(t, o.data, t.label);
  t.readonly && (m.inputProps = { readOnly: !0 });
  function D(e, c) {
    const n = o.data ? o.data.split(",") : [];
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
  return console.log(r), /* @__PURE__ */ a(p, { children: h.visible && /* @__PURE__ */ a(
    P,
    {
      label: H(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ L(V, { fullWidth: !0, error: l.status, ...m, style: { flexDirection: F }, children: [
        s ? Object.keys(s).map((e, c) => /* @__PURE__ */ a(
          j,
          {
            value: e,
            control: /* @__PURE__ */ a(
              y,
              {
                ...M,
                checked: k(e),
                autoFocus: v,
                disabled: t.readonly,
                inputRef: (n) => {
                  c == 0 && (r.current = n);
                }
              }
            ),
            label: s[e]
          },
          e
        )) : /* @__PURE__ */ a("div", { children: "No options provided" }),
        /* @__PURE__ */ a(w, { className: "form-error-text", children: l.message })
      ] })
    }
  ) });
});
export {
  E as default
};
