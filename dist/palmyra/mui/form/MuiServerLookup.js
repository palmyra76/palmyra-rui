import { jsx as r, jsxs as y, Fragment as S } from "react/jsx-runtime";
import { forwardRef as H, useContext as N, useRef as b, useState as C, useImperativeHandle as G, useEffect as K, useMemo as J } from "react";
import { FormControl as Q, InputLabel as U, Select as X, ListSubheader as Y, TextField as Z, InputAdornment as _, MenuItem as $, FormHelperText as ee } from "@mui/material";
import { copyMuiOptions as te } from "./MuiUtil.js";
import { Search as re, DeleteOutlined as ne } from "@mui/icons-material";
import { delay as oe } from "../../utils/index.js";
import { getValueByKey as D, setValueByKey as I } from "../../form/FormUtil.js";
import { m as se, p as ae } from "../../../index-1171ae7f.js";
import { FieldManagerContext as ie } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import le from "./FieldDecorator.js";
import { hasDot as P } from "../../utils/StringUtil.js";
const Fe = H(function(t, u) {
  const m = N(ie), s = u || b(null), n = m(t, "serverlookup", s), F = t.store || n.store, h = t.lookupOptions || {}, c = h.idAttribute || "id", a = h.titleAttribute || "name", R = h.searchAttribute || a, O = b(null), [p, x] = C([]), [T, B] = C(n.displayValue), [i, W] = C(""), g = n.error, d = n.data, v = n.eventListeners, M = b(null);
  G(s, () => ({
    focus() {
      M.current.focus();
    },
    isValid() {
      return !g.status;
    },
    assignAttribute(e) {
      M.current.assignAttribute(e);
    },
    setFilter(e) {
    },
    clear() {
    }
  }), []);
  const f = P(c) ? (e) => D(c, e) : (e) => e[c], q = P(a) ? (e) => D(a, e) : (e) => e[a];
  K(() => {
    B(n.displayValue);
  }, [n.displayValue]), J(() => {
    var e = j();
    e && (x([e]), O.current = e);
  }, [T]);
  function j() {
    if (d) {
      var e = {};
      I(c, e, d);
      const o = n.displayValue || d;
      return I(a, e, o), e;
    }
  }
  function A(e) {
    const o = O.current;
    e && o && !w(e, f(o)) && e.unshift(o), x(e);
  }
  function w(e, o) {
    return e.find((L) => {
      if (f(L) === o)
        return L;
    });
  }
  K(() => {
    oe(V);
  }, [i]);
  const z = () => p.length > 10;
  function V() {
    var e = {};
    if (i.length > 0)
      e.filter = {}, e.filter[R] = i;
    else if (p.length > 1)
      return;
    F ? F.query(e).then((o) => A(o.result)).catch(() => A([])) : console.error("lookup store is not initialized for attribute" + t.attribute);
  }
  var k = te(t, n.data, t.label);
  t.readonly && (k.inputProps = { readOnly: !0 });
  var E = {
    onBlur: v.onBlur,
    onFocus: v.onFocus,
    onChange: (e) => v.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ r(
    le,
    {
      label: t.title,
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ y(Q, { fullWidth: !0, error: g.status, children: [
        t.label ? /* @__PURE__ */ r(U, { children: t.label }) : /* @__PURE__ */ r(S, {}),
        /* @__PURE__ */ y(
          X,
          {
            ...k,
            MenuProps: { autoFocus: !1 },
            value: d,
            onOpen: (e) => {
              V();
            },
            ...E,
            children: [
              z() ? /* @__PURE__ */ y(Y, { children: [
                /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
                  Z,
                  {
                    size: "small",
                    value: i,
                    autoFocus: !0,
                    placeholder: "Type to search...",
                    fullWidth: !0,
                    InputProps: {
                      startAdornment: /* @__PURE__ */ r(_, { position: "start", children: /* @__PURE__ */ r(re, {}) })
                    },
                    onChange: (e) => W(e.target.value),
                    onKeyDown: (e) => {
                      e.key !== "Escape" && e.stopPropagation();
                    }
                  }
                ) }),
                t.required ? /* @__PURE__ */ r(S, {}) : /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("span", { children: /* @__PURE__ */ r(ne, {}) }) })
              ] }) : /* @__PURE__ */ r("div", {}),
              p.map((e, o) => /* @__PURE__ */ r($, { value: f(e), children: ue(q(e), i) }, f(e) || o))
            ]
          }
        ),
        /* @__PURE__ */ r(ee, { className: "form-error-text", children: g.message })
      ] })
    }
  );
}), ue = (l, t) => {
  if (!l)
    return;
  const u = se(l, t, { insideWords: !0 }), m = ae(l, u);
  return /* @__PURE__ */ r("div", { children: m.map((s, n) => /* @__PURE__ */ r(
    "span",
    {
      style: {
        fontWeight: s.highlight ? 700 : 400
      },
      children: s.text
    },
    n
  )) });
};
export {
  Fe as default
};
