import { useState as f, useEffect as l } from "react";
const g = (t) => {
  const r = t.storeFactory, [n, i] = f(null), s = t.idKey || "id", a = (e, o) => typeof e == "string" && t.idKey != null ? e + "/{" + o + "}" : e;
  return l(() => {
    const e = t.id, o = s;
    var c = a(t.endPoint, o);
    const d = r.getFormStore({}, c, o);
    var u = {
      options: {
        [o]: e
      }
    };
    d.get(u).then((y) => {
      i(y);
    });
  }, [t.id]), { data: n };
};
export {
  g as usePalmyraViewForm
};
