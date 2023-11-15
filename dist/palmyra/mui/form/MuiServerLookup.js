import { jsxs as v, jsx as t, Fragment as E } from "react/jsx-runtime";
import { forwardRef as H, useContext as z, useRef as S, useState as y, useImperativeHandle as N, useEffect as k, useMemo as G } from "react";
import { FormControl as J, Select as Q, ListSubheader as U, TextField as X, InputAdornment as Y, MenuItem as Z, FormHelperText as _ } from "@mui/material";
import { copyMuiOptions as $ } from "./MuiUtil.js";
import { Search as ee, DeleteOutlined as te } from "@mui/icons-material";
import { delay as re } from "../../utils/index.js";
import { getValueByKey as C, setValueByKey as K } from "../../form/FormUtil.js";
import { m as ne, p as oe } from "../../../index-1171ae7f.js";
import { FieldManagerContext as se } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import { hasDot as L } from "../../utils/StringUtil.js";
const ve = H(function(o, d) {
  const r = z(se)(o, "serverlookup"), p = o.store || r.store, f = o.lookupOptions || {}, u = f.idAttribute || "id", s = f.titleAttribute || "name", T = f.searchAttribute || s, x = S(null), [h, F] = y([]), [B, D] = y(r.displayValue), [a, I] = y(""), m = r.error, c = r.data, g = r.eventListeners, O = S(null);
  N(d, () => ({
    focus() {
      O.current.focus();
    },
    isValid() {
      return !m.status;
    },
    assignAttribute(e) {
      O.current.assignAttribute(e);
    }
  }), []);
  const l = L(u) ? (e) => C(u, e) : (e) => e[u], P = L(s) ? (e) => C(s, e) : (e) => e[s];
  k(() => {
    D(r.displayValue);
  }, [r.displayValue]), G(() => {
    var e = R();
    e && (F([e]), x.current = e);
  }, [B]);
  function R() {
    if (c) {
      var e = {};
      K(u, e, c);
      const n = r.displayValue || c;
      return K(s, e, n), e;
    }
  }
  function b(e) {
    const n = x.current;
    e && n && !W(e, l(n)) && e.unshift(n), F(e);
  }
  function W(e, n) {
    return e.find((V) => {
      if (l(V) === n)
        return V;
    });
  }
  k(() => {
    re(A);
  }, [a]);
  const q = () => h.length > 10;
  function A() {
    var e = {};
    if (a.length > 0)
      e.filter = {}, e.filter[T] = a;
    else if (h.length > 1)
      return;
    p.query(e).then((n) => b(n.result)).catch(() => b([]));
  }
  var j = $(o, r.data), w = {
    onBlur: g.onBlur,
    onFocus: g.onFocus,
    onChange: (e) => g.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ v(J, { fullWidth: !0, error: m.status, children: [
    /* @__PURE__ */ v(
      Q,
      {
        ...j,
        MenuProps: { autoFocus: !1 },
        value: c,
        onOpen: (e) => {
          A();
        },
        ...w,
        children: [
          q() ? /* @__PURE__ */ v(U, { children: [
            /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
              X,
              {
                size: "small",
                value: a,
                autoFocus: !0,
                placeholder: "Type to search...",
                fullWidth: !0,
                InputProps: {
                  startAdornment: /* @__PURE__ */ t(Y, { position: "start", children: /* @__PURE__ */ t(ee, {}) })
                },
                onChange: (e) => I(e.target.value),
                onKeyDown: (e) => {
                  e.key !== "Escape" && e.stopPropagation();
                }
              }
            ) }),
            o.required ? /* @__PURE__ */ t(E, {}) : /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(te, {}) }) })
          ] }) : /* @__PURE__ */ t("div", {}),
          h.map((e, n) => /* @__PURE__ */ t(Z, { value: l(e), children: ae(P(e), a) }, l(e) || n))
        ]
      }
    ),
    /* @__PURE__ */ t(_, { className: "form-error-text", children: m.message })
  ] });
}), ae = (i, o) => {
  if (!i)
    return;
  const d = ne(i, o, { insideWords: !0 }), M = oe(i, d);
  return /* @__PURE__ */ t("div", { children: M.map((r, p) => /* @__PURE__ */ t(
    "span",
    {
      style: {
        fontWeight: r.highlight ? 700 : 400
      },
      children: r.text
    },
    p
  )) });
};
export {
  ve as default
};
