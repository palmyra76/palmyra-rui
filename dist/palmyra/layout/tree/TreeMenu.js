import { jsxs as K, jsx as I, Fragment as ut } from "react/jsx-runtime";
import { useNavigate as Mn } from "react-router-dom";
import Ce, { createContext as de, useContext as fe, useRef as re, useEffect as L, memo as lt, createElement as Me, PureComponent as $n, forwardRef as ct, isValidElement as Ln, cloneElement as wt, useLayoutEffect as jn, useMemo as N, useState as dt, useCallback as Ar, useImperativeHandle as Hn } from "react";
import { ArrowDropDown as Fn, ArrowRight as Vn } from "@mui/icons-material";
import { SimpleIconProvider as Un } from "../flexiLayout/IconProvider.js";
/* empty css                        */import { _ as zn } from "../../../chunks/extends.js";
import { g as Wn } from "../../../chunks/_commonjsHelpers.js";
var Ze = { exports: {} }, $e = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt;
function Bn() {
  if (Tt)
    return $e;
  Tt = 1;
  var t = Ce;
  function e(h, y) {
    return h === y && (h !== 0 || 1 / h === 1 / y) || h !== h && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useState, i = t.useEffect, o = t.useLayoutEffect, a = t.useDebugValue;
  function s(h, y) {
    var b = y(), D = n({ inst: { value: b, getSnapshot: y } }), l = D[0].inst, f = D[1];
    return o(function() {
      l.value = b, l.getSnapshot = y, u(l) && f({ inst: l });
    }, [h, b, y]), i(function() {
      return u(l) && f({ inst: l }), h(function() {
        u(l) && f({ inst: l });
      });
    }, [h]), a(b), b;
  }
  function u(h) {
    var y = h.getSnapshot;
    h = h.value;
    try {
      var b = y();
      return !r(h, b);
    } catch {
      return !0;
    }
  }
  function c(h, y) {
    return y();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : s;
  return $e.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : d, $e;
}
var Le = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Et;
function Kn() {
  return Et || (Et = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = Ce, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(v) {
      {
        for (var m = arguments.length, O = new Array(m > 1 ? m - 1 : 0), S = 1; S < m; S++)
          O[S - 1] = arguments[S];
        n("error", v, O);
      }
    }
    function n(v, m, O) {
      {
        var S = e.ReactDebugCurrentFrame, E = S.getStackAddendum();
        E !== "" && (m += "%s", O = O.concat([E]));
        var C = O.map(function(_) {
          return String(_);
        });
        C.unshift("Warning: " + m), Function.prototype.apply.call(console[v], console, C);
      }
    }
    function i(v, m) {
      return v === m && (v !== 0 || 1 / v === 1 / m) || v !== v && m !== m;
    }
    var o = typeof Object.is == "function" ? Object.is : i, a = t.useState, s = t.useEffect, u = t.useLayoutEffect, c = t.useDebugValue, d = !1, h = !1;
    function y(v, m, O) {
      d || t.startTransition !== void 0 && (d = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var S = m();
      if (!h) {
        var E = m();
        o(S, E) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), h = !0);
      }
      var C = a({
        inst: {
          value: S,
          getSnapshot: m
        }
      }), _ = C[0].inst, U = C[1];
      return u(function() {
        _.value = S, _.getSnapshot = m, b(_) && U({
          inst: _
        });
      }, [v, S, m]), s(function() {
        b(_) && U({
          inst: _
        });
        var Y = function() {
          b(_) && U({
            inst: _
          });
        };
        return v(Y);
      }, [v]), c(S), S;
    }
    function b(v) {
      var m = v.getSnapshot, O = v.value;
      try {
        var S = m();
        return !o(O, S);
      } catch {
        return !0;
      }
    }
    function D(v, m, O) {
      return m();
    }
    var l = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", f = !l, g = f ? D : y, p = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : g;
    Le.useSyncExternalStore = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Le;
}
process.env.NODE_ENV === "production" ? Ze.exports = Bn() : Ze.exports = Kn();
var qn = Ze.exports;
const Mr = de(null);
function k() {
  const t = fe(Mr);
  if (t === null)
    throw new Error("No Tree Api Provided");
  return t;
}
const $r = de(null);
function Gn() {
  const t = fe($r);
  if (t === null)
    throw new Error("Provide a NodesContext");
  return t;
}
const Lr = de(null);
function Yn() {
  const t = fe(Lr);
  if (t === null)
    throw new Error("Provide a DnDContext");
  return t;
}
const jr = de(0);
function Hr() {
  fe(jr);
}
function ye(t, e, r) {
  return Math.max(Math.min(t, r), e);
}
function Fr(t) {
  return t && t.isLeaf;
}
function Vr(t) {
  return t && t.isInternal && !t.isOpen;
}
function Ur(t) {
  var e;
  return t && t.isOpen && !(!((e = t.children) === null || e === void 0) && e.length);
}
const zr = (t, e) => {
  let r = t;
  for (; r; ) {
    if (r.id === e.id)
      return !0;
    r = r.parent;
  }
  return !1;
}, Wr = (t) => {
  if (!t.parent)
    throw Error("Node does not have a parent");
  return t.parent.children.findIndex((e) => e.id === t.id);
};
function Xn() {
}
function ft(t, e) {
  if (!t)
    return null;
  if (t.id === e)
    return t;
  if (t.children)
    for (let r of t.children) {
      const n = ft(r, e);
      if (n)
        return n;
    }
  return null;
}
function Te(t, e) {
  if (e(t), t.children)
    for (let r of t.children)
      Te(r, e);
}
function Br(t) {
  const e = qr(t);
  let r;
  for (let n = 0; n < e.length; ++n)
    if (e[n] === t) {
      r = Qn(e, n);
      break;
    }
  r == null || r.focus();
}
function Kr(t) {
  const e = qr(t);
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
function qr(t) {
  return Array.from(document.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)')).filter((e) => e === t || !t.contains(e));
}
function ue(t, e) {
  return typeof e == "boolean" ? e : typeof e == "string" ? t[e] : e(t);
}
function Gr(t) {
  return t === null ? null : W(t);
}
function W(t) {
  return typeof t == "string" ? t : t.id;
}
function Zn(...t) {
  return (e) => {
    t.forEach((r) => {
      typeof r == "function" ? r(e) : r != null && (r.current = e);
    });
  };
}
function Yr(t, ...e) {
  if (t)
    return t(...e);
}
function Xr(t) {
  return new Promise((e, r) => {
    let n = 0;
    function i() {
      n += 1, n === 100 && r(), t() ? e() : setTimeout(i, 10);
    }
    i();
  });
}
function Qr(t) {
  var e, r;
  const n = t.focusedNode;
  return n ? n.isOpen ? 0 : n.parent ? n.childIndex + 1 : 0 : (r = (e = t.root.children) === null || e === void 0 ? void 0 : e.length) !== null && r !== void 0 ? r : 0;
}
function Jr(t) {
  const e = t.focusedNode;
  return e ? e.isOpen ? e.id : e.parent && !e.parent.isRoot ? e.parent.id : null : null;
}
const ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  access: ue,
  bound: ye,
  dfs: ft,
  focusNextElement: Br,
  focusPrevElement: Kr,
  getInsertIndex: Qr,
  getInsertParentId: Jr,
  identify: W,
  identifyNull: Gr,
  indexOf: Wr,
  isClosed: Vr,
  isDescendant: zr,
  isItem: Fr,
  isOpenWithEmptyChildren: Ur,
  mergeRefs: Zn,
  noop: Xn,
  safeRun: Yr,
  waitFor: Xr,
  walk: Te
}, Symbol.toStringTag, { value: "Module" })), ti = {
  display: "flex",
  alignItems: "center",
  zIndex: 1
}, ri = {
  flex: 1,
  height: "2px",
  background: "#4B91E2",
  borderRadius: "1px"
}, ni = {
  width: "4px",
  height: "4px",
  boxShadow: "0 0 0 3px #4B91E2",
  borderRadius: "50%"
}, ii = Ce.memo(function({ top: e, left: r, indent: n }) {
  const i = {
    position: "absolute",
    pointerEvents: "none",
    top: e - 2 + "px",
    left: r + "px",
    right: n + "px"
  };
  return K("div", { style: Object.assign(Object.assign({}, ti), i), children: [I("div", { style: Object.assign({}, ni) }), I("div", { style: Object.assign({}, ri) })] });
});
function oi({ node: t, attrs: e, innerRef: r, children: n }) {
  return I("div", Object.assign({}, e, { ref: r, onFocus: (i) => i.stopPropagation(), onClick: t.handleClick, children: n }));
}
function ai(t) {
  return K("div", { ref: t.dragHandle, style: t.style, children: [I("span", { onClick: (e) => {
    e.stopPropagation(), t.node.toggle();
  }, children: t.node.isLeaf ? "🌳" : t.node.isOpen ? "🗁" : "🗀" }), " ", t.node.isEditing ? I(ui, Object.assign({}, t)) : I(si, Object.assign({}, t))] });
}
function si(t) {
  return I(ut, { children: I("span", { children: t.node.data.name }) });
}
function ui({ node: t }) {
  const e = re();
  return L(() => {
    var r, n;
    (r = e.current) === null || r === void 0 || r.focus(), (n = e.current) === null || n === void 0 || n.select();
  }, []), I("input", {
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
function je(t) {
  return { type: "EDIT", id: t };
}
function li(t = { id: null }, e) {
  return e.type === "EDIT" ? Object.assign(Object.assign({}, t), { id: e.id }) : t;
}
function X(t) {
  return { type: "FOCUS", id: t };
}
function ci() {
  return { type: "TREE_BLUR" };
}
function di(t = { id: null, treeFocused: !1 }, e) {
  return e.type === "FOCUS" ? Object.assign(Object.assign({}, t), { id: e.id, treeFocused: !0 }) : e.type === "TREE_BLUR" ? Object.assign(Object.assign({}, t), { treeFocused: !1 }) : t;
}
class Ee {
  constructor(e) {
    this.handleClick = (r) => {
      r.metaKey && !this.tree.props.disableMultiSelection ? this.isSelected ? this.deselect() : this.selectMulti() : r.shiftKey && !this.tree.props.disableMultiSelection ? this.selectContiguous() : (this.select(), this.activate());
    }, this.tree = e.tree, this.id = e.id, this.data = e.data, this.level = e.level, this.children = e.children, this.parent = e.parent, this.isDraggable = e.isDraggable, this.rowIndex = e.rowIndex;
  }
  get isRoot() {
    return this.id === ce;
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
    return new Ee(Object.assign({}, this));
  }
  edit() {
    return this.tree.edit(this);
  }
}
const ce = "__REACT_ARBORIST_INTERNAL_ROOT__";
function _t(t) {
  var e;
  function r(o, a, s) {
    const u = t.accessId(o), c = new Ee({
      tree: t,
      data: o,
      level: a,
      parent: s,
      id: u,
      children: null,
      isDraggable: t.isDraggable(o),
      rowIndex: null
    }), d = t.accessChildren(o);
    return d && (c.children = d.map((h) => r(h, a + 1, c))), c;
  }
  const n = new Ee({
    tree: t,
    id: ce,
    // @ts-ignore
    data: { id: ce },
    level: -1,
    parent: null,
    children: null,
    isDraggable: !0,
    rowIndex: null
  }), i = (e = t.props.data) !== null && e !== void 0 ? e : [];
  return n.children = i.map((o) => r(o, 0, n)), n;
}
const et = {
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
function Ct(t = {}, e) {
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
function fi(t = { filtered: {}, unfiltered: {} }, e) {
  return e.type.startsWith("VISIBILITY") ? e.filtered ? Object.assign(Object.assign({}, t), { filtered: Ct(t.filtered, e) }) : Object.assign(Object.assign({}, t), { unfiltered: Ct(t.unfiltered, e) }) : t;
}
const ne = (t) => {
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
}, j = {
  clear: () => ({ type: "SELECTION_CLEAR" }),
  only: (t) => ({
    type: "SELECTION_ONLY",
    id: W(t)
  }),
  add: (t) => ({
    type: "SELECTION_ADD",
    ids: (Array.isArray(t) ? t : [t]).map(W)
  }),
  remove: (t) => ({
    type: "SELECTION_REMOVE",
    ids: (Array.isArray(t) ? t : [t]).map(W)
  }),
  set: (t) => Object.assign({ type: "SELECTION_SET" }, t),
  mostRecent: (t) => ({
    type: "SELECTION_MOST_RECENT",
    id: t === null ? null : W(t)
  }),
  anchor: (t) => ({
    type: "SELECTION_ANCHOR",
    id: t === null ? null : W(t)
  })
};
function hi(t = ne().nodes.selection, e) {
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
const ie = {
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
  }
};
function gi(t = ne().dnd, e) {
  switch (e.type) {
    case "DND_CURSOR":
      return Object.assign(Object.assign({}, t), { cursor: e.cursor });
    case "DND_DRAG_START":
      return Object.assign(Object.assign({}, t), { dragId: e.id, dragIds: e.dragIds });
    case "DND_DRAG_END":
      return ne().dnd;
    case "DND_HOVERING":
      return Object.assign(Object.assign({}, t), { parentId: e.parentId, index: e.index });
    default:
      return t;
  }
}
const pi = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%"
}, vi = (t) => {
  if (!t)
    return { display: "none" };
  const { x: e, y: r } = t;
  return { transform: `translate(${e}px, ${r}px)` };
}, yi = (t) => {
  if (!t)
    return { display: "none" };
  const { x: e, y: r } = t;
  return { transform: `translate(${e + 10}px, ${r + 10}px)` };
};
function Zr({ offset: t, mouse: e, id: r, dragIds: n, isDragging: i }) {
  return K(mi, { isDragging: i, children: [I(bi, { offset: t, children: I(Si, { id: r, dragIds: n }) }), I(Oi, { mouse: e, count: n.length })] });
}
const mi = lt(function(e) {
  return e.isDragging ? I("div", { style: pi, children: e.children }) : null;
});
function bi(t) {
  return I("div", { className: "row preview", style: vi(t.offset), children: t.children });
}
function Oi(t) {
  const { count: e, mouse: r } = t;
  return e > 1 ? I("div", { className: "selected-count", style: yi(r), children: e }) : null;
}
const Si = lt(function(e) {
  const r = k(), n = r.get(e.id);
  return n ? I(r.renderNode, { preview: !0, node: n, style: {
    paddingLeft: n.level * r.indent,
    opacity: 0.2,
    background: "transparent"
  }, tree: r }) : null;
});
function Nt(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function tt(t, e) {
  return tt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, tt(t, e);
}
function Di(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, tt(t, e);
}
var xt = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function Ii(t, e) {
  return !!(t === e || xt(t) && xt(e));
}
function wi(t, e) {
  if (t.length !== e.length)
    return !1;
  for (var r = 0; r < t.length; r++)
    if (!Ii(t[r], e[r]))
      return !1;
  return !0;
}
function He(t, e) {
  e === void 0 && (e = wi);
  var r, n = [], i, o = !1;
  function a() {
    for (var s = [], u = 0; u < arguments.length; u++)
      s[u] = arguments[u];
    return o && r === this && e(s, n) || (i = t.apply(this, s), o = !0, r = this, n = s), i;
  }
  return a;
}
var Ti = typeof performance == "object" && typeof performance.now == "function", Pt = Ti ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function Rt(t) {
  cancelAnimationFrame(t.id);
}
function Ei(t, e) {
  var r = Pt();
  function n() {
    Pt() - r >= e ? t.call(null) : i.id = requestAnimationFrame(n);
  }
  var i = {
    id: requestAnimationFrame(n)
  };
  return i;
}
var Fe = -1;
function kt(t) {
  if (t === void 0 && (t = !1), Fe === -1 || t) {
    var e = document.createElement("div"), r = e.style;
    r.width = "50px", r.height = "50px", r.overflow = "scroll", document.body.appendChild(e), Fe = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
  }
  return Fe;
}
var Q = null;
function At(t) {
  if (t === void 0 && (t = !1), Q === null || t) {
    var e = document.createElement("div"), r = e.style;
    r.width = "50px", r.height = "50px", r.overflow = "scroll", r.direction = "rtl";
    var n = document.createElement("div"), i = n.style;
    return i.width = "100px", i.height = "100px", e.appendChild(n), document.body.appendChild(e), e.scrollLeft > 0 ? Q = "positive-descending" : (e.scrollLeft = 1, e.scrollLeft === 0 ? Q = "negative" : Q = "positive-ascending"), document.body.removeChild(e), Q;
  }
  return Q;
}
process.env.NODE_ENV;
var _i = 150, Ci = function(e, r) {
  return e;
}, me = null, be = null;
process.env.NODE_ENV !== "production" && typeof window < "u" && typeof window.WeakSet < "u" && (me = /* @__PURE__ */ new WeakSet(), be = /* @__PURE__ */ new WeakSet());
function Ni(t) {
  var e, r = t.getItemOffset, n = t.getEstimatedTotalSize, i = t.getItemSize, o = t.getOffsetForIndexAndAlignment, a = t.getStartIndexForOffset, s = t.getStopIndexForStartIndex, u = t.initInstanceProps, c = t.shouldResetStyleCacheOnItemSizeChange, d = t.validateProps;
  return e = /* @__PURE__ */ function(h) {
    Di(y, h);
    function y(D) {
      var l;
      return l = h.call(this, D) || this, l._instanceProps = u(l.props, Nt(l)), l._outerRef = void 0, l._resetIsScrollingTimeoutId = null, l.state = {
        instance: Nt(l),
        isScrolling: !1,
        scrollDirection: "forward",
        scrollOffset: typeof l.props.initialScrollOffset == "number" ? l.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: !1
      }, l._callOnItemsRendered = void 0, l._callOnItemsRendered = He(function(f, g, p, v) {
        return l.props.onItemsRendered({
          overscanStartIndex: f,
          overscanStopIndex: g,
          visibleStartIndex: p,
          visibleStopIndex: v
        });
      }), l._callOnScroll = void 0, l._callOnScroll = He(function(f, g, p) {
        return l.props.onScroll({
          scrollDirection: f,
          scrollOffset: g,
          scrollUpdateWasRequested: p
        });
      }), l._getItemStyle = void 0, l._getItemStyle = function(f) {
        var g = l.props, p = g.direction, v = g.itemSize, m = g.layout, O = l._getItemStyleCache(c && v, c && m, c && p), S;
        if (O.hasOwnProperty(f))
          S = O[f];
        else {
          var E = r(l.props, f, l._instanceProps), C = i(l.props, f, l._instanceProps), _ = p === "horizontal" || m === "horizontal", U = p === "rtl", Y = _ ? E : 0;
          O[f] = S = {
            position: "absolute",
            left: U ? void 0 : Y,
            right: U ? Y : void 0,
            top: _ ? 0 : E,
            height: _ ? "100%" : C,
            width: _ ? C : "100%"
          };
        }
        return S;
      }, l._getItemStyleCache = void 0, l._getItemStyleCache = He(function(f, g, p) {
        return {};
      }), l._onScrollHorizontal = function(f) {
        var g = f.currentTarget, p = g.clientWidth, v = g.scrollLeft, m = g.scrollWidth;
        l.setState(function(O) {
          if (O.scrollOffset === v)
            return null;
          var S = l.props.direction, E = v;
          if (S === "rtl")
            switch (At()) {
              case "negative":
                E = -v;
                break;
              case "positive-descending":
                E = m - p - v;
                break;
            }
          return E = Math.max(0, Math.min(E, m - p)), {
            isScrolling: !0,
            scrollDirection: O.scrollOffset < E ? "forward" : "backward",
            scrollOffset: E,
            scrollUpdateWasRequested: !1
          };
        }, l._resetIsScrollingDebounced);
      }, l._onScrollVertical = function(f) {
        var g = f.currentTarget, p = g.clientHeight, v = g.scrollHeight, m = g.scrollTop;
        l.setState(function(O) {
          if (O.scrollOffset === m)
            return null;
          var S = Math.max(0, Math.min(m, v - p));
          return {
            isScrolling: !0,
            scrollDirection: O.scrollOffset < S ? "forward" : "backward",
            scrollOffset: S,
            scrollUpdateWasRequested: !1
          };
        }, l._resetIsScrollingDebounced);
      }, l._outerRefSetter = function(f) {
        var g = l.props.outerRef;
        l._outerRef = f, typeof g == "function" ? g(f) : g != null && typeof g == "object" && g.hasOwnProperty("current") && (g.current = f);
      }, l._resetIsScrollingDebounced = function() {
        l._resetIsScrollingTimeoutId !== null && Rt(l._resetIsScrollingTimeoutId), l._resetIsScrollingTimeoutId = Ei(l._resetIsScrolling, _i);
      }, l._resetIsScrolling = function() {
        l._resetIsScrollingTimeoutId = null, l.setState({
          isScrolling: !1
        }, function() {
          l._getItemStyleCache(-1, null);
        });
      }, l;
    }
    y.getDerivedStateFromProps = function(l, f) {
      return xi(l, f), d(l), null;
    };
    var b = y.prototype;
    return b.scrollTo = function(l) {
      l = Math.max(0, l), this.setState(function(f) {
        return f.scrollOffset === l ? null : {
          scrollDirection: f.scrollOffset < l ? "forward" : "backward",
          scrollOffset: l,
          scrollUpdateWasRequested: !0
        };
      }, this._resetIsScrollingDebounced);
    }, b.scrollToItem = function(l, f) {
      f === void 0 && (f = "auto");
      var g = this.props, p = g.itemCount, v = g.layout, m = this.state.scrollOffset;
      l = Math.max(0, Math.min(l, p - 1));
      var O = 0;
      if (this._outerRef) {
        var S = this._outerRef;
        v === "vertical" ? O = S.scrollWidth > S.clientWidth ? kt() : 0 : O = S.scrollHeight > S.clientHeight ? kt() : 0;
      }
      this.scrollTo(o(this.props, l, f, m, this._instanceProps, O));
    }, b.componentDidMount = function() {
      var l = this.props, f = l.direction, g = l.initialScrollOffset, p = l.layout;
      if (typeof g == "number" && this._outerRef != null) {
        var v = this._outerRef;
        f === "horizontal" || p === "horizontal" ? v.scrollLeft = g : v.scrollTop = g;
      }
      this._callPropsCallbacks();
    }, b.componentDidUpdate = function() {
      var l = this.props, f = l.direction, g = l.layout, p = this.state, v = p.scrollOffset, m = p.scrollUpdateWasRequested;
      if (m && this._outerRef != null) {
        var O = this._outerRef;
        if (f === "horizontal" || g === "horizontal")
          if (f === "rtl")
            switch (At()) {
              case "negative":
                O.scrollLeft = -v;
                break;
              case "positive-ascending":
                O.scrollLeft = v;
                break;
              default:
                var S = O.clientWidth, E = O.scrollWidth;
                O.scrollLeft = E - S - v;
                break;
            }
          else
            O.scrollLeft = v;
        else
          O.scrollTop = v;
      }
      this._callPropsCallbacks();
    }, b.componentWillUnmount = function() {
      this._resetIsScrollingTimeoutId !== null && Rt(this._resetIsScrollingTimeoutId);
    }, b.render = function() {
      var l = this.props, f = l.children, g = l.className, p = l.direction, v = l.height, m = l.innerRef, O = l.innerElementType, S = l.innerTagName, E = l.itemCount, C = l.itemData, _ = l.itemKey, U = _ === void 0 ? Ci : _, Y = l.layout, _n = l.outerElementType, Cn = l.outerTagName, Nn = l.style, xn = l.useIsScrolling, Pn = l.width, Ot = this.state.isScrolling, Ae = p === "horizontal" || Y === "horizontal", Rn = Ae ? this._onScrollHorizontal : this._onScrollVertical, St = this._getRangeToRender(), kn = St[0], An = St[1], Dt = [];
      if (E > 0)
        for (var oe = kn; oe <= An; oe++)
          Dt.push(Me(f, {
            data: C,
            key: U(oe, C),
            index: oe,
            isScrolling: xn ? Ot : void 0,
            style: this._getItemStyle(oe)
          }));
      var It = n(this.props, this._instanceProps);
      return Me(_n || Cn || "div", {
        className: g,
        onScroll: Rn,
        ref: this._outerRefSetter,
        style: zn({
          position: "relative",
          height: v,
          width: Pn,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction: p
        }, Nn)
      }, Me(O || S || "div", {
        children: Dt,
        ref: m,
        style: {
          height: Ae ? "100%" : It,
          pointerEvents: Ot ? "none" : void 0,
          width: Ae ? It : "100%"
        }
      }));
    }, b._callPropsCallbacks = function() {
      if (typeof this.props.onItemsRendered == "function") {
        var l = this.props.itemCount;
        if (l > 0) {
          var f = this._getRangeToRender(), g = f[0], p = f[1], v = f[2], m = f[3];
          this._callOnItemsRendered(g, p, v, m);
        }
      }
      if (typeof this.props.onScroll == "function") {
        var O = this.state, S = O.scrollDirection, E = O.scrollOffset, C = O.scrollUpdateWasRequested;
        this._callOnScroll(S, E, C);
      }
    }, b._getRangeToRender = function() {
      var l = this.props, f = l.itemCount, g = l.overscanCount, p = this.state, v = p.isScrolling, m = p.scrollDirection, O = p.scrollOffset;
      if (f === 0)
        return [0, 0, 0, 0];
      var S = a(this.props, O, this._instanceProps), E = s(this.props, S, O, this._instanceProps), C = !v || m === "backward" ? Math.max(1, g) : 1, _ = !v || m === "forward" ? Math.max(1, g) : 1;
      return [Math.max(0, S - C), Math.max(0, Math.min(f - 1, E + _)), S, E];
    }, y;
  }($n), e.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: !1
  }, e;
}
var xi = function(e, r) {
  var n = e.children, i = e.direction, o = e.height, a = e.layout, s = e.innerTagName, u = e.outerTagName, c = e.width, d = r.instance;
  if (process.env.NODE_ENV !== "production") {
    (s != null || u != null) && be && !be.has(d) && (be.add(d), console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));
    var h = i === "horizontal" || a === "horizontal";
    switch (i) {
      case "horizontal":
      case "vertical":
        me && !me.has(d) && (me.add(d), console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'));
        break;
      case "ltr":
      case "rtl":
        break;
      default:
        throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". ' + ('"' + i + '" was specified.'));
    }
    switch (a) {
      case "horizontal":
      case "vertical":
        break;
      default:
        throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". ' + ('"' + a + '" was specified.'));
    }
    if (n == null)
      throw Error('An invalid "children" prop has been specified. Value should be a React component. ' + ('"' + (n === null ? "null" : typeof n) + '" was specified.'));
    if (h && typeof c != "number")
      throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. ' + ('"' + (c === null ? "null" : typeof c) + '" was specified.'));
    if (!h && typeof o != "number")
      throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. ' + ('"' + (o === null ? "null" : typeof o) + '" was specified.'));
  }
}, Pi = /* @__PURE__ */ Ni({
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
  getOffsetForIndexAndAlignment: function(e, r, n, i, o, a) {
    var s = e.direction, u = e.height, c = e.itemCount, d = e.itemSize, h = e.layout, y = e.width, b = s === "horizontal" || h === "horizontal", D = b ? y : u, l = Math.max(0, c * d - D), f = Math.min(l, r * d), g = Math.max(0, r * d - D + d + a);
    switch (n === "smart" && (i >= g - D && i <= f + D ? n = "auto" : n = "center"), n) {
      case "start":
        return f;
      case "end":
        return g;
      case "center": {
        var p = Math.round(g + (f - g) / 2);
        return p < Math.ceil(D / 2) ? 0 : p > l + Math.floor(D / 2) ? l : p;
      }
      case "auto":
      default:
        return i >= g && i <= f ? i : i < g ? g : f;
    }
  },
  getStartIndexForOffset: function(e, r) {
    var n = e.itemCount, i = e.itemSize;
    return Math.max(0, Math.min(n - 1, Math.floor(r / i)));
  },
  getStopIndexForStartIndex: function(e, r, n) {
    var i = e.direction, o = e.height, a = e.itemCount, s = e.itemSize, u = e.layout, c = e.width, d = i === "horizontal" || u === "horizontal", h = r * s, y = d ? c : o, b = Math.ceil((y + n - h) / s);
    return Math.max(0, Math.min(
      a - 1,
      r + b - 1
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
function Ri() {
  var t, e;
  const r = k(), i = Yn().cursor;
  if (!i || i.type !== "line")
    return null;
  const o = r.indent, a = r.rowHeight * i.index + ((e = (t = r.props.padding) !== null && t !== void 0 ? t : r.props.paddingTop) !== null && e !== void 0 ? e : 0), s = o * i.level, u = r.renderCursor;
  return I(u, { top: a, left: s, indent: o });
}
var ki = globalThis && globalThis.__rest || function(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
};
const Ai = ct(function(e, r) {
  const { children: n } = e, i = ki(e, ["children"]), o = k();
  return K("div", Object.assign({
    // @ts-ignore
    ref: r
  }, i, { onClick: (a) => {
    a.currentTarget === a.target && o.deselectAll();
  }, children: [I(Mi, {}), n] }));
}), Mi = () => {
  const t = k();
  return I("div", { style: {
    height: t.visibleNodes.length * t.rowHeight,
    width: "100%",
    position: "absolute",
    left: "0",
    right: "0"
  }, children: I(Ri, {}) });
};
var $i = globalThis && globalThis.__rest || function(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
};
const Li = ct(function(e, r) {
  var n, i, o, a, { style: s } = e, u = $i(e, ["style"]);
  const c = k(), d = (i = (n = c.props.padding) !== null && n !== void 0 ? n : c.props.paddingTop) !== null && i !== void 0 ? i : 0, h = (a = (o = c.props.padding) !== null && o !== void 0 ? o : c.props.paddingBottom) !== null && a !== void 0 ? a : 0;
  return I("div", Object.assign({ ref: r, style: Object.assign(Object.assign({}, s), { height: `${parseFloat(s.height) + d + h}px` }) }, u));
});
var en = de({
  dragDropManager: void 0
}), $;
(function(t) {
  t.SOURCE = "SOURCE", t.TARGET = "TARGET";
})($ || ($ = {}));
function w(t, e) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  if (process.env.NODE_ENV !== "production" && e === void 0)
    throw new Error("invariant requires an error message argument");
  if (!t) {
    var o;
    if (e === void 0)
      o = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var a = 0;
      o = new Error(e.replace(/%s/g, function() {
        return n[a++];
      })), o.name = "Invariant Violation";
    }
    throw o.framesToPop = 1, o;
  }
}
var ht = "dnd-core/INIT_COORDS", Ne = "dnd-core/BEGIN_DRAG", gt = "dnd-core/PUBLISH_DRAG_SOURCE", xe = "dnd-core/HOVER", Pe = "dnd-core/DROP", Re = "dnd-core/END_DRAG";
function Mt(t, e) {
  return {
    type: ht,
    payload: {
      sourceClientOffset: e || null,
      clientOffset: t || null
    }
  };
}
function Oe(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Oe = function(r) {
    return typeof r;
  } : Oe = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Oe(t);
}
function ji(t, e, r) {
  return e.split(".").reduce(function(n, i) {
    return n && n[i] ? n[i] : r || null;
  }, t);
}
function Hi(t, e) {
  return t.filter(function(r) {
    return r !== e;
  });
}
function tn(t) {
  return Oe(t) === "object";
}
function Fi(t, e) {
  var r = /* @__PURE__ */ new Map(), n = function(a) {
    r.set(a, r.has(a) ? r.get(a) + 1 : 1);
  };
  t.forEach(n), e.forEach(n);
  var i = [];
  return r.forEach(function(o, a) {
    o === 1 && i.push(a);
  }), i;
}
function Vi(t, e) {
  return t.filter(function(r) {
    return e.indexOf(r) > -1;
  });
}
var Ui = {
  type: ht,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function zi(t) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      publishSource: !0
    }, i = n.publishSource, o = i === void 0 ? !0 : i, a = n.clientOffset, s = n.getSourceClientOffset, u = t.getMonitor(), c = t.getRegistry();
    t.dispatch(Mt(a)), Wi(r, u, c);
    var d = qi(r, u);
    if (d === null) {
      t.dispatch(Ui);
      return;
    }
    var h = null;
    if (a) {
      if (!s)
        throw new Error("getSourceClientOffset must be defined");
      Bi(s), h = s(d);
    }
    t.dispatch(Mt(a, h));
    var y = c.getSource(d), b = y.beginDrag(u, d);
    if (b != null) {
      Ki(b), c.pinSource(d);
      var D = c.getSourceType(d);
      return {
        type: Ne,
        payload: {
          itemType: D,
          item: b,
          sourceId: d,
          clientOffset: a || null,
          sourceClientOffset: h || null,
          isSourcePublic: !!o
        }
      };
    }
  };
}
function Wi(t, e, r) {
  w(!e.isDragging(), "Cannot call beginDrag while dragging."), t.forEach(function(n) {
    w(r.getSource(n), "Expected sourceIds to be registered.");
  });
}
function Bi(t) {
  w(typeof t == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function Ki(t) {
  w(tn(t), "Item must be an object.");
}
function qi(t, e) {
  for (var r = null, n = t.length - 1; n >= 0; n--)
    if (e.canDragSource(t[n])) {
      r = t[n];
      break;
    }
  return r;
}
function Gi(t) {
  return function() {
    var r = t.getMonitor();
    if (r.isDragging())
      return {
        type: gt
      };
  };
}
function rt(t, e) {
  return e === null ? t === null : Array.isArray(t) ? t.some(function(r) {
    return r === e;
  }) : t === e;
}
function Yi(t) {
  return function(r) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.clientOffset;
    Xi(r);
    var o = r.slice(0), a = t.getMonitor(), s = t.getRegistry();
    Qi(o, a, s);
    var u = a.getItemType();
    return Ji(o, s, u), Zi(o, a, s), {
      type: xe,
      payload: {
        targetIds: o,
        clientOffset: i || null
      }
    };
  };
}
function Xi(t) {
  w(Array.isArray(t), "Expected targetIds to be an array.");
}
function Qi(t, e, r) {
  w(e.isDragging(), "Cannot call hover while not dragging."), w(!e.didDrop(), "Cannot call hover after drop.");
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    w(t.lastIndexOf(i) === n, "Expected targetIds to be unique in the passed array.");
    var o = r.getTarget(i);
    w(o, "Expected targetIds to be registered.");
  }
}
function Ji(t, e, r) {
  for (var n = t.length - 1; n >= 0; n--) {
    var i = t[n], o = e.getTargetType(i);
    rt(o, r) || t.splice(n, 1);
  }
}
function Zi(t, e, r) {
  t.forEach(function(n) {
    var i = r.getTarget(n);
    i.hover(e, n);
  });
}
function $t(t, e) {
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
    e % 2 ? $t(Object(r), !0).forEach(function(n) {
      eo(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : $t(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function eo(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function to(t) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.getMonitor(), i = t.getRegistry();
    ro(n);
    var o = oo(n);
    o.forEach(function(a, s) {
      var u = no(a, s, i, n), c = {
        type: Pe,
        payload: {
          dropResult: Lt(Lt({}, r), u)
        }
      };
      t.dispatch(c);
    });
  };
}
function ro(t) {
  w(t.isDragging(), "Cannot call drop while not dragging."), w(!t.didDrop(), "Cannot call drop twice during one drag operation.");
}
function no(t, e, r, n) {
  var i = r.getTarget(t), o = i ? i.drop(n, t) : void 0;
  return io(o), typeof o > "u" && (o = e === 0 ? {} : n.getDropResult()), o;
}
function io(t) {
  w(typeof t > "u" || tn(t), "Drop result must either be an object or undefined.");
}
function oo(t) {
  var e = t.getTargetIds().filter(t.canDropOnTarget, t);
  return e.reverse(), e;
}
function ao(t) {
  return function() {
    var r = t.getMonitor(), n = t.getRegistry();
    so(r);
    var i = r.getSourceId();
    if (i != null) {
      var o = n.getSource(i, !0);
      o.endDrag(r, i), n.unpinSource();
    }
    return {
      type: Re
    };
  };
}
function so(t) {
  w(t.isDragging(), "Cannot call endDrag while not dragging.");
}
function uo(t) {
  return {
    beginDrag: zi(t),
    publishDragSource: Gi(t),
    hover: Yi(t),
    drop: to(t),
    endDrag: ao(t)
  };
}
function lo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function jt(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function co(t, e, r) {
  return e && jt(t.prototype, e), r && jt(t, r), t;
}
function ae(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var fo = /* @__PURE__ */ function() {
  function t(e, r) {
    var n = this;
    lo(this, t), ae(this, "store", void 0), ae(this, "monitor", void 0), ae(this, "backend", void 0), ae(this, "isSetUp", !1), ae(this, "handleRefCountChange", function() {
      var i = n.store.getState().refCount > 0;
      n.backend && (i && !n.isSetUp ? (n.backend.setup(), n.isSetUp = !0) : !i && n.isSetUp && (n.backend.teardown(), n.isSetUp = !1));
    }), this.store = e, this.monitor = r, e.subscribe(this.handleRefCountChange);
  }
  return co(t, [{
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
      function i(a) {
        return function() {
          for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++)
            u[c] = arguments[c];
          var d = a.apply(r, u);
          typeof d < "u" && n(d);
        };
      }
      var o = uo(this);
      return Object.keys(o).reduce(function(a, s) {
        var u = o[s];
        return a[s] = i(u), a;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function(r) {
      this.store.dispatch(r);
    }
  }]), t;
}();
function A(t) {
  return "Minified Redux error #" + t + "; visit https://redux.js.org/Errors?code=" + t + " for the full message or use the non-minified dev environment for full errors. ";
}
var Ht = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Ve = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Ft = {
  INIT: "@@redux/INIT" + Ve(),
  REPLACE: "@@redux/REPLACE" + Ve(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Ve();
  }
};
function ho(t) {
  if (typeof t != "object" || t === null)
    return !1;
  for (var e = t; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function go(t) {
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
  if (yo(t))
    return "date";
  if (vo(t))
    return "error";
  var r = po(t);
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
function po(t) {
  return typeof t.constructor == "function" ? t.constructor.name : null;
}
function vo(t) {
  return t instanceof Error || typeof t.message == "string" && t.constructor && typeof t.constructor.stackTraceLimit == "number";
}
function yo(t) {
  return t instanceof Date ? !0 : typeof t.toDateString == "function" && typeof t.getDate == "function" && typeof t.setDate == "function";
}
function J(t) {
  var e = typeof t;
  return process.env.NODE_ENV !== "production" && (e = go(t)), e;
}
function rn(t, e, r) {
  var n;
  if (typeof e == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? A(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof e == "function" && typeof r > "u" && (r = e, e = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? A(1) : "Expected the enhancer to be a function. Instead, received: '" + J(r) + "'");
    return r(rn)(t, e);
  }
  if (typeof t != "function")
    throw new Error(process.env.NODE_ENV === "production" ? A(2) : "Expected the root reducer to be a function. Instead, received: '" + J(t) + "'");
  var i = t, o = e, a = [], s = a, u = !1;
  function c() {
    s === a && (s = a.slice());
  }
  function d() {
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? A(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function h(l) {
    if (typeof l != "function")
      throw new Error(process.env.NODE_ENV === "production" ? A(4) : "Expected the listener to be a function. Instead, received: '" + J(l) + "'");
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? A(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var f = !0;
    return c(), s.push(l), function() {
      if (f) {
        if (u)
          throw new Error(process.env.NODE_ENV === "production" ? A(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        f = !1, c();
        var p = s.indexOf(l);
        s.splice(p, 1), a = null;
      }
    };
  }
  function y(l) {
    if (!ho(l))
      throw new Error(process.env.NODE_ENV === "production" ? A(7) : "Actions must be plain objects. Instead, the actual type was: '" + J(l) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof l.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? A(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? A(9) : "Reducers may not dispatch actions.");
    try {
      u = !0, o = i(o, l);
    } finally {
      u = !1;
    }
    for (var f = a = s, g = 0; g < f.length; g++) {
      var p = f[g];
      p();
    }
    return l;
  }
  function b(l) {
    if (typeof l != "function")
      throw new Error(process.env.NODE_ENV === "production" ? A(10) : "Expected the nextReducer to be a function. Instead, received: '" + J(l));
    i = l, y({
      type: Ft.REPLACE
    });
  }
  function D() {
    var l, f = h;
    return l = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(p) {
        if (typeof p != "object" || p === null)
          throw new Error(process.env.NODE_ENV === "production" ? A(11) : "Expected the observer to be an object. Instead, received: '" + J(p) + "'");
        function v() {
          p.next && p.next(d());
        }
        v();
        var m = f(v);
        return {
          unsubscribe: m
        };
      }
    }, l[Ht] = function() {
      return this;
    }, l;
  }
  return y({
    type: Ft.INIT
  }), n = {
    dispatch: y,
    subscribe: h,
    getState: d,
    replaceReducer: b
  }, n[Ht] = D, n;
}
var mo = function(e, r) {
  return e === r;
};
function bo(t, e) {
  return !t && !e ? !0 : !t || !e ? !1 : t.x === e.x && t.y === e.y;
}
function Oo(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : mo;
  if (t.length !== e.length)
    return !1;
  for (var n = 0; n < t.length; ++n)
    if (!r(t[n], e[n]))
      return !1;
  return !0;
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
function Ut(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Vt(Object(r), !0).forEach(function(n) {
      So(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Vt(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function So(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var zt = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function Do() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zt, e = arguments.length > 1 ? arguments[1] : void 0, r = e.payload;
  switch (e.type) {
    case ht:
    case Ne:
      return {
        initialSourceClientOffset: r.sourceClientOffset,
        initialClientOffset: r.clientOffset,
        clientOffset: r.clientOffset
      };
    case xe:
      return bo(t.clientOffset, r.clientOffset) ? t : Ut(Ut({}, t), {}, {
        clientOffset: r.clientOffset
      });
    case Re:
    case Pe:
      return zt;
    default:
      return t;
  }
}
var pt = "dnd-core/ADD_SOURCE", vt = "dnd-core/ADD_TARGET", yt = "dnd-core/REMOVE_SOURCE", ke = "dnd-core/REMOVE_TARGET";
function Io(t) {
  return {
    type: pt,
    payload: {
      sourceId: t
    }
  };
}
function wo(t) {
  return {
    type: vt,
    payload: {
      targetId: t
    }
  };
}
function To(t) {
  return {
    type: yt,
    payload: {
      sourceId: t
    }
  };
}
function Eo(t) {
  return {
    type: ke,
    payload: {
      targetId: t
    }
  };
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
function M(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Wt(Object(r), !0).forEach(function(n) {
      _o(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Wt(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function _o(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Co = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function No() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Co, e = arguments.length > 1 ? arguments[1] : void 0, r = e.payload;
  switch (e.type) {
    case Ne:
      return M(M({}, t), {}, {
        itemType: r.itemType,
        item: r.item,
        sourceId: r.sourceId,
        isSourcePublic: r.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case gt:
      return M(M({}, t), {}, {
        isSourcePublic: !0
      });
    case xe:
      return M(M({}, t), {}, {
        targetIds: r.targetIds
      });
    case ke:
      return t.targetIds.indexOf(r.targetId) === -1 ? t : M(M({}, t), {}, {
        targetIds: Hi(t.targetIds, r.targetId)
      });
    case Pe:
      return M(M({}, t), {}, {
        dropResult: r.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case Re:
      return M(M({}, t), {}, {
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
function xo() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0;
  switch (e.type) {
    case pt:
    case vt:
      return t + 1;
    case yt:
    case ke:
      return t - 1;
    default:
      return t;
  }
}
var _e = [], mt = [];
_e.__IS_NONE__ = !0;
mt.__IS_ALL__ = !0;
function Po(t, e) {
  if (t === _e)
    return !1;
  if (t === mt || typeof e > "u")
    return !0;
  var r = Vi(e, t);
  return r.length > 0;
}
function Ro() {
  var t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case xe:
      break;
    case pt:
    case vt:
    case ke:
    case yt:
      return _e;
    case Ne:
    case gt:
    case Re:
    case Pe:
    default:
      return mt;
  }
  var e = t.payload, r = e.targetIds, n = r === void 0 ? [] : r, i = e.prevTargetIds, o = i === void 0 ? [] : i, a = Fi(n, o), s = a.length > 0 || !Oo(n, o);
  if (!s)
    return _e;
  var u = o[o.length - 1], c = n[n.length - 1];
  return u !== c && (u && a.push(u), c && a.push(c)), a;
}
function ko() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return t + 1;
}
function Bt(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Bt(Object(r), !0).forEach(function(n) {
      Ao(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Bt(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Ao(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Mo() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: Ro(t.dirtyHandlerIds, {
      type: e.type,
      payload: Kt(Kt({}, e.payload), {}, {
        prevTargetIds: ji(t, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: Do(t.dragOffset, e),
    refCount: xo(t.refCount, e),
    dragOperation: No(t.dragOperation, e),
    stateId: ko(t.stateId)
  };
}
function $o(t, e) {
  return {
    x: t.x + e.x,
    y: t.y + e.y
  };
}
function nn(t, e) {
  return {
    x: t.x - e.x,
    y: t.y - e.y
  };
}
function Lo(t) {
  var e = t.clientOffset, r = t.initialClientOffset, n = t.initialSourceClientOffset;
  return !e || !r || !n ? null : nn($o(e, n), r);
}
function jo(t) {
  var e = t.clientOffset, r = t.initialClientOffset;
  return !e || !r ? null : nn(e, r);
}
function Ho(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function qt(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Fo(t, e, r) {
  return e && qt(t.prototype, e), r && qt(t, r), t;
}
function Gt(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Vo = /* @__PURE__ */ function() {
  function t(e, r) {
    Ho(this, t), Gt(this, "store", void 0), Gt(this, "registry", void 0), this.store = e, this.registry = r;
  }
  return Fo(t, [{
    key: "subscribeToStateChange",
    value: function(r) {
      var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        handlerIds: void 0
      }, o = i.handlerIds;
      w(typeof r == "function", "listener must be a function."), w(typeof o > "u" || Array.isArray(o), "handlerIds, when specified, must be an array of strings.");
      var a = this.store.getState().stateId, s = function() {
        var c = n.store.getState(), d = c.stateId;
        try {
          var h = d === a || d === a + 1 && !Po(c.dirtyHandlerIds, o);
          h || r();
        } finally {
          a = d;
        }
      };
      return this.store.subscribe(s);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(r) {
      var n = this;
      w(typeof r == "function", "listener must be a function.");
      var i = this.store.getState().dragOffset, o = function() {
        var s = n.store.getState().dragOffset;
        s !== i && (i = s, r());
      };
      return this.store.subscribe(o);
    }
  }, {
    key: "canDragSource",
    value: function(r) {
      if (!r)
        return !1;
      var n = this.registry.getSource(r);
      return w(n, "Expected to find a valid source. sourceId=".concat(r)), this.isDragging() ? !1 : n.canDrag(this, r);
    }
  }, {
    key: "canDropOnTarget",
    value: function(r) {
      if (!r)
        return !1;
      var n = this.registry.getTarget(r);
      if (w(n, "Expected to find a valid target. targetId=".concat(r)), !this.isDragging() || this.didDrop())
        return !1;
      var i = this.registry.getTargetType(r), o = this.getItemType();
      return rt(i, o) && n.canDrop(this, r);
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
      if (w(n, "Expected to find a valid source. sourceId=".concat(r)), !this.isDragging() || !this.isSourcePublic())
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
      var o = this.registry.getTargetType(r), a = this.getItemType();
      if (a && !rt(o, a))
        return !1;
      var s = this.getTargetIds();
      if (!s.length)
        return !1;
      var u = s.indexOf(r);
      return i ? u === s.length - 1 : u > -1;
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
      return Lo(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return jo(this.store.getState().dragOffset);
    }
  }]), t;
}(), Uo = 0;
function zo() {
  return Uo++;
}
function Se(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Se = function(r) {
    return typeof r;
  } : Se = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Se(t);
}
function Wo(t) {
  w(typeof t.canDrag == "function", "Expected canDrag to be a function."), w(typeof t.beginDrag == "function", "Expected beginDrag to be a function."), w(typeof t.endDrag == "function", "Expected endDrag to be a function.");
}
function Bo(t) {
  w(typeof t.canDrop == "function", "Expected canDrop to be a function."), w(typeof t.hover == "function", "Expected hover to be a function."), w(typeof t.drop == "function", "Expected beginDrag to be a function.");
}
function nt(t, e) {
  if (e && Array.isArray(t)) {
    t.forEach(function(r) {
      return nt(r, !1);
    });
    return;
  }
  w(typeof t == "string" || Se(t) === "symbol", e ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
const Yt = typeof global < "u" ? global : self, on = Yt.MutationObserver || Yt.WebKitMutationObserver;
function an(t) {
  return function() {
    const r = setTimeout(i, 0), n = setInterval(i, 50);
    function i() {
      clearTimeout(r), clearInterval(n), t();
    }
  };
}
function Ko(t) {
  let e = 1;
  const r = new on(t), n = document.createTextNode("");
  return r.observe(n, {
    characterData: !0
  }), function() {
    e = -e, n.data = e;
  };
}
const qo = typeof on == "function" ? (
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
  Ko
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
  an
);
class Go {
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
    }, this.requestFlush = qo(this.flush), this.requestErrorThrow = an(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class Yo {
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
class Xo {
  create(e) {
    const r = this.freeTasks, n = r.length ? r.pop() : new Yo(
      this.onError,
      (i) => r[r.length] = i
    );
    return n.task = e, n;
  }
  constructor(e) {
    this.onError = e, this.freeTasks = [];
  }
}
const sn = new Go(), Qo = new Xo(sn.registerPendingError);
function Jo(t) {
  sn.enqueueTask(Qo.create(t));
}
function Zo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Xt(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function ea(t, e, r) {
  return e && Xt(t.prototype, e), r && Xt(t, r), t;
}
function Z(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function ta(t, e) {
  return oa(t) || ia(t, e) || na(t, e) || ra();
}
function ra() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function na(t, e) {
  if (t) {
    if (typeof t == "string")
      return Qt(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Qt(t, e);
  }
}
function Qt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function ia(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(t); !(i = (a = r.next()).done) && (n.push(a.value), !(e && n.length === e)); i = !0)
        ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function oa(t) {
  if (Array.isArray(t))
    return t;
}
function aa(t) {
  var e = zo().toString();
  switch (t) {
    case $.SOURCE:
      return "S".concat(e);
    case $.TARGET:
      return "T".concat(e);
    default:
      throw new Error("Unknown Handler Role: ".concat(t));
  }
}
function Jt(t) {
  switch (t[0]) {
    case "S":
      return $.SOURCE;
    case "T":
      return $.TARGET;
    default:
      w(!1, "Cannot parse handler ID: ".concat(t));
  }
}
function Zt(t, e) {
  var r = t.entries(), n = !1;
  do {
    var i = r.next(), o = i.done, a = ta(i.value, 2), s = a[1];
    if (s === e)
      return !0;
    n = !!o;
  } while (!n);
  return !1;
}
var sa = /* @__PURE__ */ function() {
  function t(e) {
    Zo(this, t), Z(this, "types", /* @__PURE__ */ new Map()), Z(this, "dragSources", /* @__PURE__ */ new Map()), Z(this, "dropTargets", /* @__PURE__ */ new Map()), Z(this, "pinnedSourceId", null), Z(this, "pinnedSource", null), Z(this, "store", void 0), this.store = e;
  }
  return ea(t, [{
    key: "addSource",
    value: function(r, n) {
      nt(r), Wo(n);
      var i = this.addHandler($.SOURCE, r, n);
      return this.store.dispatch(Io(i)), i;
    }
  }, {
    key: "addTarget",
    value: function(r, n) {
      nt(r, !0), Bo(n);
      var i = this.addHandler($.TARGET, r, n);
      return this.store.dispatch(wo(i)), i;
    }
  }, {
    key: "containsHandler",
    value: function(r) {
      return Zt(this.dragSources, r) || Zt(this.dropTargets, r);
    }
  }, {
    key: "getSource",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      w(this.isSourceId(r), "Expected a valid source ID.");
      var i = n && r === this.pinnedSourceId, o = i ? this.pinnedSource : this.dragSources.get(r);
      return o;
    }
  }, {
    key: "getTarget",
    value: function(r) {
      return w(this.isTargetId(r), "Expected a valid target ID."), this.dropTargets.get(r);
    }
  }, {
    key: "getSourceType",
    value: function(r) {
      return w(this.isSourceId(r), "Expected a valid source ID."), this.types.get(r);
    }
  }, {
    key: "getTargetType",
    value: function(r) {
      return w(this.isTargetId(r), "Expected a valid target ID."), this.types.get(r);
    }
  }, {
    key: "isSourceId",
    value: function(r) {
      var n = Jt(r);
      return n === $.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function(r) {
      var n = Jt(r);
      return n === $.TARGET;
    }
  }, {
    key: "removeSource",
    value: function(r) {
      var n = this;
      w(this.getSource(r), "Expected an existing source."), this.store.dispatch(To(r)), Jo(function() {
        n.dragSources.delete(r), n.types.delete(r);
      });
    }
  }, {
    key: "removeTarget",
    value: function(r) {
      w(this.getTarget(r), "Expected an existing target."), this.store.dispatch(Eo(r)), this.dropTargets.delete(r), this.types.delete(r);
    }
  }, {
    key: "pinSource",
    value: function(r) {
      var n = this.getSource(r);
      w(n, "Expected an existing source."), this.pinnedSourceId = r, this.pinnedSource = n;
    }
  }, {
    key: "unpinSource",
    value: function() {
      w(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function(r, n, i) {
      var o = aa(r);
      return this.types.set(o, n), r === $.SOURCE ? this.dragSources.set(o, i) : r === $.TARGET && this.dropTargets.set(o, i), o;
    }
  }]), t;
}();
function ua(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, i = la(n), o = new Vo(i, new sa(i)), a = new fo(i, o), s = t(a, e, r);
  return a.receiveBackend(s), a;
}
function la(t) {
  var e = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return rn(Mo, t && e && e({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
var ca = ["children"];
function da(t, e) {
  return pa(t) || ga(t, e) || ha(t, e) || fa();
}
function fa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ha(t, e) {
  if (t) {
    if (typeof t == "string")
      return er(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return er(t, e);
  }
}
function er(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function ga(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(t); !(i = (a = r.next()).done) && (n.push(a.value), !(e && n.length === e)); i = !0)
        ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function pa(t) {
  if (Array.isArray(t))
    return t;
}
function va(t, e) {
  if (t == null)
    return {};
  var r = ya(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      n = o[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function ya(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
var tr = 0, De = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), ma = lt(function(e) {
  var r = e.children, n = va(e, ca), i = ba(n), o = da(i, 2), a = o[0], s = o[1];
  return L(function() {
    if (s) {
      var u = un();
      return ++tr, function() {
        --tr === 0 && (u[De] = null);
      };
    }
  }, []), I(en.Provider, Object.assign({
    value: a
  }, {
    children: r
  }), void 0);
});
function ba(t) {
  if ("manager" in t) {
    var e = {
      dragDropManager: t.manager
    };
    return [e, !1];
  }
  var r = Oa(t.backend, t.context, t.options, t.debugMode), n = !t.context;
  return [r, n];
}
function Oa(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : un(), r = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = e;
  return i[De] || (i[De] = {
    dragDropManager: ua(t, e, r, n)
  }), i[De];
}
function un() {
  return typeof global < "u" ? global : window;
}
function Sa(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function rr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Da(t, e, r) {
  return e && rr(t.prototype, e), r && rr(t, r), t;
}
function nr(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Ue = !1, ze = !1, Ia = /* @__PURE__ */ function() {
  function t(e) {
    Sa(this, t), nr(this, "internalMonitor", void 0), nr(this, "sourceId", null), this.internalMonitor = e.getMonitor();
  }
  return Da(t, [{
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
      w(!Ue, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return Ue = !0, this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        Ue = !1;
      }
    }
  }, {
    key: "isDragging",
    value: function() {
      if (!this.sourceId)
        return !1;
      w(!ze, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
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
function wa(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ir(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Ta(t, e, r) {
  return e && ir(t.prototype, e), r && ir(t, r), t;
}
function or(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var We = !1, Ea = /* @__PURE__ */ function() {
  function t(e) {
    wa(this, t), or(this, "internalMonitor", void 0), or(this, "targetId", null), this.internalMonitor = e.getMonitor();
  }
  return Ta(t, [{
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
      w(!We, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        return We = !0, this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        We = !1;
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
function _a(t) {
  if (typeof t.type != "string") {
    var e = t.type.displayName || t.type.name || "the component";
    throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(e, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
  }
}
function Ca(t) {
  return function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!Ln(e)) {
      var n = e;
      return t(n, r), n;
    }
    var i = e;
    _a(i);
    var o = r ? function(a) {
      return t(a, r);
    } : t;
    return Na(i, o);
  };
}
function ln(t) {
  var e = {};
  return Object.keys(t).forEach(function(r) {
    var n = t[r];
    if (r.endsWith("Ref"))
      e[r] = t[r];
    else {
      var i = Ca(n);
      e[r] = function() {
        return i;
      };
    }
  }), e;
}
function ar(t, e) {
  typeof t == "function" ? t(e) : t.current = e;
}
function Na(t, e) {
  var r = t.ref;
  return w(typeof r != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), r ? wt(t, {
    ref: function(i) {
      ar(r, i), ar(e, i);
    }
  }) : wt(t, {
    ref: e
  });
}
function Ie(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ie = function(r) {
    return typeof r;
  } : Ie = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ie(t);
}
function it(t) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    t !== null && Ie(t) === "object" && Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function ot(t, e, r, n) {
  var i = r ? r.call(n, t, e) : void 0;
  if (i !== void 0)
    return !!i;
  if (t === e)
    return !0;
  if (typeof t != "object" || !t || typeof e != "object" || !e)
    return !1;
  var o = Object.keys(t), a = Object.keys(e);
  if (o.length !== a.length)
    return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(e), u = 0; u < o.length; u++) {
    var c = o[u];
    if (!s(c))
      return !1;
    var d = t[c], h = e[c];
    if (i = r ? r.call(n, d, h, c) : void 0, i === !1 || i === void 0 && d !== h)
      return !1;
  }
  return !0;
}
function xa(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function sr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Pa(t, e, r) {
  return e && sr(t.prototype, e), r && sr(t, r), t;
}
function P(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Ra = /* @__PURE__ */ function() {
  function t(e) {
    var r = this;
    xa(this, t), P(this, "hooks", ln({
      dragSource: function(i, o) {
        r.clearDragSource(), r.dragSourceOptions = o || null, it(i) ? r.dragSourceRef = i : r.dragSourceNode = i, r.reconnectDragSource();
      },
      dragPreview: function(i, o) {
        r.clearDragPreview(), r.dragPreviewOptions = o || null, it(i) ? r.dragPreviewRef = i : r.dragPreviewNode = i, r.reconnectDragPreview();
      }
    })), P(this, "handlerId", null), P(this, "dragSourceRef", null), P(this, "dragSourceNode", void 0), P(this, "dragSourceOptionsInternal", null), P(this, "dragSourceUnsubscribe", void 0), P(this, "dragPreviewRef", null), P(this, "dragPreviewNode", void 0), P(this, "dragPreviewOptionsInternal", null), P(this, "dragPreviewUnsubscribe", void 0), P(this, "lastConnectedHandlerId", null), P(this, "lastConnectedDragSource", null), P(this, "lastConnectedDragSourceOptions", null), P(this, "lastConnectedDragPreview", null), P(this, "lastConnectedDragPreviewOptions", null), P(this, "backend", void 0), this.backend = e;
  }
  return Pa(t, [{
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
      return !ot(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function() {
      return !ot(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
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
function ka(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ur(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Aa(t, e, r) {
  return e && ur(t.prototype, e), r && ur(t, r), t;
}
function F(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Ma = /* @__PURE__ */ function() {
  function t(e) {
    var r = this;
    ka(this, t), F(this, "hooks", ln({
      dropTarget: function(i, o) {
        r.clearDropTarget(), r.dropTargetOptions = o, it(i) ? r.dropTargetRef = i : r.dropTargetNode = i, r.reconnect();
      }
    })), F(this, "handlerId", null), F(this, "dropTargetRef", null), F(this, "dropTargetNode", void 0), F(this, "dropTargetOptionsInternal", null), F(this, "unsubscribeDropTarget", void 0), F(this, "lastConnectedHandlerId", null), F(this, "lastConnectedDropTarget", null), F(this, "lastConnectedDropTargetOptions", null), F(this, "backend", void 0), this.backend = e;
  }
  return Aa(t, [{
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
      return !ot(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
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
function $a(t, e, r) {
  var n = r.getRegistry(), i = n.addTarget(t, e);
  return [i, function() {
    return n.removeTarget(i);
  }];
}
function La(t, e, r) {
  var n = r.getRegistry(), i = n.addSource(t, e);
  return [i, function() {
    return n.removeSource(i);
  }];
}
var q = typeof window < "u" ? jn : L;
function we(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? we = function(r) {
    return typeof r;
  } : we = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, we(t);
}
function ja(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function lr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Ha(t, e, r) {
  return e && lr(t.prototype, e), r && lr(t, r), t;
}
function Be(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Fa = /* @__PURE__ */ function() {
  function t(e, r, n) {
    ja(this, t), Be(this, "spec", void 0), Be(this, "monitor", void 0), Be(this, "connector", void 0), this.spec = e, this.monitor = r, this.connector = n;
  }
  return Ha(t, [{
    key: "beginDrag",
    value: function() {
      var r, n = this.spec, i = this.monitor, o = null;
      return we(n.item) === "object" ? o = n.item : typeof n.item == "function" ? o = n.item(i) : o = {}, (r = o) !== null && r !== void 0 ? r : null;
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
      var i = this.spec, o = this.monitor, a = i.isDragging;
      return a ? a(o) : n === r.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
      var r = this.spec, n = this.monitor, i = this.connector, o = r.end;
      o && o(n.getItem(), n), i.reconnect();
    }
  }]), t;
}();
function Va(t, e, r) {
  var n = N(function() {
    return new Fa(t, e, r);
  }, [e, r]);
  return L(function() {
    n.spec = t;
  }, [t]), n;
}
function G() {
  var t = fe(en), e = t.dragDropManager;
  return w(e != null, "Expected drag drop context"), e;
}
function Ua(t) {
  return N(function() {
    var e = t.type;
    return w(e != null, "spec.type must be defined"), e;
  }, [t]);
}
function za(t, e) {
  return qa(t) || Ka(t, e) || Ba(t, e) || Wa();
}
function Wa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ba(t, e) {
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
function Ka(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(t); !(i = (a = r.next()).done) && (n.push(a.value), !(e && n.length === e)); i = !0)
        ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function qa(t) {
  if (Array.isArray(t))
    return t;
}
function Ga(t, e, r) {
  var n = G(), i = Va(t, e, r), o = Ua(t);
  q(function() {
    if (o != null) {
      var s = La(o, i, n), u = za(s, 2), c = u[0], d = u[1];
      return e.receiveHandlerId(c), r.receiveHandlerId(c), d;
    }
  }, [n, e, r, i, o]);
}
function Ya(t) {
  return Za(t) || Ja(t) || Qa(t) || Xa();
}
function Xa() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qa(t, e) {
  if (t) {
    if (typeof t == "string")
      return at(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return at(t, e);
  }
}
function Ja(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Za(t) {
  if (Array.isArray(t))
    return at(t);
}
function at(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function cn(t, e) {
  var r = Ya(e || []);
  return e == null && typeof t != "function" && r.push(t), N(function() {
    return typeof t == "function" ? t() : t;
  }, r);
}
function es() {
  var t = G();
  return N(function() {
    return new Ia(t);
  }, [t]);
}
function ts(t, e) {
  var r = G(), n = N(function() {
    return new Ra(r.getBackend());
  }, [r]);
  return q(function() {
    return n.dragSourceOptions = t || null, n.reconnect(), function() {
      return n.disconnectDragSource();
    };
  }, [n, t]), q(function() {
    return n.dragPreviewOptions = e || null, n.reconnect(), function() {
      return n.disconnectDragPreview();
    };
  }, [n, e]), n;
}
var rs = function t(e, r) {
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
      var a = o[i];
      if (!t(e[a], r[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && r !== r;
};
const ns = /* @__PURE__ */ Wn(rs);
function is(t, e) {
  return us(t) || ss(t, e) || as(t, e) || os();
}
function os() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function as(t, e) {
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
function ss(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(t); !(i = (a = r.next()).done) && (n.push(a.value), !(e && n.length === e)); i = !0)
        ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function us(t) {
  if (Array.isArray(t))
    return t;
}
function dn(t, e, r) {
  var n = dt(function() {
    return e(t);
  }), i = is(n, 2), o = i[0], a = i[1], s = Ar(function() {
    var u = e(t);
    ns(o, u) || (a(u), r && r());
  }, [o, t, r]);
  return q(s), [o, s];
}
function ls(t, e) {
  return hs(t) || fs(t, e) || ds(t, e) || cs();
}
function cs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ds(t, e) {
  if (t) {
    if (typeof t == "string")
      return fr(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return fr(t, e);
  }
}
function fr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function fs(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(t); !(i = (a = r.next()).done) && (n.push(a.value), !(e && n.length === e)); i = !0)
        ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function hs(t) {
  if (Array.isArray(t))
    return t;
}
function gs(t, e, r) {
  var n = dn(t, e, r), i = ls(n, 2), o = i[0], a = i[1];
  return q(function() {
    var u = t.getHandlerId();
    if (u != null)
      return t.subscribeToStateChange(a, {
        handlerIds: [u]
      });
  }, [t, a]), o;
}
function fn(t, e, r) {
  return gs(e, t || function() {
    return {};
  }, function() {
    return r.reconnect();
  });
}
function ps(t) {
  return N(function() {
    return t.hooks.dragSource();
  }, [t]);
}
function vs(t) {
  return N(function() {
    return t.hooks.dragPreview();
  }, [t]);
}
function ys(t, e) {
  var r = cn(t, e);
  w(!r.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var n = es(), i = ts(r.options, r.previewOptions);
  return Ga(r, n, i), [fn(r.collect, n, i), ps(i), vs(i)];
}
function ms(t) {
  var e = t.accept;
  return N(function() {
    return w(t.accept != null, "accept must be defined"), Array.isArray(e) ? e : [e];
  }, [e]);
}
function bs(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function hr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Os(t, e, r) {
  return e && hr(t.prototype, e), r && hr(t, r), t;
}
function gr(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Ss = /* @__PURE__ */ function() {
  function t(e, r) {
    bs(this, t), gr(this, "spec", void 0), gr(this, "monitor", void 0), this.spec = e, this.monitor = r;
  }
  return Os(t, [{
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
function Ds(t, e) {
  var r = N(function() {
    return new Ss(t, e);
  }, [e]);
  return L(function() {
    r.spec = t;
  }, [t]), r;
}
function Is(t, e) {
  return _s(t) || Es(t, e) || Ts(t, e) || ws();
}
function ws() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ts(t, e) {
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
function Es(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(t); !(i = (a = r.next()).done) && (n.push(a.value), !(e && n.length === e)); i = !0)
        ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function _s(t) {
  if (Array.isArray(t))
    return t;
}
function Cs(t, e, r) {
  var n = G(), i = Ds(t, e), o = ms(t);
  q(function() {
    var s = $a(o, i, n), u = Is(s, 2), c = u[0], d = u[1];
    return e.receiveHandlerId(c), r.receiveHandlerId(c), d;
  }, [n, e, i, r, o.map(function(a) {
    return a.toString();
  }).join("|")]);
}
function Ns() {
  var t = G();
  return N(function() {
    return new Ea(t);
  }, [t]);
}
function xs(t) {
  var e = G(), r = N(function() {
    return new Ma(e.getBackend());
  }, [e]);
  return q(function() {
    return r.dropTargetOptions = t || null, r.reconnect(), function() {
      return r.disconnectDropTarget();
    };
  }, [t]), r;
}
function Ps(t) {
  return N(function() {
    return t.hooks.dropTarget();
  }, [t]);
}
function hn(t, e) {
  var r = cn(t, e), n = Ns(), i = xs(r.options);
  return Cs(r, n, i), [fn(r.collect, n, i), Ps(i)];
}
function Rs(t, e) {
  return $s(t) || Ms(t, e) || As(t, e) || ks();
}
function ks() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function As(t, e) {
  if (t) {
    if (typeof t == "string")
      return vr(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return vr(t, e);
  }
}
function vr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Ms(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(t); !(i = (a = r.next()).done) && (n.push(a.value), !(e && n.length === e)); i = !0)
        ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function $s(t) {
  if (Array.isArray(t))
    return t;
}
function Ls(t) {
  var e = G(), r = e.getMonitor(), n = dn(r, t), i = Rs(n, 2), o = i[0], a = i[1];
  return L(function() {
    return r.subscribeToOffsetChange(a);
  }), L(function() {
    return r.subscribeToStateChange(a);
  }), o;
}
function gn(t) {
  var e = null, r = function() {
    return e == null && (e = t()), e;
  };
  return r;
}
function js(t, e) {
  return t.filter(function(r) {
    return r !== e;
  });
}
function Hs(t, e) {
  var r = /* @__PURE__ */ new Set(), n = function(a) {
    return r.add(a);
  };
  t.forEach(n), e.forEach(n);
  var i = [];
  return r.forEach(function(o) {
    return i.push(o);
  }), i;
}
function Fs(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function yr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Vs(t, e, r) {
  return e && yr(t.prototype, e), r && yr(t, r), t;
}
function mr(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Us = /* @__PURE__ */ function() {
  function t(e) {
    Fs(this, t), mr(this, "entered", []), mr(this, "isNodeInDocument", void 0), this.isNodeInDocument = e;
  }
  return Vs(t, [{
    key: "enter",
    value: function(r) {
      var n = this, i = this.entered.length, o = function(s) {
        return n.isNodeInDocument(s) && (!s.contains || s.contains(r));
      };
      return this.entered = Hs(this.entered.filter(o), [r]), i === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function(r) {
      var n = this.entered.length;
      return this.entered = js(this.entered.filter(this.isNodeInDocument), r), n > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function() {
      this.entered = [];
    }
  }]), t;
}(), zs = gn(function() {
  return /firefox/i.test(navigator.userAgent);
}), pn = gn(function() {
  return !!window.safari;
});
function Ws(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function br(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Bs(t, e, r) {
  return e && br(t.prototype, e), r && br(t, r), t;
}
function se(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Or = /* @__PURE__ */ function() {
  function t(e, r) {
    Ws(this, t), se(this, "xs", void 0), se(this, "ys", void 0), se(this, "c1s", void 0), se(this, "c2s", void 0), se(this, "c3s", void 0);
    for (var n = e.length, i = [], o = 0; o < n; o++)
      i.push(o);
    i.sort(function(C, _) {
      return e[C] < e[_] ? -1 : 1;
    });
    for (var a = [], s = [], u, c, d = 0; d < n - 1; d++)
      u = e[d + 1] - e[d], c = r[d + 1] - r[d], a.push(u), s.push(c / u);
    for (var h = [s[0]], y = 0; y < a.length - 1; y++) {
      var b = s[y], D = s[y + 1];
      if (b * D <= 0)
        h.push(0);
      else {
        u = a[y];
        var l = a[y + 1], f = u + l;
        h.push(3 * f / ((f + l) / b + (f + u) / D));
      }
    }
    h.push(s[s.length - 1]);
    for (var g = [], p = [], v, m = 0; m < h.length - 1; m++) {
      v = s[m];
      var O = h[m], S = 1 / a[m], E = O + h[m + 1] - v - v;
      g.push((v - O - E) * S), p.push(E * S * S);
    }
    this.xs = e, this.ys = r, this.c1s = h, this.c2s = g, this.c3s = p;
  }
  return Bs(t, [{
    key: "interpolate",
    value: function(r) {
      var n = this.xs, i = this.ys, o = this.c1s, a = this.c2s, s = this.c3s, u = n.length - 1;
      if (r === n[u])
        return i[u];
      for (var c = 0, d = s.length - 1, h; c <= d; ) {
        h = Math.floor(0.5 * (c + d));
        var y = n[h];
        if (y < r)
          c = h + 1;
        else if (y > r)
          d = h - 1;
        else
          return i[h];
      }
      u = Math.max(0, d);
      var b = r - n[u], D = b * b;
      return i[u] + o[u] * b + a[u] * D + s[u] * b * D;
    }
  }]), t;
}(), Ks = 1;
function vn(t) {
  var e = t.nodeType === Ks ? t : t.parentElement;
  if (!e)
    return null;
  var r = e.getBoundingClientRect(), n = r.top, i = r.left;
  return {
    x: i,
    y: n
  };
}
function he(t) {
  return {
    x: t.clientX,
    y: t.clientY
  };
}
function qs(t) {
  var e;
  return t.nodeName === "IMG" && (zs() || !((e = document.documentElement) !== null && e !== void 0 && e.contains(t)));
}
function Gs(t, e, r, n) {
  var i = t ? e.width : r, o = t ? e.height : n;
  return pn() && t && (o /= window.devicePixelRatio, i /= window.devicePixelRatio), {
    dragPreviewWidth: i,
    dragPreviewHeight: o
  };
}
function Ys(t, e, r, n, i) {
  var o = qs(e), a = o ? t : e, s = vn(a), u = {
    x: r.x - s.x,
    y: r.y - s.y
  }, c = t.offsetWidth, d = t.offsetHeight, h = n.anchorX, y = n.anchorY, b = Gs(o, e, c, d), D = b.dragPreviewWidth, l = b.dragPreviewHeight, f = function() {
    var E = new Or([0, 0.5, 1], [
      // Dock to the top
      u.y,
      // Align at the center
      u.y / d * l,
      // Dock to the bottom
      u.y + l - d
    ]), C = E.interpolate(y);
    return pn() && o && (C += (window.devicePixelRatio - 1) * l), C;
  }, g = function() {
    var E = new Or([0, 0.5, 1], [
      // Dock to the left
      u.x,
      // Align at the center
      u.x / c * D,
      // Dock to the right
      u.x + D - c
    ]);
    return E.interpolate(h);
  }, p = i.offsetX, v = i.offsetY, m = p === 0 || p, O = v === 0 || v;
  return {
    x: m ? p : g(),
    y: O ? v : f()
  };
}
var yn = "__NATIVE_FILE__", mn = "__NATIVE_URL__", bn = "__NATIVE_TEXT__", On = "__NATIVE_HTML__";
const Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: yn,
  HTML: On,
  TEXT: bn,
  URL: mn
}, Symbol.toStringTag, { value: "Module" }));
function Ke(t, e, r) {
  var n = e.reduce(function(i, o) {
    return i || t.getData(o);
  }, "");
  return n ?? r;
}
var ee;
function ge(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var st = (ee = {}, ge(ee, yn, {
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
}), ge(ee, On, {
  exposeProperties: {
    html: function(e, r) {
      return Ke(e, r, "");
    },
    dataTransfer: function(e) {
      return e;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), ge(ee, mn, {
  exposeProperties: {
    urls: function(e, r) {
      return Ke(e, r, "").split(`
`);
    },
    dataTransfer: function(e) {
      return e;
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), ge(ee, bn, {
  exposeProperties: {
    text: function(e, r) {
      return Ke(e, r, "");
    },
    dataTransfer: function(e) {
      return e;
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), ee);
function Xs(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Dr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Qs(t, e, r) {
  return e && Dr(t.prototype, e), r && Dr(t, r), t;
}
function Ir(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Js = /* @__PURE__ */ function() {
  function t(e) {
    Xs(this, t), Ir(this, "item", void 0), Ir(this, "config", void 0), this.config = e, this.item = {}, this.initializeExposedProperties();
  }
  return Qs(t, [{
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
function Zs(t, e) {
  var r = new Js(st[t]);
  return r.loadDataTransfer(e), r;
}
function qe(t) {
  if (!t)
    return null;
  var e = Array.prototype.slice.call(t.types || []);
  return Object.keys(st).filter(function(r) {
    var n = st[r].matchesTypes;
    return n.some(function(i) {
      return e.indexOf(i) > -1;
    });
  })[0] || null;
}
function eu(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function wr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function tu(t, e, r) {
  return e && wr(t.prototype, e), r && wr(t, r), t;
}
function Ge(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var ru = /* @__PURE__ */ function() {
  function t(e, r) {
    eu(this, t), Ge(this, "ownerDocument", null), Ge(this, "globalContext", void 0), Ge(this, "optionsArgs", void 0), this.globalContext = e, this.optionsArgs = r;
  }
  return tu(t, [{
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
function Tr(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Er(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Tr(Object(r), !0).forEach(function(n) {
      T(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Tr(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function nu(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _r(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function iu(t, e, r) {
  return e && _r(t.prototype, e), r && _r(t, r), t;
}
function T(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var ou = /* @__PURE__ */ function() {
  function t(e, r, n) {
    var i = this;
    nu(this, t), T(this, "options", void 0), T(this, "actions", void 0), T(this, "monitor", void 0), T(this, "registry", void 0), T(this, "enterLeaveCounter", void 0), T(this, "sourcePreviewNodes", /* @__PURE__ */ new Map()), T(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map()), T(this, "sourceNodes", /* @__PURE__ */ new Map()), T(this, "sourceNodeOptions", /* @__PURE__ */ new Map()), T(this, "dragStartSourceIds", null), T(this, "dropTargetIds", []), T(this, "dragEnterTargetIds", []), T(this, "currentNativeSource", null), T(this, "currentNativeHandle", null), T(this, "currentDragSourceNode", null), T(this, "altKeyPressed", !1), T(this, "mouseMoveTimeoutTimer", null), T(this, "asyncEndDragFrameId", null), T(this, "dragOverTargetIds", null), T(this, "lastClientOffset", null), T(this, "hoverRafId", null), T(this, "getSourceClientOffset", function(o) {
      var a = i.sourceNodes.get(o);
      return a && vn(a) || null;
    }), T(this, "endDragNativeItem", function() {
      i.isDraggingNativeItem() && (i.actions.endDrag(), i.currentNativeHandle && i.registry.removeSource(i.currentNativeHandle), i.currentNativeHandle = null, i.currentNativeSource = null);
    }), T(this, "isNodeInDocument", function(o) {
      return !!(o && i.document && i.document.body && i.document.body.contains(o));
    }), T(this, "endDragIfSourceWasRemovedFromDOM", function() {
      var o = i.currentDragSourceNode;
      o == null || i.isNodeInDocument(o) || i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag();
    }), T(this, "handleTopDragStartCapture", function() {
      i.clearCurrentDragSourceNode(), i.dragStartSourceIds = [];
    }), T(this, "handleTopDragStart", function(o) {
      if (!o.defaultPrevented) {
        var a = i.dragStartSourceIds;
        i.dragStartSourceIds = null;
        var s = he(o);
        i.monitor.isDragging() && i.actions.endDrag(), i.actions.beginDrag(a || [], {
          publishSource: !1,
          getSourceClientOffset: i.getSourceClientOffset,
          clientOffset: s
        });
        var u = o.dataTransfer, c = qe(u);
        if (i.monitor.isDragging()) {
          if (u && typeof u.setDragImage == "function") {
            var d = i.monitor.getSourceId(), h = i.sourceNodes.get(d), y = i.sourcePreviewNodes.get(d) || h;
            if (y) {
              var b = i.getCurrentSourcePreviewNodeOptions(), D = b.anchorX, l = b.anchorY, f = b.offsetX, g = b.offsetY, p = {
                anchorX: D,
                anchorY: l
              }, v = {
                offsetX: f,
                offsetY: g
              }, m = Ys(h, y, s, p, v);
              u.setDragImage(y, m.x, m.y);
            }
          }
          try {
            u == null || u.setData("application/json", {});
          } catch {
          }
          i.setCurrentDragSourceNode(o.target);
          var O = i.getCurrentSourcePreviewNodeOptions(), S = O.captureDraggingState;
          S ? i.actions.publishDragSource() : setTimeout(function() {
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
    }), T(this, "handleTopDragEndCapture", function() {
      i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag();
    }), T(this, "handleTopDragEnterCapture", function(o) {
      i.dragEnterTargetIds = [];
      var a = i.enterLeaveCounter.enter(o.target);
      if (!(!a || i.monitor.isDragging())) {
        var s = o.dataTransfer, u = qe(s);
        u && i.beginDragNativeItem(u, s);
      }
    }), T(this, "handleTopDragEnter", function(o) {
      var a = i.dragEnterTargetIds;
      if (i.dragEnterTargetIds = [], !!i.monitor.isDragging()) {
        i.altKeyPressed = o.altKey, a.length > 0 && i.actions.hover(a, {
          clientOffset: he(o)
        });
        var s = a.some(function(u) {
          return i.monitor.canDropOnTarget(u);
        });
        s && (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = i.getCurrentDropEffect()));
      }
    }), T(this, "handleTopDragOverCapture", function() {
      i.dragOverTargetIds = [];
    }), T(this, "handleTopDragOver", function(o) {
      var a = i.dragOverTargetIds;
      if (i.dragOverTargetIds = [], !i.monitor.isDragging()) {
        o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none");
        return;
      }
      i.altKeyPressed = o.altKey, i.lastClientOffset = he(o), i.hoverRafId === null && typeof requestAnimationFrame < "u" && (i.hoverRafId = requestAnimationFrame(function() {
        i.monitor.isDragging() && i.actions.hover(a || [], {
          clientOffset: i.lastClientOffset
        }), i.hoverRafId = null;
      }));
      var s = (a || []).some(function(u) {
        return i.monitor.canDropOnTarget(u);
      });
      s ? (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = i.getCurrentDropEffect())) : i.isDraggingNativeItem() ? o.preventDefault() : (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none"));
    }), T(this, "handleTopDragLeaveCapture", function(o) {
      i.isDraggingNativeItem() && o.preventDefault();
      var a = i.enterLeaveCounter.leave(o.target);
      a && i.isDraggingNativeItem() && setTimeout(function() {
        return i.endDragNativeItem();
      }, 0);
    }), T(this, "handleTopDropCapture", function(o) {
      if (i.dropTargetIds = [], i.isDraggingNativeItem()) {
        var a;
        o.preventDefault(), (a = i.currentNativeSource) === null || a === void 0 || a.loadDataTransfer(o.dataTransfer);
      } else
        qe(o.dataTransfer) && o.preventDefault();
      i.enterLeaveCounter.reset();
    }), T(this, "handleTopDrop", function(o) {
      var a = i.dropTargetIds;
      i.dropTargetIds = [], i.actions.hover(a, {
        clientOffset: he(o)
      }), i.actions.drop({
        dropEffect: i.getCurrentDropEffect()
      }), i.isDraggingNativeItem() ? i.endDragNativeItem() : i.monitor.isDragging() && i.actions.endDrag();
    }), T(this, "handleSelectStart", function(o) {
      var a = o.target;
      typeof a.dragDrop == "function" && (a.tagName === "INPUT" || a.tagName === "SELECT" || a.tagName === "TEXTAREA" || a.isContentEditable || (o.preventDefault(), a.dragDrop()));
    }), this.options = new ru(r, n), this.actions = e.getActions(), this.monitor = e.getMonitor(), this.registry = e.getRegistry(), this.enterLeaveCounter = new Us(this.isNodeInDocument);
  }
  return iu(t, [{
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
      var a = function(c) {
        return o.handleDragStart(c, r);
      }, s = function(c) {
        return o.handleSelectStart(c);
      };
      return n.setAttribute("draggable", "true"), n.addEventListener("dragstart", a), n.addEventListener("selectstart", s), function() {
        o.sourceNodes.delete(r), o.sourceNodeOptions.delete(r), n.removeEventListener("dragstart", a), n.removeEventListener("selectstart", s), n.setAttribute("draggable", "false");
      };
    }
  }, {
    key: "connectDropTarget",
    value: function(r, n) {
      var i = this, o = function(c) {
        return i.handleDragEnter(c, r);
      }, a = function(c) {
        return i.handleDragOver(c, r);
      }, s = function(c) {
        return i.handleDrop(c, r);
      };
      return n.addEventListener("dragenter", o), n.addEventListener("dragover", a), n.addEventListener("drop", s), function() {
        n.removeEventListener("dragenter", o), n.removeEventListener("dragover", a), n.removeEventListener("drop", s);
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
      return Er({
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
      return Er({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: !1
      }, n || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function() {
      var r = this.monitor.getItemType();
      return Object.keys(Sr).some(function(n) {
        return Sr[n] === r;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function(r, n) {
      this.clearCurrentDragSourceNode(), this.currentNativeSource = Zs(r, n), this.currentNativeHandle = this.registry.addSource(r, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
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
}(), pe;
function au() {
  return pe || (pe = new Image(), pe.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), pe;
}
var su = function(e, r, n) {
  return new ou(e, r, n);
};
function uu(t) {
  const e = k(), r = e.selectedIds, [n, i, o] = ys(() => ({
    canDrag: () => t.isDraggable,
    type: "NODE",
    item: () => {
      const a = e.isSelected(t.id) ? Array.from(r) : [t.id];
      return e.dispatch(ie.dragStart(t.id, a)), { id: t.id };
    },
    end: () => {
      e.hideCursor();
      let { parentId: a, index: s, dragIds: u } = e.state.dnd;
      e.canDrop() && (Yr(e.props.onMove, {
        dragIds: u,
        parentId: a === ce ? null : a,
        index: s === null ? 0 : s,
        // When it's null it was dropped over a folder
        dragNodes: e.dragNodes,
        parentNode: e.get(a)
      }), e.open(a)), e.dispatch(ie.dragEnd());
    }
  }), [r, t]);
  return L(() => {
    o(au());
  }, [o]), i;
}
function lu(t, e) {
  const r = t.getBoundingClientRect(), n = e.x - Math.round(r.x), i = e.y - Math.round(r.y), o = r.height, a = i < o / 2, s = !a, u = o / 4, c = i > u && i < o - u;
  return { x: n, inTopHalf: a, inBottomHalf: s, inMiddle: c, atTop: !c && a, atBottom: !c && s };
}
function cu(t, e, r, n) {
  return t ? t.isInternal ? n.atTop ? [e, t] : n.inMiddle ? [t, t] : [t, r] : n.inTopHalf ? [e, t] : [t, r] : [e, null];
}
function ve(t, e) {
  return { parentId: t || null, index: e };
}
function te(t, e) {
  return {
    type: "line",
    index: t,
    level: e
  };
}
function du(t) {
  return {
    type: "highlight",
    id: t
  };
}
function Ye(t, e) {
  var r;
  let n = t;
  for (; n.parent && n.level > e; )
    n = n.parent;
  const i = ((r = n.parent) === null || r === void 0 ? void 0 : r.id) || null, o = Wr(n) + 1;
  return { parentId: i, index: o };
}
function Sn(t) {
  var e;
  const r = lu(t.element, t.offset), n = t.indent, i = Math.round(Math.max(0, r.x - n) / n), { node: o, nextNode: a, prevNode: s } = t, [u, c] = cu(o, s, a, r);
  if (o && o.isInternal && r.inMiddle)
    return {
      drop: ve(o.id, null),
      cursor: du(o.id)
    };
  if (!u)
    return {
      drop: ve((e = c == null ? void 0 : c.parent) === null || e === void 0 ? void 0 : e.id, 0),
      cursor: te(0, 0)
    };
  if (Fr(u)) {
    const d = ye(i, (c == null ? void 0 : c.level) || 0, u.level);
    return {
      drop: Ye(u, d),
      cursor: te(u.rowIndex + 1, d)
    };
  }
  if (Vr(u)) {
    const d = ye(i, (c == null ? void 0 : c.level) || 0, u.level);
    return {
      drop: Ye(u, d),
      cursor: te(u.rowIndex + 1, d)
    };
  }
  if (Ur(u)) {
    const d = ye(i, 0, u.level + 1);
    return d > u.level ? {
      drop: ve(u.id, 0),
      cursor: te(u.rowIndex + 1, d)
    } : {
      drop: Ye(u, d),
      cursor: te(u.rowIndex + 1, d)
    };
  }
  return {
    drop: ve(u == null ? void 0 : u.id, 0),
    cursor: te(u.rowIndex + 1, u.level + 1)
  };
}
function fu(t, e) {
  const r = k(), [n, i] = hn(() => ({
    accept: "NODE",
    canDrop: () => r.canDrop(),
    hover: (o, a) => {
      const s = a.getClientOffset();
      if (!t.current || !s)
        return;
      const { cursor: u, drop: c } = Sn({
        element: t.current,
        offset: s,
        indent: r.indent,
        node: e,
        prevNode: e.prev,
        nextNode: e.next
      });
      c && r.dispatch(ie.hovering(c.parentId, c.index)), a.canDrop() ? u && r.showCursor(u) : r.hideCursor();
    },
    drop: (o, a) => {
      if (!a.canDrop())
        return null;
    }
  }), [e, t.current, r.props]);
  return i;
}
function hu(t) {
  const e = k(), r = e.at(t);
  if (!r)
    throw new Error(`Could not find node for index: ${t}`);
  return N(() => {
    const n = r.clone();
    return e.visibleNodes[t] = n, n;
  }, [...Object.values(r.state), r]);
}
const gu = Ce.memo(function({ index: e, style: r }) {
  Hr(), Gn();
  const n = k(), i = hu(e), o = re(null), a = uu(i), s = fu(o, i), u = Ar((l) => {
    o.current = l, s(l);
  }, [s]), c = n.indent * i.level, d = N(() => ({ paddingLeft: c }), [c]), h = N(() => {
    var l, f;
    return Object.assign(Object.assign({}, r), { top: parseFloat(r.top) + ((f = (l = n.props.padding) !== null && l !== void 0 ? l : n.props.paddingTop) !== null && f !== void 0 ? f : 0) });
  }, [r, n.props.padding, n.props.paddingTop]), y = {
    role: "treeitem",
    "aria-level": i.level + 1,
    "aria-selected": i.isSelected,
    style: h,
    tabIndex: -1,
    className: n.props.rowClassName
  };
  L(() => {
    var l;
    !i.isEditing && i.isFocused && ((l = o.current) === null || l === void 0 || l.focus({ preventScroll: !0 }));
  }, [i.isEditing, i.isFocused, o.current]);
  const b = n.renderNode, D = n.renderRow;
  return I(D, { node: i, innerRef: u, attrs: y, children: I(b, { node: i, tree: n, style: d, dragHandle: a }) });
});
let Xe = "", Cr = null;
function Dn() {
  Hr();
  const t = k();
  return I("div", { role: "tree", style: {
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
    if (e.key === "Backspace") {
      if (!t.props.onDelete)
        return;
      const i = Array.from(t.selectedIds);
      if (i.length > 1) {
        let o = t.mostRecentNode;
        for (; o && o.isSelected; )
          o = o.nextSibling;
        o || (o = t.lastNode), t.focus(o, { scroll: !1 }), t.delete(Array.from(i));
      } else {
        const o = t.focusedNode;
        if (o) {
          const a = o.nextSibling, s = o.parent;
          t.focus(a || s, { scroll: !1 }), t.delete(o);
        }
      }
      return;
    }
    if (e.key === "Tab" && !e.shiftKey) {
      e.preventDefault(), Br(e.currentTarget);
      return;
    }
    if (e.key === "Tab" && e.shiftKey) {
      e.preventDefault(), Kr(e.currentTarget);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = t.nextNode;
      if (e.metaKey) {
        t.select(t.focusedNode), t.activate(t.focusedNode);
        return;
      } else if (!e.shiftKey || t.props.disableMultiSelection) {
        t.focus(i);
        return;
      } else {
        if (!i)
          return;
        const o = t.focusedNode;
        o ? o.isSelected ? t.selectContiguous(i) : t.selectMulti(i) : t.focus(t.firstNode);
        return;
      }
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const i = t.prevNode;
      if (!e.shiftKey || t.props.disableMultiSelection) {
        t.focus(i);
        return;
      } else {
        if (!i)
          return;
        const o = t.focusedNode;
        o ? o.isSelected ? t.selectContiguous(i) : t.selectMulti(i) : t.focus(t.lastNode);
        return;
      }
    }
    if (e.key === "ArrowRight") {
      const i = t.focusedNode;
      if (!i)
        return;
      i.isInternal && i.isOpen ? t.focus(t.nextNode) : i.isInternal && t.open(i.id);
      return;
    }
    if (e.key === "ArrowLeft") {
      const i = t.focusedNode;
      if (!i || i.isRoot)
        return;
      i.isInternal && i.isOpen ? t.close(i.id) : !((r = i.parent) === null || r === void 0) && r.isRoot || t.focus(i.parent);
      return;
    }
    if (e.key === "a" && e.metaKey && !t.props.disableMultiSelection) {
      e.preventDefault(), t.selectAll();
      return;
    }
    if (e.key === "a" && !e.metaKey && t.props.onCreate) {
      t.createLeaf();
      return;
    }
    if (e.key === "A" && !e.metaKey) {
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
      const i = t.focusedNode;
      if (!i || !i.isEditable || !t.props.onRename)
        return;
      setTimeout(() => {
        i && t.edit(i);
      });
      return;
    }
    if (e.key === " ") {
      e.preventDefault();
      const i = t.focusedNode;
      if (!i)
        return;
      i.isLeaf ? (i.select(), i.activate()) : i.toggle();
      return;
    }
    if (e.key === "*") {
      const i = t.focusedNode;
      if (!i)
        return;
      t.openSiblings(i);
      return;
    }
    if (e.key === "PageUp") {
      e.preventDefault(), t.pageUp();
      return;
    }
    e.key === "PageDown" && (e.preventDefault(), t.pageDown()), clearTimeout(Cr), Xe += e.key, Cr = setTimeout(() => {
      Xe = "";
    }, 600);
    const n = t.visibleNodes.find((i) => {
      const o = i.data.name;
      return typeof o == "string" ? o.toLowerCase().startsWith(Xe) : !1;
    });
    n && t.focus(n.id);
  }, children: I(Pi, { className: t.props.className, outerRef: t.listEl, itemCount: t.visibleNodes.length, height: t.height, width: t.width, itemSize: t.rowHeight, overscanCount: t.overscanCount, itemKey: (e) => {
    var r;
    return ((r = t.visibleNodes[e]) === null || r === void 0 ? void 0 : r.id) || e;
  }, outerElementType: Ai, innerElementType: Li, onScroll: t.props.onScroll, onItemsRendered: t.onItemsRendered.bind(t), ref: t.list, children: gu }) });
}
function Nr(t) {
  return t.isFiltered ? vu(t.root, t.isMatch.bind(t)) : pu(t.root);
}
function pu(t) {
  const e = [];
  function r(n) {
    var i;
    n.level >= 0 && e.push(n), n.isOpen && ((i = n.children) === null || i === void 0 || i.forEach(r));
  }
  return r(t), e.forEach(In), e;
}
function vu(t, e) {
  const r = {}, n = [];
  function i(a) {
    if (!a.isRoot && e(a)) {
      r[a.id] = !0;
      let u = a.parent;
      for (; u; )
        r[u.id] = !0, u = u.parent;
    }
    if (a.children)
      for (let u of a.children)
        i(u);
  }
  function o(a) {
    var s;
    a.level >= 0 && r[a.id] && n.push(a), a.isOpen && ((s = a.children) === null || s === void 0 || s.forEach(o));
  }
  return i(t), o(t), n.forEach(In), n;
}
function In(t, e) {
  t.rowIndex = e;
}
const xr = (t) => t.reduce((e, r, n) => (e[r.id] = n, e), {});
var Qe = globalThis && globalThis.__awaiter || function(t, e, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(d) {
      try {
        c(n.next(d));
      } catch (h) {
        a(h);
      }
    }
    function u(d) {
      try {
        c(n.throw(d));
      } catch (h) {
        a(h);
      }
    }
    function c(d) {
      d.done ? o(d.value) : i(d.value).then(s, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
};
const { safeRun: x, identify: V, identifyNull: H } = ei;
class le {
  constructor(e, r, n, i) {
    this.store = e, this.props = r, this.list = n, this.listEl = i, this.visibleStartIndex = 0, this.visibleStopIndex = 0, this.root = _t(this), this.visibleNodes = Nr(this), this.idToIndex = xr(this.visibleNodes);
  }
  /* Changes here must also be made in constructor() */
  update(e) {
    this.props = e, this.root = _t(this), this.visibleNodes = Nr(this), this.idToIndex = xr(this.visibleNodes);
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
  get rowHeight() {
    var e;
    return (e = this.props.rowHeight) !== null && e !== void 0 ? e : 24;
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
    const r = (e = this.props.searchMatch) !== null && e !== void 0 ? e : (n, i) => JSON.stringify(Object.values(n.data)).toLocaleLowerCase().includes(i.toLocaleLowerCase());
    return (n) => r(n, this.searchTerm);
  }
  accessChildren(e) {
    var r;
    const n = this.props.childrenAccessor || "children";
    return (r = ue(e, n)) !== null && r !== void 0 ? r : null;
  }
  accessId(e) {
    const r = this.props.idAccessor || "id", n = ue(e, r);
    if (!n)
      throw new Error("Data must contain an 'id' property or props.idAccessor must return a string");
    return n;
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
    const a = Math.min(i, o), s = Math.max(i, o);
    return this.visibleNodes.slice(a, s + 1);
  }
  indexOf(e) {
    const r = Gr(e);
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
  create(e = {}) {
    var r, n;
    return Qe(this, void 0, void 0, function* () {
      const i = e.parentId === void 0 ? Jr(this) : e.parentId, o = (r = e.index) !== null && r !== void 0 ? r : Qr(this), a = (n = e.type) !== null && n !== void 0 ? n : "leaf", s = yield x(this.props.onCreate, {
        type: a,
        parentId: i,
        index: o,
        parentNode: this.get(i)
      });
      s && (this.focus(s), setTimeout(() => {
        this.edit(s).then(() => {
          this.select(s), this.activate(s);
        });
      }));
    });
  }
  delete(e) {
    return Qe(this, void 0, void 0, function* () {
      if (!e)
        return;
      const n = (Array.isArray(e) ? e : [e]).map(V), i = n.map((o) => this.get(o)).filter((o) => !!o);
      yield x(this.props.onDelete, { nodes: i, ids: n });
    });
  }
  edit(e) {
    const r = V(e);
    return this.resolveEdit({ cancelled: !0 }), this.scrollTo(r), this.dispatch(je(r)), new Promise((n) => {
      le.editPromise = n;
    });
  }
  submit(e, r) {
    return Qe(this, void 0, void 0, function* () {
      if (!e)
        return;
      const n = V(e);
      yield x(this.props.onRename, {
        id: n,
        name: r,
        node: this.get(n)
      }), this.dispatch(je(null)), this.resolveEdit({ cancelled: !1, value: r }), setTimeout(() => this.onFocus());
    });
  }
  reset() {
    this.dispatch(je(null)), this.resolveEdit({ cancelled: !0 }), setTimeout(() => this.onFocus());
  }
  activate(e) {
    const r = this.get(H(e));
    r && x(this.props.onActivate, r);
  }
  resolveEdit(e) {
    const r = le.editPromise;
    r && r(e), le.editPromise = null;
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
    e && (this.props.selectionFollowsFocus ? this.select(e) : (this.dispatch(X(V(e))), r.scroll !== !1 && this.scrollTo(e), this.focusedNode && x(this.props.onFocus, this.focusedNode)));
  }
  pageUp() {
    var e, r;
    const n = this.visibleStartIndex, o = this.visibleStopIndex - n;
    let a = (r = (e = this.focusedNode) === null || e === void 0 ? void 0 : e.rowIndex) !== null && r !== void 0 ? r : 0;
    a > n ? a = n : a = Math.max(n - o, 0), this.focus(this.at(a));
  }
  pageDown() {
    var e, r;
    const n = this.visibleStartIndex, i = this.visibleStopIndex, o = i - n;
    let a = (r = (e = this.focusedNode) === null || e === void 0 ? void 0 : e.rowIndex) !== null && r !== void 0 ? r : 0;
    a < i ? a = i : a = Math.min(a + o, this.visibleNodes.length - 1), this.focus(this.at(a));
  }
  select(e, r = {}) {
    if (!e)
      return;
    const n = r.focus !== !1, i = V(e);
    n && this.dispatch(X(i)), this.dispatch(j.only(i)), this.dispatch(j.anchor(i)), this.dispatch(j.mostRecent(i)), this.scrollTo(i, r.align), this.focusedNode && n && x(this.props.onFocus, this.focusedNode), x(this.props.onSelect, this.selectedNodes);
  }
  deselect(e) {
    if (!e)
      return;
    const r = V(e);
    this.dispatch(j.remove(r));
  }
  selectMulti(e) {
    const r = this.get(H(e));
    r && (this.dispatch(X(r.id)), this.dispatch(j.add(r.id)), this.dispatch(j.anchor(r.id)), this.dispatch(j.mostRecent(r.id)), this.scrollTo(r), this.focusedNode && x(this.props.onFocus, this.focusedNode), x(this.props.onSelect, this.selectedNodes));
  }
  selectContiguous(e) {
    if (!e)
      return;
    const r = V(e), { anchor: n, mostRecent: i } = this.state.nodes.selection;
    this.dispatch(X(r)), this.dispatch(j.remove(this.nodesBetween(n, i))), this.dispatch(j.add(this.nodesBetween(n, H(r)))), this.dispatch(j.mostRecent(r)), this.scrollTo(r), this.focusedNode && x(this.props.onFocus, this.focusedNode), x(this.props.onSelect, this.selectedNodes);
  }
  deselectAll() {
    this.setSelection({ ids: [], anchor: null, mostRecent: null }), x(this.props.onSelect, this.selectedNodes);
  }
  selectAll() {
    var e;
    this.setSelection({
      ids: Object.keys(this.idToIndex),
      anchor: this.firstNode,
      mostRecent: this.lastNode
    }), this.dispatch(X((e = this.lastNode) === null || e === void 0 ? void 0 : e.id)), this.focusedNode && x(this.props.onFocus, this.focusedNode), x(this.props.onSelect, this.selectedNodes);
  }
  setSelection(e) {
    var r;
    const n = new Set((r = e.ids) === null || r === void 0 ? void 0 : r.map(V)), i = H(e.anchor), o = H(e.mostRecent);
    this.dispatch(j.set({ ids: n, anchor: i, mostRecent: o })), x(this.props.onSelect, this.selectedNodes);
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
      if (!o || !r || o.isInternal && zr(r, o))
        return !1;
    return typeof i == "function" ? !i({
      parentNode: r,
      dragNodes: this.dragNodes,
      index: this.state.dnd.index || 0
    }) : typeof i == "string" ? !r.data[i] : typeof i == "boolean" ? !i : !0;
  }
  hideCursor() {
    this.dispatch(ie.cursor({ type: "none" }));
  }
  showCursor(e) {
    this.dispatch(ie.cursor(e));
  }
  /* Visibility */
  open(e) {
    const r = H(e);
    r && (this.isOpen(r) || (this.dispatch(et.open(r, this.isFiltered)), x(this.props.onToggle, r)));
  }
  close(e) {
    const r = H(e);
    r && this.isOpen(r) && (this.dispatch(et.close(r, this.isFiltered)), x(this.props.onToggle, r));
  }
  toggle(e) {
    const r = H(e);
    if (r)
      return this.isOpen(r) ? this.close(r) : this.open(r);
  }
  openParents(e) {
    const r = H(e);
    if (!r)
      return;
    const n = ft(this.root, r);
    let i = n == null ? void 0 : n.parent;
    for (; i; )
      this.open(i.id), i = i.parent;
  }
  openSiblings(e) {
    const r = e.parent;
    if (!r)
      this.toggle(e.id);
    else if (r.children) {
      const n = e.isOpen;
      for (let i of r.children)
        i.isInternal && (n ? this.close(i.id) : this.open(i.id));
      this.scrollTo(this.focusedNode);
    }
  }
  openAll() {
    Te(this.root, (e) => {
      e.isInternal && e.open();
    });
  }
  closeAll() {
    Te(this.root, (e) => {
      e.isInternal && e.close();
    });
  }
  /* Scrolling */
  scrollTo(e, r = "smart") {
    if (!e)
      return;
    const n = V(e);
    return this.openParents(n), Xr(() => n in this.idToIndex).then(() => {
      var i;
      const o = this.idToIndex[n];
      o !== void 0 && ((i = this.list.current) === null || i === void 0 || i.scrollToItem(o, r));
    }).catch(() => {
    });
  }
  /* State Checks */
  get isEditing() {
    return this.state.nodes.edit.id !== null;
  }
  get isFiltered() {
    var e;
    return !!(!((e = this.props.searchTerm) === null || e === void 0) && e.trim());
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
    if (e === ce)
      return !0;
    const o = (r = this.props.openByDefault) !== null && r !== void 0 ? r : !0;
    return this.isFiltered ? (n = this.state.nodes.open.filtered[e]) !== null && n !== void 0 ? n : !0 : (i = this.state.nodes.open.unfiltered[e]) !== null && i !== void 0 ? i : o;
  }
  isEditable(e) {
    var r;
    const n = this.props.disableEdit || (() => !1);
    return (r = !ue(e, n)) !== null && r !== void 0 ? r : !0;
  }
  isDraggable(e) {
    var r;
    const n = this.props.disableDrag || (() => !1);
    return (r = !ue(e, n)) !== null && r !== void 0 ? r : !0;
  }
  isDragging(e) {
    const r = H(e);
    return r ? this.state.nodes.drag.id === r : !1;
  }
  isFocused(e) {
    return this.hasFocus && this.state.nodes.focus.id === e;
  }
  isMatch(e) {
    return this.matchFn(e);
  }
  willReceiveDrop(e) {
    const r = H(e);
    if (!r)
      return !1;
    const { destinationParentId: n, destinationIndex: i } = this.state.nodes.drag;
    return r === n && i === null;
  }
  /* Tree Event Handlers */
  onFocus() {
    const e = this.focusedNode || this.firstNode;
    e && this.dispatch(X(e.id));
  }
  onBlur() {
    this.dispatch(ci());
  }
  onItemsRendered(e) {
    this.visibleStartIndex = e.visibleStartIndex, this.visibleStopIndex = e.visibleStopIndex;
  }
  /* Get Renderers */
  get renderContainer() {
    return this.props.renderContainer || Dn;
  }
  get renderRow() {
    return this.props.renderRow || oi;
  }
  get renderNode() {
    return this.props.children || ai;
  }
  get renderDragPreview() {
    return this.props.renderDragPreview || Zr;
  }
  get renderCursor() {
    return this.props.renderCursor || ii;
  }
}
function R(t) {
  return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
var yu = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), Pr = yu, Je = () => Math.random().toString(36).substring(7).split("").join("."), mu = {
  INIT: `@@redux/INIT${Je()}`,
  REPLACE: `@@redux/REPLACE${Je()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Je()}`
}, B = mu;
function wn(t) {
  if (typeof t != "object" || t === null)
    return !1;
  let e = t;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e || Object.getPrototypeOf(t) === null;
}
function bu(t) {
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
  if (Du(t))
    return "date";
  if (Su(t))
    return "error";
  const r = Ou(t);
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
function Ou(t) {
  return typeof t.constructor == "function" ? t.constructor.name : null;
}
function Su(t) {
  return t instanceof Error || typeof t.message == "string" && t.constructor && typeof t.constructor.stackTraceLimit == "number";
}
function Du(t) {
  return t instanceof Date ? !0 : typeof t.toDateString == "function" && typeof t.getDate == "function" && typeof t.setDate == "function";
}
function z(t) {
  let e = typeof t;
  return process.env.NODE_ENV !== "production" && (e = bu(t)), e;
}
function Tn(t, e, r) {
  if (typeof t != "function")
    throw new Error(process.env.NODE_ENV === "production" ? R(2) : `Expected the root reducer to be a function. Instead, received: '${z(t)}'`);
  if (typeof e == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? R(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof e == "function" && typeof r > "u" && (r = e, e = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? R(1) : `Expected the enhancer to be a function. Instead, received: '${z(r)}'`);
    return r(Tn)(t, e);
  }
  let n = t, i = e, o = /* @__PURE__ */ new Map(), a = o, s = 0, u = !1;
  function c() {
    a === o && (a = /* @__PURE__ */ new Map(), o.forEach((f, g) => {
      a.set(g, f);
    }));
  }
  function d() {
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? R(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function h(f) {
    if (typeof f != "function")
      throw new Error(process.env.NODE_ENV === "production" ? R(4) : `Expected the listener to be a function. Instead, received: '${z(f)}'`);
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? R(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let g = !0;
    c();
    const p = s++;
    return a.set(p, f), function() {
      if (g) {
        if (u)
          throw new Error(process.env.NODE_ENV === "production" ? R(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        g = !1, c(), a.delete(p), o = null;
      }
    };
  }
  function y(f) {
    if (!wn(f))
      throw new Error(process.env.NODE_ENV === "production" ? R(7) : `Actions must be plain objects. Instead, the actual type was: '${z(f)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof f.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? R(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof f.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? R(17) : `Action "type" property must be a string. Instead, the actual type was: '${z(f.type)}'. Value was: '${f.type}' (stringified)`);
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? R(9) : "Reducers may not dispatch actions.");
    try {
      u = !0, i = n(i, f);
    } finally {
      u = !1;
    }
    return (o = a).forEach((p) => {
      p();
    }), f;
  }
  function b(f) {
    if (typeof f != "function")
      throw new Error(process.env.NODE_ENV === "production" ? R(10) : `Expected the nextReducer to be a function. Instead, received: '${z(f)}`);
    n = f, y({
      type: B.REPLACE
    });
  }
  function D() {
    const f = h;
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
          throw new Error(process.env.NODE_ENV === "production" ? R(11) : `Expected the observer to be an object. Instead, received: '${z(g)}'`);
        function p() {
          const m = g;
          m.next && m.next(d());
        }
        return p(), {
          unsubscribe: f(p)
        };
      },
      [Pr]() {
        return this;
      }
    };
  }
  return y({
    type: B.INIT
  }), {
    dispatch: y,
    subscribe: h,
    getState: d,
    replaceReducer: b,
    [Pr]: D
  };
}
function Rr(t) {
  typeof console < "u" && typeof console.error == "function" && console.error(t);
  try {
    throw new Error(t);
  } catch {
  }
}
function Iu(t, e, r, n) {
  const i = Object.keys(e), o = r && r.type === B.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!wn(t))
    return `The ${o} has unexpected type of "${z(t)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const a = Object.keys(t).filter((s) => !e.hasOwnProperty(s) && !n[s]);
  if (a.forEach((s) => {
    n[s] = !0;
  }), !(r && r.type === B.REPLACE) && a.length > 0)
    return `Unexpected ${a.length > 1 ? "keys" : "key"} "${a.join('", "')}" found in ${o}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function wu(t) {
  Object.keys(t).forEach((e) => {
    const r = t[e];
    if (typeof r(void 0, {
      type: B.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? R(12) : `The slice reducer for key "${e}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: B.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? R(13) : `The slice reducer for key "${e}" returned undefined when probed with a random type. Don't try to handle '${B.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function kr(t) {
  const e = Object.keys(t), r = {};
  for (let a = 0; a < e.length; a++) {
    const s = e[a];
    process.env.NODE_ENV !== "production" && typeof t[s] > "u" && Rr(`No reducer provided for key "${s}"`), typeof t[s] == "function" && (r[s] = t[s]);
  }
  const n = Object.keys(r);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let o;
  try {
    wu(r);
  } catch (a) {
    o = a;
  }
  return function(s = {}, u) {
    if (o)
      throw o;
    if (process.env.NODE_ENV !== "production") {
      const h = Iu(s, r, u, i);
      h && Rr(h);
    }
    let c = !1;
    const d = {};
    for (let h = 0; h < n.length; h++) {
      const y = n[h], b = r[y], D = s[y], l = b(D, u);
      if (typeof l > "u") {
        const f = u && u.type;
        throw new Error(process.env.NODE_ENV === "production" ? R(14) : `When called with an action of type ${f ? `"${String(f)}"` : "(unknown type)"}, the slice reducer for key "${y}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      d[y] = l, c = c || l !== D;
    }
    return c = c || n.length !== Object.keys(s).length, c ? d : s;
  };
}
function Tu(t = ne().nodes.drag, e) {
  switch (e.type) {
    case "DND_DRAG_START":
      return Object.assign(Object.assign({}, t), { id: e.id, selectedIds: e.dragIds });
    case "DND_DRAG_END":
      return Object.assign(Object.assign({}, t), { id: null, destinationParentId: null, destinationIndex: null, selectedIds: [] });
    case "DND_HOVERING":
      return e.parentId !== t.destinationParentId || e.index != t.destinationIndex ? Object.assign(Object.assign({}, t), { destinationParentId: e.parentId, destinationIndex: e.index }) : t;
    default:
      return t;
  }
}
const Eu = kr({
  nodes: kr({
    focus: di,
    edit: li,
    open: fi,
    selection: hi,
    drag: Tu
  }),
  dnd: gi
}), _u = ne();
function Cu({ treeProps: t, imperativeHandle: e, children: r }) {
  const n = re(null), i = re(null), o = re(
    // @ts-ignore
    Tn(Eu, ne(t))
  ), a = qn.useSyncExternalStore(o.current.subscribe, o.current.getState, () => _u), s = N(() => new le(o.current, t, n, i), []), u = re(0);
  return N(() => {
    u.current += 1, s.update(t);
  }, [...Object.values(t), a.nodes.open]), Hn(e, () => s), L(() => {
    s.props.selection ? s.select(s.props.selection, { focus: !1 }) : s.deselectAll();
  }, [s.props.selection]), L(() => {
    s.props.searchTerm || o.current.dispatch(et.clear(!0));
  }, [s.props.searchTerm]), I(Mr.Provider, { value: s, children: I(jr.Provider, { value: u.current, children: I($r.Provider, { value: a.nodes, children: I(Lr.Provider, { value: a.dnd, children: I(ma, Object.assign({ backend: su, options: { rootElement: s.props.dndRootElement || void 0 } }, t.dndManager && { manager: t.dndManager }, { children: r })) }) }) }) });
}
function Nu() {
  const t = k(), [, e] = hn(() => ({
    accept: "NODE",
    canDrop: (r, n) => n.isOver({ shallow: !0 }) ? t.canDrop() : !1,
    hover: (r, n) => {
      if (!n.isOver({ shallow: !0 }))
        return;
      const i = n.getClientOffset();
      if (!t.listEl.current || !i)
        return;
      const { cursor: o, drop: a } = Sn({
        element: t.listEl.current,
        offset: i,
        indent: t.indent,
        node: null,
        prevNode: t.visibleNodes[t.visibleNodes.length - 1],
        nextNode: null
      });
      a && t.dispatch(ie.hovering(a.parentId, a.index)), n.canDrop() ? o && t.showCursor(o) : t.hideCursor();
    }
  }), [t]);
  e(t.listEl);
}
function xu(t) {
  return Nu(), t.children;
}
function Pu() {
  const e = k().props.renderContainer || Dn;
  return I(ut, { children: I(e, {}) });
}
function Ru() {
  const t = k(), { offset: e, mouse: r, item: n, isDragging: i } = Ls((a) => ({
    offset: a.getSourceClientOffset(),
    mouse: a.getClientOffset(),
    item: a.getItem(),
    isDragging: a.isDragging()
  })), o = t.props.renderDragPreview || Zr;
  return I(o, { offset: e, mouse: r, id: (n == null ? void 0 : n.id) || null, dragIds: (n == null ? void 0 : n.dragIds) || [], isDragging: i });
}
class ku {
  constructor(e) {
    this.root = Au(e);
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
function Au(t) {
  const e = new En({ id: "ROOT" }, null);
  return e.children = t.map((r) => bt(r, e)), e;
}
function bt(t, e) {
  const r = new En(t, e);
  return t.children && (r.children = t.children.map((n) => bt(n, r))), r;
}
class En {
  constructor(e, r) {
    this.data = e, this.parent = r, this.id = e.id;
  }
  hasParent() {
    return !!this.parent;
  }
  get childIndex() {
    return this.hasParent() ? this.parent.children.indexOf(this) : -1;
  }
  addChild(e, r) {
    var n, i;
    const o = bt(e, this);
    this.children = (n = this.children) !== null && n !== void 0 ? n : [], this.children.splice(r, 0, o), this.data.children = (i = this.data.children) !== null && i !== void 0 ? i : [], this.data.children.splice(r, 0, e);
  }
  removeChild(e) {
    var r, n;
    (r = this.children) === null || r === void 0 || r.splice(e, 1), (n = this.data.children) === null || n === void 0 || n.splice(e, 1);
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
let Mu = 0;
function $u(t) {
  const [e, r] = dt(t), n = N(() => new ku(e), [e]);
  return [e, { onMove: (c) => {
    for (const d of c.dragIds)
      n.move({ id: d, parentId: c.parentId, index: c.index });
    r(n.data);
  }, onRename: ({ name: c, id: d }) => {
    n.update({ id: d, changes: { name: c } }), r(n.data);
  }, onCreate: ({ parentId: c, index: d, type: h }) => {
    const y = { id: `simple-tree-id-${Mu++}`, name: "" };
    return h === "internal" && (y.children = []), n.create({ parentId: c, index: d, data: y }), r(n.data), y;
  }, onDelete: (c) => {
    c.ids.forEach((d) => n.drop({ id: d })), r(n.data);
  } }];
}
function Lu(t) {
  if (t.initialData && t.data)
    throw new Error("React Arborist Tree => Provide either a data or initialData prop, but not both.");
  if (t.initialData && (t.onCreate || t.onDelete || t.onMove || t.onRename))
    throw new Error(`React Arborist Tree => You passed the initialData prop along with a data handler.
Use the data prop if you want to provide your own handlers.`);
  if (t.initialData) {
    const [e, r] = $u(t.initialData);
    return Object.assign(Object.assign(Object.assign({}, t), r), { data: e });
  } else
    return t;
}
function ju(t, e) {
  const r = Lu(t);
  return K(Cu, { treeProps: r, imperativeHandle: e, children: [I(xu, { children: I(Pu, {}) }), I(Ru, {})] });
}
const Hu = ct(ju), Fu = (t) => {
  if (!t.isLeaf)
    return t.isOpen ? Fn : Vn;
};
function Yu(t) {
  const e = Mn(), [r, n] = dt(t.data), i = t.iconProvider || Un;
  L(() => {
    n(t.data);
  }, [t.data]);
  const o = (s) => {
    if (s.data.icon)
      return i.getIcon(s.data.icon);
  };
  return /* @__PURE__ */ I(
    Hu,
    {
      initialData: r,
      padding: 0,
      width: "100%",
      rowHeight: 40,
      height: 500,
      idAccessor: "name",
      childrenAccessor: (s) => s.children,
      onSelect: (s) => {
        var c, d;
        var u = (d = (c = s[0]) == null ? void 0 : c.data) == null ? void 0 : d.path;
        e(u);
      },
      children: ({ node: s, style: u, dragHandle: c }) => {
        var d = Fu(s), h = o(s);
        return /* @__PURE__ */ K(
          "div",
          {
            className: "tree-menu",
            onClick: () => s.isInternal && s.toggle(),
            children: [
              /* @__PURE__ */ K(
                "div",
                {
                  className: "tree-menu-list",
                  style: { ...u },
                  ref: c,
                  children: [
                    h ? /* @__PURE__ */ I(h, { className: "label-icon" }) : /* @__PURE__ */ I(ut, {}),
                    /* @__PURE__ */ I("div", { children: s.data.name })
                  ]
                }
              ),
              d ? /* @__PURE__ */ I("div", { className: "arrow-icon", children: /* @__PURE__ */ I(d, {}) }) : /* @__PURE__ */ I("div", {})
            ]
          }
        );
      }
    }
  );
}
export {
  Yu as default
};
