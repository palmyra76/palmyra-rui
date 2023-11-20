import { jsx as t, Fragment as q } from "react/jsx-runtime";
import { forwardRef as y, useRef as w, useEffect as h, useImperativeHandle as g, useState as S, useContext as p } from "react";
import { Box as D } from "@mui/material";
import E from "./palmyra/layout/flexiLayout/SectionRendererChart.js";
import O from "./palmyra/layout/flexiLayout/SectionRendererEditForm.js";
import V from "./palmyra/grid/GridX.js";
import { StoreFactoryContext as F, LayoutParamsContext as b, FieldManagerContext as z } from "./palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import "axios";
import T from "./palmyra/layout/container/SectionContainer.js";
import "react-router-dom";
import "@mui/icons-material";
/* empty css                   */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css                       *//* empty css                     */import { topic as v } from "./palmyra/core/topic.js";
import "dayjs";
import "./palmyra/mui/form/MuiDatePicker.js";
import "./palmyra/mui/form/MuiDateTimePicker.js";
import "./palmyra/mui/form/MuiRadioGroup.js";
import "./palmyra/mui/form/MuiSelect.js";
import "./palmyra/mui/form/MuiTextArea.js";
import "./palmyra/mui/form/MuiTextField.js";
import "./palmyra/mui/form/MuiCheckBox.js";
import "./palmyra/mui/form/MuiSwitch.js";
import "./palmyra/mui/form/MuiPassword.js";
import "./palmyra/mui/form/MuiServerLookup.js";
import "./palmyra/form/PalmyraForm.js";
import { mergeDeep as M } from "./palmyra/utils/index.js";
import { getActionPublishers as N } from "./palmyra/core/Publishers.js";
import { ErrorBoundary as L } from "./palmyra/layout/ErrorBoundary.js";
import B from "./palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import I from "./palmyra/layout/flexiLayout/SectionRendererViewForm.js";
import { d as j } from "./PalmyraFormManager-9cbba3fa.js";
const ke = y(function(e, i) {
  const { columns: r, endPoint: s, storeFactory: n, layoutParams: a } = e, u = e.quickSearch || "", c = w(null), d = (m, f) => {
    console.log(f);
  };
  h(() => {
    var m = v.subscribe(e.topic, d);
    return () => {
      v.unsubscribe(m);
    };
  }, [e.topic]), i && g(i, () => ({
    setFilter: (m) => {
      c.current.setFilter(m);
    }
  }), [r, s]);
  const l = {
    fields: r,
    quickSearch: u,
    storeOptions: {
      endPoint: s
    },
    actionOptions: e.actions
  };
  return /* @__PURE__ */ t(q, { children: /* @__PURE__ */ t(F.Provider, { value: n, children: /* @__PURE__ */ t(C, { layout: l, context: a, customizer: e.customizer, ref: c }) }) });
}), A = y(function(e, i) {
  const r = e.layout, [s, n] = S(r.fields), a = r.pagination ? r.pagination : [15], u = p(F), c = p(b);
  var d = r.storeOptions || {}, l = {};
  M(l, d, c);
  const m = u.getGridStore(l, r.storeOptions.endPoint);
  h(() => {
    d.hasLayout && m.queryLayout({}).then((k) => {
      n(k.columns);
    });
  }, []);
  const { onClick: f, onNewClick: G } = N(r.actionOptions, c);
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
    V,
    {
      columns: s,
      store: m,
      pageSize: a,
      onRowClick: f,
      onNewClick: G,
      customizer: e.customizer,
      quickSearch: r.quickSearch,
      ref: i
    }
  ) });
}), C = A, H = (o) => {
  const { layout: e, context: i } = o;
  var r = e.Container || T;
  return /* @__PURE__ */ t(L, { fallback: /* @__PURE__ */ t("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ t(r, { ...e, children: ((n) => /* @__PURE__ */ t(
    C,
    {
      context: i,
      layout: n
    }
  ))(e.tableLayout) }) });
}, W = (o) => {
  const { layout: e } = o;
  switch (e.type) {
    case "form":
      return /* @__PURE__ */ t(O, { ...o });
    case "view":
      return /* @__PURE__ */ t(I, { ...o });
    case "grid":
      return /* @__PURE__ */ t(H, { ...o });
    case "chart":
      return /* @__PURE__ */ t(E, { ...o });
    default:
      return /* @__PURE__ */ t(B, { ...o });
  }
};
function X(o, e) {
  var i = o || 1, r = e;
  return {
    w: i,
    h: r
  };
}
const P = (o) => {
  const { layout: e, context: i } = o, r = e.sections;
  function s(n, a, u) {
    const { w: c, h: d } = X(n.width, n.height);
    return /* @__PURE__ */ t(D, { sx: { width: c, height: d }, children: /* @__PURE__ */ t(
      W,
      {
        layout: n,
        context: a
      }
    ) }, (n.name || "tab") + u);
  }
  return /* @__PURE__ */ t("div", { style: { display: "flex", flexWrap: "wrap" }, children: r.map((n, a) => s(n, i, a)) });
}, x = y(function(e, i) {
  const { layout: r } = e;
  g(i, () => ({
    resetFilter() {
    }
  }), []);
  const s = {}, n = r.tabs;
  return /* @__PURE__ */ t("div", { children: n.map((a, u) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
    P,
    {
      layout: a,
      context: s
    }
  ) }, a.name + u)) });
}), $ = (o) => {
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
}, R = y(function(e, i) {
  var l;
  const r = e.data || {}, { layout: s } = e;
  var { getFieldManager: n, getFormData: a, isFormValid: u } = j(r, (l = e.callbacks) == null ? void 0 : l.onFormValidChange, $(e.mode));
  g(i, () => ({
    getData() {
      return a();
    },
    isValid() {
      return u();
    }
  }), []);
  const c = { formData: r }, d = s.tabs;
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(z.Provider, { value: n, children: d.map((m, f) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
    P,
    {
      layout: m,
      context: c
    }
  ) }, m.name + f)) }) });
}), J = (o) => {
  switch (o) {
    case "grid":
      return x;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), R;
    case "formEdit":
    case "formNew":
    case "formView":
      return R;
    default:
      return x;
  }
}, qe = y(function(e, i) {
  const [r, s] = S(e.layout), n = e.mode ? e.mode : r.type ? r.type : "grid", a = e.layoutParams || {}, u = J(n), c = w(0);
  return h(() => {
    s(e.layout), c.current < 999999 ? c.current++ : c.current = 0;
  }, [e.layout]), /* @__PURE__ */ t(L, { fallback: /* @__PURE__ */ t("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ t(F.Provider, { value: e.storeFactory, children: /* @__PURE__ */ t(b.Provider, { value: a, children: /* @__PURE__ */ t(u, { ...e, ref: (d) => {
    i && (i.current = d);
  } }, c.current) }) }) });
});
export {
  qe as F,
  C as G,
  ke as P,
  H as S,
  P as T,
  W as a,
  x as b,
  R as c
};
