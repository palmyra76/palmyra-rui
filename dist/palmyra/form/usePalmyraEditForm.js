import { useState as S, useRef as l, useEffect as v } from "react";
import { NoopFormListener as F } from "./interface.js";
const h = (t) => {
  const c = t.storeFactory, [f, i] = S(null), n = l(null), m = t.idKey || "id", d = t.formListener || F, u = (o, e) => typeof o == "string" ? o + "/{" + e + "}" : o;
  return v(() => {
    const o = t.id, e = m;
    var a = u(t.endPoint, e);
    const s = c.getFormStore({}, a, e);
    var r = {
      options: {
        [e]: o
      }
    };
    s.get(r).then((y) => {
      i(y);
    });
  }, [t.id]), { data: f, saveData: () => {
    if (n && n.current) {
      const e = t.idKey || "id";
      var o = t.endPoint;
      const a = c.getFormStore({}, o, e), s = n.current.getData(e);
      a.post(s).then((r) => {
        i(r), d.onSaveSuccess(r);
      }).catch((r) => {
        d.onSaveFailure(r);
      });
    }
  }, formRef: n };
};
export {
  h as usePalmyraEditForm
};
