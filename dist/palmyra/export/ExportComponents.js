import { h, E as f } from "../../chunks/jspdf.es.min.js";
import P from "react-dom";
const s = {
  PNG: "image/png",
  JPEG: "image/jpeg",
  PDF: "application/pdf"
}, w = {
  fileName: "component.png",
  type: s.PNG,
  html2CanvasOptions: {}
}, g = {
  fileName: "component.jpg",
  type: s.JPEG,
  html2CanvasOptions: {}
}, D = {
  fileName: "component.pdf",
  type: s.PDF,
  html2CanvasOptions: {},
  pdfOptions: {}
}, C = (t, o) => {
  const e = document.createElement("a");
  typeof e.download == "string" ? (e.href = t, e.download = o, document.body.appendChild(e), e.click(), document.body.removeChild(e)) : window.open(t);
}, N = (t, o) => {
  const { w: e, h: i, orientation: c, unit: p = "mm", pdfFormat: r } = o, n = e || t.width, m = i || t.height, l = c || n > m ? "l" : "p", a = r || "a4";
  return new f(l, p, a);
}, d = (t, o) => {
  const { fileName: e, type: i, html2CanvasOptions: c, pdfOptions: p } = o;
  if (!t.current)
    throw new Error("'node' must be a RefObject");
  const r = P.findDOMNode(t.current);
  return h(r, {
    scrollY: -window.scrollY,
    useCORS: !0,
    ...c
  }).then((n) => {
    if (console.log(n.width), i === s.PDF) {
      const m = N(n, p);
      m.addImage(
        n.toDataURL(s.PNG, 1),
        "PNG",
        p.x || 0,
        p.y || 0,
        p.w || n.width,
        p.h || n.height
      ), m.save(e);
    } else
      C(n.toDataURL(i, 1), e);
  });
}, F = (t, o = {}) => d(t, { ...w, ...o }), G = (t, o = {}) => d(t, { ...g, ...o }), O = (t, o = {}) => d(t, { ...D, ...o });
export {
  G as exportComponentAsJPEG,
  O as exportComponentAsPDF,
  F as exportComponentAsPNG
};
