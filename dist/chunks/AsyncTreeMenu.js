import "../assets/AsyncTreeMenu.css";
import { G as ct, t as k } from "./index.js";
import { g as ot } from "./_commonjsHelpers.js";
import te, { useRef as ve, useReducer as ut, useEffect as Z } from "react";
function Dt(t) {
  return ct({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M192 128l128 128-128 128z" } }] })(t);
}
var $e = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var e = {}.hasOwnProperty;
    function n() {
      for (var l = "", s = 0; s < arguments.length; s++) {
        var i = arguments[s];
        i && (l = r(l, a(i)));
      }
      return l;
    }
    function a(l) {
      if (typeof l == "string" || typeof l == "number")
        return l;
      if (typeof l != "object")
        return "";
      if (Array.isArray(l))
        return n.apply(null, l);
      if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]"))
        return l.toString();
      var s = "";
      for (var i in l)
        e.call(l, i) && l[i] && (s = r(s, i));
      return s;
    }
    function r(l, s) {
      return s ? l ? l + " " + s : l + s : l;
    }
    t.exports ? (n.default = n, t.exports = n) : window.classNames = n;
  })();
})($e);
var ft = $e.exports;
const me = /* @__PURE__ */ ot(ft);
function Le(t) {
  return (Le = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(t);
}
function De(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Je(t, e) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(t) || function(n, a) {
    var r = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (r != null) {
      var l, s, i = [], d = !0, u = !1;
      try {
        for (r = r.call(n); !(d = (l = r.next()).done) && (i.push(l.value), !a || i.length !== a); d = !0)
          ;
      } catch (T) {
        u = !0, s = T;
      } finally {
        try {
          d || r.return == null || r.return();
        } finally {
          if (u)
            throw s;
        }
      }
      return i;
    }
  }(t, e) || Fe(t, e) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function ee(t) {
  return function(e) {
    if (Array.isArray(e))
      return Me(e);
  }(t) || function(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
      return Array.from(e);
  }(t) || Fe(t) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Fe(t, e) {
  if (t) {
    if (typeof t == "string")
      return Me(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Me(t, e) : void 0;
  }
}
function Me(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, a = new Array(e); n < e; n++)
    a[n] = t[n];
  return a;
}
function $(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = Fe(t)) || e && t && typeof t.length == "number") {
      n && (t = n);
      var a = 0, r = function() {
      };
      return { s: r, n: function() {
        return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
      }, e: function(d) {
        throw d;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var l, s = !0, i = !1;
  return { s: function() {
    n = n.call(t);
  }, n: function() {
    var d = n.next();
    return s = d.done, d;
  }, e: function(d) {
    i = !0, l = d;
  }, f: function() {
    try {
      s || n.return == null || n.return();
    } finally {
      if (i)
        throw l;
    }
  } };
}
function Re(t, e) {
  var n = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && e.indexOf(a) < 0 && (n[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    var r = 0;
    for (a = Object.getOwnPropertySymbols(t); r < a.length; r++)
      e.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[r]) && (n[a[r]] = t[a[r]]);
  }
  return n;
}
var Ve = { root: "tree", node: "tree-node", branch: "tree-node__branch", branchWrapper: "tree-branch-wrapper", leafListItem: "tree-leaf-list-item", leaf: "tree-node__leaf", nodeGroup: "tree-node-group" }, ne = { select: "SELECT", focus: "FOCUS", exclusiveSelect: "EXCLUSIVE_SELECT" }, ht = Object.freeze(Object.values(ne)), pt = Object.freeze(Object.values({ check: "check", select: "select" })), Be = "COLLAPSE", Ae = "COLLAPSE_MANY", we = "EXPAND", _e = "EXPAND_MANY", ze = "HALF_SELECT", be = "SELECT", Qe = "DESELECT", Oe = "TOGGLE", Ee = "TOGGLE_SELECT", re = "SELECT_MANY", Xe = "EXCLUSIVE_CHANGE_SELECT_MANY", J = "FOCUS", Ze = "BLUR", vt = "DISABLE", bt = "ENABLE", et = "CLEAR_MANUALLY_TOGGLED", tt = "CONTROLLED_SELECT_MANY", nt = "UPDATE_TREE_STATE_WHEN_DATA_CHANGED", ce = function() {
}, Ce = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return function(a) {
    for (var r = 0, l = e; r < l.length; r++) {
      var s = l[r];
      if (s && s(a), a.defaultPrevented)
        break;
    }
  };
}, se = function(t, e) {
  var n, a = /* @__PURE__ */ new Set(), r = $(t);
  try {
    for (r.s(); !(n = r.n()).done; ) {
      var l = n.value;
      e.has(l) || a.add(l);
    }
  } catch (s) {
    r.e(s);
  } finally {
    r.f();
  }
  return a;
}, ge = function(t, e) {
  return new Set([].concat(ee(se(t, e)), ee(se(e, t))));
}, Ye = function(t) {
  var e = ve();
  return Z(function() {
    e.current = t;
  }, [t]), e.current;
}, Y = function(t, e) {
  var n;
  return !!(!((n = O(t, e).children) === null || n === void 0) && n.length);
}, ie = function(t, e) {
  return O(t, e).parent;
}, St = function(t, e, n) {
  for (var a = e, r = []; ; ) {
    var l = ie(t, a);
    if (l === 0 || l == null || l != null && n.has(l))
      break;
    r.push(l), a = l;
  }
  return r;
}, oe = function(t, e, n) {
  var a = [];
  return function r(l, s) {
    var i = O(l, s);
    if (i.children != null) {
      var d, u = $(i.children.filter(function(g) {
        return !n.has(g);
      }));
      try {
        for (u.s(); !(d = u.n()).done; ) {
          var T = d.value;
          a.push(T), r(l, T);
        }
      } catch (g) {
        u.e(g);
      } finally {
        u.f();
      }
    }
  }(t, e), a;
}, at = function(t, e) {
  var n = O(t, e);
  return n.children == null ? [] : n.children;
}, rt = function(t, e, n) {
  var a = ie(t, e);
  if (a != null) {
    var r = O(t, a), l = r.children.indexOf(e) + n;
    if (r.children[l])
      return r.children[l];
  }
  return null;
}, Ue = function(t, e, n) {
  var a = O(t, e);
  for (Q(t).id === e && (a = O(t, O(t, e).children[O(t, e).children.length - 1])); n.has(a.id) && Y(t, a.id); )
    a = O(t, a.children[a.children.length - 1]);
  return a.id;
}, ke = function(t, e, n) {
  if (e === Q(t).children[0])
    return null;
  var a = rt(t, e, -1);
  return a == null ? ie(t, e) : Ue(t, a, n);
}, pe = function(t, e, n) {
  var a = O(t, e).id;
  if (Y(t, a) && n.has(a))
    return O(t, a).children[0];
  for (; ; ) {
    var r = rt(t, a, 1);
    if (r != null)
      return r;
    if ((a = ie(t, a)) == null)
      return null;
  }
}, lt = function(t) {
  var e = t.data, n = t.expandedIds, a = t.from, r = t.to, l = [], s = e.length, i = 0, d = a;
  if (l.push(a), a < r)
    for (; i < s && ((d = pe(e, d, n)) != null && l.push(d), d != null && d !== r); )
      i += 1;
  else if (a > r)
    for (; i < s && ((d = ke(e, d, n)) != null && l.push(d), d != null && d !== r); )
      i += 1;
  return l;
}, yt = function(t) {
  var e = t.isSelected, n = t.isDisabled, a = t.multiSelect;
  return n || a ? e : !!e || void 0;
}, It = function(t) {
  var e = t.isSelected, n = t.isDisabled, a = t.isHalfSelected, r = t.multiSelect;
  return n ? e : a ? "mixed" : r ? e : !!e || void 0;
}, de = function(t, e, n) {
  return e.concat.apply(e, ee(e.filter(function(a) {
    return Y(t, a);
  }).map(function(a) {
    return oe(t, a, n);
  })));
}, gt = function(t, e, n) {
  e != null ? window.navigator.userAgent.match(/Trident/) ? setTimeout(function() {
    return !e.contains(document.activeElement) && n();
  }, 0) : !e.contains(t.nativeEvent.relatedTarget) && n() : console.warn("ref not set on <ul>");
}, mt = function(t, e, n) {
  var a = at(t, e);
  return Y(t, e) && !n.has(e) && a.length === 1 && a.every(function(r) {
    return n.has(r);
  });
}, st = function(t, e, n, a) {
  var r = function(s, i, d) {
    return Y(s, i) && d.has(i) && oe(s, i, /* @__PURE__ */ new Set()).some(function(u) {
      return d.has(u);
    });
  }(t, e, n), l = function(s, i, d) {
    var u = at(s, i);
    return Y(s, i) && d.has(i) && u.length === 1 && u.every(function(T) {
      return d.has(T);
    });
  }(t, e, n);
  return function(s, i, d, u) {
    var T = oe(s, i, /* @__PURE__ */ new Set());
    return Y(s, i) && d.has(i) && T.every(function(g) {
      return d.has(g);
    }) && T.every(function(g) {
      return !u.has(g);
    });
  }(t, e, n, a) ? Ee : r && !l ? ze : Ee;
}, Q = function(t) {
  var e = t.find(function(n) {
    return n.parent === null;
  });
  if (!e)
    throw Error("TreeView data must contain parent node.");
  return e;
}, O = function(t, e) {
  var n = t.find(function(a) {
    return a.id === e;
  });
  if (n == null)
    throw Error("Node with id=".concat(e, " doesn't exist in the tree."));
  return n;
}, qe = function(t) {
  var e = Array.from(new Set(t));
  return t.length !== e.length;
}, wt = function(t, e) {
  switch (e.type) {
    case Be:
      var n = new Set(t.expandedIds);
      return n.delete(e.id), Object.assign(Object.assign({}, t), { expandedIds: n, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Ae:
      var a, r = new Set(t.expandedIds), l = $(e.ids);
      try {
        for (l.s(); !(a = l.n()).done; ) {
          var s = a.value;
          r.delete(s);
        }
      } catch (q) {
        l.e(q);
      } finally {
        l.f();
      }
      return Object.assign(Object.assign({}, t), { expandedIds: r, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case we:
      var i = new Set(t.expandedIds);
      return i.add(e.id), Object.assign(Object.assign({}, t), { expandedIds: i, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case _e:
      var d = new Set([].concat(ee(t.expandedIds), ee(e.ids)));
      return Object.assign(Object.assign({}, t), { expandedIds: d, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Oe:
      var u = new Set(t.expandedIds);
      return t.expandedIds.has(e.id) ? u.delete(e.id) : u.add(e.id), Object.assign(Object.assign({}, t), { expandedIds: u, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case ze:
      if (t.disabledIds.has(e.id))
        return t;
      var T = new Set(t.halfSelectedIds), g = new Set(t.selectedIds);
      return T.add(e.id), g.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: g, halfSelectedIds: T, tabbableId: e.keepFocus ? t.tabbableId : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id });
    case be:
      if (!e.NotUserAction && t.disabledIds.has(e.id))
        return t;
      var W;
      e.multiSelect ? (W = new Set(t.selectedIds)).add(e.id) : (W = /* @__PURE__ */ new Set()).add(e.id);
      var h = new Set(t.halfSelectedIds);
      return h.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: W, halfSelectedIds: h, tabbableId: e.keepFocus ? t.tabbableId : e.id, isFocused: e.NotUserAction !== !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case Qe:
      if (!e.NotUserAction && t.disabledIds.has(e.id))
        return t;
      var m, c = new Set(t.selectedIds);
      return c.delete(e.id), e.multiSelect ? (m = new Set(t.halfSelectedIds)).delete(e.id) : m = /* @__PURE__ */ new Set(), Object.assign(Object.assign({}, t), { selectedIds: c, halfSelectedIds: m, tabbableId: e.keepFocus ? t.tabbableId : e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case Ee:
      if (t.disabledIds.has(e.id))
        return t;
      var L, F = t.selectedIds.has(e.id);
      e.multiSelect ? (L = new Set(t.selectedIds), F ? L.delete(e.id) : L.add(e.id)) : (L = /* @__PURE__ */ new Set(), F || L.add(e.id));
      var _ = new Set(t.halfSelectedIds);
      return _.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: L, halfSelectedIds: _, tabbableId: e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case re:
      var o, S = e.ids.filter(function(q) {
        return !t.disabledIds.has(q);
      });
      if (e.multiSelect) {
        o = e.select ? new Set([].concat(ee(t.selectedIds), ee(S))) : se(t.selectedIds, new Set(S));
        var v = se(t.halfSelectedIds, o);
        return Object.assign(Object.assign({}, t), { selectedIds: o, halfSelectedIds: v, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case Xe:
      var w, N = e.ids.filter(function(q) {
        return !t.disabledIds.has(q);
      });
      if (e.multiSelect) {
        w = e.select ? new Set(N) : se(t.selectedIds, new Set(N));
        var z = se(t.halfSelectedIds, w);
        return Object.assign(Object.assign({}, t), { selectedIds: w, halfSelectedIds: z, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case tt:
      var x, M = t.lastInteractedWith, D = t.tabbableId;
      if (e.multiSelect)
        x = new Set(e.ids), e.ids.length && (M = e.ids[e.ids.length - 1], D = e.ids[e.ids.length - 1]);
      else {
        x = /* @__PURE__ */ new Set(), e.ids.length > 1 && console.warn("Tree in singleSelect mode, only the first item from selectedIds will be selected.");
        var y = e.ids[0];
        y && x.add(y), M = y ?? M, D = y ?? M;
      }
      var j = new Set(t.halfSelectedIds);
      e.ids.every(function(q) {
        return j.delete(q);
      });
      var p = new Set(e.ids);
      return Object.assign(Object.assign({}, t), { selectedIds: x, halfSelectedIds: j, controlledIds: p, isFocused: !0, lastAction: e.type, tabbableId: D, lastInteractedWith: M });
    case J:
      return Object.assign(Object.assign({}, t), { tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Ze:
      return Object.assign(Object.assign({}, t), { isFocused: !1 });
    case vt:
      var I = new Set(t.disabledIds);
      return I.add(e.id), Object.assign(Object.assign({}, t), { disabledIds: I });
    case bt:
      var P = new Set(t.disabledIds);
      return P.delete(e.id), Object.assign(Object.assign({}, t), { disabledIds: P });
    case et:
      return Object.assign(Object.assign({}, t), { lastManuallyToggled: null });
    case nt:
      return Object.assign(Object.assign({}, t), { tabbableId: e.tabbableId, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.lastUserSelect });
    default:
      throw new Error("Invalid action passed to the reducer");
  }
}, dt = function(t) {
  var e = t.element, n = t.dispatch, a = t.data, r = t.selectedIds, l = t.tabbableId, s = t.isFocused, i = t.expandedIds, d = t.disabledIds, u = t.halfSelectedIds, T = t.lastUserSelect, g = t.nodeRefs, W = t.leafRefs, h = t.baseClassNames, m = t.nodeRenderer, c = t.nodeAction, L = t.setsize, F = t.posinset, _ = t.level, o = t.propagateCollapse, S = t.propagateSelect, v = t.multiSelect, w = t.togglableSelect, N = t.clickAction, z = t.state, x = function(p) {
    if (!(p.ctrlKey || p.altKey || p.shiftKey))
      if (i.has(e.id) && o) {
        var I = [e.id].concat(ee(oe(a, e.id, /* @__PURE__ */ new Set())));
        n({ type: Ae, ids: I, lastInteractedWith: e.id });
      } else
        n({ type: Oe, id: e.id, lastInteractedWith: e.id });
  }, M = function() {
    return n({ type: J, id: e.id, lastInteractedWith: e.id });
  }, D = function(p) {
    if (p.shiftKey) {
      var I = lt({ data: a, expandedIds: i, from: T, to: e.id }).filter(function(P) {
        return !d.has(P);
      });
      I = S ? de(a, I, d) : I, n({ type: Xe, select: !0, multiSelect: v, ids: I, lastInteractedWith: e.id, lastManuallyToggled: e.id });
    } else
      p.ctrlKey || N === ne.select ? (n({ type: w ? st(a, e.id, r, d) : be, id: e.id, multiSelect: v, lastInteractedWith: e.id, lastManuallyToggled: e.id }), S && !d.has(e.id) && n({ type: re, ids: de(a, [e.id], d), select: !w || !r.has(e.id), multiSelect: v, lastInteractedWith: e.id, lastManuallyToggled: e.id })) : N === ne.exclusiveSelect ? n({ type: w ? Ee : be, id: e.id, multiSelect: !1, lastInteractedWith: e.id, lastManuallyToggled: e.id }) : N === ne.focus && n({ type: J, id: e.id, lastInteractedWith: e.id });
  }, y = function(p) {
    var I;
    return me(p, (De(I = {}, "".concat(p, "--expanded"), i.has(e.id)), De(I, "".concat(p, "--selected"), r.has(e.id)), De(I, "".concat(p, "--focused"), l === e.id && s), I));
  }, j = c === "select" ? { "aria-selected": yt({ isSelected: r.has(e.id), isDisabled: d.has(e.id), multiSelect: v }) } : { "aria-checked": It({ isSelected: r.has(e.id), isDisabled: d.has(e.id), isHalfSelected: u.has(e.id), multiSelect: v }) };
  return Y(a, e.id) || e.isBranch ? te.createElement("li", Object.assign({ role: "treeitem", "aria-expanded": i.has(e.id), "aria-setsize": L, "aria-posinset": F, "aria-level": _, "aria-disabled": d.has(e.id), tabIndex: l === e.id ? 0 : -1, ref: function(p) {
    (g == null ? void 0 : g.current) != null && p != null && (g.current[e.id] = p);
  }, className: h.branchWrapper }, j), te.createElement(te.Fragment, null, m({ element: e, isBranch: !0, isSelected: r.has(e.id), isHalfSelected: u.has(e.id), isExpanded: i.has(e.id), isDisabled: d.has(e.id), dispatch: n, getNodeProps: function() {
    var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, I = p.onClick;
    return { onClick: I == null ? Ce(D, x, M) : Ce(I, M), className: me(y(h.node), h.branch), ref: function(P) {
      (W == null ? void 0 : W.current) != null && (W.current[e.id] = P);
    } };
  }, setsize: L, posinset: F, level: _, handleSelect: D, handleExpand: x, treeState: z }), te.createElement(Et, Object.assign({ getClasses: y }, function(p) {
    return p.setsize, p.posinset, Re(p, ["setsize", "posinset"]);
  }(t))))) : te.createElement("li", { role: "none", className: y(h.leafListItem) }, m({ element: e, isBranch: !1, isSelected: r.has(e.id), isHalfSelected: !1, isExpanded: !1, isDisabled: d.has(e.id), dispatch: n, getNodeProps: function() {
    var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, I = p.onClick;
    return Object.assign({ role: "treeitem", tabIndex: l === e.id ? 0 : -1, onClick: Ce(I ?? D, M), ref: function(P) {
      (g == null ? void 0 : g.current) != null && (W == null ? void 0 : W.current) != null && (g.current[e.id] = P, W.current[e.id] = P);
    }, className: me(y(h.node), h.leaf), "aria-setsize": L, "aria-posinset": F, "aria-level": _, disabled: d.has(e.id), "aria-disabled": d.has(e.id) }, j);
  }, setsize: L, posinset: F, level: _, handleSelect: D, handleExpand: ce, treeState: z }));
}, Et = function(t) {
  var e = t.data, n = t.element, a = t.expandedIds, r = t.getClasses, l = t.baseClassNames, s = t.level, i = Re(t, ["data", "element", "expandedIds", "getClasses", "baseClassNames", "level"]);
  return te.createElement("ul", { role: "group", className: r(l.nodeGroup) }, a.has(n.id) && n.children.length > 0 && n.children.map(function(d, u) {
    return te.createElement(dt, Object.assign({ data: e, expandedIds: a, baseClassNames: l, key: "".concat(d, "-").concat(Le(d)), element: O(e, d), setsize: n.children.length, posinset: u + 1, level: s + 1 }, i));
  }));
}, At = function(t) {
  var e = t.data, n = t.controlledSelectedIds, a = t.controlledExpandedIds, r = t.defaultExpandedIds, l = t.defaultSelectedIds, s = t.defaultDisabledIds, i = t.nodeRefs, d = t.leafRefs, u = t.onSelect, T = t.onNodeSelect, g = t.onExpand, W = t.onLoadData, h = t.togglableSelect, m = t.multiSelect, c = t.propagateSelect, L = t.propagateSelectUpwards, F = Q(e), _ = Je(ut(wt, { selectedIds: new Set(n || l), controlledIds: new Set(n), tabbableId: F.children[0], isFocused: !1, expandedIds: new Set(a || r), halfSelectedIds: /* @__PURE__ */ new Set(), lastUserSelect: F.children[0], lastInteractedWith: null, lastManuallyToggled: null, disabledIds: new Set(s) }), 2), o = _[0], S = _[1], v = o.selectedIds, w = o.expandedIds, N = o.disabledIds, z = o.tabbableId, x = o.halfSelectedIds, M = o.lastAction, D = o.lastInteractedWith, y = o.lastManuallyToggled, j = Ye(v) || /* @__PURE__ */ new Set(), p = ge(v, j);
  Z(function() {
    var E;
    if (u != null && u !== ce) {
      var f, A = $(p);
      try {
        for (A.s(); !(f = A.n()).done; ) {
          var b = f.value, R = Y(e, b) || !!(!((E = O(e, z)) === null || E === void 0) && E.isBranch);
          u({ element: O(e, b), isBranch: R, isExpanded: !!R && w.has(b), isSelected: v.has(b), isDisabled: N.has(b), isHalfSelected: !!R && x.has(b), treeState: o });
        }
      } catch (B) {
        A.e(B);
      } finally {
        A.f();
      }
    }
  }, [e, v, w, N, x, p, u, o]), Z(function() {
    T != null && T !== ce && y != null && p.size && (T({ element: O(e, y), isSelected: v.has(y), isBranch: Y(e, y), treeState: o }), S({ type: et }));
  }, [y, v, p]);
  var I = Ye(w) || /* @__PURE__ */ new Set();
  Z(function() {
    var E = ge(w, I);
    if (g != null && g !== ce) {
      var f, A = $(E);
      try {
        for (A.s(); !(f = A.n()).done; ) {
          var b = f.value;
          g({ element: O(e, b), isExpanded: w.has(b), isSelected: v.has(b), isDisabled: N.has(b), isHalfSelected: x.has(b), treeState: o });
        }
      } catch (R) {
        A.e(R);
      } finally {
        A.f();
      }
    }
  }, [e, v, w, N, x, I, g, o]);
  var P, q, fe = (P = e, q = ve(), Z(function() {
    q.current = P;
  }), q.current || /* @__PURE__ */ new Map());
  Z(function() {
    var E = ge(w, I);
    if (W) {
      var f, A = $(E);
      try {
        for (A.s(); !(f = A.n()).done; ) {
          var b = f.value;
          W({ element: O(e, b), isExpanded: w.has(b), isSelected: v.has(b), isDisabled: N.has(b), isHalfSelected: x.has(b), treeState: o });
        }
      } catch (G) {
        A.e(G);
      } finally {
        A.f();
      }
      if (fe !== e && h && c) {
        var R, B = $(w);
        try {
          for (B.s(); !(R = B.n()).done; ) {
            var H = R.value;
            v.has(H) && S({ type: re, ids: de(e, [H], N), select: !0, multiSelect: m, lastInteractedWith: H });
          }
        } catch (G) {
          B.e(G);
        } finally {
          B.f();
        }
      }
    }
  }, [e, v, w, N, x, I, W, o]), Z(function() {
    if (fe !== e) {
      var E = Q(e);
      E.children.length && S({ type: nt, tabbableId: e.find(function(f) {
        return f.id === o.tabbableId;
      }) ? o.tabbableId : E.children[0], lastInteractedWith: e.find(function(f) {
        return f.id === o.lastInteractedWith;
      }) ? o.lastInteractedWith : null, lastManuallyToggled: e.find(function(f) {
        return f.id === o.lastManuallyToggled;
      }) ? o.lastManuallyToggled : null, lastUserSelect: e.find(function(f) {
        return f.id === o.lastUserSelect;
      }) ? o.lastUserSelect : E.children[0] });
    }
  }, [e]);
  var he = ge(new Set(n), v);
  return Z(function() {
    if (n) {
      he.size && S({ type: tt, ids: n, multiSelect: m });
      var E, f = $(n);
      try {
        for (f.s(); !(E = f.n()).done; ) {
          var A = E.value;
          c && !N.has(A) && S({ type: re, ids: de(e, [A], N), select: !0, multiSelect: m, lastInteractedWith: A });
        }
      } catch (b) {
        f.e(b);
      } finally {
        f.f();
      }
    }
  }, [n]), Z(function() {
    var E = new Set(a), f = se(E, I), A = se(I, E);
    if (A.size) {
      var b, R = $(A);
      try {
        for (R.s(); !(b = R.n()).done; ) {
          var B = b.value;
          if (Y(e, B) || O(e, B).isBranch) {
            var H = [B].concat(ee(oe(e, B, /* @__PURE__ */ new Set())));
            S({ type: Ae, ids: H, lastInteractedWith: B });
          }
        }
      } catch (ue) {
        R.e(ue);
      } finally {
        R.f();
      }
    }
    if (f.size) {
      var G, X = $(f);
      try {
        for (X.s(); !(G = X.n()).done; ) {
          var C = G.value;
          if (Y(e, C) || O(e, C).isBranch) {
            var U = ie(e, C);
            S(U ? { type: _e, ids: [C, U], lastInteractedWith: C } : { type: we, id: C, lastInteractedWith: C });
          }
        }
      } catch (ue) {
        X.e(ue);
      } finally {
        X.f();
      }
    }
  }, [a]), Z(function() {
    if (L) {
      var E = new Set(ee(p));
      D && M !== J && M !== Be && M !== we && M !== Oe && E.add(D);
      var f = [];
      E.forEach(function(V) {
        e.find(function(We) {
          return We.id === V;
        }) || f.push(V);
      }), f.forEach(function(V) {
        return E.delete(V);
      });
      var A, b = function(V, We, je, ye, Ge, it) {
        var Ke, le = { every: /* @__PURE__ */ new Set(), some: /* @__PURE__ */ new Set(), none: /* @__PURE__ */ new Set() }, Ie = $(We);
        try {
          for (Ie.s(); !(Ke = Ie.n()).done; )
            for (var Te = Ke.value; ; ) {
              var ae = ie(V, Te);
              if (ae === 0 || ae == null || ae != null && ye.has(ae))
                break;
              var Ne = O(V, ae).children.filter(function(K) {
                return !ye.has(K);
              });
              if (Ne.length === 0)
                break;
              if (Ne.some(function(K) {
                return je.has(K) || le.some.has(K) && !le.none.has(K) || Ge.has(K) && !le.none.has(K);
              }))
                Ne.every(function(K) {
                  return je.has(K);
                }) ? le.every.add(ae) : le.some.add(ae);
              else {
                var Pe = St(V, Te, ye).find(function(K) {
                  return je.has(K);
                });
                if (!it && Pe) {
                  oe(V, Pe, ye).forEach(function(K) {
                    Ge.has(K) && le.none.add(K);
                  });
                  break;
                }
                le.none.add(ae);
              }
              Te = ae;
            }
        } catch (K) {
          Ie.e(K);
        } finally {
          Ie.f();
        }
        return le;
      }(e, E, v, N, x, m), R = b.every, B = b.some, H = b.none, G = $(R);
      try {
        for (G.s(); !(A = G.n()).done; ) {
          var X = A.value;
          v.has(X) || S({ type: be, id: X, multiSelect: m || mt(e, X, v), keepFocus: !0, NotUserAction: !0, lastInteractedWith: D });
        }
      } catch (V) {
        G.e(V);
      } finally {
        G.f();
      }
      var C, U = $(B);
      try {
        for (U.s(); !(C = U.n()).done; ) {
          var ue = C.value;
          x.has(ue) || S({ type: ze, id: ue, lastInteractedWith: D, keepFocus: !0, NotUserAction: !0 });
        }
      } catch (V) {
        U.e(V);
      } finally {
        U.f();
      }
      var He, Se = $(H);
      try {
        for (Se.s(); !(He = Se.n()).done; ) {
          var xe = He.value;
          (v.has(xe) || x.has(xe)) && S({ type: Qe, id: xe, multiSelect: m, keepFocus: !0, NotUserAction: !0, lastInteractedWith: D, lastManuallyToggled: y });
        }
      } catch (V) {
        Se.e(V);
      } finally {
        Se.f();
      }
    }
  }, [e, m, L, v, w, N, x, M, j, p, D, he]), Z(function() {
    if (D != null && z != null && (i == null ? void 0 : i.current) != null && (d == null ? void 0 : d.current) != null) {
      var E = i.current[z];
      (function(f) {
        f != null && f.scrollIntoView && f.scrollIntoView({ block: "nearest" });
      })(d.current[D]), function(f) {
        f != null && f.focus && f.focus({ preventScroll: !0 });
      }(E);
    }
  }, [z, i, d, D]), [o, S];
}, Ot = te.forwardRef(function(t, e) {
  var n = t.data, a = t.selectedIds, r = t.nodeRenderer, l = t.onSelect, s = l === void 0 ? ce : l, i = t.onNodeSelect, d = i === void 0 ? ce : i, u = t.onExpand, T = u === void 0 ? ce : u, g = t.onLoadData, W = t.className, h = W === void 0 ? "" : W, m = t.multiSelect, c = m !== void 0 && m, L = t.propagateSelect, F = L !== void 0 && L, _ = t.propagateSelectUpwards, o = _ !== void 0 && _, S = t.propagateCollapse, v = S !== void 0 && S, w = t.expandOnKeyboardSelect, N = w !== void 0 && w, z = t.togglableSelect, x = z !== void 0 && z, M = t.defaultExpandedIds, D = M === void 0 ? [] : M, y = t.defaultSelectedIds, j = y === void 0 ? [] : y, p = t.defaultDisabledIds, I = p === void 0 ? [] : p, P = t.clickAction, q = P === void 0 ? ne.select : P, fe = t.nodeAction, he = fe === void 0 ? "select" : fe, E = t.expandedIds, f = t.onBlur, A = Re(t, ["data", "selectedIds", "nodeRenderer", "onSelect", "onNodeSelect", "onExpand", "onLoadData", "className", "multiSelect", "propagateSelect", "propagateSelectUpwards", "propagateCollapse", "expandOnKeyboardSelect", "togglableSelect", "defaultExpandedIds", "defaultSelectedIds", "defaultDisabledIds", "clickAction", "nodeAction", "expandedIds", "onBlur"]);
  (function(C) {
    if (qe(C.map(function(U) {
      return U.id;
    })))
      throw Error("Multiple TreeView nodes have the same ID. IDs must be unique.");
    if (C.forEach(function(U) {
      if (U.id === U.parent)
        throw Error("Node with id=".concat(U.id, " has parent reference to itself."));
      if (qe(U.children))
        throw Error("Node with id=".concat(U.id, " contains duplicate ids in its children."));
    }), C.filter(function(U) {
      return U.parent === null;
    }).length === 0)
      throw Error("TreeView must have one root node.");
    if (C.filter(function(U) {
      return U.parent === null;
    }).length > 1)
      throw Error("TreeView can have only one root node.");
    Q(C).children.length || console.warn("TreeView have no nodes to display.");
  })(n);
  var b = ve({}), R = ve({}), B = Je(At({ data: n, controlledSelectedIds: a, controlledExpandedIds: E, defaultExpandedIds: D, defaultSelectedIds: j, defaultDisabledIds: I, nodeRefs: b, leafRefs: R, onSelect: s, onNodeSelect: d, onExpand: T, onLoadData: g, togglableSelect: x, multiSelect: c, propagateSelect: F, propagateSelectUpwards: o }), 2), H = B[0], G = B[1];
  F = F && c;
  var X = ve(null);
  return e != null && (X = e), te.createElement("ul", Object.assign({ className: me(Ve.root, h), role: "tree", "aria-multiselectable": he === "select" ? c : void 0, ref: X, onBlur: function(C) {
    gt(C, X.current, function() {
      f && f({ treeState: H, dispatch: G }), G({ type: Ze });
    });
  }, onKeyDown: xt({ data: n, tabbableId: H.tabbableId, expandedIds: H.expandedIds, selectedIds: H.selectedIds, disabledIds: H.disabledIds, halfSelectedIds: H.halfSelectedIds, clickAction: q, dispatch: G, propagateCollapse: v, propagateSelect: F, multiSelect: c, expandOnKeyboardSelect: N, togglableSelect: x }) }, A), Q(n).children.map(function(C, U) {
    return te.createElement(dt, Object.assign({ key: "".concat(C, "-").concat(Le(C)), data: n, element: O(n, C), setsize: Q(n).children.length, posinset: U + 1, level: 1 }, H, { state: H, dispatch: G, nodeRefs: b, leafRefs: R, baseClassNames: Ve, nodeRenderer: r, propagateCollapse: v, propagateSelect: F, propagateSelectUpwards: o, multiSelect: c, togglableSelect: x, clickAction: q, nodeAction: he }));
  }));
}), xt = function(t) {
  var e = t.data, n = t.expandedIds, a = t.selectedIds, r = t.disabledIds, l = t.tabbableId, s = t.dispatch, i = t.propagateCollapse, d = t.propagateSelect, u = t.multiSelect, T = t.expandOnKeyboardSelect, g = t.togglableSelect, W = t.clickAction;
  return function(h) {
    var m = O(e, l), c = m.id;
    if (h.ctrlKey) {
      if (h.key === "a" && W !== ne.focus) {
        h.preventDefault();
        var L = e.filter(function(j) {
          return j.parent !== null;
        }).map(function(j) {
          return j.id;
        }).filter(function(j) {
          return !r.has(j);
        });
        s({ type: re, multiSelect: u, select: Array.from(a).filter(function(j) {
          return !r.has(j);
        }).length !== L.length, ids: L, lastInteractedWith: m.id });
      } else if (h.shiftKey && (h.key === "Home" || h.key === "End") && W !== ne.focus) {
        var F = h.key === "Home" ? Q(e).children[0] : Ue(e, c, n), _ = lt({ data: e, expandedIds: n, from: c, to: F }).filter(function(j) {
          return !r.has(j);
        });
        s({ type: re, multiSelect: u, select: !0, ids: d ? de(e, _, r) : _ }), s({ type: J, id: F, lastInteractedWith: F });
      }
    } else {
      if (h.shiftKey)
        switch (h.key) {
          case "ArrowUp":
            h.preventDefault();
            var o = ke(e, c, n);
            return void (o == null || r.has(o) || (W !== ne.focus && s({ type: re, ids: d ? de(e, [o], r) : [o], select: !0, multiSelect: u, lastInteractedWith: o, lastManuallyToggled: o }), s({ type: J, id: o, lastInteractedWith: o })));
          case "ArrowDown":
            h.preventDefault();
            var S = pe(e, c, n);
            return void (S == null || r.has(S) || (W !== ne.focus && s({ type: re, ids: d ? de(e, [S], r) : [S], multiSelect: u, select: !0, lastInteractedWith: S, lastManuallyToggled: S }), s({ type: J, id: S, lastInteractedWith: S })));
        }
      switch (h.key) {
        case "ArrowDown":
          h.preventDefault();
          var v = pe(e, c, n);
          return void (v != null && s({ type: J, id: v, lastInteractedWith: v }));
        case "ArrowUp":
          h.preventDefault();
          var w = ke(e, c, n);
          return void (w != null && s({ type: J, id: w, lastInteractedWith: w }));
        case "ArrowLeft":
          if (h.preventDefault(), (Y(e, c) || m.isBranch) && n.has(l))
            if (i) {
              var N = [c].concat(ee(oe(e, c, /* @__PURE__ */ new Set())));
              s({ type: Ae, ids: N, lastInteractedWith: m.id });
            } else
              s({ type: Be, id: c, lastInteractedWith: c });
          else if (!Q(e).children.includes(c)) {
            var z = ie(e, c);
            if (z == null)
              throw new Error("parentId of root element is null");
            s({ type: J, id: z, lastInteractedWith: z });
          }
          return;
        case "ArrowRight":
          return h.preventDefault(), void ((Y(e, c) || m.isBranch) && (n.has(l) ? s({ type: J, id: m.children[0], lastInteractedWith: m.children[0] }) : s({ type: we, id: c, lastInteractedWith: c })));
        case "Home":
          h.preventDefault(), s({ type: J, id: Q(e).children[0], lastInteractedWith: Q(e).children[0] });
          break;
        case "End":
          h.preventDefault();
          var x = Ue(e, Q(e).id, n);
          return void s({ type: J, id: x, lastInteractedWith: x });
        case "*":
          h.preventDefault();
          var M = ie(e, c);
          if (M == null)
            throw new Error("parentId of element is null");
          var D = O(e, M).children.filter(function(j) {
            return Y(e, j) || O(e, j).isBranch;
          });
          return void s({ type: _e, ids: D, lastInteractedWith: c });
        case "Enter":
        case " ":
        case "Spacebar":
          return h.preventDefault(), W === ne.focus ? void 0 : (s({ type: g ? st(e, c, a, r) : be, id: c, multiSelect: u, lastInteractedWith: c, lastManuallyToggled: c }), d && !r.has(m.id) && s({ type: re, ids: de(e, [c], r), select: !g || !a.has(c), multiSelect: u, lastInteractedWith: c, lastManuallyToggled: c }), void (T && s({ type: Oe, id: c, lastInteractedWith: c })));
        default:
          if (h.key.length === 1)
            for (var y = pe(e, c, n); y !== c; )
              if (y != null) {
                if (O(e, y).name[0].toLowerCase() === h.key.toLowerCase())
                  return void s({ type: J, id: y, lastInteractedWith: c });
                y = pe(e, y, n);
              } else
                y = Q(e).children[0];
          return;
      }
    }
  };
};
Ot.propTypes = { data: k.array.isRequired, onSelect: k.func, onNodeSelect: k.func, onExpand: k.func, className: k.string, nodeRenderer: k.func.isRequired, defaultExpandedIds: k.array, defaultSelectedIds: k.array, expandedIds: k.array, selectedIds: k.array, defaultDisabledIds: k.array, propagateCollapse: k.bool, propagateSelect: k.bool, propagateSelectUpwards: k.bool, multiSelect: k.bool, expandOnKeyboardSelect: k.bool, togglableSelect: k.bool, nodeAction: k.oneOf(pt), clickAction: k.oneOf(ht), onBlur: k.func, onLoadData: k.func };
export {
  Dt as I,
  me as c,
  Ot as u
};
