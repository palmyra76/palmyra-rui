import { jsx as e, Fragment as p, jsxs as d } from "react/jsx-runtime";
import { useRef as I, useState as f, useEffect as D } from "react";
import { A as F } from "../../../chunks/index.esm2.js";
import { F as L, a as O, b as B, A as q } from "../../../chunks/AsyncTreeCrudDropDown.js";
import { I as M } from "../../../chunks/index.esm3.js";
import { u as R, c as T } from "../../../chunks/AsyncTreeMenu.js";
import { Button as j, ClickAwayListener as E } from "@mui/material";
function Y(c) {
  const s = I(null);
  let i = { name: "", id: -1, parent: null, children: [], isBranch: !0, loaded: !1, selected: 0 };
  const [l, u] = f([i]), [v, b] = f([]), w = c.store, N = (a, r, n) => a.map((o) => (o.id === r && !o.loaded && (o.loaded = !0, o.children = n.filter((m) => r == m.parent).map((m) => m.id)), o)).concat(n), C = (a) => a.split(",").map((n) => parseInt(n)), k = (a, r) => a.map((t) => {
    const o = t.children || "";
    return {
      id: t.id,
      name: t.name,
      parent: t.parent ? t.parent : r,
      children: t.children ? C(t.children) : [],
      isBranch: o.length > 0,
      loaded: !0
    };
  });
  return D(() => {
    w.getRoot().then((a) => {
      var r = k(a.result, -1);
      const n = N(l, -1, r);
      u(n), b([5, 7]);
    });
  }, []), /* @__PURE__ */ e(p, { children: /* @__PURE__ */ d("div", { children: [
    /* @__PURE__ */ e(j, { onClick: () => {
      const a = l.filter((r) => {
        var n;
        return (
          //@ts-ignore
          r.id > 0 && ((n = r.metadata) == null ? void 0 : n.selected) != null
        );
      }).map((r) => {
        var t;
        const n = r.parent > 0 ? r.parent : null;
        return {
          id: r.id,
          parent: n,
          name: r.name,
          selected: (t = r.metadata) == null ? void 0 : t.selected
        };
      });
      console.log(a);
    }, children: "ellosdf" }),
    /* @__PURE__ */ e(
      "div",
      {
        className: "visually-hidden",
        ref: s,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ e("div", { className: "checkbox", children: /* @__PURE__ */ e(
      R,
      {
        data: l,
        selectedIds: v,
        "aria-label": "Checkbox tree",
        multiSelect: !0,
        propagateSelect: !0,
        togglableSelect: !0,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: a,
          isBranch: r,
          isExpanded: n,
          isSelected: t,
          isHalfSelected: o,
          getNodeProps: m,
          level: G,
          handleSelect: S,
          handleExpand: x
        }) => {
          const A = o ? 1 : t ? 2 : 0;
          a.metadata = { selected: A };
          const y = (h, g) => h && g.children.length === 0 ? /* @__PURE__ */ d(p, { children: [
            /* @__PURE__ */ d(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  g.name
                ]
              }
            ),
            /* @__PURE__ */ e(
              F,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ e($, { isOpen: h });
          return /* @__PURE__ */ d(
            "div",
            {
              ...m({ onClick: x }),
              children: [
                /* @__PURE__ */ e(
                  P,
                  {
                    className: "checkbox-icon",
                    onClick: (h) => {
                      S(h), h.stopPropagation();
                    },
                    variant: o ? "some" : t ? "all" : "none"
                  }
                ),
                /* @__PURE__ */ d("div", { className: "menu-list", children: [
                  /* @__PURE__ */ e("div", { className: "text-icon", children: /* @__PURE__ */ e("span", { className: "menu-name", children: a.name }) }),
                  /* @__PURE__ */ e("div", { children: r ? y(n, a) : /* @__PURE__ */ e(p, { children: /* @__PURE__ */ e(U, { element: a, isSelected: t }) }) })
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
  const { isOpen: s, className: i } = c, l = "arrow", u = T(
    l,
    { [`${l}--closed`]: !s },
    { [`${l}--open`]: s },
    i
  );
  return /* @__PURE__ */ e(M, { className: u });
}, P = ({ variant: c, ...s }) => {
  switch (c) {
    case "all":
      return /* @__PURE__ */ e(B, { style: { color: "rgb(44, 134, 213)", backgroundColor: "white" }, ...s });
    case "none":
      return /* @__PURE__ */ e(O, { style: { color: "white", border: "1px solid rgba(128, 128,128, 0.2)" }, ...s });
    case "some":
      return /* @__PURE__ */ e(L, { style: { color: "rgb(44, 134, 213)", backgroundColor: "white" }, ...s });
    default:
      return null;
  }
}, U = (c) => {
  const [s, i] = f(!1), l = () => {
    i(!s);
  }, u = () => {
  };
  return /* @__PURE__ */ e(p, { children: /* @__PURE__ */ d("div", { className: "crud-dropdown-container", children: [
    /* @__PURE__ */ e("span", { className: "crud-dropdown-text", onClick: l, children: "crud" }),
    s && /* @__PURE__ */ e(E, { onClickAway: () => {
      i(!1);
    }, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      q,
      {
        isHalfSelected: c.isSelected,
        isSelected: c.isSelected,
        handleSelect: u
      }
    ) }) })
  ] }) });
};
export {
  Y as default
};
