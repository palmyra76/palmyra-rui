import { jsx as o, Fragment as M } from "react/jsx-runtime";
import { forwardRef as h, useContext as P, useRef as d, useImperativeHandle as x } from "react";
import { LocalizationProvider as L, DatePicker as R } from "@mui/x-date-pickers";
import V from "dayjs";
import { copyMuiOptions as O, getFieldLabel as j } from "./MuiUtil.js";
import { FieldManagerContext as k } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import A from "./FieldDecorator.js";
import { A as Y } from "../../../chunks/AdapterDayjs.js";
const G = h(function(t, i) {
  const m = P(k), u = i || d(null), f = t.displayPattern || t.serverPattern || "YYYY-MM-DD", r = m(t, "date", u), { mutateOptions: F, setMutateOptions: s } = r, l = r.error, D = r.data, n = r.eventListeners, C = t.variant || "standard", b = t.autoFocus || !1, c = d(null), g = () => V(D);
  x(u, () => ({
    focus() {
      c.current.focus();
    },
    isValid() {
      return !l.status;
    },
    getValue() {
      return r.getData();
    },
    clear() {
      r.setData("", !0);
    },
    setValue(e, a = !1) {
      r.setData(e, a);
    },
    setVisible(e) {
      s((a) => ({ ...a, visible: e }));
    },
    setRequired(e) {
      s((a) => ({ ...a, required: e }));
    },
    setReadOnly(e) {
      s((a) => ({ ...a, readonly: e }));
    },
    setDisableFuture(e) {
      s((a) => ({ ...a, disableFuture: e }));
    },
    setAttribute(e) {
      s((a) => ({ ...a, ...e }));
    },
    setCurrent() {
    }
  }), [r]);
  var v = O(t, g(), t.label), y = {
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (e) => {
      e && e.toDate ? n.onValueChange(e.toDate()) : n.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ o(M, { children: F.visible && /* @__PURE__ */ o(
    A,
    {
      label: j(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ o(L, { dateAdapter: Y, children: /* @__PURE__ */ o(
        R,
        {
          ...v,
          readOnly: t.readonly,
          disableFuture: t.disableFuture,
          format: f,
          ...y,
          autoFocus: b,
          slotProps: {
            textField: {
              error: l.status,
              helperText: l.message,
              variant: C,
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
  G as default
};
