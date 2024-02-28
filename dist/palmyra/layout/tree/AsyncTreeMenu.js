import { jsx as r, Fragment as y, jsxs as c } from "react/jsx-runtime";
import { useRef as b, useState as L, useEffect as x } from "react";
import { A as C } from "../../../chunks/index.esm.js";
import { u as H, c as I, I as O } from "../../../chunks/AsyncTreeMenu.js";
function F(i) {
  const d = b(null);
  let u = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [l, o] = L([u]), [h, A] = L([]), p = i.store, v = (e, n, t) => e.map((s) => (s.id === n && (s.loaded = !0, s.children = t.map((m) => m.id)), s)).concat(t), f = (e, n) => e.map((a) => {
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
      var n = f(e.result, -1);
      const t = v(l, -1, n);
      o(t);
    });
  }, []);
  const w = ({ element: e }) => {
    const n = e.id;
    return p.getChildren({ parent: n }).then((t) => {
      var a = f(t.result, n);
      const s = v(l, n, a);
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
      H,
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
          getNodeProps: m,
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
              ...m({ onClick: D }),
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
  const { isOpen: d, className: u } = i, l = "arrow", o = I(
    l,
    { [`${l}--closed`]: !d },
    { [`${l}--open`]: d },
    u
  );
  return /* @__PURE__ */ r(O, { className: o });
};
export {
  F as default
};
