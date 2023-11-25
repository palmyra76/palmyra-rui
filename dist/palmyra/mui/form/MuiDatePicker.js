import { jsx as n, Fragment as F } from "react/jsx-runtime";
import { forwardRef as M, useContext as h, useRef as u, useImperativeHandle as y } from "react";
import { LocalizationProvider as P, DatePicker as x } from "@mui/x-date-pickers";
import { AdapterDayjs as L } from "@mui/x-date-pickers/AdapterDayjs";
import V from "dayjs";
import { copyMuiOptions as j, getFieldLabel as k } from "./MuiUtil.js";
import { FieldManagerContext as A } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import O from "./FieldDecorator.js";
const W = M(function(t, i) {
  const c = h(A), l = i || u(null), d = t.displayPattern || t.serverPattern || "YYYY-MM-DD", a = c(t, "date", l), { mutateOptions: m, setMutateOptions: f } = a, s = a.error, C = a.data, r = a.eventListeners, g = t.variant || "standard", o = u(null), v = () => V(C);
  y(l, () => ({
    focus() {
      o.current.focus();
    },
    isValid() {
      return !s.status;
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
  var D = j(t, v(), t.label), b = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (e) => {
      e && e.toDate ? r.onValueChange(e.toDate()) : r.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ n(F, { children: m.visible && /* @__PURE__ */ n(
    O,
    {
      label: k(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ n(P, { dateAdapter: L, children: /* @__PURE__ */ n(
        x,
        {
          ...D,
          readOnly: t.readonly,
          format: d,
          ...b,
          slotProps: {
            textField: {
              error: s.status,
              helperText: s.message,
              variant: g,
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
  W as default
};
