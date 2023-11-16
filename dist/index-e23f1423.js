import { jsx as e, Fragment as G } from "react/jsx-runtime";
import { forwardRef as f, useImperativeHandle as y, useState as R, useContext as F, useEffect as w, useRef as k } from "react";
import { Box as D } from "@mui/material";
import E from "./palmyra/layout/flexiLayout/SectionRendererChart.js";
import V from "./palmyra/layout/flexiLayout/SectionRendererEditForm.js";
import q from "./palmyra/grid/GridX.js";
import { StoreFactoryContext as g, LayoutParamsContext as S, FieldManagerContext as N } from "./palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import "react-router-dom";
import "./palmyra/core/topic.js";
import { mergeDeep as O } from "./palmyra/utils/index.js";
import { getActionPublishers as T } from "./palmyra/core/Publishers.js";
import M from "./palmyra/layout/container/SectionContainer.js";
import { ErrorBoundary as C } from "./palmyra/layout/ErrorBoundary.js";
import B from "./palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import I from "./palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { createFormData as j } from "./palmyra/form/PalmyraFormManager.js";
const de = f(function(t, a) {
  const { layout: r, storeFactory: i, layoutParams: o } = t;
  return y(a, () => ({}), [r]), /* @__PURE__ */ e(G, { children: /* @__PURE__ */ e(g.Provider, { value: i, children: /* @__PURE__ */ e(L, { layout: r, context: o }) }) });
}), z = f(function(t, a) {
  const r = t.layout, [i, o] = R(r.fields), c = r.pagination ? r.pagination : [15], d = F(g), s = F(S);
  var u = r.storeOptions || {}, l = {};
  O(l, u, s);
  const m = d.getGridStore(l, r.storeOptions.endPoint);
  w(() => {
    u.hasLayout && m.queryLayout({}).then((b) => {
      o(b.columns);
    });
  }, []), y(a, () => ({
    applyFilter() {
    }
  }), []);
  const { onClick: h, onNewClick: P } = T(r.actionOptions, s);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    q,
    {
      columns: i,
      store: m,
      pageSize: c,
      onRowClick: h,
      onNewClick: P,
      quickSearch: r.quickSearch
    }
  ) });
}), L = z, A = (n) => {
  const { layout: t, context: a } = n;
  var r = t.Container || M;
  return /* @__PURE__ */ e(C, { fallback: /* @__PURE__ */ e("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ e(r, { ...t, children: ((o) => /* @__PURE__ */ e(
    L,
    {
      context: a,
      layout: o
    }
  ))(t.tableLayout) }) });
}, H = (n) => {
  const { layout: t } = n;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ e(V, { ...n });
    case "view":
      return /* @__PURE__ */ e(I, { ...n });
    case "grid":
      return /* @__PURE__ */ e(A, { ...n });
    case "chart":
      return /* @__PURE__ */ e(E, { ...n });
    default:
      return /* @__PURE__ */ e(B, { ...n });
  }
};
function W(n, t) {
  var a = n || 1, r = t;
  return {
    w: a,
    h: r
  };
}
const p = (n) => {
  const { layout: t, context: a } = n, r = t.sections;
  function i(o, c, d) {
    const { w: s, h: u } = W(o.width, o.height);
    return /* @__PURE__ */ e(D, { sx: { width: s, height: u }, children: /* @__PURE__ */ e("div", { className: "section-container", children: /* @__PURE__ */ e(
      H,
      {
        layout: o,
        context: c
      }
    ) }) }, (o.name || "tab") + d);
  }
  return /* @__PURE__ */ e("div", { style: { display: "flex", flexWrap: "wrap" }, children: r.map((o, c) => i(o, a, c)) });
}, v = f(function(t, a) {
  const { layout: r } = t;
  y(a, () => ({
    resetFilter() {
    }
  }), []);
  const i = {}, o = r.tabs;
  return /* @__PURE__ */ e("div", { children: o.map((c, d) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    p,
    {
      layout: c,
      context: i
    }
  ) }, c.name + d)) });
}), X = (n) => {
  switch (n) {
    case "formEdit":
      return "edit";
    case "formNew":
      return "new";
    case "formView":
      return "view";
    default:
      return "edit";
  }
}, x = f(function(t, a) {
  var l;
  const r = t.data || {}, { layout: i } = t;
  var { getFieldManager: o, getFormData: c, isFormValid: d } = j(r, (l = t.callbacks) == null ? void 0 : l.onFormValidChange, X(t.mode));
  y(a, () => ({
    getData() {
      return c();
    },
    isValid() {
      return d();
    }
  }), []);
  const s = { formData: r }, u = i.tabs;
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(N.Provider, { value: o, children: u.map((m, h) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    p,
    {
      layout: m,
      context: s
    }
  ) }, m.name + h)) }) });
}), $ = (n) => {
  switch (n) {
    case "grid":
      return v;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), x;
    case "formEdit":
    case "formNew":
    case "formView":
      return x;
    default:
      return v;
  }
}, ue = f(function(t, a) {
  const [r, i] = R(t.layout), o = t.mode ? t.mode : r.type ? r.type : "grid", c = t.layoutParams || {}, d = $(o), s = k(0);
  return w(() => {
    i(t.layout), s.current < 999999 ? s.current++ : s.current = 0;
  }, [t.layout]), /* @__PURE__ */ e(C, { fallback: /* @__PURE__ */ e("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ e(g.Provider, { value: t.storeFactory, children: /* @__PURE__ */ e(S.Provider, { value: c, children: /* @__PURE__ */ e(d, { ...t, ref: (u) => {
    a && (a.current = u);
  } }, s.current) }) }) });
});
export {
  ue as F,
  L as G,
  de as P,
  A as S,
  p as T,
  H as a,
  v as b,
  x as c
};
