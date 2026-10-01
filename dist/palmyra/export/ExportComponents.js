import { h, E as f } from "../../chunks/jspdf.es.min.js";
const s = {
  PNG: "image/png",
  JPEG: "image/jpeg",
  PDF: "application/pdf"
}, w = {
  fileName: "component.png",
  type: s.PNG,
  html2CanvasOptions: {}
}, P = {
  fileName: "component.jpg",
  type: s.JPEG,
  html2CanvasOptions: {}
}, g = {
  fileName: "component.pdf",
  type: s.PDF,
  html2CanvasOptions: {},
  pdfOptions: {}
}, u = (t, e) => {
  const o = document.createElement("a");
  typeof o.download == "string" ? (o.href = t, o.download = e, document.body.appendChild(o), o.click(), document.body.removeChild(o)) : window.open(t);
}, D = (t, e) => {
  const { w: o, h: i, orientation: m, unit: p = "mm", pdfFormat: c } = e, n = o || t.width, r = i || t.height, a = m || n > r ? "l" : "p", d = c || "a4";
  return new f(a, p, d);
}, l = (t, e) => {
  const { fileName: o, type: i, html2CanvasOptions: m, pdfOptions: p } = e;
  if (!t.current)
    throw new Error("'node' must be a RefObject");
  if (!(t.current instanceof HTMLElement))
    throw new Error("'node' must reference a DOM element");
  const c = t.current;
  return h(c, {
    scrollY: -window.scrollY,
    useCORS: !0,
    ...m
  }).then((n) => {
    if (console.log(n.width), i === s.PDF) {
      const r = D(n, p);
      r.addImage(
        n.toDataURL(s.PNG, 1),
        "PNG",
        p.x || 0,
        p.y || 0,
        p.w || n.width,
        p.h || n.height
      ), r.save(o);
    } else
      u(n.toDataURL(i, 1), o);
  });
}, C = (t, e = {}) => l(t, { ...w, ...e }), F = (t, e = {}) => l(t, { ...P, ...e }), G = (t, e = {}) => l(t, { ...g, ...e });
export {
  F as exportComponentAsJPEG,
  G as exportComponentAsPDF,
  C as exportComponentAsPNG
};
