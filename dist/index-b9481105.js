import { jsx as t, Fragment as k } from "react/jsx-runtime";
import { forwardRef as f, useImperativeHandle as y, useState as R, useContext as F, useEffect as w, useRef as p } from "react";
import { Box as q } from "@mui/material";
import D from "./palmyra/layout/flexiLayout/SectionRendererChart.js";
import E from "./palmyra/layout/flexiLayout/SectionRendererEditForm.js";
import O from "./palmyra/grid/GridX.js";
import { StoreFactoryContext as g, LayoutParamsContext as S, FieldManagerContext as V } from "./palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import "react-router-dom";
import "./palmyra/core/topic.js";
import { mergeDeep as z } from "./palmyra/utils/index.js";
import { getActionPublishers as T } from "./palmyra/core/Publishers.js";
import M from "./palmyra/layout/container/SectionContainer.js";
import { ErrorBoundary as C } from "./palmyra/layout/ErrorBoundary.js";
import N from "./palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import B from "./palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { createFormData as I } from "./palmyra/form/PalmyraFormManager.js";
const ue = f(function(e, a) {
  const { columns: r, endPoint: c, storeFactory: o, layoutParams: i } = e, u = e.quickSearch || "";
  y(a, () => ({}), [r, c]);
  const s = {
    fields: r,
    quickSearch: u,
    storeOptions: {
      endPoint: c
    },
    actionOptions: e.actions
  };
  return /* @__PURE__ */ t(k, { children: /* @__PURE__ */ t(g.Provider, { value: o, children: /* @__PURE__ */ t(L, { layout: s, context: i, customizer: e.customizer }) }) });
}), j = f(function(e, a) {
  const r = e.layout, [c, o] = R(r.fields), i = r.pagination ? r.pagination : [15], u = F(g), s = F(S);
  var d = r.storeOptions || {}, l = {};
  z(l, d, s);
  const m = u.getGridStore(l, r.storeOptions.endPoint);
  w(() => {
    d.hasLayout && m.queryLayout({}).then((G) => {
      o(G.columns);
    });
  }, []), y(a, () => ({
    applyFilter() {
    }
  }), []);
  const { onClick: h, onNewClick: b } = T(r.actionOptions, s);
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
    O,
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
}), L = j, A = (n) => {
  const { layout: e, context: a } = n;
  var r = e.Container || M;
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
      return /* @__PURE__ */ t(E, { ...n });
    case "view":
      return /* @__PURE__ */ t(B, { ...n });
    case "grid":
      return /* @__PURE__ */ t(A, { ...n });
    case "chart":
      return /* @__PURE__ */ t(D, { ...n });
    default:
      return /* @__PURE__ */ t(N, { ...n });
  }
};
function W(n, e) {
  var a = n || 1, r = e;
  return {
    w: a,
    h: r
  };
}
const P = (n) => {
  const { layout: e, context: a } = n, r = e.sections;
  function c(o, i, u) {
    const { w: s, h: d } = W(o.width, o.height);
    return /* @__PURE__ */ t(q, { sx: { width: s, height: d }, children: /* @__PURE__ */ t(
      H,
      {
        layout: o,
        context: i
      }
    ) }, (o.name || "tab") + u);
  }
  return /* @__PURE__ */ t("div", { style: { display: "flex", flexWrap: "wrap" }, children: r.map((o, i) => c(o, a, i)) });
}, x = f(function(e, a) {
  const { layout: r } = e;
  y(a, () => ({
    resetFilter() {
    }
  }), []);
  const c = {}, o = r.tabs;
  return /* @__PURE__ */ t("div", { children: o.map((i, u) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
    P,
    {
      layout: i,
      context: c
    }
  ) }, i.name + u)) });
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
  const r = e.data || {}, { layout: c } = e;
  var { getFieldManager: o, getFormData: i, isFormValid: u } = I(r, (l = e.callbacks) == null ? void 0 : l.onFormValidChange, X(e.mode));
  y(a, () => ({
    getData() {
      return i();
    },
    isValid() {
      return u();
    }
  }), []);
  const s = { formData: r }, d = c.tabs;
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(V.Provider, { value: o, children: d.map((m, h) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
    P,
    {
      layout: m,
      context: s
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
}, de = f(function(e, a) {
  const [r, c] = R(e.layout), o = e.mode ? e.mode : r.type ? r.type : "grid", i = e.layoutParams || {}, u = $(o), s = p(0);
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
