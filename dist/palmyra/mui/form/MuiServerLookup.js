import { jsx as r, jsxs as v, Fragment as k } from "react/jsx-runtime";
import { forwardRef as E, useContext as H, useRef as L, useState as y, useImperativeHandle as N, useEffect as S, useMemo as G } from "react";
import { FormControl as J, InputLabel as Q, Select as U, ListSubheader as X, TextField as Y, InputAdornment as Z, MenuItem as _, FormHelperText as $ } from "@mui/material";
import { copyMuiOptions as ee } from "./MuiUtil.js";
import { Search as te, DeleteOutlined as re } from "@mui/icons-material";
import { delay as ne } from "../../utils/index.js";
import { getValueByKey as K, setValueByKey as D } from "../../form/FormUtil.js";
import { m as oe, p as se } from "../../../index-1171ae7f.js";
import { FieldManagerContext as ae } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import ie from "./FieldDecorator.js";
import { hasDot as I } from "../../utils/StringUtil.js";
const Ce = E(function(t, f) {
  const n = H(ae)(t, "serverlookup"), l = t.store || n.store, m = t.lookupOptions || {}, u = m.idAttribute || "id", s = m.titleAttribute || "name", P = m.searchAttribute || s, C = L(null), [h, F] = y([]), [T, B] = y(n.displayValue), [a, R] = y(""), p = n.error, c = n.data, g = n.eventListeners, M = L(null);
  N(f, () => ({
    focus() {
      M.current.focus();
    },
    isValid() {
      return !p.status;
    },
    assignAttribute(e) {
      M.current.assignAttribute(e);
    }
  }), []);
  const d = I(u) ? (e) => K(u, e) : (e) => e[u], W = I(s) ? (e) => K(s, e) : (e) => e[s];
  S(() => {
    B(n.displayValue);
  }, [n.displayValue]), G(() => {
    var e = q();
    e && (F([e]), C.current = e);
  }, [T]);
  function q() {
    if (c) {
      var e = {};
      D(u, e, c);
      const o = n.displayValue || c;
      return D(s, e, o), e;
    }
  }
  function O(e) {
    const o = C.current;
    e && o && !j(e, d(o)) && e.unshift(o), F(e);
  }
  function j(e, o) {
    return e.find((V) => {
      if (d(V) === o)
        return V;
    });
  }
  S(() => {
    ne(x);
  }, [a]);
  const w = () => h.length > 10;
  function x() {
    var e = {};
    if (a.length > 0)
      e.filter = {}, e.filter[P] = a;
    else if (h.length > 1)
      return;
    l ? l.query(e).then((o) => O(o.result)).catch(() => O([])) : console.error("lookup store is not initialized for attribute" + t.attribute);
  }
  var A = ee(t, n.data, t.label);
  t.readonly && (A.inputProps = { readOnly: !0 });
  var z = {
    onBlur: g.onBlur,
    onFocus: g.onFocus,
    onChange: (e) => g.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ r(
    ie,
    {
      label: t.title,
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ v(J, { fullWidth: !0, error: p.status, children: [
        t.label ? /* @__PURE__ */ r(Q, { children: t.label }) : /* @__PURE__ */ r(k, {}),
        /* @__PURE__ */ v(
          U,
          {
            ...A,
            MenuProps: { autoFocus: !1 },
            value: c,
            onOpen: (e) => {
              x();
            },
            ...z,
            children: [
              w() ? /* @__PURE__ */ v(X, { children: [
                /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
                  Y,
                  {
                    size: "small",
                    value: a,
                    autoFocus: !0,
                    placeholder: "Type to search...",
                    fullWidth: !0,
                    InputProps: {
                      startAdornment: /* @__PURE__ */ r(Z, { position: "start", children: /* @__PURE__ */ r(te, {}) })
                    },
                    onChange: (e) => R(e.target.value),
                    onKeyDown: (e) => {
                      e.key !== "Escape" && e.stopPropagation();
                    }
                  }
                ) }),
                t.required ? /* @__PURE__ */ r(k, {}) : /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("span", { children: /* @__PURE__ */ r(re, {}) }) })
              ] }) : /* @__PURE__ */ r("div", {}),
              h.map((e, o) => /* @__PURE__ */ r(_, { value: d(e), children: le(W(e), a) }, d(e) || o))
            ]
          }
        ),
        /* @__PURE__ */ r($, { className: "form-error-text", children: p.message })
      ] })
    }
  );
}), le = (i, t) => {
  if (!i)
    return;
  const f = oe(i, t, { insideWords: !0 }), b = se(i, f);
  return /* @__PURE__ */ r("div", { children: b.map((n, l) => /* @__PURE__ */ r(
    "span",
    {
      style: {
        fontWeight: n.highlight ? 700 : 400
      },
      children: n.text
    },
    l
  )) });
};
export {
  Ce as default
};
