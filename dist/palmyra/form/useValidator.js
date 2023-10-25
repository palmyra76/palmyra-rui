import { useState as C } from "react";
import { delay as E } from "../utils/index.js";
const k = (i, o, e) => e || "";
function A(i) {
  const { runtime: o, fieldDef: e, value: D } = i, { eventHandler: a, onDataChange: l, constraint: n } = o || {}, [f, h] = C(k(o, e, D)), [r, c] = C({ status: !1, message: "" }), g = (s) => {
    h(s || ""), E(() => {
      m(s), l && l({ [e.attribute]: s });
    });
  }, V = (s) => {
    if (n && n instanceof Function) {
      const t = n(s);
      if (!t.status)
        return t;
    }
    return { status: !0, message: "" };
  }, d = (s) => {
    u({
      status: !s.status,
      message: s.message
    });
  }, m = (s) => {
    const t = V(s);
    t.status && a != null && a.asyncValid ? (y(), a.asyncValid(s, b, u)) : d(t);
  }, b = (s) => {
    console.log(s);
  }, p = () => {
    r.message != "" && c({
      status: r.status,
      message: ""
    });
  }, y = () => {
    u({
      status: !1,
      message: ""
    });
  }, u = (s) => {
    s.status ? c(s) : c({
      status: !1,
      message: ""
    });
  };
  return { data: f, setData: g, error: r, fieldCallbacks: { onBlur: () => {
    m(f);
  }, onFocus: () => {
    p();
  }, onChange: (s) => {
    g(s.target.value);
  } } };
}
export {
  A as default
};
