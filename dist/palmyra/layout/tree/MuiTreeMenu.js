import { jsx as t, jsxs as l, Fragment as u } from "react/jsx-runtime";
import T from "@emotion/styled";
import { useNavigate as w } from "react-router-dom";
import { ChevronRight as P } from "@mui/icons-material";
import { TreeItem as j, TreeView as C } from "@mui/x-tree-view";
/* empty css                              */import { SimpleIconProvider as E } from "../flexiLayout/IconProvider.js";
import { useState as M } from "react";
const p = (n) => n.title ? n.title : n.name;
function Y(n) {
  const f = n.data, h = n.iconProvider || E, v = w(), [s, g] = M({}), x = (r) => {
    if (r.icon)
      return h.getIcon(r.icon);
  }, c = T(j)`
              
    `, b = (r) => {
    const e = { ...s };
    e[r.name] = !e[r.name], setTimeout(() => {
      g(e);
    }, 250);
  }, m = (r, e, a) => {
    var i = x(e);
    if (e.name) {
      let d = e.path;
      const I = {
        transform: s[e.name] ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease"
      };
      return e.children ? /* @__PURE__ */ t(
        c,
        {
          nodeId: e.name,
          label: /* @__PURE__ */ l("div", { style: { justifyContent: "space-between", width: "100%", display: "flex" }, children: [
            /* @__PURE__ */ l("div", { className: "tree-menu-list", children: [
              i ? /* @__PURE__ */ t(i, { className: "label-icon" }) : /* @__PURE__ */ t(u, {}),
              p(e)
            ] }),
            /* @__PURE__ */ t("div", { className: "arrow-icon", children: /* @__PURE__ */ t(P, { style: I }) })
          ] }),
          onClick: () => b(e),
          children: Array.isArray(e.children) ? e.children.filter((o) => o.name).map((o, N) => m(d, o, N)) : null
        },
        a
      ) : /* @__PURE__ */ t(
        c,
        {
          nodeId: e.name,
          label: /* @__PURE__ */ l("div", { onClick: (o) => {
            v(d);
          }, className: "tree-menu-list", children: [
            i ? /* @__PURE__ */ t(i, { className: "label-icon" }) : /* @__PURE__ */ t(u, {}),
            p(e)
          ] })
        },
        a
      );
    }
  }, y = ((r) => r.filter((e) => e.name).map((e, a) => m(null, e, a)))(f);
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
