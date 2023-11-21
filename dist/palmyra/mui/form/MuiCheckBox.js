import { jsx as o, Fragment as M, jsxs as O } from "react/jsx-runtime";
import { forwardRef as k, useContext as L, useRef as f, useImperativeHandle as B } from "react";
import { FormControl as R, FormControlLabel as V, Checkbox as j, FormHelperText as y } from "@mui/material";
import { copyMuiOptions as w } from "./MuiUtil.js";
import { FieldManagerContext as A } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import H from "./FieldDecorator.js";
const q = k(function(t, c) {
  const C = L(A), u = c || f(null), { options: r } = t, n = C(t, "checkbox", u), { mutateOptions: b, setMutateOptions: h } = n, x = n.data ? n.data.split(",") : [], g = t.flexDirection || "row", s = n.error, i = n.eventListeners, d = f(null);
  B(u, () => ({
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
      n.setData("");
    },
    setValue(e) {
      n.setData(e);
    },
    setVisible(e) {
      h({ visible: e });
    }
  }), []);
  var m = w(t, n.data, t.label);
  t.readonly && (m.inputProps = { readOnly: !0 });
  function v(e, D) {
    const a = n.data ? n.data.split(",") : [];
    var l = a.indexOf(e);
    D ? l < 0 && a.push(e) : l >= 0 && a.splice(l, 1), i.onValueChange(a.toString());
  }
  var F = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: (e) => {
      v(e.target.value, e.target.checked);
    }
  };
  const p = (e) => x.includes(e);
  return /* @__PURE__ */ o(M, { children: b.visible && /* @__PURE__ */ o(
    H,
    {
      label: t.title,
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ O(R, { fullWidth: !0, error: s.status, ...m, style: { flexDirection: g }, children: [
        r ? Object.keys(r).map((e) => /* @__PURE__ */ o(
          V,
          {
            value: e,
            control: /* @__PURE__ */ o(
              j,
              {
                ...F,
                checked: p(e),
                disabled: t.readonly
              }
            ),
            label: r[e]
          },
          e
        )) : /* @__PURE__ */ o("div", { children: "No options provided" }),
        /* @__PURE__ */ o(y, { className: "form-error-text", children: s.message })
      ] })
    }
  ) });
});
export {
  q as default
};
