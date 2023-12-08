import { jsx as n, Fragment as j, jsxs as A } from "react/jsx-runtime";
import { forwardRef as V, useContext as Y, useRef as g, useState as C, useImperativeHandle as k, useEffect as I } from "react";
import { LocalizationProvider as T, DatePicker as D } from "@mui/x-date-pickers";
import { AdapterDayjs as p } from "@mui/x-date-pickers/AdapterDayjs";
import w from "dayjs";
import { copyMuiOptions as h, getFieldLabel as z } from "./MuiUtil.js";
import { FieldManagerContext as E } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import H from "./FieldDecorator.js";
const W = V(function(t, o) {
  const b = Y(E), i = o || g(null), l = t.displayPattern || t.serverPattern || "YYYY-MM-DD", a = b(t, "dateRange", i), { mutateOptions: v, setMutateOptions: y } = a, r = a.error, c = a.data, F = a.eventListeners, u = t.variant || "standard", s = g(null), [m, x] = C(), [d, P] = C(), f = (e) => {
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
    getValue() {
      return a.getData();
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
      y({ visible: e });
    }
  }), [a]);
  var M = h(t, f(c.from), t.label), O = h(t, f(c.to), t.label);
  const L = (e) => {
    x(e);
  }, R = (e) => {
    P(e);
  };
  return I(() => {
    F.onValueChange({ from: m, to: d });
  }, [m, d]), /* @__PURE__ */ n(j, { children: v.visible && /* @__PURE__ */ n(
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
        /* @__PURE__ */ n("span", { style: { width: "40%", textAlign: "center" }, children: "to" }),
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
