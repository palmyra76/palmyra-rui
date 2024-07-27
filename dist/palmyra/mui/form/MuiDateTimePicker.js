import { jsx as r, Fragment as h } from "react/jsx-runtime";
import { forwardRef as v, useContext as x, useRef as d, useImperativeHandle as P } from "react";
import { LocalizationProvider as M, DateTimePicker as k } from "@mui/x-date-pickers";
import O from "dayjs";
import { copyMuiOptions as L, getFieldLabel as R } from "./MuiUtil.js";
import { FieldManagerContext as V } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import H from "./FieldDecorator.js";
import { A as j } from "../../../chunks/AdapterDayjs.js";
const E = v(function(e, o) {
  const c = x(V), u = o || d(null), f = e.displayPattern || e.serverPattern || "YYYY-MM-DD HH:mm:ss", i = c(e, "datetime", u), { mutateOptions: D, setMutateOptions: s } = i, l = i.error, b = i.data, n = i.eventListeners, g = e.variant || "standard", y = e.autoFocus || !1, m = d(null), F = () => O(b);
  P(u, () => ({
    focus() {
      m.current.focus();
    },
    isValid() {
      return !l.status;
    },
    getValue() {
      return i.getData();
    },
    clear() {
      i.setData("", !0);
    },
    setValue(t, a = !1) {
      i.setData(t, a);
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
  }), [i]);
  var C = L(e, F(), e.label), T = {
    onBlur: n.onBlur,
    onFocus: n.onFocus,
    onChange: (t) => {
      t && t.toDate ? n.onValueChange(t.toDate()) : n.onValueChange(void 0);
    }
  };
  return /* @__PURE__ */ r(h, { children: D.visible && /* @__PURE__ */ r(
    H,
    {
      label: R(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(M, { dateAdapter: j, children: /* @__PURE__ */ r(
        k,
        {
          ...C,
          readOnly: e.readonly,
          disableFuture: e.disableFuture,
          disablePast: e.disablePast,
          disableHighlightToday: e.disableHighlightToday,
          displayWeekNumber: e.displayWeekNumber,
          disableOpenPicker: e.disableOpenPicker,
          format: f,
          autoFocus: y,
          maxDate: e.maxDate,
          minDate: e.minDate,
          maxDateTime: e.maxDateTime,
          minDateTime: e.minDateTime,
          maxTime: e.maxTime,
          minTime: e.minTime,
          ...T,
          views: ["year", "day", "hours", "minutes", "seconds"],
          slotProps: {
            textField: {
              error: l.status,
              helperText: l.message,
              variant: g,
              fullWidth: !0,
              inputRef: m
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
