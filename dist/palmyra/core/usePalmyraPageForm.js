import { useState as m, useRef as y, useEffect as P } from "react";
const v = (t) => {
  const c = t.storeFactory, [d, i] = m(null), o = y(null), u = t.idKey || "id";
  return P(() => {
    const n = t.id, e = u;
    var r = t.endPoint + "/{" + e + "}";
    const a = c.getFormStore({}, r, e);
    var s = {
      options: {
        [e]: n
      }
    };
    a.get(s).then((f) => {
      i(f);
    });
  }, [t.id]), { data: d, saveData: () => {
    if (o && o.current) {
      const e = t.idKey;
      var n = t.endPoint;
      const r = c.getFormStore({}, n, e), a = o.current.getData();
      r.post(a).then((s) => {
        i(s);
      });
    }
  }, formRef: o };
};
export {
  v as usePalmyraPageForm
};
