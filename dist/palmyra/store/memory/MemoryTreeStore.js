var s = Object.defineProperty;
var n = (t, e, r) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var o = (t, e, r) => (n(t, typeof e != "symbol" ? e + "" : e, r), r);
class l {
  constructor(e) {
    o(this, "root");
    this.root = e;
  }
  query(e) {
    throw new Error("Method not implemented.");
  }
  get(e) {
    throw new Error("Method not implemented.");
  }
  getRoot() {
    const r = {
      result: this.root.children
    };
    return Promise.resolve(r);
  }
  getChildren(e) {
    if (e.children) {
      const r = {
        result: e.children
      };
      return Promise.resolve(r);
    } else
      return Promise.reject({
        message: "Empty Children"
      });
  }
  getIdProperty() {
    return "id";
  }
}
export {
  l as default
};