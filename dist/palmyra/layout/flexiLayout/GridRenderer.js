import { jsx as n } from "react/jsx-runtime";
import { forwardRef as g, useState as h, useContext as s, useEffect as C, useImperativeHandle as S } from "react";
import k from "../../grid/GridX.js";
import { StoreFactoryContext as x, LayoutParamsContext as F } from "./FlexiLayoutContext.js";
import { getActionPublishers as R } from "../../core/Publishers.js";
import { mergeDeep as q } from "../../utils/index.js";
const j = g(function(a, c) {
  const t = a.layout, [u, m] = h(t.fields), l = t.pagination ? t.pagination : [15], p = s(x), o = s(F);
  var e = t.storeOptions || {}, r = {};
  q(r, e, o);
  const i = p.getGridStore(r);
  C(() => {
    e.hasLayout && i.queryLayout({}).then((y) => {
      m(y.columns);
    });
  }, []), S(c, () => ({
    applyFilter() {
    }
  }), []);
  const { onClick: f, onNewClick: d } = R(t.actionOptions, o);
  return /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
    k,
    {
      columns: u,
      store: i,
      pageSize: l,
      onRowClick: f,
      onNewClick: d,
      quickSearch: t.quickSearch
    }
  ) });
});
export {
  j as default
};
