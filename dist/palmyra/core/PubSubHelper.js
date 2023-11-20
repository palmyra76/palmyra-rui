import { useState as c, useEffect as i } from "react";
import { topic as t } from "./topic.js";
function p(e, u) {
  t.publish("_keyValue-" + e, u);
}
function b(e, u) {
  const [o, r] = c(u), n = (s, a) => {
    r(a);
  };
  return i(() => {
    var s = t.subscribe("_keyValue-" + e, n);
    return () => {
      t.unsubscribe(s);
    };
  }, []), [o, r];
}
export {
  p as setKeyValue,
  b as useKeyValue
};
