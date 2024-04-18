import { u as m } from "../../../chunks/PalmyraStoreFactory.js";
import { mergeDeep as u } from "../../utils/index.js";
import { useEffect as h } from "react";
const g = (t) => {
  const c = new m({ baseUrl: "/api/palmyra" });
  var n = {};
  u(n, t.storeOptions);
  const f = c.getChartStore(n, t.storeOptions.endPoint);
  h(() => {
    a(t.filter);
  }, [t.filter]);
  const o = (r) => t.transformData ? t.transformData(r) : r, i = (r) => {
    t.onData(o(r));
  }, s = (r) => {
    if (t.onError) {
      t.onError(r);
      return;
    }
    t.onData(null);
  }, a = (r) => {
    f.query({ filter: r, limit: 2e3 }).then((e) => i(e)).catch((e) => s(e));
  };
  return { fetchData: a, transform: o };
};
export {
  g as useChartDataManager
};
