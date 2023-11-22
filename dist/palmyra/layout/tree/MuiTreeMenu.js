import { jsx as t, jsxs as s, Fragment as n } from "react/jsx-runtime";
import z from "@emotion/styled";
import { useNavigate as j } from "react-router-dom";
import { ChevronRight as C } from "@mui/icons-material";
import { TreeItem as W, TreeView as k } from "@mui/x-tree-view";
/* empty css                            */import { SimpleIconProvider as A } from "../flexiLayout/IconProvider.js";
import { useState as p, useEffect as L } from "react";
const I = (a) => a.title ? a.title : a.name;
function B(a) {
  const g = a.data, l = a.sidebarWidth, b = a.iconProvider || A, N = j(), [o, v] = p([]), [S, d] = p(null), x = (i) => {
    const e = i.path;
    localStorage.setItem("selectedMenuItem", e), d(e), N(e);
  };
  L(() => {
    const i = localStorage.getItem("selectedMenuItem");
    i && d(i);
  }, []);
  const y = (i) => {
    if (i.icon)
      return b.getIcon(i.icon);
  }, u = z(W)`
              
    `, T = (i) => {
    const e = { ...o };
    e[i.name] = !e[i.name], setTimeout(() => {
      v(e);
    }, 250), localStorage.setItem("expandedNodes", JSON.stringify(e));
  }, h = (i, e, m) => {
    const f = S === e.path;
    var r = y(e);
    if (e.name) {
      let E = e.path;
      const P = {
        transform: o[e.name] ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease"
      };
      return e.children ? /* @__PURE__ */ t(
        u,
        {
          nodeId: e.name,
          className: `mui-tree ${f ? "selected" : ""}`,
          label: /* @__PURE__ */ s(n, { children: [
            !l && /* @__PURE__ */ s("div", { className: "mui-tree-menu", children: [
              /* @__PURE__ */ s(
                "div",
                {
                  className: "mui-tree-menu-list",
                  children: [
                    r ? /* @__PURE__ */ t(r, { className: "mui-label-icon" }) : /* @__PURE__ */ t(n, {}),
                    I(e)
                  ]
                }
              ),
              /* @__PURE__ */ t("div", { className: "mui-arrow-icon", children: /* @__PURE__ */ t(C, { style: P }) })
            ] }),
            l && /* @__PURE__ */ t("div", { className: "mui-sidebar-minimize-tree-menu-list", children: r ? /* @__PURE__ */ t(r, { className: "mui-sidebar-minimize-label-icon" }) : /* @__PURE__ */ t(n, {}) })
          ] }),
          onClick: () => T(e),
          children: Array.isArray(e.children) ? e.children.filter((c) => c.name).map((c, w) => h(E, c, w)) : null
        },
        m
      ) : /* @__PURE__ */ t(
        u,
        {
          className: `mui-tree ${f ? "selected" : ""}`,
          nodeId: e.name,
          label: /* @__PURE__ */ s("div", { onClick: (c) => {
            x(e);
          }, className: "mui-tree-menu-list", children: [
            !l && /* @__PURE__ */ s(n, { children: [
              r ? /* @__PURE__ */ t(r, { className: "mui-label-icon" }) : /* @__PURE__ */ t(n, {}),
              I(e)
            ] }),
            l && /* @__PURE__ */ t("div", { className: "mui-sidebar-minimize-tree-menu-list", children: r ? /* @__PURE__ */ t(r, { className: "mui-sidebar-minimize-label-icon" }) : /* @__PURE__ */ t(n, {}) })
          ] })
        },
        m
      );
    }
  }, M = ((i) => i.filter((e) => e.name).map((e, m) => h(null, e, m)))(g);
  return /* @__PURE__ */ t(
    k,
    {
      "aria-label": "rich object",
      defaultExpanded: ["root"],
      sx: { height: "70vh", flexGrow: 1, maxWidth: 400, overflowY: "auto" },
      children: M
    }
  );
}
export {
  B as default
};
