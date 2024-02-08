import { jsx as e, Fragment as C, jsxs as s } from "react/jsx-runtime";
import { useRef as I, useState as L, useEffect as z } from "react";
import { G as p, A as H } from "../../../chunks/index.js";
import { u as O, c as T, I as F } from "../../../chunks/AsyncTreeMenu.js";
function P(o) {
  return p({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z" } }] })(o);
}
function q(o) {
  return p({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM92 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H92z" } }] })(o);
}
function R(o) {
  return p({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z" } }] })(o);
}
function J(o) {
  const i = I(null);
  let v = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [d, h] = L([v]), [N, w] = L([]), x = o.store, b = (a, r, l) => a.map((t) => (t.id === r && (t.loaded = !0, t.children = l.map((g) => g.id)), t)).concat(l), k = (a, r) => a.map((n) => {
    const t = n.children || "";
    return {
      id: n.id,
      name: n.name,
      parent: r,
      children: [],
      isBranch: t.length > 0,
      loaded: !1
    };
  });
  z(() => {
    x.getRoot().then((a) => {
      var r = k(a.result, -1);
      const l = b(d, -1, r);
      h(l);
    });
  }, []);
  const A = ({ element: a }) => {
    console.log(a.id);
    const r = a.id;
    return x.getChildren({ parent: r }).then((l) => {
      var n = k(l.result, r);
      const t = b(d, r, n);
      h(t);
    });
  };
  return /* @__PURE__ */ e(C, { children: /* @__PURE__ */ s("div", { children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "visually-hidden",
        ref: i,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ e("div", { className: "checkbox", children: /* @__PURE__ */ e(
      O,
      {
        data: d,
        "aria-label": "Checkbox tree",
        onLoadData: async (a) => {
          console.log(a);
          const r = a.element.children.length === 0, l = N.find(
            (n) => n.id === a.element.id
          );
          if (a.element.loaded || await A(a), r && !l) {
            const n = i.current;
            w([...N, a.element]), n && (n.innerHTML = `${a.element.name} loaded`), setTimeout(() => {
              n && (n.innerHTML = "");
            }, 5e3);
          }
        },
        multiSelect: !0,
        propagateSelect: !0,
        togglableSelect: !0,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: a,
          isBranch: r,
          isExpanded: l,
          isSelected: n,
          isHalfSelected: t,
          getNodeProps: g,
          level: D,
          handleSelect: u,
          handleExpand: M
        }) => {
          const y = (c, f) => c && f.children.length === 0 ? /* @__PURE__ */ s(C, { children: [
            /* @__PURE__ */ s(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  f.name
                ]
              }
            ),
            /* @__PURE__ */ e(
              H,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ e(V, { isOpen: c }), B = () => /* @__PURE__ */ s("div", { className: "crud-checkbox-list", children: [
            /* @__PURE__ */ s("div", { className: "crud-checkbox", children: [
              /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
                m,
                {
                  className: "checkbox-icon",
                  onClick: (c) => {
                    u(c), c.stopPropagation();
                  },
                  variant: t ? "some" : n ? "all" : "none"
                }
              ) }),
              /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { className: "crud-checkbox-label", children: "Create" }) })
            ] }),
            /* @__PURE__ */ s("div", { className: "crud-checkbox", children: [
              /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
                m,
                {
                  className: "checkbox-icon",
                  onClick: (c) => {
                    u(c), c.stopPropagation();
                  },
                  variant: t ? "some" : n ? "all" : "none"
                }
              ) }),
              /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { className: "crud-checkbox-label", children: "Update" }) })
            ] }),
            /* @__PURE__ */ s("div", { className: "crud-checkbox", children: [
              /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
                m,
                {
                  className: "checkbox-icon",
                  onClick: (c) => {
                    u(c), c.stopPropagation();
                  },
                  variant: t ? "some" : n ? "all" : "none"
                }
              ) }),
              /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { className: "crud-checkbox-label", children: "Delete" }) })
            ] })
          ] });
          return /* @__PURE__ */ s(
            "div",
            {
              ...g({ onClick: M }),
              style: { marginLeft: 40 * (D - 1) },
              children: [
                /* @__PURE__ */ e(
                  m,
                  {
                    className: "checkbox-icon",
                    onClick: (c) => {
                      u(c), c.stopPropagation();
                    },
                    variant: t ? "some" : n ? "all" : "none"
                  }
                ),
                /* @__PURE__ */ s("div", { className: "menu-list", children: [
                  /* @__PURE__ */ s("div", { className: "text-icon", children: [
                    /* @__PURE__ */ e("div", { children: "I" }),
                    /* @__PURE__ */ e("span", { className: "menu-name", children: a.name })
                  ] }),
                  /* @__PURE__ */ e("div", { children: r ? y(l, a) : B() })
                ] })
              ]
            }
          );
        }
      }
    ) })
  ] }) });
}
const V = (o) => {
  const { isOpen: i, className: v } = o, d = "arrow", h = T(
    d,
    { [`${d}--closed`]: !i },
    { [`${d}--open`]: i },
    v
  );
  return /* @__PURE__ */ e(F, { className: h });
}, m = ({ variant: o, ...i }) => {
  switch (o) {
    case "all":
      return /* @__PURE__ */ e(P, { ...i });
    case "none":
      return /* @__PURE__ */ e(R, { ...i });
    case "some":
      return /* @__PURE__ */ e(q, { ...i });
    default:
      return null;
  }
};
export {
  J as default
};
