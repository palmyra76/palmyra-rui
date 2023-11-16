import { jsx as r } from "react/jsx-runtime";
import d from "./FormEditRenderer.js";
import l from "../container/SectionContainer.js";
import c from "../container/FieldGroupContainer.js";
const h = (t) => {
  const { layout: e, context: o } = t;
  var n = e.Renderer || d, i = e.Container || l;
  const m = (a) => /* @__PURE__ */ r(
    n,
    {
      context: o,
      formLayout: a
    }
  );
  return /* @__PURE__ */ r(
    i,
    {
      hideTitle: e.hideTitle,
      title: e.title,
      name: e.name,
      children: /* @__PURE__ */ r(c, { columns: e.columns, children: m(e.formLayout) })
    }
  );
};
export {
  h as default
};
