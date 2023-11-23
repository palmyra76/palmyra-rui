import { jsx as o, Fragment as M, jsxs as k } from "react/jsx-runtime";
import { forwardRef as L, useContext as O, useRef as b, useImperativeHandle as R } from "react";
import { FormControl as B, FormControlLabel as V, Checkbox as j, FormHelperText as y } from "@mui/material";
import { copyMuiOptions as w, getFieldLabel as A } from "./MuiUtil.js";
import { FieldManagerContext as H } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import N from "./FieldDecorator.js";
const z = L(function(t, d) {
  const C = O(H), m = d || b(null), { options: s } = t, n = C(t, "checkbox", m), { mutateOptions: h, setMutateOptions: g } = n, x = n.data ? n.data.split(",") : [], v = t.flexDirection || "row", l = n.error, i = n.eventListeners, a = b(null);
  R(m, () => ({
    focus() {
      a.current.checked = !0, a.current.focus();
    },
    isValid() {
      return !l.status;
    },
    assignAttribute(e) {
      a.current.assignAttribute(e);
    },
    clear() {
      n.setData("");
    },
    setValue(e) {
      n.setData(e);
    },
    setVisible(e) {
      g({ visible: e });
    }
  }), []);
  var f = w(t, n.data, t.label);
  t.readonly && (f.inputProps = { readOnly: !0 });
  function F(e, c) {
    const r = n.data ? n.data.split(",") : [];
    var u = r.indexOf(e);
    c ? u < 0 && r.push(e) : u >= 0 && r.splice(u, 1), i.onValueChange(r.toString());
  }
  var p = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: (e) => {
      F(e.target.value, e.target.checked);
    }
  };
  const D = (e) => x.includes(e);
  return console.log(a), /* @__PURE__ */ o(M, { children: h.visible && /* @__PURE__ */ o(
    N,
    {
      label: A(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ k(B, { fullWidth: !0, error: l.status, ...f, style: { flexDirection: v }, children: [
        s ? Object.keys(s).map((e, c) => /* @__PURE__ */ o(
          V,
          {
            value: e,
            control: /* @__PURE__ */ o(
              j,
              {
                ...p,
                checked: D(e),
                disabled: t.readonly,
                inputRef: (r) => {
                  c == 0 && (a.current = r);
                }
              }
            ),
            label: s[e]
          },
          e
        )) : /* @__PURE__ */ o("div", { children: "No options provided" }),
        /* @__PURE__ */ o(y, { className: "form-error-text", children: l.message })
      ] })
    }
  ) });
});
export {
  z as default
};
