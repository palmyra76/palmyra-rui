import { jsx as r, jsxs as v, Fragment as z } from "react/jsx-runtime";
import { forwardRef as E, useContext as H, useRef as k, useState as y, useImperativeHandle as N, useEffect as S, useMemo as G } from "react";
import { FormControl as J, Select as Q, ListSubheader as U, TextField as X, InputAdornment as Y, MenuItem as Z, FormHelperText as _ } from "@mui/material";
import { copyMuiOptions as $ } from "./MuiUtil.js";
import { Search as ee, DeleteOutlined as te } from "@mui/icons-material";
import { delay as re } from "../../utils/index.js";
import { getValueByKey as L, setValueByKey as K } from "../../form/FormUtil.js";
import { m as ne, p as oe } from "../../../index-1171ae7f.js";
import { FieldManagerContext as se } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import ae from "./FieldDecorator.js";
import { hasDot as D } from "../../utils/StringUtil.js";
const be = E(function(t, f) {
  const n = H(se)(t, "serverlookup"), l = t.store || n.store, m = t.lookupOptions || {}, u = m.idAttribute || "id", s = m.titleAttribute || "name", P = m.searchAttribute || s, C = k(null), [h, F] = y([]), [T, B] = y(n.displayValue), [a, I] = y(""), p = n.error, c = n.data, g = n.eventListeners, M = k(null);
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
  const d = D(u) ? (e) => L(u, e) : (e) => e[u], R = D(s) ? (e) => L(s, e) : (e) => e[s];
  S(() => {
    B(n.displayValue);
  }, [n.displayValue]), G(() => {
    var e = W();
    e && (F([e]), C.current = e);
  }, [T]);
  function W() {
    if (c) {
      var e = {};
      K(u, e, c);
      const o = n.displayValue || c;
      return K(s, e, o), e;
    }
  }
  function O(e) {
    const o = C.current;
    e && o && !q(e, d(o)) && e.unshift(o), F(e);
  }
  function q(e, o) {
    return e.find((V) => {
      if (d(V) === o)
        return V;
    });
  }
  S(() => {
    re(x);
  }, [a]);
  const j = () => h.length > 10;
  function x() {
    var e = {};
    if (a.length > 0)
      e.filter = {}, e.filter[P] = a;
    else if (h.length > 1)
      return;
    l ? l.query(e).then((o) => O(o.result)).catch(() => O([])) : console.error("lookup store is not initialized for attribute" + t.attribute);
  }
  var A = $(t, n.data);
  t.readonly && (A.inputProps = { readOnly: !0 });
  var w = {
    onBlur: g.onBlur,
    onFocus: g.onFocus,
    onChange: (e) => g.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ r(
    ae,
    {
      label: t.title,
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ v(J, { fullWidth: !0, error: p.status, children: [
        /* @__PURE__ */ v(
          Q,
          {
            ...A,
            MenuProps: { autoFocus: !1 },
            value: c,
            onOpen: (e) => {
              x();
            },
            ...w,
            children: [
              j() ? /* @__PURE__ */ v(U, { children: [
                /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
                  X,
                  {
                    size: "small",
                    value: a,
                    autoFocus: !0,
                    placeholder: "Type to search...",
                    fullWidth: !0,
                    InputProps: {
                      startAdornment: /* @__PURE__ */ r(Y, { position: "start", children: /* @__PURE__ */ r(ee, {}) })
                    },
                    onChange: (e) => I(e.target.value),
                    onKeyDown: (e) => {
                      e.key !== "Escape" && e.stopPropagation();
                    }
                  }
                ) }),
                t.required ? /* @__PURE__ */ r(z, {}) : /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("span", { children: /* @__PURE__ */ r(te, {}) }) })
              ] }) : /* @__PURE__ */ r("div", {}),
              h.map((e, o) => /* @__PURE__ */ r(Z, { value: d(e), children: ie(R(e), a) }, d(e) || o))
            ]
          }
        ),
        /* @__PURE__ */ r(_, { className: "form-error-text", children: p.message })
      ] })
    }
  );
}), ie = (i, t) => {
  if (!i)
    return;
  const f = ne(i, t, { insideWords: !0 }), b = oe(i, f);
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
  be as default
};
