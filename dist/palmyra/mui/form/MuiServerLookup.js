import { jsx as t, jsxs as v, Fragment as E } from "react/jsx-runtime";
import { forwardRef as H, useContext as z, useRef as S, useState as y, useImperativeHandle as N, useEffect as k, useMemo as G } from "react";
import { FormControl as J, Select as Q, ListSubheader as U, TextField as X, InputAdornment as Y, MenuItem as Z, FormHelperText as _ } from "@mui/material";
import { copyMuiOptions as $ } from "./MuiUtil.js";
import { Search as ee, DeleteOutlined as te } from "@mui/icons-material";
import { delay as re } from "../../utils/index.js";
import { getValueByKey as L, setValueByKey as K } from "../../form/FormUtil.js";
import { m as ne, p as oe } from "../../../index-1171ae7f.js";
import { FieldManagerContext as se } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import ae from "./FieldDecorator.js";
import { hasDot as D } from "../../utils/StringUtil.js";
const Ce = H(function(r, d) {
  const n = z(se)(r, "serverlookup"), m = r.store || n.store, f = r.lookupOptions || {}, l = f.idAttribute || "id", s = f.titleAttribute || "name", P = f.searchAttribute || s, F = S(null), [h, b] = y([]), [T, B] = y(n.displayValue), [a, I] = y(""), p = n.error, u = n.data, g = n.eventListeners, M = S(null);
  N(d, () => ({
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
  const c = D(l) ? (e) => L(l, e) : (e) => e[l], R = D(s) ? (e) => L(s, e) : (e) => e[s];
  k(() => {
    B(n.displayValue);
  }, [n.displayValue]), G(() => {
    var e = W();
    e && (b([e]), F.current = e);
  }, [T]);
  function W() {
    if (u) {
      var e = {};
      K(l, e, u);
      const o = n.displayValue || u;
      return K(s, e, o), e;
    }
  }
  function O(e) {
    const o = F.current;
    e && o && !q(e, c(o)) && e.unshift(o), b(e);
  }
  function q(e, o) {
    return e.find((V) => {
      if (c(V) === o)
        return V;
    });
  }
  k(() => {
    re(x);
  }, [a]);
  const j = () => h.length > 10;
  function x() {
    var e = {};
    if (a.length > 0)
      e.filter = {}, e.filter[P] = a;
    else if (h.length > 1)
      return;
    m.query(e).then((o) => O(o.result)).catch(() => O([]));
  }
  var A = $(r, n.data);
  r.readonly && (A.inputProps = { readOnly: !0 });
  var w = {
    onBlur: g.onBlur,
    onFocus: g.onFocus,
    onChange: (e) => g.onValueChange(e.target.value)
  };
  return /* @__PURE__ */ t(
    ae,
    {
      label: r.title,
      customContainerClass: r.customContainerClass,
      colspan: r.colspan,
      customFieldClass: r.customFieldClass,
      customLabelClass: r.customLabelClass,
      children: /* @__PURE__ */ v(J, { fullWidth: !0, error: p.status, children: [
        /* @__PURE__ */ v(
          Q,
          {
            ...A,
            MenuProps: { autoFocus: !1 },
            value: u,
            onOpen: (e) => {
              x();
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
                r.required ? /* @__PURE__ */ t(E, {}) : /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(te, {}) }) })
              ] }) : /* @__PURE__ */ t("div", {}),
              h.map((e, o) => /* @__PURE__ */ t(Z, { value: c(e), children: ie(R(e), a) }, c(e) || o))
            ]
          }
        ),
        /* @__PURE__ */ t(_, { className: "form-error-text", children: p.message })
      ] })
    }
  );
}), ie = (i, r) => {
  if (!i)
    return;
  const d = ne(i, r, { insideWords: !0 }), C = oe(i, d);
  return /* @__PURE__ */ t("div", { children: C.map((n, m) => /* @__PURE__ */ t(
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
  Ce as default
};
