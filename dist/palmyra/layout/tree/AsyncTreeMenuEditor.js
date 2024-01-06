import { jsx as n, Fragment as w, jsxs as u } from "react/jsx-runtime";
import { useRef as S, useState as x, useEffect as b } from "react";
import { G as g, A as k } from "../../../chunks/index.js";
import { u as B, c as I, I as z } from "../../../chunks/AsyncTreeMenu.js";
function O(r) {
  return g({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z" } }] })(r);
}
function T(r) {
  return g({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM92 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H92z" } }] })(r);
}
function F(r) {
  return g({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z" } }] })(r);
}
function P(r) {
  const l = S(null);
  let h = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [s, i] = x([h]), [v, C] = x([]), f = r.store, p = (e, t, c) => e.map((o) => (o.id === t && (o.loaded = !0, o.children = c.map((m) => m.id)), o)).concat(c), L = (e, t) => e.map((a) => {
    const o = a.children || "";
    return {
      id: a.id,
      name: a.name,
      parent: t,
      children: [],
      isBranch: o.length > 0,
      loaded: !1
    };
  });
  b(() => {
    f.getRoot().then((e) => {
      var t = L(e.result, -1);
      const c = p(s, -1, t);
      i(c);
    });
  }, []);
  const A = ({ element: e }) => {
    console.log(e.id);
    const t = e.id;
    return f.getChildren({ parent: t }).then((c) => {
      var a = L(c.result, t);
      const o = p(s, t, a);
      i(o);
    });
  };
  return /* @__PURE__ */ n(w, { children: /* @__PURE__ */ u("div", { children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: "visually-hidden",
        ref: l,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ n("div", { className: "checkbox", children: /* @__PURE__ */ n(
      B,
      {
        data: s,
        "aria-label": "Checkbox tree",
        onLoadData: async (e) => {
          console.log(e);
          const t = e.element.children.length === 0, c = v.find(
            (a) => a.id === e.element.id
          );
          if (e.element.loaded || await A(e), t && !c) {
            const a = l.current;
            C([...v, e.element]), a && (a.innerHTML = `${e.element.name} loaded`), setTimeout(() => {
              a && (a.innerHTML = "");
            }, 5e3);
          }
        },
        multiSelect: !0,
        propagateSelect: !0,
        togglableSelect: !0,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: e,
          isBranch: t,
          isExpanded: c,
          isSelected: a,
          isHalfSelected: o,
          getNodeProps: m,
          level: M,
          handleSelect: y,
          handleExpand: D
        }) => {
          const H = (d, N) => d && N.children.length === 0 ? /* @__PURE__ */ u(w, { children: [
            /* @__PURE__ */ u(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  N.name
                ]
              }
            ),
            /* @__PURE__ */ n(
              k,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ n(q, { isOpen: d });
          return /* @__PURE__ */ u(
            "div",
            {
              ...m({ onClick: D }),
              style: { marginLeft: 40 * (M - 1) },
              children: [
                /* @__PURE__ */ n(
                  R,
                  {
                    className: "checkbox-icon",
                    onClick: (d) => {
                      y(d), d.stopPropagation();
                    },
                    variant: o ? "some" : a ? "all" : "none"
                  }
                ),
                /* @__PURE__ */ n("span", { className: "name", children: e.name }),
                t && H(c, e)
              ]
            }
          );
        }
      }
    ) })
  ] }) });
}
const q = (r) => {
  const { isOpen: l, className: h } = r, s = "arrow", i = I(
    s,
    { [`${s}--closed`]: !l },
    { [`${s}--open`]: l },
    h
  );
  return /* @__PURE__ */ n(z, { className: i });
}, R = ({ variant: r, ...l }) => {
  switch (r) {
    case "all":
      return /* @__PURE__ */ n(O, { ...l });
    case "none":
      return /* @__PURE__ */ n(F, { ...l });
    case "some":
      return /* @__PURE__ */ n(T, { ...l });
    default:
      return null;
  }
};
export {
  P as default
};
