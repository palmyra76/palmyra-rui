import { jsx as r, jsxs as y, Fragment as V } from "react/jsx-runtime";
import { useRef as z, useState as b, useEffect as A, useMemo as E } from "react";
import { delay as w } from "../../utils/index.js";
import { getValueByKey as K, setValueByKey as D } from "../../form/FormUtil.js";
import { m as H, p as N } from "../../../assets/index.js";
import { copyMuiOptions as G } from "./MuiUtil.js";
import J from "./FieldDecorator.js";
import { FormControl as Q, InputLabel as U, Select as X, ListSubheader as Y, TextField as Z, InputAdornment as _, MenuItem as $, FormHelperText as M } from "@mui/material";
import { Search as ee, DeleteOutlined as te } from "@mui/icons-material";
import { hasDot as P } from "../../utils/StringUtil.js";
const T = (t, f) => {
  if (!t)
    return;
  const n = H(t, f, { insideWords: !0 }), m = N(t, n);
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
}, he = (t, f, n) => {
  const m = t.store || n.store, i = t.lookupOptions || {}, l = i.idAttribute || "id", u = i.titleAttribute || "name", B = i.searchAttribute || u, h = n.data, C = z(null), [I, W] = b(n.displayValue), [p, O] = b([]), [a, g] = b(""), d = P(l) ? (e) => K(l, e) : (e) => e[l], F = P(u) ? (e) => K(u, e) : (e) => e[u];
  function x() {
    if (h) {
      var e = {};
      D(l, e, h);
      const o = n.displayValue || h;
      return D(u, e, o), e;
    }
  }
  A(() => {
    W(n.displayValue);
  }, [n.displayValue]), E(() => {
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
      var o = G(t, n.data, t.label);
      const c = n.eventListeners, k = n.error;
      f.readonly && (o.inputProps = { readOnly: !0 });
      var R = {
        onBlur: c.onBlur,
        onFocus: c.onFocus,
        onChange: (s) => c.onValueChange(s.target.value)
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
                ...o,
                MenuProps: { autoFocus: !1 },
                value: h,
                onOpen: (s) => {
                  v();
                },
                ...R,
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
                        onChange: (s) => g(s.target.value),
                        onKeyDown: (s) => {
                          s.key !== "Escape" && s.stopPropagation();
                        }
                      }
                    ) }),
                    t.required ? /* @__PURE__ */ r(V, {}) : /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("span", { children: /* @__PURE__ */ r(te, {}) }) })
                  ] }) : /* @__PURE__ */ r("div", {}),
                  p.map((s, j) => /* @__PURE__ */ r($, { value: d(s), children: T(F(s), a) }, d(s) || j))
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
