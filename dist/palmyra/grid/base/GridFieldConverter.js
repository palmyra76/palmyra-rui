const n = (t) => {
  var e = [];
  return t.filter((r) => r.searchable).map((r, s) => {
    e.push(a(r));
  }), e;
}, a = (t) => {
  var e = {
    attribute: t.attribute,
    label: t.title,
    required: !1,
    variant: "standard",
    type: i(t.type)
  };
  return t.displayPattern && (e.displayPattern = t.displayPattern), t.serverPattern && (e.serverPattern = t.serverPattern), t.displayAttribute && (e.displayAttribute = t.displayAttribute), t.options && (e.options = t.options), e;
}, i = (t) => {
  switch (t) {
    case "select":
      return "multiSelect";
    case "radio":
      return "checkbox";
    case "date":
      return "dateRange";
    case "number":
      return "string";
    default:
      return t;
  }
};
export {
  n as convertToField
};
