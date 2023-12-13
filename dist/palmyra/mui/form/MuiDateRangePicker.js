import { jsx as n, Fragment as A, jsxs as V } from "react/jsx-runtime";
import { forwardRef as p, useContext as Y, useRef as D, useState as h, useImperativeHandle as k, useEffect as I } from "react";
import { LocalizationProvider as T, DatePicker as b } from "@mui/x-date-pickers";
import { AdapterDayjs as w } from "@mui/x-date-pickers/AdapterDayjs";
import o from "dayjs";
import { copyMuiOptions as x, getFieldLabel as z } from "./MuiUtil.js";
import { FieldManagerContext as E } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import H from "./FieldDecorator.js";
const W = p(function(t, l) {
  const y = Y(E), i = l || D(null), u = t.displayPattern || t.serverPattern || "YYYY-MM-DD", a = y(t, "dateRange", i), { mutateOptions: F, setMutateOptions: P } = a, r = a.error, c = a.data, M = a.eventListeners, m = t.variant || "standard", s = D(null), [d, O] = h(), [f, L] = h(), g = (e) => {
    if (e)
      return o(e);
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
      P({ visible: e });
    }
  }), [a]);
  var v = x(t, g(c.from), t.label), C = x(t, g(c.to), t.label);
  const R = (e) => {
    O(e);
  }, j = (e) => {
    L(e);
  };
  return I(() => {
    M.onValueChange({ from: d, to: f });
  }, [d, f]), /* @__PURE__ */ n(A, { children: F.visible && /* @__PURE__ */ n(
    H,
    {
      label: z(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ V(T, { dateAdapter: w, children: [
        /* @__PURE__ */ n(
          b,
          {
            ...v,
            value: v.value ?? o,
            readOnly: t.readonly,
            format: u,
            onChange: R,
            slotProps: {
              textField: {
                error: r.status,
                helperText: r.message,
                variant: m,
                inputRef: s
              }
            }
          }
        ),
        /* @__PURE__ */ n("span", { style: { width: "40%", textAlign: "center", padding: "5px" }, children: "to" }),
        /* @__PURE__ */ n(
          b,
          {
            ...C,
            value: C.value ?? o,
            readOnly: t.readonly,
            format: u,
            onChange: j,
            slotProps: {
              textField: {
                error: r.status,
                helperText: r.message,
                variant: m,
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
