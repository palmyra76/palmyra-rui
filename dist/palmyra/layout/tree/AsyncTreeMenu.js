import { jsx as r, Fragment as N, jsxs as m } from "react/jsx-runtime";
import { useRef as S, useState as L, useEffect as k } from "react";
import { u as j, A as B, c as M } from "../../../chunks/AsyncTreeMenu.js";
import { a as U } from "../../../chunks/index.esm.js";
import { useNavigate as V } from "react-router-dom";
const E = "palmyra.rui.sidemenu.expanded", v = "palmyra.rui.sidemenu.expanded.selected";
function X(h) {
  const p = V(), g = S(null);
  let o = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [d, y] = L({ data: [o], expandedIds: [], selectedId: [] }), b = h.store, l = S([]), A = (e, a, t) => e.map((s) => (s.id === a && !s.loaded && (s.loaded = !0, s.children = t.filter((i) => a == i.parent).map((i) => i.id)), s)).concat(t), w = (e) => e.split(",").map((t) => parseInt(t)), C = (e, a) => e.map((n) => {
    const s = n.children || "";
    return {
      id: n.id,
      name: n.name,
      parent: n.parent ? n.parent : a,
      children: n.children ? w(n.children) : [],
      isBranch: s.length > 0,
      loaded: !0,
      metadata: {
        code: n.code,
        action: n.action
      }
    };
  });
  function x(e) {
    return typeof e == "number" ? e : parseInt(e);
  }
  k(() => {
    b.getRoot().then((e) => {
      var a = C(e.result, -1);
      const t = A(d.data, -1, a), n = (localStorage.getItem(E) || "").split(",");
      l.current = n.map((c) => x(c)).filter((c) => a.some((u) => u.id == c));
      const i = (localStorage.getItem(v) || "").split(",").map((c) => x(c)).filter((c) => a.some((u) => u.id == c));
      y({ data: t, expandedIds: l.current, selectedId: i });
    });
  }, []);
  const O = () => {
    localStorage.setItem(E, l.current.join());
  }, R = (e) => {
    localStorage.setItem(v, e);
  }, T = (e) => {
    var a;
    if (!e.isBranch && ((a = e.metadata) != null && a.code)) {
      const t = e.metadata.code;
      p(t);
    }
  };
  return /* @__PURE__ */ r(N, { children: /* @__PURE__ */ m("div", { className: "sidebar-asyn-menu", children: [
    /* @__PURE__ */ r(
      "div",
      {
        className: "visually-hidden",
        ref: g,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ r("div", { className: "checkbox", children: /* @__PURE__ */ r(
      j,
      {
        className: "async-tree-menu-container",
        data: d.data,
        "aria-label": "Checkbox tree",
        onExpand: (e) => {
          const a = e.isExpanded, t = e.element;
          if (a)
            t.id != "" && (l.current.includes(t.id) || l.current.push(t.id));
          else {
            const n = l.current.indexOf(t.id);
            n > -1 && l.current.splice(n, 1);
          }
          O();
        },
        onSelect: (e) => {
          const a = e.isSelected, t = e.element;
          a && !e.isHalfSelected && t.id !== "" && R(t.id);
        },
        propagateSelect: !1,
        togglableSelect: !0,
        multiSelect: !1,
        selectedIds: d.selectedId,
        expandedIds: d.expandedIds,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: e,
          isBranch: a,
          isExpanded: t,
          isSelected: n,
          isHalfSelected: s,
          getNodeProps: i,
          level: c,
          handleSelect: u,
          handleExpand: _
        }) => {
          const D = (f, I) => f && I.children.length === 0 ? /* @__PURE__ */ m(N, { children: [
            /* @__PURE__ */ m(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  I.name
                ]
              }
            ),
            /* @__PURE__ */ r(
              B,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ r(F, { isOpen: f });
          return /* @__PURE__ */ r(
            "div",
            {
              ...i({ onClick: _ }),
              style: { marginLeft: 5 * (c - 1) },
              children: /* @__PURE__ */ m(
                "div",
                {
                  className: n ? "async-tree-menu-selected-list" : "async-tree-menu-list",
                  onClick: (f) => {
                    n || (u(f), T(e));
                  },
                  children: [
                    /* @__PURE__ */ m("div", { className: "async-tree-menu-list-text-container", children: [
                      /* @__PURE__ */ r("div", { className: "menu-icon" }),
                      /* @__PURE__ */ r("span", { className: "menu-name", children: e.name })
                    ] }),
                    /* @__PURE__ */ r("div", { className: "async-tree-menu-list-arrow-container", children: a && D(t, e) })
                  ]
                }
              )
            }
          );
        }
      }
    ) })
  ] }) });
}
const F = (h) => {
  const { isOpen: p, className: g } = h, o = "arrow", d = M(
    o,
    { [`${o}--closed`]: !p },
    { [`${o}--open`]: p },
    g
  );
  return /* @__PURE__ */ r(U, { className: d });
};
export {
  X as default
};
