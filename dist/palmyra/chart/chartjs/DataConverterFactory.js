import n from "./converters/LineConverter.js";
import c from "./converters/BarConverter.js";
import f from "./converters/GroupedBarConverter.js";
import s from "./converters/ScatterConverter.js";
import p from "./converters/GroupedScatterConverter.js";
import u, { getPointData as d } from "./converters/BubbleConverter.js";
import l from "./converters/RadarConverter.js";
import $ from "./converters/PolarConverter.js";
import C from "./converters/PieConverter.js";
import P from "./converters/DoughnutConverter.js";
import { getScalePointData as o } from "./converters/ScaleConverter.js";
const D = (r) => r;
var a = {
  Line: n,
  MultiLine: n,
  AreaChart: n,
  Bar: c,
  StackedBar: c,
  Scatter: s,
  GroupedScatter: p,
  Bubble: u,
  Radar: l,
  PolarArea: $,
  Pie: C,
  Doughnut: P,
  GroupedBar: f
}, g = {
  Line: o,
  Bar: o,
  Pie: o,
  Doughnut: o,
  PolarArea: o,
  Radar: o,
  Bubble: d
};
const x = (r, e, t) => {
  var m;
  var i = e || "Array", v = (m = a[r]) == null ? void 0 : m[i];
  return v ? v(t) : (console.info("Data Converter not found " + r + ":" + i), D);
}, E = (r, e, t) => {
  if (!a[r][e])
    a[r][e] = t;
  else
    throw new Error("Converter already set for " + r + "/" + e);
}, N = (r) => {
  var e = g[r];
  return e || ((t) => t);
};
export {
  E as addDataConverter,
  x as getDataConverter,
  N as getPointConverter
};
