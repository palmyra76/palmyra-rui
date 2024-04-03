import { jsx as r, Fragment as N, jsxs as p } from "react/jsx-runtime";
import { useRef as S, useState as L, useEffect as k } from "react";
import { u as j, A as B, c as M } from "../../../chunks/AsyncTreeMenu.js";
import { a as U } from "../../../chunks/index.esm.js";
import { useNavigate as V } from "react-router-dom";
const E = "palmyra.rui.sidemenu.expanded", v = "palmyra.rui.sidemenu.expanded.selected";
function X(h) {
  const o = V(), g = S(null);
  let u = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [d, y] = L({ data: [u], expandedIds: [], selectedId: [] }), b = h.store, l = S([]), A = (e, n, a) => e.map((s) => (s.id === n && !s.loaded && (s.loaded = !0, s.children = a.filter((i) => n == i.parent).map((i) => i.id)), s)).concat(a), w = (e) => e.split(",").map((a) => parseInt(a)), C = (e, n) => e.map((t) => {
    const s = t.children || "";
    return {
      id: t.id,
      name: t.name,
      parent: t.parent ? t.parent : n,
      children: t.children ? w(t.children) : [],
      isBranch: s.length > 0,
      loaded: !0,
      metadata: {
        code: t.code,
        action: t.action,
        target: t.target
      }
    };
  });
  function x(e) {
    return typeof e == "number" ? e : parseInt(e);
  }
  k(() => {
    b.getRoot().then((e) => {
      var n = C(e.result, -1);
      const a = A(d.data, -1, n), t = (localStorage.getItem(E) || "").split(",");
      l.current = t.map((c) => x(c)).filter((c) => n.some((m) => m.id == c));
      const i = (localStorage.getItem(v) || "").split(",").map((c) => x(c)).filter((c) => n.some((m) => m.id == c));
      y({ data: a, expandedIds: l.current, selectedId: i });
    });
  }, []);
  const O = () => {
    localStorage.setItem(E, l.current.join());
  }, R = (e) => {
    localStorage.setItem(v, e);
  }, T = (e) => {
    var n, a;
    if (!e.isBranch && ((n = e.metadata) != null && n.code)) {
      const t = e.metadata.code;
      o(t);
    } else if ((a = e.metadata) != null && a.target) {
      const t = e.metadata.target;
      o(t);
    }
  };
  return /* @__PURE__ */ r(N, { children: /* @__PURE__ */ p("div", { className: "sidebar-asyn-menu", children: [
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
          const n = e.isExpanded, a = e.element;
          if (n)
            a.id != "" && (l.current.includes(a.id) || l.current.push(a.id));
          else {
            const t = l.current.indexOf(a.id);
            t > -1 && l.current.splice(t, 1);
          }
          O();
        },
        onSelect: (e) => {
          const n = e.isSelected, a = e.element;
          n && !e.isHalfSelected && a.id !== "" && R(a.id);
        },
        propagateSelect: !1,
        togglableSelect: !0,
        multiSelect: !1,
        selectedIds: d.selectedId,
        expandedIds: d.expandedIds,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: e,
          isBranch: n,
          isExpanded: a,
          isSelected: t,
          isHalfSelected: s,
          getNodeProps: i,
          level: c,
          handleSelect: m,
          handleExpand: _
        }) => {
          const D = (f, I) => f && I.children.length === 0 ? /* @__PURE__ */ p(N, { children: [
            /* @__PURE__ */ p(
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
              children: /* @__PURE__ */ p(
                "div",
                {
                  className: t ? "async-tree-menu-selected-list" : "async-tree-menu-list",
                  onClick: (f) => {
                    t || (m(f), T(e));
                  },
                  children: [
                    /* @__PURE__ */ p("div", { className: "async-tree-menu-list-text-container", children: [
                      /* @__PURE__ */ r("div", { className: "menu-icon" }),
                      /* @__PURE__ */ r("span", { className: "menu-name", children: e.name })
                    ] }),
                    /* @__PURE__ */ r("div", { className: "async-tree-menu-list-arrow-container", children: n && D(a, e) })
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
  const { isOpen: o, className: g } = h, u = "arrow", d = M(
    u,
    { [`${u}--closed`]: !o },
    { [`${u}--open`]: o },
    g
  );
  return /* @__PURE__ */ r(U, { className: d });
};
export {
  X as default
};
