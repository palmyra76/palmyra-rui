import { jsx as s, Fragment as M } from "react/jsx-runtime";
import { forwardRef as h, useContext as y, useRef as u, useImperativeHandle as P } from "react";
import { LocalizationProvider as x, DatePicker as L } from "@mui/x-date-pickers";
import { AdapterDayjs as V } from "@mui/x-date-pickers/AdapterDayjs";
import j from "dayjs";
import { copyMuiOptions as k, getFieldLabel as A } from "./MuiUtil.js";
import { FieldManagerContext as O } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import R from "./FieldDecorator.js";
const q = h(function(t, i) {
  const c = y(O), l = i || u(null), d = t.displayPattern || t.serverPattern || "YYYY-MM-DD", a = c(t, "date", l), { mutateOptions: m, setMutateOptions: f } = a, n = a.error, g = a.data, r = a.eventListeners, C = t.variant || "standard", D = t.autoFocus || !1, o = u(null), F = () => j(g);
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
  var v = k(t, F(), t.label), b = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (e) => {
      e && e.toDate ? r.onValueChange(e.toDate()) : r.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ s(M, { children: m.visible && /* @__PURE__ */ s(
    R,
    {
      label: A(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ s(x, { dateAdapter: V, children: /* @__PURE__ */ s(
        L,
        {
          ...v,
          readOnly: t.readonly,
          format: d,
          ...b,
          autoFocus: D,
          slotProps: {
            textField: {
              error: n.status,
              helperText: n.message,
              variant: C,
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
