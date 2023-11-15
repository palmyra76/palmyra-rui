import { jsx as i, jsxs as m, Fragment as n } from "react/jsx-runtime";
import P from "@emotion/styled";
import { useNavigate as w } from "react-router-dom";
import { ChevronRight as z } from "@mui/icons-material";
import { TreeItem as E, TreeView as M } from "@mui/x-tree-view";
/* empty css                              */import { SimpleIconProvider as S } from "../flexiLayout/IconProvider.js";
import { useState as j } from "react";
const f = (a) => a.title ? a.title : a.name;
function Y(a) {
  const p = a.data, l = a.sidebarWidth, b = a.iconProvider || S, v = w(), [o, g] = j({}), N = (r) => {
    if (r.icon)
      return b.getIcon(r.icon);
  }, d = P(E)`
              
    `, x = (r) => {
    const e = { ...o };
    e[r.name] = !e[r.name], setTimeout(() => {
      g(e);
    }, 250);
  }, u = (r, e, s) => {
    var t = N(e);
    if (e.name) {
      let h = e.path;
      const T = {
        transform: o[e.name] ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease"
      };
      return e.children ? /* @__PURE__ */ i(
        d,
        {
          nodeId: e.name,
          label: /* @__PURE__ */ m(n, { children: [
            !l && /* @__PURE__ */ m("div", { className: "mui-tree-menu", children: [
              /* @__PURE__ */ m("div", { className: "mui-tree-menu-list", children: [
                t ? /* @__PURE__ */ i(t, { className: "mui-label-icon" }) : /* @__PURE__ */ i(n, {}),
                f(e)
              ] }),
              /* @__PURE__ */ i("div", { className: "mui-arrow-icon", children: /* @__PURE__ */ i(z, { style: T }) })
            ] }),
            l && /* @__PURE__ */ i("div", { className: "mui-sidebar-minimize-tree-menu-list", children: t ? /* @__PURE__ */ i(t, { className: "mui-sidebar-minimize-label-icon" }) : /* @__PURE__ */ i(n, {}) })
          ] }),
          onClick: () => x(e),
          children: Array.isArray(e.children) ? e.children.filter((c) => c.name).map((c, y) => u(h, c, y)) : null
        },
        s
      ) : /* @__PURE__ */ i(
        d,
        {
          nodeId: e.name,
          label: /* @__PURE__ */ m("div", { onClick: (c) => {
            v(h);
          }, className: "mui-tree-menu-list", children: [
            !l && /* @__PURE__ */ m(n, { children: [
              t ? /* @__PURE__ */ i(t, { className: "mui-label-icon" }) : /* @__PURE__ */ i(n, {}),
              f(e)
            ] }),
            l && /* @__PURE__ */ i("div", { className: "mui-sidebar-minimize-tree-menu-list", children: t ? /* @__PURE__ */ i(t, { className: "mui-sidebar-minimize-label-icon" }) : /* @__PURE__ */ i(n, {}) })
          ] })
        },
        s
      );
    }
  }, I = ((r) => r.filter((e) => e.name).map((e, s) => u(null, e, s)))(p);
  return /* @__PURE__ */ i(
    M,
    {
      "aria-label": "rich object",
      defaultExpanded: ["root"],
      sx: { height: "70vh", flexGrow: 1, maxWidth: 400, overflowY: "auto" },
      children: I
    }
  );
}
export {
  Y as default
};
