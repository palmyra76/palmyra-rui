import { topic as c } from "./topic.js";
import { useState as i, useEffect as l } from "react";
function f(e, u) {
  c.publish("_keyValue-" + e, u);
}
function p(e, u) {
  const [n, s] = i(u), r = (t, o) => {
    s(o);
  };
  return l(() => {
    var t = c.subscribe("_keyValue-" + e, r);
    return () => {
      c.unsubscribe(t);
    };
  }, []), [n, s];
}
function x(e, u) {
  c.publish("_execute-" + e, u);
}
function _(e, u) {
  const [n] = i(u), s = (t, o) => {
    n(o);
  }, r = (t) => {
    n(t);
  };
  return l(() => {
    var t = c.subscribe("_execute-" + e, s);
    return () => {
      c.unsubscribe(t);
    };
  }, []), r;
}
export {
  x as execute,
  f as setKeyValue,
  _ as useExecute,
  p as useKeyValue
};
