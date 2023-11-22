import { jsx as n, Fragment as b } from "react/jsx-runtime";
import { forwardRef as F, useContext as M, useRef as u, useImperativeHandle as h } from "react";
import { LocalizationProvider as y, DatePicker as P } from "@mui/x-date-pickers";
import { AdapterDayjs as x } from "@mui/x-date-pickers/AdapterDayjs";
import L from "dayjs";
import { copyMuiOptions as V } from "./MuiUtil.js";
import { FieldManagerContext as j } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import k from "./FieldDecorator.js";
const I = F(function(t, i) {
  const c = M(j), l = i || u(null), d = t.displayPattern || t.serverPattern || "YYYY-MM-DD", a = c(t, "date", l), { mutateOptions: m, setMutateOptions: f } = a, s = a.error, C = a.data, r = a.eventListeners, o = u(null), v = () => L(C);
  h(l, () => ({
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
  var D = V(t, v(), t.label), g = {
    onBlur: r.onBlur,
    onFocus: r.onFocus,
    onChange: (e) => {
      e && e.toDate ? r.onValueChange(e.toDate()) : r.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ n(b, { children: m.visible && /* @__PURE__ */ n(
    k,
    {
      label: t.title,
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ n(y, { dateAdapter: x, children: /* @__PURE__ */ n(
        P,
        {
          ...D,
          readOnly: t.readonly,
          format: d,
          ...g,
          slotProps: {
            textField: {
              error: s.status,
              helperText: s.message,
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
