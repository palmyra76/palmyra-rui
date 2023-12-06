import { jsx as n, Fragment as L, jsxs as R } from "react/jsx-runtime";
import { forwardRef as j, useContext as A, useRef as m, useState as d, useImperativeHandle as V, useEffect as Y } from "react";
import { LocalizationProvider as k, DatePicker as f } from "@mui/x-date-pickers";
import { AdapterDayjs as p } from "@mui/x-date-pickers/AdapterDayjs";
import w from "dayjs";
import { copyMuiOptions as T, getFieldLabel as z } from "./MuiUtil.js";
import { FieldManagerContext as E } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import H from "./FieldDecorator.js";
const U = j(function(t, o) {
  const g = A(E), i = o || m(null), l = t.displayPattern || t.serverPattern || "YYYY-MM-DD", a = g(t, "dateRange", i), { mutateOptions: D, setMutateOptions: C } = a, r = a.error, F = a.data, b = a.eventListeners, c = t.variant || "standard", s = m(null), [h, v] = d(/* @__PURE__ */ new Date()), [y, x] = d(/* @__PURE__ */ new Date()), M = () => w(F);
  V(i, () => ({
    focus() {
      s.current.focus();
    },
    isValid() {
      return !r.status;
    },
    assignAttribute(e) {
      s.current.assignAttribute(e);
    },
    clear() {
      a.setData("");
    },
    setValue(e) {
      a.setData(e);
    },
    setVisible(e) {
      C({ visible: e });
    }
  }), []);
  var u = T(t, M(), t.label);
  const P = (e) => {
    v(e);
  }, O = (e) => {
    x(e);
  };
  return Y(() => {
    b.onValueChange((e) => ({ ...e }));
  }, [h, y]), /* @__PURE__ */ n(L, { children: D.visible && /* @__PURE__ */ n(
    H,
    {
      label: z(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ R(k, { dateAdapter: p, children: [
        /* @__PURE__ */ n(
          f,
          {
            ...u,
            readOnly: t.readonly,
            format: l,
            onChange: P,
            slotProps: {
              textField: {
                error: r.status,
                helperText: r.message,
                variant: c,
                inputRef: s
              }
            }
          }
        ),
        " to",
        /* @__PURE__ */ n(
          f,
          {
            ...u,
            readOnly: t.readonly,
            format: l,
            onChange: O,
            slotProps: {
              textField: {
                error: r.status,
                helperText: r.message,
                variant: c,
                inputRef: s
              }
            }
          }
        )
      ] })
    }
  ) });
});
export {
  U as default
};
