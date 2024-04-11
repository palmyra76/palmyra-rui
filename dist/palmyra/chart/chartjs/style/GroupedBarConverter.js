import { RandomStyleConverterFactory as s, NoopStyleConverterFactory as y } from "./base/RandomStyleConverterFactory.js";
import { assignStyles as u } from "./util.js";
function a(o, t, r, n) {
  const e = n ? n[r] : "";
  return o[e] || o[t.label] || o[t.key] || o[r];
}
const l = (o, t) => (r, n) => (r == null || r == null || r.datasets.map((e, c) => {
  const m = a(o, e, c, r.labels);
  u(e, m);
}), r), v = {
  Array: l,
  Named: l,
  Random: s,
  Noop: y
};
export {
  v as default
};
