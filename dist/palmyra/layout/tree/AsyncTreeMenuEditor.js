import { jsx as n, Fragment as g, jsxs as m } from "react/jsx-runtime";
import { forwardRef as j, useRef as I, useState as k, useImperativeHandle as P, useEffect as V } from "react";
import { u as $, A as G, c as H } from "../../../chunks/AsyncTreeMenu.js";
import { F as U, a as z, b as J, A as K } from "../../../chunks/AsyncTreeCrudDropDown.js";
import { I as Q } from "../../../chunks/index.esm.js";
import { ClickAwayListener as W } from "@mui/material";
const oe = j(function(a, i) {
  const s = a.groupId, h = I(null), b = i || I(null);
  let w = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [p, x] = k([w]), [C, S] = k([]), [N, A] = k([]), D = a.storeFactory.getTreeStore({ groupId: s }, a.endPoint);
  P(b, () => ({
    getValue() {
      return R();
    }
  }), [s, p, C]);
  const E = (r, c, e) => r.map((o) => (o.id === c && !o.loaded && (o.loaded = !0, o.children = e.filter((l) => c == l.parent).map((l) => l.id)), o)).concat(e), O = (r) => r.split(",").map((e) => parseInt(e)), F = (r, c) => r.map((t) => {
    const o = t.children || "";
    return {
      id: t.id,
      name: t.name,
      parent: t.parent ? t.parent : c,
      children: t.children ? O(t.children) : [],
      isBranch: o.length > 0,
      loaded: !0,
      metadata: { menuCode: t.code }
    };
  });
  V(() => {
    D.getRoot().then((r) => {
      let c = r.result.filter((l) => l.mask == 2).map((l) => l.id);
      var e = F(r.result, -1);
      const t = E(p, -1, e);
      x(t);
      let o = r.result.filter((l) => l.mask > 0).map((l) => l.id);
      S(c), A(o);
    });
  }, [s]);
  const R = () => {
    const r = {}, c = {
      name: "root",
      children: [],
      id: -1
    };
    return p.forEach((e) => {
      var o, l, u;
      if (((o = e.metadata) == null ? void 0 : o.selected) == null)
        return;
      const t = e.parent > 0 ? e.parent : null;
      r[e.id] = {
        menuId: e.id,
        parent: t,
        name: e.name,
        mask: (l = e.metadata) == null ? void 0 : l.selected,
        menuCode: (u = e.metadata) == null ? void 0 : u.menuCode,
        children: []
      }, t == null && e.id > 0 && c.children.push(r[e.id]);
    }), p.forEach((e) => {
      const t = e.id, o = r[t];
      o && e.children && e.children.forEach((l) => {
        const u = r[l];
        u && o.children.push(u);
      });
    }), c;
  }, L = a.readOnly ? { color: "rgb( 230, 230, 230 )", backgroundColor: "white" } : { color: "rgb(44, 134, 213)", backgroundColor: "white" };
  return /* @__PURE__ */ n(g, { children: /* @__PURE__ */ m("div", { children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: "visually-hidden",
        ref: h,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ n("div", { className: "checkbox", children: /* @__PURE__ */ n(
      $,
      {
        data: p,
        selectedIds: C,
        "aria-label": "Checkbox tree",
        multiSelect: !0,
        propagateSelect: !0,
        togglableSelect: !0,
        propagateSelectUpwards: !0,
        expandedIds: N,
        defaultExpandedIds: N,
        nodeRenderer: ({
          element: r,
          isBranch: c,
          isExpanded: e,
          isSelected: t,
          isHalfSelected: o,
          getNodeProps: l,
          level: u,
          handleSelect: T,
          handleExpand: M
        }) => {
          const v = o ? 1 : t ? 2 : 0;
          r.metadata ? r.metadata.selected = v : r.metadata = { selected: v };
          const q = (f, y) => f && y.children.length === 0 ? /* @__PURE__ */ m(g, { children: [
            /* @__PURE__ */ m(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  y.name
                ]
              }
            ),
            /* @__PURE__ */ n(
              G,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ n(X, { isOpen: f }), B = (f) => {
            a.readOnly || (T(f), f.stopPropagation);
          };
          return /* @__PURE__ */ m(
            "div",
            {
              ...l({ onClick: M }),
              children: [
                /* @__PURE__ */ n(
                  Y,
                  {
                    className: "checkbox-icon",
                    onClick: B,
                    style: L,
                    variant: o ? "some" : t ? "all" : "none"
                  }
                ),
                /* @__PURE__ */ m("div", { className: "menu-list", children: [
                  /* @__PURE__ */ n("div", { className: "text-icon", children: /* @__PURE__ */ n("span", { className: "menu-name", children: r.name }) }),
                  /* @__PURE__ */ n("div", { children: c ? q(e, r) : /* @__PURE__ */ n(g, { children: a.fineGrained ? "" : /* @__PURE__ */ n(Z, { element: r, isSelected: t }) }) })
                ] })
              ]
            }
          );
        }
      }
    ) })
  ] }) });
}), X = (d) => {
  const { isOpen: a, className: i } = d, s = "arrow", h = H(
    s,
    { [`${s}--closed`]: !a },
    { [`${s}--open`]: a },
    i
  );
  return /* @__PURE__ */ n(Q, { className: h });
}, Y = ({ variant: d, ...a }) => {
  switch (d) {
    case "all":
      return /* @__PURE__ */ n(J, { style: { color: a.style.color, backgroundColor: a.style.backgroundColor }, ...a });
    case "none":
      return /* @__PURE__ */ n(
        z,
        {
          style: { color: "rgba(128, 128,128, 0.2)" },
          onClick: a.onClick,
          className: a.className
        }
      );
    case "some":
      return /* @__PURE__ */ n(U, { style: { color: a.style.color, backgroundColor: a.style.backgroundColor }, ...a });
    default:
      return null;
  }
}, Z = (d) => {
  const [a, i] = k(!1), s = () => {
    i(!a);
  }, h = () => {
  };
  return /* @__PURE__ */ n(g, { children: /* @__PURE__ */ m("div", { className: "crud-dropdown-container", children: [
    /* @__PURE__ */ n("span", { className: "crud-dropdown-text", onClick: s, children: "crud" }),
    a && /* @__PURE__ */ n(W, { onClickAway: () => {
      i(!1);
    }, children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
      K,
      {
        isHalfSelected: d.isSelected,
        isSelected: d.isSelected,
        handleSelect: h
      }
    ) }) })
  ] }) });
};
export {
  oe as default
};
