import { jsx as e, jsxs as l, Fragment as w } from "react/jsx-runtime";
import { List as f, Toolbar as g, Stack as v, Typography as M, IconButton as S, Drawer as o } from "@mui/material";
import { Menu as P } from "@mui/icons-material";
import { useState as c } from "react";
import '../../../assets/Sidebar.css';/* empty css                      */
import k from "./AsyncTreeMenu.js";
import { PalmyraStoreFactory as D } from "@palmyralabs/palmyra-wire";
const F = (t) => {
  let m = document.body;
  const i = t.width, a = t.mobileOpen, p = t.setMobileOpen, s = t.responsive, h = new D({ baseUrl: "/api" }).getTreeStore({}, "/acl/editor/menu/list"), [r, b] = c(!1), [d, y] = c(!1), u = () => {
    y(!d), b(!r);
  }, x = () => {
    p(!a);
  };
  let n = /* @__PURE__ */ e(f, { disablePadding: !0, children: /* @__PURE__ */ l("div", { className: "sidebar", children: [
    /* @__PURE__ */ e("div", { className: "sidebar-header", children: /* @__PURE__ */ e(g, { sx: { marginBottom: "20px" }, children: /* @__PURE__ */ e(
      v,
      {
        sx: { width: "100%" },
        direction: "row",
        position: "relative",
        justifyContent: "center",
        children: /* @__PURE__ */ l(M, { variant: "h6", className: `sidebar-title ${r ? "" : "minimized"}`, children: [
          /* @__PURE__ */ e("div", { children: !s && /* @__PURE__ */ e(
            S,
            {
              color: "default",
              "aria-label": "open drawer",
              edge: "start",
              onClick: u,
              sx: { mr: 0 },
              children: /* @__PURE__ */ e(P, { style: {
                transform: d ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease"
              }, className: "sidebar-title-menu-icon" })
            }
          ) }),
          /* @__PURE__ */ e("div", { children: !r && /* @__PURE__ */ e(w, { children: t.appTitle }) })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ e("div", { className: "sidebar-middle", style: { display: "block" }, children: /* @__PURE__ */ e(k, { store: h }) }),
    /* @__PURE__ */ e("div", { className: "sidebar-footer", style: { display: r ? "none" : "block" }, children: /* @__PURE__ */ e("p", { className: "sidebar-footer-text", children: "Powered by Palmyra" }) })
  ] }) });
  return s ? /* @__PURE__ */ e(
    o,
    {
      container: m,
      variant: "temporary",
      open: a,
      onClose: x,
      ModalProps: {
        keepMounted: !0
      },
      sx: {
        display: "block",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: i
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
        width: i,
        flexShrink: 0,
        transitionProperty: " width",
        transitionDuration: "0.3s",
        "& .MuiDrawer-paper": {
          width: i,
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
  F as AsyncMenuSidebar
};
