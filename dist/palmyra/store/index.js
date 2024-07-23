import { u as y, p as P } from "../../chunks/PalmyraStoreFactory.js";
var a = Object.defineProperty, s = (r, e, t) => e in r ? a(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, i = (r, e, t) => (s(r, e + "", t), t);
class u {
  constructor(e) {
    i(this, "root"), this.root = e;
  }
  query(e) {
    throw new Error("Method not implemented.");
  }
  queryLayout(e) {
    throw new Error("Method not implemented.");
  }
  get(e) {
    throw new Error("Method not implemented.");
  }
  getRoot() {
    return Promise.resolve(this.root);
  }
  getChildren(e) {
    if (e.children) {
      const t = {
        result: e.children
      };
      return Promise.resolve(t);
    } else
      return Promise.reject({
        message: "Empty Children"
      });
  }
  getIdProperty() {
    return "id";
  }
}
class n {
  decorate(e) {
  }
}
const d = new n();
var l = Object.defineProperty, c = (r, e, t) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e, t) => (c(r, typeof e != "symbol" ? e + "" : e, t), t);
class h {
  constructor() {
    o(this, "username"), o(this, "password");
  }
  BasicAuthProvider(e, t) {
    this.username = e, this.password = t;
  }
  decorate(e) {
  }
}
class m {
  decorate(e) {
  }
}
export {
  h as BasicAuthProvider,
  u as MemoryTreeStore,
  d as NOOPDecorator,
  m as OauthProvider,
  y as PalmyraStoreFactory,
  P as PalmyraTreeStore
};
