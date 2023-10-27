import { getValidators as y } from "../../validator/DataValidator.js";
import { getValueByKey as b, setValueByKey as D } from "../../form/FormUtil.js";
import { useRef as h } from "react";
import { mergeDeep as V } from "../../utils/index.js";
const p = (t, r) => {
  var e = {};
  for (var a in r) {
    var i = r[a], n = b(a, t), o = i(n);
    e[a] = o.status;
  }
  return e;
}, w = (t) => {
  var r = {};
  for (var e in t) {
    var a = t[e];
    r[a.attribute] = !a.required;
  }
  return r;
}, C = (t) => {
  var r = {};
  for (var e in t) {
    var a = t[e];
    a.defaultValue != null && a.defaultValue != null && D(a.attribute, r, a.defaultValue);
  }
  return r;
}, B = (t) => {
  var r = {};
  if (t.tabs) {
    for (var e of t.tabs)
      if (e && e.sections) {
        for (var a of e.sections)
          if (a) {
            var i = a.formLayout;
            if (i && i.fields)
              for (var n of i.fields)
                r[n.attribute] = n;
          }
      }
  }
  return r;
};
function j(t, r) {
  const { layout: e, callbacks: a } = t;
  var i = V({}, t.data);
  const n = a.onFormValidChange, o = h(!1);
  var s = {}, l = {}, v = {};
  const d = () => r && r == "new";
  if (r != "view") {
    var c = B(e);
    l = y(c), d() ? (s = w(c), v = C(c)) : (s = p(i, l), v = {});
  }
  d() && V(i, v);
  const m = (u) => {
    s = Object.assign({}, s, u.dataValid), V(i, u.data);
    const f = g(s);
    f != o.current && (o.current = f, n && n(f));
  }, g = (u) => {
    for (var f in u)
      if (u[f] == !1)
        return !1;
    return !0;
  };
  return { validationRules: l, formData: i, onDataChange: m, isValid: o };
}
export {
  j as useFormValidator
};
