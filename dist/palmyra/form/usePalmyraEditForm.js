import { useState as S, useRef as l, useEffect as v } from "react";
import { NoopFormListener as F } from "./interface.js";
const h = (t) => {
  const i = t.storeFactory, [u, f] = S(null), n = l(null), d = t.idKey || "id", m = t.formListener || F, y = (e, o) => typeof e == "string" ? e + "/{" + o + "}" : e;
  return v(() => {
    const e = t.id, o = d;
    var a = y(t.endPoint, o);
    const s = i.getFormStore({}, a, o);
    var c = {
      options: {
        [o]: e
      }
    };
    s.get(c).then((r) => {
      f(r);
    });
  }, [t.id]), { data: u, saveData: (e) => {
    if (e || n && n.current) {
      const a = t.idKey || "id";
      var o = t.endPoint;
      const s = i.getFormStore({}, o, a), c = e || n.current.getData(a);
      s.post(c).then((r) => {
        f(r), m.onSaveSuccess(r);
      }).catch((r) => {
        m.onSaveFailure(r);
      });
    }
  }, formRef: n };
};
export {
  h as usePalmyraEditForm
};
