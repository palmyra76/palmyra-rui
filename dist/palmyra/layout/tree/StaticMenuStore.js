var n = Object.defineProperty;
var d = (t, e, r) => e in t ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var o = (t, e, r) => d(t, typeof e != "symbol" ? e + "" : e, r);
class i {
  constructor(e) {
    o(this, "data");
    this.data = {
      name: "root",
      children: e
    };
  }
  getChildren(e) {
    var r = {
      result: e.children
    };
    return Promise.resolve(r);
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
