var m = Object.defineProperty;
var i = (e, r, t) => r in e ? m(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var s = (e, r, t) => (i(e, typeof r != "symbol" ? r + "" : r, t), t);
import { PalmyraDataStore as l } from "./PalmyraDataStore.js";
import { PalmyraGridStore as n } from "./PalmyraGridStore.js";
import { PalmyraLookupStore as p } from "./PalmyraLookupStore.js";
class b {
  constructor(r) {
    s(this, "baseUrl", "/palmyra");
    this.baseUrl = r.baseUrl || "/palmyra";
  }
  getGridStore(r, t, o) {
    var a = { target: this.baseUrl, ...r };
    return new n(a, t, o);
  }
  getFormStore(r, t, o) {
    var a = { target: this.baseUrl, ...r };
    return new l(a, t, o);
  }
  getChartStore(r) {
    throw new Error("Method not implemented.");
  }
  getLookupStore(r, t, o) {
    var a = { target: this.baseUrl, ...r };
    return new p(a, t, o);
  }
}
export {
  b as PalmyraStoreFactory
};
