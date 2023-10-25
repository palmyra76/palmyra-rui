import { mergeDeep as l } from "../utils/index.js";
import { topic as i } from "./topic.js";
import { StringFormat as n } from "../utils/StringUtil.js";
function b(r, o) {
  var e = {};
  const s = l({}, o);
  var t = r == null ? void 0 : r.onClick;
  return t && (e.onClick = f(t, s)), e;
}
function f(r, o) {
  const e = r.messageFormat, s = r.topic;
  return function(t) {
    const m = l({}, o, t), c = n(s, m);
    if (e) {
      const u = n(e, m);
      i.publish(c, u);
    } else
      i.publish(c, m);
  };
}
export {
  b as getActionPublishers
};
