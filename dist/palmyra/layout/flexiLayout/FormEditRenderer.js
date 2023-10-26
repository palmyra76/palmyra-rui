import { jsx as p } from "react/jsx-runtime";
import { forwardRef as E, useRef as K, useImperativeHandle as j, useMemo as S } from "react";
import _ from "../container/FieldContainer.js";
import B from "../../form/FieldGenerator.js";
const z = E(function(l, b) {
  var v;
  L(l);
  const { formLayout: a, formContext: u } = l, { rules: m, onDataChange: h } = u, F = u.eventHandlers || {}, g = a.Container || _, c = K({}), s = u.data, C = (r) => {
    for (var t in r) {
      var e = r[t];
      d(t, s, e);
    }
    H(r, s);
  }, x = () => {
    var r = a.fields[0], t = c.current[r.attribute];
    t && t.focus();
  }, y = () => {
    for (var r of a.fields) {
      var t = c.current[r.attribute];
      if (t && t.valid && t.focus && !t.isValid())
        return t.focus(), !0;
    }
    return !1;
  };
  j(b, () => ({
    focus() {
      x();
    },
    focusErrorInput() {
      return y();
    }
  }), []);
  const H = (r, t) => {
    var e = {};
    for (var n in r) {
      var o = r[n], i = m[n];
      if (i) {
        var { status: V } = i(o);
        e[n] = V;
      } else
        e[n] = !0;
    }
    h({ data: t, dataValid: e });
  }, w = S(() => (r) => {
    const t = D(r);
    return B(r, t, c, s);
  }, [s]), d = (r, t, e) => {
    var n = r.indexOf(".");
    if (n < 0) {
      t[r] = e;
      return;
    }
    var o = r.substring(0, n), i = r.substring(n + 1);
    return (t[o] === void 0 || t[o] == null) && (t[o] = {}), d(i, t[o], e);
  }, D = (r, t) => {
    var e = F[r.attribute], n = m[r.attribute], o = {};
    return r.disabled || (o.onDataChange = C), n && (o.constraint = n), e && (o.eventHandler = e), o;
  };
  var I = ((v = a.options) == null ? void 0 : v.columns) || 1, R = { columns: I };
  return /* @__PURE__ */ p("div", { className: "palmyra-form-field-container-wrapper", children: a.fields.map((r, t) => /* @__PURE__ */ p(
    g,
    {
      index: t,
      field: r,
      label: r.title,
      options: R,
      children: w(r)
    },
    r.attribute
  )) });
});
function L(f) {
  if (!f.formContext)
    throw new Error('Form Context not available, if this the form page, set the type as "form" in the definition');
}
export {
  z as default
};
