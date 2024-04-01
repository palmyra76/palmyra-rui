var c = Object.defineProperty;
var h = (t, e, r) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var i = (t, e, r) => (h(t, typeof e != "symbol" ? e + "" : e, r), r);
import u from "axios";
import { PalmyraAbstractStore as f } from "./AbstractStore.js";
class y extends f {
  constructor(r, n, o) {
    super(r, n);
    i(this, "idProperty");
    this.idProperty = o;
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
    var n = this.target + this.queryUrl(), o = this.formatUrl(n, r);
    const d = { params: p(r) };
    return u.get(o, d).then((a) => {
      var s;
      return (s = a.data) == null ? void 0 : s.result;
    });
  }
}
function p(t) {
  const e = Object.keys((t == null ? void 0 : t.sortOrder) || {}).map((o) => (t.sortOrder[o] === "asc" ? "+" : "-") + o), r = !!t.total;
  return { ...t.filter || {}, _total: r, _orderBy: e.length ? e.join(",") : [] };
}
export {
  y as PalmyraChartStore
};
