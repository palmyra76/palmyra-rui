import { jsx as e, Fragment as h, jsxs as u } from "react/jsx-runtime";
import { useRef as x, useState as f, useEffect as b } from "react";
import { A as O } from "../../../chunks/index.esm2.js";
import { F as T, a as F, b as H, A as I } from "../../../chunks/AsyncTreeCrudDropDown.js";
import { I as M } from "../../../chunks/index.esm3.js";
import { u as B, c as q } from "../../../chunks/AsyncTreeMenu.js";
import { ClickAwayListener as R } from "@mui/material";
function W(c) {
  const t = x(null);
  let d = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [l, i] = f([d]), [g, L] = f([]), v = c.store, N = (n, r, o) => n.map((s) => (s.id === r && (s.loaded = !0, s.children = o.map((p) => p.id)), s)).concat(o), w = (n, r) => n.map((a) => {
    const s = a.children || "";
    return {
      id: a.id,
      name: a.name,
      parent: r,
      children: [],
      isBranch: s.length > 0,
      loaded: !1
    };
  });
  b(() => {
    v.getRoot().then((n) => {
      var r = w(n.result, -1);
      const o = N(l, -1, r);
      i(o);
    });
  }, []);
  const C = ({ element: n }) => {
    const r = n.id;
    return v.getChildren({ parent: r }).then((o) => {
      var a = w(o.result, r);
      const s = N(l, r, a);
      i(s);
    });
  };
  return /* @__PURE__ */ e(h, { children: /* @__PURE__ */ u("div", { children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "visually-hidden",
        ref: t,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ e("div", { className: "checkbox", children: /* @__PURE__ */ e(
      B,
      {
        data: l,
        "aria-label": "Checkbox tree",
        onLoadData: async (n) => {
          const r = n.element.children.length === 0, o = g.find(
            (a) => a.id === n.element.id
          );
          if (n.element.loaded || await C(n), r && !o) {
            const a = t.current;
            L([...g, n.element]), a && (a.innerHTML = `${n.element.name} loaded`), setTimeout(() => {
              a && (a.innerHTML = "");
            }, 5e3);
          }
        },
        multiSelect: !0,
        propagateSelect: !0,
        togglableSelect: !0,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: n,
          isBranch: r,
          isExpanded: o,
          isSelected: a,
          isHalfSelected: s,
          getNodeProps: p,
          level: D,
          handleSelect: S,
          handleExpand: y
        }) => {
          const k = (m, A) => m && A.children.length === 0 ? /* @__PURE__ */ u(h, { children: [
            /* @__PURE__ */ u(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  A.name
                ]
              }
            ),
            /* @__PURE__ */ e(
              O,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ e($, { isOpen: m });
          return /* @__PURE__ */ u(
            "div",
            {
              ...p({ onClick: y }),
              style: { marginLeft: 40 * (D - 1) },
              children: [
                /* @__PURE__ */ e(
                  j,
                  {
                    className: "checkbox-icon",
                    onClick: (m) => {
                      S(m), m.stopPropagation();
                    },
                    variant: s ? "some" : a ? "all" : "none"
                  }
                ),
                /* @__PURE__ */ u("div", { className: "menu-list", children: [
                  /* @__PURE__ */ e("div", { className: "text-icon", children: /* @__PURE__ */ e("span", { className: "menu-name", children: n.name }) }),
                  /* @__PURE__ */ e("div", { children: r ? k(o, n) : /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e(E, { element: n, isSelected: a }) }) })
                ] })
              ]
            }
          );
        }
      }
    ) })
  ] }) });
}
const $ = (c) => {
  const { isOpen: t, className: d } = c, l = "arrow", i = q(
    l,
    { [`${l}--closed`]: !t },
    { [`${l}--open`]: t },
    d
  );
  return /* @__PURE__ */ e(M, { className: i });
}, j = ({ variant: c, ...t }) => {
  switch (c) {
    case "all":
      return /* @__PURE__ */ e(H, { ...t });
    case "none":
      return /* @__PURE__ */ e(F, { ...t });
    case "some":
      return /* @__PURE__ */ e(T, { ...t });
    default:
      return null;
  }
}, E = (c) => {
  const [t, d] = f(!1), l = () => {
    d(!t);
  }, i = () => {
  };
  return /* @__PURE__ */ e(h, { children: /* @__PURE__ */ u("div", { className: "crud-dropdown-container", children: [
    /* @__PURE__ */ e("span", { className: "crud-dropdown-text", onClick: l, children: "crud" }),
    t && /* @__PURE__ */ e(R, { onClickAway: () => {
      d(!1);
    }, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      I,
      {
        isHalfSelected: c.isSelected,
        isSelected: c.isSelected,
        handleSelect: i
      }
    ) }) })
  ] }) });
};
export {
  W as default
};
