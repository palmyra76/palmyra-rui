var c = Object.defineProperty;
var f = (t, o, r) => o in t ? c(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r;
var d = (t, o, r) => (f(t, typeof o != "symbol" ? o + "" : o, r), r);
import h from "axios";
import { PalmyraAbstractStore as a } from "./AbstractStore.js";
class P extends a {
  constructor(r, n, e) {
    super(r, n);
    d(this, "idProperty");
    this.idProperty = e;
  }
  getEndPoint() {
    return this.endPoint;
  }
  queryUrl() {
    if (typeof this.endPoint == "string")
      return this.endPoint;
    this.endPoint.query;
  }
  getUrl() {
    if (typeof this.endPoint == "string")
      return this.endPoint;
    this.endPoint.get;
  }
  query(r) {
    var n = this.target + this.queryUrl(), e = this.formatUrl(n, r);
    const i = { params: p(r) };
    return this.isUrlValid(e) || h.get(e, i).then((l) => l.data);
  }
}
function p(t) {
  const o = Object.keys((t == null ? void 0 : t.sortOrder) || {}).map((i) => (t.sortOrder[i] === "asc" ? "+" : "-") + i), r = !!t.total, n = t.filter || {}, e = t.offset || 0, s = t.limit || 15;
  return { ...n, _total: r, _orderBy: o.length ? o.join(",") : [], _offset: e, _limit: s };
}
export {
  P as PalmyraLookupStore
};
