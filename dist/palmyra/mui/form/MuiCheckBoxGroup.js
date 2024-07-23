import { jsx as a, Fragment as k, jsxs as D } from "react/jsx-runtime";
import { forwardRef as M, useContext as y, useRef as C, useImperativeHandle as L } from "react";
import { FormControl as S, FormControlLabel as V, Checkbox as B, FormHelperText as T } from "@mui/material";
import { copyMuiOptions as j, getFieldLabel as q } from "./MuiUtil.js";
import { FieldManagerContext as w } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import z from "./FieldDecorator.js";
import { T as G, a as H } from "../../../chunks/index3.js";
const K = M(function(t, f) {
  const b = y(w), m = f || C(null), { options: l } = t, n = b(t, "checkbox", m), { mutateOptions: x, setMutateOptions: s } = n, g = n.data ? n.data.split(",") : [], F = t.flexDirection || "row", i = n.error, c = n.eventListeners, p = t.autoFocus || !1, u = C(null);
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
    const r = n.data ? n.data.split(",") : [];
    var d = r.indexOf(e);
    o ? d < 0 && r.push(e) : d >= 0 && r.splice(d, 1), c.onValueChange(r.toString());
  }
  var O = {
    onBlur: c.onBlur,
    onFocus: c.onFocus,
    onChange: (e) => {
      v(e.target.value, e.target.checked);
    }
  };
  const R = (e) => g.includes(e);
  return /* @__PURE__ */ a(k, { children: x.visible && /* @__PURE__ */ a(
    z,
    {
      label: q(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ D(S, { fullWidth: !0, error: i.status, ...h, style: { flexDirection: F }, children: [
        l ? Object.keys(l).map((e, o) => /* @__PURE__ */ a(
          V,
          {
            value: e,
            control: /* @__PURE__ */ a(
              B,
              {
                icon: /* @__PURE__ */ a(G, { style: { fontSize: "20px" } }),
                checkedIcon: /* @__PURE__ */ a(H, { style: { fontSize: "20px" } }),
                ...O,
                checked: R(e),
                autoFocus: p,
                disabled: t.readonly,
                inputRef: (r) => {
                  o == 0 && (u.current = r);
                }
              }
            ),
            label: l[e]
          },
          e
        )) : /* @__PURE__ */ a("div", { children: "No options provided" }),
        /* @__PURE__ */ a(T, { className: "form-error-text", children: i.message })
      ] })
    }
  ) });
});
export {
  K as default
};
