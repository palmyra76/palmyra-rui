const n = (e) => {
  var t = [];
  return e.filter((r) => r.searchable).map((r, s) => {
    t.push(a(r));
  }), t;
}, a = (e) => {
  var t = {
    attribute: e.attribute,
    label: e.label,
    required: !1,
    // variant: "standard",  TODO - REF 
    type: i(e.type)
  };
  return e.displayPattern && (t.displayPattern = e.displayPattern), e.serverPattern && (t.serverPattern = e.serverPattern), e.displayAttribute && (t.displayAttribute = e.displayAttribute), e.options && (t.options = e.options), t;
}, i = (e) => {
  switch (e) {
    case "select":
      return "multiSelect";
    case "radio":
      return "checkbox";
    case "date":
      return "dateRange";
    case "number":
      return "string";
    default:
      return e;
  }
};
export {
  n as convertToField
};
