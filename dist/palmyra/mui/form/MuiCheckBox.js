import { jsx as n, Fragment as v } from "react/jsx-runtime";
import { forwardRef as R, useContext as M, useRef as i, useImperativeHandle as O } from "react";
import { FormControl as L, FormControlLabel as q, Checkbox as y } from "@mui/material";
import { copyMuiOptions as I, getFieldLabel as V } from "./MuiUtil.js";
import { FieldManagerContext as B } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import D from "./FieldDecorator.js";
import { T, a as P } from "../../../chunks/index3.js";
const E = R(function(e, l) {
  const d = M(B), u = l || i(null);
  var m = { ...e, required: !1 };
  const o = d(m, "checkbox", u), { mutateOptions: f, setMutateOptions: r } = o, C = o.data == !0, b = o.error, c = o.eventListeners, h = e.autoFocus || !1, F = e.icon || T, k = e.checkedIcon || P, s = i(null);
  O(u, () => ({
    focus() {
      s.current.checked = !0, s.current.focus();
    },
    isValid() {
      return !b.status;
    },
    getValue() {
      return o.getData();
    },
    clear() {
      o.setData("", !0);
    },
    setValue(t, a = !1) {
      o.setData(t, a);
    },
    setVisible(t) {
      r((a) => ({ ...a, visible: t }));
    },
    setRequired(t) {
    },
    setReadOnly(t) {
      r((a) => ({ ...a, readonly: t }));
    },
    setAttribute(t) {
      r((a) => ({ ...a, ...t }));
    },
    setOptions(t) {
    },
    getOptions() {
    }
  }), [o]);
  var g = I(e, o.data, e.label), x = {
    onBlur: c.onBlur,
    onFocus: c.onFocus,
    onChange: (t) => {
      e.readonly || c.onValueChange(t.target.checked);
    }
  };
  return /* @__PURE__ */ n(v, { children: f.visible && /* @__PURE__ */ n(
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
              slotProps: { input: { ref: (t) => {
                s.current = t;
              } } }
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
