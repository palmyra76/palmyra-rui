import { jsxs as d, jsx as l } from "react/jsx-runtime";
const e = "palmyra-form-field-container", i = (a) => e + "-" + a + "colspan", r = (a) => {
  if (a.label) {
    var s = a.customContainerClass ? e + " " + a.customContainerClass : e;
    a.colspan && (s += " " + i(a.colspan));
    const m = a.customLabelClass ? "palmyra-form-field-label " + a.customLabelClass : "palmyra-form-field-label", t = a.customFieldClass ? "palmyra-form-field-data " + a.customFieldClass : "palmyra-form-field-data";
    return /* @__PURE__ */ d("div", { className: s, children: [
      /* @__PURE__ */ l("div", { className: m, children: a.label }),
      /* @__PURE__ */ l("div", { className: t, children: a.children })
    ] });
  } else {
    var c = a.customFieldClass ? "palmyra-form-field-data " + a.customFieldClass : "palmyra-form-field-data";
    return a.colspan && (c += " " + i(a.colspan)), /* @__PURE__ */ l("div", { className: c, children: a.children });
  }
};
export {
  r as default
};
