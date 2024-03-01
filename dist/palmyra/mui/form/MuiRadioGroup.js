import { jsx as a, Fragment as M, jsxs as O } from "react/jsx-runtime";
import { forwardRef as x, useContext as p, useRef as C, useImperativeHandle as y } from "react";
import { FormControl as L, RadioGroup as B, FormControlLabel as D, Radio as G, FormHelperText as V } from "@mui/material";
import { copyMuiOptions as I, getFieldLabel as j } from "./MuiUtil.js";
import { FieldManagerContext as w } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import k from "./FieldDecorator.js";
import { G as z } from "../../../chunks/iconBase.js";
import { a as H } from "../../../chunks/index.esm3.js";
function N(u) {
  return z({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" } }] })(u);
}
const K = x(function(t, c) {
  const g = p(w), d = c || C(null), { options: s } = t, r = g(t, "radio", d), { mutateOptions: F, setMutateOptions: n } = r, R = t.flexDirection != "column", i = r.error, l = r.eventListeners, b = t.autoFocus || !1, m = C(null);
  y(d, () => ({
    focus() {
      m.current.focus();
    },
    isValid() {
      return !i.status;
    },
    getValue() {
      return r.getData();
    },
    clear() {
      r.setData("", !0);
    },
    setValue(e, o = !1) {
      r.setData(e, o);
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
  }), [r]);
  var f = I(t, r.data, t.label);
  t.readonly && (f.inputProps = { readOnly: !0 });
  const h = !!t.readonly;
  var v = {
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (e) => {
      h || l.onValueChange(e.target.value);
    }
  };
  return /* @__PURE__ */ a(M, { children: F.visible && /* @__PURE__ */ a(
    k,
    {
      label: j(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ O(L, { fullWidth: !0, error: i.status, children: [
        /* @__PURE__ */ a(B, { icon: !0, row: R, ...v, ...f, children: s ? Object.keys(s).map((e, o) => /* @__PURE__ */ a(
          D,
          {
            value: e,
            control: /* @__PURE__ */ a(
              G,
              {
                icon: /* @__PURE__ */ a(H, { size: 24 }),
                checkedIcon: /* @__PURE__ */ a(N, { size: 24 }),
                inputRef: m,
                autoFocus: b
              }
            ),
            label: s[e]
          },
          o
        )) : /* @__PURE__ */ a("div", { children: "No options provided" }) }),
        /* @__PURE__ */ a(V, { className: "form-error-text", children: i.message })
      ] })
    }
  ) });
});
export {
  K as default
};
