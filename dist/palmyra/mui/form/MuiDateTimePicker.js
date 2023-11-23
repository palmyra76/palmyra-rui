import { jsx as s, Fragment as b } from "react/jsx-runtime";
import { forwardRef as F, useContext as M, useRef as u, useImperativeHandle as h } from "react";
import { LocalizationProvider as y, DateTimePicker as P } from "@mui/x-date-pickers";
import { AdapterDayjs as x } from "@mui/x-date-pickers/AdapterDayjs";
import L from "dayjs";
import { copyMuiOptions as V, getFieldLabel as j } from "./MuiUtil.js";
import { FieldManagerContext as k } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import A from "./FieldDecorator.js";
const I = F(function(t, i) {
  const c = M(k), l = i || u(null), m = t.displayPattern || t.serverPattern || "YYYY-MM-DD HH:mm:ss", a = c(t, "datetime", l), { mutateOptions: d, setMutateOptions: f } = a, n = a.error, C = a.data, r = a.eventListeners, o = u(null), g = () => L(C);
  h(l, () => ({
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
  var v = V(t, g(), t.label), D = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (e) => {
      e && e.toDate ? r.onValueChange(e.toDate()) : r.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ s(b, { children: d.visible && /* @__PURE__ */ s(
    A,
    {
      label: j(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ s(y, { dateAdapter: x, children: /* @__PURE__ */ s(
        P,
        {
          ...v,
          readOnly: t.readonly,
          format: m,
          ...D,
          slotProps: {
            textField: {
              error: n.status,
              helperText: n.message,
              variant: t.variant,
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
  I as default
};
