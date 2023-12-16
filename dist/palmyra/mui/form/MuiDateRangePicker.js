import { jsx as s, Fragment as V, jsxs as p } from "react/jsx-runtime";
import { forwardRef as Y, useContext as k, useRef as y, useState as x, useImperativeHandle as I, useEffect as T } from "react";
import { LocalizationProvider as w, DatePicker as F } from "@mui/x-date-pickers";
import i from "dayjs";
import { copyMuiOptions as P, getFieldLabel as q } from "./MuiUtil.js";
import { FieldManagerContext as z } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import E from "./FieldDecorator.js";
import { A as H } from "../../../chunks/AdapterDayjs.js";
const X = Y(function(t, u) {
  const b = k(z), c = u || y(null), d = t.displayPattern || t.serverPattern || "YYYY-MM-DD", r = b(t, "dateRange", c), { mutateOptions: M, setMutateOptions: o } = r, n = r.error, m = r.data, O = r.eventListeners, f = t.variant || "standard", l = y(null), [g, R] = x(), [C, L] = x(), D = (e) => {
    if (e)
      return i(e);
  };
  I(c, () => ({
    focus() {
      l.current.focus();
    },
    isValid() {
      return !n.status;
    },
    getValue() {
      return r.getData();
    },
    clear() {
      r.setData("", !0);
    },
    setValue(e, a = !1) {
      r.setData(e, a);
    },
    setVisible(e) {
      o((a) => ({ ...a, visible: e }));
    },
    setRequired(e) {
      o((a) => ({ ...a, required: e }));
    },
    setReadOnly(e) {
      o((a) => ({ ...a, readonly: e }));
    },
    setAttribute(e) {
      o((a) => ({ ...a, ...e }));
    },
    setCurrent() {
    }
  }), [r]);
  var v = P(t, D(m.from), t.label), h = P(t, D(m.to), t.label);
  const j = (e) => {
    R(e);
  }, A = (e) => {
    L(e);
  };
  return T(() => {
    O.onValueChange({ from: g, to: C });
  }, [g, C]), /* @__PURE__ */ s(V, { children: M.visible && /* @__PURE__ */ s(
    E,
    {
      label: q(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ p(w, { dateAdapter: H, children: [
        /* @__PURE__ */ s(
          F,
          {
            ...v,
            value: v.value ?? i,
            readOnly: t.readonly,
            format: d,
            onChange: j,
            slotProps: {
              textField: {
                error: n.status,
                helperText: n.message,
                variant: f,
                inputRef: l
              }
            }
          }
        ),
        /* @__PURE__ */ s("span", { style: { width: "40%", textAlign: "center", padding: "5px" }, children: "to" }),
        /* @__PURE__ */ s(
          F,
          {
            ...h,
            value: h.value ?? i,
            readOnly: t.readonly,
            format: d,
            onChange: A,
            slotProps: {
              textField: {
                error: n.status,
                helperText: n.message,
                variant: f,
                inputRef: l
              }
            }
          }
        )
      ] })
    }
  ) });
});
export {
  X as default
};
