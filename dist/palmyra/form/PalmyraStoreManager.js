import { useContext as p } from "react";
import { StoreFactoryContext as s } from "../layout/flexiLayout/FlexiLayoutContext.js";
import { mergeDeep as i } from "../utils/index.js";
const a = (t) => {
  var r;
  const e = p(s), n = ((r = t.lookupOptions) == null ? void 0 : r.idAttribute) || "name";
  var o = {};
  return i(o, t.storeOptions), e.getLookupStore(o, t.storeOptions.endPoint, n);
};
export {
  a as getLookupStore
};
