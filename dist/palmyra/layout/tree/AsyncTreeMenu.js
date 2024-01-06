import { jsx as r, Fragment as y, jsxs as c } from "react/jsx-runtime";
import { useRef as b, useState as L, useEffect as x } from "react";
import { A as C } from "../../../chunks/index.js";
import { u as H, c as I, I as O } from "../../../chunks/AsyncTreeMenu.js";
function F(i) {
  const d = b(null);
  let u = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [s, o] = L([u]), [h, A] = L([]), v = i.store, f = (e, n, t) => e.map((l) => (l.id === n && (l.loaded = !0, l.children = t.map((m) => m.id)), l)).concat(t), g = (e, n) => e.map((a) => {
    const l = a.children || "";
    return {
      id: a.id,
      name: a.name,
      parent: n,
      children: [],
      isBranch: l.length > 0,
      loaded: !1
    };
  });
  x(() => {
    v.getRoot().then((e) => {
      var n = g(e.result, -1);
      const t = f(s, -1, n);
      o(t);
    });
  }, []);
  const w = ({ element: e }) => {
    console.log(e.id);
    const n = e.id;
    return v.getChildren({ parent: n }).then((t) => {
      var a = g(t.result, n);
      const l = f(s, n, a);
      o(l);
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
        data: s,
        "aria-label": "Checkbox tree",
        onLoadData: async (e) => {
          console.log(e);
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
          isHalfSelected: l,
          getNodeProps: m,
          level: k,
          handleSelect: B,
          handleExpand: D
        }) => {
          const S = (p, N) => p && N.children.length === 0 ? /* @__PURE__ */ c(y, { children: [
            /* @__PURE__ */ c(
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
            /* @__PURE__ */ r(
              C,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ r(T, { isOpen: p });
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
  const { isOpen: d, className: u } = i, s = "arrow", o = I(
    s,
    { [`${s}--closed`]: !d },
    { [`${s}--open`]: d },
    u
  );
  return /* @__PURE__ */ r(O, { className: o });
};
export {
  F as default
};
