import { forwardRef as p, useContext as d, useRef as u, useImperativeHandle as m } from "react";
import { FieldManagerContext as g } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import { useServerLookup as v } from "./useServerLookup.js";
const R = p(function(o, n) {
  const i = d(g), s = n || u(null), t = i(o, "serverlookup", s), a = t.error, { mutateOptions: c, setMutateOptions: l } = t, r = u(null), { getServerLookup: f } = v(o, c, t);
  return m(s, () => ({
    focus() {
      r.current.focus();
    },
    isValid() {
      return !a.status;
    },
    assignAttribute(e) {
      r.current.assignAttribute(e);
    },
    setFilter(e) {
    },
    clear() {
    },
    setVisible(e) {
      l({ visible: e });
    }
  }), []), f(r);
});
export {
  R as default
};
