import { jsx as e, jsxs as l, Fragment as f } from "react/jsx-runtime";
import { List as g, Toolbar as v, Stack as M, Typography as S, IconButton as P, Drawer as o } from "@mui/material";
import { Menu as k } from "@mui/icons-material";
import { useState as c } from "react";
/* empty css                       */import D from "./AsyncTreeMenu.js";
import { PalmyraStoreFactory as N } from "../../store/palmyra/PalmyraStoreFactory.js";
const F = (t) => {
  let m = document.body;
  const i = t.width, a = t.mobileOpen, p = t.setMobileOpen, s = t.responsive, h = "/acl/editor/menu/list", b = new N({ baseUrl: "/api" }).getTreeStore({}, h), [r, y] = c(!1), [d, u] = c(!1), x = () => {
    u(!d), y(!r);
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
            P,
            {
              color: "default",
              "aria-label": "open drawer",
              edge: "start",
              onClick: x,
              sx: { mr: 0 },
              children: /* @__PURE__ */ e(k, { style: {
                transform: d ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease"
              }, className: "sidebar-title-menu-icon" })
            }
          ) }),
          /* @__PURE__ */ e("div", { children: !r && /* @__PURE__ */ e(f, { children: t.appTitle }) })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ e("div", { className: "sidebar-middle", style: { display: "block" }, children: /* @__PURE__ */ e(D, { store: b }) }),
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
