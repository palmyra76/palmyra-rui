import { jsx as s, Fragment as g, jsxs as o } from "react/jsx-runtime";
import { useRef as x, useState as k, useEffect as D } from "react";
import { u as L, A as T, c as j } from "../../../chunks/AsyncTreeMenu.js";
import { a as B } from "../../../chunks/index.esm.js";
import { useNavigate as _ } from "react-router-dom";
const N = "palmyra.rui.sidemenu.expanded";
function V(m) {
  const u = _(), p = x(null);
  let d = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [l, v] = k({ data: [d], expandedIds: [] }), I = m.store, c = x([]), y = (e, n, a) => e.map((r) => (r.id === n && !r.loaded && (r.loaded = !0, r.children = a.filter((i) => n == i.parent).map((i) => i.id)), r)).concat(a), E = (e) => e.split(",").map((a) => parseInt(a)), S = (e, n) => e.map((t) => {
    const r = t.children || "";
    return {
      id: t.id,
      name: t.name,
      parent: t.parent ? t.parent : n,
      children: t.children ? E(t.children) : [],
      isBranch: r.length > 0,
      loaded: !0,
      metadata: {
        code: t.code,
        action: t.action
      }
    };
  });
  function b(e) {
    return typeof e == "number" ? e : parseInt(e);
  }
  D(() => {
    I.getRoot().then((e) => {
      var n = S(e.result, -1);
      const a = y(l.data, -1, n), t = (localStorage.getItem(N) || "").split(",");
      c.current = t.map((r) => b(r)).filter((r) => n.some((i) => i.id == r)), v({ data: a, expandedIds: c.current });
    });
  }, []);
  const A = () => {
    localStorage.setItem(N, c.current.join());
  }, w = (e) => {
    var n;
    if (!e.isBranch && ((n = e.metadata) != null && n.code)) {
      const a = e.metadata.code;
      u(a);
    }
  };
  return /* @__PURE__ */ s(g, { children: /* @__PURE__ */ o("div", { className: "sidebar-asyn-menu", children: [
    /* @__PURE__ */ s(
      "div",
      {
        className: "visually-hidden",
        ref: p,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ s("div", { className: "checkbox", children: /* @__PURE__ */ s(
      L,
      {
        className: "async-tree-menu-container",
        data: l.data,
        "aria-label": "Checkbox tree",
        onExpand: (e) => {
          const n = e.isExpanded, a = e.element;
          if (n)
            a.id != "" && (c.current.includes(a.id) || c.current.push(a.id));
          else {
            const t = c.current.indexOf(a.id);
            t > -1 && c.current.splice(t, 1);
          }
          A();
        },
        propagateSelect: !0,
        togglableSelect: !0,
        expandedIds: l.expandedIds,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: e,
          isBranch: n,
          isExpanded: a,
          isSelected: t,
          isHalfSelected: r,
          getNodeProps: i,
          level: C,
          handleSelect: M,
          handleExpand: O
        }) => {
          const R = (h, f) => h && f.children.length === 0 ? /* @__PURE__ */ o(g, { children: [
            /* @__PURE__ */ o(
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
            /* @__PURE__ */ s(
              T,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ s(F, { isOpen: h });
          return /* @__PURE__ */ s(
            "div",
            {
              ...i({ onClick: O }),
              style: { marginLeft: 5 * (C - 1) },
              children: /* @__PURE__ */ o("div", { className: "async-tree-menu-list", onClick: () => w(e), children: [
                /* @__PURE__ */ o("div", { className: "async-tree-menu-list-text-container", children: [
                  /* @__PURE__ */ s("div", { className: "menu-icon" }),
                  /* @__PURE__ */ s("span", { className: "menu-name", children: e.name })
                ] }),
                /* @__PURE__ */ s("div", { className: "async-tree-menu-list-arrow-container", children: n && R(a, e) })
              ] })
            }
          );
        }
      }
    ) })
  ] }) });
}
const F = (m) => {
  const { isOpen: u, className: p } = m, d = "arrow", l = j(
    d,
    { [`${d}--closed`]: !u },
    { [`${d}--open`]: u },
    p
  );
  return /* @__PURE__ */ s(B, { className: l });
};
export {
  V as default
};
