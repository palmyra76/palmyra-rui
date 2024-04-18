import t from "./style/LineStyleConverter.js";
import m from "./style/BarStyleConverter.js";
import v from "./style/GroupedBarConverter.js";
import u from "./style/ScatterConverter.js";
import p from "./style/GroupedScatterConverter.js";
import i from "./style/BubbleStyleConverter.js";
import $ from "./style/RadarConverter.js";
import d from "./style/PolarConverter.js";
import n from "./style/PieStyleConverter.js";
import { NoopStyleConverterFactory as y } from "./style/base/RandomStyleConverterFactory.js";
var S = {
  Line: t,
  MultiLine: t,
  AreaChart: t,
  Bar: m,
  StackedBar: m,
  Scatter: u,
  GroupedScatter: p,
  Bubble: i,
  Radar: $,
  PolarArea: d,
  Pie: n,
  Doughnut: n,
  GroupedBar: v
};
const b = (r) => {
  const o = r == null ? void 0 : r.type;
  if (o)
    return o;
  const e = (r == null ? void 0 : r.style) || r;
  return e ? e instanceof Array ? "Array" : typeof e == "object" && Object.keys(e).length > 0 ? "Named" : "Noop" : "Random";
}, M = (r, o, e) => {
  var c;
  const a = b(o);
  var f = ((c = S[r]) == null ? void 0 : c[a]) || y;
  return f(o, e);
};
export {
  M as getStyleConverter
};
