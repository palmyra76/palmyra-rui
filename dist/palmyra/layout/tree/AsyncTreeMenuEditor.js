import { jsx as a, Fragment as g, jsxs as m } from "react/jsx-runtime";
import { forwardRef as q, useRef as y, useState as C, useImperativeHandle as B, useEffect as j } from "react";
import { u as P, A as V, c as $ } from "../../../chunks/AsyncTreeMenu.js";
import { F as G, a as H, b as U, A as z } from "../../../chunks/AsyncTreeCrudDropDown.js";
import { I as J } from "../../../chunks/index.esm.js";
import { ClickAwayListener as K } from "@mui/material";
const ne = q(function(r, d) {
  const s = r.groupId, h = y(null), b = d || y(null);
  let w = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [p, I] = C([w]), [k, S] = C([]), A = r.storeFactory.getTreeStore({ groupId: s }, r.endPoint);
  B(b, () => ({
    getValue() {
      return E();
    }
  }), [s, p, k]);
  const x = (n, c, e) => n.map((o) => (o.id === c && !o.loaded && (o.loaded = !0, o.children = e.filter((l) => c == l.parent).map((l) => l.id)), o)).concat(e), D = (n) => n.split(",").map((e) => parseInt(e)), O = (n, c) => n.map((t) => {
    const o = t.children || "";
    return {
      id: t.id,
      name: t.name,
      parent: t.parent ? t.parent : c,
      children: t.children ? D(t.children) : [],
      isBranch: o.length > 0,
      loaded: !0,
      metadata: { menuCode: t.code }
    };
  });
  j(() => {
    A.getRoot().then((n) => {
      let c = n.result.filter((o) => o.mask == 2).map((o) => o.id);
      var e = O(n.result, -1);
      const t = x(p, -1, e);
      I(t), S(c);
    });
  }, [s]);
  const E = () => {
    const n = {}, c = {
      name: "root",
      children: [],
      id: -1
    };
    return p.forEach((e) => {
      var o, l, u;
      if (((o = e.metadata) == null ? void 0 : o.selected) == null)
        return;
      const t = e.parent > 0 ? e.parent : null;
      n[e.id] = {
        menuId: e.id,
        parent: t,
        name: e.name,
        mask: (l = e.metadata) == null ? void 0 : l.selected,
        menuCode: (u = e.metadata) == null ? void 0 : u.menuCode,
        children: []
      }, t == null && e.id > 0 && c.children.push(n[e.id]);
    }), p.forEach((e) => {
      const t = e.id, o = n[t];
      o && e.children && e.children.forEach((l) => {
        const u = n[l];
        u && o.children.push(u);
      });
    }), c;
  }, F = r.readOnly ? { color: "rgb( 230, 230, 230 )", backgroundColor: "white" } : { color: "rgb(44, 134, 213)", backgroundColor: "white" };
  return /* @__PURE__ */ a(g, { children: /* @__PURE__ */ m("div", { children: [
    /* @__PURE__ */ a(
      "div",
      {
        className: "visually-hidden",
        ref: h,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ a("div", { className: "checkbox", children: /* @__PURE__ */ a(
      P,
      {
        data: p,
        selectedIds: k,
        "aria-label": "Checkbox tree",
        multiSelect: !0,
        propagateSelect: !0,
        togglableSelect: !0,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: n,
          isBranch: c,
          isExpanded: e,
          isSelected: t,
          isHalfSelected: o,
          getNodeProps: l,
          level: u,
          handleSelect: R,
          handleExpand: L
        }) => {
          const N = o ? 1 : t ? 2 : 0;
          n.metadata ? n.metadata.selected = N : n.metadata = { selected: N };
          const T = (f, v) => f && v.children.length === 0 ? /* @__PURE__ */ m(g, { children: [
            /* @__PURE__ */ m(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  v.name
                ]
              }
            ),
            /* @__PURE__ */ a(
              V,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ a(Q, { isOpen: f }), M = (f) => {
            r.readOnly || (R(f), f.stopPropagation);
          };
          return /* @__PURE__ */ m(
            "div",
            {
              ...l({ onClick: L }),
              children: [
                /* @__PURE__ */ a(
                  W,
                  {
                    className: "checkbox-icon",
                    onClick: M,
                    style: F,
                    variant: o ? "some" : t ? "all" : "none"
                  }
                ),
                /* @__PURE__ */ m("div", { className: "menu-list", children: [
                  /* @__PURE__ */ a("div", { className: "text-icon", children: /* @__PURE__ */ a("span", { className: "menu-name", children: n.name }) }),
                  /* @__PURE__ */ a("div", { children: c ? T(e, n) : /* @__PURE__ */ a(g, { children: r.fineGrained ? "" : /* @__PURE__ */ a(X, { element: n, isSelected: t }) }) })
                ] })
              ]
            }
          );
        }
      }
    ) })
  ] }) });
}), Q = (i) => {
  const { isOpen: r, className: d } = i, s = "arrow", h = $(
    s,
    { [`${s}--closed`]: !r },
    { [`${s}--open`]: r },
    d
  );
  return /* @__PURE__ */ a(J, { className: h });
}, W = ({ variant: i, ...r }) => {
  switch (i) {
    case "all":
      return /* @__PURE__ */ a(U, { style: { color: r.style.color, backgroundColor: r.style.backgroundColor }, ...r });
    case "none":
      return /* @__PURE__ */ a(
        H,
        {
          style: { color: "rgba(128, 128,128, 0.2)" },
          onClick: r.onClick,
          className: r.className
        }
      );
    case "some":
      return /* @__PURE__ */ a(G, { style: { color: r.style.color, backgroundColor: r.style.backgroundColor }, ...r });
    default:
      return null;
  }
}, X = (i) => {
  const [r, d] = C(!1), s = () => {
    d(!r);
  }, h = () => {
  };
  return /* @__PURE__ */ a(g, { children: /* @__PURE__ */ m("div", { className: "crud-dropdown-container", children: [
    /* @__PURE__ */ a("span", { className: "crud-dropdown-text", onClick: s, children: "crud" }),
    r && /* @__PURE__ */ a(K, { onClickAway: () => {
      d(!1);
    }, children: /* @__PURE__ */ a("div", { children: /* @__PURE__ */ a(
      z,
      {
        isHalfSelected: i.isSelected,
        isSelected: i.isSelected,
        handleSelect: h
      }
    ) }) })
  ] }) });
};
export {
  ne as default
};
