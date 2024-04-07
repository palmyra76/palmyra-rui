import { jsxs as $, jsx as A } from "react/jsx-runtime";
import * as r from "d3";
import { useRef as i, useEffect as b } from "react";
const t = { top: 30, right: 30, bottom: 30, left: 30 }, C = ({ width: x, height: f, data: o }) => {
  const p = x - t.right - t.left, n = f - t.top - t.bottom, g = i(), y = i(), v = i({ xScale: null, yScale: null }), h = i({ xAxis: null, yAxis: null });
  function S(a) {
    if (!o || !o.datasets)
      return;
    const { xScale: s, yScale: c } = v.current;
    o.datasets.map((l) => {
      const u = l.backgroundColor || "red";
      l.data.map((e) => {
        a.beginPath(), a.fillStyle = u;
        const d = s(e.x), m = c(e.y);
        a.arc(d, m, 6, 0, 2 * Math.PI, !0), a.fill();
      });
    });
  }
  return b(() => {
    var a = r.select(y.current).attr("width", x).attr("height", f);
    const s = r.scaleLinear().domain([0, 10]).range([0, p]).nice(), c = r.scaleLinear().domain([0, 10]).range([n, 0]).nice();
    v.current = { xScale: s, yScale: c };
    const l = r.axisBottom(s), u = r.axisLeft(c), e = a.append("g").attr("transform", `translate(${t.left}, ${t.top})`), d = e.append("g").attr("transform", `translate(0, ${n})`).call(l), m = e.append("g").call(u);
    h.current = { xAxis: d, yAxis: m }, e.append("text").attr("x", `-${n / 2}`).attr("transform", "rotate(-90)").attr("y", "-20").text("Axis Y"), e.append("text").attr("x", `${p / 2}`).attr("y", `${n + t.bottom}`).text("Axis X");
  }, []), b(() => {
    var a = r.select(g.current).attr("id", "canvas").attr("width", p).attr("height", n).attr("transform", `translate(${[t.left, t.top].join(",")})`), s = a.node().getContext("2d");
    S(s);
  }, [o]), /* @__PURE__ */ $("div", { style: { height: f, width: x }, children: [
    /* @__PURE__ */ A("svg", { ref: y, style: { position: "absolute", zIndex: 10 } }),
    /* @__PURE__ */ A("canvas", { ref: g, style: { position: "absolute", zIndex: 7 } }),
    "chart"
  ] });
};
export {
  C as D3ScatterPlot
};
