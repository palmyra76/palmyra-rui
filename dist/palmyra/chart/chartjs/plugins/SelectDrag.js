const w = /* @__PURE__ */ new WeakMap(), p = (e) => w.get(e) || null, X = (e, l) => {
  const c = p(e);
  return w.set(e, Object.assign({}, c, l)), l;
}, y = {
  colors: {
    selection: "#e8eff6",
    selectedElements: "#1f77b4",
    unselectedElements: "#cccccc"
  }
}, A = (e, l) => {
  var c = e.chartArea.top, t = e.chartArea.bottom, i = e.scales.y.min, x = e.scales.y.max, a = -1, r = 0;
  l.offsetY <= t && l.offsetY >= c && (a = Math.abs((l.offsetY - c) / (t - c)), a = (a - 1) * -1, a = a * Math.abs(x - i) + i, r = 1);
  var f = e.chartArea.left, n = e.chartArea.right, s = e.scales.x.min, d = e.scales.x.max, o = -1;
  return l.offsetX <= n && l.offsetX >= f && r == 1 && (o = Math.abs((l.offsetX - f) / (n - f)), o = o * Math.abs(d - s) + s), a != -1 && o != -1 && console.log(o + "," + a), { x: o, y: a };
}, I = {
  id: "selectdrag",
  start: (e, l, c) => {
    var x, a, r, f;
    if (!((f = (r = (a = (x = e == null ? void 0 : e.config) == null ? void 0 : x.options) == null ? void 0 : a.plugins) == null ? void 0 : r.selectdrag) != null && f.enabled))
      return;
    const t = e.canvas;
    t.addEventListener("mousedown", (n) => {
      const s = i(n);
      if (!s || s.length === 0) {
        X(e, {
          selectionXY: {
            state: "mousedown"
          }
        });
        return;
      }
      const d = e.getElementsAtEventForMode(n, "nearest", { intersect: !1 }, !1)[0].index, o = e.data.labels[d], u = A(e, n);
      X(e, {
        selectionXY: {
          state: "drag",
          start: {
            axisValue: o,
            axisIndex: d,
            x: n.offsetX,
            y: n.offsetY,
            xValue: u.x,
            yValue: u.y
          }
        }
      });
    });
    const i = (n) => {
      try {
        return e.getElementsAtEventForMode(n, "index", { intersect: !1 }, !1);
      } catch {
      }
    };
    window.addEventListener("mouseup", (n) => {
      var m, b, v, E, V;
      const s = p(e);
      if (!s || ((m = s == null ? void 0 : s.selectionXY) == null ? void 0 : m.state) == "none")
        return;
      const d = i(n);
      if (d == null)
        return;
      const o = d.length > 0 ? d[0].index : e.data.labels.length - 1, u = e.data.labels[o];
      s.selectionXY.start.axisValue > u ? (s.selectionXY.end = JSON.parse(JSON.stringify(s.selectionXY.start)), s.selectionXY.start = { axisValue: u, axisIndex: o, x: n.offsetX, y: n.offsetY }) : s.selectionXY.end = { axisValue: u, axisIndex: o, x: n.offsetX, y: n.offsetY }, s.selectionXY.state = "none", X(e, s);
      const Y = A(e, n);
      s.selectionXY.end.xValue = Y.x, s.selectionXY.end.yValue = Y.y, e.update();
      const g = (V = (E = (v = (b = e == null ? void 0 : e.config) == null ? void 0 : b.options) == null ? void 0 : v.plugins) == null ? void 0 : E.selectdrag) == null ? void 0 : V.onSelectComplete;
      g && g({
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
        ]
      });
    }), t.addEventListener("mousemove", (n) => {
      var d;
      const s = p(e);
      if (!(!s || ((d = s == null ? void 0 : s.selectionXY) == null ? void 0 : d.state) == "none" || e.canvas == null)) {
        if (s.selectionXY.state == "mousedown") {
          const o = i(n);
          o != null && (console.log(o), s.selectionXY.state = "drag");
        }
        s.selectionXY.end = { x: n.offsetX, y: n.offsetY }, e.render(), X(e, s);
      }
    });
  },
  beforeUpdate: (e, l, c) => {
    var i, x, a, r;
    if (!((r = (a = (x = (i = e == null ? void 0 : e.config) == null ? void 0 : i.options) == null ? void 0 : x.plugins) == null ? void 0 : a.selectdrag) != null && r.enabled))
      return;
    const t = p(e);
    e.data.datasets = e.data.datasets.map((f) => (f.backgroundColor = e.data.labels.map((n, s) => {
      var d, o, u, Y, g, m;
      return !t || !((o = (d = t == null ? void 0 : t.selectionXY) == null ? void 0 : d.start) != null && o.x) || !((Y = (u = t == null ? void 0 : t.selectionXY) == null ? void 0 : u.end) != null && Y.x) || s >= ((g = t.selectionXY.start) == null ? void 0 : g.axisIndex) && s <= ((m = t.selectionXY.end) == null ? void 0 : m.axisIndex) ? y.colors.selectedElements : y.colors.unselectedElements;
    }), f));
  },
  afterDraw: (e, l, c) => {
    var x, a, r, f, n, s, d, o;
    const t = p(e);
    if (!t || ((x = t == null ? void 0 : t.selectionXY) == null ? void 0 : x.state) == "none" && !((a = t.selectionXY.end) != null && a.x))
      return;
    const { ctx: i } = e;
    i.save(), i.globalCompositeOperation = "destination-over", i.fillStyle = y.colors.selection, i.fillRect(
      ((r = t.selectionXY.start) == null ? void 0 : r.x) || 0,
      ((f = t.selectionXY.start) == null ? void 0 : f.y) || e.chartArea.top,
      (((n = t.selectionXY.end) == null ? void 0 : n.x) || 0) - (((s = t.selectionXY.start) == null ? void 0 : s.x) || 0),
      ((d = t.selectionXY.end) == null ? void 0 : d.y) - ((o = t.selectionXY.start) == null ? void 0 : o.y) || 0
    ), i.restore();
  },
  setSelection: (e, l = []) => {
    if (e.data.labels.length === 0 || e.data.datasets.length === 0)
      return;
    l.length === 0 && (X(e, null), e.update());
    const c = {
      selectionXY: {
        state: "none"
      }
    }, t = e.data.labels.findIndex((x) => x === l[0]);
    c.selectionXY.start = {
      axisValue: l[0],
      axisIndex: t,
      x: e.scales.x.getPixelForValue(e.data.labels[t]),
      y: 0
    };
    const i = e.data.labels.findIndex((x) => x === l[1]);
    c.selectionXY.end = {
      axisValue: l[0],
      axisIndex: i,
      x: e.scales.x.getPixelForValue(e.data.labels[i]),
      y: e.chartArea.height
    }, X(e, c), e.update();
  },
  clearSelection: (e) => {
    X(e, null), e.update();
  }
};
export {
  I as SelectDrag
};
