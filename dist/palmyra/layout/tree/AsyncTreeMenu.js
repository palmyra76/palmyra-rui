import { jsx as n, Fragment as v, jsxs as l } from "react/jsx-runtime";
import { useRef as I, useState as C, useEffect as k } from "react";
import { A as L } from "../../../chunks/index.esm2.js";
import { a as B } from "../../../chunks/index.esm3.js";
import { u as O, c as R } from "../../../chunks/AsyncTreeMenu.js";
import { useNavigate as T } from "react-router-dom";
function q(u) {
  const o = T(), m = I(null);
  let c = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [d, f] = C([c]), g = u.store, N = (e, a, t) => e.map((s) => (s.id === a && !s.loaded && (s.loaded = !0, s.children = t.filter((i) => a == i.parent).map((i) => i.id)), s)).concat(t), y = (e) => e.split(",").map((t) => parseInt(t)), S = (e, a) => e.map((r) => {
    const s = r.children || "";
    return {
      id: r.id,
      name: r.name,
      parent: r.parent ? r.parent : a,
      children: r.children ? y(r.children) : [],
      isBranch: s.length > 0,
      loaded: !0,
      metadata: {
        code: r.code,
        action: r.action
      }
    };
  });
  k(() => {
    g.getRoot().then((e) => {
      var a = S(e.result, -1);
      const t = N(d, -1, a);
      f(t);
    });
  }, []);
  const b = (e) => {
    var a;
    if (!e.isBranch && ((a = e.metadata) != null && a.code)) {
      const t = e.metadata.code;
      o(t);
    }
  };
  return /* @__PURE__ */ n(v, { children: /* @__PURE__ */ l("div", { className: "sidebar-asyn-menu", children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: "visually-hidden",
        ref: m,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ n("div", { className: "checkbox", children: /* @__PURE__ */ n(
      O,
      {
        className: "async-tree-menu-container",
        data: d,
        "aria-label": "Checkbox tree",
        multiSelect: !0,
        propagateSelect: !0,
        togglableSelect: !0,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: e,
          isBranch: a,
          isExpanded: t,
          isSelected: r,
          isHalfSelected: s,
          getNodeProps: i,
          level: w,
          handleSelect: D,
          handleExpand: x
        }) => {
          const A = (h, p) => h && p.children.length === 0 ? /* @__PURE__ */ l(v, { children: [
            /* @__PURE__ */ l(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  p.name
                ]
              }
            ),
            /* @__PURE__ */ n(
              L,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ n(j, { isOpen: h });
          return /* @__PURE__ */ n(
            "div",
            {
              ...i({ onClick: x }),
              style: { marginLeft: 5 * (w - 1) },
              children: /* @__PURE__ */ l("div", { className: "async-tree-menu-list", onClick: () => b(e), children: [
                /* @__PURE__ */ l("div", { className: "async-tree-menu-list-text-container", children: [
                  /* @__PURE__ */ n("div", { className: "menu-icon" }),
                  /* @__PURE__ */ n("span", { className: "menu-name", children: e.name })
                ] }),
                /* @__PURE__ */ n("div", { className: "async-tree-menu-list-arrow-container", children: a && A(t, e) })
              ] })
            }
          );
        }
      }
    ) })
  ] }) });
}
const j = (u) => {
  const { isOpen: o, className: m } = u, c = "arrow", d = R(
    c,
    { [`${c}--closed`]: !o },
    { [`${c}--open`]: o },
    m
  );
  return /* @__PURE__ */ n(B, { className: d });
};
export {
  q as default
};
