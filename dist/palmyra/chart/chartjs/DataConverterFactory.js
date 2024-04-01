import i from "./converters/LineConverter.js";
import m from "./converters/BarConverter.js";
import c from "./converters/ScatterConverter.js";
import s, { getPointData as f } from "./converters/BubbleConverter.js";
import p from "./converters/RadarConverter.js";
import u from "./converters/PolarConverter.js";
import P from "./converters/PieConverter.js";
import l from "./converters/DoughnutConverter.js";
import { getScalePointData as t } from "./converters/ScaleConverter.js";
const $ = (r) => r;
var n = {
  Line: i,
  Bar: m,
  Scatter: c,
  Bubble: s,
  Radar: p,
  PolarArea: u,
  Pie: P,
  Doughnut: l
}, d = {
  Line: t,
  Bar: t,
  Pie: t,
  Doughnut: t,
  PolarArea: t,
  Radar: t,
  Bubble: f
};
const R = (r, e, o) => {
  var v;
  var a = (v = n[r]) == null ? void 0 : v[e];
  return a ? a(o) : $;
}, S = (r, e, o) => {
  if (!n[r][e])
    n[r][e] = o;
  else
    throw new Error("Converter already set for " + r + "/" + e);
}, h = (r) => {
  var e = d[r];
  return e || ((o) => o);
};
export {
  S as addDataConverter,
  R as getDataConverter,
  h as getPointConverter
};
