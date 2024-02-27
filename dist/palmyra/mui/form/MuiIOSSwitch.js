import { jsx as r, Fragment as F, jsxs as V } from "react/jsx-runtime";
import { forwardRef as v, useContext as R, useRef as M, useMemo as L, useState as E, useEffect as k, useImperativeHandle as I } from "react";
import { styled as D, Switch as A, FormControl as j, FormControlLabel as H, FormHelperText as P } from "@mui/material";
import { copyMuiOptions as q, getFieldLabel as z } from "./MuiUtil.js";
import B from "./OptionsParser.js";
import { FieldManagerContext as N } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import T from "./FieldDecorator.js";
const Z = v(function(e, d) {
  const C = R(N), f = d || M(null), i = C(e, "iosswitch", f), { mutateOptions: S, setMutateOptions: n } = i, s = i.error, w = i.eventListeners, y = e.autoFocus || !1, c = L(
    () => B(e.options, e.name),
    [e.options, e.name]
  ), m = (t, a) => {
    var g = c.checked.value;
    return t != null && t != null ? g == t : g == a;
  }, [o, h] = E(m(i.data, e.defaultValue)), l = M(null);
  k(() => {
    h(m(i.data, e.defaultValue));
  }, [i.data]), I(f, () => ({
    focus() {
      l.current.checked = !0, l.current.focus();
    },
    isValid() {
      return !s.status;
    },
    getValue() {
      return u();
    },
    clear() {
      i.setData("", !0);
    },
    setValue(t, a = !1) {
      i.setData(t, a);
    },
    setVisible(t) {
      n((a) => ({ ...a, visible: t }));
    },
    setRequired(t) {
      n((a) => ({ ...a, required: t }));
    },
    setReadOnly(t) {
      n((a) => ({ ...a, readonly: t }));
    },
    setAttribute(t) {
      n((a) => ({ ...a, ...t }));
    },
    getOptions() {
    },
    setOptions(t) {
    }
  }), [i]);
  var b = q(e, i.data, e.label);
  e.readonly && (b.inputProps = { readOnly: !0 });
  const O = () => {
    h(!o);
  };
  k(() => {
    w.onValueChange(u());
  }, [o]);
  const p = () => {
    var t = o ? "checked" : "unchecked";
    return c[t].title;
  }, u = () => {
    var t = o ? "checked" : "unchecked";
    return c[t].value;
  }, x = D((t) => /* @__PURE__ */ r(A, { ...t }))(({ theme: t }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transition: t.transitions.create(["transform"], {
        // Ensure smooth transition for transform
        duration: t.transitions.duration.shortest
      }),
      // transitionDuration: '350ms',
      // transitionTimingFunction: 'ease-in-out',
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: t.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5
        }
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff"
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: t.palette.mode === "light" ? t.palette.grey[100] : t.palette.grey[600]
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: t.palette.mode === "light" ? 0.7 : 0.3
      }
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: t.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: t.transitions.create(["background-color"], {
        duration: 500
      })
    }
  }));
  return /* @__PURE__ */ r(F, { children: S.visible && /* @__PURE__ */ r(
    T,
    {
      label: z(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ V(j, { error: s.status, ...b, children: [
        /* @__PURE__ */ r(
          H,
          {
            value: u(),
            inputRef: (t) => {
              l.current = t;
            },
            control: /* @__PURE__ */ r(
              x,
              {
                sx: { m: 1 },
                checked: o,
                onClick: O,
                disabled: e.readonly,
                autoFocus: y
              }
            ),
            label: p()
          }
        ),
        /* @__PURE__ */ r(P, { className: "form-error-text", children: s.message })
      ] })
    }
  ) });
});
export {
  Z as default
};
