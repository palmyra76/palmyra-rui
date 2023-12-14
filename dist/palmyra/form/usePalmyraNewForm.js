import { useState as y, useRef as v, useEffect as S } from "react";
import { NoopFormListener as F } from "./interface.js";
const h = (t) => {
  const c = t.storeFactory, [m, s] = y(t.initialData == null ? null : t.initialData), a = v(null), u = t.idKey || "id", f = t.formListener || F, d = (e, r) => typeof e == "string" ? e + "/{" + r + "}" : e;
  return S(() => {
    const e = t.id;
    if (e) {
      const n = u;
      var r = d(t.endPoint, n);
      const o = c.getFormStore({}, r, n);
      var i = {
        options: {
          [n]: e
        }
      };
      o.get(i).then((l) => {
        s(l);
      });
    }
  }, [t.id]), { data: m, saveData: () => {
    if (a && a.current) {
      const r = t.idKey;
      var e = t.endPoint;
      const i = c.getFormStore({}, e, r), n = a.current.getData();
      i.post(n).then((o) => {
        s(o), f.onSaveSuccess(o);
      }).catch((o) => {
        f.onSaveFailure(o);
      });
    }
  }, formRef: a };
};
export {
  h as usePalmyraNewForm
};
