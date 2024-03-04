import { jsx as r, Fragment as m, jsxs as u } from "react/jsx-runtime";
import { useRef as D, useState as g, useEffect as E } from "react";
import { A as F } from "../../../chunks/index.esm2.js";
import { F as L, a as O, b as B, A as q } from "../../../chunks/AsyncTreeCrudDropDown.js";
import { I as M } from "../../../chunks/index.esm3.js";
import { u as R, c as T } from "../../../chunks/AsyncTreeMenu.js";
import { Button as j, ClickAwayListener as $ } from "@mui/material";
function Y(i) {
  const o = D(null);
  let d = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [s, h] = g([d]), [N, b] = g([]), w = i.store, C = (t, c, e) => t.map((a) => (a.id === c && !a.loaded && (a.loaded = !0, a.children = e.filter((l) => c == l.parent).map((l) => l.id)), a)).concat(e), k = (t) => t.split(",").map((e) => parseInt(e)), S = (t, c) => t.map((n) => {
    const a = n.children || "";
    return {
      id: n.id,
      name: n.name,
      parent: n.parent ? n.parent : c,
      children: n.children ? k(n.children) : [],
      isBranch: a.length > 0,
      loaded: !0
    };
  });
  return E(() => {
    w.getRoot().then((t) => {
      var c = S(t.result, -1);
      const e = C(s, -1, c);
      h(e), b([5, 7]);
    });
  }, []), /* @__PURE__ */ r(m, { children: /* @__PURE__ */ u("div", { children: [
    /* @__PURE__ */ r(j, { onClick: () => {
      const t = {}, c = [];
      s.forEach((e) => {
        var a, l;
        if (((a = e.metadata) == null ? void 0 : a.selected) == null)
          return;
        const n = e.parent > 0 ? e.parent : null;
        t[e.id] = {
          id: e.id,
          parent: n,
          name: e.name,
          selected: (l = e.metadata) == null ? void 0 : l.selected,
          children: []
        }, n == null && e.id > 0 && c.push(t[e.id]);
      }), s.forEach((e) => {
        const n = e.id, a = t[n];
        a && e.children && e.children.forEach((l) => {
          const f = t[l];
          f && a.children.push(f);
        });
      });
    }, children: "ellosdf" }),
    /* @__PURE__ */ r(
      "div",
      {
        className: "visually-hidden",
        ref: o,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ r("div", { className: "checkbox", children: /* @__PURE__ */ r(
      R,
      {
        data: s,
        selectedIds: N,
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
          getNodeProps: l,
          level: f,
          handleSelect: x,
          handleExpand: A
        }) => {
          const I = a ? 1 : n ? 2 : 0;
          t.metadata = { selected: I };
          const y = (p, v) => p && v.children.length === 0 ? /* @__PURE__ */ u(m, { children: [
            /* @__PURE__ */ u(
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
            /* @__PURE__ */ r(
              F,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ r(P, { isOpen: p });
          return /* @__PURE__ */ u(
            "div",
            {
              ...l({ onClick: A }),
              children: [
                /* @__PURE__ */ r(
                  U,
                  {
                    className: "checkbox-icon",
                    onClick: (p) => {
                      x(p), p.stopPropagation();
                    },
                    variant: a ? "some" : n ? "all" : "none"
                  }
                ),
                /* @__PURE__ */ u("div", { className: "menu-list", children: [
                  /* @__PURE__ */ r("div", { className: "text-icon", children: /* @__PURE__ */ r("span", { className: "menu-name", children: t.name }) }),
                  /* @__PURE__ */ r("div", { children: c ? y(e, t) : /* @__PURE__ */ r(m, { children: /* @__PURE__ */ r(z, { element: t, isSelected: n }) }) })
                ] })
              ]
            }
          );
        }
      }
    ) })
  ] }) });
}
const P = (i) => {
  const { isOpen: o, className: d } = i, s = "arrow", h = T(
    s,
    { [`${s}--closed`]: !o },
    { [`${s}--open`]: o },
    d
  );
  return /* @__PURE__ */ r(M, { className: h });
}, U = ({ variant: i, ...o }) => {
  switch (i) {
    case "all":
      return /* @__PURE__ */ r(B, { style: { color: "rgb(44, 134, 213)", backgroundColor: "white" }, ...o });
    case "none":
      return /* @__PURE__ */ r(O, { style: { color: "white", border: "1px solid rgba(128, 128,128, 0.2)" }, ...o });
    case "some":
      return /* @__PURE__ */ r(L, { style: { color: "rgb(44, 134, 213)", backgroundColor: "white" }, ...o });
    default:
      return null;
  }
}, z = (i) => {
  const [o, d] = g(!1), s = () => {
    d(!o);
  }, h = () => {
  };
  return /* @__PURE__ */ r(m, { children: /* @__PURE__ */ u("div", { className: "crud-dropdown-container", children: [
    /* @__PURE__ */ r("span", { className: "crud-dropdown-text", onClick: s, children: "crud" }),
    o && /* @__PURE__ */ r($, { onClickAway: () => {
      d(!1);
    }, children: /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
      q,
      {
        isHalfSelected: i.isSelected,
        isSelected: i.isSelected,
        handleSelect: h
      }
    ) }) })
  ] }) });
};
export {
  Y as default
};
