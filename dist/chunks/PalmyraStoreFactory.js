import h from "axios";
const c = function(e, t) {
  return t ? typeof e == "string" && t instanceof Array ? e.replace(/({\d})/g, function(r) {
    let s = r.replace(/{/, "").replace(/}/, "");
    return t[s];
  }) : typeof e == "string" && t instanceof Object ? Object.keys(t).length === 0 ? e : e.replace(/({([^}]+)})/g, function(r) {
    let s = r.replace(/{/, "").replace(/}/, "");
    return t[s] ? t[s] : r;
  }) : e : e;
}, v = function(e) {
  return typeof e == "string" && (e.search(/({([^}]+)})/g) > 0 || e.search(/({\d})/g) > 0);
};
var f = Object.defineProperty, m = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, o = (e, t, r) => m(e, typeof t != "symbol" ? t + "" : t, r);
class l {
  constructor(t, r, s) {
    o(this, "options"), o(this, "target"), o(this, "endPoint"), o(this, "axiosInstance"), this.axiosInstance = h.create({
      timeout: 5e3
    });
    const a = s || (() => (i) => {
      const n = i.request.responseURL || i.config.url;
      console.log(i.response.status + ":" + i.code + "-requestUrl:" + n), console.log(i.message + " -- response data:'" + i.response.data + "'");
    });
    h.interceptors.response.use(void 0, function(i) {
      return i.handleGlobally = a(i), Promise.reject(i);
    }), this.options = t, this.target = t.target, this.endPoint = r;
  }
  queryUrl() {
    return typeof this.endPoint == "string" ? this.endPoint : this.endPoint.query;
  }
  getUrl() {
    return typeof this.endPoint == "string" ? this.endPoint : this.endPoint.get;
  }
  postUrl() {
    const t = this.getEndPoint();
    return typeof t == "string" ? t : t.post ? t.post : t.get;
  }
  putUrl() {
    const t = this.getEndPoint();
    return typeof t == "string" ? t : t.put;
  }
  deleteUrl() {
    const t = this.getEndPoint();
    return typeof t == "string" ? t : t.delete ? t.delete : t.put;
  }
  getClient() {
    return h;
  }
  getEndPoint() {
    return this.endPoint;
  }
  getOptions() {
    return this.options;
  }
  getTarget() {
    return this.target;
  }
  formatUrl(t, r) {
    return r ? c(c(t, r.options), r.endPointVars) : t;
  }
  isUrlValid(t) {
    return v(t) ? Promise.reject("endPoint options yet to be populated " + t) : !1;
  }
  handleError(t, r) {
    return r != null && r.errorHandler && r.errorHandler(t) || t.handleGlobally(t), Promise.reject(t);
  }
  convertQueryParams(t, r = 15) {
    const s = (t == null ? void 0 : t.sortOrder) || {}, a = Object.keys(s).map((u) => (s[u] === "asc" ? "+" : "-") + u), i = !!t.total, n = t.filter || {}, p = t.offset || 0, y = t.limit || r;
    return { ...n, _total: i, _orderBy: a.length ? a.join(",") : [], _offset: p, _limit: y };
  }
}
var U = Object.defineProperty, b = (e, t, r) => t in e ? U(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, P = (e, t, r) => b(e, typeof t != "symbol" ? t + "" : t, r);
class q extends l {
  constructor(t, r, s, a) {
    super(t, r, s), P(this, "idProperty"), this.idProperty = a || "id";
  }
  query(t) {
    var r = this.target + this.queryUrl(), s = this.formatUrl(r, t);
    const a = { params: this.convertQueryParams(t) };
    return this.getClient().get(s, a).then((i) => {
      var n;
      return (n = i.data) == null ? void 0 : n.result;
    }).catch((i) => this.handleError(i, t));
  }
}
var E = Object.defineProperty, w = (e, t, r) => t in e ? E(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, j = (e, t, r) => w(e, typeof t != "symbol" ? t + "" : t, r);
class g extends l {
  constructor(t, r, s, a) {
    super(t, r, s), j(this, "idProperty"), this.idProperty = a || "id";
  }
  getEndPoint() {
    return this.endPoint;
  }
  query(t) {
    var r = this.target + this.queryUrl(), s = this.formatUrl(r, t);
    const a = { params: this.convertQueryParams(t) };
    return this.isUrlValid(s) || this.getClient().get(s, a).then((i) => i.data).catch((i) => this.handleError(i, t));
  }
  export(t) {
    var r = this.target + this.queryUrl(), s = this.formatUrl(r, t);
    const a = this.convertQueryParams(t);
    a._format = t.format;
    const i = new URLSearchParams(a).toString();
    window.open(s + "?" + i, "_blank");
  }
  queryLayout(t) {
    var r = this.target + this.queryUrl(), s = this.formatUrl(r, t);
    return this.isUrlValid(s) || this.getClient().get(s, {
      headers: {
        action: "schema"
      }
    }).then((a) => a.data).catch((a) => this.handleError(a, t));
  }
  get(t, r) {
    var s = this.target + this.queryUrl(), a = this.formatUrl(s, t);
    return this.isUrlValid(a) || this.getClient().get(a).then((i) => {
      var n;
      return (n = i.data) == null ? void 0 : n.result;
    }).catch((i) => this.handleError(i, t));
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
let C = class extends g {
  constructor(t, r, s, a) {
    super(t, r, s, a);
  }
  save(t, r) {
    var s = this.target + this.postUrl(), a = this.formatUrl(s, r);
    return this.isUrlValid(a) || this.getClient().post(a, t, { headers: { action: "save" } }).then((i) => {
      var n;
      return (n = i.data) == null ? void 0 : n.result;
    }).catch((i) => this.handleError(i, r));
  }
  post(t, r) {
    var s = this.target + this.postUrl(), a = this.formatUrl(s, r);
    return this.isUrlValid(a) || this.getClient().post(a, t).then((i) => {
      var n;
      return (n = i.data) == null ? void 0 : n.result;
    }).catch((i) => this.handleError(i, r));
  }
  put(t, r) {
    var s = this.target + this.putUrl(), a = this.formatUrl(s, r);
    return this.isUrlValid(a) || this.getClient().put(a, t).then((i) => {
      var n;
      return (n = i.data) == null ? void 0 : n.result;
    }).catch((i) => this.handleError(i, r));
  }
  remove(t, r) {
    var s = this.target + this.deleteUrl(), a = this.formatUrl(s, t);
    return this.isUrlValid(a) || this.getClient().delete(a, { data: {} }).then((i) => {
      var n;
      return (n = i.data) == null ? void 0 : n.result;
    }).catch((i) => this.handleError(i, r));
  }
};
var $ = Object.defineProperty, O = (e, t, r) => t in e ? $(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, H = (e, t, r) => O(e, typeof t != "symbol" ? t + "" : t, r);
class V extends l {
  constructor(t, r, s, a) {
    super(t, r, s), H(this, "idProperty"), this.idProperty = a || "id";
  }
  query(t) {
    var r = this.target + this.queryUrl(), s = this.formatUrl(r, t);
    const a = { params: this.convertQueryParams(t) };
    return this.isUrlValid(s) || this.getClient().get(s, a).then((i) => i.data).catch((i) => this.handleError(i, t));
  }
}
var x = Object.defineProperty, F = (e, t, r) => t in e ? x(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Q = (e, t, r) => F(e, typeof t != "symbol" ? t + "" : t, r);
class S extends l {
  constructor(t, r, s, a) {
    super(t, r, s), Q(this, "idProperty"), this.idProperty = a || "id";
  }
  getChildren(t) {
    const r = { filter: { parent: t.parent } };
    return this.query(r);
  }
  getRoot() {
    const t = {};
    return this.query(t);
  }
  query(t) {
    var r = this.target + this.queryUrl(), s = this.formatUrl(r, t);
    const a = { params: this.convertQueryParams(t), headers: { action: "nativeQuery" } };
    return this.getClient().get(s, a).then((i) => i.data).catch((i) => {
      this.handleError(i, t);
    });
  }
}
var _ = Object.defineProperty, k = (e, t, r) => t in e ? _(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, d = (e, t, r) => k(e, typeof t != "symbol" ? t + "" : t, r);
class G {
  constructor(t) {
    d(this, "baseUrl", "/palmyra"), d(this, "errorHandlerFactory"), this.baseUrl = t.baseUrl || "/palmyra", this.errorHandlerFactory = t.errorHandlerFactory;
  }
  getGridStore(t, r, s) {
    var a = { target: this.baseUrl, ...t };
    return new g(a, r, this.errorHandlerFactory, s);
  }
  getFormStore(t, r, s) {
    var a = { target: this.baseUrl, ...t };
    return new C(a, r, this.errorHandlerFactory, s);
  }
  getChartStore(t, r, s) {
    var a = { target: this.baseUrl, ...t };
    return new q(a, r, this.errorHandlerFactory, s);
  }
  getLookupStore(t, r, s) {
    var a = { target: this.baseUrl, ...t };
    return new V(a, r, this.errorHandlerFactory, s);
  }
  getTreeStore(t, r) {
    var s = { target: this.baseUrl, ...t };
    return new S(s, r, this.errorHandlerFactory);
  }
}
export {
  S as p,
  G as u
};
