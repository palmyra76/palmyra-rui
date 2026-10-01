import { PalmyraStoreFactory as s } from "@palmyralabs/palmyra-wire";
import { mergeDeep as u } from "../../utils/index.js";
import { useEffect as l } from "react";
const E = (t) => {
  const c = new s({ baseUrl: "/api/palmyra" });
  var o = {};
  u(o, t.storeOptions);
  const f = c.getChartStore(o, t.storeOptions.endPoint);
  l(() => {
    n(t.filter);
  }, [t.filter]);
  const a = (r) => t.transformData ? t.transformData(r) : r, i = (r) => {
    t.onData(a(r));
  }, m = (r) => {
    if (t.onError) {
      t.onError(r);
      return;
    }
    t.onData(null);
  }, n = (r) => {
    f.query({ filter: r, limit: 2e3 }).then((e) => i(e)).catch((e) => m(e));
  };
  return { fetchData: n, transform: a };
};
export {
  E as useChartDataManager
};
