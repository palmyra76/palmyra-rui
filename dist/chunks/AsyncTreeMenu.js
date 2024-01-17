import "../assets/AsyncTreeMenu.css";
import { G as ot, t as M } from "./index.js";
import { g as ut } from "./_commonjsHelpers.js";
import ee, { useRef as ve, useReducer as ft, useEffect as X } from "react";
function Ct(t) {
  return ot({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M192 128l128 128-128 128z" } }] })(t);
}
var Je = { exports: {} };
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
})(Je);
var ht = Je.exports;
const we = /* @__PURE__ */ ut(ht);
function _e(t) {
  return (_e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(t);
}
function Ce(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Qe(t, e) {
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
      } catch (N) {
        u = !0, s = N;
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
function Z(t) {
  return function(e) {
    if (Array.isArray(e))
      return Ue(e);
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
function q(t, e) {
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
function Be(t, e) {
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
var Ye = { root: "tree", node: "tree-node", branch: "tree-node__branch", branchWrapper: "tree-branch-wrapper", leafListItem: "tree-leaf-list-item", leaf: "tree-node__leaf", nodeGroup: "tree-node-group" }, te = { select: "SELECT", focus: "FOCUS", exclusiveSelect: "EXCLUSIVE_SELECT" }, pt = Object.freeze(Object.values(te)), vt = Object.freeze(Object.values({ check: "check", select: "select" })), Re = "COLLAPSE", Oe = "COLLAPSE_MANY", Ee = "EXPAND", ze = "EXPAND_MANY", He = "HALF_SELECT", be = "SELECT", Xe = "DESELECT", xe = "TOGGLE", Ae = "TOGGLE_SELECT", ae = "SELECT_MANY", Ze = "EXCLUSIVE_CHANGE_SELECT_MANY", $ = "FOCUS", et = "BLUR", bt = "DISABLE", St = "ENABLE", tt = "CLEAR_MANUALLY_TOGGLED", nt = "CONTROLLED_SELECT_MANY", at = "UPDATE_TREE_STATE_WHEN_DATA_CHANGED", ce = function() {
}, Me = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return function(a) {
    for (var r = 0, l = e; r < l.length; r++) {
      var s = l[r];
      if (s && s(a), a.defaultPrevented)
        break;
    }
  };
}, le = function(t, e) {
  var n, a = /* @__PURE__ */ new Set(), r = q(t);
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
}, me = function(t, e) {
  return new Set([].concat(Z(le(t, e)), Z(le(e, t))));
}, qe = function(t) {
  var e = ve();
  return X(function() {
    e.current = t;
  }, [t]), e.current;
}, Y = function(t, e) {
  var n;
  return !!(!((n = x(t, e).children) === null || n === void 0) && n.length);
}, de = function(t, e) {
  return x(t, e).parent;
}, yt = function(t, e, n) {
  for (var a = e, r = []; ; ) {
    var l = de(t, a);
    if (l === 0 || l == null || l != null && n.has(l))
      break;
    r.push(l), a = l;
  }
  return r;
}, oe = function(t, e, n) {
  var a = [];
  return function r(l, s) {
    var i = x(l, s);
    if (i.children != null) {
      var d, u = q(i.children.filter(function(I) {
        return !n.has(I);
      }));
      try {
        for (u.s(); !(d = u.n()).done; ) {
          var N = d.value;
          a.push(N), r(l, N);
        }
      } catch (I) {
        u.e(I);
      } finally {
        u.f();
      }
    }
  }(t, e), a;
}, rt = function(t, e) {
  var n = x(t, e);
  return n.children == null ? [] : n.children;
}, lt = function(t, e, n) {
  var a = de(t, e);
  if (a != null) {
    var r = x(t, a), l = r.children.indexOf(e) + n;
    if (r.children[l])
      return r.children[l];
  }
  return null;
}, ke = function(t, e, n) {
  var a = x(t, e);
  for (Q(t).id === e && (a = x(t, x(t, e).children[x(t, e).children.length - 1])); n.has(a.id) && Y(t, a.id); )
    a = x(t, a.children[a.children.length - 1]);
  return a.id;
}, Le = function(t, e, n) {
  if (e === Q(t).children[0])
    return null;
  var a = lt(t, e, -1);
  return a == null ? de(t, e) : ke(t, a, n);
}, pe = function(t, e, n) {
  var a = x(t, e).id;
  if (Y(t, a) && n.has(a))
    return x(t, a).children[0];
  for (; ; ) {
    var r = lt(t, a, 1);
    if (r != null)
      return r;
    if ((a = de(t, a)) == null)
      return null;
  }
}, st = function(t) {
  var e = t.data, n = t.expandedIds, a = t.from, r = t.to, l = [], s = e.length, i = 0, d = a;
  if (l.push(a), a < r)
    for (; i < s && ((d = pe(e, d, n)) != null && l.push(d), d != null && d !== r); )
      i += 1;
  else if (a > r)
    for (; i < s && ((d = Le(e, d, n)) != null && l.push(d), d != null && d !== r); )
      i += 1;
  return l;
}, It = function(t) {
  var e = t.isSelected, n = t.isDisabled, a = t.multiSelect;
  return n || a ? e : !!e || void 0;
}, gt = function(t) {
  var e = t.isSelected, n = t.isDisabled, a = t.isHalfSelected, r = t.multiSelect;
  return n ? e : a ? "mixed" : r ? e : !!e || void 0;
}, se = function(t, e, n) {
  return e.concat.apply(e, Z(e.filter(function(a) {
    return Y(t, a);
  }).map(function(a) {
    return oe(t, a, n);
  })));
}, mt = function(t, e, n) {
  e != null ? window.navigator.userAgent.match(/Trident/) ? setTimeout(function() {
    return !e.contains(document.activeElement) && n();
  }, 0) : !e.contains(t.nativeEvent.relatedTarget) && n() : console.warn("ref not set on <ul>");
}, wt = function(t, e, n) {
  var a = rt(t, e);
  return Y(t, e) && !n.has(e) && a.length === 1 && a.every(function(r) {
    return n.has(r);
  });
}, dt = function(t, e, n, a) {
  var r = function(s, i, d) {
    return Y(s, i) && d.has(i) && oe(s, i, /* @__PURE__ */ new Set()).some(function(u) {
      return d.has(u);
    });
  }(t, e, n), l = function(s, i, d) {
    var u = rt(s, i);
    return Y(s, i) && d.has(i) && u.length === 1 && u.every(function(N) {
      return d.has(N);
    });
  }(t, e, n);
  return function(s, i, d, u) {
    var N = oe(s, i, /* @__PURE__ */ new Set());
    return Y(s, i) && d.has(i) && N.every(function(I) {
      return d.has(I);
    }) && N.every(function(I) {
      return !u.has(I);
    });
  }(t, e, n, a) ? Ae : r && !l ? He : Ae;
}, Q = function(t) {
  var e = t.find(function(n) {
    return n.parent === null;
  });
  if (!e)
    throw Error("TreeView data must contain parent node.");
  return e;
}, x = function(t, e) {
  var n = t.find(function(a) {
    return a.id === e;
  });
  if (n == null)
    throw Error("Node with id=".concat(e, " doesn't exist in the tree."));
  return n;
}, $e = function(t) {
  var e = Array.from(new Set(t));
  return t.length !== e.length;
}, Et = function(t, e) {
  switch (e.type) {
    case Re:
      var n = new Set(t.expandedIds);
      return n.delete(e.id), Object.assign(Object.assign({}, t), { expandedIds: n, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Oe:
      var a, r = new Set(t.expandedIds), l = q(e.ids);
      try {
        for (l.s(); !(a = l.n()).done; ) {
          var s = a.value;
          r.delete(s);
        }
      } catch (J) {
        l.e(J);
      } finally {
        l.f();
      }
      return Object.assign(Object.assign({}, t), { expandedIds: r, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Ee:
      var i = new Set(t.expandedIds);
      return i.add(e.id), Object.assign(Object.assign({}, t), { expandedIds: i, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case ze:
      var d = new Set([].concat(Z(t.expandedIds), Z(e.ids)));
      return Object.assign(Object.assign({}, t), { expandedIds: d, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case xe:
      var u = new Set(t.expandedIds);
      return t.expandedIds.has(e.id) ? u.delete(e.id) : u.add(e.id), Object.assign(Object.assign({}, t), { expandedIds: u, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case He:
      if (t.disabledIds.has(e.id))
        return t;
      var N = new Set(t.halfSelectedIds), I = new Set(t.selectedIds);
      return N.add(e.id), I.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: I, halfSelectedIds: N, tabbableId: e.keepFocus ? t.tabbableId : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id });
    case be:
      if (!e.NotUserAction && t.disabledIds.has(e.id))
        return t;
      var j;
      e.multiSelect ? (j = new Set(t.selectedIds)).add(e.id) : (j = /* @__PURE__ */ new Set()).add(e.id);
      var h = new Set(t.halfSelectedIds);
      return h.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: j, halfSelectedIds: h, tabbableId: e.keepFocus ? t.tabbableId : e.id, isFocused: e.NotUserAction !== !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case Xe:
      if (!e.NotUserAction && t.disabledIds.has(e.id))
        return t;
      var E, c = new Set(t.selectedIds);
      return c.delete(e.id), e.multiSelect ? (E = new Set(t.halfSelectedIds)).delete(e.id) : E = /* @__PURE__ */ new Set(), Object.assign(Object.assign({}, t), { selectedIds: c, halfSelectedIds: E, tabbableId: e.keepFocus ? t.tabbableId : e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case Ae:
      if (t.disabledIds.has(e.id))
        return t;
      var U, C = t.selectedIds.has(e.id);
      e.multiSelect ? (U = new Set(t.selectedIds), C ? U.delete(e.id) : U.add(e.id)) : (U = /* @__PURE__ */ new Set(), C || U.add(e.id));
      var H = new Set(t.halfSelectedIds);
      return H.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: U, halfSelectedIds: H, tabbableId: e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case ae:
      var k, o = e.ids.filter(function(J) {
        return !t.disabledIds.has(J);
      });
      if (e.multiSelect) {
        k = e.select ? new Set([].concat(Z(t.selectedIds), Z(o))) : le(t.selectedIds, new Set(o));
        var A = le(t.halfSelectedIds, k);
        return Object.assign(Object.assign({}, t), { selectedIds: k, halfSelectedIds: A, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case Ze:
      var p, D = e.ids.filter(function(J) {
        return !t.disabledIds.has(J);
      });
      if (e.multiSelect) {
        p = e.select ? new Set(D) : le(t.selectedIds, new Set(D));
        var T = le(t.halfSelectedIds, p);
        return Object.assign(Object.assign({}, t), { selectedIds: p, halfSelectedIds: T, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case nt:
      var F, O = t.lastInteractedWith, R = t.tabbableId;
      if (e.multiSelect)
        F = new Set(e.ids), e.ids.length && (O = e.ids[e.ids.length - 1], R = e.ids[e.ids.length - 1]);
      else {
        F = /* @__PURE__ */ new Set(), e.ids.length > 1 && console.warn("Tree in singleSelect mode, only the first item from selectedIds will be selected.");
        var v = e.ids[0];
        v && F.add(v), O = v ?? O, R = v ?? O;
      }
      var g = new Set(t.halfSelectedIds);
      e.ids.every(function(J) {
        return g.delete(J);
      });
      var b = new Set(e.ids);
      return Object.assign(Object.assign({}, t), { selectedIds: F, halfSelectedIds: g, controlledIds: b, isFocused: !0, lastAction: e.type, tabbableId: R, lastInteractedWith: O });
    case $:
      return Object.assign(Object.assign({}, t), { tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case et:
      return Object.assign(Object.assign({}, t), { isFocused: !1 });
    case bt:
      var y = new Set(t.disabledIds);
      return y.add(e.id), Object.assign(Object.assign({}, t), { disabledIds: y });
    case St:
      var B = new Set(t.disabledIds);
      return B.delete(e.id), Object.assign(Object.assign({}, t), { disabledIds: B });
    case tt:
      return Object.assign(Object.assign({}, t), { lastManuallyToggled: null });
    case at:
      return Object.assign(Object.assign({}, t), { tabbableId: e.tabbableId, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.lastUserSelect });
    default:
      throw new Error("Invalid action passed to the reducer");
  }
}, it = function(t) {
  var e = t.element, n = t.dispatch, a = t.data, r = t.selectedIds, l = t.tabbableId, s = t.isFocused, i = t.expandedIds, d = t.disabledIds, u = t.halfSelectedIds, N = t.lastUserSelect, I = t.nodeRefs, j = t.leafRefs, h = t.baseClassNames, E = t.nodeRenderer, c = t.nodeAction, U = t.setsize, C = t.posinset, H = t.level, k = t.propagateCollapse, o = t.propagateSelect, A = t.multiSelect, p = t.togglableSelect, D = t.clickAction, T = t.state, F = function(b) {
    if (!(b.ctrlKey || b.altKey || b.shiftKey))
      if (i.has(e.id) && k) {
        var y = [e.id].concat(Z(oe(a, e.id, /* @__PURE__ */ new Set())));
        n({ type: Oe, ids: y, lastInteractedWith: e.id });
      } else
        n({ type: xe, id: e.id, lastInteractedWith: e.id });
  }, O = function() {
    return n({ type: $, id: e.id, lastInteractedWith: e.id });
  }, R = function(b) {
    if (b.shiftKey) {
      var y = st({ data: a, expandedIds: i, from: N, to: e.id }).filter(function(B) {
        return !d.has(B);
      });
      y = o ? se(a, y, d) : y, n({ type: Ze, select: !0, multiSelect: A, ids: y, lastInteractedWith: e.id, lastManuallyToggled: e.id });
    } else
      b.ctrlKey || D === te.select ? (n({ type: p ? dt(a, e.id, r, d) : be, id: e.id, multiSelect: A, lastInteractedWith: e.id, lastManuallyToggled: e.id }), o && !d.has(e.id) && n({ type: ae, ids: se(a, [e.id], d), select: !p || !r.has(e.id), multiSelect: A, lastInteractedWith: e.id, lastManuallyToggled: e.id })) : D === te.exclusiveSelect ? n({ type: p ? Ae : be, id: e.id, multiSelect: !1, lastInteractedWith: e.id, lastManuallyToggled: e.id }) : D === te.focus && n({ type: $, id: e.id, lastInteractedWith: e.id });
  }, v = function(b) {
    var y;
    return we(b, (Ce(y = {}, "".concat(b, "--expanded"), i.has(e.id)), Ce(y, "".concat(b, "--selected"), r.has(e.id)), Ce(y, "".concat(b, "--focused"), l === e.id && s), y));
  }, g = c === "select" ? { "aria-selected": It({ isSelected: r.has(e.id), isDisabled: d.has(e.id), multiSelect: A }) } : { "aria-checked": gt({ isSelected: r.has(e.id), isDisabled: d.has(e.id), isHalfSelected: u.has(e.id), multiSelect: A }) };
  return Y(a, e.id) || e.isBranch ? ee.createElement("li", Object.assign({ role: "treeitem", "aria-expanded": i.has(e.id), "aria-setsize": U, "aria-posinset": C, "aria-level": H, "aria-disabled": d.has(e.id), tabIndex: l === e.id ? 0 : -1, ref: function(b) {
    (I == null ? void 0 : I.current) != null && b != null && (I.current[e.id] = b);
  }, className: h.branchWrapper }, g), ee.createElement(ee.Fragment, null, E({ element: e, isBranch: !0, isSelected: r.has(e.id), isHalfSelected: u.has(e.id), isExpanded: i.has(e.id), isDisabled: d.has(e.id), dispatch: n, getNodeProps: function() {
    var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, y = b.onClick;
    return { onClick: y == null ? Me(R, F, O) : Me(y, O), className: we(v(h.node), h.branch), ref: function(B) {
      (j == null ? void 0 : j.current) != null && (j.current[e.id] = B);
    } };
  }, setsize: U, posinset: C, level: H, handleSelect: R, handleExpand: F, treeState: T }), ee.createElement(At, Object.assign({ getClasses: v }, function(b) {
    return b.setsize, b.posinset, Be(b, ["setsize", "posinset"]);
  }(t))))) : ee.createElement("li", { role: "none", className: v(h.leafListItem) }, E({ element: e, isBranch: !1, isSelected: r.has(e.id), isHalfSelected: !1, isExpanded: !1, isDisabled: d.has(e.id), dispatch: n, getNodeProps: function() {
    var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, y = b.onClick;
    return Object.assign({ role: "treeitem", tabIndex: l === e.id ? 0 : -1, onClick: Me(y ?? R, O), ref: function(B) {
      (I == null ? void 0 : I.current) != null && (j == null ? void 0 : j.current) != null && (I.current[e.id] = B, j.current[e.id] = B);
    }, className: we(v(h.node), h.leaf), "aria-setsize": U, "aria-posinset": C, "aria-level": H, disabled: d.has(e.id), "aria-disabled": d.has(e.id) }, g);
  }, setsize: U, posinset: C, level: H, handleSelect: R, handleExpand: ce, treeState: T }));
}, At = function(t) {
  var e = t.data, n = t.element, a = t.expandedIds, r = t.getClasses, l = t.baseClassNames, s = t.level, i = Be(t, ["data", "element", "expandedIds", "getClasses", "baseClassNames", "level"]);
  return ee.createElement("ul", { role: "group", className: r(l.nodeGroup) }, a.has(n.id) && n.children.length > 0 && n.children.map(function(d, u) {
    return ee.createElement(it, Object.assign({ data: e, expandedIds: a, baseClassNames: l, key: "".concat(d, "-").concat(_e(d)), element: x(e, d), setsize: n.children.length, posinset: u + 1, level: s + 1 }, i));
  }));
}, Ot = function(t) {
  var e = t.data, n = t.controlledSelectedIds, a = t.controlledExpandedIds, r = t.defaultExpandedIds, l = t.defaultSelectedIds, s = t.defaultDisabledIds, i = t.nodeRefs, d = t.leafRefs, u = t.onSelect, N = t.onNodeSelect, I = t.onExpand, j = t.onLoadData, h = t.togglableSelect, E = t.multiSelect, c = t.propagateSelect, U = t.propagateSelectUpwards, C = t.treeRef, H = Q(e), k = Qe(ft(Et, { selectedIds: new Set(n || l), controlledIds: new Set(n), tabbableId: H.children[0], isFocused: !1, expandedIds: new Set(a || r), halfSelectedIds: /* @__PURE__ */ new Set(), lastUserSelect: H.children[0], lastInteractedWith: null, lastManuallyToggled: null, disabledIds: new Set(s) }), 2), o = k[0], A = k[1], p = o.selectedIds, D = o.expandedIds, T = o.disabledIds, F = o.tabbableId, O = o.halfSelectedIds, R = o.lastAction, v = o.lastInteractedWith, g = o.lastManuallyToggled, b = qe(p) || /* @__PURE__ */ new Set(), y = me(p, b);
  X(function() {
    var m;
    if (u != null && u !== ce) {
      var f, w = q(y);
      try {
        for (w.s(); !(f = w.n()).done; ) {
          var S = f.value, L = Y(e, S) || !!(!((m = x(e, F)) === null || m === void 0) && m.isBranch);
          u({ element: x(e, S), isBranch: L, isExpanded: !!L && D.has(S), isSelected: p.has(S), isDisabled: T.has(S), isHalfSelected: !!L && O.has(S), treeState: o });
        }
      } catch (z) {
        w.e(z);
      } finally {
        w.f();
      }
    }
  }, [e, p, D, T, O, y, u, o]), X(function() {
    N != null && N !== ce && g != null && y.size && (N({ element: x(e, g), isSelected: p.has(g), isBranch: Y(e, g), treeState: o }), A({ type: tt }));
  }, [g, p, y]);
  var B = qe(D) || /* @__PURE__ */ new Set();
  X(function() {
    var m = me(D, B);
    if (I != null && I !== ce) {
      var f, w = q(m);
      try {
        for (w.s(); !(f = w.n()).done; ) {
          var S = f.value;
          I({ element: x(e, S), isExpanded: D.has(S), isSelected: p.has(S), isDisabled: T.has(S), isHalfSelected: O.has(S), treeState: o });
        }
      } catch (L) {
        w.e(L);
      } finally {
        w.f();
      }
    }
  }, [e, p, D, T, O, B, I, o]);
  var J, ue, he = (J = e, ue = ve(), X(function() {
    ue.current = J;
  }), ue.current || /* @__PURE__ */ new Map());
  X(function() {
    var m = me(D, B);
    if (j) {
      var f, w = q(m);
      try {
        for (w.s(); !(f = w.n()).done; ) {
          var S = f.value;
          j({ element: x(e, S), isExpanded: D.has(S), isSelected: p.has(S), isDisabled: T.has(S), isHalfSelected: O.has(S), treeState: o });
        }
      } catch (K) {
        w.e(K);
      } finally {
        w.f();
      }
      if (he !== e && h && c) {
        var L, z = q(D);
        try {
          for (z.s(); !(L = z.n()).done; ) {
            var G = L.value;
            p.has(G) && A({ type: ae, ids: se(e, [G], T), select: !0, multiSelect: E, lastInteractedWith: G });
          }
        } catch (K) {
          z.e(K);
        } finally {
          z.f();
        }
      }
    }
  }, [e, p, D, T, O, B, j, o]), X(function() {
    if (he !== e) {
      var m = Q(e);
      m.children.length && A({ type: at, tabbableId: e.find(function(f) {
        return f.id === o.tabbableId;
      }) ? o.tabbableId : m.children[0], lastInteractedWith: e.find(function(f) {
        return f.id === o.lastInteractedWith;
      }) ? o.lastInteractedWith : null, lastManuallyToggled: e.find(function(f) {
        return f.id === o.lastManuallyToggled;
      }) ? o.lastManuallyToggled : null, lastUserSelect: e.find(function(f) {
        return f.id === o.lastUserSelect;
      }) ? o.lastUserSelect : m.children[0] });
    }
  }, [e]);
  var Se = me(new Set(n), p);
  return X(function() {
    if (n) {
      Se.size && A({ type: nt, ids: n, multiSelect: E });
      var m, f = q(n);
      try {
        for (f.s(); !(m = f.n()).done; ) {
          var w = m.value;
          c && !T.has(w) && A({ type: ae, ids: se(e, [w], T), select: !0, multiSelect: E, lastInteractedWith: w });
        }
      } catch (S) {
        f.e(S);
      } finally {
        f.f();
      }
    }
  }, [n]), X(function() {
    var m = new Set(a), f = le(m, B), w = le(B, m);
    if (w.size) {
      var S, L = q(w);
      try {
        for (L.s(); !(S = L.n()).done; ) {
          var z = S.value;
          if (Y(e, z) || x(e, z).isBranch) {
            var G = [z].concat(Z(oe(e, z, /* @__PURE__ */ new Set())));
            A({ type: Oe, ids: G, lastInteractedWith: z });
          }
        }
      } catch (fe) {
        L.e(fe);
      } finally {
        L.f();
      }
    }
    if (f.size) {
      var K, _ = q(f);
      try {
        for (_.s(); !(K = _.n()).done; ) {
          var W = K.value;
          if (Y(e, W) || x(e, W).isBranch) {
            var ie = de(e, W);
            A(ie ? { type: ze, ids: [W, ie], lastInteractedWith: W } : { type: Ee, id: W, lastInteractedWith: W });
          }
        }
      } catch (fe) {
        _.e(fe);
      } finally {
        _.f();
      }
    }
  }, [a]), X(function() {
    if (U) {
      var m = new Set(Z(y));
      v && R !== $ && R !== Re && R !== Ee && R !== xe && m.add(v);
      var f = [];
      m.forEach(function(V) {
        e.find(function(je) {
          return je.id === V;
        }) || f.push(V);
      }), f.forEach(function(V) {
        return m.delete(V);
      });
      var w, S = function(V, je, Te, Ie, Ke, ct) {
        var Pe, re = { every: /* @__PURE__ */ new Set(), some: /* @__PURE__ */ new Set(), none: /* @__PURE__ */ new Set() }, ge = q(je);
        try {
          for (ge.s(); !(Pe = ge.n()).done; )
            for (var Ne = Pe.value; ; ) {
              var ne = de(V, Ne);
              if (ne === 0 || ne == null || ne != null && Ie.has(ne))
                break;
              var De = x(V, ne).children.filter(function(P) {
                return !Ie.has(P);
              });
              if (De.length === 0)
                break;
              if (De.some(function(P) {
                return Te.has(P) || re.some.has(P) && !re.none.has(P) || Ke.has(P) && !re.none.has(P);
              }))
                De.every(function(P) {
                  return Te.has(P);
                }) ? re.every.add(ne) : re.some.add(ne);
              else {
                var Ve = yt(V, Ne, Ie).find(function(P) {
                  return Te.has(P);
                });
                if (!ct && Ve) {
                  oe(V, Ve, Ie).forEach(function(P) {
                    Ke.has(P) && re.none.add(P);
                  });
                  break;
                }
                re.none.add(ne);
              }
              Ne = ne;
            }
        } catch (P) {
          ge.e(P);
        } finally {
          ge.f();
        }
        return re;
      }(e, m, p, T, O, E), L = S.every, z = S.some, G = S.none, K = q(L);
      try {
        for (K.s(); !(w = K.n()).done; ) {
          var _ = w.value;
          p.has(_) || A({ type: be, id: _, multiSelect: E || wt(e, _, p), keepFocus: !0, NotUserAction: !0, lastInteractedWith: v });
        }
      } catch (V) {
        K.e(V);
      } finally {
        K.f();
      }
      var W, ie = q(z);
      try {
        for (ie.s(); !(W = ie.n()).done; ) {
          var fe = W.value;
          O.has(fe) || A({ type: He, id: fe, lastInteractedWith: v, keepFocus: !0, NotUserAction: !0 });
        }
      } catch (V) {
        ie.e(V);
      } finally {
        ie.f();
      }
      var Ge, ye = q(G);
      try {
        for (ye.s(); !(Ge = ye.n()).done; ) {
          var We = Ge.value;
          (p.has(We) || O.has(We)) && A({ type: Xe, id: We, multiSelect: E, keepFocus: !0, NotUserAction: !0, lastInteractedWith: v, lastManuallyToggled: g });
        }
      } catch (V) {
        ye.e(V);
      } finally {
        ye.f();
      }
    }
  }, [e, E, U, p, D, T, O, R, b, y, v, Se]), X(function() {
    if (v != null && F != null && (i == null ? void 0 : i.current) != null && (d == null ? void 0 : d.current) != null && ((C == null ? void 0 : C.current) == null || document.activeElement && C.current.contains(document.activeElement))) {
      var m = i.current[F];
      (function(f) {
        f != null && f.scrollIntoView && f.scrollIntoView({ block: "nearest" });
      })(d.current[v]), function(f) {
        f != null && f.focus && f.focus({ preventScroll: !0 });
      }(m);
    }
  }, [F, i, d, v]), [o, A];
}, xt = ee.forwardRef(function(t, e) {
  var n = t.data, a = t.selectedIds, r = t.nodeRenderer, l = t.onSelect, s = l === void 0 ? ce : l, i = t.onNodeSelect, d = i === void 0 ? ce : i, u = t.onExpand, N = u === void 0 ? ce : u, I = t.onLoadData, j = t.className, h = j === void 0 ? "" : j, E = t.multiSelect, c = E !== void 0 && E, U = t.propagateSelect, C = U !== void 0 && U, H = t.propagateSelectUpwards, k = H !== void 0 && H, o = t.propagateCollapse, A = o !== void 0 && o, p = t.expandOnKeyboardSelect, D = p !== void 0 && p, T = t.togglableSelect, F = T !== void 0 && T, O = t.defaultExpandedIds, R = O === void 0 ? [] : O, v = t.defaultSelectedIds, g = v === void 0 ? [] : v, b = t.defaultDisabledIds, y = b === void 0 ? [] : b, B = t.clickAction, J = B === void 0 ? te.select : B, ue = t.nodeAction, he = ue === void 0 ? "select" : ue, Se = t.expandedIds, m = t.onBlur, f = Be(t, ["data", "selectedIds", "nodeRenderer", "onSelect", "onNodeSelect", "onExpand", "onLoadData", "className", "multiSelect", "propagateSelect", "propagateSelectUpwards", "propagateCollapse", "expandOnKeyboardSelect", "togglableSelect", "defaultExpandedIds", "defaultSelectedIds", "defaultDisabledIds", "clickAction", "nodeAction", "expandedIds", "onBlur"]);
  (function(_) {
    if ($e(_.map(function(W) {
      return W.id;
    })))
      throw Error("Multiple TreeView nodes have the same ID. IDs must be unique.");
    if (_.forEach(function(W) {
      if (W.id === W.parent)
        throw Error("Node with id=".concat(W.id, " has parent reference to itself."));
      if ($e(W.children))
        throw Error("Node with id=".concat(W.id, " contains duplicate ids in its children."));
    }), _.filter(function(W) {
      return W.parent === null;
    }).length === 0)
      throw Error("TreeView must have one root node.");
    if (_.filter(function(W) {
      return W.parent === null;
    }).length > 1)
      throw Error("TreeView can have only one root node.");
    Q(_).children.length || console.warn("TreeView have no nodes to display.");
  })(n);
  var w = ve({}), S = ve({}), L = ve(null);
  e != null && (L = e);
  var z = Qe(Ot({ data: n, controlledSelectedIds: a, controlledExpandedIds: Se, defaultExpandedIds: R, defaultSelectedIds: g, defaultDisabledIds: y, nodeRefs: w, leafRefs: S, onSelect: s, onNodeSelect: d, onExpand: N, onLoadData: I, togglableSelect: F, multiSelect: c, propagateSelect: C, propagateSelectUpwards: k, treeRef: L }), 2), G = z[0], K = z[1];
  return C = C && c, ee.createElement("ul", Object.assign({ className: we(Ye.root, h), role: "tree", "aria-multiselectable": he === "select" ? c : void 0, ref: L, onBlur: function(_) {
    mt(_, L.current, function() {
      m && m({ treeState: G, dispatch: K }), K({ type: et });
    });
  }, onKeyDown: Wt({ data: n, tabbableId: G.tabbableId, expandedIds: G.expandedIds, selectedIds: G.selectedIds, disabledIds: G.disabledIds, halfSelectedIds: G.halfSelectedIds, clickAction: J, dispatch: K, propagateCollapse: A, propagateSelect: C, multiSelect: c, expandOnKeyboardSelect: D, togglableSelect: F }) }, f), Q(n).children.map(function(_, W) {
    return ee.createElement(it, Object.assign({ key: "".concat(_, "-").concat(_e(_)), data: n, element: x(n, _), setsize: Q(n).children.length, posinset: W + 1, level: 1 }, G, { state: G, dispatch: K, nodeRefs: w, leafRefs: S, baseClassNames: Ye, nodeRenderer: r, propagateCollapse: A, propagateSelect: C, propagateSelectUpwards: k, multiSelect: c, togglableSelect: F, clickAction: J, nodeAction: he }));
  }));
}), Wt = function(t) {
  var e = t.data, n = t.expandedIds, a = t.selectedIds, r = t.disabledIds, l = t.tabbableId, s = t.dispatch, i = t.propagateCollapse, d = t.propagateSelect, u = t.multiSelect, N = t.expandOnKeyboardSelect, I = t.togglableSelect, j = t.clickAction;
  return function(h) {
    var E = x(e, l), c = E.id;
    if (h.ctrlKey) {
      if (h.key === "a" && j !== te.focus) {
        h.preventDefault();
        var U = e.filter(function(g) {
          return g.parent !== null;
        }).map(function(g) {
          return g.id;
        }).filter(function(g) {
          return !r.has(g);
        });
        s({ type: ae, multiSelect: u, select: Array.from(a).filter(function(g) {
          return !r.has(g);
        }).length !== U.length, ids: U, lastInteractedWith: E.id });
      } else if (h.shiftKey && (h.key === "Home" || h.key === "End") && j !== te.focus) {
        var C = h.key === "Home" ? Q(e).children[0] : ke(e, c, n), H = st({ data: e, expandedIds: n, from: c, to: C }).filter(function(g) {
          return !r.has(g);
        });
        s({ type: ae, multiSelect: u, select: !0, ids: d ? se(e, H, r) : H }), s({ type: $, id: C, lastInteractedWith: C });
      }
    } else {
      if (h.shiftKey)
        switch (h.key) {
          case "ArrowUp":
            h.preventDefault();
            var k = Le(e, c, n);
            return void (k == null || r.has(k) || (j !== te.focus && s({ type: ae, ids: d ? se(e, [k], r) : [k], select: !0, multiSelect: u, lastInteractedWith: k, lastManuallyToggled: k }), s({ type: $, id: k, lastInteractedWith: k })));
          case "ArrowDown":
            h.preventDefault();
            var o = pe(e, c, n);
            return void (o == null || r.has(o) || (j !== te.focus && s({ type: ae, ids: d ? se(e, [o], r) : [o], multiSelect: u, select: !0, lastInteractedWith: o, lastManuallyToggled: o }), s({ type: $, id: o, lastInteractedWith: o })));
        }
      switch (h.key) {
        case "ArrowDown":
          h.preventDefault();
          var A = pe(e, c, n);
          return void (A != null && s({ type: $, id: A, lastInteractedWith: A }));
        case "ArrowUp":
          h.preventDefault();
          var p = Le(e, c, n);
          return void (p != null && s({ type: $, id: p, lastInteractedWith: p }));
        case "ArrowLeft":
          if (h.preventDefault(), (Y(e, c) || E.isBranch) && n.has(l))
            if (i) {
              var D = [c].concat(Z(oe(e, c, /* @__PURE__ */ new Set())));
              s({ type: Oe, ids: D, lastInteractedWith: E.id });
            } else
              s({ type: Re, id: c, lastInteractedWith: c });
          else if (!Q(e).children.includes(c)) {
            var T = de(e, c);
            if (T == null)
              throw new Error("parentId of root element is null");
            s({ type: $, id: T, lastInteractedWith: T });
          }
          return;
        case "ArrowRight":
          return h.preventDefault(), void ((Y(e, c) || E.isBranch) && (n.has(l) ? s({ type: $, id: E.children[0], lastInteractedWith: E.children[0] }) : s({ type: Ee, id: c, lastInteractedWith: c })));
        case "Home":
          h.preventDefault(), s({ type: $, id: Q(e).children[0], lastInteractedWith: Q(e).children[0] });
          break;
        case "End":
          h.preventDefault();
          var F = ke(e, Q(e).id, n);
          return void s({ type: $, id: F, lastInteractedWith: F });
        case "*":
          h.preventDefault();
          var O = de(e, c);
          if (O == null)
            throw new Error("parentId of element is null");
          var R = x(e, O).children.filter(function(g) {
            return Y(e, g) || x(e, g).isBranch;
          });
          return void s({ type: ze, ids: R, lastInteractedWith: c });
        case "Enter":
        case " ":
        case "Spacebar":
          return h.preventDefault(), j === te.focus ? void 0 : (s({ type: I ? dt(e, c, a, r) : be, id: c, multiSelect: u, lastInteractedWith: c, lastManuallyToggled: c }), d && !r.has(E.id) && s({ type: ae, ids: se(e, [c], r), select: !I || !a.has(c), multiSelect: u, lastInteractedWith: c, lastManuallyToggled: c }), void (N && s({ type: xe, id: c, lastInteractedWith: c })));
        default:
          if (h.key.length === 1)
            for (var v = pe(e, c, n); v !== c; )
              if (v != null) {
                if (x(e, v).name[0].toLowerCase() === h.key.toLowerCase())
                  return void s({ type: $, id: v, lastInteractedWith: c });
                v = pe(e, v, n);
              } else
                v = Q(e).children[0];
          return;
      }
    }
  };
};
xt.propTypes = { data: M.array.isRequired, onSelect: M.func, onNodeSelect: M.func, onExpand: M.func, className: M.string, nodeRenderer: M.func.isRequired, defaultExpandedIds: M.array, defaultSelectedIds: M.array, expandedIds: M.array, selectedIds: M.array, defaultDisabledIds: M.array, propagateCollapse: M.bool, propagateSelect: M.bool, propagateSelectUpwards: M.bool, multiSelect: M.bool, expandOnKeyboardSelect: M.bool, togglableSelect: M.bool, nodeAction: M.oneOf(vt), clickAction: M.oneOf(pt), onBlur: M.func, onLoadData: M.func };
export {
  Ct as I,
  we as c,
  xt as u
};
