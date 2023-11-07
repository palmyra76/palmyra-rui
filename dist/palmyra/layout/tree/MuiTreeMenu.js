import { jsx as t, jsxs as s, Fragment as p } from "react/jsx-runtime";
import w from "@emotion/styled";
import { useNavigate as M } from "react-router-dom";
import { ChevronRight as N } from "@mui/icons-material";
import { TreeItem as C, TreeView as P } from "@mui/x-tree-view";
import { SimpleIconProvider as j } from "../flexiLayout/IconProvider.js";
import { useState as E } from "react";
const u = (n) => n.title ? n.title : n.name;
function W(n) {
  const f = n.data, h = n.iconProvider || j, x = M(), [l, g] = E({}), v = (r) => {
    if (r.icon)
      return h.getIcon(r.icon);
  }, c = w(C)`
        .css-1bcfi89-MuiTreeItem-content .MuiTreeItem-iconContainer {
            dispaly:none;
            width:0px;
            margin:0;
            padding:35px 0px 0px 0px;
            
        }
        .css-1bcfi89-MuiTreeItem-content{
            padding:4px;
        }
    `, I = (r) => {
    const e = { ...l };
    e[r.name] = !e[r.name], setTimeout(() => {
      g(e);
    }, 250);
  }, m = (r, e, i) => {
    var a = v(e);
    if (e.name) {
      let d = e.path;
      const y = {
        transform: l[e.name] ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease"
      };
      return e.children ? /* @__PURE__ */ t(
        c,
        {
          nodeId: e.name,
          label: /* @__PURE__ */ s("div", { style: { justifyContent: "space-between", width: "100%", display: "flex" }, children: [
            /* @__PURE__ */ s("div", { className: "tree-menu-list", children: [
              a ? /* @__PURE__ */ t(a, { className: "label-icon" }) : /* @__PURE__ */ t(p, {}),
              u(e)
            ] }),
            /* @__PURE__ */ t("div", { className: "arrow-icon", children: /* @__PURE__ */ t(N, { style: y }) })
          ] }),
          onClick: () => I(e),
          children: Array.isArray(e.children) ? e.children.filter((o) => o.name).map((o, T) => m(d, o, T)) : null
        },
        i
      ) : /* @__PURE__ */ t(c, { nodeId: e.name, label: /* @__PURE__ */ s("div", { onClick: (o) => {
        x(d);
      }, className: "tree-menu-list", children: [
        a ? /* @__PURE__ */ t(a, { className: "label-icon" }) : /* @__PURE__ */ t(p, {}),
        u(e)
      ] }) }, i);
    }
  }, b = ((r) => r.filter((e) => e.name).map((e, i) => m(null, e, i)))(f);
  return /* @__PURE__ */ t(
    P,
    {
      "aria-label": "rich object",
      defaultExpanded: ["root"],
      sx: { height: "70vh", flexGrow: 1, maxWidth: 400, overflowY: "auto" },
      children: b
    }
  );
}
export {
  W as default
};
