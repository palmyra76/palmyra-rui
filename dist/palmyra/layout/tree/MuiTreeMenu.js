import { jsxs as a, jsx as i, Fragment as l } from "react/jsx-runtime";
import W from "@emotion/styled";
import { useNavigate as A } from "react-router-dom";
import { ChevronRight as D } from "@mui/icons-material";
import { TreeItem as R, TreeView as $ } from "@mui/x-tree-view";
/* empty css                            */import { SimpleIconProvider as F } from "../flexiLayout/IconProvider.js";
import { useState as d, useEffect as G } from "react";
const u = (n) => n.title ? n.title : n.name;
function U(n) {
  const h = n.data, m = n.sidebarWidth, S = n.iconProvider || F, M = A(), [p, x] = d([]), [w, f] = d(null), [c, v] = d(null), y = (t, e) => {
    v(t);
  }, E = () => {
    v(null);
  }, I = (t) => {
    const e = t.path;
    localStorage.setItem("selectedMenuItem", e), f(e), M(e);
  };
  G(() => {
    const t = localStorage.getItem("selectedMenuItem");
    t && f(t);
  }, [h]);
  const T = (t) => {
    if (t.icon)
      return S.getIcon(t.icon);
  }, b = W(R)`
        
    `, L = (t) => {
    const e = { ...p };
    e[t.name] = !e[t.name], setTimeout(() => {
      x(e);
    }, 250);
  }, g = (t, e, o) => {
    const N = w === e.path;
    var r = T(e);
    if (e.name) {
      let C = e.path;
      const j = {
        transform: p[e.name] ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease"
      };
      return e.children ? /* @__PURE__ */ i(
        b,
        {
          nodeId: e.name,
          className: `mui-tree ${N ? "selected" : ""}`,
          label: /* @__PURE__ */ a(l, { children: [
            !m && /* @__PURE__ */ a("div", { className: "mui-tree-menu", children: [
              /* @__PURE__ */ a(
                "div",
                {
                  className: "mui-tree-menu-list",
                  children: [
                    r ? /* @__PURE__ */ i(r, { className: "mui-label-icon" }) : /* @__PURE__ */ i(l, {}),
                    u(e)
                  ]
                }
              ),
              /* @__PURE__ */ i("div", { className: "mui-arrow-icon", children: /* @__PURE__ */ i(D, { style: j }) })
            ] }),
            m && /* @__PURE__ */ i("div", { className: "mui-sidebar-minimize-tree-menu-list", onMouseEnter: (s) => y(e), onMouseLeave: E, children: r ? /* @__PURE__ */ i(r, { className: "mui-sidebar-minimize-label-icon" }) : /* @__PURE__ */ i(l, {}) })
          ] }),
          onClick: () => L(e),
          children: Array.isArray(e.children) ? e.children.filter((s) => s.name).map((s, k) => g(C, s, k)) : null
        },
        o
      ) : /* @__PURE__ */ i(
        b,
        {
          className: `mui-tree ${N ? "selected" : ""}`,
          nodeId: e.name,
          label: /* @__PURE__ */ a("div", { onClick: (s) => {
            I(e);
          }, className: "mui-tree-menu-list", children: [
            !m && /* @__PURE__ */ a(l, { children: [
              r ? /* @__PURE__ */ i(r, { className: "mui-label-icon" }) : /* @__PURE__ */ i(l, {}),
              u(e)
            ] }),
            m && /* @__PURE__ */ i("div", { className: "mui-sidebar-minimize-tree-menu-list", children: r ? /* @__PURE__ */ i(r, { className: "mui-sidebar-minimize-label-icon" }) : /* @__PURE__ */ i(l, {}) })
          ] })
        },
        o
      );
    }
  }, P = () => {
    if (c && c.children)
      return /* @__PURE__ */ i("div", { className: "dropdown-menu", children: c.children.map((t, e) => /* @__PURE__ */ i("div", { className: "dropdown-item", onClick: () => I(t), children: u(t) }, e)) });
  }, z = ((t) => t.filter((e) => e.name).map((e, o) => g(null, e, o)))(h);
  return /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ i(
      $,
      {
        "aria-label": "rich object",
        defaultExpanded: ["Simple Layout Demo"],
        sx: { height: "70vh", flexGrow: 1, maxWidth: 400, overflowY: "auto" },
        children: z
      }
    ),
    /* @__PURE__ */ i("div", { style: { overflow: "auto" }, children: c && P() })
  ] });
}
export {
  U as default
};
