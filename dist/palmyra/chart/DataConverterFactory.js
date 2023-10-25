import i, { getPointData as n } from "./converters/LineConverter.js";
import s from "./converters/BarConverter.js";
import m from "./converters/ScatterConverter.js";
import p, { getPointData as c } from "./converters/BubbleConverter.js";
import f from "./converters/RadarConverter.js";
import u from "./converters/PolarConverter.js";
import $ from "./converters/PieConverter.js";
import P from "./converters/DoughnutConverter.js";
const g = (r) => r;
var d = {
  Line: i,
  Bar: s,
  Scatter: m,
  Bubble: p,
  Radar: f,
  PolarArea: u,
  Pie: $,
  Doughnut: P
}, l = {
  Line: n,
  Bar: n,
  Bubble: c
};
const h = (r, t) => {
  var o;
  var a = t.transformOptions || { sourceType: "default" }, v = a.sourceType || "default", e = (o = d[r]) == null ? void 0 : o[v];
  return e ? e(t) : g;
}, x = (r) => {
  var t = l[r];
  return t || (() => {
  });
};
export {
  h as default,
  x as getPointConverter
};
