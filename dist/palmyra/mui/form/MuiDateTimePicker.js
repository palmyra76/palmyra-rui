import { jsx as s, Fragment as M } from "react/jsx-runtime";
import { forwardRef as h, useContext as y, useRef as u, useImperativeHandle as P } from "react";
import { LocalizationProvider as x, DateTimePicker as L } from "@mui/x-date-pickers";
import V from "dayjs";
import { copyMuiOptions as A, getFieldLabel as j } from "./MuiUtil.js";
import { FieldManagerContext as k } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import O from "./FieldDecorator.js";
import { A as R } from "../../../chunks/AdapterDayjs.js";
const q = h(function(t, i) {
  const c = y(k), l = i || u(null), m = t.displayPattern || t.serverPattern || "YYYY-MM-DD HH:mm:ss", a = c(t, "datetime", l), { mutateOptions: d, setMutateOptions: f } = a, n = a.error, g = a.data, r = a.eventListeners, D = t.variant || "standard", C = t.autoFocus || !1, o = u(null), F = () => V(g);
  P(l, () => ({
    focus() {
      o.current.focus();
    },
    isValid() {
      return !n.status;
    },
    assignAttribute(e) {
      o.current.assignAttribute(e);
    },
    getValue() {
      return a.getData();
    },
    clear() {
      a.setData("");
    },
    setValue(e) {
      a.setData(e);
    },
    setVisible(e) {
      f({ visible: e });
    }
  }), [a]);
  var v = A(t, F(), t.label), b = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (e) => {
      e && e.toDate ? r.onValueChange(e.toDate()) : r.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ s(M, { children: d.visible && /* @__PURE__ */ s(
    O,
    {
      label: j(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ s(x, { dateAdapter: R, children: /* @__PURE__ */ s(
        L,
        {
          ...v,
          readOnly: t.readonly,
          format: m,
          autoFocus: C,
          ...b,
          slotProps: {
            textField: {
              error: n.status,
              helperText: n.message,
              variant: D,
              fullWidth: !0,
              inputRef: o
            }
          }
        }
      ) })
    }
  ) });
});
export {
  q as default
};
