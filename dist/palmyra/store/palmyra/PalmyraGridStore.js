var h = Object.defineProperty;
var u = (r, e, t) => e in r ? h(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var d = (r, e, t) => (u(r, typeof e != "symbol" ? e + "" : e, t), t);
import a from "axios";
import { PalmyraAbstractStore as c } from "./AbstractStore.js";
class y extends c {
  constructor(t, n, o) {
    super(t, n);
    d(this, "idProperty");
    this.idProperty = o;
  }
  getClient() {
    return a;
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
  query(t) {
    var n = this.target + this.queryUrl(), o = this.formatUrl(n, t);
    const s = { params: f(t) };
    return a.get(o, s).then((l) => l.data);
  }
  queryLayout(t) {
    var n = this.target + this.queryUrl(), o = this.formatUrl(n, t);
    return a.get(o, {
      headers: {
        action: "schema"
      }
    }).then((i) => i.data);
  }
  get(t, n) {
    var o = this.target + this.queryUrl(), i = this.formatUrl(o, t);
    return a.get(i).then((s) => s.data);
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
function f(r) {
  const e = Object.keys((r == null ? void 0 : r.sortOrder) || {}).map((s) => (r.sortOrder[s] === "asc" ? "+" : "-") + s), t = !!r.total, n = r.filter || {}, o = r.offset || 0, i = r.limit || 15;
  return { ...n, _total: t, _orderBy: e.length ? e.join(",") : [], _offset: o, _limit: i };
}
export {
  y as PalmyraGridStore
};
