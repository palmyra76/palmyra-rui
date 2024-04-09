import { jsx as C } from "react/jsx-runtime";
import { useRef as g, useImperativeHandle as S, useEffect as E, useMemo as P } from "react";
import { getDatasetAtEvent as b, getElementsAtEvent as D, getElementAtEvent as R, Chart as L } from "react-chartjs-2";
import { getPointConverter as T, getDataConverter as O } from "../palmyra/chart/chartjs/DataConverterFactory.js";
import { AreaSelectDrag as k } from "../palmyra/chart/chartjs/plugins/AreaSelectDrag.js";
import { Chart as B, CategoryScale as x, LinearScale as w, RadialLinearScale as j, BarElement as G, PointElement as H, ArcElement as J, LineElement as M, Title as N, Tooltip as I, Legend as $ } from "chart.js";
import { NoopConverter as q } from "../palmyra/chart/chartjs/converters/ScaleConverter.js";
function z(r) {
  return r.length > 0;
}
const F = (r, f, i, s) => {
  s != null && (i.push(k), f.plugins.selectdrag = {
    enabled: !0,
    onSelectComplete: (u) => {
      s(u);
    }
  });
}, te = (r, f, i) => {
  if (!f.onPointClick)
    return {};
  const { data: s, transformOptions: u, onPointClick: d } = f, p = (a, c, t) => {
    if (a.length) {
      var l = T(r);
      return l(s, u, c, t);
    }
  };
  return { onClick: (a) => {
    const { current: c } = i;
    if (!c)
      return;
    const t = b(c, a);
    if (z(t)) {
      var l = p(
        t,
        R(c, a),
        D(c, a)
      );
      d(l);
    }
  } };
}, K = {
  Line: "line",
  MultiLine: "line",
  AreaChart: "line",
  Bar: "bar",
  GroupedBar: "bar",
  StackedBar: "bar",
  Bubble: "bubble",
  Doughnut: "doughnut",
  Pie: "pie",
  PolarArea: "polarArea",
  Radar: "radar",
  Scatter: "scatter",
  GroupedScatter: "scatter"
}, Q = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      display: !1
    }
  }
};
B.register(
  x,
  w,
  j,
  G,
  H,
  J,
  M,
  N,
  I,
  $
);
function re(r) {
  const f = [], i = r.chartRef, s = r.plugins || f, u = r.options || Q, d = g({ ...r, plugins: s, options: u }), p = () => d.current, m = (e) => {
    if (e) {
      const n = p();
      var o = y(e, n.type, n.transformOptions);
      return n.postProcessors && n.postProcessors.map((h, U) => {
        o = h(o);
      }), o;
    }
    return { datasets: [] };
  }, a = g(m(r.data)), c = i || g(null), t = g(null), l = (e) => {
    if (t.current == null) {
      console.error("Chart Reference is not found, data will not be updated");
      return;
    }
    const o = t.current;
    a.current = e, o.data = e, o.update();
  };
  S(c, () => ({
    setData(e) {
      const o = m(e);
      l(o);
    },
    setTransformOptions(e) {
      p().transformOptions = e;
    },
    clearData() {
      l({ datasets: [] });
    },
    clear() {
      t.current != null && t.current.clear();
    },
    reset() {
      t.current != null && t.current.reset();
    }
  }), [i, t, a, d]), E(() => {
    const e = m(r.data);
    l(e);
  }, [r.data]);
  function y(e, o, n) {
    if (!e)
      return console.info("empty data received"), q;
    const h = n != null && n.sourceType ? n == null ? void 0 : n.sourceType : e && e instanceof Array ? "Array" : "Object";
    return O(o, h, n)(e);
  }
  function A() {
    return p().height || "350px";
  }
  const v = P(() => {
    const e = p();
    return e.onAreaSelect && F(e.type, u, s, e.onAreaSelect), /* @__PURE__ */ C(
      L,
      {
        type: K[e.type],
        ref: t,
        plugins: s,
        options: u,
        data: a.current,
        height: A()
      }
    );
  }, []);
  return /* @__PURE__ */ C("div", { className: "palmyra-chart-container-wrapper", children: a ? v : /* @__PURE__ */ C("div", { children: "loading..." }) });
}
export {
  re as C,
  F as a,
  te as u
};
