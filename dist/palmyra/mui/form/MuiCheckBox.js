import { jsx as o, Fragment as k } from "react/jsx-runtime";
import { forwardRef as v, useContext as x, useRef as i, useImperativeHandle as M } from "react";
import { FormControl as O, FormControlLabel as R, Checkbox as L } from "@mui/material";
import { copyMuiOptions as y, getFieldLabel as V } from "./MuiUtil.js";
import { FieldManagerContext as B } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import D from "./FieldDecorator.js";
const _ = v(function(e, u) {
  const d = x(B), c = u || i(null);
  var m = { ...e, required: !1 };
  const a = d(m, "checkbox", c), { mutateOptions: f, setMutateOptions: r } = a, C = a.data == !0, b = a.error, l = a.eventListeners, F = e.autoFocus || !1, s = i(null);
  M(c, () => ({
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
    setValue(t, n = !1) {
      a.setData(t, n);
    },
    setVisible(t) {
      r((n) => ({ ...n, visible: t }));
    },
    setRequired(t) {
    },
    setReadOnly(t) {
      r((n) => ({ ...n, readonly: t }));
    },
    setAttribute(t) {
      r((n) => ({ ...n, ...t }));
    },
    setOptions(t) {
    },
    getOptions() {
    }
  }), [a]);
  var g = y(e, a.data, e.label), h = {
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (t) => {
      e.readonly || l.onValueChange(t.target.checked);
    }
  };
  return /* @__PURE__ */ o(k, { children: f.visible && /* @__PURE__ */ o(
    D,
    {
      label: V(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(O, { ...g, children: /* @__PURE__ */ o(
        R,
        {
          control: /* @__PURE__ */ o(
            L,
            {
              ...h,
              checked: C,
              autoFocus: F,
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
