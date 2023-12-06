import { jsx as n, Fragment as j, jsxs as A } from "react/jsx-runtime";
import { forwardRef as V, useContext as Y, useRef as g, useState as C, useImperativeHandle as k, useEffect as I } from "react";
import { LocalizationProvider as T, DatePicker as D } from "@mui/x-date-pickers";
import { AdapterDayjs as p } from "@mui/x-date-pickers/AdapterDayjs";
import w from "dayjs";
import { copyMuiOptions as b, getFieldLabel as z } from "./MuiUtil.js";
import { FieldManagerContext as E } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import H from "./FieldDecorator.js";
const W = V(function(t, o) {
  const v = Y(E), i = o || g(null), l = t.displayPattern || t.serverPattern || "YYYY-MM-DD", a = v(t, "dateRange", i), { mutateOptions: F, setMutateOptions: h } = a, r = a.error, c = a.data, y = a.eventListeners, u = t.variant || "standard", s = g(null), [m, P] = C(), [d, x] = C(), f = (e) => {
    if (e)
      return w(e);
  };
  k(i, () => ({
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
      h({ visible: e });
    }
  }), []);
  var M = b(t, f(c.from), t.label), O = b(t, f(c.to), t.label);
  const L = (e) => {
    P(e);
  }, R = (e) => {
    x(e);
  };
  return I(() => {
    y.onValueChange({ from: m, to: d });
  }, [m, d]), /* @__PURE__ */ n(j, { children: F.visible && /* @__PURE__ */ n(
    H,
    {
      label: z(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ A(T, { dateAdapter: p, children: [
        /* @__PURE__ */ n(
          D,
          {
            ...M,
            readOnly: t.readonly,
            format: l,
            onChange: L,
            slotProps: {
              textField: {
                error: r.status,
                helperText: r.message,
                variant: u,
                inputRef: s
              }
            }
          }
        ),
        " to",
        /* @__PURE__ */ n(
          D,
          {
            ...O,
            readOnly: t.readonly,
            format: l,
            onChange: R,
            slotProps: {
              textField: {
                error: r.status,
                helperText: r.message,
                variant: u,
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
  W as default
};
