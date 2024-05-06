import { useRef as c } from "react";
const f = (i) => {
  const o = i.gridRef || c(), n = (e, t) => {
    t ? o.current.setFilter((r) => ({ ...r, [e]: t })) : o.current.setFilter((r) => (delete r[e], { ...r }));
  };
  return { lookupFilter: {
    onChange: function(e, t) {
      n(e, t == null ? void 0 : t.id);
    }
  }, textFilter: {
    onChange: function(e, t) {
      n(e, "*" + t + "*");
    }
  }, optionFilter: {
    onChange: function(e, t) {
      n(e, t);
    }
  } };
};
export {
  f as useQueryFilter
};
