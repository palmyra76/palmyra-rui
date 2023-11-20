import { useState as n, useEffect as L } from "react";
const R = (c) => {
  const { store: u, quickSearch: g, endPointVars: d } = c, k = c.fetchAll != !1, [p, i] = n(null), [o, a] = n({}), [f, Q] = n({}), r = c.pageSize ? c.pageSize : 15;
  var v = r instanceof Array ? r : [r], h = r instanceof Array ? r[0] : r;
  const [s, y] = n({ limit: h, offset: 0 }), [z, l] = n(null), O = () => Math.round(s.offset / s.limit), P = () => s.limit, A = (t) => {
    y({ ...s, offset: t * h });
  }, D = (t) => {
    const e = t > 10 ? t : 15;
    y({ ...s, limit: e });
  }, F = () => o ? Object.keys(o).length == 0 : !1;
  L(() => {
    (k || !F()) && m();
  }, [s, o, f]);
  const m = () => {
    const t = { filter: o, sortOrder: f, total: !0, endPointVars: d, ...s };
    if (u)
      try {
        u.query(t).then((e) => {
          l(e.result), i(e.total);
        }).catch((e) => {
          var E = e.response ? e.response : e;
          console.error("error while fetching", E), q();
        });
      } catch (e) {
        console.error(e), S();
      }
    else
      console.error("Store is not provided for the Grid"), S();
  }, S = () => {
    l([]), i(0);
  }, q = () => {
    l(void 0), i(null);
  };
  return {
    setQueryFilter: (t) => {
      t && Object.keys(t).length > 0 ? a(t) : a({});
    },
    setQuickSearch: (t) => {
      a(t ? { [g]: t } : {});
    },
    setSortColumns: (t) => {
      Q(t);
    },
    refreshData: m,
    gotoPage: A,
    setPageSize: D,
    getPageNo: O,
    getLimit: P,
    filter: o,
    queryLimit: s,
    data: z,
    totalRecords: p,
    pageSizeOptions: v
  };
};
export {
  R as default
};
