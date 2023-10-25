import { jsx as e } from "react/jsx-runtime";
import { forwardRef as f, useContext as n, useImperativeHandle as u } from "react";
import d from "../../grid/GridX.js";
import { StoreFactoryContext as y, LayoutParamsContext as g } from "./FlexiLayoutContext.js";
import { getActionPublishers as x } from "../../core/Publishers.js";
import { mergeDeep as C } from "../../utils/index.js";
const b = f(function(i, s) {
  const o = i.layout, { fields: a } = o, m = o.pagination ? o.pagination : [15], c = n(y), t = n(g);
  var r = o.storeOptions || {};
  t && C(r, t);
  const p = c.getGridStore(r);
  u(s, () => ({
    applyFilter() {
    }
  }), []);
  const { onClick: l } = x(o.actionOptions, t);
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(d, { columns: a, store: p, pageSize: m, onRowClick: l }) });
});
export {
  b as default
};
