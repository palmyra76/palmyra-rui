import { jsx as e } from "react/jsx-runtime";
import { forwardRef as l, useContext as i, useImperativeHandle as f } from "react";
import d from "../../grid/GridX.js";
import { StoreFactoryContext as y, LayoutParamsContext as g } from "./FlexiLayoutContext.js";
import { getActionPublishers as x } from "../../core/Publishers.js";
import { mergeDeep as C } from "../../utils/index.js";
const O = l(function(n, a) {
  const o = n.layout, { fields: s } = o, c = o.pagination ? o.pagination : [15], m = i(y), t = i(g);
  var r = o.storeOptions || {};
  t && C(r, t);
  const p = m.getGridStore(r);
  f(a, () => ({
    applyFilter() {
    }
  }), []);
  const { onClick: u } = x(o.actionOptions, t);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    d,
    {
      columns: s,
      store: p,
      pageSize: c,
      onRowClick: u,
      quickSearch: o.quickSearch
    }
  ) });
});
export {
  O as default
};
