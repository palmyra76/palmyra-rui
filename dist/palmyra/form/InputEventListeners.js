import { useState as h } from "react";
import { delay as B } from "../utils/index.js";
import { getFormatConverter as v } from "../utils/converter/FormatterFactory.js";
const S = (e, a, o) => o || "";
function j(e) {
  const { runtime: a, fieldDef: o, value: C } = e, { eventHandler: n, onDataChange: l, constraint: r } = a || {}, f = v(e.fieldDef), [m, D] = h(f.parse(S(a, o, C))), [u, c] = h({ status: !1, message: "" }), g = (t) => {
    D(t || ""), B(() => {
      if (V(t), l) {
        const s = f.format(t);
        l({ [o.attribute]: s });
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
    g(t);
  } } };
}
function q(e) {
  return {
    onBlur: e.onBlur,
    onFocus: e.onFocus,
    onChange: (a) => e.onValueChange(a.target.value)
  };
}
export {
  q as decorateListenersForInput,
  j as getEventListeners
};
