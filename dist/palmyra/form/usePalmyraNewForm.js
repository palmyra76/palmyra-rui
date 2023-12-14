import { useState as y, useRef as v, useEffect as S } from "react";
import { NoopFormListener as F } from "./interface.js";
const h = (t) => {
  const s = t.storeFactory, [u, f] = y(t.initialData == null ? null : t.initialData), a = v(null), d = t.idKey || "id", m = t.formListener || F, l = (e, r) => typeof e == "string" ? e + "/{" + r + "}" : e;
  return S(() => {
    const e = t.id;
    if (e) {
      const n = d;
      var r = l(t.endPoint, n);
      const c = s.getFormStore({}, r, n);
      var i = {
        options: {
          [n]: e
        }
      };
      c.get(i).then((o) => {
        f(o);
      });
    }
  }, [t.id]), { data: u, saveData: (e) => {
    if (e || a && a.current) {
      const i = t.idKey;
      var r = t.endPoint;
      const n = s.getFormStore({}, r, i), c = e || a.current.getData();
      n.post(c).then((o) => {
        f(o), m.onSaveSuccess(o);
      }).catch((o) => {
        m.onSaveFailure(o);
      });
    }
  }, formRef: a };
};
export {
  h as usePalmyraNewForm
};
