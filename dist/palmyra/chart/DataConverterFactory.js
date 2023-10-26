import i from "./converters/LineConverter.js";
import m from "./converters/BarConverter.js";
import s from "./converters/ScatterConverter.js";
import c, { getPointData as f } from "./converters/BubbleConverter.js";
import p from "./converters/RadarConverter.js";
import u from "./converters/PolarConverter.js";
import l from "./converters/PieConverter.js";
import P from "./converters/DoughnutConverter.js";
import { getScalePointData as e } from "./converters/ScaleConverter.js";
const d = (r) => r;
var n = {
  Line: i,
  Bar: m,
  Scatter: s,
  Bubble: c,
  Radar: p,
  PolarArea: u,
  Pie: l,
  Doughnut: P
}, $ = {
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
  return a ? a(o) : d;
}, S = (r, t, o) => {
  if (!n[r][t])
    n[r][t] = o;
  else
    throw new Error("Converter already set for " + r + "/" + t);
}, h = (r) => {
  var t = $[r];
  return t || ((o) => o);
};
export {
  S as addDataConverter,
  R as default,
  h as getPointConverter
};
