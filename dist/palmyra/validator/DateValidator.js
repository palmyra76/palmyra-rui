var d = Object.defineProperty;
var o = (t, a, e) => a in t ? d(t, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[a] = e;
var l = (t, a, e) => (o(t, typeof a != "symbol" ? a + "" : a, e), e);
class s {
  constructor() {
    l(this, "validate", (a) => {
    });
  }
}
export {
  s as default
};
