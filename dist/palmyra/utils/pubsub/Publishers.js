import { mergeDeep as g } from "../index.js";
import { topic as t } from "./topic.js";
import { StringFormat as u } from "../StringUtil.js";
function b(e, l) {
  var r = {};
  const o = g({}, l);
  var c = e == null ? void 0 : e.onClick, m = e == null ? void 0 : e.newRecord;
  return c && (r.onClick = f(c, o)), m && (r.onNewClick = f(m, o)), r;
}
function f(e, l) {
  const r = e.messageFormat, o = e.topic;
  return function(c) {
    const m = g({}, l, c), s = u(o, m);
    if (r) {
      const i = u(r, m);
      t.publish(s, i);
    } else
      t.publish(s, m);
  };
}
export {
  b as getActionPublishers
};
