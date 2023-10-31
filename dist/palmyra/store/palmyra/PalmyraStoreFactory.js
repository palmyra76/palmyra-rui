var i = Object.defineProperty;
var a = (t, r, e) => r in t ? i(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var o = (t, r, e) => (a(t, typeof r != "symbol" ? r + "" : r, e), e);
import { PalmyraGridStore as d } from "./PalmyraGridStore.js";
class p {
  constructor(r) {
    o(this, "baseUrl", "/palmyra");
    this.baseUrl = r.baseUrl || "/palmyra";
  }
  getGridStore(r, e) {
    const n = this.baseUrl + r.endPoint;
    if (!r.endPoint)
      throw new Error("Endpoint must be provided under TableLayout definition");
    return new d({ target: n });
  }
  getFormStore(r, e) {
    throw new Error("Method not implemented.");
  }
  getChartStore(r) {
    throw new Error("Method not implemented.");
  }
  getLookupStore(r, e) {
    throw new Error("Method not implemented.");
  }
}
export {
  p as PalmyraStoreFactory
};
