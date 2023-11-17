import { useState as g, useEffect as h } from "react";
import { delay as x } from "../utils/index.js";
import { getFormatConverter as A } from "../utils/converter/FormatterFactory.js";
const I = (s, o) => o ?? (s.defaultValue || "");
function K(s, o, r, u, e) {
  const l = A(s), [L, y] = g(o), [n, V] = g(d(o)), [c, i] = g({ status: !1, message: "" });
  h(() => {
    y(o), V(d(o));
  }, [o]);
  function d(t) {
    return l.parse(I(s, t));
  }
  const p = (t, a) => {
    V(t || ""), a && x(() => {
      if (E(t), r) {
        const _ = l.format(t);
        var S = s.attribute;
        const k = f(t);
        r({ [S]: _ }, { [S]: k.status });
      }
    });
  }, f = (t) => {
    if (u && u instanceof Function) {
      const a = u(t);
      if (!a.status)
        return a;
    }
    return { status: !0, message: "" };
  }, F = (t) => {
    m({
      status: !t.status,
      message: t.message
    });
  }, E = (t) => {
    const a = f(t);
    a.status && e != null && e.asyncValid ? (b(), e.asyncValid(t, B, m)) : F(a);
  }, B = (t) => {
  }, C = () => {
    c.message != "" && i({
      status: c.status,
      message: ""
    });
  }, b = () => {
    m({
      status: !1,
      message: ""
    });
  }, m = (t) => {
    t.status ? i(t) : i({
      status: !1,
      message: ""
    });
  }, M = { onBlur: () => {
    E(n);
  }, onFocus: () => {
    C();
  }, onValueChange: (t) => {
    p(t, !0);
  } };
  return h(() => {
    var t = s.attribute;
    const a = f(n);
    r({}, { [t]: a.status });
  }, []), { data: n, setData: p, error: c, eventListeners: M };
}
function N(s) {
  return {
    onBlur: s.onBlur,
    onFocus: s.onFocus,
    onChange: (o) => s.onValueChange(o.target.value)
  };
}
export {
  N as decorateListenersForInput,
  K as getEventListeners
};
