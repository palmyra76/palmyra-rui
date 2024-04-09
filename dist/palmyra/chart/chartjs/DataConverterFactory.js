import v from "./converters/LineConverter.js";
import c from "./converters/BarConverter.js";
import s from "./converters/GroupedBarConverter.js";
import l from "./converters/ScatterConverter.js";
import f from "./converters/GroupedScatterConverter.js";
import p, { getPointData as u } from "./converters/BubbleConverter.js";
import d from "./converters/RadarConverter.js";
import g from "./converters/PolarConverter.js";
import $ from "./converters/PieConverter.js";
import P from "./converters/DoughnutConverter.js";
import { getScalePointData as e } from "./converters/ScaleConverter.js";
const C = (r) => r;
var n = {
  Line: v,
  MultiLine: v,
  AreaChart: v,
  Bar: c,
  StackedBar: c,
  Scatter: l,
  GroupedScatter: f,
  Bubble: p,
  Radar: d,
  PolarArea: g,
  Pie: $,
  Doughnut: P,
  GroupedBar: s
}, B = {
  Line: e,
  Bar: e,
  Pie: e,
  Doughnut: e,
  PolarArea: e,
  Radar: e,
  Bubble: u
};
const E = (r, o, t) => {
  var m;
  var i = o || "Array";
  console.log(r, i), console.log(n[r]);
  var a = (m = n[r]) == null ? void 0 : m[i];
  return console.log(a), a ? a(t) : C;
}, N = (r, o, t) => {
  if (!n[r][o])
    n[r][o] = t;
  else
    throw new Error("Converter already set for " + r + "/" + o);
}, h = (r) => {
  var o = B[r];
  return o || ((t) => t);
};
export {
  N as addDataConverter,
  E as getDataConverter,
  h as getPointConverter
};
