import a from "./GenerateColors.js";
const g = (r, o) => {
  r.backgroundColor = (o == null ? void 0 : o.backgroundColor) || a(1)[0], r.borderColor = (o == null ? void 0 : o.borderColor) || a(1)[0], o && (n(o, r, "radius"), n(o, r, "borderWidth"), n(o, r, "hoverRadius"));
}, n = (r, o, i) => {
  r[i] && (o[i] = r[i]);
};
export {
  g as assignStyles
};
