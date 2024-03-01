import "../assets/AsyncTreeMenu.css";
import { g as ct } from "./_commonjsHelpers.js";
import { t as k } from "./index.js";
import te, { useRef as be, useReducer as ot, useEffect as Z } from "react";
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
var ut = $e.exports;
const me = /* @__PURE__ */ ct(ut);
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
  }(t, e) || Re(t, e) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function ee(t) {
  return function(e) {
    if (Array.isArray(e))
      return Ue(e);
  }(t) || function(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
      return Array.from(e);
  }(t) || Re(t) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Re(t, e) {
  if (t) {
    if (typeof t == "string")
      return Ue(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ue(t, e) : void 0;
  }
}
function Ue(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, a = new Array(e); n < e; n++)
    a[n] = t[n];
  return a;
}
function $(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = Re(t)) || e && t && typeof t.length == "number") {
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
function Fe(t, e) {
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
var Ve = { root: "tree", node: "tree-node", branch: "tree-node__branch", branchWrapper: "tree-branch-wrapper", leafListItem: "tree-leaf-list-item", leaf: "tree-node__leaf", nodeGroup: "tree-node-group" }, ne = { select: "SELECT", focus: "FOCUS", exclusiveSelect: "EXCLUSIVE_SELECT" }, ft = Object.freeze(Object.values(ne)), ht = Object.freeze(Object.values({ check: "check", select: "select" })), Be = "COLLAPSE", Ae = "COLLAPSE_MANY", we = "EXPAND", _e = "EXPAND_MANY", He = "HALF_SELECT", ve = "SELECT", Qe = "DESELECT", Oe = "TOGGLE", Ee = "TOGGLE_SELECT", re = "SELECT_MANY", Xe = "EXCLUSIVE_CHANGE_SELECT_MANY", J = "FOCUS", Ze = "BLUR", pt = "DISABLE", bt = "ENABLE", et = "CLEAR_MANUALLY_TOGGLED", tt = "CONTROLLED_SELECT_MANY", nt = "UPDATE_TREE_STATE_WHEN_DATA_CHANGED", ce = function() {
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
  var e = be();
  return Z(function() {
    e.current = t;
  }, [t]), e.current;
}, Y = function(t, e) {
  var n;
  return !!(!((n = O(t, e).children) === null || n === void 0) && n.length);
}, ie = function(t, e) {
  return O(t, e).parent;
}, vt = function(t, e, n) {
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
}, Me = function(t, e, n) {
  var a = O(t, e);
  for (Q(t).id === e && (a = O(t, O(t, e).children[O(t, e).children.length - 1])); n.has(a.id) && Y(t, a.id); )
    a = O(t, a.children[a.children.length - 1]);
  return a.id;
}, ke = function(t, e, n) {
  if (e === Q(t).children[0])
    return null;
  var a = rt(t, e, -1);
  return a == null ? ie(t, e) : Me(t, a, n);
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
}, St = function(t) {
  var e = t.isSelected, n = t.isDisabled, a = t.multiSelect;
  return n || a ? e : !!e || void 0;
}, yt = function(t) {
  var e = t.isSelected, n = t.isDisabled, a = t.isHalfSelected, r = t.multiSelect;
  return n ? e : a ? "mixed" : r ? e : !!e || void 0;
}, de = function(t, e, n) {
  return e.concat.apply(e, ee(e.filter(function(a) {
    return Y(t, a);
  }).map(function(a) {
    return oe(t, a, n);
  })));
}, It = function(t, e, n) {
  e != null ? window.navigator.userAgent.match(/Trident/) ? setTimeout(function() {
    return !e.contains(document.activeElement) && n();
  }, 0) : !e.contains(t.nativeEvent.relatedTarget) && n() : console.warn("ref not set on <ul>");
}, gt = function(t, e, n) {
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
  }(t, e, n, a) ? Ee : r && !l ? He : Ee;
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
}, mt = function(t, e) {
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
    case He:
      if (t.disabledIds.has(e.id))
        return t;
      var T = new Set(t.halfSelectedIds), g = new Set(t.selectedIds);
      return T.add(e.id), g.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: g, halfSelectedIds: T, tabbableId: e.keepFocus ? t.tabbableId : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id });
    case ve:
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
      var L, R = t.selectedIds.has(e.id);
      e.multiSelect ? (L = new Set(t.selectedIds), R ? L.delete(e.id) : L.add(e.id)) : (L = /* @__PURE__ */ new Set(), R || L.add(e.id));
      var _ = new Set(t.halfSelectedIds);
      return _.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: L, halfSelectedIds: _, tabbableId: e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case re:
      var o, S = e.ids.filter(function(q) {
        return !t.disabledIds.has(q);
      });
      if (e.multiSelect) {
        o = e.select ? new Set([].concat(ee(t.selectedIds), ee(S))) : se(t.selectedIds, new Set(S));
        var b = se(t.halfSelectedIds, o);
        return Object.assign(Object.assign({}, t), { selectedIds: o, halfSelectedIds: b, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case Xe:
      var w, N = e.ids.filter(function(q) {
        return !t.disabledIds.has(q);
      });
      if (e.multiSelect) {
        w = e.select ? new Set(N) : se(t.selectedIds, new Set(N));
        var H = se(t.halfSelectedIds, w);
        return Object.assign(Object.assign({}, t), { selectedIds: w, halfSelectedIds: H, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case tt:
      var x, U = t.lastInteractedWith, D = t.tabbableId;
      if (e.multiSelect)
        x = new Set(e.ids), e.ids.length && (U = e.ids[e.ids.length - 1], D = e.ids[e.ids.length - 1]);
      else {
        x = /* @__PURE__ */ new Set(), e.ids.length > 1 && console.warn("Tree in singleSelect mode, only the first item from selectedIds will be selected.");
        var y = e.ids[0];
        y && x.add(y), U = y ?? U, D = y ?? U;
      }
      var j = new Set(t.halfSelectedIds);
      e.ids.every(function(q) {
        return j.delete(q);
      });
      var p = new Set(e.ids);
      return Object.assign(Object.assign({}, t), { selectedIds: x, halfSelectedIds: j, controlledIds: p, isFocused: !0, lastAction: e.type, tabbableId: D, lastInteractedWith: U });
    case J:
      return Object.assign(Object.assign({}, t), { tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Ze:
      return Object.assign(Object.assign({}, t), { isFocused: !1 });
    case pt:
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
  var e = t.element, n = t.dispatch, a = t.data, r = t.selectedIds, l = t.tabbableId, s = t.isFocused, i = t.expandedIds, d = t.disabledIds, u = t.halfSelectedIds, T = t.lastUserSelect, g = t.nodeRefs, W = t.leafRefs, h = t.baseClassNames, m = t.nodeRenderer, c = t.nodeAction, L = t.setsize, R = t.posinset, _ = t.level, o = t.propagateCollapse, S = t.propagateSelect, b = t.multiSelect, w = t.togglableSelect, N = t.clickAction, H = t.state, x = function(p) {
    if (!(p.ctrlKey || p.altKey || p.shiftKey))
      if (i.has(e.id) && o) {
        var I = [e.id].concat(ee(oe(a, e.id, /* @__PURE__ */ new Set())));
        n({ type: Ae, ids: I, lastInteractedWith: e.id });
      } else
        n({ type: Oe, id: e.id, lastInteractedWith: e.id });
  }, U = function() {
    return n({ type: J, id: e.id, lastInteractedWith: e.id });
  }, D = function(p) {
    if (p.shiftKey) {
      var I = lt({ data: a, expandedIds: i, from: T, to: e.id }).filter(function(P) {
        return !d.has(P);
      });
      I = S ? de(a, I, d) : I, n({ type: Xe, select: !0, multiSelect: b, ids: I, lastInteractedWith: e.id, lastManuallyToggled: e.id });
    } else
      p.ctrlKey || N === ne.select ? (n({ type: w ? st(a, e.id, r, d) : ve, id: e.id, multiSelect: b, lastInteractedWith: e.id, lastManuallyToggled: e.id }), S && !d.has(e.id) && n({ type: re, ids: de(a, [e.id], d), select: !w || !r.has(e.id), multiSelect: b, lastInteractedWith: e.id, lastManuallyToggled: e.id })) : N === ne.exclusiveSelect ? n({ type: w ? Ee : ve, id: e.id, multiSelect: !1, lastInteractedWith: e.id, lastManuallyToggled: e.id }) : N === ne.focus && n({ type: J, id: e.id, lastInteractedWith: e.id });
  }, y = function(p) {
    var I;
    return me(p, (De(I = {}, "".concat(p, "--expanded"), i.has(e.id)), De(I, "".concat(p, "--selected"), r.has(e.id)), De(I, "".concat(p, "--focused"), l === e.id && s), I));
  }, j = c === "select" ? { "aria-selected": St({ isSelected: r.has(e.id), isDisabled: d.has(e.id), multiSelect: b }) } : { "aria-checked": yt({ isSelected: r.has(e.id), isDisabled: d.has(e.id), isHalfSelected: u.has(e.id), multiSelect: b }) };
  return Y(a, e.id) || e.isBranch ? te.createElement("li", Object.assign({ role: "treeitem", "aria-expanded": i.has(e.id), "aria-setsize": L, "aria-posinset": R, "aria-level": _, "aria-disabled": d.has(e.id), tabIndex: l === e.id ? 0 : -1, ref: function(p) {
    (g == null ? void 0 : g.current) != null && p != null && (g.current[e.id] = p);
  }, className: h.branchWrapper }, j), te.createElement(te.Fragment, null, m({ element: e, isBranch: !0, isSelected: r.has(e.id), isHalfSelected: u.has(e.id), isExpanded: i.has(e.id), isDisabled: d.has(e.id), dispatch: n, getNodeProps: function() {
    var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, I = p.onClick;
    return { onClick: I == null ? Ce(D, x, U) : Ce(I, U), className: me(y(h.node), h.branch), ref: function(P) {
      (W == null ? void 0 : W.current) != null && (W.current[e.id] = P);
    } };
  }, setsize: L, posinset: R, level: _, handleSelect: D, handleExpand: x, treeState: H }), te.createElement(wt, Object.assign({ getClasses: y }, function(p) {
    return p.setsize, p.posinset, Fe(p, ["setsize", "posinset"]);
  }(t))))) : te.createElement("li", { role: "none", className: y(h.leafListItem) }, m({ element: e, isBranch: !1, isSelected: r.has(e.id), isHalfSelected: !1, isExpanded: !1, isDisabled: d.has(e.id), dispatch: n, getNodeProps: function() {
    var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, I = p.onClick;
    return Object.assign({ role: "treeitem", tabIndex: l === e.id ? 0 : -1, onClick: Ce(I ?? D, U), ref: function(P) {
      (g == null ? void 0 : g.current) != null && (W == null ? void 0 : W.current) != null && (g.current[e.id] = P, W.current[e.id] = P);
    }, className: me(y(h.node), h.leaf), "aria-setsize": L, "aria-posinset": R, "aria-level": _, disabled: d.has(e.id), "aria-disabled": d.has(e.id) }, j);
  }, setsize: L, posinset: R, level: _, handleSelect: D, handleExpand: ce, treeState: H }));
}, wt = function(t) {
  var e = t.data, n = t.element, a = t.expandedIds, r = t.getClasses, l = t.baseClassNames, s = t.level, i = Fe(t, ["data", "element", "expandedIds", "getClasses", "baseClassNames", "level"]);
  return te.createElement("ul", { role: "group", className: r(l.nodeGroup) }, a.has(n.id) && n.children.length > 0 && n.children.map(function(d, u) {
    return te.createElement(dt, Object.assign({ data: e, expandedIds: a, baseClassNames: l, key: "".concat(d, "-").concat(Le(d)), element: O(e, d), setsize: n.children.length, posinset: u + 1, level: s + 1 }, i));
  }));
}, Et = function(t) {
  var e = t.data, n = t.controlledSelectedIds, a = t.controlledExpandedIds, r = t.defaultExpandedIds, l = t.defaultSelectedIds, s = t.defaultDisabledIds, i = t.nodeRefs, d = t.leafRefs, u = t.onSelect, T = t.onNodeSelect, g = t.onExpand, W = t.onLoadData, h = t.togglableSelect, m = t.multiSelect, c = t.propagateSelect, L = t.propagateSelectUpwards, R = Q(e), _ = Je(ot(mt, { selectedIds: new Set(n || l), controlledIds: new Set(n), tabbableId: R.children[0], isFocused: !1, expandedIds: new Set(a || r), halfSelectedIds: /* @__PURE__ */ new Set(), lastUserSelect: R.children[0], lastInteractedWith: null, lastManuallyToggled: null, disabledIds: new Set(s) }), 2), o = _[0], S = _[1], b = o.selectedIds, w = o.expandedIds, N = o.disabledIds, H = o.tabbableId, x = o.halfSelectedIds, U = o.lastAction, D = o.lastInteractedWith, y = o.lastManuallyToggled, j = Ye(b) || /* @__PURE__ */ new Set(), p = ge(b, j);
  Z(function() {
    var E;
    if (u != null && u !== ce) {
      var f, A = $(p);
      try {
        for (A.s(); !(f = A.n()).done; ) {
          var v = f.value, F = Y(e, v) || !!(!((E = O(e, H)) === null || E === void 0) && E.isBranch);
          u({ element: O(e, v), isBranch: F, isExpanded: !!F && w.has(v), isSelected: b.has(v), isDisabled: N.has(v), isHalfSelected: !!F && x.has(v), treeState: o });
        }
      } catch (B) {
        A.e(B);
      } finally {
        A.f();
      }
    }
  }, [e, b, w, N, x, p, u, o]), Z(function() {
    T != null && T !== ce && y != null && p.size && (T({ element: O(e, y), isSelected: b.has(y), isBranch: Y(e, y), treeState: o }), S({ type: et }));
  }, [y, b, p]);
  var I = Ye(w) || /* @__PURE__ */ new Set();
  Z(function() {
    var E = ge(w, I);
    if (g != null && g !== ce) {
      var f, A = $(E);
      try {
        for (A.s(); !(f = A.n()).done; ) {
          var v = f.value;
          g({ element: O(e, v), isExpanded: w.has(v), isSelected: b.has(v), isDisabled: N.has(v), isHalfSelected: x.has(v), treeState: o });
        }
      } catch (F) {
        A.e(F);
      } finally {
        A.f();
      }
    }
  }, [e, b, w, N, x, I, g, o]);
  var P, q, fe = (P = e, q = be(), Z(function() {
    q.current = P;
  }), q.current || /* @__PURE__ */ new Map());
  Z(function() {
    var E = ge(w, I);
    if (W) {
      var f, A = $(E);
      try {
        for (A.s(); !(f = A.n()).done; ) {
          var v = f.value;
          W({ element: O(e, v), isExpanded: w.has(v), isSelected: b.has(v), isDisabled: N.has(v), isHalfSelected: x.has(v), treeState: o });
        }
      } catch (K) {
        A.e(K);
      } finally {
        A.f();
      }
      if (fe !== e && h && c) {
        var F, B = $(w);
        try {
          for (B.s(); !(F = B.n()).done; ) {
            var z = F.value;
            b.has(z) && S({ type: re, ids: de(e, [z], N), select: !0, multiSelect: m, lastInteractedWith: z });
          }
        } catch (K) {
          B.e(K);
        } finally {
          B.f();
        }
      }
    }
  }, [e, b, w, N, x, I, W, o]), Z(function() {
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
  var he = ge(new Set(n), b);
  return Z(function() {
    if (n) {
      he.size && S({ type: tt, ids: n, multiSelect: m });
      var E, f = $(n);
      try {
        for (f.s(); !(E = f.n()).done; ) {
          var A = E.value;
          c && !N.has(A) && S({ type: re, ids: de(e, [A], N), select: !0, multiSelect: m, lastInteractedWith: A });
        }
      } catch (v) {
        f.e(v);
      } finally {
        f.f();
      }
    }
  }, [n]), Z(function() {
    var E = new Set(a), f = se(E, I), A = se(I, E);
    if (A.size) {
      var v, F = $(A);
      try {
        for (F.s(); !(v = F.n()).done; ) {
          var B = v.value;
          if (Y(e, B) || O(e, B).isBranch) {
            var z = [B].concat(ee(oe(e, B, /* @__PURE__ */ new Set())));
            S({ type: Ae, ids: z, lastInteractedWith: B });
          }
        }
      } catch (ue) {
        F.e(ue);
      } finally {
        F.f();
      }
    }
    if (f.size) {
      var K, X = $(f);
      try {
        for (X.s(); !(K = X.n()).done; ) {
          var C = K.value;
          if (Y(e, C) || O(e, C).isBranch) {
            var M = ie(e, C);
            S(M ? { type: _e, ids: [C, M], lastInteractedWith: C } : { type: we, id: C, lastInteractedWith: C });
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
      D && U !== J && U !== Be && U !== we && U !== Oe && E.add(D);
      var f = [];
      E.forEach(function(V) {
        e.find(function(We) {
          return We.id === V;
        }) || f.push(V);
      }), f.forEach(function(V) {
        return E.delete(V);
      });
      var A, v = function(V, We, je, ye, Ke, it) {
        var Ge, le = { every: /* @__PURE__ */ new Set(), some: /* @__PURE__ */ new Set(), none: /* @__PURE__ */ new Set() }, Ie = $(We);
        try {
          for (Ie.s(); !(Ge = Ie.n()).done; )
            for (var Te = Ge.value; ; ) {
              var ae = ie(V, Te);
              if (ae === 0 || ae == null || ae != null && ye.has(ae))
                break;
              var Ne = O(V, ae).children.filter(function(G) {
                return !ye.has(G);
              });
              if (Ne.length === 0)
                break;
              if (Ne.some(function(G) {
                return je.has(G) || le.some.has(G) && !le.none.has(G) || Ke.has(G) && !le.none.has(G);
              }))
                Ne.every(function(G) {
                  return je.has(G);
                }) ? le.every.add(ae) : le.some.add(ae);
              else {
                var Pe = vt(V, Te, ye).find(function(G) {
                  return je.has(G);
                });
                if (!it && Pe) {
                  oe(V, Pe, ye).forEach(function(G) {
                    Ke.has(G) && le.none.add(G);
                  });
                  break;
                }
                le.none.add(ae);
              }
              Te = ae;
            }
        } catch (G) {
          Ie.e(G);
        } finally {
          Ie.f();
        }
        return le;
      }(e, E, b, N, x, m), F = v.every, B = v.some, z = v.none, K = $(F);
      try {
        for (K.s(); !(A = K.n()).done; ) {
          var X = A.value;
          b.has(X) || S({ type: ve, id: X, multiSelect: m || gt(e, X, b), keepFocus: !0, NotUserAction: !0, lastInteractedWith: D });
        }
      } catch (V) {
        K.e(V);
      } finally {
        K.f();
      }
      var C, M = $(B);
      try {
        for (M.s(); !(C = M.n()).done; ) {
          var ue = C.value;
          x.has(ue) || S({ type: He, id: ue, lastInteractedWith: D, keepFocus: !0, NotUserAction: !0 });
        }
      } catch (V) {
        M.e(V);
      } finally {
        M.f();
      }
      var ze, Se = $(z);
      try {
        for (Se.s(); !(ze = Se.n()).done; ) {
          var xe = ze.value;
          (b.has(xe) || x.has(xe)) && S({ type: Qe, id: xe, multiSelect: m, keepFocus: !0, NotUserAction: !0, lastInteractedWith: D, lastManuallyToggled: y });
        }
      } catch (V) {
        Se.e(V);
      } finally {
        Se.f();
      }
    }
  }, [e, m, L, b, w, N, x, U, j, p, D, he]), Z(function() {
    if (D != null && H != null && (i == null ? void 0 : i.current) != null && (d == null ? void 0 : d.current) != null) {
      var E = i.current[H];
      (function(f) {
        f != null && f.scrollIntoView && f.scrollIntoView({ block: "nearest" });
      })(d.current[D]), function(f) {
        f != null && f.focus && f.focus({ preventScroll: !0 });
      }(E);
    }
  }, [H, i, d, D]), [o, S];
}, At = te.forwardRef(function(t, e) {
  var n = t.data, a = t.selectedIds, r = t.nodeRenderer, l = t.onSelect, s = l === void 0 ? ce : l, i = t.onNodeSelect, d = i === void 0 ? ce : i, u = t.onExpand, T = u === void 0 ? ce : u, g = t.onLoadData, W = t.className, h = W === void 0 ? "" : W, m = t.multiSelect, c = m !== void 0 && m, L = t.propagateSelect, R = L !== void 0 && L, _ = t.propagateSelectUpwards, o = _ !== void 0 && _, S = t.propagateCollapse, b = S !== void 0 && S, w = t.expandOnKeyboardSelect, N = w !== void 0 && w, H = t.togglableSelect, x = H !== void 0 && H, U = t.defaultExpandedIds, D = U === void 0 ? [] : U, y = t.defaultSelectedIds, j = y === void 0 ? [] : y, p = t.defaultDisabledIds, I = p === void 0 ? [] : p, P = t.clickAction, q = P === void 0 ? ne.select : P, fe = t.nodeAction, he = fe === void 0 ? "select" : fe, E = t.expandedIds, f = t.onBlur, A = Fe(t, ["data", "selectedIds", "nodeRenderer", "onSelect", "onNodeSelect", "onExpand", "onLoadData", "className", "multiSelect", "propagateSelect", "propagateSelectUpwards", "propagateCollapse", "expandOnKeyboardSelect", "togglableSelect", "defaultExpandedIds", "defaultSelectedIds", "defaultDisabledIds", "clickAction", "nodeAction", "expandedIds", "onBlur"]);
  (function(C) {
    if (qe(C.map(function(M) {
      return M.id;
    })))
      throw Error("Multiple TreeView nodes have the same ID. IDs must be unique.");
    if (C.forEach(function(M) {
      if (M.id === M.parent)
        throw Error("Node with id=".concat(M.id, " has parent reference to itself."));
      if (qe(M.children))
        throw Error("Node with id=".concat(M.id, " contains duplicate ids in its children."));
    }), C.filter(function(M) {
      return M.parent === null;
    }).length === 0)
      throw Error("TreeView must have one root node.");
    if (C.filter(function(M) {
      return M.parent === null;
    }).length > 1)
      throw Error("TreeView can have only one root node.");
    Q(C).children.length || console.warn("TreeView have no nodes to display.");
  })(n);
  var v = be({}), F = be({}), B = Je(Et({ data: n, controlledSelectedIds: a, controlledExpandedIds: E, defaultExpandedIds: D, defaultSelectedIds: j, defaultDisabledIds: I, nodeRefs: v, leafRefs: F, onSelect: s, onNodeSelect: d, onExpand: T, onLoadData: g, togglableSelect: x, multiSelect: c, propagateSelect: R, propagateSelectUpwards: o }), 2), z = B[0], K = B[1];
  R = R && c;
  var X = be(null);
  return e != null && (X = e), te.createElement("ul", Object.assign({ className: me(Ve.root, h), role: "tree", "aria-multiselectable": he === "select" ? c : void 0, ref: X, onBlur: function(C) {
    It(C, X.current, function() {
      f && f({ treeState: z, dispatch: K }), K({ type: Ze });
    });
  }, onKeyDown: Ot({ data: n, tabbableId: z.tabbableId, expandedIds: z.expandedIds, selectedIds: z.selectedIds, disabledIds: z.disabledIds, halfSelectedIds: z.halfSelectedIds, clickAction: q, dispatch: K, propagateCollapse: b, propagateSelect: R, multiSelect: c, expandOnKeyboardSelect: N, togglableSelect: x }) }, A), Q(n).children.map(function(C, M) {
    return te.createElement(dt, Object.assign({ key: "".concat(C, "-").concat(Le(C)), data: n, element: O(n, C), setsize: Q(n).children.length, posinset: M + 1, level: 1 }, z, { state: z, dispatch: K, nodeRefs: v, leafRefs: F, baseClassNames: Ve, nodeRenderer: r, propagateCollapse: b, propagateSelect: R, propagateSelectUpwards: o, multiSelect: c, togglableSelect: x, clickAction: q, nodeAction: he }));
  }));
}), Ot = function(t) {
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
        var R = h.key === "Home" ? Q(e).children[0] : Me(e, c, n), _ = lt({ data: e, expandedIds: n, from: c, to: R }).filter(function(j) {
          return !r.has(j);
        });
        s({ type: re, multiSelect: u, select: !0, ids: d ? de(e, _, r) : _ }), s({ type: J, id: R, lastInteractedWith: R });
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
          var b = pe(e, c, n);
          return void (b != null && s({ type: J, id: b, lastInteractedWith: b }));
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
            var H = ie(e, c);
            if (H == null)
              throw new Error("parentId of root element is null");
            s({ type: J, id: H, lastInteractedWith: H });
          }
          return;
        case "ArrowRight":
          return h.preventDefault(), void ((Y(e, c) || m.isBranch) && (n.has(l) ? s({ type: J, id: m.children[0], lastInteractedWith: m.children[0] }) : s({ type: we, id: c, lastInteractedWith: c })));
        case "Home":
          h.preventDefault(), s({ type: J, id: Q(e).children[0], lastInteractedWith: Q(e).children[0] });
          break;
        case "End":
          h.preventDefault();
          var x = Me(e, Q(e).id, n);
          return void s({ type: J, id: x, lastInteractedWith: x });
        case "*":
          h.preventDefault();
          var U = ie(e, c);
          if (U == null)
            throw new Error("parentId of element is null");
          var D = O(e, U).children.filter(function(j) {
            return Y(e, j) || O(e, j).isBranch;
          });
          return void s({ type: _e, ids: D, lastInteractedWith: c });
        case "Enter":
        case " ":
        case "Spacebar":
          return h.preventDefault(), W === ne.focus ? void 0 : (s({ type: g ? st(e, c, a, r) : ve, id: c, multiSelect: u, lastInteractedWith: c, lastManuallyToggled: c }), d && !r.has(m.id) && s({ type: re, ids: de(e, [c], r), select: !g || !a.has(c), multiSelect: u, lastInteractedWith: c, lastManuallyToggled: c }), void (T && s({ type: Oe, id: c, lastInteractedWith: c })));
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
At.propTypes = { data: k.array.isRequired, onSelect: k.func, onNodeSelect: k.func, onExpand: k.func, className: k.string, nodeRenderer: k.func.isRequired, defaultExpandedIds: k.array, defaultSelectedIds: k.array, expandedIds: k.array, selectedIds: k.array, defaultDisabledIds: k.array, propagateCollapse: k.bool, propagateSelect: k.bool, propagateSelectUpwards: k.bool, multiSelect: k.bool, expandOnKeyboardSelect: k.bool, togglableSelect: k.bool, nodeAction: k.oneOf(ht), clickAction: k.oneOf(ft), onBlur: k.func, onLoadData: k.func };
export {
  me as c,
  At as u
};
