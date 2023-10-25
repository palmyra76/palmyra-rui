import { jsx as r } from "react/jsx-runtime";
import n from "./SectionRendererChart.js";
import o from "./SectionRendererEditForm.js";
import i from "./SectionRendererGrid.js";
import m from "./SectionRendererInvalid.js";
import c from "./SectionRendererViewForm.js";
const l = (e) => {
  const { layout: t } = e;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ r(o, { ...e });
    case "view":
      return /* @__PURE__ */ r(c, { ...e });
    case "grid":
      return /* @__PURE__ */ r(i, { ...e });
    case "chart":
      return /* @__PURE__ */ r(n, { ...e });
    default:
      return /* @__PURE__ */ r(m, { ...e });
  }
};
export {
  l as default
};
