import { jsx as r, Fragment as D, jsxs as G } from "react/jsx-runtime";
import { forwardRef as I, useContext as V, useRef as b, useImperativeHandle as j } from "react";
import { FormControl as z, RadioGroup as k, FormHelperText as w, FormControlLabel as F, Radio as h } from "@mui/material";
import { copyMuiOptions as A, getFieldLabel as H } from "./MuiUtil.js";
import { FieldManagerContext as N } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import P from "./FieldDecorator.js";
import { G as Z } from "../../../chunks/iconBase.js";
import { b as v } from "../../../chunks/index.esm.js";
function R(d) {
  return Z({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" } }] })(d);
}
const X = I(function(t, m) {
  const O = V(N), f = m || b(null), { options: x } = t, a = O(t, "radio", f), { mutateOptions: M, setMutateOptions: n } = a, y = t.flexDirection != "column", s = a.error, i = a.eventListeners, C = t.autoFocus || !1, u = b(null);
  j(f, () => ({
    focus() {
      u.current.focus();
    },
    isValid() {
      return !s.status;
    },
    getValue() {
      return a.getData();
    },
    clear() {
      a.setData("", !0);
    },
    setValue(e, o = !1) {
      a.setData(e, o);
    },
    setVisible(e) {
      n((o) => ({ ...o, visible: e }));
    },
    setRequired(e) {
      n((o) => ({ ...o, required: e }));
    },
    setReadOnly(e) {
      n((o) => ({ ...o, readonly: e }));
    },
    setAttribute(e) {
      n((o) => ({ ...o, ...e }));
    },
    setOptions(e) {
    },
    getOptions() {
    }
  }), [a]);
  var g = A(t, a.data, t.label);
  t.readonly && (g.inputProps = { readOnly: !0 });
  const p = !!t.readonly;
  var L = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: (e) => {
      p || i.onValueChange(e.target.value);
    }
  };
  const B = (e) => {
    if (e) {
      if (e instanceof Array) {
        const l = e.map((c, q) => /* @__PURE__ */ r(
          F,
          {
            value: c.value,
            control: /* @__PURE__ */ r(
              h,
              {
                icon: /* @__PURE__ */ r(v, { size: 24 }),
                checkedIcon: /* @__PURE__ */ r(R, { size: 24 }),
                inputRef: u,
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
        return Object.keys(e).map((o, l) => /* @__PURE__ */ r(
          F,
          {
            value: o,
            control: /* @__PURE__ */ r(
              h,
              {
                icon: /* @__PURE__ */ r(v, { size: 24 }),
                checkedIcon: /* @__PURE__ */ r(R, { size: 24 }),
                inputRef: u,
                autoFocus: C
              }
            ),
            label: e[o]
          },
          l
        ));
    }
    return /* @__PURE__ */ r("div", { children: "No options provided" });
  };
  return /* @__PURE__ */ r(D, { children: M.visible && /* @__PURE__ */ r(
    P,
    {
      label: H(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ G(z, { fullWidth: !0, error: s.status, children: [
        /* @__PURE__ */ r(k, { icon: !0, row: y, ...L, ...g, children: B(x) }),
        /* @__PURE__ */ r(w, { className: "form-error-text", children: s.message })
      ] })
    }
  ) });
});
export {
  X as default
};
