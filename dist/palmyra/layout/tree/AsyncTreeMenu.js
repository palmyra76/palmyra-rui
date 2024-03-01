import { jsx as r, Fragment as y, jsxs as c } from "react/jsx-runtime";
import { useRef as b, useState as L, useEffect as x } from "react";
import { A as C } from "../../../chunks/index.esm2.js";
import { I as H } from "../../../chunks/index.esm3.js";
import { u as I, c as O } from "../../../chunks/AsyncTreeMenu.js";
function U(i) {
  const d = b(null);
  let m = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [l, o] = L([m]), [h, A] = L([]), p = i.store, f = (e, n, t) => e.map((s) => (s.id === n && (s.loaded = !0, s.children = t.map((u) => u.id)), s)).concat(t), v = (e, n) => e.map((a) => {
    const s = a.children || "";
    return {
      id: a.id,
      name: a.name,
      parent: n,
      children: [],
      isBranch: s.length > 0,
      loaded: !1
    };
  });
  x(() => {
    p.getRoot().then((e) => {
      var n = v(e.result, -1);
      const t = f(l, -1, n);
      o(t);
    });
  }, []);
  const w = ({ element: e }) => {
    const n = e.id;
    return p.getChildren({ parent: n }).then((t) => {
      var a = v(t.result, n);
      const s = f(l, n, a);
      o(s);
    });
  };
  return /* @__PURE__ */ r(y, { children: /* @__PURE__ */ c("div", { children: [
    /* @__PURE__ */ r(
      "div",
      {
        className: "visually-hidden",
        ref: d,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ r("div", { className: "checkbox", children: /* @__PURE__ */ r(
      I,
      {
        className: "async-tree-menu-container",
        data: l,
        "aria-label": "Checkbox tree",
        onLoadData: async (e) => {
          const n = e.element.children.length === 0, t = h.find(
            (a) => a.id === e.element.id
          );
          if (e.element.loaded || await w(e), n && !t) {
            const a = d.current;
            A([...h, e.element]), a && (a.innerHTML = `${e.element.name} loaded`), setTimeout(() => {
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
          isBranch: n,
          isExpanded: t,
          isSelected: a,
          isHalfSelected: s,
          getNodeProps: u,
          level: k,
          handleSelect: B,
          handleExpand: D
        }) => {
          const S = (N, g) => N && g.children.length === 0 ? /* @__PURE__ */ c(y, { children: [
            /* @__PURE__ */ c(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  g.name
                ]
              }
            ),
            /* @__PURE__ */ r(
              C,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ r(T, { isOpen: N });
          return /* @__PURE__ */ r(
            "div",
            {
              ...u({ onClick: D }),
              children: /* @__PURE__ */ c("div", { className: "async-tree-menu-list", children: [
                /* @__PURE__ */ c("div", { className: "async-tree-menu-list-text-container", children: [
                  /* @__PURE__ */ r("div", { children: "I" }),
                  /* @__PURE__ */ r("span", { className: "menu-name", children: e.name })
                ] }),
                /* @__PURE__ */ r("div", { className: "async-tree-menu-list-arrow-container", children: n && S(t, e) })
              ] })
            }
          );
        }
      }
    ) })
  ] }) });
}
const T = (i) => {
  const { isOpen: d, className: m } = i, l = "arrow", o = O(
    l,
    { [`${l}--closed`]: !d },
    { [`${l}--open`]: d },
    m
  );
  return /* @__PURE__ */ r(H, { className: o });
};
export {
  U as default
};
