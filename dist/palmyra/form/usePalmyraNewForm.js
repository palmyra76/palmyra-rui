import { useState as S, useRef as y, useEffect as D } from "react";
import { NoopFormListener as P } from "./interface.js";
const K = (e) => {
  const f = e.storeFactory, [v, m] = S(e.initialData == null ? null : e.initialData), s = y(null), d = e.idKey || "id", r = e.formListener || P, l = (t, a) => typeof t == "string" ? t + "/{" + a + "}" : t;
  return D(() => {
    const t = e.id;
    if (t) {
      const n = d;
      var a = l(e.endPoint, n);
      const i = f.getFormStore({}, a, n);
      var c = {
        options: {
          [n]: t
        }
      };
      i.get(c).then((u) => {
        m(u);
      });
    }
  }, [e.id]), { data: v, saveData: (t) => {
    if (t || s && s.current) {
      const c = e.idKey;
      var a = e.endPoint;
      const n = f.getFormStore({}, a, c), i = t || s.current.getData(), u = r.preProcessSaveData ? r.preProcessSaveData(i) : i;
      return n.post(u).then((o) => (m(o), r.onSaveSuccess && r.onSaveSuccess(o), Promise.resolve(o))).catch((o) => (r.onSaveFailure && r.onSaveFailure(o), Promise.reject(o)));
    } else
      return Promise.reject("invalid data");
  }, formRef: s };
};
export {
  K as usePalmyraNewForm
};
