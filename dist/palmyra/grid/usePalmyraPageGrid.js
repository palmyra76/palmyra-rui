import { useNavigate as d } from "react-router-dom";
import { useEffect as g } from "react";
import { topic as t } from "../core/topic.js";
import { StringFormat as a } from "../utils/StringUtil.js";
const P = (e) => {
  const n = d(), o = e.pageName + "/viewPage", c = e.pageName + "/newPage", r = {
    fields: e.fields,
    quickSearch: "",
    storeOptions: {
      endPoint: e.endPoint
    },
    actionOptions: {
      onClick: {
        topic: o
      },
      newRecord: {
        topic: c
      }
    }
  };
  return g(() => {
    var s = t.subscribe(o, (u, i) => {
      i.id = i[e.idKey], n(a("view/{id}", i));
    }), m = t.subscribe(c, (u, i) => {
      n(a("new", i));
    });
    return () => {
      t.unsubscribe(s), t.unsubscribe(m);
    };
  }, [e.idKey]), { layout: r };
};
export {
  P as usePalmyraPageGrid
};
