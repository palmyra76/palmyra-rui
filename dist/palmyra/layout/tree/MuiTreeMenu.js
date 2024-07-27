import { jsxs as a, jsx as i, Fragment as l } from "react/jsx-runtime";
import W from "@emotion/styled";
import { useNavigate as A } from "react-router-dom";
import { ChevronRight as D } from "@mui/icons-material";
import { TreeItem as R, SimpleTreeView as $ } from "@mui/x-tree-view";
import { SimpleIconProvider as F } from "../flexiLayout/IconProvider.js";
import { useState as u, useEffect as G } from "react";
import '../../../assets/MuiXTreeMenu.css';/* empty css                           */
const h = (n) => n.title ? n.title : n.name;
function Q(n) {
  const p = n.data, m = n.sidebarWidth, M = n.iconProvider || F, x = A(), [f, w] = u([]), [v, I] = u(null), [c, b] = u(null), y = (t, e) => {
    b(t);
  }, E = () => {
    b(null);
  }, g = (t) => {
    const e = t.path;
    localStorage.setItem("selectedMenuItem", e), I(e), x(e);
  };
  G(() => {
    const t = localStorage.getItem("selectedMenuItem");
    t && I(t);
  }, [p]);
  const T = (t) => {
    if (t.icon)
      return M.getIcon(t.icon);
  }, N = W(R)`
    `, L = (t) => {
    const e = { ...f };
    e[t.name] = !e[t.name], setTimeout(() => {
      w(e);
    }, 250);
  }, S = (t, e, o) => {
    const d = v && v === e.path;
    var r = T(e);
    if (e.name) {
      let C = e.path;
      const j = {
        transform: f[e.name] ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease"
      };
      return e.children ? /* @__PURE__ */ i(
        N,
        {
          itemId: e.name,
          className: `mui-tree ${d ? "selected" : ""}`,
          onSelect: d,
          label: /* @__PURE__ */ a(l, { children: [
            !m && /* @__PURE__ */ a("div", { className: "mui-tree-menu", children: [
              /* @__PURE__ */ a(
                "div",
                {
                  className: "mui-tree-menu-list",
                  children: [
                    r ? /* @__PURE__ */ i(r, { className: "mui-label-icon" }) : /* @__PURE__ */ i(l, {}),
                    h(e)
                  ]
                }
              ),
              /* @__PURE__ */ i("div", { className: "mui-arrow-icon", children: /* @__PURE__ */ i(D, { style: j }) })
            ] }),
            m && /* @__PURE__ */ i("div", { className: "mui-sidebar-minimize-tree-menu-list", onMouseEnter: (s) => y(e), onMouseLeave: E, children: r ? /* @__PURE__ */ i(r, { className: "mui-sidebar-minimize-label-icon" }) : /* @__PURE__ */ i(l, {}) })
          ] }),
          onClick: () => L(e),
          children: Array.isArray(e.children) ? e.children.filter((s) => s.name).map((s, k) => S(C, s, k)) : null
        },
        o
      ) : /* @__PURE__ */ i(
        N,
        {
          className: `mui-tree ${d ? "selected" : ""}`,
          itemId: e.name,
          label: /* @__PURE__ */ a("div", { onClick: (s) => {
            g(e);
          }, className: "mui-tree-menu-list", children: [
            !m && /* @__PURE__ */ a(l, { children: [
              r ? /* @__PURE__ */ i(r, { className: "mui-label-icon" }) : /* @__PURE__ */ i(l, {}),
              h(e)
            ] }),
            m && /* @__PURE__ */ i("div", { className: "mui-sidebar-minimize-tree-menu-list", children: r ? /* @__PURE__ */ i(r, { className: "mui-sidebar-minimize-label-icon" }) : /* @__PURE__ */ i(l, {}) })
          ] })
        },
        o
      );
    }
  }, P = () => {
    if (c && c.children)
      return /* @__PURE__ */ i("div", { className: "dropdown-menu", children: c.children.map((t, e) => /* @__PURE__ */ i("div", { className: "dropdown-item", onClick: () => g(t), children: h(t) }, e)) });
  }, z = ((t) => t.filter((e) => e.name).map((e, o) => S(null, e, o)))(p);
  return /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ i(
      $,
      {
        "aria-label": "rich object",
        defaultExpandedItems: ["Simple Layout Demo"],
        sx: { height: "70vh", flexGrow: 1, maxWidth: 400, overflowY: "auto" },
        children: z
      }
    ),
    /* @__PURE__ */ i("div", { style: { overflow: "auto" }, children: c && P() })
  ] });
}
export {
  Q as default
};
