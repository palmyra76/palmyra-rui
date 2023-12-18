var a = Object.defineProperty;
var c = (t, o, r) => o in t ? a(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r;
var i = (t, o, r) => (c(t, typeof o != "symbol" ? o + "" : o, r), r);
import h from "axios";
import { PalmyraAbstractStore as u } from "./AbstractStore.js";
class m extends u {
  constructor(r, n, e) {
    super(r, n);
    i(this, "idProperty");
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
    const d = { params: f(r) };
    return h.get(e, d).then((l) => l.data);
  }
}
function f(t) {
  const o = Object.keys((t == null ? void 0 : t.sortOrder) || {}).map((e) => (t.sortOrder[e] === "asc" ? "+" : "-") + e), r = !!t.total;
  return { ...t.filter || {}, _total: r, _orderBy: o.length ? o.join(",") : [] };
}
export {
  m as PalmyraChartStore
};
