import { useState as S, useRef as l, useEffect as v } from "react";
import { NoopFormListener as F } from "./interface.js";
const h = (t) => {
  const c = t.storeFactory, [m, i] = S(null), a = l(null), u = t.idKey || "id", f = t.formListener || F, d = (e, r) => typeof e == "string" ? e + "/{" + r + "}" : e;
  return v(() => {
    const e = t.id;
    if (e) {
      const n = u;
      var r = d(t.endPoint, n);
      const o = c.getFormStore({}, r, n);
      var s = {
        options: {
          [n]: e
        }
      };
      o.get(s).then((y) => {
        i(y);
      });
    }
  }, [t.id]), { data: m, saveData: () => {
    if (a && a.current) {
      const r = t.idKey;
      var e = t.endPoint;
      const s = c.getFormStore({}, e, r), n = a.current.getData();
      s.post(n).then((o) => {
        i(o), f.onSaveSuccess(o);
      }).catch((o) => {
        f.onSaveFailure(o);
      });
    }
  }, formRef: a };
};
export {
  h as usePalmyraNewForm
};
