var a = Object.defineProperty;
var d = (r, e, t) => e in r ? a(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var c = (r, e, t) => (d(r, typeof e != "symbol" ? e + "" : e, t), t);
import u from "axios";
import { PalmyraAbstractStore as h } from "./AbstractStore.js";
class y extends h {
  constructor(t, o, n) {
    super(t, o);
    c(this, "idProperty");
    this.idProperty = n;
  }
  getChildren(t) {
    const o = { filter: { parent: t.parent } };
    return this.query(o);
  }
  getRoot() {
    const t = {};
    return this.query(t);
  }
  getClient() {
    return u;
  }
  getEndPoint() {
    return this.endPoint;
  }
  queryUrl() {
    if (typeof this.endPoint == "string")
      return this.endPoint;
    this.endPoint.query;
  }
  query(t) {
    var o = this.target + this.queryUrl(), n = this.formatUrl(o, t);
    const s = { params: f(t), headers: { action: "nativeQuery" } };
    return u.get(n, s).then((l) => l.data);
  }
}
function f(r) {
  const e = Object.keys((r == null ? void 0 : r.sortOrder) || {}).map((s) => (r.sortOrder[s] === "asc" ? "+" : "-") + s), t = !!r.total, o = r.filter || {}, n = r.offset || 0, i = r.limit || 15;
  return { ...o, _total: t, _orderBy: e.length ? e.join(",") : [], _offset: n, _limit: i };
}
export {
  y as PalmyraTreeStore
};
