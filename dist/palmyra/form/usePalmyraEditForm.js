import { useState as l, useRef as v, useEffect as y } from "react";
import { NoopFormListener as F } from "./interface.js";
const h = (t) => {
  const u = t.storeFactory, [m, f] = l(null), n = v(null), d = t.idKey || "id", a = t.formListener || F, S = (e, o) => typeof e == "string" ? e + "/{" + o + "}" : e;
  return y(() => {
    const e = t.id, o = d;
    var s = S(t.endPoint, o);
    const i = u.getFormStore({}, s, o);
    var c = {
      options: {
        [o]: e
      }
    };
    i.get(c).then((r) => {
      f(r);
    });
  }, [t.id]), { data: m, saveData: (e) => {
    if (e || n && n.current) {
      const s = t.idKey || "id";
      var o = t.endPoint;
      const i = u.getFormStore({}, o, s), c = e || n.current.getData(s);
      i.post(c).then((r) => (f(r), a.onSaveSuccess && a.onSaveSuccess(r), r)).catch((r) => (a.onSaveFailure && a.onSaveFailure(r), r));
    } else
      return Promise.reject("invalid data");
  }, formRef: n };
};
export {
  h as usePalmyraEditForm
};
