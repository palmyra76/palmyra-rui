var r = Object.defineProperty;
var d = (t, a, e) => a in t ? r(t, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[a] = e;
var l = (t, a, e) => d(t, typeof a != "symbol" ? a + "" : a, e);
class s {
  constructor() {
    l(this, "validate", (a) => {
    });
  }
}
export {
  s as default
};
