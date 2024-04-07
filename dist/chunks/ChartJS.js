import { jsx as C } from "react/jsx-runtime";
import { useRef as g, useImperativeHandle as v, useEffect as E, useMemo as P } from "react";
import { getDatasetAtEvent as b, getElementsAtEvent as D, getElementAtEvent as R, Chart as L } from "react-chartjs-2";
import { getPointConverter as T, getDataConverter as O } from "../palmyra/chart/chartjs/DataConverterFactory.js";
import { AreaSelectDrag as k } from "../palmyra/chart/chartjs/plugins/AreaSelectDrag.js";
import { Chart as B, CategoryScale as x, LinearScale as w, RadialLinearScale as j, BarElement as G, PointElement as H, ArcElement as J, LineElement as M, Title as I, Tooltip as N, Legend as $ } from "chart.js";
function q(r) {
  return r.length > 0;
}
const z = (r, f, i, c) => {
  c != null && (i.push(k), f.plugins.selectdrag = {
    enabled: !0,
    onSelectComplete: (l) => {
      c(l);
    }
  });
}, _ = (r, f, i) => {
  if (!f.onPointClick)
    return {};
  const { data: c, transformOptions: l, onPointClick: d } = f, p = (s, o, t) => {
    if (s.length) {
      var u = T(r);
      return u(c, l, o, t);
    }
  };
  return { onClick: (s) => {
    const { current: o } = i;
    if (!o)
      return;
    const t = b(o, s);
    if (q(t)) {
      var u = p(
        t,
        R(o, s),
        D(o, s)
      );
      d(u);
    }
  } };
}, F = {
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
}, K = {
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
  I,
  N,
  $
);
function ee(r) {
  const f = [], i = r.chartRef, c = r.plugins || f, l = r.options || K, d = g({ ...r, plugins: c, options: l }), p = () => d.current, m = (e) => {
    const n = p();
    var a = y(e, n.type, n.transformOptions);
    return n.postProcessors && n.postProcessors.map((h, Q) => {
      a = h(a);
    }), a;
  }, s = g(m(r.data)), o = i || g(null), t = g(null), u = (e) => {
    if (t.current == null) {
      console.error("Chart Reference is not found, data will not be updated");
      return;
    }
    const n = t.current;
    s.current = e, n.data = e, n.update();
  };
  v(o, () => ({
    setData(e) {
      const n = m(e);
      u(n);
    },
    setTransformOptions(e) {
      p().transformOptions = e;
    },
    clearData() {
      u({ datasets: [] });
    },
    clear() {
      t.current != null && t.current.clear();
    },
    reset() {
      t.current != null && t.current.reset();
    }
  }), [i, t, s, d]), E(() => {
    const e = m(r.data);
    u(e);
  }, [r.data]);
  function y(e, n, a) {
    const h = a != null && a.sourceType ? a == null ? void 0 : a.sourceType : e && e instanceof Array ? "Array" : "Object";
    return O(n, h, a)(e);
  }
  function A() {
    return p().height || "350px";
  }
  const S = P(() => {
    const e = p();
    return e.onAreaSelect && z(e.type, l, c, e.onAreaSelect), /* @__PURE__ */ C(
      L,
      {
        type: F[e.type],
        ref: t,
        plugins: c,
        options: l,
        data: s.current,
        height: A()
      }
    );
  }, []);
  return /* @__PURE__ */ C("div", { className: "palmyra-chart-container-wrapper", children: s ? S : /* @__PURE__ */ C("div", { children: "loading..." }) });
}
export {
  ee as C,
  z as a,
  _ as u
};
