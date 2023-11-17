const c = (e) => {
  var t = [];
  return e.filter((r) => r.searchable).map((r, n) => {
    t.push(a(r));
  }), t;
}, a = (e) => {
  var t = {
    attribute: e.attribute,
    label: e.title,
    required: !1,
    variant: "standard",
    type: s(e.type)
  };
  return t;
}, s = (e) => {
  switch (e) {
    case "select":
      return "multiSelect";
    case "radio":
      return "checkbox";
    case "date":
      return "dateRange";
    default:
      return e;
  }
};
export {
  c as convertToField
};
