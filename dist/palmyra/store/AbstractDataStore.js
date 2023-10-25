var o = Object.defineProperty;
var l = (s, a, t) => a in s ? o(s, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[a] = t;
var n = (s, a, t) => (l(s, typeof a != "symbol" ? a + "" : a, t), t);
import c from "axios";
class b {
  constructor(a) {
    n(this, "baseUrl");
    n(this, "instance");
    n(this, "globalHandleError", (a) => {
      console.log(a);
    });
    var t = a || "";
    this.baseUrl = t, this.instance = c.create({
      baseURL: t
    });
  }
  query(a, t, r) {
    this.instance.get(a, t).then((e) => {
      r(e.data);
    }).catch((e) => {
      this.globalHandleError(e);
    });
  }
  save(a, t, r) {
    this.instance.post(a, t).then((e) => {
      r(e.data);
    }).catch((e) => {
      this.globalHandleError(e);
    });
  }
  update(a, t, r) {
    this.instance.put(a, t).then((e) => {
      r(e.data);
    }).catch((e) => {
      this.globalHandleError(e);
    });
  }
}
export {
  b as default
};
