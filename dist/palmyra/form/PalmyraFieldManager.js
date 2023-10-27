import { useState as d, useEffect as M } from "react";
import { delay as k } from "../utils/index.js";
import { getFormatConverter as x } from "../utils/converter/FormatterFactory.js";
const A = (o, a) => a || "";
function z(o, a, r, u, e) {
  const m = x(o), [n, E] = d(m.parse(A(o, a))), [c, i] = d({ status: !1, message: "" }), g = (t, s) => {
    E(t || ""), s && k(() => {
      if (p(t), r) {
        const C = m.format(t);
        var F = o.attribute;
        const b = f(t);
        r({ [F]: C }, { [F]: b.status });
      }
    });
  }, f = (t) => {
    if (u && u instanceof Function) {
      const s = u(t);
      if (!s.status)
        return s;
    }
    return { status: !0, message: "" };
  }, V = (t) => {
    l({
      status: !t.status,
      message: t.message
    });
  }, p = (t) => {
    const s = f(t);
    s.status && e != null && e.asyncValid ? (y(), e.asyncValid(t, S, l)) : V(s);
  }, S = (t) => {
    console.log(t);
  }, h = () => {
    c.message != "" && i({
      status: c.status,
      message: ""
    });
  }, y = () => {
    l({
      status: !1,
      message: ""
    });
  }, l = (t) => {
    t.status ? i(t) : i({
      status: !1,
      message: ""
    });
  }, B = { onBlur: () => {
    p(n);
  }, onFocus: () => {
    h();
  }, onValueChange: (t) => {
    g(t, !0);
  } };
  return M(() => {
    var t = o.attribute;
    const s = f(n);
    r({}, { [t]: s.status });
  }, []), { data: n, setData: g, error: c, eventListeners: B };
}
function G(o) {
  return {
    onBlur: o.onBlur,
    onFocus: o.onFocus,
    onChange: (a) => o.onValueChange(a.target.value)
  };
}
export {
  G as decorateListenersForInput,
  z as getEventListeners
};
