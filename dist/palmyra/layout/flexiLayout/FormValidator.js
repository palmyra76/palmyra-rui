import { getValidators as R } from "../../validator/DataValidator.js";
import { getValueByKey as b, setValueByKey as p } from "../../form/FormUtil.js";
import { useMemo as h, useRef as m, useEffect as C } from "react";
import { mergeDeep as N } from "../../utils/index.js";
const g = (t, r) => {
  var e = {};
  for (var a in r) {
    var n = r[a], s = b(a, t), c = n(s);
    e[a] = c.status;
  }
  return e;
}, O = (t) => {
  var r = {};
  for (var e in t) {
    var a = t[e];
    a.defaultValue != null && a.defaultValue != null && p(a.attribute, r, a.defaultValue);
  }
  return r;
}, S = (t) => {
  var r = {};
  if (t.tabs) {
    for (var e of t.tabs)
      if (e && e.sections) {
        for (var a of e.sections)
          if (a) {
            var n = a.formLayout;
            if (n && n.fields)
              for (var s of n.fields)
                r[s.attribute] = s;
          }
      }
  }
  return r;
}, D = (t) => JSON.parse(JSON.stringify(t));
function j(t, r) {
  const { layout: e, callbacks: a } = t, n = t.data, s = a.onFormValidChange, c = () => r && r == "new", { validationRules: v, defaultData: d } = h(
    () => {
      var o = S(e), i = R(o);
      if (c()) {
        var F = O(o);
        return { validationRules: i, defaultData: F };
      } else
        return { validationRules: i, defaultData: {} };
    },
    [e, r]
  ), u = m(D({ ...d, ...n })), f = m(!1);
  var l = g(u, v);
  C(() => {
    u.current = D({ ...d, ...n }), l = g(u.current, v), f.current = V(l);
  }, [n]);
  const y = (o) => {
    l = Object.assign({}, l, o.dataValid), N(u.current, o.data);
    const i = V(l);
    i != f.current && (f.current = i, s && s(i));
  }, V = (o) => {
    for (var i in o)
      if (o[i] == !1)
        return !1;
    return !0;
  };
  return { validationRules: v, data: u, onDataChange: y, isValid: f };
}
export {
  j as useFormValidator
};
