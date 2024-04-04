import m from "./converters/LineConverter.js";
import f from "./converters/BarConverter.js";
import c from "./converters/ScatterConverter.js";
import s, { getPointData as l } from "./converters/BubbleConverter.js";
import p from "./converters/RadarConverter.js";
import u from "./converters/PolarConverter.js";
import P from "./converters/PieConverter.js";
import d from "./converters/DoughnutConverter.js";
import { getScalePointData as o } from "./converters/ScaleConverter.js";
const $ = (r) => r;
var n = {
  Line: m,
  Bar: f,
  Scatter: c,
  Bubble: s,
  Radar: p,
  PolarArea: u,
  Pie: P,
  Doughnut: d
}, g = {
  Line: o,
  Bar: o,
  Pie: o,
  Doughnut: o,
  PolarArea: o,
  Radar: o,
  Bubble: l
};
const M = (r, e, t) => {
  var i;
  var a = e;
  t.xKey instanceof Array && e == "default" && (a = "twoXKey");
  var v = (i = n[r]) == null ? void 0 : i[a];
  return v ? v(t) : $;
}, R = (r, e, t) => {
  if (!n[r][e])
    n[r][e] = t;
  else
    throw new Error("Converter already set for " + r + "/" + e);
}, S = (r) => {
  var e = g[r];
  return e || ((t) => t);
};
export {
  R as addDataConverter,
  M as getDataConverter,
  S as getPointConverter
};
