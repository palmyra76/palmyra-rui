import { jsx as t } from "react/jsx-runtime";
import p from "@emotion/styled";
import { useNavigate as s } from "react-router-dom";
import { ExpandMore as d, ChevronRight as x } from "@mui/icons-material";
import { TreeItem as I, TreeView as T } from "@mui/x-tree-view";
const u = (r) => r.title ? r.title : r.name;
function w({ appRoutes: r }) {
  const c = s(), i = p(I)`
    .MuiTreeItem-iconContainer {
        
      }
    `, o = (n, e, a) => {
    if (e.name) {
      let m = n ? n + "/" + e.path : e.path;
      return e.children ? /* @__PURE__ */ t(i, { nodeId: e.name, label: u(e), children: Array.isArray(e.children) ? e.children.filter((l) => l.name).map((l, h) => o(m, l, h)) : null }, a) : /* @__PURE__ */ t(
        i,
        {
          nodeId: e.name,
          label: u(e),
          onClick: (l) => {
            c(m);
          }
        },
        a
      );
    }
  }, f = ((n) => n.filter((e) => e.name).map((e, a) => o(null, e, a)))(r);
  return /* @__PURE__ */ t(
    T,
    {
      "aria-label": "rich object",
      defaultCollapseIcon: /* @__PURE__ */ t(d, {}),
      defaultExpanded: ["root"],
      defaultExpandIcon: /* @__PURE__ */ t(x, {}),
      sx: { height: "70vh", flexGrow: 1, maxWidth: 400, overflowY: "auto" },
      children: f
    }
  );
}
export {
  w as default
};
