var m = Object.defineProperty;
var i = (o, r, t) => r in o ? m(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t;
var s = (o, r, t) => (i(o, typeof r != "symbol" ? r + "" : r, t), t);
import { PalmyraChartStore as l } from "./PalmyraChartStore.js";
import { PalmyraDataStore as n } from "./PalmyraDataStore.js";
import { PalmyraGridStore as p } from "./PalmyraGridStore.js";
import { PalmyraLookupStore as S } from "./PalmyraLookupStore.js";
import { PalmyraTreeStore as g } from "./PalmyraTreeStore.js";
class f {
  constructor(r) {
    s(this, "baseUrl", "/palmyra");
    this.baseUrl = r.baseUrl || "/palmyra";
  }
  getGridStore(r, t, e) {
    var a = { target: this.baseUrl, ...r };
    return new p(a, t, e);
  }
  getFormStore(r, t, e) {
    var a = { target: this.baseUrl, ...r };
    return new n(a, t, e);
  }
  getChartStore(r, t, e) {
    var a = { target: this.baseUrl, ...r };
    return new l(a, t, e);
  }
  getLookupStore(r, t, e) {
    var a = { target: this.baseUrl, ...r };
    return new S(a, t, e);
  }
  getTreeStore(r, t) {
    var e = { target: this.baseUrl, ...r };
    return new g(e, t);
  }
}
export {
  f as PalmyraStoreFactory
};
