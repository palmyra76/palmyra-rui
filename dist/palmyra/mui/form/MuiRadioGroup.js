import { jsx as o, Fragment as G, jsxs as I } from "react/jsx-runtime";
import { forwardRef as V, useContext as j, useRef as g, useImperativeHandle as p } from "react";
import { FormControl as z, FormLabel as k, RadioGroup as w, FormHelperText as A, FormControlLabel as F, Radio as h } from "@mui/material";
import { copyMuiOptions as H, getFieldLabel as N } from "./MuiUtil.js";
import { FieldManagerContext as P } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import Z from "./FieldDecorator.js";
import { G as q } from "../../../chunks/iconBase.js";
import { b as v } from "../../../chunks/index.esm.js";
function R(d) {
  return q({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" } }] })(d);
}
const Y = V(function(t, m) {
  const O = j(P), f = m || g(null), { options: x } = t, a = O(t, "radio", f), { mutateOptions: M, setMutateOptions: n } = a, y = t.flexDirection != "column", s = a.error, i = a.eventListeners, C = t.autoFocus || !1, u = g(null);
  p(f, () => ({
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
    setValue(e, r = !1) {
      a.setData(e, r);
    },
    setVisible(e) {
      n((r) => ({ ...r, visible: e }));
    },
    setRequired(e) {
      n((r) => ({ ...r, required: e }));
    },
    setReadOnly(e) {
      n((r) => ({ ...r, readonly: e }));
    },
    setAttribute(e) {
      n((r) => ({ ...r, ...e }));
    },
    setOptions(e) {
    },
    getOptions() {
    }
  }), [a]);
  var b = H(t, a.data, t.label);
  t.readonly && (b.inputProps = { readOnly: !0 });
  const L = !!t.readonly;
  var B = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: (e) => {
      L || i.onValueChange(e.target.value);
    }
  };
  const D = (e) => {
    if (e) {
      if (e instanceof Array) {
        const l = e.map((c, T) => /* @__PURE__ */ o(
          F,
          {
            value: c.value,
            control: /* @__PURE__ */ o(
              h,
              {
                icon: /* @__PURE__ */ o(v, { size: 24 }),
                checkedIcon: /* @__PURE__ */ o(R, { size: 24 }),
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
        return Object.keys(e).map((r, l) => /* @__PURE__ */ o(
          F,
          {
            value: r,
            control: /* @__PURE__ */ o(
              h,
              {
                icon: /* @__PURE__ */ o(v, { size: 24 }),
                checkedIcon: /* @__PURE__ */ o(R, { size: 24 }),
                inputRef: u,
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
  return /* @__PURE__ */ o(G, { children: M.visible && /* @__PURE__ */ o(
    Z,
    {
      label: N(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ I(z, { fullWidth: !0, error: s.status, children: [
        /* @__PURE__ */ o(k, { children: t.label }),
        /* @__PURE__ */ o(w, { icon: !0, row: y, ...B, ...b, children: D(x) }),
        /* @__PURE__ */ o(A, { className: "form-error-text", children: s.message })
      ] })
    }
  ) });
});
export {
  Y as default
};
