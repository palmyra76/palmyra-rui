import { jsxs as i, Fragment as f, jsx as e } from "react/jsx-runtime";
import { useMemo as x } from "react";
const a = 6, l = ({ yScale: r, pixelsPerTick: c }) => {
  const n = r.range(), m = x(() => {
    const t = n[0] - n[1], o = Math.floor(t / c);
    return r.ticks(o).map((s) => ({
      value: s,
      yOffset: r(s)
    }));
  }, [r]);
  return /* @__PURE__ */ i(f, { children: [
    /* @__PURE__ */ e(
      "path",
      {
        d: ["M", 0, n[0], "L", 0, n[1]].join(" "),
        fill: "none",
        stroke: "currentColor"
      }
    ),
    m.map(({ value: t, yOffset: o }) => /* @__PURE__ */ i("g", { transform: `translate(0, ${o})`, children: [
      /* @__PURE__ */ e("line", { x2: -a, stroke: "currentColor" }),
      /* @__PURE__ */ e(
        "text",
        {
          style: {
            fontSize: "10px",
            textAnchor: "middle",
            transform: "translateX(-20px)"
          },
          children: t
        },
        t
      )
    ] }, t))
  ] });
};
export {
  l as AxisLeft
};
