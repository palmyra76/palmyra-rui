const O = /* @__PURE__ */ new WeakMap(), p = (e) => O.get(e) || null, X = (e, o) => {
  const c = p(e);
  return O.set(e, Object.assign({}, c, o)), o;
}, y = {
  colors: {
    selection: "#e8eff6",
    selectedElements: "#1f77b4",
    unselectedElements: "#cccccc"
  }
}, D = (e, o) => {
  var c = e.chartArea.top, t = e.chartArea.bottom, l = e.scales.y.min, x = e.scales.y.max, d = -1, r = 0;
  o.offsetY <= t && o.offsetY >= c && (d = Math.abs((o.offsetY - c) / (t - c)), d = (d - 1) * -1, d = d * Math.abs(x - l) + l, r = 1);
  var f = e.chartArea.left, n = e.chartArea.right, s = e.scales.x.min, i = e.scales.x.max, a = -1;
  return o.offsetX <= n && o.offsetX >= f && r == 1 && (a = Math.abs((o.offsetX - f) / (n - f)), a = a * Math.abs(i - s) + s), { x: a, y: d };
}, N = {
  id: "areaSelectdrag",
  start: (e, o, c) => {
    var x, d, r, f;
    if (!((f = (r = (d = (x = e == null ? void 0 : e.config) == null ? void 0 : x.options) == null ? void 0 : d.plugins) == null ? void 0 : r.selectdrag) != null && f.enabled))
      return;
    const t = e.canvas;
    t.addEventListener("mousedown", (n) => {
      const s = l(n);
      if (!s || s.length === 0) {
        X(e, {
          selectionXY: {
            state: "mousedown"
          }
        });
        return;
      }
      const i = e.getElementsAtEventForMode(n, "nearest", { intersect: !1 }, !1)[0].index, a = e.data.labels[i], u = D(e, n);
      X(e, {
        selectionXY: {
          state: "drag",
          start: {
            axisValue: a,
            axisIndex: i,
            x: n.offsetX,
            y: n.offsetY,
            xValue: u.x,
            yValue: u.y
          }
        }
      });
    });
    const l = (n) => {
      try {
        return e.getElementsAtEventForMode(n, "index", { intersect: !1 }, !1);
      } catch {
      }
    };
    window.addEventListener("mouseup", (n) => {
      var m, b, v, E, V, A, I, w, M;
      const s = p(e);
      if (!s || ((m = s == null ? void 0 : s.selectionXY) == null ? void 0 : m.state) == "none")
        return;
      const i = l(n);
      if (i == null)
        return;
      const a = i.length > 0 ? i[0].index : e.data.labels.length - 1, u = e.data.labels[a];
      s.selectionXY.start.axisValue > u ? (s.selectionXY.end = JSON.parse(JSON.stringify(s.selectionXY.start)), s.selectionXY.start = { axisValue: u, axisIndex: a, x: n.offsetX, y: n.offsetY }) : s.selectionXY.end = { axisValue: u, axisIndex: a, x: n.offsetX, y: n.offsetY }, s.selectionXY.state = "none", X(e, s);
      const Y = D(e, n);
      s.selectionXY.end.xValue = Y.x, s.selectionXY.end.yValue = Y.y, e.update();
      const g = (V = (E = (v = (b = e == null ? void 0 : e.config) == null ? void 0 : b.options) == null ? void 0 : v.plugins) == null ? void 0 : E.selectdrag) == null ? void 0 : V.onSelectComplete;
      if (g) {
        const { start: S, end: F } = s.selectionXY, k = Math.abs(S.x - F.x), L = Math.abs(S.y - F.y), C = ((M = (w = (I = (A = e == null ? void 0 : e.config) == null ? void 0 : A.options) == null ? void 0 : I.plugins) == null ? void 0 : w.selectdrag) == null ? void 0 : M.threshold) || 10;
        if (k < C || L < C)
          return;
        g({
          range: [
            s.selectionXY.start.axisValue,
            s.selectionXY.end.axisValue
          ],
          boundingBox: [
            s.selectionXY.start,
            [
              s.selectionXY.end.x,
              s.selectionXY.start.y
            ],
            s.selectionXY.end,
            [
              s.selectionXY.start.x,
              s.selectionXY.end.y
            ]
          ],
          coordinates: {
            start: {
              x: s.selectionXY.start.xValue,
              y: s.selectionXY.start.yValue
            },
            end: {
              x: s.selectionXY.end.xValue,
              y: s.selectionXY.end.yValue
            }
          }
        });
      }
    }), t.addEventListener("mousemove", (n) => {
      var i;
      const s = p(e);
      !s || ((i = s == null ? void 0 : s.selectionXY) == null ? void 0 : i.state) == "none" || e.canvas == null || (s.selectionXY.state == "mousedown" && l(n) != null && (s.selectionXY.state = "drag"), s.selectionXY.end = { x: n.offsetX, y: n.offsetY }, e.render(), X(e, s));
    });
  },
  beforeUpdate: (e, o, c) => {
    var l, x, d, r;
    if (!((r = (d = (x = (l = e == null ? void 0 : e.config) == null ? void 0 : l.options) == null ? void 0 : x.plugins) == null ? void 0 : d.selectdrag) != null && r.enabled))
      return;
    const t = p(e);
    e.data.datasets = e.data.datasets.map((f) => (f.backgroundColor = e.data.labels.map((n, s) => {
      var i, a, u, Y, g, m;
      return !t || !((a = (i = t == null ? void 0 : t.selectionXY) == null ? void 0 : i.start) != null && a.x) || !((Y = (u = t == null ? void 0 : t.selectionXY) == null ? void 0 : u.end) != null && Y.x) || s >= ((g = t.selectionXY.start) == null ? void 0 : g.axisIndex) && s <= ((m = t.selectionXY.end) == null ? void 0 : m.axisIndex) ? y.colors.selectedElements : y.colors.unselectedElements;
    }), f));
  },
  afterDraw: (e, o, c) => {
    var x, d, r, f, n, s, i, a;
    const t = p(e);
    if (!t || ((x = t == null ? void 0 : t.selectionXY) == null ? void 0 : x.state) == "none" && !((d = t.selectionXY.end) != null && d.x))
      return;
    const { ctx: l } = e;
    l.save(), l.globalCompositeOperation = "destination-over", l.fillStyle = y.colors.selection, l.fillRect(
      ((r = t.selectionXY.start) == null ? void 0 : r.x) || 0,
      ((f = t.selectionXY.start) == null ? void 0 : f.y) || e.chartArea.top,
      (((n = t.selectionXY.end) == null ? void 0 : n.x) || 0) - (((s = t.selectionXY.start) == null ? void 0 : s.x) || 0),
      ((i = t.selectionXY.end) == null ? void 0 : i.y) - ((a = t.selectionXY.start) == null ? void 0 : a.y) || 0
    ), l.restore();
  },
  setSelection: (e, o = []) => {
    if (e.data.labels.length === 0 || e.data.datasets.length === 0)
      return;
    o.length === 0 && (X(e, null), e.update());
    const c = {
      selectionXY: {
        state: "none"
      }
    }, t = e.data.labels.findIndex((x) => x === o[0]);
    c.selectionXY.start = {
      axisValue: o[0],
      axisIndex: t,
      x: e.scales.x.getPixelForValue(e.data.labels[t]),
      y: 0
    };
    const l = e.data.labels.findIndex((x) => x === o[1]);
    c.selectionXY.end = {
      axisValue: o[0],
      axisIndex: l,
      x: e.scales.x.getPixelForValue(e.data.labels[l]),
      y: e.chartArea.height
    }, X(e, c), e.update();
  },
  clearSelection: (e) => {
    X(e, null), e.update();
  }
};
export {
  N as AreaSelectDrag
};
