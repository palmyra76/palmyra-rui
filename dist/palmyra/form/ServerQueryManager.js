import { useState as c, useEffect as L } from "react";
import { useKeyValue as T } from "../utils/pubsub/PubSubHelper.js";
const V = (s) => {
  const { store: u, quickSearch: g, endPointVars: d } = s, k = s.fetchAll != !1, [Q, a] = c(null), [n, i] = s.filterTopic ? T(s.filterTopic, {}) : c({}), [f, p] = c({}), o = s.pageSize ? s.pageSize : 15;
  var v = o instanceof Array ? o : [o], m = o instanceof Array ? o[0] : o;
  const [r, y] = c({ limit: m, offset: 0 }), [z, l] = c(null), O = () => Math.round(r.offset / r.limit), P = () => r.limit, A = (e) => {
    y({ ...r, offset: e * m });
  }, D = (e) => {
    const t = e > 10 ? e : 15;
    y({ ...r, limit: t });
  }, F = () => n ? Object.keys(n).length == 0 : !1;
  L(() => {
    (k || !F()) && h();
  }, [r, n, f]);
  const h = () => {
    const e = { filter: n, sortOrder: f, total: !0, endPointVars: d, ...r };
    if (u)
      try {
        u.query(e).then((t) => {
          l(t.result), a(t.total);
        }).catch((t) => {
          var E = t.response ? t.response : t;
          console.error("error while fetching", E), q();
        });
      } catch (t) {
        console.error(t), S();
      }
    else
      console.error("Store is not provided for the Grid"), S();
  }, S = () => {
    l([]), a(0);
  }, q = () => {
    l(void 0), a(null);
  };
  return {
    setQueryFilter: (e) => {
      e && Object.keys(e).length > 0 ? i(e) : i({});
    },
    setQuickSearch: (e) => {
      i(e ? { [g]: e } : {});
    },
    setSortColumns: (e) => {
      p(e);
    },
    refreshData: h,
    gotoPage: A,
    setPageSize: D,
    getPageNo: O,
    getLimit: P,
    filter: n,
    queryLimit: r,
    data: z,
    totalRecords: Q,
    pageSizeOptions: v
  };
};
export {
  V as default
};
