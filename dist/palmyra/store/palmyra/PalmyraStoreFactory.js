var m = Object.defineProperty;
var i = (o, r, t) => r in o ? m(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t;
var s = (o, r, t) => (i(o, typeof r != "symbol" ? r + "" : r, t), t);
import { PalmyraDataStore as n } from "./PalmyraDataStore.js";
import { PalmyraGridStore as l } from "./PalmyraGridStore.js";
import { PalmyraLookupStore as p } from "./PalmyraLookupStore.js";
import { PalmyraTreeStore as S } from "./PalmyraTreeStore.js";
class U {
  constructor(r) {
    s(this, "baseUrl", "/palmyra");
    this.baseUrl = r.baseUrl || "/palmyra";
  }
  getGridStore(r, t, e) {
    var a = { target: this.baseUrl, ...r };
    return new l(a, t, e);
  }
  getFormStore(r, t, e) {
    var a = { target: this.baseUrl, ...r };
    return new n(a, t, e);
  }
  getChartStore(r) {
    throw new Error("Method not implemented.");
  }
  getLookupStore(r, t, e) {
    var a = { target: this.baseUrl, ...r };
    return new p(a, t, e);
  }
  getTreeStore(r, t) {
    var e = { target: this.baseUrl, ...r };
    return new S(e, t);
  }
}
export {
  U as PalmyraStoreFactory
};
