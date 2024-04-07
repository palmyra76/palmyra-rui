import { jsx as C } from "react/jsx-runtime";
import { useRef as g, useImperativeHandle as E, useEffect as P, useMemo as S } from "react";
import { getDatasetAtEvent as D, getElementsAtEvent as R, getElementAtEvent as b, Chart as T } from "react-chartjs-2";
import { getPointConverter as L, getDataConverter as O } from "../palmyra/chart/chartjs/DataConverterFactory.js";
import { AreaSelectDrag as k } from "../palmyra/chart/chartjs/plugins/AreaSelectDrag.js";
import { Chart as x, CategoryScale as B, LinearScale as w, RadialLinearScale as j, BarElement as H, PointElement as J, ArcElement as G, LineElement as I, Title as M, Tooltip as N, Legend as $ } from "chart.js";
function q(r) {
  return r.length > 0;
}
const z = (r, p, i, c) => {
  c != null && (i.push(k), p.plugins.selectdrag = {
    enabled: !0,
    onSelectComplete: (u) => {
      c(u);
    }
  });
}, _ = (r, p, i) => {
  if (!p.onPointClick)
    return {};
  const { data: c, transformOptions: u, onPointClick: d } = p, l = (s, o, t) => {
    if (s.length) {
      var f = L(r);
      return f(c, u, o, t);
    }
  };
  return { onClick: (s) => {
    const { current: o } = i;
    if (!o)
      return;
    const t = D(o, s);
    if (q(t)) {
      var f = l(
        t,
        b(o, s),
        R(o, s)
      );
      d(f);
    }
  } };
}, F = {
  Line: "line",
  Bar: "bar",
  GroupedBar: "bar",
  Bubble: "bubble",
  Doughnut: "doughnut",
  Pie: "pie",
  PolarArea: "polarArea",
  Radar: "radar",
  Scatter: "scatter"
}, K = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      display: !1
    }
  }
};
x.register(
  B,
  w,
  j,
  H,
  J,
  G,
  I,
  M,
  N,
  $
);
function ee(r) {
  const p = [], i = r.chartRef, c = r.plugins || p, u = r.options || K, d = g({ ...r, plugins: c, options: u }), l = () => d.current, m = (e) => {
    const n = l();
    var a = y(e, n.type, n.transformOptions);
    return n.postProcessors && n.postProcessors.map((h, Q) => {
      a = h(a);
    }), a;
  }, s = g(m(l().data)), o = i || g(null), t = g(null), f = (e) => {
    if (t.current == null) {
      console.error("Chart Reference is not found, data will not be updated");
      return;
    }
    const n = t.current;
    s.current = e, n.data = e, n.update();
  };
  E(o, () => ({
    setData(e) {
      const n = m(e);
      f(n);
    },
    setTransformOptions(e) {
      l().transformOptions = e;
    },
    clearData() {
      f({ datasets: [] });
    },
    clear() {
      t.current != null && t.current.clear();
    },
    reset() {
      t.current != null && t.current.reset();
    }
  }), [i, t, s, d]), P(() => {
    const e = m(r.data);
    f(e);
  }, [r.data]);
  function y(e, n, a) {
    const h = a != null && a.sourceType ? a == null ? void 0 : a.sourceType : e && e instanceof Array ? "Array" : "Object";
    return O(n, h, a)(e);
  }
  function A() {
    return l().height || "350px";
  }
  const v = S(() => {
    const e = l();
    return e.onAreaSelect && z(e.type, u, c, e.onAreaSelect), /* @__PURE__ */ C(
      T,
      {
        type: F[e.type],
        ref: t,
        plugins: c,
        options: u,
        data: s.current,
        height: A()
      }
    );
  }, []);
  return /* @__PURE__ */ C("div", { className: "palmyra-chart-container-wrapper", children: s ? v : /* @__PURE__ */ C("div", { children: "loading..." }) });
}
export {
  ee as C,
  z as a,
  _ as u
};
