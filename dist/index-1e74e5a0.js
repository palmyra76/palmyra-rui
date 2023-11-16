import { jsx as t, Fragment as G } from "react/jsx-runtime";
import { forwardRef as f, useImperativeHandle as y, useState as R, useContext as F, useEffect as w, useRef as k } from "react";
import { Box as D } from "@mui/material";
import E from "./palmyra/layout/flexiLayout/SectionRendererChart.js";
import V from "./palmyra/layout/flexiLayout/SectionRendererEditForm.js";
import q from "./palmyra/grid/GridX.js";
import { StoreFactoryContext as g, LayoutParamsContext as S, FieldManagerContext as O } from "./palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import "react-router-dom";
import "./palmyra/core/topic.js";
import { mergeDeep as T } from "./palmyra/utils/index.js";
import { getActionPublishers as M } from "./palmyra/core/Publishers.js";
import N from "./palmyra/layout/container/SectionContainer.js";
import { ErrorBoundary as C } from "./palmyra/layout/ErrorBoundary.js";
import B from "./palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import I from "./palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { createFormData as j } from "./palmyra/form/PalmyraFormManager.js";
const se = f(function(e, a) {
  const { layout: r, storeFactory: i, layoutParams: o } = e;
  return y(a, () => ({}), [r]), /* @__PURE__ */ t(G, { children: /* @__PURE__ */ t(g.Provider, { value: i, children: /* @__PURE__ */ t(L, { layout: r, context: o }) }) });
}), z = f(function(e, a) {
  const r = e.layout, [i, o] = R(r.fields), c = r.pagination ? r.pagination : [15], s = F(g), d = F(S);
  var u = r.storeOptions || {}, l = {};
  T(l, u, d);
  const m = s.getGridStore(l, r.storeOptions.endPoint);
  w(() => {
    u.hasLayout && m.queryLayout({}).then((b) => {
      o(b.columns);
    });
  }, []), y(a, () => ({
    applyFilter() {
    }
  }), []);
  const { onClick: h, onNewClick: P } = M(r.actionOptions, d);
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
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
  const { layout: e, context: a } = n;
  var r = e.Container || N;
  return /* @__PURE__ */ t(C, { fallback: /* @__PURE__ */ t("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ t(r, { ...e, children: ((o) => /* @__PURE__ */ t(
    L,
    {
      context: a,
      layout: o
    }
  ))(e.tableLayout) }) });
}, H = (n) => {
  const { layout: e } = n;
  switch (e.type) {
    case "form":
      return /* @__PURE__ */ t(V, { ...n });
    case "view":
      return /* @__PURE__ */ t(I, { ...n });
    case "grid":
      return /* @__PURE__ */ t(A, { ...n });
    case "chart":
      return /* @__PURE__ */ t(E, { ...n });
    default:
      return /* @__PURE__ */ t(B, { ...n });
  }
};
function W(n, e) {
  var a = n || 1, r = e;
  return {
    w: a,
    h: r
  };
}
const p = (n) => {
  const { layout: e, context: a } = n, r = e.sections;
  function i(o, c, s) {
    const { w: d, h: u } = W(o.width, o.height);
    return /* @__PURE__ */ t(D, { sx: { width: d, height: u }, children: /* @__PURE__ */ t(
      H,
      {
        layout: o,
        context: c
      }
    ) }, (o.name || "tab") + s);
  }
  return /* @__PURE__ */ t("div", { style: { display: "flex", flexWrap: "wrap" }, children: r.map((o, c) => i(o, a, c)) });
}, x = f(function(e, a) {
  const { layout: r } = e;
  y(a, () => ({
    resetFilter() {
    }
  }), []);
  const i = {}, o = r.tabs;
  return /* @__PURE__ */ t("div", { children: o.map((c, s) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
    p,
    {
      layout: c,
      context: i
    }
  ) }, c.name + s)) });
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
}, v = f(function(e, a) {
  var l;
  const r = e.data || {}, { layout: i } = e;
  var { getFieldManager: o, getFormData: c, isFormValid: s } = j(r, (l = e.callbacks) == null ? void 0 : l.onFormValidChange, X(e.mode));
  y(a, () => ({
    getData() {
      return c();
    },
    isValid() {
      return s();
    }
  }), []);
  const d = { formData: r }, u = i.tabs;
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(O.Provider, { value: o, children: u.map((m, h) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
    p,
    {
      layout: m,
      context: d
    }
  ) }, m.name + h)) }) });
}), $ = (n) => {
  switch (n) {
    case "grid":
      return x;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), v;
    case "formEdit":
    case "formNew":
    case "formView":
      return v;
    default:
      return x;
  }
}, ue = f(function(e, a) {
  const [r, i] = R(e.layout), o = e.mode ? e.mode : r.type ? r.type : "grid", c = e.layoutParams || {}, s = $(o), d = k(0);
  return w(() => {
    i(e.layout), d.current < 999999 ? d.current++ : d.current = 0;
  }, [e.layout]), /* @__PURE__ */ t(C, { fallback: /* @__PURE__ */ t("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ t(g.Provider, { value: e.storeFactory, children: /* @__PURE__ */ t(S.Provider, { value: c, children: /* @__PURE__ */ t(s, { ...e, ref: (u) => {
    a && (a.current = u);
  } }, d.current) }) }) });
});
export {
  ue as F,
  L as G,
  se as P,
  A as S,
  p as T,
  H as a,
  x as b,
  v as c
};
