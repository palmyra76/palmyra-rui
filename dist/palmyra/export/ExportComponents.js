import f from "html2canvas";
import h from "jspdf";
import P from "react-dom";
const s = {
  PNG: "image/png",
  JPEG: "image/jpeg",
  PDF: "application/pdf"
}, w = {
  fileName: "component.png",
  type: s.PNG,
  html2CanvasOptions: {}
}, D = {
  fileName: "component.jpg",
  type: s.JPEG,
  html2CanvasOptions: {}
}, g = {
  fileName: "component.pdf",
  type: s.PDF,
  html2CanvasOptions: {},
  pdfOptions: {}
}, C = (t, o) => {
  const e = document.createElement("a");
  typeof e.download == "string" ? (e.href = t, e.download = o, document.body.appendChild(e), e.click(), document.body.removeChild(e)) : window.open(t);
}, F = (t, o) => {
  const { w: e, h: i, orientation: r, unit: p = "mm", pdfFormat: c } = o, n = e || t.width, m = i || t.height, l = r || n > m ? "l" : "p", a = c || "a4";
  return new h(l, p, a);
}, d = (t, o) => {
  const { fileName: e, type: i, html2CanvasOptions: r, pdfOptions: p } = o;
  if (!t.current)
    throw new Error("'node' must be a RefObject");
  const c = P.findDOMNode(t.current);
  return f(c, {
    scrollY: -window.scrollY,
    useCORS: !0,
    ...r
  }).then((n) => {
    if (console.log(n.width), i === s.PDF) {
      const m = F(n, p);
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
}, O = (t, o = {}) => d(t, { ...w, ...o }), y = (t, o = {}) => d(t, { ...D, ...o }), E = (t, o = {}) => d(t, { ...g, ...o });
export {
  y as exportComponentAsJPEG,
  E as exportComponentAsPDF,
  O as exportComponentAsPNG
};
