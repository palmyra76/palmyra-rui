function c(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function o(t, e) {
  return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, o(t, e);
}
function p(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, o(t, e);
}
export {
  p as _,
  c as a
};
