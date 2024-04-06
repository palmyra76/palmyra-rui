var f = Object.defineProperty;
var h = (t, o, r) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r;
var c = (t, o, r) => (h(t, typeof o != "symbol" ? o + "" : o, r), r);
import a from "axios";
import { PalmyraAbstractStore as p } from "./AbstractStore.js";
class y extends p {
  constructor(r, e, n) {
    super(r, e);
    c(this, "idProperty");
    this.idProperty = n;
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
    var e = this.target + this.queryUrl(), n = this.formatUrl(e, r);
    const i = { params: u(r) };
    return a.get(n, i).then((l) => {
      var d;
      return (d = l.data) == null ? void 0 : d.result;
    });
  }
}
function u(t) {
  const o = Object.keys((t == null ? void 0 : t.sortOrder) || {}).map((i) => (t.sortOrder[i] === "asc" ? "+" : "-") + i), r = !!t.total, e = t.filter || {}, n = t.offset || 0, s = t.limit || 15;
  return { ...e, _total: r, _offset: n, _limit: s, _orderBy: o.length ? o.join(",") : [] };
}
export {
  y as PalmyraChartStore
};
