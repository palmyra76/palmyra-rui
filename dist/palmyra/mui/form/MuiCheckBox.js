import { jsx as n, Fragment as k } from "react/jsx-runtime";
import { forwardRef as x, useContext as R, useRef as i, useImperativeHandle as v } from "react";
import { FormControl as y, FormControlLabel as M, Checkbox as O } from "@mui/material";
import { copyMuiOptions as L, getFieldLabel as q } from "./MuiUtil.js";
import { FieldManagerContext as V } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import B from "./FieldDecorator.js";
import { T as D, a as S } from "../../../chunks/index.esm.js";
const _ = x(function(e, u) {
  const d = R(V), c = u || i(null);
  var m = { ...e, required: !1 };
  const a = d(m, "checkbox", c), { mutateOptions: f, setMutateOptions: r } = a, b = a.data == !0, C = a.error, l = a.eventListeners, h = e.autoFocus || !1, s = i(null);
  v(c, () => ({
    focus() {
      s.current.checked = !0, s.current.focus();
    },
    isValid() {
      return !C.status;
    },
    getValue() {
      return a.getData();
    },
    clear() {
      a.setData("", !0);
    },
    setValue(t, o = !1) {
      a.setData(t, o);
    },
    setVisible(t) {
      r((o) => ({ ...o, visible: t }));
    },
    setRequired(t) {
    },
    setReadOnly(t) {
      r((o) => ({ ...o, readonly: t }));
    },
    setAttribute(t) {
      r((o) => ({ ...o, ...t }));
    },
    setOptions(t) {
    },
    getOptions() {
    }
  }), [a]);
  var F = L(e, a.data, e.label), g = {
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (t) => {
      e.readonly || l.onValueChange(t.target.checked);
    }
  };
  return /* @__PURE__ */ n(k, { children: f.visible && /* @__PURE__ */ n(
    B,
    {
      label: q(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(y, { ...F, children: /* @__PURE__ */ n(
        M,
        {
          control: /* @__PURE__ */ n(
            O,
            {
              icon: /* @__PURE__ */ n(D, { style: { fontSize: "20px" } }),
              checkedIcon: /* @__PURE__ */ n(S, { style: { fontSize: "20px" } }),
              ...g,
              checked: b,
              autoFocus: h,
              disabled: e.disabled,
              readOnly: e.readonly,
              inputRef: (t) => {
                s.current = t;
              }
            }
          ),
          label: e.label
        }
      ) })
    }
  ) });
});
export {
  _ as default
};
