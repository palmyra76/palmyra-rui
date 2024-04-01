import i from "./converters/LineConverter.js";
import m from "./converters/BarConverter.js";
import c from "./converters/ScatterConverter.js";
import s, { getPointData as f } from "./converters/BubbleConverter.js";
import p from "./converters/RadarConverter.js";
import u from "./converters/PolarConverter.js";
import P from "./converters/PieConverter.js";
import l from "./converters/DoughnutConverter.js";
import { getScalePointData as e } from "./converters/ScaleConverter.js";
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
  Line: e,
  Bar: e,
  Pie: e,
  Doughnut: e,
  PolarArea: e,
  Radar: e,
  Bubble: f
};
const R = (r, t, o) => {
  var v;
  var a = (v = n[r]) == null ? void 0 : v[t];
  return a ? a(o) : $;
}, S = (r, t, o) => {
  if (!n[r][t])
    n[r][t] = o;
  else
    throw new Error("Converter already set for " + r + "/" + t);
}, h = (r) => {
  var t = d[r];
  return t || ((o) => o);
};
export {
  S as addDataConverter,
  R as getDataConverter,
  h as getPointConverter
};
