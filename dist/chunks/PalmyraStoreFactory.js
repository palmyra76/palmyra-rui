import h from "axios";
const d = function(e, t) {
  return t ? typeof e == "string" && t instanceof Array ? e.replace(/({\d})/g, function(r) {
    let a = r.replace(/{/, "").replace(/}/, "");
    return t[a];
  }) : typeof e == "string" && t instanceof Object ? Object.keys(t).length === 0 ? e : e.replace(/({([^}]+)})/g, function(r) {
    let a = r.replace(/{/, "").replace(/}/, "");
    return t[a] ? t[a] : r;
  }) : e : e;
}, v = function(e) {
  return typeof e == "string" && (e.search(/({([^}]+)})/g) > 0 || e.search(/({\d})/g) > 0);
};
var f = Object.defineProperty, m = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, o = (e, t, r) => (m(e, typeof t != "symbol" ? t + "" : t, r), r);
class l {
  constructor(t, r, a) {
    o(this, "options"), o(this, "target"), o(this, "endPoint"), o(this, "axiosInstance"), this.axiosInstance = h.create({
      timeout: 5e3
    });
    const s = a || (() => (i) => {
      const n = i.request.responseURL || i.config.url;
      console.log(i.response.status + ":" + i.code + "-requestUrl:" + n), console.log(i.message + " -- response data:'" + i.response.data + "'");
    });
    h.interceptors.response.use(void 0, function(i) {
      return i.handleGlobally = s(i), Promise.reject(i);
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
    return r ? d(d(t, r.options), r.endPointVars) : t;
  }
  isUrlValid(t) {
    return v(t) ? Promise.reject("endPoint options yet to be populated " + t) : !1;
  }
  handleError(t, r) {
    r != null && r.errorHandler && r.errorHandler(t) || t.handleGlobally(t);
  }
  convertQueryParams(t, r = 15) {
    const a = (t == null ? void 0 : t.sortOrder) || {}, s = Object.keys(a).map((u) => (a[u] === "asc" ? "+" : "-") + u), i = !!t.total, n = t.filter || {}, p = t.offset || 0, y = t.limit || r;
    return { ...n, _total: i, _orderBy: s.length ? s.join(",") : [], _offset: p, _limit: y };
  }
}
var U = Object.defineProperty, b = (e, t, r) => t in e ? U(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, P = (e, t, r) => (b(e, t + "", r), r);
class q extends l {
  constructor(t, r, a, s) {
    super(t, r, a), P(this, "idProperty"), this.idProperty = s || "id";
  }
  query(t) {
    var r = this.target + this.queryUrl(), a = this.formatUrl(r, t);
    const s = { params: this.convertQueryParams(t) };
    return this.getClient().get(a, s).then((i) => {
      var n;
      return (n = i.data) == null ? void 0 : n.result;
    }).catch((i) => {
      this.handleError(i, t);
    });
  }
}
var E = Object.defineProperty, w = (e, t, r) => t in e ? E(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, C = (e, t, r) => (w(e, t + "", r), r);
class g extends l {
  constructor(t, r, a, s) {
    super(t, r, a), C(this, "idProperty"), this.idProperty = s || "id";
  }
  getEndPoint() {
    return this.endPoint;
  }
  query(t) {
    var r = this.target + this.queryUrl(), a = this.formatUrl(r, t);
    const s = { params: this.convertQueryParams(t) };
    return this.isUrlValid(a) || this.getClient().get(a, s).then((i) => i.data).catch((i) => {
      this.handleError(i, t);
    });
  }
  export(t) {
    var r = this.target + this.queryUrl(), a = this.formatUrl(r, t);
    const s = this.convertQueryParams(t);
    s._format = t.format;
    const i = new URLSearchParams(s).toString();
    window.open(a + "?" + i, "_blank");
  }
  queryLayout(t) {
    var r = this.target + this.queryUrl(), a = this.formatUrl(r, t);
    return this.isUrlValid(a) || this.getClient().get(a, {
      headers: {
        action: "schema"
      }
    }).then((s) => s.data).catch((s) => {
      this.handleError(s, t);
    });
  }
  get(t, r) {
    var a = this.target + this.queryUrl(), s = this.formatUrl(a, t);
    return this.isUrlValid(s) || this.getClient().get(s).then((i) => {
      var n;
      return (n = i.data) == null ? void 0 : n.result;
    }).catch((i) => {
      this.handleError(i, t);
    });
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
let $ = class extends g {
  constructor(t, r, a, s) {
    super(t, r, a, s);
  }
  save(t, r) {
    var a = this.target + this.postUrl(), s = this.formatUrl(a, r);
    return this.isUrlValid(s) || this.getClient().post(s, t, { headers: { action: "save" } }).then((i) => {
      var n;
      return (n = i.data) == null ? void 0 : n.result;
    }).catch((i) => {
      this.handleError(i, r);
    });
  }
  post(t, r) {
    var a = this.target + this.postUrl(), s = this.formatUrl(a, r);
    return this.isUrlValid(s) || this.getClient().post(s, t).then((i) => {
      var n;
      return (n = i.data) == null ? void 0 : n.result;
    }).catch((i) => {
      this.handleError(i, r);
    });
  }
  put(t, r) {
    var a = this.target + this.putUrl(), s = this.formatUrl(a, r);
    return this.isUrlValid(s) || this.getClient().put(s, t).then((i) => {
      var n;
      return (n = i.data) == null ? void 0 : n.result;
    }).catch((i) => {
      this.handleError(i, r);
    });
  }
  remove(t, r) {
    var a = this.target + this.deleteUrl(), s = this.formatUrl(a, t);
    return this.isUrlValid(s) || this.getClient().delete(s, { data: {} }).then((i) => {
      var n;
      return (n = i.data) == null ? void 0 : n.result;
    }).catch((i) => {
      this.handleError(i, r);
    });
  }
};
var j = Object.defineProperty, O = (e, t, r) => t in e ? j(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, H = (e, t, r) => (O(e, t + "", r), r);
class V extends l {
  constructor(t, r, a, s) {
    super(t, r, a), H(this, "idProperty"), this.idProperty = s || "id";
  }
  query(t) {
    var r = this.target + this.queryUrl(), a = this.formatUrl(r, t);
    const s = { params: this.convertQueryParams(t) };
    return this.isUrlValid(a) || this.getClient().get(a, s).then((i) => i.data).catch((i) => {
      this.handleError(i, t);
    });
  }
}
var x = Object.defineProperty, F = (e, t, r) => t in e ? x(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Q = (e, t, r) => (F(e, t + "", r), r);
class S extends l {
  constructor(t, r, a, s) {
    super(t, r, a), Q(this, "idProperty"), this.idProperty = s || "id";
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
    var r = this.target + this.queryUrl(), a = this.formatUrl(r, t);
    const s = { params: this.convertQueryParams(t), headers: { action: "nativeQuery" } };
    return this.getClient().get(a, s).then((i) => i.data).catch((i) => {
      this.handleError(i, t);
    });
  }
}
var _ = Object.defineProperty, k = (e, t, r) => t in e ? _(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, c = (e, t, r) => (k(e, typeof t != "symbol" ? t + "" : t, r), r);
class G {
  constructor(t) {
    c(this, "baseUrl", "/palmyra"), c(this, "errorHandlerFactory"), this.baseUrl = t.baseUrl || "/palmyra", this.errorHandlerFactory = t.errorHandlerFactory;
  }
  getGridStore(t, r, a) {
    var s = { target: this.baseUrl, ...t };
    return new g(s, r, this.errorHandlerFactory, a);
  }
  getFormStore(t, r, a) {
    var s = { target: this.baseUrl, ...t };
    return new $(s, r, this.errorHandlerFactory, a);
  }
  getChartStore(t, r, a) {
    var s = { target: this.baseUrl, ...t };
    return new q(s, r, this.errorHandlerFactory, a);
  }
  getLookupStore(t, r, a) {
    var s = { target: this.baseUrl, ...t };
    return new V(s, r, this.errorHandlerFactory, a);
  }
  getTreeStore(t, r) {
    var a = { target: this.baseUrl, ...t };
    return new S(a, r, this.errorHandlerFactory);
  }
}
export {
  S as p,
  G as u
};
