import { jsx as r, jsxs as d, Fragment as f } from "react/jsx-runtime";
import { List as g, Toolbar as v, Stack as M, Typography as S, IconButton as P, Drawer as n } from "@mui/material";
import { Menu as k } from "@mui/icons-material";
import { useState as p } from "react";
/* empty css                       */import D from "./AsyncTreeMenu.js";
import { PalmyraStoreFactory as N } from "../../store/palmyra/PalmyraStoreFactory.js";
import "axios";
import "../../../chunks/ServerCardLayout.js";
import "../flexiLayout/FlexiLayoutContext.js";
import "../container/SectionContainer.js";
import "../../mui/widget/InfoTooltip.js";
import "react-router-dom";
/* empty css                        */import "@emotion/styled";
import "@mui/x-tree-view";
/* empty css                            */import "../card/CardLayout.js";
import "./AsyncTreeMenuEditor.js";
import "../../utils/pubsub/topic.js";
import "react-chartjs-2";
import "../../chart/chartjs/LineChart.js";
import "../../chart/chartjs/BarChart.js";
import "../../chart/chartjs/PieChart.js";
import "../../chart/chartjs/DoughnutChart.js";
import "../../chart/chartjs/PolarAreaChart.js";
import "../../chart/chartjs/RadarChart.js";
import "../../chart/chartjs/ScatterChart.js";
import "../../chart/chartjs/BubbleChart.js";
import "dayjs";
import "../../mui/form/MuiDatePicker.js";
import "../../mui/form/MuiDateTimePicker.js";
import "../../mui/form/MuiRadioGroup.js";
import "../../mui/form/MuiSelect.js";
import "../../mui/form/MuiTextArea.js";
import "../../mui/form/MuiTextField.js";
import "../../mui/form/MuiCheckBoxGroup.js";
import "../../mui/form/MuiCheckBox.js";
import "../../mui/form/MuiSwitch.js";
import "../../mui/form/MuiIOSSwitch.js";
import "../../mui/form/MuiPassword.js";
import "../../mui/form/MuiNumberField.js";
import "../../mui/form/MuiIntegerField.js";
import "../../form/PalmyraForm.js";
const gr = (i) => {
  let l = document.body;
  const e = i.width, a = i.mobileOpen, c = i.setMobileOpen, s = i.responsive, h = "/acl/editor/menu/list", b = new N({ baseUrl: "/api" }).getTreeStore({}, h), [t, y] = p(!1), [m, u] = p(!1), x = () => {
    u(!m), y(!t);
  }, w = () => {
    c(!a);
  };
  let o = /* @__PURE__ */ r(g, { disablePadding: !0, children: /* @__PURE__ */ d("div", { className: "sidebar", children: [
    /* @__PURE__ */ r("div", { className: "sidebar-header", children: /* @__PURE__ */ r(v, { sx: { marginBottom: "20px" }, children: /* @__PURE__ */ r(
      M,
      {
        sx: { width: "100%" },
        direction: "row",
        position: "relative",
        justifyContent: "center",
        children: /* @__PURE__ */ d(S, { variant: "h6", className: `sidebar-title ${t ? "" : "minimized"}`, children: [
          /* @__PURE__ */ r("div", { children: !s && /* @__PURE__ */ r(
            P,
            {
              color: "default",
              "aria-label": "open drawer",
              edge: "start",
              onClick: x,
              sx: { mr: 0 },
              children: /* @__PURE__ */ r(k, { style: {
                transform: m ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease"
              }, className: "sidebar-title-menu-icon" })
            }
          ) }),
          /* @__PURE__ */ r("div", { children: !t && /* @__PURE__ */ r(f, { children: i.appTitle }) })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ r("div", { className: "sidebar-middle", style: { display: "block" }, children: /* @__PURE__ */ r(D, { store: b }) }),
    /* @__PURE__ */ r("div", { className: "sidebar-footer", style: { display: t ? "none" : "block" }, children: /* @__PURE__ */ r("p", { className: "sidebar-footer-text", children: "Powered by Palmyra" }) })
  ] }) });
  return s ? /* @__PURE__ */ r(
    n,
    {
      container: l,
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
          width: e
        }
      },
      children: o
    }
  ) : t ? /* @__PURE__ */ r(
    n,
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
      children: o
    }
  ) : /* @__PURE__ */ r(
    n,
    {
      variant: "permanent",
      sx: {
        width: e,
        flexShrink: 0,
        transitionProperty: " width",
        transitionDuration: "0.3s",
        "& .MuiDrawer-paper": {
          width: e,
          boxSizing: "border-box",
          borderRight: "0px",
          transitionProperty: " width",
          transitionDuration: "0.3s"
        }
      },
      children: o
    }
  );
};
export {
  gr as AsyncMenuSidebar
};
