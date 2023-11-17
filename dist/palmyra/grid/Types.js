const u = {
  formatCell: function(r, t) {
    return t;
  },
  formatHeader: function(r, t) {
    return t;
  }
}, e = (r) => ({
  formatCell: function(t, n) {
    const o = t.attribute;
    return r[o] ? r[o](n) : n;
  },
  formatHeader: function(t, n) {
    return n;
  }
});
export {
  u as NoopCustomizer,
  e as gridColumnCustomizer
};
