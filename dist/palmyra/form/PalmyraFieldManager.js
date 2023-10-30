import { useState as g, useEffect as h } from "react";
import { delay as A } from "../utils/index.js";
import { getFormatConverter as I } from "../utils/converter/FormatterFactory.js";
const L = (s, o) => o ?? s.defaultValue;
function K(s, o, r, n, e) {
  const l = I(s), [_, y] = g(o), [u, V] = g(d(o)), [c, i] = g({ status: !1, message: "" });
  h(() => {
    y(o), V(d(o));
  }, [o]);
  function d(t) {
    return l.parse(L(s, t));
  }
  const p = (t, a) => {
    V(t || ""), a && A(() => {
      if (E(t), r) {
        const k = l.format(t);
        var S = s.attribute;
        const x = f(t);
        r({ [S]: k }, { [S]: x.status });
      }
    });
  }, f = (t) => {
    if (n && n instanceof Function) {
      const a = n(t);
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
    console.log(t);
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
    E(u);
  }, onFocus: () => {
    C();
  }, onValueChange: (t) => {
    p(t, !0);
  } };
  return h(() => {
    var t = s.attribute;
    const a = f(u);
    r({}, { [t]: a.status });
  }, []), { data: u, setData: p, error: c, eventListeners: M };
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
