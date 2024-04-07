import i from "./converters/LineConverter.js";
import c from "./converters/BarConverter.js";
import s from "./converters/GroupedBarConverter.js";
import f from "./converters/ScatterConverter.js";
import p, { getPointData as u } from "./converters/BubbleConverter.js";
import P from "./converters/RadarConverter.js";
import $ from "./converters/PolarConverter.js";
import d from "./converters/PieConverter.js";
import l from "./converters/DoughnutConverter.js";
import { getScalePointData as o } from "./converters/ScaleConverter.js";
const g = (r) => r;
var n = {
  Line: i,
  Bar: c,
  Scatter: f,
  Bubble: p,
  Radar: P,
  PolarArea: $,
  Pie: d,
  Doughnut: l,
  GroupedBar: s
}, C = {
  Line: o,
  Bar: o,
  Pie: o,
  Doughnut: o,
  PolarArea: o,
  Radar: o,
  Bubble: u
};
const h = (r, e, t) => {
  var v;
  var m = e || "Array", a = (v = n[r]) == null ? void 0 : v[m];
  return a ? a(t) : g;
}, x = (r, e, t) => {
  if (!n[r][e])
    n[r][e] = t;
  else
    throw new Error("Converter already set for " + r + "/" + e);
}, E = (r) => {
  var e = C[r];
  return e || ((t) => t);
};
export {
  x as addDataConverter,
  h as getDataConverter,
  E as getPointConverter
};
