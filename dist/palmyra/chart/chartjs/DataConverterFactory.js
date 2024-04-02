import i from "./converters/LineConverter.js";
import m from "./converters/BarConverter.js";
import s from "./converters/ScatterConverter.js";
import c, { getPointData as f } from "./converters/BubbleConverter.js";
import l from "./converters/RadarConverter.js";
import P from "./converters/PolarConverter.js";
import g from "./converters/PieConverter.js";
import p from "./converters/DoughnutConverter.js";
import { getScalePointData as t } from "./converters/ScaleConverter.js";
const u = (r) => r;
var n = {
  Line: i,
  Bar: m,
  Scatter: s,
  Bubble: c,
  Radar: l,
  PolarArea: P,
  Pie: g,
  Doughnut: p
}, $ = {
  Line: t,
  Bar: t,
  Pie: t,
  Doughnut: t,
  PolarArea: t,
  Radar: t,
  Bubble: f
};
const R = (r, o, e) => {
  var v;
  console.log(r, o);
  var a = (v = n[r]) == null ? void 0 : v[o];
  return a ? a(e) : u;
}, S = (r, o, e) => {
  if (!n[r][o])
    n[r][o] = e;
  else
    throw new Error("Converter already set for " + r + "/" + o);
}, x = (r) => {
  var o = $[r];
  return o || ((e) => e);
};
export {
  S as addDataConverter,
  R as getDataConverter,
  x as getPointConverter
};
