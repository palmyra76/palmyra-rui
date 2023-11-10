import { jsx as t, jsxs as l, Fragment as a } from "react/jsx-runtime";
import w from "@emotion/styled";
import { useNavigate as P } from "react-router-dom";
import { ChevronRight as j } from "@mui/icons-material";
import { TreeItem as z, TreeView as C } from "@mui/x-tree-view";
/* empty css                              */import { SimpleIconProvider as E } from "../flexiLayout/IconProvider.js";
import { useState as M } from "react";
const f = (n) => n.title ? n.title : n.name;
function Y(n) {
  const p = n.data, s = n.sidebarWidth, b = n.iconProvider || E, v = P(), [m, g] = M({}), N = (i) => {
    if (i.icon)
      return b.getIcon(i.icon);
  }, d = w(z)`
              
    `, x = (i) => {
    const e = { ...m };
    e[i.name] = !e[i.name], setTimeout(() => {
      g(e);
    }, 250);
  }, u = (i, e, o) => {
    var r = N(e);
    if (e.name) {
      let h = e.path;
      const I = {
        transform: m[e.name] ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease"
      };
      return e.children ? /* @__PURE__ */ t(
        d,
        {
          nodeId: e.name,
          label: /* @__PURE__ */ l(a, { children: [
            !s && /* @__PURE__ */ l("div", { style: { justifyContent: "space-between", width: "100%", display: "flex" }, children: [
              /* @__PURE__ */ l("div", { className: "tree-menu-list", children: [
                r ? /* @__PURE__ */ t(r, { className: "label-icon" }) : /* @__PURE__ */ t(a, {}),
                f(e)
              ] }),
              /* @__PURE__ */ t("div", { className: "arrow-icon", children: /* @__PURE__ */ t(j, { style: I }) })
            ] }),
            s && /* @__PURE__ */ t("div", { className: "sidebar-minimize-tree-menu-list", children: r ? /* @__PURE__ */ t(r, { className: "sidebar-minimize-label-icon" }) : /* @__PURE__ */ t(a, {}) })
          ] }),
          onClick: () => x(e),
          children: Array.isArray(e.children) ? e.children.filter((c) => c.name).map((c, T) => u(h, c, T)) : null
        },
        o
      ) : /* @__PURE__ */ t(
        d,
        {
          nodeId: e.name,
          label: /* @__PURE__ */ l("div", { onClick: (c) => {
            v(h);
          }, className: "tree-menu-list", children: [
            !s && /* @__PURE__ */ l(a, { children: [
              r ? /* @__PURE__ */ t(r, { className: "label-icon" }) : /* @__PURE__ */ t(a, {}),
              f(e)
            ] }),
            s && /* @__PURE__ */ t("div", { className: "sidebar-minimize-tree-menu-list", children: r ? /* @__PURE__ */ t(r, { className: "sidebar-minimize-label-icon" }) : /* @__PURE__ */ t(a, {}) })
          ] })
        },
        o
      );
    }
  }, y = ((i) => i.filter((e) => e.name).map((e, o) => u(null, e, o)))(p);
  return /* @__PURE__ */ t(
    C,
    {
      "aria-label": "rich object",
      defaultExpanded: ["root"],
      sx: { height: "70vh", flexGrow: 1, maxWidth: 400, overflowY: "auto" },
      children: y
    }
  );
}
export {
  Y as default
};
