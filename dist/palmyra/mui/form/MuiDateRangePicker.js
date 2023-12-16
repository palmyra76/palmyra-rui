import { jsx as n, Fragment as j, jsxs as V } from "react/jsx-runtime";
import { forwardRef as p, useContext as Y, useRef as C, useState as h, useImperativeHandle as k, useEffect as I } from "react";
import { LocalizationProvider as T, DatePicker as b } from "@mui/x-date-pickers";
import o from "dayjs";
import { copyMuiOptions as x, getFieldLabel as w } from "./MuiUtil.js";
import { FieldManagerContext as z } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import E from "./FieldDecorator.js";
import { A as H } from "../../../chunks/AdapterDayjs.js";
const W = p(function(t, l) {
  const y = Y(z), i = l || C(null), u = t.displayPattern || t.serverPattern || "YYYY-MM-DD", a = y(t, "dateRange", i), { mutateOptions: F, setMutateOptions: P } = a, r = a.error, c = a.data, M = a.eventListeners, m = t.variant || "standard", s = C(null), [d, O] = h(), [f, A] = h(), g = (e) => {
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
  var D = x(t, g(c.from), t.label), v = x(t, g(c.to), t.label);
  const L = (e) => {
    O(e);
  }, R = (e) => {
    A(e);
  };
  return I(() => {
    M.onValueChange({ from: d, to: f });
  }, [d, f]), /* @__PURE__ */ n(j, { children: F.visible && /* @__PURE__ */ n(
    E,
    {
      label: w(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ V(T, { dateAdapter: H, children: [
        /* @__PURE__ */ n(
          b,
          {
            ...D,
            value: D.value ?? o,
            readOnly: t.readonly,
            format: u,
            onChange: L,
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
        )
      ] })
    }
  ) });
});
export {
  W as default
};
