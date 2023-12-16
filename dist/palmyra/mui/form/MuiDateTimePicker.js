import { jsx as o, Fragment as M } from "react/jsx-runtime";
import { forwardRef as h, useContext as P, useRef as m, useImperativeHandle as x } from "react";
import { LocalizationProvider as L, DateTimePicker as R } from "@mui/x-date-pickers";
import V from "dayjs";
import { copyMuiOptions as O, getFieldLabel as j } from "./MuiUtil.js";
import { FieldManagerContext as k } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import A from "./FieldDecorator.js";
import { A as T } from "../../../chunks/AdapterDayjs.js";
const E = h(function(e, l) {
  const d = P(k), u = l || m(null), f = e.displayPattern || e.serverPattern || "YYYY-MM-DD HH:mm:ss", r = d(e, "datetime", u), { mutateOptions: C, setMutateOptions: s } = r, i = r.error, D = r.data, n = r.eventListeners, F = e.variant || "standard", g = e.autoFocus || !1, c = m(null), v = () => V(D);
  x(u, () => ({
    focus() {
      c.current.focus();
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
    setValue(t, a = !1) {
      r.setData(t, a);
    },
    setVisible(t) {
      s((a) => ({ ...a, visible: t }));
    },
    setRequired(t) {
      s((a) => ({ ...a, required: t }));
    },
    setReadOnly(t) {
      s((a) => ({ ...a, readonly: t }));
    },
    setAttribute(t) {
      s((a) => ({ ...a, ...t }));
    },
    setCurrent() {
    }
  }), [r]);
  var b = O(e, v(), e.label), y = {
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (t) => {
      t && t.toDate ? n.onValueChange(t.toDate()) : n.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ o(M, { children: C.visible && /* @__PURE__ */ o(
    A,
    {
      label: j(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(L, { dateAdapter: T, children: /* @__PURE__ */ o(
        R,
        {
          ...b,
          readOnly: e.readonly,
          format: f,
          autoFocus: g,
          ...y,
          slotProps: {
            textField: {
              error: i.status,
              helperText: i.message,
              variant: F,
              fullWidth: !0,
              inputRef: c
            }
          }
        }
      ) })
    }
  ) });
});
export {
  E as default
};
