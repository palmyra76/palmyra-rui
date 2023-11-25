import { jsx as s, Fragment as F } from "react/jsx-runtime";
import { forwardRef as M, useContext as h, useRef as u, useImperativeHandle as y } from "react";
import { LocalizationProvider as P, DateTimePicker as x } from "@mui/x-date-pickers";
import { AdapterDayjs as L } from "@mui/x-date-pickers/AdapterDayjs";
import V from "dayjs";
import { copyMuiOptions as j, getFieldLabel as k } from "./MuiUtil.js";
import { FieldManagerContext as A } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import O from "./FieldDecorator.js";
const W = M(function(t, i) {
  const c = h(A), l = i || u(null), m = t.displayPattern || t.serverPattern || "YYYY-MM-DD HH:mm:ss", a = c(t, "datetime", l), { mutateOptions: d, setMutateOptions: f } = a, n = a.error, C = a.data, r = a.eventListeners, g = t.variant || "standard", o = u(null), v = () => V(C);
  y(l, () => ({
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
  var D = j(t, v(), t.label), b = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (e) => {
      e && e.toDate ? r.onValueChange(e.toDate()) : r.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ s(F, { children: d.visible && /* @__PURE__ */ s(
    O,
    {
      label: k(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ s(P, { dateAdapter: L, children: /* @__PURE__ */ s(
        x,
        {
          ...D,
          readOnly: t.readonly,
          format: m,
          ...b,
          slotProps: {
            textField: {
              error: n.status,
              helperText: n.message,
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
