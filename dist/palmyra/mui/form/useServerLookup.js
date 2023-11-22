import { jsx as r, jsxs as y, Fragment as V } from "react/jsx-runtime";
import { useRef as E, useState as b, useEffect as A, useMemo as R } from "react";
import { delay as w } from "../../utils/index.js";
import { getValueByKey as K, setValueByKey as D } from "../../form/FormUtil.js";
import { m as H, p as N } from "../../../chunks/index.js";
import { copyMuiOptions as G } from "./MuiUtil.js";
import J from "./FieldDecorator.js";
import { FormControl as Q, InputLabel as U, Select as X, ListSubheader as Y, TextField as Z, InputAdornment as _, MenuItem as $, FormHelperText as M } from "@mui/material";
import { Search as ee, DeleteOutlined as te } from "@mui/icons-material";
import { hasDot as P } from "../../utils/StringUtil.js";
const T = (t, f) => {
  if (!t)
    return;
  const s = H(t, f, { insideWords: !0 }), m = N(t, s);
  return /* @__PURE__ */ r("div", { children: m.map((i, l) => /* @__PURE__ */ r(
    "span",
    {
      style: {
        fontWeight: i.highlight ? 700 : 400
      },
      children: i.text
    },
    l
  )) });
}, he = (t, f, s) => {
  const m = t.store || s.store, i = t.lookupOptions || {}, l = i.idAttribute || "id", u = i.titleAttribute || "name", B = i.searchAttribute || u, h = s.data, C = E(null), [I, W] = b(s.displayValue), [p, O] = b([]), [a, g] = b(""), d = P(l) ? (e) => K(l, e) : (e) => e[l], F = P(u) ? (e) => K(u, e) : (e) => e[u];
  function x() {
    if (h) {
      var e = {};
      D(l, e, h);
      const o = s.displayValue || h;
      return D(u, e, o), e;
    }
  }
  A(() => {
    W(s.displayValue);
  }, [s.displayValue]), R(() => {
    var e = x();
    e && (O([e]), C.current = e);
  }, [I]);
  function L(e) {
    const o = C.current;
    e && o && !q(e, d(o)) && e.unshift(o), O(e);
  }
  function q(e, o) {
    return e.find((c) => {
      if (d(c) === o)
        return c;
    });
  }
  A(() => {
    w(v);
  }, [a]);
  const S = () => p.length > 10;
  function v() {
    var e = {};
    if (a.length > 0)
      e.filter = {}, e.filter[B] = a;
    else if (p.length > 1)
      return;
    m ? m.query(e).then((o) => L(o.result)).catch(() => L([])) : console.error("lookup store is not initialized for attribute" + t.attribute);
  }
  return {
    options: p,
    hasMoreRecords: S,
    getSelectedOption: x,
    labelAccessor: F,
    idAccessor: d,
    renderOption: T,
    getServerLookup: (e) => {
      var o = G(t, s.data, t.label);
      const c = s.eventListeners, k = s.error;
      f.readonly && (o.inputProps = { readOnly: !0 });
      var j = {
        onBlur: c.onBlur,
        onFocus: c.onFocus,
        onChange: (n) => c.onValueChange(n.target.value)
      };
      return /* @__PURE__ */ r(
        J,
        {
          label: t.title,
          customContainerClass: t.customContainerClass,
          colspan: t.colspan,
          customFieldClass: t.customFieldClass,
          customLabelClass: t.customLabelClass,
          children: /* @__PURE__ */ y(Q, { fullWidth: !0, error: k.status, children: [
            t.label ? /* @__PURE__ */ r(U, { children: t.label }) : /* @__PURE__ */ r(V, {}),
            /* @__PURE__ */ y(
              X,
              {
                ref: e,
                ...o,
                MenuProps: { autoFocus: !1 },
                value: h,
                onOpen: (n) => {
                  v();
                },
                ...j,
                children: [
                  S() ? /* @__PURE__ */ y(Y, { children: [
                    /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
                      Z,
                      {
                        size: "small",
                        value: a,
                        autoFocus: !0,
                        placeholder: "Type to search...",
                        fullWidth: !0,
                        InputProps: {
                          startAdornment: /* @__PURE__ */ r(_, { position: "start", children: /* @__PURE__ */ r(ee, {}) })
                        },
                        onChange: (n) => g(n.target.value),
                        onKeyDown: (n) => {
                          n.key !== "Escape" && n.stopPropagation();
                        }
                      }
                    ) }),
                    t.required ? /* @__PURE__ */ r(V, {}) : /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("span", { children: /* @__PURE__ */ r(te, {}) }) })
                  ] }) : /* @__PURE__ */ r("div", {}),
                  p.map((n, z) => /* @__PURE__ */ r($, { value: d(n), children: T(F(n), a) }, d(n) || z))
                ]
              }
            ),
            /* @__PURE__ */ r(M, { className: "form-error-text", children: k.message })
          ] })
        }
      );
    },
    searchText: a,
    setSearchText: g,
    refreshOptions: v
  };
};
export {
  he as useServerLookup
};
