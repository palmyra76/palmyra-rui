import { jsx as t, jsxs as S, Fragment as w } from "react/jsx-runtime";
import { forwardRef as B, useRef as E, useState as l, useMemo as z, useEffect as G } from "react";
import { Search as H, DeleteOutlined as J } from "@mui/icons-material";
import { FormControl as N, Select as Q, ListSubheader as U, TextField as X, InputAdornment as Y, MenuItem as Z } from "@mui/material";
import { m as _, p as $ } from "../../chunks/index.js";
import { getValueByKey as x, setValueByKey as A } from "./FormUtil.js";
import { delay as ee } from "../utils/index.js";
import { hasDot as b } from "../utils/StringUtil.js";
const de = B(function(D, re) {
  const { fieldDef: p, store: K, value: h, displayValue: d } = D, f = p.lookupOptions || {}, i = f.idAttribute || "id", n = f.titleAttribute || "name", o = E(null), k = f.searchAttribute || n, [a, m] = l([]), [F] = l(d), [s, M] = l("");
  var T = h || "";
  const [W, q] = l(T), c = b(i) ? (e) => x(i, e) : (e) => e[i], C = b(n) ? (e) => x(n, e) : (e) => e[n];
  z(() => {
    var e = I();
    e && (m([e]), o.current = e);
  }, [F]);
  function I() {
    if (o.current)
      return o.current;
    if (d) {
      var e = {};
      return A(i, e, h), A(n, e, d), e;
    }
  }
  G(() => {
    ee(v);
  }, [s]);
  function v() {
    var e = {};
    if (s.length > 0)
      e.filter = {}, e.filter[k] = s;
    else if (a.length > 1)
      return;
    K.query(e).then((r) => y(r.result)).catch(() => y([]));
  }
  function g(e, r) {
    return e.find((u) => {
      if (c(u) === r)
        return u;
    });
  }
  function L(e) {
    q(e), o.current = g(a, e);
  }
  function y(e) {
    const r = o.current;
    e && r && !g(e, c(r)) && e.unshift(r), m(e);
  }
  const P = () => a.length > 1, R = (e, r) => {
    const u = _(e, r, { insideWords: !0 }), V = $(e, u);
    return /* @__PURE__ */ t("div", { children: V.map((O, j) => /* @__PURE__ */ t(
      "span",
      {
        style: {
          fontWeight: O.highlight ? 700 : 400
        },
        children: O.text
      },
      j
    )) });
  };
  return /* @__PURE__ */ t(N, { fullWidth: !0, children: /* @__PURE__ */ S(
    Q,
    {
      MenuProps: { autoFocus: !1 },
      value: W,
      onOpen: (e) => {
        v();
      },
      onChange: (e) => {
        L(e.target.value);
      },
      children: [
        P() ? /* @__PURE__ */ S(U, { children: [
          /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
            X,
            {
              size: "small",
              value: s,
              autoFocus: !0,
              placeholder: "Type to search...",
              fullWidth: !0,
              InputProps: {
                startAdornment: /* @__PURE__ */ t(Y, { position: "start", children: /* @__PURE__ */ t(H, {}) })
              },
              onChange: (e) => M(e.target.value),
              onKeyDown: (e) => {
                e.key !== "Escape" && e.stopPropagation();
              }
            }
          ) }),
          p.required ? /* @__PURE__ */ t(w, {}) : /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(J, {}) }) })
        ] }) : /* @__PURE__ */ t("div", {}),
        a.map((e, r) => /* @__PURE__ */ t(Z, { value: c(e), children: R(C(e), s) }, c(e)))
      ]
    }
  ) });
});
export {
  de as default
};
