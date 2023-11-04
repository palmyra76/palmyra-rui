const c = (e) => {
  var t = [];
  return e.map((r, u) => {
    t.push(a(r));
  }), t;
}, a = (e) => {
  var t = {
    attribute: e.attribute,
    title: e.title,
    required: !1,
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
