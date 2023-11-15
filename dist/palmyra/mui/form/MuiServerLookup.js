import { jsxs as v, jsx as t, Fragment as E } from "react/jsx-runtime";
import { forwardRef as H, useContext as z, useRef as k, useState as y, useImperativeHandle as N, useEffect as C, useMemo as G } from "react";
import { FormControl as J, Select as Q, ListSubheader as U, TextField as X, InputAdornment as Y, MenuItem as Z, FormHelperText as _ } from "@mui/material";
import { copyMuiOptions as $ } from "./MuiUtil.js";
import { Search as ee, DeleteOutlined as te } from "@mui/icons-material";
import { delay as re } from "../../utils/index.js";
import { getValueByKey as K, setValueByKey as L } from "../../form/FormUtil.js";
import { m as ne, p as oe } from "../../../index-1171ae7f.js";
import { FieldManagerContext as se } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import { hasDot as P } from "../../utils/StringUtil.js";
const ve = H(function(o, d) {
  const r = z(se)(o, "serverlookup"), p = o.store || r.store, f = o.lookupOptions || {}, u = f.idAttribute || "id", s = f.titleAttribute || "name", T = f.searchAttribute || s, O = k(null), [h, x] = y([]), [B, D] = y(r.displayValue), [a, I] = y(""), m = r.error, l = r.data, g = r.eventListeners, F = k(null);
  N(d, () => ({
    focus() {
      F.current.focus();
    },
    isValid() {
      return !m.status;
    },
    assignAttribute(e) {
      F.current.assignAttribute(e);
    }
  }), []);
  const c = P(u) ? (e) => K(u, e) : (e) => e[u], R = P(s) ? (e) => K(s, e) : (e) => e[s];
  C(() => {
    D(r.displayValue);
  }, [r.displayValue]), G(() => {
    var e = W();
    e && (x([e]), O.current = e);
  }, [B]);
  function W() {
    if (l) {
      var e = {};
      L(u, e, l);
      const n = r.displayValue || l;
      return L(s, e, n), e;
    }
  }
  function b(e) {
    const n = O.current;
    e && n && !q(e, c(n)) && e.unshift(n), x(e);
  }
  function q(e, n) {
    return e.find((S) => {
      if (c(S) === n)
        return S;
    });
  }
  C(() => {
    re(A);
  }, [a]);
  const j = () => h.length > 10;
  function A() {
    var e = {};
    if (a.length > 0)
      e.filter = {}, e.filter[T] = a;
    else if (h.length > 1)
      return;
    p.query(e).then((n) => b(n.result)).catch(() => b([]));
  }
  var V = $(o, r.data);
  o.readonly && (V.inputProps = { readOnly: !0 });
  var w = {
    onBlur: g.onBlur,
    onFocus: g.onFocus,
    onChange: (e) => g.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ v(J, { fullWidth: !0, error: m.status, children: [
    /* @__PURE__ */ v(
      Q,
      {
        ...V,
        MenuProps: { autoFocus: !1 },
        value: l,
        onOpen: (e) => {
          A();
        },
        ...w,
        children: [
          j() ? /* @__PURE__ */ v(U, { children: [
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
          h.map((e, n) => /* @__PURE__ */ t(Z, { value: c(e), children: ae(R(e), a) }, c(e) || n))
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
