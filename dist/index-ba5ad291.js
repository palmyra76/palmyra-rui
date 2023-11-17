import { jsx as t, Fragment as k } from "react/jsx-runtime";
import { forwardRef as f, useImperativeHandle as y, useState as R, useContext as F, useEffect as w, useRef as p } from "react";
import { Box as q } from "@mui/material";
import D from "./palmyra/layout/flexiLayout/SectionRendererChart.js";
import E from "./palmyra/layout/flexiLayout/SectionRendererEditForm.js";
import V from "./palmyra/grid/GridX.js";
import { StoreFactoryContext as g, LayoutParamsContext as S, FieldManagerContext as z } from "./palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import "react-router-dom";
import "./palmyra/core/topic.js";
import { mergeDeep as O } from "./palmyra/utils/index.js";
import { getActionPublishers as T } from "./palmyra/core/Publishers.js";
import M from "./palmyra/layout/container/SectionContainer.js";
import { ErrorBoundary as C } from "./palmyra/layout/ErrorBoundary.js";
import N from "./palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import B from "./palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { createFormData as I } from "./palmyra/form/PalmyraFormManager.js";
const ue = f(function(e, a) {
  const { columns: r, endPoint: c, storeFactory: n, layoutParams: i } = e, u = e.quickSearch || "";
  y(a, () => ({}), [r, c]);
  const s = {
    fields: r,
    quickSearch: u,
    storeOptions: {
      endPoint: c
    }
  };
  return /* @__PURE__ */ t(k, { children: /* @__PURE__ */ t(g.Provider, { value: n, children: /* @__PURE__ */ t(L, { layout: s, context: i, customizer: e.customizer }) }) });
}), j = f(function(e, a) {
  const r = e.layout, [c, n] = R(r.fields), i = r.pagination ? r.pagination : [15], u = F(g), s = F(S);
  var d = r.storeOptions || {}, l = {};
  O(l, d, s);
  const m = u.getGridStore(l, r.storeOptions.endPoint);
  w(() => {
    d.hasLayout && m.queryLayout({}).then((G) => {
      n(G.columns);
    });
  }, []), y(a, () => ({
    applyFilter() {
    }
  }), []);
  const { onClick: h, onNewClick: b } = T(r.actionOptions, s);
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
    V,
    {
      columns: c,
      store: m,
      pageSize: i,
      onRowClick: h,
      onNewClick: b,
      customizer: e.customizer,
      quickSearch: r.quickSearch
    }
  ) });
}), L = j, A = (o) => {
  const { layout: e, context: a } = o;
  var r = e.Container || M;
  return /* @__PURE__ */ t(C, { fallback: /* @__PURE__ */ t("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ t(r, { ...e, children: ((n) => /* @__PURE__ */ t(
    L,
    {
      context: a,
      layout: n
    }
  ))(e.tableLayout) }) });
}, H = (o) => {
  const { layout: e } = o;
  switch (e.type) {
    case "form":
      return /* @__PURE__ */ t(E, { ...o });
    case "view":
      return /* @__PURE__ */ t(B, { ...o });
    case "grid":
      return /* @__PURE__ */ t(A, { ...o });
    case "chart":
      return /* @__PURE__ */ t(D, { ...o });
    default:
      return /* @__PURE__ */ t(N, { ...o });
  }
};
function W(o, e) {
  var a = o || 1, r = e;
  return {
    w: a,
    h: r
  };
}
const P = (o) => {
  const { layout: e, context: a } = o, r = e.sections;
  function c(n, i, u) {
    const { w: s, h: d } = W(n.width, n.height);
    return /* @__PURE__ */ t(q, { sx: { width: s, height: d }, children: /* @__PURE__ */ t(
      H,
      {
        layout: n,
        context: i
      }
    ) }, (n.name || "tab") + u);
  }
  return /* @__PURE__ */ t("div", { style: { display: "flex", flexWrap: "wrap" }, children: r.map((n, i) => c(n, a, i)) });
}, x = f(function(e, a) {
  const { layout: r } = e;
  y(a, () => ({
    resetFilter() {
    }
  }), []);
  const c = {}, n = r.tabs;
  return /* @__PURE__ */ t("div", { children: n.map((i, u) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
    P,
    {
      layout: i,
      context: c
    }
  ) }, i.name + u)) });
}), X = (o) => {
  switch (o) {
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
  const r = e.data || {}, { layout: c } = e;
  var { getFieldManager: n, getFormData: i, isFormValid: u } = I(r, (l = e.callbacks) == null ? void 0 : l.onFormValidChange, X(e.mode));
  y(a, () => ({
    getData() {
      return i();
    },
    isValid() {
      return u();
    }
  }), []);
  const s = { formData: r }, d = c.tabs;
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(z.Provider, { value: n, children: d.map((m, h) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
    P,
    {
      layout: m,
      context: s
    }
  ) }, m.name + h)) }) });
}), $ = (o) => {
  switch (o) {
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
}, de = f(function(e, a) {
  const [r, c] = R(e.layout), n = e.mode ? e.mode : r.type ? r.type : "grid", i = e.layoutParams || {}, u = $(n), s = p(0);
  return w(() => {
    c(e.layout), s.current < 999999 ? s.current++ : s.current = 0;
  }, [e.layout]), /* @__PURE__ */ t(C, { fallback: /* @__PURE__ */ t("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ t(g.Provider, { value: e.storeFactory, children: /* @__PURE__ */ t(S.Provider, { value: i, children: /* @__PURE__ */ t(u, { ...e, ref: (d) => {
    a && (a.current = d);
  } }, s.current) }) }) });
});
export {
  de as F,
  L as G,
  ue as P,
  A as S,
  P as T,
  H as a,
  x as b,
  v as c
};
