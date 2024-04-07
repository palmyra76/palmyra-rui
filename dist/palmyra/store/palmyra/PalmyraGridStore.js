var d = Object.defineProperty;
var u = (r, o, t) => o in r ? d(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t;
var l = (r, o, t) => (u(r, typeof o != "symbol" ? o + "" : o, t), t);
import c from "axios";
import { PalmyraAbstractStore as g } from "./AbstractStore.js";
class y extends g {
  constructor(t, i, e) {
    super(t, i);
    l(this, "idProperty");
    this.idProperty = e;
  }
  getClient() {
    return c;
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
    var i = this.target + this.queryUrl(), e = this.formatUrl(i, t);
    const s = { params: h(t) };
    return this.isUrlValid(e) || this.getClient().get(e, s).then((a) => a.data);
  }
  export(t) {
    var i = this.target + this.queryUrl(), e = this.formatUrl(i, t);
    const n = h(t);
    n._format = t.format;
    const s = new URLSearchParams(n).toString();
    window.open(e + "?" + s, "_blank");
  }
  queryLayout(t) {
    var i = this.target + this.queryUrl(), e = this.formatUrl(i, t);
    return this.isUrlValid(e) || this.getClient().get(e, {
      headers: {
        action: "schema"
      }
    }).then((n) => n.data);
  }
  get(t, i) {
    var e = this.target + this.queryUrl(), n = this.formatUrl(e, t);
    return this.isUrlValid(n) || this.getClient().get(n).then((s) => {
      var a;
      return (a = s.data) == null ? void 0 : a.result;
    });
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
function h(r) {
  const o = Object.keys((r == null ? void 0 : r.sortOrder) || {}).map((s) => (r.sortOrder[s] === "asc" ? "+" : "-") + s), t = !!r.total, i = r.filter || {}, e = r.offset || 0, n = r.limit || 15;
  return { ...i, _total: t, _orderBy: o.length ? o.join(",") : [], _offset: e, _limit: n };
}
export {
  y as PalmyraGridStore
};
