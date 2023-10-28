import { jsxs as O, jsx as t, Fragment as j } from "react/jsx-runtime";
import { forwardRef as w, useRef as k, useState as b, useImperativeHandle as E, useMemo as H, useEffect as z } from "react";
import { FormControl as N, Select as G, ListSubheader as J, TextField as Q, InputAdornment as U, MenuItem as X, FormHelperText as Y } from "@mui/material";
import { copyMuiOptions as Z } from "./MuiUtil.js";
import { Search as _, DeleteOutlined as $ } from "@mui/icons-material";
import { delay as ee } from "../../utils/index.js";
import { getValueByKey as V, setValueByKey as K } from "../../form/FormUtil.js";
import { m as te, p as re } from "../../../index-4ec89611.js";
import { hasDot as L } from "../../utils/StringUtil.js";
const pe = w(function(o, p) {
  const { getFieldManager: h } = o, n = h(o, "serverlookup"), m = o.store || n.store, u = o.lookupOptions || {}, c = u.idAttribute || "id", s = u.titleAttribute || u.displayAttribute || "name", T = u.searchAttribute || s, l = k(null), [g, A] = b([]), [B] = b(n.displayValue), [i, C] = b(""), v = n.error, d = n.data, y = n.eventListeners, M = k(null);
  E(p, () => ({
    focus() {
      M.current.focus();
    },
    isValid() {
      return !v.status;
    },
    assignAttribute(e) {
      M.current.assignAttribute(e);
    }
  }), []);
  const f = L(c) ? (e) => V(c, e) : (e) => e[c], I = L(s) ? (e) => V(s, e) : (e) => e[s];
  H(() => {
    var e = P();
    e && (A([e]), l.current = e);
  }, [B]);
  function P() {
    if (l.current)
      return l.current;
    if (d) {
      var e = {};
      K(c, e, d);
      const r = n.displayValue || d;
      return K(s, e, r), e;
    }
  }
  function x(e) {
    const r = l.current;
    e && r && !R(e, f(r)) && e.unshift(r), A(e);
  }
  function R(e, r) {
    return e.find((S) => {
      if (f(S) === r)
        return S;
    });
  }
  z(() => {
    ee(F);
  }, [i]);
  const W = () => g.length > 10;
  function F() {
    var e = {};
    if (i.length > 0)
      e.filter = {}, e.filter[T] = i;
    else if (g.length > 1)
      return;
    m.query(e).then((r) => x(r.result)).catch(() => x([]));
  }
  var q = Z(o, n.data), D = {
    onBlur: y.onBlur,
    onFocus: y.onFocus,
    onChange: (e) => y.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ O(N, { fullWidth: !0, error: v.status, children: [
    /* @__PURE__ */ O(
      G,
      {
        ...q,
        MenuProps: { autoFocus: !1 },
        value: d,
        onOpen: (e) => {
          F();
        },
        ...D,
        children: [
          W() ? /* @__PURE__ */ O(J, { children: [
            /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
              Q,
              {
                size: "small",
                value: i,
                autoFocus: !0,
                placeholder: "Type to search...",
                fullWidth: !0,
                InputProps: {
                  startAdornment: /* @__PURE__ */ t(U, { position: "start", children: /* @__PURE__ */ t(_, {}) })
                },
                onChange: (e) => C(e.target.value),
                onKeyDown: (e) => {
                  e.key !== "Escape" && e.stopPropagation();
                }
              }
            ) }),
            o.required ? /* @__PURE__ */ t(j, {}) : /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t($, {}) }) })
          ] }) : /* @__PURE__ */ t("div", {}),
          g.map((e, r) => /* @__PURE__ */ t(X, { value: f(e), children: ne(I(e), i) }, f(e) || r))
        ]
      }
    ),
    /* @__PURE__ */ t(Y, { className: "form-error-text", children: v.message })
  ] });
}), ne = (a, o) => {
  if (!a)
    return;
  const p = te(a, o, { insideWords: !0 }), h = re(a, p);
  return /* @__PURE__ */ t("div", { children: h.map((n, m) => /* @__PURE__ */ t(
    "span",
    {
      style: {
        fontWeight: n.highlight ? 700 : 400
      },
      children: n.text
    },
    m
  )) });
};
export {
  pe as default
};
