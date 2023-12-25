import { useState as v, useRef as S, useEffect as y } from "react";
import { NoopFormListener as F } from "./interface.js";
const h = (t) => {
  const u = t.storeFactory, [m, f] = v(t.initialData == null ? null : t.initialData), a = S(null), d = t.idKey || "id", i = t.formListener || F, l = (e, o) => typeof e == "string" ? e + "/{" + o + "}" : e;
  return y(() => {
    const e = t.id;
    if (e) {
      const n = d;
      var o = l(t.endPoint, n);
      const c = u.getFormStore({}, o, n);
      var s = {
        options: {
          [n]: e
        }
      };
      c.get(s).then((r) => {
        f(r);
      });
    }
  }, [t.id]), { data: m, saveData: (e) => {
    if (e || a && a.current) {
      const s = t.idKey;
      var o = t.endPoint;
      const n = u.getFormStore({}, o, s), c = e || a.current.getData();
      return n.post(c).then((r) => (f(r), i.onSaveSuccess && i.onSaveSuccess(r), r)).catch((r) => (i.onSaveFailure && i.onSaveFailure(r), r));
    } else
      return Promise.reject("invalid data");
  }, formRef: a };
};
export {
  h as usePalmyraNewForm
};
