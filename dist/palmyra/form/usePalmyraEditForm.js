import { useState as y, useRef as g, useEffect as l } from "react";
const P = (t) => {
  const c = t.storeFactory, [d, i] = y(null), r = g(null), u = t.idKey || "id", f = (e, o) => typeof e == "string" ? e + "/{" + o + "}" : e;
  return l(() => {
    const e = t.id, o = u;
    var n = f(t.endPoint, o);
    const a = c.getFormStore({}, n, o);
    var s = {
      options: {
        [o]: e
      }
    };
    a.get(s).then((m) => {
      i(m);
    });
  }, [t.id]), { data: d, saveData: () => {
    if (r && r.current) {
      const o = t.idKey;
      var e = t.endPoint;
      const n = c.getFormStore({}, e, o), a = r.current.getData();
      n.post(a).then((s) => {
        i(s);
      });
    }
  }, formRef: r };
};
export {
  P as usePalmyraEditForm
};
