import { jsx as e, jsxs as l, Fragment as f } from "react/jsx-runtime";
import { List as g, Toolbar as v, Stack as M, Typography as S, IconButton as k, Drawer as o } from "@mui/material";
import { Menu as D } from "@mui/icons-material";
import { useState as c } from "react";
/* empty css                       */import P from "./AsyncTreeMenu.js";
import { u as N } from "../../../chunks/PalmyraStoreFactory.js";
const L = (i) => {
  let m = document.body;
  const t = i.width, a = i.mobileOpen, p = i.setMobileOpen, s = i.responsive, h = "/acl/editor/menu/list", b = new N({ baseUrl: "/api" }).getTreeStore({}, h), [r, u] = c(!1), [d, x] = c(!1), y = () => {
    x(!d), u(!r);
  }, w = () => {
    p(!a);
  };
  let n = /* @__PURE__ */ e(g, { disablePadding: !0, children: /* @__PURE__ */ l("div", { className: "sidebar", children: [
    /* @__PURE__ */ e("div", { className: "sidebar-header", children: /* @__PURE__ */ e(v, { sx: { marginBottom: "20px" }, children: /* @__PURE__ */ e(
      M,
      {
        sx: { width: "100%" },
        direction: "row",
        position: "relative",
        justifyContent: "center",
        children: /* @__PURE__ */ l(S, { variant: "h6", className: `sidebar-title ${r ? "" : "minimized"}`, children: [
          /* @__PURE__ */ e("div", { children: !s && /* @__PURE__ */ e(
            k,
            {
              color: "default",
              "aria-label": "open drawer",
              edge: "start",
              onClick: y,
              sx: { mr: 0 },
              children: /* @__PURE__ */ e(D, { style: {
                transform: d ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease"
              }, className: "sidebar-title-menu-icon" })
            }
          ) }),
          /* @__PURE__ */ e("div", { children: !r && /* @__PURE__ */ e(f, { children: i.appTitle }) })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ e("div", { className: "sidebar-middle", style: { display: "block" }, children: /* @__PURE__ */ e(P, { store: b }) }),
    /* @__PURE__ */ e("div", { className: "sidebar-footer", style: { display: r ? "none" : "block" }, children: /* @__PURE__ */ e("p", { className: "sidebar-footer-text", children: "Powered by Palmyra" }) })
  ] }) });
  return s ? /* @__PURE__ */ e(
    o,
    {
      container: m,
      variant: "temporary",
      open: a,
      onClose: w,
      ModalProps: {
        keepMounted: !0
      },
      sx: {
        display: "block",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: t
        }
      },
      children: n
    }
  ) : r ? /* @__PURE__ */ e(
    o,
    {
      variant: "permanent",
      sx: {
        width: "80px",
        transitionProperty: " width",
        transitionDuration: " 0.3s",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "80px",
          boxSizing: "border-box",
          borderRight: "0px",
          transitionProperty: " width",
          transitionDuration: " 0.3s"
        }
      },
      children: n
    }
  ) : /* @__PURE__ */ e(
    o,
    {
      variant: "permanent",
      sx: {
        width: t,
        flexShrink: 0,
        transitionProperty: " width",
        transitionDuration: "0.3s",
        "& .MuiDrawer-paper": {
          width: t,
          boxSizing: "border-box",
          borderRight: "0px",
          transitionProperty: " width",
          transitionDuration: "0.3s"
        }
      },
      children: n
    }
  );
};
export {
  L as AsyncMenuSidebar
};
