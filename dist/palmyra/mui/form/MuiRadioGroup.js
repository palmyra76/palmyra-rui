import { jsx as o, Fragment as D, jsxs as G } from "react/jsx-runtime";
import { forwardRef as I, useContext as V, useRef as b, useImperativeHandle as j } from "react";
import { FormControl as z, RadioGroup as P, FormHelperText as k, FormControlLabel as h, Radio as F } from "@mui/material";
import { copyMuiOptions as w, getFieldLabel as A } from "./MuiUtil.js";
import { FieldManagerContext as H } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import N from "./FieldDecorator.js";
import { G as Z } from "../../../chunks/iconBase.js";
import { b as v } from "../../../chunks/index2.js";
function R(d) {
  return Z({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }, child: [] }] })(d);
}
const X = I(function(t, f) {
  const O = V(H), m = f || b(null), { options: x } = t, n = O(t, "radio", m), { mutateOptions: M, setMutateOptions: a } = n, p = t.flexDirection != "column", s = n.error, i = n.eventListeners, C = t.autoFocus || !1, u = b(null);
  j(m, () => ({
    focus() {
      u.current.focus();
    },
    isValid() {
      return !s.status;
    },
    getValue() {
      return n.getData();
    },
    clear() {
      n.setData("", !0);
    },
    setValue(e, r = !1) {
      n.setData(e, r);
    },
    setVisible(e) {
      a((r) => ({ ...r, visible: e }));
    },
    setRequired(e) {
      a((r) => ({ ...r, required: e }));
    },
    setReadOnly(e) {
      a((r) => ({ ...r, readonly: e }));
    },
    setAttribute(e) {
      a((r) => ({ ...r, ...e }));
    },
    setOptions(e) {
    },
    getOptions() {
    }
  }), [n]);
  var g = w(t, n.data, t.label);
  t.readonly && (g.inputProps = { readOnly: !0 });
  const y = !!t.readonly;
  var L = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: (e) => {
      y || i.onValueChange(e.target.value);
    }
  };
  const B = (e) => {
    if (e) {
      if (e instanceof Array) {
        const l = e.map((c, q) => /* @__PURE__ */ o(
          h,
          {
            value: c.value,
            control: /* @__PURE__ */ o(
              F,
              {
                icon: /* @__PURE__ */ o(v, { size: 24 }),
                checkedIcon: /* @__PURE__ */ o(R, { size: 24 }),
                slotProps: { input: { ref: u } },
                autoFocus: C
              }
            ),
            label: c.label
          },
          c.value
        ));
        return console.log(l), l;
      }
      if (typeof e == "object")
        return Object.keys(e).map((r, l) => /* @__PURE__ */ o(
          h,
          {
            value: r,
            control: /* @__PURE__ */ o(
              F,
              {
                icon: /* @__PURE__ */ o(v, { size: 24 }),
                checkedIcon: /* @__PURE__ */ o(R, { size: 24 }),
                slotProps: { input: { ref: u } },
                autoFocus: C
              }
            ),
            label: e[r]
          },
          l
        ));
    }
    return /* @__PURE__ */ o("div", { children: "No options provided" });
  };
  return /* @__PURE__ */ o(D, { children: M.visible && /* @__PURE__ */ o(
    N,
    {
      label: A(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ G(z, { fullWidth: !0, error: s.status, children: [
        /* @__PURE__ */ o("div", { children: t.label }),
        /* @__PURE__ */ o(P, { icon: !0, row: p, ...L, ...g, children: B(x) }),
        /* @__PURE__ */ o(k, { className: "form-error-text", children: s.message })
      ] })
    }
  ) });
});
export {
  X as default
};
