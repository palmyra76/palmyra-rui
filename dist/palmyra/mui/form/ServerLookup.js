import { jsx as l, jsxs as q, Fragment as _ } from "react/jsx-runtime";
import { forwardRef as $, useContext as ee, useRef as y, useState as b, useEffect as v, useImperativeHandle as te } from "react";
import { FieldManagerContext as re } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import { u as ne } from "../../../chunks/ServerCardLayout.js";
import { delay as oe } from "../../utils/index.js";
import { getValueByKey as Q } from "../../form/FormUtil.js";
import { copyMuiOptions as se, getFieldLabel as ie } from "./MuiUtil.js";
import le from "./FieldDecorator.js";
import { FormControl as ae, Autocomplete as ue, TextField as ce, CircularProgress as de, FormHelperText as fe } from "@mui/material";
import { hasDot as T } from "../../utils/StringUtil.js";
const Ae = $(function(r, C) {
  const E = ee(re), x = C || y(null), A = y(null), L = y(0), [P, V] = b([]), [a, K] = b(""), [u, D] = b(!1), n = E(r, "serverlookup", x), j = r.store || n.store, R = r.lookupOptions || {}, h = R.idAttribute || "id", c = R.displayAttribute || "name", B = c, H = {
    store: j,
    endPointOptions: r.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: 15,
    quickSearch: B,
    initialFetch: !1
  }, S = ne(H), p = n.eventListeners, g = n.error, { mutateOptions: z, setMutateOptions: d } = n, s = n.data, w = u && P.length < (s ? 2 : 1), { setQueryFilter: f, setEndPointOptions: N, setQuickSearch: k, totalRecords: O, refreshData: I } = S, m = S.data, i = T(h) ? (e) => Q(h, e) : (e) => e == null ? void 0 : e[h], F = T(c) ? (e) => Q(c, e) : (e) => e == null ? void 0 : e[c];
  v(() => {
    var e = s != "" ? s : void 0;
    e && V([e]);
  }, [n.data]), v(() => {
    const e = m ? [...m] : [], t = s != "" ? s : void 0, o = i(t), Z = F(t);
    e && o && Z && !X(e, o) && e.unshift(t), V(e), L.current < O && (L.current = O);
  }, [m, O]), v(() => {
    oe(W);
  }, [a, u]);
  function W() {
    u && (a.length > 0 && a != F(s) ? k("*" + a + "*") : m ? k(null) : I());
  }
  var G = {
    onBlur: p.onBlur,
    onFocus: p.onFocus,
    onChange: (e, t) => {
      J(t);
    },
    onInputChange: (e, t) => (K(t), !0)
  };
  const J = (e) => {
    p.onValueChange(e);
  }, U = (e) => typeof e == "object" ? F(e) + "" : (console.log(e), "");
  function X(e, t) {
    return e.find((o) => {
      if (i(o) == t)
        return o;
    });
  }
  te(x, () => ({
    focus() {
      A.current.focus();
    },
    isValid() {
      return !g.status;
    },
    clear() {
      r.multiple ? n.setData([], !0) : n.setData(void 0, !0);
    },
    getValue() {
      return n.getData();
    },
    setValue(e, t = !1) {
      n.setData(e, t);
    },
    setVisible(e) {
      d((t) => ({ ...t, visible: e }));
    },
    setRequired(e) {
      d((t) => ({ ...t, required: e }));
    },
    setReadOnly(e) {
      d((t) => ({ ...t, readonly: e }));
    },
    setAttribute(e) {
      d((t) => ({ ...t, ...e }));
    },
    setFilter(e) {
      f(e);
    },
    resetFilter() {
      f({});
    },
    setEndPointOptions(e) {
      N(e);
    },
    getCurrentData: () => s,
    refresh: () => {
      I();
    },
    addFilter(e, t) {
      f((o) => (o[e] = t, { ...o }));
    },
    setDefaultFilter(e) {
    },
    setSortOptions(e) {
    }
  }), [n, f]);
  var M = se(r, s, r.label);
  z.readonly && (M.inputProps = { readOnly: !0 });
  const Y = (e, t) => e instanceof Array ? e.some((o) => i(o) == i(t)) : i(e) == i(t);
  return /* @__PURE__ */ l(
    le,
    {
      label: ie(r),
      customContainerClass: r.customContainerClass,
      colspan: r.colspan,
      customFieldClass: r.customFieldClass,
      customLabelClass: r.customLabelClass,
      children: /* @__PURE__ */ q(ae, { fullWidth: !0, error: g.status, children: [
        /* @__PURE__ */ l(
          ue,
          {
            includeInputInList: !0,
            autoHighlight: !0,
            multiple: r.multiple,
            readOnly: r.readonly,
            renderOption: r.renderOption,
            isOptionEqualToValue: Y,
            filterOptions: (e) => e,
            renderInput: (e) => /* @__PURE__ */ l(
              ce,
              {
                ...e,
                inputRef: (t) => {
                  A.current = t;
                },
                variant: r.variant || "standard",
                label: r.label,
                autoFocus: r.autoFocus,
                required: r.required,
                InputProps: {
                  ...e.InputProps,
                  endAdornment: /* @__PURE__ */ q(_, { children: [
                    w ? /* @__PURE__ */ l(de, { color: "inherit", size: 18 }) : null,
                    e.InputProps.endAdornment
                  ] })
                }
              }
            ),
            getOptionLabel: U,
            ...M,
            options: P,
            open: u,
            onClose: () => {
              D(!1);
            },
            onOpen: (e) => {
              D(!0);
            },
            ...G
          }
        ),
        /* @__PURE__ */ l(fe, { className: "form-error-text", children: g.message })
      ] })
    }
  );
});
export {
  Ae as default
};
