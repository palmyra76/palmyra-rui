import { jsx as C } from "react/jsx-runtime";
import { useRef as m, useImperativeHandle as E, useEffect as P, useMemo as S } from "react";
import { getDatasetAtEvent as D, getElementsAtEvent as R, getElementAtEvent as b, Chart as L } from "react-chartjs-2";
import { getPointConverter as T, getDataConverter as k } from "../palmyra/chart/chartjs/DataConverterFactory.js";
import { AreaSelectDrag as O } from "../palmyra/chart/chartjs/plugins/AreaSelectDrag.js";
import { Chart as x, CategoryScale as B, LinearScale as w, RadialLinearScale as j, BarElement as H, PointElement as J, ArcElement as G, LineElement as I, Title as M, Tooltip as N, Legend as $ } from "chart.js";
function q(r) {
  return r.length > 0;
}
const z = (r, f, u, s) => {
  s != null && (u.push(O), f.plugins.selectdrag = {
    enabled: !0,
    onSelectComplete: (i) => {
      s(i);
    }
  });
}, _ = (r, f, u) => {
  if (!f.onPointClick)
    return {};
  const { data: s, transformOptions: i, onPointClick: d } = f, p = (c, o, t) => {
    if (c.length) {
      var l = T(r);
      return l(s, i, o, t);
    }
  };
  return { onClick: (c) => {
    const { current: o } = u;
    if (!o)
      return;
    const t = D(o, c);
    if (q(t)) {
      var l = p(
        t,
        b(o, c),
        R(o, c)
      );
      d(l);
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
  const f = [], u = r.chartRef, s = r.plugins || f, i = r.options || K, d = m({ ...r, plugins: s, options: i }), p = () => d.current, g = (e) => {
    const n = p();
    var a = y(e, n.type, n.transformOptions);
    return n.postProcessors && n.postProcessors.map((h, Q) => {
      a = h(a);
    }), a;
  }, c = m(g(p().data)), o = u || m(null), t = m(null), l = (e) => {
    if (t.current == null) {
      console.error("Chart Reference is not found, data will not be updated");
      return;
    }
    const n = t.current;
    c.current = e, n.data = e, n.update();
  };
  E(o, () => ({
    setData(e) {
      const n = g(e);
      l(n);
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
  }), [u, t, c, d]), P(() => {
    const e = g(r.data);
    l(e);
  }, [r.data]);
  function y(e, n, a) {
    const h = a != null && a.sourceType ? a == null ? void 0 : a.sourceType : e && e instanceof Array ? "Array" : "Object";
    return k(n, h, a)(e);
  }
  function A() {
    return p().height || "350px";
  }
  const v = S(() => {
    const e = p();
    return e.onAreaSelect && z(e.type, i, s, e.onAreaSelect), /* @__PURE__ */ C(
      L,
      {
        type: F[e.type],
        ref: t,
        plugins: s,
        options: i,
        data: c.current,
        height: A()
      }
    );
  }, []);
  return /* @__PURE__ */ C("div", { className: "palmyra-chart-container-wrapper", children: c ? v : /* @__PURE__ */ C("div", { children: "loading..." }) });
}
export {
  ee as C,
  z as a,
  _ as u
};
