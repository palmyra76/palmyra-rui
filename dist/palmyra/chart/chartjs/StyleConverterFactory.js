import c from "./style/LineStyleConverter.js";
import m from "./style/BarStyleConverter.js";
import v from "./style/GroupedBarConverter.js";
import u from "./style/ScatterConverter.js";
import i from "./style/GroupedScatterConverter.js";
import p from "./style/BubbleStyleConverter.js";
import $ from "./style/RadarConverter.js";
import d from "./style/PolarConverter.js";
import n from "./style/PieStyleConverter.js";
import { NoopStyleConverterFactory as S } from "./style/base/RandomStyleConverterFactory.js";
var g = {
  Line: c,
  MultiLine: c,
  AreaChart: c,
  Bar: m,
  StackedBar: m,
  Scatter: u,
  GroupedScatter: i,
  Bubble: p,
  Radar: $,
  PolarArea: d,
  Pie: n,
  Doughnut: n,
  GroupedBar: v
};
const y = (r) => {
  const o = r == null ? void 0 : r.type;
  if (o)
    return o;
  const e = (r == null ? void 0 : r.style) || r;
  return e ? e instanceof Array ? "Array" : typeof e == "object" && Object.keys(e).length > 0 ? "Named" : "Noop" : "Random";
}, M = (r, o, e) => {
  var a;
  const t = y(o);
  console.log(r, t);
  var f = ((a = g[r]) == null ? void 0 : a[t]) || S;
  return f(o, e);
};
export {
  M as getStyleConverter
};
