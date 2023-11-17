import { jsxs as d, jsx as s } from "react/jsx-runtime";
const l = "palmyra-form-field-container", i = (a) => l + "-" + a + "colspan", r = (a) => {
  if (a.label) {
    var c = a.customContainerClass ? l + " " + a.customContainerClass : l;
    a.colspan && (c += " " + i(a.colspan));
    const m = a.customLabelClass ? "palmyra-form-field-label " + a.customLabelClass : "palmyra-form-field-label", t = a.customFieldClass ? "palmyra-form-field-data " + a.customFieldClass : "palmyra-form-field-data";
    return /* @__PURE__ */ d("div", { className: c, children: [
      /* @__PURE__ */ s("div", { className: m, children: a.label }),
      /* @__PURE__ */ s("div", { className: t, children: a.children })
    ] });
  } else {
    var e = l;
    return e += " " + (a.customFieldClass ? "palmyra-form-field-data " + a.customFieldClass : "palmyra-form-field-data"), a.colspan && (e += " " + i(a.colspan)), /* @__PURE__ */ s("div", { className: e, children: a.children });
  }
};
export {
  r as default
};
