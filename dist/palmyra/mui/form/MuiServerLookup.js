import { forwardRef as p, useContext as d, useRef as n, useImperativeHandle as m } from "react";
import { FieldManagerContext as g } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import { useServerLookup as v } from "./useServerLookup.js";
const R = p(function(o, s) {
  const a = d(g), u = s || n(null), t = a(o, "serverlookup", u), i = t.error, { mutateOptions: l, setMutateOptions: c } = t, r = n(null), { getServerLookup: f } = v(o, l, t);
  return m(u, () => ({
    focus() {
      r.current.focus();
    },
    isValid() {
      return !i.status;
    },
    assignAttribute(e) {
      r.current.assignAttribute(e);
    },
    setFilter(e) {
    },
    setVisible(e) {
      c({ visible: e });
    },
    clear() {
      t.setData("");
    },
    setValue(e) {
      t.setData(e);
    }
  }), []), f(r);
});
export {
  R as default
};
