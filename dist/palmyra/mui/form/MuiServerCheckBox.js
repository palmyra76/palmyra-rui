import { jsx as r, Fragment as R, jsxs as K } from "react/jsx-runtime";
import { forwardRef as P, useContext as j, useRef as v, useImperativeHandle as w } from "react";
import { FormControl as H, FormControlLabel as N, Checkbox as Q, FormHelperText as z } from "@mui/material";
import { copyMuiOptions as I } from "./MuiUtil.js";
import { FieldManagerContext as T } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import W from "./FieldDecorator.js";
import { u as _ } from "../../../ServerCardLayout-f58591de.js";
import { hasDot as x } from "../../utils/StringUtil.js";
import { getValueByKey as p } from "../../form/FormUtil.js";
const oe = P(function(t, m) {
  const y = j(T), f = m || v(null), o = y(t, "checkbox", f), { mutateOptions: F, setMutateOptions: k } = o, D = o.data ? o.data.split(",") : [], M = t.flexDirection || "row", n = o.error, a = o.eventListeners, O = { store: o.store, pageSize: -1 }, { data: A } = _(O), b = A, C = v(null), g = t.lookupOptions || {}, i = g.idAttribute || "id", l = g.titleAttribute || "name", c = x(i) ? (e) => p(i, e) : (e) => e[i], S = x(l) ? (e) => p(l, e) : (e) => e[l];
  w(f, () => ({
    focus() {
      C.current.focus();
    },
    isValid() {
      return !n.status;
    },
    assignAttribute(e) {
      C.current.assignAttribute(e);
    },
    clear() {
      o.setData("");
    },
    setValue(e) {
      o.setData(e);
    },
    setVisible(e) {
      k({ visible: e });
    }
  }), []);
  var h = I(t, o.data, t.label);
  t.readonly && (h.inputProps = { readOnly: !0 });
  function B(e, u) {
    const s = o.data ? o.data.split(",") : [];
    var d = s.indexOf(e);
    u ? d < 0 && s.push(e) : d >= 0 && s.splice(d, 1), a.onValueChange(s.toString());
  }
  var L = {
    onBlur: a.onBlur,
    onFocus: a.onFocus,
    onChange: (e) => {
      B(e.target.value, e.target.checked);
    }
  };
  const V = (e) => {
    const u = e.toString();
    return D.includes(u);
  };
  return /* @__PURE__ */ r(R, { children: F.visible && /* @__PURE__ */ r(
    W,
    {
      label: t.title,
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ K(H, { fullWidth: !0, error: n.status, ...h, style: { flexDirection: M }, children: [
        b ? b.map((e) => /* @__PURE__ */ r(
          N,
          {
            value: c(e),
            control: /* @__PURE__ */ r(
              Q,
              {
                ...L,
                checked: V(c(e)),
                disabled: t.readonly
              }
            ),
            label: S(e)
          },
          c(e)
        )) : /* @__PURE__ */ r("div", { children: "No options provided" }),
        /* @__PURE__ */ r(z, { className: "form-error-text", children: n.message })
      ] })
    }
  ) });
});
export {
  oe as default
};
