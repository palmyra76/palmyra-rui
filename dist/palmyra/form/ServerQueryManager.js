import { useState as o, useEffect as L } from "react";
const R = (c) => {
  const { store: u, quickSearch: g, endPointVars: h } = c, [p, a] = o(null), [i, n] = o({}), [f, k] = o({}), s = c.pageSize ? c.pageSize : 15;
  var Q = s instanceof Array ? s : [s], S = s instanceof Array ? s[0] : s;
  const [r, m] = o({ limit: S, offset: 0 }), [v, l] = o(null), z = () => Math.round(r.offset / r.limit), P = () => r.limit, D = (t) => {
    m({ ...r, offset: t * S });
  }, O = (t) => {
    const e = t > 10 ? t : 15;
    m({ ...r, limit: e });
  };
  L(() => {
    y();
  }, [r, i, f]);
  const y = () => {
    const t = { filter: i, sortOrder: f, total: !0, endPointVars: h, ...r };
    if (u)
      try {
        u.query(t).then((e) => {
          l(e.result), a(e.total);
        }).catch((e) => {
          var F = e.response ? e.response : e;
          console.error("error while fetching", F), q();
        });
      } catch (e) {
        console.error(e), d();
      }
    else
      console.error("Store is not provided for the Grid"), d();
  }, d = () => {
    l([]), a(0);
  }, q = () => {
    l(void 0), a(null);
  };
  return {
    setQueryFilter: (t) => {
      t && Object.keys(t).length > 0 ? n(t) : n({});
    },
    setQuickSearch: (t) => {
      n(t ? { [g]: t } : {});
    },
    setSortColumns: (t) => {
      k(t);
    },
    refreshData: y,
    gotoPage: D,
    setPageSize: O,
    getPageNo: z,
    getLimit: P,
    filter: i,
    queryLimit: r,
    data: v,
    totalRecords: p,
    pageSizeOptions: Q
  };
};
export {
  R as default
};
