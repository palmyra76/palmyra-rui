import { jsx as p, Fragment as m } from "react/jsx-runtime";
import { forwardRef as d, useContext as g, useRef as i, useImperativeHandle as v } from "react";
import { FieldManagerContext as F } from "../../../layout/flexiLayout/FlexiLayoutContext.js";
import { useServerLookup as M } from "../useServerLookup.js";
const S = d(function(o, s) {
  const a = g(F), n = s || i(null), t = a(o, "serverlookup", n), l = t.error, { mutateOptions: u, setMutateOptions: c } = t, r = i(null), { getServerLookup: f } = M(o, u, t);
  return v(n, () => ({
    focus() {
      r.current.focus();
    },
    isValid() {
      return !l.status;
    },
    assignAttribute(e) {
      r.current.assignAttribute(e);
    },
    setFilter(e) {
    },
    clear() {
    },
    setVisible(e) {
      c({ visible: e });
    }
  }), []), u.visible ? f(r) : /* @__PURE__ */ p(m, {});
});
export {
  S as default
};
