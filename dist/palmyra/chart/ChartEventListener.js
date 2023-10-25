import { getDatasetAtEvent as f, getElementsAtEvent as g, getElementAtEvent as m } from "react-chartjs-2";
import { getPointConverter as v } from "./DataConverterFactory.js";
function C(r) {
  return r.length > 0;
}
const P = (r, i, c) => {
  if (!i.onPointClick)
    return {};
  const { data: s, transformOptions: a, onPointClick: l } = i, u = (n, t, e) => {
    if (n.length) {
      var o = v(r);
      return o(s, a, t, e);
    }
  };
  return { onClick: (n) => {
    const { current: t } = c;
    if (!t)
      return;
    const e = f(t, n);
    if (C(e)) {
      var o = u(
        e,
        m(t, n),
        g(t, n)
      );
      l(o);
    }
  } };
};
export {
  P as useListener
};
