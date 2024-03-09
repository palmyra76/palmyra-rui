import { jsx as r, Fragment as g, jsxs as h } from "react/jsx-runtime";
import { forwardRef as T, useRef as b, useState as v, useImperativeHandle as M, useEffect as q } from "react";
import { A as B } from "../../../chunks/index.esm2.js";
import { F as j, a as P, b as V, A as $ } from "../../../chunks/AsyncTreeCrudDropDown.js";
import { I as H } from "../../../chunks/index.esm3.js";
import { u as U, c as z } from "../../../chunks/AsyncTreeMenu.js";
import { ClickAwayListener as G } from "@mui/material";
const te = T(function(o, d) {
  const l = o.groupId, m = b(null), I = d || b(null);
  let k = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [p, S] = v([k]), [w, y] = v([]), A = o.storeFactory.getTreeStore({ groupId: l }, o.endPoint);
  M(I, () => ({
    getValue() {
      return F();
    }
  }), [l, p, w]);
  const x = (t, c, e) => t.map((n) => (n.id === c && !n.loaded && (n.loaded = !0, n.children = e.filter((s) => c == s.parent).map((s) => s.id)), n)).concat(e), D = (t) => t.split(",").map((e) => parseInt(e)), E = (t, c) => t.map((a) => {
    const n = a.children || "";
    return {
      id: a.id,
      name: a.name,
      parent: a.parent ? a.parent : c,
      children: a.children ? D(a.children) : [],
      isBranch: n.length > 0,
      loaded: !0,
      metadata: { menuCode: a.code }
    };
  });
  q(() => {
    A.getRoot().then((t) => {
      var c = E(t.result, -1);
      const e = x(p, -1, c);
      S(e), y([5, 7]);
    });
  }, [l]);
  const F = () => {
    const t = {}, c = {
      name: "root",
      children: [],
      id: -1
    };
    return p.forEach((e) => {
      var n, s, u;
      if (((n = e.metadata) == null ? void 0 : n.selected) == null)
        return;
      const a = e.parent > 0 ? e.parent : null;
      t[e.id] = {
        menuId: e.id,
        parent: a,
        name: e.name,
        mask: (s = e.metadata) == null ? void 0 : s.selected,
        menuCode: (u = e.metadata) == null ? void 0 : u.menuCode,
        children: []
      }, a == null && e.id > 0 && c.children.push(t[e.id]);
    }), p.forEach((e) => {
      const a = e.id, n = t[a];
      n && e.children && e.children.forEach((s) => {
        const u = t[s];
        u && n.children.push(u);
      });
    }), c;
  };
  return /* @__PURE__ */ r(g, { children: /* @__PURE__ */ h("div", { children: [
    /* @__PURE__ */ r(
      "div",
      {
        className: "visually-hidden",
        ref: m,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ r("div", { className: "checkbox", children: /* @__PURE__ */ r(
      U,
      {
        data: p,
        selectedIds: w,
        "aria-label": "Checkbox tree",
        multiSelect: !0,
        propagateSelect: !0,
        togglableSelect: !0,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: t,
          isBranch: c,
          isExpanded: e,
          isSelected: a,
          isHalfSelected: n,
          getNodeProps: s,
          level: u,
          handleSelect: L,
          handleExpand: O
        }) => {
          const N = n ? 1 : a ? 2 : 0;
          console.log(t), t.metadata ? t.metadata.selected = N : t.metadata = { selected: N };
          const R = (f, C) => f && C.children.length === 0 ? /* @__PURE__ */ h(g, { children: [
            /* @__PURE__ */ h(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  C.name
                ]
              }
            ),
            /* @__PURE__ */ r(
              B,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ r(J, { isOpen: f });
          return /* @__PURE__ */ h(
            "div",
            {
              ...s({ onClick: O }),
              children: [
                /* @__PURE__ */ r(
                  K,
                  {
                    className: "checkbox-icon",
                    onClick: (f) => {
                      L(f), f.stopPropagation();
                    },
                    variant: n ? "some" : a ? "all" : "none"
                  }
                ),
                /* @__PURE__ */ h("div", { className: "menu-list", children: [
                  /* @__PURE__ */ r("div", { className: "text-icon", children: /* @__PURE__ */ r("span", { className: "menu-name", children: t.name }) }),
                  /* @__PURE__ */ r("div", { children: c ? R(e, t) : /* @__PURE__ */ r(g, { children: /* @__PURE__ */ r(Q, { element: t, isSelected: a }) }) })
                ] })
              ]
            }
          );
        }
      }
    ) })
  ] }) });
}), J = (i) => {
  const { isOpen: o, className: d } = i, l = "arrow", m = z(
    l,
    { [`${l}--closed`]: !o },
    { [`${l}--open`]: o },
    d
  );
  return /* @__PURE__ */ r(H, { className: m });
}, K = ({ variant: i, ...o }) => {
  switch (i) {
    case "all":
      return /* @__PURE__ */ r(V, { style: { color: "rgb(44, 134, 213)", backgroundColor: "white" }, ...o });
    case "none":
      return /* @__PURE__ */ r(P, { style: { color: "white", border: "1px solid rgba(128, 128,128, 0.2)" }, ...o });
    case "some":
      return /* @__PURE__ */ r(j, { style: { color: "rgb(44, 134, 213)", backgroundColor: "white" }, ...o });
    default:
      return null;
  }
}, Q = (i) => {
  const [o, d] = v(!1), l = () => {
    d(!o);
  }, m = () => {
  };
  return /* @__PURE__ */ r(g, { children: /* @__PURE__ */ h("div", { className: "crud-dropdown-container", children: [
    /* @__PURE__ */ r("span", { className: "crud-dropdown-text", onClick: l, children: "crud" }),
    o && /* @__PURE__ */ r(G, { onClickAway: () => {
      d(!1);
    }, children: /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
      $,
      {
        isHalfSelected: i.isSelected,
        isSelected: i.isSelected,
        handleSelect: m
      }
    ) }) })
  ] }) });
};
export {
  te as default
};
