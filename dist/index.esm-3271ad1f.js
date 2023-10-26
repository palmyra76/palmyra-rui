import i from "react";
var f = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, u = i.createContext && i.createContext(f), l = globalThis && globalThis.__assign || function() {
  return l = Object.assign || function(t) {
    for (var r, e = 1, n = arguments.length; e < n; e++) {
      r = arguments[e];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, l.apply(this, arguments);
}, h = globalThis && globalThis.__rest || function(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (e[n[a]] = t[n[a]]);
  return e;
};
function m(t) {
  return t && t.map(function(r, e) {
    return i.createElement(r.tag, l({
      key: e
    }, r.attr), m(r.child));
  });
}
function d(t) {
  return function(r) {
    return i.createElement(v, l({
      attr: l({}, t.attr)
    }, r), m(t.child));
  };
}
function v(t) {
  var r = function(e) {
    var n = t.attr, a = t.size, o = t.title, g = h(t, ["attr", "size", "title"]), s = a || e.size || "1em", c;
    return e.className && (c = e.className), t.className && (c = (c ? c + " " : "") + t.className), i.createElement("svg", l({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, e.attr, n, g, {
      className: c,
      style: l(l({
        color: t.color || e.color
      }, e.style), t.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && i.createElement("title", null, o), t.children);
  };
  return u !== void 0 ? i.createElement(u.Consumer, null, function(e) {
    return r(e);
  }) : r(f);
}
function b(t) {
  return d({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(t);
}
export {
  b as A
};
