import { jsx as r, Fragment as f, jsxs as u } from "react/jsx-runtime";
import { forwardRef as T, useRef as b, useState as v, useImperativeHandle as M, useEffect as q } from "react";
import { A as B } from "../../../chunks/index.esm2.js";
import { F as j, a as P, b as V, A as $ } from "../../../chunks/AsyncTreeCrudDropDown.js";
import { I as H } from "../../../chunks/index.esm3.js";
import { u as U, c as z } from "../../../chunks/AsyncTreeMenu.js";
import { ClickAwayListener as G } from "@mui/material";
const te = T(function(o, d) {
  const l = o.groupId, h = b(null), C = d || b(null);
  let I = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [p, k] = v([I]), [w, S] = v([]), y = o.storeFactory.getTreeStore({ groupId: l }, o.endPoint);
  M(C, () => ({
    getValue() {
      return E();
    }
  }), [l, p, w]);
  const A = (t, c, e) => t.map((a) => (a.id === c && !a.loaded && (a.loaded = !0, a.children = e.filter((s) => c == s.parent).map((s) => s.id)), a)).concat(e), x = (t) => t.split(",").map((e) => parseInt(e)), D = (t, c) => t.map((n) => {
    const a = n.children || "";
    return {
      id: n.id,
      name: n.name,
      parent: n.parent ? n.parent : c,
      children: n.children ? x(n.children) : [],
      isBranch: a.length > 0,
      loaded: !0
    };
  });
  q(() => {
    y.getRoot().then((t) => {
      var c = D(t.result, -1);
      const e = A(p, -1, c);
      k(e), S([5, 7]);
    });
  }, [l]);
  const E = () => {
    const t = {}, c = {
      name: "root",
      children: [],
      id: -1
    };
    return p.forEach((e) => {
      var a, s;
      if (((a = e.metadata) == null ? void 0 : a.selected) == null)
        return;
      const n = e.parent > 0 ? e.parent : null;
      t[e.id] = {
        id: e.id,
        parent: n,
        name: e.name,
        selected: (s = e.metadata) == null ? void 0 : s.selected,
        children: []
      }, n == null && e.id > 0 && c.children.push(t[e.id]);
    }), p.forEach((e) => {
      const n = e.id, a = t[n];
      a && e.children && e.children.forEach((s) => {
        const g = t[s];
        g && a.children.push(g);
      });
    }), c;
  };
  return /* @__PURE__ */ r(f, { children: /* @__PURE__ */ u("div", { children: [
    /* @__PURE__ */ r(
      "div",
      {
        className: "visually-hidden",
        ref: h,
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
          isSelected: n,
          isHalfSelected: a,
          getNodeProps: s,
          level: g,
          handleSelect: F,
          handleExpand: L
        }) => {
          const O = a ? 1 : n ? 2 : 0;
          t.metadata = { selected: O };
          const R = (m, N) => m && N.children.length === 0 ? /* @__PURE__ */ u(f, { children: [
            /* @__PURE__ */ u(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  N.name
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
          ] }) : /* @__PURE__ */ r(J, { isOpen: m });
          return /* @__PURE__ */ u(
            "div",
            {
              ...s({ onClick: L }),
              children: [
                /* @__PURE__ */ r(
                  K,
                  {
                    className: "checkbox-icon",
                    onClick: (m) => {
                      F(m), m.stopPropagation();
                    },
                    variant: a ? "some" : n ? "all" : "none"
                  }
                ),
                /* @__PURE__ */ u("div", { className: "menu-list", children: [
                  /* @__PURE__ */ r("div", { className: "text-icon", children: /* @__PURE__ */ r("span", { className: "menu-name", children: t.name }) }),
                  /* @__PURE__ */ r("div", { children: c ? R(e, t) : /* @__PURE__ */ r(f, { children: /* @__PURE__ */ r(Q, { element: t, isSelected: n }) }) })
                ] })
              ]
            }
          );
        }
      }
    ) })
  ] }) });
}), J = (i) => {
  const { isOpen: o, className: d } = i, l = "arrow", h = z(
    l,
    { [`${l}--closed`]: !o },
    { [`${l}--open`]: o },
    d
  );
  return /* @__PURE__ */ r(H, { className: h });
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
  }, h = () => {
  };
  return /* @__PURE__ */ r(f, { children: /* @__PURE__ */ u("div", { className: "crud-dropdown-container", children: [
    /* @__PURE__ */ r("span", { className: "crud-dropdown-text", onClick: l, children: "crud" }),
    o && /* @__PURE__ */ r(G, { onClickAway: () => {
      d(!1);
    }, children: /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
      $,
      {
        isHalfSelected: i.isSelected,
        isSelected: i.isSelected,
        handleSelect: h
      }
    ) }) })
  ] }) });
};
export {
  te as default
};
