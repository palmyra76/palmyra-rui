const i = (u, l) => (r, C) => {
  if (u == null || r == null || r == null)
    return r;
  if (!r)
    return;
  const e = u.length;
  return r.datasets && r.datasets.map((o) => {
    o.backgroundColor = [], o.borderColor = [], o.data && o.data.map((b, t) => {
      const c = t % e, n = u[c];
      o.backgroundColor.push(n == null ? void 0 : n.backgroundColor), o.borderColor.push(n == null ? void 0 : n.borderColor);
    });
  }), r;
};
export {
  i as ArrayStyleConverterFactory
};
