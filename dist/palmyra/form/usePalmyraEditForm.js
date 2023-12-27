import { useState as l, useRef as P, useEffect as y } from "react";
import { NoopFormListener as F } from "./interface.js";
const E = (e) => {
  const m = e.storeFactory, [d, f] = l(null), a = P(null), v = e.idKey || "id", o = e.formListener || F, S = (t, r) => typeof t == "string" ? t + "/{" + r + "}" : t;
  return y(() => {
    const t = e.id, r = v;
    var s = S(e.endPoint, r);
    const i = m.getFormStore({}, s, r);
    var c = {
      options: {
        [r]: t
      }
    };
    i.get(c).then((u) => {
      f(u);
    });
  }, [e.id]), { data: d, saveData: (t) => {
    if (t || a && a.current) {
      const s = e.idKey || "id";
      var r = e.endPoint;
      const i = m.getFormStore({}, r, s), c = t || a.current.getData(s), u = o.preProcessSaveData ? o.preProcessSaveData(c) : c;
      return i.post(u).then((n) => (f(n), o.onSaveSuccess && o.onSaveSuccess(n), Promise.resolve(n))).catch((n) => (o.onSaveFailure && o.onSaveFailure(n), Promise.reject(n)));
    } else
      return Promise.reject("invalid data");
  }, formRef: a };
};
export {
  E as usePalmyraEditForm
};
