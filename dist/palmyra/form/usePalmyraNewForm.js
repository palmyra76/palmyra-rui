import { useState as y, useRef as g, useEffect as l } from "react";
const S = (e) => {
  const c = e.storeFactory, [d, i] = y(null), n = g(null), f = e.idKey || "id", u = (t, o) => typeof t == "string" ? t + "/{" + o + "}" : t;
  return l(() => {
    const t = e.id;
    if (t) {
      const r = f;
      var o = u(e.endPoint, r);
      const s = c.getFormStore({}, o, r);
      var a = {
        options: {
          [r]: t
        }
      };
      s.get(a).then((m) => {
        i(m);
      });
    }
  }, [e.id]), { data: d, saveData: () => {
    if (n && n.current) {
      const o = e.idKey;
      var t = e.endPoint;
      const a = c.getFormStore({}, t, o), r = n.current.getData();
      a.post(r).then((s) => {
        i(s);
      });
    }
  }, formRef: n };
};
export {
  S as usePalmyraNewForm
};
