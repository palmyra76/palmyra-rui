var n = Object.defineProperty;
var s = (e, r, t) => r in e ? n(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var i = (e, r, t) => (s(e, typeof r != "symbol" ? r + "" : r, t), t);
import { PalmyraDataStore as m } from "./PalmyraDataStore.js";
import { PalmyraGridStore as l } from "./PalmyraGridStore.js";
class h {
  constructor(r) {
    i(this, "baseUrl", "/palmyra");
    this.baseUrl = r.baseUrl || "/palmyra";
  }
  getGridStore(r, t, a) {
    var o = { target: this.baseUrl, ...r };
    return new l(o, t);
  }
  getFormStore(r, t, a) {
    var o = { target: this.baseUrl, ...r };
    return new m(o, t);
  }
  getChartStore(r) {
    throw new Error("Method not implemented.");
  }
  getLookupStore(r, t, a) {
    throw new Error("Method not implemented.");
  }
}
export {
  h as PalmyraStoreFactory
};
