import h from "axios";
const u = function(e, t) {
  return t ? typeof e == "string" && t instanceof Array ? e.replace(/({\d})/g, function(r) {
    let i = r.replace(/{/, "").replace(/}/, "");
    return t[i];
  }) : typeof e == "string" && t instanceof Object ? Object.keys(t).length === 0 ? e : e.replace(/({([^}]+)})/g, function(r) {
    let i = r.replace(/{/, "").replace(/}/, "");
    return t[i] ? t[i] : r;
  }) : e : e;
}, p = function(e) {
  return typeof e == "string" && (e.search(/({([^}]+)})/g) > 0 || e.search(/({\d})/g) > 0);
};
var f = Object.defineProperty, y = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, a = (e, t, r) => (y(e, typeof t != "symbol" ? t + "" : t, r), r);
class l {
  constructor(t, r, i) {
    a(this, "options"), a(this, "target"), a(this, "endPoint"), a(this, "axiosInstance"), this.axiosInstance = h.create({
      timeout: 5e3
    });
    const n = i || (() => (s) => {
      const o = s.request.responseURL || s.config.url;
      console.log(s.response.status + ":" + s.code + "-requestUrl:" + o), console.log(s.message + " -- response data:'" + s.response.data + "'");
    });
    h.interceptors.response.use(void 0, function(s) {
      return s.handleGlobally = n(s), Promise.reject(s);
    }), this.options = t, this.target = t.target, this.endPoint = r;
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
    return r ? u(u(t, r.options), r.endPointVars) : t;
  }
  isUrlValid(t) {
    return p(t) ? Promise.reject("endPoint options yet to be populated " + t) : !1;
  }
  handleError(t, r) {
    t.errorHandler && t.errorHandler(r) || r.handleGlobally(r);
  }
}
var v = Object.defineProperty, m = (e, t, r) => t in e ? v(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, P = (e, t, r) => (m(e, typeof t != "symbol" ? t + "" : t, r), r);
class U extends l {
  constructor(t, r, i, n) {
    super(t, r, i), P(this, "idProperty"), this.idProperty = n;
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
    var r = this.target + this.queryUrl(), i = this.formatUrl(r, t);
    const n = { params: b(t) };
    return this.getClient().get(i, n).then((s) => {
      var o;
      return (o = s.data) == null ? void 0 : o.result;
    }).catch((s) => {
      this.handleError(t, s);
    });
  }
}
function b(e) {
  const t = Object.keys((e == null ? void 0 : e.sortOrder) || {}).map((o) => (e.sortOrder[o] === "asc" ? "+" : "-") + o), r = !!e.total, i = e.filter || {}, n = e.offset || 0, s = e.limit || 15;
  return { ...i, _total: r, _offset: n, _limit: s, _orderBy: t.length ? t.join(",") : [] };
}
var q = Object.defineProperty, O = (e, t, r) => t in e ? q(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, E = (e, t, r) => (O(e, typeof t != "symbol" ? t + "" : t, r), r);
let g = class extends l {
  constructor(t, r, i, n) {
    super(t, r, i), E(this, "idProperty"), this.idProperty = n;
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
    var r = this.target + this.queryUrl(), i = this.formatUrl(r, t);
    const n = { params: d(t) };
    return this.isUrlValid(i) || this.getClient().get(i, n).then((s) => s.data).catch((s) => {
      this.handleError(t, s);
    });
  }
  export(t) {
    var r = this.target + this.queryUrl(), i = this.formatUrl(r, t);
    const n = d(t);
    n._format = t.format;
    const s = new URLSearchParams(n).toString();
    window.open(i + "?" + s, "_blank");
  }
  queryLayout(t) {
    var r = this.target + this.queryUrl(), i = this.formatUrl(r, t);
    return this.isUrlValid(i) || this.getClient().get(i, {
      headers: {
        action: "schema"
      }
    }).then((n) => n.data).catch((n) => {
      this.handleError(t, n);
    });
  }
  get(t, r) {
    var i = this.target + this.queryUrl(), n = this.formatUrl(i, t);
    return this.isUrlValid(n) || this.getClient().get(n).then((s) => {
      var o;
      return (o = s.data) == null ? void 0 : o.result;
    }).catch((s) => {
      this.handleError(t, s);
    });
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
};
function d(e) {
  const t = Object.keys((e == null ? void 0 : e.sortOrder) || {}).map((o) => (e.sortOrder[o] === "asc" ? "+" : "-") + o), r = !!e.total, i = e.filter || {}, n = e.offset || 0, s = e.limit || 15;
  return { ...i, _total: r, _orderBy: t.length ? t.join(",") : [], _offset: n, _limit: s };
}
class j extends g {
  constructor(t, r, i, n) {
    super(t, r, i, n);
  }
  save(t, r) {
    var i = this.target + this.postUrl(), n = this.formatUrl(i, r);
    return this.isUrlValid(n) || this.getClient().post(n, t, { headers: { action: "save" } }).then((s) => {
      var o;
      return (o = s.data) == null ? void 0 : o.result;
    }).catch((s) => {
      this.handleError(r, s);
    });
  }
  post(t, r) {
    var i = this.target + this.postUrl(), n = this.formatUrl(i, r);
    return this.isUrlValid(n) || this.getClient().post(n, t).then((s) => {
      var o;
      return (o = s.data) == null ? void 0 : o.result;
    }).catch((s) => {
      this.handleError(r, s);
    });
  }
  put(t, r) {
    var i = this.target + this.putUrl(), n = this.formatUrl(i, r);
    return this.isUrlValid(n) || this.getClient().put(n, t).then((s) => {
      var o;
      return (o = s.data) == null ? void 0 : o.result;
    }).catch((s) => {
      this.handleError(r, s);
    });
  }
  remove(t, r) {
    var i = this.target + this.deleteUrl(), n = this.formatUrl(i, t);
    return this.isUrlValid(n) || this.getClient().delete(n, { data: {} }).then((s) => {
      var o;
      return (o = s.data) == null ? void 0 : o.result;
    }).catch((s) => {
      this.handleError(r, s);
    });
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
}
var _ = Object.defineProperty, $ = (e, t, r) => t in e ? _(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, w = (e, t, r) => ($(e, typeof t != "symbol" ? t + "" : t, r), r);
let C = class extends l {
  constructor(t, r, i, n) {
    super(t, r, i), w(this, "idProperty"), this.idProperty = n;
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
    var r = this.target + this.queryUrl(), i = this.formatUrl(r, t);
    const n = { params: H(t) };
    return this.isUrlValid(i) || this.getClient().get(i, n).then((s) => s.data).catch((s) => {
      this.handleError(t, s);
    });
  }
};
function H(e) {
  const t = Object.keys((e == null ? void 0 : e.sortOrder) || {}).map((o) => (e.sortOrder[o] === "asc" ? "+" : "-") + o), r = !!e.total, i = e.filter || {}, n = e.offset || 0, s = e.limit || 15;
  return { ...i, _total: r, _orderBy: t.length ? t.join(",") : [], _offset: n, _limit: s };
}
var V = Object.defineProperty, x = (e, t, r) => t in e ? V(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, F = (e, t, r) => (x(e, typeof t != "symbol" ? t + "" : t, r), r);
class k extends l {
  constructor(t, r, i, n) {
    super(t, r, i), F(this, "idProperty"), this.idProperty = n;
  }
  getChildren(t) {
    const r = { filter: { parent: t.parent } };
    return this.query(r);
  }
  getRoot() {
    const t = {};
    return this.query(t);
  }
  queryUrl() {
    const t = this.getEndPoint();
    if (typeof t == "string")
      return t;
    t.query;
  }
  query(t) {
    var r = this.target + this.queryUrl(), i = this.formatUrl(r, t);
    const n = { params: S(t), headers: { action: "nativeQuery" } };
    return this.getClient().get(i, n).then((s) => s.data).catch((s) => {
      this.handleError(t, s);
    });
  }
}
function S(e) {
  const t = Object.keys((e == null ? void 0 : e.sortOrder) || {}).map((o) => (e.sortOrder[o] === "asc" ? "+" : "-") + o), r = !!e.total, i = e.filter || {}, n = e.offset || 0, s = e.limit || 15;
  return { ...i, _total: r, _orderBy: t.length ? t.join(",") : [], _offset: n, _limit: s };
}
var B = Object.defineProperty, I = (e, t, r) => t in e ? B(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, c = (e, t, r) => (I(e, typeof t != "symbol" ? t + "" : t, r), r);
class T {
  constructor(t) {
    c(this, "baseUrl", "/palmyra"), c(this, "errorHandlerFactory"), this.baseUrl = t.baseUrl || "/palmyra", this.errorHandlerFactory = t.errorHandlerFactory;
  }
  getGridStore(t, r, i) {
    var n = { target: this.baseUrl, ...t };
    return new g(n, r, this.errorHandlerFactory, i);
  }
  getFormStore(t, r, i) {
    var n = { target: this.baseUrl, ...t };
    return new j(n, r, this.errorHandlerFactory, i);
  }
  getChartStore(t, r, i) {
    var n = { target: this.baseUrl, ...t };
    return new U(n, r, this.errorHandlerFactory, i);
  }
  getLookupStore(t, r, i) {
    var n = { target: this.baseUrl, ...t };
    return new C(n, r, this.errorHandlerFactory, i);
  }
  getTreeStore(t, r) {
    var i = { target: this.baseUrl, ...t };
    return new k(i, r, this.errorHandlerFactory);
  }
}
export {
  k as g,
  T as u
};
