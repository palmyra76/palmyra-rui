import { useState as S, useRef as l, useEffect as v } from "react";
import { NoopFormListener as F } from "./interface.js";
const h = (t) => {
  const c = t.storeFactory, [m, i] = S(null), n = l(null), u = t.idKey || "id", f = t.formListener || F, d = (e, o) => typeof e == "string" ? e + "/{" + o + "}" : e;
  return v(() => {
    const e = t.id, o = u;
    var a = d(t.endPoint, o);
    const s = c.getFormStore({}, a, o);
    var r = {
      options: {
        [o]: e
      }
    };
    s.get(r).then((y) => {
      i(y);
    });
  }, [t.id]), { data: m, saveData: () => {
    if (n && n.current) {
      const o = t.idKey;
      var e = t.endPoint;
      const a = c.getFormStore({}, e, o), s = n.current.getData();
      a.post(s).then((r) => {
        i(r), f.onSaveSuccess(r);
      }).catch((r) => {
        f.onSaveFailure(r);
      });
    }
  }, formRef: n };
};
export {
  h as usePalmyraEditForm
};
