import { jsx as r, Fragment as D, jsxs as R } from "react/jsx-runtime";
import { forwardRef as M, useContext as y, useRef as C, useImperativeHandle as L } from "react";
import { FormControl as S, FormControlLabel as V, Checkbox as B, FormHelperText as T } from "@mui/material";
import { copyMuiOptions as j, getFieldLabel as q } from "./MuiUtil.js";
import { FieldManagerContext as P } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import w from "./FieldDecorator.js";
import { T as z, a as G } from "../../../chunks/index3.js";
const K = M(function(t, f) {
  const b = y(P), m = f || C(null), { options: l } = t, n = b(t, "checkbox", m), { mutateOptions: x, setMutateOptions: s } = n, g = n.data ? n.data.split(",") : [], F = t.flexDirection || "row", i = n.error, c = n.eventListeners, p = t.autoFocus || !1, u = C(null);
  L(m, () => ({
    focus() {
      u.current.checked = !0, u.current.focus();
    },
    isValid() {
      return !i.status;
    },
    getValue() {
      return n.getData();
    },
    clear() {
      n.setData("", !0);
    },
    setValue(e, o = !1) {
      n.setData(e, o);
    },
    setVisible(e) {
      s((o) => ({ ...o, visible: e }));
    },
    setRequired(e) {
      s((o) => ({ ...o, required: e }));
    },
    setReadOnly(e) {
      s((o) => ({ ...o, readonly: e }));
    },
    setAttribute(e) {
      s((o) => ({ ...o, ...e }));
    },
    setOptions(e) {
    },
    getOptions() {
    }
  }), [n]);
  var h = j(t, n.data, t.label);
  t.readonly && (h.inputProps = { readOnly: !0 });
  function v(e, o) {
    const a = n.data ? n.data.split(",") : [];
    var d = a.indexOf(e);
    o ? d < 0 && a.push(e) : d >= 0 && a.splice(d, 1), c.onValueChange(a.toString());
  }
  var O = {
    onBlur: c.onBlur,
    onFocus: c.onFocus,
    onChange: (e) => {
      v(e.target.value, e.target.checked);
    }
  };
  const k = (e) => g.includes(e);
  return /* @__PURE__ */ r(D, { children: x.visible && /* @__PURE__ */ r(
    w,
    {
      label: q(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ R(S, { fullWidth: !0, error: i.status, ...h, style: { flexDirection: F }, children: [
        l ? Object.keys(l).map((e, o) => /* @__PURE__ */ r(
          V,
          {
            value: e,
            control: /* @__PURE__ */ r(
              B,
              {
                icon: /* @__PURE__ */ r(z, { style: { fontSize: "20px" } }),
                checkedIcon: /* @__PURE__ */ r(G, { style: { fontSize: "20px" } }),
                ...O,
                checked: k(e),
                autoFocus: p,
                disabled: t.readonly,
                slotProps: { input: { ref: (a) => {
                  o == 0 && (u.current = a);
                } } }
              }
            ),
            label: l[e]
          },
          e
        )) : /* @__PURE__ */ r("div", { children: "No options provided" }),
        /* @__PURE__ */ r(T, { className: "form-error-text", children: i.message })
      ] })
    }
  ) });
});
export {
  K as default
};
