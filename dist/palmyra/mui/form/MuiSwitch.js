import { jsx as o, Fragment as F, jsxs as A } from "react/jsx-runtime";
import { forwardRef as B, useContext as U, useRef as v, useMemo as D, useState as E, useEffect as S, useImperativeHandle as H } from "react";
import { styled as m, Switch as l, FormControl as T, FormControlLabel as $, FormHelperText as P } from "@mui/material";
import { copyMuiOptions as X, getFieldLabel as j } from "./MuiUtil.js";
import Z from "./OptionsParser.js";
import { FieldManagerContext as q } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import N from "./FieldDecorator.js";
const et = B(function(e, f) {
  const x = U(q), w = f || v(null), i = x(e, "switch", w), { mutateOptions: C, setMutateOptions: s } = i, c = i.error, y = i.eventListeners, L = e.autoFocus || !1, d = e.switch, u = D(
    () => Z(e.options, e.name),
    [e.options, e.name]
  ), b = (t, a) => {
    var k = u.checked.value;
    return t != null && t != null ? k == t : k == a;
  }, [r, p] = E(b(i.data, e.defaultValue)), h = v(null);
  S(() => {
    p(b(i.data, e.defaultValue));
  }, [i.data]), H(w, () => ({
    focus() {
      h.current.checked = !0, h.current.focus();
    },
    isValid() {
      return !c.status;
    },
    getValue() {
      return g();
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
    getOptions() {
    },
    setOptions(t) {
    }
  }), [i]);
  var M = X(e, i.data, e.label);
  e.readonly && (M.inputProps = { readOnly: !0 });
  const V = () => {
    p(!r);
  };
  S(() => {
    y.onValueChange(g());
  }, [r]);
  const R = () => {
    var t = r ? "checked" : "unchecked";
    return u[t].title;
  }, g = () => {
    var t = r ? "checked" : "unchecked";
    return u[t].value;
  }, I = m((t) => /* @__PURE__ */ o(l, { ...t }))(({ theme: t }) => ({
    width: 46,
    height: 25,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 1.8,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        marginLeft: 7,
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
      width: 21,
      height: 21,
      transition: t.transitions.create(["width", "transform"], {
        duration: 200
      })
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: t.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: t.transitions.create(["background-color"], {
        duration: 500
      })
    }
  })), z = m(l)(({ theme: t }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16
      },
      "&::before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          t.palette.getContrastText(t.palette.primary.main)
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12
      },
      "&::after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          t.palette.getContrastText(t.palette.primary.main)
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12
      }
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 16,
      height: 16,
      margin: 2
    }
  })), O = m(l)(({ theme: t }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: t.palette.mode === "dark" ? "#8796A5" : "#aab4be"
        }
      }
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: t.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
      }
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: t.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2
    }
  }));
  let n;
  return d == "IOSSwitch" ? n = I : d == "Android12Switch" ? n = z : d == "MaterialUISwitch" ? n = O : n = l, /* @__PURE__ */ o(F, { children: C.visible && /* @__PURE__ */ o(
    N,
    {
      label: j(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ A(T, { error: c.status, ...M, children: [
        /* @__PURE__ */ o(
          $,
          {
            value: g(),
            inputRef: (t) => {
              h.current = t;
            },
            control: /* @__PURE__ */ o(
              n,
              {
                sx: { m: 1 },
                checked: r,
                onClick: V,
                disabled: e.readonly,
                autoFocus: L
              }
            ),
            label: R()
          }
        ),
        /* @__PURE__ */ o(P, { className: "form-error-text", children: c.message })
      ] })
    }
  ) });
});
export {
  et as default
};
