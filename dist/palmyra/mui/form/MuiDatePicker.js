import { jsx as n, Fragment as P } from "react/jsx-runtime";
import { forwardRef as v, useContext as M, useRef as c, useImperativeHandle as k } from "react";
import { LocalizationProvider as x, DatePicker as O } from "@mui/x-date-pickers";
import L from "dayjs";
import { copyMuiOptions as R, getFieldLabel as V } from "./MuiUtil.js";
import { FieldManagerContext as j } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import A from "./FieldDecorator.js";
import { A as Y } from "../../../chunks/AdapterDayjs.js";
const E = v(function(e, o) {
  const m = M(j), u = o || c(null), f = e.displayPattern || e.serverPattern || "YYYY-MM-DD", s = m(e, "date", u), { mutateOptions: b, setMutateOptions: r } = s, l = s.error, D = s.data, i = s.eventListeners, g = e.variant || "standard", F = e.autoFocus || !1, d = c(null), C = () => L(D);
  k(u, () => ({
    focus() {
      d.current.focus();
    },
    isValid() {
      return !l.status;
    },
    getValue() {
      return s.getData();
    },
    clear() {
      s.setData("", !0);
    },
    setValue(t, a = !1) {
      s.setData(t, a);
    },
    setVisible(t) {
      r((a) => ({ ...a, visible: t }));
    },
    setRequired(t) {
      r((a) => ({ ...a, required: t }));
    },
    setReadOnly(t) {
      r((a) => ({ ...a, readonly: t }));
    },
    setDisableFuture(t) {
      r((a) => ({ ...a, disableFuture: t }));
    },
    setAttribute(t) {
      r((a) => ({ ...a, ...t }));
    },
    setCurrent() {
    }
  }), [s]);
  var y = R(e, C(), e.label), h = {
    onBlur: i.onBlur,
    onFocus: i.onFocus,
    onChange: (t) => {
      t && t.toDate ? i.onValueChange(t.toDate()) : i.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ n(P, { children: b.visible && /* @__PURE__ */ n(
    A,
    {
      label: V(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(x, { dateAdapter: Y, children: /* @__PURE__ */ n(
        O,
        {
          ...y,
          readOnly: e.readonly,
          disableFuture: e.disableFuture,
          disablePast: e.disablePast,
          disableHighlightToday: e.disableHighlightToday,
          displayWeekNumber: e.displayWeekNumber,
          disableOpenPicker: e.disableOpenPicker,
          format: f,
          ...h,
          autoFocus: F,
          maxDate: e.maxDate,
          minDate: e.minDate,
          slotProps: {
            textField: {
              error: l.status,
              helperText: l.message,
              variant: g,
              fullWidth: !0,
              inputRef: d
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
