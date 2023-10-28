import { useContext as n } from "react";
import { StoreFactoryContext as p } from "../layout/flexiLayout/FlexiLayoutContext.js";
const u = (t) => {
  var o;
  const r = n(p), e = ((o = t.lookupOptions) == null ? void 0 : o.idAttribute) || "name";
  return r.getLookupStore(t.storeOptions, e);
};
export {
  u as getLookupStore
};
