import { jsx as e, Fragment as v, jsxs as i } from "react/jsx-runtime";
import { useRef as b, useState as x, useEffect as A } from "react";
import { A as w } from "../../../chunks/index.esm2.js";
import { I as C } from "../../../chunks/index.esm3.js";
import { u as k, c as D } from "../../../chunks/AsyncTreeMenu.js";
function E(d) {
  const o = b(null);
  let u = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [l, m] = x([u]), f = d.store, g = (r, t, a) => r.map((s) => (s.id === t && !s.loaded && (s.loaded = !0, s.children = a.filter((c) => t == c.parent).map((c) => c.id)), s)).concat(a), N = (r) => r.split(",").map((a) => parseInt(a)), S = (r, t) => r.map((n) => {
    const s = n.children || "";
    return {
      id: n.id,
      name: n.name,
      parent: n.parent ? n.parent : t,
      children: n.children ? N(n.children) : [],
      isBranch: s.length > 0,
      loaded: !0
    };
  });
  return A(() => {
    f.getRoot().then((r) => {
      var t = S(r.result, -1);
      const a = g(l, -1, t);
      m(a);
    });
  }, []), /* @__PURE__ */ e(v, { children: /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "visually-hidden",
        ref: o,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ e("div", { className: "checkbox", children: /* @__PURE__ */ e(
      k,
      {
        className: "async-tree-menu-container",
        data: l,
        "aria-label": "Checkbox tree",
        multiSelect: !0,
        propagateSelect: !0,
        togglableSelect: !0,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: r,
          isBranch: t,
          isExpanded: a,
          isSelected: n,
          isHalfSelected: s,
          getNodeProps: c,
          level: O,
          handleSelect: R,
          handleExpand: y
        }) => {
          const I = (h, p) => h && p.children.length === 0 ? /* @__PURE__ */ i(v, { children: [
            /* @__PURE__ */ i(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  p.name
                ]
              }
            ),
            /* @__PURE__ */ e(
              w,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ e(L, { isOpen: h });
          return /* @__PURE__ */ e(
            "div",
            {
              ...c({ onClick: y }),
              children: /* @__PURE__ */ i("div", { className: "async-tree-menu-list", children: [
                /* @__PURE__ */ i("div", { className: "async-tree-menu-list-text-container", children: [
                  /* @__PURE__ */ e("div", { children: "I" }),
                  /* @__PURE__ */ e("span", { className: "menu-name", children: r.name })
                ] }),
                /* @__PURE__ */ e("div", { className: "async-tree-menu-list-arrow-container", children: t && I(a, r) })
              ] })
            }
          );
        }
      }
    ) })
  ] }) });
}
const L = (d) => {
  const { isOpen: o, className: u } = d, l = "arrow", m = D(
    l,
    { [`${l}--closed`]: !o },
    { [`${l}--open`]: o },
    u
  );
  return /* @__PURE__ */ e(C, { className: m });
};
export {
  E as default
};
