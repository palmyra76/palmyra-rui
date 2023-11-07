import { useContext as n } from "react";
import { StoreFactoryContext as i } from "../layout/flexiLayout/FlexiLayoutContext.js";
import { mergeDeep as s } from "../utils/index.js";
const a = (t) => {
  var r;
  const e = n(i), p = ((r = t.lookupOptions) == null ? void 0 : r.idAttribute) || "name";
  var o = {};
  return s(o, t.storeOptions), e.getLookupStore(o, p);
};
export {
  a as getLookupStore
};
