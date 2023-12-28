import { useState as y, useRef as F, useEffect as D } from "react";
import { NoopFormListener as g } from "./interface.js";
const L = (e) => {
  const d = e.storeFactory, [S, m] = y(null), s = F(null), P = e.idKey || "id", o = e.formListener || g, f = (t, r) => typeof t == "string" ? t + "/{" + r + "}" : t;
  return D(() => {
    const t = e.id, r = P;
    var i = f(e.endPoint, r);
    const n = d.getFormStore({}, i, r);
    var c = {
      endPointVars: {
        [r]: t
      }
    };
    n.get(c).then((u) => {
      m(u);
    });
  }, [e.id]), { data: S, saveData: (t) => {
    if (t || s && s.current) {
      const n = e.idKey || "id";
      var r = f(e.endPoint, n);
      const c = d.getFormStore({}, r, n), u = e.id, v = t || s.current.getData(n), l = o.preProcessSaveData ? o.preProcessSaveData(v) : v;
      var i = {
        endPointVars: {
          [n]: u
        }
      };
      return c.put(l, i).then((a) => (m(a), o.onSaveSuccess && o.onSaveSuccess(a), Promise.resolve(a))).catch((a) => (o.onSaveFailure && o.onSaveFailure(a), Promise.reject(a)));
    } else
      return Promise.reject("invalid data");
  }, formRef: s };
};
export {
  L as usePalmyraEditForm
};
