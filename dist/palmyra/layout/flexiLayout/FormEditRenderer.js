import { jsx as v } from "react/jsx-runtime";
import { forwardRef as V, useRef as E, useImperativeHandle as S, useMemo as _ } from "react";
import j from "../container/FieldContainer.js";
import B from "../../form/FieldGenerator.js";
import { setValueByKey as K } from "../../form/FormUtil.js";
const A = V(function(f, p) {
  var l;
  L(f);
  const { formLayout: o, formContext: i } = f, { rules: m, onDataChange: h } = i, b = i.eventHandlers || {}, F = o.Container || j, u = E({}), s = i.data, C = (t) => {
    for (var r in t) {
      var e = t[r];
      K(r, s, e);
    }
    y(t, s);
  }, g = () => {
    var t = o.fields[0], r = u.current[t.attribute];
    r && r.focus();
  }, x = () => {
    for (var t of o.fields) {
      var r = u.current[t.attribute];
      if (r && r.valid && r.focus && !r.isValid())
        return r.focus(), !0;
    }
    return !1;
  };
  S(p, () => ({
    focus() {
      g();
    },
    focusErrorInput() {
      return x();
    }
  }), []);
  const y = (t, r) => {
    var e = {};
    for (var a in t) {
      var n = t[a], d = m[a];
      if (d) {
        var { status: R } = d(n);
        e[a] = R;
      } else
        e[a] = !0;
    }
    h({ data: r, dataValid: e });
  }, H = _(() => (t) => {
    const r = w(t);
    return B(t, r, u, s);
  }, [s]), w = (t, r) => {
    var e = b[t.attribute], a = m[t.attribute], n = {};
    return t.disabled || (n.onDataChange = C), a && (n.constraint = a), e && (n.eventHandler = e), n;
  };
  var D = ((l = o.options) == null ? void 0 : l.columns) || 1, I = { columns: D };
  return /* @__PURE__ */ v("div", { className: "palmyra-form-field-container-wrapper", children: o.fields.map((t, r) => /* @__PURE__ */ v(
    F,
    {
      index: r,
      field: t,
      label: t.title,
      options: I,
      children: H(t)
    },
    t.attribute
  )) });
});
function L(c) {
  if (!c.formContext)
    throw new Error('Form Context not available, if this the form page, set the type as "form" in the definition');
}
export {
  A as default
};
