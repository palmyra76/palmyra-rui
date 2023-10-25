const t = (e) => {
  switch (e) {
    case "string":
      return "string";
    case "integer":
    case "number":
    case "float":
    case "decimal":
      return "string";
    default:
      return "string";
  }
};
export {
  t as getFieldType
};
