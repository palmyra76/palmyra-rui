var i = Object.defineProperty;
var a = (e, r, t) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var n = (e, r, t) => (a(e, typeof r != "symbol" ? r + "" : r, t), t);
import { PalmyraDataStore as d } from "./PalmyraDataStore.js";
import { PalmyraGridStore as m } from "./PalmyraGridStore.js";
class y {
  constructor(r) {
    n(this, "baseUrl", "/palmyra");
    this.baseUrl = r.baseUrl || "/palmyra";
  }
  getGridStore(r, t) {
    const o = this.baseUrl + r.endPoint;
    if (!r.endPoint)
      throw new Error("Endpoint must be provided under TableLayout definition");
    return new m({ target: o });
  }
  getFormStore(r, t) {
    const o = this.baseUrl + r.endPoint;
    if (!r.endPoint)
      throw new Error("Endpoint must be provided under FormLayout definition");
    return new d({ target: o });
  }
  getChartStore(r) {
    throw new Error("Method not implemented.");
  }
  getLookupStore(r, t) {
    throw new Error("Method not implemented.");
  }
}
export {
  y as PalmyraStoreFactory
};
