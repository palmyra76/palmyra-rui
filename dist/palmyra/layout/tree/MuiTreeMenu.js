import { jsx as t, jsxs as s, Fragment as d } from "react/jsx-runtime";
import v from "@emotion/styled";
import { useNavigate as y } from "react-router-dom";
import { ChevronRight as T } from "@mui/icons-material";
import { TreeItem as w, TreeView as M } from "@mui/x-tree-view";
import { getIcon as N } from "../flexiLayout/IconProvider.js";
import { useState as C } from "react";
const u = (r) => r.title ? r.title : r.name, j = (r) => {
  if (r.icon)
    return N(r.icon);
};
function R({ appRoutes: r }) {
  const f = y(), [o, h] = C({}), c = v(w)`
        .css-1bcfi89-MuiTreeItem-content .MuiTreeItem-iconContainer {
            dispaly:none;
            width:0px;
            margin:0;
            padding:35px 0px 0px 0px;
            
        }
        .css-1bcfi89-MuiTreeItem-content{
            padding:4px;
        }
    `, x = (n) => {
    const e = { ...o };
    e[n.name] = !e[n.name], setTimeout(() => {
      h(e);
    }, 250);
  }, m = (n, e, i) => {
    var a = j(e);
    if (e.name) {
      let p = n ? n + "/" + e.path : e.path;
      const b = {
        transform: o[e.name] ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease"
      };
      return e.children ? /* @__PURE__ */ t(
        c,
        {
          nodeId: e.name,
          label: /* @__PURE__ */ s("div", { style: { justifyContent: "space-between", width: "100%", display: "flex" }, children: [
            /* @__PURE__ */ s("div", { className: "tree-menu-list", children: [
              a ? /* @__PURE__ */ t(a, { className: "label-icon" }) : /* @__PURE__ */ t(d, {}),
              u(e)
            ] }),
            /* @__PURE__ */ t("div", { className: "arrow-icon", children: /* @__PURE__ */ t(T, { style: b }) })
          ] }),
          onClick: () => x(e),
          children: Array.isArray(e.children) ? e.children.filter((l) => l.name).map((l, I) => m(p, l, I)) : null
        },
        i
      ) : /* @__PURE__ */ t(c, { nodeId: e.name, label: /* @__PURE__ */ s("div", { onClick: (l) => {
        f(p);
      }, className: "tree-menu-list", children: [
        a ? /* @__PURE__ */ t(a, { className: "label-icon" }) : /* @__PURE__ */ t(d, {}),
        u(e)
      ] }) }, i);
    }
  }, g = ((n) => n.filter((e) => e.name).map((e, i) => m(null, e, i)))(r);
  return /* @__PURE__ */ t(
    M,
    {
      "aria-label": "rich object",
      defaultExpanded: ["root"],
      sx: { height: "70vh", flexGrow: 1, maxWidth: 400, overflowY: "auto" },
      children: g
    }
  );
}
export {
  R as default
};
