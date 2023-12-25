import { useState as v, useRef as S, useEffect as y } from "react";
import { NoopFormListener as F } from "./interface.js";
const h = (e) => {
  const u = e.storeFactory, [f, m] = v(null), n = S(null), d = e.idKey || "id", s = e.formListener || F, l = (t, o) => typeof t == "string" ? t + "/{" + o + "}" : t;
  return y(() => {
    const t = e.id, o = d;
    var a = l(e.endPoint, o);
    const i = u.getFormStore({}, a, o);
    var c = {
      options: {
        [o]: t
      }
    };
    i.get(c).then((r) => {
      m(r);
    });
  }, [e.id]), { data: f, saveData: (t) => {
    if (t || n && n.current) {
      const a = e.idKey || "id";
      var o = e.endPoint;
      const i = u.getFormStore({}, o, a), c = t || n.current.getData(a);
      i.post(c).then((r) => (m(r), s.onSaveSuccess && s.onSaveSuccess(r), Promise.resolve(r))).catch((r) => (s.onSaveFailure && s.onSaveFailure(r), Promise.reject(r)));
    } else
      return Promise.reject("invalid data");
  }, formRef: n };
};
export {
  h as usePalmyraEditForm
};
