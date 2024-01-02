import "../../../assets/AsyncTreeMenu.css";
import { jsx as ee, Fragment as Ye, jsxs as we } from "react/jsx-runtime";
import ne, { useRef as he, useReducer as vt, useEffect as Z, useState as Je } from "react";
import { G as xe, t as B, A as bt } from "../../../chunks/index.js";
import { g as St } from "../../../chunks/_commonjsHelpers.js";
function yt(t) {
  return xe({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z" } }] })(t);
}
function gt(t) {
  return xe({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM92 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H92z" } }] })(t);
}
function It(t) {
  return xe({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z" } }] })(t);
}
function mt(t) {
  return xe({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M192 128l128 128-128 128z" } }] })(t);
}
var et = { exports: {} };
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
        var c = arguments[s];
        c && (l = r(l, a(c)));
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
      for (var c in l)
        e.call(l, c) && l[c] && (s = r(s, c));
      return s;
    }
    function r(l, s) {
      return s ? l ? l + " " + s : l + s : l;
    }
    t.exports ? (n.default = n, t.exports = n) : window.classNames = n;
  })();
})(et);
var wt = et.exports;
const Se = /* @__PURE__ */ St(wt);
function Re(t) {
  return (Re = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(t);
}
function Le(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function tt(t, e) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(t) || function(n, a) {
    var r = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (r != null) {
      var l, s, c = [], d = !0, h = !1;
      try {
        for (r = r.call(n); !(d = (l = r.next()).done) && (c.push(l.value), !a || c.length !== a); d = !0)
          ;
      } catch (T) {
        h = !0, s = T;
      } finally {
        try {
          d || r.return == null || r.return();
        } finally {
          if (h)
            throw s;
        }
      }
      return c;
    }
  }(t, e) || He(t, e) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function te(t) {
  return function(e) {
    if (Array.isArray(e))
      return Ue(e);
  }(t) || function(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
      return Array.from(e);
  }(t) || He(t) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function He(t, e) {
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
function Y(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = He(t)) || e && t && typeof t.length == "number") {
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
  var l, s = !0, c = !1;
  return { s: function() {
    n = n.call(t);
  }, n: function() {
    var d = n.next();
    return s = d.done, d;
  }, e: function(d) {
    c = !0, l = d;
  }, f: function() {
    try {
      s || n.return == null || n.return();
    } finally {
      if (c)
        throw l;
    }
  } };
}
function ze(t, e) {
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
var Qe = { root: "tree", node: "tree-node", branch: "tree-node__branch", branchWrapper: "tree-branch-wrapper", leafListItem: "tree-leaf-list-item", leaf: "tree-node__leaf", nodeGroup: "tree-node-group" }, ae = { select: "SELECT", focus: "FOCUS", exclusiveSelect: "EXCLUSIVE_SELECT" }, Et = Object.freeze(Object.values(ae)), At = Object.freeze(Object.values({ check: "check", select: "select" })), _e = "COLLAPSE", We = "COLLAPSE_MANY", Ae = "EXPAND", Ge = "EXPAND_MANY", Ke = "HALF_SELECT", ye = "SELECT", nt = "DESELECT", je = "TOGGLE", Oe = "TOGGLE_SELECT", le = "SELECT_MANY", at = "EXCLUSIVE_CHANGE_SELECT_MANY", J = "FOCUS", rt = "BLUR", Ot = "DISABLE", xt = "ENABLE", lt = "CLEAR_MANUALLY_TOGGLED", st = "CONTROLLED_SELECT_MANY", dt = "UPDATE_TREE_STATE_WHEN_DATA_CHANGED", oe = function() {
}, ke = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return function(a) {
    for (var r = 0, l = e; r < l.length; r++) {
      var s = l[r];
      if (s && s(a), a.defaultPrevented)
        break;
    }
  };
}, de = function(t, e) {
  var n, a = /* @__PURE__ */ new Set(), r = Y(t);
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
}, Ee = function(t, e) {
  return new Set([].concat(te(de(t, e)), te(de(e, t))));
}, Xe = function(t) {
  var e = he();
  return Z(function() {
    e.current = t;
  }, [t]), e.current;
}, q = function(t, e) {
  var n;
  return !!(!((n = W(t, e).children) === null || n === void 0) && n.length);
}, ce = function(t, e) {
  return W(t, e).parent;
}, Wt = function(t, e, n) {
  for (var a = e, r = []; ; ) {
    var l = ce(t, a);
    if (l === 0 || l == null || l != null && n.has(l))
      break;
    r.push(l), a = l;
  }
  return r;
}, ue = function(t, e, n) {
  var a = [];
  return function r(l, s) {
    var c = W(l, s);
    if (c.children != null) {
      var d, h = Y(c.children.filter(function(A) {
        return !n.has(A);
      }));
      try {
        for (h.s(); !(d = h.n()).done; ) {
          var T = d.value;
          a.push(T), r(l, T);
        }
      } catch (A) {
        h.e(A);
      } finally {
        h.f();
      }
    }
  }(t, e), a;
}, it = function(t, e) {
  var n = W(t, e);
  return n.children == null ? [] : n.children;
}, ct = function(t, e, n) {
  var a = ce(t, e);
  if (a != null) {
    var r = W(t, a), l = r.children.indexOf(e) + n;
    if (r.children[l])
      return r.children[l];
  }
  return null;
}, Be = function(t, e, n) {
  var a = W(t, e);
  for (Q(t).id === e && (a = W(t, W(t, e).children[W(t, e).children.length - 1])); n.has(a.id) && q(t, a.id); )
    a = W(t, a.children[a.children.length - 1]);
  return a.id;
}, Fe = function(t, e, n) {
  if (e === Q(t).children[0])
    return null;
  var a = ct(t, e, -1);
  return a == null ? ce(t, e) : Be(t, a, n);
}, be = function(t, e, n) {
  var a = W(t, e).id;
  if (q(t, a) && n.has(a))
    return W(t, a).children[0];
  for (; ; ) {
    var r = ct(t, a, 1);
    if (r != null)
      return r;
    if ((a = ce(t, a)) == null)
      return null;
  }
}, ot = function(t) {
  var e = t.data, n = t.expandedIds, a = t.from, r = t.to, l = [], s = e.length, c = 0, d = a;
  if (l.push(a), a < r)
    for (; c < s && ((d = be(e, d, n)) != null && l.push(d), d != null && d !== r); )
      c += 1;
  else if (a > r)
    for (; c < s && ((d = Fe(e, d, n)) != null && l.push(d), d != null && d !== r); )
      c += 1;
  return l;
}, jt = function(t) {
  var e = t.isSelected, n = t.isDisabled, a = t.multiSelect;
  return n || a ? e : !!e || void 0;
}, Nt = function(t) {
  var e = t.isSelected, n = t.isDisabled, a = t.isHalfSelected, r = t.multiSelect;
  return n ? e : a ? "mixed" : r ? e : !!e || void 0;
}, ie = function(t, e, n) {
  return e.concat.apply(e, te(e.filter(function(a) {
    return q(t, a);
  }).map(function(a) {
    return ue(t, a, n);
  })));
}, Tt = function(t, e, n) {
  e != null ? window.navigator.userAgent.match(/Trident/) ? setTimeout(function() {
    return !e.contains(document.activeElement) && n();
  }, 0) : !e.contains(t.nativeEvent.relatedTarget) && n() : console.warn("ref not set on <ul>");
}, Ct = function(t, e, n) {
  var a = it(t, e);
  return q(t, e) && !n.has(e) && a.length === 1 && a.every(function(r) {
    return n.has(r);
  });
}, ut = function(t, e, n, a) {
  var r = function(s, c, d) {
    return q(s, c) && d.has(c) && ue(s, c, /* @__PURE__ */ new Set()).some(function(h) {
      return d.has(h);
    });
  }(t, e, n), l = function(s, c, d) {
    var h = it(s, c);
    return q(s, c) && d.has(c) && h.length === 1 && h.every(function(T) {
      return d.has(T);
    });
  }(t, e, n);
  return function(s, c, d, h) {
    var T = ue(s, c, /* @__PURE__ */ new Set());
    return q(s, c) && d.has(c) && T.every(function(A) {
      return d.has(A);
    }) && T.every(function(A) {
      return !h.has(A);
    });
  }(t, e, n, a) ? Oe : r && !l ? Ke : Oe;
}, Q = function(t) {
  var e = t.find(function(n) {
    return n.parent === null;
  });
  if (!e)
    throw Error("TreeView data must contain parent node.");
  return e;
}, W = function(t, e) {
  var n = t.find(function(a) {
    return a.id === e;
  });
  if (n == null)
    throw Error("Node with id=".concat(e, " doesn't exist in the tree."));
  return n;
}, Ze = function(t) {
  var e = Array.from(new Set(t));
  return t.length !== e.length;
}, Dt = function(t, e) {
  switch (e.type) {
    case _e:
      var n = new Set(t.expandedIds);
      return n.delete(e.id), Object.assign(Object.assign({}, t), { expandedIds: n, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case We:
      var a, r = new Set(t.expandedIds), l = Y(e.ids);
      try {
        for (l.s(); !(a = l.n()).done; ) {
          var s = a.value;
          r.delete(s);
        }
      } catch ($) {
        l.e($);
      } finally {
        l.f();
      }
      return Object.assign(Object.assign({}, t), { expandedIds: r, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Ae:
      var c = new Set(t.expandedIds);
      return c.add(e.id), Object.assign(Object.assign({}, t), { expandedIds: c, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Ge:
      var d = new Set([].concat(te(t.expandedIds), te(e.ids)));
      return Object.assign(Object.assign({}, t), { expandedIds: d, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case je:
      var h = new Set(t.expandedIds);
      return t.expandedIds.has(e.id) ? h.delete(e.id) : h.add(e.id), Object.assign(Object.assign({}, t), { expandedIds: h, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Ke:
      if (t.disabledIds.has(e.id))
        return t;
      var T = new Set(t.halfSelectedIds), A = new Set(t.selectedIds);
      return T.add(e.id), A.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: A, halfSelectedIds: T, tabbableId: e.keepFocus ? t.tabbableId : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id });
    case ye:
      if (!e.NotUserAction && t.disabledIds.has(e.id))
        return t;
      var f;
      e.multiSelect ? (f = new Set(t.selectedIds)).add(e.id) : (f = /* @__PURE__ */ new Set()).add(e.id);
      var o = new Set(t.halfSelectedIds);
      return o.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: f, halfSelectedIds: o, tabbableId: e.keepFocus ? t.tabbableId : e.id, isFocused: e.NotUserAction !== !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case nt:
      if (!e.NotUserAction && t.disabledIds.has(e.id))
        return t;
      var p, i = new Set(t.selectedIds);
      return i.delete(e.id), e.multiSelect ? (p = new Set(t.halfSelectedIds)).delete(e.id) : p = /* @__PURE__ */ new Set(), Object.assign(Object.assign({}, t), { selectedIds: i, halfSelectedIds: p, tabbableId: e.keepFocus ? t.tabbableId : e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case Oe:
      if (t.disabledIds.has(e.id))
        return t;
      var g, C = t.selectedIds.has(e.id);
      e.multiSelect ? (g = new Set(t.selectedIds), C ? g.delete(e.id) : g.add(e.id)) : (g = /* @__PURE__ */ new Set(), C || g.add(e.id));
      var F = new Set(t.halfSelectedIds);
      return F.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: g, halfSelectedIds: F, tabbableId: e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case le:
      var u, I = e.ids.filter(function($) {
        return !t.disabledIds.has($);
      });
      if (e.multiSelect) {
        u = e.select ? new Set([].concat(te(t.selectedIds), te(I))) : de(t.selectedIds, new Set(I));
        var b = de(t.halfSelectedIds, u);
        return Object.assign(Object.assign({}, t), { selectedIds: u, halfSelectedIds: b, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case at:
      var y, j = e.ids.filter(function($) {
        return !t.disabledIds.has($);
      });
      if (e.multiSelect) {
        y = e.select ? new Set(j) : de(t.selectedIds, new Set(j));
        var z = de(t.halfSelectedIds, y);
        return Object.assign(Object.assign({}, t), { selectedIds: y, halfSelectedIds: z, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case st:
      var N, k = t.lastInteractedWith, M = t.tabbableId;
      if (e.multiSelect)
        N = new Set(e.ids), e.ids.length && (k = e.ids[e.ids.length - 1], M = e.ids[e.ids.length - 1]);
      else {
        N = /* @__PURE__ */ new Set(), e.ids.length > 1 && console.warn("Tree in singleSelect mode, only the first item from selectedIds will be selected.");
        var w = e.ids[0];
        w && N.add(w), k = w ?? k, M = w ?? k;
      }
      var D = new Set(t.halfSelectedIds);
      e.ids.every(function($) {
        return D.delete($);
      });
      var S = new Set(e.ids);
      return Object.assign(Object.assign({}, t), { selectedIds: N, halfSelectedIds: D, controlledIds: S, isFocused: !0, lastAction: e.type, tabbableId: M, lastInteractedWith: k });
    case J:
      return Object.assign(Object.assign({}, t), { tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case rt:
      return Object.assign(Object.assign({}, t), { isFocused: !1 });
    case Ot:
      var E = new Set(t.disabledIds);
      return E.add(e.id), Object.assign(Object.assign({}, t), { disabledIds: E });
    case xt:
      var P = new Set(t.disabledIds);
      return P.delete(e.id), Object.assign(Object.assign({}, t), { disabledIds: P });
    case lt:
      return Object.assign(Object.assign({}, t), { lastManuallyToggled: null });
    case dt:
      return Object.assign(Object.assign({}, t), { tabbableId: e.tabbableId, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.lastUserSelect });
    default:
      throw new Error("Invalid action passed to the reducer");
  }
}, ft = function(t) {
  var e = t.element, n = t.dispatch, a = t.data, r = t.selectedIds, l = t.tabbableId, s = t.isFocused, c = t.expandedIds, d = t.disabledIds, h = t.halfSelectedIds, T = t.lastUserSelect, A = t.nodeRefs, f = t.leafRefs, o = t.baseClassNames, p = t.nodeRenderer, i = t.nodeAction, g = t.setsize, C = t.posinset, F = t.level, u = t.propagateCollapse, I = t.propagateSelect, b = t.multiSelect, y = t.togglableSelect, j = t.clickAction, z = t.state, N = function(S) {
    if (!(S.ctrlKey || S.altKey || S.shiftKey))
      if (c.has(e.id) && u) {
        var E = [e.id].concat(te(ue(a, e.id, /* @__PURE__ */ new Set())));
        n({ type: We, ids: E, lastInteractedWith: e.id });
      } else
        n({ type: je, id: e.id, lastInteractedWith: e.id });
  }, k = function() {
    return n({ type: J, id: e.id, lastInteractedWith: e.id });
  }, M = function(S) {
    if (S.shiftKey) {
      var E = ot({ data: a, expandedIds: c, from: T, to: e.id }).filter(function(P) {
        return !d.has(P);
      });
      E = I ? ie(a, E, d) : E, n({ type: at, select: !0, multiSelect: b, ids: E, lastInteractedWith: e.id, lastManuallyToggled: e.id });
    } else
      S.ctrlKey || j === ae.select ? (n({ type: y ? ut(a, e.id, r, d) : ye, id: e.id, multiSelect: b, lastInteractedWith: e.id, lastManuallyToggled: e.id }), I && !d.has(e.id) && n({ type: le, ids: ie(a, [e.id], d), select: !y || !r.has(e.id), multiSelect: b, lastInteractedWith: e.id, lastManuallyToggled: e.id })) : j === ae.exclusiveSelect ? n({ type: y ? Oe : ye, id: e.id, multiSelect: !1, lastInteractedWith: e.id, lastManuallyToggled: e.id }) : j === ae.focus && n({ type: J, id: e.id, lastInteractedWith: e.id });
  }, w = function(S) {
    var E;
    return Se(S, (Le(E = {}, "".concat(S, "--expanded"), c.has(e.id)), Le(E, "".concat(S, "--selected"), r.has(e.id)), Le(E, "".concat(S, "--focused"), l === e.id && s), E));
  }, D = i === "select" ? { "aria-selected": jt({ isSelected: r.has(e.id), isDisabled: d.has(e.id), multiSelect: b }) } : { "aria-checked": Nt({ isSelected: r.has(e.id), isDisabled: d.has(e.id), isHalfSelected: h.has(e.id), multiSelect: b }) };
  return q(a, e.id) || e.isBranch ? ne.createElement("li", Object.assign({ role: "treeitem", "aria-expanded": c.has(e.id), "aria-setsize": g, "aria-posinset": C, "aria-level": F, "aria-disabled": d.has(e.id), tabIndex: l === e.id ? 0 : -1, ref: function(S) {
    (A == null ? void 0 : A.current) != null && S != null && (A.current[e.id] = S);
  }, className: o.branchWrapper }, D), ne.createElement(ne.Fragment, null, p({ element: e, isBranch: !0, isSelected: r.has(e.id), isHalfSelected: h.has(e.id), isExpanded: c.has(e.id), isDisabled: d.has(e.id), dispatch: n, getNodeProps: function() {
    var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, E = S.onClick;
    return { onClick: E == null ? ke(M, N, k) : ke(E, k), className: Se(w(o.node), o.branch), ref: function(P) {
      (f == null ? void 0 : f.current) != null && (f.current[e.id] = P);
    } };
  }, setsize: g, posinset: C, level: F, handleSelect: M, handleExpand: N, treeState: z }), ne.createElement(Mt, Object.assign({ getClasses: w }, function(S) {
    return S.setsize, S.posinset, ze(S, ["setsize", "posinset"]);
  }(t))))) : ne.createElement("li", { role: "none", className: w(o.leafListItem) }, p({ element: e, isBranch: !1, isSelected: r.has(e.id), isHalfSelected: !1, isExpanded: !1, isDisabled: d.has(e.id), dispatch: n, getNodeProps: function() {
    var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, E = S.onClick;
    return Object.assign({ role: "treeitem", tabIndex: l === e.id ? 0 : -1, onClick: ke(E ?? M, k), ref: function(P) {
      (A == null ? void 0 : A.current) != null && (f == null ? void 0 : f.current) != null && (A.current[e.id] = P, f.current[e.id] = P);
    }, className: Se(w(o.node), o.leaf), "aria-setsize": g, "aria-posinset": C, "aria-level": F, disabled: d.has(e.id), "aria-disabled": d.has(e.id) }, D);
  }, setsize: g, posinset: C, level: F, handleSelect: M, handleExpand: oe, treeState: z }));
}, Mt = function(t) {
  var e = t.data, n = t.element, a = t.expandedIds, r = t.getClasses, l = t.baseClassNames, s = t.level, c = ze(t, ["data", "element", "expandedIds", "getClasses", "baseClassNames", "level"]);
  return ne.createElement("ul", { role: "group", className: r(l.nodeGroup) }, a.has(n.id) && n.children.length > 0 && n.children.map(function(d, h) {
    return ne.createElement(ft, Object.assign({ data: e, expandedIds: a, baseClassNames: l, key: "".concat(d, "-").concat(Re(d)), element: W(e, d), setsize: n.children.length, posinset: h + 1, level: s + 1 }, c));
  }));
}, Lt = function(t) {
  var e = t.data, n = t.controlledSelectedIds, a = t.controlledExpandedIds, r = t.defaultExpandedIds, l = t.defaultSelectedIds, s = t.defaultDisabledIds, c = t.nodeRefs, d = t.leafRefs, h = t.onSelect, T = t.onNodeSelect, A = t.onExpand, f = t.onLoadData, o = t.togglableSelect, p = t.multiSelect, i = t.propagateSelect, g = t.propagateSelectUpwards, C = Q(e), F = tt(vt(Dt, { selectedIds: new Set(n || l), controlledIds: new Set(n), tabbableId: C.children[0], isFocused: !1, expandedIds: new Set(a || r), halfSelectedIds: /* @__PURE__ */ new Set(), lastUserSelect: C.children[0], lastInteractedWith: null, lastManuallyToggled: null, disabledIds: new Set(s) }), 2), u = F[0], I = F[1], b = u.selectedIds, y = u.expandedIds, j = u.disabledIds, z = u.tabbableId, N = u.halfSelectedIds, k = u.lastAction, M = u.lastInteractedWith, w = u.lastManuallyToggled, D = Xe(b) || /* @__PURE__ */ new Set(), S = Ee(b, D);
  Z(function() {
    var O;
    if (h != null && h !== oe) {
      var v, x = Y(S);
      try {
        for (x.s(); !(v = x.n()).done; ) {
          var m = v.value, R = q(e, m) || !!(!((O = W(e, z)) === null || O === void 0) && O.isBranch);
          h({ element: W(e, m), isBranch: R, isExpanded: !!R && y.has(m), isSelected: b.has(m), isDisabled: j.has(m), isHalfSelected: !!R && N.has(m), treeState: u });
        }
      } catch (H) {
        x.e(H);
      } finally {
        x.f();
      }
    }
  }, [e, b, y, j, N, S, h, u]), Z(function() {
    T != null && T !== oe && w != null && S.size && (T({ element: W(e, w), isSelected: b.has(w), isBranch: q(e, w), treeState: u }), I({ type: lt }));
  }, [w, b, S]);
  var E = Xe(y) || /* @__PURE__ */ new Set();
  Z(function() {
    var O = Ee(y, E);
    if (A != null && A !== oe) {
      var v, x = Y(O);
      try {
        for (x.s(); !(v = x.n()).done; ) {
          var m = v.value;
          A({ element: W(e, m), isExpanded: y.has(m), isSelected: b.has(m), isDisabled: j.has(m), isHalfSelected: N.has(m), treeState: u });
        }
      } catch (R) {
        x.e(R);
      } finally {
        x.f();
      }
    }
  }, [e, b, y, j, N, E, A, u]);
  var P, $, pe = (P = e, $ = he(), Z(function() {
    $.current = P;
  }), $.current || /* @__PURE__ */ new Map());
  Z(function() {
    var O = Ee(y, E);
    if (f) {
      var v, x = Y(O);
      try {
        for (x.s(); !(v = x.n()).done; ) {
          var m = v.value;
          f({ element: W(e, m), isExpanded: y.has(m), isSelected: b.has(m), isDisabled: j.has(m), isHalfSelected: N.has(m), treeState: u });
        }
      } catch (G) {
        x.e(G);
      } finally {
        x.f();
      }
      if (pe !== e && o && i) {
        var R, H = Y(y);
        try {
          for (H.s(); !(R = H.n()).done; ) {
            var _ = R.value;
            b.has(_) && I({ type: le, ids: ie(e, [_], j), select: !0, multiSelect: p, lastInteractedWith: _ });
          }
        } catch (G) {
          H.e(G);
        } finally {
          H.f();
        }
      }
    }
  }, [e, b, y, j, N, E, f, u]), Z(function() {
    if (pe !== e) {
      var O = Q(e);
      O.children.length && I({ type: dt, tabbableId: e.find(function(v) {
        return v.id === u.tabbableId;
      }) ? u.tabbableId : O.children[0], lastInteractedWith: e.find(function(v) {
        return v.id === u.lastInteractedWith;
      }) ? u.lastInteractedWith : null, lastManuallyToggled: e.find(function(v) {
        return v.id === u.lastManuallyToggled;
      }) ? u.lastManuallyToggled : null, lastUserSelect: e.find(function(v) {
        return v.id === u.lastUserSelect;
      }) ? u.lastUserSelect : O.children[0] });
    }
  }, [e]);
  var ve = Ee(new Set(n), b);
  return Z(function() {
    if (n) {
      ve.size && I({ type: st, ids: n, multiSelect: p });
      var O, v = Y(n);
      try {
        for (v.s(); !(O = v.n()).done; ) {
          var x = O.value;
          i && !j.has(x) && I({ type: le, ids: ie(e, [x], j), select: !0, multiSelect: p, lastInteractedWith: x });
        }
      } catch (m) {
        v.e(m);
      } finally {
        v.f();
      }
    }
  }, [n]), Z(function() {
    var O = new Set(a), v = de(O, E), x = de(E, O);
    if (x.size) {
      var m, R = Y(x);
      try {
        for (R.s(); !(m = R.n()).done; ) {
          var H = m.value;
          if (q(e, H) || W(e, H).isBranch) {
            var _ = [H].concat(te(ue(e, H, /* @__PURE__ */ new Set())));
            I({ type: We, ids: _, lastInteractedWith: H });
          }
        }
      } catch (fe) {
        R.e(fe);
      } finally {
        R.f();
      }
    }
    if (v.size) {
      var G, X = Y(v);
      try {
        for (X.s(); !(G = X.n()).done; ) {
          var L = G.value;
          if (q(e, L) || W(e, L).isBranch) {
            var U = ce(e, L);
            I(U ? { type: Ge, ids: [L, U], lastInteractedWith: L } : { type: Ae, id: L, lastInteractedWith: L });
          }
        }
      } catch (fe) {
        X.e(fe);
      } finally {
        X.f();
      }
    }
  }, [a]), Z(function() {
    if (g) {
      var O = new Set(te(S));
      M && k !== J && k !== _e && k !== Ae && k !== je && O.add(M);
      var v = [];
      O.forEach(function(V) {
        e.find(function(Te) {
          return Te.id === V;
        }) || v.push(V);
      }), v.forEach(function(V) {
        return O.delete(V);
      });
      var x, m = function(V, Te, Ce, Ie, Ve, pt) {
        var qe, se = { every: /* @__PURE__ */ new Set(), some: /* @__PURE__ */ new Set(), none: /* @__PURE__ */ new Set() }, me = Y(Te);
        try {
          for (me.s(); !(qe = me.n()).done; )
            for (var De = qe.value; ; ) {
              var re = ce(V, De);
              if (re === 0 || re == null || re != null && Ie.has(re))
                break;
              var Me = W(V, re).children.filter(function(K) {
                return !Ie.has(K);
              });
              if (Me.length === 0)
                break;
              if (Me.some(function(K) {
                return Ce.has(K) || se.some.has(K) && !se.none.has(K) || Ve.has(K) && !se.none.has(K);
              }))
                Me.every(function(K) {
                  return Ce.has(K);
                }) ? se.every.add(re) : se.some.add(re);
              else {
                var $e = Wt(V, De, Ie).find(function(K) {
                  return Ce.has(K);
                });
                if (!pt && $e) {
                  ue(V, $e, Ie).forEach(function(K) {
                    Ve.has(K) && se.none.add(K);
                  });
                  break;
                }
                se.none.add(re);
              }
              De = re;
            }
        } catch (K) {
          me.e(K);
        } finally {
          me.f();
        }
        return se;
      }(e, O, b, j, N, p), R = m.every, H = m.some, _ = m.none, G = Y(R);
      try {
        for (G.s(); !(x = G.n()).done; ) {
          var X = x.value;
          b.has(X) || I({ type: ye, id: X, multiSelect: p || Ct(e, X, b), keepFocus: !0, NotUserAction: !0, lastInteractedWith: M });
        }
      } catch (V) {
        G.e(V);
      } finally {
        G.f();
      }
      var L, U = Y(H);
      try {
        for (U.s(); !(L = U.n()).done; ) {
          var fe = L.value;
          N.has(fe) || I({ type: Ke, id: fe, lastInteractedWith: M, keepFocus: !0, NotUserAction: !0 });
        }
      } catch (V) {
        U.e(V);
      } finally {
        U.f();
      }
      var Pe, ge = Y(_);
      try {
        for (ge.s(); !(Pe = ge.n()).done; ) {
          var Ne = Pe.value;
          (b.has(Ne) || N.has(Ne)) && I({ type: nt, id: Ne, multiSelect: p, keepFocus: !0, NotUserAction: !0, lastInteractedWith: M, lastManuallyToggled: w });
        }
      } catch (V) {
        ge.e(V);
      } finally {
        ge.f();
      }
    }
  }, [e, p, g, b, y, j, N, k, D, S, M, ve]), Z(function() {
    if (M != null && z != null && (c == null ? void 0 : c.current) != null && (d == null ? void 0 : d.current) != null) {
      var O = c.current[z];
      (function(v) {
        v != null && v.scrollIntoView && v.scrollIntoView({ block: "nearest" });
      })(d.current[M]), function(v) {
        v != null && v.focus && v.focus({ preventScroll: !0 });
      }(O);
    }
  }, [z, c, d, M]), [u, I];
}, ht = ne.forwardRef(function(t, e) {
  var n = t.data, a = t.selectedIds, r = t.nodeRenderer, l = t.onSelect, s = l === void 0 ? oe : l, c = t.onNodeSelect, d = c === void 0 ? oe : c, h = t.onExpand, T = h === void 0 ? oe : h, A = t.onLoadData, f = t.className, o = f === void 0 ? "" : f, p = t.multiSelect, i = p !== void 0 && p, g = t.propagateSelect, C = g !== void 0 && g, F = t.propagateSelectUpwards, u = F !== void 0 && F, I = t.propagateCollapse, b = I !== void 0 && I, y = t.expandOnKeyboardSelect, j = y !== void 0 && y, z = t.togglableSelect, N = z !== void 0 && z, k = t.defaultExpandedIds, M = k === void 0 ? [] : k, w = t.defaultSelectedIds, D = w === void 0 ? [] : w, S = t.defaultDisabledIds, E = S === void 0 ? [] : S, P = t.clickAction, $ = P === void 0 ? ae.select : P, pe = t.nodeAction, ve = pe === void 0 ? "select" : pe, O = t.expandedIds, v = t.onBlur, x = ze(t, ["data", "selectedIds", "nodeRenderer", "onSelect", "onNodeSelect", "onExpand", "onLoadData", "className", "multiSelect", "propagateSelect", "propagateSelectUpwards", "propagateCollapse", "expandOnKeyboardSelect", "togglableSelect", "defaultExpandedIds", "defaultSelectedIds", "defaultDisabledIds", "clickAction", "nodeAction", "expandedIds", "onBlur"]);
  (function(L) {
    if (Ze(L.map(function(U) {
      return U.id;
    })))
      throw Error("Multiple TreeView nodes have the same ID. IDs must be unique.");
    if (L.forEach(function(U) {
      if (U.id === U.parent)
        throw Error("Node with id=".concat(U.id, " has parent reference to itself."));
      if (Ze(U.children))
        throw Error("Node with id=".concat(U.id, " contains duplicate ids in its children."));
    }), L.filter(function(U) {
      return U.parent === null;
    }).length === 0)
      throw Error("TreeView must have one root node.");
    if (L.filter(function(U) {
      return U.parent === null;
    }).length > 1)
      throw Error("TreeView can have only one root node.");
    Q(L).children.length || console.warn("TreeView have no nodes to display.");
  })(n);
  var m = he({}), R = he({}), H = tt(Lt({ data: n, controlledSelectedIds: a, controlledExpandedIds: O, defaultExpandedIds: M, defaultSelectedIds: D, defaultDisabledIds: E, nodeRefs: m, leafRefs: R, onSelect: s, onNodeSelect: d, onExpand: T, onLoadData: A, togglableSelect: N, multiSelect: i, propagateSelect: C, propagateSelectUpwards: u }), 2), _ = H[0], G = H[1];
  C = C && i;
  var X = he(null);
  return e != null && (X = e), ne.createElement("ul", Object.assign({ className: Se(Qe.root, o), role: "tree", "aria-multiselectable": ve === "select" ? i : void 0, ref: X, onBlur: function(L) {
    Tt(L, X.current, function() {
      v && v({ treeState: _, dispatch: G }), G({ type: rt });
    });
  }, onKeyDown: kt({ data: n, tabbableId: _.tabbableId, expandedIds: _.expandedIds, selectedIds: _.selectedIds, disabledIds: _.disabledIds, halfSelectedIds: _.halfSelectedIds, clickAction: $, dispatch: G, propagateCollapse: b, propagateSelect: C, multiSelect: i, expandOnKeyboardSelect: j, togglableSelect: N }) }, x), Q(n).children.map(function(L, U) {
    return ne.createElement(ft, Object.assign({ key: "".concat(L, "-").concat(Re(L)), data: n, element: W(n, L), setsize: Q(n).children.length, posinset: U + 1, level: 1 }, _, { state: _, dispatch: G, nodeRefs: m, leafRefs: R, baseClassNames: Qe, nodeRenderer: r, propagateCollapse: b, propagateSelect: C, propagateSelectUpwards: u, multiSelect: i, togglableSelect: N, clickAction: $, nodeAction: ve }));
  }));
}), kt = function(t) {
  var e = t.data, n = t.expandedIds, a = t.selectedIds, r = t.disabledIds, l = t.tabbableId, s = t.dispatch, c = t.propagateCollapse, d = t.propagateSelect, h = t.multiSelect, T = t.expandOnKeyboardSelect, A = t.togglableSelect, f = t.clickAction;
  return function(o) {
    var p = W(e, l), i = p.id;
    if (o.ctrlKey) {
      if (o.key === "a" && f !== ae.focus) {
        o.preventDefault();
        var g = e.filter(function(D) {
          return D.parent !== null;
        }).map(function(D) {
          return D.id;
        }).filter(function(D) {
          return !r.has(D);
        });
        s({ type: le, multiSelect: h, select: Array.from(a).filter(function(D) {
          return !r.has(D);
        }).length !== g.length, ids: g, lastInteractedWith: p.id });
      } else if (o.shiftKey && (o.key === "Home" || o.key === "End") && f !== ae.focus) {
        var C = o.key === "Home" ? Q(e).children[0] : Be(e, i, n), F = ot({ data: e, expandedIds: n, from: i, to: C }).filter(function(D) {
          return !r.has(D);
        });
        s({ type: le, multiSelect: h, select: !0, ids: d ? ie(e, F, r) : F }), s({ type: J, id: C, lastInteractedWith: C });
      }
    } else {
      if (o.shiftKey)
        switch (o.key) {
          case "ArrowUp":
            o.preventDefault();
            var u = Fe(e, i, n);
            return void (u == null || r.has(u) || (f !== ae.focus && s({ type: le, ids: d ? ie(e, [u], r) : [u], select: !0, multiSelect: h, lastInteractedWith: u, lastManuallyToggled: u }), s({ type: J, id: u, lastInteractedWith: u })));
          case "ArrowDown":
            o.preventDefault();
            var I = be(e, i, n);
            return void (I == null || r.has(I) || (f !== ae.focus && s({ type: le, ids: d ? ie(e, [I], r) : [I], multiSelect: h, select: !0, lastInteractedWith: I, lastManuallyToggled: I }), s({ type: J, id: I, lastInteractedWith: I })));
        }
      switch (o.key) {
        case "ArrowDown":
          o.preventDefault();
          var b = be(e, i, n);
          return void (b != null && s({ type: J, id: b, lastInteractedWith: b }));
        case "ArrowUp":
          o.preventDefault();
          var y = Fe(e, i, n);
          return void (y != null && s({ type: J, id: y, lastInteractedWith: y }));
        case "ArrowLeft":
          if (o.preventDefault(), (q(e, i) || p.isBranch) && n.has(l))
            if (c) {
              var j = [i].concat(te(ue(e, i, /* @__PURE__ */ new Set())));
              s({ type: We, ids: j, lastInteractedWith: p.id });
            } else
              s({ type: _e, id: i, lastInteractedWith: i });
          else if (!Q(e).children.includes(i)) {
            var z = ce(e, i);
            if (z == null)
              throw new Error("parentId of root element is null");
            s({ type: J, id: z, lastInteractedWith: z });
          }
          return;
        case "ArrowRight":
          return o.preventDefault(), void ((q(e, i) || p.isBranch) && (n.has(l) ? s({ type: J, id: p.children[0], lastInteractedWith: p.children[0] }) : s({ type: Ae, id: i, lastInteractedWith: i })));
        case "Home":
          o.preventDefault(), s({ type: J, id: Q(e).children[0], lastInteractedWith: Q(e).children[0] });
          break;
        case "End":
          o.preventDefault();
          var N = Be(e, Q(e).id, n);
          return void s({ type: J, id: N, lastInteractedWith: N });
        case "*":
          o.preventDefault();
          var k = ce(e, i);
          if (k == null)
            throw new Error("parentId of element is null");
          var M = W(e, k).children.filter(function(D) {
            return q(e, D) || W(e, D).isBranch;
          });
          return void s({ type: Ge, ids: M, lastInteractedWith: i });
        case "Enter":
        case " ":
        case "Spacebar":
          return o.preventDefault(), f === ae.focus ? void 0 : (s({ type: A ? ut(e, i, a, r) : ye, id: i, multiSelect: h, lastInteractedWith: i, lastManuallyToggled: i }), d && !r.has(p.id) && s({ type: le, ids: ie(e, [i], r), select: !A || !a.has(i), multiSelect: h, lastInteractedWith: i, lastManuallyToggled: i }), void (T && s({ type: je, id: i, lastInteractedWith: i })));
        default:
          if (o.key.length === 1)
            for (var w = be(e, i, n); w !== i; )
              if (w != null) {
                if (W(e, w).name[0].toLowerCase() === o.key.toLowerCase())
                  return void s({ type: J, id: w, lastInteractedWith: i });
                w = be(e, w, n);
              } else
                w = Q(e).children[0];
          return;
      }
    }
  };
};
ht.propTypes = { data: B.array.isRequired, onSelect: B.func, onNodeSelect: B.func, onExpand: B.func, className: B.string, nodeRenderer: B.func.isRequired, defaultExpandedIds: B.array, defaultSelectedIds: B.array, expandedIds: B.array, selectedIds: B.array, defaultDisabledIds: B.array, propagateCollapse: B.bool, propagateSelect: B.bool, propagateSelectUpwards: B.bool, multiSelect: B.bool, expandOnKeyboardSelect: B.bool, togglableSelect: B.bool, nodeAction: B.oneOf(At), clickAction: B.oneOf(Et), onBlur: B.func, onLoadData: B.func };
function Gt(t) {
  const e = he(null);
  let n = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [a, r] = Je([n]), [l, s] = Je([]), c = t.store, d = (f, o, p) => f.map((g) => (g.id === o && (g.loaded = !0, g.children = p.map((C) => C.id)), g)).concat(p), h = (f, o) => f.map((i) => {
    const g = i.children || "";
    return {
      id: i.id,
      name: i.name,
      parent: o,
      children: [],
      isBranch: g.length > 0,
      loaded: !1
    };
  });
  Z(() => {
    c.getRoot().then((f) => {
      var o = h(f.result, -1);
      const p = d(a, -1, o);
      r(p);
    });
  }, []);
  const T = ({ element: f }) => {
    console.log(f.id);
    const o = f.id;
    return c.getChildren({ parent: o }).then((p) => {
      var i = h(p.result, o);
      const g = d(a, o, i);
      r(g);
    });
  };
  return /* @__PURE__ */ ee(Ye, { children: /* @__PURE__ */ we("div", { children: [
    /* @__PURE__ */ ee(
      "div",
      {
        className: "visually-hidden",
        ref: e,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ ee("div", { className: "checkbox", children: /* @__PURE__ */ ee(
      ht,
      {
        data: a,
        "aria-label": "Checkbox tree",
        onLoadData: async (f) => {
          console.log(f);
          const o = f.element.children.length === 0, p = l.find(
            (i) => i.id === f.element.id
          );
          if (f.element.loaded || await T(f), o && !p) {
            const i = e.current;
            s([...l, f.element]), i && (i.innerHTML = `${f.element.name} loaded`), setTimeout(() => {
              i && (i.innerHTML = "");
            }, 5e3);
          }
        },
        multiSelect: !0,
        propagateSelect: !0,
        togglableSelect: !0,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: f,
          isBranch: o,
          isExpanded: p,
          isSelected: i,
          isHalfSelected: g,
          getNodeProps: C,
          level: F,
          handleSelect: u,
          handleExpand: I
        }) => {
          const b = (y, j) => y && j.children.length === 0 ? /* @__PURE__ */ we(Ye, { children: [
            /* @__PURE__ */ we(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  j.name
                ]
              }
            ),
            /* @__PURE__ */ ee(
              bt,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ ee(Ut, { isOpen: y });
          return /* @__PURE__ */ we(
            "div",
            {
              ...C({ onClick: I }),
              style: { marginLeft: 40 * (F - 1) },
              children: [
                /* @__PURE__ */ ee(
                  Bt,
                  {
                    className: "checkbox-icon",
                    onClick: (y) => {
                      u(y), y.stopPropagation();
                    },
                    variant: g ? "some" : i ? "all" : "none"
                  }
                ),
                /* @__PURE__ */ ee("span", { className: "name", children: f.name }),
                o && b(p, f)
              ]
            }
          );
        }
      }
    ) })
  ] }) });
}
const Ut = (t) => {
  const { isOpen: e, className: n } = t, a = "arrow", r = Se(
    a,
    { [`${a}--closed`]: !e },
    { [`${a}--open`]: e },
    n
  );
  return /* @__PURE__ */ ee(mt, { className: r });
}, Bt = ({ variant: t, ...e }) => {
  switch (t) {
    case "all":
      return /* @__PURE__ */ ee(yt, { ...e });
    case "none":
      return /* @__PURE__ */ ee(It, { ...e });
    case "some":
      return /* @__PURE__ */ ee(gt, { ...e });
    default:
      return null;
  }
};
export {
  Gt as default
};
