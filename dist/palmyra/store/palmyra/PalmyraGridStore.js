var h = Object.defineProperty;
var d = (r, e, t) => e in r ? h(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var a = (r, e, t) => (d(r, typeof e != "symbol" ? e + "" : e, t), t);
import u from "axios";
import { PalmyraAbstractStore as g } from "./AbstractStore.js";
class y extends g {
  constructor(t, o, i) {
    super(t, o);
    a(this, "idProperty");
    this.idProperty = i;
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
  getUrl() {
    if (typeof this.endPoint == "string")
      return this.endPoint;
    this.endPoint.get;
  }
  query(t) {
    var o = this.target + this.queryUrl(), i = this.formatUrl(o, t);
    const s = { params: c(t) };
    return this.isUrlValid(i) || this.getClient().get(i, s).then((l) => l.data);
  }
  queryLayout(t) {
    var o = this.target + this.queryUrl(), i = this.formatUrl(o, t);
    return this.isUrlValid(i) || this.getClient().get(i, {
      headers: {
        action: "schema"
      }
    }).then((n) => n.data);
  }
  get(t, o) {
    var i = this.target + this.queryUrl(), n = this.formatUrl(i, t);
    return this.isUrlValid(n) || this.getClient().get(n).then((s) => {
      var l;
      return (l = s.data) == null ? void 0 : l.result;
    });
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
function c(r) {
  const e = Object.keys((r == null ? void 0 : r.sortOrder) || {}).map((s) => (r.sortOrder[s] === "asc" ? "+" : "-") + s), t = !!r.total, o = r.filter || {}, i = r.offset || 0, n = r.limit || 15;
  return { ...o, _total: t, _orderBy: e.length ? e.join(",") : [], _offset: i, _limit: n };
}
export {
  y as PalmyraGridStore
};
