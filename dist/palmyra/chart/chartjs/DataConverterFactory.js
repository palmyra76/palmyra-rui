import a from "./converters/LineConverter.js";
import m from "./converters/BarConverter.js";
import s from "./converters/GroupedBarConverter.js";
import p from "./converters/ScatterConverter.js";
import f from "./converters/GroupedScatterConverter.js";
import u, { getPointData as d } from "./converters/BubbleConverter.js";
import $ from "./converters/RadarConverter.js";
import l from "./converters/PolarConverter.js";
import P from "./converters/PieConverter.js";
import C from "./converters/DoughnutConverter.js";
import { getScalePointData as t } from "./converters/ScaleConverter.js";
const g = (r) => r;
var n = {
  Line: a,
  MultiLine: a,
  AreaChart: a,
  Bar: m,
  StackedBar: m,
  Scatter: p,
  GroupedScatter: f,
  Bubble: u,
  Radar: $,
  PolarArea: l,
  Pie: P,
  Doughnut: C,
  GroupedBar: s
}, B = {
  Line: t,
  Bar: t,
  Pie: t,
  Doughnut: t,
  PolarArea: t,
  Radar: t,
  Bubble: d
};
const x = (r, e, o) => {
  var i;
  var c = e || "Array", v = (i = n[r]) == null ? void 0 : i[c];
  return v ? v(o) : g;
}, E = (r, e, o) => {
  if (!n[r][e])
    n[r][e] = o;
  else
    throw new Error("Converter already set for " + r + "/" + e);
}, N = (r) => {
  var e = B[r];
  return e || ((o) => o);
};
export {
  E as addDataConverter,
  x as getDataConverter,
  N as getPointConverter
};
