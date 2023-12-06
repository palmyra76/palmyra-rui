import { jsx as r, Fragment as M } from "react/jsx-runtime";
import { forwardRef as h, useContext as y, useRef as u, useImperativeHandle as P } from "react";
import { LocalizationProvider as x, DateTimePicker as L } from "@mui/x-date-pickers";
import { AdapterDayjs as V } from "@mui/x-date-pickers/AdapterDayjs";
import j from "dayjs";
import { copyMuiOptions as k, getFieldLabel as A } from "./MuiUtil.js";
import { FieldManagerContext as O } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import R from "./FieldDecorator.js";
const q = h(function(t, i) {
  const c = y(O), l = i || u(null), m = t.displayPattern || t.serverPattern || "YYYY-MM-DD HH:mm:ss", a = c(t, "datetime", l), { mutateOptions: d, setMutateOptions: f } = a, n = a.error, C = a.data, s = a.eventListeners, F = t.variant || "standard", g = t.autoFocus || !1, o = u(null), v = () => j(C);
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
    clear() {
      a.setData("");
    },
    setValue(e) {
      a.setData(e);
    },
    setVisible(e) {
      f({ visible: e });
    }
  }), []);
  var D = k(t, v(), t.label), b = {
    onBlur: s.onBlur,
    onFocus: s.onFocus,
    onChange: (e) => {
      e && e.toDate ? s.onValueChange(e.toDate()) : s.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ r(M, { children: d.visible && /* @__PURE__ */ r(
    R,
    {
      label: A(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ r(x, { dateAdapter: V, children: /* @__PURE__ */ r(
        L,
        {
          ...D,
          readOnly: t.readonly,
          format: m,
          autoFocus: g,
          ...b,
          slotProps: {
            textField: {
              error: n.status,
              helperText: n.message,
              variant: F,
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
