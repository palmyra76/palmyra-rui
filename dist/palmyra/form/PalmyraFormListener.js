import { useState as a, useContext as g } from "react";
import { FormHelperContext as y } from "../layout/flexiLayout/FlexiLayoutContext.js";
function F(r, o, n) {
  return () => {
    r.every((e) => {
      const s = n[e];
      if (console.log(e), s == null || s == null) {
        if (o) {
          const t = o(e);
          console.log(t), t && t.focus ? t.focus() : console.warn("cannot focus on " + e, t);
        }
        return !1;
      }
      return !0;
    });
  };
}
const C = (r, o) => {
  const [n, e] = a({}), [s, t] = a(!1), f = g(y), i = o || f.getFieldRef, m = o ? F(r, i, n) : () => {
    console.warn("getFieldRef not provided,  empty fields will not be focused");
  };
  return { eventListener: {
    onChange: function(p, v) {
      e((c) => (c[p] = v, c));
      const u = r.every((c) => {
        const l = n[c];
        return l != null && l != null;
      });
      s != u && t(u);
    }
  }, data: n, status: s, focusEmptyField: m };
};
export {
  C as getDataListener
};
