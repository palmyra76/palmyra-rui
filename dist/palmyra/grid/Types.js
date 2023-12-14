const i = {
  formatCell: function(u, t) {
    return t;
  },
  formatHeader: function(u, t) {
    return t;
  },
  formatFooter: function(u, t) {
    return t;
  }
}, m = (u, t) => ({
  formatCell: function(n, r) {
    const e = n.attribute;
    return u[e] ? u[e](r) : r;
  },
  formatHeader: function(n, r) {
    var o;
    const e = n.attribute;
    return (o = t == null ? void 0 : t.header) != null && o[e] ? t.header[e](n, r) : r;
  },
  formatFooter: function(n, r) {
    var o;
    const e = n.attribute;
    return (o = t == null ? void 0 : t.footer) != null && o[e] ? t.footer[e](n, r) : r;
  }
});
export {
  i as NoopCustomizer,
  m as gridColumnCustomizer
};
