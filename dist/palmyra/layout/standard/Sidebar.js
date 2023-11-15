import "../../../assets/Sidebar.css";
import { jsx as e, jsxs as l, Fragment as y } from "react/jsx-runtime";
import { List as f, Toolbar as g, Stack as v, Typography as M, IconButton as S, Drawer as o } from "@mui/material";
import { Menu as k } from "@mui/icons-material";
import { useState as c } from "react";
const T = (r) => {
  let h = document.body;
  const t = r.width, a = r.mobileOpen, b = r.setMobileOpen, s = r.responsive, m = r.SideMenu, [i, p] = c(!1), [d, u] = c(!1), x = () => {
    u(!d), p(!i);
  }, w = () => {
    b(!a);
  };
  let n = /* @__PURE__ */ e(f, { disablePadding: !0, children: /* @__PURE__ */ l("div", { className: "sidebar", children: [
    /* @__PURE__ */ e("div", { className: "sidebar-header", children: /* @__PURE__ */ e(g, { sx: { marginBottom: "20px" }, children: /* @__PURE__ */ e(
      v,
      {
        sx: { width: "100%" },
        direction: "row",
        position: "relative",
        justifyContent: "center",
        children: /* @__PURE__ */ l(M, { variant: "h6", className: `sidebar-title ${i ? "" : "minimized"}`, children: [
          /* @__PURE__ */ e("div", { children: !s && /* @__PURE__ */ e(
            S,
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
          /* @__PURE__ */ e("div", { children: !i && /* @__PURE__ */ e(y, { children: r.appTitle }) })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ e("div", { className: "sidebar-middle", style: { display: "block" }, children: /* @__PURE__ */ e(m, { sidebarWidth: i }) }),
    /* @__PURE__ */ e("div", { className: "sidebar-footer", style: { display: i ? "none" : "block" }, children: /* @__PURE__ */ e("p", { className: "sidebar-footer-text", children: "Powered by Palmyra" }) })
  ] }) });
  return s ? /* @__PURE__ */ e(
    o,
    {
      container: h,
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
  ) : i ? /* @__PURE__ */ e(
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
  T as Sidebar
};
