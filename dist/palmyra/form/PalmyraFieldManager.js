import { useState as g, useEffect as h } from "react";
import { delay as A } from "../utils/index.js";
import { getFormatConverter as I } from "../utils/converter/FormatterFactory.js";
const L = (o, a) => a || "";
function J(o, a, r, n, e) {
  const l = I(o), [y] = g(a), [u, V] = g(p(a)), [c, i] = g({ status: !1, message: "" });
  h(() => {
    y(a), V(p(a));
  }, [a]);
  function p(t) {
    return l.parse(L(o, t));
  }
  const F = (t, s) => {
    V(t || ""), s && A(() => {
      if (E(t), r) {
        const k = l.format(t);
        var S = o.attribute;
        const x = f(t);
        r({ [S]: k }, { [S]: x.status });
      }
    });
  }, f = (t) => {
    if (n && n instanceof Function) {
      const s = n(t);
      if (!s.status)
        return s;
    }
    return { status: !0, message: "" };
  }, d = (t) => {
    m({
      status: !t.status,
      message: t.message
    });
  }, E = (t) => {
    const s = f(t);
    s.status && e != null && e.asyncValid ? (b(), e.asyncValid(t, B, m)) : d(s);
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
    F(t, !0);
  } };
  return h(() => {
    var t = o.attribute;
    const s = f(u);
    r({}, { [t]: s.status });
  }, []), { data: u, setData: F, error: c, eventListeners: M };
}
function K(o) {
  return {
    onBlur: o.onBlur,
    onFocus: o.onFocus,
    onChange: (a) => o.onValueChange(a.target.value)
  };
}
export {
  K as decorateListenersForInput,
  J as getEventListeners
};
