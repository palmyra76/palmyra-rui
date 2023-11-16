import { jsx as r } from "react/jsx-runtime";
import d from "./FormEditRenderer.js";
import l from "../container/SectionContainer.js";
const f = (t) => {
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
      columns: e.columns,
      hideTitle: e.hideTitle,
      title: e.title,
      name: e.name,
      children: m(e.formLayout)
    }
  );
};
export {
  f as default
};
