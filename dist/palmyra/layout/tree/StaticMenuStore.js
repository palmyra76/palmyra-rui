var n = Object.defineProperty;
var d = (r, e, t) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var o = (r, e, t) => (d(r, typeof e != "symbol" ? e + "" : e, t), t);
class i {
  constructor(e) {
    o(this, "data");
    this.data = {
      name: "root",
      children: e
    };
  }
  getChildren(e) {
    var t = {
      result: e.children
    };
    return Promise.resolve(t);
  }
  getRoot() {
    return Promise.resolve(this.data);
  }
  query(e) {
    throw new Error("Method not implemented.");
  }
  get(e) {
    throw new Error("Method not implemented.");
  }
  getIdentity(e) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    throw new Error("Method not implemented.");
  }
}
export {
  i as StaticMenuStore
};
