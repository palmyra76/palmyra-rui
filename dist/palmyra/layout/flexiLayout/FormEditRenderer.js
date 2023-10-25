import { jsx as p } from "react/jsx-runtime";
import { forwardRef as j, useRef as b, useImperativeHandle as S, useMemo as _ } from "react";
import B from "../container/FieldContainer.js";
import L from "../../form/FieldGenerator.js";
const A = j(function(l, h) {
  var v;
  M(l);
  const { formLayout: a, formContext: u } = l, { rules: m, onDataChange: F } = u, g = u.eventHandlers || {}, C = a.Container || B, x = b({ ...u.data }), c = b({}), s = x.current, y = (r) => {
    for (var t in r) {
      var e = r[t];
      d(t, s, e);
    }
    w(r, s);
  }, H = () => {
    var r = a.fields[0], t = c.current[r.attribute];
    t && t.focus();
  }, R = () => {
    for (var r of a.fields) {
      var t = c.current[r.attribute];
      if (t && t.valid && t.focus && !t.isValid())
        return t.focus(), !0;
    }
    return !1;
  };
  S(h, () => ({
    focus() {
      H();
    },
    focusErrorInput() {
      return R();
    }
  }), []);
  const w = (r, t) => {
    var e = {};
    for (var n in r) {
      var o = r[n], i = m[n];
      if (i) {
        var { status: K } = i(o);
        e[n] = K;
      } else
        e[n] = !0;
    }
    F({ data: t, dataValid: e });
  }, D = _(() => (r) => {
    const t = I(r);
    return L(r, t, c, s);
  }, [s]), d = (r, t, e) => {
    var n = r.indexOf(".");
    if (n < 0) {
      t[r] = e;
      return;
    }
    var o = r.substring(0, n), i = r.substring(n + 1);
    return (t[o] === void 0 || t[o] == null) && (t[o] = {}), d(i, t[o], e);
  }, I = (r, t) => {
    var e = g[r.attribute], n = m[r.attribute], o = {};
    return r.disabled || (o.onDataChange = y), n && (o.constraint = n), e && (o.eventHandler = e), o;
  };
  var V = ((v = a.options) == null ? void 0 : v.columns) || 1, E = { columns: V };
  return /* @__PURE__ */ p("div", { className: "palmyra-form-field-container-wrapper", children: a.fields.map((r, t) => /* @__PURE__ */ p(
    C,
    {
      index: t,
      field: r,
      label: r.title,
      options: E,
      children: D(r)
    },
    r.attribute
  )) });
});
function M(f) {
  if (!f.formContext)
    throw new Error('Form Context not available, if this the form page, set the type as "form" in the definition');
}
export {
  A as default
};
