import { jsx as i } from "react/jsx-runtime";
import { forwardRef as y, useState as g, useContext as n, useEffect as h, useImperativeHandle as S } from "react";
import x from "../../grid/GridX.js";
import { StoreFactoryContext as C, LayoutParamsContext as F } from "./FlexiLayoutContext.js";
import { getActionPublishers as R } from "../../core/Publishers.js";
import { mergeDeep as k } from "../../utils/index.js";
const w = y(function(a, c) {
  const t = a.layout, [u, m] = g(t.fields), p = t.pagination ? t.pagination : [15], l = n(C), o = n(F);
  var e = t.storeOptions || {}, r = {};
  k(r, e, o);
  const s = l.getGridStore(r);
  h(() => {
    e.hasLayout && s.queryLayout({}).then((d) => {
      m(d.columns);
    });
  }, []), S(c, () => ({
    applyFilter() {
    }
  }), []);
  const { onClick: f } = R(t.actionOptions, o);
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    x,
    {
      columns: u,
      store: s,
      pageSize: p,
      onRowClick: f,
      quickSearch: t.quickSearch
    }
  ) });
});
export {
  w as default
};
