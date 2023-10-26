import m from "./converters/LineConverter.js";
import i from "./converters/BarConverter.js";
import s from "./converters/ScatterConverter.js";
import c, { getPointData as f } from "./converters/BubbleConverter.js";
import p from "./converters/RadarConverter.js";
import l from "./converters/PolarConverter.js";
import u from "./converters/PieConverter.js";
import $ from "./converters/DoughnutConverter.js";
import { getScalePointData as v } from "./converters/ScaleConverter.js";
const d = (r) => r;
var o = {
  Line: m,
  Bar: i,
  Scatter: s,
  Bubble: c,
  Radar: p,
  PolarArea: l,
  Pie: u,
  Doughnut: $
}, C = {
  Line: v,
  Bar: v,
  Bubble: f
};
const x = (r, t, e) => {
  var a;
  var n = (a = o[r]) == null ? void 0 : a[t];
  return n ? n(e) : d;
}, A = (r, t, e) => {
  if (!o[r][t])
    o[r][t] = e;
  else
    throw new Error("Converter already set for " + r + "/" + t);
}, E = (r) => {
  var t = C[r];
  return t || ((e) => e);
};
export {
  A as addDataConverter,
  x as default,
  E as getPointConverter
};
