import { getValidators as D } from "../../validator/DataValidator.js";
import { getValueByKey as R, setValueByKey as y } from "../../form/FormUtil.js";
import { useMemo as F, useRef as b } from "react";
import { mergeDeep as v } from "../../utils/index.js";
const h = (e, a) => {
  var r = {};
  for (var t in a) {
    var i = a[t], l = R(t, e), s = i(l);
    r[t] = s.status;
  }
  return r;
}, p = (e) => {
  var a = {};
  for (var r in e) {
    var t = e[r];
    t.defaultValue != null && t.defaultValue != null && y(t.attribute, a, t.defaultValue);
  }
  return a;
}, w = (e) => {
  var a = {};
  if (e.tabs) {
    for (var r of e.tabs)
      if (r && r.sections) {
        for (var t of r.sections)
          if (t) {
            var i = t.formLayout;
            if (i && i.fields)
              for (var l of i.fields)
                a[l.attribute] = l;
          }
      }
  }
  return a;
};
function k(e, a) {
  const { layout: r, callbacks: t } = e;
  var i = v({}, e.data);
  const l = t.onFormValidChange, s = () => a && a == "new", { validationRules: d, defaultData: c } = a == "view" ? { validationRules: {}, defaultData: {} } : F(
    () => {
      var o = w(r), n = D(o);
      if (s()) {
        var g = p(o);
        return { validationRules: n, defaultData: g };
      } else
        return { validationRules: n, defaultData: {} };
    },
    [r, a]
  );
  s() && v(i, c);
  const u = b(!1);
  var f = h(i, d);
  const V = (o) => {
    f = Object.assign({}, f, o.dataValid), v(i, o.data);
    const n = m(f);
    n != u.current && (u.current = n, l && l(n));
  }, m = (o) => {
    for (var n in o)
      if (o[n] == !1)
        return !1;
    return !0;
  };
  return { validationRules: d, formData: i, onDataChange: V, isValid: u };
}
export {
  k as useFormValidator
};
