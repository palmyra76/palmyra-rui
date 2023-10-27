import { useState as h } from "react";
import { delay as v } from "../utils/index.js";
import { getFormatConverter as S } from "../utils/converter/FormatterFactory.js";
const b = (e, a, o) => o || "";
function q(e) {
  const { runtime: a, fieldDef: o, value: C } = e, { eventHandler: n, onDataChange: f, constraint: r } = a || {}, l = S(e.fieldDef), [m, D] = h(l.parse(b(a, o, C))), [u, c] = h({ status: !1, message: "" }), g = (t, s) => {
    D(t || ""), s && v(() => {
      if (V(t), f) {
        const B = l.format(t);
        f({ [o.attribute]: B });
      }
    });
  }, F = (t) => {
    if (r && r instanceof Function) {
      const s = r(t);
      if (!s.status)
        return s;
    }
    return { status: !0, message: "" };
  }, d = (t) => {
    i({
      status: !t.status,
      message: t.message
    });
  }, V = (t) => {
    const s = F(t);
    s.status && n != null && n.asyncValid ? (y(), n.asyncValid(t, p, i)) : d(s);
  }, p = (t) => {
    console.log(t);
  }, E = () => {
    u.message != "" && c({
      status: u.status,
      message: ""
    });
  }, y = () => {
    i({
      status: !1,
      message: ""
    });
  }, i = (t) => {
    t.status ? c(t) : c({
      status: !1,
      message: ""
    });
  };
  return { data: m, setData: g, error: u, eventListeners: { onBlur: () => {
    V(m);
  }, onFocus: () => {
    E();
  }, onValueChange: (t) => {
    g(t, !0);
  } } };
}
function w(e) {
  return {
    onBlur: e.onBlur,
    onFocus: e.onFocus,
    onChange: (a) => e.onValueChange(a.target.value)
  };
}
export {
  w as decorateListenersForInput,
  q as getEventListeners
};
