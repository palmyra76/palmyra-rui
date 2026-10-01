import { jsxs as V, jsx as O, Fragment as st } from "react/jsx-runtime";
import { useNavigate as Rn } from "react-router-dom";
import Te, { createContext as ue, useContext as le, useRef as Q, useEffect as L, memo as at, createElement as Ae, PureComponent as Mn, forwardRef as ut, isValidElement as Ln, cloneElement as It, useLayoutEffect as $n, useMemo as _, useState as lt, useCallback as Rr, useImperativeHandle as jn } from "react";
import { ArrowDropDown as Hn, ArrowRight as zn } from "@mui/icons-material";
import { SimpleIconProvider as Fn } from "../flexiLayout/IconProvider.js";
/* empty css                        */import { _ as Un } from "../../../chunks/extends.js";
import { g as Vn } from "../../../chunks/_commonjsHelpers.js";
var Qe = { exports: {} }, ke = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wt;
function Wn() {
  if (wt)
    return ke;
  wt = 1;
  var t = Te;
  function e(h, v) {
    return h === v && (h !== 0 || 1 / h === 1 / v) || h !== h && v !== v;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useState, i = t.useEffect, o = t.useLayoutEffect, s = t.useDebugValue;
  function a(h, v) {
    var p = v(), m = n({ inst: { value: p, getSnapshot: v } }), l = m[0].inst, d = m[1];
    return o(
      function() {
        l.value = p, l.getSnapshot = v, u(l) && d({ inst: l });
      },
      [h, p, v]
    ), i(
      function() {
        return u(l) && d({ inst: l }), h(function() {
          u(l) && d({ inst: l });
        });
      },
      [h]
    ), s(p), p;
  }
  function u(h) {
    var v = h.getSnapshot;
    h = h.value;
    try {
      var p = v();
      return !r(h, p);
    } catch {
      return !0;
    }
  }
  function c(h, v) {
    return v();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : a;
  return ke.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : f, ke;
}
var Re = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dt;
function Bn() {
  return Dt || (Dt = 1, process.env.NODE_ENV !== "production" && function() {
    function t(p, m) {
      return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
    }
    function e(p, m) {
      f || i.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var l = m();
      if (!h) {
        var d = m();
        o(l, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), h = !0);
      }
      d = s({
        inst: { value: l, getSnapshot: m }
      });
      var g = d[0].inst, y = d[1];
      return u(
        function() {
          g.value = l, g.getSnapshot = m, r(g) && y({ inst: g });
        },
        [p, l, m]
      ), a(
        function() {
          return r(g) && y({ inst: g }), p(function() {
            r(g) && y({ inst: g });
          });
        },
        [p]
      ), c(l), l;
    }
    function r(p) {
      var m = p.getSnapshot;
      p = p.value;
      try {
        var l = m();
        return !o(p, l);
      } catch {
        return !0;
      }
    }
    function n(p, m) {
      return m();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var i = Te, o = typeof Object.is == "function" ? Object.is : t, s = i.useState, a = i.useEffect, u = i.useLayoutEffect, c = i.useDebugValue, f = !1, h = !1, v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : e;
    Re.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Re;
}
process.env.NODE_ENV === "production" ? Qe.exports = Wn() : Qe.exports = Bn();
var Kn = Qe.exports;
const Mr = ue(null);
function A() {
  const t = le(Mr);
  if (t === null)
    throw new Error("No Tree Api Provided");
  return t;
}
const Lr = ue(null);
function qn() {
  const t = le(Lr);
  if (t === null)
    throw new Error("Provide a NodesContext");
  return t;
}
const $r = ue(null);
function Gn() {
  const t = le($r);
  if (t === null)
    throw new Error("Provide a DnDContext");
  return t;
}
const jr = ue(0);
function Hr() {
  le(jr);
}
function pe(t, e, r) {
  return Math.max(Math.min(t, r), e);
}
function zr(t) {
  return t && t.isLeaf;
}
function Fr(t) {
  return t && t.isInternal && !t.isOpen;
}
function Yn(t) {
  var e;
  return t && t.isOpen && !(!((e = t.children) === null || e === void 0) && e.length);
}
const Ur = (t, e) => {
  let r = t;
  for (; r; ) {
    if (r.id === e.id)
      return !0;
    r = r.parent;
  }
  return !1;
}, Vr = (t) => {
  if (!t.parent)
    throw Error("Node does not have a parent");
  return t.parent.children.findIndex((e) => e.id === t.id);
};
function Xn() {
}
function ct(t, e) {
  if (!t)
    return null;
  if (t.id === e)
    return t;
  if (t.children)
    for (let r of t.children) {
      const n = ct(r, e);
      if (n)
        return n;
    }
  return null;
}
function we(t, e) {
  if (e(t), t.children)
    for (let r of t.children)
      we(r, e);
}
function Wr(t) {
  const e = Kr(t);
  let r;
  for (let n = 0; n < e.length; ++n)
    if (e[n] === t) {
      r = Qn(e, n);
      break;
    }
  r == null || r.focus();
}
function Br(t) {
  const e = Kr(t);
  let r;
  for (let n = 0; n < e.length; ++n)
    if (e[n] === t) {
      r = Jn(e, n);
      break;
    }
  r == null || r.focus();
}
function Qn(t, e) {
  return e + 1 < t.length ? t[e + 1] : t[0];
}
function Jn(t, e) {
  return e - 1 >= 0 ? t[e - 1] : t[t.length - 1];
}
function Kr(t) {
  return Array.from(document.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)')).filter((e) => e === t || !t.contains(e));
}
function ie(t, e) {
  return typeof e == "boolean" ? e : typeof e == "string" ? t[e] : e(t);
}
function Zn(...t) {
  return (e) => {
    t.forEach((r) => {
      typeof r == "function" ? r(e) : r != null && (r.current = e);
    });
  };
}
function ei(t, ...e) {
  if (t)
    return t(...e);
}
function qr(t) {
  return new Promise((e, r) => {
    let n = 0;
    function i() {
      n += 1, n === 100 && r(), t() ? e() : setTimeout(i, 10);
    }
    i();
  });
}
function Gr(t) {
  var e, r;
  const n = t.focusedNode;
  return n ? n.isOpen ? 0 : n.parent ? n.childIndex + 1 : 0 : (r = (e = t.root.children) === null || e === void 0 ? void 0 : e.length) !== null && r !== void 0 ? r : 0;
}
const ti = {
  last: "└ ",
  middle: "├ ",
  pipe: "│ ",
  blank: "　 "
};
function ri(t, e = {}) {
  const r = Object.assign(Object.assign({}, ti), e);
  if (t.level === 0)
    return "";
  let i = t.nextSibling === null ? r.last : r.middle, o = t.parent;
  for (; o && o.level > 0; )
    i = (o.nextSibling === null ? r.blank : r.pipe) + i, o = o.parent;
  return i;
}
function Yr(t) {
  const e = t.focusedNode;
  return e ? e.isOpen ? e.id : e.parent && !e.parent.isRoot ? e.parent.id : null : null;
}
const ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  access: ie,
  bound: pe,
  dfs: ct,
  focusNextElement: Wr,
  focusPrevElement: Br,
  getInsertIndex: Gr,
  getInsertParentId: Yr,
  getTreeLinePrefix: ri,
  indexOf: Vr,
  isClosed: Fr,
  isDescendant: Ur,
  isItem: zr,
  isOpenWithEmptyChildren: Yn,
  mergeRefs: Zn,
  noop: Xn,
  safeRun: ei,
  waitFor: qr,
  walk: we
}, Symbol.toStringTag, { value: "Module" })), ii = {
  display: "flex",
  alignItems: "center",
  zIndex: 1
}, oi = {
  flex: 1,
  height: "2px",
  background: "#4B91E2",
  borderRadius: "1px"
}, si = {
  width: "4px",
  height: "4px",
  boxShadow: "0 0 0 3px #4B91E2",
  borderRadius: "50%"
}, ai = Te.memo(function({ top: e, left: r, indent: n }) {
  const i = {
    position: "absolute",
    pointerEvents: "none",
    top: e - 2 + "px",
    left: r + "px",
    right: n + "px"
  };
  return V("div", { style: Object.assign(Object.assign({}, ii), i), children: [O("div", { style: Object.assign({}, si) }), O("div", { style: Object.assign({}, oi) })] });
});
function ui({ node: t, attrs: e, innerRef: r, children: n }) {
  return O("div", Object.assign({}, e, { ref: r, onFocus: (i) => i.stopPropagation(), onClick: t.handleClick, children: n }));
}
function li(t) {
  return V("div", { ref: t.dragHandle, style: t.style, children: [O("span", { onClick: (e) => {
    e.stopPropagation(), t.node.toggle();
  }, children: t.node.isLeaf ? "🌳" : t.node.isOpen ? "🗁" : "🗀" }), " ", t.node.isEditing ? O(di, Object.assign({}, t)) : O(ci, Object.assign({}, t))] });
}
function ci(t) {
  return O(st, { children: O("span", { children: t.node.data.name }) });
}
function di({ node: t }) {
  const e = Q();
  return L(() => {
    var r, n;
    (r = e.current) === null || r === void 0 || r.focus(), (n = e.current) === null || n === void 0 || n.select();
  }, []), O("input", {
    ref: e,
    // @ts-ignore
    defaultValue: t.data.name,
    onBlur: () => t.reset(),
    onKeyDown: (r) => {
      var n;
      r.key === "Escape" && t.reset(), r.key === "Enter" && t.submit(((n = e.current) === null || n === void 0 ? void 0 : n.value) || "");
    }
  });
}
const se = "__REACT_ARBORIST_INTERNAL_ROOT__";
function Tt(t) {
  var e;
  function r(o, s, a) {
    const u = t.accessId(o), c = new ae({
      tree: t,
      data: o,
      level: s,
      parent: a,
      id: u,
      children: null,
      isDraggable: t.isDraggable(o),
      rowIndex: null
    }), f = t.accessChildren(o);
    return f && (c.children = f.map((h) => r(h, s + 1, c))), c;
  }
  const n = new ae({
    tree: t,
    id: se,
    // @ts-ignore
    data: { id: se },
    level: -1,
    parent: null,
    children: null,
    isDraggable: !0,
    rowIndex: null
  }), i = (e = t.props.data) !== null && e !== void 0 ? e : [];
  return n.children = i.map((o) => r(o, 0, n)), n;
}
class ae {
  constructor(e) {
    this.handleClick = (r) => {
      (r.metaKey || r.ctrlKey) && !this.tree.props.disableMultiSelection ? this.isSelected ? this.deselect() : this.selectMulti() : r.shiftKey && !this.tree.props.disableMultiSelection ? this.selectContiguous() : (this.select(), this.activate());
    }, this.tree = e.tree, this.id = e.id, this.data = e.data, this.level = e.level, this.children = e.children, this.parent = e.parent, this.isDraggable = e.isDraggable, this.rowIndex = e.rowIndex, this.select = this.select.bind(this), this.deselect = this.deselect.bind(this), this.selectMulti = this.selectMulti.bind(this), this.selectContiguous = this.selectContiguous.bind(this), this.activate = this.activate.bind(this), this.focus = this.focus.bind(this), this.toggle = this.toggle.bind(this), this.open = this.open.bind(this), this.openParents = this.openParents.bind(this), this.close = this.close.bind(this), this.submit = this.submit.bind(this), this.reset = this.reset.bind(this), this.edit = this.edit.bind(this);
  }
  get isRoot() {
    return this.id === se;
  }
  get isLeaf() {
    return !Array.isArray(this.children);
  }
  get isInternal() {
    return !this.isLeaf;
  }
  get isOpen() {
    return this.isLeaf ? !1 : this.tree.isOpen(this.id);
  }
  get isClosed() {
    return this.isLeaf ? !1 : !this.tree.isOpen(this.id);
  }
  get isEditable() {
    return this.tree.isEditable(this.data);
  }
  get isSelectable() {
    return this.tree.isSelectable(this.data);
  }
  get isEditing() {
    return this.tree.editingId === this.id;
  }
  get isSelected() {
    return this.tree.isSelected(this.id);
  }
  get isOnlySelection() {
    return this.isSelected && this.tree.hasOneSelection;
  }
  get isSelectedStart() {
    var e;
    return this.isSelected && !(!((e = this.prev) === null || e === void 0) && e.isSelected);
  }
  get isSelectedEnd() {
    var e;
    return this.isSelected && !(!((e = this.next) === null || e === void 0) && e.isSelected);
  }
  get isFocused() {
    return this.tree.isFocused(this.id);
  }
  get isDragging() {
    return this.tree.isDragging(this.id);
  }
  get willReceiveDrop() {
    return this.tree.willReceiveDrop(this.id);
  }
  get state() {
    return {
      isClosed: this.isClosed,
      isDragging: this.isDragging,
      isEditing: this.isEditing,
      isFocused: this.isFocused,
      isInternal: this.isInternal,
      isLeaf: this.isLeaf,
      isOpen: this.isOpen,
      isSelected: this.isSelected,
      isSelectedEnd: this.isSelectedEnd,
      isSelectedStart: this.isSelectedStart,
      willReceiveDrop: this.willReceiveDrop
    };
  }
  get childIndex() {
    return this.parent && this.parent.children ? this.parent.children.findIndex((e) => e.id === this.id) : -1;
  }
  get next() {
    return this.rowIndex === null ? null : this.tree.at(this.rowIndex + 1);
  }
  get prev() {
    return this.rowIndex === null ? null : this.tree.at(this.rowIndex - 1);
  }
  get nextSibling() {
    var e, r;
    const n = this.childIndex;
    return (r = (e = this.parent) === null || e === void 0 ? void 0 : e.children[n + 1]) !== null && r !== void 0 ? r : null;
  }
  isAncestorOf(e) {
    if (!e)
      return !1;
    let r = e;
    for (; r; ) {
      if (r.id === this.id)
        return !0;
      r = r.parent;
    }
    return !1;
  }
  select() {
    this.tree.select(this);
  }
  deselect() {
    this.tree.deselect(this);
  }
  selectMulti() {
    this.tree.selectMulti(this);
  }
  selectContiguous() {
    this.tree.selectContiguous(this);
  }
  activate() {
    this.tree.activate(this);
  }
  focus() {
    this.tree.focus(this);
  }
  toggle() {
    this.tree.toggle(this);
  }
  open() {
    this.tree.open(this);
  }
  openParents() {
    this.tree.openParents(this);
  }
  close() {
    this.tree.close(this);
  }
  submit(e) {
    this.tree.submit(this, e);
  }
  reset() {
    this.tree.reset();
  }
  clone() {
    return new ae(Object.assign({}, this));
  }
  edit() {
    return this.tree.edit(this);
  }
}
function Me(t) {
  return { type: "EDIT", id: t };
}
function fi(t = { id: null }, e) {
  return e.type === "EDIT" ? Object.assign(Object.assign({}, t), { id: e.id }) : t;
}
function K(t) {
  return { type: "FOCUS", id: t };
}
function hi() {
  return { type: "TREE_BLUR" };
}
function gi(t = { id: null, treeFocused: !1 }, e) {
  return e.type === "FOCUS" ? Object.assign(Object.assign({}, t), { id: e.id, treeFocused: !0 }) : e.type === "TREE_BLUR" ? Object.assign(Object.assign({}, t), { treeFocused: !1 }) : t;
}
const Je = {
  open(t, e) {
    return { type: "VISIBILITY_OPEN", id: t, filtered: e };
  },
  close(t, e) {
    return { type: "VISIBILITY_CLOSE", id: t, filtered: e };
  },
  toggle(t, e) {
    return { type: "VISIBILITY_TOGGLE", id: t, filtered: e };
  },
  clear(t) {
    return { type: "VISIBILITY_CLEAR", filtered: t };
  }
};
function Et(t = {}, e) {
  if (e.type === "VISIBILITY_OPEN")
    return Object.assign(Object.assign({}, t), { [e.id]: !0 });
  if (e.type === "VISIBILITY_CLOSE")
    return Object.assign(Object.assign({}, t), { [e.id]: !1 });
  if (e.type === "VISIBILITY_TOGGLE") {
    const r = t[e.id];
    return Object.assign(Object.assign({}, t), { [e.id]: !r });
  } else
    return e.type === "VISIBILITY_CLEAR" ? {} : t;
}
function pi(t = { filtered: {}, unfiltered: {} }, e) {
  return e.type.startsWith("VISIBILITY") ? e.filtered ? Object.assign(Object.assign({}, t), { filtered: Et(t.filtered, e) }) : Object.assign(Object.assign({}, t), { unfiltered: Et(t.unfiltered, e) }) : t;
}
const Z = (t) => {
  var e;
  return {
    nodes: {
      // Changes together
      open: { filtered: {}, unfiltered: (e = t == null ? void 0 : t.initialOpenState) !== null && e !== void 0 ? e : {} },
      focus: { id: null, treeFocused: !1 },
      edit: { id: null },
      drag: {
        id: null,
        selectedIds: [],
        destinationParentId: null,
        destinationIndex: null
      },
      selection: { ids: /* @__PURE__ */ new Set(), anchor: null, mostRecent: null }
    },
    dnd: {
      cursor: { type: "none" },
      dragId: null,
      dragIds: [],
      parentId: null,
      index: -1
    }
  };
}, H = {
  clear: () => ({ type: "SELECTION_CLEAR" }),
  only: (t) => ({
    type: "SELECTION_ONLY",
    id: t
  }),
  add: (t) => ({
    type: "SELECTION_ADD",
    ids: Array.isArray(t) ? t : [t]
  }),
  remove: (t) => ({
    type: "SELECTION_REMOVE",
    ids: Array.isArray(t) ? t : [t]
  }),
  set: (t) => Object.assign({ type: "SELECTION_SET" }, t),
  mostRecent: (t) => ({
    type: "SELECTION_MOST_RECENT",
    id: t
  }),
  anchor: (t) => ({
    type: "SELECTION_ANCHOR",
    id: t
  })
};
function vi(t = Z().nodes.selection, e) {
  const r = t.ids;
  switch (e.type) {
    case "SELECTION_CLEAR":
      return Object.assign(Object.assign({}, t), { ids: /* @__PURE__ */ new Set() });
    case "SELECTION_ONLY":
      return Object.assign(Object.assign({}, t), { ids: /* @__PURE__ */ new Set([e.id]) });
    case "SELECTION_ADD":
      return e.ids.length === 0 ? t : (e.ids.forEach((n) => r.add(n)), Object.assign(Object.assign({}, t), { ids: new Set(r) }));
    case "SELECTION_REMOVE":
      return e.ids.length === 0 ? t : (e.ids.forEach((n) => r.delete(n)), Object.assign(Object.assign({}, t), { ids: new Set(r) }));
    case "SELECTION_SET":
      return Object.assign(Object.assign({}, t), { ids: e.ids, mostRecent: e.mostRecent, anchor: e.anchor });
    case "SELECTION_MOST_RECENT":
      return Object.assign(Object.assign({}, t), { mostRecent: e.id });
    case "SELECTION_ANCHOR":
      return Object.assign(Object.assign({}, t), { anchor: e.id });
    default:
      return t;
  }
}
const F = {
  cursor(t) {
    return { type: "DND_CURSOR", cursor: t };
  },
  dragStart(t, e) {
    return { type: "DND_DRAG_START", id: t, dragIds: e };
  },
  dragEnd() {
    return { type: "DND_DRAG_END" };
  },
  hovering(t, e) {
    return { type: "DND_HOVERING", parentId: t, index: e };
  },
  /* The consumer-facing destination (willReceiveDrop / dragDestinationParent).
     Dispatched by tree.hover() only when the target is actually droppable, so
     it never points somewhere canDrop()/the cursor forbids (#247). */
  setDestination(t, e) {
    return { type: "DND_DESTINATION", parentId: t, index: e };
  }
};
function yi(t = Z().dnd, e) {
  switch (e.type) {
    case "DND_CURSOR":
      return Object.assign(Object.assign({}, t), { cursor: e.cursor });
    case "DND_DRAG_START":
      return Object.assign(Object.assign({}, t), { dragId: e.id, dragIds: e.dragIds });
    case "DND_DRAG_END":
      return Z().dnd;
    case "DND_HOVERING":
      return Object.assign(Object.assign({}, t), { parentId: e.parentId, index: e.index });
    default:
      return t;
  }
}
const mi = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%"
}, bi = (t) => {
  if (!t)
    return { display: "none" };
  const { x: e, y: r } = t;
  return { transform: `translate(${e}px, ${r}px)` };
}, Oi = (t) => {
  if (!t)
    return { display: "none" };
  const { x: e, y: r } = t;
  return { transform: `translate(${e + 10}px, ${r + 10}px)` };
};
function Xr({ offset: t, mouse: e, id: r, dragIds: n, isDragging: i }) {
  return V(Si, { isDragging: i, children: [O(Ii, { offset: t, children: O(Di, { id: r, dragIds: n }) }), O(wi, { mouse: e, count: n.length })] });
}
const Si = at(function(e) {
  return e.isDragging ? O("div", { style: mi, children: e.children }) : null;
});
function Ii(t) {
  return O("div", { className: "row preview", style: bi(t.offset), children: t.children });
}
function wi(t) {
  const { count: e, mouse: r } = t;
  return e > 1 ? O("div", { className: "selected-count", style: Oi(r), children: e }) : null;
}
const Di = at(function(e) {
  const r = A(), n = r.get(e.id);
  return n ? O(r.renderNode, { preview: !0, node: n, style: {
    paddingLeft: n.level * r.indent,
    opacity: 0.2,
    background: "transparent"
  }, tree: r }) : null;
});
function _t(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Ze(t, e) {
  return Ze = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Ze(t, e);
}
function Ti(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Ze(t, e);
}
var Ct = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function Ei(t, e) {
  return !!(t === e || Ct(t) && Ct(e));
}
function _i(t, e) {
  if (t.length !== e.length)
    return !1;
  for (var r = 0; r < t.length; r++)
    if (!Ei(t[r], e[r]))
      return !1;
  return !0;
}
function Le(t, e) {
  e === void 0 && (e = _i);
  var r, n = [], i, o = !1;
  function s() {
    for (var a = [], u = 0; u < arguments.length; u++)
      a[u] = arguments[u];
    return o && r === this && e(a, n) || (i = t.apply(this, a), o = !0, r = this, n = a), i;
  }
  return s;
}
var Ci = typeof performance == "object" && typeof performance.now == "function", Nt = Ci ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function xt(t) {
  cancelAnimationFrame(t.id);
}
function Ni(t, e) {
  var r = Nt();
  function n() {
    Nt() - r >= e ? t.call(null) : i.id = requestAnimationFrame(n);
  }
  var i = {
    id: requestAnimationFrame(n)
  };
  return i;
}
var $e = -1;
function Pt(t) {
  if (t === void 0 && (t = !1), $e === -1 || t) {
    var e = document.createElement("div"), r = e.style;
    r.width = "50px", r.height = "50px", r.overflow = "scroll", document.body.appendChild(e), $e = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
  }
  return $e;
}
var q = null;
function At(t) {
  if (t === void 0 && (t = !1), q === null || t) {
    var e = document.createElement("div"), r = e.style;
    r.width = "50px", r.height = "50px", r.overflow = "scroll", r.direction = "rtl";
    var n = document.createElement("div"), i = n.style;
    return i.width = "100px", i.height = "100px", e.appendChild(n), document.body.appendChild(e), e.scrollLeft > 0 ? q = "positive-descending" : (e.scrollLeft = 1, e.scrollLeft === 0 ? q = "negative" : q = "positive-ascending"), document.body.removeChild(e), q;
  }
  return q;
}
process.env.NODE_ENV;
var xi = 150, Pi = function(e, r) {
  return e;
}, ve = null, ye = null;
process.env.NODE_ENV !== "production" && typeof window < "u" && typeof window.WeakSet < "u" && (ve = /* @__PURE__ */ new WeakSet(), ye = /* @__PURE__ */ new WeakSet());
function Qr(t) {
  var e, r = t.getItemOffset, n = t.getEstimatedTotalSize, i = t.getItemSize, o = t.getOffsetForIndexAndAlignment, s = t.getStartIndexForOffset, a = t.getStopIndexForStartIndex, u = t.initInstanceProps, c = t.shouldResetStyleCacheOnItemSizeChange, f = t.validateProps;
  return e = /* @__PURE__ */ function(h) {
    Ti(v, h);
    function v(m) {
      var l;
      return l = h.call(this, m) || this, l._instanceProps = u(l.props, _t(l)), l._outerRef = void 0, l._resetIsScrollingTimeoutId = null, l.state = {
        instance: _t(l),
        isScrolling: !1,
        scrollDirection: "forward",
        scrollOffset: typeof l.props.initialScrollOffset == "number" ? l.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: !1
      }, l._callOnItemsRendered = void 0, l._callOnItemsRendered = Le(function(d, g, y, b) {
        return l.props.onItemsRendered({
          overscanStartIndex: d,
          overscanStopIndex: g,
          visibleStartIndex: y,
          visibleStopIndex: b
        });
      }), l._callOnScroll = void 0, l._callOnScroll = Le(function(d, g, y) {
        return l.props.onScroll({
          scrollDirection: d,
          scrollOffset: g,
          scrollUpdateWasRequested: y
        });
      }), l._getItemStyle = void 0, l._getItemStyle = function(d) {
        var g = l.props, y = g.direction, b = g.itemSize, D = g.layout, I = l._getItemStyleCache(c && b, c && D, c && y), T;
        if (I.hasOwnProperty(d))
          T = I[d];
        else {
          var E = r(l.props, d, l._instanceProps), P = i(l.props, d, l._instanceProps), $ = y === "horizontal" || D === "horizontal", ce = y === "rtl", de = $ ? E : 0;
          I[d] = T = {
            position: "absolute",
            left: ce ? void 0 : de,
            right: ce ? de : void 0,
            top: $ ? 0 : E,
            height: $ ? "100%" : P,
            width: $ ? P : "100%"
          };
        }
        return T;
      }, l._getItemStyleCache = void 0, l._getItemStyleCache = Le(function(d, g, y) {
        return {};
      }), l._onScrollHorizontal = function(d) {
        var g = d.currentTarget, y = g.clientWidth, b = g.scrollLeft, D = g.scrollWidth;
        l.setState(function(I) {
          if (I.scrollOffset === b)
            return null;
          var T = l.props.direction, E = b;
          if (T === "rtl")
            switch (At()) {
              case "negative":
                E = -b;
                break;
              case "positive-descending":
                E = D - y - b;
                break;
            }
          return E = Math.max(0, Math.min(E, D - y)), {
            isScrolling: !0,
            scrollDirection: I.scrollOffset < E ? "forward" : "backward",
            scrollOffset: E,
            scrollUpdateWasRequested: !1
          };
        }, l._resetIsScrollingDebounced);
      }, l._onScrollVertical = function(d) {
        var g = d.currentTarget, y = g.clientHeight, b = g.scrollHeight, D = g.scrollTop;
        l.setState(function(I) {
          if (I.scrollOffset === D)
            return null;
          var T = Math.max(0, Math.min(D, b - y));
          return {
            isScrolling: !0,
            scrollDirection: I.scrollOffset < T ? "forward" : "backward",
            scrollOffset: T,
            scrollUpdateWasRequested: !1
          };
        }, l._resetIsScrollingDebounced);
      }, l._outerRefSetter = function(d) {
        var g = l.props.outerRef;
        l._outerRef = d, typeof g == "function" ? g(d) : g != null && typeof g == "object" && g.hasOwnProperty("current") && (g.current = d);
      }, l._resetIsScrollingDebounced = function() {
        l._resetIsScrollingTimeoutId !== null && xt(l._resetIsScrollingTimeoutId), l._resetIsScrollingTimeoutId = Ni(l._resetIsScrolling, xi);
      }, l._resetIsScrolling = function() {
        l._resetIsScrollingTimeoutId = null, l.setState({
          isScrolling: !1
        }, function() {
          l._getItemStyleCache(-1, null);
        });
      }, l;
    }
    v.getDerivedStateFromProps = function(l, d) {
      return Ai(l, d), f(l), null;
    };
    var p = v.prototype;
    return p.scrollTo = function(l) {
      l = Math.max(0, l), this.setState(function(d) {
        return d.scrollOffset === l ? null : {
          scrollDirection: d.scrollOffset < l ? "forward" : "backward",
          scrollOffset: l,
          scrollUpdateWasRequested: !0
        };
      }, this._resetIsScrollingDebounced);
    }, p.scrollToItem = function(l, d) {
      d === void 0 && (d = "auto");
      var g = this.props, y = g.itemCount, b = g.layout, D = this.state.scrollOffset;
      l = Math.max(0, Math.min(l, y - 1));
      var I = 0;
      if (this._outerRef) {
        var T = this._outerRef;
        b === "vertical" ? I = T.scrollWidth > T.clientWidth ? Pt() : 0 : I = T.scrollHeight > T.clientHeight ? Pt() : 0;
      }
      this.scrollTo(o(this.props, l, d, D, this._instanceProps, I));
    }, p.componentDidMount = function() {
      var l = this.props, d = l.direction, g = l.initialScrollOffset, y = l.layout;
      if (typeof g == "number" && this._outerRef != null) {
        var b = this._outerRef;
        d === "horizontal" || y === "horizontal" ? b.scrollLeft = g : b.scrollTop = g;
      }
      this._callPropsCallbacks();
    }, p.componentDidUpdate = function() {
      var l = this.props, d = l.direction, g = l.layout, y = this.state, b = y.scrollOffset, D = y.scrollUpdateWasRequested;
      if (D && this._outerRef != null) {
        var I = this._outerRef;
        if (d === "horizontal" || g === "horizontal")
          if (d === "rtl")
            switch (At()) {
              case "negative":
                I.scrollLeft = -b;
                break;
              case "positive-ascending":
                I.scrollLeft = b;
                break;
              default:
                var T = I.clientWidth, E = I.scrollWidth;
                I.scrollLeft = E - T - b;
                break;
            }
          else
            I.scrollLeft = b;
        else
          I.scrollTop = b;
      }
      this._callPropsCallbacks();
    }, p.componentWillUnmount = function() {
      this._resetIsScrollingTimeoutId !== null && xt(this._resetIsScrollingTimeoutId);
    }, p.render = function() {
      var l = this.props, d = l.children, g = l.className, y = l.direction, b = l.height, D = l.innerRef, I = l.innerElementType, T = l.innerTagName, E = l.itemCount, P = l.itemData, $ = l.itemKey, ce = $ === void 0 ? Pi : $, de = l.layout, En = l.outerElementType, _n = l.outerTagName, Cn = l.style, Nn = l.useIsScrolling, xn = l.width, mt = this.state.isScrolling, Pe = y === "horizontal" || de === "horizontal", Pn = Pe ? this._onScrollHorizontal : this._onScrollVertical, bt = this._getRangeToRender(), An = bt[0], kn = bt[1], Ot = [];
      if (E > 0)
        for (var ee = An; ee <= kn; ee++)
          Ot.push(Ae(d, {
            data: P,
            key: ce(ee, P),
            index: ee,
            isScrolling: Nn ? mt : void 0,
            style: this._getItemStyle(ee)
          }));
      var St = n(this.props, this._instanceProps);
      return Ae(En || _n || "div", {
        className: g,
        onScroll: Pn,
        ref: this._outerRefSetter,
        style: Un({
          position: "relative",
          height: b,
          width: xn,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction: y
        }, Cn)
      }, Ae(I || T || "div", {
        children: Ot,
        ref: D,
        style: {
          height: Pe ? "100%" : St,
          pointerEvents: mt ? "none" : void 0,
          width: Pe ? St : "100%"
        }
      }));
    }, p._callPropsCallbacks = function() {
      if (typeof this.props.onItemsRendered == "function") {
        var l = this.props.itemCount;
        if (l > 0) {
          var d = this._getRangeToRender(), g = d[0], y = d[1], b = d[2], D = d[3];
          this._callOnItemsRendered(g, y, b, D);
        }
      }
      if (typeof this.props.onScroll == "function") {
        var I = this.state, T = I.scrollDirection, E = I.scrollOffset, P = I.scrollUpdateWasRequested;
        this._callOnScroll(T, E, P);
      }
    }, p._getRangeToRender = function() {
      var l = this.props, d = l.itemCount, g = l.overscanCount, y = this.state, b = y.isScrolling, D = y.scrollDirection, I = y.scrollOffset;
      if (d === 0)
        return [0, 0, 0, 0];
      var T = s(this.props, I, this._instanceProps), E = a(this.props, T, I, this._instanceProps), P = !b || D === "backward" ? Math.max(1, g) : 1, $ = !b || D === "forward" ? Math.max(1, g) : 1;
      return [Math.max(0, T - P), Math.max(0, Math.min(d - 1, E + $)), T, E];
    }, v;
  }(Mn), e.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: !1
  }, e;
}
var Ai = function(e, r) {
  var n = e.children, i = e.direction, o = e.height, s = e.layout, a = e.innerTagName, u = e.outerTagName, c = e.width, f = r.instance;
  if (process.env.NODE_ENV !== "production") {
    (a != null || u != null) && ye && !ye.has(f) && (ye.add(f), console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));
    var h = i === "horizontal" || s === "horizontal";
    switch (i) {
      case "horizontal":
      case "vertical":
        ve && !ve.has(f) && (ve.add(f), console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'));
        break;
      case "ltr":
      case "rtl":
        break;
      default:
        throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". ' + ('"' + i + '" was specified.'));
    }
    switch (s) {
      case "horizontal":
      case "vertical":
        break;
      default:
        throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". ' + ('"' + s + '" was specified.'));
    }
    if (n == null)
      throw Error('An invalid "children" prop has been specified. Value should be a React component. ' + ('"' + (n === null ? "null" : typeof n) + '" was specified.'));
    if (h && typeof c != "number")
      throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. ' + ('"' + (c === null ? "null" : typeof c) + '" was specified.'));
    if (!h && typeof o != "number")
      throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. ' + ('"' + (o === null ? "null" : typeof o) + '" was specified.'));
  }
}, ki = 50, J = function(e, r, n) {
  var i = e, o = i.itemSize, s = n.itemMetadataMap, a = n.lastMeasuredIndex;
  if (r > a) {
    var u = 0;
    if (a >= 0) {
      var c = s[a];
      u = c.offset + c.size;
    }
    for (var f = a + 1; f <= r; f++) {
      var h = o(f);
      s[f] = {
        offset: u,
        size: h
      }, u += h;
    }
    n.lastMeasuredIndex = r;
  }
  return s[r];
}, Ri = function(e, r, n) {
  var i = r.itemMetadataMap, o = r.lastMeasuredIndex, s = o > 0 ? i[o].offset : 0;
  return s >= n ? Jr(e, r, o, 0, n) : Mi(e, r, Math.max(0, o), n);
}, Jr = function(e, r, n, i, o) {
  for (; i <= n; ) {
    var s = i + Math.floor((n - i) / 2), a = J(e, s, r).offset;
    if (a === o)
      return s;
    a < o ? i = s + 1 : a > o && (n = s - 1);
  }
  return i > 0 ? i - 1 : 0;
}, Mi = function(e, r, n, i) {
  for (var o = e.itemCount, s = 1; n < o && J(e, n, r).offset < i; )
    n += s, s *= 2;
  return Jr(e, r, Math.min(n, o - 1), Math.floor(n / 2), i);
}, kt = function(e, r) {
  var n = e.itemCount, i = r.itemMetadataMap, o = r.estimatedItemSize, s = r.lastMeasuredIndex, a = 0;
  if (s >= n && (s = n - 1), s >= 0) {
    var u = i[s];
    a = u.offset + u.size;
  }
  var c = n - s - 1, f = c * o;
  return a + f;
}, Li = /* @__PURE__ */ Qr({
  getItemOffset: function(e, r, n) {
    return J(e, r, n).offset;
  },
  getItemSize: function(e, r, n) {
    return n.itemMetadataMap[r].size;
  },
  getEstimatedTotalSize: kt,
  getOffsetForIndexAndAlignment: function(e, r, n, i, o, s) {
    var a = e.direction, u = e.height, c = e.layout, f = e.width, h = a === "horizontal" || c === "horizontal", v = h ? f : u, p = J(e, r, o), m = kt(e, o), l = Math.max(0, Math.min(m - v, p.offset)), d = Math.max(0, p.offset - v + p.size + s);
    switch (n === "smart" && (i >= d - v && i <= l + v ? n = "auto" : n = "center"), n) {
      case "start":
        return l;
      case "end":
        return d;
      case "center":
        return Math.round(d + (l - d) / 2);
      case "auto":
      default:
        return i >= d && i <= l ? i : i < d ? d : l;
    }
  },
  getStartIndexForOffset: function(e, r, n) {
    return Ri(e, n, r);
  },
  getStopIndexForStartIndex: function(e, r, n, i) {
    for (var o = e.direction, s = e.height, a = e.itemCount, u = e.layout, c = e.width, f = o === "horizontal" || u === "horizontal", h = f ? c : s, v = J(e, r, i), p = n + h, m = v.offset + v.size, l = r; l < a - 1 && m < p; )
      l++, m += J(e, l, i).size;
    return l;
  },
  initInstanceProps: function(e, r) {
    var n = e, i = n.estimatedItemSize, o = {
      itemMetadataMap: {},
      estimatedItemSize: i || ki,
      lastMeasuredIndex: -1
    };
    return r.resetAfterIndex = function(s, a) {
      a === void 0 && (a = !0), o.lastMeasuredIndex = Math.min(o.lastMeasuredIndex, s - 1), r._getItemStyleCache(-1), a && r.forceUpdate();
    }, o;
  },
  shouldResetStyleCacheOnItemSizeChange: !1,
  validateProps: function(e) {
    var r = e.itemSize;
    if (process.env.NODE_ENV !== "production" && typeof r != "function")
      throw Error('An invalid "itemSize" prop has been specified. Value should be a function. ' + ('"' + (r === null ? "null" : typeof r) + '" was specified.'));
  }
}), $i = /* @__PURE__ */ Qr({
  getItemOffset: function(e, r) {
    var n = e.itemSize;
    return r * n;
  },
  getItemSize: function(e, r) {
    var n = e.itemSize;
    return n;
  },
  getEstimatedTotalSize: function(e) {
    var r = e.itemCount, n = e.itemSize;
    return n * r;
  },
  getOffsetForIndexAndAlignment: function(e, r, n, i, o, s) {
    var a = e.direction, u = e.height, c = e.itemCount, f = e.itemSize, h = e.layout, v = e.width, p = a === "horizontal" || h === "horizontal", m = p ? v : u, l = Math.max(0, c * f - m), d = Math.min(l, r * f), g = Math.max(0, r * f - m + f + s);
    switch (n === "smart" && (i >= g - m && i <= d + m ? n = "auto" : n = "center"), n) {
      case "start":
        return d;
      case "end":
        return g;
      case "center": {
        var y = Math.round(g + (d - g) / 2);
        return y < Math.ceil(m / 2) ? 0 : y > l + Math.floor(m / 2) ? l : y;
      }
      case "auto":
      default:
        return i >= g && i <= d ? i : i < g ? g : d;
    }
  },
  getStartIndexForOffset: function(e, r) {
    var n = e.itemCount, i = e.itemSize;
    return Math.max(0, Math.min(n - 1, Math.floor(r / i)));
  },
  getStopIndexForStartIndex: function(e, r, n) {
    var i = e.direction, o = e.height, s = e.itemCount, a = e.itemSize, u = e.layout, c = e.width, f = i === "horizontal" || u === "horizontal", h = r * a, v = f ? c : o, p = Math.ceil((v + n - h) / a);
    return Math.max(0, Math.min(
      s - 1,
      r + p - 1
      // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function(e) {
  },
  shouldResetStyleCacheOnItemSizeChange: !0,
  validateProps: function(e) {
    var r = e.itemSize;
    if (process.env.NODE_ENV !== "production" && typeof r != "number")
      throw Error('An invalid "itemSize" prop has been specified. Value should be a number. ' + ('"' + (r === null ? "null" : typeof r) + '" was specified.'));
  }
});
function ji() {
  var t, e;
  const r = A(), i = Gn().cursor;
  if (!i || i.type !== "line")
    return null;
  const o = r.indent, s = r.rowTopPosition(i.index) + ((e = (t = r.props.padding) !== null && t !== void 0 ? t : r.props.paddingTop) !== null && e !== void 0 ? e : 0), a = o * i.level, u = r.renderCursor;
  return O(u, { top: s, left: a, indent: o });
}
var Hi = globalThis && globalThis.__rest || function(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
};
const zi = ut(function(e, r) {
  const { children: n } = e, i = Hi(e, ["children"]), o = A();
  return V("div", Object.assign({
    // @ts-ignore
    ref: r
  }, i, { onClick: (s) => {
    o.props.disableDeselectOnClick || s.currentTarget === s.target && o.deselectAll();
  }, children: [O(Fi, {}), n] }));
}), Fi = () => {
  const t = A();
  return O("div", { style: {
    height: t.rowTopPosition(t.visibleNodes.length),
    width: "100%",
    position: "absolute",
    left: "0",
    right: "0"
  }, children: O(ji, {}) });
};
var Ui = globalThis && globalThis.__rest || function(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
};
const Vi = ut(function(e, r) {
  var n, i, o, s, { style: a } = e, u = Ui(e, ["style"]);
  const c = A(), f = (i = (n = c.props.padding) !== null && n !== void 0 ? n : c.props.paddingTop) !== null && i !== void 0 ? i : 0, h = (s = (o = c.props.padding) !== null && o !== void 0 ? o : c.props.paddingBottom) !== null && s !== void 0 ? s : 0;
  return O("div", Object.assign({ ref: r, style: Object.assign(Object.assign({}, a), { height: `${parseFloat(a.height) + f + h}px` }) }, u));
});
var Zr = ue({
  dragDropManager: void 0
}), M;
(function(t) {
  t.SOURCE = "SOURCE", t.TARGET = "TARGET";
})(M || (M = {}));
function S(t, e) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  if (process.env.NODE_ENV !== "production" && e === void 0)
    throw new Error("invariant requires an error message argument");
  if (!t) {
    var o;
    if (e === void 0)
      o = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var s = 0;
      o = new Error(e.replace(/%s/g, function() {
        return n[s++];
      })), o.name = "Invariant Violation";
    }
    throw o.framesToPop = 1, o;
  }
}
var dt = "dnd-core/INIT_COORDS", Ee = "dnd-core/BEGIN_DRAG", ft = "dnd-core/PUBLISH_DRAG_SOURCE", _e = "dnd-core/HOVER", Ce = "dnd-core/DROP", Ne = "dnd-core/END_DRAG";
function Rt(t, e) {
  return {
    type: dt,
    payload: {
      sourceClientOffset: e || null,
      clientOffset: t || null
    }
  };
}
function me(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? me = function(r) {
    return typeof r;
  } : me = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, me(t);
}
function Wi(t, e, r) {
  return e.split(".").reduce(function(n, i) {
    return n && n[i] ? n[i] : r || null;
  }, t);
}
function Bi(t, e) {
  return t.filter(function(r) {
    return r !== e;
  });
}
function en(t) {
  return me(t) === "object";
}
function Ki(t, e) {
  var r = /* @__PURE__ */ new Map(), n = function(s) {
    r.set(s, r.has(s) ? r.get(s) + 1 : 1);
  };
  t.forEach(n), e.forEach(n);
  var i = [];
  return r.forEach(function(o, s) {
    o === 1 && i.push(s);
  }), i;
}
function qi(t, e) {
  return t.filter(function(r) {
    return e.indexOf(r) > -1;
  });
}
var Gi = {
  type: dt,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function Yi(t) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      publishSource: !0
    }, i = n.publishSource, o = i === void 0 ? !0 : i, s = n.clientOffset, a = n.getSourceClientOffset, u = t.getMonitor(), c = t.getRegistry();
    t.dispatch(Rt(s)), Xi(r, u, c);
    var f = Zi(r, u);
    if (f === null) {
      t.dispatch(Gi);
      return;
    }
    var h = null;
    if (s) {
      if (!a)
        throw new Error("getSourceClientOffset must be defined");
      Qi(a), h = a(f);
    }
    t.dispatch(Rt(s, h));
    var v = c.getSource(f), p = v.beginDrag(u, f);
    if (p != null) {
      Ji(p), c.pinSource(f);
      var m = c.getSourceType(f);
      return {
        type: Ee,
        payload: {
          itemType: m,
          item: p,
          sourceId: f,
          clientOffset: s || null,
          sourceClientOffset: h || null,
          isSourcePublic: !!o
        }
      };
    }
  };
}
function Xi(t, e, r) {
  S(!e.isDragging(), "Cannot call beginDrag while dragging."), t.forEach(function(n) {
    S(r.getSource(n), "Expected sourceIds to be registered.");
  });
}
function Qi(t) {
  S(typeof t == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function Ji(t) {
  S(en(t), "Item must be an object.");
}
function Zi(t, e) {
  for (var r = null, n = t.length - 1; n >= 0; n--)
    if (e.canDragSource(t[n])) {
      r = t[n];
      break;
    }
  return r;
}
function eo(t) {
  return function() {
    var r = t.getMonitor();
    if (r.isDragging())
      return {
        type: ft
      };
  };
}
function et(t, e) {
  return e === null ? t === null : Array.isArray(t) ? t.some(function(r) {
    return r === e;
  }) : t === e;
}
function to(t) {
  return function(r) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.clientOffset;
    ro(r);
    var o = r.slice(0), s = t.getMonitor(), a = t.getRegistry();
    no(o, s, a);
    var u = s.getItemType();
    return io(o, a, u), oo(o, s, a), {
      type: _e,
      payload: {
        targetIds: o,
        clientOffset: i || null
      }
    };
  };
}
function ro(t) {
  S(Array.isArray(t), "Expected targetIds to be an array.");
}
function no(t, e, r) {
  S(e.isDragging(), "Cannot call hover while not dragging."), S(!e.didDrop(), "Cannot call hover after drop.");
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    S(t.lastIndexOf(i) === n, "Expected targetIds to be unique in the passed array.");
    var o = r.getTarget(i);
    S(o, "Expected targetIds to be registered.");
  }
}
function io(t, e, r) {
  for (var n = t.length - 1; n >= 0; n--) {
    var i = t[n], o = e.getTargetType(i);
    et(o, r) || t.splice(n, 1);
  }
}
function oo(t, e, r) {
  t.forEach(function(n) {
    var i = r.getTarget(n);
    i.hover(e, n);
  });
}
function Mt(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Mt(Object(r), !0).forEach(function(n) {
      so(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Mt(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function so(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function ao(t) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.getMonitor(), i = t.getRegistry();
    uo(n);
    var o = fo(n);
    o.forEach(function(s, a) {
      var u = lo(s, a, i, n), c = {
        type: Ce,
        payload: {
          dropResult: Lt(Lt({}, r), u)
        }
      };
      t.dispatch(c);
    });
  };
}
function uo(t) {
  S(t.isDragging(), "Cannot call drop while not dragging."), S(!t.didDrop(), "Cannot call drop twice during one drag operation.");
}
function lo(t, e, r, n) {
  var i = r.getTarget(t), o = i ? i.drop(n, t) : void 0;
  return co(o), typeof o > "u" && (o = e === 0 ? {} : n.getDropResult()), o;
}
function co(t) {
  S(typeof t > "u" || en(t), "Drop result must either be an object or undefined.");
}
function fo(t) {
  var e = t.getTargetIds().filter(t.canDropOnTarget, t);
  return e.reverse(), e;
}
function ho(t) {
  return function() {
    var r = t.getMonitor(), n = t.getRegistry();
    go(r);
    var i = r.getSourceId();
    if (i != null) {
      var o = n.getSource(i, !0);
      o.endDrag(r, i), n.unpinSource();
    }
    return {
      type: Ne
    };
  };
}
function go(t) {
  S(t.isDragging(), "Cannot call endDrag while not dragging.");
}
function po(t) {
  return {
    beginDrag: Yi(t),
    publishDragSource: eo(t),
    hover: to(t),
    drop: ao(t),
    endDrag: ho(t)
  };
}
function vo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function $t(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function yo(t, e, r) {
  return e && $t(t.prototype, e), r && $t(t, r), t;
}
function te(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var mo = /* @__PURE__ */ function() {
  function t(e, r) {
    var n = this;
    vo(this, t), te(this, "store", void 0), te(this, "monitor", void 0), te(this, "backend", void 0), te(this, "isSetUp", !1), te(this, "handleRefCountChange", function() {
      var i = n.store.getState().refCount > 0;
      n.backend && (i && !n.isSetUp ? (n.backend.setup(), n.isSetUp = !0) : !i && n.isSetUp && (n.backend.teardown(), n.isSetUp = !1));
    }), this.store = e, this.monitor = r, e.subscribe(this.handleRefCountChange);
  }
  return yo(t, [{
    key: "receiveBackend",
    value: function(r) {
      this.backend = r;
    }
  }, {
    key: "getMonitor",
    value: function() {
      return this.monitor;
    }
  }, {
    key: "getBackend",
    value: function() {
      return this.backend;
    }
  }, {
    key: "getRegistry",
    value: function() {
      return this.monitor.registry;
    }
  }, {
    key: "getActions",
    value: function() {
      var r = this, n = this.store.dispatch;
      function i(s) {
        return function() {
          for (var a = arguments.length, u = new Array(a), c = 0; c < a; c++)
            u[c] = arguments[c];
          var f = s.apply(r, u);
          typeof f < "u" && n(f);
        };
      }
      var o = po(this);
      return Object.keys(o).reduce(function(s, a) {
        var u = o[a];
        return s[a] = i(u), s;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function(r) {
      this.store.dispatch(r);
    }
  }]), t;
}();
function k(t) {
  return "Minified Redux error #" + t + "; visit https://redux.js.org/Errors?code=" + t + " for the full message or use the non-minified dev environment for full errors. ";
}
var jt = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), je = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Ht = {
  INIT: "@@redux/INIT" + je(),
  REPLACE: "@@redux/REPLACE" + je(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + je();
  }
};
function bo(t) {
  if (typeof t != "object" || t === null)
    return !1;
  for (var e = t; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function Oo(t) {
  if (t === void 0)
    return "undefined";
  if (t === null)
    return "null";
  var e = typeof t;
  switch (e) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return e;
  }
  if (Array.isArray(t))
    return "array";
  if (wo(t))
    return "date";
  if (Io(t))
    return "error";
  var r = So(t);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return e.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function So(t) {
  return typeof t.constructor == "function" ? t.constructor.name : null;
}
function Io(t) {
  return t instanceof Error || typeof t.message == "string" && t.constructor && typeof t.constructor.stackTraceLimit == "number";
}
function wo(t) {
  return t instanceof Date ? !0 : typeof t.toDateString == "function" && typeof t.getDate == "function" && typeof t.setDate == "function";
}
function G(t) {
  var e = typeof t;
  return process.env.NODE_ENV !== "production" && (e = Oo(t)), e;
}
function tn(t, e, r) {
  var n;
  if (typeof e == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? k(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof e == "function" && typeof r > "u" && (r = e, e = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? k(1) : "Expected the enhancer to be a function. Instead, received: '" + G(r) + "'");
    return r(tn)(t, e);
  }
  if (typeof t != "function")
    throw new Error(process.env.NODE_ENV === "production" ? k(2) : "Expected the root reducer to be a function. Instead, received: '" + G(t) + "'");
  var i = t, o = e, s = [], a = s, u = !1;
  function c() {
    a === s && (a = s.slice());
  }
  function f() {
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? k(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function h(l) {
    if (typeof l != "function")
      throw new Error(process.env.NODE_ENV === "production" ? k(4) : "Expected the listener to be a function. Instead, received: '" + G(l) + "'");
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? k(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var d = !0;
    return c(), a.push(l), function() {
      if (d) {
        if (u)
          throw new Error(process.env.NODE_ENV === "production" ? k(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        d = !1, c();
        var y = a.indexOf(l);
        a.splice(y, 1), s = null;
      }
    };
  }
  function v(l) {
    if (!bo(l))
      throw new Error(process.env.NODE_ENV === "production" ? k(7) : "Actions must be plain objects. Instead, the actual type was: '" + G(l) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof l.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? k(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? k(9) : "Reducers may not dispatch actions.");
    try {
      u = !0, o = i(o, l);
    } finally {
      u = !1;
    }
    for (var d = s = a, g = 0; g < d.length; g++) {
      var y = d[g];
      y();
    }
    return l;
  }
  function p(l) {
    if (typeof l != "function")
      throw new Error(process.env.NODE_ENV === "production" ? k(10) : "Expected the nextReducer to be a function. Instead, received: '" + G(l));
    i = l, v({
      type: Ht.REPLACE
    });
  }
  function m() {
    var l, d = h;
    return l = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(y) {
        if (typeof y != "object" || y === null)
          throw new Error(process.env.NODE_ENV === "production" ? k(11) : "Expected the observer to be an object. Instead, received: '" + G(y) + "'");
        function b() {
          y.next && y.next(f());
        }
        b();
        var D = d(b);
        return {
          unsubscribe: D
        };
      }
    }, l[jt] = function() {
      return this;
    }, l;
  }
  return v({
    type: Ht.INIT
  }), n = {
    dispatch: v,
    subscribe: h,
    getState: f,
    replaceReducer: p
  }, n[jt] = m, n;
}
var Do = function(e, r) {
  return e === r;
};
function To(t, e) {
  return !t && !e ? !0 : !t || !e ? !1 : t.x === e.x && t.y === e.y;
}
function Eo(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Do;
  if (t.length !== e.length)
    return !1;
  for (var n = 0; n < t.length; ++n)
    if (!r(t[n], e[n]))
      return !1;
  return !0;
}
function zt(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ft(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? zt(Object(r), !0).forEach(function(n) {
      _o(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : zt(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function _o(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Ut = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function Co() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ut, e = arguments.length > 1 ? arguments[1] : void 0, r = e.payload;
  switch (e.type) {
    case dt:
    case Ee:
      return {
        initialSourceClientOffset: r.sourceClientOffset,
        initialClientOffset: r.clientOffset,
        clientOffset: r.clientOffset
      };
    case _e:
      return To(t.clientOffset, r.clientOffset) ? t : Ft(Ft({}, t), {}, {
        clientOffset: r.clientOffset
      });
    case Ne:
    case Ce:
      return Ut;
    default:
      return t;
  }
}
var ht = "dnd-core/ADD_SOURCE", gt = "dnd-core/ADD_TARGET", pt = "dnd-core/REMOVE_SOURCE", xe = "dnd-core/REMOVE_TARGET";
function No(t) {
  return {
    type: ht,
    payload: {
      sourceId: t
    }
  };
}
function xo(t) {
  return {
    type: gt,
    payload: {
      targetId: t
    }
  };
}
function Po(t) {
  return {
    type: pt,
    payload: {
      sourceId: t
    }
  };
}
function Ao(t) {
  return {
    type: xe,
    payload: {
      targetId: t
    }
  };
}
function Vt(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function R(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Vt(Object(r), !0).forEach(function(n) {
      ko(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Vt(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function ko(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Ro = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function Mo() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ro, e = arguments.length > 1 ? arguments[1] : void 0, r = e.payload;
  switch (e.type) {
    case Ee:
      return R(R({}, t), {}, {
        itemType: r.itemType,
        item: r.item,
        sourceId: r.sourceId,
        isSourcePublic: r.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case ft:
      return R(R({}, t), {}, {
        isSourcePublic: !0
      });
    case _e:
      return R(R({}, t), {}, {
        targetIds: r.targetIds
      });
    case xe:
      return t.targetIds.indexOf(r.targetId) === -1 ? t : R(R({}, t), {}, {
        targetIds: Bi(t.targetIds, r.targetId)
      });
    case Ce:
      return R(R({}, t), {}, {
        dropResult: r.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case Ne:
      return R(R({}, t), {}, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return t;
  }
}
function Lo() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0;
  switch (e.type) {
    case ht:
    case gt:
      return t + 1;
    case pt:
    case xe:
      return t - 1;
    default:
      return t;
  }
}
var De = [], vt = [];
De.__IS_NONE__ = !0;
vt.__IS_ALL__ = !0;
function $o(t, e) {
  if (t === De)
    return !1;
  if (t === vt || typeof e > "u")
    return !0;
  var r = qi(e, t);
  return r.length > 0;
}
function jo() {
  var t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case _e:
      break;
    case ht:
    case gt:
    case xe:
    case pt:
      return De;
    case Ee:
    case ft:
    case Ne:
    case Ce:
    default:
      return vt;
  }
  var e = t.payload, r = e.targetIds, n = r === void 0 ? [] : r, i = e.prevTargetIds, o = i === void 0 ? [] : i, s = Ki(n, o), a = s.length > 0 || !Eo(n, o);
  if (!a)
    return De;
  var u = o[o.length - 1], c = n[n.length - 1];
  return u !== c && (u && s.push(u), c && s.push(c)), s;
}
function Ho() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return t + 1;
}
function Wt(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Wt(Object(r), !0).forEach(function(n) {
      zo(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Wt(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function zo(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Fo() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: jo(t.dirtyHandlerIds, {
      type: e.type,
      payload: Bt(Bt({}, e.payload), {}, {
        prevTargetIds: Wi(t, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: Co(t.dragOffset, e),
    refCount: Lo(t.refCount, e),
    dragOperation: Mo(t.dragOperation, e),
    stateId: Ho(t.stateId)
  };
}
function Uo(t, e) {
  return {
    x: t.x + e.x,
    y: t.y + e.y
  };
}
function rn(t, e) {
  return {
    x: t.x - e.x,
    y: t.y - e.y
  };
}
function Vo(t) {
  var e = t.clientOffset, r = t.initialClientOffset, n = t.initialSourceClientOffset;
  return !e || !r || !n ? null : rn(Uo(e, n), r);
}
function Wo(t) {
  var e = t.clientOffset, r = t.initialClientOffset;
  return !e || !r ? null : rn(e, r);
}
function Bo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Kt(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Ko(t, e, r) {
  return e && Kt(t.prototype, e), r && Kt(t, r), t;
}
function qt(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var qo = /* @__PURE__ */ function() {
  function t(e, r) {
    Bo(this, t), qt(this, "store", void 0), qt(this, "registry", void 0), this.store = e, this.registry = r;
  }
  return Ko(t, [{
    key: "subscribeToStateChange",
    value: function(r) {
      var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        handlerIds: void 0
      }, o = i.handlerIds;
      S(typeof r == "function", "listener must be a function."), S(typeof o > "u" || Array.isArray(o), "handlerIds, when specified, must be an array of strings.");
      var s = this.store.getState().stateId, a = function() {
        var c = n.store.getState(), f = c.stateId;
        try {
          var h = f === s || f === s + 1 && !$o(c.dirtyHandlerIds, o);
          h || r();
        } finally {
          s = f;
        }
      };
      return this.store.subscribe(a);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(r) {
      var n = this;
      S(typeof r == "function", "listener must be a function.");
      var i = this.store.getState().dragOffset, o = function() {
        var a = n.store.getState().dragOffset;
        a !== i && (i = a, r());
      };
      return this.store.subscribe(o);
    }
  }, {
    key: "canDragSource",
    value: function(r) {
      if (!r)
        return !1;
      var n = this.registry.getSource(r);
      return S(n, "Expected to find a valid source. sourceId=".concat(r)), this.isDragging() ? !1 : n.canDrag(this, r);
    }
  }, {
    key: "canDropOnTarget",
    value: function(r) {
      if (!r)
        return !1;
      var n = this.registry.getTarget(r);
      if (S(n, "Expected to find a valid target. targetId=".concat(r)), !this.isDragging() || this.didDrop())
        return !1;
      var i = this.registry.getTargetType(r), o = this.getItemType();
      return et(i, o) && n.canDrop(this, r);
    }
  }, {
    key: "isDragging",
    value: function() {
      return !!this.getItemType();
    }
  }, {
    key: "isDraggingSource",
    value: function(r) {
      if (!r)
        return !1;
      var n = this.registry.getSource(r, !0);
      if (S(n, "Expected to find a valid source. sourceId=".concat(r)), !this.isDragging() || !this.isSourcePublic())
        return !1;
      var i = this.registry.getSourceType(r), o = this.getItemType();
      return i !== o ? !1 : n.isDragging(this, r);
    }
  }, {
    key: "isOverTarget",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        shallow: !1
      };
      if (!r)
        return !1;
      var i = n.shallow;
      if (!this.isDragging())
        return !1;
      var o = this.registry.getTargetType(r), s = this.getItemType();
      if (s && !et(o, s))
        return !1;
      var a = this.getTargetIds();
      if (!a.length)
        return !1;
      var u = a.indexOf(r);
      return i ? u === a.length - 1 : u > -1;
    }
  }, {
    key: "getItemType",
    value: function() {
      return this.store.getState().dragOperation.itemType;
    }
  }, {
    key: "getItem",
    value: function() {
      return this.store.getState().dragOperation.item;
    }
  }, {
    key: "getSourceId",
    value: function() {
      return this.store.getState().dragOperation.sourceId;
    }
  }, {
    key: "getTargetIds",
    value: function() {
      return this.store.getState().dragOperation.targetIds;
    }
  }, {
    key: "getDropResult",
    value: function() {
      return this.store.getState().dragOperation.dropResult;
    }
  }, {
    key: "didDrop",
    value: function() {
      return this.store.getState().dragOperation.didDrop;
    }
  }, {
    key: "isSourcePublic",
    value: function() {
      return !!this.store.getState().dragOperation.isSourcePublic;
    }
  }, {
    key: "getInitialClientOffset",
    value: function() {
      return this.store.getState().dragOffset.initialClientOffset;
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    }
  }, {
    key: "getClientOffset",
    value: function() {
      return this.store.getState().dragOffset.clientOffset;
    }
  }, {
    key: "getSourceClientOffset",
    value: function() {
      return Vo(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return Wo(this.store.getState().dragOffset);
    }
  }]), t;
}(), Go = 0;
function Yo() {
  return Go++;
}
function be(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? be = function(r) {
    return typeof r;
  } : be = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, be(t);
}
function Xo(t) {
  S(typeof t.canDrag == "function", "Expected canDrag to be a function."), S(typeof t.beginDrag == "function", "Expected beginDrag to be a function."), S(typeof t.endDrag == "function", "Expected endDrag to be a function.");
}
function Qo(t) {
  S(typeof t.canDrop == "function", "Expected canDrop to be a function."), S(typeof t.hover == "function", "Expected hover to be a function."), S(typeof t.drop == "function", "Expected beginDrag to be a function.");
}
function tt(t, e) {
  if (e && Array.isArray(t)) {
    t.forEach(function(r) {
      return tt(r, !1);
    });
    return;
  }
  S(typeof t == "string" || be(t) === "symbol", e ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
const Gt = typeof global < "u" ? global : self, nn = Gt.MutationObserver || Gt.WebKitMutationObserver;
function on(t) {
  return function() {
    const r = setTimeout(i, 0), n = setInterval(i, 50);
    function i() {
      clearTimeout(r), clearInterval(n), t();
    }
  };
}
function Jo(t) {
  let e = 1;
  const r = new nn(t), n = document.createTextNode("");
  return r.observe(n, {
    characterData: !0
  }), function() {
    e = -e, n.data = e;
  };
}
const Zo = typeof nn == "function" ? (
  // reliably everywhere they are implemented.
  // They are implemented in all modern browsers.
  //
  // - Android 4-4.3
  // - Chrome 26-34
  // - Firefox 14-29
  // - Internet Explorer 11
  // - iPad Safari 6-7.1
  // - iPhone Safari 7-7.1
  // - Safari 6-7
  Jo
) : (
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
  on
);
class es {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(e) {
    const { queue: r, requestFlush: n } = this;
    r.length || (n(), this.flushing = !0), r[r.length] = e;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      const { queue: e } = this;
      for (; this.index < e.length; ) {
        const r = this.index;
        if (this.index++, e[r].call(), this.index > this.capacity) {
          for (let n = 0, i = e.length - this.index; n < i; n++)
            e[n] = e[n + this.index];
          e.length -= this.index, this.index = 0;
        }
      }
      e.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (e) => {
      this.pendingErrors.push(e), this.requestErrorThrow();
    }, this.requestFlush = Zo(this.flush), this.requestErrorThrow = on(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class ts {
  call() {
    try {
      this.task && this.task();
    } catch (e) {
      this.onError(e);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(e, r) {
    this.onError = e, this.release = r, this.task = null;
  }
}
class rs {
  create(e) {
    const r = this.freeTasks, n = r.length ? r.pop() : new ts(
      this.onError,
      (i) => r[r.length] = i
    );
    return n.task = e, n;
  }
  constructor(e) {
    this.onError = e, this.freeTasks = [];
  }
}
const sn = new es(), ns = new rs(sn.registerPendingError);
function is(t) {
  sn.enqueueTask(ns.create(t));
}
function os(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Yt(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function ss(t, e, r) {
  return e && Yt(t.prototype, e), r && Yt(t, r), t;
}
function Y(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function as(t, e) {
  return ds(t) || cs(t, e) || ls(t, e) || us();
}
function us() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ls(t, e) {
  if (t) {
    if (typeof t == "string")
      return Xt(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Xt(t, e);
  }
}
function Xt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function cs(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, s, a;
    try {
      for (r = r.call(t); !(i = (s = r.next()).done) && (n.push(s.value), !(e && n.length === e)); i = !0)
        ;
    } catch (u) {
      o = !0, a = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw a;
      }
    }
    return n;
  }
}
function ds(t) {
  if (Array.isArray(t))
    return t;
}
function fs(t) {
  var e = Yo().toString();
  switch (t) {
    case M.SOURCE:
      return "S".concat(e);
    case M.TARGET:
      return "T".concat(e);
    default:
      throw new Error("Unknown Handler Role: ".concat(t));
  }
}
function Qt(t) {
  switch (t[0]) {
    case "S":
      return M.SOURCE;
    case "T":
      return M.TARGET;
    default:
      S(!1, "Cannot parse handler ID: ".concat(t));
  }
}
function Jt(t, e) {
  var r = t.entries(), n = !1;
  do {
    var i = r.next(), o = i.done, s = as(i.value, 2), a = s[1];
    if (a === e)
      return !0;
    n = !!o;
  } while (!n);
  return !1;
}
var hs = /* @__PURE__ */ function() {
  function t(e) {
    os(this, t), Y(this, "types", /* @__PURE__ */ new Map()), Y(this, "dragSources", /* @__PURE__ */ new Map()), Y(this, "dropTargets", /* @__PURE__ */ new Map()), Y(this, "pinnedSourceId", null), Y(this, "pinnedSource", null), Y(this, "store", void 0), this.store = e;
  }
  return ss(t, [{
    key: "addSource",
    value: function(r, n) {
      tt(r), Xo(n);
      var i = this.addHandler(M.SOURCE, r, n);
      return this.store.dispatch(No(i)), i;
    }
  }, {
    key: "addTarget",
    value: function(r, n) {
      tt(r, !0), Qo(n);
      var i = this.addHandler(M.TARGET, r, n);
      return this.store.dispatch(xo(i)), i;
    }
  }, {
    key: "containsHandler",
    value: function(r) {
      return Jt(this.dragSources, r) || Jt(this.dropTargets, r);
    }
  }, {
    key: "getSource",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      S(this.isSourceId(r), "Expected a valid source ID.");
      var i = n && r === this.pinnedSourceId, o = i ? this.pinnedSource : this.dragSources.get(r);
      return o;
    }
  }, {
    key: "getTarget",
    value: function(r) {
      return S(this.isTargetId(r), "Expected a valid target ID."), this.dropTargets.get(r);
    }
  }, {
    key: "getSourceType",
    value: function(r) {
      return S(this.isSourceId(r), "Expected a valid source ID."), this.types.get(r);
    }
  }, {
    key: "getTargetType",
    value: function(r) {
      return S(this.isTargetId(r), "Expected a valid target ID."), this.types.get(r);
    }
  }, {
    key: "isSourceId",
    value: function(r) {
      var n = Qt(r);
      return n === M.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function(r) {
      var n = Qt(r);
      return n === M.TARGET;
    }
  }, {
    key: "removeSource",
    value: function(r) {
      var n = this;
      S(this.getSource(r), "Expected an existing source."), this.store.dispatch(Po(r)), is(function() {
        n.dragSources.delete(r), n.types.delete(r);
      });
    }
  }, {
    key: "removeTarget",
    value: function(r) {
      S(this.getTarget(r), "Expected an existing target."), this.store.dispatch(Ao(r)), this.dropTargets.delete(r), this.types.delete(r);
    }
  }, {
    key: "pinSource",
    value: function(r) {
      var n = this.getSource(r);
      S(n, "Expected an existing source."), this.pinnedSourceId = r, this.pinnedSource = n;
    }
  }, {
    key: "unpinSource",
    value: function() {
      S(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function(r, n, i) {
      var o = fs(r);
      return this.types.set(o, n), r === M.SOURCE ? this.dragSources.set(o, i) : r === M.TARGET && this.dropTargets.set(o, i), o;
    }
  }]), t;
}();
function gs(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, i = ps(n), o = new qo(i, new hs(i)), s = new mo(i, o), a = t(s, e, r);
  return s.receiveBackend(a), s;
}
function ps(t) {
  var e = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return tn(Fo, t && e && e({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
var vs = ["children"];
function ys(t, e) {
  return Ss(t) || Os(t, e) || bs(t, e) || ms();
}
function ms() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bs(t, e) {
  if (t) {
    if (typeof t == "string")
      return Zt(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Zt(t, e);
  }
}
function Zt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Os(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, s, a;
    try {
      for (r = r.call(t); !(i = (s = r.next()).done) && (n.push(s.value), !(e && n.length === e)); i = !0)
        ;
    } catch (u) {
      o = !0, a = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw a;
      }
    }
    return n;
  }
}
function Ss(t) {
  if (Array.isArray(t))
    return t;
}
function Is(t, e) {
  if (t == null)
    return {};
  var r = ws(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      n = o[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function ws(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
var er = 0, Oe = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), Ds = at(function(e) {
  var r = e.children, n = Is(e, vs), i = Ts(n), o = ys(i, 2), s = o[0], a = o[1];
  return L(function() {
    if (a) {
      var u = an();
      return ++er, function() {
        --er === 0 && (u[Oe] = null);
      };
    }
  }, []), O(Zr.Provider, Object.assign({
    value: s
  }, {
    children: r
  }), void 0);
});
function Ts(t) {
  if ("manager" in t) {
    var e = {
      dragDropManager: t.manager
    };
    return [e, !1];
  }
  var r = Es(t.backend, t.context, t.options, t.debugMode), n = !t.context;
  return [r, n];
}
function Es(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : an(), r = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = e;
  return i[Oe] || (i[Oe] = {
    dragDropManager: gs(t, e, r, n)
  }), i[Oe];
}
function an() {
  return typeof global < "u" ? global : window;
}
function _s(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function tr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Cs(t, e, r) {
  return e && tr(t.prototype, e), r && tr(t, r), t;
}
function rr(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var He = !1, ze = !1, Ns = /* @__PURE__ */ function() {
  function t(e) {
    _s(this, t), rr(this, "internalMonitor", void 0), rr(this, "sourceId", null), this.internalMonitor = e.getMonitor();
  }
  return Cs(t, [{
    key: "receiveHandlerId",
    value: function(r) {
      this.sourceId = r;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function() {
      S(!He, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return He = !0, this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        He = !1;
      }
    }
  }, {
    key: "isDragging",
    value: function() {
      if (!this.sourceId)
        return !1;
      S(!ze, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return ze = !0, this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        ze = !1;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function(r, n) {
      return this.internalMonitor.subscribeToStateChange(r, n);
    }
  }, {
    key: "isDraggingSource",
    value: function(r) {
      return this.internalMonitor.isDraggingSource(r);
    }
  }, {
    key: "isOverTarget",
    value: function(r, n) {
      return this.internalMonitor.isOverTarget(r, n);
    }
  }, {
    key: "getTargetIds",
    value: function() {
      return this.internalMonitor.getTargetIds();
    }
  }, {
    key: "isSourcePublic",
    value: function() {
      return this.internalMonitor.isSourcePublic();
    }
  }, {
    key: "getSourceId",
    value: function() {
      return this.internalMonitor.getSourceId();
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(r) {
      return this.internalMonitor.subscribeToOffsetChange(r);
    }
  }, {
    key: "canDragSource",
    value: function(r) {
      return this.internalMonitor.canDragSource(r);
    }
  }, {
    key: "canDropOnTarget",
    value: function(r) {
      return this.internalMonitor.canDropOnTarget(r);
    }
  }, {
    key: "getItemType",
    value: function() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]), t;
}();
function xs(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function nr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Ps(t, e, r) {
  return e && nr(t.prototype, e), r && nr(t, r), t;
}
function ir(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Fe = !1, As = /* @__PURE__ */ function() {
  function t(e) {
    xs(this, t), ir(this, "internalMonitor", void 0), ir(this, "targetId", null), this.internalMonitor = e.getMonitor();
  }
  return Ps(t, [{
    key: "receiveHandlerId",
    value: function(r) {
      this.targetId = r;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function(r, n) {
      return this.internalMonitor.subscribeToStateChange(r, n);
    }
  }, {
    key: "canDrop",
    value: function() {
      if (!this.targetId)
        return !1;
      S(!Fe, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        return Fe = !0, this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        Fe = !1;
      }
    }
  }, {
    key: "isOver",
    value: function(r) {
      return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, r) : !1;
    }
  }, {
    key: "getItemType",
    value: function() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]), t;
}();
function ks(t) {
  if (typeof t.type != "string") {
    var e = t.type.displayName || t.type.name || "the component";
    throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(e, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
  }
}
function Rs(t) {
  return function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!Ln(e)) {
      var n = e;
      return t(n, r), n;
    }
    var i = e;
    ks(i);
    var o = r ? function(s) {
      return t(s, r);
    } : t;
    return Ms(i, o);
  };
}
function un(t) {
  var e = {};
  return Object.keys(t).forEach(function(r) {
    var n = t[r];
    if (r.endsWith("Ref"))
      e[r] = t[r];
    else {
      var i = Rs(n);
      e[r] = function() {
        return i;
      };
    }
  }), e;
}
function or(t, e) {
  typeof t == "function" ? t(e) : t.current = e;
}
function Ms(t, e) {
  var r = t.ref;
  return S(typeof r != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), r ? It(t, {
    ref: function(i) {
      or(r, i), or(e, i);
    }
  }) : It(t, {
    ref: e
  });
}
function Se(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Se = function(r) {
    return typeof r;
  } : Se = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Se(t);
}
function rt(t) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    t !== null && Se(t) === "object" && Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function nt(t, e, r, n) {
  var i = r ? r.call(n, t, e) : void 0;
  if (i !== void 0)
    return !!i;
  if (t === e)
    return !0;
  if (typeof t != "object" || !t || typeof e != "object" || !e)
    return !1;
  var o = Object.keys(t), s = Object.keys(e);
  if (o.length !== s.length)
    return !1;
  for (var a = Object.prototype.hasOwnProperty.bind(e), u = 0; u < o.length; u++) {
    var c = o[u];
    if (!a(c))
      return !1;
    var f = t[c], h = e[c];
    if (i = r ? r.call(n, f, h, c) : void 0, i === !1 || i === void 0 && f !== h)
      return !1;
  }
  return !0;
}
function Ls(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function sr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function $s(t, e, r) {
  return e && sr(t.prototype, e), r && sr(t, r), t;
}
function C(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var js = /* @__PURE__ */ function() {
  function t(e) {
    var r = this;
    Ls(this, t), C(this, "hooks", un({
      dragSource: function(i, o) {
        r.clearDragSource(), r.dragSourceOptions = o || null, rt(i) ? r.dragSourceRef = i : r.dragSourceNode = i, r.reconnectDragSource();
      },
      dragPreview: function(i, o) {
        r.clearDragPreview(), r.dragPreviewOptions = o || null, rt(i) ? r.dragPreviewRef = i : r.dragPreviewNode = i, r.reconnectDragPreview();
      }
    })), C(this, "handlerId", null), C(this, "dragSourceRef", null), C(this, "dragSourceNode", void 0), C(this, "dragSourceOptionsInternal", null), C(this, "dragSourceUnsubscribe", void 0), C(this, "dragPreviewRef", null), C(this, "dragPreviewNode", void 0), C(this, "dragPreviewOptionsInternal", null), C(this, "dragPreviewUnsubscribe", void 0), C(this, "lastConnectedHandlerId", null), C(this, "lastConnectedDragSource", null), C(this, "lastConnectedDragSourceOptions", null), C(this, "lastConnectedDragPreview", null), C(this, "lastConnectedDragPreviewOptions", null), C(this, "backend", void 0), this.backend = e;
  }
  return $s(t, [{
    key: "receiveHandlerId",
    value: function(r) {
      this.handlerId !== r && (this.handlerId = r, this.reconnect());
    }
  }, {
    key: "connectTarget",
    get: function() {
      return this.dragSource;
    }
  }, {
    key: "dragSourceOptions",
    get: function() {
      return this.dragSourceOptionsInternal;
    },
    set: function(r) {
      this.dragSourceOptionsInternal = r;
    }
  }, {
    key: "dragPreviewOptions",
    get: function() {
      return this.dragPreviewOptionsInternal;
    },
    set: function(r) {
      this.dragPreviewOptionsInternal = r;
    }
  }, {
    key: "reconnect",
    value: function() {
      this.reconnectDragSource(), this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function() {
      var r = this.dragSource, n = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
      if (n && this.disconnectDragSource(), !!this.handlerId) {
        if (!r) {
          this.lastConnectedDragSource = r;
          return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = r, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, r, this.dragSourceOptions));
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function() {
      var r = this.dragPreview, n = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
      if (n && this.disconnectDragPreview(), !!this.handlerId) {
        if (!r) {
          this.lastConnectedDragPreview = r;
          return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = r, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, r, this.dragPreviewOptions));
      }
    }
  }, {
    key: "didHandlerIdChange",
    value: function() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didConnectedDragSourceChange",
    value: function() {
      return this.lastConnectedDragSource !== this.dragSource;
    }
  }, {
    key: "didConnectedDragPreviewChange",
    value: function() {
      return this.lastConnectedDragPreview !== this.dragPreview;
    }
  }, {
    key: "didDragSourceOptionsChange",
    value: function() {
      return !nt(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function() {
      return !nt(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
  }, {
    key: "disconnectDragSource",
    value: function() {
      this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0);
    }
  }, {
    key: "disconnectDragPreview",
    value: function() {
      this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
    }
  }, {
    key: "dragSource",
    get: function() {
      return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
  }, {
    key: "dragPreview",
    get: function() {
      return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
  }, {
    key: "clearDragSource",
    value: function() {
      this.dragSourceNode = null, this.dragSourceRef = null;
    }
  }, {
    key: "clearDragPreview",
    value: function() {
      this.dragPreviewNode = null, this.dragPreviewRef = null;
    }
  }]), t;
}();
function Hs(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ar(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function zs(t, e, r) {
  return e && ar(t.prototype, e), r && ar(t, r), t;
}
function j(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Fs = /* @__PURE__ */ function() {
  function t(e) {
    var r = this;
    Hs(this, t), j(this, "hooks", un({
      dropTarget: function(i, o) {
        r.clearDropTarget(), r.dropTargetOptions = o, rt(i) ? r.dropTargetRef = i : r.dropTargetNode = i, r.reconnect();
      }
    })), j(this, "handlerId", null), j(this, "dropTargetRef", null), j(this, "dropTargetNode", void 0), j(this, "dropTargetOptionsInternal", null), j(this, "unsubscribeDropTarget", void 0), j(this, "lastConnectedHandlerId", null), j(this, "lastConnectedDropTarget", null), j(this, "lastConnectedDropTargetOptions", null), j(this, "backend", void 0), this.backend = e;
  }
  return zs(t, [{
    key: "connectTarget",
    get: function() {
      return this.dropTarget;
    }
  }, {
    key: "reconnect",
    value: function() {
      var r = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
      r && this.disconnectDropTarget();
      var n = this.dropTarget;
      if (this.handlerId) {
        if (!n) {
          this.lastConnectedDropTarget = n;
          return;
        }
        r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = n, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, n, this.dropTargetOptions));
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function(r) {
      r !== this.handlerId && (this.handlerId = r, this.reconnect());
    }
  }, {
    key: "dropTargetOptions",
    get: function() {
      return this.dropTargetOptionsInternal;
    },
    set: function(r) {
      this.dropTargetOptionsInternal = r;
    }
  }, {
    key: "didHandlerIdChange",
    value: function() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didDropTargetChange",
    value: function() {
      return this.lastConnectedDropTarget !== this.dropTarget;
    }
  }, {
    key: "didOptionsChange",
    value: function() {
      return !nt(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
  }, {
    key: "disconnectDropTarget",
    value: function() {
      this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0);
    }
  }, {
    key: "dropTarget",
    get: function() {
      return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
  }, {
    key: "clearDropTarget",
    value: function() {
      this.dropTargetRef = null, this.dropTargetNode = null;
    }
  }]), t;
}();
function Us(t, e, r) {
  var n = r.getRegistry(), i = n.addTarget(t, e);
  return [i, function() {
    return n.removeTarget(i);
  }];
}
function Vs(t, e, r) {
  var n = r.getRegistry(), i = n.addSource(t, e);
  return [i, function() {
    return n.removeSource(i);
  }];
}
var W = typeof window < "u" ? $n : L;
function Ie(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ie = function(r) {
    return typeof r;
  } : Ie = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ie(t);
}
function Ws(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ur(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Bs(t, e, r) {
  return e && ur(t.prototype, e), r && ur(t, r), t;
}
function Ue(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Ks = /* @__PURE__ */ function() {
  function t(e, r, n) {
    Ws(this, t), Ue(this, "spec", void 0), Ue(this, "monitor", void 0), Ue(this, "connector", void 0), this.spec = e, this.monitor = r, this.connector = n;
  }
  return Bs(t, [{
    key: "beginDrag",
    value: function() {
      var r, n = this.spec, i = this.monitor, o = null;
      return Ie(n.item) === "object" ? o = n.item : typeof n.item == "function" ? o = n.item(i) : o = {}, (r = o) !== null && r !== void 0 ? r : null;
    }
  }, {
    key: "canDrag",
    value: function() {
      var r = this.spec, n = this.monitor;
      return typeof r.canDrag == "boolean" ? r.canDrag : typeof r.canDrag == "function" ? r.canDrag(n) : !0;
    }
  }, {
    key: "isDragging",
    value: function(r, n) {
      var i = this.spec, o = this.monitor, s = i.isDragging;
      return s ? s(o) : n === r.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
      var r = this.spec, n = this.monitor, i = this.connector, o = r.end;
      o && o(n.getItem(), n), i.reconnect();
    }
  }]), t;
}();
function qs(t, e, r) {
  var n = _(function() {
    return new Ks(t, e, r);
  }, [e, r]);
  return L(function() {
    n.spec = t;
  }, [t]), n;
}
function B() {
  var t = le(Zr), e = t.dragDropManager;
  return S(e != null, "Expected drag drop context"), e;
}
function Gs(t) {
  return _(function() {
    var e = t.type;
    return S(e != null, "spec.type must be defined"), e;
  }, [t]);
}
function Ys(t, e) {
  return Zs(t) || Js(t, e) || Qs(t, e) || Xs();
}
function Xs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qs(t, e) {
  if (t) {
    if (typeof t == "string")
      return lr(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return lr(t, e);
  }
}
function lr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Js(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, s, a;
    try {
      for (r = r.call(t); !(i = (s = r.next()).done) && (n.push(s.value), !(e && n.length === e)); i = !0)
        ;
    } catch (u) {
      o = !0, a = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw a;
      }
    }
    return n;
  }
}
function Zs(t) {
  if (Array.isArray(t))
    return t;
}
function ea(t, e, r) {
  var n = B(), i = qs(t, e, r), o = Gs(t);
  W(function() {
    if (o != null) {
      var a = Vs(o, i, n), u = Ys(a, 2), c = u[0], f = u[1];
      return e.receiveHandlerId(c), r.receiveHandlerId(c), f;
    }
  }, [n, e, r, i, o]);
}
function ta(t) {
  return oa(t) || ia(t) || na(t) || ra();
}
function ra() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function na(t, e) {
  if (t) {
    if (typeof t == "string")
      return it(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return it(t, e);
  }
}
function ia(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function oa(t) {
  if (Array.isArray(t))
    return it(t);
}
function it(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function ln(t, e) {
  var r = ta(e || []);
  return e == null && typeof t != "function" && r.push(t), _(function() {
    return typeof t == "function" ? t() : t;
  }, r);
}
function sa() {
  var t = B();
  return _(function() {
    return new Ns(t);
  }, [t]);
}
function aa(t, e) {
  var r = B(), n = _(function() {
    return new js(r.getBackend());
  }, [r]);
  return W(function() {
    return n.dragSourceOptions = t || null, n.reconnect(), function() {
      return n.disconnectDragSource();
    };
  }, [n, t]), W(function() {
    return n.dragPreviewOptions = e || null, n.reconnect(), function() {
      return n.disconnectDragPreview();
    };
  }, [n, e]), n;
}
var ua = function t(e, r) {
  if (e === r)
    return !0;
  if (e && r && typeof e == "object" && typeof r == "object") {
    if (e.constructor !== r.constructor)
      return !1;
    var n, i, o;
    if (Array.isArray(e)) {
      if (n = e.length, n != r.length)
        return !1;
      for (i = n; i-- !== 0; )
        if (!t(e[i], r[i]))
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === r.source && e.flags === r.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === r.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === r.toString();
    if (o = Object.keys(e), n = o.length, n !== Object.keys(r).length)
      return !1;
    for (i = n; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, o[i]))
        return !1;
    for (i = n; i-- !== 0; ) {
      var s = o[i];
      if (!t(e[s], r[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && r !== r;
};
const la = /* @__PURE__ */ Vn(ua);
function ca(t, e) {
  return ga(t) || ha(t, e) || fa(t, e) || da();
}
function da() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fa(t, e) {
  if (t) {
    if (typeof t == "string")
      return cr(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return cr(t, e);
  }
}
function cr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function ha(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, s, a;
    try {
      for (r = r.call(t); !(i = (s = r.next()).done) && (n.push(s.value), !(e && n.length === e)); i = !0)
        ;
    } catch (u) {
      o = !0, a = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw a;
      }
    }
    return n;
  }
}
function ga(t) {
  if (Array.isArray(t))
    return t;
}
function cn(t, e, r) {
  var n = lt(function() {
    return e(t);
  }), i = ca(n, 2), o = i[0], s = i[1], a = Rr(function() {
    var u = e(t);
    la(o, u) || (s(u), r && r());
  }, [o, t, r]);
  return W(a), [o, a];
}
function pa(t, e) {
  return ba(t) || ma(t, e) || ya(t, e) || va();
}
function va() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ya(t, e) {
  if (t) {
    if (typeof t == "string")
      return dr(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return dr(t, e);
  }
}
function dr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function ma(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, s, a;
    try {
      for (r = r.call(t); !(i = (s = r.next()).done) && (n.push(s.value), !(e && n.length === e)); i = !0)
        ;
    } catch (u) {
      o = !0, a = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw a;
      }
    }
    return n;
  }
}
function ba(t) {
  if (Array.isArray(t))
    return t;
}
function Oa(t, e, r) {
  var n = cn(t, e, r), i = pa(n, 2), o = i[0], s = i[1];
  return W(function() {
    var u = t.getHandlerId();
    if (u != null)
      return t.subscribeToStateChange(s, {
        handlerIds: [u]
      });
  }, [t, s]), o;
}
function dn(t, e, r) {
  return Oa(e, t || function() {
    return {};
  }, function() {
    return r.reconnect();
  });
}
function Sa(t) {
  return _(function() {
    return t.hooks.dragSource();
  }, [t]);
}
function Ia(t) {
  return _(function() {
    return t.hooks.dragPreview();
  }, [t]);
}
function wa(t, e) {
  var r = ln(t, e);
  S(!r.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var n = sa(), i = aa(r.options, r.previewOptions);
  return ea(r, n, i), [dn(r.collect, n, i), Sa(i), Ia(i)];
}
function Da(t) {
  var e = t.accept;
  return _(function() {
    return S(t.accept != null, "accept must be defined"), Array.isArray(e) ? e : [e];
  }, [e]);
}
function Ta(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function fr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Ea(t, e, r) {
  return e && fr(t.prototype, e), r && fr(t, r), t;
}
function hr(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var _a = /* @__PURE__ */ function() {
  function t(e, r) {
    Ta(this, t), hr(this, "spec", void 0), hr(this, "monitor", void 0), this.spec = e, this.monitor = r;
  }
  return Ea(t, [{
    key: "canDrop",
    value: function() {
      var r = this.spec, n = this.monitor;
      return r.canDrop ? r.canDrop(n.getItem(), n) : !0;
    }
  }, {
    key: "hover",
    value: function() {
      var r = this.spec, n = this.monitor;
      r.hover && r.hover(n.getItem(), n);
    }
  }, {
    key: "drop",
    value: function() {
      var r = this.spec, n = this.monitor;
      if (r.drop)
        return r.drop(n.getItem(), n);
    }
  }]), t;
}();
function Ca(t, e) {
  var r = _(function() {
    return new _a(t, e);
  }, [e]);
  return L(function() {
    r.spec = t;
  }, [t]), r;
}
function Na(t, e) {
  return ka(t) || Aa(t, e) || Pa(t, e) || xa();
}
function xa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pa(t, e) {
  if (t) {
    if (typeof t == "string")
      return gr(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return gr(t, e);
  }
}
function gr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Aa(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, s, a;
    try {
      for (r = r.call(t); !(i = (s = r.next()).done) && (n.push(s.value), !(e && n.length === e)); i = !0)
        ;
    } catch (u) {
      o = !0, a = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw a;
      }
    }
    return n;
  }
}
function ka(t) {
  if (Array.isArray(t))
    return t;
}
function Ra(t, e, r) {
  var n = B(), i = Ca(t, e), o = Da(t);
  W(function() {
    var a = Us(o, i, n), u = Na(a, 2), c = u[0], f = u[1];
    return e.receiveHandlerId(c), r.receiveHandlerId(c), f;
  }, [n, e, i, r, o.map(function(s) {
    return s.toString();
  }).join("|")]);
}
function Ma() {
  var t = B();
  return _(function() {
    return new As(t);
  }, [t]);
}
function La(t) {
  var e = B(), r = _(function() {
    return new Fs(e.getBackend());
  }, [e]);
  return W(function() {
    return r.dropTargetOptions = t || null, r.reconnect(), function() {
      return r.disconnectDropTarget();
    };
  }, [t]), r;
}
function $a(t) {
  return _(function() {
    return t.hooks.dropTarget();
  }, [t]);
}
function fn(t, e) {
  var r = ln(t, e), n = Ma(), i = La(r.options);
  return Ra(r, n, i), [dn(r.collect, n, i), $a(i)];
}
function ja(t, e) {
  return Ua(t) || Fa(t, e) || za(t, e) || Ha();
}
function Ha() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function za(t, e) {
  if (t) {
    if (typeof t == "string")
      return pr(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return pr(t, e);
  }
}
function pr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Fa(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, s, a;
    try {
      for (r = r.call(t); !(i = (s = r.next()).done) && (n.push(s.value), !(e && n.length === e)); i = !0)
        ;
    } catch (u) {
      o = !0, a = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw a;
      }
    }
    return n;
  }
}
function Ua(t) {
  if (Array.isArray(t))
    return t;
}
function Va(t) {
  var e = B(), r = e.getMonitor(), n = cn(r, t), i = ja(n, 2), o = i[0], s = i[1];
  return L(function() {
    return r.subscribeToOffsetChange(s);
  }), L(function() {
    return r.subscribeToStateChange(s);
  }), o;
}
function hn(t) {
  var e = null, r = function() {
    return e == null && (e = t()), e;
  };
  return r;
}
function Wa(t, e) {
  return t.filter(function(r) {
    return r !== e;
  });
}
function Ba(t, e) {
  var r = /* @__PURE__ */ new Set(), n = function(s) {
    return r.add(s);
  };
  t.forEach(n), e.forEach(n);
  var i = [];
  return r.forEach(function(o) {
    return i.push(o);
  }), i;
}
function Ka(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function vr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function qa(t, e, r) {
  return e && vr(t.prototype, e), r && vr(t, r), t;
}
function yr(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Ga = /* @__PURE__ */ function() {
  function t(e) {
    Ka(this, t), yr(this, "entered", []), yr(this, "isNodeInDocument", void 0), this.isNodeInDocument = e;
  }
  return qa(t, [{
    key: "enter",
    value: function(r) {
      var n = this, i = this.entered.length, o = function(a) {
        return n.isNodeInDocument(a) && (!a.contains || a.contains(r));
      };
      return this.entered = Ba(this.entered.filter(o), [r]), i === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function(r) {
      var n = this.entered.length;
      return this.entered = Wa(this.entered.filter(this.isNodeInDocument), r), n > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function() {
      this.entered = [];
    }
  }]), t;
}(), Ya = hn(function() {
  return /firefox/i.test(navigator.userAgent);
}), gn = hn(function() {
  return !!window.safari;
});
function Xa(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function mr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Qa(t, e, r) {
  return e && mr(t.prototype, e), r && mr(t, r), t;
}
function re(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var br = /* @__PURE__ */ function() {
  function t(e, r) {
    Xa(this, t), re(this, "xs", void 0), re(this, "ys", void 0), re(this, "c1s", void 0), re(this, "c2s", void 0), re(this, "c3s", void 0);
    for (var n = e.length, i = [], o = 0; o < n; o++)
      i.push(o);
    i.sort(function(P, $) {
      return e[P] < e[$] ? -1 : 1;
    });
    for (var s = [], a = [], u, c, f = 0; f < n - 1; f++)
      u = e[f + 1] - e[f], c = r[f + 1] - r[f], s.push(u), a.push(c / u);
    for (var h = [a[0]], v = 0; v < s.length - 1; v++) {
      var p = a[v], m = a[v + 1];
      if (p * m <= 0)
        h.push(0);
      else {
        u = s[v];
        var l = s[v + 1], d = u + l;
        h.push(3 * d / ((d + l) / p + (d + u) / m));
      }
    }
    h.push(a[a.length - 1]);
    for (var g = [], y = [], b, D = 0; D < h.length - 1; D++) {
      b = a[D];
      var I = h[D], T = 1 / s[D], E = I + h[D + 1] - b - b;
      g.push((b - I - E) * T), y.push(E * T * T);
    }
    this.xs = e, this.ys = r, this.c1s = h, this.c2s = g, this.c3s = y;
  }
  return Qa(t, [{
    key: "interpolate",
    value: function(r) {
      var n = this.xs, i = this.ys, o = this.c1s, s = this.c2s, a = this.c3s, u = n.length - 1;
      if (r === n[u])
        return i[u];
      for (var c = 0, f = a.length - 1, h; c <= f; ) {
        h = Math.floor(0.5 * (c + f));
        var v = n[h];
        if (v < r)
          c = h + 1;
        else if (v > r)
          f = h - 1;
        else
          return i[h];
      }
      u = Math.max(0, f);
      var p = r - n[u], m = p * p;
      return i[u] + o[u] * p + s[u] * m + a[u] * p * m;
    }
  }]), t;
}(), Ja = 1;
function pn(t) {
  var e = t.nodeType === Ja ? t : t.parentElement;
  if (!e)
    return null;
  var r = e.getBoundingClientRect(), n = r.top, i = r.left;
  return {
    x: i,
    y: n
  };
}
function fe(t) {
  return {
    x: t.clientX,
    y: t.clientY
  };
}
function Za(t) {
  var e;
  return t.nodeName === "IMG" && (Ya() || !((e = document.documentElement) !== null && e !== void 0 && e.contains(t)));
}
function eu(t, e, r, n) {
  var i = t ? e.width : r, o = t ? e.height : n;
  return gn() && t && (o /= window.devicePixelRatio, i /= window.devicePixelRatio), {
    dragPreviewWidth: i,
    dragPreviewHeight: o
  };
}
function tu(t, e, r, n, i) {
  var o = Za(e), s = o ? t : e, a = pn(s), u = {
    x: r.x - a.x,
    y: r.y - a.y
  }, c = t.offsetWidth, f = t.offsetHeight, h = n.anchorX, v = n.anchorY, p = eu(o, e, c, f), m = p.dragPreviewWidth, l = p.dragPreviewHeight, d = function() {
    var E = new br([0, 0.5, 1], [
      // Dock to the top
      u.y,
      // Align at the center
      u.y / f * l,
      // Dock to the bottom
      u.y + l - f
    ]), P = E.interpolate(v);
    return gn() && o && (P += (window.devicePixelRatio - 1) * l), P;
  }, g = function() {
    var E = new br([0, 0.5, 1], [
      // Dock to the left
      u.x,
      // Align at the center
      u.x / c * m,
      // Dock to the right
      u.x + m - c
    ]);
    return E.interpolate(h);
  }, y = i.offsetX, b = i.offsetY, D = y === 0 || y, I = b === 0 || b;
  return {
    x: D ? y : g(),
    y: I ? b : d()
  };
}
var vn = "__NATIVE_FILE__", yn = "__NATIVE_URL__", mn = "__NATIVE_TEXT__", bn = "__NATIVE_HTML__";
const Or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: vn,
  HTML: bn,
  TEXT: mn,
  URL: yn
}, Symbol.toStringTag, { value: "Module" }));
function Ve(t, e, r) {
  var n = e.reduce(function(i, o) {
    return i || t.getData(o);
  }, "");
  return n ?? r;
}
var X;
function he(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var ot = (X = {}, he(X, vn, {
  exposeProperties: {
    files: function(e) {
      return Array.prototype.slice.call(e.files);
    },
    items: function(e) {
      return e.items;
    },
    dataTransfer: function(e) {
      return e;
    }
  },
  matchesTypes: ["Files"]
}), he(X, bn, {
  exposeProperties: {
    html: function(e, r) {
      return Ve(e, r, "");
    },
    dataTransfer: function(e) {
      return e;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), he(X, yn, {
  exposeProperties: {
    urls: function(e, r) {
      return Ve(e, r, "").split(`
`);
    },
    dataTransfer: function(e) {
      return e;
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), he(X, mn, {
  exposeProperties: {
    text: function(e, r) {
      return Ve(e, r, "");
    },
    dataTransfer: function(e) {
      return e;
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), X);
function ru(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Sr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function nu(t, e, r) {
  return e && Sr(t.prototype, e), r && Sr(t, r), t;
}
function Ir(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var iu = /* @__PURE__ */ function() {
  function t(e) {
    ru(this, t), Ir(this, "item", void 0), Ir(this, "config", void 0), this.config = e, this.item = {}, this.initializeExposedProperties();
  }
  return nu(t, [{
    key: "initializeExposedProperties",
    value: function() {
      var r = this;
      Object.keys(this.config.exposeProperties).forEach(function(n) {
        Object.defineProperty(r.item, n, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return console.warn(`Browser doesn't allow reading "`.concat(n, '" until the drop event.')), null;
          }
        });
      });
    }
  }, {
    key: "loadDataTransfer",
    value: function(r) {
      var n = this;
      if (r) {
        var i = {};
        Object.keys(this.config.exposeProperties).forEach(function(o) {
          i[o] = {
            value: n.config.exposeProperties[o](r, n.config.matchesTypes),
            configurable: !0,
            enumerable: !0
          };
        }), Object.defineProperties(this.item, i);
      }
    }
  }, {
    key: "canDrag",
    value: function() {
      return !0;
    }
  }, {
    key: "beginDrag",
    value: function() {
      return this.item;
    }
  }, {
    key: "isDragging",
    value: function(r, n) {
      return n === r.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
    }
  }]), t;
}();
function ou(t, e) {
  var r = new iu(ot[t]);
  return r.loadDataTransfer(e), r;
}
function We(t) {
  if (!t)
    return null;
  var e = Array.prototype.slice.call(t.types || []);
  return Object.keys(ot).filter(function(r) {
    var n = ot[r].matchesTypes;
    return n.some(function(i) {
      return e.indexOf(i) > -1;
    });
  })[0] || null;
}
function su(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function wr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function au(t, e, r) {
  return e && wr(t.prototype, e), r && wr(t, r), t;
}
function Be(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var uu = /* @__PURE__ */ function() {
  function t(e, r) {
    su(this, t), Be(this, "ownerDocument", null), Be(this, "globalContext", void 0), Be(this, "optionsArgs", void 0), this.globalContext = e, this.optionsArgs = r;
  }
  return au(t, [{
    key: "window",
    get: function() {
      if (this.globalContext)
        return this.globalContext;
      if (typeof window < "u")
        return window;
    }
  }, {
    key: "document",
    get: function() {
      var r;
      return (r = this.globalContext) !== null && r !== void 0 && r.document ? this.globalContext.document : this.window ? this.window.document : void 0;
    }
  }, {
    key: "rootElement",
    get: function() {
      var r;
      return ((r = this.optionsArgs) === null || r === void 0 ? void 0 : r.rootElement) || this.window;
    }
  }]), t;
}();
function Dr(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Tr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Dr(Object(r), !0).forEach(function(n) {
      w(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Dr(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function lu(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Er(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function cu(t, e, r) {
  return e && Er(t.prototype, e), r && Er(t, r), t;
}
function w(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var du = /* @__PURE__ */ function() {
  function t(e, r, n) {
    var i = this;
    lu(this, t), w(this, "options", void 0), w(this, "actions", void 0), w(this, "monitor", void 0), w(this, "registry", void 0), w(this, "enterLeaveCounter", void 0), w(this, "sourcePreviewNodes", /* @__PURE__ */ new Map()), w(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map()), w(this, "sourceNodes", /* @__PURE__ */ new Map()), w(this, "sourceNodeOptions", /* @__PURE__ */ new Map()), w(this, "dragStartSourceIds", null), w(this, "dropTargetIds", []), w(this, "dragEnterTargetIds", []), w(this, "currentNativeSource", null), w(this, "currentNativeHandle", null), w(this, "currentDragSourceNode", null), w(this, "altKeyPressed", !1), w(this, "mouseMoveTimeoutTimer", null), w(this, "asyncEndDragFrameId", null), w(this, "dragOverTargetIds", null), w(this, "lastClientOffset", null), w(this, "hoverRafId", null), w(this, "getSourceClientOffset", function(o) {
      var s = i.sourceNodes.get(o);
      return s && pn(s) || null;
    }), w(this, "endDragNativeItem", function() {
      i.isDraggingNativeItem() && (i.actions.endDrag(), i.currentNativeHandle && i.registry.removeSource(i.currentNativeHandle), i.currentNativeHandle = null, i.currentNativeSource = null);
    }), w(this, "isNodeInDocument", function(o) {
      return !!(o && i.document && i.document.body && i.document.body.contains(o));
    }), w(this, "endDragIfSourceWasRemovedFromDOM", function() {
      var o = i.currentDragSourceNode;
      o == null || i.isNodeInDocument(o) || i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag();
    }), w(this, "handleTopDragStartCapture", function() {
      i.clearCurrentDragSourceNode(), i.dragStartSourceIds = [];
    }), w(this, "handleTopDragStart", function(o) {
      if (!o.defaultPrevented) {
        var s = i.dragStartSourceIds;
        i.dragStartSourceIds = null;
        var a = fe(o);
        i.monitor.isDragging() && i.actions.endDrag(), i.actions.beginDrag(s || [], {
          publishSource: !1,
          getSourceClientOffset: i.getSourceClientOffset,
          clientOffset: a
        });
        var u = o.dataTransfer, c = We(u);
        if (i.monitor.isDragging()) {
          if (u && typeof u.setDragImage == "function") {
            var f = i.monitor.getSourceId(), h = i.sourceNodes.get(f), v = i.sourcePreviewNodes.get(f) || h;
            if (v) {
              var p = i.getCurrentSourcePreviewNodeOptions(), m = p.anchorX, l = p.anchorY, d = p.offsetX, g = p.offsetY, y = {
                anchorX: m,
                anchorY: l
              }, b = {
                offsetX: d,
                offsetY: g
              }, D = tu(h, v, a, y, b);
              u.setDragImage(v, D.x, D.y);
            }
          }
          try {
            u == null || u.setData("application/json", {});
          } catch {
          }
          i.setCurrentDragSourceNode(o.target);
          var I = i.getCurrentSourcePreviewNodeOptions(), T = I.captureDraggingState;
          T ? i.actions.publishDragSource() : setTimeout(function() {
            return i.actions.publishDragSource();
          }, 0);
        } else if (c)
          i.beginDragNativeItem(c);
        else {
          if (u && !u.types && (o.target && !o.target.hasAttribute || !o.target.hasAttribute("draggable")))
            return;
          o.preventDefault();
        }
      }
    }), w(this, "handleTopDragEndCapture", function() {
      i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag();
    }), w(this, "handleTopDragEnterCapture", function(o) {
      i.dragEnterTargetIds = [];
      var s = i.enterLeaveCounter.enter(o.target);
      if (!(!s || i.monitor.isDragging())) {
        var a = o.dataTransfer, u = We(a);
        u && i.beginDragNativeItem(u, a);
      }
    }), w(this, "handleTopDragEnter", function(o) {
      var s = i.dragEnterTargetIds;
      if (i.dragEnterTargetIds = [], !!i.monitor.isDragging()) {
        i.altKeyPressed = o.altKey, s.length > 0 && i.actions.hover(s, {
          clientOffset: fe(o)
        });
        var a = s.some(function(u) {
          return i.monitor.canDropOnTarget(u);
        });
        a && (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = i.getCurrentDropEffect()));
      }
    }), w(this, "handleTopDragOverCapture", function() {
      i.dragOverTargetIds = [];
    }), w(this, "handleTopDragOver", function(o) {
      var s = i.dragOverTargetIds;
      if (i.dragOverTargetIds = [], !i.monitor.isDragging()) {
        o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none");
        return;
      }
      i.altKeyPressed = o.altKey, i.lastClientOffset = fe(o), i.hoverRafId === null && typeof requestAnimationFrame < "u" && (i.hoverRafId = requestAnimationFrame(function() {
        i.monitor.isDragging() && i.actions.hover(s || [], {
          clientOffset: i.lastClientOffset
        }), i.hoverRafId = null;
      }));
      var a = (s || []).some(function(u) {
        return i.monitor.canDropOnTarget(u);
      });
      a ? (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = i.getCurrentDropEffect())) : i.isDraggingNativeItem() ? o.preventDefault() : (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none"));
    }), w(this, "handleTopDragLeaveCapture", function(o) {
      i.isDraggingNativeItem() && o.preventDefault();
      var s = i.enterLeaveCounter.leave(o.target);
      s && i.isDraggingNativeItem() && setTimeout(function() {
        return i.endDragNativeItem();
      }, 0);
    }), w(this, "handleTopDropCapture", function(o) {
      if (i.dropTargetIds = [], i.isDraggingNativeItem()) {
        var s;
        o.preventDefault(), (s = i.currentNativeSource) === null || s === void 0 || s.loadDataTransfer(o.dataTransfer);
      } else
        We(o.dataTransfer) && o.preventDefault();
      i.enterLeaveCounter.reset();
    }), w(this, "handleTopDrop", function(o) {
      var s = i.dropTargetIds;
      i.dropTargetIds = [], i.actions.hover(s, {
        clientOffset: fe(o)
      }), i.actions.drop({
        dropEffect: i.getCurrentDropEffect()
      }), i.isDraggingNativeItem() ? i.endDragNativeItem() : i.monitor.isDragging() && i.actions.endDrag();
    }), w(this, "handleSelectStart", function(o) {
      var s = o.target;
      typeof s.dragDrop == "function" && (s.tagName === "INPUT" || s.tagName === "SELECT" || s.tagName === "TEXTAREA" || s.isContentEditable || (o.preventDefault(), s.dragDrop()));
    }), this.options = new uu(r, n), this.actions = e.getActions(), this.monitor = e.getMonitor(), this.registry = e.getRegistry(), this.enterLeaveCounter = new Ga(this.isNodeInDocument);
  }
  return cu(t, [{
    key: "profile",
    value: function() {
      var r, n;
      return {
        sourcePreviewNodes: this.sourcePreviewNodes.size,
        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
        sourceNodeOptions: this.sourceNodeOptions.size,
        sourceNodes: this.sourceNodes.size,
        dragStartSourceIds: ((r = this.dragStartSourceIds) === null || r === void 0 ? void 0 : r.length) || 0,
        dropTargetIds: this.dropTargetIds.length,
        dragEnterTargetIds: this.dragEnterTargetIds.length,
        dragOverTargetIds: ((n = this.dragOverTargetIds) === null || n === void 0 ? void 0 : n.length) || 0
      };
    }
    // public for test
  }, {
    key: "window",
    get: function() {
      return this.options.window;
    }
  }, {
    key: "document",
    get: function() {
      return this.options.document;
    }
    /**
     * Get the root element to use for event subscriptions
     */
  }, {
    key: "rootElement",
    get: function() {
      return this.options.rootElement;
    }
  }, {
    key: "setup",
    value: function() {
      var r = this.rootElement;
      if (r !== void 0) {
        if (r.__isReactDndBackendSetUp)
          throw new Error("Cannot have two HTML5 backends at the same time.");
        r.__isReactDndBackendSetUp = !0, this.addEventListeners(r);
      }
    }
  }, {
    key: "teardown",
    value: function() {
      var r = this.rootElement;
      if (r !== void 0 && (r.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
        var n;
        (n = this.window) === null || n === void 0 || n.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function(r, n, i) {
      var o = this;
      return this.sourcePreviewNodeOptions.set(r, i), this.sourcePreviewNodes.set(r, n), function() {
        o.sourcePreviewNodes.delete(r), o.sourcePreviewNodeOptions.delete(r);
      };
    }
  }, {
    key: "connectDragSource",
    value: function(r, n, i) {
      var o = this;
      this.sourceNodes.set(r, n), this.sourceNodeOptions.set(r, i);
      var s = function(c) {
        return o.handleDragStart(c, r);
      }, a = function(c) {
        return o.handleSelectStart(c);
      };
      return n.setAttribute("draggable", "true"), n.addEventListener("dragstart", s), n.addEventListener("selectstart", a), function() {
        o.sourceNodes.delete(r), o.sourceNodeOptions.delete(r), n.removeEventListener("dragstart", s), n.removeEventListener("selectstart", a), n.setAttribute("draggable", "false");
      };
    }
  }, {
    key: "connectDropTarget",
    value: function(r, n) {
      var i = this, o = function(c) {
        return i.handleDragEnter(c, r);
      }, s = function(c) {
        return i.handleDragOver(c, r);
      }, a = function(c) {
        return i.handleDrop(c, r);
      };
      return n.addEventListener("dragenter", o), n.addEventListener("dragover", s), n.addEventListener("drop", a), function() {
        n.removeEventListener("dragenter", o), n.removeEventListener("dragover", s), n.removeEventListener("drop", a);
      };
    }
  }, {
    key: "addEventListeners",
    value: function(r) {
      r.addEventListener && (r.addEventListener("dragstart", this.handleTopDragStart), r.addEventListener("dragstart", this.handleTopDragStartCapture, !0), r.addEventListener("dragend", this.handleTopDragEndCapture, !0), r.addEventListener("dragenter", this.handleTopDragEnter), r.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), r.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), r.addEventListener("dragover", this.handleTopDragOver), r.addEventListener("dragover", this.handleTopDragOverCapture, !0), r.addEventListener("drop", this.handleTopDrop), r.addEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "removeEventListeners",
    value: function(r) {
      r.removeEventListener && (r.removeEventListener("dragstart", this.handleTopDragStart), r.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), r.removeEventListener("dragend", this.handleTopDragEndCapture, !0), r.removeEventListener("dragenter", this.handleTopDragEnter), r.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), r.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), r.removeEventListener("dragover", this.handleTopDragOver), r.removeEventListener("dragover", this.handleTopDragOverCapture, !0), r.removeEventListener("drop", this.handleTopDrop), r.removeEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function() {
      var r = this.monitor.getSourceId(), n = this.sourceNodeOptions.get(r);
      return Tr({
        dropEffect: this.altKeyPressed ? "copy" : "move"
      }, n || {});
    }
  }, {
    key: "getCurrentDropEffect",
    value: function() {
      return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function() {
      var r = this.monitor.getSourceId(), n = this.sourcePreviewNodeOptions.get(r);
      return Tr({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: !1
      }, n || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function() {
      var r = this.monitor.getItemType();
      return Object.keys(Or).some(function(n) {
        return Or[n] === r;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function(r, n) {
      this.clearCurrentDragSourceNode(), this.currentNativeSource = ou(r, n), this.currentNativeHandle = this.registry.addSource(r, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function(r) {
      var n = this;
      this.clearCurrentDragSourceNode(), this.currentDragSourceNode = r;
      var i = 1e3;
      this.mouseMoveTimeoutTimer = setTimeout(function() {
        var o;
        return (o = n.rootElement) === null || o === void 0 ? void 0 : o.addEventListener("mousemove", n.endDragIfSourceWasRemovedFromDOM, !0);
      }, i);
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function() {
      if (this.currentDragSourceNode) {
        if (this.currentDragSourceNode = null, this.rootElement) {
          var r;
          (r = this.window) === null || r === void 0 || r.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
        }
        return this.mouseMoveTimeoutTimer = null, !0;
      }
      return !1;
    }
  }, {
    key: "handleDragStart",
    value: function(r, n) {
      r.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(n));
    }
  }, {
    key: "handleDragEnter",
    value: function(r, n) {
      this.dragEnterTargetIds.unshift(n);
    }
  }, {
    key: "handleDragOver",
    value: function(r, n) {
      this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(n);
    }
  }, {
    key: "handleDrop",
    value: function(r, n) {
      this.dropTargetIds.unshift(n);
    }
  }]), t;
}(), ge;
function fu() {
  return ge || (ge = new Image(), ge.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), ge;
}
var hu = function(e, r, n) {
  return new du(e, r, n);
};
function gu(t, e) {
  return typeof t == "function" ? t(e) : t ?? "NODE";
}
function pu(t) {
  return t.isDraggable && !t.isEditing;
}
function vu(t) {
  const e = A(), r = e.selectedIds, [n, i, o] = wa(() => ({
    canDrag: () => pu(t),
    type: gu(e.props.dragType, t),
    item: () => {
      const s = e.isSelected(t.id) ? Array.from(r) : [t.id];
      return e.dispatch(F.dragStart(t.id, s)), { id: t.id, dragIds: s, data: t.data };
    },
    end: () => {
      e.hideCursor(), e.redrawList(), e.dispatch(F.dragEnd());
    }
  }), [r, t, e.props.dragType]);
  return L(() => {
    o(fu());
  }, [o]), i;
}
function yu(t, e) {
  const r = t.getBoundingClientRect(), n = e.x - Math.round(r.x), i = e.y - Math.round(r.y), o = r.height, s = i < o / 2, a = !s, u = o / 4, c = i > u && i < o - u;
  return { x: n, inTopHalf: s, inBottomHalf: a, inMiddle: c, atTop: !c && s, atBottom: !c && a };
}
function mu(t, e, r, n) {
  return t ? t.isInternal ? n.atTop ? [e, t] : n.inMiddle ? [t, t] : [t, r] : n.inTopHalf ? [e, t] : [t, r] : [e, null];
}
function Ke(t, e) {
  return { parentId: t || null, index: e };
}
function ne(t, e) {
  return {
    type: "line",
    index: t,
    level: e
  };
}
function bu(t) {
  return {
    type: "highlight",
    id: t
  };
}
function qe(t, e) {
  var r;
  let n = t;
  for (; n.parent && n.level > e; )
    n = n.parent;
  const i = ((r = n.parent) === null || r === void 0 ? void 0 : r.id) || null, o = Vr(n) + 1;
  return { parentId: i, index: o };
}
function On(t) {
  var e;
  const r = yu(t.element, t.offset), n = t.indent, i = Math.round(Math.max(0, r.x - n) / n), { node: o, nextNode: s, prevNode: a } = t, [u, c] = mu(o, a, s, r);
  if (o && o.isInternal && r.inMiddle)
    return {
      drop: Ke(o.id, null),
      cursor: bu(o.id)
    };
  if (!u)
    return {
      drop: Ke((e = c == null ? void 0 : c.parent) === null || e === void 0 ? void 0 : e.id, 0),
      cursor: ne(0, 0)
    };
  if (zr(u)) {
    const h = pe(i, (c == null ? void 0 : c.level) || 0, u.level);
    return {
      drop: qe(u, h),
      cursor: ne(u.rowIndex + 1, h)
    };
  }
  if (Fr(u)) {
    const h = pe(i, (c == null ? void 0 : c.level) || 0, u.level);
    return {
      drop: qe(u, h),
      cursor: ne(u.rowIndex + 1, h)
    };
  }
  const f = pe(i, 0, u.level + 1);
  return f > u.level ? {
    drop: Ke(u.id, 0),
    cursor: ne(u.rowIndex + 1, f)
  } : {
    drop: qe(u, f),
    cursor: ne(u.rowIndex + 1, f)
  };
}
function Ou(t, e) {
  const r = A(), [n, i] = fn(() => ({
    accept: "NODE",
    canDrop: () => r.canDrop(),
    hover: (o, s) => {
      const a = s.getClientOffset();
      if (!t.current || !a)
        return;
      const { cursor: u, drop: c } = On({
        element: t.current,
        offset: a,
        indent: r.indent,
        node: e,
        prevNode: e.prev,
        nextNode: e.next
      });
      r.hover(c, u);
    },
    drop: (o, s) => {
      if (!s.canDrop())
        return null;
      r.drop();
    }
  }), [e, t.current, r.props]);
  return i;
}
function Su(t) {
  const e = A(), r = e.at(t);
  if (!r)
    throw new Error(`Could not find node for index: ${t}`);
  return _(() => {
    const n = r.clone();
    return e.visibleNodes[t] = n, n;
  }, [...Object.values(r.state), r]);
}
const _r = Te.memo(function({ index: e, style: r }) {
  Hr(), qn();
  const n = A(), i = Su(e), o = Q(null), s = vu(i), a = Ou(o, i), u = Rr((l) => {
    o.current = l, a(l);
  }, [a]), c = n.indent * i.level, f = _(() => ({ paddingLeft: c }), [c]), h = _(() => {
    var l, d;
    return Object.assign(Object.assign({}, r), {
      top: parseFloat(r.top) + ((d = (l = n.props.padding) !== null && l !== void 0 ? l : n.props.paddingTop) !== null && d !== void 0 ? d : 0),
      // react-window gives the row width: 100% of the viewport. When a deeply
      // nested (or long) node overflows horizontally, that clips the row's
      // background/selection highlight at the viewport edge. min-width:
      // max-content lets the row grow with its content so the highlight spans
      // the full scrollable width (#10).
      minWidth: "max-content"
    });
  }, [r, n.props.padding, n.props.paddingTop]), v = {
    role: "treeitem",
    "aria-level": i.level + 1,
    "aria-selected": i.isSelected,
    "aria-expanded": i.isOpen,
    style: h,
    tabIndex: -1,
    className: n.props.rowClassName
  };
  L(() => {
    var l;
    !i.isEditing && i.isFocused && ((l = o.current) === null || l === void 0 || l.focus({ preventScroll: !0 }));
  }, [i.isEditing, i.isFocused, o.current]);
  const p = n.renderNode, m = n.renderRow;
  return O(m, { node: i, innerRef: u, attrs: v, children: O(p, { node: i, tree: n, style: f, dragHandle: s }) });
});
let Ge = "", Cr = null;
function Sn() {
  Hr();
  const t = A();
  return O("div", { role: "tree", "aria-label": t.props["aria-label"], "aria-labelledby": t.props["aria-labelledby"], "aria-multiselectable": !t.props.disableMultiSelection || void 0, style: {
    height: t.height,
    width: t.width,
    minHeight: 0,
    minWidth: 0
  }, onContextMenu: t.props.onContextMenu, onClick: t.props.onClick, tabIndex: 0, onFocus: (e) => {
    e.currentTarget.contains(e.relatedTarget) || t.onFocus();
  }, onBlur: (e) => {
    e.currentTarget.contains(e.relatedTarget) || t.onBlur();
  }, onKeyDown: (e) => {
    var r;
    if (t.isEditing)
      return;
    const n = e.target;
    if (n instanceof Element && n !== e.currentTarget && n.closest("input, textarea, select, [contenteditable]:not([contenteditable='false'])"))
      return;
    if (e.key === "Backspace") {
      if (!t.props.onDelete)
        return;
      const o = Array.from(t.selectedIds);
      if (o.length > 1) {
        let s = t.mostRecentNode;
        for (; s && s.isSelected; )
          s = s.nextSibling;
        s || (s = t.lastNode), t.focus(s, { scroll: !1 }), t.delete(Array.from(o));
      } else {
        const s = t.focusedNode;
        if (s) {
          const a = s.nextSibling, u = s.parent;
          t.focus(a || u, { scroll: !1 }), t.delete(s);
        }
      }
      return;
    }
    if (e.key === "Tab" && !e.shiftKey) {
      e.preventDefault(), Wr(e.currentTarget);
      return;
    }
    if (e.key === "Tab" && e.shiftKey) {
      e.preventDefault(), Br(e.currentTarget);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const o = t.nextNode;
      if (e.metaKey) {
        t.select(t.focusedNode), t.activate(t.focusedNode);
        return;
      } else if (!e.shiftKey || t.props.disableMultiSelection) {
        t.focus(o);
        return;
      } else {
        if (!o)
          return;
        const s = t.focusedNode;
        s ? s.isSelected ? t.selectContiguous(o) : t.selectMulti(o) : t.focus(t.firstNode);
        return;
      }
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const o = t.prevNode;
      if (!e.shiftKey || t.props.disableMultiSelection) {
        t.focus(o);
        return;
      } else {
        if (!o)
          return;
        const s = t.focusedNode;
        s ? s.isSelected ? t.selectContiguous(o) : t.selectMulti(o) : t.focus(t.lastNode);
        return;
      }
    }
    if (e.key === "ArrowRight") {
      const o = t.focusedNode;
      if (!o)
        return;
      o.isInternal && o.isOpen ? t.focus(t.nextNode) : o.isInternal && t.open(o.id);
      return;
    }
    if (e.key === "ArrowLeft") {
      const o = t.focusedNode;
      if (!o || o.isRoot)
        return;
      o.isInternal && o.isOpen ? t.close(o.id) : !((r = o.parent) === null || r === void 0) && r.isRoot || t.focus(o.parent);
      return;
    }
    if (e.key === "a" && (e.metaKey || e.ctrlKey) && !t.props.disableMultiSelection) {
      e.preventDefault(), t.selectAll();
      return;
    }
    if (e.key === "a" && !e.metaKey && !e.ctrlKey && t.props.onCreate) {
      t.createLeaf();
      return;
    }
    if (e.key === "A" && !e.metaKey && !e.ctrlKey) {
      if (!t.props.onCreate)
        return;
      t.createInternal();
      return;
    }
    if (e.key === "Home") {
      e.preventDefault(), t.focus(t.firstNode);
      return;
    }
    if (e.key === "End") {
      e.preventDefault(), t.focus(t.lastNode);
      return;
    }
    if (e.key === "Enter") {
      const o = t.focusedNode;
      if (!o || !o.isEditable || !t.props.onRename)
        return;
      setTimeout(() => {
        o && t.edit(o);
      });
      return;
    }
    if (e.key === " ") {
      e.preventDefault();
      const o = t.focusedNode;
      if (!o)
        return;
      o.isLeaf ? (o.select(), o.activate()) : o.toggle();
      return;
    }
    if (e.key === "*") {
      const o = t.focusedNode;
      if (!o)
        return;
      t.openSiblings(o);
      return;
    }
    if (e.key === "PageUp") {
      e.preventDefault(), t.pageUp();
      return;
    }
    e.key === "PageDown" && (e.preventDefault(), t.pageDown()), clearTimeout(Cr), Ge += e.key, Cr = setTimeout(() => {
      Ge = "";
    }, 600);
    const i = t.visibleNodes.find((o) => {
      const s = o.data.name;
      return typeof s == "string" ? s.toLowerCase().startsWith(Ge) : !1;
    });
    i && t.focus(i.id);
  }, children: O(Iu, {}) });
}
function Iu() {
  var t, e;
  const r = A(), n = {
    className: r.props.className,
    outerRef: r.listEl,
    itemCount: r.visibleNodes.length,
    height: r.height,
    width: r.width,
    overscanCount: r.overscanCount,
    itemKey: (i) => {
      var o;
      return ((o = r.visibleNodes[i]) === null || o === void 0 ? void 0 : o.id) || i;
    },
    outerElementType: (t = r.props.outerElementType) !== null && t !== void 0 ? t : zi,
    innerElementType: (e = r.props.innerElementType) !== null && e !== void 0 ? e : Vi,
    onScroll: r.props.onScroll,
    onItemsRendered: r.onItemsRendered.bind(r)
  };
  return typeof r.props.rowHeight == "function" ? (
    // @ts-ignore
    O(Li, Object.assign({}, n, { itemSize: r.rowHeightAt, ref: r.list, children: _r }))
  ) : (
    // @ts-ignore
    O($i, Object.assign({}, n, { itemSize: r.rowHeight, ref: r.list, children: _r }))
  );
}
function Nr(t) {
  return t.isFiltered ? Du(t.root, t.isMatch.bind(t)) : { list: wu(t.root), matchCount: 0 };
}
function wu(t) {
  const e = [];
  function r(n) {
    var i;
    n.level >= 0 && e.push(n), n.isOpen && ((i = n.children) === null || i === void 0 || i.forEach(r));
  }
  return r(t), e.forEach(In), e;
}
function Du(t, e) {
  const r = {}, n = [];
  let i = 0;
  function o(a) {
    if (!a.isRoot && e(a)) {
      i++, r[a.id] = !0;
      let c = a.parent;
      for (; c; )
        r[c.id] = !0, c = c.parent;
    }
    if (a.children)
      for (let c of a.children)
        o(c);
  }
  function s(a) {
    var u;
    a.level >= 0 && r[a.id] && n.push(a), a.isOpen && ((u = a.children) === null || u === void 0 || u.forEach(s));
  }
  return o(t), s(t), n.forEach(In), { list: n, matchCount: i };
}
function In(t, e) {
  t.rowIndex = e;
}
const xr = (t) => t.reduce((e, r, n) => (e[r.id] = n, e), {});
var Ye = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(s) {
      s(o);
    });
  }
  return new (r || (r = Promise))(function(o, s) {
    function a(f) {
      try {
        c(n.next(f));
      } catch (h) {
        s(h);
      }
    }
    function u(f) {
      try {
        c(n.throw(f));
      } catch (h) {
        s(h);
      }
    }
    function c(f) {
      f.done ? o(f.value) : i(f.value).then(a, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
};
const { safeRun: N } = ni;
class oe {
  constructor(e, r, n, i) {
    this.store = e, this.props = r, this.list = n, this.listEl = i, this.matchCount = 0, this.visibleStartIndex = 0, this.visibleStopIndex = 0, this.rowOffsets = null, this.rowHeightAt = (a) => {
      const u = this.props.rowHeight;
      if (typeof u == "function") {
        const c = this.at(a);
        return c ? u(c) : this.rowHeight;
      }
      return u ?? 24;
    }, this.rowTopPosition = (a) => {
      if (typeof this.props.rowHeight != "function")
        return a * this.rowHeight;
      const u = this.getRowOffsets(), c = Math.max(0, Math.min(a, u.length - 1));
      return u[c];
    }, this.redrawList = (a = 0) => {
      this.rowOffsets = null;
      const u = this.list.current;
      u && "resetAfterIndex" in u && u.resetAfterIndex(Math.max(0, a));
    }, this.root = Tt(this);
    const { list: o, matchCount: s } = Nr(this);
    this.visibleNodes = o, this.matchCount = s, this.idToIndex = xr(this.visibleNodes);
  }
  /* Changes here must also be made in constructor() */
  update(e) {
    this.props = e, this.root = Tt(this);
    const { list: r, matchCount: n } = Nr(this);
    this.visibleNodes = r, this.matchCount = n, this.idToIndex = xr(this.visibleNodes), this.rowOffsets = null;
    const i = this.list.current;
    i && "resetAfterIndex" in i && i.resetAfterIndex(0, !1);
  }
  /* Store helpers */
  dispatch(e) {
    return this.store.dispatch(e);
  }
  get state() {
    return this.store.getState();
  }
  get openState() {
    return this.state.nodes.open.unfiltered;
  }
  /* Tree Props */
  get width() {
    var e;
    return (e = this.props.width) !== null && e !== void 0 ? e : 300;
  }
  get height() {
    var e;
    return (e = this.props.height) !== null && e !== void 0 ? e : 500;
  }
  get indent() {
    var e;
    return (e = this.props.indent) !== null && e !== void 0 ? e : 24;
  }
  /**
   * The fixed row height. When a `rowHeight` function is supplied for variable
   * heights, this returns the default (24); use `rowHeightAt(index)` to get the
   * height of a specific row.
   */
  get rowHeight() {
    return typeof this.props.rowHeight == "number" ? this.props.rowHeight : 24;
  }
  /** Lazily-built prefix sum where offsets[i] is the top of row i. */
  getRowOffsets() {
    if (this.rowOffsets)
      return this.rowOffsets;
    const e = [0];
    for (let r = 0; r < this.visibleNodes.length; r++)
      e.push(e[r] + this.rowHeightAt(r));
    return this.rowOffsets = e, e;
  }
  get overscanCount() {
    var e;
    return (e = this.props.overscanCount) !== null && e !== void 0 ? e : 1;
  }
  get searchTerm() {
    return (this.props.searchTerm || "").trim();
  }
  get matchFn() {
    var e;
    const r = (e = this.props.searchMatch) !== null && e !== void 0 ? e : (n, i) => {
      const o = this.accessChildren(n.data), s = Object.values(n.data).filter((u) => o === null || u !== o);
      return JSON.stringify(s).toLocaleLowerCase().includes(i.toLocaleLowerCase());
    };
    return (n) => r(n, this.searchTerm);
  }
  accessChildren(e) {
    var r;
    const n = this.props.childrenAccessor || "children";
    return (r = ie(e, n)) !== null && r !== void 0 ? r : null;
  }
  accessId(e) {
    const r = this.props.idAccessor || "id", n = ie(e, r);
    if (!n)
      throw new Error("Data must contain an 'id' property or props.idAccessor must return a string");
    return n;
  }
  /**
   * Resolve an identifier to a node id. Public methods accept an id string, a
   * NodeApi, or the raw row data; this is the one place that turns any of those
   * into the string id used internally. Raw data is run through the configured
   * `idAccessor` so a custom accessor (e.g. `uuid`) is honored everywhere, not
   * just where nodes were built. A NodeApi already carries its accessor-derived
   * `id`, so it is used directly rather than re-accessed (the accessor reads the
   * underlying data, which a NodeApi does not expose under that key). Unlike
   * `accessId`, an unresolved id comes back as `undefined` rather than throwing,
   * preserving the previous behavior of the `id`-only lookup.
   */
  identify(e) {
    if (typeof e == "string")
      return e;
    if (e instanceof ae)
      return e.id;
    const r = this.props.idAccessor || "id";
    return ie(e, r);
  }
  identifyNull(e) {
    return e == null ? null : this.identify(e);
  }
  /* Node Access */
  get firstNode() {
    var e;
    return (e = this.visibleNodes[0]) !== null && e !== void 0 ? e : null;
  }
  get lastNode() {
    var e;
    return (e = this.visibleNodes[this.visibleNodes.length - 1]) !== null && e !== void 0 ? e : null;
  }
  get focusedNode() {
    var e;
    return (e = this.get(this.state.nodes.focus.id)) !== null && e !== void 0 ? e : null;
  }
  get mostRecentNode() {
    var e;
    return (e = this.get(this.state.nodes.selection.mostRecent)) !== null && e !== void 0 ? e : null;
  }
  get nextNode() {
    const e = this.indexOf(this.focusedNode);
    return e === null ? null : this.at(e + 1);
  }
  get prevNode() {
    const e = this.indexOf(this.focusedNode);
    return e === null ? null : this.at(e - 1);
  }
  get(e) {
    return e && e in this.idToIndex && this.visibleNodes[this.idToIndex[e]] || null;
  }
  at(e) {
    return this.visibleNodes[e] || null;
  }
  nodesBetween(e, r) {
    var n;
    if (e === null || r === null)
      return [];
    const i = (n = this.indexOf(e)) !== null && n !== void 0 ? n : 0, o = this.indexOf(r);
    if (o === null)
      return [];
    const s = Math.min(i, o), a = Math.max(i, o);
    return this.visibleNodes.slice(s, a + 1);
  }
  indexOf(e) {
    const r = this.identifyNull(e);
    return r ? this.idToIndex[r] : null;
  }
  /* Data Operations */
  get editingId() {
    return this.state.nodes.edit.id;
  }
  createInternal() {
    return this.create({ type: "internal" });
  }
  createLeaf() {
    return this.create({ type: "leaf" });
  }
  create() {
    return Ye(this, arguments, void 0, function* (e = {}) {
      var r, n;
      const i = e.parentId === void 0 ? Yr(this) : e.parentId, o = (r = e.index) !== null && r !== void 0 ? r : Gr(this), s = (n = e.type) !== null && n !== void 0 ? n : "leaf", a = yield N(this.props.onCreate, {
        type: s,
        parentId: i,
        index: o,
        parentNode: this.get(i)
      });
      a && (this.focus(a), setTimeout(() => {
        this.edit(a).then(() => {
          this.select(a), this.activate(a);
        });
      }));
    });
  }
  delete(e) {
    return Ye(this, void 0, void 0, function* () {
      if (!e)
        return;
      const n = (Array.isArray(e) ? e : [e]).map((s) => this.identify(s)), i = n.map((s) => this.get(s)).filter((s) => !!s), o = i.length ? Math.min(...i.map((s) => {
        var a;
        return (a = s.rowIndex) !== null && a !== void 0 ? a : 0;
      })) : 0;
      yield N(this.props.onDelete, { nodes: i, ids: n }), this.redrawList(o);
    });
  }
  edit(e) {
    var r, n;
    const i = this.identify(e);
    return this.resolveEdit({ cancelled: !0 }), this.scrollTo(i), this.dispatch(Me(i)), this.redrawList((n = (r = this.get(i)) === null || r === void 0 ? void 0 : r.rowIndex) !== null && n !== void 0 ? n : 0), new Promise((o) => {
      oe.editPromise = o;
    });
  }
  submit(e, r) {
    return Ye(this, void 0, void 0, function* () {
      var n, i;
      if (!e)
        return;
      const o = this.identify(e);
      yield N(this.props.onRename, {
        id: o,
        name: r,
        node: this.get(o)
      }), this.dispatch(Me(null)), this.resolveEdit({ cancelled: !1, value: r }), this.redrawList((i = (n = this.get(o)) === null || n === void 0 ? void 0 : n.rowIndex) !== null && i !== void 0 ? i : 0), setTimeout(() => this.onFocus());
    });
  }
  reset() {
    this.dispatch(Me(null)), this.resolveEdit({ cancelled: !0 }), this.redrawList(), setTimeout(() => this.onFocus());
  }
  activate(e) {
    const r = this.get(this.identifyNull(e));
    r && N(this.props.onActivate, r);
  }
  resolveEdit(e) {
    const r = oe.editPromise;
    r && r(e), oe.editPromise = null;
  }
  /* Focus and Selection */
  get selectedIds() {
    return this.state.nodes.selection.ids;
  }
  get selectedNodes() {
    let e = [];
    for (let r of Array.from(this.selectedIds)) {
      const n = this.get(r);
      n && e.push(n);
    }
    return e;
  }
  focus(e, r = {}) {
    e && (this.props.selectionFollowsFocus ? this.select(e) : (this.dispatch(K(this.identify(e))), r.scroll !== !1 && this.scrollTo(e), this.focusedNode && N(this.props.onFocus, this.focusedNode)));
  }
  pageUp() {
    var e, r;
    const n = this.visibleStartIndex, o = this.visibleStopIndex - n;
    let s = (r = (e = this.focusedNode) === null || e === void 0 ? void 0 : e.rowIndex) !== null && r !== void 0 ? r : 0;
    s > n ? s = n : s = Math.max(n - o, 0), this.focus(this.at(s));
  }
  pageDown() {
    var e, r;
    const n = this.visibleStartIndex, i = this.visibleStopIndex, o = i - n;
    let s = (r = (e = this.focusedNode) === null || e === void 0 ? void 0 : e.rowIndex) !== null && r !== void 0 ? r : 0;
    s < i ? s = i : s = Math.min(s + o, this.visibleNodes.length - 1), this.focus(this.at(s));
  }
  select(e, r = {}) {
    var n;
    if (!e)
      return;
    const i = r.focus !== !1, o = this.identify(e);
    i && this.dispatch(K(o)), !((n = this.get(o)) === null || n === void 0) && n.isSelectable && this.setSelection({
      ids: [o],
      anchor: o,
      mostRecent: o
    }), this.scrollTo(o, r.align), this.focusedNode && i && N(this.props.onFocus, this.focusedNode);
  }
  deselect(e) {
    if (!e)
      return;
    const r = this.identify(e);
    this.dispatch(H.remove(r)), N(this.props.onSelect, this.selectedNodes);
  }
  selectMulti(e, r = {}) {
    const n = this.get(this.identifyNull(e));
    if (!n)
      return;
    const i = r.focus !== !1;
    i && this.dispatch(K(n.id)), n.isSelectable && (this.dispatch(H.add(n.id)), this.dispatch(H.anchor(n.id)), this.dispatch(H.mostRecent(n.id))), this.scrollTo(n, r.align), this.focusedNode && i && N(this.props.onFocus, this.focusedNode), N(this.props.onSelect, this.selectedNodes);
  }
  selectContiguous(e) {
    var r;
    if (!e)
      return;
    const n = this.identify(e);
    if (this.dispatch(K(n)), !((r = this.get(n)) === null || r === void 0) && r.isSelectable) {
      const { anchor: i, mostRecent: o } = this.state.nodes.selection, s = this.filterSelectableNodes(this.nodesBetween(i, this.identifyNull(n)));
      this.dispatch(H.remove(this.nodesBetween(i, o).map((a) => a.id))), this.dispatch(H.add(s.map((a) => a.id))), this.dispatch(H.mostRecent(n));
    }
    this.scrollTo(n), this.focusedNode && N(this.props.onFocus, this.focusedNode), N(this.props.onSelect, this.selectedNodes);
  }
  deselectAll() {
    this.setSelection({ ids: [], anchor: null, mostRecent: null });
  }
  selectAll() {
    var e, r, n;
    const i = this.filterSelectableNodes(Object.keys(this.idToIndex));
    this.setSelection({
      ids: i,
      anchor: (e = i[0]) !== null && e !== void 0 ? e : null,
      mostRecent: (r = i[i.length - 1]) !== null && r !== void 0 ? r : null
    }), this.dispatch(K((n = this.lastNode) === null || n === void 0 ? void 0 : n.id)), this.focusedNode && N(this.props.onFocus, this.focusedNode);
  }
  filterSelectableNodes(e) {
    return e.map((r) => this.get(this.identify(r))).filter((r) => !!r && r.isSelectable);
  }
  setSelection(e) {
    var r;
    const n = new Set((r = e.ids) === null || r === void 0 ? void 0 : r.map((s) => this.identify(s))), i = this.identifyNull(e.anchor), o = this.identifyNull(e.mostRecent);
    this.dispatch(H.set({ ids: n, anchor: i, mostRecent: o })), N(this.props.onSelect, this.selectedNodes);
  }
  /* Drag and Drop */
  get cursorParentId() {
    const { cursor: e } = this.state.dnd;
    switch (e.type) {
      case "highlight":
        return e.id;
      default:
        return null;
    }
  }
  get cursorOverFolder() {
    return this.state.dnd.cursor.type === "highlight";
  }
  get dragNodes() {
    return this.state.dnd.dragIds.map((e) => this.get(e)).filter((e) => !!e);
  }
  get dragNode() {
    return this.get(this.state.nodes.drag.id);
  }
  get dragDestinationParent() {
    return this.get(this.state.nodes.drag.destinationParentId);
  }
  get dragDestinationIndex() {
    return this.state.nodes.drag.destinationIndex;
  }
  canDrop() {
    var e;
    if (this.isFiltered)
      return !1;
    const r = (e = this.get(this.state.dnd.parentId)) !== null && e !== void 0 ? e : this.root, n = this.dragNodes, i = this.props.disableDrop;
    for (const o of n)
      if (!o || !r || o.isInternal && Ur(r, o))
        return !1;
    return typeof i == "function" ? !i({
      parentNode: r,
      dragNodes: this.dragNodes,
      index: this.state.dnd.index || 0
    }) : typeof i == "string" ? !r.data[i] : typeof i == "boolean" ? !i : !0;
  }
  /* Called by the drop hooks on every hover. Records the computed target for
     the drop guard (canDrop() and drop() read state.dnd.parentId), then — only
     when that target is actually droppable — surfaces it to consumers
     (willReceiveDrop, dragDestinationParent) and shows the cursor. When it
     isn't droppable, the consumer-facing destination and the cursor are both
     cleared so they never disagree with canDrop() (#247); the guard still sees
     the real target, so releasing over an invalid spot is rejected rather than
     falling back to a root drop. */
  hover(e, r) {
    e && this.dispatch(F.hovering(e.parentId, e.index)), e && this.canDrop() ? (this.dispatch(F.setDestination(e.parentId, e.index)), r && this.showCursor(r)) : (this.dispatch(F.setDestination(null, null)), this.hideCursor());
  }
  drop() {
    const { parentId: e, index: r, dragIds: n } = this.state.dnd;
    N(this.props.onMove, {
      dragIds: n,
      parentId: e === se ? null : e,
      index: r === null ? 0 : r,
      // When it's null it was dropped over a folder
      dragNodes: this.dragNodes,
      parentNode: this.get(e)
    }), this.open(e);
  }
  hideCursor() {
    this.dispatch(F.cursor({ type: "none" }));
  }
  showCursor(e) {
    this.dispatch(F.cursor(e));
  }
  /* Visibility */
  open(e, r = !0) {
    var n, i;
    const o = this.identifyNull(e);
    o && (this.isOpen(o) || (this.dispatch(Je.open(o, this.isFiltered)), r && this.redrawList((i = (n = this.get(o)) === null || n === void 0 ? void 0 : n.rowIndex) !== null && i !== void 0 ? i : 0), N(this.props.onToggle, o)));
  }
  close(e, r = !0) {
    var n, i;
    const o = this.identifyNull(e);
    o && this.isOpen(o) && (this.dispatch(Je.close(o, this.isFiltered)), r && this.redrawList((i = (n = this.get(o)) === null || n === void 0 ? void 0 : n.rowIndex) !== null && i !== void 0 ? i : 0), N(this.props.onToggle, o));
  }
  toggle(e) {
    const r = this.identifyNull(e);
    if (r)
      return this.isOpen(r) ? this.close(r) : this.open(r);
  }
  openParents(e) {
    const r = this.identifyNull(e);
    if (!r)
      return;
    const n = ct(this.root, r);
    let i = n == null ? void 0 : n.parent;
    for (; i; )
      this.open(i.id, !1), i = i.parent;
    this.redrawList();
  }
  openSiblings(e) {
    const r = e.parent;
    if (!r)
      this.toggle(e.id);
    else if (r.children) {
      const n = e.isOpen;
      for (let i of r.children)
        i.isInternal && (n ? this.close(i.id, !1) : this.open(i.id, !1));
      this.redrawList(), this.scrollTo(this.focusedNode);
    }
  }
  openAll() {
    we(this.root, (e) => {
      e.isInternal && this.open(e.id, !1);
    }), this.redrawList();
  }
  closeAll() {
    we(this.root, (e) => {
      e.isInternal && this.close(e.id, !1);
    }), this.redrawList();
  }
  /* Scrolling */
  scrollTo(e, r = "smart") {
    if (!e)
      return;
    const n = this.identify(e);
    return this.openParents(n), qr(() => n in this.idToIndex).then(() => {
      var i;
      const o = this.idToIndex[n];
      o !== void 0 && ((i = this.list.current) === null || i === void 0 || i.scrollToItem(o, r), this.scrollToNodeHorizontally(this.get(n)));
    }).catch(() => {
    });
  }
  /**
   * Horizontally scroll the list so the node's indented content is in view.
   * A no-op when the list doesn't overflow horizontally (the common case), so
   * it never disturbs scrolling for trees that fit their width.
   */
  scrollToNodeHorizontally(e) {
    const r = this.listEl.current;
    if (!e || !r)
      return;
    const n = r.scrollWidth - r.clientWidth;
    if (n <= 0)
      return;
    const i = e.level * this.indent, o = r.scrollLeft, s = r.scrollLeft + r.clientWidth;
    (i < o || i >= s) && (r.scrollLeft = Math.max(0, Math.min(i, n)));
  }
  /**
   * Scroll the list vertically to an exact pixel offset from the top. This is
   * the offset-based counterpart to scrollTo(), handy for saving and restoring
   * a scroll position (#194). Negative values are clamped to the top; react-
   * window clamps the upper bound to the scrollable range.
   */
  scrollToOffset(e) {
    var r;
    const n = Number.isFinite(e) ? Math.max(0, e) : 0;
    (r = this.list.current) === null || r === void 0 || r.scrollTo(n);
  }
  /** The list's current vertical scroll offset, in pixels from the top. */
  get scrollOffset() {
    var e, r;
    return (r = (e = this.listEl.current) === null || e === void 0 ? void 0 : e.scrollTop) !== null && r !== void 0 ? r : 0;
  }
  /* State Checks */
  get isEditing() {
    return this.state.nodes.edit.id !== null;
  }
  get isFiltered() {
    var e;
    return !!(!((e = this.props.searchTerm) === null || e === void 0) && e.trim());
  }
  /** The number of nodes matching the current search term, counted across the
   * whole tree regardless of which folders are open. Returns 0 when there is no
   * active search. Consumers use this to render match counts or a "no results"
   * message (#112, #256). Ancestors shown only to keep the tree's structure
   * intact are not counted. The count is computed once when the visible list is
   * built (see createList), so reading it never re-traverses the tree. */
  get filteredCount() {
    return this.matchCount;
  }
  get hasFocus() {
    return this.state.nodes.focus.treeFocused;
  }
  get hasNoSelection() {
    return this.state.nodes.selection.ids.size === 0;
  }
  get hasOneSelection() {
    return this.state.nodes.selection.ids.size === 1;
  }
  get hasMultipleSelections() {
    return this.state.nodes.selection.ids.size > 1;
  }
  isSelected(e) {
    return e ? this.state.nodes.selection.ids.has(e) : !1;
  }
  isOpen(e) {
    var r, n, i;
    if (!e)
      return !1;
    if (e === se)
      return !0;
    const o = (r = this.props.openByDefault) !== null && r !== void 0 ? r : !0;
    return this.isFiltered ? (n = this.state.nodes.open.filtered[e]) !== null && n !== void 0 ? n : !0 : (i = this.state.nodes.open.unfiltered[e]) !== null && i !== void 0 ? i : o;
  }
  isEditable(e) {
    return this.isActionPossible(e, this.props.disableEdit);
  }
  isDraggable(e) {
    return this.isActionPossible(e, this.props.disableDrag);
  }
  isSelectable(e) {
    return this.isActionPossible(e, this.props.disableSelect);
  }
  isActionPossible(e, r = () => !1) {
    return !ie(e, r);
  }
  isDragging(e) {
    const r = this.identifyNull(e);
    return r ? this.state.nodes.drag.id === r : !1;
  }
  isFocused(e) {
    return this.hasFocus && this.state.nodes.focus.id === e;
  }
  isMatch(e) {
    return this.matchFn(e);
  }
  willReceiveDrop(e) {
    const r = this.identifyNull(e);
    if (!r)
      return !1;
    const { destinationParentId: n, destinationIndex: i } = this.state.nodes.drag;
    return r === n && i === null;
  }
  /* Tree Event Handlers */
  onFocus() {
    const e = this.focusedNode || this.firstNode;
    e && this.dispatch(K(e.id));
  }
  onBlur() {
    this.dispatch(hi());
  }
  onItemsRendered(e) {
    this.visibleStartIndex = e.visibleStartIndex, this.visibleStopIndex = e.visibleStopIndex;
  }
  /* Get Renderers */
  get renderContainer() {
    return this.props.renderContainer || Sn;
  }
  get renderRow() {
    return this.props.renderRow || ui;
  }
  get renderNode() {
    return this.props.children || li;
  }
  get renderDragPreview() {
    return this.props.renderDragPreview || Xr;
  }
  get renderCursor() {
    return this.props.renderCursor || ai;
  }
}
function x(t) {
  return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
var Tu = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), Pr = Tu, Xe = () => Math.random().toString(36).substring(7).split("").join("."), Eu = {
  INIT: `@@redux/INIT${Xe()}`,
  REPLACE: `@@redux/REPLACE${Xe()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Xe()}`
}, U = Eu;
function wn(t) {
  if (typeof t != "object" || t === null)
    return !1;
  let e = t;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e || Object.getPrototypeOf(t) === null;
}
function _u(t) {
  if (t === void 0)
    return "undefined";
  if (t === null)
    return "null";
  const e = typeof t;
  switch (e) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return e;
  }
  if (Array.isArray(t))
    return "array";
  if (xu(t))
    return "date";
  if (Nu(t))
    return "error";
  const r = Cu(t);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return Object.prototype.toString.call(t).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function Cu(t) {
  return typeof t.constructor == "function" ? t.constructor.name : null;
}
function Nu(t) {
  return t instanceof Error || typeof t.message == "string" && t.constructor && typeof t.constructor.stackTraceLimit == "number";
}
function xu(t) {
  return t instanceof Date ? !0 : typeof t.toDateString == "function" && typeof t.getDate == "function" && typeof t.setDate == "function";
}
function z(t) {
  let e = typeof t;
  return process.env.NODE_ENV !== "production" && (e = _u(t)), e;
}
function Dn(t, e, r) {
  if (typeof t != "function")
    throw new Error(process.env.NODE_ENV === "production" ? x(2) : `Expected the root reducer to be a function. Instead, received: '${z(t)}'`);
  if (typeof e == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? x(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof e == "function" && typeof r > "u" && (r = e, e = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? x(1) : `Expected the enhancer to be a function. Instead, received: '${z(r)}'`);
    return r(Dn)(t, e);
  }
  let n = t, i = e, o = /* @__PURE__ */ new Map(), s = o, a = 0, u = !1;
  function c() {
    s === o && (s = /* @__PURE__ */ new Map(), o.forEach((d, g) => {
      s.set(g, d);
    }));
  }
  function f() {
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? x(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function h(d) {
    if (typeof d != "function")
      throw new Error(process.env.NODE_ENV === "production" ? x(4) : `Expected the listener to be a function. Instead, received: '${z(d)}'`);
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? x(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let g = !0;
    c();
    const y = a++;
    return s.set(y, d), function() {
      if (g) {
        if (u)
          throw new Error(process.env.NODE_ENV === "production" ? x(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        g = !1, c(), s.delete(y), o = null;
      }
    };
  }
  function v(d) {
    if (!wn(d))
      throw new Error(process.env.NODE_ENV === "production" ? x(7) : `Actions must be plain objects. Instead, the actual type was: '${z(d)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof d.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? x(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof d.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? x(17) : `Action "type" property must be a string. Instead, the actual type was: '${z(d.type)}'. Value was: '${d.type}' (stringified)`);
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? x(9) : "Reducers may not dispatch actions.");
    try {
      u = !0, i = n(i, d);
    } finally {
      u = !1;
    }
    return (o = s).forEach((y) => {
      y();
    }), d;
  }
  function p(d) {
    if (typeof d != "function")
      throw new Error(process.env.NODE_ENV === "production" ? x(10) : `Expected the nextReducer to be a function. Instead, received: '${z(d)}`);
    n = d, v({
      type: U.REPLACE
    });
  }
  function m() {
    const d = h;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(g) {
        if (typeof g != "object" || g === null)
          throw new Error(process.env.NODE_ENV === "production" ? x(11) : `Expected the observer to be an object. Instead, received: '${z(g)}'`);
        function y() {
          const D = g;
          D.next && D.next(f());
        }
        return y(), {
          unsubscribe: d(y)
        };
      },
      [Pr]() {
        return this;
      }
    };
  }
  return v({
    type: U.INIT
  }), {
    dispatch: v,
    subscribe: h,
    getState: f,
    replaceReducer: p,
    [Pr]: m
  };
}
function Ar(t) {
  typeof console < "u" && typeof console.error == "function" && console.error(t);
  try {
    throw new Error(t);
  } catch {
  }
}
function Pu(t, e, r, n) {
  const i = Object.keys(e), o = r && r.type === U.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!wn(t))
    return `The ${o} has unexpected type of "${z(t)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const s = Object.keys(t).filter((a) => !e.hasOwnProperty(a) && !n[a]);
  if (s.forEach((a) => {
    n[a] = !0;
  }), !(r && r.type === U.REPLACE) && s.length > 0)
    return `Unexpected ${s.length > 1 ? "keys" : "key"} "${s.join('", "')}" found in ${o}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function Au(t) {
  Object.keys(t).forEach((e) => {
    const r = t[e];
    if (typeof r(void 0, {
      type: U.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? x(12) : `The slice reducer for key "${e}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: U.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? x(13) : `The slice reducer for key "${e}" returned undefined when probed with a random type. Don't try to handle '${U.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function kr(t) {
  const e = Object.keys(t), r = {};
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    process.env.NODE_ENV !== "production" && typeof t[a] > "u" && Ar(`No reducer provided for key "${a}"`), typeof t[a] == "function" && (r[a] = t[a]);
  }
  const n = Object.keys(r);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let o;
  try {
    Au(r);
  } catch (s) {
    o = s;
  }
  return function(a = {}, u) {
    if (o)
      throw o;
    if (process.env.NODE_ENV !== "production") {
      const h = Pu(a, r, u, i);
      h && Ar(h);
    }
    let c = !1;
    const f = {};
    for (let h = 0; h < n.length; h++) {
      const v = n[h], p = r[v], m = a[v], l = p(m, u);
      if (typeof l > "u") {
        const d = u && u.type;
        throw new Error(process.env.NODE_ENV === "production" ? x(14) : `When called with an action of type ${d ? `"${String(d)}"` : "(unknown type)"}, the slice reducer for key "${v}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      f[v] = l, c = c || l !== m;
    }
    return c = c || n.length !== Object.keys(a).length, c ? f : a;
  };
}
function ku(t = Z().nodes.drag, e) {
  switch (e.type) {
    case "DND_DRAG_START":
      return Object.assign(Object.assign({}, t), { id: e.id, selectedIds: e.dragIds });
    case "DND_DRAG_END":
      return Object.assign(Object.assign({}, t), { id: null, destinationParentId: null, destinationIndex: null, selectedIds: [] });
    case "DND_DESTINATION":
      return e.parentId !== t.destinationParentId || e.index != t.destinationIndex ? Object.assign(Object.assign({}, t), { destinationParentId: e.parentId, destinationIndex: e.index }) : t;
    default:
      return t;
  }
}
const Ru = kr({
  nodes: kr({
    focus: gi,
    edit: fi,
    open: pi,
    selection: vi,
    drag: ku
  }),
  dnd: yi
}), Mu = Z();
function Lu({ treeProps: t, imperativeHandle: e, children: r }) {
  const n = Q(null), i = Q(null), o = Q(
    // @ts-ignore
    Dn(Ru, Z(t))
  ), s = Kn.useSyncExternalStore(o.current.subscribe, o.current.getState, () => Mu), a = _(() => new oe(o.current, t, n, i), []), u = Q(0);
  return _(() => {
    u.current += 1, a.update(t);
  }, Object.values(t)), _(() => {
    u.current += 1, a.update(a.props);
  }, [s.nodes.open]), jn(e, () => a), L(() => {
    a.props.selection ? a.select(a.props.selection, { focus: !1 }) : a.deselectAll();
  }, [a.props.selection]), L(() => {
    a.props.searchTerm || o.current.dispatch(Je.clear(!0));
  }, [a.props.searchTerm]), O(Mr.Provider, { value: a, children: O(jr.Provider, { value: u.current, children: O(Lr.Provider, { value: s.nodes, children: O($r.Provider, { value: s.dnd, children: O(Ds, Object.assign({}, t.dndManager ? { manager: t.dndManager } : {
    backend: t.dndBackend || hu,
    options: {
      rootElement: a.props.dndRootElement || void 0
    }
  }, { children: r })) }) }) }) });
}
function $u() {
  const t = A(), [, e] = fn(() => ({
    accept: "NODE",
    canDrop: (r, n) => n.isOver({ shallow: !0 }) ? t.canDrop() : !1,
    hover: (r, n) => {
      if (!n.isOver({ shallow: !0 }))
        return;
      const i = n.getClientOffset();
      if (!t.listEl.current || !i)
        return;
      const { cursor: o, drop: s } = On({
        element: t.listEl.current,
        offset: i,
        indent: t.indent,
        node: null,
        prevNode: t.visibleNodes[t.visibleNodes.length - 1],
        nextNode: null
      });
      t.hover(s, o);
    },
    drop: (r, n) => {
      if (!n.isOver({ shallow: !0 }) || !n.canDrop())
        return null;
      t.drop();
    }
  }), [t]);
  e(t.listEl);
}
function ju(t) {
  return $u(), t.children;
}
function Hu() {
  const e = A().props.renderContainer || Sn;
  return O(st, { children: O(e, {}) });
}
function zu() {
  const t = A(), { offset: e, mouse: r, item: n, isDragging: i } = Va((s) => ({
    offset: s.getSourceClientOffset(),
    mouse: s.getClientOffset(),
    item: s.getItem(),
    isDragging: s.isDragging()
  })), o = t.props.renderDragPreview || Xr;
  return O(o, { offset: e, mouse: r, id: (n == null ? void 0 : n.id) || null, dragIds: (n == null ? void 0 : n.dragIds) || [], isDragging: i });
}
function Fu(t = {}) {
  var e, r;
  const n = (e = t.idAccessor) !== null && e !== void 0 ? e : "id", i = (r = t.childrenAccessor) !== null && r !== void 0 ? r : "children";
  return {
    getId: typeof n == "function" ? n : (o) => o[n],
    getChildren: typeof i == "function" ? i : (o) => o[i],
    childrenKey: typeof i == "string" ? i : "children"
  };
}
class Uu {
  constructor(e, r = {}) {
    this.accessors = Fu(r), this.root = Vu(e, this.accessors);
  }
  get data() {
    var e, r;
    return (r = (e = this.root.children) === null || e === void 0 ? void 0 : e.map((n) => n.data)) !== null && r !== void 0 ? r : [];
  }
  create(e) {
    const r = e.parentId ? this.find(e.parentId) : this.root;
    if (!r)
      return null;
    r.addChild(e.data, e.index);
  }
  move(e) {
    const r = this.find(e.id), n = e.parentId ? this.find(e.parentId) : this.root;
    !r || !n || (n.addChild(r.data, e.index), r.drop());
  }
  update(e) {
    const r = this.find(e.id);
    r && r.update(e.changes);
  }
  drop(e) {
    const r = this.find(e.id);
    r && r.drop();
  }
  find(e, r = this.root) {
    if (!r)
      return null;
    if (r.id === e)
      return r;
    if (r.children) {
      for (let n of r.children) {
        const i = this.find(e, n);
        if (i)
          return i;
      }
      return null;
    }
    return null;
  }
}
function Vu(t, e) {
  const r = new Tn({}, null, e, "ROOT");
  return r.children = t.map((n) => yt(n, r, e)), r;
}
function yt(t, e, r) {
  const n = new Tn(t, e, r), i = r.getChildren(t);
  return i && (n.children = i.map((o) => yt(o, n, r))), n;
}
class Tn {
  constructor(e, r, n, i) {
    this.data = e, this.parent = r, this.accessors = n, this.id = i ?? n.getId(e);
  }
  hasParent() {
    return !!this.parent;
  }
  get childIndex() {
    return this.hasParent() ? this.parent.children.indexOf(this) : -1;
  }
  addChild(e, r) {
    var n, i;
    const o = yt(e, this, this.accessors);
    this.children = (n = this.children) !== null && n !== void 0 ? n : [], this.children.splice(r, 0, o);
    const s = this.accessors.childrenKey, a = this.data;
    a[s] = (i = a[s]) !== null && i !== void 0 ? i : [], a[s].splice(r, 0, e);
  }
  removeChild(e) {
    var r, n;
    (r = this.children) === null || r === void 0 || r.splice(e, 1), (n = this.data[this.accessors.childrenKey]) === null || n === void 0 || n.splice(e, 1);
  }
  update(e) {
    if (this.hasParent()) {
      const r = this.childIndex;
      this.parent.addChild(Object.assign(Object.assign({}, this.data), e), r), this.drop();
    }
  }
  drop() {
    this.hasParent() && this.parent.removeChild(this.childIndex);
  }
}
let Wu = 0;
function Bu(t, e = {}) {
  const [r, n] = lt(t), i = e.idAccessor, o = e.childrenAccessor, s = e.onChange, a = _(() => new Uu(r, { idAccessor: i, childrenAccessor: o }), [r, i, o]), u = () => {
    const d = a.data;
    n(d), s == null || s(d);
  }, c = (d) => {
    for (const g of d.dragIds)
      a.move({ id: g, parentId: d.parentId, index: d.index });
    u();
  }, f = ({ name: d, id: g }) => {
    a.update({ id: g, changes: { name: d } }), u();
  }, h = typeof i == "string" ? i : "id", v = typeof o == "string" ? o : "children";
  return [r, { onMove: c, onRename: f, onCreate: ({ parentId: d, index: g, type: y }) => {
    if (typeof i == "function")
      throw new Error("React Arborist => initialData can't create nodes when idAccessor is a function: the generated id can't be written under a key the accessor reads. Use a string idAccessor, or the controlled `data` prop with your own onCreate.");
    if (y === "internal" && typeof o == "function")
      throw new Error("React Arborist => initialData can't create folder nodes when childrenAccessor is a function: the new children array can't be written under a key the accessor reads. Use a string childrenAccessor, or the controlled `data` prop with your own onCreate.");
    const b = { [h]: `simple-tree-id-${Wu++}`, name: "" };
    return y === "internal" && (b[v] = []), a.create({ parentId: d, index: g, data: b }), u(), b;
  }, onDelete: (d) => {
    d.ids.forEach((g) => a.drop({ id: g })), u();
  } }];
}
function Ku(t) {
  if (t.initialData && t.data)
    throw new Error("React Arborist Tree => Provide either a data or initialData prop, but not both.");
  if (t.initialData && (t.onCreate || t.onDelete || t.onMove || t.onRename))
    throw new Error(`React Arborist Tree => You passed the initialData prop along with a data handler.
Use the data prop if you want to provide your own handlers.`);
  if (t.initialData) {
    const [e, r] = Bu(t.initialData, {
      idAccessor: t.idAccessor,
      childrenAccessor: t.childrenAccessor
    });
    return Object.assign(Object.assign(Object.assign({}, t), r), { data: e });
  } else
    return t;
}
function qu(t, e) {
  const r = Ku(t);
  return V(Lu, { treeProps: r, imperativeHandle: e, children: [O(ju, { children: O(Hu, {}) }), O(zu, {})] });
}
const Gu = ut(qu), Yu = (t) => {
  if (!t.isLeaf)
    return t.isOpen ? Hn : zn;
};
function il(t) {
  const e = Rn(), [r, n] = lt(t.data), i = t.iconProvider || Fn;
  L(() => {
    n(t.data);
  }, [t.data]);
  const o = (a) => {
    if (a.data.icon)
      return i.getIcon(a.data.icon);
  };
  return /* @__PURE__ */ O(
    Gu,
    {
      initialData: r,
      padding: 0,
      width: "100%",
      rowHeight: 40,
      height: 500,
      idAccessor: "name",
      childrenAccessor: (a) => a.children,
      onSelect: (a) => {
        var c, f;
        var u = (f = (c = a[0]) == null ? void 0 : c.data) == null ? void 0 : f.path;
        e(u);
      },
      children: ({ node: a, style: u, dragHandle: c }) => {
        var f = Yu(a), h = o(a);
        return /* @__PURE__ */ V(
          "div",
          {
            className: "tree-menu",
            onClick: () => a.isInternal && a.toggle(),
            children: [
              /* @__PURE__ */ V(
                "div",
                {
                  className: "tree-menu-list",
                  style: { ...u },
                  ref: c,
                  children: [
                    h ? /* @__PURE__ */ O(h, { className: "label-icon" }) : /* @__PURE__ */ O(st, {}),
                    /* @__PURE__ */ O("div", { children: a.data.name })
                  ]
                }
              ),
              f ? /* @__PURE__ */ O("div", { className: "arrow-icon", children: /* @__PURE__ */ O(f, {}) }) : /* @__PURE__ */ O("div", {})
            ]
          }
        );
      }
    }
  );
}
export {
  il as default
};
