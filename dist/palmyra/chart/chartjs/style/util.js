import n from "./GenerateColors.js";
const u = (o, r) => {
  o.backgroundColor = (r == null ? void 0 : r.backgroundColor) || n(1)[0], o.borderColor = (r == null ? void 0 : r.borderColor) || n(1)[0], o.hoverRadius = r == null ? void 0 : r.hoverRadius, o.radius = r == null ? void 0 : r.radius, o.hidden = r == null ? void 0 : r.hidden, r && (i(r, o, "radius"), i(r, o, "borderWidth"), i(r, o, "hoverRadius"), i(r, o, "radius"), i(r, o, "hidden"));
}, i = (o, r, a) => {
  o[a] && (r[a] = o[a]);
};
export {
  u as assignStyles
};
