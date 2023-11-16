import { useNavigate as g } from "react-router-dom";
import { useEffect as d } from "react";
import { topic as o } from "../core/topic.js";
import { StringFormat as r } from "../utils/StringUtil.js";
const v = (e) => {
  const n = g(), t = e.pageName + "/viewPage", c = e.pageName + "/newPage", a = {
    fields: e.fields,
    quickSearch: "",
    storeOptions: {
      endPoint: e.endPoint
    },
    actionOptions: {
      onClick: {
        topic: t
      },
      newRecord: {
        topic: c
      }
    }
  };
  return d(() => {
    var s = o.subscribe(t, (u, i) => {
      i.id = i[e.idKey], n(r("view/{id}", i));
    }), m = o.subscribe(c, (u, i) => {
      console.log(i), n(r("new", i));
    });
    return () => {
      o.unsubscribe(s), o.unsubscribe(m);
    };
  }, [e.idKey]), { layout: a };
};
export {
  v as usePalmyraPageGrid
};
