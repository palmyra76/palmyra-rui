import { jsxs as y, jsx as t, Fragment as E } from "react/jsx-runtime";
import { forwardRef as H, useRef as S, useState as O, useImperativeHandle as z, useEffect as k, useMemo as N } from "react";
import { FormControl as G, Select as J, ListSubheader as Q, TextField as U, InputAdornment as X, MenuItem as Y, FormHelperText as Z } from "@mui/material";
import { copyMuiOptions as _ } from "./MuiUtil.js";
import { Search as $, DeleteOutlined as ee } from "@mui/icons-material";
import { delay as te } from "../../utils/index.js";
import { getValueByKey as K, setValueByKey as L } from "../../form/FormUtil.js";
import { m as re, p as ne } from "../../../index-1171ae7f.js";
import { hasDot as T } from "../../utils/StringUtil.js";
const he = H(function(o, d) {
  const { getFieldManager: f } = o, r = f(o, "serverlookup"), p = o.store || r.store, h = o.lookupOptions || {}, u = h.idAttribute || "id", s = h.titleAttribute || "name", B = h.searchAttribute || s, M = S(null), [m, b] = O([]), [C, D] = O(r.displayValue), [i, I] = O(""), g = r.error, c = r.data, v = r.eventListeners, x = S(null);
  z(d, () => ({
    focus() {
      x.current.focus();
    },
    isValid() {
      return !g.status;
    },
    assignAttribute(e) {
      x.current.assignAttribute(e);
    }
  }), []);
  const l = T(u) ? (e) => K(u, e) : (e) => e[u], P = T(s) ? (e) => K(s, e) : (e) => e[s];
  k(() => {
    D(r.displayValue);
  }, [r.displayValue]), N(() => {
    var e = R();
    e && (b([e]), M.current = e);
  }, [C]);
  function R() {
    if (c) {
      var e = {};
      L(u, e, c);
      const n = r.displayValue || c;
      return L(s, e, n), e;
    }
  }
  function A(e) {
    const n = M.current;
    e && n && !W(e, l(n)) && e.unshift(n), b(e);
  }
  function W(e, n) {
    return e.find((V) => {
      if (l(V) === n)
        return V;
    });
  }
  k(() => {
    te(F);
  }, [i]);
  const q = () => m.length > 10;
  function F() {
    var e = {};
    if (i.length > 0)
      e.filter = {}, e.filter[B] = i;
    else if (m.length > 1)
      return;
    p.query(e).then((n) => A(n.result)).catch(() => A([]));
  }
  var j = _(o, r.data), w = {
    onBlur: v.onBlur,
    onFocus: v.onFocus,
    onChange: (e) => v.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ y(G, { fullWidth: !0, error: g.status, children: [
    /* @__PURE__ */ y(
      J,
      {
        ...j,
        MenuProps: { autoFocus: !1 },
        value: c,
        onOpen: (e) => {
          F();
        },
        ...w,
        children: [
          q() ? /* @__PURE__ */ y(Q, { children: [
            /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
              U,
              {
                size: "small",
                value: i,
                autoFocus: !0,
                placeholder: "Type to search...",
                fullWidth: !0,
                InputProps: {
                  startAdornment: /* @__PURE__ */ t(X, { position: "start", children: /* @__PURE__ */ t($, {}) })
                },
                onChange: (e) => I(e.target.value),
                onKeyDown: (e) => {
                  e.key !== "Escape" && e.stopPropagation();
                }
              }
            ) }),
            o.required ? /* @__PURE__ */ t(E, {}) : /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(ee, {}) }) })
          ] }) : /* @__PURE__ */ t("div", {}),
          m.map((e, n) => /* @__PURE__ */ t(Y, { value: l(e), children: oe(P(e), i) }, l(e) || n))
        ]
      }
    ),
    /* @__PURE__ */ t(Z, { className: "form-error-text", children: g.message })
  ] });
}), oe = (a, o) => {
  if (!a)
    return;
  const d = re(a, o, { insideWords: !0 }), f = ne(a, d);
  return /* @__PURE__ */ t("div", { children: f.map((r, p) => /* @__PURE__ */ t(
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
  he as default
};
