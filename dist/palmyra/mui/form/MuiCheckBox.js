import { jsx as o, Fragment as M, jsxs as k } from "react/jsx-runtime";
import { forwardRef as O, useContext as L, useRef as C, useImperativeHandle as R } from "react";
import { FormControl as B, FormControlLabel as V, Checkbox as j, FormHelperText as y } from "@mui/material";
import { copyMuiOptions as w } from "./MuiUtil.js";
import { FieldManagerContext as A } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import H from "./FieldDecorator.js";
const q = O(function(t, d) {
  const b = L(A), m = d || C(null), { options: a } = t, n = b(t, "checkbox", m), { mutateOptions: h, setMutateOptions: x } = n, g = n.data ? n.data.split(",") : [], v = t.flexDirection || "row", i = n.error, l = n.eventListeners, s = C(null);
  R(m, () => ({
    focus() {
      s.current.checked = !0, s.current.focus();
    },
    isValid() {
      return !i.status;
    },
    assignAttribute(e) {
      s.current.assignAttribute(e);
    },
    clear() {
      n.setData("");
    },
    setValue(e) {
      n.setData(e);
    },
    setVisible(e) {
      x({ visible: e });
    }
  }), []);
  var f = w(t, n.data, t.label);
  t.readonly && (f.inputProps = { readOnly: !0 });
  function F(e, c) {
    const r = n.data ? n.data.split(",") : [];
    var u = r.indexOf(e);
    c ? u < 0 && r.push(e) : u >= 0 && r.splice(u, 1), l.onValueChange(r.toString());
  }
  var p = {
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (e) => {
      F(e.target.value, e.target.checked);
    }
  };
  const D = (e) => g.includes(e);
  return console.log(s), /* @__PURE__ */ o(M, { children: h.visible && /* @__PURE__ */ o(
    H,
    {
      label: t.title,
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ k(B, { fullWidth: !0, error: i.status, ...f, style: { flexDirection: v }, children: [
        a ? Object.keys(a).map((e, c) => /* @__PURE__ */ o(
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
                  c == 0 && (s.current = r);
                }
              }
            ),
            label: a[e]
          },
          e
        )) : /* @__PURE__ */ o("div", { children: "No options provided" }),
        /* @__PURE__ */ o(y, { className: "form-error-text", children: i.message })
      ] })
    }
  ) });
});
export {
  q as default
};
