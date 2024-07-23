import { jsx as n, Fragment as R } from "react/jsx-runtime";
import { forwardRef as v, useContext as M, useRef as i, useImperativeHandle as O } from "react";
import { FormControl as L, FormControlLabel as q, Checkbox as y } from "@mui/material";
import { copyMuiOptions as I, getFieldLabel as V } from "./MuiUtil.js";
import { FieldManagerContext as B } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import D from "./FieldDecorator.js";
import { T, a as S } from "../../../chunks/index3.js";
const E = v(function(e, l) {
  const d = M(B), u = l || i(null);
  var m = { ...e, required: !1 };
  const a = d(m, "checkbox", u), { mutateOptions: f, setMutateOptions: c } = a, C = a.data == !0, b = a.error, r = a.eventListeners, h = e.autoFocus || !1, F = e.icon || T, k = e.checkedIcon || S, s = i(null);
  O(u, () => ({
    focus() {
      s.current.checked = !0, s.current.focus();
    },
    isValid() {
      return !b.status;
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
      c((o) => ({ ...o, visible: t }));
    },
    setRequired(t) {
    },
    setReadOnly(t) {
      c((o) => ({ ...o, readonly: t }));
    },
    setAttribute(t) {
      c((o) => ({ ...o, ...t }));
    },
    setOptions(t) {
    },
    getOptions() {
    }
  }), [a]);
  var g = I(e, a.data, e.label), x = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (t) => {
      e.readonly || r.onValueChange(t.target.checked);
    }
  };
  return /* @__PURE__ */ n(R, { children: f.visible && /* @__PURE__ */ n(
    D,
    {
      label: V(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(L, { ...g, children: /* @__PURE__ */ n(
        q,
        {
          control: /* @__PURE__ */ n(
            y,
            {
              className: "customCheckbox",
              icon: /* @__PURE__ */ n(F, {}),
              checkedIcon: /* @__PURE__ */ n(k, {}),
              ...x,
              checked: C,
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
  E as default
};
