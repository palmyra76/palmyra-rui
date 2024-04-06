import { jsxs as i, Fragment as f, jsx as s } from "react/jsx-runtime";
import { useMemo as a } from "react";
const p = 6, l = ({ xScale: r, pixelsPerTick: m }) => {
  const o = r.range(), c = a(() => {
    const t = o[1] - o[0], n = Math.floor(t / m);
    return r.ticks(n).map((e) => ({
      value: e,
      xOffset: r(e)
    }));
  }, [r]);
  return /* @__PURE__ */ i(f, { children: [
    /* @__PURE__ */ s(
      "path",
      {
        d: ["M", o[0], 0, "L", o[1], 0].join(" "),
        fill: "none",
        stroke: "currentColor"
      }
    ),
    c.map(({ value: t, xOffset: n }) => /* @__PURE__ */ i("g", { transform: `translate(${n}, 0)`, children: [
      /* @__PURE__ */ s("line", { y2: p, stroke: "currentColor" }),
      /* @__PURE__ */ s(
        "text",
        {
          style: {
            fontSize: "10px",
            textAnchor: "middle",
            transform: "translateY(20px)"
          },
          children: t
        },
        t
      )
    ] }, t))
  ] });
};
export {
  l as AxisBottom
};
