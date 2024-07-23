var d = Object.defineProperty;
var i = (t, a, e) => a in t ? d(t, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[a] = e;
var l = (t, a, e) => i(t, typeof a != "symbol" ? a + "" : a, e);
class r {
  constructor() {
    l(this, "validate", (a) => {
    });
  }
}
export {
  r as default
};
