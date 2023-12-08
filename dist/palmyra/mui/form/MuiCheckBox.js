import { jsx as a, Fragment as p, jsxs as L } from "react/jsx-runtime";
import { forwardRef as O, useContext as R, useRef as b, useImperativeHandle as V } from "react";
import { FormControl as B, FormControlLabel as j, Checkbox as y, FormHelperText as w } from "@mui/material";
import { copyMuiOptions as A, getFieldLabel as H } from "./MuiUtil.js";
import { FieldManagerContext as N } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import P from "./FieldDecorator.js";
const E = O(function(t, d) {
  const g = R(N), f = d || b(null), { options: s } = t, n = g(t, "checkbox", f), { mutateOptions: C, setMutateOptions: h } = n, x = n.data ? n.data.split(",") : [], F = t.flexDirection || "row", l = n.error, i = n.eventListeners, v = t.autoFocus || !1, r = b(null);
  V(f, () => ({
    focus() {
      r.current.checked = !0, r.current.focus();
    },
    isValid() {
      return !l.status;
    },
    getValue() {
      return n.getData();
    },
    assignAttribute(e) {
      r.current.assignAttribute(e);
    },
    clear() {
      n.setData("");
    },
    setValue(e) {
      n.setData(e);
    },
    setVisible(e) {
      h({ visible: e });
    }
  }), [n]);
  var m = A(t, n.data, t.label);
  t.readonly && (m.inputProps = { readOnly: !0 });
  function D(e, c) {
    const o = n.data ? n.data.split(",") : [];
    var u = o.indexOf(e);
    c ? u < 0 && o.push(e) : u >= 0 && o.splice(u, 1), i.onValueChange(o.toString());
  }
  var M = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: (e) => {
      D(e.target.value, e.target.checked);
    }
  };
  const k = (e) => x.includes(e);
  return console.log(r), /* @__PURE__ */ a(p, { children: C.visible && /* @__PURE__ */ a(
    P,
    {
      label: H(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ L(B, { fullWidth: !0, error: l.status, ...m, style: { flexDirection: F }, children: [
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
                inputRef: (o) => {
                  c == 0 && (r.current = o);
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
